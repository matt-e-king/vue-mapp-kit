export default {
  props: {
    // TODO: add validation { content, open }
    popup: {
      type: Object,
      default: () => ({})
    }
  },

  watch: {
    booted (val) {
      if (val) {
        if (this.popup.content) {
          const ref = this.module.bindPopup(this.popup.content)
  
          if (this.popup.open) {
            ref.openPopup()
          }
        }
      }
    }
  }
}
