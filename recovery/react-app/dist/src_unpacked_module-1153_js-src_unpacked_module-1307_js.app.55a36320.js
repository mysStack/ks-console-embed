"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_unpacked_module-1153_js-src_unpacked_module-1307_js"],{

/***/ "./src/chunks/common/module-1307.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-1307.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1103.js */ "./src/unpacked/module-1103.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2429.js */ "./src/unpacked/module-2429.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module26 = (0, _recoverInterop.__recoverInterop)(_module2);
const module1103 = (0, _recoverInterop.__recoverInterop)(_module3);
const module2429 = (0, _recoverInterop.__recoverInterop)(_module4);
var e = exports["default"] = function e(t) {
  const _this = this;
  module36(this, e);
  this.store = null;
  this.setStore = function (e) {
    _this.store = e;
  };
  this.isCalico = function (e) {
    const n = window.parent?.globals ?? window.globals;
    const o = n?.app?.isMultiCluster ? module26(n, `clusterConfig.${e}.ksVersion`) : module26(n, "ksConfig.ksVersion");
    return (0, _index.compareVersion)(o, "3.4.1") >= 0;
  };
  this.isOutdated = function (e) {
    const n = window.parent?.globals ?? window.globals;
    if (!n?.app?.isMultiCluster) {
      return false;
    }
    const o = module26(n, `clusterConfig.${e}.ksVersion`);
    return (0, _index.compareVersion)(o, "3.4.0") < 0;
  };
  this.getStoreByCluster = function (e) {
    if (_this.isCalico(e)) {
      return module2429;
    }
    return module1103;
  };
  this.setStoreByCluster = function (e) {
    const t = _this.getStoreByCluster(e);
    _this.setStore(new t());
  };
  if (t) {
    this.store = t;
  }
};

/***/ },

/***/ "./src/chunks/common/module-2429.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2429.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
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
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! stores/crd.resource */ "./src/stores/crd.resource.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-60.js */ "./src/unpacked/module-60.js"));
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module_ = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1103.js */ "./src/unpacked/module-1103.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module49 = (0, _recoverInterop.__recoverInterop)(_module7);
const module1172 = (0, _recoverInterop.__recoverInterop)(_module8);
const module14 = (0, _recoverInterop.__recoverInterop)(_module9);
const module26 = (0, _recoverInterop.__recoverInterop)(_module0);
const module60 = (0, _recoverInterop.__recoverInterop)(_module1);
const module_1103 = (0, _recoverInterop.__recoverInterop)(_module_);
let i;
i = (module_1103_1 => {
  module55(u, module_1103_1);
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
  })(u);
  function u() {
    let e;
    module36(this, u);
    e = r.call(this);
    e.module = "ippools";
    e.getNetWorkUrl = function (t = {}) {
      return `${e.getNetworkUrl}${e.getPath(t)}/${e.module}${t.dryRun ? "?dryRun=All" : ""}`;
    };
    e.getNetDetailUrl = function (t = {}) {
      return `${e.getNetWorkUrl(t)}/${t.name}`;
    };
    e.store = new module1172({
      module: "ippools",
      kind: "IPPool",
      apiVersion: "apis/crd.projectcalico.org/v1"
    });
    return e;
  }
  module37(u, [{
    key: "fetchList",
    value: async function () {
      let t;
      let cluster;
      let workspace;
      let namespace;
      let i;
      let devops;
      let s;
      let f;
      let d;
      const _this = this;
      const m = arguments;
      t = m.length > 0 && m[0] !== undefined ? m[0] : {};
      ({
        cluster,
        workspace,
        namespace,
        more: i,
        devops,
        ...s
      } = t);
      this.list.isLoading = true;
      if (!(s.sortBy || s.ascending !== undefined)) {
        s.sortBy = _constants.LIST_DEFAULT_ORDER[this.module] || "createTime";
      }
      if (!(s.limit !== Infinity && s.limit !== -1)) {
        s.limit = -1;
        s.page = 1;
      }
      s.limit = s.limit || 10;
      f = await request.get(this.getNetWorkUrl({
        cluster,
        workspace,
        namespace,
        devops
      }), this.getFilterParams(s));
      d = (module26(f, "items") || (module60(f) ? f : [])).map(e => ({
        cluster,
        namespace,
        ..._this.mapper(e)
      }));
      this.list.update({
        data: i ? [].concat(module61(this.list.data), module61(d)) : d,
        total: f.totalItems || f.totalCount || f.total_count || d.length || 0,
        ...s,
        limit: Number(s.limit) || 10,
        page: Number(s.page) || 1,
        isLoading: false,
        ...(!this.list.silent ? {
          selectedRowKeys: []
        } : {})
      });
      return d;
    }
  }, {
    key: "fetchDetail",
    value: async function (t) {
      let a;
      let r;
      this.isLoading = true;
      a = await request.get(this.getNetDetailUrl(t));
      r = {
        ...t,
        ...this.mapper(a)
      };
      this.detail = r;
      this.isLoading = false;
      return r;
    }
  }, {
    key: "apiVersion",
    get: function () {
      return "apis/crd.projectcalico.org/v1";
    }
  }]);
  return u;
})(module_1103);
module49(i.prototype, "fetchList", [module14.action], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
module49(i.prototype, "fetchDetail", [module14.action], Object.getOwnPropertyDescriptor(i.prototype, "fetchDetail"), i.prototype);
var _default = exports["default"] = i;

/***/ },

/***/ "./src/chunks/vendor/module-1153.js"
/*!******************************************!*\
  !*** ./src/chunks/vendor/module-1153.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-514.js */ "./src/unpacked/module-514.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-208.js */ "./src/unpacked/module-208.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-255.js */ "./src/unpacked/module-255.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-125.js */ "./src/unpacked/module-125.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module514 = (0, _recoverInterop.__recoverInterop)(_module);
const module208 = (0, _recoverInterop.__recoverInterop)(_module2);
const module255 = (0, _recoverInterop.__recoverInterop)(_module3);
const module125 = (0, _recoverInterop.__recoverInterop)(_module4);
function _default(e, t, n) {
  e = module125(e);
  n = n == null ? 0 : module514(module255(n), 0, e.length);
  t = module208(t);
  return e.slice(n, n + t.length) == t;
}
;

/***/ },

/***/ "./src/unpacked/module-1153.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1153.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/vendor/module-1153 */ "./src/chunks/vendor/module-1153.js"));
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

/***/ "./src/unpacked/module-1307.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1307.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-1307 */ "./src/chunks/common/module-1307.js"));
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

/***/ "./src/unpacked/module-2429.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2429.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2429 */ "./src/chunks/common/module-2429.js"));
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