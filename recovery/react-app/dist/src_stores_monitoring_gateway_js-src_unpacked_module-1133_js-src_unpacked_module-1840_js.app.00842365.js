"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_stores_monitoring_gateway_js-src_unpacked_module-1133_js-src_unpacked_module-1840_js"],{

/***/ "./src/stores/monitoring/gateway.js"
/*!******************************************!*\
  !*** ./src/stores/monitoring/gateway.js ***!
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
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-442.js */ "./node_modules/core-js3/modules/es.date.now.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _defaultExport = _interopRequireWildcard(__webpack_require__(/*! stores/monitoring/base */ "./src/stores/monitoring/base.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module58 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const defaultExport = (0, _recoverInterop.__recoverInterop)(_defaultExport);
const y = (defaultExport_1 => {
  module55(r, defaultExport_1);
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
    e.resourceName = "gateways";
    e.getGatewayParams = function ({
      resources = [],
      metrics = [],
      ...rest
    } = {}) {
      const u = {
        ...rest
      };
      if (!module63(resources)) {
        u.resources_filter = `${resources.join("|")}\$`;
      }
      if (!module63(metrics)) {
        u.metrics_filter = `${metrics.join("|")}\$`;
      }
      u.time = Math.floor(Date.now() / 1000);
      return u;
    };
    return e;
  }
  module37(r, [{
    key: "fetchGatewayMetrics",
    value: async function (t) {
      let r;
      let u;
      let c;
      let s;
      let f;
      let d;
      let p;
      let v;
      ({
        autoRefresh: r = false,
        more: u = false,
        fillZero: c = true
      } = t);
      s = module58(t, ["autoRefresh", "more", "fillZero"]);
      if (r) {
        s.last = true;
        this.isRefreshing = true;
      } else {
        this.isLoading = true;
      }
      if (s.cluster) {
        this.cluster = s.cluster;
      }
      f = this.getGatewayParams(s);
      d = this.getApi(s);
      p = await (0, _index.to)(request.get(d, f));
      v = this.getResult(p);
      if (r) {
        v = this.getRefreshResult(v, this.data);
      }
      if (u) {
        v = this.getMoreResult(v, this.data);
      }
      this.data = c ? (0, _monitoring.fillEmptyMetrics)(f, v) : v;
      this.isLoading = false;
      this.isRefreshing = false;
      return v;
    }
  }]);
  return r;
})(defaultExport);
var _default = exports["default"] = y;

/***/ },

/***/ "./src/unpacked/module-1133.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1133.js ***!
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
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-192.js */ "./node_modules/core-js3/modules/es.array.splice.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-98.js */ "./node_modules/core-js3/modules/es.object.entries.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/slicedToArray */ "./src/utils/babel-helpers/slicedToArray.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module40 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module42 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module43 = __webpack_require__(/*! unpacked/module-1805.js */ "./src/unpacked/module-1805.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-60.js */ "./src/unpacked/module-60.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module13 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-240.js */ "./src/unpacked/module-240.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3818.js */ "./src/unpacked/module-3818.js"));
var _module14 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3820.js */ "./src/unpacked/module-3820.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module96 = (0, _recoverInterop.__recoverInterop)(_module2);
const module31 = (0, _recoverInterop.__recoverInterop)(_module3);
const module36 = (0, _recoverInterop.__recoverInterop)(_module4);
const module37 = (0, _recoverInterop.__recoverInterop)(_module5);
const module55 = (0, _recoverInterop.__recoverInterop)(_module6);
const module56 = (0, _recoverInterop.__recoverInterop)(_module7);
const module51 = (0, _recoverInterop.__recoverInterop)(_module8);
const module14 = (0, _recoverInterop.__recoverInterop)(_module9);
const module186 = (0, _recoverInterop.__recoverInterop)(_module0);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module);
const module3 = (0, _recoverInterop.__recoverInterop)(_module1);
const module63 = (0, _recoverInterop.__recoverInterop)(_module10);
const module60 = (0, _recoverInterop.__recoverInterop)(_module11);
const module26 = (0, _recoverInterop.__recoverInterop)(_module12);
const module240 = (0, _recoverInterop.__recoverInterop)(_module13);
const Module3818 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module3820 = (0, _recoverInterop.__recoverInterop)(_module14);
let l;
let u;
let o;
const M = (0, _module42.inject)("rootStore")(l = (0, _module42.observer)(l = (0, _action.trigger)((o = u = (Component_1 => {
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
  function r(...l_1) {
    let e;
    module36(this, r);
    e = a.call(this, ...l_1);
    e.handleMoreMenuClick = function (t, a) {
      const params = e.props.match.params;
      const {
        namespace,
        workspace
      } = params;
      const e_props = e.props;
      const u_type = e_props.type;
      if (e_props.isFederated) {
        localStorage.setItem("federated-cluster", e.cluster);
      }
      const namespace_1 = u_type === "cluster" ? "" : namespace;
      switch (a) {
        case "view":
          e.props.rootStore.routing.push({
            pathname: e.linkUrl,
            state: {
              isCluster: u_type === "cluster"
            }
          });
          break;
        case "edit":
          e.trigger("gateways.edit", {
            cluster: e.cluster,
            namespace: namespace_1,
            workspace,
            name: e.gateway.name,
            type: u_type,
            detail: module14.toJS(e.gateway._originData),
            store: e.store,
            success: e.props.getData
          });
          break;
        case "update":
          e.trigger("gateways.update", {
            cluster: e.cluster,
            namespace: namespace_1,
            workspace,
            detail: module14.toJS(e.gateway._originData),
            store: e.store,
            success: e.props.getData,
            type: u_type,
            updateToLatest: !!e.gateway.createTime
          });
          break;
        case "delete":
          e.trigger("gateways.delete", {
            cluster: e.cluster,
            type: e.props.type === "cluster" ? "CLUSTER_GATEWAY" : e.props.type === "workspace" ? "WORKSPACE_GATEWAY" : "PROJECT_GATEWAY",
            namespace: namespace_1,
            name: e.gateway.name,
            workspace,
            detail: module14.toJS(e.gateway),
            store: e.store,
            success: e.props.getData
          });
      }
    };
    e.title = function () {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, e.props.type === "project" ? t("PROJECT_GATEWAY") : e.props.type === "workspace" ? t("WORKSPACE_GATEWAY") : t("CLUSTER_GATEWAY")), e.needUpdate ? /*#__PURE__*/React.createElement(module186.Tooltip, {
        content: t("UPDATE_GATEWAY_DESC"),
        placement: "top"
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "update",
        color: {
          primary: "#f5a623 ",
          secondary: "#ffe1be"
        }
      })) : null);
    };
    e.handleCreateGateway = function () {
      const params = e.props.match.params;
      const {
        namespace,
        workspace
      } = params;
      const e_props = e.props;
      const {
        type,
        getData
      } = e_props;
      if (globals.app.hasKSModule("gateway") && e.isClusterInstallGatway) {
        let i = "";
        switch (type) {
          case "cluster":
            i = "kubesphere-router-cluster";
            break;
          case "workspace":
            i = `kubesphere-router-workspace-${workspace}`;
            break;
          case "project":
            i = `kubesphere-router-namespace-${namespace}`;
        }
        e.trigger("gateways.create", {
          name: i,
          namespace: type === "cluster" ? "" : namespace,
          type,
          workspace,
          cluster: e.cluster,
          store: e.store,
          success: getData
        });
      } else {
        module240.warning({
          content: t("PLEASE_INSTALL_GATEWAY")
        });
      }
    };
    e.renderInternetAccess = function () {
      const e_props = e.props;
      const {
        isFederated,
        title
      } = e_props;
      return /*#__PURE__*/React.createElement(React.Fragment, null, title, /*#__PURE__*/React.createElement(Module790, {
        className: module3("margin-t12", module31({}, module3820.federatedContainer, isFederated))
      }, e.gatewayConfig.map((e, key) => /*#__PURE__*/React.createElement("div", {
        className: module3820.container,
        key: key
      }, e.map(e => {
        if (e.icon) {
          return /*#__PURE__*/React.createElement("div", {
            className: module3820.header,
            key: e.key
          }, typeof e.icon === "string" ? /*#__PURE__*/React.createElement(module186.Icon, {
            name: e.icon,
            size: 40
          }) : /*#__PURE__*/React.createElement("span", {
            className: module3820.customIcon
          }, e.icon), /*#__PURE__*/React.createElement("div", {
            className: module3820.item
          }, /*#__PURE__*/React.createElement("div", null, e.title), /*#__PURE__*/React.createElement("p", null, e.desc)));
        }
        if (e.component) {
          return /*#__PURE__*/React.createElement("div", {
            className: module3(module3820.item, "text-right"),
            key: e.key
          }, e.component);
        }
        return /*#__PURE__*/React.createElement("div", {
          className: module3820.item,
          key: e.key
        }, /*#__PURE__*/React.createElement("div", null, e.title), /*#__PURE__*/React.createElement("p", null, t(e.desc)));
      }))), e.gateway.type !== "NodePort" && /*#__PURE__*/React.createElement("div", {
        className: module3(module3820.annotations, module31({}, module3820.bgWhite, isFederated))
      }, /*#__PURE__*/React.createElement("p", null, t("ANNOTATION_PL")), /*#__PURE__*/React.createElement("ul", null, module63(e.gateway.annotations) ? /*#__PURE__*/React.createElement("li", null, t("NO_DATA")) : Object.entries(e.gateway.annotations).map(e => {
        const t = module96(e, 2);
        const a = t[0];
        const r = t[1];
        return /*#__PURE__*/React.createElement("li", {
          key: a
        }, /*#__PURE__*/React.createElement("span", {
          className: module3820.key
        }, a), /*#__PURE__*/React.createElement("span", null, r));
      })))));
    };
    return e;
  }
  module37(r, [{
    key: "getNodePorts",
    value: function (e) {
      if (e.ports) {
        return e.ports.map(e => `${e.name}:${e.nodePort}`).join("; ");
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
    key: "renderMoreMenu",
    value: function () {
      return /*#__PURE__*/React.createElement(module186.Menu, {
        onClick: this.handleMoreMenuClick
      }, this.itemActions.map(e => /*#__PURE__*/React.createElement(module186.Menu.MenuItem, {
        key: e.key,
        disabled: e.disabled
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: e.icon,
        type: "light"
      }), " ", e.text)));
    }
  }, {
    key: "render",
    value: function () {
      const params = this.props.match.params;
      const {
        component,
        namespace,
        workspace
      } = params;
      const props = this.props;
      const {
        type,
        title,
        gatewayList,
        inCluster
      } = props;
      const c = module60(gatewayList) && gatewayList[0];
      const s = module60(gatewayList) && gatewayList[1];
      return /*#__PURE__*/React.createElement("div", null, this.isEmptyData ? namespace && type === "cluster" || namespace && type === "workspace" || workspace && type === "cluster" || c && workspace && type === "workspace" || s && namespace && type === "project" || c && namespace && type === "project" ? null : /*#__PURE__*/React.createElement(React.Fragment, null, title, /*#__PURE__*/React.createElement(Module3818, {
        component: component,
        type: type,
        handleCreateGateway: this.handleCreateGateway,
        cluster: this.cluster,
        canEdit: this.canEdit,
        inCluster: inCluster
      })) : this.renderInternetAccess());
    }
  }, {
    key: "gateway",
    get: function () {
      return this.props.detail;
    }
  }, {
    key: "store",
    get: function () {
      return this.props.store;
    }
  }, {
    key: "isEmptyData",
    get: function () {
      return module63(module14.toJS(this.gateway));
    }
  }, {
    key: "canEdit",
    get: function () {
      return this.props.actions && !this.props.actions.includes("manage");
    }
  }, {
    key: "hasGatewayTypeLabel",
    get: function () {
      return !!module26(this.gateway, ["_originData", "metadata", "labels", "kubesphere.io/gateway-type"], false);
    }
  }, {
    key: "hasWorkspaceLabel",
    get: function () {
      return !!module26(this.gateway, ["_originData", "metadata", "labels", "kubesphere.io/workspace"], false);
    }
  }, {
    key: "needUpdate",
    get: function () {
      const type = this.props.type;
      return !this.gateway.createTime || type === "cluster" && !this.hasGatewayTypeLabel || type === "project" && (!this.hasGatewayTypeLabel || !this.hasWorkspaceLabel);
    }
  }, {
    key: "cluster",
    get: function () {
      const cluster = this.props.match.params.cluster;
      if (this.props.isFederated) {
        return this.props.cluster.name;
      }
      return cluster;
    }
  }, {
    key: "itemActions",
    get: function () {
      const disabled = this.canEdit || !this.needUpdate;
      const a = [{
        key: "view",
        icon: "eye",
        text: t("VIEW_DETAILS")
      }, {
        key: "edit",
        icon: "pen",
        text: t("EDIT"),
        disabled: this.canEdit || this.needUpdate
      }, {
        key: "delete",
        icon: "trash",
        text: t("DISABLE"),
        disabled: this.canEdit
      }];
      const r = {
        key: "update",
        icon: "update",
        text: t("UPDATE"),
        disabled
      };
      if (!disabled) {
        a.splice(2, 0, r);
      }
      return a;
    }
  }, {
    key: "linkUrl",
    get: function () {
      const prefix = this.props.prefix;
      if (prefix) {
        return `${prefix}/${this.gateway.name}/gateway-configs`;
      }
      return `/clusters/${this.cluster}/gateways/cluster/${this.gateway.name}/gateway-configs`;
    }
  }, {
    key: "gatewayConfig",
    get: function () {
      const gateway = this.gateway;
      const {
        creator,
        createTime,
        replicas,
        type,
        ports,
        loadBalancerIngress,
        serviceMeshEnable,
        lb
      } = gateway;
      const props = this.props;
      const {
        renderOperations,
        manageDisable
      } = props;
      const m = module63(ports) ? "-" : ports.map(e => `${e.name.toUpperCase()}: ${type === "NodePort" ? e.nodePort : e.port}`).join("/");
      const h = module63(loadBalancerIngress) ? "-" : loadBalancerIngress.join(";");
      const g = [].concat(module61(_constants.CLUSTER_PROVIDERS), [{
        label: "OpenELB",
        value: "OpenELB",
        icon: "kubernetes"
      }]);
      const icon = lb && g.find(e => e.value === lb).icon;
      const _ = globals.app.hasPermission({
        module: "clusters",
        action: "view"
      }) && this.props.type === "cluster";
      return [[{
        key: "clusterType",
        icon: "loadbalancer",
        title: this.title(),
        desc: t("TYPE")
      }, {
        key: "author",
        title: creator || "-",
        desc: t("CREATOR")
      }, {
        key: "createTime",
        title: createTime ? (0, _index.getLocalTime)(createTime).format("YYYY-MM-DD HH:mm:ss") : "-",
        desc: t("CREATION_TIME")
      }, {
        key: "edit",
        component: renderOperations ? renderOperations({
          url: this.linkUrl,
          disabled: !_ || module63(createTime)
        }) : manageDisable ? null : /*#__PURE__*/React.createElement(module186.Dropdown, {
          theme: "dark",
          content: this.renderMoreMenu(),
          trigger: "click",
          placement: "bottomRight"
        }, /*#__PURE__*/React.createElement(module186.Button, null, t("MANAGE")))
      }], [{
        key: "method",
        icon: "eip-group",
        title: type,
        desc: t("ACCESS_MODE_SCAP")
      }, lb ? {
        key: "lb",
        icon,
        title: lb,
        desc: t("LOAD_BALANCER_PROVIDER_SCAP")
      } : {
        key: "ip",
        icon: "ip",
        title: h,
        desc: t("GATEWAY_ADDRESS_SCAP")
      }, {
        key: "earth",
        icon: "earth",
        title: m,
        desc: t("NODE_PORTS_SCAP")
      }, {
        key: "pod",
        icon: "pod",
        title: replicas,
        desc: replicas === 1 ? t("REPLICA") : t("REPLICA_PL")
      }, {
        key: "appGover",
        icon: /*#__PURE__*/React.createElement(_module43.ReactComponent, null),
        title: serviceMeshEnable ? t("ON") : t("OFF"),
        desc: t("TRACING")
      }]];
    }
  }, {
    key: "isClusterInstallGatway",
    get: function () {
      const cluster = this.props.match.params.cluster;
      return module26(globals, `ksConfig.enabledExtensionModulesStatus.gateway.clusterSchedulingStatuses.${cluster}`, false);
    }
  }]);
  return r;
})(_module40.Component), u.defaultProps = {
  type: "cluster"
}, l = o)) || l) || l) || l;
var _default = exports["default"] = M;

/***/ },

/***/ "./src/unpacked/module-1805.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1805.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ReactComponent = void 0;
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const o = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M20.4 25L8.733 23.75V0L20.4 25zm-20 0l6.667-1.25V10L.4 25zm0 1.667h20L7.9 30 .4 26.667z",
  fill: "#36435C"
});
const ReactComponent = function (e) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 21 30",
    fill: "none",
    width: "1em",
    height: "1em"
  }, e), o);
};
exports.ReactComponent = ReactComponent;
var _default = exports["default"] = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjEgMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNCAyNUw4LjczMzM2IDIzLjc1VjBMMjAuNCAyNVpNMC40MDAwMjQgMjVMNy4wNjY2OSAyMy43NVYxMEwwLjQwMDAyNCAyNVpNMC40MDAwMjQgMjYuNjY2N0gyMC40TDcuOTAwMDIgMzBMMC40MDAwMjQgMjYuNjY2N1oiIGZpbGw9IiMzNjQzNUMiLz4KPC9zdmc+Cg==";

/***/ },

/***/ "./src/unpacked/module-1840.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1840.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ReactComponent = void 0;
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const o = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M22.514 45.2c10.235 0 18.515-8.28 18.515-18.514 0-9.515-7.2-17.383-16.458-18.412v-2.16h3.086V2H17.371v4.114h3.086v2.16C11.2 9.303 4 17.12 4 26.686 4 36.92 12.28 45.2 22.514 45.2zm0-32.514c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14zM32.8 8.994l2.983-2.983c2.88 1.852 5.4 4.32 7.251 7.252l-2.983 2.983A20.41 20.41 0 0032.8 8.994z",
  fill: "#36435C"
});
const i = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M22.514 37.486c5.981 0 10.8-4.819 10.8-10.8 0-5.982-4.819-10.8-10.8-10.8v10.8h-10.8c0 5.981 4.818 10.8 10.8 10.8z",
  fill: "#CCD3DB"
});
const ReactComponent = function (e) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 48 48",
    fill: "none",
    width: "1em",
    height: "1em"
  }, e), o, i);
};
exports.ReactComponent = ReactComponent;
var _default = exports["default"] = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi41MTQzIDQ1LjJDMzIuNzQ4NiA0NS4yIDQxLjAyODYgMzYuOTIgNDEuMDI4NiAyNi42ODU3QzQxLjAyODYgMTcuMTcxNCAzMy44Mjg2IDkuMzAyODYgMjQuNTcxNCA4LjI3NDI5VjYuMTE0MjlIMjcuNjU3MVYySDE3LjM3MTRWNi4xMTQyOUgyMC40NTcxVjguMjc0MjlDMTEuMiA5LjMwMjg2IDQgMTcuMTIgNCAyNi42ODU3QzQgMzYuOTIgMTIuMjggNDUuMiAyMi41MTQzIDQ1LjJaTTIyLjUxNDMgMTIuNjg1N0MzMC4yMTQzIDEyLjY4NTcgMzYuNTE0MyAxOC45ODU3IDM2LjUxNDMgMjYuNjg1N0MzNi41MTQzIDM0LjM4NTcgMzAuMjE0MyA0MC42ODU3IDIyLjUxNDMgNDAuNjg1N0MxNC44MTQzIDQwLjY4NTcgOC41MTQyOSAzNC4zODU3IDguNTE0MjkgMjYuNjg1N0M4LjUxNDI5IDE4Ljk4NTcgMTQuODE0MyAxMi42ODU3IDIyLjUxNDMgMTIuNjg1N1pNMzIuOCA4Ljk5NDMxTDM1Ljc4MjkgNi4wMTE0NUMzOC42NjI5IDcuODYyODggNDEuMTgyOSAxMC4zMzE1IDQzLjAzNDMgMTMuMjYyOUw0MC4wNTE0IDE2LjI0NTdDMzguMzAyOSAxMy4yNjI5IDM1Ljc4MjkgMTAuNzQyOSAzMi44IDguOTk0MzFaIiBmaWxsPSIjMzY0MzVDIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIuNTEzOSAzNy40ODU3QzI4LjQ5NTQgMzcuNDg1NyAzMy4zMTM5IDMyLjY2NzMgMzMuMzEzOSAyNi42ODU3QzMzLjMxMzkgMjAuNzA0MiAyOC40OTU0IDE1Ljg4NTcgMjIuNTEzOSAxNS44ODU3VjI2LjY4NTdIMTEuNzEzOUMxMS43MTM5IDMyLjY2NzMgMTYuNTMyMyAzNy40ODU3IDIyLjUxMzkgMzcuNDg1N1oiIGZpbGw9IiNDQ0QzREIiLz4KPC9zdmc+Cg==";

/***/ },

/***/ "./src/unpacked/module-3818.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-3818.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-451.js */ "./src/unpacked/module-451.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3819.js */ "./src/unpacked/module-3819.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module186 = (0, _recoverInterop.__recoverInterop)(_module);
const module451 = (0, _recoverInterop.__recoverInterop)(_module2);
const module26 = (0, _recoverInterop.__recoverInterop)(_module3);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module);
const module3819 = (0, _recoverInterop.__recoverInterop)(_module4);
function _default({
  component,
  type,
  handleCreateGateway,
  cluster,
  canEdit,
  inCluster
}) {
  const h = component || type;
  const v = globals.app.isMultiCluster ? module26(globals, `clusterConfig.${cluster}.ksVersion`) : module26(globals, "ksConfig.ksVersion");
  const disabled = type === "workspace" && (0, _index.compareVersion)(v, "v3.4.0") < 0;
  return /*#__PURE__*/React.createElement(Module790, {
    className: "margin-t12 margin-b12"
  }, /*#__PURE__*/React.createElement("div", {
    className: module3819.empty
  }, /*#__PURE__*/React.createElement("div", {
    className: module3819.icon
  }, /*#__PURE__*/React.createElement(module186.Icon, {
    name: "loadbalancer",
    size: 48
  })), /*#__PURE__*/React.createElement("div", {
    className: module3819.text
  }, /*#__PURE__*/React.createElement("div", null, t(`${module451(h).toUpperCase()}_GATEWAY_NOT_ENABLED`)), disabled ? /*#__PURE__*/React.createElement("p", null, t("CLUSTER_UPGRADE_REQUIRED", {
    version: "3.4"
  })) : inCluster ? /*#__PURE__*/React.createElement("p", null, t(`ENT_${h.toUpperCase()}_ENABLE_GATEWAY_DESC`)) : null), (component === "cluster" || type) && !canEdit && /*#__PURE__*/React.createElement(module186.Button, {
    type: "control",
    onClick: handleCreateGateway,
    disabled: disabled
  }, t("ENABLE_GATEWAY"))));
}
;

/***/ },

/***/ "./src/unpacked/module-3819.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-3819.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  empty: "_3HZVm8i6IadwtxGrnqMR7_",
  icon: "_3dvfboot-4SALZ8vO56p0x",
  text: "j_JN-6JOnqtEGFgydFH_n"
};

/***/ },

/***/ "./src/unpacked/module-3820.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-3820.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  container: "_1AlzVbABmp4ycHK1g3cNFC",
  item: "fuZrziso64X_zghKUPExW",
  header: "ac3mq3s0q-DhY3pP_adTF",
  customIcon: "_2GiBTBxd59F0dPeU4ph9TM",
  annotations: "_1gd_UYaGne3VIj0ATRJXFu",
  bgWhite: "zc0N-dc0ltthVJfwxG9iv",
  federatedContainer: "kA_HUVOWcFM1p5KHYjL3P"
};

/***/ }

}]);