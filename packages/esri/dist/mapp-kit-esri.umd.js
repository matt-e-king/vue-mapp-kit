(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("esri-loader"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["esri-loader", "vue"], factory);
	else if(typeof exports === 'object')
		exports["mapp-kit-esri"] = factory(require("esri-loader"), require("vue"));
	else
		root["mapp-kit-esri"] = factory(root["esri-loader"], root["vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__2b93__, __WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "029b":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("2745");
var enumBugKeys = __webpack_require__("82e1");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0647":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("f1f4");
var get = __webpack_require__("d6c7");
module.exports = __webpack_require__("ac5a").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "0874":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1d6a");
var $Object = __webpack_require__("ac5a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "0a66":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("7564");
var invoke = __webpack_require__("2004");
var html = __webpack_require__("c075");
var cel = __webpack_require__("d5b2");
var global = __webpack_require__("851e");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("7bb7")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
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

/***/ "0ed3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "1161":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("783f")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


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

/***/ "1289":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6fde");


/***/ }),

/***/ "164f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("8ff6");
var global = __webpack_require__("851e");
var hide = __webpack_require__("6fde");
var Iterators = __webpack_require__("b517");
var TO_STRING_TAG = __webpack_require__("783f")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


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
__webpack_require__.d(components_namespaceObject, "EBasemapToggle", function() { return EBasemapToggle; });
__webpack_require__.d(components_namespaceObject, "ELayerList", function() { return ELayerList; });
__webpack_require__.d(components_namespaceObject, "EGeoJsonLayer", function() { return EGeoJsonLayer; });
__webpack_require__.d(components_namespaceObject, "EFeatureLayer", function() { return EFeatureLayer; });
__webpack_require__.d(components_namespaceObject, "EGroupLayer", function() { return EGroupLayer; });
__webpack_require__.d(components_namespaceObject, "EGraphic", function() { return EGraphic; });
__webpack_require__.d(components_namespaceObject, "EGraphicsLayer", function() { return EGraphicsLayer; });
__webpack_require__.d(components_namespaceObject, "EMap", function() { return EMap; });
__webpack_require__.d(components_namespaceObject, "EMapView", function() { return EMapView; });
__webpack_require__.d(components_namespaceObject, "EPortalItem", function() { return EPortalItem; });
__webpack_require__.d(components_namespaceObject, "ESceneView", function() { return ESceneView; });

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

// CONCATENATED MODULE: ./src/utils/index.js




// globally registers components
var registerComponents = function registerComponents(Vue, components) {
  if (!Vue || !components) throw new Error('[registerComponents] missing params');
  Object.keys(components).forEach(function (key) {
    var c = components[key];
    Vue.component(c.name, c);
  });
};
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cd162cd-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/EBasemapToggle/EBasemapToggle.vue?vue&type=template&id=277c8988&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/widgets/EBasemapToggle/EBasemapToggle.vue?vue&type=template&id=277c8988&scoped=true&

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("e125");

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
// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("df26");

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("325e");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    promise_default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise_default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: external "esri-loader"
var external_esri_loader_ = __webpack_require__("2b93");

// CONCATENATED MODULE: ./src/utils/esriLoader.js



var MODULE_LOOKUP = {
  'GeoJSONLayer': 'esri/layers/GeoJSONLayer',
  'FeatureLayer': 'esri/layers/FeatureLayer',
  'GroupLayer': 'esri/layers/GroupLayer',
  'Graphic': 'esri/Graphic',
  'GraphicsLayer': 'esri/layers/GraphicsLayer',
  'Layer': 'esri/layers/Layer',
  'LayerList': 'esri/widgets/LayerList',
  'Map': 'esri/Map',
  'MapView': 'esri/views/MapView',
  'SceneView': 'esri/views/SceneView',
  'BasemapToggle': 'esri/widgets/BasemapToggle'
};
/**
 * 
 * @param {Array || string} m 
 */

var getModules =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(m) {
    var modules, requiresArray, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            modules = Array.isArray(modules) ? m : [m];
            requiresArray = modules.map(function (module) {
              return MODULE_LOOKUP[module];
            });
            _context.prev = 2;
            _context.next = 5;
            return Object(external_esri_loader_["loadModules"])(requiresArray);

          case 5:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            console.error(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));

  return function getModules(_x) {
    return _ref.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./src/mixins/loaderMixin.js






/* harmony default export */ var loaderMixin = ({
  data: function data() {
    return {};
  },
  methods: {
    loaderInit: function () {
      var _loaderInit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var modules;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                modules = Object.keys(this.module);
                _context.next = 3;
                return getModules(modules);

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loaderInit() {
        return _loaderInit.apply(this, arguments);
      }

      return loaderInit;
    }()
  }
});
// CONCATENATED MODULE: ./src/mixins/constructorMixin.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/* harmony default export */ var constructorMixin = ({
  mixins: [loaderMixin],
  watch: {
    // TODO: this should move to a mixin
    'properties.visible': function propertiesVisible(val) {
      if (this.module[this.name].hasOwnProperty('visible')) {
        this.$set(this.module[this.name], 'visible', val);
      }
    }
  },
  props: {
    addTo: {
      type: Object
    },
    events: Array,
    properties: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      name: '',
      booted: false
    };
  },
  created: function created() {
    var _this = this;

    this.loaderInit().then(function (loadedModules) {
      var moduleKeys = Object.keys(_this.module);
      moduleKeys.forEach(function (name, index) {
        _this.name = name;
        var module = loadedModules[index]; // console.log(name, { ...this.properties, ...this.mergeProps })

        _this.module[name] = _this.noInstantiation ? module : new module(_objectSpread({}, _this.properties, {}, _this.mergeProps));

        if (_this.module[name].when) {
          _this.module[name].when(function (l) {
            _this.bootRoutine();
          });
        } else {
          _this.bootRoutine();
        }
      });

      _this.setupEvents(); // hook in after module is loaded


      _this.afterInitHook();
    });
  },
  methods: {
    bootRoutine: function bootRoutine() {
      this.booted = true;
      this.afterLoadedHook();
    },
    afterLoadedHook: function afterLoadedHook() {
      this.$emit('ready', this.module[this.name]);
    },
    afterInitHook: function afterInitHook() {
      if (!this.addTo) {
        // provided by EMap
        if (this.getMap && this.getMap()) this.getMap().add(this.module[this.name]);else console.error('No parent collection found for :', this.name);
      } else {
        this.addTo.add(this.module[this.name]);
      }
    },
    setupEvents: function setupEvents() {
      var _this2 = this;

      if (Array.isArray(this.events) && this.events.length && typeof this.module[this.name].on === 'function') {
        var _loop = function _loop(key) {
          var eventType = _this2.events[key];

          _this2.module[_this2.name].on(eventType, function (event) {
            _this2.$emit(eventType, {
              event: event,
              source: _this2.module[_this2.name]
            });
          });
        };

        for (var key in this.events) {
          _loop(key);
        }
      }
    },
    beforeDestroyHook: function beforeDestroyHook() {
      if (!this.addTo) {
        // provided by EMap
        if (this.getMap && this.getMap()) this.getMap().remove(this.module[this.name]);else console.error('No parent to remove from for :', this.name);
      } else {
        this.addTo.remove(this.module[this.name]);
      } // TODO: seems sloppy


      this.$emit('remove', this.module[this.name]);
    }
  },
  computed: {
    mergeProps: function mergeProps() {// overide in the component
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.beforeDestroyHook();
  }
});
// CONCATENATED MODULE: ./src/mixins/injectMapViewMixin.js
/* harmony default export */ var injectMapViewMixin = ({
  inject: {
    getMapView: {
      default: function _default() {
        return function () {};
      }
    }
  }
});
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/EBasemapToggle/EBasemapToggle.vue?vue&type=script&lang=js&
//
//
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html


/* harmony default export */ var EBasemapTogglevue_type_script_lang_js_ = ({
  name: 'e-basemap-toggle',
  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin],
  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },
  data: function data() {
    return {
      module: {
        BasemapToggle: null
      }
    };
  },
  methods: {
    afterInitHook: function afterInitHook() {
      var parentView = this.addTo ? this.addTo : this.getMapView();
      if (!parentView) console.error('[EBasemapToggle] no map view');
      parentView.ui.add(this.module.BasemapToggle, this.position);
    }
  },
  computed: {
    mergeProps: function mergeProps() {
      var parentView = this.addTo ? this.addTo : this.getMapView();
      if (!parentView) console.error('[EBasemapToggle] no map view');
      return {
        view: parentView
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/widgets/EBasemapToggle/EBasemapToggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var EBasemapToggle_EBasemapTogglevue_type_script_lang_js_ = (EBasemapTogglevue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./src/components/widgets/EBasemapToggle/EBasemapToggle.vue





/* normalize component */

var component = normalizeComponent(
  EBasemapToggle_EBasemapTogglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "277c8988",
  null
  
)

/* harmony default export */ var EBasemapToggle = (component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cd162cd-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/ELayerList/ELayerList.vue?vue&type=template&id=afe79dd2&scoped=true&
var ELayerListvue_type_template_id_afe79dd2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var ELayerListvue_type_template_id_afe79dd2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/widgets/ELayerList/ELayerList.vue?vue&type=template&id=afe79dd2&scoped=true&

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/ELayerList/ELayerList.vue?vue&type=script&lang=js&
//
//
// https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html


/* harmony default export */ var ELayerListvue_type_script_lang_js_ = ({
  name: 'e-layer-list',
  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin],
  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },
  data: function data() {
    return {
      module: {
        LayerList: null
      }
    };
  },
  methods: {
    afterInitHook: function afterInitHook() {
      var parentView = this.addTo ? this.addTo : this.getMapView();
      if (!parentView) console.error('[ELayerList] no map view');
      parentView.ui.add(this.module.LayerList, this.position);
    }
  },
  computed: {
    mergeProps: function mergeProps() {
      var parentView = this.addTo ? this.addTo : this.getMapView();
      if (!parentView) console.error('[ELayerList] no map view');
      return {
        view: parentView
      };
    }
  }
});
// CONCATENATED MODULE: ./src/components/widgets/ELayerList/ELayerList.vue?vue&type=script&lang=js&
 /* harmony default export */ var ELayerList_ELayerListvue_type_script_lang_js_ = (ELayerListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/widgets/ELayerList/ELayerList.vue





/* normalize component */

var ELayerList_component = normalizeComponent(
  ELayerList_ELayerListvue_type_script_lang_js_,
  ELayerListvue_type_template_id_afe79dd2_scoped_true_render,
  ELayerListvue_type_template_id_afe79dd2_scoped_true_staticRenderFns,
  false,
  null,
  "afe79dd2",
  null
  
)

/* harmony default export */ var ELayerList = (ELayerList_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cd162cd-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/layers/EGeoJsonLayer/EGeoJsonLayer.vue?vue&type=template&id=3c7b1cf6&scoped=true&
var EGeoJsonLayervue_type_template_id_3c7b1cf6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var EGeoJsonLayervue_type_template_id_3c7b1cf6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/layers/EGeoJsonLayer/EGeoJsonLayer.vue?vue&type=template&id=3c7b1cf6&scoped=true&

// CONCATENATED MODULE: ./src/mixins/injectMapMixin.js
/* harmony default export */ var injectMapMixin = ({
  inject: {
    getMap: {
      default: function _default() {
        return function () {};
      }
    }
  }
});
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/layers/EGeoJsonLayer/EGeoJsonLayer.vue?vue&type=script&lang=js&
//
//
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html


/* harmony default export */ var EGeoJsonLayervue_type_script_lang_js_ = ({
  name: 'e-geo-json-layer',
  mixins: [constructorMixin, injectMapMixin],
  data: function data() {
    return {
      module: {
        GeoJSONLayer: null
      }
    };
  }
});
// CONCATENATED MODULE: ./src/components/layers/EGeoJsonLayer/EGeoJsonLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var EGeoJsonLayer_EGeoJsonLayervue_type_script_lang_js_ = (EGeoJsonLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/layers/EGeoJsonLayer/EGeoJsonLayer.vue





/* normalize component */

var EGeoJsonLayer_component = normalizeComponent(
  EGeoJsonLayer_EGeoJsonLayervue_type_script_lang_js_,
  EGeoJsonLayervue_type_template_id_3c7b1cf6_scoped_true_render,
  EGeoJsonLayervue_type_template_id_3c7b1cf6_scoped_true_staticRenderFns,
  false,
  null,
  "3c7b1cf6",
  null
  
)

/* harmony default export */ var EGeoJsonLayer = (EGeoJsonLayer_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cd162cd-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/layers/EFeatureLayer/EFeatureLayer.vue?vue&type=template&id=b1ad0e44&scoped=true&
var EFeatureLayervue_type_template_id_b1ad0e44_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var EFeatureLayervue_type_template_id_b1ad0e44_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/layers/EFeatureLayer/EFeatureLayer.vue?vue&type=template&id=b1ad0e44&scoped=true&

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/layers/EFeatureLayer/EFeatureLayer.vue?vue&type=script&lang=js&
//
//
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html


/* harmony default export */ var EFeatureLayervue_type_script_lang_js_ = ({
  name: 'e-feature-layer',
  mixins: [constructorMixin, injectMapMixin],
  data: function data() {
    return {
      module: {
        FeatureLayer: null // class name of esri object

      }
    };
  }
});
// CONCATENATED MODULE: ./src/components/layers/EFeatureLayer/EFeatureLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var EFeatureLayer_EFeatureLayervue_type_script_lang_js_ = (EFeatureLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/layers/EFeatureLayer/EFeatureLayer.vue





/* normalize component */

var EFeatureLayer_component = normalizeComponent(
  EFeatureLayer_EFeatureLayervue_type_script_lang_js_,
  EFeatureLayervue_type_template_id_b1ad0e44_scoped_true_render,
  EFeatureLayervue_type_template_id_b1ad0e44_scoped_true_staticRenderFns,
  false,
  null,
  "b1ad0e44",
  null
  
)

/* harmony default export */ var EFeatureLayer = (EFeatureLayer_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cd162cd-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/layers/EGroupLayer/EGroupLayer.vue?vue&type=template&id=33fc7b2a&scoped=true&
var EGroupLayervue_type_template_id_33fc7b2a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.booted)?_vm._t("default",null,{"groupLayer":_vm.module.GroupLayer}):_vm._e()],2)}
var EGroupLayervue_type_template_id_33fc7b2a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/layers/EGroupLayer/EGroupLayer.vue?vue&type=template&id=33fc7b2a&scoped=true&

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/layers/EGroupLayer/EGroupLayer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html


/* harmony default export */ var EGroupLayervue_type_script_lang_js_ = ({
  name: 'e-group-layer',
  mixins: [constructorMixin, injectMapMixin],
  data: function data() {
    return {
      module: {
        GroupLayer: null
      }
    };
  }
});
// CONCATENATED MODULE: ./src/components/layers/EGroupLayer/EGroupLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var EGroupLayer_EGroupLayervue_type_script_lang_js_ = (EGroupLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/layers/EGroupLayer/EGroupLayer.vue





/* normalize component */

var EGroupLayer_component = normalizeComponent(
  EGroupLayer_EGroupLayervue_type_script_lang_js_,
  EGroupLayervue_type_template_id_33fc7b2a_scoped_true_render,
  EGroupLayervue_type_template_id_33fc7b2a_scoped_true_staticRenderFns,
  false,
  null,
  "33fc7b2a",
  null
  
)

/* harmony default export */ var EGroupLayer = (EGroupLayer_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cd162cd-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EGraphic/EGraphic.vue?vue&type=template&id=4bda78eb&scoped=true&
var EGraphicvue_type_template_id_4bda78eb_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var EGraphicvue_type_template_id_4bda78eb_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EGraphic/EGraphic.vue?vue&type=template&id=4bda78eb&scoped=true&

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EGraphic/EGraphic.vue?vue&type=script&lang=js&
//
//
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html


/* harmony default export */ var EGraphicvue_type_script_lang_js_ = ({
  name: 'e-graphic',
  // constructor handles created()
  mixins: [constructorMixin, injectMapViewMixin],
  data: function data() {
    return {
      module: {
        Graphic: null
      }
    };
  },
  methods: {
    afterInitHook: function afterInitHook() {
      var parentView = this.addTo ? this.addTo : this.getMapView().graphics;
      if (!parentView) console.error('[EGraphic] no parent collection found');
      parentView.add(this.module.Graphic);
    },
    beforeDestroyHook: function beforeDestroyHook() {
      // this overrides the "beforeDestroyHook" in constructor mixin
      var parentView = this.addTo ? this.addTo : this.getMapView().graphics;
      parentView.remove(this.module.Graphic);
      this.$emit('remove', this.module.Graphic);
    }
  }
});
// CONCATENATED MODULE: ./src/components/EGraphic/EGraphic.vue?vue&type=script&lang=js&
 /* harmony default export */ var EGraphic_EGraphicvue_type_script_lang_js_ = (EGraphicvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EGraphic/EGraphic.vue





/* normalize component */

var EGraphic_component = normalizeComponent(
  EGraphic_EGraphicvue_type_script_lang_js_,
  EGraphicvue_type_template_id_4bda78eb_scoped_true_render,
  EGraphicvue_type_template_id_4bda78eb_scoped_true_staticRenderFns,
  false,
  null,
  "4bda78eb",
  null
  
)

/* harmony default export */ var EGraphic = (EGraphic_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cd162cd-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/layers/EGraphicsLayer/EGraphicsLayer.vue?vue&type=template&id=5acebf79&scoped=true&
var EGraphicsLayervue_type_template_id_5acebf79_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.booted)?_vm._t("default",null,{"graphicsLayer":_vm.module.GraphicsLayer}):_vm._e()],2)}
var EGraphicsLayervue_type_template_id_5acebf79_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/layers/EGraphicsLayer/EGraphicsLayer.vue?vue&type=template&id=5acebf79&scoped=true&

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/layers/EGraphicsLayer/EGraphicsLayer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
// https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html


/* harmony default export */ var EGraphicsLayervue_type_script_lang_js_ = ({
  name: 'e-graphics-layer',
  mixins: [constructorMixin, injectMapMixin],
  data: function data() {
    return {
      module: {
        GraphicsLayer: null
      }
    };
  }
});
// CONCATENATED MODULE: ./src/components/layers/EGraphicsLayer/EGraphicsLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var EGraphicsLayer_EGraphicsLayervue_type_script_lang_js_ = (EGraphicsLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/layers/EGraphicsLayer/EGraphicsLayer.vue





/* normalize component */

var EGraphicsLayer_component = normalizeComponent(
  EGraphicsLayer_EGraphicsLayervue_type_script_lang_js_,
  EGraphicsLayervue_type_template_id_5acebf79_scoped_true_render,
  EGraphicsLayervue_type_template_id_5acebf79_scoped_true_staticRenderFns,
  false,
  null,
  "5acebf79",
  null
  
)

/* harmony default export */ var EGraphicsLayer = (EGraphicsLayer_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cd162cd-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EMap/EMap.vue?vue&type=template&id=6644e32e&
var EMapvue_type_template_id_6644e32e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"map"},[(_vm.booted)?_vm._t("default",null,{"map":_vm.module.Map}):_vm._e()],2)}
var EMapvue_type_template_id_6644e32e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EMap/EMap.vue?vue&type=template&id=6644e32e&

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/EMap/EMap.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var EMapvue_type_script_lang_js_ = ({
  name: 'e-map',
  provide: function provide() {
    return {
      // this will get injected into all children
      // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
      getMap: this.getMap
    };
  },
  mixins: [constructorMixin],
  props: {
    mapId: {
      type: String,
      default: 'mainMap'
    }
  },
  data: function data() {
    return {
      module: {
        Map: null
      }
    };
  },
  methods: {
    afterInitHook: function afterInitHook() {
      console.log('map after loader init');
    },
    getMap: function getMap() {
      return this.module.Map;
    }
  }
});
// CONCATENATED MODULE: ./src/components/EMap/EMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var EMap_EMapvue_type_script_lang_js_ = (EMapvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/EMap/EMap.vue





/* normalize component */

var EMap_component = normalizeComponent(
  EMap_EMapvue_type_script_lang_js_,
  EMapvue_type_template_id_6644e32e_render,
  EMapvue_type_template_id_6644e32e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EMap = (EMap_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cd162cd-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/views/EMapView/EMapView.vue?vue&type=template&id=56514b63&
var EMapViewvue_type_template_id_56514b63_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mapView"},[(_vm.booted)?_vm._t("default",null,{"mapView":_vm.module.MapView}):_vm._e()],2)}
var EMapViewvue_type_template_id_56514b63_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/views/EMapView/EMapView.vue?vue&type=template&id=56514b63&

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/views/EMapView/EMapView.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var EMapViewvue_type_script_lang_js_ = ({
  name: 'e-map-view',
  mixins: [constructorMixin, injectMapMixin],
  provide: function provide() {
    return {
      // this will get injected into all children
      // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
      getMapView: this.getMapView
    };
  },
  props: {
    events: {
      type: Array,
      default: function _default() {
        return [];
      } // TODO: add validator

    }
  },
  data: function data() {
    return {
      module: {
        MapView: null
      }
    };
  },
  computed: {
    // this overrides mergeProps in constructorMixin
    // this merges with $props.properties passed in
    // MapView requires "map" key in properties passed to constructor
    // https://developers.arcgis.com/javascript/latest/sample-code/intro-mapview/index.html
    mergeProps: function mergeProps() {
      var parentMap = this.addTo ? this.addTo : this.getMap();
      if (!parentMap) console.error('[EPortalItem] no map found');
      return {
        map: parentMap
      };
    }
  },
  methods: {
    afterInitHook: function afterInitHook() {
      console.log('[EMapView] Overriding afterInitHook');
    },
    getMapView: function getMapView() {
      return this.module.MapView;
    }
  }
});
// CONCATENATED MODULE: ./src/components/views/EMapView/EMapView.vue?vue&type=script&lang=js&
 /* harmony default export */ var EMapView_EMapViewvue_type_script_lang_js_ = (EMapViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/views/EMapView/EMapView.vue





/* normalize component */

var EMapView_component = normalizeComponent(
  EMapView_EMapViewvue_type_script_lang_js_,
  EMapViewvue_type_template_id_56514b63_render,
  EMapViewvue_type_template_id_56514b63_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EMapView = (EMapView_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cd162cd-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/layers/EPortalItem/EPortalItem.vue?vue&type=template&id=b5da34ae&scoped=true&
var EPortalItemvue_type_template_id_b5da34ae_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var EPortalItemvue_type_template_id_b5da34ae_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/layers/EPortalItem/EPortalItem.vue?vue&type=template&id=b5da34ae&scoped=true&

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("cac7");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("215a");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("e40e");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js


function _iterableToArrayLimit(arr, i) {
  if (!(is_iterable_default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/layers/EPortalItem/EPortalItem.vue?vue&type=script&lang=js&







function EPortalItemvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function EPortalItemvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EPortalItemvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EPortalItemvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
// https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GeoJSONLayer.html


/* harmony default export */ var EPortalItemvue_type_script_lang_js_ = ({
  name: 'e-portal-item',
  mixins: [constructorMixin, injectMapMixin],
  mounted: function mounted() {
    var _this = this;

    this.loaderInit().then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          Layer = _ref2[0];

      Layer.fromPortalItem(EPortalItemvue_type_script_lang_js_objectSpread({}, _this.properties));
    });
  },
  data: function data() {
    return {
      noInstantiation: true,
      module: {
        Layer: null
      }
    };
  },
  methods: {
    afterInitHook: function afterInitHook() {
      var parentMap = this.addTo ? this.addTo : this.getMap();
      if (!parentMap) console.error('[EPortalItem] no map found');
      this.module.Layer.fromPortalItem(EPortalItemvue_type_script_lang_js_objectSpread({}, this.properties)).then(function (layer) {
        parentMap.add(layer);
      }).catch(function (e) {
        console.error(e);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/layers/EPortalItem/EPortalItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var EPortalItem_EPortalItemvue_type_script_lang_js_ = (EPortalItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/layers/EPortalItem/EPortalItem.vue





/* normalize component */

var EPortalItem_component = normalizeComponent(
  EPortalItem_EPortalItemvue_type_script_lang_js_,
  EPortalItemvue_type_template_id_b5da34ae_scoped_true_render,
  EPortalItemvue_type_template_id_b5da34ae_scoped_true_staticRenderFns,
  false,
  null,
  "b5da34ae",
  null
  
)

/* harmony default export */ var EPortalItem = (EPortalItem_component.exports);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cd162cd-vue-loader-template"}!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/views/ESceneView/ESceneView.vue?vue&type=template&id=dae1e886&scoped=true&
var ESceneViewvue_type_template_id_dae1e886_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sceneView"},[(_vm.booted)?_vm._t("default",null,{"sceneView":_vm.module.SceneView}):_vm._e()],2)}
var ESceneViewvue_type_template_id_dae1e886_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/views/ESceneView/ESceneView.vue?vue&type=template&id=dae1e886&scoped=true&

// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--12-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/thread-loader/dist/cjs.js!/Users/matteking/Dev/vue-mapp-kit/node_modules/babel-loader/lib!/Users/matteking/Dev/vue-mapp-kit/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/matteking/Dev/vue-mapp-kit/node_modules/vue-loader/lib??vue-loader-options!./src/components/views/ESceneView/ESceneView.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var ESceneViewvue_type_script_lang_js_ = ({
  name: 'e-scene-view',
  mixins: [constructorMixin, injectMapMixin],
  provide: function provide() {
    return {
      // this will get injected into all children
      // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
      getMapView: this.getMapView
    };
  },
  data: function data() {
    return {
      module: {
        SceneView: null
      }
    };
  },
  computed: {
    // this overrides mergeProps in constructorMixin
    // this merges with $props.properties passed in
    // MapView requires "map" key in properties passed to constructor
    // https://developers.arcgis.com/javascript/latest/sample-code/intro-mapview/index.html
    mergeProps: function mergeProps() {
      var parentMap = this.addTo ? this.addTo : this.getMap();
      if (!parentMap) console.error('[ESceneView] no map found');
      return {
        map: parentMap
      };
    }
  },
  methods: {
    afterInitHook: function afterInitHook() {
      console.log('[EMapView] Overriding afterInitHook');
    },
    getMapView: function getMapView() {
      return this.module.SceneView;
    }
  }
});
// CONCATENATED MODULE: ./src/components/views/ESceneView/ESceneView.vue?vue&type=script&lang=js&
 /* harmony default export */ var ESceneView_ESceneViewvue_type_script_lang_js_ = (ESceneViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/views/ESceneView/ESceneView.vue?vue&type=style&index=0&id=dae1e886&scoped=true&lang=css&
var ESceneViewvue_type_style_index_0_id_dae1e886_scoped_true_lang_css_ = __webpack_require__("fba4");

// CONCATENATED MODULE: ./src/components/views/ESceneView/ESceneView.vue






/* normalize component */

var ESceneView_component = normalizeComponent(
  ESceneView_ESceneViewvue_type_script_lang_js_,
  ESceneViewvue_type_template_id_dae1e886_scoped_true_render,
  ESceneViewvue_type_template_id_dae1e886_scoped_true_staticRenderFns,
  false,
  null,
  "dae1e886",
  null
  
)

/* harmony default export */ var ESceneView = (ESceneView_component.exports);
// CONCATENATED MODULE: ./src/components/index.js











// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__("8bbf");
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/buses/index.js

/* harmony default export */ var buses = (new external_vue_default.a());
// CONCATENATED MODULE: ./src/main.js
 // import mappKitStore from './store/modules/mainStore'




Object(external_esri_loader_["loadCss"])('https://js.arcgis.com/4.10/esri/css/main.css'); // TODO: test options

var main_createInstaller = function createInstaller(c) {
  return function (Vue, options) {
    var bus = buses;
    Object.defineProperty(Vue.prototype, '$mappKitBus', {
      //for "this.$bus"
      get: function get() {
        return bus;
      },
      set: function set(evt) {
        //alt way to send an event (this.$bus=['event_name',arg1,arg2])
        if (typeof evt === 'string') evt = [evt];
        bus.$emit.apply(bus, evt);
      }
    }); // do something with options

    registerComponents(Vue, c); // if (!options.store) console.error('[@vue-mapp-kit/leaflet] Please pass in reference to your store')
    // options.store.registerModule('mappKit', mappKitStore)
  };
}; // https://vuejs.org/v2/guide/plugins.html
// Vue plugins, at minimum, need to return an object with an install function
// createInstaller is a double arrow function;
//returns another function, creates a closure over imported components


var MappKitEsri = {
  install: main_createInstaller(components_namespaceObject)
};
var Bus = buses;
/* harmony default export */ var main = (MappKitEsri);
// CONCATENATED MODULE: /Users/matteking/Dev/vue-mapp-kit/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport Bus */__webpack_require__.d(__webpack_exports__, "Bus", function() { return Bus; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ }),

/***/ "1d6a":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("2058");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("39b1"), 'Object', { defineProperty: __webpack_require__("5300").f });


/***/ }),

/***/ "1e81":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("7541");
__webpack_require__("febd");
__webpack_require__("164f");
__webpack_require__("63e4");
__webpack_require__("6924");
__webpack_require__("611f");
module.exports = __webpack_require__("ac5a").Promise;


/***/ }),

/***/ "1ece":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("6800");
var defined = __webpack_require__("ad4e");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "2004":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


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

/***/ "215a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("c4b2");

/***/ }),

/***/ "25a6":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "267e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("851e");
var core = __webpack_require__("ac5a");
var dP = __webpack_require__("5300");
var DESCRIPTORS = __webpack_require__("39b1");
var SPECIES = __webpack_require__("783f")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "268d":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "2745":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("615b");
var toIObject = __webpack_require__("1ece");
var arrayIndexOf = __webpack_require__("2752")(false);
var IE_PROTO = __webpack_require__("b9b8")('IE_PROTO');

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

/***/ "2752":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("1ece");
var toLength = __webpack_require__("30fb");
var toAbsoluteIndex = __webpack_require__("e946");
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

/***/ "2a73":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("5300").f;
var has = __webpack_require__("615b");
var TAG = __webpack_require__("783f")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "2b93":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2b93__;

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

/***/ "3083":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "30fb":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("268d");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "325e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1e81");

/***/ }),

/***/ "32b5":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("ad4e");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "336e":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("7bb7");
var TAG = __webpack_require__("783f")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


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

/***/ "4304":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("851e");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "443a":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "47a7":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("336e");
var ITERATOR = __webpack_require__("783f")('iterator');
var Iterators = __webpack_require__("b517");
module.exports = __webpack_require__("ac5a").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "4a62":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("f1f4");
var aFunction = __webpack_require__("573a");
var SPECIES = __webpack_require__("783f")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "4b8f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("52db");
var $export = __webpack_require__("2058");
var redefine = __webpack_require__("1289");
var hide = __webpack_require__("6fde");
var Iterators = __webpack_require__("b517");
var $iterCreate = __webpack_require__("ce37");
var setToStringTag = __webpack_require__("2a73");
var getPrototypeOf = __webpack_require__("6b1d");
var ITERATOR = __webpack_require__("783f")('iterator');
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

/***/ "4bb2":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("268d");
var defined = __webpack_require__("ad4e");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "50cc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("0e8c").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "52db":
/***/ (function(module, exports) {

module.exports = true;


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

/***/ "5408":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("164f");
__webpack_require__("febd");
module.exports = __webpack_require__("47a7");


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

/***/ "58e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("573a");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "5c50":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "611f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("2058");
var newPromiseCapability = __webpack_require__("58e8");
var perform = __webpack_require__("cbbb");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "615b":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6342":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("f1f4");
var isObject = __webpack_require__("bdb7");
var newPromiseCapability = __webpack_require__("58e8");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "63e4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("52db");
var global = __webpack_require__("851e");
var ctx = __webpack_require__("7564");
var classof = __webpack_require__("336e");
var $export = __webpack_require__("2058");
var isObject = __webpack_require__("bdb7");
var aFunction = __webpack_require__("573a");
var anInstance = __webpack_require__("b349");
var forOf = __webpack_require__("f6ff");
var speciesConstructor = __webpack_require__("4a62");
var task = __webpack_require__("0a66").set;
var microtask = __webpack_require__("e980")();
var newPromiseCapabilityModule = __webpack_require__("58e8");
var perform = __webpack_require__("cbbb");
var userAgent = __webpack_require__("4304");
var promiseResolve = __webpack_require__("6342");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("783f")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("a9ad")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("2a73")($Promise, PROMISE);
__webpack_require__("267e")(PROMISE);
Wrapper = __webpack_require__("ac5a")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("1161")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "6800":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("7bb7");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6924":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("2058");
var core = __webpack_require__("ac5a");
var global = __webpack_require__("851e");
var speciesConstructor = __webpack_require__("4a62");
var promiseResolve = __webpack_require__("6342");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "6b1d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("615b");
var toObject = __webpack_require__("32b5");
var IE_PROTO = __webpack_require__("b9b8")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
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

/***/ "6f52":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
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

/***/ "7541":
/***/ (function(module, exports) {



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

/***/ "783f":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("933d")('wks');
var uid = __webpack_require__("6f52");
var Symbol = __webpack_require__("851e").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


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

/***/ "7a0a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c0cc");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("0ed3").default
var update = add("6d300974", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7bb7":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "7dac":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("b517");
var ITERATOR = __webpack_require__("783f")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "80d1":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("7bb7");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "8109":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "82e1":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


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

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

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

/***/ "8ff6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("c0e2");
var step = __webpack_require__("3083");
var Iterators = __webpack_require__("b517");
var toIObject = __webpack_require__("1ece");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("4b8f")(Array, 'Array', function (iterated, kind) {
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

/***/ "933d":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("ac5a");
var global = __webpack_require__("851e");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("52db") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
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

/***/ "a9ad":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("6fde");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "ac5a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "ad4e":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


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

/***/ "b349":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "b517":
/***/ (function(module, exports) {

module.exports = {};


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

/***/ "b9b8":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("933d")('keys');
var uid = __webpack_require__("6f52");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
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

/***/ "c075":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("851e").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "c0cc":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("443a")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "c0e2":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "c279":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("2058");

$export($export.S, 'Array', { isArray: __webpack_require__("80d1") });


/***/ }),

/***/ "c4b2":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("164f");
__webpack_require__("febd");
module.exports = __webpack_require__("0647");


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

/***/ "c9ec":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("f1f4");
var dPs = __webpack_require__("df9e");
var enumBugKeys = __webpack_require__("82e1");
var IE_PROTO = __webpack_require__("b9b8")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("d5b2")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("c075").appendChild(iframe);
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

/***/ "cac7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ded8");

/***/ }),

/***/ "cbbb":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "cd30":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("3d85") && !__webpack_require__("a124")(function () {
  return Object.defineProperty(__webpack_require__("9b86")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ce37":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("c9ec");
var descriptor = __webpack_require__("8c78");
var setToStringTag = __webpack_require__("2a73");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("6fde")(IteratorPrototype, __webpack_require__("783f")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "d0e9":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


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

/***/ "d6c7":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("336e");
var ITERATOR = __webpack_require__("783f")('iterator');
var Iterators = __webpack_require__("b517");
module.exports = __webpack_require__("ac5a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
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

/***/ "ded8":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c279");
module.exports = __webpack_require__("ac5a").Array.isArray;


/***/ }),

/***/ "df26":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "df9e":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("5300");
var anObject = __webpack_require__("f1f4");
var getKeys = __webpack_require__("029b");

module.exports = __webpack_require__("39b1") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


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

/***/ "e40e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5408");

/***/ }),

/***/ "e946":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("268d");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "e980":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("851e");
var macrotask = __webpack_require__("0a66").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("7bb7")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


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

/***/ "f6f1":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("f1f4");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "f6ff":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("7564");
var call = __webpack_require__("f6f1");
var isArrayIter = __webpack_require__("7dac");
var anObject = __webpack_require__("f1f4");
var toLength = __webpack_require__("30fb");
var getIterFn = __webpack_require__("d6c7");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "f962":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("3460")('keys');
var uid = __webpack_require__("f455");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "fba4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ESceneView_vue_vue_type_style_index_0_id_dae1e886_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7a0a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ESceneView_vue_vue_type_style_index_0_id_dae1e886_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ESceneView_vue_vue_type_style_index_0_id_dae1e886_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ESceneView_vue_vue_type_style_index_0_id_dae1e886_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "febd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("4bb2")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("4b8f")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ })

/******/ });
});
//# sourceMappingURL=mapp-kit-esri.umd.js.map