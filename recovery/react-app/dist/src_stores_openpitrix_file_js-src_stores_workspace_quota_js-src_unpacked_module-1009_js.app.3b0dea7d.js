"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_stores_openpitrix_file_js-src_stores_workspace_quota_js-src_unpacked_module-1009_js"],{

/***/ "./src/chunks/common/module-1009.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-1009.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
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
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _defaultExport = _interopRequireWildcard(__webpack_require__(/*! stores/node */ "./src/stores/node.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const defaultExport = (0, _recoverInterop.__recoverInterop)(_defaultExport);
const d = (defaultExport_1 => {
  module55(a, defaultExport_1);
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
  function a(...o_1) {
    let e;
    module36(this, a);
    e = t.call(this, ...o_1);
    e.module = "edgenodes";
    e.getListUrl = function (t = {}) {
      return `${e.apiVersion}${e.getPath(t)}/nodes${t.dryRun ? "?dryRun=All" : ""}`;
    };
    e.getResourceUrl = function ({
      cluster
    }) {
      return `/kapis/resources.kubesphere.io/v1alpha3${e.getPath({
        cluster
      })}/nodes`;
    };
    e.createEdgeNode = async a => {
      let cluster;
      let node_name;
      let node_ip;
      let add_default_taint;
      let runtime;
      let c;
      let s;
      let f;
      let d;
      let p;
      cluster = a.cluster;
      node_name = a.name;
      node_ip = a.ip;
      add_default_taint = a.defaultTaint;
      runtime = a.runtime;
      c = a.imageRepository;
      s = a.nodegroup;
      f = `/kapis/infra.edgewize.io/v1alpha1${e.getPath({
        cluster
      })}/nodes/join`;
      d = {
        node_name,
        node_ip,
        add_default_taint,
        runtime,
        "image-repository": c
      };
      if (s) {
        d.node_group = s;
      }
      p = await request.get(f, d, {}, function (e) {
        return e;
      });
      return p;
    };
    return e;
  }
  module37(a, [{
    key: "apiVersion",
    get: function () {
      return _constants.API_VERSIONS.nodes || "";
    }
  }]);
  return a;
})(defaultExport);
var _default = exports["default"] = d;

/***/ },

/***/ "./src/configs/openpitrix/version.js"
/*!*******************************************!*\
  !*** ./src/configs/openpitrix/version.js ***!
  \*******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.STATUS_TRANSFER_MAP = exports.STATUS_TO_ICON = exports.STATUS_TO_ACTION_ADMIN = exports.STATUS_TO_ACTION = exports.REVIEW_PASS_ACTIONS = exports.HANDLE_TYPE_TO_SHOW = exports.DEFAULT_QUERY_STATUS = exports.CAN_EDIT_STATUS = exports.CAN_DELETE_STATUS = exports.APP_STORE_ACTIONS = exports.ACTION_TO_STATUS = exports.ACTION_TO_NAME = void 0;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
const DEFAULT_QUERY_STATUS = exports.DEFAULT_QUERY_STATUS = "draft|submitted|rejected|in-review|passed|active|suspended";
const STATUS_TRANSFER_MAP = exports.STATUS_TRANSFER_MAP = {
  active: "active",
  suspended: "suspended",
  suspend: "suspending",
  submitted: "submitted",
  passed: "passed",
  draft: "draft",
  rejected: "rejected"
};
const STATUS_TO_ICON = exports.STATUS_TO_ICON = {
  submitted: "review",
  "in-review": "review",
  rejected: "suspended",
  active: "passed"
};
const CAN_EDIT_STATUS = exports.CAN_EDIT_STATUS = ["draft", "rejected"];
const CAN_DELETE_STATUS = exports.CAN_DELETE_STATUS = ["draft", "rejected", "passed", "suspended"];
const APP_STORE_ACTIONS = exports.APP_STORE_ACTIONS = ["suspend", "recover"];
const STATUS_TO_ACTION = exports.STATUS_TO_ACTION = {
  draft: "submit",
  submitted: "cancel",
  rejected: "submit",
  passed: "release",
  active: "view"
};
const STATUS_TO_ACTION_ADMIN = exports.STATUS_TO_ACTION_ADMIN = {
  active: "suspend",
  suspended: "recover"
};
const ACTION_TO_STATUS = exports.ACTION_TO_STATUS = {
  suspend: "active",
  recover: "suspended"
};
const HANDLE_TYPE_TO_SHOW = exports.HANDLE_TYPE_TO_SHOW = {
  recover: "activate"
};
const ACTION_TO_NAME = exports.ACTION_TO_NAME = {
  submit: "SUBMIT_FOR_REVIEW",
  cancel: "CANCEL_SUBMISSION",
  release: "RELEASE",
  view: "VIEW_IN_STORE",
  suspend: "SUSPEND",
  recover: "RELEASE"
};
const REVIEW_PASS_ACTIONS = exports.REVIEW_PASS_ACTIONS = [{
  role: "isv",
  action: "review"
}, {
  role: "isv",
  action: "pass"
}, {
  role: "business",
  action: "review"
}, {
  role: "business",
  action: "pass"
}, {
  role: "technical",
  action: "review"
}, {
  role: "technical",
  action: "pass"
}];

/***/ },

/***/ "./src/stores/openpitrix/file.js"
/*!***************************************!*\
  !*** ./src/stores/openpitrix/file.js ***!
  \***************************************/
(__unused_webpack_module, exports, __webpack_require__) {



const module20 = (__webpack_require__(/*! utils/babel-helpers/interopRequireDefault */ "./src/utils/babel-helpers/interopRequireDefault.js")["default"]);
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-86.js */ "./node_modules/core-js3/modules/es.array.index-of.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-138.js */ "./node_modules/core-js3/modules/es.object.assign.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = undefined;
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-86.js */ "./node_modules/core-js3/modules/es.array.index-of.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-138.js */ "./node_modules/core-js3/modules/es.object.assign.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-193.js */ "./node_modules/core-js3/modules/es.regexp.test.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
const n = module20((__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js")["default"]));
const l = module20(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
const u = module20((__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js")["default"]));
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
let o;
let i;
let c;
let s;
let f;
let d;
let p;
let m;
let h;
const v = module20((__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js")["default"]));
const g = module20((__webpack_require__(/*! unpacked/module-65.js */ "./src/unpacked/module-65.js")["default"]));
const y = module20((__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js")["default"]));
const E = module20((__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js")["default"]));
const b = module20((__webpack_require__(/*! unpacked/module-88.js */ "./src/unpacked/module-88.js")["default"]));
const _ = module20((__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js")["default"]));
const O = module20((__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js")["default"]));
const S = module20(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
const C = module20((__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js")["default"]));
module20((__webpack_require__(/*! utils/babel-helpers/initializerWarningHelper */ "./src/utils/babel-helpers/initializerWarningHelper.js")["default"]));
const module14 = __webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js");
const k = module20((__webpack_require__(/*! unpacked/module-122.js */ "./src/unpacked/module-122.js")["default"]));
const module440 = __webpack_require__(/*! utils/base64 */ "./src/utils/base64.js");
const module917 = __webpack_require__(/*! utils/app */ "./src/utils/app.js");
const module327 = __webpack_require__(/*! configs/openpitrix/app */ "./src/configs/openpitrix/app.js");
o = (e => {
  _.default(r, e);
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
      const r = S.default(e);
      if (t) {
        const n = S.default(this).constructor;
        a = Reflect.construct(r, arguments, n);
      } else {
        a = r.apply(this, arguments);
      }
      return O.default(this, a);
    };
  })(r);
  function r(...n) {
    let e;
    y.default(this, r);
    e = a.call(this, ...n);
    e.resourceName = "files";
    g.default(e, "files", i, b.default(e));
    g.default(e, "isLoading", c, b.default(e));
    e.filters = {};
    g.default(e, "checkFile", s, b.default(e));
    g.default(e, "handleFileByBase64Str", f, b.default(e));
    g.default(e, "validateImageSize", d, b.default(e));
    g.default(e, "validatePackage", p, b.default(e));
    g.default(e, "uploadPackage", m, b.default(e));
    g.default(e, "downloadPackage", h, b.default(e));
    e.reject = function (t) {
      e.isLoading = false;
      window.onunhandledrejection(t);
    };
    return e;
  }
  E.default(r, [{
    key: "fetch",
    value: async function () {
      let t;
      let a;
      let r;
      let n;
      let o;
      let i;
      const c = arguments;
      t = c.length > 0 && c[0] !== undefined ? c[0] : {};
      a = t.app_id;
      r = t.version_id;
      n = u.default(t, ["app_id", "version_id"]);
      this.isLoading = true;
      this.filters = Object.assign(this.filters, n);
      if (o = await request.get(this.getUrl({
        app_id: a,
        version_id: r
      }), this.filters, null, this.reject)) {
        i = o.files || {};
        Object.keys(i).forEach(e => {
          i[e] = module440.safeAtob(i[e]);
        });
        this.files = i;
        this.isLoading = false;
      }
    }
  }]);
  return r;
})(module20(__webpack_require__(/*! stores/openpitrix/base */ "./src/stores/openpitrix/base.js")).default);
i = C.default(o.prototype, "files", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
});
c = C.default(o.prototype, "isLoading", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
});
C.default(o.prototype, "fetch", [module14.action], Object.getOwnPropertyDescriptor(o.prototype, "fetch"), o.prototype);
s = C.default(o.prototype, "checkFile", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return function (e, t) {
      const a = module327.UPLOAD_CHECK_RULES[t];
      if (a.format.test(e.name.toLocaleLowerCase())) {
        if (e.size > a.size) {
          return `FILE_MAX_${t.toLocaleUpperCase()}`;
        }
        return "";
      }
      return `FILE_FORMAT_${t.toLocaleUpperCase()}`;
    };
  }
});
f = C.default(o.prototype, "handleFileByBase64Str", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async (t, a) => {
      let r;
      (r = new FileReader()).readAsDataURL(t, "UTF-8");
      r.addEventListener("load", v.default(l.default.mark(function* e() {
        let t;
        let n;
        t = r.result;
        n = t.substring(t.indexOf(",") + 1, t.length);
        yield a(n);
      })));
    };
  }
});
d = C.default(o.prototype, "validateImageSize", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async t => {
      let a;
      a = new Image();
      a.src = t;
      return new Promise(resolve => {
        a.addEventListener("load", v.default(l.default.mark(function* t() {
          let r = true;
          if (a.width > 96 || a.height > 96) {
            r = false;
          }
          resolve(r);
        })));
      });
    };
  }
});
p = C.default(o.prototype, "validatePackage", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return async (a, r) => {
      let n;
      let u;
      let o;
      _this.isSubmitting = true;
      n = {};
      if (r) {
        n.type = "helm";
        n.package = a;
      } else {
        n.version_type = "helm";
        n.version_package = a;
      }
      u = r ? "versions" : "apps";
      o = await request.post(`${_this.getUrl({
        app_id: r,
        name: u
      })}?validate=true`, n, {}, _this.reject);
      _this.isSubmitting = false;
      if (o && o.name) {
        o.base64Str = a;
      }
      if (o && o.error_details) {
        o.missFile = k.default(o.error_details);
        o.error = "MISS_FILE_NOTE";
      }
      return o;
    };
  }
});
m = C.default(o.prototype, "uploadPackage", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return async function (t) {
      let a;
      let r;
      let n;
      const u = arguments;
      a = u.length > 1 && u[1] !== undefined ? u[1] : {};
      r = u.length > 2 ? u[2] : undefined;
      n = {
        ...a
      };
      if (t === "CREATE_APP") {
        n.version_package = a.base64Str;
      } else {
        n.package = a.base64Str;
      }
      delete n.base64Str;
      return await r(n);
    };
  }
});
h = C.default(o.prototype, "downloadPackage", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return v.default(l.default.mark(function* t() {
      let a;
      let r;
      let n;
      let u;
      let o;
      let i;
      const c = arguments;
      a = c.length > 0 && c[0] !== undefined ? c[0] : {};
      r = a.app_id;
      n = a.version_id;
      u = a.packageName;
      o = _this.getUrl({
        app_id: r,
        version_id: n,
        name: "package"
      });
      i = yield _this.submitting(request.get(o));
      module917.downloadFileFromBase64(i.package, u);
    }));
  }
});
exports["default"] = o;

/***/ },

/***/ "./src/stores/workspace.quota.js"
/*!***************************************!*\
  !*** ./src/stores/workspace.quota.js ***!
  \***************************************/
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
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! stores/base */ "./src/stores/base.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module49 = (0, _recoverInterop.__recoverInterop)(_module6);
const module68 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const module26 = (0, _recoverInterop.__recoverInterop)(_module9);
let u;
u = (e => {
  module55(r, e);
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
  function r(...n) {
    let e;
    module36(this, r);
    e = a.call(this, ...n);
    e.module = "resourcequotas";
    return e;
  }
  module37(r, [{
    key: "getPath",
    value: function ({
      cluster,
      workspace
    } = {}) {
      let r = "";
      if (cluster) {
        r += `/klusters/${cluster}`;
      }
      if (workspace) {
        r += `/workspaces/${workspace}`;
      }
      return r;
    }
  }, {
    key: "fetchDetail",
    value: async function (t) {
      let a;
      let r;
      this.isLoading = true;
      a = await request.get(this.getDetailUrl(t), {}, {}, function () {});
      r = {
        ...t,
        ...this.mapper(a)
      };
      this.detail = r;
      this.isLoading = false;
      return module26(a, "status.total");
    }
  }, {
    key: "apiVersion",
    get: function () {
      return "kapis/tenant.kubesphere.io/v1beta1";
    }
  }]);
  return r;
})(module68);
module49(u.prototype, "fetchDetail", [module14.action], Object.getOwnPropertyDescriptor(u.prototype, "fetchDetail"), u.prototype);
var _default = exports["default"] = u;

/***/ },

/***/ "./src/unpacked/module-1009.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1009.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-1009 */ "./src/chunks/common/module-1009.js"));
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

/***/ "./src/utils/app.js"
/*!**************************!*\
  !*** ./src/utils/app.js ***!
  \**************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.transferVersionStatus = exports.transferReviewStatus = exports.transferAppStatus = exports.getVersionTypesName = exports.getAppCategoryNames = exports.downloadFileFromBase64 = exports.compareVersion = exports.checkRepoInvalidReason = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-64.js */ "./node_modules/core-js3/modules/es.string.replace.js");
__webpack_require__(/*! unpacked/module-137.js */ "./node_modules/core-js3/modules/es.string.split.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-246.js */ "./src/unpacked/module-246.js"));
__webpack_require__(/*! unpacked/module-319.js */ "./src/unpacked/module-319.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-451.js */ "./src/unpacked/module-451.js"));
var _version = __webpack_require__(/*! configs/openpitrix/version */ "./src/configs/openpitrix/version.js");
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module246 = (0, _recoverInterop.__recoverInterop)(_module);
const module451 = (0, _recoverInterop.__recoverInterop)(_module2);
const transferAppStatus = function (e) {
  if (_version.STATUS_TRANSFER_MAP[e]) {
    return t(`APP_STATUS_${_version.STATUS_TRANSFER_MAP[e].toUpperCase().replace(/[^A-Z]+/g, "_")}`);
  }
  return e;
};
exports.transferAppStatus = transferAppStatus;
const transferVersionStatus = function (e) {
  if (_version.STATUS_TRANSFER_MAP[e]) {
    if (e === "draft") {
      return t("APP_STATUS_NOT_SUBMITTED");
    }
    return t(`APP_STATUS_${_version.STATUS_TRANSFER_MAP[e].toUpperCase().replace(/[^A-Z]+/g, "_")}`);
  }
  return e;
};
exports.transferVersionStatus = transferVersionStatus;
const transferReviewStatus = function (e) {
  let t;
  switch (e) {
    case "submitted":
      t = "to-be-reviewed";
      break;
    case "passed":
    case "suspended":
    case "rejected":
    case "active":
      t = e;
      break;
    default:
      t = "in-review";
  }
  return t;
};
exports.transferReviewStatus = transferReviewStatus;
const getVersionTypesName = function (e) {
  if (e) {
    return e.split(",").map(e => module451(e)).join(" ");
  }
  return "-";
};
exports.getVersionTypesName = getVersionTypesName;
const getAppCategoryNames = function (e) {
  const u = e?.metadata?.annotations?.["kubesphere.io/alias-name"];
  if (u) {
    return u;
  }
  const o = e?.metadata?.name;
  if (o === "kubesphere-app-uncategorized") {
    return t("APP_CATE_UNCATEGORIZED");
  }
  return t(`APP_CATE_${o == null ? undefined : o.toUpperCase().replace(/[^A-Z]+/g, "_")}`, {
    defaultValue: o || e?.metadata?.name
  });
};
exports.getAppCategoryNames = getAppCategoryNames;
const downloadFileFromBase64 = function (e = "", t) {
  const aElement = document.createElement("a");
  aElement.href = `data:application/tar+gzip;base64,${e}`;
  aElement.download = `${t}.tgz`;
  aElement.click();
};
exports.downloadFileFromBase64 = downloadFileFromBase64;
const compareVersion = function (e, t) {
  if (module246(e) + module246(t) !== "stringstring") {
    return false;
  }
  const a = e.split(".");
  const r = t.split(".");
  for (let n = Math.max(a.length, r.length), u = 0; u < n; u++) {
    if (a[u] && !r[u] && parseInt(a[u], 10) > 0 || parseInt(a[u], 10) > parseInt(r[u], 10)) {
      return 1;
    }
    if (r[u] && !a[u] && parseInt(r[u], 10) > 0 || parseInt(a[u], 10) < parseInt(r[u], 10)) {
      return -1;
    }
  }
  return 0;
};
exports.compareVersion = compareVersion;
const checkRepoInvalidReason = function (e) {
  return t({
    102: "UNRECOGNIZED_URL",
    103: "INVALID_CREDENTIAL_FORMAT",
    104: "MISSING_ACCESS_KEY_ID",
    105: "MISSING_SECRET_ACCESS_KEY",
    106: "S_THREE_ACCESS_DENIED",
    107: "INVALID_URL_FORMAT",
    108: "INVALID_HTTP_SCHEME",
    109: "HTTP_ACCESS_DENIED",
    110: "INVALID_HTTPS_SCHEME",
    111: "INVALID_TYPE",
    112: "INVALID_PROVIDERS",
    113: "INVALID_REPO_URL",
    114: "INVALID_S_THREE_SCHEME"
  }[e] || "INVALID_URL_DESC");
};
exports.checkRepoInvalidReason = checkRepoInvalidReason;

/***/ }

}]);