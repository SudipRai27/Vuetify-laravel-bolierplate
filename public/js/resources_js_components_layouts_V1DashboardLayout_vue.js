(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_layouts_V1DashboardLayout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/v1/partials/Footer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/v1/partials/Footer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Footer"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/v1/partials/Navbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/v1/partials/Navbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navLinks */ "./resources/js/components/dashboard/v1/partials/navLinks.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Navbar",
  data: function data() {
    return {
      sidebarMenu: true,
      toggleMini: false,
      navLinks: _navLinks__WEBPACK_IMPORTED_MODULE_0__.default,
      dropdownItems: [{
        title: "Dashboard",
        route: "/v1/dashboard/home"
      }, {
        title: "Projects",
        route: "/v1/dashboard/projects"
      }, {
        title: "Teams",
        route: "/v1/dashboard/teams"
      }, {
        title: "Companies",
        route: "/v1/dashboard/companies"
      }, {
        title: "Home",
        route: "/"
      }]
    };
  },
  methods: {
    toggleTheme: function toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  },
  computed: {
    mini: {
      get: function get() {
        return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
      },
      set: function set() {}
    },
    buttonText: function buttonText() {
      return !this.$vuetify.theme.dark ? "Go Dark" : "Go Light";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/V1DashboardLayout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/V1DashboardLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashboard_v1_partials_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../dashboard/v1/partials/Navbar */ "./resources/js/components/dashboard/v1/partials/Navbar.vue");
/* harmony import */ var _dashboard_v1_partials_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dashboard/v1/partials/Footer */ "./resources/js/components/dashboard/v1/partials/Footer.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "V1DashboardLayout",
  data: function data() {
    return {};
  },
  components: {
    Navbar: _dashboard_v1_partials_Navbar__WEBPACK_IMPORTED_MODULE_0__.default,
    Footer: _dashboard_v1_partials_Footer__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./resources/js/components/dashboard/v1/partials/navLinks.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/dashboard/v1/partials/navLinks.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  icon: "mdi-home-outline",
  title: "Dashboard",
  href: "/v1/dashboard/home"
}, {
  icon: "mdi-shield-account",
  title: "My Projects",
  href: "/v1/dashboard/projects"
}, {
  icon: "mdi-shield-account",
  title: "Teams",
  href: "/v1/dashboard/teams"
}, {
  icon: "mdi-one-up",
  title: "Companies",
  href: "/v1/dashboard/companies"
}, {
  icon: "mdi-one-up",
  title: "Home",
  href: "/"
}]);

/***/ }),

/***/ "./resources/js/components/dashboard/v1/partials/Footer.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/dashboard/v1/partials/Footer.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_7edb516a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=7edb516a& */ "./resources/js/components/dashboard/v1/partials/Footer.vue?vue&type=template&id=7edb516a&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/v1/partials/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Footer_vue_vue_type_template_id_7edb516a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_7edb516a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/v1/partials/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/v1/partials/Navbar.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/dashboard/v1/partials/Navbar.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue_vue_type_template_id_1d8d755f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=1d8d755f& */ "./resources/js/components/dashboard/v1/partials/Navbar.vue?vue&type=template&id=1d8d755f&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/v1/partials/Navbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Navbar_vue_vue_type_template_id_1d8d755f___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navbar_vue_vue_type_template_id_1d8d755f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/v1/partials/Navbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/V1DashboardLayout.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/layouts/V1DashboardLayout.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _V1DashboardLayout_vue_vue_type_template_id_4b6eee82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./V1DashboardLayout.vue?vue&type=template&id=4b6eee82& */ "./resources/js/components/layouts/V1DashboardLayout.vue?vue&type=template&id=4b6eee82&");
/* harmony import */ var _V1DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./V1DashboardLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/V1DashboardLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _V1DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _V1DashboardLayout_vue_vue_type_template_id_4b6eee82___WEBPACK_IMPORTED_MODULE_0__.render,
  _V1DashboardLayout_vue_vue_type_template_id_4b6eee82___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/V1DashboardLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/v1/partials/Footer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/dashboard/v1/partials/Footer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/v1/partials/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/dashboard/v1/partials/Navbar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/dashboard/v1/partials/Navbar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/v1/partials/Navbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/layouts/V1DashboardLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/layouts/V1DashboardLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_V1DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./V1DashboardLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/V1DashboardLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_V1DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/dashboard/v1/partials/Footer.vue?vue&type=template&id=7edb516a&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/v1/partials/Footer.vue?vue&type=template&id=7edb516a& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_7edb516a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_7edb516a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_7edb516a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=7edb516a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/v1/partials/Footer.vue?vue&type=template&id=7edb516a&");


/***/ }),

/***/ "./resources/js/components/dashboard/v1/partials/Navbar.vue?vue&type=template&id=1d8d755f&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/v1/partials/Navbar.vue?vue&type=template&id=1d8d755f& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_1d8d755f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_1d8d755f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_1d8d755f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=template&id=1d8d755f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/v1/partials/Navbar.vue?vue&type=template&id=1d8d755f&");


/***/ }),

/***/ "./resources/js/components/layouts/V1DashboardLayout.vue?vue&type=template&id=4b6eee82&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/layouts/V1DashboardLayout.vue?vue&type=template&id=4b6eee82& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_V1DashboardLayout_vue_vue_type_template_id_4b6eee82___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_V1DashboardLayout_vue_vue_type_template_id_4b6eee82___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_V1DashboardLayout_vue_vue_type_template_id_4b6eee82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./V1DashboardLayout.vue?vue&type=template&id=4b6eee82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/V1DashboardLayout.vue?vue&type=template&id=4b6eee82&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/v1/partials/Footer.vue?vue&type=template&id=7edb516a&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/v1/partials/Footer.vue?vue&type=template&id=7edb516a& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-footer",
    { staticClass: "py-3", attrs: { "clipped-right": "" } },
    [_c("span", { staticClass: "ml-auto overline" }, [_vm._v("Iatek ©2020")])]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/v1/partials/Navbar.vue?vue&type=template&id=1d8d755f&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/v1/partials/Navbar.vue?vue&type=template&id=1d8d755f& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    [
      _c(
        "v-app-bar",
        { attrs: { app: "", dark: "", color: "success", elevation: "0" } },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.sidebarMenu = !_vm.sidebarMenu
              }
            }
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: { "offset-y": "" },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._g(
                          _vm._b(
                            { attrs: { color: "grey", dark: "" } },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [
                          _c("v-icon", { attrs: { left: "" } }, [
                            _vm._v("mdi-chevron-down")
                          ]),
                          _vm._v("\n          Menu\n        ")
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "v-list",
                _vm._l(_vm.dropdownItems, function(item, index) {
                  return _c(
                    "v-list-item",
                    { key: index, attrs: { router: "", to: item.route } },
                    [_c("v-list-item-title", [_vm._v(_vm._s(item.title))])],
                    1
                  )
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mr-2",
              attrs: { color: "primary" },
              on: { click: _vm.toggleTheme }
            },
            [_vm._v(_vm._s(_vm.buttonText))]
          ),
          _vm._v(" "),
          _c("v-icon", [_vm._v("mdi-account")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-navigation-drawer",
        {
          staticClass: "primary",
          attrs: {
            app: "",
            floating: "",
            permanent: _vm.sidebarMenu,
            "mini-variant": _vm.mini,
            dark: ""
          },
          on: {
            "update:miniVariant": function($event) {
              _vm.mini = $event
            },
            "update:mini-variant": function($event) {
              _vm.mini = $event
            }
          },
          model: {
            value: _vm.sidebarMenu,
            callback: function($$v) {
              _vm.sidebarMenu = $$v
            },
            expression: "sidebarMenu"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "", color: "primary", dark: "" } },
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-action",
                    [
                      _c(
                        "v-icon",
                        {
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              _vm.toggleMini = !_vm.toggleMini
                            }
                          }
                        },
                        [_vm._v("mdi-chevron-left")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [
                        _c("h3", { staticClass: "font-weight-thin" }, [
                          _vm._v("Vuetify Dashboard")
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list",
            _vm._l(_vm.navLinks, function(nav) {
              return _c(
                "v-list-item",
                { key: nav.title, attrs: { link: "", to: nav.href } },
                [
                  _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              var attrs = ref.attrs
                              return [
                                _c(
                                  "v-list-item-icon",
                                  _vm._g(
                                    _vm._b(
                                      {},
                                      "v-list-item-icon",
                                      attrs,
                                      false
                                    ),
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "white" } },
                                      [_vm._v(_vm._s(nav.icon))]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c(
                                      "v-list-item-title",
                                      { attrs: { color: "white" } },
                                      [_vm._v(_vm._s(nav.title))]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    },
                    [_vm._v(" "), _c("span", [_vm._v(_vm._s(nav.title))])]
                  )
                ],
                1
              )
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/V1DashboardLayout.vue?vue&type=template&id=4b6eee82&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/V1DashboardLayout.vue?vue&type=template&id=4b6eee82& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { staticClass: "poppins-font" },
    [
      _c("Navbar"),
      _vm._v(" "),
      _c("v-main", { staticClass: "grey lighten-3" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);