import { getModules } from '@/utils/esriLoader'

export default {
  data() {
    return {

    }
  },

  methods: {
    async loaderInit() {
      const modules = Object.keys(this.module)

      return await getModules(modules)
    }
  }
}