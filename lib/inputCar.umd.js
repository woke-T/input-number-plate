(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["inputCar"] = factory();
	else
		root["inputCar"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "b060":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "db17":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_number_plate_vue_vue_type_style_index_0_id_2f933859_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b060");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_number_plate_vue_vue_type_style_index_0_id_2f933859_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_number_plate_vue_vue_type_style_index_0_id_2f933859_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_input_number_plate_vue_vue_type_style_index_0_id_2f933859_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
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

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"65917d58-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-number-plate/src/input-number-plate.vue?vue&type=template&id=2f933859&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[(_vm.visible)?_c('div',{staticClass:"back-bord",on:{"click":function($event){return _vm.cancel()}}}):_vm._e(),_vm._t("default"),(_vm.defaultType)?_c('div',{ref:"inputBlock",staticClass:"data-show",on:{"click":function($event){return _vm.open()}}},_vm._l((8),function(n){return _c('div',{key:n,class:['data-show-block', { active: _vm.inputValue.length === n - 1 }]},[_vm._v(" "+_vm._s(_vm.inputValue[n - 1])+" ")])}),0):_vm._e(),_c('transition',{attrs:{"name":"keybordSlide"}},[(_vm.visible)?_c('div',{staticClass:"keybord-wrap"},[_c('header',{staticClass:"keybord-header"},[_c('span',{on:{"click":function($event){$event.stopPropagation();return _vm.cancel()}}},[_vm._v("取消")]),_c('span',{class:[{ gray: _vm.inputValue.length !== 8 }],on:{"click":function($event){$event.stopPropagation();return _vm.submit()}}},[_vm._v("完成")])]),_c('div',{staticClass:"keybord-keys"},[(_vm.keybordType === '字')?_c('ul',{staticClass:"keybord-keys-word-wrap"},_vm._l((_vm.wordList.slice(0, 30)),function(item){return _c('li',{key:item,staticClass:"button",on:{"click":function($event){$event.stopPropagation();return _vm.inputWord(item)}}},[_vm._v(" "+_vm._s(item)+" ")])}),0):_c('div',[_c('ul',{staticClass:"keybord-keys-abc-wrap"},_vm._l((_vm.abcList.slice(0, 10)),function(item){return _c('li',{key:item,staticClass:"button",on:{"click":function($event){$event.stopPropagation();return _vm.inputWord(item)}}},[_vm._v(" "+_vm._s(item)+" ")])}),0),_c('ul',{staticClass:"keybord-keys-abc-wrap"},_vm._l((_vm.abcList.slice(10, 20)),function(item){return _c('li',{key:item,staticClass:"button",on:{"click":function($event){$event.stopPropagation();return _vm.inputWord(item)}}},[_vm._v(" "+_vm._s(item)+" ")])}),0),_c('ul',{staticClass:"keybord-keys-abc-wrap-short"},_vm._l((_vm.abcList.slice(20, 29)),function(item){return _c('li',{key:item,staticClass:"button",on:{"click":function($event){$event.stopPropagation();return _vm.inputWord(item)}}},[_vm._v(" "+_vm._s(item)+" ")])}),0)]),_c('div',{staticClass:"keybord-keys-bottom"},[_c('div',{staticClass:"big-button",on:{"click":function($event){$event.stopPropagation();return _vm.toggle()}}},[_vm._v(" "+_vm._s(_vm.keybordType)+" ")]),_c('ul',{staticClass:"keybord-keys-bottom-line"},_vm._l((_vm.judgeList),function(item){return _c('li',{key:item,staticClass:"button"},[_vm._v(" "+_vm._s(item)+" ")])}),0),_c('div',{staticClass:"big-button",on:{"click":function($event){$event.stopPropagation();return _vm.deleteOne()}}},[_c('img',{attrs:{"src":"data:image/png;base64,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","alt":""}})])])])]):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/input-number-plate/src/input-number-plate.vue?vue&type=template&id=2f933859&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/input-number-plate/src/input-number-plate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var input_number_platevue_type_script_lang_js_ = ({
  name: "InputCar",
  props: {
    defaultType: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      placehoderDom: null,
      keybordType: "字",
      inputValue: [],
      visible: false,
      wordList: [
        "京",
        "津",
        "渝",
        "沪",
        "冀",
        "晋",
        "辽",
        "吉",
        "黑",
        "苏",
        "浙",
        "皖",
        "闽",
        "赣",
        "鲁",
        "豫",
        "鄂",
        "湘",
        "粤",
        "琼",
        "川",
        "贵",
        "云",
        "陕",
        "甘",
        "青",
        "蒙",
        "桂",
        "宁",
        "新",
        "藏",
        "使",
        "领",
        "警",
        "学",
        "港",
        "澳"
      ],
      abcList: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        0,
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M"
      ]
    };
  },
  computed: {
    judgeList() {
      if (this.keybordType === "ABC") {
        return this.abcList.slice(29, 36);
      } else {
        return this.wordList.slice(30, 37);
      }
    }
  },
  methods: {
    // 键盘类型切换
    toggle() {
      if (
        this.inputValue.length === 0 ||
        (this.inputValue.length > 0 && this.inputValue.length < 7)
      )
        return;
      this.keybordType = this.keybordType === "ABC" ? "字" : "ABC";
    },
    // 文字输入
    inputWord(word) {
      if (this.inputValue.length === 8) return;
      this.inputValue.push(word);
    },
    // 删除一个字符
    deleteOne() {
      this.inputValue.pop();
    },
    // 取消
    cancel() {
      this.visible = false;
      this.inputValue = [];
    },
    // 完成
    submit() {
      if (this.inputValue.length !== 8) return;
      this.$emit("submit", this.inputValue.join(""));
    },
    // 打开键盘
    open() {
      this.visible = true;
    },
    //判断展示框是否被键盘挡住
    checkInputLocation() {
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const inputTopHeight = this.$refs.inputBlock.getBoundingClientRect().top;
      const inputHeight = this.$refs.inputBlock.scrollHeight;
      //如果键盘被挡住，并且页面没有滚动条,返回true
      if (
        inputHeight + 250 + inputTopHeight >= clientHeight &&
        scrollHeight === clientHeight
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.placehoderDom = document.createElement("div");
    this.placehoderDom.style.cssText =
      "height: 260px;width: 100%;background: red;opacity:0";
    this.placehoderDom.style.display = "none";
    document.body.appendChild(this.placehoderDom);
  },
  watch: {
    inputValue(key) {
      if (this.inputValue.length === 0) this.keybordType = "字";
      if (this.inputValue.length > 0 && this.inputValue.length < 8)
        this.keybordType = "ABC";
    },
    visible(type) {
      if (type) {
        //键盘唤醒并且键盘挡住输入框,同时页面无滚动条时，占位块展示出来从而使页面可以通过scrllTo()来滚动
        if (this.checkInputLocation()) {
          this.placehoderDom.style.display = "block";
        }
        window.scrollTo(0, 250);
      } else {
        document.body.scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
        this.placehoderDom.style.display = "none";
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/input-number-plate/src/input-number-plate.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_input_number_platevue_type_script_lang_js_ = (input_number_platevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/input-number-plate/src/input-number-plate.vue?vue&type=style&index=0&id=2f933859&scoped=true&lang=less&
var input_number_platevue_type_style_index_0_id_2f933859_scoped_true_lang_less_ = __webpack_require__("db17");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./packages/input-number-plate/src/input-number-plate.vue






/* normalize component */

var component = normalizeComponent(
  src_input_number_platevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2f933859",
  null
  
)

/* harmony default export */ var input_number_plate = (component.exports);
// CONCATENATED MODULE: ./packages/input-number-plate/index.js


input_number_plate.install = function(Vue) {
  Vue.component(input_number_plate.name,input_number_plate)
}

/* harmony default export */ var packages_input_number_plate = (input_number_plate);
// CONCATENATED MODULE: ./packages/index.js
// 导入车牌号输入组件


// 组件列表
const components = [packages_input_number_plate]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  if(install.installed) return;

  // 注册全局组件
  components.map(component=>Vue.component(component.name,component))
}

//判断是否直接引入组件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  InputCar: packages_input_number_plate
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=inputCar.umd.js.map