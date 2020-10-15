<template>
  <section id="graphics" class="map-wrapper">
    <e-map
      :properties="{
        basemap: 'streets'
      }"
    >
      <!-- the default slot of e-map spits out the map object -->
        <e-map-view
          :properties="{
            container: 'graphics',
            zoom: 3,
            center: [-80, 35]
          }"
        >
          <e-graphic :properties="getPolylineProps" />
          <e-graphic :properties="getPolygonProps" />
          <e-graphic :properties="getPointProps" />
        </e-map-view>
    </e-map>
  </section>
</template>

<script>
export default {
  name: 'Graphics',

  computed: {
    getPolygonProps() {
      const polygon = {
        type: "polygon", // autocasts as new Polygon()
        rings: [[-64.78, 32.3],[-66.07, 18.45],[-80.21, 25.78],[-64.78, 32.3]]
      }

      // Create a symbol for rendering the graphic
      const fillSymbol = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: [227, 139, 79, 0.8],
        outline: { // autocasts as new SimpleLineSymbol()
          color: [255, 255, 255],
          width: 1
        }
      }

      // Add the geometry and symbol to a new graphic
      return {
        attributes: {
          name: 'Polyglot Polygon!'
        },
        geometry: polygon,
        symbol: fillSymbol
      }
    },

    getPointProps() {
      // First create a point geometry (this is the location of the Titanic)
        var point = {
          type: "point", // autocasts as new Point()
          longitude: -49.97,
          latitude: 41.73
        };

        // Create a symbol for drawing the point
        var markerSymbol = {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          color: [226, 119, 40],
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [255, 255, 255],
            width: 2
          }
        };

        // Create a graphic and add the geometry and symbol to it
        return {
          attributes: {
            name: 'Dot!'
          },
          geometry: point,
          symbol: markerSymbol
        }
    },

    getPolylineProps() {
      // First create a line geometry (this is the Keystone pipeline)
      const polyline = {
        type: "polyline", // autocasts as new Polyline()
        paths: [[-111.30, 52.68],[-98, 49.5],[-93.94, 29.89]]
      }

      // Create a symbol for drawing the line
      const lineSymbol = {
        type: "simple-line", // autocasts as SimpleLineSymbol()
        color: [226, 119, 40],
        width: 4
      }

      // Create an object for storing attributes related to the line
      const lineAtt = {
        Name: "Keystone Pipeline",
        Owner: "TransCanada",
        Length: "3,456 km"
      }

      /*******************************************
       * Create a new graphic and add the geometry,
       * symbol, and attributes to it. You may also
       * add a simple PopupTemplate to the graphic.
       * This allows users to view the graphic's
       * attributes when it is clicked.
       ******************************************/
      return {
        geometry: polyline,
        symbol: lineSymbol,
        attributes: lineAtt,
        popupTemplate: { // autocasts as new PopupTemplate()
          title: "{Name}",
          content: [{
            type: "fields",
            fieldInfos: [
              {fieldName: "Name"},
              {fieldName: "Owner"},
              {fieldName: "Length"}
              ]
          }]
        }
      }
    }
  }
}
</script>
