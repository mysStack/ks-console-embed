"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_components_Inputs_NumberInput_js"],{

/***/ "./src/chunks/common/module-2090.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2090.js ***!
  \******************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  withUnit: "_2d32hkfOO3cYnvAM-MUswq",
  unit: "_29q45C0afPynal54hwpQfk",
  buttonWrapper: "Xtv_UB0AENviuvA8Y0gqH",
  iconUp: "_3YXrySn0XAnhuGzYYrXWeS",
  iconDown: "_3MtBoqy8WlB29Jb0N9EU1X"
};

/***/ },

/***/ "./src/components/Inputs/NumberInput.js"
/*!**********************************************!*\
  !*** ./src/components/Inputs/NumberInput.js ***!
  \**********************************************/
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
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-110.js */ "./node_modules/core-js3/modules/es.string.ends-with.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-436.js */ "./src/unpacked/module-436.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-193.js */ "./node_modules/core-js3/modules/es.regexp.test.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-159.js */ "./src/unpacked/module-159.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-471.js */ "./src/unpacked/module-471.js"));
var _module42 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2090.js */ "./src/unpacked/module-2090.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module159 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module471 = (0, _recoverInterop.__recoverInterop)(_module8);
const module1 = (0, _recoverInterop.__recoverInterop)(_module9);
const module3 = (0, _recoverInterop.__recoverInterop)(_module0);
const module186 = (0, _recoverInterop.__recoverInterop)(_module1);
const module2090 = (0, _recoverInterop.__recoverInterop)(_module10);
const S = (Component_1 => {
  module55(r, Component_1);
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
  function r(e) {
    let t;
    module36(this, r);
    t = a.call(this, e);
    t.handleChange = function (e) {
      const t_props = t.props;
      const {
        min,
        max,
        integer
      } = t_props;
      const t_handleBlur = t.handleBlur;
      const value = e.target.value;
      t.setState({
        inputValue: value
      });
      if (value !== "" && value !== "-") {
        if (/^-?\d*\.?\d*$/.test(value)) {
          let i = parseFloat(value);
          if (!isNaN(i)) {
            if (!module159(min) && i < min) {
              i = min;
            }
            if (!module159(max) && i > max) {
              i = max;
            }
            if (!(integer || !value.endsWith(".") && !value.endsWith("0") || i !== parseFloat(value) || `${i}` === value)) {
              i = value;
            }
            if (t_handleBlur) {
              t_handleBlur(i);
            }
          }
        }
      } else {
        t_handleBlur(value);
      }
    };
    t.handleAdd = function () {
      const t_props = t.props;
      const {
        value,
        max,
        onChange
      } = t_props;
      if (module159(max) || value < max) {
        onChange(parseFloat(value) + 1);
      }
    };
    t.handleSubtract = function () {
      const t_props = t.props;
      const {
        value,
        min,
        onChange
      } = t_props;
      if (module159(min) || value > min) {
        onChange(parseFloat(value) - 1);
      }
    };
    t.handleBlur = function (e) {
      const t_props = t.props;
      const {
        onChange,
        unit,
        value
      } = t_props;
      let u = value;
      if (unit) {
        u = module471(value, unit);
      }
      if (!(e === "" || e === "-" || module63(e))) {
        e = parseFloat(e);
      }
      if (parseFloat(e) !== parseFloat(u)) {
        if (isNaN(e) && onChange) {
          onChange("");
        }
        if (!module159(e) && unit) {
          e = `${e}${unit}`;
        }
        if (onChange) {
          onChange(e);
        }
      }
    };
    const {
      value,
      defaultValue,
      unit
    } = e;
    let o = value ?? defaultValue;
    if (unit) {
      o = module471(o, unit);
    }
    t.state = {
      inputValue: o
    };
    return t;
  }
  module37(r, [{
    key: "componentDidUpdate",
    value: function (e) {
      if (e.value !== this.props.value) {
        let t = this.props.value;
        const a = this.props.unit;
        if (a) {
          t = module471(t, a);
        }
        if (parseFloat(this.state.inputValue) !== parseFloat(t)) {
          this.setState({
            inputValue: t
          });
        }
      }
    }
  }, {
    key: "render",
    value: function () {
      const _this = this;
      const props = this.props;
      const {
        className,
        unit,
        showUnit,
        value: _value,
        defaultValue: _defaultValue,
        onChange: _onChange,
        integer,
        controls,
        ...rest
      } = props;
      const f = integer ? /[-0-9]/ : /[-.0-9]/;
      const inputValue = this.state.inputValue;
      const p = {
        type: "text",
        ...rest,
        onKeyPress: function (e) {
          if (!f.test(e.key)) {
            e.preventDefault();
          }
        },
        value: inputValue,
        onChange: this.handleChange,
        onBlur: function () {
          let t = parseFloat(inputValue);
          t = isNaN(t) ? "" : t;
          if (inputValue) {
            _this.setState({
              inputValue: t
            });
          }
        }
      };
      if (unit && showUnit) {
        return /*#__PURE__*/React.createElement("div", {
          className: module3(className, module2090.withUnit)
        }, /*#__PURE__*/React.createElement(module186.Input, p), /*#__PURE__*/React.createElement("span", {
          className: module2090.unit
        }, unit === "core" ? t("CORE_PL") : unit));
      }
      if (controls) {
        return /*#__PURE__*/React.createElement("div", {
          className: module3(className, module2090.withUnit)
        }, /*#__PURE__*/React.createElement(module186.Input, p), /*#__PURE__*/React.createElement("div", {
          className: module2090.buttonWrapper
        }, /*#__PURE__*/React.createElement(module186.Icon, {
          className: module2090.iconUp,
          name: "chevron-up",
          clickable: true,
          onClick: this.handleAdd
        }), /*#__PURE__*/React.createElement(module186.Icon, {
          className: module2090.iconDown,
          name: "chevron-down",
          clickable: true,
          onClick: this.handleSubtract
        })));
      }
      return /*#__PURE__*/React.createElement(module186.Input, _extends({
        className: className
      }, p));
    }
  }]);
  return r;
})(_module42.Component);
S.propTypes = {
  unit: module1.string,
  showUnit: module1.bool,
  value: module1.oneOfType([module1.string, module1.number]),
  defaultValue: module1.oneOfType([module1.string, module1.number]),
  min: module1.number,
  max: module1.number,
  integer: module1.bool,
  controls: module1.bool,
  onChange: module1.func
};
S.defaultProps = {
  unit: "",
  showUnit: false,
  integer: false,
  controls: false,
  onChange: function () {}
};
var _default = exports["default"] = S;

/***/ },

/***/ "./src/unpacked/module-2090.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2090.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2090 */ "./src/chunks/common/module-2090.js"));
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

/***/ }

}]);