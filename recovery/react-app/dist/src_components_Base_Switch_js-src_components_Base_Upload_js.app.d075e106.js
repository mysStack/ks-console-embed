"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_components_Base_Switch_js-src_components_Base_Upload_js"],{

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

/***/ "./src/chunks/common/module-2399.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2399.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-249.js */ "./node_modules/core-js3/modules/es.error.cause.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
function _default(e) {
  const t = new window.XMLHttpRequest();
  if (e.onProgress && t.upload) {
    t.upload.onprogress = function (t) {
      if (t.total > 0) {
        t.percent = t.loaded / t.total * 100;
      }
      e.onProgress(t);
    };
  }
  const formData = new FormData();
  e.action = (0, _index.getClusterUrl)(e.action);
  if (e.data) {
    Object.keys(e.data).forEach(t => {
      formData.append(t, e.data[t]);
    });
  }
  formData.append(e.filename, e.file);
  t.onerror = function (t) {
    e.onError(t);
  };
  t.onload = function () {
    if (t.status < 200 || t.status >= 300) {
      return e.onError(((e, t) => {
        const a = `cannot post ${e.action} ${t.status}'`;
        const r = new Error(a);
        r.status = t.status;
        r.method = e.method || "post";
        r.url = e.action;
        return r;
      })(e, t), n(t));
    }
    return e.onSuccess(n(t), t);
  };
  t.open(e.method || "post", e.action, true);
  if (e.withCredentials && "withCredentials" in t) {
    t.withCredentials = true;
  }
  const l = e.headers || {};
  if (l["X-Requested-With"] !== null) {
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  }
  Object.keys(l).forEach(e => {
    t.setRequestHeader(e, l[e]);
  });
  t.send(formData);
  return {
    abort: function () {
      t.abort();
    }
  };
}
;
function n(e) {
  const t = e.responseText || e.response;
  if (!t) {
    return t;
  }
  try {
    return JSON.parse(t);
  } catch (e) {
    return t;
  }
}

/***/ },

/***/ "./src/chunks/common/module-2400.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2400.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-86.js */ "./node_modules/core-js3/modules/es.array.index-of.js");
__webpack_require__(/*! unpacked/module-97.js */ "./node_modules/core-js3/modules/es.array.some.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-64.js */ "./node_modules/core-js3/modules/es.string.replace.js");
__webpack_require__(/*! unpacked/module-137.js */ "./node_modules/core-js3/modules/es.string.split.js");
__webpack_require__(/*! unpacked/module-813.js */ "./node_modules/core-js3/modules/es.string.trim.js");
__webpack_require__(/*! unpacked/module-118.js */ "./src/unpacked/module-118.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-193.js */ "./node_modules/core-js3/modules/es.regexp.test.js");
function _default(e, t) {
  if (e && t) {
    const a = Array.isArray(t) ? t : t.split(",");
    const r = e.name || "";
    const n = e.type || "";
    const l = n.replace(/\/.*$/, "");
    return a.some(e => {
      let t;
      let a;
      const u = e.trim();
      if (u.charAt(0) === ".") {
        t = r.toLowerCase();
        a = u.toLowerCase();
        return t.indexOf(a, t.length - a.length) !== -1;
      }
      if (/\/\*$/.test(u)) {
        return l === u.replace(/\/.*$/, "");
      }
      return n === u;
    });
  }
  return true;
}
;

/***/ },

/***/ "./src/chunks/common/module-2401.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2401.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
function _default(e, t, a) {
  e.forEach(e => {
    (function e(r, n) {
      const l = n || "";
      if (r.isFile) {
        r.file(function (e) {
          if (a(e)) {
            t([e]);
          }
        });
      } else if (r.isDirectory) {
        r.createReader().readEntries(function (t) {
          t.forEach(t => {
            e(t, `${l}${r.name}/`);
          });
        });
      }
    })(e.webkitGetAsEntry());
  });
}
;

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

/***/ "./src/components/Base/Upload.js"
/*!***************************************!*\
  !*** ./src/components/Base/Upload.js ***!
  \***************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Upload/Upload */ "./src/components/Base/Upload/Upload.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module2398 = (0, _recoverInterop.__recoverInterop)(_module);
var _default = exports["default"] = module2398;

/***/ },

/***/ "./src/components/Base/Upload/Upload.js"
/*!**********************************************!*\
  !*** ./src/components/Base/Upload/Upload.js ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-138.js */ "./node_modules/core-js3/modules/es.object.assign.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-109.js */ "./src/unpacked/module-109.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-455.js */ "./src/unpacked/module-455.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2399.js */ "./src/unpacked/module-2399.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2400.js */ "./src/unpacked/module-2400.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2401.js */ "./src/unpacked/module-2401.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module1 = (0, _recoverInterop.__recoverInterop)(_module7);
const module3 = (0, _recoverInterop.__recoverInterop)(_module8);
const module455 = (0, _recoverInterop.__recoverInterop)(_module9);
const module2399 = (0, _recoverInterop.__recoverInterop)(_module0);
const module2400 = (0, _recoverInterop.__recoverInterop)(_module1);
const module2401 = (0, _recoverInterop.__recoverInterop)(_module10);
const E = +new Date();
let b = 0;
function _() {
  b += 1;
  return `upload-${E}-${b}`;
}
const O = (e => {
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
    e.reqs = {};
    e.files = {};
    e.state = {
      uid: _(),
      isDraging: false
    };
    e.onChange = function (t) {
      const files = t.target.files;
      e.uploadFiles(files);
      e.reset();
    };
    e.onClick = function () {
      if (e.fileInput) {
        e.fileInput.click();
      }
    };
    e.onKeyDown = function (t) {
      if (t.key === "Enter") {
        e.onClick();
      }
    };
    e.onFileDrop = function (t) {
      const e_props = e.props;
      const {
        directory,
        accept
      } = e_props;
      t.preventDefault();
      if (t.type !== "dragover") {
        if (t.type !== "dragleave") {
          if (t.type === "drop") {
            e.setState({
              isDraging: false
            });
            const l = function (e) {
              return module2400(e, accept);
            };
            if (directory) {
              module2401(module61(t.dataTransfer.items), e.uploadFiles, l);
            } else {
              const o = module61(t.dataTransfer.files).filter(l);
              e.uploadFiles(o);
            }
          }
        } else {
          e.setState({
            isDraging: false
          });
        }
      } else {
        e.setState({
          isDraging: true
        });
      }
    };
    e.uploadFiles = function (t) {
      const a = module61(t);
      a.forEach(t => {
        const r = Object.assign(t, {
          uid: _()
        });
        e.upload(r, a);
      });
    };
    return e;
  }
  module37(a, [{
    key: "componentDidMount",
    value: function () {
      this.uploaderMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.uploaderMounted = false;
      this.files = {};
      this.abort();
    }
  }, {
    key: "upload",
    value: function (e, t) {
      const _this = this;
      const beforeUpload = this.props.beforeUpload;
      if (!beforeUpload) {
        return setTimeout(() => _this.post(e), 0);
      }
      const n = beforeUpload(e, t);
      if (n && n.then) {
        n.then(t => {
          const r = Object.prototype.toString.call(t);
          if (r === "[object File]" || r === "[object Blob]") {
            return _this.post(t);
          }
          return _this.post(e);
        });
      } else if (n !== false) {
        setTimeout(() => _this.post(e), 0);
      }
      return true;
    }
  }, {
    key: "post",
    value: function (file) {
      const _this = this;
      if (this.uploaderMounted) {
        const a = this.props;
        const {
          data,
          onStart,
          onProgress,
          onSuccess,
          onError,
          action,
          customRequest,
          name,
          headers,
          withCredentials,
          method
        } = a;
        let m = data;
        if (typeof m === "function") {
          m = m(file);
        }
        new Promise(resolve => resolve(typeof action === "function" ? action(file) : action)).then(action_1 => {
          const e_uid = file.uid;
          const i = customRequest || module2399;
          _this.files[e_uid] = file;
          _this.reqs[e_uid] = i({
            file,
            headers,
            withCredentials,
            action: action_1,
            method,
            filename: name,
            data: m,
            onProgress: onProgress ? function (t) {
              onProgress(t, file);
            } : null,
            onSuccess: function (a, n) {
              delete _this.files[e_uid];
              delete _this.reqs[e_uid];
              onSuccess(a, file, n);
            },
            onError: function (a, n) {
              delete _this.reqs[e_uid];
              onError(a, n, file);
            }
          });
          onStart(file);
        });
      }
    }
  }, {
    key: "reset",
    value: function () {
      this.setState({
        uid: _()
      });
    }
  }, {
    key: "resend",
    value: function (e) {
      let t;
      const accept = this.props.accept;
      const r = this.files[e];
      if (r && (t = r, module2400(t, accept))) {
        this.upload(r, [r]);
      }
    }
  }, {
    key: "abort",
    value: function (e) {
      const reqs = this.reqs;
      if (e) {
        if (reqs[e]) {
          reqs[e].abort();
          delete reqs[e];
        }
      } else {
        Object.keys(reqs).forEach(e => {
          if (reqs[e]) {
            reqs[e].abort();
          }
          delete reqs[e];
        });
      }
    }
  }, {
    key: "render",
    value: function () {
      const _this = this;
      const props = this.props;
      const {
        className,
        disabled,
        style,
        multiple,
        accept,
        children,
        directory
      } = props;
      const state = this.state;
      const {
        isDraging,
        uid
      } = state;
      const h = disabled ? {} : {
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        onDrop: this.onFileDrop,
        onDragOver: this.onFileDrop,
        onDragLeave: this.onFileDrop
      };
      return module553.default.createElement("span", {
        ...h,
        className: module3("upload", {
          "upload-dragover": isDraging,
          "upload-disabled": disabled
        }, className),
        role: "button",
        style
      }, module553.default.createElement("input", {
        type: "file",
        ref: function (t) {
          _this.fileInput = t;
        },
        key: uid,
        style: {
          display: "none"
        },
        accept,
        directory: directory ? "directory" : null,
        webkitdirectory: directory ? "webkitdirectory" : null,
        multiple,
        onChange: this.onChange
      }), children);
    }
  }]);
  return a;
})(module553.Component);
O.propTypes = {
  name: module1.string,
  disabled: module1.bool,
  action: module1.oneOfType([module1.string, module1.func]),
  directory: module1.bool,
  onError: module1.func,
  onSuccess: module1.func,
  onProgress: module1.func,
  onStart: module1.func,
  data: module1.oneOfType([module1.object, module1.func]),
  headers: module1.object,
  accept: module1.string,
  multiple: module1.bool,
  beforeUpload: module1.func,
  customRequest: module1.func,
  children: module1.node,
  withCredentials: module1.bool,
  style: module1.object,
  className: module1.string,
  method: module1.string
};
O.defaultProps = {
  data: {},
  headers: {},
  name: "file",
  method: "post",
  onStart: module455,
  onError: module455,
  onSuccess: module455,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false
};
var _default = exports["default"] = O;

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

/***/ "./src/unpacked/module-2399.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2399.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2399 */ "./src/chunks/common/module-2399.js"));
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

/***/ "./src/unpacked/module-2400.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2400.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2400 */ "./src/chunks/common/module-2400.js"));
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

/***/ "./src/unpacked/module-2401.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2401.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2401 */ "./src/chunks/common/module-2401.js"));
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