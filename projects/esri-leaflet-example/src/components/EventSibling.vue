<template>
  <div class="event-sibling">
    <h3>Sibling component listening to cluster clicks:</h3>
    <p>Count: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: 'event-sibling',

  data() {
    return {
      counter: 0
    }
  },

  created() {
    this.$mappKitBus.$on('clusterFeatureLayer-clustering-points-clusterclick', () => {
      this.counter++
    })

    console.log(this.$mappKitBus)
  }
}
</script>

<style scoped>

</style>