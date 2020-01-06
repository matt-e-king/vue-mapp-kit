module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "1c25");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0874":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1d6a");
var $Object = __webpack_require__("ac5a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "0b04":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("aec0");
var defined = __webpack_require__("c8ae");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "0c1f":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("79c1");
var $keys = __webpack_require__("8996");

__webpack_require__("5642")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "0e85":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("6f0d").f;
var has = __webpack_require__("25a6");
var TAG = __webpack_require__("d951")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "0e8c":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "124c":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d3d5");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "194e":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "1c25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "EBasemapLayer", function() { return EBasemapLayer_EBasemapLayer; });
__webpack_require__.d(components_namespaceObject, "EClusterFeatureLayer", function() { return EClusterFeatureLayer_EClusterFeatureLayer; });
__webpack_require__.d(components_namespaceObject, "EFeatureLayer", function() { return EFeatureLayer_EFeatureLayer; });
__webpack_require__.d(components_namespaceObject, "EDynamicMapLayer", function() { return EDynamicMapLayer_EDynamicMapLayer; });
__webpack_require__.d(components_namespaceObject, "EImageMapLayer", function() { return EImageMapLayer_EImageMapLayer; });
__webpack_require__.d(components_namespaceObject, "ETiledMapLayer", function() { return ETiledMapLayer_ETiledMapLayer; });

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("4141")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("c880");

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("dde3");

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("0c1f");

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("2e73");

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("af48");

// CONCATENATED MODULE: ./src/utils/index.js





var registerComponents = function registerComponents(Vue, components) {
  if (!Vue || !components) throw new Error('[registerComponents] missing params');
  Object.keys(components).forEach(function (key) {
    var c = components[key];
    Vue.component(c.name, c);
  });
};
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0912da31-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EBasemapLayer/EBasemapLayer.vue?vue&type=template&id=5c567924&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EBasemapLayer/EBasemapLayer.vue?vue&type=template&id=5c567924&

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("3cdf");

// EXTERNAL MODULE: external "esri-leaflet"
var external_esri_leaflet_ = __webpack_require__("d3d4");

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("5100");

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/core-js/modules/es6.object.define-properties.js
var es6_object_define_properties = __webpack_require__("dc46");

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("e125");

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("944e");

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("2dc0");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("ce9c");

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__("5880");

// CONCATENATED MODULE: ../leaflet/src/store/mutation-types.js
var VUEAFLET_CREATE_MAP = 'VUEAFLET_CREATE_MAP';
var VUEAFLET_ADD_MAP_LAYER = 'VUEAFLET_ADD_MAP_LAYER';
var VUEAFLET_ADD_NAMED_LAYER = 'VUEAFLET_ADD_NAMED_LAYER';
var VUEAFLET_REMOVE_MAP_LAYER = 'VUEAFLET_REMOVE_MAP_LAYER';
var VUEAFLET_REMOVE_NAMED_LAYER = 'VUEAFLET_REMOVE_NAMED_LAYER';
var VUEAFLET_ADD_MAP_EVENT = 'VUEAFLET_ADD_MAP_EVENT';
var VUEAFLET_SET_VIEW = 'VUEAFLET_SET_VIEW';
var VUEAFLET_ADD_TO_MAP = 'VUEAFLET_ADD_TO_MAP';
var VUEAFLET_PAN_TO = 'VUEAFLET_PAN_TO';
var VUEAFLET_PM_ENABLE_DRAW = 'VUEAFLET_PM_ENABLE_DRAW';
var VUEAFLET_PM_DISABLE_DRAW = 'VUEAFLET_PM_DISABLE_DRAW';
var VUEAFLET_PM_ADD_SHAPE_LAYER = 'VUEAFLET_PM_ADD_SHAPE_LAYER';
var VUEAFLET_PM_REMOVE_SHAPE_LAYERS = 'VUEAFLET_PM_REMOVE_SHAPE_LAYERS';
var VUEAFLET_RESET = 'VUEAFLET_RESET';
var VUEAFLET_INVALIDATE = 'VUEAFLET_INVALIDATE';
// EXTERNAL MODULE: external "@vue-mapp-kit/leaflet"
var leaflet_ = __webpack_require__("2721");

// CONCATENATED MODULE: ./src/mixins/LayerMixin.js












var _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ var LayerMixin = ({
  inject: {
    mapId: {
      default: 'mainMap'
    },
    registerOptions: {
      default: function _default() {}
    }
  },
  // most esri-leaflet constuctors just take an options object
  // but Basemap, DynamicMap, FeatureLayer, TiledMapLayer, ImageMapLayer, ClusterFeatureLayer all require URL
  props: {
    options: {
      type: Object,
      required: true,
      validator: function validator(value) {
        // make sure props.options.url exists
        if (!value.url) console.error("".concat(_this.type, " requires options.url"));
        return !!value.url;
      },
      default: function _default() {
        return {};
      }
    },
    layerName: String,
    order: {
      type: Number,
      default: 1
    },
    events: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // this prop enables MappKitBus which broadcasts all data.events across the app
    // uses same bus from MappKitLeaflet
    enableBus: Boolean
  },
  data: function data() {
    return {
      mergedOptions: null
    };
  },
  created: function created() {
    var existingLayer = this.getNamedLayer(this.layerName); // this.registerOptions is not being used by any parent components yet

    this.mergedOptions = this.registerOptions ? this.registerOptions(this.options) : this.options; // this.construct is a methed, see below, which allows components that use this mixin to defined their own
    // construct method to overwrite this, see EClusterFeatureLayer

    this.innerLayer = existingLayer || this.construct(); // if a layer already exists with this name, then just re-add it back to the main map

    this.layerName && !existingLayer ? this.addNamedLayer({
      id: this.mapId,
      name: this.layerName,
      order: this.order,
      layer: this.innerLayer
    }) : this.addLayer({
      id: this.mapId,
      order: this.order,
      layer: this.innerLayer
    });
  },
  mounted: function mounted() {
    this.addEventListeners();
    this.$emit('ready', this.innerLayer);
    this.enableBus && leaflet_["Bus"].$emit("".concat(this.type, "-").concat(this.mapId, "-ready"), this.innerLayer);
  },
  computed: _objectSpread({}, Object(external_vuex_["mapGetters"])(['getNamedLayer'])),
  methods: _objectSpread({}, Object(external_vuex_["mapMutations"])({
    addLayer: VUEAFLET_ADD_MAP_LAYER,
    addNamedLayer: VUEAFLET_ADD_NAMED_LAYER,
    removeLayer: VUEAFLET_REMOVE_MAP_LAYER
  }), {}, Object(external_vuex_["mapActions"])(['removeNamedLayer']), {
    construct: function construct() {
      return external_esri_leaflet_[this.type](Object.assign({}, this.defaultOptions, this.mergedOptions));
    },
    addEventListeners: function addEventListeners() {
      var _this2 = this;

      // only $emit on the MappKitBus is flag is enabled
      this.events.forEach(function (event) {
        _this2.innerLayer.on(event, function (ev) {
          _this2.$emit(event, {
            event: ev,
            layer: _this2.innerLayer
          });
        });

        _this2.enableBus && _this2.innerLayer.on(event, function (ev) {
          leaflet_["Bus"].$emit("".concat(_this2.type, "-").concat(_this2.mapId, "-").concat(event), {
            event: ev,
            layer: _this2.innerLayer
          });
        });
      });
    }
  }),
  destroyed: function destroyed() {
    this.layerName ? this.removeNamedLayer({
      id: this.mapId,
      name: this.layerName
    }) : this.removeLayer({
      id: this.mapId,
      layer: this.innerLayer
    });
  }
});
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EBasemapLayer/EBasemapLayer.vue?vue&type=script&lang=js&

//
//


var EBasemapLayer = {
  name: 'e-basemap-layer',
  mixins: [LayerMixin],
  props: {
    basemap: {
      type: String,
      required: true
    },
    options: Object,
    vector: Boolean // vector not supported yet

  },
  data: function data() {
    return {
      type: 'basemapLayer',
      defaultOptions: {}
    };
  },
  methods: {
    // overrides "construct" method within mixins/LayerMixin.js
    construct: function construct() {
      return Object(external_esri_leaflet_["basemapLayer"])(this.basemap, Object.assign({}, this.defaultOptions, this.mergedOptions)); // Vector not supported yet
      // if (!this.basemap) throw new Error('esri.basemapLayer requires basemap string for hosted basemap')
      // return (this.vector)
      //   ? esri.Vector.basemapLayer(this.basemap, Object.assign({}, this.defaultOptions, this.mergedOptions))
      //   : 
    }
  }
};
/* harmony default export */ var EBasemapLayervue_type_script_lang_js_ = (EBasemapLayer);
// CONCATENATED MODULE: ./src/components/EBasemapLayer/EBasemapLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var EBasemapLayer_EBasemapLayervue_type_script_lang_js_ = (EBasemapLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/EBasemapLayer/EBasemapLayer.vue





/* normalize component */

var component = normalizeComponent(
  EBasemapLayer_EBasemapLayervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EBasemapLayer_EBasemapLayer = (component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0912da31-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EClusterFeatureLayer/EClusterFeatureLayer.vue?vue&type=template&id=39cce96d&
var EClusterFeatureLayervue_type_template_id_39cce96d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var EClusterFeatureLayervue_type_template_id_39cce96d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EClusterFeatureLayer/EClusterFeatureLayer.vue?vue&type=template&id=39cce96d&

// EXTERNAL MODULE: external "leaflet.markercluster"
var external_leaflet_markercluster_ = __webpack_require__("a388");

// EXTERNAL MODULE: external "esri-leaflet-cluster"
var external_esri_leaflet_cluster_ = __webpack_require__("c7b8");

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EClusterFeatureLayer/EClusterFeatureLayer.vue?vue&type=script&lang=js&











function EClusterFeatureLayervue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function EClusterFeatureLayervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EClusterFeatureLayervue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EClusterFeatureLayervue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//





var EClusterFeatureLayer = {
  name: 'e-cluster-feature-layer',
  mixins: [LayerMixin],
  // watch: {
  //   'options.url'(val) {
  //     this.innerLayer.options.url = val
  //     this.redraw()
  //   },
  //   'options.where'(val) {
  //     this.innerLayer.options.where = val
  //     this.redraw()
  //   },
  //   'options.fields'(val) {
  //     this.innerLayer.options.fields = val
  //     this.redraw()
  //   }
  // },
  data: function data() {
    return {
      type: 'clusterFeatureLayer',
      defaultOptions: {}
    };
  },
  methods: EClusterFeatureLayervue_type_script_lang_js_objectSpread({}, Object(external_vuex_["mapMutations"])({
    addLayer: VUEAFLET_ADD_MAP_LAYER,
    removeLayer: VUEAFLET_REMOVE_MAP_LAYER
  }), {
    // overrides "construct" method within mixins/LayerMixin.js
    construct: function construct() {
      return external_esri_leaflet_cluster_["featureLayer"](Object.assign({}, this.defaultOptions, this.mergedOptions));
    },
    redraw: function redraw() {
      this.removeLayer({
        id: this.mapId,
        layer: this.innerLayer
      });
      this.addLayer({
        id: this.mapId,
        layer: this.innerLayer
      });
    }
  })
};
/* harmony default export */ var EClusterFeatureLayervue_type_script_lang_js_ = (EClusterFeatureLayer);
// CONCATENATED MODULE: ./src/components/EClusterFeatureLayer/EClusterFeatureLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var EClusterFeatureLayer_EClusterFeatureLayervue_type_script_lang_js_ = (EClusterFeatureLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EClusterFeatureLayer/EClusterFeatureLayer.vue





/* normalize component */

var EClusterFeatureLayer_component = normalizeComponent(
  EClusterFeatureLayer_EClusterFeatureLayervue_type_script_lang_js_,
  EClusterFeatureLayervue_type_template_id_39cce96d_render,
  EClusterFeatureLayervue_type_template_id_39cce96d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EClusterFeatureLayer_EClusterFeatureLayer = (EClusterFeatureLayer_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0912da31-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EFeatureLayer/EFeatureLayer.vue?vue&type=template&id=d6886706&
var EFeatureLayervue_type_template_id_d6886706_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var EFeatureLayervue_type_template_id_d6886706_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EFeatureLayer/EFeatureLayer.vue?vue&type=template&id=d6886706&

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EFeatureLayer/EFeatureLayer.vue?vue&type=script&lang=js&
//
//

var EFeatureLayer = {
  name: 'e-feature-layer',
  mixins: [LayerMixin],
  data: function data() {
    return {
      type: 'featureLayer',
      defaultOptions: {}
    };
  },
  watch: {
    'options.opacity': function optionsOpacity(newOpacity) {
      if (newOpacity !== null || newOpacity !== undefined) {
        this.innerLayer.options.opacity = newOpacity;
        this.innerLayer.redraw();
      }
    }
  }
};
/* harmony default export */ var EFeatureLayervue_type_script_lang_js_ = (EFeatureLayer);
// CONCATENATED MODULE: ./src/components/EFeatureLayer/EFeatureLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var EFeatureLayer_EFeatureLayervue_type_script_lang_js_ = (EFeatureLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EFeatureLayer/EFeatureLayer.vue





/* normalize component */

var EFeatureLayer_component = normalizeComponent(
  EFeatureLayer_EFeatureLayervue_type_script_lang_js_,
  EFeatureLayervue_type_template_id_d6886706_render,
  EFeatureLayervue_type_template_id_d6886706_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EFeatureLayer_EFeatureLayer = (EFeatureLayer_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0912da31-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EDynamicMapLayer/EDynamicMapLayer.vue?vue&type=template&id=d58f59e0&
var EDynamicMapLayervue_type_template_id_d58f59e0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var EDynamicMapLayervue_type_template_id_d58f59e0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EDynamicMapLayer/EDynamicMapLayer.vue?vue&type=template&id=d58f59e0&

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EDynamicMapLayer/EDynamicMapLayer.vue?vue&type=script&lang=js&
//
//

var EDynamicMapLayer = {
  name: 'e-dynamic-map-layer',
  mixins: [LayerMixin],
  data: function data() {
    return {
      type: 'dynamicMapLayer',
      defaultOptions: {}
    };
  },
  watch: {
    'options.layers': {
      handler: function handler(newLayers) {
        this.innerLayer.options.layers = newLayers;
        this.innerLayer.redraw();
      },
      deep: true
    },
    'options.opacity': function optionsOpacity(newOpacity) {
      if (newOpacity !== null || newOpacity !== undefined) {
        this.innerLayer.options.opacity = newOpacity;
        this.innerLayer.redraw();
      }
    }
  }
};
/* harmony default export */ var EDynamicMapLayervue_type_script_lang_js_ = (EDynamicMapLayer);
// CONCATENATED MODULE: ./src/components/EDynamicMapLayer/EDynamicMapLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var EDynamicMapLayer_EDynamicMapLayervue_type_script_lang_js_ = (EDynamicMapLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EDynamicMapLayer/EDynamicMapLayer.vue





/* normalize component */

var EDynamicMapLayer_component = normalizeComponent(
  EDynamicMapLayer_EDynamicMapLayervue_type_script_lang_js_,
  EDynamicMapLayervue_type_template_id_d58f59e0_render,
  EDynamicMapLayervue_type_template_id_d58f59e0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EDynamicMapLayer_EDynamicMapLayer = (EDynamicMapLayer_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0912da31-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EImageMapLayer/EImageMapLayer.vue?vue&type=template&id=6e6b09a8&
var EImageMapLayervue_type_template_id_6e6b09a8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var EImageMapLayervue_type_template_id_6e6b09a8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EImageMapLayer/EImageMapLayer.vue?vue&type=template&id=6e6b09a8&

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EImageMapLayer/EImageMapLayer.vue?vue&type=script&lang=js&
//
//

var EImageMapLayer = {
  name: 'e-image-map-layer',
  mixins: [LayerMixin],
  data: function data() {
    return {
      type: 'imageMapLayer',
      defaultOptions: {}
    };
  },
  watch: {
    'options.opacity': function optionsOpacity(newOpacity) {
      if (newOpacity !== null || newOpacity !== undefined) {
        this.innerLayer.options.opacity = newOpacity;
        this.innerLayer.redraw();
      }
    }
  }
};
/* harmony default export */ var EImageMapLayervue_type_script_lang_js_ = (EImageMapLayer);
// CONCATENATED MODULE: ./src/components/EImageMapLayer/EImageMapLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var EImageMapLayer_EImageMapLayervue_type_script_lang_js_ = (EImageMapLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EImageMapLayer/EImageMapLayer.vue





/* normalize component */

var EImageMapLayer_component = normalizeComponent(
  EImageMapLayer_EImageMapLayervue_type_script_lang_js_,
  EImageMapLayervue_type_template_id_6e6b09a8_render,
  EImageMapLayervue_type_template_id_6e6b09a8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EImageMapLayer_EImageMapLayer = (EImageMapLayer_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0912da31-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/ETiledMapLayer/ETiledMapLayer.vue?vue&type=template&id=6d11a428&
var ETiledMapLayervue_type_template_id_6d11a428_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var ETiledMapLayervue_type_template_id_6d11a428_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ETiledMapLayer/ETiledMapLayer.vue?vue&type=template&id=6d11a428&

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/ETiledMapLayer/ETiledMapLayer.vue?vue&type=script&lang=js&
//
//

var ETiledMapLayer = {
  name: 'e-tiled-map-layer',
  mixins: [LayerMixin],
  data: function data() {
    return {
      type: 'tiledMapLayer',
      defaultOptions: {}
    };
  }
};
/* harmony default export */ var ETiledMapLayervue_type_script_lang_js_ = (ETiledMapLayer);
// CONCATENATED MODULE: ./src/components/ETiledMapLayer/ETiledMapLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var ETiledMapLayer_ETiledMapLayervue_type_script_lang_js_ = (ETiledMapLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ETiledMapLayer/ETiledMapLayer.vue





/* normalize component */

var ETiledMapLayer_component = normalizeComponent(
  ETiledMapLayer_ETiledMapLayervue_type_script_lang_js_,
  ETiledMapLayervue_type_template_id_6d11a428_render,
  ETiledMapLayervue_type_template_id_6d11a428_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ETiledMapLayer_ETiledMapLayer = (ETiledMapLayer_component.exports);
// CONCATENATED MODULE: ./src/components/index.js






// CONCATENATED MODULE: ./src/main.js

 // TODO: test options

var main_createInstaller = function createInstaller(components) {
  return function (Vue, options) {
    // do something with options
    registerComponents(Vue, components);
  };
};

var main_createMappKitEsriLeaflet = function createMappKitEsriLeaflet() {
  // https://vuejs.org/v2/guide/plugins.html
  // Vue plugins, at minimum, need to return an object with an install function
  // createInstaller is a double arrow function; returns another function, creates a closure over imported components
  return {
    install: main_createInstaller(components_namespaceObject)
  };
};

/* harmony default export */ var main = (main_createMappKitEsriLeaflet());
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ }),

/***/ "1d6a":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("2058");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("39b1"), 'Object', { defineProperty: __webpack_require__("5300").f });


/***/ }),

/***/ "2058":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("851e");
var core = __webpack_require__("ac5a");
var ctx = __webpack_require__("7564");
var hide = __webpack_require__("6fde");
var has = __webpack_require__("615b");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "25a6":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "2721":
/***/ (function(module, exports) {

module.exports = require("@vue-mapp-kit/leaflet");

/***/ }),

/***/ "29cd":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("bdb7");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "2cc6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("39b1") && !__webpack_require__("ed2f")(function () {
  return Object.defineProperty(__webpack_require__("d5b2")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "2d2d":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "2dc0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0874");

/***/ }),

/***/ "2e73":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("dde3");
var getKeys = __webpack_require__("8996");
var redefine = __webpack_require__("e385");
var global = __webpack_require__("0e8c");
var hide = __webpack_require__("bafe");
var Iterators = __webpack_require__("9dd3");
var wks = __webpack_require__("d951");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "3460":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("5c50");
var global = __webpack_require__("0e8c");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("742f") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "382d":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "39b1":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("ed2f")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "3bd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("bec8");
var descriptor = __webpack_require__("ad8d");
var setToStringTag = __webpack_require__("0e85");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("bafe")(IteratorPrototype, __webpack_require__("d951")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "3cdf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("ef37");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("ab23") });


/***/ }),

/***/ "3d85":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("a124")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "402c":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("d0e9");
var createDesc = __webpack_require__("ad8d");
var toIObject = __webpack_require__("0b04");
var toPrimitive = __webpack_require__("78d3");
var has = __webpack_require__("25a6");
var IE8_DOM_DEFINE = __webpack_require__("cd30");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("3d85") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "4141":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "418d":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("124c");
var IObject = __webpack_require__("aec0");
var toObject = __webpack_require__("79c1");
var toLength = __webpack_require__("bb64");
var asc = __webpack_require__("6a8f");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "4cb0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("a124");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "4cf2":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("b735");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "50cc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("0e8c").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "5100":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("ef37");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("3d85"), 'Object', { defineProperty: __webpack_require__("6f0d").f });


/***/ }),

/***/ "5300":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("f1f4");
var IE8_DOM_DEFINE = __webpack_require__("2cc6");
var toPrimitive = __webpack_require__("29cd");
var dP = Object.defineProperty;

exports.f = __webpack_require__("39b1") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "5642":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("ef37");
var core = __webpack_require__("5c50");
var fails = __webpack_require__("a124");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "573a":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "5880":
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),

/***/ "5c50":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "615b":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a8f":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("f8aa");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "6ccd":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("6f0d");
var anObject = __webpack_require__("8c7e");
var getKeys = __webpack_require__("8996");

module.exports = __webpack_require__("3d85") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "6f0d":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("8c7e");
var IE8_DOM_DEFINE = __webpack_require__("cd30");
var toPrimitive = __webpack_require__("78d3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("3d85") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "6fde":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("5300");
var createDesc = __webpack_require__("8c78");
module.exports = __webpack_require__("39b1") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "742f":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "7564":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("573a");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "78d3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("194e");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "79c1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("c8ae");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "8109":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "84e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("194e");
var setPrototypeOf = __webpack_require__("ed99").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "851e":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "8996":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("dd61");
var enumBugKeys = __webpack_require__("eaa3");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "8c78":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "8c7e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("194e");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "904a":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("25a6");
var toObject = __webpack_require__("79c1");
var IE_PROTO = __webpack_require__("f962")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "944e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("ef37");
var $filter = __webpack_require__("418d")(2);

$export($export.P + $export.F * !__webpack_require__("4cb0")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "96ba":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("d951")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("bafe")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9b86":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("194e");
var document = __webpack_require__("0e8c").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "9c84":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3460")('native-function-to-string', Function.toString);


/***/ }),

/***/ "9dd3":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "9e61":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "a124":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "a388":
/***/ (function(module, exports) {

module.exports = require("leaflet.markercluster");

/***/ }),

/***/ "ab23":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("3d85");
var getKeys = __webpack_require__("8996");
var gOPS = __webpack_require__("8109");
var pIE = __webpack_require__("d0e9");
var toObject = __webpack_require__("79c1");
var IObject = __webpack_require__("aec0");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("a124")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "ac5a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "ac95":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("ef37");
var defined = __webpack_require__("c8ae");
var fails = __webpack_require__("a124");
var spaces = __webpack_require__("382d");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "ad8d":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "adb3":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("9e61");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "aec0":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("b735");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "af48":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("ef37");
var $forEach = __webpack_require__("418d")(0);
var STRICT = __webpack_require__("4cb0")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "af6b":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("0b04");
var toLength = __webpack_require__("bb64");
var toAbsoluteIndex = __webpack_require__("adb3");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "b735":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "b764":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("6f0d");
var createDesc = __webpack_require__("ad8d");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "bafe":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("6f0d");
var createDesc = __webpack_require__("ad8d");
module.exports = __webpack_require__("3d85") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "bb64":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("9e61");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "bdb7":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "bec8":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("8c7e");
var dPs = __webpack_require__("6ccd");
var enumBugKeys = __webpack_require__("eaa3");
var IE_PROTO = __webpack_require__("f962")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("9b86")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("50cc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "c74b":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("dd61");
var hiddenKeys = __webpack_require__("eaa3").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "c7b8":
/***/ (function(module, exports) {

module.exports = require("esri-leaflet-cluster");

/***/ }),

/***/ "c880":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("6f0d").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("3d85") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "c8ae":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "cd30":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("3d85") && !__webpack_require__("a124")(function () {
  return Object.defineProperty(__webpack_require__("9b86")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ce9c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("0e8c");
var has = __webpack_require__("25a6");
var cof = __webpack_require__("b735");
var inheritIfRequired = __webpack_require__("84e7");
var toPrimitive = __webpack_require__("78d3");
var fails = __webpack_require__("a124");
var gOPN = __webpack_require__("c74b").f;
var gOPD = __webpack_require__("402c").f;
var dP = __webpack_require__("6f0d").f;
var $trim = __webpack_require__("ac95").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("bec8")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("3d85") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("e385")(global, NUMBER, $Number);
}


/***/ }),

/***/ "d0e9":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "d3d4":
/***/ (function(module, exports) {

module.exports = require("esri-leaflet");

/***/ }),

/***/ "d3d5":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d5b2":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("bdb7");
var document = __webpack_require__("851e").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "d951":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("3460")('wks');
var uid = __webpack_require__("f455");
var Symbol = __webpack_require__("0e8c").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "dc46":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("ef37");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__("3d85"), 'Object', { defineProperties: __webpack_require__("6ccd") });


/***/ }),

/***/ "dcce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("742f");
var $export = __webpack_require__("ef37");
var redefine = __webpack_require__("e385");
var hide = __webpack_require__("bafe");
var Iterators = __webpack_require__("9dd3");
var $iterCreate = __webpack_require__("3bd0");
var setToStringTag = __webpack_require__("0e85");
var getPrototypeOf = __webpack_require__("904a");
var ITERATOR = __webpack_require__("d951")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "dd61":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("25a6");
var toIObject = __webpack_require__("0b04");
var arrayIndexOf = __webpack_require__("af6b")(false);
var IE_PROTO = __webpack_require__("f962")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "dde3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("96ba");
var step = __webpack_require__("2d2d");
var Iterators = __webpack_require__("9dd3");
var toIObject = __webpack_require__("0b04");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("dcce")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e125":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("ef37");
var ownKeys = __webpack_require__("eb94");
var toIObject = __webpack_require__("0b04");
var gOPD = __webpack_require__("402c");
var createProperty = __webpack_require__("b764");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "e385":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0e8c");
var hide = __webpack_require__("bafe");
var has = __webpack_require__("25a6");
var SRC = __webpack_require__("f455")('src');
var $toString = __webpack_require__("9c84");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("5c50").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "eaa3":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "eb94":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("c74b");
var gOPS = __webpack_require__("8109");
var anObject = __webpack_require__("8c7e");
var Reflect = __webpack_require__("0e8c").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "ed2f":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "ed99":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("194e");
var anObject = __webpack_require__("8c7e");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("124c")(Function.call, __webpack_require__("402c").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "ef37":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0e8c");
var core = __webpack_require__("5c50");
var hide = __webpack_require__("bafe");
var redefine = __webpack_require__("e385");
var ctx = __webpack_require__("124c");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "f1f4":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("bdb7");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "f455":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "f8aa":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("194e");
var isArray = __webpack_require__("4cf2");
var SPECIES = __webpack_require__("d951")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "f962":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("3460")('keys');
var uid = __webpack_require__("f455");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ })

/******/ });
//# sourceMappingURL=mapp-kit-esri-leaflet.common.js.map