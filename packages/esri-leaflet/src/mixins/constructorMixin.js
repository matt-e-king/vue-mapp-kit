import * as esriLeaflet from 'esri-leaflet'
import { Bus as MappKitBus } from '@vue-mapp-kit/leaflet'

export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    events: {
      type: Array,
      default: () => ([])
    },
    enableBus: Boolean
  },

  data () {
    return {
      booted: false
    }
  },

  mounted () {
    this.createModule()
    this.setupEvents()
    this.addToHook()
    this.bootRoutine()
  },

  computed: {
    rootArgument () { return [] } // should be set by module component
  },

  methods: {
    createModule () {
      if (!this.moduleName) throw new Error('moduleName required to instantiate Leaflet object')
      if (!esriLeaflet[this.moduleName]) throw new Error(`esriLeaflet.${this.moduleName} is not a supported esri-leaflet class`)
  
      console.log(`Constructing ${this.moduleName}`)
  
      this.module = this.module || esriLeaflet[this.moduleName](...this.rootArgument, this.options) // setting outside of $data to make non-reactive
    },
    getParent () {
      if (
        this.getFeatureGroup && 
        this.getFeatureGroup()
      ) {
        console.log(`FeatureGroup is assigned parent for: ${this.moduleName}`)
        return this.getFeatureGroup()
      }

      if (
        this.getLayerGroup && 
        this.getLayerGroup()
      ) {
        console.log(`LayerGroup is assigned parent for: ${this.moduleName}`)
        return this.getLayerGroup()
      }

      if (
        this.getMap && 
        this.getMap()
      ) {
        console.log(`Map is assigned parent for: ${this.moduleName}`)
        return this.getMap()
      }
    },
    bootRoutine() {
      this.booted = true
      this.$emit('ready', this.module)
      if (this.enableBus) {
        MappKitBus.$emit(`${this.mapId}-${this.moduleName}-ready`, this.module)
      }
      this.afterLoadedHook()
    },
    setupEvents() {
      if (
        Array.isArray(this.events)
        && this.events.length
        && typeof this.module.on === 'function'
      ) {
        // loop through data.evetns array and register all events
        // only $emit on the MappKitBus if 'enable-bus = true'
        console.log(`Initializing events for: ${this.moduleName}`)
        this.events.forEach((event) => {
          this.module.on(event, (ev) => {
            this.$emit(event, { event: ev, module: this.module })
  
            if (this.enableBus) {
              console.log(`${this.mapId}-${this.moduleName}-${event}`)
              MappKitBus.$emit(`${this.mapId}-${this.moduleName}-${event}`, { event: ev, module: this.module })
            }
          })
        })
      }
    },
    addToHook () {
      const parent = this.getParent()

      if (
        parent &&
        this.module.addTo
      ) {
        this.module.addTo(parent)
      }
      // if (!this.addTo) {
      //   if (this.getMap && this.getMap()) {
      //     this.getMap().add(this.module[this.name])
      //   } else {
      //     console.warn('No parent collection found for :', this.name)
      //     console.warn('Override addToHook if no add is needed')
      //   }
      // } else {
      //   this.addTo.add(this.module[this.name])
      // }
    },
    afterLoadedHook () {}, // should be set by module component
    beforeDestroyHook () {} // should be set by module component
  },

  beforeDestroy () {
    if (
      this.module &&
      this.module.removeFrom &&
      this.getParent()
    ) {
      this.module.removeFrom(this.getParent())
    } else if (
      this.module &&
      typeof this.module.remove === 'function'
    ) {
      this.module.remove()
    }

    this.beforeDestroyHook()
  }
}