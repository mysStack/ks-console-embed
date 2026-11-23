"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_components_Modals_Delete_js-src_stores_monitoring_workspace_js-src_unpacked_module-1129_j-656d59"],{

/***/ "./src/chunks/common/module-2045.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2045.js ***!
  \******************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  modalBody: "_2emSCCZW7Any6zY9sbt0dh",
  body: "_3zk4pcFFwHI55jC3hhKShH",
  content: "_2AVQmoTGa5M_aaHwB5m25A",
  closeIcon: "_3ZNMNqX719F5uyujlsIEEX",
  footer: "Pv1Crv3p0hsWafBqva7XY"
};

/***/ },

/***/ "./src/components/Modals/Delete.js"
/*!*****************************************!*\
  !*** ./src/components/Modals/Delete.js ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-137.js */ "./node_modules/core-js3/modules/es.string.split.js");
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
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Modal */ "./src/components/Base/Modal.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2045.js */ "./src/unpacked/module-2045.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module1 = (0, _recoverInterop.__recoverInterop)(_module6);
const module186 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module788 = (0, _recoverInterop.__recoverInterop)(_Module);
const module2045 = (0, _recoverInterop.__recoverInterop)(_module8);
const h = (Component_1 => {
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
  function r(...n) {
    let e;
    module36(this, r);
    e = a.call(this, ...n);
    e.state = {
      confirm: ""
    };
    e.width = 504;
    e.handleInputChange = function (t) {
      e.setState({
        confirm: t.target.value
      });
    };
    e.handleOk = function () {
      e.props.onOk();
    };
    return e;
  }
  module37(r, [{
    key: "componentDidUpdate",
    value: function (e) {
      if (this.props.visible && this.props.visible !== e.visible) {
        this.setState({
          confirm: ""
        });
      }
    }
  }, {
    key: "renderAlert",
    value: function () {
      return null;
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        app,
        type,
        resource,
        visible,
        onCancel,
        title,
        desc,
        renderExtra,
        isSubmitting,
        deleteCluster
      } = props;
      const v = type || undefined;
      const g = type ? `${type}_LOW` : undefined;
      const y = type ? `${type}_PL` : undefined;
      let E = desc || (resource && type ? resource.split(", ").length === 1 ? t.html("DELETE_RESOURCE_TYPE_DESC_SI", {
        type: t(g),
        resource
      }) : t.html("DELETE_RESOURCE_TYPE_DESC_PL", {
        type: t(g),
        resource
      }) : t.html("DELETE_DESC", {
        resource,
        type: ""
      }));
      if (app) {
        E = t.html("DELETE_APP_RESOURCE_TIP", {
          type,
          resource,
          app
        });
      }
      if (deleteCluster) {
        E = t.html("REMOVE_CLUSTER_DESC", {
          name: resource
        });
      }
      return /*#__PURE__*/React.createElement(Module788, {
        width: this.width,
        bodyClassName: module2045.modalBody,
        visible: visible,
        isSubmitting: isSubmitting,
        onCancel: onCancel,
        hideHeader: true,
        hideFooter: true
      }, /*#__PURE__*/React.createElement("div", {
        className: module2045.body
      }, /*#__PURE__*/React.createElement("div", {
        className: "h5"
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "close",
        type: "light",
        className: module2045.closeIcon
      }), title || (resource && type ? resource.split(", ").length === 1 ? t("DELETE_TITLE_SI", {
        type: t(v)
      }) : t("DELETE_TITLE_PL", {
        type: t(y)
      }) : t("DELETE"))), this.renderAlert(), /*#__PURE__*/React.createElement("div", {
        className: module2045.content
      }, /*#__PURE__*/React.createElement("p", null, E), resource && /*#__PURE__*/React.createElement(module186.Input, {
        name: "confirm",
        value: this.state.confirm,
        onChange: this.handleInputChange,
        placeholder: resource,
        autoFocus: true
      }), renderExtra?.())), /*#__PURE__*/React.createElement("div", {
        className: module2045.footer
      }, /*#__PURE__*/React.createElement(module186.Button, {
        onClick: onCancel,
        "data-test": "modal-cancel"
      }, t("CANCEL")), /*#__PURE__*/React.createElement(module186.Button, {
        type: "danger",
        loading: isSubmitting,
        disabled: isSubmitting || !!resource && this.state.confirm !== resource,
        onClick: this.handleOk,
        "data-test": "modal-ok"
      }, t("OK"))));
    }
  }]);
  return r;
})(_module21.Component);
var _default = exports["default"] = h;
h.propTypes = {
  type: module1.string,
  resource: module1.string,
  visible: module1.bool,
  title: module1.oneOfType([module1.string, module1.node]),
  desc: module1.oneOfType([module1.string, module1.node]),
  onOk: module1.func,
  onCancel: module1.func,
  isSubmitting: module1.bool
};
h.defaultProps = {
  visible: false,
  isSubmitting: false,
  onOk: function () {},
  onCancel: function () {}
};

/***/ },

/***/ "./src/stores/monitoring/workspace.js"
/*!********************************************!*\
  !*** ./src/stores/monitoring/workspace.js ***!
  \********************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-316.js */ "./node_modules/core-js3/modules/es.object.values.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-64.js */ "./node_modules/core-js3/modules/es.string.replace.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js"));
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-65.js */ "./src/unpacked/module-65.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-88.js */ "./src/unpacked/module-88.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js"));
__webpack_require__(/*! utils/babel-helpers/initializerWarningHelper */ "./src/utils/babel-helpers/initializerWarningHelper.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module10 = _interopRequireWildcard(__webpack_require__(/*! stores/monitoring/base */ "./src/stores/monitoring/base.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! stores/devops */ "./src/stores/devops.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module58 = (0, _recoverInterop.__recoverInterop)(_module);
const module65 = (0, _recoverInterop.__recoverInterop)(_module2);
const module36 = (0, _recoverInterop.__recoverInterop)(_module3);
const module37 = (0, _recoverInterop.__recoverInterop)(_module4);
const module88 = (0, _recoverInterop.__recoverInterop)(_module5);
const module55 = (0, _recoverInterop.__recoverInterop)(_module6);
const module56 = (0, _recoverInterop.__recoverInterop)(_module7);
const module51 = (0, _recoverInterop.__recoverInterop)(_module8);
const module49 = (0, _recoverInterop.__recoverInterop)(_module9);
const module14 = (0, _recoverInterop.__recoverInterop)(_module0);
const module26 = (0, _recoverInterop.__recoverInterop)(_module1);
const module847 = (0, _recoverInterop.__recoverInterop)(_module10);
const module323 = (0, _recoverInterop.__recoverInterop)(_module11);
let u;
let o;
let i;
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
}
u = (e => {
  module55(h, e);
  var u = S(h);
  function h(...a) {
    let e;
    module36(this, h);
    e = u.call(this, ...a);
    module65(e, "statistics", o, module88(e));
    module65(e, "resourceMetrics", i, module88(e));
    return e;
  }
  module37(h, [{
    key: "fetchStatistics",
    value: async function (t) {
      let a;
      let cluster;
      let n;
      let u;
      let o;
      let i;
      const c = arguments;
      a = c.length > 1 && c[1] !== undefined ? c[1] : {};
      cluster = a.cluster;
      this.statistics.isLoading = true;
      n = {
        type: "statistics"
      };
      u = this.getApi({
        workspace: t,
        cluster
      });
      o = await (0, _index.to)(request.get(u, n));
      i = this.getResult(o);
      this.statistics = {
        data: i,
        isLoading: false
      };
      return i;
    }
  }, {
    key: "getDevopsCount",
    value: async t => {
      let a;
      let r;
      let n;
      a = new module323();
      r = await request.get(a.getBaseUrl({
        workspace: t
      }), {
        paging: "limit=Infinity"
      });
      n = r && r.items.length > 0 ? r.items.length : 0;
      return n;
    }
  }, {
    key: "fetchApplicationResourceMetrics",
    value: async function (t) {
      let a;
      let namespace;
      let o;
      let i;
      let c;
      let s;
      let f;
      let d;
      let originData;
      ({
        workspace: a,
        namespace,
        autoRefresh: o = false
      } = t);
      i = module58(t, ["workspace", "namespace", "autoRefresh"]);
      if (o) {
        i.last = true;
      } else {
        this.resourceMetrics.isLoading = true;
      }
      if (i.cluster) {
        this.cluster = i.cluster;
      }
      c = this.getParams(i);
      s = /^[a-zA-Z]+_/g;
      f = module26(i.metrics, "[0]", "").replace(s, "workspace_");
      if (namespace && namespace !== "all") {
        c.metrics_filter = `${f.replace(s, "namespace_")}\$`;
      }
      d = await (0, _index.to)(request.get(`${this.getApi({
        cluster: this.cluster,
        workspace: a,
        namespace
      })}`, c));
      originData = this.getResult(d);
      if (o) {
        originData = this.getRefreshResult(originData, this.resourceMetrics.originData);
      }
      this.resourceMetrics = {
        originData,
        data: module26(Object.values(originData), "[0].data.result", {}),
        isLoading: false
      };
      return originData;
    }
  }]);
  return h;
})(module847);
o = module49(u.prototype, "statistics", [module14.observable], {
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
i = module49(u.prototype, "resourceMetrics", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {
      originData: {},
      data: {},
      isLoading: false
    };
  }
});
module49(u.prototype, "fetchStatistics", [module14.action], Object.getOwnPropertyDescriptor(u.prototype, "fetchStatistics"), u.prototype);
module49(u.prototype, "getDevopsCount", [module14.action], Object.getOwnPropertyDescriptor(u.prototype, "getDevopsCount"), u.prototype);
module49(u.prototype, "fetchApplicationResourceMetrics", [module14.action], Object.getOwnPropertyDescriptor(u.prototype, "fetchApplicationResourceMetrics"), u.prototype);
var _default = exports["default"] = u;

/***/ },

/***/ "./src/unpacked/module-1129.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1129.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-65.js */ "./src/unpacked/module-65.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-88.js */ "./src/unpacked/module-88.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js"));
__webpack_require__(/*! utils/babel-helpers/initializerWarningHelper */ "./src/utils/babel-helpers/initializerWarningHelper.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/rank/index */ "./src/stores/rank/index.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module65 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module88 = (0, _recoverInterop.__recoverInterop)(_module4);
const module55 = (0, _recoverInterop.__recoverInterop)(_module5);
const module56 = (0, _recoverInterop.__recoverInterop)(_module6);
const module51 = (0, _recoverInterop.__recoverInterop)(_module7);
const module49 = (0, _recoverInterop.__recoverInterop)(_module8);
const module14 = (0, _recoverInterop.__recoverInterop)(_module9);
const module1128 = (0, _recoverInterop.__recoverInterop)(_module0);
let n;
let l;
let u;
const y = ["namespace_cpu_usage", "namespace_memory_usage_wo_cache", "namespace_cpu_used_requests_utilisation", "namespace_cpu_used_limits_utilisation", "namespace_memory_used_requests_utilisation", "namespace_memory_used_limits_utilisation", "namespace_pvc_bytes_used", "namespace_gpu_usage", "namespace_gpu_memory_usage", "namespace_pod_count", "namespace_net_bytes_received", "namespace_net_bytes_transmitted"];
const E = ["namespace_memory_usage_wo_cache", "namespace_memory_limit_hard", "namespace_cpu_usage", "namespace_cpu_limit_hard", "namespace_gpu_limit_hard", "namespace_gpu_usage", "namespace_gpu_memory_usage", "namespace_pod_count", "namespace_pods_hard", "namespace_net_bytes_received", "namespace_net_bytes_transmitted", "namespace_cpu_used_requests_utilisation", "namespace_cpu_used_limits_utilisation", "namespace_memory_used_requests_utilisation", "namespace_memory_used_limits_utilisation", "namespace_pvc_bytes_used", "namespace_pvc_count"];
n = (e => {
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
  function a(e) {
    let r;
    module36(this, a);
    r = t.call(this, e);
    module65(r, "sort_metric", l, module88(r));
    module65(r, "changeWorkSpace", u, module88(r));
    r.sort_metric_options = (0, _index.hideGPUByLicense)(e.sort_metric_options || y, r.cluster);
    r.metrics_filter = (0, _index.hideGPUByLicense)(E, r.cluster).join("|");
    return r;
  }
  module37(a, [{
    key: "fetchUrl",
    get: function () {
      return `${this.apiVersion}/namespace_metrics`;
    }
  }]);
  return a;
})(module1128);
l = module49(n.prototype, "sort_metric", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return y[0];
  }
});
u = module49(n.prototype, "changeWorkSpace", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return function (t) {
      _this.workspace = t;
      _this.fetchAll();
    };
  }
});
var _default = exports["default"] = n;

/***/ },

/***/ "./src/unpacked/module-1395.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1395.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
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
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-997.js */ "./src/unpacked/module-997.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3821.js */ "./src/unpacked/module-3821.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module997 = (0, _recoverInterop.__recoverInterop)(_module7);
const module3821 = (0, _recoverInterop.__recoverInterop)(_module8);
const v = (e => {
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
  function r(...l) {
    let e;
    module36(this, r);
    e = a.call(this, ...l);
    e.valueRenderer = function (e) {
      return module553.default.createElement("div", {
        title: (0, _index.showNameAndAlias)(e.cluster)
      }, t("CLUSTER_VALUE", {
        value: (0, _index.showNameAndAlias)(e.cluster)
      }));
    };
    e.optionRenderer = function (e) {
      const title = (0, _index.showNameAndAlias)(e.cluster);
      return module553.default.createElement("div", {
        title
      }, module553.default.createElement("div", null, title), !e.cluster.isReady && module553.default.createElement("div", null, module553.default.createElement(module997, {
        data: e.cluster,
        noTip: true
      })));
    };
    return e;
  }
  module37(r, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        cluster,
        clusters,
        onChange
      } = props;
      return module553.default.createElement(module186.Select, {
        className: module3821.select,
        value: cluster,
        onChange,
        options: clusters,
        valueRenderer: this.valueRenderer,
        optionRenderer: this.optionRenderer,
        showTip: true
      });
    }
  }]);
  return r;
})(module553.Component);
var _default = exports["default"] = v;

/***/ },

/***/ "./src/unpacked/module-1798.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1798.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Component = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-187.js */ "./node_modules/core-js3/modules/es.array.every.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-138.js */ "./node_modules/core-js3/modules/es.object.assign.js");
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
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-88.js */ "./src/unpacked/module-88.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module40 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module41 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-159.js */ "./src/unpacked/module-159.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-189.js */ "./src/unpacked/module-189.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-891.js */ "./src/unpacked/module-891.js"));
var _index2 = __webpack_require__(/*! components/Cards/Monitoring/index */ "./src/components/Cards/Monitoring/index.js");
var _index3 = __webpack_require__(/*! components/Charts/index */ "./src/components/Charts/index.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Modals/Monitoring/ApplicationResource */ "./src/components/Modals/Monitoring/ApplicationResource.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3788.js */ "./src/unpacked/module-3788.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module31 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module88 = (0, _recoverInterop.__recoverInterop)(_module4);
const module55 = (0, _recoverInterop.__recoverInterop)(_module5);
const module56 = (0, _recoverInterop.__recoverInterop)(_module6);
const module51 = (0, _recoverInterop.__recoverInterop)(_module7);
const module3 = (0, _recoverInterop.__recoverInterop)(_module8);
const module63 = (0, _recoverInterop.__recoverInterop)(_module9);
const module159 = (0, _recoverInterop.__recoverInterop)(_module0);
const module26 = (0, _recoverInterop.__recoverInterop)(_module1);
const module189 = (0, _recoverInterop.__recoverInterop)(_module10);
const module891 = (0, _recoverInterop.__recoverInterop)(_module11);
const Module1214 = (0, _recoverInterop.__recoverInterop)(_Module);
const module3788 = (0, _recoverInterop.__recoverInterop)(_module12);
const R = {
  cpu_usage: "cluster_cpu_usage",
  memory_usage: "cluster_memory_usage_wo_cache",
  gpu_usage: "cluster_gpu_usage",
  gpu_memory_usage: "cluster_gpu_memory_usage",
  disk_usage: "cluster_disk_size_usage"
};
const I = (Component_1 => {
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
    t.fetchData = function (e) {
      t.monitorStore.fetchMetrics({
        metrics: Object.values((0, _index.hideGPUByLicense)(R, t.cluster)),
        ...e
      });
    };
    t.isEmptyData = function (e) {
      return !!module63(e) || Object.values(e).every(e => module63(module26(e, "data.result")));
    };
    t.showModal = function (e) {
      return (0, _index.cacheFunc)(`_showModal_${e.type}`, function () {
        if (t.props.workspace) {
          e.workspace = t.props.workspace;
        }
        t.setState({
          showModal: true,
          selectItem: {
            ...e
          }
        });
      }, module88(t));
    };
    t.hideModal = function () {
      t.setState({
        showModal: false,
        selectItem: {}
      });
    };
    t.getControllerProps = function () {
      return {};
    };
    t.getMonitoringCfgs = function () {
      return [{
        type: "cpu",
        title: "CPU",
        unitType: "cpu",
        legend: ["USAGE"],
        metricType: R.cpu_usage
      }, {
        type: "memory",
        title: "MEMORY",
        unitType: "memory",
        legend: ["USAGE"],
        metricType: R.memory_usage
      }, {
        type: "gpu",
        title: "GPU",
        unitType: "gpu",
        legend: ["USAGE"],
        metricType: R.gpu_usage
      }, {
        type: "gpu_memory",
        title: "GPU_MEMORY",
        unitType: "memory",
        legend: ["USAGE"],
        metricType: R.gpu_memory_usage
      }];
    };
    t.state = {
      showModal: false,
      selectItem: {}
    };
    t.init();
    return t;
  }
  module37(r, [{
    key: "init",
    value: function () {
      this.monitorStore = new module891({
        cluster: this.cluster
      });
    }
  }, {
    key: "renderCard",
    value: function () {
      const _this = this;
      const monitorStore = this.monitorStore;
      const {
        isLoading,
        isRefreshing
      } = monitorStore;
      const o = (0, _index.hideGPUByLicense)(this.getMonitoringCfgs(), this.cluster);
      return /*#__PURE__*/React.createElement(_index2.Controller, _extends({
        title: t("CLUSTER_RESOURCE_USAGE"),
        step: "1h",
        times: 24,
        onFetch: this.fetchData,
        loading: isLoading,
        refreshing: isRefreshing,
        isEmpty: this.isEmptyData(this.metrics)
      }, this.getControllerProps()), /*#__PURE__*/React.createElement("div", {
        className: module3788.content
      }, o.map(t => {
        const n = module189(t, ["onClick"]);
        const onClick = module159(t.onClick) ? _this.showModal(n) : t.onClick && t.onClick(n);
        const i = module26(_this.metrics, `${t.metricType}.data.result`) || [];
        const c = (0, _monitoring.getAreaChartOps)({
          ...n,
          data: module63(i) ? [{
            values: (0, _monitoring.getZeroValues)()
          }] : i
        });
        const t_filters = t.filters;
        if (t_filters) {
          Object.assign(c, {
            filters: {
              ...t_filters,
              value: _this.state[t_filters.key] ?? "all",
              onChange: t_filters.onChange ?? function (t) {
                _this.setState(module31({}, t_filters.key, t === "all" ? undefined : t));
                _this.fetchData(module31({}, t_filters.key, t === "all" ? undefined : t));
              }
            }
          });
        }
        return /*#__PURE__*/React.createElement("div", {
          key: t.type,
          className: module3(module3788.item, module31({}, module3788.cursor, !!onClick)),
          onClick: onClick
        }, /*#__PURE__*/React.createElement(_index3.MediumArea, _extends({
          width: "100%",
          height: 100
        }, c)));
      })));
    }
  }, {
    key: "renderModal",
    value: function () {
      const state = this.state;
      const {
        showModal,
        selectItem
      } = state;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Module1214, {
        visible: showModal,
        detail: selectItem,
        cluster: this.cluster,
        workspace: this.workspace,
        workspaceStore: this.props.workspaceStore,
        onCancel: this.hideModal
      }));
    }
  }, {
    key: "render",
    value: function () {
      return /*#__PURE__*/React.createElement("div", null, this.renderCard(), this.renderModal());
    }
  }, {
    key: "metrics",
    get: function () {
      return this.monitorStore.data;
    }
  }, {
    key: "cluster",
    get: function () {
      return module26(this.props, "match.params.cluster");
    }
  }]);
  return r;
})(_module40.Component);
const w = (0, _module41.inject)("rootStore")((0, _module41.observer)(I));
var _default = exports["default"] = w;
const M = exports.Component = I;

/***/ },

/***/ "./src/unpacked/module-1800.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1800.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Component = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-187.js */ "./node_modules/core-js3/modules/es.array.every.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
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
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-88.js */ "./src/unpacked/module-88.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module39 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module40 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-159.js */ "./src/unpacked/module-159.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-189.js */ "./src/unpacked/module-189.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-891.js */ "./src/unpacked/module-891.js"));
var _index2 = __webpack_require__(/*! components/Cards/Monitoring/index */ "./src/components/Cards/Monitoring/index.js");
var _index3 = __webpack_require__(/*! components/Charts/index */ "./src/components/Charts/index.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Modals/Monitoring/ApplicationResource */ "./src/components/Modals/Monitoring/ApplicationResource.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3789.js */ "./src/unpacked/module-3789.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module31 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module88 = (0, _recoverInterop.__recoverInterop)(_module4);
const module55 = (0, _recoverInterop.__recoverInterop)(_module5);
const module56 = (0, _recoverInterop.__recoverInterop)(_module6);
const module51 = (0, _recoverInterop.__recoverInterop)(_module7);
const module3 = (0, _recoverInterop.__recoverInterop)(_module8);
const module63 = (0, _recoverInterop.__recoverInterop)(_module9);
const module159 = (0, _recoverInterop.__recoverInterop)(_module0);
const module26 = (0, _recoverInterop.__recoverInterop)(_module1);
const module189 = (0, _recoverInterop.__recoverInterop)(_module10);
const module891 = (0, _recoverInterop.__recoverInterop)(_module11);
const Module1214 = (0, _recoverInterop.__recoverInterop)(_Module);
const module3789 = (0, _recoverInterop.__recoverInterop)(_module12);
const R = {
  deployment_count: "cluster_deployment_count",
  statefulset_count: "cluster_statefulset_count",
  daemonset_count: "cluster_daemonset_count",
  job_count: "cluster_job_count",
  cronjob_count: "cluster_cronjob_count",
  pvc_count: "cluster_pvc_count",
  service_count: "cluster_service_count",
  route_count: "cluster_ingresses_extensions_count",
  pod_running_count: "cluster_pod_running_count"
};
const I = (Component_1 => {
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
    t.fetchData = function (e) {
      t.monitorStore.fetchMetrics({
        metrics: Object.values(R),
        ...e
      });
    };
    t.isEmptyData = function (e) {
      return !!module63(e) || Object.values(e).every(e => module63(module26(e, "data.result")));
    };
    t.showModal = function (e) {
      return (0, _index.cacheFunc)(`_showModal_${e.type}`, function () {
        if (t.props.workspace) {
          e.workspace = t.props.workspace;
        }
        t.setState({
          showModal: true,
          selectItem: module189(e, ["data"])
        });
      }, module88(t));
    };
    t.hideModal = function () {
      t.setState({
        showModal: false,
        selectItem: {}
      });
    };
    t.getControllerProps = function () {
      return {};
    };
    t.getMonitoringCfgs = function () {
      return [{
        type: "deployment",
        title: "DEPLOYMENT",
        legend: ["DEPLOYMENT_PL"],
        metricType: R.deployment_count
      }, {
        type: "statefulset",
        title: "STATEFULSET",
        legend: ["STATEFULSET_PL"],
        metricType: R.statefulset_count
      }, {
        type: "daemonset",
        title: "DAEMONSET",
        legend: ["DAEMONSET_PL"],
        metricType: R.daemonset_count
      }, {
        type: "job",
        title: "JOB",
        legend: ["JOB_PL"],
        metricType: R.job_count
      }, {
        type: "cronjob",
        title: "CRONJOB",
        legend: ["CRONJOB_PL"],
        metricType: R.cronjob_count
      }, {
        type: "pvc",
        title: "PERSISTENT_VOLUME_CLAIM",
        legend: ["PERSISTENT_VOLUME_CLAIM_PL"],
        metricType: R.pvc_count
      }, {
        type: "service",
        title: "SERVICE",
        legend: ["SERVICE_PL"],
        metricType: R.service_count
      }, {
        type: "routes",
        title: "ROUTE",
        legend: ["ROUTE_PL"],
        metricType: R.route_count
      }, {
        type: "pod",
        title: "POD",
        legend: ["RUNNING_PODS"],
        metricType: R.pod_running_count
      }];
    };
    t.state = {
      showModal: false,
      selectItem: {}
    };
    t.init();
    return t;
  }
  module37(r, [{
    key: "init",
    value: function () {
      this.monitorStore = new module891({
        cluster: this.cluster
      });
    }
  }, {
    key: "renderCard",
    value: function () {
      const _this = this;
      const monitorStore = this.monitorStore;
      const {
        isLoading,
        isRefreshing
      } = monitorStore;
      const o = this.getMonitoringCfgs();
      return /*#__PURE__*/React.createElement(_index2.Controller, _extends({
        title: t("APPLICATION_RESOURCE_USAGE"),
        step: "1h",
        times: 24,
        onFetch: this.fetchData,
        loading: isLoading,
        refreshing: isRefreshing,
        isEmpty: this.isEmptyData(this.metrics)
      }, this.getControllerProps()), /*#__PURE__*/React.createElement("div", {
        className: module3789.content
      }, o.map(t => {
        const a = {
          ...t,
          unit: ""
        };
        const onClick = module159(t.onClick) ? _this.showModal(a) : t.onClick && t.onClick(a);
        const n = module26(_this.metrics, `${t.metricType}.data.result`) || [];
        const o = (0, _monitoring.getAreaChartOps)({
          ...a,
          data: module63(n) ? [{
            values: (0, _monitoring.getZeroValues)()
          }] : n
        });
        return /*#__PURE__*/React.createElement("div", {
          key: t.type,
          className: module3789.wrapper
        }, /*#__PURE__*/React.createElement("div", {
          className: module3(module3789.item, module31({}, module3789.cursor, !!onClick)),
          onClick: onClick
        }, /*#__PURE__*/React.createElement(_index3.MediumArea, _extends({
          width: "100%",
          height: 100
        }, o))));
      })));
    }
  }, {
    key: "renderModal",
    value: function () {
      const state = this.state;
      const {
        showModal,
        selectItem
      } = state;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Module1214, {
        visible: showModal,
        detail: selectItem,
        cluster: this.cluster,
        workspace: this.workspace,
        workspaceStore: this.props.workspaceStore,
        onCancel: this.hideModal
      }));
    }
  }, {
    key: "render",
    value: function () {
      return /*#__PURE__*/React.createElement("div", null, this.renderCard(), this.renderModal());
    }
  }, {
    key: "metrics",
    get: function () {
      return this.monitorStore.data;
    }
  }, {
    key: "cluster",
    get: function () {
      return module26(this.props, "match.params.cluster");
    }
  }]);
  return r;
})(_module39.Component);
const w = (0, _module40.inject)("rootStore")((0, _module40.observer)(I));
var _default = exports["default"] = w;
const M = exports.Component = I;

/***/ },

/***/ "./src/unpacked/module-1801.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1801.js ***!
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
__webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
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
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Avatar */ "./src/components/Base/Avatar.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Empty */ "./src/components/Base/Empty.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! components/Tables/Ranking */ "./src/components/Tables/Ranking.js"));
var _module17 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module18 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const Module789 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module848 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module987 = (0, _recoverInterop.__recoverInterop)(_Module3);
let l;
const y = (0, _module17.inject)("rootStore")(l = (0, _module17.observer)(l = (Component_1 => {
  module55(RComponent, Component_1);
  var a = (RComponent_1 => {
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
      const r = module51(RComponent_1);
      if (t) {
        const n = module51(this).constructor;
        a = Reflect.construct(r, arguments, n);
      } else {
        a = r.apply(this, arguments);
      }
      return module56(this, a);
    };
  })(RComponent);
  function RComponent(...l) {
    let e;
    module36(this, RComponent);
    e = a.call(this, ...l);
    e.IconWidth = 40;
    e.rankTdWidth = 124;
    e.columns = [{
      dataIndex: "namespace",
      title: t("PROJECT"),
      key: "avatar",
      render: function (t) {
        return /*#__PURE__*/React.createElement(Module789, {
          icon: "project",
          iconSize: 40,
          title: (0, _index.showNameAndAlias)(t, "project", {
            cluster: e.props.cluster
          }),
          to: `${e.prefix}/${t}`
        });
      }
    }, {
      sort_metric: "namespace_cpu_usage",
      key: "cpu",
      width: e.rankTdWidth,
      title: /*#__PURE__*/React.createElement("div", null, t("CPU_USAGE")),
      render: function (e) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, (0, _monitoring.getSuitableValue)(e.namespace_cpu_usage, "cpu", "-")), /*#__PURE__*/React.createElement("div", null, t("QUOTA_VALUE", {
          value: (0, _monitoring.getSuitableValue)(e.namespace_cpu_limit_hard, "cpu", "-")
        })));
      }
    }, {
      sort_metric: "namespace_memory_usage_wo_cache",
      width: e.rankTdWidth,
      title: /*#__PURE__*/React.createElement("div", null, t("MEMORY_USAGE")),
      key: "memory",
      render: function (e) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, (0, _monitoring.getSuitableValue)(e.namespace_memory_usage_wo_cache, "memory", "-")), /*#__PURE__*/React.createElement("div", null, t("QUOTA_VALUE", {
          value: (0, _monitoring.getSuitableValue)(e.namespace_memory_limit_hard, "memory", "-")
        })));
      }
    }, {
      sort_metric: "namespace_gpu_usage",
      key: "gpu",
      width: e.rankTdWidth,
      title: /*#__PURE__*/React.createElement("div", null, t("GPU_USAGE")),
      render: function (e) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, (0, _monitoring.getSuitableValue)(e.namespace_gpu_usage, "gpu", "-")), /*#__PURE__*/React.createElement("div", null, t("QUOTA_VALUE", {
          value: (0, _monitoring.getSuitableValue)(e.namespace_gpu_limit_hard, "gpu", "-")
        })));
      }
    }, {
      sort_metric: "namespace_gpu_memory_usage",
      width: e.rankTdWidth,
      title: /*#__PURE__*/React.createElement("div", null, t("GPU_MEMORY_USAGE")),
      key: "gpu_memory",
      render: function (e) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, (0, _monitoring.getSuitableValue)(e.namespace_gpu_memory_usage, "memory", "-")));
      }
    }, {
      sort_metric: "namespace_pod_count",
      title: t("POD_COUNT"),
      key: "pod",
      width: e.rankTdWidth,
      render: function (e) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, e.namespace_pod_count || "-"), /*#__PURE__*/React.createElement("div", null, t("QUOTA_VALUE", {
          value: e.namespace_pods_hard || "-"
        })));
      }
    }, {
      sort_metric: "namespace_net_bytes_transmitted",
      title: t("OUTBOUND_TRAFFIC"),
      key: "namespace_net_bytes_transmitted",
      width: e.rankTdWidth,
      render: function (e) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, (0, _monitoring.getSuitableValue)(e.namespace_net_bytes_transmitted, "bandwidth", "-")));
      }
    }, {
      sort_metric: "namespace_net_bytes_received",
      title: t("INBOUND_TRAFFIC"),
      key: "namespace_net_bytes_received",
      width: e.rankTdWidth,
      render: function (e) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, (0, _monitoring.getSuitableValue)(e.namespace_net_bytes_received, "bandwidth", "-")));
      }
    }];
    return e;
  }
  module37(RComponent, [{
    key: "toPercentage",
    value: function (e) {
      const t = Number(e) || 0;
      return `${Math.ceil(100 * t)}%`;
    }
  }, {
    key: "toUnit",
    value: function (e, t = "") {
      if (isNaN(e)) {
        return "-";
      }
      return `${e} ${t}`;
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        theme,
        store,
        cluster
      } = props;
      const data = this.props.store.data;
      const columns = (0, _index.hideGPUByLicense)(this.columns, cluster);
      return /*#__PURE__*/React.createElement(Module987, {
        rowKey: "namespace",
        theme: theme,
        columns: columns,
        store: store,
        dataSource: data.toJS(),
        emptyText: /*#__PURE__*/React.createElement(Module848, null)
      });
    }
  }, {
    key: "prefix",
    get: function () {
      const props = this.props;
      const {
        workspace,
        cluster
      } = props;
      return `${workspace ? `/${workspace}` : ""}/clusters/${cluster}/projects`;
    }
  }]);
  return RComponent;
})(_module18.Component)) || l) || l;
var _default = exports["default"] = y;

/***/ },

/***/ "./src/unpacked/module-1806.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1806.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
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
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-137.js */ "./node_modules/core-js3/modules/es.string.split.js");
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
__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module41 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! stores/gateway */ "./src/stores/gateway.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! components/HOCs/withList */ "./src/components/HOCs/withList.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Tables/List */ "./src/components/Tables/List.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1395.js */ "./src/unpacked/module-1395.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module834 = (0, _recoverInterop.__recoverInterop)(_module6);
const module794 = (0, _recoverInterop.__recoverInterop)(_module7);
const ListPage = _module7.ListPage;
const Module797 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module1395 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module186 = (0, _recoverInterop.__recoverInterop)(_module8);
const module63 = (0, _recoverInterop.__recoverInterop)(_module9);
const module26 = (0, _recoverInterop.__recoverInterop)(_module0);
let s;
const T = module794({
  store: new module834(),
  module: "gateways"
})(s = (Component_1 => {
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
    let n;
    module36(this, r);
    n = a.call(this);
    n.getData = async function e() {
      let t;
      let a;
      let r;
      let l;
      let u;
      const i = arguments;
      t = i.length > 0 && i[0] !== undefined ? i[0] : {};
      ({
        silent: a,
        ...r
      } = t);
      l = n.props.store;
      if (a) {
        l.list.silent = true;
      }
      u = {
        ...n.props.match.params,
        ...r,
        cluster: r?.cluster || n.state.cluster,
        labelSelector: n.labelSelector
      };
      await l.fetchList(u);
      l.list.silent = false;
    };
    n.getGatewayResource = function (e) {
      const e_cluster = e.cluster;
      if (n.isProjectGateway) {
        return {
          cluster: e_cluster,
          namespace: e.name.split("kubesphere-router-")[1],
          type: "project"
        };
      }
      if (n.isProjectGateway) {
        return undefined;
      }
      return {
        cluster: e_cluster,
        workspace: e.name.split("kubesphere-router-workspace-")[1],
        type: "workspace"
      };
    };
    n.handleFetch = function (e, t) {
      n.routing.query({
        ...e,
        type: n.type
      }, t);
    };
    n.getColumns = function () {
      const getSortOrder = n.props.getSortOrder;
      return [{
        title: t("NAME"),
        dataIndex: "name",
        sorter: true,
        sortOrder: getSortOrder("name"),
        render: function (e, t) {
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
            style: {
              fontWeight: 700,
              cursor: "auto",
              marginRight: "4px"
            }
          }, e), n.renderDisabledTip(t));
        }
      }, {
        title: t("ACCESS_MODE"),
        dataIndex: "type"
      }, {
        title: t("IP_ADDRESS"),
        dataIndex: "defaultIngress"
      }, {
        title: t("NODE_PORTS"),
        dataIndex: "ports",
        render: function (e) {
          if (module63(e)) {
            return "-";
          }
          return e.map(e => `${e.name.toUpperCase()}: ${e.nodePort}`).join("/");
        }
      }, {
        title: t("REPLICA_COUNT"),
        dataIndex: "replicas"
      }, {
        title: t("TRACING"),
        dataIndex: "serviceMeshEnable",
        render: function (e) {
          if (e) {
            return t("ON");
          }
          return t("OFF");
        }
      }];
    };
    n.renderDesc = function () {
      const type = n.props.type;
      const cluster = n.props.match.params.cluster;
      const r = globals.app.isMultiCluster ? module26(globals, `clusterConfig.${cluster}.ksVersion`) : module26(globals, "ksConfig.ksVersion");
      if (type === "workspace" && (0, _index.compareVersion)(r, "v3.4.0") < 0) {
        return t("CLUSTER_NOT_SUPPORT_WORKSPACE_GATEWAY");
      }
      return t(`ENT_${type.toUpperCase()}_ENABLE_GATEWAY_DESC`);
    };
    n.handleClusterChange = function (cluster) {
      n.setState({
        cluster
      });
      n.getData({
        cluster
      });
    };
    const l = (0, _index.getHostClusterName)();
    n.state = {
      cluster: e?.cluster || module26(e, "workspaceStore.cluster", l)
    };
    return n;
  }
  module37(r, [{
    key: "renderDisabledTip",
    value: function (e) {
      if (e.createTime) {
        return null;
      }
      return /*#__PURE__*/React.createElement(module186.Tooltip, {
        content: t("UPDATE_GATEWAY_DESC"),
        placement: "top"
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        size: 20,
        name: "update",
        color: {
          primary: "#f5a623 ",
          secondary: "#ffe1be"
        }
      }));
    }
  }, {
    key: "renderCustomFilter",
    value: function () {
      const cluster = this.state.cluster;
      if (this.props.showClusterSelect) {
        return /*#__PURE__*/React.createElement(Module1395, {
          cluster: cluster,
          clusters: this.clusters,
          onChange: this.handleClusterChange
        });
      }
      return null;
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        tableProps,
        type,
        inCluster
      } = props;
      return /*#__PURE__*/React.createElement(ListPage, _extends({}, this.props, {
        getData: this.getData,
        noWatch: true
      }), /*#__PURE__*/React.createElement(Module797, _extends({}, tableProps, this.tableOtherProps, {
        name: `${type.toUpperCase()}_GATEWAY`,
        emptyProps: {
          desc: inCluster ? this.renderDesc() : t("PROJECT_ENABLE_GATEWAY_DESC_WS")
        },
        itemActions: this.itemActions,
        tableActions: this.tableActions,
        columns: this.getColumns(),
        onCreate: null,
        customFilter: this.renderCustomFilter(),
        searchType: "name",
        isLoading: tableProps.isLoading
      })));
    }
  }, {
    key: "labelSelector",
    get: function () {
      return `kubesphere.io/gateway-type=${this.props.type}`;
    }
  }, {
    key: "routing",
    get: function () {
      return this.props.rootStore.routing;
    }
  }, {
    key: "isProjectGateway",
    get: function () {
      const type = this.props.type;
      return !type || type === "project";
    }
  }, {
    key: "workspaceStore",
    get: function () {
      return this.props.workspaceStore;
    }
  }, {
    key: "clusters",
    get: function () {
      if (this.workspaceStore) {
        return this.workspaceStore.clusters.data.map(cluster => ({
          label: cluster.name,
          value: cluster.name,
          cluster
        })).filter(e => module26(globals, `ksConfig.enabledExtensionModulesStatus.gateway.clusterSchedulingStatuses.${e.value}`, false));
      }
      return [];
    }
  }, {
    key: "cluster",
    get: function () {
      if (this.workspaceStore) {
        return this.workspaceStore.cluster;
      }
      return null;
    }
  }, {
    key: "itemActions",
    get: function () {
      const _this = this;
      const trigger = this.props.trigger;
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT"),
        action: "edit",
        show: function (e) {
          return e.createTime;
        },
        onClick: function (t) {
          trigger("gateways.edit", {
            detail: t._originData,
            type: "",
            name: t.name,
            ..._this.getGatewayResource(t),
            success: _this.routing.query
          });
        }
      }, {
        key: "update",
        icon: "update",
        text: t("UPDATE"),
        action: "manage",
        show: function (e) {
          return !e.createTime;
        },
        onClick: function (t) {
          return trigger("gateways.update", {
            detail: t._originData,
            ..._this.getGatewayResource(t),
            success: _this.routing.query
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DISABLE"),
        action: "delete",
        onClick: function (detail) {
          return trigger("gateways.delete", {
            type: _this.props.name,
            detail,
            name: detail.name,
            ..._this.getGatewayResource(detail),
            resource: detail.name,
            success: _this.routing.query
          });
        }
      }];
    }
  }, {
    key: "tableActions",
    get: function () {
      const _this = this;
      const props = this.props;
      const {
        tableProps,
        trigger
      } = props;
      return {
        ...tableProps.tableActions,
        selectActions: [{
          key: "delete",
          type: "danger",
          text: t("DISABLE"),
          action: "delete",
          onClick: function () {
            return trigger("gateways.batch.delete", {
              type: _this.props.name,
              rowKey: "name",
              success: _this.routing.query
            });
          }
        }],
        onFetch: this.handleFetch
      };
    }
  }, {
    key: "tableOtherProps",
    get: function () {
      if (this.props.showClusterSelect) {
        return {
          showEmpty: false,
          emptyText: t("PROJECT_ENABLE_GATEWAY_DESC_WS")
        };
      }
      return {};
    }
  }]);
  return r;
})(_module41.Component)) || s;
var _default = exports["default"] = T;

/***/ },

/***/ "./src/unpacked/module-2045.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2045.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2045 */ "./src/chunks/common/module-2045.js"));
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

/***/ "./src/unpacked/module-3788.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-3788.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  content: "_1flyCDLTNgroopAvztgY0S",
  item: "_1zl1DvMLX2YtTTQuvirldX",
  cursor: "_2VKG6VdQYqW_Jfgf_sdPTq"
};

/***/ },

/***/ "./src/unpacked/module-3789.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-3789.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  content: "_22oShqErzb7Zg62dSiR6cY",
  wrapper: "RRB2IIfXIPCzlpPCDoj-S",
  item: "Nd0Z8L7XQ1dllBxOFf5cb",
  cursor: "_3HIXxDWa4EOcHJnJEhIv6L"
};

/***/ },

/***/ "./src/unpacked/module-3821.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-3821.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  select: "_3C0SbiQqjs3fZQjiw1yHWo"
};

/***/ }

}]);