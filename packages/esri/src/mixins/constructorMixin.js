import MappKitBus from '../buses'

export default {
  watch: {
    // TODO: this should move to a mixin
    'properties.visible'(val) {
      if (this.module.hasOwnProperty('visible')) {
        this.$set(this.module, 'visible', val)
      }
    },
    'properties.opacity'(val) {
      if (this.module.hasOwnProperty('opacity')) {
        this.$set(this.module, 'opacity', val)
      }
    }
  },

  props: {
    addTo: {
      type: Object
    },
    events: Array,
    enableBus: Boolean,
    order: Number,
    properties: {
      type: Object,
      default: () => ({})
    }
  },
    
  data () {
    return {
      name: '',
      booted: false
    }
  },

  methods: {
    instantiate (esriClass) {
      if (!esriClass) {
        // if this.module does not exist on $data
        // set non-reactive version of it
        throw new Error('Esri class does not exists')
      }
  
      // setTimeout defers execution to help with some underlying race condition??
      setTimeout(() => {
        this.module = this.noInstantiation
          ? {}
          : new esriClass({ ...this.properties, ...this.mergeProps, ...this.mergePropsHook() })

        if (
          this.module.when &&
          !['WebMap'].includes(this.name)
        ) {
          // console.log(this.name, this.module)
          this.module.when(() => {
            // console.log(this.name, ' .when() has been executed')
            this.bootRoutine()
          }).catch((e) => {
            console.log(e)
          })
        } else {
          this.bootRoutine()
        }
    
        this.setupEvents()
        this.addToHook()
        this.afterInitHook()
      }, 0)
    },
    bootRoutine () {
      this.booted = true
      this.afterLoadedHook()
    },
    afterLoadedHook () {
      this.$emit('ready', this.module)
      if (this.enableBus) {
        MappKitBus.$emit(`${this.name}${this.properties.id ? `-${this.properties.id}` : ''}-ready`, this.module)
      }
    },
    addToHook () {
      if (!this.addTo) {
        if (this.getGroupLayer && this.getGroupLayer()) {
          this.getGroupLayer().add(this.module, this.order)
        } else if (this.getMap && this.getMap()) {
          this.getMap().add(this.module, this.order)
        } else {
          console.warn('No parent collection found for :', this.name)
          console.warn('Override addToHook if no add is needed')
        }
      } else {
        this.addTo.add(this.module)
      }
    },
    removeFromHook () {
      // @todo this does not account for view.ui.remove
      if (this.addTo && typeof this.addTo.remove === 'function') this.addTo.remove(this.module)
      else if (this.parent && typeof this.parent.remove === 'function') this.parent.remove(this.module)
      else if (this.getGroupLayer && this.getGroupLayer()) this.getGroupLayer().remove(this.module)
      else if (this.getGraphicsLayer && this.getGraphicsLayer()) this.getGraphicsLayer().remove(this.module)
      else if (this.getMap && this.getMap()) this.getMap().remove(this.module)
      else if (this.getMapView && this.getMapView() && typeof this.getMapView().remove === 'function') this.getMapView().remove(this.module)
      else if (this.getMapView && this.getMapView() && typeof this.getMapView().graphics.remove === 'function') this.getMapView().graphics.remove(this.module)
      else console.error('No parent to remove from for :', this.name)

      // TODO: seems sloppy
      this.$emit('remove', this.module)
    },
    /**
     * some esri classes require references to parent instance (e.g. map, mapview, graphicslayer)
     * to be passed as properties during constructions
     * this mergePropsHook allows individual components to set this without needed
     * the parent instance to be an observable property
     */
    mergePropsHook () { return {}},
    afterInitHook () {},
    setupEvents () {
      if (
        Array.isArray(this.events)
        && this.events.length
        && typeof this.module.on === 'function'
      ) {
        for (const key in this.events) {
          const eventType = this.events[key]
          
          this.module.on(eventType, (event) => {
            const payload = {
              event,
              source: this.module
            }
            this.$emit(eventType, payload)

            if (this.enableBus) {
              MappKitBus.$emit(`${this.name}${this.properties.id ? `-${this.properties.id}` : ''}-${eventType}`, payload)
            }
          })
        }
      }
    },
    beforeDestroyHook () {
      this.removeFromHook()
    }
  },

  computed: {
    mergeProps () {
      // overide in the component
    }
  },

  beforeDestroy () {  
    this.beforeDestroyHook()
  }
}