import loaderMixin from './loaderMixin'

export default {
  mixins: [loaderMixin],

  props: {
    addTo: {
      type: Object
    },
    properties: {
      type: Object,
      default: () => ({})
    }
  },
    
  data() {
    return {
      booted: false
    }
  },

  created() {
    this.loaderInit()
      .then(loadedModules => {
        const moduleKeys = Object.keys(this.module)
        
        moduleKeys.forEach((name, index) => {
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

    },
    afterInitHook() {
      for (let key in this.module) {
        if (key !== 'Map') {
          const addTo = this.addTo
  
          if (!addTo) {
            // provided by EMap
            if (this.getMap && this.getMap()) this.getMap().add(this.module[key])
            else console.error('No parent collection found for :', key)
          } else {
            addTo.add(this.module[key])
          }
        }
      }
    }
  },

  computed: {
    mergeProps() {
      // overide in the component
    }
  }
}