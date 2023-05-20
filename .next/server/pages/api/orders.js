"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDLGtCQUFrQjtJQUNoQyxJQUFJRCx1RUFBOEIsS0FBSyxHQUFHO1FBQ3hDLE9BQU9BLG9FQUE2QjtJQUN0QyxPQUFPO1FBQ0wsTUFBTUssTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQ25DLE9BQU9SLHVEQUFnQixDQUFDSztJQUMxQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL2xpYi9tb25nb29zZS5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb25nb29zZUNvbm5lY3QoKSB7XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gMSkge1xyXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb24uYXNQcm9taXNlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QodXJpKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb25nb29zZUNvbm5lY3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Order\": () => (/* binding */ Order)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst OrderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    line_items: Object,\n    name: String,\n    email: String,\n    city: String,\n    postalCode: String,\n    streetAddress: String,\n    country: String,\n    paid: Boolean\n}, {\n    timestamps: true\n});\nconst Order = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Order || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Order\", OrderSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBRS9DLE1BQU1HLGNBQWMsSUFBSUQsNENBQU1BLENBQUM7SUFDN0JFLFlBQVdDO0lBQ1hDLE1BQUtDO0lBQ0xDLE9BQU1EO0lBQ05FLE1BQUtGO0lBQ0xHLFlBQVdIO0lBQ1hJLGVBQWNKO0lBQ2RLLFNBQVFMO0lBQ1JNLE1BQUtDO0FBQ1AsR0FBRztJQUNEQyxZQUFZLElBQUk7QUFDbEI7QUFFTyxNQUFNQyxRQUFRZiw0Q0FBTUEsRUFBRWUsU0FBU2hCLCtDQUFLQSxDQUFDLFNBQVNHLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9tb2RlbHMvT3JkZXIuanM/ZWIyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21vZGVsLCBtb2RlbHMsIFNjaGVtYX0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBPcmRlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIGxpbmVfaXRlbXM6T2JqZWN0LFxyXG4gIG5hbWU6U3RyaW5nLFxyXG4gIGVtYWlsOlN0cmluZyxcclxuICBjaXR5OlN0cmluZyxcclxuICBwb3N0YWxDb2RlOlN0cmluZyxcclxuICBzdHJlZXRBZGRyZXNzOlN0cmluZyxcclxuICBjb3VudHJ5OlN0cmluZyxcclxuICBwYWlkOkJvb2xlYW4sXHJcbn0sIHtcclxuICB0aW1lc3RhbXBzOiB0cnVlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBPcmRlciA9IG1vZGVscz8uT3JkZXIgfHwgbW9kZWwoJ09yZGVyJywgT3JkZXJTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIk9yZGVyU2NoZW1hIiwibGluZV9pdGVtcyIsIk9iamVjdCIsIm5hbWUiLCJTdHJpbmciLCJlbWFpbCIsImNpdHkiLCJwb3N0YWxDb2RlIiwic3RyZWV0QWRkcmVzcyIsImNvdW50cnkiLCJwYWlkIiwiQm9vbGVhbiIsInRpbWVzdGFtcHMiLCJPcmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Order.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders.js":
/*!*****************************!*\
  !*** ./pages/api/orders.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Order */ \"(api)/./models/Order.js\");\n\n\nasync function handler(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.mongooseConnect)();\n    res.json(await _models_Order__WEBPACK_IMPORTED_MODULE_1__.Order.find().sort({\n        createdAt: -1\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUNWO0FBRXRCLGVBQWVFLFFBQVFDLEdBQUcsRUFBQ0MsR0FBRyxFQUFFO0lBQzdDLE1BQU1KLDhEQUFlQTtJQUNyQkksSUFBSUMsSUFBSSxDQUFDLE1BQU1KLHFEQUFVLEdBQUdNLElBQUksQ0FBQztRQUFDQyxXQUFVLENBQUM7SUFBQztBQUNoRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWFkbWluLy4vcGFnZXMvYXBpL29yZGVycy5qcz8xYTg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bW9uZ29vc2VDb25uZWN0fSBmcm9tIFwiQC9saWIvbW9uZ29vc2VcIjtcclxuaW1wb3J0IHtPcmRlcn0gZnJvbSBcIkAvbW9kZWxzL09yZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpIHtcclxuICBhd2FpdCBtb25nb29zZUNvbm5lY3QoKTtcclxuICByZXMuanNvbihhd2FpdCBPcmRlci5maW5kKCkuc29ydCh7Y3JlYXRlZEF0Oi0xfSkpO1xyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlQ29ubmVjdCIsIk9yZGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImpzb24iLCJmaW5kIiwic29ydCIsImNyZWF0ZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders.js"));
module.exports = __webpack_exports__;

})();