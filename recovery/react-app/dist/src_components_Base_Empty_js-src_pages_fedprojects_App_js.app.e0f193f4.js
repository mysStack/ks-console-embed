"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_components_Base_Empty_js-src_pages_fedprojects_App_js"],{

/***/ "./src/chunks/common/module-1691.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-1691.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-187.js */ "./node_modules/core-js3/modules/es.array.every.js");
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module1 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module186 = (0, _recoverInterop.__recoverInterop)(_module8);
const h = (e => {
  module55(a, e);
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
      let a;
      const r = module51(e);
      if (t) {
        const n = module51(this).constructor;
        a = Reflect.construct(r, arguments, n);
      } else {
        a = r.apply(this, arguments);
      }
      return module56(this, a);
    };
  })(a);
  function a(...n) {
    let e;
    module36(this, a);
    e = t.call(this, ...n);
    e.handleMoreClick = function (t, a) {
      const onClick = e.props.options.find(e => e.key === a).onClick;
      if (onClick) {
        onClick();
      }
    };
    return e;
  }
  module37(a, [{
    key: "renderMoreOptions",
    value: function () {
      const e = this.props.options.map(({
        icon,
        text,
        show = true,
        ...rest
      }) => {
        if (show) {
          return module553.default.createElement(module186.Menu.MenuItem, rest, icon && module553.default.createElement(module186.Icon, {
            name: icon,
            type: "light"
          }), " ", module553.default.createElement("span", {
            "data-test": `detail-${rest.key}`
          }, text));
        }
        return null;
      });
      if (e.every(e => e === null)) {
        return null;
      }
      return module553.default.createElement(module186.Menu, {
        onClick: this.handleMoreClick
      }, e);
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        options,
        className
      } = props;
      if (module63(options)) {
        return null;
      }
      const content = this.renderMoreOptions();
      if (content) {
        return module553.default.createElement(module186.Dropdown, {
          theme: "dark",
          content
        }, module553.default.createElement(module186.Button, {
          className,
          type: "flat",
          icon: "more"
        }));
      }
      return null;
    }
  }]);
  return a;
})(module553.Component);
var _default = exports["default"] = h;
h.propTypes = {
  className: module1.string,
  options: module1.array
};
h.defaultProps = {
  options: []
};

/***/ },

/***/ "./src/chunks/common/module-2046.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2046.js ***!
  \******************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "_2WgnPoNTBlYxMadUOp6X6F",
  primary: "_1N_xYp5Mlw_vRt2GBQPG3_",
  control: "_1GBzD41XmCACAyrxXIpA2g",
  switch: "obdQdmNh6a9AylYbpxZXo",
  inner: "_24C6iSzaC5OhGiAjheEbHW",
  on: "u9GufWWwHgs1SY_uAQQuU",
  disabled: "_2MD8-ccizgfYBdMPKkj0Zv"
};

/***/ },

/***/ "./src/chunks/common/module-2272.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2272.js ***!
  \******************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "Fxc1J8GJ2h6_Qd-n9BxZg",
  content: "_3DotkGf2uSTDa1JBsYdIsb"
};

/***/ },

/***/ "./src/chunks/common/module-2554.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2554.js ***!
  \******************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  tags: "_2KC8WkC9bqH1qrWvM039Pm",
  tagItem: "_3b369oJlYb0lwgL5S0A48o",
  tooltipContent: "_3KpkICBIAQvxNeZXP7y20N"
};

/***/ },

/***/ "./src/components/Base/Empty.js"
/*!**************************************!*\
  !*** ./src/components/Base/Empty.js ***!
  \**************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module18 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2272.js */ "./src/unpacked/module-2272.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module1 = (0, _recoverInterop.__recoverInterop)(_module6);
const module3 = (0, _recoverInterop.__recoverInterop)(_module7);
const module2272 = (0, _recoverInterop.__recoverInterop)(_module8);
const m = (PureComponent_1 => {
  module55(r, PureComponent_1);
  var a = (e => {
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
      let a;
      const r = module51(e);
      if (t) {
        const n = module51(this).constructor;
        a = Reflect.construct(r, arguments, n);
      } else {
        a = r.apply(this, arguments);
      }
      return module56(this, a);
    };
  })(r);
  function r() {
    module36(this, r);
    return a.apply(this, arguments);
  }
  module37(r, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        className,
        img: img_1,
        desc
      } = props;
      return /*#__PURE__*/React.createElement("div", {
        className: module3(module2272.wrapper, className)
      }, /*#__PURE__*/React.createElement("img", {
        src: img_1,
        alt: "No data"
      }), /*#__PURE__*/React.createElement("div", {
        className: module2272.content
      }, t(desc)));
    }
  }]);
  return r;
})(_module18.PureComponent);
var _default = exports["default"] = m;
m.propTypes = {
  className: module1.string,
  img: module1.string,
  desc: module1.string
};
m.defaultProps = {
  img: "/assets/empty-card.svg",
  desc: "NO_DATA"
};

/***/ },

/***/ "./src/components/Base/Switch.js"
/*!***************************************!*\
  !*** ./src/components/Base/Switch.js ***!
  \***************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2046.js */ "./src/unpacked/module-2046.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module31 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module1 = (0, _recoverInterop.__recoverInterop)(_module8);
const module3 = (0, _recoverInterop.__recoverInterop)(_module9);
const module186 = (0, _recoverInterop.__recoverInterop)(_module0);
const module2046 = (0, _recoverInterop.__recoverInterop)(_module1);
const g = (e => {
  module55(a, e);
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
      let a;
      const r = module51(e);
      if (t) {
        const n = module51(this).constructor;
        a = Reflect.construct(r, arguments, n);
      } else {
        a = r.apply(this, arguments);
      }
      return module56(this, a);
    };
  })(a);
  function a(...n) {
    let e;
    module36(this, a);
    e = t.call(this, ...n);
    e.toggleSwitch = function () {
      const e_props = e.props;
      const t_checked = e_props.checked;
      e_props.onChange(!t_checked);
    };
    return e;
  }
  module37(a, [{
    key: "render",
    value: function () {
      let e;
      const props = this.props;
      const {
        className,
        disabled,
        type,
        text,
        checked
      } = props;
      const i = !module63(text);
      return module553.default.createElement(module186.Button, {
        className: module3(module2046.wrapper, module31({}, module2046[type], checked), className),
        type: "default",
        onClick: this.toggleSwitch
      }, module553.default.createElement("label", {
        className: module3(module2046.switch, (e = {}, module31(e, module2046.disabled, disabled), module31(e, module2046.on, checked), e))
      }, i && module553.default.createElement("span", {
        className: module2046.inner
      }, text)));
    }
  }]);
  return a;
})(module553.PureComponent);
var _default = exports["default"] = g;
g.propTypes = {
  className: module1.string,
  type: module1.string,
  text: module1.string,
  disabled: module1.bool,
  checked: module1.bool,
  onChange: module1.func
};
g.defaultProps = {
  type: "primary",
  checked: false,
  onChange: function () {}
};

/***/ },

/***/ "./src/components/Clusters/ClusterWrapper.js"
/*!***************************************************!*\
  !*** ./src/components/Clusters/ClusterWrapper.js ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-48.js */ "./node_modules/core-js3/modules/es.array.slice.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
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
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-321.js */ "./src/unpacked/module-321.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2554.js */ "./src/unpacked/module-2554.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module321 = (0, _recoverInterop.__recoverInterop)(_module7);
const module2554 = (0, _recoverInterop.__recoverInterop)(_module8);
const g = (e => {
  module55(a, e);
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
      let a;
      const r = module51(e);
      if (t) {
        const n = module51(this).constructor;
        a = Reflect.construct(r, arguments, n);
      } else {
        a = r.apply(this, arguments);
      }
      return module56(this, a);
    };
  })(a);
  function a(...n_1) {
    let e;
    module36(this, a);
    e = t.call(this, ...n_1);
    e.renderItem = function (t, a) {
      const r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      const n = module321(e.props.clustersDetail, "name");
      const children = e.props.children;
      const o = n[t.name] || t;
      return module553.default.createElement("span", {
        className: r ? module2554.tagItem : "",
        title: (0, _index.getDisplayNameNew)(o, false),
        key: `${o.name}-${a}`
      }, module553.default.createElement(module186.Tag, {
        key: o.name,
        type: r ? "info" : _constants.CLUSTER_GROUP_TAG_TYPE[o.group]
      }, module553.default.createElement(module186.Icon, {
        name: _constants.CLUSTER_PROVIDER_ICON[o.provider] || "kubernetes",
        size: 16,
        ...(!(_constants.CLUSTER_GROUP_TAG_TYPE[o.group] !== "default" || r) ? {
          type: "light"
        } : {})
      }), children ? children(o) : (0, _index.getDisplayNameNew)(o)));
    };
    e.renderItem1 = function (t, a) {
      return e.renderItem(t, a, false);
    };
    e.renderTooltip = function (t, a) {
      return e.renderItem(t, a, true);
    };
    return e;
  }
  module37(a, [{
    key: "render",
    value: function () {
      const clusters = this.props.clusters;
      const t = clusters === undefined ? [] : clusters;
      const a = module321(this.props.clustersDetail, "name");
      const r = t.filter(e => a[e.name]);
      const n = r.slice(2);
      const l = r.slice(0, 2);
      return module553.default.createElement("div", {
        className: module2554.wrapper
      }, module553.default.createElement("div", {
        className: module2554.tags
      }, l.map(this.renderItem1), n.length ? module553.default.createElement(module186.Tooltip, {
        content: module553.default.createElement("div", {
          className: `flexbox items-center ${module2554.tooltipContent}`
        }, n.map(this.renderTooltip))
      }, module553.default.createElement(module186.Tag, {
        type: "primary"
      }, r.length)) : null, r.length === 0 && "-"));
    }
  }]);
  return a;
})(module553.Component);
var _default = exports["default"] = g;

/***/ },

/***/ "./src/pages/fedprojects/App.js"
/*!**************************************!*\
  !*** ./src/pages/fedprojects/App.js ***!
  \**************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-30.js */ "./src/shims/corejs-es-array-iterator.js");
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-38.js */ "./src/shims/corejs-es-string-iterator.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-32.js */ "./src/unpacked/module-32.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-74.js */ "./src/unpacked/module-74.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module44 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/cluster */ "./src/stores/cluster.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/routes */ "./src/pages/fedprojects/routes.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module74 = (0, _recoverInterop.__recoverInterop)(_module6);
const module14 = (0, _recoverInterop.__recoverInterop)(_module7);
const module186 = (0, _recoverInterop.__recoverInterop)(_module8);
const module437 = (0, _recoverInterop.__recoverInterop)(_module9);
const module438 = (0, _recoverInterop.__recoverInterop)(_module0);
const module4933 = (0, _recoverInterop.__recoverInterop)(_module1);
let u;
const C = (0, _module44.inject)("rootStore")(u = (0, _module44.observer)(u = (e => {
  module55(a, e);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(e) {
    let t;
    module36(this, a);
    t = r.call(this, e);
    t.store = new module437({
      module: "namespaces"
    });
    t.clusterStore = new module438();
    t.init(e.match.params);
    return t;
  }
  module37(a, [{
    key: "componentDidUpdate",
    value: function (e) {
      if (this.project !== e.match.params.namespace) {
        this.init(this.props.match.params);
      }
    }
  }, {
    key: "init",
    value: async function (t) {
      this.store.initializing = true;
      await Promise.all([this.store.fetchDetail({
        ...t,
        name: t.namespace
      }), this.props.rootStore.getRules({
        workspace: t.workspace
      })]);
      await this.props.rootStore.getRules({
        ...t,
        fedProCluster: this.store.detail.clusters.map(e => e.name).join("_")
      });
      await this.clusterStore.fetchList({
        names: this.store.detail.clusters.map(e => e.name).join(","),
        sortBy: "createTime",
        ascending: true,
        limit: -1
      });
      this.store.detail.clusters = module14.toJS(this.clusterStore.list.data);
      this.store.detail.clusters.forEach(e => {
        module74(globals, `clusterConfig.${e.name}`, e.configz);
      });
      globals.app.cacheHistory(this.props.match.url, {
        type: "Multi-cluster Project",
        name: this.store.detail.name,
        aliasName: this.store.detail.aliasName,
        isFedManaged: true
      });
      this.store.initializing = false;
    }
  }, {
    key: "render",
    value: function () {
      if (this.store.initializing) {
        return module553.default.createElement(module186.Loading, {
          className: "ks-page-loading"
        });
      }
      return module553.default.createElement(_module44.Provider, {
        projectStore: this.store
      }, (0, _router.renderRoutes)(module4933));
    }
  }, {
    key: "project",
    get: function () {
      return this.props.match.params.namespace;
    }
  }]);
  return a;
})(module553.Component)) || u) || u;
var _default = exports["default"] = C;

/***/ },

/***/ "./src/pages/fedprojects/applications.js"
/*!***********************************************!*\
  !*** ./src/pages/fedprojects/applications.js ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module38 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module40 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Status */ "./src/components/Base/Status.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Avatar */ "./src/components/Base/Avatar.js"));
var _withList = __webpack_require__(/*! components/HOCs/withList */ "./src/components/HOCs/withList.js");
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! components/Tables/List */ "./src/components/Tables/List.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _Module5 = _interopRequireWildcard(__webpack_require__(/*! components/Clusters/ClusterWrapper */ "./src/components/Clusters/ClusterWrapper.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/application/crd */ "./src/stores/application/crd.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module26 = (0, _recoverInterop.__recoverInterop)(_module6);
const module14 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module796 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module789 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module797 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module4);
const Module1107 = (0, _recoverInterop.__recoverInterop)(_Module5);
const module437 = (0, _recoverInterop.__recoverInterop)(_module8);
const module961 = (0, _recoverInterop.__recoverInterop)(_module9);
let o;
const P = (0, _module40.inject)("projectStore")(o = (0, _withList.withProjectList)({
  store: new module437(new module961()),
  module: "applications",
  name: "APP"
})(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o_1) {
    let e;
    module36(this, a);
    e = r.call(this, ...o_1);
    e.getColumns = function () {
      return [{
        title: t("NAME"),
        dataIndex: "name",
        render: function (t, r) {
          return /*#__PURE__*/React.createElement(Module789, {
            title: (0, _index.getDisplayName)(r),
            avatar: r.icon || "/assets/default-app.svg",
            to: r.deletionTime ? null : `${e.props.match.url}/${t}`,
            desc: module26(r, 'annotations["kubesphere.io/description"]', "-")
          });
        }
      }, {
        title: t("STATUS"),
        dataIndex: "status",
        isHideable: true,
        width: "20%",
        render: function (r, record) {
          if (r === "Deleting") {
            return /*#__PURE__*/React.createElement(Module796, {
              type: r,
              name: t(r.toUpperCase()),
              flicker: true
            });
          }
          return /*#__PURE__*/React.createElement(Module1107, {
            clusters: record.clusters,
            clustersDetail: e.props.projectStore.detail.clusters
          }, function (t) {
            return e.renderStatus({
              cluster: t,
              record
            });
          });
        }
      }, {
        title: t("VERSION"),
        dataIndex: "version",
        isHideable: true,
        width: "20%"
      }, {
        title: t("CREATION_TIME_TCAP"),
        dataIndex: "createTime",
        isHideable: true,
        width: 180,
        render: function (e) {
          return (0, _index.getLocalTime)(e).format("YYYY-MM-DD HH:mm:ss");
        }
      }];
    };
    e.showCreate = function () {
      const e_props = e.props;
      const {
        match,
        module,
        getData,
        projectStore
      } = e_props;
      return e.props.trigger("crd.app.create", {
        module,
        isFederated: true,
        namespace: match.params.namespace,
        projectDetail: projectStore.detail,
        cluster: e.cluster,
        success: getData
      });
    };
    return e;
  }
  module37(a, [{
    key: "renderStatus",
    value: function ({
      cluster,
      record
    }) {
      const o = module26(record, `resources[${cluster.name}]`);
      if (o) {
        return /*#__PURE__*/React.createElement(Module796, {
          name: t(o.status?.toUpperCase()),
          type: o.status
        });
      }
      return t("WAITING");
    }
  }, {
    key: "getTableProps",
    value: function () {
      return {
        tableActions: this.tableActions,
        emptyProps: {
          title: t("NO_COMPOSED_APP_FOUND"),
          desc: t("COMPOSED_APP_EMPTY_DESC")
        },
        searchType: "name"
      };
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        bannerProps,
        tableProps
      } = props;
      return /*#__PURE__*/React.createElement(_withList.ListPage, _extends({}, this.props, {
        isFederated: true
      }), /*#__PURE__*/React.createElement(Module793, _extends({}, bannerProps, {
        tips: this.tips,
        description: t("APPLICATIONS_DESC")
      })), /*#__PURE__*/React.createElement(Module797, _extends({}, tableProps, this.getTableProps(), {
        columns: this.getColumns()
      })));
    }
  }, {
    key: "tips",
    get: function () {
      return [{
        title: t("HOW_TO_USE_APP_GOVERN_Q"),
        description: t("HOW_TO_USE_APP_GOVERN_A"),
        closable: false
      }];
    }
  }, {
    key: "project",
    get: function () {
      return this.props.projectStore;
    }
  }, {
    key: "clusters",
    get: function () {
      return module14.toJS(this.project.detail.clusters).map(e => e.name);
    }
  }, {
    key: "cluster",
    get: function () {
      if (this.clusters.includes("host")) {
        return "host";
      }
      return this.clusters[0];
    }
  }, {
    key: "canCreate",
    get: function () {
      const namespace = this.props.match.params.namespace;
      const t = this.clusters.join("_");
      const r = globals.app.getActions({
        cluster: t,
        project: namespace,
        module: "deployments",
        fedproject: true
      }).includes("create");
      const a = globals.app.getActions({
        cluster: t,
        project: namespace,
        module: "services",
        fedproject: true
      }).includes("create");
      return r && a;
    }
  }, {
    key: "tableActions",
    get: function () {
      const tableProps = this.props.tableProps;
      const actions = this.canCreate ? [{
        key: "create",
        type: "control",
        text: t("CREATE"),
        onClick: this.showCreate
      }] : [];
      return {
        ...tableProps.tableActions,
        actions,
        onCreate: null,
        selectActions: []
      };
    }
  }]);
  return a;
})(_module38.Component)) || o) || o;
var _default = exports["default"] = P;

/***/ },

/***/ "./src/pages/fedprojects/base-info.js"
/*!********************************************!*\
  !*** ./src/pages/fedprojects/base-info.js ***!
  \********************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-192.js */ "./node_modules/core-js3/modules/es.array.splice.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module38 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module40 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1218.js */ "./src/unpacked/module-1218.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/workspace */ "./src/stores/workspace.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/BaseInfo/ProjectInfo */ "./src/pages/fedprojects/containers/BaseInfo/ProjectInfo.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4961.js */ "./src/unpacked/module-4961.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module14 = (0, _recoverInterop.__recoverInterop)(_module6);
const module26 = (0, _recoverInterop.__recoverInterop)(_module7);
const module437 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module1218 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module445 = (0, _recoverInterop.__recoverInterop)(_module9);
const Module4959 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module4961 = (0, _recoverInterop.__recoverInterop)(_Module4);
let o;
const C = (0, _module40.inject)("rootStore", "projectStore")(o = (0, _module40.observer)(o = (0, _action.trigger)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...n) {
    let e;
    module36(this, a);
    e = r.call(this, ...n);
    e.limitRangeStore = new module437({
      module: "limitranges"
    });
    e.workspaceStore = new module445();
    e.getData = function () {
      const namespace = e.params.namespace;
      e.store.fetchDetail({
        namespace,
        name: namespace
      });
    };
    e.handleMoreMenuClick = function (t, r) {
      const a = e.enabledItemActions.find(e => e.key === r);
      if (a && a.onClick) {
        a.onClick();
      }
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.limitRangeStore.fetchListByK8s(this.params);
      this.workspaceStore.fetchClusters(this.params);
    }
  }, {
    key: "render",
    value: function () {
      const detail_1 = module14.toJS(this.store.detail);
      const detail = module26(this.limitRangeStore, "list.data[0]");
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Module793, {
        icon: "cdn",
        title: t("BASIC_INFORMATION"),
        description: t("PROJECT_BASIC_INFO_DESC"),
        module: "project_base_info",
        tips: this.tips
      }), /*#__PURE__*/React.createElement(Module4959, {
        detail: detail_1,
        workspace: this.params.workspace,
        actions: this.enabledItemActions,
        onMenuClick: this.handleMoreMenuClick
      }), /*#__PURE__*/React.createElement(Module4961, {
        detail: detail
      }), /*#__PURE__*/React.createElement(Module1218, {
        annotations: detail_1.annotations,
        hiddenKeys: globals.config.preservedAnnotations
      }));
    }
  }, {
    key: "isClusterManage",
    get: function () {
      return globals.app.isPlatformAdmin || globals.app.hasPermission({
        module: "clusters",
        action: "manage"
      });
    }
  }, {
    key: "store",
    get: function () {
      return this.props.projectStore;
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }, {
    key: "params",
    get: function () {
      return module26(this.props.match, "params", {});
    }
  }, {
    key: "tips",
    get: function () {
      return [{
        title: t("WHAT_ARE_DEFAULT_CONTAINER_QUOTAS_Q"),
        description: t("WHAT_ARE_DEFAULT_CONTAINER_QUOTAS_A")
      }];
    }
  }, {
    key: "enabledActions",
    get: function () {
      return globals.app.getActions({
        module: "project-settings",
        project: this.params.namespace,
        fedproject: true,
        cluster: this.params.cluster
      });
    }
  }, {
    key: "itemActions",
    get: function () {
      const _this = this;
      const detail = this.store.detail;
      const a = module14.toJS(this.limitRangeStore.list.data);
      const clusters = module14.toJS(this.props.projectStore.detail.clusters).map(e => e.name);
      const o = [{
        key: "edit",
        icon: "pen",
        action: "edit",
        text: t("EDIT_INFORMATION"),
        onClick: function () {
          return _this.trigger("resource.baseinfo.edit", {
            detail,
            success: _this.getData
          });
        }
      }, {
        key: "add",
        icon: "add",
        text: t("ADD_CLUSTER"),
        action: "edit",
        onClick: function () {
          return _this.trigger("federated.project.add.cluster", {
            detail,
            store: _this.store,
            clusters: _this.workspaceStore.clusters.data,
            success: _this.getData
          });
        }
      }, {
        key: "edit-default-resource",
        icon: "pen",
        action: "edit",
        text: t("EDIT_DEFAULT_CONTAINER_QUOTAS"),
        onClick: function () {
          return _this.trigger("project.default.resource", {
            ..._this.props.match.params,
            store: _this.limitRangeStore,
            detail: module26(a, 0, {}),
            isFederated: true,
            projectDetail: detail,
            clusters,
            success: function () {
              return _this.limitRangeStore.fetchListByK8s(_this.params);
            }
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        action: "delete",
        text: t("DELETE_PROJECT"),
        onClick: function () {
          return _this.trigger("federated.project.delete", {
            detail,
            success: function () {
              return _this.props.rootStore.routing.push(`/workspaces/${_this.params.workspace}/federatedprojects`);
            }
          });
        }
      }];
      if (this.isClusterManage) {
        o.splice(1, 0, {
          key: "edit-annotations",
          icon: "pen",
          action: "manage",
          text: t("EDIT_ANNOTATIONS"),
          onClick: function () {
            return _this.trigger("resource.annotations.edit", {
              detail,
              success: _this.getData
            });
          }
        });
      }
      return o;
    }
  }, {
    key: "enabledItemActions",
    get: function () {
      const _this = this;
      return this.itemActions.filter(t => !t.action || _this.enabledActions.includes(t.action));
    }
  }]);
  return a;
})(_module38.Component)) || o) || o) || o;
var _default = exports["default"] = C;

/***/ },

/***/ "./src/pages/fedprojects/components/ClusterWorkloadStatus.js"
/*!*******************************************************************!*\
  !*** ./src/pages/fedprojects/components/ClusterWorkloadStatus.js ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1770.js */ "./src/unpacked/module-1770.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-74.js */ "./src/unpacked/module-74.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/components/ClusterWorkloadStatus/Cluster */ "./src/pages/fedprojects/components/ClusterWorkloadStatus/Cluster.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4997.js */ "./src/unpacked/module-4997.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4998.js */ "./src/unpacked/module-4998.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1252.js */ "./src/unpacked/module-1252.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module790 = (0, _recoverInterop.__recoverInterop)(_module6);
const module1770 = (0, _recoverInterop.__recoverInterop)(_module7);
const module74 = (0, _recoverInterop.__recoverInterop)(_module8);
const module26 = (0, _recoverInterop.__recoverInterop)(_module9);
const module14 = (0, _recoverInterop.__recoverInterop)(_module0);
const module4996 = (0, _recoverInterop.__recoverInterop)(_module1);
const module4997 = (0, _recoverInterop.__recoverInterop)(_module10);
const module4998 = (0, _recoverInterop.__recoverInterop)(_module11);
const module1252 = (0, _recoverInterop.__recoverInterop)(_module12);
const R = (e => {
  module55(a, e);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...n_1) {
    let e;
    module36(this, a);
    e = r.call(this, ...n_1);
    e.getWeight = function (t) {
      const store = e.props.store;
      return module26(store.deployedScheduleTemplate, `spec.clusters.${t}.weight`, 0);
    };
    e.handleReplicasChange = async (r, a) => {
      let n;
      let o;
      let u;
      let l;
      let overrides;
      let s;
      let f;
      n = e.props;
      o = n.detail;
      u = n.store;
      l = o.overrides;
      if (s = (overrides = l === undefined ? [] : l).find(e => e.clusterName === r)) {
        if (f = s.clusterOverrides.find(e => e.path === "/spec/replicas")) {
          f.value = a;
        } else {
          s.clusterOverrides.push({
            path: "/spec/replicas",
            value: a
          });
        }
      } else {
        overrides.push({
          clusterName: r,
          clusterOverrides: [{
            path: "/spec/replicas",
            value: a
          }]
        });
      }
      await u.patch(o, {
        spec: {
          overrides
        }
      });
      await u.resourceStore.patch({
        ...o,
        cluster: r
      }, {
        spec: {
          replicas: a
        }
      });
    };
    e.updateSchedule = async function t() {
      let r;
      let a;
      let n;
      let o;
      let u;
      let clusters;
      let i;
      r = e.props;
      a = r.store;
      n = r.detail;
      o = r.projectStore;
      u = r.clustersDetail;
      clusters = Object.keys(module14.toJS(u));
      i = {
        name: n.name,
        namespace: o.detail.namespace,
        workspace: o.detail.workspace
      };
      await a.updateScheduleYaml(n, a.deployedScheduleTemplate);
      await a.fetchResources({
        clusters,
        ...i
      });
    };
    e.handleWeightChange = async (r, a) => {
      let n;
      n = e.props.store;
      module74(n.deployedScheduleTemplate, `spec.clusters.${r}.weight`, a);
      await e.updateSchedule();
    };
    e.totalChange = async r => {
      let a;
      a = e.props.store;
      module74(a.deployedScheduleTemplate, "spec.totalReplicas", Number(r));
      await e.updateSchedule();
    };
    return e;
  }
  module37(a, [{
    key: "renderTittleText",
    value: function () {
      const e = this.props.store.isScheduleProject ? {
        Icon: "stretch",
        title: t("WEIGHTS"),
        des: t("SPECIFY_WEIGHTS_DESC")
      } : {
        Icon: "backup",
        title: t("REPLICA_COUNT"),
        des: t("SPECIFY_REPLICAS_DESC")
      };
      return module553.default.createElement("div", {
        className: module1252.titleBox
      }, module553.default.createElement("div", {
        className: module1252.IconBox
      }, module553.default.createElement(module1770, {
        name: e.Icon,
        size: "40"
      })), module553.default.createElement("div", {
        className: module1252.right
      }, module553.default.createElement("span", {
        className: module1252.title
      }, e.title), module553.default.createElement("span", {
        className: module1252.des
      }, e.des)));
    }
  }, {
    key: "render",
    value: function () {
      const _this = this;
      const props = this.props;
      const {
        store,
        resources,
        clusters,
        clustersDetail,
        canEdit,
        projectStore
      } = props;
      if (clusters) {
        return module553.default.createElement(module790, {
          title: t("POD_REPLICAS")
        }, this.renderTittleText(), module553.default.createElement("div", {
          className: module1252.wrapper
        }, store.isScheduleProject && module553.default.createElement("div", {
          className: module1252.totalBox
        }, module553.default.createElement(module1770, {
          name: "pod",
          size: "40"
        }), module553.default.createElement("div", {
          className: module1252.total
        }, t("TOTAL_REPLICAS")), module553.default.createElement(module4998, {
          desire: this.getTotalReplicas,
          onChange: this.totalChange
        })), clusters.map(t => {
          if (clustersDetail[t.name]) {
            if (store.isScheduleProject) {
              return module553.default.createElement(module4997, {
                key: t.name,
                cluster: clustersDetail[t.name],
                workload: resources[t.name],
                store,
                projectStore,
                onWeightChange: _this.handleWeightChange,
                onReplicasChange: canEdit ? _this.handleReplicasChange : null
              });
            }
            return module553.default.createElement(module4996, {
              key: t.name,
              cluster: clustersDetail[t.name],
              workload: resources[t.name],
              onReplicasChange: canEdit ? _this.handleReplicasChange : null,
              store
            });
          }
          return null;
        })));
      }
      return null;
    }
  }, {
    key: "getTotalReplicas",
    get: function () {
      const store = this.props.store;
      return module26(store.deployedScheduleTemplate, "spec.totalReplicas", 0);
    }
  }]);
  return a;
})(module553.Component);
var _default = exports["default"] = R;

/***/ },

/***/ "./src/pages/fedprojects/components/ClusterWorkloadStatus/Cluster.js"
/*!***************************************************************************!*\
  !*** ./src/pages/fedprojects/components/ClusterWorkloadStatus/Cluster.js ***!
  \***************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-828.js */ "./node_modules/core-js3/modules/es.array.fill.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module33 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-801.js */ "./src/unpacked/module-801.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! components/Clusters/ClusterTitle */ "./src/components/Clusters/ClusterTitle.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-805.js */ "./src/unpacked/module-805.js"));
var _status = __webpack_require__(/*! utils/status */ "./src/utils/status.js");
var _module12 = _interopRequireWildcard(__webpack_require__(/*! stores/websocket */ "./src/stores/websocket.js"));
var _module13 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1252.js */ "./src/unpacked/module-1252.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module41 = (0, _recoverInterop.__recoverInterop)(_module);
const module44 = (0, _recoverInterop.__recoverInterop)(_module2);
const module36 = (0, _recoverInterop.__recoverInterop)(_module3);
const module37 = (0, _recoverInterop.__recoverInterop)(_module4);
const module55 = (0, _recoverInterop.__recoverInterop)(_module5);
const module56 = (0, _recoverInterop.__recoverInterop)(_module6);
const module51 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const module26 = (0, _recoverInterop.__recoverInterop)(_module9);
const module801 = (0, _recoverInterop.__recoverInterop)(_module0);
const module186 = (0, _recoverInterop.__recoverInterop)(_module1);
const module816 = (0, _recoverInterop.__recoverInterop)(_module10);
const module805 = (0, _recoverInterop.__recoverInterop)(_module11);
const module325 = (0, _recoverInterop.__recoverInterop)(_module12);
const module1252 = (0, _recoverInterop.__recoverInterop)(_module13);
let c;
const b = (0, _module33.observer)(c = (e => {
  module55(r, e);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r(...n_1) {
    let e;
    module36(this, r);
    e = t.call(this, ...n_1);
    e.websocket = new module325();
    e.state = {
      replicas: module26(e.props, "workload.podNums", 0)
    };
    e.triggerReplicasChange = module801(module44(module41.mark(function* t() {
      let r;
      let a;
      let n;
      r = e.props;
      a = r.cluster;
      n = r.onReplicasChange;
      yield n(a.name, e.state.replicas);
    })), 1000);
    e.handleAdd = function () {
      e.setState(function (e) {
        return {
          replicas: e.replicas + 1
        };
      }, e.triggerReplicasChange);
    };
    e.handleSubStract = function () {
      e.setState(function ({
        replicas
      }) {
        return {
          replicas: Math.max(replicas - 1, 0)
        };
      }, e.triggerReplicasChange);
    };
    return e;
  }
  module37(r, [{
    key: "componentDidUpdate",
    value: function (e) {
      if (module26(this.props.workload, "name") !== module26(e.workload, "name")) {
        this.setState({
          replicas: module26(this.props, "workload.podNums", 0)
        });
        this.unInitWebsocket();
        this.initWebsocket();
      }
    }
  }, {
    key: "componentDidMount",
    value: function () {
      this.initWebsocket();
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.unInitWebsocket();
    }
  }, {
    key: "initWebsocket",
    value: function () {
      const _this = this;
      const props = this.props;
      const {
        workload,
        store
      } = props;
      const n = store.resourceStore.getWatchUrl(workload);
      if (workload && n) {
        this.websocket.watch(n);
        this.disposer = module14.reaction(function () {
          return _this.websocket.message;
        }, function (e) {
          if (e.type === "MODIFIED") {
            store.updateResource(workload.cluster, e.object);
          }
        });
      }
    }
  }, {
    key: "unInitWebsocket",
    value: function () {
      if (this.disposer) {
        this.disposer();
      }
      this.websocket.close();
    }
  }, {
    key: "render",
    value: function () {
      const {
        cluster,
        workload = {},
        store,
        onReplicasChange
      } = this.props;
      const replicas = this.state.replicas;
      const workload_podNums = workload.podNums;
      const l = workload_podNums === undefined ? 0 : workload_podNums;
      const workload_readyPodNums = workload.readyPodNums;
      const s = workload_readyPodNums === undefined ? 0 : workload_readyPodNums;
      const f = l - s;
      const d = (0, _status.getWorkloadStatus)(workload, store.resourceStore.module);
      const {
        status,
        reason
      } = d;
      return module553.default.createElement("div", {
        className: module1252.cluster
      }, module553.default.createElement(module816, {
        cluster,
        tagClass: "float-right",
        theme: "light"
      }), module553.default.createElement("div", {
        className: module1252.bottom
      }, module553.default.createElement("div", {
        className: module1252.replicas
      }, module553.default.createElement("span", {
        className: module1252.readyNum
      }, s), " /", " ", module553.default.createElement("span", {
        className: module1252.readyNum
      }, replicas), " ", reason && module553.default.createElement(module805, {
        status,
        data: workload
      })), module553.default.createElement("div", {
        className: module1252.pods
      }, Array(Math.min(l, 6)).fill("").map((e, t) => module553.default.createElement("img", {
        key: t,
        src: t < f ? "/assets/pod-waiting.svg" : "/assets/pod-ready.svg",
        alt: ""
      })), l > 6 && module553.default.createElement(module186.Icon, {
        name: "more",
        className: module1252.more,
        size: 28,
        color: f > 6 ? {
          primary: "#f5a623",
          secondary: "#f5a623"
        } : {
          primary: "#479e88",
          secondary: "#479e88"
        }
      })), onReplicasChange && module553.default.createElement("div", {
        className: module1252.control
      }, module553.default.createElement(module186.Icon, {
        name: "add",
        type: "light",
        size: 24,
        clickable: true,
        onClick: this.handleAdd
      }), module553.default.createElement(module186.Icon, {
        name: "substract",
        type: "light",
        size: 24,
        clickable: true,
        onClick: this.handleSubStract
      }))));
    }
  }]);
  return r;
})(module553.Component)) || c;
var _default = exports["default"] = b;

/***/ },

/***/ "./src/pages/fedprojects/configmaps.js"
/*!*********************************************!*\
  !*** ./src/pages/fedprojects/configmaps.js ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module25 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Avatar */ "./src/components/Base/Avatar.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Status */ "./src/components/Base/Status.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _withList = __webpack_require__(/*! components/HOCs/withList */ "./src/components/HOCs/withList.js");
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! components/Tables/List */ "./src/components/Tables/List.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const Module789 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module796 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module797 = (0, _recoverInterop.__recoverInterop)(_Module4);
const module437 = (0, _recoverInterop.__recoverInterop)(_module6);
let o;
const _ = (0, _withList.withProjectList)({
  store: new module437({
    module: "configmaps"
  }),
  module: "configmaps",
  name: "CONFIGMAP"
})(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o) {
    let e;
    module36(this, a);
    e = r.call(this, ...o);
    e.getColumns = function () {
      const module = e.props.module;
      return [{
        title: t("NAME"),
        dataIndex: "name",
        render: function (t, a) {
          return /*#__PURE__*/React.createElement(Module789, {
            icon: _constants.ICON_TYPES[module],
            iconSize: 40,
            title: (0, _index.getDisplayName)(a),
            desc: a.description || "-",
            to: a.deletionTime ? null : `${e.props.match.url}/${t}`,
            isMultiCluster: true
          });
        }
      }, {
        title: t("STATUS"),
        dataIndex: "status",
        isHideable: true,
        render: function (e) {
          return /*#__PURE__*/React.createElement(Module796, {
            type: e,
            name: t(e),
            flicker: true
          });
        }
      }, {
        title: t("DATA"),
        dataIndex: "data",
        isHideable: true,
        width: "33%",
        render: function (e) {
          return Object.keys(e).join(",");
        }
      }, {
        title: t("CREATION_TIME_TCAP"),
        dataIndex: "createTime",
        isHideable: true,
        width: 150,
        render: function (e) {
          return (0, _index.getLocalTime)(e).format("YYYY-MM-DD HH:mm:ss");
        }
      }];
    };
    e.showCreate = function () {
      const e_props = e.props;
      const {
        match,
        module,
        projectStore
      } = e_props;
      return e.props.trigger("configmap.create", {
        module,
        isFederated: true,
        projectDetail: projectStore.detail,
        namespace: match.params.namespace
      });
    };
    return e;
  }
  module37(a, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        bannerProps,
        tableProps
      } = props;
      return /*#__PURE__*/React.createElement(_withList.ListPage, _extends({}, this.props, {
        isFederated: true
      }), /*#__PURE__*/React.createElement(Module793, _extends({}, bannerProps, {
        tabs: this.tabs
      })), /*#__PURE__*/React.createElement(Module797, _extends({}, tableProps, {
        itemActions: this.itemActions,
        columns: this.getColumns(),
        onCreate: this.showCreate,
        searchType: "name"
      })));
    }
  }, {
    key: "itemActions",
    get: function () {
      const props = this.props;
      const {
        trigger,
        name
      } = props;
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.baseinfo.edit", {
            detail: e
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.yaml.edit", {
            detail: e
          });
        }
      }, {
        key: "editConfigMap",
        icon: "pen",
        text: t("EDIT_SETTINGS"),
        action: "edit",
        onClick: function (e) {
          return trigger("configmap.edit", {
            detail: e,
            isFederated: true
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        onClick: function (e) {
          return trigger("resource.delete", {
            type: name,
            detail: e
          });
        }
      }];
    }
  }]);
  return a;
})(_module25.Component)) || o;
var _default = exports["default"] = _;

/***/ },

/***/ "./src/pages/fedprojects/containers/Applications/Detail.js"
/*!*****************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Applications/Detail.js ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module41 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/projects/containers/Base/Detail */ "./src/pages/projects/containers/Base/Detail.js"));
var _module42 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/application/crd */ "./src/stores/application/crd.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _routes = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Applications/Detail/routes */ "./src/pages/fedprojects/containers/Applications/Detail/routes.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module26 = (0, _recoverInterop.__recoverInterop)(_module7);
const module63 = (0, _recoverInterop.__recoverInterop)(_module8);
const module14 = (0, _recoverInterop.__recoverInterop)(_module9);
const Module806 = (0, _recoverInterop.__recoverInterop)(_Module);
const module961 = (0, _recoverInterop.__recoverInterop)(_module0);
const module437 = (0, _recoverInterop.__recoverInterop)(_module1);
const routes = (0, _recoverInterop.__recoverInterop)(_routes);
let o;
const T = (0, _module41.inject)("rootStore", "projectStore")(o = (0, _module41.observer)(o = (0, _action.trigger)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o) {
    let e;
    module36(this, a);
    e = r.call(this, ...o);
    e.store = new module437(new module961());
    e.fetchData = function () {
      const params = e.props.match.params;
      e.store.fetchDetail(params);
    };
    e.getOperations = function () {
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.baseinfo.edit", {
            type: e.name,
            detail: module14.toJS(e.store.detail),
            success: e.fetchData
          });
        }
      }, {
        key: "addComponent",
        icon: "add",
        text: t("ADD_SERVICE"),
        action: "edit",
        onClick: function () {
          return e.trigger("crd.app.addservice", {
            isFederated: true,
            detail: module14.toJS(e.store.detail),
            projectDetail: e.props.projectStore.detail,
            success: e.fetchData,
            ...e.props.match.params
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        type: "danger",
        onClick: function () {
          return e.trigger("resource.delete", {
            type: e.name,
            detail: e.store.detail,
            success: function () {
              return e.routing.push(e.listUrl);
            }
          });
        }
      }];
    };
    e.getAttrs = function () {
      const r = module14.toJS(e.store.detail);
      const namespace = e.props.match.params.namespace;
      if (!module63(r)) {
        const value = module26(r, 'labels["app.kubernetes.io/name"]');
        return [{
          name: t("PROJECT"),
          value: (0, _index.showNameAndAlias)(namespace, "federatedProject")
        }, {
          name: t("APP"),
          value
        }, {
          name: t("VERSION"),
          value: r.version
        }, {
          name: t("CREATION_TIME_TCAP"),
          value: (0, _index.getLocalTime)(r.createTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("UPDATE_TIME_TCAP"),
          value: (0, _index.getLocalTime)(r.updateTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("CREATOR"),
          value: r.creator
        }];
      }
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function () {
      const stores = {
        detailStore: this.store,
        fedDetailStore: this.fedStore
      };
      if (this.store.isLoading && !this.store.detail.name) {
        return /*#__PURE__*/React.createElement(module186.Loading, {
          className: "ks-page-loading"
        });
      }
      const r = {
        module: this.module,
        name: (0, _index.getDisplayName)(this.store.detail),
        desc: this.store.detail.description,
        operations: this.getOperations(),
        attrs: this.getAttrs(),
        breadcrumbs: [{
          label: t("APP_PL"),
          url: this.listUrl
        }]
      };
      return /*#__PURE__*/React.createElement(Module806, _extends({
        stores: stores
      }, r, {
        routes: routes
      }));
    }
  }, {
    key: "module",
    get: function () {
      return "applications";
    }
  }, {
    key: "name",
    get: function () {
      return "APP";
    }
  }, {
    key: "listUrl",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        namespace
      } = params;
      return `/${workspace}/federatedprojects/${namespace}/${this.module}`;
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }]);
  return a;
})(_module42.Component)) || o) || o) || o;
var _default = exports["default"] = T;

/***/ },

/***/ "./src/pages/fedprojects/containers/Applications/Detail/AppComponents.js"
/*!*******************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Applications/Detail/AppComponents.js ***!
  \*******************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module19 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module20 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Applications/Detail/AppComponents/Components */ "./src/pages/fedprojects/containers/Applications/Detail/AppComponents/Components.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const Module4979 = (0, _recoverInterop.__recoverInterop)(_Module);
let n;
const p = (0, _module20.inject)("detailStore")(n = (0, _module20.observer)(n = (Component_1 => {
  module55(r, Component_1);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r(e) {
    let a;
    module36(this, r);
    a = t.call(this, e);
    a.store = e.detailStore;
    return a;
  }
  module37(r, [{
    key: "render",
    value: function () {
      const _this = this;
      const workspace = this.props.match.params.workspace;
      const detail = this.store.detail;
      const {
        clusters,
        namespace
      } = detail;
      return clusters.map(r => /*#__PURE__*/React.createElement(Module4979, {
        key: r.name,
        cluster: r.name,
        namespace: namespace,
        workspace: workspace,
        detail: _this.store.detail
      }));
    }
  }]);
  return r;
})(_module19.Component)) || n) || n;
var _default = exports["default"] = p;

/***/ },

/***/ "./src/pages/fedprojects/containers/Applications/Detail/AppComponents/Components.js"
/*!******************************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Applications/Detail/AppComponents/Components.js ***!
  \******************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-321.js */ "./src/unpacked/module-321.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module29 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! components/Clusters/ClusterTitle */ "./src/components/Clusters/ClusterTitle.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! stores/service */ "./src/stores/service.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Applications/Detail/AppComponents/Components/ServiceCard */ "./src/pages/fedprojects/containers/Applications/Detail/AppComponents/Components/ServiceCard.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4982.js */ "./src/unpacked/module-4982.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module321 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module186 = (0, _recoverInterop.__recoverInterop)(_module8);
const module790 = (0, _recoverInterop.__recoverInterop)(_module9);
const module816 = (0, _recoverInterop.__recoverInterop)(_module0);
const module443 = (0, _recoverInterop.__recoverInterop)(_module1);
const module4980 = (0, _recoverInterop.__recoverInterop)(_module10);
const module4982 = (0, _recoverInterop.__recoverInterop)(_module11);
let c;
const k = (0, _module29.inject)("projectStore")(c = (0, _module29.observer)(c = (e => {
  module55(a, e);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...n) {
    let e;
    module36(this, a);
    e = r.call(this, ...n);
    e.serviceStore = new module443();
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.getData();
    }
  }, {
    key: "getData",
    value: function () {
      const props = this.props;
      const {
        cluster,
        namespace
      } = props;
      const selector = props.detail.selector;
      if (selector) {
        const n = {
          cluster,
          namespace,
          labelSelector: (0, _index.joinSelector)(selector)
        };
        this.serviceStore.fetchListByK8s(n);
      }
    }
  }, {
    key: "renderServices",
    value: function () {
      const _this = this;
      const data = this.serviceStore.list.data;
      if (module63(data)) {
        return module553.default.createElement("div", {
          className: module4982.empty
        }, t("NO_SERVICE_FOUND"));
      }
      return module553.default.createElement("div", null, data.map(t => module553.default.createElement(module4980, {
        key: t.name,
        data: t,
        prefix: _this.prefix
      })));
    }
  }, {
    key: "render",
    value: function () {
      const cluster = this.props.cluster;
      const isLoading = this.serviceStore.list.isLoading;
      const r = module321(this.props.projectStore.detail.clusters, "name");
      return module553.default.createElement(module790, null, module553.default.createElement("div", {
        className: module4982.header
      }, module553.default.createElement("div", {
        className: module4982.cluster
      }, module553.default.createElement(module816, {
        cluster: r[cluster],
        theme: "light",
        tagClass: "float-right"
      }))), module553.default.createElement("div", {
        className: module4982.content
      }, module553.default.createElement(module186.Loading, {
        spinning: isLoading
      }, this.renderServices())));
    }
  }, {
    key: "prefix",
    get: function () {
      const props = this.props;
      const {
        workspace,
        namespace
      } = props;
      return `/${workspace}/federatedprojects/${namespace}`;
    }
  }]);
  return a;
})(module553.Component)) || c) || c;
var _default = exports["default"] = k;

/***/ },

/***/ "./src/pages/fedprojects/containers/Applications/Detail/AppComponents/Components/ServiceCard.js"
/*!******************************************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Applications/Detail/AppComponents/Components/ServiceCard.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module21 = __webpack_require__(/*! unpacked/module-433.js */ "./src/shims/react-router-dom.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Text */ "./src/components/Base/Text.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4981.js */ "./src/unpacked/module-4981.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module26 = (0, _recoverInterop.__recoverInterop)(_module6);
const module791 = (0, _recoverInterop.__recoverInterop)(_module7);
const module4981 = (0, _recoverInterop.__recoverInterop)(_module8);
const v = (e => {
  module55(a, e);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a() {
    module36(this, a);
    return r.apply(this, arguments);
  }
  module37(a, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        data,
        prefix
      } = props;
      const n = module26(data, 'annotations["kubesphere.io/serviceType"]', "");
      return module553.default.createElement("div", {
        className: module4981.wrapper
      }, module553.default.createElement(module791, {
        icon: "appcenter",
        title: module553.default.createElement(_module21.Link, {
          to: `${prefix}/services/${data.name}`
        }, data.name),
        description: t(`SERVICE_TYPE_${n.toUpperCase()}`)
      }), module553.default.createElement(module791, {
        title: `${data.name}.${data.namespace}.svc`,
        description: t("INTERNAL_DOMAIN_NAME_SCAP")
      }), module553.default.createElement(module791, {
        title: data.clusterIP,
        description: t("VIRTUAL_IP_ADDRESS")
      }));
    }
  }]);
  return a;
})(module553.Component);
var _default = exports["default"] = v;

/***/ },

/***/ "./src/pages/fedprojects/containers/Applications/Detail/AppIngresses.js"
/*!******************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Applications/Detail/AppIngresses.js ***!
  \******************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module19 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module20 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses */ "./src/pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const Module4984 = (0, _recoverInterop.__recoverInterop)(_Module);
let n;
const p = (0, _module20.inject)("detailStore")(n = (0, _module20.observer)(n = (Component_1 => {
  module55(r, Component_1);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r(e) {
    let a;
    module36(this, r);
    a = t.call(this, e);
    a.store = e.detailStore;
    return a;
  }
  module37(r, [{
    key: "render",
    value: function () {
      const _this = this;
      const workspace = this.props.match.params.workspace;
      const detail = this.store.detail;
      const {
        clusters,
        namespace
      } = detail;
      return clusters.map(r => /*#__PURE__*/React.createElement(Module4984, {
        key: r.name,
        cluster: r.name,
        namespace: namespace,
        workspace: workspace,
        detail: _this.store.detail
      }));
    }
  }]);
  return r;
})(_module19.Component)) || n) || n;
var _default = exports["default"] = p;

/***/ },

/***/ "./src/pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses.js"
/*!****************************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses.js ***!
  \****************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-321.js */ "./src/unpacked/module-321.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module34 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Text */ "./src/components/Base/Text.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! components/Clusters/ClusterTitle */ "./src/components/Clusters/ClusterTitle.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! stores/gateway */ "./src/stores/gateway.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! stores/ingress */ "./src/stores/ingress.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses/IngressCard */ "./src/pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses/IngressCard.js"));
var _module13 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4988.js */ "./src/unpacked/module-4988.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module321 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module186 = (0, _recoverInterop.__recoverInterop)(_module8);
const module790 = (0, _recoverInterop.__recoverInterop)(_module9);
const module791 = (0, _recoverInterop.__recoverInterop)(_module0);
const module816 = (0, _recoverInterop.__recoverInterop)(_module1);
const module834 = (0, _recoverInterop.__recoverInterop)(_module10);
const module918 = (0, _recoverInterop.__recoverInterop)(_module11);
const module4985 = (0, _recoverInterop.__recoverInterop)(_module12);
const module4988 = (0, _recoverInterop.__recoverInterop)(_module13);
let u;
const T = (0, _module34.inject)("projectStore")(u = (0, _module34.observer)(u = (e => {
  module55(o, e);
  var n = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(o);
  function o(...r) {
    let e;
    module36(this, o);
    e = n.call(this, ...r);
    e.gatewayStore = new module834();
    e.ingressStore = new module918();
    e.state = {
      gateway: {}
    };
    return e;
  }
  module37(o, [{
    key: "componentDidMount",
    value: function () {
      this.getData();
    }
  }, {
    key: "getData",
    value: async function () {
      let t;
      let r;
      let a;
      let n;
      let o;
      let u;
      t = this.props;
      r = t.cluster;
      a = t.namespace;
      n = t.detail;
      if (o = n.selector) {
        u = {
          cluster: r,
          namespace: a,
          labelSelector: (0, _index.joinSelector)(o)
        };
        this.ingressStore.fetchListByK8s(u);
      }
      await this.getGateway();
    }
  }, {
    key: "getGateway",
    value: async function () {
      let t;
      let r;
      let a;
      let n;
      t = this.props;
      r = t.cluster;
      a = t.namespace;
      n = await this.gatewayStore.getGatewayByProject({
        cluster: r,
        namespace: a
      });
      this.setState({
        gateway: n[0] || n[1] || n[2] || {}
      });
    }
  }, {
    key: "getNodePorts",
    value: function (e) {
      if (e.ports) {
        return e.ports.map(e => `${e.name.toUpperCase()}: ${e.nodePort}`).join("/");
      }
      return "-";
    }
  }, {
    key: "getExternalIP",
    value: function (e) {
      let t = "-";
      if (module63(e.loadBalancerIngress)) {
        if (!module63(e.externalIPs)) {
          t = e.externalIPs.join("; ");
        }
      } else {
        t = e.loadBalancerIngress.join("; ");
      }
      return t;
    }
  }, {
    key: "render",
    value: function () {
      const _this = this;
      const cluster = this.props.cluster;
      const list = this.ingressStore.list;
      const {
        data,
        isLoading
      } = list;
      const c = module321(this.props.projectStore.detail.clusters, "name");
      const gateway = this.state.gateway || {};
      return module553.default.createElement(module790, null, module553.default.createElement("div", {
        className: module4988.header
      }, module553.default.createElement("div", {
        className: module4988.cluster
      }, module553.default.createElement(module816, {
        cluster: c[cluster],
        theme: "light",
        tagClass: "float-right"
      })), module553.default.createElement(module791, {
        icon: "eip-pool",
        title: gateway.type,
        description: t("GATEWAY_ACCESS_MODE")
      }), gateway.type === "NodePort" ? module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module791, {
        title: gateway.loadBalancerIngress || "-",
        description: t("GATEWAY_IP_ADDRESS")
      }), module553.default.createElement(module791, {
        title: this.getNodePorts(gateway),
        description: t("NODE_PORTS_SCAP")
      })) : module553.default.createElement(module791, {
        title: this.getExternalIP(gateway),
        description: t("LOAD_BALANCER_SCAP")
      })), module553.default.createElement("div", {
        className: module4988.content
      }, module553.default.createElement(module186.Loading, {
        spinning: isLoading
      }, module553.default.createElement(module553.default.Fragment, null, data.map(detail => module553.default.createElement(module4985, {
        key: detail.name,
        detail,
        prefix: _this.prefix,
        gateway
      }))))));
    }
  }, {
    key: "prefix",
    get: function () {
      const props = this.props;
      const {
        workspace,
        namespace
      } = props;
      return `/${workspace}/federatedprojects/${namespace}`;
    }
  }]);
  return o;
})(module553.Component)) || u) || u;
var _default = exports["default"] = T;

/***/ },

/***/ "./src/pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses/IngressCard.js"
/*!****************************************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses/IngressCard.js ***!
  \****************************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1981.js */ "./src/unpacked/module-1981.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4987.js */ "./src/unpacked/module-4987.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module63 = (0, _recoverInterop.__recoverInterop)(_module6);
const module1981 = (0, _recoverInterop.__recoverInterop)(_module7);
const module4987 = (0, _recoverInterop.__recoverInterop)(_module8);
const m = (e => {
  module55(r, e);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r() {
    module36(this, r);
    return t.apply(this, arguments);
  }
  module37(r, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        prefix,
        gateway,
        detail
      } = props;
      const tls = detail.tls || [];
      if (module63(detail.rules)) {
        return null;
      }
      return module553.default.createElement("div", {
        className: module4987.wrapper
      }, detail.rules.map(rule => module553.default.createElement(module1981, {
        key: rule.host,
        tls,
        rule,
        gateway,
        prefix
      })));
    }
  }]);
  return r;
})(module553.Component);
var _default = exports["default"] = m;

/***/ },

/***/ "./src/pages/fedprojects/containers/Applications/Detail/Tracing.js"
/*!*************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Applications/Detail/Tracing.js ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-48.js */ "./node_modules/core-js3/modules/es.array.slice.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-188.js */ "./src/unpacked/module-188.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module41 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module43 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-244.js */ "./src/shims/qs.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-833.js */ "./src/unpacked/module-833.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! pages/projects/components/Cards/Tracing */ "./src/pages/projects/components/Cards/Tracing.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! pages/projects/components/Modals/TracingDetail */ "./src/pages/projects/components/Modals/TracingDetail.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1982.js */ "./src/unpacked/module-1982.js"));
var _Module5 = _interopRequireWildcard(__webpack_require__(/*! components/Cards/Monitoring/Controller/TimeSelector */ "./src/components/Cards/Monitoring/Controller/TimeSelector.js"));
var _base = __webpack_require__(/*! stores/monitoring/base */ "./src/stores/monitoring/base.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! stores/service */ "./src/stores/service.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4993.js */ "./src/unpacked/module-4993.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module63 = (0, _recoverInterop.__recoverInterop)(_module6);
const module26 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const module244 = (0, _recoverInterop.__recoverInterop)(_module9);
const module186 = (0, _recoverInterop.__recoverInterop)(_module0);
const Module833 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module1917 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module1919 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module1982 = (0, _recoverInterop.__recoverInterop)(_Module4);
const Module949 = (0, _recoverInterop.__recoverInterop)(_Module5);
const module443 = (0, _recoverInterop.__recoverInterop)(_module1);
const module4993 = (0, _recoverInterop.__recoverInterop)(_module10);
let o;
const A = (0, _module43.inject)("detailStore", "projectStore")(o = (0, _module43.observer)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(e) {
    let n;
    module36(this, a);
    n = r.call(this, e);
    n.fetchTracing = function () {
      const namespace = module14.toJS(n.detailStore.detail).namespace;
      const cluster = n.state.cluster;
      const r = n.getServiceMeshEnabled(cluster);
      if (cluster && r) {
        const a = {
          namespace,
          cluster: cluster.name,
          service: n.state.serviceName,
          ...n.state.query
        };
        n.resourceStore.fetchTracing(a);
      }
    };
    n.showDetailModal = function (selectItem) {
      n.setState({
        showDetailModal: true,
        selectItem
      });
    };
    n.hideDetailModal = function () {
      n.setState({
        showDetailModal: false,
        selectItem: {}
      });
    };
    n.handleClusterChange = function (e) {
      n.setState({
        cluster: e
      }, function () {
        n.getData();
      });
    };
    n.handleServiceChange = function (serviceName) {
      n.setState({
        serviceName
      }, function () {
        n.fetchTracing();
      });
    };
    n.handleRefresh = function () {
      n.fetchTracing();
    };
    n.handleLookbackChange = function ({
      step,
      times,
      ...rest
    }) {
      const o = (0, _base.getTimeRange)({
        step: (0, _base.getMinuteValue)(step),
        times
      });
      const {
        start,
        end
      } = o;
      const start_1 = 1000 * (rest.start || start);
      const end_1 = 1000 * (rest.end || end);
      n.setState(function (e) {
        return {
          query: {
            ...e.query,
            start: start_1,
            end: end_1
          }
        };
      }, function () {
        return n.fetchTracing();
      });
    };
    n.handleLimitChange = function (limit) {
      n.setState(function (t) {
        return {
          query: {
            ...t.query,
            limit
          }
        };
      }, function () {
        return n.fetchTracing();
      });
    };
    n.serviceRenderer = function (e) {
      return /*#__PURE__*/React.createElement("span", null, t("SERVICE_VALUE", {
        value: e.label
      }));
    };
    n.renderMicroServiceTip = function (e) {
      const r = n.getServiceMeshEnabled(e);
      return /*#__PURE__*/React.createElement("span", {
        className: module4993.tag
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: r ? "success" : "exclamation",
        color: r ? {
          primary: "#00aa72",
          secondary: "#90e0c5"
        } : {
          primary: "#d0a406",
          secondary: "#f0c426"
        }
      }), "\xA0", /*#__PURE__*/React.createElement("span", null, r ? t("APPLICATION_GOVERNANCE_ENABLED") : t("APPLICATION_GOVERNANCE_DISABLED")));
    };
    n.detailStore = e.detailStore;
    n.resourceStore = n.detailStore.resourceStore;
    n.serviceStore = new module443();
    const o = module244.parse(location.search.slice(1));
    const u = module26(n.props.projectStore, "detail.clusters", []);
    const i = u.find(e => module26(e, "configz.servicemesh")) || u[0] || {};
    const s = (0, _base.getTimeRange)({
      step: (0, _base.getMinuteValue)("5m"),
      times: 60
    });
    const {
      start,
      end
    } = s;
    n.state = {
      cluster: i,
      showDetailModal: false,
      selectItem: {},
      serviceName: "",
      query: {
        limit: 5,
        start: 1000 * start,
        end: 1000 * end
      },
      defaultService: o.service
    };
    return n;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.getData();
    }
  }, {
    key: "getServiceMeshEnabled",
    value: function (e) {
      const t = globals.app.hasClusterModule(e.name, "servicemesh");
      return module26(this.detailStore, "detail.serviceMeshEnable", false) && t;
    }
  }, {
    key: "getData",
    value: function () {
      const _this = this;
      const detail = this.detailStore.detail;
      const {
        selector,
        namespace
      } = detail;
      const cluster = this.state.cluster;
      const o = this.getServiceMeshEnabled(cluster);
      if (cluster && o && selector) {
        const c = {
          namespace,
          cluster: cluster.name,
          labelSelector: (0, _index.joinSelector)(selector)
        };
        this.serviceStore.fetchListByK8s(c).then(() => {
          const t = module14.toJS(_this.serviceStore.list.data);
          if (t.length > 0) {
            _this.setState({
              serviceName: t[0].name
            }, function () {
              return _this.fetchTracing();
            });
          }
        });
      }
    }
  }, {
    key: "renderOperations",
    value: function () {
      const query = this.state.query;
      return /*#__PURE__*/React.createElement("div", {
        className: module4993.operations
      }, /*#__PURE__*/React.createElement(module186.Select, {
        options: this.services,
        value: this.state.serviceName,
        prefixIcon: /*#__PURE__*/React.createElement(module186.Icon, {
          name: "appcenter"
        }),
        onChange: this.handleServiceChange,
        valueRenderer: this.serviceRenderer
      }), /*#__PURE__*/React.createElement(Module949, {
        className: module4993.timeSelect,
        dark: true,
        onChange: this.handleLookbackChange,
        showStep: false,
        arrowIcon: "chevron-down"
      }), /*#__PURE__*/React.createElement(module186.Select, {
        value: query.limit,
        options: this.limitOptions,
        onChange: this.handleLimitChange
      }), /*#__PURE__*/React.createElement(module186.Button, {
        type: "flat",
        icon: "refresh",
        onClick: this.handleRefresh
      }));
    }
  }, {
    key: "renderTracing",
    value: function () {
      const cluster = this.state.cluster;
      const resourceStore = this.resourceStore;
      const {
        tracing,
        isTracingLoading
      } = resourceStore;
      const list = this.serviceStore.list;
      const {
        isLoading,
        data
      } = list;
      const l = this.getServiceMeshEnabled(cluster);
      if (cluster && l) {
        if (!isLoading && module63(data)) {
          return null;
        }
        return /*#__PURE__*/React.createElement(Module1917, {
          loading: isTracingLoading,
          data: tracing.data,
          operations: this.renderOperations(),
          onItemClick: this.showDetailModal
        });
      }
      return /*#__PURE__*/React.createElement(Module833, {
        image: "/assets/traffic-management.svg",
        title: t("TRACING_UNAVAILABLE"),
        desc: t("APPLICATION_GOVERNANCE_NOT_ENABLED")
      });
    }
  }, {
    key: "render",
    value: function () {
      const clusters = this.props.projectStore.detail.clusters;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Module1982, {
        value: this.state.cluster,
        options: clusters,
        onChange: this.handleClusterChange,
        extra: this.renderMicroServiceTip
      }), this.renderTracing(), /*#__PURE__*/React.createElement(Module1919, {
        detail: this.state.selectItem,
        visible: this.state.showDetailModal,
        onCancel: this.hideDetailModal
      }));
    }
  }, {
    key: "limitOptions",
    get: function () {
      return [{
        label: t("LAST_NUM_RECORDS", {
          num: 5
        }),
        value: 5
      }, {
        label: t("LAST_NUM_RECORDS", {
          num: 10
        }),
        value: 10
      }, {
        label: t("LAST_NUM_RECORDS", {
          num: 20
        }),
        value: 20
      }, {
        label: t("LAST_NUM_RECORDS", {
          num: 50
        }),
        value: 50
      }];
    }
  }, {
    key: "services",
    get: function () {
      return this.serviceStore.list.data.map(e => ({
        label: e.name,
        value: e.name,
        type: e.type
      }));
    }
  }]);
  return a;
})(_module41.Component)) || o) || o;
var _default = exports["default"] = A;

/***/ },

/***/ "./src/pages/fedprojects/containers/Applications/Detail/TrafficManangement.js"
/*!************************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Applications/Detail/TrafficManangement.js ***!
  \************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-109.js */ "./src/unpacked/module-109.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-833.js */ "./src/unpacked/module-833.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Cards/Monitoring/Controller/TimeSelector */ "./src/components/Cards/Monitoring/Controller/TimeSelector.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! components/Graph */ "./src/components/Graph.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1982.js */ "./src/unpacked/module-1982.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module35 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module36 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! stores/application/crd */ "./src/stores/application/crd.js"));
var _base = __webpack_require__(/*! stores/monitoring/base */ "./src/stores/monitoring/base.js");
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4991.js */ "./src/unpacked/module-4991.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module41 = (0, _recoverInterop.__recoverInterop)(_module);
const module44 = (0, _recoverInterop.__recoverInterop)(_module2);
const module36 = (0, _recoverInterop.__recoverInterop)(_module3);
const module37 = (0, _recoverInterop.__recoverInterop)(_module4);
const module55 = (0, _recoverInterop.__recoverInterop)(_module5);
const module56 = (0, _recoverInterop.__recoverInterop)(_module6);
const module51 = (0, _recoverInterop.__recoverInterop)(_module7);
const module186 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module833 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module949 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module1914 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module1982 = (0, _recoverInterop.__recoverInterop)(_Module4);
const module26 = (0, _recoverInterop.__recoverInterop)(_module9);
const module63 = (0, _recoverInterop.__recoverInterop)(_module0);
const module961 = (0, _recoverInterop.__recoverInterop)(_module1);
const module4991 = (0, _recoverInterop.__recoverInterop)(_module10);
let u;
const R = (0, _module35.inject)("detailStore", "projectStore")(u = (0, _module35.observer)(u = (Component_1 => {
  module55(n, Component_1);
  var a = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(n);
  function n(e) {
    let r;
    module36(this, n);
    r = a.call(this, e);
    r.fetchApplicationsData = function () {
      const params = r.props.match.params;
      const {
        workspace,
        namespace,
        name
      } = params;
      const o = {
        cluster: r.state.cluster.name,
        workspace,
        namespace,
        name
      };
      r.store.fetchDetail(o);
    };
    r.handleRefresh = function () {
      r.getData();
    };
    r.handleClusterChange = function (e) {
      r.setState({
        cluster: e
      }, module44(module41.mark(function* e() {
        yield r.fetchApplicationsData();
        yield r.getData();
      })));
    };
    r.handleAutoFetch = function () {
      const autoFetch = r.state.autoFetch;
      r.setState({
        autoFetch: !autoFetch
      }, function () {
        if (r.state.autoFetch) {
          r.interval = setInterval(() => {
            r.getData();
          }, 10000);
        } else if (r.interval) {
          clearInterval(r.interval);
        }
      });
    };
    r.handleLookbackChange = function ({
      step,
      times,
      ...rest
    }) {
      const c = (0, _base.getTimeRange)({
        step: (0, _base.getMinuteValue)(step),
        times
      });
      const {
        start,
        end
      } = c;
      const i = rest.start || start;
      const s = rest.end || end;
      const duration = Math.floor(s - i);
      r.setState({
        duration
      }, function () {
        r.getData();
      });
    };
    r.operations = function () {
      const autoFetch = r.state.autoFetch;
      return /*#__PURE__*/React.createElement("div", {
        className: module4991.operations
      }, /*#__PURE__*/React.createElement(Module949, {
        className: module4991.timeSelect,
        onChange: r.handleLookbackChange,
        showStep: false,
        dark: true,
        arrowIcon: "chevron-down",
        step: "1m",
        times: 1
      }), /*#__PURE__*/React.createElement(module186.Button, {
        type: "flat",
        icon: autoFetch ? "pause" : "start",
        onClick: r.handleAutoFetch
      }), /*#__PURE__*/React.createElement(module186.Button, {
        type: "flat",
        icon: "refresh",
        onClick: r.handleRefresh
      }));
    };
    r.renderHeader = function () {
      return /*#__PURE__*/React.createElement("div", {
        className: module4991.cardHeader
      }, r.operations(), t("TRAFFIC_MONITORING"));
    };
    r.renderMicroServiceTip = function (e) {
      const a = r.getServiceMeshEnabled(e);
      return /*#__PURE__*/React.createElement("span", {
        className: module4991.tag
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: a ? "success" : "exclamation",
        color: a ? {
          primary: "#00aa72",
          secondary: "#90e0c5"
        } : {
          primary: "#d0a406",
          secondary: "#f0c426"
        }
      }), "\xA0", /*#__PURE__*/React.createElement("span", null, a ? t("APPLICATION_GOVERNANCE_ENABLED") : t("APPLICATION_GOVERNANCE_DISABLED")));
    };
    const u = module26(r.props.projectStore, "detail.clusters", []);
    const s = u.find(e => module26(e, "configz.servicemesh")) || u[0] || {};
    r.state = {
      cluster: s,
      isGraphLoading: true,
      duration: 60,
      autoFetch: false
    };
    r.detailStore = e.detailStore;
    r.store = new module961();
    r.module = e.module;
    return r;
  }
  module37(n, [{
    key: "componentDidMount",
    value: async function () {
      await this.fetchApplicationsData();
      await this.getData();
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.unmount = true;
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }, {
    key: "getServiceMeshEnabled",
    value: function (e) {
      const t = globals.app.hasClusterModule(e.name, "servicemesh");
      return module26(this.detailStore, "detail.serviceMeshEnable", false) && t;
    }
  }, {
    key: "getData",
    value: function () {
      const _this = this;
      const params = this.props.match.params;
      const {
        namespace,
        name
      } = params;
      const state = this.state;
      const {
        cluster,
        duration
      } = state;
      const u = this.getServiceMeshEnabled(cluster);
      if (cluster && u) {
        this.setState({
          isGraphLoading: true
        });
        this.store.fetchGraph({
          cluster: cluster.name,
          namespace,
          app: name,
          duration
        }).then(() => {
          if (!_this.unmount) {
            _this.setState({
              isGraphLoading: false
            });
          }
        });
      }
    }
  }, {
    key: "renderContent",
    value: function () {
      const state = this.state;
      const {
        isGraphLoading,
        cluster
      } = state;
      const graph = this.store.graph;
      const {
        data,
        health
      } = graph;
      const u = this.getServiceMeshEnabled(cluster);
      if (cluster && u) {
        if (module63(data) || module63(data.nodes)) {
          if (isGraphLoading) {
            return /*#__PURE__*/React.createElement(module186.Loading, {
              className: module4991.loading
            });
          }
          return /*#__PURE__*/React.createElement(Module833, {
            image: "/assets/traffic-management.svg",
            title: t("NO_DATA"),
            desc: t("TRAFFIC_MONITORING_UNAVAILABLE_DESC"),
            actions: /*#__PURE__*/React.createElement(module186.Button, {
              onClick: this.handleRefresh
            }, t("REFRESH"))
          });
        }
        return /*#__PURE__*/React.createElement("div", {
          className: module4991.main
        }, /*#__PURE__*/React.createElement(Module1914, {
          data: data,
          health: health,
          store: this.store,
          loading: isGraphLoading,
          onFetch: this.handleRefresh
        }));
      }
      return /*#__PURE__*/React.createElement(Module833, {
        image: "/assets/traffic-management.svg",
        title: t("TRAFFIC_MANAGEMENT_UNAVAILABLE"),
        desc: t("APPLICATION_GOVERNANCE_NOT_ENABLED")
      });
    }
  }, {
    key: "render",
    value: function () {
      const clusters = this.props.projectStore.detail.clusters;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Module1982, {
        value: this.state.cluster,
        options: clusters,
        onChange: this.handleClusterChange,
        extra: this.renderMicroServiceTip
      }), this.renderHeader(), this.renderContent());
    }
  }]);
  return n;
})(_module36.Component)) || u) || u;
var _default = exports["default"] = R;

/***/ },

/***/ "./src/pages/fedprojects/containers/Applications/Detail/routes.js"
/*!************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Applications/Detail/routes.js ***!
  \************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Applications/Detail/AppComponents */ "./src/pages/fedprojects/containers/Applications/Detail/AppComponents.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Applications/Detail/AppIngresses */ "./src/pages/fedprojects/containers/Applications/Detail/AppIngresses.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Applications/Detail/TrafficManangement */ "./src/pages/fedprojects/containers/Applications/Detail/TrafficManangement.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Applications/Detail/Tracing */ "./src/pages/fedprojects/containers/Applications/Detail/Tracing.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module4978 = (0, _recoverInterop.__recoverInterop)(_module);
const module4983 = (0, _recoverInterop.__recoverInterop)(_module2);
const module4989 = (0, _recoverInterop.__recoverInterop)(_module3);
const module4992 = (0, _recoverInterop.__recoverInterop)(_module4);
const path = "/:workspace/federatedprojects/:namespace/applications/:name";
const s = [{
  path: `${path}/components`,
  title: "RESOURCE_STATUS",
  component: module4978,
  exact: true
}, {
  path: `${path}/ingresses`,
  title: "EXTERNAL_ACCESS",
  component: module4983,
  exact: true
}, {
  path: `${path}/traffic`,
  title: "TRAFFIC_MANAGEMENT",
  component: module4989,
  exact: true
}, {
  path: `${path}/tracing`,
  title: "TRACING",
  component: module4992,
  exact: true
}, (0, _router.getIndexRoute)({
  path,
  to: `${path}/components`,
  exact: true
})];
var _default = exports["default"] = s;

/***/ },

/***/ "./src/pages/fedprojects/containers/BaseInfo/ProjectInfo.js"
/*!******************************************************************!*\
  !*** ./src/pages/fedprojects/containers/BaseInfo/ProjectInfo.js ***!
  \******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Text */ "./src/components/Base/Text.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1215.js */ "./src/unpacked/module-1215.js"));
var _module26 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module27 = __webpack_require__(/*! unpacked/module-433.js */ "./src/shims/react-router-dom.js");
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4960.js */ "./src/unpacked/module-4960.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module3 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module791 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module26 = (0, _recoverInterop.__recoverInterop)(_module8);
const module63 = (0, _recoverInterop.__recoverInterop)(_module9);
const Module1215 = (0, _recoverInterop.__recoverInterop)(_Module3);
const module4960 = (0, _recoverInterop.__recoverInterop)(_module0);
const _ = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a() {
    module36(this, a);
    return r.apply(this, arguments);
  }
  module37(a, [{
    key: "renderMoreMenu",
    value: function () {
      const props = this.props;
      const {
        actions,
        onMenuClick
      } = props;
      return /*#__PURE__*/React.createElement(module186.Menu, {
        onClick: onMenuClick
      }, actions.map(e => /*#__PURE__*/React.createElement(module186.Menu.MenuItem, {
        key: e.key
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: e.icon,
        type: "light"
      }), " ", e.text)));
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        detail,
        workspace,
        actions
      } = props;
      return /*#__PURE__*/React.createElement(Module790, {
        className: module4960.wrapper,
        title: t("PROJECT_INFO")
      }, /*#__PURE__*/React.createElement("div", {
        className: module4960.header
      }, /*#__PURE__*/React.createElement(Module791, {
        icon: "project",
        title: (0, _index.getDomTitle)((0, _index.getDisplayNameNew)(detail)),
        description: t("PROJECT_NAME"),
        ellipsis: true
      }), /*#__PURE__*/React.createElement("div", {
        className: module3(module4960.item, "ellipsis")
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_module27.Link, {
        className: "ellipsis block",
        to: `/workspaces/${workspace}`
      }, (0, _index.showNameAndAlias)(workspace, "workspace", {}, false, undefined, true))), /*#__PURE__*/React.createElement("p", null, t("WORKSPACE"))), /*#__PURE__*/React.createElement("div", {
        className: module4960.item
      }, /*#__PURE__*/React.createElement("div", null, module26(detail, "creator") || "-"), /*#__PURE__*/React.createElement("p", null, t("CREATOR"))), /*#__PURE__*/React.createElement("div", {
        className: module4960.item
      }, /*#__PURE__*/React.createElement("div", null, (0, _index.getLocalTime)(detail.createTime).format("YYYY-MM-DD HH:mm:ss")), /*#__PURE__*/React.createElement("p", null, t("CREATION_TIME"))), !module63(actions) && /*#__PURE__*/React.createElement(Module1215, {
        content: this.renderMoreMenu()
      })));
    }
  }]);
  return a;
})(_module26.Component);
var _default = exports["default"] = _;

/***/ },

/***/ "./src/pages/fedprojects/containers/ConfigMaps/Detail.js"
/*!***************************************************************!*\
  !*** ./src/pages/fedprojects/containers/ConfigMaps/Detail.js ***!
  \***************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module31 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/projects/containers/Base/Detail */ "./src/pages/projects/containers/Base/Detail.js"));
var _module32 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/ConfigMaps/Detail/routes */ "./src/pages/fedprojects/containers/ConfigMaps/Detail/routes.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module806 = (0, _recoverInterop.__recoverInterop)(_Module);
const module437 = (0, _recoverInterop.__recoverInterop)(_module9);
const module5038 = (0, _recoverInterop.__recoverInterop)(_module0);
let o;
const O = (0, _module31.inject)("rootStore")(o = (0, _module31.observer)(o = (0, _action.trigger)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o) {
    let e;
    module36(this, a);
    e = r.call(this, ...o);
    e.store = new module437({
      module: e.module
    });
    e.fetchData = function () {
      e.store.fetchDetail(e.props.match.params);
    };
    e.getOperations = function () {
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.baseinfo.edit", {
            type: e.name,
            detail: module14.toJS(e.store.detail),
            success: e.fetchData
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.yaml.edit", {
            detail: e.store.detail,
            success: e.fetchData
          });
        }
      }, {
        key: "editConfigMap",
        icon: "pen",
        text: t("EDIT_SETTINGS"),
        action: "edit",
        onClick: function () {
          return e.trigger("configmap.edit", {
            detail: e.store.detail,
            success: e.fetchData,
            isFederated: true
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        type: "danger",
        onClick: function () {
          return e.trigger("resource.delete", {
            type: e.name,
            detail: e.store.detail,
            success: function () {
              return e.routing.push(e.listUrl);
            }
          });
        }
      }];
    };
    e.getAttrs = function () {
      const r = module14.toJS(e.store.detail);
      const namespace = e.props.match.params.namespace;
      if (!module63(r)) {
        return [{
          name: t("PROJECT"),
          value: (0, _index.showNameAndAlias)(namespace, "federatedProject")
        }, {
          name: t("CREATION_TIME_TCAP"),
          value: (0, _index.getLocalTime)(r.createTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("CREATOR"),
          value: r.creator
        }];
      }
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function () {
      const stores = {
        detailStore: this.store
      };
      if (this.store.isLoading) {
        return /*#__PURE__*/React.createElement(module186.Loading, {
          className: "ks-page-loading"
        });
      }
      const r = {
        module: this.module,
        name: (0, _index.getDisplayName)(this.store.detail),
        desc: this.store.detail.description,
        operations: this.getOperations(),
        attrs: this.getAttrs(),
        breadcrumbs: [{
          label: t("CONFIGMAP_PL"),
          url: this.listUrl
        }]
      };
      return /*#__PURE__*/React.createElement(Module806, _extends({
        stores: stores
      }, r, {
        routes: module5038(this.props.match.path)
      }));
    }
  }, {
    key: "module",
    get: function () {
      return "configmaps";
    }
  }, {
    key: "name",
    get: function () {
      return "CONFIGMAP";
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }, {
    key: "listUrl",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        cluster,
        namespace
      } = params;
      if (workspace) {
        return `/${workspace}/federatedprojects/${namespace}/${this.module}`;
      }
      return `/clusters/${cluster}/${this.module}`;
    }
  }]);
  return a;
})(_module32.Component)) || o) || o) || o;
var _default = exports["default"] = O;

/***/ },

/***/ "./src/pages/fedprojects/containers/ConfigMaps/Detail/ConfigDetail.js"
/*!****************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/ConfigMaps/Detail/ConfigDetail.js ***!
  \****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-98.js */ "./node_modules/core-js3/modules/es.object.entries.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/slicedToArray */ "./src/utils/babel-helpers/slicedToArray.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module19 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module20 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Card */ "./src/components/Base/Card.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5040.js */ "./src/unpacked/module-5040.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module96 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const Module802 = (0, _recoverInterop.__recoverInterop)(_Module);
const module5040 = (0, _recoverInterop.__recoverInterop)(_module7);
let o;
const v = (0, _module20.inject)("detailStore")(o = (0, _module20.observer)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(e) {
    let t;
    module36(this, a);
    t = r.call(this, e);
    t.store = e.detailStore;
    t.module = e.module;
    return t;
  }
  module37(a, [{
    key: "renderContent",
    value: function (e = {}) {
      return /*#__PURE__*/React.createElement("div", {
        className: module5040.wrapper
      }, /*#__PURE__*/React.createElement("ul", null, Object.entries(e).map(e => {
        const t = module96(e, 2);
        const r = t[0];
        const a = t[1];
        return /*#__PURE__*/React.createElement("li", {
          key: r
        }, /*#__PURE__*/React.createElement("div", {
          className: "h6"
        }, r), /*#__PURE__*/React.createElement("pre", {
          className: module5040.value
        }, a));
      })));
    }
  }, {
    key: "render",
    value: function () {
      const store = this.store;
      const {
        detail,
        isLoading
      } = store;
      return /*#__PURE__*/React.createElement(Module802, {
        title: t("DATA"),
        loading: isLoading
      }, this.renderContent(detail.data));
    }
  }]);
  return a;
})(_module19.Component)) || o) || o;
var _default = exports["default"] = v;

/***/ },

/***/ "./src/pages/fedprojects/containers/ConfigMaps/Detail/routes.js"
/*!**********************************************************************!*\
  !*** ./src/pages/fedprojects/containers/ConfigMaps/Detail/routes.js ***!
  \**********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var _component = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/ConfigMaps/Detail/ConfigDetail */ "./src/pages/fedprojects/containers/ConfigMaps/Detail/ConfigDetail.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const component = (0, _recoverInterop.__recoverInterop)(_component);
function _default(path) {
  return [{
    path: `${path}/detail`,
    title: "DATA",
    component,
    exact: true
  }, (0, _router.getIndexRoute)({
    path,
    to: `${path}/detail`,
    exact: true
  })];
}
;

/***/ },

/***/ "./src/pages/fedprojects/containers/Deployments/Detail.js"
/*!****************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Deployments/Detail.js ***!
  \****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module43 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/projects/containers/Base/Detail */ "./src/pages/projects/containers/Base/Detail.js"));
var _module44 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/workload/index */ "./src/stores/workload/index.js"));
var _index2 = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Deployments/Detail/routes */ "./src/pages/fedprojects/containers/Deployments/Detail/routes.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module806 = (0, _recoverInterop.__recoverInterop)(_Module);
const module437 = (0, _recoverInterop.__recoverInterop)(_module9);
const module318 = (0, _recoverInterop.__recoverInterop)(_module0);
const module4995 = (0, _recoverInterop.__recoverInterop)(_module1);
let l;
const P = (0, _module43.inject)("rootStore", "projectStore")(l = (0, _module43.observer)(l = (0, _action.trigger)(l = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o) {
    let e;
    module36(this, a);
    e = r.call(this, ...o);
    e.store = new module437(new module318(e.module));
    e.fetchData = async function t() {
      let r;
      r = e.props.match.params;
      await e.store.fetchDetail(r);
      await e.store.fetchResources({
        ...r,
        clusters: e.store.detail.clusters.map(e => e.name)
      });
    };
    e.getOperations = function () {
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.baseinfo.edit", {
            type: e.name,
            detail: module14.toJS(e.store.detail),
            success: e.fetchData
          });
        }
      }, {
        key: "editConfigTemplate",
        icon: "storage",
        text: t("EDIT_SETTINGS"),
        action: "edit",
        onClick: function () {
          return e.trigger("federated.workload.template.edit", {
            detail: e.store.detail,
            projectDetail: e.props.projectStore.detail,
            module: e.module,
            ...e.props.match.params,
            success: e.fetchData,
            isFederated: true,
            supportGpuSelect: true
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.yaml.edit", {
            detail: e.store.detail,
            success: e.fetchData
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        onClick: function () {
          return e.trigger("resource.delete", {
            type: e.name,
            detail: e.store.detail,
            success: function () {
              return e.routing.push(e.listUrl);
            }
          });
        }
      }];
    };
    e.getAttrs = function () {
      const r = module14.toJS(e.store.detail);
      const namespace = e.props.match.params.namespace;
      if (!module63(r)) {
        return [{
          name: t("PROJECT"),
          value: (0, _index2.showNameAndAlias)(namespace, "federatedProject")
        }, {
          name: t("APP"),
          value: r.app
        }, {
          name: t("CREATION_TIME_TCAP"),
          value: (0, _index2.getLocalTime)(r.createTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("UPDATE_TIME_TCAP"),
          value: (0, _index2.getLocalTime)(r.updateTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("CREATOR"),
          value: r.creator
        }];
      }
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function () {
      const stores = {
        detailStore: this.store
      };
      if (this.store.isLoading && !this.store.detail.name) {
        return /*#__PURE__*/React.createElement(module186.Loading, {
          className: "ks-page-loading"
        });
      }
      const r = {
        module: this.module,
        name: (0, _index2.getDisplayName)(this.store.detail),
        desc: this.store.detail.description,
        operations: this.getOperations(),
        attrs: this.getAttrs(),
        breadcrumbs: [{
          label: t("DEPLOYMENT_PL"),
          url: this.listUrl
        }]
      };
      return /*#__PURE__*/React.createElement(Module806, _extends({
        stores: stores
      }, r, {
        routes: module4995(this.props.match.path)
      }));
    }
  }, {
    key: "module",
    get: function () {
      return "deployments";
    }
  }, {
    key: "name",
    get: function () {
      return "DEPLOYMENT";
    }
  }, {
    key: "listUrl",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        cluster,
        namespace
      } = params;
      if (workspace) {
        return `/${workspace}/federatedprojects/${namespace}/${this.module}`;
      }
      return `/clusters/${cluster}/${this.module}`;
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }]);
  return a;
})(_module44.Component)) || l) || l) || l;
var _default = exports["default"] = P;

/***/ },

/***/ "./src/pages/fedprojects/containers/Deployments/Detail/routes.js"
/*!***********************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Deployments/Detail/routes.js ***!
  \***********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-815.js */ "./src/unpacked/module-815.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-821.js */ "./src/unpacked/module-821.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1983.js */ "./src/unpacked/module-1983.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1985.js */ "./src/unpacked/module-1985.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module815 = (0, _recoverInterop.__recoverInterop)(_module);
const module821 = (0, _recoverInterop.__recoverInterop)(_module2);
const module1983 = (0, _recoverInterop.__recoverInterop)(_module3);
const module1985 = (0, _recoverInterop.__recoverInterop)(_module4);
function _default(path) {
  return [{
    path: `${path}/resource-status`,
    title: "RESOURCE_STATUS",
    component: module1983,
    exact: true
  }, {
    path: `${path}/metadata`,
    title: "METADATA",
    component: module821,
    exact: true
  }, {
    path: `${path}/monitors`,
    title: "MONITORING",
    component: module1985,
    exact: true,
    clusterModule: "whizard-monitoring"
  }, {
    path: `${path}/events`,
    title: "EVENT_PL",
    component: module815,
    exact: true
  }, (0, _router.getIndexRoute)({
    path,
    to: `${path}/resource-status`,
    exact: true
  })];
}
;

/***/ },

/***/ "./src/pages/fedprojects/containers/Overview.js"
/*!******************************************************!*\
  !*** ./src/pages/fedprojects/containers/Overview.js ***!
  \******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module39 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module40 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Overview/BaseInfo */ "./src/pages/fedprojects/containers/Overview/BaseInfo.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4938.js */ "./src/unpacked/module-4938.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Overview/ResourceUsage */ "./src/pages/fedprojects/containers/Overview/ResourceUsage.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Overview/UsageRanking */ "./src/pages/fedprojects/containers/Overview/UsageRanking.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module26 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module4936 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module4938 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module4940 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module4948 = (0, _recoverInterop.__recoverInterop)(_Module4);
let o;
const C = (0, _module39.inject)("rootStore", "projectStore")(o = (0, _module39.observer)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...n) {
    let e;
    module36(this, a);
    e = r.call(this, ...n);
    e.state = {
      cluster: module26(e.project, "detail.clusters[0].name")
    };
    e.handleClusterChange = function (cluster) {
      e.setState({
        cluster
      });
    };
    return e;
  }
  module37(a, [{
    key: "render",
    value: function () {
      const detail = this.project.detail;
      const r = {
        cluster: this.state.cluster,
        clusters: this.clusters,
        onClusterChange: this.handleClusterChange
      };
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "h3 margin-b12"
      }, t("OVERVIEW")), /*#__PURE__*/React.createElement(module186.Columns, null, /*#__PURE__*/React.createElement(module186.Column, {
        className: "is-8"
      }, /*#__PURE__*/React.createElement(Module4936, {
        className: "margin-b12",
        detail: detail,
        workspace: this.workspace
      }), this.enabledActions.includes("edit") && /*#__PURE__*/React.createElement(Module4938, {
        match: this.props.match
      }), /*#__PURE__*/React.createElement(Module4940, _extends({
        match: this.props.match
      }, r))), /*#__PURE__*/React.createElement(module186.Column, {
        className: "is-4"
      }, /*#__PURE__*/React.createElement(Module4948, _extends({
        match: this.props.match
      }, r)))));
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }, {
    key: "namespace",
    get: function () {
      return module26(this.props.match, "params.namespace");
    }
  }, {
    key: "workspace",
    get: function () {
      return module26(this.props.match, "params.workspace");
    }
  }, {
    key: "project",
    get: function () {
      return this.props.projectStore;
    }
  }, {
    key: "clusters",
    get: function () {
      return module14.toJS(this.project.detail.clusters).map(e => ({
        label: (0, _index.showNameAndAlias)(e),
        value: e.name
      }));
    }
  }, {
    key: "enabledActions",
    get: function () {
      return globals.app.getActions({
        module: "project-settings",
        ...this.props.match.params,
        project: this.namespace,
        fedproject: true
      });
    }
  }]);
  return a;
})(_module40.Component)) || o) || o;
var _default = exports["default"] = C;

/***/ },

/***/ "./src/pages/fedprojects/containers/Overview/BaseInfo.js"
/*!***************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Overview/BaseInfo.js ***!
  \***************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module20 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module22 = __webpack_require__(/*! unpacked/module-433.js */ "./src/shims/react-router-dom.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Text */ "./src/components/Base/Text.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4937.js */ "./src/unpacked/module-4937.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module3 = (0, _recoverInterop.__recoverInterop)(_module6);
const module186 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module791 = (0, _recoverInterop.__recoverInterop)(_Module);
const module4937 = (0, _recoverInterop.__recoverInterop)(_module8);
const y = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a() {
    module36(this, a);
    return r.apply(this, arguments);
  }
  module37(a, [{
    key: "render",
    value: function () {
      const {
        className,
        detail = {},
        workspace
      } = this.props;
      return /*#__PURE__*/React.createElement("div", {
        className: module3(module4937.wrapper, className)
      }, /*#__PURE__*/React.createElement("div", {
        className: module4937.header
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "project",
        size: 40
      }), /*#__PURE__*/React.createElement(Module791, {
        title: (0, _index.getDisplayName)(detail),
        description: detail.description || "-"
      })), /*#__PURE__*/React.createElement("div", {
        className: module4937.content
      }, /*#__PURE__*/React.createElement(Module791, {
        title: /*#__PURE__*/React.createElement(_module22.Link, {
          to: `/workspaces/${workspace}`
        }, workspace),
        description: t("WORKSPACE")
      }), /*#__PURE__*/React.createElement(Module791, {
        title: detail.creator || "-",
        description: t("CREATOR")
      })), /*#__PURE__*/React.createElement("img", {
        className: module4937.background,
        src: "/assets/project-overview.svg"
      }));
    }
  }]);
  return a;
})(_module20.Component);
var _default = exports["default"] = y;

/***/ },

/***/ "./src/pages/fedprojects/containers/Overview/ResourceUsage.js"
/*!********************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Overview/ResourceUsage.js ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module40 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module41 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-837.js */ "./src/shims/react-fast-compare.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-959.js */ "./src/unpacked/module-959.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! stores/overview */ "./src/stores/overview.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Overview/ResourceUsage/AppResourceItem */ "./src/pages/fedprojects/containers/Overview/ResourceUsage/AppResourceItem.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4944.js */ "./src/unpacked/module-4944.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4945.js */ "./src/unpacked/module-4945.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module);
const module26 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const module837 = (0, _recoverInterop.__recoverInterop)(_module9);
const module959 = (0, _recoverInterop.__recoverInterop)(_module0);
const module1411 = (0, _recoverInterop.__recoverInterop)(_module1);
const Module4941 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module4944 = (0, _recoverInterop.__recoverInterop)(_module10);
const Module4945 = (0, _recoverInterop.__recoverInterop)(_Module3);
let o;
const metrics = ["namespace_pod_count", "namespace_deployment_count", "namespace_statefulset_count", "namespace_daemonset_count", "namespace_job_count", "namespace_cronjob_count", "namespace_pvc_count", "namespace_service_count", "namespace_secret_count", "namespace_configmap_count", "namespace_ingresses_extensions_count", "namespace_s2ibuilder_count"];
const A = ["namespace_cpu_usage", "namespace_memory_usage_wo_cache", "namespace_gpu_usage", "namespace_gpu_memory_usage"];
const j = (0, _module40.inject)("rootStore")(o = (0, _module40.observer)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(e) {
    let n;
    module36(this, a);
    n = r.call(this, e);
    n.fetchData = function (e = {}) {
      n.fetchMetrics();
      n.overviewStore.fetchResourceStatus({
        ...e,
        ...n.props.match.params,
        cluster: n.props.cluster
      });
    };
    n.fetchMetrics = function (e) {
      const n_state = n.state;
      const {
        resourceType,
        range
      } = n_state;
      if (resourceType === "application") {
        n.appResourceMonitorStore.fetchMetrics({
          ...n.props.match.params,
          cluster: n.props.cluster,
          metrics,
          step: `${Math.floor(range / 10)}s`,
          times: 10,
          fillZero: true,
          ...e,
          autoRefresh: false
        });
      } else {
        n.physicalResourceMonitorStore.fetchMetrics({
          ...n.props.match.params,
          cluster: n.props.cluster,
          metrics: (0, _index.hideGPUByLicense)(A, n.props.cluster),
          step: `${Math.floor(range / 40)}s`,
          times: 40,
          fillZero: true,
          ...e,
          autoRefresh: false
        });
      }
    };
    n.getResourceData = function () {
      const {
        quota = {},
        status = {}
      } = module14.toJS(n.overviewStore.resource);
      const c = quota.used || {};
      return [{
        key: "deployments",
        icon: _constants.ICON_TYPES.deployments,
        name: "DEPLOYMENT",
        routeName: "deployments",
        num: c["count/deployments.apps"],
        warnNum: status.deployments,
        metric: "namespace_deployment_count"
      }, {
        key: "statefulsets",
        icon: _constants.ICON_TYPES.statefulsets,
        name: "STATEFULSET",
        routeName: "statefulsets",
        num: c["count/statefulsets.apps"],
        warnNum: status.statefulsets,
        metric: "namespace_statefulset_count"
      }, {
        key: "volumes",
        icon: _constants.ICON_TYPES.volumes,
        name: "PERSISTENT_VOLUME_CLAIM",
        routeName: "volumes",
        num: c.persistentvolumeclaims || c["count/persistentvolumeclaims"],
        warnNum: status["persistent-volume-claims"],
        metric: "namespace_pvc_count"
      }, {
        key: "services",
        icon: _constants.ICON_TYPES.services,
        name: "SERVICE",
        routeName: "services",
        num: c["count/services"],
        metric: "namespace_service_count"
      }, {
        key: "ingresses",
        icon: _constants.ICON_TYPES.ingresses,
        name: "ROUTE",
        routeName: "ingresses",
        num: c["count/ingresses.extensions"],
        metric: "namespace_ingresses_extensions_count"
      }];
    };
    n.handleResouceTypeChange = function (resourceType) {
      n.setState({
        resourceType
      }, function () {
        n.fetchMetrics();
      });
    };
    n.handleRangeChange = function (range) {
      n.setState({
        range
      }, function () {
        n.fetchMetrics();
      });
    };
    n.clusterRenderer = function (e) {
      return t("CLUSTER_VALUE", {
        value: e.label
      });
    };
    n.state = {
      resourceType: "application",
      range: 43200
    };
    n.overviewStore = new module1411();
    n.appResourceMonitorStore = new module959();
    n.physicalResourceMonitorStore = new module959();
    n.fetchData();
    return n;
  }
  module37(a, [{
    key: "componentDidUpdate",
    value: function (e) {
      if (!(module837(e.match.params, this.props.match.params) && this.props.cluster === e.cluster)) {
        this.fetchData();
      }
    }
  }, {
    key: "componentDidMount",
    value: function () {
      (0, _monitoring.startAutoRefresh)(this, {
        method: "fetchMetrics",
        interval: 10000,
        leading: false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      (0, _monitoring.stopAutoRefresh)(this);
    }
  }, {
    key: "renderApplicationResource",
    value: function () {
      const _this = this;
      const isLoading_1 = module14.toJS(this.overviewStore.resource).isLoading;
      const appResourceMonitorStore = this.appResourceMonitorStore;
      const {
        data,
        isLoading,
        isRefreshing
      } = appResourceMonitorStore;
      const u = this.getResourceData();
      return /*#__PURE__*/React.createElement(module186.Loading, {
        spinning: isLoading_1
      }, /*#__PURE__*/React.createElement("div", {
        className: module4944.resources
      }, u.filter(e => !e.disabled).map(t => /*#__PURE__*/React.createElement(Module4941, _extends({}, _this.props.match.params, t, {
        metrics: module26(data, `${t.metric}.data.result`),
        isMetricsLoading: isLoading || isRefreshing
      })))));
    }
  }, {
    key: "renderPhysicalResource",
    value: function () {
      const _this = this;
      const physicalResourceMonitorStore = this.physicalResourceMonitorStore;
      const {
        data,
        isLoading,
        isRefreshing
      } = physicalResourceMonitorStore;
      const c = this.timeOptions.find(t => t.value === _this.state.range) || {};
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Module4945, {
        type: "cpu",
        title: t("CPU_USAGE_TIME", {
          time: c.label
        }),
        metrics: module26(data, "namespace_cpu_usage.data.result"),
        isLoading: isLoading || isRefreshing,
        showDay: c.value >= 172800
      }), /*#__PURE__*/React.createElement(Module4945, {
        type: "memory",
        title: t("MEMORY_USAGE_TIME", {
          time: c.label
        }),
        metrics: module26(data, "namespace_memory_usage_wo_cache.data.result"),
        isLoading: isLoading || isRefreshing,
        showDay: c.value >= 172800
      }));
    }
  }, {
    key: "renderHeader",
    value: function () {
      const props = this.props;
      const {
        cluster,
        clusters,
        onClusterChange
      } = props;
      return /*#__PURE__*/React.createElement("div", {
        className: module4944.header
      }, /*#__PURE__*/React.createElement(module186.RadioGroup, {
        mode: "button",
        value: this.state.resourceType,
        onChange: this.handleResouceTypeChange,
        size: "small"
      }, /*#__PURE__*/React.createElement(module186.RadioButton, {
        value: "application"
      }, t("APPLICATION_RESOURCE_PL")), /*#__PURE__*/React.createElement(module186.RadioButton, {
        value: "physical"
      }, t("PHYSICAL_RESOURCE_PL"))), /*#__PURE__*/React.createElement(module186.Select, {
        className: module4944.timeSelect,
        defaultValue: this.state.range,
        options: this.timeOptions,
        onChange: this.handleRangeChange
      }), /*#__PURE__*/React.createElement(module186.Select, {
        className: module4944.cluster,
        value: cluster,
        options: clusters,
        onChange: onClusterChange,
        valueRenderer: this.clusterRenderer,
        showTip: true
      }));
    }
  }, {
    key: "render",
    value: function () {
      const resourceType = this.state.resourceType;
      return /*#__PURE__*/React.createElement(Module790, {
        className: module4944.wrapper,
        title: t("RESOURCE_STATUS")
      }, this.renderHeader(), resourceType === "application" ? this.renderApplicationResource() : this.renderPhysicalResource());
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }, {
    key: "namespace",
    get: function () {
      return module26(this.props.match, "params.namespace");
    }
  }, {
    key: "timeOptions",
    get: function () {
      return [{
        label: t("LAST_TIME_H", {
          num: 1
        }),
        value: 3600
      }, {
        label: t("LAST_TIME_H", {
          num: 2
        }),
        value: 7200
      }, {
        label: t("LAST_TIME_H", {
          num: 5
        }),
        value: 18000
      }, {
        label: t("LAST_TIME_H", {
          num: 12
        }),
        value: 43200
      }, {
        label: t("LAST_TIME_D", {
          num: 1
        }),
        value: 86400
      }, {
        label: t("LAST_TIME_D", {
          num: 2
        }),
        value: 172800
      }, {
        label: t("LAST_TIME_D", {
          num: 3
        }),
        value: 259200
      }, {
        label: t("LAST_TIME_D", {
          num: 7
        }),
        value: 604800
      }];
    }
  }]);
  return a;
})(_module41.Component)) || o) || o;
var _default = exports["default"] = j;

/***/ },

/***/ "./src/pages/fedprojects/containers/Overview/ResourceUsage/AppResourceItem.js"
/*!************************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Overview/ResourceUsage/AppResourceItem.js ***!
  \************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module26 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module27 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-194.js */ "./src/unpacked/module-194.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Overview/ResourceUsage/TinyArea */ "./src/pages/fedprojects/containers/Overview/ResourceUsage/TinyArea.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4943.js */ "./src/unpacked/module-4943.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module31 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module1 = (0, _recoverInterop.__recoverInterop)(_module7);
const module3 = (0, _recoverInterop.__recoverInterop)(_module8);
const module194 = (0, _recoverInterop.__recoverInterop)(_module9);
const module186 = (0, _recoverInterop.__recoverInterop)(_module0);
const Module4942 = (0, _recoverInterop.__recoverInterop)(_Module);
const module4943 = (0, _recoverInterop.__recoverInterop)(_module1);
let o;
let c;
let u;
const b = (0, _module27.inject)("rootStore")(o = (0, _module27.observer)((u = c = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...n_1) {
    let e;
    module36(this, a);
    e = r.call(this, ...n_1);
    e.handleClick = function () {
      const e_props = e.props;
      const {
        onClick,
        name,
        routeName
      } = e_props;
      if (module194(onClick)) {
        onClick(name);
      } else if (routeName) {
        e.routing.push(`${e.prefix}/${routeName}`);
      }
    };
    e.handleWarnClick = function (t) {
      t.stopPropagation();
      const e_props = e.props;
      const {
        routeName,
        onClick,
        name
      } = e_props;
      const c = routeName === "volumes" ? "pending" : "updating";
      if (module194(onClick)) {
        onClick(name, c);
      } else if (routeName) {
        e.routing.push(`${e.prefix}/${routeName}?status=${c}`);
      }
    };
    return e;
  }
  module37(a, [{
    key: "renderWarn",
    value: function () {
      const props = this.props;
      const {
        warnNum,
        name
      } = props;
      const n = warnNum > 99 ? /*#__PURE__*/React.createElement("div", {
        className: module4943.skip
      }, "...") : warnNum;
      if (warnNum > 0) {
        return /*#__PURE__*/React.createElement("div", {
          className: module4943.warn
        }, /*#__PURE__*/React.createElement(module186.Tooltip, {
          className: module4943.tips,
          content: t("RESOURCE_WARNING_TIPS", {
            warnNum,
            tipName: t(`${name}_PL`)
          })
        }, /*#__PURE__*/React.createElement("div", {
          onClick: this.handleWarnClick
        }, n)));
      }
      return null;
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        className,
        icon,
        iconSize,
        name,
        routeName,
        num,
        metrics,
        onClick
      } = props;
      const d = (0, _monitoring.getAreaChartOps)({
        title: "",
        unit: "",
        legend: ["COUNT"],
        data: metrics
      });
      return /*#__PURE__*/React.createElement("div", {
        "data-name": name,
        className: module3(module4943.card, className)
      }, /*#__PURE__*/React.createElement("div", {
        className: module4943.icon
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: icon,
        size: iconSize
      }), this.renderWarn()), /*#__PURE__*/React.createElement("div", {
        className: module3(module4943.info, module31({}, module4943.cursor, routeName || onClick)),
        onClick: this.handleClick
      }, /*#__PURE__*/React.createElement("strong", null, num), /*#__PURE__*/React.createElement("span", null, num === "1" ? t(name) : t(`${name}_PL`))), /*#__PURE__*/React.createElement(Module4942, _extends({
        width: 330,
        height: 44,
        bgColor: "transparent"
      }, d)));
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }, {
    key: "prefix",
    get: function () {
      const props = this.props;
      const {
        namespace,
        workspace
      } = props;
      return `/${workspace}/federatedprojects/${namespace}`;
    }
  }]);
  return a;
})(_module26.Component), c.propTypes = {
  className: module1.string,
  icon: module1.string,
  iconSize: module1.number,
  name: module1.string,
  namespace: module1.string,
  routeName: module1.string,
  num: module1.oneOfType([module1.number, module1.string]),
  warnNum: module1.number,
  onClick: module1.func
}, c.defaultProps = {
  icon: "appcenter",
  iconSize: 40,
  name: "deployment",
  namespace: "default",
  routeName: "",
  num: 0,
  warnNum: 0
}, o = u)) || o) || o;
var _default = exports["default"] = b;

/***/ },

/***/ "./src/pages/fedprojects/containers/Overview/ResourceUsage/TinyArea.js"
/*!*****************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Overview/ResourceUsage/TinyArea.js ***!
  \*****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-828.js */ "./node_modules/core-js3/modules/es.array.fill.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module20 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
__webpack_require__(/*! unpacked/module-1419.js */ "./src/unpacked/module-1419.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-901.js */ "./src/shims/recharts/Area-module-901.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-870.js */ "./src/shims/recharts/Tooltip-module-870.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-871.js */ "./src/shims/recharts/XAxis-module-871.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-948.js */ "./src/shims/recharts/AreaChart-module-948.js"));
var _Module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-930.js */ "./src/shims/recharts/CartesianGrid-module-930.js"));
var _Module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-872.js */ "./src/shims/recharts/ResponsiveContainer-module-872.js"));
var _Module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-863.js */ "./src/unpacked/module-863.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module1 = (0, _recoverInterop.__recoverInterop)(_module6);
const Module901 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module870 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module871 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module948 = (0, _recoverInterop.__recoverInterop)(_Module4);
const Module930 = (0, _recoverInterop.__recoverInterop)(_Module5);
const Module872 = (0, _recoverInterop.__recoverInterop)(_Module6);
const Module863 = (0, _recoverInterop.__recoverInterop)(_Module7);
const E = (Component_1 => {
  module55(r, Component_1);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r() {
    module36(this, r);
    return t.apply(this, arguments);
  }
  module37(r, [{
    key: "getVeticalPoints",
    value: function () {
      const e = (this.props.width - 10) / 10;
      return Array(10).fill("").map((t, r) => 5 + e * r);
    }
  }, {
    key: "renderArea",
    value: function () {
      const props = this.props;
      const {
        unit,
        areaColors
      } = props;
      const dot = {
        stroke: "#55bc8a",
        strokeWidth: 1,
        fill: "#fff",
        fillOpacity: 1
      };
      return this.series.map((e, n) => {
        const o = _constants.COLORS_MAP[areaColors[n]];
        return /*#__PURE__*/React.createElement(Module901, {
          key: e,
          dataKey: e,
          stroke: o,
          fillOpacity: "0.1",
          fill: o,
          unit: unit,
          dot: dot
        });
      });
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        width,
        height,
        xKey,
        data
      } = props;
      return /*#__PURE__*/React.createElement(Module872, {
        width: width,
        height: height,
        debounce: 1
      }, /*#__PURE__*/React.createElement(Module948, {
        data: data
      }, /*#__PURE__*/React.createElement(Module871, {
        dataKey: xKey,
        hide: true
      }), /*#__PURE__*/React.createElement(Module870, {
        wrapperStyle: {
          zIndex: 1000
        },
        content: /*#__PURE__*/React.createElement(Module863, null)
      }), /*#__PURE__*/React.createElement(Module930, {
        strokeDasharray: "3 6",
        horizontal: false,
        verticalPoints: this.getVeticalPoints()
      }), this.renderArea()));
    }
  }, {
    key: "series",
    get: function () {
      const props = this.props;
      const {
        xKey,
        data
      } = props;
      return Object.keys(data[0] || {}).filter(e => e !== xKey);
    }
  }]);
  return r;
})(_module20.Component);
var _default = exports["default"] = E;
E.propTypes = {
  width: module1.oneOfType([module1.string, module1.number]),
  height: module1.oneOfType([module1.string, module1.number]),
  xKey: module1.string,
  unit: module1.string,
  data: module1.array,
  bgColor: module1.string,
  areaColors: module1.array
};
E.defaultProps = {
  width: 180,
  height: 56,
  xKey: "time",
  unit: "",
  bgColor: _constants.COLORS_MAP.lightest,
  areaColors: ["green", "blue", "yellow", "red"],
  data: []
};

/***/ },

/***/ "./src/pages/fedprojects/containers/Overview/UsageRanking.js"
/*!*******************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Overview/UsageRanking.js ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-48.js */ "./node_modules/core-js3/modules/es.array.slice.js");
__webpack_require__(/*! unpacked/module-190.js */ "./node_modules/core-js3/modules/es.number.to-fixed.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-64.js */ "./node_modules/core-js3/modules/es.string.replace.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module33 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module34 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-837.js */ "./src/shims/react-fast-compare.js"));
var _module36 = __webpack_require__(/*! unpacked/module-433.js */ "./src/shims/react-router-dom.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1436.js */ "./src/unpacked/module-1436.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4949.js */ "./src/unpacked/module-4949.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module);
const module26 = (0, _recoverInterop.__recoverInterop)(_module7);
const module63 = (0, _recoverInterop.__recoverInterop)(_module8);
const module14 = (0, _recoverInterop.__recoverInterop)(_module9);
const module837 = (0, _recoverInterop.__recoverInterop)(_module0);
const module1436 = (0, _recoverInterop.__recoverInterop)(_module1);
const module4949 = (0, _recoverInterop.__recoverInterop)(_module10);
let o;
const b = {
  workload_cpu_usage: "cpu",
  workload_memory_usage_wo_cache: "memory",
  workload_net_bytes_transmitted: "bandwidth",
  workload_net_bytes_received: "bandwidth"
};
const C = (0, _module33.inject)("rootStore")(o = (0, _module33.observer)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(e) {
    let n;
    module36(this, a);
    n = r.call(this, e);
    n.clusterRenderer = function (e) {
      return /*#__PURE__*/React.createElement("span", null, t("CLUSTER_VALUE", {
        value: (0, _index.showNameAndAlias)(e.value, "cluster", {}, true)
      }));
    };
    n.store = new module1436({
      cluster: e.cluster,
      namespaces: module26(e.match, "params.namespace")
    });
    return n;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.store.fetchAll();
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      if (!(module837(e.match.params, this.props.match.params) && this.props.cluster === e.cluster)) {
        this.store.cluster = this.props.cluster;
        this.store.namespaces = module26(this.props.match, "params.namespace");
        this.store.fetchAll();
      }
    }
  }, {
    key: "getWorkloadLink",
    value: function (e) {
      const e_workload_type = e.workload_type;
      if (e_workload_type !== "Pod") {
        const r = e.workload;
        const a = (r === undefined ? "" : r).replace(/\w+:/, "");
        const n = this.props.match.params;
        const {
          workspace,
          namespace
        } = n;
        return {
          deployment: `/${workspace}/federatedprojects/${namespace}/deployments/${a}`,
          statefulset: `/${workspace}/federatedprojects/${namespace}/statefulsets/${a}`,
          daemonset: `/${workspace}/federatedprojects/${namespace}/daemonsets/${a}`
        }[e_workload_type];
      }
    }
  }, {
    key: "renderHeader",
    value: function () {
      const props = this.props;
      const {
        cluster,
        clusters,
        onClusterChange
      } = props;
      return /*#__PURE__*/React.createElement("div", {
        className: module4949.header
      }, /*#__PURE__*/React.createElement(module186.Select, {
        className: module4949.select,
        value: cluster,
        options: clusters,
        onChange: onClusterChange,
        valueRenderer: this.clusterRenderer,
        showTip: true
      }), /*#__PURE__*/React.createElement(module186.Select, {
        className: module4949.select,
        value: this.store.sort_metric,
        onChange: this.store.changeSortMetric,
        options: this.options
      }));
    }
  }, {
    key: "renderEmpty",
    value: function () {
      return /*#__PURE__*/React.createElement("div", {
        className: module4949.empty
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "backup",
        size: 32
      }), /*#__PURE__*/React.createElement("div", null, t("NO_DATA")));
    }
  }, {
    key: "renderContent",
    value: function () {
      const _this = this;
      const r = module14.toJS(this.store.data);
      if (!this.store.isLoading && module63(r)) {
        return this.renderEmpty();
      }
      return /*#__PURE__*/React.createElement("div", {
        className: module4949.content
      }, r.slice(0, 5).map(a => {
        const o = {
          deployment: "backup",
          dtatefulset: "stateful-set",
          dataaemonset: "deamon-set",
          pod: "pod",
          default: "backup"
        };
        const to = _this.getWorkloadLink(a);
        const u = a.workload.replace(/\w+:/, "");
        const l = 100 * a[_this.store.sort_metric] / r[0][_this.store.sort_metric];
        const i = (0, _monitoring.getSuitableUnit)(a[_this.store.sort_metric], b[_this.store.sort_metric]);
        const s = (0, _monitoring.getValueByUnit)(a[_this.store.sort_metric], i) || 0;
        const d = (0, _index.coreUnitTS)(s, i);
        return /*#__PURE__*/React.createElement("div", {
          className: module4949.app,
          key: `${a.workload_type}-${u}`
        }, /*#__PURE__*/React.createElement("div", {
          className: module4949.appContent
        }, /*#__PURE__*/React.createElement(module186.Icon, {
          name: o[a.workload_type] || o.Default,
          type: "dark",
          size: 40
        }), /*#__PURE__*/React.createElement("div", {
          className: module4949.text
        }, /*#__PURE__*/React.createElement("div", {
          className: "relative",
          "data-tooltip": u
        }, /*#__PURE__*/React.createElement("div", null, to ? /*#__PURE__*/React.createElement(_module36.Link, {
          to: to
        }, u) : u)), /*#__PURE__*/React.createElement("p", null, t(a.workload_type?.toUpperCase()))), /*#__PURE__*/React.createElement("div", {
          className: module4949.value
        }, s, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 12
          }
        }, " ", t(d)))), /*#__PURE__*/React.createElement("div", {
          className: module4949.background,
          style: {
            width: `${l.toFixed(2)}%`
          }
        }));
      }));
    }
  }, {
    key: "render",
    value: function () {
      return /*#__PURE__*/React.createElement(Module790, {
        className: module4949.wrapper,
        title: t("TOP_5_FOR_RESOURCE_USAGE")
      }, this.renderHeader(), this.renderContent());
    }
  }, {
    key: "options",
    get: function () {
      return this.store.sort_metric_options.map(e => ({
        value: e,
        label: t(`SORT_BY_${e.toUpperCase()}`)
      }));
    }
  }]);
  return a;
})(_module34.Component)) || o) || o;
var _default = exports["default"] = C;

/***/ },

/***/ "./src/pages/fedprojects/containers/Routes/Detail.js"
/*!***********************************************************!*\
  !*** ./src/pages/fedprojects/containers/Routes/Detail.js ***!
  \***********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module41 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/projects/containers/Base/Detail */ "./src/pages/projects/containers/Base/Detail.js"));
var _module42 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/ingress */ "./src/stores/ingress.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Routes/Detail/routes */ "./src/pages/fedprojects/containers/Routes/Detail/routes.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module806 = (0, _recoverInterop.__recoverInterop)(_Module);
const module437 = (0, _recoverInterop.__recoverInterop)(_module9);
const module918 = (0, _recoverInterop.__recoverInterop)(_module0);
const module5017 = (0, _recoverInterop.__recoverInterop)(_module1);
let o;
const R = (0, _module41.inject)("rootStore", "projectStore")(o = (0, _module41.observer)(o = (0, _action.trigger)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o) {
    let e;
    module36(this, a);
    e = r.call(this, ...o);
    e.store = new module437(new module918());
    e.fetchData = function () {
      const params = e.props.match.params;
      const clusters = e.props.projectStore.detail.clusters.map(e => e.name);
      e.store.fetchDetail(params);
      e.store.fetchResources({
        ...params,
        clusters
      });
    };
    e.getOperations = function () {
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.baseinfo.edit", {
            type: e.name,
            detail: module14.toJS(e.store.detail),
            success: e.fetchData
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.yaml.edit", {
            detail: e.store.detail,
            success: e.fetchData
          });
        }
      }, {
        key: "editRules",
        icon: "firewall",
        text: t("EDIT_ROUTING_RULES"),
        action: "edit",
        onClick: function () {
          return e.trigger("fedproject.router.rules.edit", {
            isFederated: true,
            detail: module14.toJS(e.store.detail),
            projectDetail: module14.toJS(e.props.projectStore.detail),
            success: e.fetchData
          });
        }
      }, {
        key: "editAnnotations",
        icon: "firewall",
        text: t("EDIT_ANNOTATIONS"),
        action: "edit",
        onClick: function () {
          return e.trigger("router.annotations.edit", {
            detail: module14.toJS(e.store.detail),
            success: e.fetchData
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        type: "danger",
        onClick: function () {
          return e.trigger("resource.delete", {
            type: e.name,
            detail: e.store.detail,
            success: function () {
              return e.routing.push(e.listUrl);
            }
          });
        }
      }];
    };
    e.getAttrs = function () {
      const r = module14.toJS(e.store.detail);
      const namespace = e.props.match.params.namespace;
      if (!module63(r)) {
        return [{
          name: t("PROJECT"),
          value: (0, _index.showNameAndAlias)(namespace, "federatedProject")
        }, {
          name: t("APP"),
          value: r.app
        }, {
          name: t("CREATION_TIME_TCAP"),
          value: (0, _index.getLocalTime)(r.createTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("CREATOR"),
          value: r.creator
        }];
      }
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function () {
      const stores = {
        detailStore: this.store
      };
      if (this.store.isLoading && !this.store.detail.name) {
        return /*#__PURE__*/React.createElement(module186.Loading, {
          className: "ks-page-loading"
        });
      }
      const r = {
        module: this.module,
        name: (0, _index.getDisplayName)(this.store.detail),
        desc: this.store.detail.description,
        operations: this.getOperations(),
        attrs: this.getAttrs(),
        breadcrumbs: [{
          label: t(`${this.name}_PL`),
          url: this.listUrl
        }]
      };
      return /*#__PURE__*/React.createElement(Module806, _extends({
        stores: stores
      }, r, {
        routes: module5017(this.props.match.path)
      }));
    }
  }, {
    key: "module",
    get: function () {
      return "ingresses";
    }
  }, {
    key: "name",
    get: function () {
      return "ROUTE";
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }, {
    key: "listUrl",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        cluster,
        namespace
      } = params;
      if (workspace) {
        return `/${workspace}/federatedprojects/${namespace}/${this.module}`;
      }
      return `/clusters/${cluster}/${this.module}`;
    }
  }]);
  return a;
})(_module42.Component)) || o) || o) || o;
var _default = exports["default"] = R;

/***/ },

/***/ "./src/pages/fedprojects/containers/Routes/Detail/ResourceStatus.js"
/*!**************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Routes/Detail/ResourceStatus.js ***!
  \**************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module23 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-321.js */ "./src/unpacked/module-321.js"));
var _module25 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Routes/Detail/ResourceStatus/Item */ "./src/pages/fedprojects/containers/Routes/Detail/ResourceStatus/Item.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module321 = (0, _recoverInterop.__recoverInterop)(_module6);
const module186 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module5019 = (0, _recoverInterop.__recoverInterop)(_Module);
let n;
const v = (0, _module25.inject)("detailStore", "projectStore")(n = (0, _module25.observer)(n = (Component_1 => {
  module55(r, Component_1);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r(...n) {
    let e;
    module36(this, r);
    e = t.call(this, ...n);
    e.store = e.props.detailStore;
    return e;
  }
  module37(r, [{
    key: "render",
    value: function () {
      const _this = this;
      const {
        detail,
        resources = {},
        isResourcesLoading
      } = this.store;
      const u = module321(this.props.projectStore.detail.clusters, "name");
      return /*#__PURE__*/React.createElement(module186.Loading, {
        spinning: isResourcesLoading
      }, /*#__PURE__*/React.createElement("div", null, detail.clusters.map(t => /*#__PURE__*/React.createElement(Module5019, _extends({
        key: t.name
      }, _this.props.match.params, {
        detail: resources[t.name],
        cluster: u[t.name]
      })))));
    }
  }]);
  return r;
})(_module23.Component)) || n) || n;
var _default = exports["default"] = v;

/***/ },

/***/ "./src/pages/fedprojects/containers/Routes/Detail/ResourceStatus/Item.js"
/*!*******************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Routes/Detail/ResourceStatus/Item.js ***!
  \*******************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-189.js */ "./src/unpacked/module-189.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module28 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module30 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Text */ "./src/components/Base/Text.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! components/Clusters/ClusterTitle */ "./src/components/Clusters/ClusterTitle.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! pages/projects/components/Cards/Annotations */ "./src/pages/projects/components/Cards/Annotations.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/gateway */ "./src/stores/gateway.js"));
var _Module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1981.js */ "./src/unpacked/module-1981.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5022.js */ "./src/unpacked/module-5022.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module189 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module791 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module816 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module5020 = (0, _recoverInterop.__recoverInterop)(_Module4);
const module834 = (0, _recoverInterop.__recoverInterop)(_module9);
const Module1981 = (0, _recoverInterop.__recoverInterop)(_Module5);
const module5022 = (0, _recoverInterop.__recoverInterop)(_module0);
let c;
const C = (0, _module30.observer)(c = (Component_1 => {
  module55(n, Component_1);
  var a = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(n);
  function n(...r) {
    let e;
    module36(this, n);
    e = a.call(this, ...r);
    e.store = new module834();
    e.state = {
      gateway: {}
    };
    return e;
  }
  module37(n, [{
    key: "componentDidMount",
    value: function () {
      this.getGateway();
    }
  }, {
    key: "getGateway",
    value: async function () {
      let t;
      let r;
      let namespace;
      let n;
      t = this.props;
      r = t.cluster;
      namespace = t.namespace;
      n = await this.store.getGatewayByProject({
        cluster: r.name,
        namespace
      });
      this.setState({
        gateway: n[0] || n[1] || n[2] || {}
      });
    }
  }, {
    key: "getNodePorts",
    value: function (e) {
      if (e.ports) {
        return e.ports.map(e => `${e.name.toUpperCase()}: ${e.nodePort}`).join("/");
      }
      return "-";
    }
  }, {
    key: "getExternalIP",
    value: function (e) {
      let t = "-";
      if (module63(e.loadBalancerIngress)) {
        if (!module63(e.externalIPs)) {
          t = e.externalIPs.join("; ");
        }
      } else {
        t = e.loadBalancerIngress.join("; ");
      }
      return t || "-";
    }
  }, {
    key: "renderRules",
    value: function () {
      const props = this.props;
      const {
        workspace,
        namespace,
        detail
      } = props;
      const gateway = module14.toJS(this.state.gateway) || {};
      if (!detail || module63(detail.rules)) {
        return t("NO_DATA");
      }
      const tls = detail.tls || [];
      return /*#__PURE__*/React.createElement("div", {
        className: module5022.rules
      }, detail.rules.map(rule => /*#__PURE__*/React.createElement(Module1981, {
        key: rule.host,
        tls: tls,
        rule: rule,
        gateway: gateway,
        prefix: `/${workspace}/federatedprojects/${namespace}`
      })));
    }
  }, {
    key: "renderAnnotations",
    value: function () {
      const detail = this.props.detail;
      if (detail) {
        return /*#__PURE__*/React.createElement(Module5020, {
          data: module189(detail.annotations, ["displayName", "desc", "creator"])
        });
      }
      return null;
    }
  }, {
    key: "render",
    value: function () {
      const cluster = this.props.cluster;
      const r = module14.toJS(this.state.gateway) || {};
      return /*#__PURE__*/React.createElement(Module790, null, /*#__PURE__*/React.createElement("div", {
        className: module5022.header
      }, /*#__PURE__*/React.createElement("div", {
        className: module5022.cluster
      }, /*#__PURE__*/React.createElement(Module816, {
        cluster: cluster,
        theme: "light",
        tagClass: "float-right"
      })), /*#__PURE__*/React.createElement(Module791, {
        icon: "eip-pool",
        title: r.type,
        description: t("GATEWAY_ACCESS_MODE")
      }), r.type === "NodePort" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Module791, {
        title: r.loadBalancerIngress || "-",
        description: t("GATEWAY_IP_ADDRESS")
      }), /*#__PURE__*/React.createElement(Module791, {
        title: this.getNodePorts(r),
        description: t("NODE_PORTS_SCAP")
      })) : /*#__PURE__*/React.createElement(Module791, {
        title: this.getExternalIP(r),
        description: t("EXTERNAL_IP_ADDRESS")
      })), /*#__PURE__*/React.createElement("div", {
        className: module5022.content
      }, this.renderRules(), this.renderAnnotations()));
    }
  }]);
  return n;
})(_module28.Component)) || c;
var _default = exports["default"] = C;

/***/ },

/***/ "./src/pages/fedprojects/containers/Routes/Detail/routes.js"
/*!******************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Routes/Detail/routes.js ***!
  \******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-815.js */ "./src/unpacked/module-815.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-821.js */ "./src/unpacked/module-821.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Routes/Detail/ResourceStatus */ "./src/pages/fedprojects/containers/Routes/Detail/ResourceStatus.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module815 = (0, _recoverInterop.__recoverInterop)(_module);
const module821 = (0, _recoverInterop.__recoverInterop)(_module2);
const module5018 = (0, _recoverInterop.__recoverInterop)(_module3);
function _default(path) {
  return [{
    path: `${path}/resource-status`,
    title: "RESOURCE_STATUS",
    component: module5018,
    exact: true
  }, {
    path: `${path}/metadata`,
    title: "METADATA",
    component: module821,
    exact: true
  }, {
    path: `${path}/events`,
    title: "EVENT_PL",
    component: module815,
    exact: true
  }, (0, _router.getIndexRoute)({
    path,
    to: `${path}/resource-status`,
    exact: true
  })];
}
;

/***/ },

/***/ "./src/pages/fedprojects/containers/Secrets/Detail.js"
/*!************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Secrets/Detail.js ***!
  \************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module31 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/projects/containers/Base/Detail */ "./src/pages/projects/containers/Base/Detail.js"));
var _module32 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Secrets/Detail/routes */ "./src/pages/fedprojects/containers/Secrets/Detail/routes.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module806 = (0, _recoverInterop.__recoverInterop)(_Module);
const module437 = (0, _recoverInterop.__recoverInterop)(_module9);
const module5034 = (0, _recoverInterop.__recoverInterop)(_module0);
let o;
const k = (0, _module31.inject)("rootStore")(o = (0, _module31.observer)(o = (0, _action.trigger)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o) {
    let e;
    module36(this, a);
    e = r.call(this, ...o);
    e.store = new module437({
      module: e.module
    });
    e.fetchData = function () {
      e.store.fetchDetail(e.props.match.params);
    };
    e.getOperations = function () {
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.baseinfo.edit", {
            type: e.name,
            detail: module14.toJS(e.store.detail),
            success: e.fetchData
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.yaml.edit", {
            detail: e.store.detail,
            success: e.fetchData
          });
        }
      }, {
        key: "editSecret",
        icon: "pen",
        text: t("EDIT_SETTINGS"),
        action: "edit",
        onClick: function () {
          return e.trigger("secret.edit", {
            detail: e.store.detail,
            success: e.fetchData,
            isFederated: true
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        type: "danger",
        onClick: function () {
          return e.trigger("resource.delete", {
            type: e.name,
            detail: e.store.detail,
            success: function () {
              return e.routing.push(e.listUrl);
            }
          });
        }
      }];
    };
    e.getAttrs = function () {
      const r = module14.toJS(e.store.detail);
      const namespace = e.props.match.params.namespace;
      if (!module63(r)) {
        const n = r.type;
        return [{
          name: t("PROJECT"),
          value: (0, _index.showNameAndAlias)(namespace, "federatedProject")
        }, {
          name: t("TYPE"),
          value: t(_constants.SECRET_TYPES[n] || n)
        }, {
          name: t("CREATION_TIME_TCAP"),
          value: (0, _index.getLocalTime)(r.createTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("UPDATE_TIME_TCAP"),
          value: (0, _index.getLocalTime)(r.updateTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("CREATOR"),
          value: r.creator
        }];
      }
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function () {
      const stores = {
        detailStore: this.store
      };
      if (this.store.isLoading && !this.store.detail.name) {
        return /*#__PURE__*/React.createElement(module186.Loading, {
          className: "ks-page-loading"
        });
      }
      const r = {
        module: this.module,
        name: (0, _index.getDisplayName)(this.store.detail),
        desc: this.store.detail.description,
        operations: this.getOperations(),
        attrs: this.getAttrs(),
        breadcrumbs: [{
          label: t("SECRET_PL"),
          url: this.listUrl
        }]
      };
      return /*#__PURE__*/React.createElement(Module806, _extends({
        stores: stores
      }, r, {
        routes: module5034(this.props.match.path)
      }));
    }
  }, {
    key: "module",
    get: function () {
      return "secrets";
    }
  }, {
    key: "name",
    get: function () {
      return "SECRET";
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }, {
    key: "listUrl",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        cluster,
        namespace
      } = params;
      if (workspace) {
        return `/${workspace}/federatedprojects/${namespace}/${this.module}`;
      }
      return `/clusters/${cluster}/${this.module}`;
    }
  }]);
  return a;
})(_module32.Component)) || o) || o) || o;
var _default = exports["default"] = k;

/***/ },

/***/ "./src/pages/fedprojects/containers/Secrets/Detail/SecretDetail.js"
/*!*************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Secrets/Detail/SecretDetail.js ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-98.js */ "./node_modules/core-js3/modules/es.object.entries.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-191.js */ "./node_modules/core-js3/modules/es.date.to-json.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-160.js */ "./node_modules/core-js3/modules/es.json.stringify.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/slicedToArray */ "./src/utils/babel-helpers/slicedToArray.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module23 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module24 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Card */ "./src/components/Base/Card.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5036.js */ "./src/unpacked/module-5036.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module96 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module186 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module802 = (0, _recoverInterop.__recoverInterop)(_Module);
const module26 = (0, _recoverInterop.__recoverInterop)(_module8);
const module5036 = (0, _recoverInterop.__recoverInterop)(_module9);
let o;
const g = (0, _module24.inject)("detailStore")(o = (0, _module24.observer)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(e) {
    let t;
    module36(this, a);
    t = r.call(this, e);
    t.convert = function (e, r) {
      if (t.state.showSecret) {
        return e;
      }
      return module26(t.originData, r, "");
    };
    t.changeSecretState = function () {
      t.setState(function (e) {
        return {
          showSecret: !e.showSecret
        };
      });
    };
    t.store = e.detailStore;
    t.module = e.module;
    t.state = {
      showSecret: false
    };
    return t;
  }
  module37(a, [{
    key: "renderTLS",
    value: function (e = {}) {
      return /*#__PURE__*/React.createElement("div", {
        className: module5036.tlsWrapper
      }, /*#__PURE__*/React.createElement("div", {
        className: module5036.tlsItem
      }, /*#__PURE__*/React.createElement("div", {
        className: "h6"
      }, t("CREDENTIAL_SI")), /*#__PURE__*/React.createElement("pre", null, this.convert(e["tls.crt"], "tls.crt"))), /*#__PURE__*/React.createElement("div", {
        className: module5036.tlsItem
      }, /*#__PURE__*/React.createElement("div", {
        className: "h6"
      }, t("PRIVATE_KEY_TCAP")), /*#__PURE__*/React.createElement("pre", null, this.convert(e["tls.key"], "tls.key"))));
    }
  }, {
    key: "renderImageRepositorySecret",
    value: function (e) {
      const _this = this;
      const a = e[".dockerconfigjson"];
      if (a && a.auths) {
        return /*#__PURE__*/React.createElement("div", {
          className: module5036.imageWrapper
        }, /*#__PURE__*/React.createElement("ul", null, Object.entries(a.auths).map(e => {
          const n = module96(e, 1)[0];
          return /*#__PURE__*/React.createElement("li", {
            key: n
          }, /*#__PURE__*/React.createElement("div", {
            className: "h6"
          }, /*#__PURE__*/React.createElement(module186.Icon, {
            name: "earth"
          }), n), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, t(".dockerconfigjson"), ":"), /*#__PURE__*/React.createElement("span", null, _this.convert(JSON.stringify(a), ".dockerconfigjson")))));
        })));
      }
      return null;
    }
  }, {
    key: "renderDefault",
    value: function (t = {}) {
      const _this = this;
      return /*#__PURE__*/React.createElement("div", {
        className: module5036.defaultWrapper
      }, /*#__PURE__*/React.createElement("ul", null, Object.entries(t).map(t => {
        const r = module96(t, 2);
        const a = r[0];
        const n = r[1];
        return /*#__PURE__*/React.createElement("li", {
          key: a
        }, /*#__PURE__*/React.createElement("span", null, a, ":"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("pre", null, _this.convert(n, a))));
      })));
    }
  }, {
    key: "renderBasicAuth",
    value: function (r = {}) {
      const _this = this;
      return /*#__PURE__*/React.createElement("div", {
        className: module5036.defaultWrapper
      }, /*#__PURE__*/React.createElement("ul", null, Object.entries(r).map(r => {
        const a = module96(r, 2);
        const n = a[0];
        const o = a[1];
        return /*#__PURE__*/React.createElement("li", {
          key: n
        }, /*#__PURE__*/React.createElement("span", null, t(n.toUpperCase()), ":"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("pre", null, _this.convert(o, n))));
      })));
    }
  }, {
    key: "renderContent",
    value: function (e) {
      if (!e.type) {
        return null;
      }
      let t = null;
      switch (e.type) {
        case "kubernetes.io/tls":
          t = this.renderTLS(e.data);
          break;
        case "kubernetes.io/dockerconfigjson":
          t = this.renderImageRepositorySecret(e.data);
          break;
        case "kubernetes.io/basic-auth":
          t = this.renderBasicAuth(e.data);
          break;
        default:
          t = this.renderDefault(e.data);
      }
      return t;
    }
  }, {
    key: "renderOperations",
    value: function () {
      const showSecret = this.state.showSecret;
      return /*#__PURE__*/React.createElement(module186.Button, {
        type: "flat",
        icon: showSecret ? "eye-closed" : "eye",
        onClick: this.changeSecretState
      });
    }
  }, {
    key: "render",
    value: function () {
      const detail = this.store.detail;
      const r = detail === undefined ? {} : detail;
      return /*#__PURE__*/React.createElement(Module802, {
        title: t("DATA"),
        operations: this.renderOperations()
      }, this.renderContent(r));
    }
  }, {
    key: "originData",
    get: function () {
      return this.store.detail._originData?.data ?? {};
    }
  }]);
  return a;
})(_module23.Component)) || o) || o;
var _default = exports["default"] = g;

/***/ },

/***/ "./src/pages/fedprojects/containers/Secrets/Detail/routes.js"
/*!*******************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Secrets/Detail/routes.js ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var _component = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Secrets/Detail/SecretDetail */ "./src/pages/fedprojects/containers/Secrets/Detail/SecretDetail.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const component = (0, _recoverInterop.__recoverInterop)(_component);
function _default(path) {
  return [{
    path: `${path}/detail`,
    title: "DATA",
    component,
    exact: true
  }, (0, _router.getIndexRoute)({
    path,
    to: `${path}/detail`,
    exact: true
  })];
}
;

/***/ },

/***/ "./src/pages/fedprojects/containers/Services/Detail.js"
/*!*************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Services/Detail.js ***!
  \*************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module45 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/projects/containers/Base/Detail */ "./src/pages/projects/containers/Base/Detail.js"));
var _module46 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! stores/service */ "./src/stores/service.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _module10 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Services/Detail/routes */ "./src/pages/fedprojects/containers/Services/Detail/routes.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module26 = (0, _recoverInterop.__recoverInterop)(_module7);
const module63 = (0, _recoverInterop.__recoverInterop)(_module8);
const module14 = (0, _recoverInterop.__recoverInterop)(_module9);
const Module806 = (0, _recoverInterop.__recoverInterop)(_Module);
const module437 = (0, _recoverInterop.__recoverInterop)(_module0);
const module443 = (0, _recoverInterop.__recoverInterop)(_module1);
const module5007 = (0, _recoverInterop.__recoverInterop)(_module10);
let l;
const w = (0, _module45.inject)("rootStore", "projectStore")(l = (0, _module45.observer)(l = (0, _action.trigger)(l = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o) {
    let e;
    module36(this, a);
    e = r.call(this, ...o);
    e.store = new module437(new module443());
    e.fetchData = async function t() {
      let r;
      r = e.props.match.params;
      await e.store.fetchDetail(r);
      await e.store.fetchResources({
        ...r,
        clusters: e.store.detail.clusters.map(e => e.name)
      });
    };
    e.getOperations = function () {
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.baseinfo.edit", {
            type: e.name,
            detail: e.store.detail,
            success: e.fetchData
          });
        }
      }, {
        key: "editConfigTemplate",
        icon: "storage",
        text: t("EDIT_SETTINGS"),
        action: "edit",
        onClick: function () {
          return e.trigger("federated.workload.template.edit", {
            detail: e.store.detail,
            projectDetail: e.props.projectStore.detail,
            module: "service",
            ...e.props.match.params,
            success: e.fetchData,
            isFederated: true,
            withService: true
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.yaml.edit", {
            detail: e.store.detail,
            success: e.fetchData
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        onClick: function () {
          return e.trigger("resource.delete", {
            type: e.name,
            detail: e.store.detail,
            success: function () {
              return e.routing.push(e.listUrl);
            }
          });
        }
      }];
    };
    e.getAttrs = function () {
      const r = module14.toJS(e.store.detail);
      const namespace = e.props.match.params.namespace;
      if (!module63(r)) {
        const n = module26(r, 'annotations["kubesphere.io/serviceType"]');
        return [{
          name: t("PROJECT"),
          value: (0, _index.showNameAndAlias)(namespace, "federatedProject")
        }, {
          name: t("TYPE"),
          value: /*#__PURE__*/React.createElement("span", null, `${n ? t(`SERVICE_TYPE_${n.toUpperCase()}`) : t("CUSTOM_SERVICE")}`, /*#__PURE__*/React.createElement("span", {
            className: "text-desc"
          }, " (", t(r.type), ")"))
        }, {
          name: t("APP"),
          value: r.app
        }, {
          name: t("CREATION_TIME_TCAP"),
          value: (0, _index.getLocalTime)(r.createTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("UPDATE_TIME_TCAP"),
          value: (0, _index.getLocalTime)(r.updateTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("CREATOR"),
          value: r.creator
        }];
      }
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function () {
      const stores = {
        detailStore: this.store
      };
      if (this.store.isLoading && !this.store.detail.name) {
        return /*#__PURE__*/React.createElement(module186.Loading, {
          className: "ks-page-loading"
        });
      }
      const r = {
        module: this.module,
        name: (0, _index.getDisplayName)(this.store.detail),
        desc: this.store.detail.description,
        operations: this.getOperations(),
        attrs: this.getAttrs(),
        breadcrumbs: [{
          label: t(`${this.name}_PL`),
          url: this.listUrl
        }]
      };
      return /*#__PURE__*/React.createElement(Module806, _extends({
        stores: stores
      }, r, {
        routes: module5007(this.props.match.path, this.store.detail)
      }));
    }
  }, {
    key: "module",
    get: function () {
      return "services";
    }
  }, {
    key: "name",
    get: function () {
      return "SERVICE";
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }, {
    key: "listUrl",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        cluster,
        namespace
      } = params;
      if (workspace) {
        return `/${workspace}/federatedprojects/${namespace}/${this.module}`;
      }
      return `/clusters/${cluster}/${this.module}`;
    }
  }]);
  return a;
})(_module46.Component)) || l) || l) || l;
var _default = exports["default"] = w;

/***/ },

/***/ "./src/pages/fedprojects/containers/Services/Detail/Ports.js"
/*!*******************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Services/Detail/Ports.js ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5013.js */ "./src/unpacked/module-5013.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module5013 = (0, _recoverInterop.__recoverInterop)(_module8);
const h = (e => {
  module55(a, e);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a() {
    module36(this, a);
    return r.apply(this, arguments);
  }
  module37(a, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        detail,
        gateway
      } = props;
      if (module63(detail.ports)) {
        return null;
      }
      return module553.default.createElement("div", {
        className: module5013.portsWrapper
      }, detail.ports.map((e, key) => module553.default.createElement("div", {
        key,
        className: module5013.ports
      }, module553.default.createElement(module186.Icon, {
        name: "pod",
        size: 40
      }), module553.default.createElement("div", {
        className: module5013.port
      }, module553.default.createElement("p", null, module553.default.createElement("strong", null, e.targetPort)), module553.default.createElement("p", null, t("CONTAINER_PORT_SCAP"))), module553.default.createElement("div", {
        className: module5013.protocol
      }, "→ ", e.protocol, " → "), module553.default.createElement(module186.Icon, {
        name: "network-router",
        size: 40
      }), module553.default.createElement("div", {
        className: module5013.port
      }, module553.default.createElement("p", null, module553.default.createElement("strong", null, e.port)), module553.default.createElement("p", null, t("SERVICE_PORT_SCAP"))), e.nodePort && module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module5013.protocol
      }, "→ ", e.protocol, " → "), module553.default.createElement(module186.Icon, {
        name: "nodes",
        size: 40
      }), module553.default.createElement("div", {
        className: module5013.port
      }, module553.default.createElement("p", null, module553.default.createElement("strong", null, e.nodePort)), module553.default.createElement("div", null, t("NODE_PORT_SCAP"), module553.default.createElement(module186.Tooltip, {
        content: t("SERVICE_NODE_PORT_DESC"),
        trigger: "hover"
      }, module553.default.createElement(module186.Icon, {
        name: "information"
      })))), gateway && gateway.defaultIngress && module553.default.createElement("a", {
        href: `http://${gateway.defaultIngress}:${e.nodePort}`,
        target: "_blank",
        rel: "noreferrer noopener"
      }, module553.default.createElement(module186.Button, {
        className: module5013.access
      }, t("ACCESS_SERVICE")))))));
    }
  }]);
  return a;
})(module553.Component);
var _default = exports["default"] = h;

/***/ },

/***/ "./src/pages/fedprojects/containers/Services/Detail/ResourceStatus.js"
/*!****************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Services/Detail/ResourceStatus.js ***!
  \****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module44 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module46 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-321.js */ "./src/unpacked/module-321.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-136.js */ "./src/unpacked/module-136.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-856.js */ "./src/unpacked/module-856.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! stores/workload/index */ "./src/stores/workload/index.js"));
var _module13 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-851.js */ "./src/unpacked/module-851.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/components/ClusterWorkloadStatus */ "./src/pages/fedprojects/components/ClusterWorkloadStatus.js"));
var _module14 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5009.js */ "./src/unpacked/module-5009.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module41 = (0, _recoverInterop.__recoverInterop)(_module);
const module44 = (0, _recoverInterop.__recoverInterop)(_module2);
const module36 = (0, _recoverInterop.__recoverInterop)(_module3);
const module37 = (0, _recoverInterop.__recoverInterop)(_module4);
const module55 = (0, _recoverInterop.__recoverInterop)(_module5);
const module56 = (0, _recoverInterop.__recoverInterop)(_module6);
const module51 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const module26 = (0, _recoverInterop.__recoverInterop)(_module9);
const module321 = (0, _recoverInterop.__recoverInterop)(_module0);
const module136 = (0, _recoverInterop.__recoverInterop)(_module1);
const module63 = (0, _recoverInterop.__recoverInterop)(_module10);
const module856 = (0, _recoverInterop.__recoverInterop)(_module11);
const module318 = (0, _recoverInterop.__recoverInterop)(_module12);
const module437 = (0, _recoverInterop.__recoverInterop)(_module13);
const Module851 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module1984 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module5009 = (0, _recoverInterop.__recoverInterop)(_module14);
let c;
const P = (0, _module46.inject)("detailStore", "projectStore")(c = (0, _module46.observer)(c = (Component_1 => {
  module55(r, Component_1);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r(e) {
    let a;
    module36(this, r);
    a = t.call(this, e);
    a.fetchData = async function e() {
      let namespace;
      let r;
      let n;
      namespace = a.props.match.params.namespace;
      r = a.state.workloadName;
      n = a.store.detail.clusters.map(e => e.name);
      if ((await a.workloadStore.checkName({
        name: r,
        namespace
      })).exist) {
        a.workloadStore.fetchDetail({
          name: r,
          namespace
        });
        a.workloadStore.fetchResources({
          name: r,
          namespace,
          clusters: n
        });
        a.setState({
          workloadExist: true
        });
      } else {
        a.setState({
          workloadExist: false
        });
      }
    };
    a.fetchReplica = module856(module44(module41.mark(function* e() {
      let t;
      let r;
      let n;
      t = a.state.workloadExist;
      r = a.props.match.params;
      if (t) {
        n = yield a.workloadStore.fetchDetailSilent({
          clusters: a.workloadStore.detail.clusters.map(e => e.name),
          ...r,
          name: a.state.workloadName
        });
        a.setState({
          resources: n
        });
      }
    })), 2000);
    a.store = e.detailStore;
    a.state = {
      workloadExist: true,
      workloadName: module26(a.store.detail.annotations, '["kubesphere.io/workloadName"]'),
      resources: {}
    };
    const n = module26(a.store.detail.annotations, '["kubesphere.io/workloadModule"]', "deployments");
    a.workloadStore = new module437(new module318(n));
    return a;
  }
  module37(r, [{
    key: "componentDidMount",
    value: function () {
      this.fetchData();
    }
  }, {
    key: "componentDidUpdate",
    value: function (e, t) {
      const detail = this.props.detailStore.detail;
      const t_workloadName = t.workloadName;
      const workloadName = module26(detail, 'annotations["kubesphere.io/workloadName"]');
      if (t_workloadName !== workloadName) {
        this.setState({
          workloadName
        });
        this.fetchData();
      }
    }
  }, {
    key: "renderReplicaInfo",
    value: function () {
      const clusters = (this.store.detail || {}).clusters;
      const workloadStore = this.workloadStore;
      const {
        detail,
        resources,
        isResourcesLoading
      } = workloadStore;
      const clustersDetail = module321(this.props.projectStore.detail.clusters, "name");
      const c = module136(module14.toJS(resources));
      const resources_1 = this.state.resources;
      if (!module63(resources_1)) {
        Object.keys(c).forEach(e => {
          c[e] = {
            ...c[e],
            ...module26(resources_1, e, {})
          };
        });
      }
      return /*#__PURE__*/React.createElement(Module1984, {
        module: this.workloadStore.module,
        store: this.workloadStore,
        detail: detail,
        resources: c,
        clusters: clusters,
        clustersDetail: clustersDetail,
        isLoading: isResourcesLoading,
        canEdit: this.enabledActions.includes("edit")
      });
    }
  }, {
    key: "renderWorkloadPods",
    value: function () {
      const resources = this.workloadStore.resources;
      const t = this.store.detail.clusters.map(e => e.name);
      return /*#__PURE__*/React.createElement(Module851, {
        prefix: this.prefix,
        details: module14.toJS(resources),
        clusters: t,
        getReplica: this.fetchReplica,
        isFederated: true
      });
    }
  }, {
    key: "renderPods",
    value: function () {
      const store = this.store;
      const {
        resources,
        isResourcesLoading
      } = store;
      const a = this.store.detail.clusters.map(e => e.name);
      return /*#__PURE__*/React.createElement(Module851, {
        prefix: this.prefix,
        details: module14.toJS(resources),
        clusters: a,
        isLoading: isResourcesLoading,
        isFederated: true
      });
    }
  }, {
    key: "renderContent",
    value: function () {
      const state = this.state;
      const {
        workloadName,
        workloadExist
      } = state;
      if (workloadName && workloadExist) {
        return /*#__PURE__*/React.createElement("div", null, this.renderReplicaInfo(), this.renderWorkloadPods());
      }
      return this.renderPods();
    }
  }, {
    key: "render",
    value: function () {
      return /*#__PURE__*/React.createElement("div", {
        className: module5009.main
      }, this.renderContent());
    }
  }, {
    key: "enabledActions",
    get: function () {
      return globals.app.getActions({
        module: this.store.module,
        project: this.props.match.params.namespace,
        fedproject: true
      });
    }
  }, {
    key: "prefix",
    get: function () {
      const workspace = this.props.match.params.workspace;
      if (workspace) {
        return `/${workspace}`;
      }
      return "";
    }
  }]);
  return r;
})(_module44.Component)) || c) || c;
var _default = exports["default"] = P;

/***/ },

/***/ "./src/pages/fedprojects/containers/Services/Detail/ServiceAccess.js"
/*!***************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Services/Detail/ServiceAccess.js ***!
  \***************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module35 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-321.js */ "./src/unpacked/module-321.js"));
var _module37 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Services/Detail/ServiceAccess/ClusterService */ "./src/pages/fedprojects/containers/Services/Detail/ServiceAccess/ClusterService.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5015.js */ "./src/unpacked/module-5015.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module321 = (0, _recoverInterop.__recoverInterop)(_module6);
const module186 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module5011 = (0, _recoverInterop.__recoverInterop)(_Module);
const module5015 = (0, _recoverInterop.__recoverInterop)(_module9);
let o;
const k = (0, _module37.inject)("rootStore", "detailStore", "projectStore")(o = (0, _module37.observer)(o = (0, _action.trigger)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...n_1) {
    let e;
    module36(this, a);
    e = r.call(this, ...n_1);
    e.store = e.props.detailStore;
    e.fetchData = function () {
      const params = e.props.match.params;
      const clusters = e.store.detail.clusters.map(e => e.name);
      e.store.fetchDetail(params);
      e.store.fetchResources({
        ...params,
        clusters
      });
    };
    e.handleUpdateService = function (cluster) {
      const e_store = e.store;
      const {
        detail,
        resources
      } = e_store;
      e.trigger("fedservice.gateway.edit", {
        cluster,
        detail: module14.toJS(detail),
        resources: module14.toJS(resources),
        success: e.fetchData
      });
    };
    return e;
  }
  module37(a, [{
    key: "renderServiceAccess",
    value: function () {
      const _this = this;
      const {
        resources = [],
        isResourcesLoading
      } = this.store;
      const c = module321(this.props.projectStore.detail.clusters, "name");
      return /*#__PURE__*/React.createElement(module186.Loading, {
        spinning: isResourcesLoading
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: module5015.title
      }, t("ACCESS_INFORMATION")), Object.keys(resources).map(t => /*#__PURE__*/React.createElement(Module5011, {
        key: t,
        store: _this.store,
        detail: resources[t],
        cluster: c[t],
        enabledActions: _this.enabledActions,
        updateService: _this.handleUpdateService
      }))));
    }
  }, {
    key: "render",
    value: function () {
      return /*#__PURE__*/React.createElement("div", {
        className: module5015.main
      }, this.renderServiceAccess());
    }
  }, {
    key: "enabledActions",
    get: function () {
      const params = this.props.match.params;
      const {
        namespace,
        ...rest
      } = params;
      return globals.app.getActions({
        module: "services",
        ...rest,
        project: namespace,
        fedproject: true
      });
    }
  }]);
  return a;
})(_module35.Component)) || o) || o) || o;
var _default = exports["default"] = k;

/***/ },

/***/ "./src/pages/fedprojects/containers/Services/Detail/ServiceAccess/ClusterService.js"
/*!******************************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Services/Detail/ServiceAccess/ClusterService.js ***!
  \******************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module31 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! stores/gateway */ "./src/stores/gateway.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Text */ "./src/components/Base/Text.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! components/Clusters/ClusterTitle */ "./src/components/Clusters/ClusterTitle.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1691.js */ "./src/unpacked/module-1691.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Services/Detail/Ports */ "./src/pages/fedprojects/containers/Services/Detail/Ports.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5014.js */ "./src/unpacked/module-5014.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module834 = (0, _recoverInterop.__recoverInterop)(_module6);
const module790 = (0, _recoverInterop.__recoverInterop)(_module7);
const module791 = (0, _recoverInterop.__recoverInterop)(_module8);
const module816 = (0, _recoverInterop.__recoverInterop)(_module9);
const module1691 = (0, _recoverInterop.__recoverInterop)(_module0);
const module26 = (0, _recoverInterop.__recoverInterop)(_module1);
const module5012 = (0, _recoverInterop.__recoverInterop)(_module10);
const module5014 = (0, _recoverInterop.__recoverInterop)(_module11);
let u;
const b = (0, _module31.inject)("rootStore")(u = (0, _module31.observer)(u = (e => {
  module55(a, e);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o) {
    let e;
    module36(this, a);
    e = r.call(this, ...o);
    e.gatewayStore = new module834();
    e.state = {
      gateway: {}
    };
    e.getProjectGateway = function () {
      const namespace = e.props.detail.namespace;
      return e.gatewayStore.getGatewayByProject({
        namespace,
        cluster: e.cluster
      });
    };
    e.getInitGateway = async r => {
      let a;
      let gateway;
      a = await e.getProjectGateway(r);
      gateway = a[0] || a[1] || a[2] || {};
      e.setState({
        gateway
      });
    };
    e.getOperations = function () {
      return [{
        key: "editGateway",
        icon: "ip",
        text: t("EDIT_EXTERNAL_ACCESS"),
        action: "edit",
        onClick: function () {
          return e.props.updateService(e.cluster);
        }
      }];
    };
    e.getEnabledOperations = function () {
      return (e.isStateless ? e.getOperations() : []).filter(t => !t.action || e.props.enabledActions.includes(t.action));
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.getInitGateway();
    }
  }, {
    key: "renderPorts",
    value: function () {
      const detail = this.props.detail;
      const gateway = this.state.gateway;
      return module553.default.createElement(module5012, {
        gateway,
        detail
      });
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        cluster,
        detail
      } = props;
      return module553.default.createElement(module790, null, module553.default.createElement("div", {
        className: module5014.header
      }, module553.default.createElement("div", {
        className: module5014.cluster
      }, module553.default.createElement(module816, {
        cluster,
        theme: "light",
        tagClass: "float-right"
      })), module553.default.createElement(module791, {
        icon: "eip-pool",
        title: `${detail.name}.${detail.namespace}.svc`,
        description: t("INTERNAL_DOMAIN_NAME_SCAP")
      }), module553.default.createElement(module791, {
        title: detail.clusterIP,
        description: t("VIRTUAL_IP_ADDRESS")
      }), module553.default.createElement(module1691, {
        className: module5014.more,
        options: this.getEnabledOperations()
      })), module553.default.createElement("div", {
        className: module5014.content
      }, this.renderPorts()));
    }
  }, {
    key: "cluster",
    get: function () {
      return this.props.cluster.name;
    }
  }, {
    key: "isStateless",
    get: function () {
      return module26(this.props.store.detail, 'annotations["kubesphere.io/serviceType"]') === "statelessservice";
    }
  }]);
  return a;
})(module553.Component)) || u) || u;
var _default = exports["default"] = b;

/***/ },

/***/ "./src/pages/fedprojects/containers/Services/Detail/routes.js"
/*!********************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Services/Detail/routes.js ***!
  \********************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-815.js */ "./src/unpacked/module-815.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-821.js */ "./src/unpacked/module-821.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Services/Detail/ResourceStatus */ "./src/pages/fedprojects/containers/Services/Detail/ResourceStatus.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Services/Detail/ServiceAccess */ "./src/pages/fedprojects/containers/Services/Detail/ServiceAccess.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module815 = (0, _recoverInterop.__recoverInterop)(_module2);
const module821 = (0, _recoverInterop.__recoverInterop)(_module3);
const module5008 = (0, _recoverInterop.__recoverInterop)(_module4);
const module5010 = (0, _recoverInterop.__recoverInterop)(_module5);
function _default(path, t) {
  return [{
    path: `${path}/resource-status`,
    title: "RESOURCE_STATUS",
    component: module5008,
    exact: true
  }].concat(module61(t.isFedManaged ? [{
    path: `${path}/access`,
    title: "ACCESS_INFORMATION",
    component: module5010,
    exact: true
  }] : []), [{
    path: `${path}/metadata`,
    title: "METADATA",
    component: module821,
    exact: true
  }, {
    path: `${path}/events`,
    title: "EVENT_PL",
    component: module815,
    exact: true
  }, (0, _router.getIndexRoute)({
    path,
    to: `${path}/resource-status`,
    exact: true
  })]);
}
;

/***/ },

/***/ "./src/pages/fedprojects/containers/StatefulSets/Detail.js"
/*!*****************************************************************!*\
  !*** ./src/pages/fedprojects/containers/StatefulSets/Detail.js ***!
  \*****************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module43 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/projects/containers/Base/Detail */ "./src/pages/projects/containers/Base/Detail.js"));
var _module44 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/workload/index */ "./src/stores/workload/index.js"));
var _index2 = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/StatefulSets/Detail/routes */ "./src/pages/fedprojects/containers/StatefulSets/Detail/routes.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module806 = (0, _recoverInterop.__recoverInterop)(_Module);
const module437 = (0, _recoverInterop.__recoverInterop)(_module9);
const module318 = (0, _recoverInterop.__recoverInterop)(_module0);
const module5002 = (0, _recoverInterop.__recoverInterop)(_module1);
let l;
const P = (0, _module43.inject)("rootStore", "projectStore")(l = (0, _module43.observer)(l = (0, _action.trigger)(l = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o) {
    let e;
    module36(this, a);
    e = r.call(this, ...o);
    e.store = new module437(new module318(e.module));
    e.fetchData = async function t() {
      let r;
      r = e.props.match.params;
      await e.store.fetchDetail(r);
      await e.store.fetchResources({
        ...r,
        clusters: e.store.detail.clusters.map(e => e.name)
      });
    };
    e.getOperations = function () {
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.baseinfo.edit", {
            type: e.name,
            detail: module14.toJS(e.store.detail),
            success: e.fetchData
          });
        }
      }, {
        key: "editConfigTemplate",
        icon: "storage",
        text: t("EDIT_SETTINGS"),
        action: "edit",
        onClick: function () {
          return e.trigger("federated.workload.template.edit", {
            detail: e.store.detail,
            projectDetail: e.props.projectStore.detail,
            module: e.module,
            ...e.props.match.params,
            success: e.fetchData,
            isFederated: true
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.yaml.edit", {
            detail: e.store.detail,
            success: e.fetchData
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        onClick: function () {
          return e.trigger("resource.delete", {
            type: e.name,
            detail: e.store.detail,
            success: function () {
              return e.routing.push(e.listUrl);
            }
          });
        }
      }];
    };
    e.getAttrs = function () {
      const r = module14.toJS(e.store.detail);
      const namespace = e.props.match.params.namespace;
      if (!module63(r)) {
        return [{
          name: t("PROJECT"),
          value: (0, _index2.showNameAndAlias)(namespace, "federatedProject")
        }, {
          name: t("APP"),
          value: r.app
        }, {
          name: t("CREATION_TIME_TCAP"),
          value: (0, _index2.getLocalTime)(r.createTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("CREATOR"),
          value: r.creator
        }];
      }
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function () {
      const stores = {
        detailStore: this.store
      };
      if (this.store.isLoading && !this.store.detail.name) {
        return /*#__PURE__*/React.createElement(module186.Loading, {
          className: "ks-page-loading"
        });
      }
      const r = {
        module: this.module,
        name: (0, _index2.getDisplayName)(this.store.detail),
        desc: this.store.detail.description,
        operations: this.getOperations(),
        attrs: this.getAttrs(),
        breadcrumbs: [{
          label: t("STATEFULSET_PL"),
          url: this.listUrl
        }]
      };
      return /*#__PURE__*/React.createElement(Module806, _extends({
        stores: stores
      }, r, {
        routes: module5002(this.props.match.path)
      }));
    }
  }, {
    key: "module",
    get: function () {
      return "statefulsets";
    }
  }, {
    key: "name",
    get: function () {
      return "STATEFULSET";
    }
  }, {
    key: "listUrl",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        cluster,
        namespace
      } = params;
      if (workspace) {
        return `/${workspace}/federatedprojects/${namespace}/${this.module}`;
      }
      return `/clusters/${cluster}/${this.module}`;
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }]);
  return a;
})(_module44.Component)) || l) || l) || l;
var _default = exports["default"] = P;

/***/ },

/***/ "./src/pages/fedprojects/containers/StatefulSets/Detail/ResourceStatus.js"
/*!********************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/StatefulSets/Detail/ResourceStatus.js ***!
  \********************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module24 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module26 = __webpack_require__(/*! unpacked/module-1983.js */ "./src/unpacked/module-1983.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/StatefulSets/Detail/ServiceCard */ "./src/pages/fedprojects/containers/StatefulSets/Detail/ServiceCard.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module26 = (0, _recoverInterop.__recoverInterop)(_module6);
const module437 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module5004 = (0, _recoverInterop.__recoverInterop)(_Module);
let o;
const g = (0, _module24.inject)("projectStore", "detailStore")(o = (0, _module24.observer)(o = (Component_1 => {
  module55(r, Component_1);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r(...o_1) {
    let e;
    module36(this, r);
    e = t.call(this, ...o_1);
    e.serviceStore = new module437({
      module: "services"
    });
    e.fetchService = async function t() {
      let r;
      let namespace;
      let o;
      let c;
      r = e.store.detail;
      namespace = r.namespace;
      o = r.template;
      c = module26(o, "spec.serviceName", "");
      if ((await e.serviceStore.checkName({
        name: c,
        namespace
      })).exist) {
        await e.serviceStore.fetchDetail({
          name: c,
          namespace
        });
      }
    };
    return e;
  }
  module37(r, [{
    key: "componentDidMount",
    value: function () {
      this.fetchService();
    }
  }, {
    key: "renderServices",
    value: function () {
      const serviceStore = this.serviceStore;
      const {
        detail,
        isLoading
      } = serviceStore;
      const workspace = this.props.match.params.workspace;
      if (detail.name) {
        return /*#__PURE__*/React.createElement(Module5004, {
          service: detail,
          workspace: workspace,
          loading: isLoading
        });
      }
      return null;
    }
  }, {
    key: "renderContent",
    value: function () {
      return /*#__PURE__*/React.createElement("div", null, this.renderReplicaInfo(), this.renderServices(), this.renderContainerPorts(), this.renderPods());
    }
  }]);
  return r;
})(_module26.Component)) || o) || o;
var _default = exports["default"] = g;

/***/ },

/***/ "./src/pages/fedprojects/containers/StatefulSets/Detail/ServiceCard.js"
/*!*****************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/StatefulSets/Detail/ServiceCard.js ***!
  \*****************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module23 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module24 = __webpack_require__(/*! unpacked/module-433.js */ "./src/shims/react-router-dom.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Text */ "./src/components/Base/Text.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5005.js */ "./src/unpacked/module-5005.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module1 = (0, _recoverInterop.__recoverInterop)(_module6);
const module3 = (0, _recoverInterop.__recoverInterop)(_module7);
const module63 = (0, _recoverInterop.__recoverInterop)(_module8);
const module26 = (0, _recoverInterop.__recoverInterop)(_module9);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module791 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module5005 = (0, _recoverInterop.__recoverInterop)(_module0);
const S = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a() {
    module36(this, a);
    return r.apply(this, arguments);
  }
  module37(a, [{
    key: "renderContent",
    value: function () {
      const props = this.props;
      const {
        service,
        workspace
      } = props;
      if (module63(service)) {
        return null;
      }
      const {
        name,
        namespace
      } = service;
      return /*#__PURE__*/React.createElement("div", {
        className: module5005.item
      }, /*#__PURE__*/React.createElement(Module791, {
        icon: _constants.ICON_TYPES.services,
        title: /*#__PURE__*/React.createElement(_module24.Link, {
          to: `/${workspace}/federatedprojects/${namespace}/services/${name}`
        }, name),
        description: t(service.type)
      }));
    }
  }, {
    key: "render",
    value: function () {
      const className = this.props.className;
      const title = this.props.title || t("SERVICE_PL");
      return /*#__PURE__*/React.createElement(Module790, {
        className: module3(module5005.main, className),
        title: title
      }, this.renderContent());
    }
  }, {
    key: "ports",
    get: function () {
      return module26(this.props.service, "ports", []).map(e => {
        const t = e.targetPort ? `:${e.targetPort}` : "";
        return `${e.port}${t}/${e.protocol}`;
      });
    }
  }]);
  return a;
})(_module23.Component);
var _default = exports["default"] = S;
S.propTypes = {
  className: module1.string,
  title: module1.string,
  service: module1.object,
  loading: module1.bool
};
S.defaultProps = {
  service: {},
  loading: true
};

/***/ },

/***/ "./src/pages/fedprojects/containers/StatefulSets/Detail/routes.js"
/*!************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/StatefulSets/Detail/routes.js ***!
  \************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-815.js */ "./src/unpacked/module-815.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-821.js */ "./src/unpacked/module-821.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1985.js */ "./src/unpacked/module-1985.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/StatefulSets/Detail/ResourceStatus */ "./src/pages/fedprojects/containers/StatefulSets/Detail/ResourceStatus.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module815 = (0, _recoverInterop.__recoverInterop)(_module);
const module821 = (0, _recoverInterop.__recoverInterop)(_module2);
const module1985 = (0, _recoverInterop.__recoverInterop)(_module3);
const module5003 = (0, _recoverInterop.__recoverInterop)(_module4);
function _default(path) {
  return [{
    path: `${path}/resource-status`,
    title: "RESOURCE_STATUS",
    component: module5003,
    exact: true
  }, {
    path: `${path}/metadata`,
    title: "METADATA",
    component: module821,
    exact: true
  }, {
    path: `${path}/monitors`,
    title: "MONITORING",
    component: module1985,
    exact: true,
    ksModule: "whizard-monitoring"
  }, {
    path: `${path}/events`,
    title: "EVENT_PL",
    component: module815,
    exact: true
  }, (0, _router.getIndexRoute)({
    path,
    to: `${path}/resource-status`,
    exact: true
  })];
}
;

/***/ },

/***/ "./src/pages/fedprojects/containers/Volumes/Detail.js"
/*!************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Volumes/Detail.js ***!
  \************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module44 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/projects/containers/Base/Detail */ "./src/pages/projects/containers/Base/Detail.js"));
var _module45 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/storageClass */ "./src/stores/storageClass.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! stores/volume */ "./src/stores/volume.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _module10 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Volumes/Detail/routes */ "./src/pages/fedprojects/containers/Volumes/Detail/routes.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module806 = (0, _recoverInterop.__recoverInterop)(_Module);
const module437 = (0, _recoverInterop.__recoverInterop)(_module9);
const module867 = (0, _recoverInterop.__recoverInterop)(_module0);
const module839 = (0, _recoverInterop.__recoverInterop)(_module1);
const module5024 = (0, _recoverInterop.__recoverInterop)(_module10);
let l;
const w = (0, _module44.inject)("rootStore", "projectStore")(l = (0, _module44.observer)(l = (0, _action.trigger)(l = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o_1) {
    let e;
    module36(this, a);
    e = r.call(this, ...o_1);
    e.store = new module437(new module839());
    e.storageclass = new module867();
    e.fetchData = async function t() {
      let r;
      let clusters;
      r = e.props.match.params;
      clusters = e.props.projectStore.detail.clusters.map(e => e.name);
      e.store.fetchDetail(r);
      e.store.fetchResources({
        ...r,
        clusters
      });
    };
    e.getOperations = function () {
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.baseinfo.edit", {
            type: e.name,
            detail: module14.toJS(e.store.detail),
            success: e.fetchData
          });
        }
      }, {
        key: "editConfigTemplate",
        icon: "storage",
        text: t("EDIT_SETTINGS"),
        action: "edit",
        onClick: function () {
          return e.trigger("volume.template.edit", {
            module: e.module,
            detail: e.store.detail,
            ...e.props.match.params,
            success: e.fetchData,
            isFederated: true,
            isEdit: true,
            projectDetail: e.props.projectStore.detail
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function () {
          return e.trigger("resource.yaml.edit", {
            detail: e.store.detail,
            success: e.fetchData
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        type: "danger",
        onClick: function () {
          return e.trigger("resource.delete", {
            type: e.name,
            detail: module14.toJS(e.store.detail),
            success: e.returnTolist
          });
        }
      }];
    };
    e.getAttrs = function () {
      const detail = e.store.detail;
      const a = detail === undefined ? {} : detail;
      if (module63(a)) {
        return null;
      }
      const {
        createTime,
        creator,
        namespace,
        capacity,
        accessMode,
        storageClassName,
        annotations
      } = a;
      const f = annotations === undefined ? {} : annotations;
      return [{
        name: t("PROJECT"),
        value: (0, _index.showNameAndAlias)(namespace, "federatedProject")
      }, {
        name: t("CAPACITY"),
        value: `${(0, _index.memoryFormat)(capacity, "Gi")}Gi`
      }, {
        name: t("ACCESS_MODE_TCAP"),
        value: accessMode
      }, {
        name: t("STORAGE_CLASS"),
        value: storageClassName || f["volume.beta.kubernetes.io/storage-class"]
      }, {
        name: t("PROVISIONER"),
        value: f["volume.beta.kubernetes.io/storage-provisioner"] || "-"
      }, {
        name: t("CREATION_TIME_TCAP"),
        value: (0, _index.getLocalTime)(createTime).format("YYYY-MM-DD HH:mm:ss")
      }, {
        name: t("CREATOR"),
        value: creator
      }];
    };
    e.returnTolist = function () {
      e.props.rootStore.routing.push(e.listUrl);
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function () {
      const stores = {
        detailStore: this.store
      };
      if (this.store.isLoading && !this.store.detail.name) {
        return /*#__PURE__*/React.createElement(module186.Loading, {
          className: "ks-page-loading"
        });
      }
      const r = {
        module: this.module,
        authKey: this.authKey,
        name: (0, _index.getDisplayName)(this.store.detail),
        desc: this.store.detail.description,
        attrs: this.getAttrs(),
        operations: this.getOperations(),
        icon: "storage",
        breadcrumbs: [{
          label: t("PERSISTENT_VOLUME_CLAIM_PL"),
          url: this.listUrl
        }]
      };
      return /*#__PURE__*/React.createElement(Module806, _extends({
        stores: stores
      }, r, {
        routes: module5024(this.props.match.path)
      }));
    }
  }, {
    key: "name",
    get: function () {
      return "PERSISTENT_VOLUME_CLAIM";
    }
  }, {
    key: "module",
    get: function () {
      return "volumes";
    }
  }, {
    key: "authKey",
    get: function () {
      return "persistentvolumeclaims";
    }
  }, {
    key: "listUrl",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        cluster,
        namespace
      } = params;
      if (workspace) {
        return `/${workspace}/federatedprojects/${namespace}/${this.module}`;
      }
      return `/clusters/${cluster}/${this.module}`;
    }
  }]);
  return a;
})(_module45.Component)) || l) || l) || l;
var _default = exports["default"] = w;

/***/ },

/***/ "./src/pages/fedprojects/containers/Volumes/Detail/ResourceStatus.js"
/*!***************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Volumes/Detail/ResourceStatus.js ***!
  \***************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module22 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module23 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-321.js */ "./src/unpacked/module-321.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Volumes/Detail/ResourceStatus/UsageCard */ "./src/pages/fedprojects/containers/Volumes/Detail/ResourceStatus/UsageCard.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5028.js */ "./src/unpacked/module-5028.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module321 = (0, _recoverInterop.__recoverInterop)(_module6);
const module186 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module5026 = (0, _recoverInterop.__recoverInterop)(_Module);
const module5028 = (0, _recoverInterop.__recoverInterop)(_module8);
let o;
const g = (0, _module23.inject)("detailStore", "projectStore")(o = (0, _module23.observer)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a() {
    module36(this, a);
    return r.apply(this, arguments);
  }
  module37(a, [{
    key: "render",
    value: function () {
      const _this = this;
      const clusters = this.store.detail.clusters;
      const a = t.html("VOLUME_MONITORING_TIP");
      return /*#__PURE__*/React.createElement("div", {
        className: module5028.main
      }, /*#__PURE__*/React.createElement(module186.Alert, {
        type: "info",
        className: "margin-b12",
        message: (0, _index.learnMoreTip)(a)
      }), clusters.map(t => /*#__PURE__*/React.createElement(Module5026, {
        key: t.name,
        match: _this.props.match,
        cluster: _this.clusterMap[t.name] || t
      })));
    }
  }, {
    key: "store",
    get: function () {
      return this.props.detailStore;
    }
  }, {
    key: "clusterMap",
    get: function () {
      return module321(this.props.projectStore.detail.clusters, "name");
    }
  }]);
  return a;
})(_module22.Component)) || o) || o;
var _default = exports["default"] = g;

/***/ },

/***/ "./src/pages/fedprojects/containers/Volumes/Detail/ResourceStatus/UsageCard.js"
/*!*************************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Volumes/Detail/ResourceStatus/UsageCard.js ***!
  \*************************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-316.js */ "./node_modules/core-js3/modules/es.object.values.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module32 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1832.js */ "./src/unpacked/module-1832.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-863.js */ "./src/unpacked/module-863.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _index = __webpack_require__(/*! components/Charts/index */ "./src/components/Charts/index.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! components/Clusters/ClusterTitle */ "./src/components/Clusters/ClusterTitle.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1831.js */ "./src/unpacked/module-1831.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5027.js */ "./src/unpacked/module-5027.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module26 = (0, _recoverInterop.__recoverInterop)(_module7);
const module1832 = (0, _recoverInterop.__recoverInterop)(_module8);
const module863 = (0, _recoverInterop.__recoverInterop)(_module9);
const module790 = (0, _recoverInterop.__recoverInterop)(_module0);
const module816 = (0, _recoverInterop.__recoverInterop)(_module1);
const module1831 = (0, _recoverInterop.__recoverInterop)(_module10);
const module5027 = (0, _recoverInterop.__recoverInterop)(_module11);
let c;
const C = {
  inodeUsage: "pvc_inodes_used",
  inodeTotal: "pvc_inodes_total",
  inodeUtilisation: "pvc_inodes_utilisation",
  capacityAvailable: "pvc_bytes_available",
  capacityTotal: "pvc_bytes_total",
  capacityUtilisation: "pvc_bytes_utilisation"
};
const R = (0, _module32.observer)(c = (e => {
  module55(a, e);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(e) {
    let t;
    module36(this, a);
    const params = (t = r.call(this, e)).props.match.params;
    const {
      namespace,
      name
    } = params;
    const cluster = t.props.cluster;
    t.monitor = new module1831({
      cluster: cluster.name,
      namespace,
      pvc: name
    });
    return t;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.timer = this.monitor.monitoringMetrics({
        step: "1m",
        times: 60,
        metrics: Object.values(C)
      }, {
        interval: 60000
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      clearInterval(this.timer);
    }
  }, {
    key: "parseMetrics",
    value: function (e, t) {
      const unit = (0, _monitoring.getSuitableUnit)(e, t);
      return {
        unit,
        count: (0, _monitoring.getValueByUnit)(e, unit)
      };
    }
  }, {
    key: "render",
    value: function () {
      const monitor = this.monitor;
      const {
        isLoading,
        isRefreshing
      } = monitor;
      return module553.default.createElement(module790, null, module553.default.createElement(module186.Loading, {
        spinning: isLoading
      }, module553.default.createElement("div", {
        "data-refreshing": isRefreshing
      }, this.renderStatus(), this.renderMonitor())));
    }
  }, {
    key: "renderStatus",
    value: function () {
      const cluster = this.props.cluster;
      const data = this.monitor.data;
      const a = (0, _monitoring.getLastMonitoringData)(data);
      const n = module26(a, `${C.capacityAvailable}.value[1]`, 0);
      const o = module26(a, `${C.capacityTotal}.value[1]`, 0);
      const c = this.parseMetrics(n, "memory");
      const u = this.parseMetrics(o, "memory");
      const l = module26(a, `${C.capacityUtilisation}.value[1]`, 0);
      return module553.default.createElement("header", {
        className: module5027.header
      }, module553.default.createElement("div", {
        className: module5027.cluster
      }, module553.default.createElement(module816, {
        cluster,
        theme: "light",
        tagClass: "float-right"
      })), module553.default.createElement("div", {
        className: module5027.space
      }), module553.default.createElement("div", {
        className: module5027.card
      }, module553.default.createElement(module1832, {
        rate: Number(l)
      })), module553.default.createElement("div", {
        className: module5027.description
      }, module553.default.createElement("h3", null, c.count, module553.default.createElement("small", null, c.unit)), module553.default.createElement("p", null, t("AVAILABLE_CAPACITY"))), module553.default.createElement("div", {
        className: module5027.description
      }, module553.default.createElement("h3", null, u.count, module553.default.createElement("small", null, u.unit)), module553.default.createElement("p", null, t("TOTAL_CAPACITY"))));
    }
  }, {
    key: "renderMonitor",
    value: function () {
      if (!globals.app.hasKSModule("whizard-monitoring")) {
        return null;
      }
      const data = this.monitor.data;
      const data_1 = module26(data, `${C.inodeUtilisation}.data.result`);
      const a = module26(data, `${C.inodeUsage}.data.result[0].values`, []);
      const n = module26(data, `${C.inodeTotal}.data.result[0].values`, []);
      const o = (0, _monitoring.getAreaChartOps)({
        title: t("INODE_USAGE"),
        unit: "%",
        legend: ["USAGE"],
        data: data_1,
        renderTooltip: function () {
          const usageData = (0, _monitoring.getChartData)({
            unit: "",
            legend: ["USAGE"],
            valuesData: [a]
          });
          const totalData = (0, _monitoring.getChartData)({
            unit: "",
            legend: ["USAGE"],
            valuesData: [n]
          });
          return module553.default.createElement(module863, {
            usageData,
            totalData
          });
        }
      });
      return module553.default.createElement(_index.SimpleArea, {
        width: "100%",
        theme: "dark",
        ...o
      });
    }
  }]);
  return a;
})(module553.Component)) || c;
var _default = exports["default"] = R;

/***/ },

/***/ "./src/pages/fedprojects/containers/Volumes/Detail/VolumeMounts.js"
/*!*************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Volumes/Detail/VolumeMounts.js ***!
  \*************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module21 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module22 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-321.js */ "./src/unpacked/module-321.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Volumes/Detail/VolumeMounts/PodsCard */ "./src/pages/fedprojects/containers/Volumes/Detail/VolumeMounts/PodsCard.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5032.js */ "./src/unpacked/module-5032.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module321 = (0, _recoverInterop.__recoverInterop)(_module6);
const Module5030 = (0, _recoverInterop.__recoverInterop)(_Module);
const module5032 = (0, _recoverInterop.__recoverInterop)(_module7);
let n;
const h = (0, _module22.inject)("detailStore", "projectStore")(n = (0, _module22.observer)(n = (Component_1 => {
  module55(r, Component_1);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r() {
    module36(this, r);
    return t.apply(this, arguments);
  }
  module37(r, [{
    key: "render",
    value: function () {
      const _this = this;
      const clusters = this.store.detail.clusters;
      return /*#__PURE__*/React.createElement("div", {
        className: module5032.main
      }, clusters.map(t => /*#__PURE__*/React.createElement(Module5030, {
        key: t.name,
        match: _this.props.match,
        cluster: _this.clusterMap[t.name] || t
      })));
    }
  }, {
    key: "store",
    get: function () {
      return this.props.detailStore;
    }
  }, {
    key: "clusterMap",
    get: function () {
      return module321(this.props.projectStore.detail.clusters, "name");
    }
  }]);
  return r;
})(_module21.Component)) || n) || n;
var _default = exports["default"] = h;

/***/ },

/***/ "./src/pages/fedprojects/containers/Volumes/Detail/VolumeMounts/PodsCard.js"
/*!**********************************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Volumes/Detail/VolumeMounts/PodsCard.js ***!
  \**********************************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-851.js */ "./src/unpacked/module-851.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! components/Clusters/ClusterTitle */ "./src/components/Clusters/ClusterTitle.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5031.js */ "./src/unpacked/module-5031.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module790 = (0, _recoverInterop.__recoverInterop)(_module6);
const module851 = (0, _recoverInterop.__recoverInterop)(_module7);
const module816 = (0, _recoverInterop.__recoverInterop)(_module8);
const module5031 = (0, _recoverInterop.__recoverInterop)(_module9);
const h = (e => {
  module55(r, e);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r() {
    module36(this, r);
    return t.apply(this, arguments);
  }
  module37(r, [{
    key: "render",
    value: function () {
      const cluster = this.props.cluster;
      const params = this.props.match.params;
      const {
        namespace,
        workspace,
        name
      } = params;
      const detail = {
        kind: "PVC",
        cluster: cluster.name,
        namespace,
        workspace,
        name
      };
      return module553.default.createElement(module790, null, module553.default.createElement("div", {
        className: module5031.cluster
      }, module553.default.createElement(module816, {
        cluster,
        theme: "light",
        tagClass: "float-right"
      })), module553.default.createElement("div", {
        className: module5031.content
      }, module553.default.createElement(module851, {
        detail,
        hideHeader: true,
        hideFooter: true,
        noWrapper: true
      })));
    }
  }, {
    key: "prefix",
    get: function () {
      return `/${this.props.match.params.workspace}`;
    }
  }]);
  return r;
})(module553.Component);
var _default = exports["default"] = h;

/***/ },

/***/ "./src/pages/fedprojects/containers/Volumes/Detail/routes.js"
/*!*******************************************************************!*\
  !*** ./src/pages/fedprojects/containers/Volumes/Detail/routes.js ***!
  \*******************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-815.js */ "./src/unpacked/module-815.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-821.js */ "./src/unpacked/module-821.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Volumes/Detail/ResourceStatus */ "./src/pages/fedprojects/containers/Volumes/Detail/ResourceStatus.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Volumes/Detail/VolumeMounts */ "./src/pages/fedprojects/containers/Volumes/Detail/VolumeMounts.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module815 = (0, _recoverInterop.__recoverInterop)(_module);
const module821 = (0, _recoverInterop.__recoverInterop)(_module2);
const module5025 = (0, _recoverInterop.__recoverInterop)(_module3);
const module5029 = (0, _recoverInterop.__recoverInterop)(_module4);
function _default(path) {
  return [{
    path: `${path}/resource-status`,
    title: "RESOURCE_STATUS",
    exact: true,
    component: module5025
  }, {
    path: `${path}/volume-mounts`,
    title: "MOUNT_INFORMATION",
    exact: true,
    component: module5029
  }, {
    path: `${path}/metadata`,
    title: "METADATA",
    component: module821,
    exact: true
  }, {
    path: `${path}/events`,
    title: "EVENT_PL",
    exact: true,
    component: module815
  }, (0, _router.getIndexRoute)({
    path,
    to: `${path}/resource-status`,
    exact: true
  })];
}
;

/***/ },

/***/ "./src/pages/fedprojects/deployments.js"
/*!**********************************************!*\
  !*** ./src/pages/fedprojects/deployments.js ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module36 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Avatar */ "./src/components/Base/Avatar.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Status */ "./src/components/Base/Status.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _withList = __webpack_require__(/*! components/HOCs/withList */ "./src/components/HOCs/withList.js");
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! components/Tables/List */ "./src/components/Tables/List.js"));
var _Module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1980.js */ "./src/unpacked/module-1980.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/workload/index */ "./src/stores/workload/index.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module26 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module789 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module796 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module797 = (0, _recoverInterop.__recoverInterop)(_Module4);
const Module1980 = (0, _recoverInterop.__recoverInterop)(_Module5);
const module437 = (0, _recoverInterop.__recoverInterop)(_module8);
const module318 = (0, _recoverInterop.__recoverInterop)(_module9);
let o;
const P = (0, _withList.withProjectList)({
  store: new module437(new module318("deployments")),
  module: "deployments",
  name: "DEPLOYMENT",
  rowKey: "uid"
})(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o) {
    let e;
    module36(this, a);
    e = r.call(this, ...o);
    e.handleTabChange = function (t) {
      e.props.routing.push(`${e.prefix}/${t}`);
    };
    e.getColumns = function () {
      const e_props = e.props;
      const {
        module,
        projectStore
      } = e_props;
      return [{
        title: t("NAME"),
        dataIndex: "name",
        render: function (t, r) {
          return /*#__PURE__*/React.createElement(Module789, {
            icon: _constants.ICON_TYPES[module],
            iconSize: 40,
            isMultiCluster: r.isFedManaged,
            title: (0, _index.getDisplayName)(r),
            desc: r.description || "-",
            to: r.deletionTime ? null : `${e.props.match.url}/${t}`
          });
        }
      }, {
        title: t("STATUS"),
        dataIndex: "status",
        isHideable: true,
        width: "22%",
        render: function (e, data) {
          if (e === "Deleting") {
            return /*#__PURE__*/React.createElement(Module796, {
              type: e,
              name: t(e.toUpperCase()),
              flicker: true
            });
          }
          return /*#__PURE__*/React.createElement(Module1980, {
            data: data,
            module: module,
            clusters: projectStore.detail.clusters
          });
        }
      }, {
        title: t("APP"),
        dataIndex: "app",
        isHideable: true,
        width: "22%"
      }, {
        title: t("UPDATE_TIME_TCAP"),
        dataIndex: "updateTime",
        isHideable: true,
        width: 150,
        render: function (e) {
          return (0, _index.getLocalTime)(e).format("YYYY-MM-DD HH:mm:ss");
        }
      }];
    };
    e.showCreate = function () {
      const e_props = e.props;
      const {
        match,
        module,
        projectStore
      } = e_props;
      return e.props.trigger("workload.create", {
        module,
        isFederated: true,
        projectDetail: projectStore.detail,
        namespace: match.params.namespace,
        renderScheduleTab: true,
        supportGpuSelect: true
      });
    };
    return e;
  }
  module37(a, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        bannerProps,
        tableProps
      } = props;
      return /*#__PURE__*/React.createElement(_withList.ListPage, _extends({}, this.props, {
        isFederated: true
      }), /*#__PURE__*/React.createElement(Module793, _extends({}, bannerProps, {
        title: t("WORKLOAD_PL"),
        description: t("WORKLOAD_DESC"),
        tabs: this.tabs
      })), /*#__PURE__*/React.createElement(Module797, _extends({}, tableProps, {
        itemActions: this.itemActions,
        tableActions: this.tableActions,
        selectActions: this.selectActions,
        columns: this.getColumns(),
        onCreate: this.showCreate,
        searchType: "name"
      })));
    }
  }, {
    key: "prefix",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        namespace
      } = params;
      return `/${workspace}/federatedprojects/${namespace}`;
    }
  }, {
    key: "tabs",
    get: function () {
      return {
        value: this.props.module,
        onChange: this.handleTabChange,
        options: [{
          value: "deployments",
          label: t("DEPLOYMENTS")
        }, {
          value: "statefulsets",
          label: t("STATEFULSETS")
        }]
      };
    }
  }, {
    key: "itemActions",
    get: function () {
      const props = this.props;
      const {
        trigger,
        name
      } = props;
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.baseinfo.edit", {
            detail: e
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.yaml.edit", {
            detail: e
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        onClick: function (e) {
          return trigger("workload.delete", {
            type: name,
            detail: e,
            isFederated: true
          });
        }
      }];
    }
  }, {
    key: "selectActions",
    get: function () {
      const props = this.props;
      const {
        tableProps,
        trigger,
        name,
        rootStore
      } = props;
      return [].concat(module61(module26(tableProps, "tableActions.selectActions", {})), [{
        key: "stop",
        text: t("STOP"),
        action: "edit",
        onClick: function () {
          return trigger("resource.batch.stop", {
            type: name,
            rowKey: "uid",
            success: rootStore.routing.query()
          });
        }
      }]);
    }
  }, {
    key: "tableActions",
    get: function () {
      const props = this.props;
      const {
        trigger,
        name
      } = props;
      return {
        ...props.tableProps.tableActions,
        selectActions: [{
          key: "delete",
          type: "danger",
          text: t("DELETE"),
          action: "delete",
          onClick: function () {
            return trigger("workload.batch.delete", {
              type: name,
              rowKey: "name",
              isFederated: true
            });
          }
        }]
      };
    }
  }]);
  return a;
})(_module36.Component)) || o;
var _default = exports["default"] = P;

/***/ },

/***/ "./src/pages/fedprojects/detail-routes.js"
/*!************************************************!*\
  !*** ./src/pages/fedprojects/detail-routes.js ***!
  \************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! pages/clusters/gateways/Detail */ "./src/pages/clusters/gateways/Detail.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Applications/Detail */ "./src/pages/fedprojects/containers/Applications/Detail.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Deployments/Detail */ "./src/pages/fedprojects/containers/Deployments/Detail.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/StatefulSets/Detail */ "./src/pages/fedprojects/containers/StatefulSets/Detail.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Services/Detail */ "./src/pages/fedprojects/containers/Services/Detail.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Routes/Detail */ "./src/pages/fedprojects/containers/Routes/Detail.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Volumes/Detail */ "./src/pages/fedprojects/containers/Volumes/Detail.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Secrets/Detail */ "./src/pages/fedprojects/containers/Secrets/Detail.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/ConfigMaps/Detail */ "./src/pages/fedprojects/containers/ConfigMaps/Detail.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module1234 = (0, _recoverInterop.__recoverInterop)(_module);
const module4976 = (0, _recoverInterop.__recoverInterop)(_module2);
const module4994 = (0, _recoverInterop.__recoverInterop)(_module3);
const module5001 = (0, _recoverInterop.__recoverInterop)(_module4);
const module5006 = (0, _recoverInterop.__recoverInterop)(_module5);
const module5016 = (0, _recoverInterop.__recoverInterop)(_module6);
const module5023 = (0, _recoverInterop.__recoverInterop)(_module7);
const module5033 = (0, _recoverInterop.__recoverInterop)(_module8);
const module5037 = (0, _recoverInterop.__recoverInterop)(_module9);
function _default(e) {
  return [{
    path: `${e}/deployments/:name`,
    component: module4994
  }, {
    path: `${e}/statefulsets/:name`,
    component: module5001
  }, {
    path: `${e}/services/:name`,
    component: module5006
  }, {
    path: `${e}/ingresses/:name`,
    component: module5016
  }, {
    path: `${e}/volumes/:name`,
    component: module5023
  }, {
    path: `${e}/secrets/:name`,
    component: module5033
  }, {
    path: `${e}/configmaps/:name`,
    component: module5037
  }, {
    path: `${e}/applications/:name`,
    component: module4976
  }, {
    path: `${e}/gateways/:gatewayName`,
    component: module1234
  }];
}
;

/***/ },

/***/ "./src/pages/fedprojects/gateways.js"
/*!*******************************************!*\
  !*** ./src/pages/fedprojects/gateways.js ***!
  \*******************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module20 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module21 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1867.js */ "./src/unpacked/module-1867.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module1867 = (0, _recoverInterop.__recoverInterop)(_Module2);
let o;
const y = (0, _module21.inject)("rootStore", "projectStore")(o = (0, _module21.observer)(o = (0, _action.trigger)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a() {
    module36(this, a);
    return r.apply(this, arguments);
  }
  module37(a, [{
    key: "render",
    value: function () {
      const _this = this;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Module793, {
        icon: "loadbalancer",
        title: t("GATEWAY_SETTINGS"),
        description: t("PROJECT_GATEWAY_DESC"),
        tabs: this.tabs
      }), /*#__PURE__*/React.createElement("div", null, this.clusters.map(cluster => /*#__PURE__*/React.createElement(Module1867, _extends({
        key: cluster.name,
        cluster: cluster
      }, _this.props, {
        actions: _this.enableActions
      })))));
    }
  }, {
    key: "store",
    get: function () {
      return this.props.projectStore;
    }
  }, {
    key: "clusters",
    get: function () {
      return this.store.detail.clusters;
    }
  }, {
    key: "namespace",
    get: function () {
      return this.props.match.params.namespace;
    }
  }, {
    key: "enableActions",
    get: function () {
      return globals.app.getActions({
        module: "project-settings",
        project: this.namespace,
        fedproject: true
      });
    }
  }]);
  return a;
})(_module20.Component)) || o) || o) || o;
var _default = exports["default"] = y;

/***/ },

/***/ "./src/pages/fedprojects/ingresses.js"
/*!********************************************!*\
  !*** ./src/pages/fedprojects/ingresses.js ***!
  \********************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module31 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module32 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Avatar */ "./src/components/Base/Avatar.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Status */ "./src/components/Base/Status.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! components/Tables/List */ "./src/components/Tables/List.js"));
var _withList = __webpack_require__(/*! components/HOCs/withList */ "./src/components/HOCs/withList.js");
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! stores/ingress */ "./src/stores/ingress.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/gateway */ "./src/stores/gateway.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module14 = (0, _recoverInterop.__recoverInterop)(_module6);
const Module789 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module796 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module797 = (0, _recoverInterop.__recoverInterop)(_Module4);
const module437 = (0, _recoverInterop.__recoverInterop)(_module7);
const module918 = (0, _recoverInterop.__recoverInterop)(_module8);
const module834 = (0, _recoverInterop.__recoverInterop)(_module9);
let c;
const T = (0, _module32.inject)("projectStore")(c = (0, _withList.withProjectList)({
  store: new module437(new module918()),
  module: "ingresses",
  name: "ROUTE"
})(c = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o) {
    let e;
    module36(this, a);
    e = r.call(this, ...o);
    e.gatewayStore = new module834();
    e.getColumns = function () {
      const e_props = e.props;
      const {
        module,
        getSortOrder
      } = e_props;
      return [{
        title: t("NAME"),
        dataIndex: "name",
        sorter: true,
        sortOrder: getSortOrder("name"),
        render: function (t, r) {
          return /*#__PURE__*/React.createElement(Module789, {
            icon: _constants.ICON_TYPES[module],
            iconSize: 40,
            title: (0, _index.getDisplayName)(r),
            desc: r.description || "-",
            to: r.deletionTime ? null : `${e.props.match.url}/${t}`,
            isMultiCluster: true
          });
        }
      }, {
        title: t("STATUS"),
        dataIndex: "status",
        isHideable: true,
        width: "22%",
        render: function (e) {
          return /*#__PURE__*/React.createElement(Module796, {
            type: e,
            name: t(e.toUpperCase()),
            flicker: true
          });
        }
      }, {
        title: t("APP"),
        dataIndex: "app",
        isHideable: true,
        width: "22%"
      }, {
        title: t("CREATION_TIME_TCAP"),
        dataIndex: "createTime",
        isHideable: true,
        width: 150,
        render: function (e) {
          return (0, _index.getLocalTime)(e).format("YYYY-MM-DD HH:mm:ss");
        }
      }];
    };
    e.showCreate = function () {
      const e_props = e.props;
      const {
        match,
        module,
        projectStore
      } = e_props;
      return e.props.trigger("router.create", {
        module,
        isFederated: true,
        projectDetail: projectStore.detail,
        namespace: match.params.namespace,
        cluster: e.cluster,
        gatewayStore: e.gatewayStore
      });
    };
    return e;
  }
  module37(a, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        bannerProps,
        tableProps
      } = props;
      return /*#__PURE__*/React.createElement(_withList.ListPage, _extends({}, this.props, {
        isFederated: true
      }), /*#__PURE__*/React.createElement(Module793, _extends({}, bannerProps, {
        tips: this.tips
      })), /*#__PURE__*/React.createElement(Module797, _extends({}, tableProps, {
        itemActions: this.itemActions,
        columns: this.getColumns(),
        onCreate: this.showCreate,
        searchType: "name"
      })));
    }
  }, {
    key: "tips",
    get: function () {
      return [{
        title: t("PREREQUESTS_FOR_USE_ROUTE_Q"),
        description: t("PREREQUESTS_FOR_USE_ROUTE_A")
      }, {
        title: t("ACCESS_TYPES_OF_ROUTE_Q"),
        description: t("ACCESS_TYPES_OF_ROUTE_A")
      }];
    }
  }, {
    key: "project",
    get: function () {
      return this.props.projectStore;
    }
  }, {
    key: "clusters",
    get: function () {
      return module14.toJS(this.project.detail.clusters).map(e => e.name);
    }
  }, {
    key: "cluster",
    get: function () {
      const e = (0, _index.getHostClusterName)();
      if (this.clusters.includes(e)) {
        return e;
      }
      return this.clusters[0];
    }
  }, {
    key: "itemActions",
    get: function () {
      const _this = this;
      const props = this.props;
      const {
        trigger,
        name
      } = props;
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function (e) {
          trigger("resource.baseinfo.edit", {
            detail: e
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.yaml.edit", {
            detail: e
          });
        }
      }, {
        key: "editRules",
        icon: "firewall",
        text: t("EDIT_ROUTING_RULES"),
        action: "edit",
        onClick: async t => {
          let r;
          r = await _this.props.store.fetchDetail(t);
          trigger("fedproject.router.rules.edit", {
            isFederated: true,
            detail: r,
            projectDetail: _this.props.projectStore.detail
          });
        }
      }, {
        key: "editAnnotations",
        icon: "firewall",
        text: t("EDIT_ANNOTATIONS"),
        action: "edit",
        onClick: async t => {
          let r;
          r = await _this.props.store.fetchDetail(t);
          trigger("router.annotations.edit", {
            detail: r
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        onClick: function (e) {
          return trigger("resource.delete", {
            type: name,
            detail: e
          });
        }
      }];
    }
  }]);
  return a;
})(_module31.Component)) || c) || c;
var _default = exports["default"] = T;

/***/ },

/***/ "./src/pages/fedprojects/layout.js"
/*!*****************************************!*\
  !*** ./src/pages/fedprojects/layout.js ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module19 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! stores/cluster */ "./src/stores/cluster.js"));
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module438 = (0, _recoverInterop.__recoverInterop)(_module6);
let o;
const h = (0, _module19.inject)("rootStore", "projectStore")(o = (0, _module19.observer)(o = (e => {
  module55(r, e);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r(e) {
    let a;
    module36(this, r);
    a = t.call(this, e);
    a.state = {
      fetchFin: false
    };
    a.handleChange = function (e) {
      return a.routing.push(e);
    };
    a.store = new module438();
    return a;
  }
  module37(r, [{
    key: "render",
    value: function () {
      const route = this.props.route;
      return module553.default.createElement(module553.default.Fragment, null, (0, _router.renderRoutes)(route.routes));
    }
  }, {
    key: "project",
    get: function () {
      return this.props.match.params.namespace;
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }]);
  return r;
})(module553.Component)) || o) || o;
var _default = exports["default"] = h;

/***/ },

/***/ "./src/pages/fedprojects/log-collections.js"
/*!**************************************************!*\
  !*** ./src/pages/fedprojects/log-collections.js ***!
  \**************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module21 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module22 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4972.js */ "./src/unpacked/module-4972.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module63 = (0, _recoverInterop.__recoverInterop)(_module6);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module4972 = (0, _recoverInterop.__recoverInterop)(_Module2);
let o;
const v = (0, _module22.inject)("rootStore", "projectStore")(o = (0, _module22.observer)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a() {
    module36(this, a);
    return r.apply(this, arguments);
  }
  module37(a, [{
    key: "render",
    value: function () {
      const name = this.store.detail.name;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Module793, {
        icon: "log",
        title: t("LOG_COLLECTION"),
        description: t("DISK_LOG_COLLECTION_DESC"),
        tips: this.tips
      }), !this.disabledLoggingSideCar && /*#__PURE__*/React.createElement(Module4972, {
        namespace: name,
        actions: this.enableActions
      }));
    }
  }, {
    key: "store",
    get: function () {
      return this.props.projectStore;
    }
  }, {
    key: "namespace",
    get: function () {
      return this.props.match.params.namespace;
    }
  }, {
    key: "cluster",
    get: function () {
      return this.props.match.params.cluster;
    }
  }, {
    key: "enableActions",
    get: function () {
      return globals.app.getActions({
        module: "project-settings",
        project: this.namespace,
        fedproject: true,
        cluster: this.cluster
      });
    }
  }, {
    key: "disabledLoggingSideCar",
    get: function () {
      return !module63(globals.config.disabledLoggingSidecarNamespace) && globals.config.disabledLoggingSidecarNamespace.includes(this.namespace);
    }
  }, {
    key: "tips",
    get: function () {
      return [{
        title: t("COLLECT_LOGS_ON_VOLUMES_Q"),
        description: t("COLLECT_LOGS_ON_VOLUMES_A")
      }];
    }
  }]);
  return a;
})(_module21.Component)) || o) || o;
var _default = exports["default"] = v;

/***/ },

/***/ "./src/pages/fedprojects/quota.js"
/*!****************************************!*\
  !*** ./src/pages/fedprojects/quota.js ***!
  \****************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module26 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module27 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4966.js */ "./src/unpacked/module-4966.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4970.js */ "./src/unpacked/module-4970.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module26 = (0, _recoverInterop.__recoverInterop)(_module6);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module4966 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module4970 = (0, _recoverInterop.__recoverInterop)(_module7);
let o;
const g = (0, _module27.inject)("projectStore")(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...n) {
    let e;
    module36(this, a);
    e = r.call(this, ...n);
    e.getData = function () {
      e.store.fetchDetail(e.params);
    };
    e.handleMoreMenuClick = function (t, r) {
      const a = e.enabledItemActions.find(e => e.key === r);
      if (a && a.onClick) {
        a.onClick();
      }
    };
    return e;
  }
  module37(a, [{
    key: "render",
    value: function () {
      const _this = this;
      const clusters = this.props.projectStore.detail.clusters;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Module793, {
        icon: "cdn",
        title: t("PROJECT_QUOTA_PL"),
        description: t("PROJECT_QUOTAS_DESC")
      }), /*#__PURE__*/React.createElement("div", {
        className: module4970.title
      }, t("RESOURCE_QUOTA_PL")), clusters.map(cluster => /*#__PURE__*/React.createElement(Module4966, _extends({
        key: cluster.name,
        cluster: cluster
      }, _this.props.match.params, {
        canEdit: _this.canEdit
      }))));
    }
  }, {
    key: "store",
    get: function () {
      return this.props.projectStore;
    }
  }, {
    key: "params",
    get: function () {
      return module26(this.props.match, "params", {});
    }
  }, {
    key: "tips",
    get: function () {
      return [{
        title: t("HOW_TO_USE_QUOTA_Q"),
        description: t.html("HOW_TO_USE_QUOTA_A")
      }];
    }
  }, {
    key: "enabledActions",
    get: function () {
      return globals.app.getActions({
        module: "project-settings",
        project: this.params.namespace,
        cluster: this.params.cluster,
        fedproject: true
      });
    }
  }, {
    key: "canEdit",
    get: function () {
      return this.enabledActions.includes("edit");
    }
  }]);
  return a;
})(_module26.Component)) || o;
var _default = exports["default"] = g;

/***/ },

/***/ "./src/pages/fedprojects/routes.js"
/*!*****************************************!*\
  !*** ./src/pages/fedprojects/routes.js ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/layout */ "./src/pages/fedprojects/layout.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/containers/Overview */ "./src/pages/fedprojects/containers/Overview.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/applications */ "./src/pages/fedprojects/applications.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/deployments */ "./src/pages/fedprojects/deployments.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/statefulsets */ "./src/pages/fedprojects/statefulsets.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/services */ "./src/pages/fedprojects/services.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/ingresses */ "./src/pages/fedprojects/ingresses.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/volumes */ "./src/pages/fedprojects/volumes.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/base-info */ "./src/pages/fedprojects/base-info.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/configmaps */ "./src/pages/fedprojects/configmaps.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/secrets */ "./src/pages/fedprojects/secrets.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/quota */ "./src/pages/fedprojects/quota.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/log-collections */ "./src/pages/fedprojects/log-collections.js"));
var _module13 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/gateways */ "./src/pages/fedprojects/gateways.js"));
var _module14 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/detail-routes */ "./src/pages/fedprojects/detail-routes.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module4934 = (0, _recoverInterop.__recoverInterop)(_module2);
const module4935 = (0, _recoverInterop.__recoverInterop)(_module3);
const module4950 = (0, _recoverInterop.__recoverInterop)(_module4);
const module4951 = (0, _recoverInterop.__recoverInterop)(_module5);
const module4953 = (0, _recoverInterop.__recoverInterop)(_module6);
const module4954 = (0, _recoverInterop.__recoverInterop)(_module7);
const module4955 = (0, _recoverInterop.__recoverInterop)(_module8);
const module4956 = (0, _recoverInterop.__recoverInterop)(_module9);
const module4958 = (0, _recoverInterop.__recoverInterop)(_module0);
const module4963 = (0, _recoverInterop.__recoverInterop)(_module1);
const module4964 = (0, _recoverInterop.__recoverInterop)(_module10);
const module4965 = (0, _recoverInterop.__recoverInterop)(_module11);
const module4971 = (0, _recoverInterop.__recoverInterop)(_module12);
const module4974 = (0, _recoverInterop.__recoverInterop)(_module13);
const module4975 = (0, _recoverInterop.__recoverInterop)(_module14);
const path = "/:workspace/federatedprojects/:namespace";
const O = [].concat(module61(module4975(path)), [{
  path,
  component: module4934,
  routes: [{
    path: `${path}/overview`,
    component: module4935,
    exact: true
  }, {
    path: `${path}/applications`,
    component: module4950,
    exact: true
  }, {
    path: `${path}/deployments`,
    component: module4951,
    exact: true
  }, {
    path: `${path}/statefulsets`,
    component: module4953,
    exact: true
  }, {
    path: `${path}/services`,
    component: module4954,
    exact: true
  }, {
    path: `${path}/ingresses`,
    component: module4955,
    exact: true
  }, {
    path: `${path}/volumes`,
    component: module4956,
    exact: true
  }, {
    path: `${path}/base-info`,
    component: module4958,
    exact: true
  }, {
    path: `${path}/configmaps`,
    component: module4963,
    exact: true
  }, {
    path: `${path}/secrets`,
    component: module4964,
    exact: true
  }, {
    path: `${path}/quota`,
    component: module4965,
    exact: true
  }, {
    path: `${path}/gateways`,
    component: module4974,
    exact: true
  }, {
    path: `${path}/log-collections`,
    component: module4971,
    exact: true
  }, (0, _router.getIndexRoute)({
    path: `${path}/workloads`,
    to: `${path}/deployments`,
    exact: true
  }), (0, _router.getIndexRoute)({
    path,
    to: `${path}/overview`,
    exact: true
  }), (0, _router.getIndexRoute)({
    path: "*",
    to: "/404",
    exact: true
  })]
}]);
var _default = exports["default"] = O;

/***/ },

/***/ "./src/pages/fedprojects/secrets.js"
/*!******************************************!*\
  !*** ./src/pages/fedprojects/secrets.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module24 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Avatar */ "./src/components/Base/Avatar.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Status */ "./src/components/Base/Status.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _withList = __webpack_require__(/*! components/HOCs/withList */ "./src/components/HOCs/withList.js");
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! components/Tables/List */ "./src/components/Tables/List.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const Module789 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module796 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module797 = (0, _recoverInterop.__recoverInterop)(_Module4);
const module437 = (0, _recoverInterop.__recoverInterop)(_module6);
let o;
const _ = (0, _withList.withProjectList)({
  store: new module437({
    module: "secrets"
  }),
  module: "secrets",
  name: "SECRET"
})(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(e) {
    let n;
    module36(this, a);
    n = r.call(this, e);
    n.getColumns = function () {
      const module = n.props.module;
      return [{
        title: t("NAME"),
        dataIndex: "name",
        render: function (t, r) {
          return /*#__PURE__*/React.createElement(Module789, {
            icon: _constants.ICON_TYPES[module],
            iconSize: 40,
            title: (0, _index.getDisplayName)(r),
            desc: r.description || "-",
            to: r.deletionTime ? null : `${n.props.match.url}/${t}`,
            isMultiCluster: r.isFedManaged
          });
        }
      }, {
        title: t("STATUS"),
        dataIndex: "status",
        isHideable: true,
        width: "12%",
        render: function (e) {
          return /*#__PURE__*/React.createElement(Module796, {
            type: e,
            name: t(e),
            flicker: true
          });
        }
      }, {
        title: t("TYPE"),
        dataIndex: "type",
        isHideable: true,
        width: "12%",
        render: function (e) {
          return t(_constants.SECRET_TYPES[e] || e);
        }
      }, {
        title: t("SECRET_FIELD_COUNT"),
        dataIndex: "data",
        isHideable: true,
        width: "12%",
        render: function (e) {
          return Object.keys(e).length;
        }
      }, {
        title: t("CREATION_TIME_TCAP"),
        dataIndex: "createTime",
        isHideable: true,
        width: 150,
        render: function (e) {
          return (0, _index.getLocalTime)(e).format("YYYY-MM-DD HH:mm:ss");
        }
      }];
    };
    n.fetchData = function () {
      n.store.fetchList(n.props.match.params);
    };
    n.showCreate = function () {
      const n_props = n.props;
      const {
        match,
        module,
        getData,
        projectStore
      } = n_props;
      return n.props.trigger("secret.create", {
        module,
        isFederated: true,
        projectDetail: projectStore.detail,
        namespace: match.params.namespace,
        success: getData
      });
    };
    n.store = e.store;
    return n;
  }
  module37(a, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        bannerProps,
        tableProps
      } = props;
      return /*#__PURE__*/React.createElement(_withList.ListPage, _extends({}, this.props, {
        isFederated: true
      }), /*#__PURE__*/React.createElement(Module793, _extends({}, bannerProps, {
        tabs: this.tabs
      })), /*#__PURE__*/React.createElement(Module797, _extends({}, tableProps, {
        itemActions: this.itemActions,
        columns: this.getColumns(),
        onCreate: this.showCreate,
        searchType: "name"
      })));
    }
  }, {
    key: "itemActions",
    get: function () {
      const _this = this;
      const props = this.props;
      const {
        trigger,
        name
      } = props;
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.baseinfo.edit", {
            detail: e
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.yaml.edit", {
            detail: e
          });
        }
      }, {
        key: "editSecret",
        icon: "pen",
        text: t("EDIT_SETTINGS"),
        action: "edit",
        onClick: function (t) {
          return trigger("secret.edit", {
            detail: t,
            isFederated: true,
            success: _this.fetchData
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        onClick: function (e) {
          return trigger("resource.delete", {
            type: name,
            detail: e
          });
        }
      }];
    }
  }]);
  return a;
})(_module24.Component)) || o;
var _default = exports["default"] = _;

/***/ },

/***/ "./src/pages/fedprojects/services.js"
/*!*******************************************!*\
  !*** ./src/pages/fedprojects/services.js ***!
  \*******************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module35 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Avatar */ "./src/components/Base/Avatar.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Status */ "./src/components/Base/Status.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Text */ "./src/components/Base/Text.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _withList = __webpack_require__(/*! components/HOCs/withList */ "./src/components/HOCs/withList.js");
var _Module5 = _interopRequireWildcard(__webpack_require__(/*! components/Tables/List */ "./src/components/Tables/List.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! stores/service */ "./src/stores/service.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const Module789 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module796 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module791 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module4);
const Module797 = (0, _recoverInterop.__recoverInterop)(_Module5);
const module437 = (0, _recoverInterop.__recoverInterop)(_module6);
const module443 = (0, _recoverInterop.__recoverInterop)(_module7);
let u;
const P = (0, _withList.withProjectList)({
  store: new module437(new module443()),
  module: "services",
  name: "SERVICE"
})(u = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o) {
    let e;
    module36(this, a);
    e = r.call(this, ...o);
    e.getColumns = function () {
      const e_props = e.props;
      const {
        module,
        getSortOrder
      } = e_props;
      return [{
        title: t("NAME"),
        dataIndex: "name",
        sorter: true,
        sortOrder: getSortOrder("name"),
        render: function (t, r) {
          return /*#__PURE__*/React.createElement(Module789, {
            icon: _constants.ICON_TYPES[module],
            iconSize: 40,
            title: (0, _index.getDisplayName)(r),
            desc: r.description || "-",
            isMultiCluster: true,
            to: r.deletionTime ? null : `${e.props.match.url}/${t}`
          });
        }
      }, {
        title: t("STATUS"),
        dataIndex: "status",
        isHideable: true,
        render: function (e) {
          return /*#__PURE__*/React.createElement(Module796, {
            type: e,
            name: t(e.toUpperCase()),
            flicker: true
          });
        }
      }, {
        title: t("SERVICE_TYPE_TCAP"),
        dataIndex: 'annotations["kubesphere.io/serviceType"]',
        isHideable: true,
        render: function (e, r) {
          return /*#__PURE__*/React.createElement(Module791, {
            title: e ? t(`SERVICE_TYPE_${e.toUpperCase()}`) : t("CUSTOM_SERVICE"),
            description: t(r.type) || "-"
          });
        }
      }, {
        title: t("APP"),
        dataIndex: "app",
        isHideable: true,
        width: "22%"
      }, {
        title: t("CREATION_TIME_TCAP"),
        dataIndex: "createTime",
        isHideable: true,
        width: 150,
        render: function (e) {
          return (0, _index.getLocalTime)(e).format("YYYY-MM-DD HH:mm:ss");
        }
      }];
    };
    e.showCreate = function () {
      const e_props = e.props;
      const {
        match,
        module,
        projectStore
      } = e_props;
      return e.props.trigger("service.create", {
        module,
        isFederated: true,
        projectDetail: projectStore.detail,
        namespace: match.params.namespace
      });
    };
    return e;
  }
  module37(a, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        bannerProps,
        tableProps
      } = props;
      return /*#__PURE__*/React.createElement(_withList.ListPage, _extends({}, this.props, {
        isFederated: true
      }), /*#__PURE__*/React.createElement(Module793, _extends({}, bannerProps, {
        tips: this.tips
      })), /*#__PURE__*/React.createElement(Module797, _extends({}, tableProps, {
        itemActions: this.itemActions,
        tableActions: this.tableActions,
        columns: this.getColumns(),
        onCreate: this.showCreate,
        searchType: "name"
      })));
    }
  }, {
    key: "tips",
    get: function () {
      return [{
        title: t("SERVICE_TYPES_Q"),
        description: t("SERVICE_TYPES_A")
      }, {
        title: t("SCENARIOS_FOR_SERVICES_Q"),
        description: t("SCENARIOS_FOR_SERVICES_A")
      }];
    }
  }, {
    key: "itemActions",
    get: function () {
      const _this = this;
      const props = this.props;
      const {
        trigger,
        name
      } = props;
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.baseinfo.edit", {
            detail: e
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.yaml.edit", {
            detail: e
          });
        }
      }, {
        key: "editConfigTemplate",
        icon: "storage",
        text: t("EDIT_SETTINGS"),
        action: "edit",
        onClick: async t => {
          let a;
          a = await _this.props.store.fetchDetail(t);
          trigger("federated.workload.template.edit", {
            detail: a,
            projectDetail: _this.props.projectStore.detail,
            module: "service",
            ..._this.props.match.params,
            name: t.name,
            isFederated: true,
            withService: true
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        onClick: function (e) {
          return trigger("service.delete", {
            type: name,
            detail: e,
            isFederated: true
          });
        }
      }];
    }
  }, {
    key: "tableActions",
    get: function () {
      const props = this.props;
      const {
        tableProps,
        name,
        trigger
      } = props;
      return {
        ...tableProps.tableActions,
        selectActions: [{
          key: "delete",
          type: "danger",
          text: t("DELETE"),
          action: "delete",
          onClick: function () {
            return trigger("service.batch.delete", {
              type: name,
              rowKey: "name",
              isFederated: true
            });
          }
        }]
      };
    }
  }]);
  return a;
})(_module35.Component)) || u;
var _default = exports["default"] = P;

/***/ },

/***/ "./src/pages/fedprojects/statefulsets.js"
/*!***********************************************!*\
  !*** ./src/pages/fedprojects/statefulsets.js ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module37 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Avatar */ "./src/components/Base/Avatar.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Status */ "./src/components/Base/Status.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _withList = __webpack_require__(/*! components/HOCs/withList */ "./src/components/HOCs/withList.js");
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! components/Tables/List */ "./src/components/Tables/List.js"));
var _Module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1980.js */ "./src/unpacked/module-1980.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _status = __webpack_require__(/*! utils/status */ "./src/utils/status.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/workload/index */ "./src/stores/workload/index.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module26 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module789 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module796 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module797 = (0, _recoverInterop.__recoverInterop)(_Module4);
const Module1980 = (0, _recoverInterop.__recoverInterop)(_Module5);
const module437 = (0, _recoverInterop.__recoverInterop)(_module8);
const module318 = (0, _recoverInterop.__recoverInterop)(_module9);
let o;
const w = (0, _withList.withProjectList)({
  store: new module437(new module318("statefulsets")),
  module: "statefulsets",
  name: "STATEFULSET",
  rowKey: "uid"
})(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o_1) {
    let e;
    module36(this, a);
    e = r.call(this, ...o_1);
    e.handleTabChange = function (t) {
      e.props.routing.push(`${e.prefix}/${t}`);
    };
    e.getItemDesc = function (r) {
      const a = (0, _status.getWorkloadStatus)(r, e.props.module);
      const {
        status,
        reason
      } = a;
      if (reason) {
        return /*#__PURE__*/React.createElement(StatusReason, {
          status: status,
          reason: t(reason),
          data: r
        });
      }
      return r.description || "-";
    };
    e.getColumns = function () {
      const e_props = e.props;
      const {
        module,
        projectStore
      } = e_props;
      return [{
        title: t("NAME"),
        dataIndex: "name",
        render: function (t, r) {
          return /*#__PURE__*/React.createElement(Module789, {
            icon: _constants.ICON_TYPES[module],
            iconSize: 40,
            isMultiCluster: r.isFedManaged,
            title: (0, _index.getDisplayName)(r),
            desc: e.getItemDesc(r),
            to: r.deletionTime ? null : `${e.prefix}/${module}/${t}`
          });
        }
      }, {
        title: t("STATUS"),
        dataIndex: "status",
        isHideable: true,
        width: "22%",
        render: function (e, data) {
          if (e === "Deleting") {
            return /*#__PURE__*/React.createElement(Module796, {
              type: e,
              name: t(e.toUpperCase()),
              flicker: true
            });
          }
          return /*#__PURE__*/React.createElement(Module1980, {
            data: data,
            module: module,
            clusters: projectStore.detail.clusters
          });
        }
      }, {
        title: t("APP"),
        dataIndex: "app",
        isHideable: true,
        width: "22%"
      }, {
        title: t("UPDATE_TIME_TCAP"),
        dataIndex: "updateTime",
        isHideable: true,
        width: 150,
        render: function (e) {
          return (0, _index.getLocalTime)(e).format("YYYY-MM-DD HH:mm:ss");
        }
      }];
    };
    e.showCreate = function () {
      const e_props = e.props;
      const {
        match,
        module,
        projectStore
      } = e_props;
      return e.props.trigger("workload.create", {
        module,
        isFederated: true,
        projectDetail: projectStore.detail,
        namespace: match.params.namespace
      });
    };
    return e;
  }
  module37(a, [{
    key: "getStatus",
    value: function () {
      return _constants.WORKLOAD_STATUS.map(e => ({
        text: t(e.text),
        value: e.value
      }));
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        bannerProps,
        tableProps
      } = props;
      return /*#__PURE__*/React.createElement(_withList.ListPage, _extends({}, this.props, {
        isFederated: true
      }), /*#__PURE__*/React.createElement(Module793, _extends({}, bannerProps, {
        title: t("WORKLOAD_PL"),
        description: t("WORKLOAD_DESC"),
        tabs: this.tabs
      })), /*#__PURE__*/React.createElement(Module797, _extends({}, tableProps, {
        itemActions: this.itemActions,
        tableActions: this.tableActions,
        selectActions: this.selectActions,
        columns: this.getColumns(),
        onCreate: this.showCreate,
        searchType: "name"
      })));
    }
  }, {
    key: "prefix",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        namespace
      } = params;
      return `/${workspace}/federatedprojects/${namespace}`;
    }
  }, {
    key: "tabs",
    get: function () {
      return {
        value: this.props.module,
        onChange: this.handleTabChange,
        options: [{
          value: "deployments",
          label: t("DEPLOYMENTS")
        }, {
          value: "statefulsets",
          label: t("STATEFULSETS")
        }]
      };
    }
  }, {
    key: "selectActions",
    get: function () {
      const props = this.props;
      const {
        tableProps,
        trigger,
        name,
        rootStore
      } = props;
      return [].concat(module61(module26(tableProps, "tableActions.selectActions", {})), [{
        key: "stop",
        text: t("STOP"),
        action: "edit",
        onClick: function () {
          return trigger("resource.batch.stop", {
            type: name,
            rowKey: "uid",
            success: rootStore.routing.query()
          });
        }
      }]);
    }
  }, {
    key: "itemActions",
    get: function () {
      const props = this.props;
      const {
        trigger,
        name
      } = props;
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.baseinfo.edit", {
            detail: e
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.yaml.edit", {
            detail: e
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        onClick: function (e) {
          return trigger("workload.delete", {
            type: name,
            detail: e,
            isFederated: true
          });
        }
      }];
    }
  }, {
    key: "tableActions",
    get: function () {
      const props = this.props;
      const {
        trigger,
        name
      } = props;
      return {
        ...props.tableProps.tableActions,
        selectActions: [{
          key: "delete",
          type: "danger",
          text: t("DELETE"),
          action: "delete",
          onClick: function () {
            return trigger("workload.batch.delete", {
              type: name,
              rowKey: "name",
              isFederated: true
            });
          }
        }]
      };
    }
  }]);
  return a;
})(_module37.Component)) || o;
var _default = exports["default"] = w;

/***/ },

/***/ "./src/pages/fedprojects/volumes.js"
/*!******************************************!*\
  !*** ./src/pages/fedprojects/volumes.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Avatar */ "./src/components/Base/Avatar.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Status */ "./src/components/Base/Status.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! components/Clusters/ClusterWrapper */ "./src/components/Clusters/ClusterWrapper.js"));
var _withList = __webpack_require__(/*! components/HOCs/withList */ "./src/components/HOCs/withList.js");
var _Module5 = _interopRequireWildcard(__webpack_require__(/*! components/Tables/List */ "./src/components/Tables/List.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _Module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-805.js */ "./src/unpacked/module-805.js"));
var _module33 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/volume */ "./src/stores/volume.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _status = __webpack_require__(/*! utils/status */ "./src/utils/status.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! stores/pv */ "./src/stores/pv.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4957.js */ "./src/unpacked/module-4957.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const Module789 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module796 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module1107 = (0, _recoverInterop.__recoverInterop)(_Module4);
const Module797 = (0, _recoverInterop.__recoverInterop)(_Module5);
const module26 = (0, _recoverInterop.__recoverInterop)(_module7);
const module63 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module805 = (0, _recoverInterop.__recoverInterop)(_Module6);
const module437 = (0, _recoverInterop.__recoverInterop)(_module9);
const module839 = (0, _recoverInterop.__recoverInterop)(_module0);
const module908 = (0, _recoverInterop.__recoverInterop)(_module1);
const module4957 = (0, _recoverInterop.__recoverInterop)(_module10);
let o;
const w = (0, _withList.withProjectList)({
  store: new module437(new module839()),
  module: "persistentvolumeclaims",
  authKey: "persistentvolumeclaims",
  name: "PERSISTENT_VOLUME_CLAIM",
  rowKey: "uid"
})(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...o_1) {
    let e;
    module36(this, a);
    e = r.call(this, ...o_1);
    e.pvStore = new module908();
    e.renderAccessTitle = function () {
      const content = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, t("RWO_DESC")), /*#__PURE__*/React.createElement("div", null, t("ROX_DESC")), /*#__PURE__*/React.createElement("div", null, t("RWX_DESC")));
      return /*#__PURE__*/React.createElement("div", {
        className: module4957.mode_title
      }, t("ACCESS_MODE_TCAP"), /*#__PURE__*/React.createElement(module186.Tooltip, {
        content: content
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "question",
        size: 16,
        className: module4957.question
      })));
    };
    e.mapperAccessMode = function (e) {
      const t = (0, _index.map_accessModes)(e);
      return /*#__PURE__*/React.createElement("span", null, t.join(","));
    };
    e.renderStatus = function ({
      cluster,
      record
    }) {
      const n = module26(record, `resources[${cluster.name}]`);
      if (!n) {
        return t("WAITING");
      }
      const reason = (0, _status.getVolumeStatus)(n);
      const phase = (n.status || {}).phase;
      const u = phase === undefined ? "" : phase;
      if (module63(reason)) {
        return /*#__PURE__*/React.createElement(Module796, {
          type: u,
          className: module4957.status,
          name: t(`VOLUME_STATUS_${u.toUpperCase()}`)
        });
      }
      return /*#__PURE__*/React.createElement(Module805, {
        reason: reason,
        data: n,
        type: "volume"
      });
    };
    e.showCreate = function () {
      const e_props = e.props;
      const {
        match,
        module,
        projectStore
      } = e_props;
      return e.props.trigger("volume.create", {
        module,
        isFederated: true,
        projectDetail: projectStore.detail,
        namespace: match.params.namespace,
        onAddPv: function () {
          return e.props.trigger("pv.create", {
            store: e.pvStore
          });
        }
      });
    };
    return e;
  }
  module37(a, [{
    key: "getColumns",
    value: function () {
      const _this = this;
      return [{
        title: t("NAME"),
        dataIndex: "name",
        render: function (t, r) {
          return /*#__PURE__*/React.createElement(Module789, {
            icon: "storage",
            iconSize: 40,
            title: (0, _index.getDisplayName)(r),
            desc: r.storageClassName || "-",
            to: r.deletionTime ? null : `${_this.props.match.url}/${t}`,
            isMultiCluster: true
          });
        }
      }, {
        title: t("STATUS"),
        dataIndex: "status",
        isHideable: true,
        render: function (r, record) {
          if (r === "Deleting") {
            return /*#__PURE__*/React.createElement(Module796, {
              type: r,
              name: t(r.toUpperCase()),
              flicker: true
            });
          }
          return /*#__PURE__*/React.createElement(Module1107, {
            clusters: record.clusters,
            clustersDetail: _this.props.projectStore.detail.clusters
          }, function (cluster) {
            return _this.renderStatus({
              cluster,
              record
            });
          });
        }
      }, {
        title: t("MOUNT_STATUS"),
        dataIndex: "inUse",
        isHideable: true,
        width: "14%",
        render: function (r, a) {
          return /*#__PURE__*/React.createElement(Module1107, {
            clusters: a.clusters,
            clustersDetail: _this.props.projectStore.detail.clusters
          }, function (e) {
            if (module26(a, `resources[${e.name}].inUse`)) {
              return t("MOUNTED");
            }
            return t("NOT_MOUNTED");
          });
        }
      }, {
        title: this.renderAccessTitle(),
        dataIndex: "accessModes",
        isHideable: false,
        render: function (t) {
          return _this.mapperAccessMode(t);
        }
      }, {
        title: t("CREATION_TIME_TCAP"),
        dataIndex: "createTime",
        isHideable: true,
        width: 150,
        render: function (e) {
          return (0, _index.getLocalTime)(e).format("YYYY-MM-DD HH:mm");
        }
      }];
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        query,
        match,
        bannerProps,
        tableProps
      } = props;
      return /*#__PURE__*/React.createElement(_withList.ListPage, _extends({}, this.props, {
        isFederated: true
      }), /*#__PURE__*/React.createElement(Module793, _extends({}, bannerProps, {
        tips: this.tips
      })), /*#__PURE__*/React.createElement(Module797, _extends({}, tableProps, {
        className: "table-2-5",
        itemActions: this.itemActions,
        namespace: query.namespace,
        columns: this.getColumns(),
        onCreate: this.showCreate,
        cluster: match.params.cluster,
        searchType: "name"
      })));
    }
  }, {
    key: "tips",
    get: function () {
      return [{
        title: t("WHAT_IS_STORAGE_CLASS_Q"),
        description: t("WHAT_IS_STORAGE_CLASS_A")
      }, {
        title: t("WHAT_IS_LOCAL_VOLUME_Q"),
        description: t("WHAT_IS_LOCAL_VOLUME_A")
      }];
    }
  }, {
    key: "itemActions",
    get: function () {
      const props = this.props;
      const {
        trigger,
        name
      } = props;
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.baseinfo.edit", {
            detail: e
          });
        }
      }, {
        key: "editYaml",
        icon: "pen",
        text: t("EDIT_YAML"),
        action: "edit",
        onClick: function (e) {
          return trigger("resource.yaml.edit", {
            detail: e
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        onClick: function (e) {
          return trigger("resource.delete", {
            type: name,
            detail: e
          });
        }
      }];
    }
  }]);
  return a;
})(_module33.Component)) || o;
var _default = exports["default"] = w;

/***/ },

/***/ "./src/pages/projects/components/Cards/Annotations.js"
/*!************************************************************!*\
  !*** ./src/pages/projects/components/Cards/Annotations.js ***!
  \************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module22 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Card */ "./src/components/Base/Card.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5021.js */ "./src/unpacked/module-5021.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module1 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module186 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module802 = (0, _recoverInterop.__recoverInterop)(_Module);
const module5021 = (0, _recoverInterop.__recoverInterop)(_module9);
const v = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a() {
    module36(this, a);
    return r.apply(this, arguments);
  }
  module37(a, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        className,
        data
      } = props;
      if (module63(data)) {
        return null;
      }
      return /*#__PURE__*/React.createElement(Module802, {
        className: className,
        title: t("ANNOTATION_PL")
      }, /*#__PURE__*/React.createElement("ul", {
        className: module5021.annotations
      }, Object.keys(data).filter(e => !module63(data[e])).map(e => /*#__PURE__*/React.createElement("li", {
        key: e
      }, /*#__PURE__*/React.createElement(module186.Columns, null, /*#__PURE__*/React.createElement(module186.Column, {
        className: "is-narrow"
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          width: 317
        }
      }, e)), /*#__PURE__*/React.createElement(module186.Column, null, /*#__PURE__*/React.createElement("p", null, data[e])))))));
    }
  }]);
  return a;
})(_module22.Component);
var _default = exports["default"] = v;
v.propTypes = {
  className: module1.string,
  data: module1.object
};
v.defaultProps = {
  data: {}
};

/***/ },

/***/ "./src/stores/overview.js"
/*!********************************!*\
  !*** ./src/stores/overview.js ***!
  \********************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-30.js */ "./src/shims/corejs-es-array-iterator.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-38.js */ "./src/shims/corejs-es-string-iterator.js");
__webpack_require__(/*! unpacked/module-32.js */ "./src/unpacked/module-32.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/slicedToArray */ "./src/utils/babel-helpers/slicedToArray.js"));
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-65.js */ "./src/unpacked/module-65.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js"));
__webpack_require__(/*! utils/babel-helpers/initializerWarningHelper */ "./src/utils/babel-helpers/initializerWarningHelper.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module96 = (0, _recoverInterop.__recoverInterop)(_module);
const module65 = (0, _recoverInterop.__recoverInterop)(_module2);
const module36 = (0, _recoverInterop.__recoverInterop)(_module3);
const module37 = (0, _recoverInterop.__recoverInterop)(_module4);
const module49 = (0, _recoverInterop.__recoverInterop)(_module5);
const module14 = (0, _recoverInterop.__recoverInterop)(_module6);
let u;
let o;
u = (() => {
  function e() {
    module36(this, e);
    module65(this, "resource", o, this);
  }
  module37(e, [{
    key: "getPath",
    value: function ({
      cluster,
      namespace
    }) {
      let r = "";
      if (cluster) {
        r += `/klusters/${cluster}`;
      }
      if (namespace) {
        r += `/namespaces/${namespace}`;
      }
      return r;
    }
  }, {
    key: "fetchResourceStatus",
    value: async function (t) {
      let a;
      let r;
      let u;
      let o;
      this.resource.isLoading = true;
      a = await Promise.all([(0, _index.to)(request.get(`kapis/resources.kubesphere.io/v1alpha2${this.getPath(t)}/quotas`)), (0, _index.to)(request.get(`kapis/resources.kubesphere.io/v1alpha2${this.getPath(t)}/abnormalworkloads`))]);
      r = module96(a, 2);
      u = r[0];
      o = r[1];
      this.resource = {
        quota: u.data,
        status: o.data,
        isLoading: false
      };
    }
  }]);
  return e;
})();
o = module49(u.prototype, "resource", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {
      quota: {},
      status: {},
      isLoading: true
    };
  }
});
module49(u.prototype, "fetchResourceStatus", [module14.action], Object.getOwnPropertyDescriptor(u.prototype, "fetchResourceStatus"), u.prototype);
var _default = exports["default"] = u;

/***/ },

/***/ "./src/unpacked/module-1252.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1252.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "kovAnOBWnbXq-JlHU_VIP",
  cluster: "_1EpYMYludH_-IxTiJcMxz9",
  clusterLoading: "_34gsmPuVBqBUQYLF0aIvhy",
  scheduleCluster: "_2OBXZfvycGRODoc0s1-hEi",
  textWrapper: "_3gsJia0vEPvoV7rgPknk8Q",
  text: "_2CXdP5tWoZH9kLsqcMPgcE",
  icon: "_2kS7w0oWU2DFVal4VccUBf",
  bottom: "_14eMAldCS16L3-7wubxaT4",
  replicas: "_33X2z00tn1dxC0EsdKdhJL",
  readyNum: "_320Vw2qukVGKtVdJervk-4",
  pods: "_15U9Wo9GBtMtHz8A-LlO1h",
  more: "_1f6XH6RYJh3c9S47msjdY-",
  control: "_1-Fpu3XPZbpUJ-H33NUUKA",
  edit: "_3M72A2m-pBAJOiDIx5mXRK",
  indicator: "_1nLuS9q7OmVhqUNjpxd3qx",
  group: "_37Fw1BhM-BGh6-xHbB0ROe",
  titleBox: "Wm3KmLgy9-ioc64zaskqN",
  IconBox: "_1n51J1JGBYFqdhwNkK5K9c",
  right: "_1P23ECXnSY2rhW0yCLFiN5",
  totalBox: "_2CPRqwvpCEZvprHOxGKGxC",
  total: "_1xUqFi1s3g33Ut6ocGucZa",
  replicasInput: "_3b0Vhu1VlRb2r4ov1N_bG4",
  weight: "f92ZLYqLza7lGjiQIUNdl",
  value: "_1KAVXLkO7U9W4bOfF-bfZ4",
  spanText: "_1bXQGKTI9jGHqGEvmX_V9b",
  subText: "_2qOz41ujpcsfHRrFygnY16"
};

/***/ },

/***/ "./src/unpacked/module-1691.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1691.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-1691 */ "./src/chunks/common/module-1691.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-1980.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1980.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-321.js */ "./src/unpacked/module-321.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-805.js */ "./src/unpacked/module-805.js"));
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _status = __webpack_require__(/*! utils/status */ "./src/utils/status.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4952.js */ "./src/unpacked/module-4952.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module26 = (0, _recoverInterop.__recoverInterop)(_module6);
const module321 = (0, _recoverInterop.__recoverInterop)(_module7);
const module186 = (0, _recoverInterop.__recoverInterop)(_module8);
const module805 = (0, _recoverInterop.__recoverInterop)(_module9);
const module4952 = (0, _recoverInterop.__recoverInterop)(_module0);
const E = (e => {
  module55(a, e);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a() {
    module36(this, a);
    return r.apply(this, arguments);
  }
  module37(a, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        data,
        clusters,
        module
      } = props;
      const o = module321(clusters, "name");
      return module553.default.createElement("div", {
        className: module4952.wrapper
      }, module553.default.createElement("div", {
        className: module4952.tags
      }, data.clusters.map(e => {
        const t = o[e.name];
        if (!t) {
          return null;
        }
        const a = module26(data, `resources[${t.name}]`, {});
        const c = module26(data, `clusterTemplates[${t.name}].spec.replicas`, 0);
        const u = (0, _status.getWorkloadStatus)(a, module);
        const {
          status,
          reason
        } = u;
        return module553.default.createElement(module186.Tag, {
          key: t.name,
          type: _constants.CLUSTER_GROUP_TAG_TYPE[t.group],
          className: module4952.tag
        }, module553.default.createElement(module186.Icon, {
          name: _constants.CLUSTER_PROVIDER_ICON[t.provider] || "kubernetes",
          size: 16,
          type: "light"
        }), module553.default.createElement("span", null, a.availablePodNums || a.readyPodNums || 0, " /", " ", c), " ", reason && module553.default.createElement(module805, {
          status,
          data: a
        }));
      })), module553.default.createElement("p", null, t("REPLICAS_CURRENT"), "/", t("REPLICAS_DESIRED")));
    }
  }]);
  return a;
})(module553.Component);
var _default = exports["default"] = E;

/***/ },

/***/ "./src/unpacked/module-1981.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1981.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module12 = __webpack_require__(/*! unpacked/module-433.js */ "./src/shims/react-router-dom.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Text */ "./src/components/Base/Text.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4986.js */ "./src/unpacked/module-4986.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module1 = (0, _recoverInterop.__recoverInterop)(_module);
const module186 = (0, _recoverInterop.__recoverInterop)(_module2);
const Module791 = (0, _recoverInterop.__recoverInterop)(_Module);
const module4986 = (0, _recoverInterop.__recoverInterop)(_module3);
const FComponent = function ({
  gateway,
  rule,
  tls = {},
  prefix
}) {
  const d = tls.hosts && tls.hosts.includes(rule.host) ? "https" : "http";
  let rule_host = rule.host;
  if (gateway && gateway.ports && gateway.type === "NodePort") {
    const m = gateway.ports.find(e => e.name === d);
    if (m && (d === "http" && m.nodePort !== 80 || d === "https" && m.nodePort !== 443)) {
      rule_host = `${rule_host}:${m.nodePort}`;
    }
  }
  const description = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, t("PROTOCOL_VALUE", {
    value: d.toUpperCase()
  })), "\xA0\xA0", d === "https" && /*#__PURE__*/React.createElement("span", null, t("CERTIFICATE_VALUE", {
    value: tls.secretName
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: module4986.card
  }, /*#__PURE__*/React.createElement("span", {
    className: module4986.tip
  }, t("UNABLE_TO_ACCESS"), "\xA0\xA0", /*#__PURE__*/React.createElement(module186.Tooltip, {
    content: t.html("UNABLE_TO_ACCESS_TIP")
  }, /*#__PURE__*/React.createElement(module186.Icon, {
    name: "question"
  }))), /*#__PURE__*/React.createElement(Module791, {
    icon: "ip",
    title: rule_host,
    description: description
  }), rule.http.paths.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.path,
    className: module4986.path
  }, /*#__PURE__*/React.createElement(module186.Columns, null, /*#__PURE__*/React.createElement(module186.Column, null, /*#__PURE__*/React.createElement("span", null, t.html("ROUTE_PATH_VALUE", {
    value: e.path
  }))), /*#__PURE__*/React.createElement(module186.Column, null, /*#__PURE__*/React.createElement("span", null, t("SERVICE_COLON"), /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(_module12.Link, {
    to: `${prefix}/services/${e.backend.service.name}`
  }, e.backend.service.name)))), /*#__PURE__*/React.createElement(module186.Column, null, /*#__PURE__*/React.createElement("span", null, t.html("ROUTE_PORT_VALUE", {
    value: e.backend.service.port.number
  }))), /*#__PURE__*/React.createElement(module186.Column, null, /*#__PURE__*/React.createElement("a", {
    href: `${d}://${rule_host}${e.path}`,
    target: "_blank",
    rel: "noreferrer noopener"
  }, /*#__PURE__*/React.createElement(module186.Button, {
    className: module4986.access
  }, t("ACCESS_SERVICE"))))))));
};
FComponent.propTypes = {
  rule: module1.object
};
var _default = exports["default"] = FComponent;

/***/ },

/***/ "./src/unpacked/module-1982.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1982.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4990.js */ "./src/unpacked/module-4990.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module790 = (0, _recoverInterop.__recoverInterop)(_module7);
const module4990 = (0, _recoverInterop.__recoverInterop)(_module8);
const y = (e => {
  module55(a, e);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...n) {
    let e;
    module36(this, a);
    e = r.call(this, ...n);
    e.state = {
      showOptions: false
    };
    e.optionsRef = module553.default.createRef();
    e.handleDOMClick = function (t) {
      if (e.optionsRef && e.optionsRef.current && !e.optionsRef.current.contains(t.target)) {
        e.setState({
          showOptions: false
        });
      }
    };
    e.handleClick = function (t) {
      e.setState({
        showOptions: false
      }, function () {
        e.props.onChange(t);
      });
    };
    e.toggleOptions = function () {
      e.setState(function (e) {
        return {
          showOptions: !e.showOptions
        };
      });
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      document.addEventListener("click", this.handleDOMClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      document.removeEventListener("click", this.handleDOMClick);
    }
  }, {
    key: "renderValue",
    value: function (e) {
      const extra = this.props.extra;
      return module553.default.createElement("div", {
        key: e.name,
        className: module4990.option,
        onClick: this.toggleOptions
      }, module553.default.createElement(module186.Icon, {
        name: _constants.CLUSTER_PROVIDER_ICON[e.provider] || "kubernetes",
        size: 20,
        type: "light"
      }), module553.default.createElement("span", {
        className: module4990.name
      }, (0, _index.getDisplayNameNew)(e)), e.group && module553.default.createElement(module186.Tag, {
        key: e.name,
        type: _constants.CLUSTER_GROUP_TAG_TYPE[e.group]
      }, t(`ENV_${e.group.toUpperCase()}`, {
        defaultValue: e.group
      })), extra && extra(e), module553.default.createElement(module186.Icon, {
        className: module4990.indicator,
        name: "chevron-down",
        type: "light"
      }));
    }
  }, {
    key: "renderOption",
    value: function (e) {
      const _this = this;
      const extra = this.props.extra;
      return module553.default.createElement("div", {
        key: e.name,
        className: module4990.option,
        onClick: function () {
          return _this.handleClick(e);
        }
      }, module553.default.createElement(module186.Icon, {
        name: _constants.CLUSTER_PROVIDER_ICON[e.provider] || "kubernetes",
        size: 20,
        type: "light"
      }), module553.default.createElement("span", {
        className: module4990.name
      }, (0, _index.getDisplayNameNew)(e)), e.group && module553.default.createElement(module186.Tag, {
        key: e.name,
        type: _constants.CLUSTER_GROUP_TAG_TYPE[e.group]
      }, t(`ENV_${e.group.toUpperCase()}`, {
        defaultValue: e.group
      })), extra && extra(e));
    }
  }, {
    key: "render",
    value: function () {
      const _this = this;
      const props = this.props;
      const {
        value,
        options
      } = props;
      const showOptions = this.state.showOptions;
      const c = options.find(e => e.name === value.name);
      if (c) {
        return module553.default.createElement(module790, {
          title: t("CLUSTER")
        }, module553.default.createElement("div", {
          className: module4990.wrapper,
          ref: this.optionsRef
        }, module553.default.createElement("div", {
          className: module4990.value
        }, this.renderValue(c)), showOptions && module553.default.createElement("div", {
          className: module4990.options
        }, options.map(t => _this.renderOption(t)))));
      }
      return null;
    }
  }]);
  return a;
})(module553.Component);
var _default = exports["default"] = y;

/***/ },

/***/ "./src/unpacked/module-1983.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1983.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Component = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-48.js */ "./node_modules/core-js3/modules/es.array.slice.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-316.js */ "./node_modules/core-js3/modules/es.object.values.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module3 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module49 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module51 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-450.js */ "./src/unpacked/module-450.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-862.js */ "./src/unpacked/module-862.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-321.js */ "./src/unpacked/module-321.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-856.js */ "./src/unpacked/module-856.js"));
var _module13 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module14 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-136.js */ "./src/unpacked/module-136.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-851.js */ "./src/unpacked/module-851.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1070.js */ "./src/unpacked/module-1070.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! pages/fedprojects/components/ClusterWorkloadStatus */ "./src/pages/fedprojects/components/ClusterWorkloadStatus.js"));
var _module15 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4999.js */ "./src/unpacked/module-4999.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module41 = (0, _recoverInterop.__recoverInterop)(_module2);
const module44 = (0, _recoverInterop.__recoverInterop)(_module3);
const module36 = (0, _recoverInterop.__recoverInterop)(_module4);
const module37 = (0, _recoverInterop.__recoverInterop)(_module5);
const module55 = (0, _recoverInterop.__recoverInterop)(_module6);
const module56 = (0, _recoverInterop.__recoverInterop)(_module7);
const module51 = (0, _recoverInterop.__recoverInterop)(_module8);
const module14 = (0, _recoverInterop.__recoverInterop)(_module9);
const module63 = (0, _recoverInterop.__recoverInterop)(_module0);
const module450 = (0, _recoverInterop.__recoverInterop)(_module1);
const module862 = (0, _recoverInterop.__recoverInterop)(_module10);
const module321 = (0, _recoverInterop.__recoverInterop)(_module11);
const module856 = (0, _recoverInterop.__recoverInterop)(_module12);
const module26 = (0, _recoverInterop.__recoverInterop)(_module13);
const module136 = (0, _recoverInterop.__recoverInterop)(_module14);
const Module851 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module1070 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module1984 = (0, _recoverInterop.__recoverInterop)(_Module3);
const module4999 = (0, _recoverInterop.__recoverInterop)(_module15);
const w = (Component_1 => {
  module55(r, Component_1);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r(...n) {
    let e;
    module36(this, r);
    e = t.call(this, ...n);
    e.state = {
      resources: {}
    };
    e.fetchReplica = module856(module44(module41.mark(function* t() {
      let r;
      let a;
      r = e.props.match.params;
      a = yield e.store.fetchDetailSilent({
        clusters: e.store.detail.clusters.map(e => e.name),
        ...r
      });
      e.setState({
        resources: a
      });
    })), 1000);
    return e;
  }
  module37(r, [{
    key: "renderReplicaInfo",
    value: function () {
      const {
        detail = {},
        resources,
        isResourcesLoading
      } = this.store;
      const o = module136(module14.toJS(resources));
      const resources_1 = this.state.resources;
      const clustersDetail = module321(this.props.projectStore.detail.clusters, "name");
      if (!module63(resources_1)) {
        Object.keys(o).forEach(e => {
          o[e] = {
            ...o[e],
            ...module26(resources_1, e, {})
          };
        });
      }
      return /*#__PURE__*/React.createElement(Module1984, {
        module: this.module,
        store: this.store,
        detail: detail,
        resources: o,
        clustersDetail: clustersDetail,
        clusters: detail.clusters,
        isLoading: isResourcesLoading,
        canEdit: this.enabledActions.includes("edit"),
        projectStore: this.props.projectStore
      });
    }
  }, {
    key: "renderContainerPorts",
    value: function () {
      if (this.props.noPorts) {
        return null;
      }
      const store = this.store;
      const {
        resources,
        isResourcesLoading
      } = store;
      const ports = [];
      Object.values(resources).forEach(e => {
        if (e && e.containers) {
          ports.push.apply(ports, module61(module862(module450(e.containers.map(e => {
            if (module63(e.ports)) {
              return [];
            }
            return e.ports.slice();
          })), "name").map(t => ({
            ...t,
            cluster: e.cluster
          }))));
        }
      });
      if (module63(ports)) {
        return null;
      }
      return /*#__PURE__*/React.createElement(Module1070, {
        ports: ports,
        loading: isResourcesLoading,
        isFederated: true
      });
    }
  }, {
    key: "renderPods",
    value: function () {
      const store = this.store;
      const {
        detail,
        resources
      } = store;
      const a = module321(this.props.projectStore.detail.clusters, "name");
      const clusters = detail.clusters.filter(e => a[e.name]).map(e => e.name);
      return /*#__PURE__*/React.createElement(Module851, {
        prefix: this.prefix,
        details: module14.toJS(resources),
        clusters: clusters,
        getReplica: this.fetchReplica,
        isFederated: true
      });
    }
  }, {
    key: "renderContent",
    value: function () {
      return /*#__PURE__*/React.createElement("div", null, this.renderReplicaInfo(), this.renderContainerPorts(), this.renderPods());
    }
  }, {
    key: "render",
    value: function () {
      return /*#__PURE__*/React.createElement("div", {
        className: module4999.main
      }, this.renderContent());
    }
  }, {
    key: "module",
    get: function () {
      return this.props.detailStore.module;
    }
  }, {
    key: "store",
    get: function () {
      return this.props.detailStore;
    }
  }, {
    key: "prefix",
    get: function () {
      const workspace = this.props.match.params.workspace;
      if (workspace) {
        return `/${workspace}`;
      }
      return "";
    }
  }, {
    key: "enabledActions",
    get: function () {
      return globals.app.getActions({
        module: this.module,
        project: this.props.match.params.namespace,
        fedproject: true
      });
    }
  }]);
  return r;
})(_module49.Component);
const D = (0, _module51.inject)("projectStore", "detailStore")((0, _module51.observer)(w));
var _default = exports["default"] = D;
const A = exports.Component = w;

/***/ },

/***/ "./src/unpacked/module-1985.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1985.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-320.js */ "./node_modules/core-js3/modules/es.array.sort.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-316.js */ "./node_modules/core-js3/modules/es.object.values.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-88.js */ "./src/unpacked/module-88.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module39 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module41 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-989.js */ "./src/unpacked/module-989.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _index2 = __webpack_require__(/*! components/Charts/index */ "./src/components/Charts/index.js");
var _index3 = __webpack_require__(/*! components/Cards/Monitoring/index */ "./src/components/Cards/Monitoring/index.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! pages/projects/components/Modals/PodsMonitoring */ "./src/pages/projects/components/Modals/PodsMonitoring.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5000.js */ "./src/unpacked/module-5000.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module88 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module14 = (0, _recoverInterop.__recoverInterop)(_module7);
const module3 = (0, _recoverInterop.__recoverInterop)(_module8);
const module63 = (0, _recoverInterop.__recoverInterop)(_module9);
const module26 = (0, _recoverInterop.__recoverInterop)(_module0);
const module989 = (0, _recoverInterop.__recoverInterop)(_module1);
const module186 = (0, _recoverInterop.__recoverInterop)(_module10);
const Module1818 = (0, _recoverInterop.__recoverInterop)(_Module);
const module5000 = (0, _recoverInterop.__recoverInterop)(_module11);
let o;
const D = {
  cpu_usage: "pod_cpu_usage",
  memory_usage: "pod_memory_usage_wo_cache",
  gpu_usage: "pod_gpu_usage",
  gpu_memory_usage: "pod_gpu_memory_usage",
  net_transmitted: "pod_net_bytes_transmitted",
  net_received: "pod_net_bytes_received"
};
const A = {
  deployments: "deployment",
  statefulsets: "statefulset",
  daemonsets: "daemonset"
};
const j = (0, _module41.inject)("detailStore")(o = (0, _module41.observer)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(e) {
    let t;
    module36(this, a);
    t = r.call(this, e);
    t.fetchData = function (e = {}) {
      const t_state = t.state;
      const {
        cluster,
        pods
      } = t_state;
      if (module63(pods) || e.cluster !== cluster) {
        t.resourceStore.fetchSortedMetrics({
          ...t.resourceParams,
          cluster: e.cluster,
          metrics: [D.cpu_usage],
          limit: 6
        }).then(r => {
          const a = (module26(r[D.cpu_usage], "data.result") || []).map(e => module26(e, "metric.pod"));
          t.setState({
            pods: a,
            cluster: e.cluster
          }, function () {
            t.fetchMetrics({
              resources: a,
              ...e
            });
          });
        });
      } else {
        t.fetchMetrics({
          resources: pods,
          ...e
        });
      }
    };
    t.fetchMetrics = function (e) {
      t.monitorStore.fetchMetrics({
        resources: [],
        metrics: Object.values((0, _index.hideGPUByLicense)(D, t.state.cluster)),
        ...t.resourceParams,
        ...e
      });
    };
    t.getMonitoringCfgs = function () {
      return [{
        type: "cpu",
        title: "CPU_USAGE",
        unitType: "cpu",
        metricType: D.cpu_usage
      }, {
        type: "memory",
        title: "MEMORY_USAGE",
        unitType: "memory",
        metricType: D.memory_usage
      }, {
        type: "gpu",
        title: "GPU_USAGE",
        unitType: "gpu",
        metricType: D.gpu_usage
      }, {
        type: "gpu_memory",
        title: "GPU_MEMORY_USAGE",
        unitType: "memory",
        metricType: D.gpu_memory_usage
      }, {
        type: "bandwidth",
        title: "OUTBOUND_TRAFFIC",
        unitType: "bandwidth",
        metricType: D.net_transmitted
      }, {
        type: "bandwidth",
        title: "INBOUND_TRAFFIC",
        unitType: "bandwidth",
        metricType: D.net_received
      }];
    };
    t.showMultipleModal = function (e) {
      return (0, _index.cacheFunc)(`_showMultipleModal_${e.title}`, function () {
        t.setState({
          showMultipleModal: true,
          selectItem: {
            ...e,
            legend: ["USAGE"]
          }
        });
      }, module88(t));
    };
    t.hideMultipleModal = function () {
      t.setState({
        showMultipleModal: false,
        selectItem: {}
      });
    };
    t.state = {
      showMultipleModal: false,
      selectItem: {},
      pods: [],
      cluster: ""
    };
    t.monitorStore = new module989();
    t.resourceStore = new module989();
    return t;
  }
  module37(a, [{
    key: "renderCard",
    value: function () {
      const _this = this;
      const detail = this.store.detail;
      const {
        createTime,
        clusters
      } = detail;
      const monitorStore = this.monitorStore;
      const {
        isLoading,
        isRefreshing
      } = monitorStore;
      const i = (0, _index.hideGPUByLicense)(this.getMonitoringCfgs(), this.state.cluster);
      const isMore = this.isMore;
      return /*#__PURE__*/React.createElement(_index3.Controller, {
        createTime: createTime,
        onFetch: this.fetchData,
        loading: isLoading,
        refreshing: isRefreshing,
        clusters: clusters,
        isEmpty: module63(this.metrics),
        isFederated: true
      }, isMore && /*#__PURE__*/React.createElement(module186.Alert, {
        message: t.html("MONITORING_ALERT_DESC"),
        type: "info"
      }), i.map(r => {
        r.data = module26(_this.metrics, `${r.metricType}.data.result`) || [{
          values: (0, _monitoring.getZeroValues)()
        }];
        r.legend = r.data.map((e, t) => module26(e, "metric.pod", `pod${t}`));
        r.workload_kind = _this.monitoringModule;
        const a = (0, _monitoring.getAreaChartOps)(r);
        return /*#__PURE__*/React.createElement("div", {
          key: r.title,
          className: module3(module5000.item)
        }, isMore && /*#__PURE__*/React.createElement("div", {
          className: module5000.more,
          onClick: _this.showMultipleModal(r)
        }, t("VIEW_ALL_REPLICAS")), /*#__PURE__*/React.createElement(_index2.MultiArea, _extends({
          width: "100%"
        }, a)));
      }));
    }
  }, {
    key: "renderModal",
    value: function () {
      const state = this.state;
      const {
        showMultipleModal,
        selectItem
      } = state;
      const detail = this.store.detail;
      const {
        name,
        namespace
      } = detail;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Module1818, {
        visible: showMultipleModal,
        module: this.monitoringModule,
        name: name,
        namespace: namespace,
        config: selectItem,
        onCancel: this.hideMultipleModal
      }));
    }
  }, {
    key: "render",
    value: function () {
      return /*#__PURE__*/React.createElement("div", null, this.renderCard(), this.renderModal());
    }
  }, {
    key: "store",
    get: function () {
      return this.props.detailStore;
    }
  }, {
    key: "monitoringModule",
    get: function () {
      return A[this.store.module];
    }
  }, {
    key: "metrics",
    get: function () {
      return this.monitorStore.data;
    }
  }, {
    key: "resourceParams",
    get: function () {
      const detail = this.store.detail;
      const {
        namespace,
        name
      } = detail;
      return {
        namespace,
        workload_kind: this.monitoringModule,
        workload_name: name
      };
    }
  }, {
    key: "isMore",
    get: function () {
      return (module26(module14.toJS(this.resourceStore.sort), `data[${D.cpu_usage}].data.result`) || []).length > 5;
    }
  }]);
  return a;
})(_module39.Component)) || o) || o;
var _default = exports["default"] = j;

/***/ },

/***/ "./src/unpacked/module-2046.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2046.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2046 */ "./src/chunks/common/module-2046.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-2272.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2272.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2272 */ "./src/chunks/common/module-2272.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-2554.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2554.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2554 */ "./src/chunks/common/module-2554.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-4937.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4937.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "_1cCsVSrWXIaWdV8emflgLc",
  header: "_3CY3ZlrDR0I7YC4OIdZDkI",
  content: "_3ghCMfU_PDmm9szX-QX-92",
  background: "_3s5SVx8hwpIVXZJU0dXOME"
};

/***/ },

/***/ "./src/unpacked/module-4938.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4938.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module37 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Text */ "./src/components/Base/Text.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4939.js */ "./src/unpacked/module-4939.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module26 = (0, _recoverInterop.__recoverInterop)(_module6);
const module186 = (0, _recoverInterop.__recoverInterop)(_module7);
const module791 = (0, _recoverInterop.__recoverInterop)(_module8);
const module790 = (0, _recoverInterop.__recoverInterop)(_module9);
const module437 = (0, _recoverInterop.__recoverInterop)(_module0);
const module4939 = (0, _recoverInterop.__recoverInterop)(_module1);
let c;
const b = (0, _module37.inject)("rootStore", "projectStore")(c = (0, _module37.observer)(c = (0, _action.trigger)(c = (e => {
  module55(a, e);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...n_1) {
    let e;
    module36(this, a);
    e = r.call(this, ...n_1);
    e.state = {
      showTip: false
    };
    e.store = new module437({
      module: "limitranges"
    });
    e.showSetting = function () {
      const e_params = e.params;
      const {
        namespace,
        workspace
      } = e_params;
      const data = e.store.list.data;
      e.trigger("project.default.resource", {
        ...e.params,
        detail: data[0],
        isFederated: true,
        workspace,
        name: namespace,
        clusters: e.clusters,
        projectDetail: e.props.projectStore.detail,
        success: function () {
          return e.setState({
            showTip: false
          });
        }
      });
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      const _this = this;
      const namespace = this.params.namespace;
      this.store.fetchListByK8s({
        namespace
      }).then(() => {
        const total = _this.store.list.total;
        _this.setState({
          showTip: total === 0
        });
      });
    }
  }, {
    key: "render",
    value: function () {
      if (this.state.showTip) {
        return module553.default.createElement(module790, {
          className: module4939.wrapper
        }, module553.default.createElement(module791, {
          className: module4939.text,
          icon: "exclamation",
          title: t("DEFAULT_CONTAINER_QUOTAS_NOT_SET"),
          description: t("DEFAULT_CONTAINER_QUOTAS_DESC")
        }), module553.default.createElement(module186.Button, {
          type: "control",
          onClick: this.showSetting
        }, t("EDIT_QUOTAS")));
      }
      return null;
    }
  }, {
    key: "params",
    get: function () {
      return module26(this.props.match, "params", {});
    }
  }, {
    key: "clusters",
    get: function () {
      return module26(this.props.projectStore, "detail.clusters", []).map(e => e.name);
    }
  }]);
  return a;
})(module553.Component)) || c) || c) || c;
var _default = exports["default"] = b;

/***/ },

/***/ "./src/unpacked/module-4939.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4939.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "_2FvSeMzYYesvhX-ejJ42KX",
  text: "_3DdMVlXygCEhz8eMoaWaSB"
};

/***/ },

/***/ "./src/unpacked/module-4943.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4943.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  card: "_1aK9M2ABK--zrWKxtSjitf",
  icon: "_3YStaQCgjfHrr2KxC-qWMb",
  warn: "_3XD-urPTP4b5kQFF25P1J3",
  tips: "_2wOcbgucGsMTTwMP340_w3",
  skip: "_2aj89OYDD2fNhMuJdOsLks",
  info: "_3NX2xvd1JmwoMSQCsNAUZl",
  cursor: "_2gjwCxV06MFwZ28jZgAfB0"
};

/***/ },

/***/ "./src/unpacked/module-4944.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4944.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "lhAYr_BvqflK6AH06NHDs",
  header: "fVrL2jWvbuvVpeFLdHh-5",
  timeSelect: "YQNUYGZd1XHRdL2_iF1TK",
  cluster: "_12WK-EhzeFn2BXYZ1E4kwL"
};

/***/ },

/***/ "./src/unpacked/module-4945.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4945.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
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
var _module18 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4946.js */ "./src/unpacked/module-4946.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4947.js */ "./src/unpacked/module-4947.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const Module4946 = (0, _recoverInterop.__recoverInterop)(_Module);
const module4947 = (0, _recoverInterop.__recoverInterop)(_module6);
const h = (Component_1 => {
  module55(r, Component_1);
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(r);
  function r() {
    module36(this, r);
    return t.apply(this, arguments);
  }
  module37(r, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        type,
        title,
        metrics,
        showDay
      } = props;
      const c = (0, _monitoring.getAreaChartOps)({
        title,
        unitType: type,
        legend: ["COUNT"],
        data: metrics,
        xFormatter: function (e) {
          return (0, _index.getLocalTime)(1000 * Number(e)).format(showDay ? "MM-DD HH:mm" : "HH:mm");
        }
      });
      return /*#__PURE__*/React.createElement("div", {
        className: module4947.wrapper
      }, /*#__PURE__*/React.createElement("div", {
        className: module4947.chartWrapper
      }, /*#__PURE__*/React.createElement("div", {
        className: module4947.title
      }, title), /*#__PURE__*/React.createElement("div", {
        className: module4947.chart
      }, /*#__PURE__*/React.createElement(Module4946, _extends({
        width: "100%",
        height: 120,
        bgColor: "transparent"
      }, c)))));
    }
  }]);
  return r;
})(_module18.Component);
var _default = exports["default"] = h;

/***/ },

/***/ "./src/unpacked/module-4946.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4946.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-828.js */ "./node_modules/core-js3/modules/es.array.fill.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module21 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
__webpack_require__(/*! unpacked/module-1419.js */ "./src/unpacked/module-1419.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-901.js */ "./src/shims/recharts/Area-module-901.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-870.js */ "./src/shims/recharts/Tooltip-module-870.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-913.js */ "./src/shims/recharts/YAxis-module-913.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-871.js */ "./src/shims/recharts/XAxis-module-871.js"));
var _Module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-948.js */ "./src/shims/recharts/AreaChart-module-948.js"));
var _Module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-930.js */ "./src/shims/recharts/CartesianGrid-module-930.js"));
var _Module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-872.js */ "./src/shims/recharts/ResponsiveContainer-module-872.js"));
var _Module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-863.js */ "./src/unpacked/module-863.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module1 = (0, _recoverInterop.__recoverInterop)(_module6);
const Module901 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module870 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module913 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module871 = (0, _recoverInterop.__recoverInterop)(_Module4);
const Module948 = (0, _recoverInterop.__recoverInterop)(_Module5);
const Module930 = (0, _recoverInterop.__recoverInterop)(_Module6);
const Module872 = (0, _recoverInterop.__recoverInterop)(_Module7);
const Module863 = (0, _recoverInterop.__recoverInterop)(_Module8);
function S(e) {
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
    let r;
    const a = module51(e);
    if (t) {
      const n = module51(this).constructor;
      r = Reflect.construct(a, arguments, n);
    } else {
      r = a.apply(this, arguments);
    }
    return module56(this, r);
  };
}
const _ = (PureComponent_1 => {
  module55(r, PureComponent_1);
  var t = S(r);
  function r() {
    module36(this, r);
    return t.apply(this, arguments);
  }
  module37(r, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        x,
        y,
        payload
      } = props;
      return /*#__PURE__*/React.createElement("g", {
        transform: `translate(${x},${y})`
      }, /*#__PURE__*/React.createElement("text", {
        x: 0,
        y: 0,
        dy: 12,
        fill: "#79879c",
        textAnchor: "middle"
      }, payload.value));
    }
  }]);
  return r;
})(_module21.PureComponent);
const O = (Component_1 => {
  module55(r, Component_1);
  var t = S(r);
  function r() {
    module36(this, r);
    return t.apply(this, arguments);
  }
  module37(r, [{
    key: "getHorizontalPoints",
    value: function () {
      const e = (this.props.height - 30 - 6) / 4;
      return Array(4).fill("").map((t, r) => 30 + e * r);
    }
  }, {
    key: "renderArea",
    value: function () {
      const props = this.props;
      const {
        unit,
        areaColors
      } = props;
      return this.series.map((e, a) => {
        const stroke = _constants.COLORS_MAP[areaColors[a]];
        return /*#__PURE__*/React.createElement(Module901, {
          key: e,
          dataKey: e,
          stroke: stroke,
          fillOpacity: "1",
          fill: "url(#colorPv)",
          unit: unit
        });
      });
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        width,
        height,
        xKey,
        data
      } = props;
      return /*#__PURE__*/React.createElement(Module872, {
        width: width,
        height: height,
        debounce: 1
      }, /*#__PURE__*/React.createElement(Module948, {
        data: data,
        margin: {
          top: 32,
          left: 16,
          right: 16,
          bottom: 0
        }
      }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
        id: "colorPv",
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "1"
      }, /*#__PURE__*/React.createElement("stop", {
        offset: "5%",
        stopColor: "#55bc8a",
        stopOpacity: 0.2
      }), /*#__PURE__*/React.createElement("stop", {
        offset: "95%",
        stopColor: "#55bc8a",
        stopOpacity: 0
      }))), /*#__PURE__*/React.createElement(Module930, {
        vertical: false,
        stroke: "#36435c",
        strokeDasharray: "2 2",
        horizontalPoints: this.getHorizontalPoints()
      }), /*#__PURE__*/React.createElement(Module871, {
        dataKey: xKey,
        axisLine: false,
        tickLine: false,
        height: 30,
        interval: "preserveStart",
        tick: /*#__PURE__*/React.createElement(_, null),
        minTickGap: 20
      }), /*#__PURE__*/React.createElement(Module913, {
        hide: true,
        type: "number",
        domain: [function (e) {
          return 0 - Math.abs(e);
        }, function (e) {
          return 1.6 * e;
        }]
      }), /*#__PURE__*/React.createElement(Module870, {
        wrapperStyle: {
          zIndex: 1000
        },
        content: /*#__PURE__*/React.createElement(Module863, null)
      }), this.renderArea()));
    }
  }, {
    key: "series",
    get: function () {
      const props = this.props;
      const {
        xKey,
        data
      } = props;
      return Object.keys(data[0] || {}).filter(e => e !== xKey);
    }
  }]);
  return r;
})(_module21.Component);
var _default = exports["default"] = O;
O.propTypes = {
  width: module1.oneOfType([module1.string, module1.number]),
  height: module1.oneOfType([module1.string, module1.number]),
  xKey: module1.string,
  unit: module1.string,
  data: module1.array,
  bgColor: module1.string,
  areaColors: module1.array
};
O.defaultProps = {
  width: 180,
  height: 56,
  xKey: "time",
  unit: "",
  bgColor: _constants.COLORS_MAP.lightest,
  areaColors: ["green", "blue", "yellow", "red"],
  data: []
};

/***/ },

/***/ "./src/unpacked/module-4947.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4947.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "_2R06eiyotdeGIx5OLhFonz",
  chartWrapper: "_29Puefj9SAxjkMV22wykzX",
  chart: "_2eHSIdMS6vT3QPzHyRq6Jw",
  title: "_1iV5AwK5s6o9oLhbG6ft6A"
};

/***/ },

/***/ "./src/unpacked/module-4949.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4949.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "ALy60QWv9PJIlLpSJ93tc",
  header: "_14neEM1YWcy8Yl_HhRXBZ9",
  title: "_3rcJ-P4KglVtAGgB47VOBC",
  select: "_1trHAxO9VXo4shhZWhZYRD",
  app: "_65oCruiMj4nUJACfdPg73",
  value: "_3L2-Jvn7GOtsJBEIGhLbAs",
  appContent: "W5UocK9-pHzxLPhMojqCP",
  text: "_3GdnxTROCHfv5IKMzw0yhW",
  background: "_2lDLZkYMWHYxOFFEZZYilE",
  empty: "JDSFBvlabhdgjVzNCAOt9"
};

/***/ },

/***/ "./src/unpacked/module-4952.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4952.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "_3vfbX3W9MN6NoSM26C_PUM",
  tags: "_1J5vlSwYc2sSMZG3BALMr7",
  tag: "_3MVQc8OY7AwLCjXUT7wXis"
};

/***/ },

/***/ "./src/unpacked/module-4957.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4957.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  capacity: "iBZ0-sFnB5X4qtbfRm500",
  status: "_2KeXCGUnopa84_M0KKIaeZ"
};

/***/ },

/***/ "./src/unpacked/module-4960.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4960.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "_1OoRSXI9AaH-1pF0uVUoIA",
  header: "_2uA5GBAHHtwRgU51d1wP3G",
  item: "OIHmcMQG8LKBCOt5hlkmU",
  content: "Ya_oEvC_R5nxTIQyKATBc",
  contentItem: "_4VWupvp5oiq4Ey4tIByoZ"
};

/***/ },

/***/ "./src/unpacked/module-4961.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4961.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-97.js */ "./node_modules/core-js3/modules/es.array.some.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-447.js */ "./src/unpacked/module-447.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module26 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4962.js */ "./src/unpacked/module-4962.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module26 = (0, _recoverInterop.__recoverInterop)(_module6);
const module447 = (0, _recoverInterop.__recoverInterop)(_module7);
const module63 = (0, _recoverInterop.__recoverInterop)(_module8);
const module186 = (0, _recoverInterop.__recoverInterop)(_module9);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module);
const module4962 = (0, _recoverInterop.__recoverInterop)(_module0);
const g = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a() {
    module36(this, a);
    return r.apply(this, arguments);
  }
  module37(a, [{
    key: "render",
    value: function () {
      const detail = this.props.detail;
      const r = (0, _index.cpuFormat)(module26(detail, "limit.default.cpu"));
      const a = (0, _index.cpuFormat)(module26(detail, "limit.defaultRequest.cpu"));
      const n = (0, _index.memoryFormat)(module26(detail, "limit.default.memory"));
      const o = (0, _index.memoryFormat)(module26(detail, "limit.defaultRequest.memory"));
      const supportGpuType = globals.config.supportGpuType;
      const u = module26(detail, "limit.defaultRequest", {});
      const l = supportGpuType.filter(e => Object.keys(u).some(t => module447(t, e)));
      const i = module63(l) ? {} : {
        value: u[`${l[0]}`],
        type: l
      };
      return /*#__PURE__*/React.createElement(Module790, {
        title: t("DEFAULT_CONTAINER_QUOTA_PL")
      }, /*#__PURE__*/React.createElement("div", {
        className: module4962.content
      }, /*#__PURE__*/React.createElement("div", {
        className: module4962.contentItem
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "cpu",
        size: 40
      }), /*#__PURE__*/React.createElement("div", {
        className: module4962.item
      }, /*#__PURE__*/React.createElement("div", null, a ? `${a} Core` : t("NO_REQUEST_TCAP")), /*#__PURE__*/React.createElement("p", null, t("CPU_REQUEST_SCAP"))), /*#__PURE__*/React.createElement("div", {
        className: module4962.item
      }, /*#__PURE__*/React.createElement("div", null, r ? `${r} Core` : t("NO_LIMIT_TCAP")), /*#__PURE__*/React.createElement("p", null, t("CPU_LIMIT_SCAP")))), /*#__PURE__*/React.createElement("div", {
        className: module4962.contentItem
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "memory",
        size: 40
      }), /*#__PURE__*/React.createElement("div", {
        className: module4962.item
      }, /*#__PURE__*/React.createElement("div", null, o ? `${o} Mi` : t("NO_REQUEST_TCAP")), /*#__PURE__*/React.createElement("p", null, t("MEMORY_REQUEST_SCAP"))), /*#__PURE__*/React.createElement("div", {
        className: module4962.item
      }, /*#__PURE__*/React.createElement("div", null, n ? `${n} Mi` : t("NO_LIMIT_TCAP")), /*#__PURE__*/React.createElement("p", null, t("MEMORY_LIMIT_SCAP")))), /*#__PURE__*/React.createElement("div", {
        className: module4962.contentItem
      }, /*#__PURE__*/React.createElement("img", {
        src: "/assets/GPU.svg",
        size: 48
      }), /*#__PURE__*/React.createElement("div", {
        className: module4962.item
      }, /*#__PURE__*/React.createElement("div", null, i.value ? i.type : t("NONE")), /*#__PURE__*/React.createElement("p", null, t("GPU_TYPE_SCAP"))), /*#__PURE__*/React.createElement("div", {
        className: module4962.item
      }, /*#__PURE__*/React.createElement("div", null, i.value ? i.value : t("NO_LIMIT_TCAP")), /*#__PURE__*/React.createElement("p", null, t("GPU_LIMIT_SCAP"))))));
    }
  }]);
  return a;
})(_module26.Component);
var _default = exports["default"] = g;

/***/ },

/***/ "./src/unpacked/module-4962.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4962.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  item: "_1Ldmn-GeDglbBOMJrDBw9S",
  content: "_1WPVCAg1EyfGv2B_FJqVeQ",
  contentItem: "_1ARjXQw-_8avbwYcyo8cZK"
};

/***/ },

/***/ "./src/unpacked/module-4966.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4966.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-86.js */ "./node_modules/core-js3/modules/es.array.index-of.js");
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-48.js */ "./node_modules/core-js3/modules/es.array.slice.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
__webpack_require__(/*! unpacked/module-98.js */ "./node_modules/core-js3/modules/es.object.entries.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-316.js */ "./node_modules/core-js3/modules/es.object.values.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-137.js */ "./node_modules/core-js3/modules/es.string.split.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/slicedToArray */ "./src/utils/babel-helpers/slicedToArray.js"));
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module47 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module49 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-447.js */ "./src/unpacked/module-447.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-857.js */ "./src/unpacked/module-857.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module13 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-195.js */ "./src/unpacked/module-195.js"));
var _module14 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Clusters/ClusterTitle */ "./src/components/Clusters/ClusterTitle.js"));
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _module15 = _interopRequireWildcard(__webpack_require__(/*! stores/quota */ "./src/stores/quota.js"));
var _module16 = _interopRequireWildcard(__webpack_require__(/*! stores/storageClass */ "./src/stores/storageClass.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1413.js */ "./src/unpacked/module-1413.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1412.js */ "./src/unpacked/module-1412.js"));
var _Module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4967.js */ "./src/unpacked/module-4967.js"));
var _module17 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4969.js */ "./src/unpacked/module-4969.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module96 = (0, _recoverInterop.__recoverInterop)(_module2);
const module31 = (0, _recoverInterop.__recoverInterop)(_module3);
const module36 = (0, _recoverInterop.__recoverInterop)(_module4);
const module37 = (0, _recoverInterop.__recoverInterop)(_module5);
const module55 = (0, _recoverInterop.__recoverInterop)(_module6);
const module56 = (0, _recoverInterop.__recoverInterop)(_module7);
const module51 = (0, _recoverInterop.__recoverInterop)(_module8);
const module14 = (0, _recoverInterop.__recoverInterop)(_module9);
const module3 = (0, _recoverInterop.__recoverInterop)(_module0);
const module26 = (0, _recoverInterop.__recoverInterop)(_module1);
const module447 = (0, _recoverInterop.__recoverInterop)(_module10);
const module857 = (0, _recoverInterop.__recoverInterop)(_module11);
const module63 = (0, _recoverInterop.__recoverInterop)(_module12);
const module195 = (0, _recoverInterop.__recoverInterop)(_module13);
const module186 = (0, _recoverInterop.__recoverInterop)(_module14);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module816 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module886 = (0, _recoverInterop.__recoverInterop)(_module15);
const module867 = (0, _recoverInterop.__recoverInterop)(_module16);
const Module1413 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module1412 = (0, _recoverInterop.__recoverInterop)(_Module4);
const Module4967 = (0, _recoverInterop.__recoverInterop)(_Module5);
const module4969 = (0, _recoverInterop.__recoverInterop)(_module17);
let o;
const x = ["limits.cpu", "limits.memory", "pods"];
const L = ["requests.storage", "persistentvolumeclaims"];
const U = "storageclass.storage.k8s.io/requests.storage";
const Y = "storageclass.storage.k8s.io/persistentvolumeclaims";
const F = (0, _module49.inject)("rootStore")(o = (0, _module49.observer)(o = (0, _action.trigger)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...n_1) {
    let e;
    module36(this, a);
    e = r.call(this, ...n_1);
    e.store = new module886();
    e.storageClassStore = new module867();
    e.state = {
      isFold: true
    };
    e.showEdit = function () {
      const e_props = e.props;
      const {
        namespace,
        cluster,
        workspace
      } = e_props;
      e.trigger("project.quota.edit", {
        detail: {
          name: namespace,
          namespace,
          cluster: cluster.name,
          workspace
        },
        success: e.fetchData,
        isFederated: true
      });
    };
    e.toggleFold = function () {
      e.setState(function (e) {
        return {
          isFold: !e.isFold
        };
      });
    };
    e.fetchData = function () {
      const e_props = e.props;
      const {
        namespace,
        cluster
      } = e_props;
      e.store.fetch({
        namespace,
        cluster: cluster.name
      });
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      const cluster = this.props.cluster;
      this.fetchData();
      this.storageClassStore.fetchList({
        cluster: cluster.name
      });
    }
  }, {
    key: "render",
    value: function () {
      const _this = this;
      const isFold = this.state.isFold;
      const props = this.props;
      const {
        cluster,
        canEdit
      } = props;
      return /*#__PURE__*/React.createElement(Module790, null, /*#__PURE__*/React.createElement("div", {
        className: module4969.cluster
      }, /*#__PURE__*/React.createElement(Module816, {
        cluster: cluster,
        theme: "light"
      })), canEdit && /*#__PURE__*/React.createElement("div", {
        className: module4969.actions
      }, /*#__PURE__*/React.createElement(module186.Button, {
        onClick: this.showEdit
      }, t("EDIT_QUOTAS"))), /*#__PURE__*/React.createElement("div", {
        className: module3(module4969.content, module31({}, module4969.fold, isFold))
      }, this.items.map(e => /*#__PURE__*/React.createElement(Module4967, e))), this.storageClassResource.map(e => {
        const t = e.name.indexOf("requests.storage") !== -1;
        let e_used = e.used;
        let e_total = e.total;
        if (t && module195(e.used)) {
          e_used = (0, _index.memoryFormat)(e.used, "Gi");
        }
        if (t && module195(e.total)) {
          e_total = (0, _index.memoryFormat)(e.total, "Gi");
        }
        return /*#__PURE__*/React.createElement(Module1413, _extends({
          iconName: "storage"
        }, e, {
          used: e_used,
          total: e_total
        }));
      }), !module63(this.relateStorageClass) && Object.entries(this.relateStorageClass).map(t => {
        const r = module96(t, 2);
        const a = r[0];
        const data = r[1];
        return /*#__PURE__*/React.createElement(Module1412, {
          key: a,
          name: a,
          data: data,
          allStorageClass: _this.allStorageClass
        });
      }), this.items.length > 3 && /*#__PURE__*/React.createElement("div", {
        className: module4969.folder
      }, /*#__PURE__*/React.createElement(module186.Button, {
        icon: isFold ? "chevron-down" : "chevron-up",
        onClick: this.toggleFold
      }, isFold ? t("UNFOLD") : t("FOLD"))));
    }
  }, {
    key: "allSpec",
    get: function () {
      const data = this.store.data;
      const t = module26(data, "hard", {});
      const r = Object.values(_constants.QUOTAS_MAP).map(e => e.name);
      const a = Object.keys(t).filter(e => r.indexOf(e) === -1).map(e => [e, {
        name: e,
        type: "userDefined"
      }]);
      return Object.entries(_constants.QUOTAS_MAP).concat(a).map(t => {
        const a = module96(t, 2);
        const n = a[0];
        const o = a[1];
        return {
          key: n,
          name: n,
          total: module26(data, `hard["${o.name}"]`),
          used: module26(data, `used["${o.name}"]`, 0),
          left: module26(data, `left["${o.name}"]`),
          type: o?.type ?? "system"
        };
      }).filter(({
        total,
        used,
        name
      }) => !(!total && !Number(used) && x.indexOf(name) === -1));
    }
  }, {
    key: "allStorageClass",
    get: function () {
      return module14.toJS(this.storageClassStore.list.data);
    }
  }, {
    key: "items",
    get: function () {
      return this.allSpec.filter(e => e.name.indexOf(L[0]) === -1 && e.name.indexOf(L[1]) === -1);
    }
  }, {
    key: "storageLimit",
    get: function () {
      return this.allSpec.filter(e => e.name.indexOf(L[0]) !== -1 || e.name.indexOf(L[1]) !== -1);
    }
  }, {
    key: "storageClassResource",
    get: function () {
      const e = module14.toJS(this.store.data);
      const {
        hard,
        used
      } = e;
      return L.map(e => {
        const a = module26(hard, [e], e.includes("claims") ? "0" : "0Gi");
        const n = module26(used, [e], e.includes("claims") ? "0" : "0Gi");
        const o = e.includes("claims") ? a : (0, _index.memoryFormat)(a, "Gi");
        return {
          key: e,
          name: e,
          total: o > 0 ? e.includes("claims") ? o : `${o}Gi` : undefined,
          used: e.includes("claims") ? n : (0, _index.memoryFormat)(n, "Gi")
        };
      });
    }
  }, {
    key: "relateStorageClass",
    get: function () {
      const e = module14.toJS(this.store.data);
      const t = module26(e, "hard", {});
      const r = module26(e, "used", {});
      const a = Object.entries(t).filter(e => {
        const t = module96(e, 1)[0];
        return module447(t, U) || module447(t, Y);
      }).map(e => {
        const t = module96(e, 2);
        const r = t[0];
        const a = t[1];
        return module31({}, r, a);
      });
      const n = a.map(e => {
        const t = Object.keys(e)[0];
        return module31({}, t, module26(r, t));
      });
      const o = {
        total: module61(a),
        used: module61(n)
      };
      if (o.total.length > 0) {
        let l;
        const s = module857(module61(o.total), function (e) {
          return Object.keys(e)[0].split(".").slice(1).join(".");
        });
        l = {};
        module31(l, U, module26(s, [U], []).map(e => {
          const t = Object.keys(e)[0];
          const r = o.used.filter(e => Object.keys(e)[0] === t)[0];
          return {
            name: t,
            total: Object.values(e)[0],
            used: Object.values(r)[0]
          };
        }));
        module31(l, Y, module26(s, [Y], []).map(e => {
          const t = Object.keys(e)[0];
          const r = o.used.filter(e => Object.keys(e)[0] === t)[0];
          return {
            name: t,
            total: Object.values(e)[0],
            used: Object.values(r)[0]
          };
        }));
        return l;
      }
      return {};
    }
  }]);
  return a;
})(_module47.Component)) || o) || o) || o;
var _default = exports["default"] = F;

/***/ },

/***/ "./src/unpacked/module-4967.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4967.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-86.js */ "./node_modules/core-js3/modules/es.array.index-of.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
__webpack_require__(/*! unpacked/module-190.js */ "./node_modules/core-js3/modules/es.number.to-fixed.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-64.js */ "./node_modules/core-js3/modules/es.string.replace.js");
__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-159.js */ "./src/unpacked/module-159.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Bar */ "./src/components/Base/Bar.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4968.js */ "./src/unpacked/module-4968.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module159 = (0, _recoverInterop.__recoverInterop)(_module);
const module186 = (0, _recoverInterop.__recoverInterop)(_module2);
const Module1043 = (0, _recoverInterop.__recoverInterop)(_Module);
const module4968 = (0, _recoverInterop.__recoverInterop)(_module3);
function _default({
  name,
  total,
  used,
  type
}) {
  let m = 0;
  if (name === "limits.cpu" || name === "requests.cpu") {
    if (total) {
      m = Number((0, _index.cpuFormat)(used)) / Number((0, _index.cpuFormat)(total));
      used = `${(0, _index.cpuFormat)(used)} Core`;
      total = `${(0, _index.cpuFormat)(total)} Core`;
    }
  } else if (name === "limits.memory" || name === "requests.memory") {
    if (total) {
      m = Number((0, _index.memoryFormat)(used)) / Number((0, _index.memoryFormat)(total));
      used = `${(0, _index.memoryFormat)(used, "Gi")} Gi`;
      total = `${(0, _index.memoryFormat)(total, "Gi")} Gi`;
    }
  } else if (total) {
    m = Number(used) / Number(total);
  }
  m = Math.min(Math.max(m, 0), 1);
  const h = name.indexOf("gpu") > -1 ? "gpu" : name;
  const v = h === "gpu" ? `${h}.limit` : h;
  const name_1 = name.indexOf("gpu") > -1 ? _constants.ICON_TYPES.gpu : _constants.ICON_TYPES[name] ?? "resource";
  return /*#__PURE__*/React.createElement("div", {
    className: module4968.quota
  }, /*#__PURE__*/React.createElement(module186.Icon, {
    name: name_1,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    className: module4968.item
  }, /*#__PURE__*/React.createElement("div", null, ((e = "", type_1) => {
    if (type_1 !== "userDefined" || e.includes("gpu")) {
      return t(e.replace(/[. ]/g, "_").toUpperCase());
    }
    return e;
  })(v, type)), /*#__PURE__*/React.createElement("p", null, t("RESOURCE_TYPE_SCAP"))), /*#__PURE__*/React.createElement("div", {
    className: module4968.item
  }, /*#__PURE__*/React.createElement("div", null, used), /*#__PURE__*/React.createElement("p", null, t("USED"))), /*#__PURE__*/React.createElement("div", {
    className: module4968.item
  }, /*#__PURE__*/React.createElement("div", null, module159(total) ? t("NO_LIMIT_TCAP") : total), /*#__PURE__*/React.createElement("p", null, t("RESOURCE_LIMIT"))), /*#__PURE__*/React.createElement("div", {
    className: module4968.item,
    style: {
      flex: 3
    }
  }, /*#__PURE__*/React.createElement("div", null, t("USAGE")), /*#__PURE__*/React.createElement(Module1043, {
    value: Math.min(m, 1),
    className: module4968.bar,
    rightText: total ? "" : t("NO_LIMIT_TCAP"),
    text: `${t("USED")} ${Number((100 * m).toFixed(2))}%`
  })));
}
;

/***/ },

/***/ "./src/unpacked/module-4968.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4968.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  quota: "_3aPySvZFwKu_aUOuXKtt74",
  item: "_1I77wNxk4MpwyW4BbGhuWc",
  bar: "_20tiwfV8cet9kU4Rdqy-5W"
};

/***/ },

/***/ "./src/unpacked/module-4969.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4969.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  cluster: "_367EWtp2wSigDOnEmf2wJ1",
  content: "_3viW1x9EZrOJRuO9ZV0ET3",
  fold: "_1NbZfknGRDsuW3_iIyJJqu",
  actions: "oVUaKu42SlFyUhxdx-1fg",
  folder: "VIGCh0w9Q5Nq0WhR95pi-"
};

/***/ },

/***/ "./src/unpacked/module-4970.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4970.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  title: "_20BGuNk4qt2X7yCCXLVwpk"
};

/***/ },

/***/ "./src/unpacked/module-4972.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4972.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module25 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-74.js */ "./src/unpacked/module-74.js"));
var _module29 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Switch */ "./src/components/Base/Switch.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Modal */ "./src/components/Base/Modal.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/federated */ "./src/stores/federated.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4973.js */ "./src/unpacked/module-4973.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module3 = (0, _recoverInterop.__recoverInterop)(_module6);
const module26 = (0, _recoverInterop.__recoverInterop)(_module7);
const module74 = (0, _recoverInterop.__recoverInterop)(_module8);
const module186 = (0, _recoverInterop.__recoverInterop)(_module9);
const Module852 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module788 = (0, _recoverInterop.__recoverInterop)(_Module3);
const module437 = (0, _recoverInterop.__recoverInterop)(_module0);
const module4973 = (0, _recoverInterop.__recoverInterop)(_module1);
let o;
const O = (0, _module29.observer)(o = (Component_1 => {
  module55(a, Component_1);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...n) {
    let e;
    module36(this, a);
    e = r.call(this, ...n);
    e.state = {
      showCloseConfirm: false
    };
    e.store = new module437({
      module: "namespaces"
    });
    e.handleSwitch = function () {
      const detail = e.store.detail;
      if (module26(detail, 'labels["logging.kubesphere.io/logsidecar-injection"]') === "enabled") {
        return e.setState({
          showCloseConfirm: true
        });
      }
      return e.handleToggle();
    };
    e.handleToggle = function () {
      const detail = e.store.detail;
      const r = module26(detail, 'labels["logging.kubesphere.io/logsidecar-injection"]') === "enabled";
      const a = {
        metadata: {
          labels: {
            "logging.kubesphere.io/logsidecar-injection": r ? "disabled" : "enabled"
          }
        }
      };
      module74(a, 'spec.template.metadata.labels["logging.kubesphere.io/logsidecar-injection"]', r ? "disabled" : "enabled");
      e.store.patch(detail, a).then(() => {
        e.hideCloseConfirm();
        e.store.fetchDetail({
          name: detail.name,
          namespace: detail.name
        });
      });
    };
    e.hideCloseConfirm = function () {
      e.setState({
        showCloseConfirm: false
      });
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      const namespace = this.props.namespace;
      this.store.fetchDetail({
        namespace,
        name: namespace
      });
    }
  }, {
    key: "render",
    value: function () {
      const showCloseConfirm = this.state.showCloseConfirm;
      const detail = this.store.detail;
      const checked = module26(detail, 'labels["logging.kubesphere.io/logsidecar-injection"]') === "enabled";
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Module790, {
        title: t("COLLECT_LOGS_ON_VOLUMES")
      }, /*#__PURE__*/React.createElement("div", {
        className: module4973.header
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "log",
        size: 40
      }), /*#__PURE__*/React.createElement("div", {
        className: module4973.item
      }, /*#__PURE__*/React.createElement("div", null, checked ? t("ENABLED") : t("DISABLED")), /*#__PURE__*/React.createElement("p", null, t("LOG_COLLECTION_ENABLED_DESC"))), this.canEdit && /*#__PURE__*/React.createElement("div", {
        className: module3(module4973.item, "text-right")
      }, /*#__PURE__*/React.createElement(Module852, {
        type: "control",
        text: checked ? t("ENABLED") : t("DISABLED"),
        onChange: this.handleSwitch,
        checked: checked
      })))), this.canEdit && /*#__PURE__*/React.createElement(Module788, {
        visible: showCloseConfirm,
        onOk: this.handleToggle,
        onCancel: this.hideCloseConfirm,
        width: 520,
        hideHeader: true
      }, /*#__PURE__*/React.createElement("div", {
        className: module4973.modalHeader
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "question",
        size: 40,
        color: {
          primary: "#fff",
          secondary: "#329dce"
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: module4973.title
      }, /*#__PURE__*/React.createElement("div", null, t("DISABLE_LOG_COLLECTION")))), /*#__PURE__*/React.createElement("div", null, t("DISABLE_LOG_COLLECTION_TIP"))));
    }
  }, {
    key: "canEdit",
    get: function () {
      return this.props.actions.includes("manage");
    }
  }]);
  return a;
})(_module25.Component)) || o;
var _default = exports["default"] = O;

/***/ },

/***/ "./src/unpacked/module-4973.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4973.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  header: "KfRfc7XHnyKrIMG2WD7yY",
  item: "_1gCe0R2KaOu3PvBcpH-MNm",
  modalHeader: "_2Lsdh1r2v7JH_39s7jt8FO",
  title: "_1t58beq3U0qAO0Dd6Xwakq"
};

/***/ },

/***/ "./src/unpacked/module-4981.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4981.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "_31OJuz5r5AHhbccBVYa6H5"
};

/***/ },

/***/ "./src/unpacked/module-4982.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4982.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  cluster: "_2BNy9Cg2ZRIap12UQoiAE1",
  content: "_1rbLrTDiFx5rAIDJqkd_qJ",
  empty: "ZbMlb4dh66orSttwdSUBZ"
};

/***/ },

/***/ "./src/unpacked/module-4986.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4986.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  card: "_3wmUeEURYvA5xtwTXjVHRT",
  content: "_3jNrdQ3d7V_wvVOr60E7xz",
  path: "_3l9pH5J25i4CyckpZ8-NCs",
  access: "_3VXXBX7de0ACzsnT4tO93F",
  tip: "n2-K-kA40a2F9ikKcSTbB"
};

/***/ },

/***/ "./src/unpacked/module-4987.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4987.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "_1jxGr6tCLB26gXUGEygyp1"
};

/***/ },

/***/ "./src/unpacked/module-4988.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4988.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  header: "_1Hq3ZUKxyIGwPN95tbYvFw",
  more: "IOiz0R3Znlki4BfPZ9-4r",
  cluster: "_1SQ_xP5Rc1PTPxVQJxR35j",
  content: "_766CB2j_qtHIG_WF7UTpG"
};

/***/ },

/***/ "./src/unpacked/module-4990.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4990.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "_yrS4mpDD17eVrLFVo423",
  name: "hdUK_2xviMy_yssn3iCip",
  options: "_3shur80ViRlCoFi-pmKPuf",
  option: "_18gh_7CC4MN2fi8DcjaJLC",
  indicator: "rQf5ufF7H8AvO2rPG2nRX"
};

/***/ },

/***/ "./src/unpacked/module-4991.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4991.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  main: "_1fa3VMP8C8ZSul8tBwMN62",
  loading: "_2zBr9xlut9cRpsys4HZOdF",
  tag: "_2NvG0X9ZEkRQC4EuGS87HJ",
  cardHeader: "_23xEZfpVkA0aQEoQX1gkTt",
  operations: "Ik7Mp90rKsS8V-lG71sT6",
  timeSelect: "_2e783591o4U507-s5muwJg"
};

/***/ },

/***/ "./src/unpacked/module-4993.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4993.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  operations: "_2fBARiAJfc0bUaFE4VVXcr",
  timeSelect: "_7qmxRpeY2a6F31i4lij_w",
  tag: "_3CFHSBCbScJIVlfHH4u_w7"
};

/***/ },

/***/ "./src/unpacked/module-4997.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4997.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-828.js */ "./node_modules/core-js3/modules/es.array.fill.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module34 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-801.js */ "./src/unpacked/module-801.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! components/Clusters/ClusterTitle */ "./src/components/Clusters/ClusterTitle.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-805.js */ "./src/unpacked/module-805.js"));
var _status = __webpack_require__(/*! utils/status */ "./src/utils/status.js");
var _module12 = _interopRequireWildcard(__webpack_require__(/*! stores/websocket */ "./src/stores/websocket.js"));
var _module13 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module14 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1252.js */ "./src/unpacked/module-1252.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module41 = (0, _recoverInterop.__recoverInterop)(_module);
const module44 = (0, _recoverInterop.__recoverInterop)(_module2);
const module36 = (0, _recoverInterop.__recoverInterop)(_module3);
const module37 = (0, _recoverInterop.__recoverInterop)(_module4);
const module55 = (0, _recoverInterop.__recoverInterop)(_module5);
const module56 = (0, _recoverInterop.__recoverInterop)(_module6);
const module51 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const module26 = (0, _recoverInterop.__recoverInterop)(_module9);
const module801 = (0, _recoverInterop.__recoverInterop)(_module0);
const module186 = (0, _recoverInterop.__recoverInterop)(_module1);
const module816 = (0, _recoverInterop.__recoverInterop)(_module10);
const module805 = (0, _recoverInterop.__recoverInterop)(_module11);
const module325 = (0, _recoverInterop.__recoverInterop)(_module12);
const module3 = (0, _recoverInterop.__recoverInterop)(_module13);
const module1252 = (0, _recoverInterop.__recoverInterop)(_module14);
let u;
const R = (0, _module34.observer)(u = (e => {
  module55(a, e);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(...n_1) {
    let e;
    module36(this, a);
    e = r.call(this, ...n_1);
    e.websocket = new module325();
    e.state = {
      replicas: module26(e.props, "workload.podNums", 0),
      weight: e.getWeight
    };
    e.triggerWeightChange = module801(module44(module41.mark(function* t() {
      let r;
      let a;
      let n;
      let o;
      r = e.props;
      a = r.cluster;
      n = r.onWeightChange;
      o = e.state.weight;
      yield n(a.name, o);
    })), 1000);
    e.handleAdd = function () {
      e.setState(function (e) {
        return {
          weight: e.weight + 1
        };
      }, e.triggerWeightChange);
    };
    e.handleSubStract = function () {
      e.setState(function ({
        weight
      }) {
        return {
          weight: Math.max(weight - 1, 0)
        };
      }, e.triggerWeightChange);
    };
    return e;
  }
  module37(a, [{
    key: "componentDidUpdate",
    value: function (e) {
      if (!(module26(this.props.workload, "name") === module26(e.workload, "name") && module26(this.props.workload, "podNums") === module26(e.workload, "podNums"))) {
        this.setState({
          replicas: module26(this.props, "workload.podNums", 0)
        });
        this.unInitWebsocket();
        this.initWebsocket();
      }
    }
  }, {
    key: "componentDidMount",
    value: function () {
      this.initWebsocket();
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.unInitWebsocket();
    }
  }, {
    key: "initWebsocket",
    value: function () {
      const _this = this;
      const props = this.props;
      const {
        workload,
        store
      } = props;
      const n = store.resourceStore.getWatchUrl(workload);
      if (workload && n) {
        this.websocket.watch(n);
        this.disposer = module14.reaction(function () {
          return _this.websocket.message;
        }, function (e) {
          if (e.type === "MODIFIED") {
            store.updateResource(workload.cluster, e.object);
          }
        });
      }
    }
  }, {
    key: "unInitWebsocket",
    value: function () {
      if (this.disposer) {
        this.disposer();
      }
      this.websocket.close();
    }
  }, {
    key: "render",
    value: function () {
      const {
        cluster,
        workload = {},
        store
      } = this.props;
      const replicas = this.state.replicas;
      const workload_podNums = workload.podNums;
      const l = workload_podNums === undefined ? 0 : workload_podNums;
      const workload_readyPodNums = workload.readyPodNums;
      const s = workload_readyPodNums === undefined ? 0 : workload_readyPodNums;
      const f = l - s;
      const d = (0, _status.getWorkloadStatus)(workload, store.resourceStore.module);
      const {
        status,
        reason
      } = d;
      return module553.default.createElement("div", {
        className: module3(module1252.scheduleCluster)
      }, module553.default.createElement(module816, {
        cluster,
        tagClass: "float-right",
        theme: "light"
      }), module553.default.createElement("div", {
        className: module1252.bottom
      }, module553.default.createElement("div", {
        className: module1252.replicas
      }, module553.default.createElement("span", {
        className: module1252.readyNum
      }, s), " /", " ", module553.default.createElement("span", {
        className: module1252.readyNum
      }, replicas), " ", reason && module553.default.createElement(module805, {
        status,
        data: workload
      })), module553.default.createElement("div", {
        className: module1252.pods
      }, Array(Math.min(l, 6)).fill("").map((e, t) => module553.default.createElement("img", {
        key: t,
        src: t < f ? "/assets/pod-waiting.svg" : "/assets/pod-ready.svg",
        alt: ""
      })), l > 6 && module553.default.createElement(module186.Icon, {
        name: "more",
        className: module1252.more,
        size: 28,
        color: f > 6 ? {
          primary: "#f5a623",
          secondary: "#f5a623"
        } : {
          primary: "#479e88",
          secondary: "#479e88"
        }
      }))), module553.default.createElement("div", {
        className: module1252.weight,
        onClick: this.stopPropagation
      }, module553.default.createElement(module186.Icon, {
        name: "add",
        type: "light",
        size: 20,
        clickable: true,
        onClick: this.handleAdd
      }), module553.default.createElement("span", {
        className: module1252.value
      }, module553.default.createElement("span", {
        className: module1252.spanText
      }, this.getWeight), module553.default.createElement("span", {
        className: module1252.subText
      }, " ", t("WEIGHT"))), module553.default.createElement(module186.Icon, {
        name: "substract",
        type: "light",
        size: 20,
        clickable: true,
        onClick: this.handleSubStract
      })));
    }
  }, {
    key: "getWeight",
    get: function () {
      const props = this.props;
      const {
        store,
        cluster
      } = props;
      return module26(store.deployedScheduleTemplate, `spec.clusters.${cluster.name}.weight`, 0);
    }
  }]);
  return a;
})(module553.Component)) || u;
var _default = exports["default"] = R;

/***/ },

/***/ "./src/unpacked/module-4998.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4998.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-109.js */ "./src/unpacked/module-109.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-193.js */ "./node_modules/core-js3/modules/es.regexp.test.js");
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! components/Base/NotifyConfirm */ "./src/components/Base/NotifyConfirm.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1252.js */ "./src/unpacked/module-1252.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module1101 = (0, _recoverInterop.__recoverInterop)(_module6);
const module1252 = (0, _recoverInterop.__recoverInterop)(_module7);
const m = (e => {
  module55(a, e);
  var r = (e => {
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
      let r;
      const a = module51(e);
      if (t) {
        const n = module51(this).constructor;
        r = Reflect.construct(a, arguments, n);
      } else {
        r = a.apply(this, arguments);
      }
      return module56(this, r);
    };
  })(a);
  function a(e) {
    let t;
    module36(this, a);
    t = r.call(this, e);
    t.handleScale = function (e) {
      const value = e.target.value;
      if (/^\+?[1-9][0-9]*$/.test(value) || value === "") {
        t.setState({
          desire: value,
          seconds: 5
        }, function () {
          t.showConfirm();
        });
      }
    };
    t.showConfirm = function () {
      t.setState({
        showConfirm: true
      }, function () {
        t.startTimer();
      });
    };
    t.startTimer = function () {
      if (t.timer) {
        t.stopTimer();
      }
      t.updateTime();
    };
    t.stopTimer = function () {
      clearTimeout(t.timer);
      t.timer = null;
    };
    t.updateTime = function () {
      const seconds = t.state.seconds;
      t.timer = setTimeout(() => {
        if (seconds > 0) {
          t.setState({
            seconds: seconds - 1
          }, function () {
            t.updateTime();
          });
        } else {
          t.handleConfirm();
          t.handleCancel();
        }
      }, 1000);
    };
    t.handleConfirm = function () {
      t.props.onChange(t.state.desire);
      t.hideConfirm();
    };
    t.handleCancel = function () {
      t.setState({
        desire: t.props.desire
      }, function () {
        t.hideConfirm();
      });
    };
    t.hideConfirm = function () {
      t.setState({
        showConfirm: false
      }, function () {
        t.stopTimer();
      });
    };
    const e_desire = e.desire;
    t.state = {
      prevPropDesire: e_desire,
      desire: e_desire,
      seconds: 5,
      showConfirm: false
    };
    return t;
  }
  module37(a, [{
    key: "componentWillUnmount",
    value: function () {
      this.stopTimer();
    }
  }, {
    key: "render",
    value: function () {
      const name = this.props.name;
      const state = this.state;
      const {
        desire,
        showConfirm,
        seconds
      } = state;
      return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module1252.replicasInput
      }, module553.default.createElement("input", {
        name,
        value: desire,
        onChange: this.handleScale
      })), module553.default.createElement(module1101, {
        visible: showConfirm,
        width: 400,
        title: t("ADJUST_REPLICAS"),
        content: t.html("REPLICAS_SCALE_NOTIFY_CONTENT", {
          num: Number(desire)
        }),
        cancelText: t("REPLICAS_SCALE_NOTIFY_CANCEL"),
        confirmText: t("REPLICAS_SCALE_NOTIFY_CONFIRM", {
          seconds
        }),
        onCancel: this.handleCancel,
        onConfirm: this.handleConfirm
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function (e, t) {
      if (e.desire !== t.prevPropDesire) {
        a = e.desire;
        const r = Number(a || 0);
        return {
          prevPropDesire: r,
          desire: r
        };
      }
      var a;
      return null;
    }
  }]);
  return a;
})(module553.Component);
var _default = exports["default"] = m;

/***/ },

/***/ "./src/unpacked/module-4999.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4999.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  deployment_codeResource: "_2v3CnaMI4WQFjBr1rH10IK"
};

/***/ },

/***/ "./src/unpacked/module-5000.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5000.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  item: "_3xQ6tn2XzgaF-fxJRZeGll",
  more: "_2kE7aMEkAa23Y-oMSAo89T"
};

/***/ },

/***/ "./src/unpacked/module-5005.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5005.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  item: "_1PQmBPdox2JqW3SmBv5687",
  info: "_11C0kbv64rWlWaLgQxMISN",
  record: "_2Jz3fdG2xJbV9Rhnq2hW_s",
  text: "_3M8bcgDVHqm5yDxsiosn2v",
  base: "_1kgonhTfjWg8Iwy7F9DQpf"
};

/***/ },

/***/ "./src/unpacked/module-5009.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5009.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  access: "_1bjGKOVZKOXRIF6nQlyOhA"
};

/***/ },

/***/ "./src/unpacked/module-5013.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5013.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  portsWrapper: "_1Pcu-345c_wl9yf38ivhQo",
  ports: "LDS1ia--XQVpIU-3yHPn5",
  port: "_1zJo48cJRGI6RNUL5es3tt",
  protocol: "_18xFWD0Op7w-JssVhsXPea",
  access: "VDdVC7yvlMXTJWX89VPiu"
};

/***/ },

/***/ "./src/unpacked/module-5014.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5014.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  header: "_2wGtWVSqTnbMZptbrMvl8t",
  more: "_3nn1DlOJ8i93Lx92yk96rg",
  cluster: "dj9gdTQUx6gxxPOYtRxfg",
  icon: "_1JDtWb_pMP87aE1hTCyDVp",
  indicator: "_1C_oKLQioGrnjsLHfgKJZ",
  content: "_1-RHEin7EVlSnYzIKUJx_Q",
  group: "or5rEBIKrfmFv3_DJ4syj"
};

/***/ },

/***/ "./src/unpacked/module-5015.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5015.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  title: "_3U-BsUjQkTwiUO_R0nKbi0"
};

/***/ },

/***/ "./src/unpacked/module-5021.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5021.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  annotations: "_2_w63cUNkbWlOS0ZfqQkUh"
};

/***/ },

/***/ "./src/unpacked/module-5022.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5022.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  header: "_2cRBeNhJ-QdGg_gm6Odlxt",
  more: "_2wydp9JkD2wSruuza5W-jL",
  cluster: "_2JQdd4abYvPgPiCpTe_tDE",
  icon: "_1wTNTYrqEQ2DbwCADkOyII",
  indicator: "_3ydyXdOIJE8B8VMPMX2bdU",
  content: "_1E9FTzaLJLWLHtCczzZhqj",
  rules: "_3spDU78xh15rAxlioee3wW"
};

/***/ },

/***/ "./src/unpacked/module-5027.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5027.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  header: "_3Z4KUGmNUgVr4-y-komZ9K",
  space: "_2H48QuNUOvOnGq50OPjASq",
  description: "_3p6pmqlaHGqn0QYisabFSf",
  card: "_3fv7ZUwuOo2YeImgsK-K5a",
  cluster: "SWO2uJpaFLpUCiYol7TtI"
};

/***/ },

/***/ "./src/unpacked/module-5028.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5028.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  ports: "_3b2RR6bcGe40UHeXGC9Br0",
  card: "_1EGCXddyEqqsPWIeiIdsg4",
  content: "_2XcnUCITfye82yE9ZTWKZB",
  title: "zeaK6s92HSCAqhu-YYqlZ",
  path: "_2C-Kf038TvUyk7wvxs1_AR",
  access: "_3yZMwNYFSKHnpiWv7qAqC3"
};

/***/ },

/***/ "./src/unpacked/module-5031.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5031.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  cluster: "_1KjuQ8goIKUHRa3R-iuBX4",
  content: "_3XpAsS8jkQ4Fw6ny0rzFEZ"
};

/***/ },

/***/ "./src/unpacked/module-5032.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5032.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  ports: "_1W6aOQmbR_TDUl-4XI5cqb",
  card: "eXYzvyUJJVLQJMgIXqDJX",
  content: "ANDh5NFl5HpZ-esvdF1mg",
  title: "_3MWtGl2UjycAya8PZmy1Q-",
  path: "_2loC4j2Lt1B_2UqWFzCvrn",
  access: "_19sCDCBcH0h9bYP-ViNz9Y"
};

/***/ },

/***/ "./src/unpacked/module-5036.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5036.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  defaultWrapper: "_2dy4CtwnVPBdVDSZHW9BOl",
  tlsWrapper: "iJYavjSaC9ppprl7BQSi8",
  tlsItem: "_2v7AIMJ0uI9fm8cKo5w1-x",
  imageWrapper: "_1Uipq-ALr1lKHarcyPzNTP"
};

/***/ },

/***/ "./src/unpacked/module-5040.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5040.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "_28vsYz12ZPwpoPNgzqPOo9",
  value: "-jWVKnn0uXD_hecvNvLnq"
};

/***/ }

}]);