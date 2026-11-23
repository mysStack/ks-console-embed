(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_components_CodeEditor_js"],{

/***/ "./src/components/CodeEditor.js"
/*!**************************************!*\
  !*** ./src/components/CodeEditor.js ***!
  \**************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module16 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5299.js */ "./src/shims/react-ace.js"));
__webpack_require__(/*! unpacked/module-5305.js */ "./src/shims/ace-webpack-resolver.js");
__webpack_require__(/*! unpacked/module-5720.js */ "./src/shims/ace-side-effect.js");
__webpack_require__(/*! unpacked/module-5721.js */ "./src/shims/ace-side-effect.js");
__webpack_require__(/*! unpacked/module-5722.js */ "./src/shims/ace-side-effect.js");
__webpack_require__(/*! unpacked/module-5723.js */ "./src/shims/ace-side-effect.js");
__webpack_require__(/*! unpacked/module-5724.js */ "./src/shims/ace-side-effect.js");
__webpack_require__(/*! unpacked/module-5725.js */ "./src/shims/ace-side-effect.js");
__webpack_require__(/*! unpacked/module-5726.js */ "./src/shims/ace-side-effect.js");
__webpack_require__(/*! unpacked/module-5727.js */ "./src/shims/ace-side-effect.js");
__webpack_require__(/*! unpacked/module-5728.js */ "./src/shims/ace-side-effect.js");
__webpack_require__(/*! unpacked/module-5729.js */ "./src/unpacked/module-5729.js");
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const Module5299 = (0, _recoverInterop.__recoverInterop)(_Module);
const u = (Component_1 => {
  module55(i, Component_1);
  var t = (e => {
    const t = (() => {
      if (typeof Reflect === "undefined" || !Reflect.construct) {
        return false;
      }
      if (Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy === "function") {
        return true;
      }
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    })();
    return function () {
      let i;
      const n = module51(e);
      if (t) {
        const o = module51(this).constructor;
        i = Reflect.construct(n, arguments, o);
      } else {
        i = n.apply(this, arguments);
      }
      return module56(this, i);
    };
  })(i);
  function i() {
    module36(this, i);
    return t.apply(this, arguments);
  }
  module37(i, [{
    key: "render",
    value: function () {
      return /*#__PURE__*/React.createElement(Module5299, _extends({
        theme: "chaos",
        width: "auto",
        height: "100%",
        tabSize: 2,
        editorProps: {
          $blockScrolling: true
        },
        showPrintMargin: false,
        keyboardHandler: "vscode",
        wrapEnabled: true
      }, this.props));
    }
  }]);
  return i;
})(_module16.Component);
var _default = exports["default"] = u;

/***/ },

/***/ "./src/shims/ace-side-effect.js"
/*!**************************************!*\
  !*** ./src/shims/ace-side-effect.js ***!
  \**************************************/
(module) {

module.exports = {};

/***/ },

/***/ "./src/shims/ace-webpack-resolver.js"
/*!*******************************************!*\
  !*** ./src/shims/ace-webpack-resolver.js ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const ace = __webpack_require__(/*! ace-builds/src-noconflict/ace */ "./node_modules/ace-builds/src-noconflict/ace.js");
if (typeof window !== "undefined") {
  window.ace = ace;
}
__webpack_require__(/*! ace-builds/src-noconflict/mode-yaml */ "./node_modules/ace-builds/src-noconflict/mode-yaml.js");
__webpack_require__(/*! ace-builds/src-noconflict/mode-groovy */ "./node_modules/ace-builds/src-noconflict/mode-groovy.js");
__webpack_require__(/*! ace-builds/src-noconflict/theme-chaos */ "./node_modules/ace-builds/src-noconflict/theme-chaos.js");
__webpack_require__(/*! ace-builds/src-noconflict/keybinding-vscode */ "../../node_modules/ace-builds/src-noconflict/keybinding-vscode.js");
__webpack_require__(/*! ace-builds/src-noconflict/ext-searchbox */ "./node_modules/ace-builds/src-noconflict/ext-searchbox.js");
module.exports = {};

/***/ },

/***/ "./src/shims/react-ace.js"
/*!********************************!*\
  !*** ./src/shims/react-ace.js ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

const lib = __webpack_require__(/*! react-ace */ "./node_modules/react-ace/lib/index.js");
const AceEditor = lib.default || lib;
module.exports = AceEditor;
module.exports["default"] = AceEditor;
module.exports.diff = lib.diff;
module.exports.split = lib.split;

/***/ },

/***/ "./src/unpacked/module-5729.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5729.js ***!
  \*************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {};

/***/ }

}]);