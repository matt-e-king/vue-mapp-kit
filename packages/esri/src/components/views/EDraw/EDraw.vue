<template>
  <e-graphic
    v-if="showGraphic"
    :key="graphicVersion"
    :properties="graphicProps"
  />
</template>

<script>
import EGraphic from '@/components/EGraphic/EGraphic'
import constructorMixin from '@/mixins/constructorMixin'
import injectMapViewMixin from '@/mixins/injectMapViewMixin'

export default {
  name: 'e-draw',

  mixins: [constructorMixin, injectMapViewMixin],

  components: {
    EGraphic
  },

  props: {
    action: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      default: () => ({ mode: 'click' })
    }
  },

  data() {
    return {
      graphicVersion: +(new Date()),
      showGraphic: false,
      graphicProps: {},
      moduleName: 'Draw'
    }
  },

  methods: {
    // override
    addToHook() {},
    mergePropsHook () {
      if (!this.getMapView()) console.error('[EDraw] no MapView')
      return { view: this.getMapView() }
    },
    afterInitHook () {
      const action = this.module.Draw.create(this.action, this.options)

      // fires when a vertex is added
      action.on('vertex-add', (evt) => {
        const { vertices = [] } = evt
        this.updateGraphicProps(vertices)
        console.log('vertex-add event')
        this.showGraphic = true
        this.$emit('vertex-add', evt)
      })

      // fires when the pointer moves
      action.on('cursor-update', (evt) => {
        // console.log('cursor-update event')
        // this.$emit('cursor-update', evt)
      })

      // fires when the drawing is completed
      action.on('draw-complete', (evt) => {
        console.log('draw-complete event')
        this.$emit('draw-complete', evt)
      })

      // fires when a vertex is removed
      action.on('vertex-remove', (evt) => {
        this.showGraphic = false
        console.log('vertex-remove event')
        this.$emit('vertex-remove', evt)
      })
    },
    updateGraphicProps (vertices) {
      this.graphicVersion = +(new Date())

      this.graphicProps = {
        geometry: {
          type: 'polygon',
          rings: vertices,
          spatialReference: this.getMapView().spatialReference
        },
        symbol: {
          type: 'simple-fill', // autocasts as SimpleFillSymbol
          color: 'purple',
          style: 'solid',
          outline: {  // autocasts as SimpleLineSymbol
            color: 'white',
            width: 1
          }
        }
      }
    }
  }
}
</script>
