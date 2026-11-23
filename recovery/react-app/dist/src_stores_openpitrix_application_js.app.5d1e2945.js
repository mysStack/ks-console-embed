"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_stores_openpitrix_application_js"],{

/***/ "./src/stores/openpitrix/application.js"
/*!**********************************************!*\
  !*** ./src/stores/openpitrix/application.js ***!
  \**********************************************/
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
__webpack_require__(/*! unpacked/module-30.js */ "./src/shims/corejs-es-array-iterator.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
__webpack_require__(/*! unpacked/module-138.js */ "./node_modules/core-js3/modules/es.object.assign.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-38.js */ "./src/shims/corejs-es-string-iterator.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-32.js */ "./src/unpacked/module-32.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-65.js */ "./src/unpacked/module-65.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-88.js */ "./src/unpacked/module-88.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js"));
__webpack_require__(/*! utils/babel-helpers/initializerWarningHelper */ "./src/utils/babel-helpers/initializerWarningHelper.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-245.js */ "./node_modules/core-js3/modules/es.array.reverse.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _app = __webpack_require__(/*! configs/openpitrix/app */ "./src/configs/openpitrix/app.js");
var _module13 = _interopRequireWildcard(__webpack_require__(/*! stores/service */ "./src/stores/service.js"));
var _module14 = _interopRequireWildcard(__webpack_require__(/*! stores/pod */ "./src/stores/pod.js"));
var _module15 = _interopRequireWildcard(__webpack_require__(/*! stores/openpitrix/base */ "./src/stores/openpitrix/base.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module41 = (0, _recoverInterop.__recoverInterop)(_module2);
const module44 = (0, _recoverInterop.__recoverInterop)(_module3);
const module65 = (0, _recoverInterop.__recoverInterop)(_module4);
const module36 = (0, _recoverInterop.__recoverInterop)(_module5);
const module37 = (0, _recoverInterop.__recoverInterop)(_module6);
const module88 = (0, _recoverInterop.__recoverInterop)(_module7);
const module55 = (0, _recoverInterop.__recoverInterop)(_module8);
const module56 = (0, _recoverInterop.__recoverInterop)(_module9);
const module51 = (0, _recoverInterop.__recoverInterop)(_module0);
const module49 = (0, _recoverInterop.__recoverInterop)(_module1);
const module26 = (0, _recoverInterop.__recoverInterop)(_module10);
const module63 = (0, _recoverInterop.__recoverInterop)(_module11);
const module14 = (0, _recoverInterop.__recoverInterop)(_module12);
const module443 = (0, _recoverInterop.__recoverInterop)(_module13);
const module452 = (0, _recoverInterop.__recoverInterop)(_module14);
const module458 = (0, _recoverInterop.__recoverInterop)(_module15);
let v;
let g;
let y;
let E;
let b;
let _;
let O;
let S;
let C;
const L = {
  creating: "Creating",
  created: "Creating",
  active: "Running",
  failed: "Failed",
  deleting: "Deleting",
  upgrading: "Upgrading",
  upgraded: "Upgrading"
};
const x = e => {
  const t = module26(e, "cluster.status");
  return {
    ...e,
    ...e.cluster,
    selector: {
      "application.kubesphere.io/instance": e.cluster.name
    },
    status: L[t]
  };
};
v = (e => {
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
  function r(...n_1) {
    let e;
    module36(this, r);
    e = a.call(this, ...n_1);
    e.resourceName = "applications";
    e.defaultStatus = _app.CLUSTER_QUERY_STATUS;
    e.serviceStore = new module443();
    e.podStore = new module452();
    module65(e, "components", g, module88(e));
    e.getWatchListUrl = function ({
      cluster,
      namespace
    } = {}) {
      return `apis/application.kubesphere.io/v1alpha1/watch/helmreleases?labelSelector=${(0, _index.joinSelector)({
        "kubesphere.io/cluster": globals.app.isMultiCluster ? cluster : null,
        "kubesphere.io/namespace": namespace
      })}`;
    };
    e.getUrl = function ({
      workspace,
      namespace,
      cluster,
      cluster_id
    } = {}) {
      const u = `${e.baseUrl}${e.getPath({
        workspace,
        namespace,
        cluster
      })}/applications`;
      if (cluster_id) {
        return `${u}/${cluster_id}`;
      }
      return u;
    };
    module65(e, "env", y, module88(e));
    module65(e, "fetchList", E, module88(e));
    module65(e, "fetchDetail", b, module88(e));
    module65(e, "update", _, module88(e));
    module65(e, "patch", O, module88(e));
    module65(e, "delete", S, module88(e));
    module65(e, "batchDelete", C, module88(e));
    return e;
  }
  module37(r, [{
    key: "upgrade",
    value: async function (t, a) {
      let r;
      let n;
      let l;
      let o;
      r = a.workspace;
      n = a.namespace;
      l = a.cluster;
      o = a.cluster_id;
      return this.submitting(request.post(this.getUrl({
        workspace: r,
        namespace: n,
        cluster: l,
        cluster_id: o
      }), t));
    }
  }]);
  return r;
})(module458);
g = module49(v.prototype, "components", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {
      data: [],
      total: 0,
      isLoading: true
    };
  }
});
y = module49(v.prototype, "env", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {
      data: {},
      isLoading: false
    };
  }
});
E = module49(v.prototype, "fetchList", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return module44(module41.mark(function* t() {
      let a;
      let r;
      let o;
      let cluster;
      let namespace;
      let workspace;
      let f;
      let d;
      let order;
      let reverse;
      let filters;
      let v;
      let g;
      let y;
      let E;
      const b = arguments;
      a = b.length > 0 && b[0] !== undefined ? b[0] : {};
      ({
        limit: r,
        page: o,
        cluster,
        namespace,
        workspace,
        more: f,
        status: d,
        sortBy: order,
        reverse,
        ...filters
      } = a);
      _this.list.isLoading = true;
      v = {
        conditions: (0, _index.getFilterString)({
          status: d || _this.defaultStatus
        })
      };
      if (!(order || reverse !== undefined)) {
        order = "status_time";
      }
      if (!module63(filters)) {
        if (g = (0, _index.getFilterString)(filters)) {
          v.conditions += `,${g}`;
        }
      }
      if (r !== Infinity) {
        v.paging = `limit=${r || 10},page=${o || 1}`;
      }
      if (order) {
        v.orderBy = order;
      }
      if (reverse) {
        v.reverse = true;
      }
      y = yield request.get(_this.getUrl({
        workspace,
        namespace,
        cluster
      }), v);
      E = (y.items || []).map(e => ({
        ...x(e),
        workspace,
        cluster
      }));
      Object.assign(_this.list, {
        data: f ? [].concat(module61(_this.list.data), module61(E)) : E,
        total: y.total_count || 0,
        limit: Number(r) || 10,
        page: Number(o) || 1,
        order,
        reverse,
        filters,
        selectedRowKeys: []
      });
      _this.list.isLoading = false;
      return E;
    }));
  }
});
b = module49(v.prototype, "fetchDetail", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return async a => {
      let r;
      let n;
      let l;
      let o;
      let i;
      r = a.workspace;
      n = a.namespace;
      l = a.cluster;
      o = a.id;
      _this.isLoading = true;
      i = await request.get(_this.getUrl({
        workspace: r,
        namespace: n,
        cluster: l,
        cluster_id: o
      }));
      _this.detail = {
        ...x(i),
        workspace: r,
        namespace: n,
        cluster: l
      };
      _this.isLoading = false;
    };
  }
});
module49(v.prototype, "upgrade", [module14.action], Object.getOwnPropertyDescriptor(v.prototype, "upgrade"), v.prototype);
_ = module49(v.prototype, "update", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return function ({
      cluster_id,
      cluster,
      workspace,
      zone,
      ...rest
    }) {
      return _this.submitting(request.patch(_this.getUrl({
        namespace: zone,
        cluster_id,
        cluster,
        workspace
      }), rest));
    };
  }
});
O = module49(v.prototype, "patch", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return function ({
      cluster_id,
      cluster,
      workspace,
      zone
    }, a) {
      return _this.submitting(request.patch(_this.getUrl({
        namespace: zone,
        cluster_id,
        cluster,
        workspace
      }), a));
    };
  }
});
S = module49(v.prototype, "delete", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return function ({
      cluster_id,
      cluster,
      workspace,
      zone
    }) {
      return _this.submitting(request.delete(_this.getUrl({
        namespace: zone,
        cluster_id,
        cluster,
        workspace
      })));
    };
  }
});
C = module49(v.prototype, "batchDelete", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return function (t, {
      namespace,
      cluster,
      workspace
    }) {
      return _this.submitting(Promise.all(t.map(cluster_id => request.delete(_this.getUrl({
        namespace,
        cluster,
        workspace,
        cluster_id
      })))));
    };
  }
});
var _default = exports["default"] = v;

/***/ }

}]);