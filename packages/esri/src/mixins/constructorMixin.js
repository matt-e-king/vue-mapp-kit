import loaderMixin from './loaderMixin'

export default {
  mixins: [loaderMixin],

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
    this.loaderInit()
      .then(loadedModules => {
        const moduleKeys = Object.keys(this.module)
        
        moduleKeys.forEach((name, index) => {
          this.name = name
          const module = loadedModules[index]
          
          // console.log(name, { ...this.properties, ...this.mergeProps })

          this.module[name] = this.noInstantiation
            ? module
            : new module({ ...this.properties, ...this.mergeProps })

          if (this.module[name].when) {
            this.module[name].when((l) => {
              this.bootRoutine()
            })
          } else {
            this.bootRoutine()
          }
        })
        
        this.setupEvents()
        // hook in after module is loaded
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
    },
    afterInitHook() {  
      if (!this.addTo) {
        // provided by EMap
        if (this.getMap && this.getMap()) this.getMap().add(this.module[this.name])
        else console.error('No parent collection found for :', this.name)
      } else {
        this.addTo.add(this.module[this.name])
      }
    },
    setupEvents() {
      if (
        Array.isArray(this.events)
        && this.events.length
        && typeof this.module[this.name].on === 'function'
      ) {
        for (const key in this.events) {
          const eventType = this.events[key]
          
          this.module[this.name].on(eventType, (event) => {
            this.$emit(eventType, {
              event,
              source: this.module[this.name]
            })
          })
        }
      }
    },
    beforeDestroyHook() {
      if (!this.addTo) {
        // provided by EMap
        if (this.getMap && this.getMap()) this.getMap().remove(this.module[this.name])
        else console.error('No parent to remove from for :', this.name)
      } else {
        this.addTo.remove(this.module[this.name])
      }

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