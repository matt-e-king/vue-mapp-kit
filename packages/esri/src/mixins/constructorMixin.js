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
      .then(result => result)
      .then(loadedModules => {
        const moduleKeys = Object.keys(this.module)
        
        moduleKeys.forEach((name, index) => {
          const module = loadedModules[index]

          if (name == 'Map') console.log(this.properties)
          this.module[name] = new module({ ...this.properties, ...this.mergeProps })

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