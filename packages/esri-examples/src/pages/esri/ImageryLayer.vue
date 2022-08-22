<template>
  <section
    id="map"
    class="ImageryLayer page__map-wrapper"
  >
    <EMap
      v-if="booted"
      :properties="{
        basemap: 'streets-vector'
      }"
      key="map"
    >
      <EMapView
        :properties="{
          container: 'map',
          zoom: 4,
          center: [-100, 40]
        }"
      >
        <EImageryLayer
          :properties="{
            ...getRenderedImageryLayerProps(),
            title: 'Custom Render Rule'
          }"
        />
        <EImageryLayer
          :properties="{
            title: 'Simple Example',
            url: sharedUrl,
            format: 'jpgpng'
          }"
        />
        <ELayerList />
      </EMapView>
    </EMap>
  </section>
</template>

<script>
import EMap from '@vue-mapp-kit/esri/lib/EMap/EMap'
import EMapView from '@vue-mapp-kit/esri/lib/views/EMapView/EMapView'
import EImageryLayer from '@vue-mapp-kit/esri/lib/layers/EImageryLayer/EImageryLayer'
import ELayerList from '@vue-mapp-kit/esri/lib/widgets/ELayerList/ELayerList'

import RasterFunction from '@arcgis/core/layers/support/RasterFunction'
import MosaicRule from '@arcgis/core/layers/support/MosaicRule'

export default {
  name: 'ImageryLayer',

  components: {
    EMap,
    EMapView,
    EImageryLayer,
    ELayerList
  },

  async mounted () {
    this.mosaicRule = new MosaicRule({
      ascending: true,
      method: 'center',
      operation: 'last'
    })

    const remapRF = new RasterFunction({
      functionName: 'Remap',
      functionArguments: {
        // pixel values of forest categories are 41, 42, and 43
        // according to the  raster attribute table.
        // The InputRanges property defines the ranges of intial pixel values to remap
        // Three ranges: [0, 41], [41, 44], and [44, 255] are defined to extract forest pixels.
        inputRanges: [0, 41, 41, 44, 44, 255],
        // non-forest pixels (0-41 and 44-255) are remapped to a value of 1,
        // forest pixels (41-44) are remapped to a value of 2.
        outputValues: [1, 2, 1],
        // $$(default) refers to the entire image service,
        // $2 refers to the second image of the image service
        raster: '$$'
      }
    })

    this.renderingRule = new RasterFunction({
      functionName: 'Colormap',
      functionArguments: {
        colormap: [
          // non-forest pixels (value of 1) are assigned
          // a yellowish color RGB = [253, 254, 152]
          [1, 253, 254, 152],
          // forest pixels (value of 2) are assigned
          // a greenish color RGB = [2, 102, 6]
          [2, 2, 102, 6]
        ],
        // Setting the previous raster function to the Raster
        // property of a new raster function allows you to chain functions
        raster: remapRF
      },
      outputPixelType: 'U8'
    })

    this.booted = true
  },

  data () {
    return {
      booted: false,
      sharedUrl: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer'
    }
  },

  methods: {
    getRenderedImageryLayerProps () {
      return {
        url: this.sharedUrl,
        renderingRule: this.renderingRule,
        mosaicRule: this.mosaicRule
      }
    }
  }
}
</script>
