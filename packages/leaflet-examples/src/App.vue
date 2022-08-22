<template>
  <main id="app">
    <div class="app__content-wrapper">
      <div class="app__navigation">
        <ul>
          <li>
            Leaflet Examples
            <ul>
              <li>
                <router-link :to="{ name: 'quick-start' }">
                  Quick Start
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'custom-icon' }">
                  Custom Icon
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'using-geo-json' }">
                  Using GeoJSON
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'custom-geo-json-collection' }">
                  Custom GeoJSON Collection
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'groups-and-controls' }">
                  Groups and Controls
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'working-with-events' }">
                  Working With Events
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'other-vector-layers' }">
                  Other Vector Layers
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'working-with-popups' }">
                  Working With Popups
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'other-controls' }">
                  Other Controls
                </router-link>
              </li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>
            Esri-Leaflet Examples
            <ul>
              <li>
                <router-link :to="{ name: 'esri-leaflet-tiled-map-layer' }">
                  Tiled Map Layer
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-leaflet-feature-layer' }">
                  Feature Layer
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-leaflet-image-map-layer' }">
                  Image Map Layer
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-leaflet-dynamic-map-layer' }">
                  Dynamic Map Layer
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-leaflet-clustering-points' }">
                  Clustering Points
                </router-link>
              </li>
              <!-- <event-sibling /> -->
            </ul>
          </li>
        </ul>
      </div>

      <div class="app__content">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
@import "leaflet/dist/leaflet.css"

html, body
  padding: 0
  margin: 0
  height: 100%
  width: 100%
  font-family: Arial, Helvetica, sans-serif

.app__content-wrapper
  width: 100vw
  height: 100vh
  display: flex

.app__navigation
  width: 300px
  height: 100%
  background-color: #000

  ul
    box-sizing: border-box
    margin-left: -15px
    margin-right: -15px
    padding: 5px 15px
    list-style: none
    li, a
      padding: 0 15px
      color: #fff
      text-decoration: none
    ul > li
      box-sizing: border-box
      background-color: lighten(#000, 50%)
      padding: 10px 15px
      margin-left: -15px
      margin-right: -15px 

      &:hover
        background-color: lighten(#000, 60%)

.app__content
  flex: 1
  background-color: #fff

.map-section
  width: 650px
  max-width: 95vw
  margin: 0 auto 75px
  text-align: center

.map-section h2
  margin-bottom: 0

.page__map-wrapper
  position: relative
  width: 100%
  height: 100%

.page__map-sandbox-link
  background-color: #000
  color: #fff
  padding: 5px 10px
  text-decoration: none
</style>
