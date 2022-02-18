import { getModules } from '@/utils/esriLoader'
import MappKitBus from '@/buses'

export default {
  watch: {
    // TODO: this should move to a mixin
    'properties.visible'(val) {
      if (this.module[this.name].hasOwnProperty('visible')) {
        this.$set(this.module[this.name], 'visible', val)
      }
    }
  },

  props: {
    addTo: {
      type: Object
    },
    events: Array,
    enableBus: Boolean,
    properties: {
      type: Object,
      default: () => ({})
    }
  },
    
  data() {
    return {
      name: '',
      booted: false
    }
  },

  created() {
    const modules = this.moduleName ? [this.moduleName] : Object.keys(this.module)

    getModules(modules)
      .then(loadedModules => {
        modules.forEach((name, index) => {
          this.name = name
          const module = loadedModules[index]
          
          if (!this.module) {
            // if this.module does not exist on $data
            // set non-reactive version of it
            this.module = {}
          }

          this.module[name] = this.noInstantiation
            ? module
            : new module({ ...this.properties, ...this.mergeProps, ...this.mergePropsHook() })

          if (this.module[name].when) {
            this.module[name].when((l) => {
              this.bootRoutine()
            })
          } else {
            this.bootRoutine()
          }
        })
        
        this.setupEvents()
        this.addToHook()
        this.afterInitHook()
      })
  },

  methods: {
    bootRoutine() {
      this.booted = true
      this.afterLoadedHook()
    },
    afterLoadedHook() {
      this.$emit('ready', this.module[this.name])
      if (this.enableBus) {
        MappKitBus.$emit(`${this.name}${this.properties.id ? `-${this.properties.id}` : ''}-ready`, this.module[this.name])
      }
    },
    addToHook () {
      if (!this.addTo) {
        if (this.getMap && this.getMap()) {
          this.getMap().add(this.module[this.name])
        } else {
          console.warn('No parent collection found for :', this.name)
          console.warn('Override addToHook if no add is needed')
        }
      } else {
        this.addTo.add(this.module[this.name])
      }
    },
    /**
     * some esri classes require references to parent instance (e.g. map, mapview, graphicslayer)
     * to be passed as properties during constructions
     * this mergePropsHook allows individual components to set this without needed
     * the parent instance to be an observable property
     */
    mergePropsHook () { return {}},
    afterInitHook() {},
    setupEvents() {
      if (
        Array.isArray(this.events)
        && this.events.length
        && typeof this.module[this.name].on === 'function'
      ) {
        for (const key in this.events) {
          const eventType = this.events[key]
          
          this.module[this.name].on(eventType, (event) => {
            const payload = {
              event,
              source: this.module[this.name]
            }
            this.$emit(eventType, payload)

            if (this.enableBus) {
              MappKitBus.$emit(`${this.name}${this.properties.id ? `-${this.properties.id}` : ''}-${eventType}`, payload)
            }
          })
        }
      }
    },
    beforeDestroyHook() {
      // @todo this does not account for view.ui.remove
      if (this.addTo && typeof this.addTo.remove === 'function') this.addTo.remove(this.module[this.name])
      else if (this.parent && typeof this.parent.remove === 'function') this.parent.remove(this.module[this.name])
      else if (this.getMap && this.getMap()) this.getMap().remove(this.module[this.name])
      else if (this.getMapView && this.getMapView() && typeof this.getMapView().remove === 'function') this.getMapView().remove(this.module[this.name])
      else if (this.getMapView && this.getMapView() && typeof this.getMapView().graphics.remove === 'function') this.getMapView().graphics.remove(this.module[this.name])
      else if (this.getGraphicsLayer && this.getGraphicsLayer()) this.getGraphicsLayer().remove(this.module[this.name])
      else console.error('No parent to remove from for :', this.name)

      // TODO: seems sloppy
      this.$emit('remove', this.module[this.name])
    }
  },

  computed: {
    mergeProps() {
      // overide in the component
    }
  },

  beforeDestroy() {  
    this.beforeDestroyHook()
  }
}