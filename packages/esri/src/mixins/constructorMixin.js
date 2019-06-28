import loaderMixin from './loaderMixin'

export default {
  mixins: [loaderMixin],

  props: {
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
          
          console.log(name, { ...this.properties, ...this.mergeProps })

          this.module[name] = this.noInstantiation
            ? module
            : new module({ ...this.properties, ...this.mergeProps })

          if (this.module[name].when) {
            this.module[name].when(() => {
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
      // noop
      // override in the component
    }
  },

  computed: {
    mergeProps() {
      // overide in the component
    }
  }
}