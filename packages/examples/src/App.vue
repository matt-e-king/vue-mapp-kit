<template>
  <main id="app">
    <div class="app__content-wrapper">
      <div class="app__navigation">
        <ul>
          <li>
            Esri
            <ul>
              <li>
                <router-link to="/">
                  Home
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-basic-map' }">
                  Basic Map
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-webmap-with-legend' }">
                  WebMap w/ Legend
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-geo-json-layer' }">
                  GeoJSON Layer
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-graphics' }">
                  Graphics
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-groupings' }">
                  Groupings
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-tile-layer' }">
                  Tile Layer
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-imagery-layer' }">
                  Imagery Layer
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-map-image-layer' }">
                  Map Imager Layer
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-map-image-layer-portal-item' }">
                  Map Imager Layer w/ Portal Item
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-scene-view' }">
                  Scene View
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-sketch-widget' }">
                  Sketch Widget
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'esri-sketch-view-model' }">
                  Sketch View Model
                </router-link>
              </li>
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
@import "@arcgis/core/assets/esri/themes/dark/main.css"

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
