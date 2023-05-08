<template>
  <div class="event-sibling">
    <h3>Sibling component listening to polygon hovers (above):</h3>
    <p>
      <br />
      Passing prop <pre>enable-bus</pre> emits global <pre>$mappKitBus</pre> event. The event triggered is <pre>{mapId}</pre> <pre>{layerType}</pre> <pre>{eventType}</pre> joined by a - (dash):
      <pre>this.$mappKitBus.$on(`events-example-polygon-mouseover`, () => {})</pre>
    </p>
    <p>Count: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: 'EventSibling',

  data() {
    return {
      counter: 0
    }
  },

  created() {
    this.$mappKitBus.$on(`events-example-polygon-mouseover`, () => {
      this.counter++
    })

    console.log(this.$mappKitBus)
  }
}
</script>
