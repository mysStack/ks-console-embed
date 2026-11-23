"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_pages_clusters_gateways_Detail_js-src_unpacked_module-1215_js"],{

/***/ "./src/pages/clusters/gateways/Detail.js"
/*!***********************************************!*\
  !*** ./src/pages/clusters/gateways/Detail.js ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-86.js */ "./node_modules/core-js3/modules/es.array.index-of.js");
__webpack_require__(/*! unpacked/module-192.js */ "./node_modules/core-js3/modules/es.array.splice.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-137.js */ "./node_modules/core-js3/modules/es.string.split.js");
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
var _module30 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module32 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/gateway */ "./src/stores/gateway.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-825.js */ "./src/unpacked/module-825.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4027.js */ "./src/unpacked/module-4027.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module14 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module26 = (0, _recoverInterop.__recoverInterop)(_module8);
const module186 = (0, _recoverInterop.__recoverInterop)(_module9);
const module834 = (0, _recoverInterop.__recoverInterop)(_module0);
const Module825 = (0, _recoverInterop.__recoverInterop)(_Module);
const module4027 = (0, _recoverInterop.__recoverInterop)(_module1);
let l;
const S = (0, _module32.inject)("rootStore")(l = (0, _module32.observer)(l = (0, _action.trigger)(l = (Component_1 => {
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
  function r(...l) {
    let e;
    module36(this, r);
    e = a.call(this, ...l);
    e.store = new module834();
    e.state = {
      isCluster: false
    };
    e.fetchData = function () {
      let t;
      t = e.cluster && e.workspace && !e.namespace ? "workspace" : e.workspace && e.namespace ? "project" : "cluster";
      e.store.getGateway({
        type: t,
        cluster: e.cluster,
        namespace: e.namespace,
        workspace: e.workspace
      });
    };
    e.judgeIsCluster = function () {
      const isCluster = module26(e.props.location, "state.isCluster", false);
      e.setState({
        isCluster
      });
    };
    e.getOperations = function () {
      const a = module14.toJS(e.detail);
      const namespace = e.type === "cluster" ? "" : e.namespace;
      const n = [{
        key: "edit",
        icon: "pen",
        text: t("EDIT"),
        action: "manage",
        onClick: function () {
          return e.trigger("gateways.edit", {
            cluster: e.cluster,
            namespace,
            type: a.gatewayType,
            name: a.name,
            workspace: e.workspace,
            detail: module14.toJS(e.detail._originData),
            success: e.fetchData
          });
        }
      }, {
        key: "update",
        icon: "update",
        text: t("UPDATE"),
        action: "manage",
        disabled: !module63(a.createTime),
        onClick: function () {
          return e.trigger("gateways.edit", {
            cluster: e.cluster,
            namespace,
            name: a.name,
            workspace: e.workspace,
            detail: module14.toJS(e.detail._originData),
            success: e.fetchData
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DISABLE"),
        action: "delete",
        onClick: function () {
          return e.trigger("gateways.delete", {
            cluster: e.cluster,
            namespace,
            name: a.name,
            workspace: e.workspace,
            detail: module14.toJS(e.detail),
            success: function () {
              e.props.rootStore.routing.push(e.listUrl);
            }
          });
        }
      }];
      if (!module63(a.createTime)) {
        n.splice(1, 1);
      }
      return n;
    };
    e.getAttrs = function () {
      const a = module14.toJS(e.detail) || {};
      if (!module63(a)) {
        return [{
          name: t("CLUSTER"),
          value: (0, _index.showNameAndAlias)(e.cluster, "cluster")
        }, {
          name: t("CREATION_TIME"),
          value: (0, _index.getLocalTime)(a.createTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("UPDATE_TIME_TCAP"),
          value: (0, _index.getLocalTime)(a.updateTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("CREATOR"),
          value: a.creator
        }];
      }
    };
    return e;
  }
  module37(r, [{
    key: "componentDidMount",
    value: function () {
      this.fetchData();
      this.judgeIsCluster();
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      localStorage.removeItem("federated-cluster");
    }
  }, {
    key: "render",
    value: function () {
      const stores = {
        detailStore: this.store
      };
      const params = this.props.match.params;
      const {
        workspace,
        namespace
      } = params;
      if (this.store.gateway.isLoading && !this.store.gateway.name) {
        return /*#__PURE__*/React.createElement(module186.Loading, {
          className: "ks-page-loading"
        });
      }
      const l = {
        module: this.module,
        name: this.detail.name,
        operations: this.getOperations(),
        authKey: namespace ? "ks-project-gateway" : workspace ? "ks-workspace-gateway" : "cluster-settings",
        attrs: this.getAttrs(),
        breadcrumbs: [{
          label: namespace ? t("PROJECT_GATEWAY") : workspace ? t("WORKSPACE_GATEWAY") : t("CLUSTER_GATEWAY"),
          url: this.listUrl
        }]
      };
      return /*#__PURE__*/React.createElement(Module825, _extends({
        stores: stores,
        routes: module4027(this.props.match.path)
      }, l));
    }
  }, {
    key: "module",
    get: function () {
      return "gateways";
    }
  }, {
    key: "detail",
    get: function () {
      return this.store.gateway.data || {};
    }
  }, {
    key: "isWorkspaceGateway",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        namespace
      } = params;
      return workspace && !namespace;
    }
  }, {
    key: "cluster",
    get: function () {
      const cluster = this.props.match.params.cluster;
      const pathname = this.props.location.pathname;
      if (pathname.indexOf("/federatedprojects/") > -1 || pathname.indexOf("/workspaces/") > -1) {
        return localStorage.getItem("federated-cluster");
      }
      return cluster;
    }
  }, {
    key: "namespace",
    get: function () {
      return this.props.match.params.namespace;
    }
  }, {
    key: "workspace",
    get: function () {
      return this.props.match.params.workspace;
    }
  }, {
    key: "type",
    get: function () {
      if (this.cluster && !this.workspace) {
        return "cluster";
      }
      if (this.workspace && !this.cluster) {
        return "workspace";
      }
      return "project";
    }
  }, {
    key: "listUrl",
    get: function () {
      const workspace = this.props.match.params.workspace;
      const t = this.props.match.url.split("gateways")[0];
      return `${t}${workspace ? "gateways" : "gateways/cluster"}`;
    }
  }]);
  return r;
})(_module30.Component)) || l) || l) || l;
var _default = exports["default"] = S;

/***/ },

/***/ "./src/unpacked/module-1215.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1215.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/slicedToArray */ "./src/utils/babel-helpers/slicedToArray.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3800.js */ "./src/unpacked/module-3800.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module96 = (0, _recoverInterop.__recoverInterop)(_module);
const module186 = (0, _recoverInterop.__recoverInterop)(_module2);
const module3 = (0, _recoverInterop.__recoverInterop)(_module3);
const module3800 = (0, _recoverInterop.__recoverInterop)(_module4);
function _default({
  className = "",
  content
}) {
  const l = module553.useState(true);
  const f = module96(l, 2);
  const d = f[0];
  const p = f[1];
  return module553.default.createElement("div", {
    className: module3(module3800.manage, className)
  }, module553.default.createElement(module186.Dropdown, {
    theme: "dark",
    content,
    trigger: "click",
    placement: "bottomRight",
    onClick: function () {
      return p(!d);
    }
  }, module553.default.createElement("div", {
    className: module3800.button
  }, module553.default.createElement("span", null, t("MANAGE")), module553.default.createElement(module186.Icon, {
    name: d ? "caret-down" : "caret-up",
    type: "dark"
  }))));
}
;

/***/ },

/***/ "./src/unpacked/module-1839.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1839.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  container: "_2IoxQdjwa3SEzKjm6nULdr"
};

/***/ },

/***/ "./src/unpacked/module-1841.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1841.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTimes = exports.getTimeStr = exports.getTimeOptions = exports.getTimeLabel = exports.getStep = exports.getMinutes = exports.getLastTimeStr = exports.getDateStr = void 0;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-48.js */ "./node_modules/core-js3/modules/es.array.slice.js");
__webpack_require__(/*! unpacked/module-436.js */ "./src/unpacked/module-436.js");
__webpack_require__(/*! unpacked/module-319.js */ "./src/unpacked/module-319.js");
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
const getMinutes = function (e) {
  const t = e.slice(-1);
  const a = parseFloat(e);
  switch (t) {
    default:
      return a / 60;
    case "m":
      return a;
    case "h":
      return 60 * a;
    case "d":
      return 24 * a * 60;
  }
};
exports.getMinutes = getMinutes;
const getStep = function (e, t) {
  return `${parseInt(getMinutes(e) / t, 10)}m`;
};
exports.getStep = getStep;
const getTimes = function (e, t) {
  return Math.floor(getMinutes(e) / getMinutes(t));
};
exports.getTimes = getTimes;
const getTimeStr = function (e) {
  let t = Math.round(parseFloat(e) / 60);
  if (t < 60) {
    return `${t}m`;
  }
  if ((t = Math.round(t / 60)) < 24) {
    return `${t}h`;
  }
  return `${Math.round(t / 24)}d`;
};
exports.getTimeStr = getTimeStr;
const getLastTimeStr = function (e, t) {
  const a = e.slice(-1);
  const r = `${parseFloat(e) * t}${a}`;
  const n = 60 * getMinutes(r);
  return getTimeStr(n);
};
exports.getLastTimeStr = getLastTimeStr;
const getTimeLabel = function (e) {
  const a = e.slice(-1).toUpperCase();
  return t(`TIME_${a}`, {
    num: parseInt(e, 10)
  });
};
exports.getTimeLabel = getTimeLabel;
const getTimeOptions = function (e) {
  return e.map(e => ({
    label: getTimeLabel(e),
    value: e
  }));
};
exports.getTimeOptions = getTimeOptions;
const getDateStr = function (e) {
  const t = (0, _index.getLocalTime)(1000 * e);
  return `${t.format("YYYY-MM-DD HH:mm:ss")}`;
};
exports.getDateStr = getDateStr;

/***/ },

/***/ "./src/unpacked/module-1842.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1842.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  main: "_2UmmmxPbPExLp1S1tBV0Rw",
  header: "_2RhnBms20LV76wawA2oEVY",
  search: "_10avw8k5RKcCXh6P3wZbJu",
  actions: "DVsgT4Y8cfj7CcE2ypA2E",
  body: "_1uGm0ldcM0OEYLpBAuTn1O",
  footer: "_1JoaSQU0RUCOUerLBPuhUh",
  item: "_1n3J7vD1dSQYm_7w1F7Dui",
  expanded: "_3J24Eik-TWaxJALzYJK1eU",
  arrow: "_28StVPadWq7nPFLzDa2iyw",
  itemMain: "_2TwTn6iT4AYnuAOorDHp3X",
  content: "baWkJixTVh9pnSgRx3Zd4",
  text: "GWMCCnin-oEgd2Nzfs-RM",
  monitors: "HpBVVX0y1hExp1SWKsQlo",
  itemExtra: "_354nbOj8iEgp7NwMJiwHBV",
  icon: "_1aEts8wuu51zg7dLr94Mad",
  indicator: "_3sJL8q9EfyMajUnrw7-OjJ",
  statusTip: "_3kf0HCRAnfFT0Yv-FV5CNR",
  charts: "SSkovUn9sqfxbHbq179rj",
  podip: "_1JuFlUyDOhvtuYh0cW9EqZ",
  ipTip: "_2rSApFJQWguL2kYTRY8hcS",
  containers: "_3vu9Ws9d76G-tPwkX-bZ_N",
  loading: "_2FePZ9n_TRAuqiQgTb21TE",
  empty: "nf8a4h-fk0cjzQXCu0yeq",
  cluster: "_1SY7dXQl4iYmAYKqtJcTQ2"
};

/***/ },

/***/ "./src/unpacked/module-3800.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-3800.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  manage: "_8-pJZ-X-Am3wrKf0_vsf7",
  button: "_247XpOiP7kljdn3SIa-SyA"
};

/***/ },

/***/ "./src/unpacked/module-4027.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4027.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4028.js */ "./src/unpacked/module-4028.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4029.js */ "./src/unpacked/module-4029.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4036.js */ "./src/unpacked/module-4036.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4040.js */ "./src/unpacked/module-4040.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4041.js */ "./src/unpacked/module-4041.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module4028 = (0, _recoverInterop.__recoverInterop)(_module);
const module4029 = (0, _recoverInterop.__recoverInterop)(_module2);
const module4036 = (0, _recoverInterop.__recoverInterop)(_module3);
const module4040 = (0, _recoverInterop.__recoverInterop)(_module4);
const module4041 = (0, _recoverInterop.__recoverInterop)(_module5);
function _default(path) {
  return [{
    path: `${path}/gateway-configs`,
    title: "CONFIGURATION_OPTIONS",
    component: module4040,
    exact: true
  }, {
    path: `${path}/monitors`,
    title: "MONITORING",
    component: module4029,
    exact: true,
    clusterModule: "whizard-monitoring"
  }, {
    path: `${path}/logs`,
    title: "GATEWAY_LOGS",
    component: module4041,
    exact: true
  }, {
    path: `${path}/resource-status`,
    title: "RESOURCE_STATUS",
    component: module4036,
    exact: true
  }, {
    path: `${path}/metadata`,
    title: "METADATA",
    component: module4028,
    exact: true
  }, (0, _router.getIndexRoute)({
    path,
    to: `${path}/gateway-configs`,
    exact: true
  })];
}
;

/***/ },

/***/ "./src/unpacked/module-4028.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4028.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
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
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module23 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1839.js */ "./src/unpacked/module-1839.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module96 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module790 = (0, _recoverInterop.__recoverInterop)(_module7);
const module63 = (0, _recoverInterop.__recoverInterop)(_module8);
const module1839 = (0, _recoverInterop.__recoverInterop)(_module9);
let u;
const y = (0, _module23.inject)("detailStore")(u = (0, _module23.observer)(u = (e => {
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
  function r() {
    module36(this, r);
    return a.apply(this, arguments);
  }
  module37(r, [{
    key: "render",
    value: function () {
      const annotations = this.detail.annotations;
      return module553.default.createElement(module790, {
        title: t("ANNOTATION_PL")
      }, module553.default.createElement("div", {
        className: module1839.container
      }, module553.default.createElement("ul", null, module63(annotations) ? module553.default.createElement("li", null, t("NO_DATA")) : Object.entries(annotations).map(e => {
        const t = module96(e, 2);
        const a = t[0];
        const r = t[1];
        return module553.default.createElement("li", {
          key: a
        }, module553.default.createElement("span", {
          className: module1839.key
        }, a), module553.default.createElement("span", null, r));
      }))));
    }
  }, {
    key: "store",
    get: function () {
      return this.props.detailStore;
    }
  }, {
    key: "detail",
    get: function () {
      return this.store.gateway.data || {};
    }
  }]);
  return r;
})(module553.Component)) || u) || u;
var _default = exports["default"] = y;

/***/ },

/***/ "./src/unpacked/module-4029.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4029.js ***!
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
__webpack_require__(/*! unpacked/module-86.js */ "./node_modules/core-js3/modules/es.array.index-of.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-316.js */ "./node_modules/core-js3/modules/es.object.values.js");
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
var _module39 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module40 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! stores/monitoring/gateway */ "./src/stores/monitoring/gateway.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _index = __webpack_require__(/*! components/Cards/Monitoring/index */ "./src/components/Cards/Monitoring/index.js");
var _index2 = __webpack_require__(/*! components/Charts/index */ "./src/components/Charts/index.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4030.js */ "./src/unpacked/module-4030.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module26 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module1074 = (0, _recoverInterop.__recoverInterop)(_module8);
const module186 = (0, _recoverInterop.__recoverInterop)(_module9);
const Module4030 = (0, _recoverInterop.__recoverInterop)(_Module);
let i;
const N = {
  ingress_request_count: "ingress_request_count",
  ingress_request_5xx_count: "ingress_request_5xx_count",
  ingress_request_4xx_count: "ingress_request_4xx_count",
  ingress_active_connections: "ingress_active_connections",
  ingress_success_rate: "ingress_success_rate",
  ingress_request_duration_average: "ingress_request_duration_average",
  ingress_request_duration_50percentage: "ingress_request_duration_50percentage",
  ingress_request_duration_95percentage: "ingress_request_duration_95percentage",
  ingress_request_duration_99percentage: "ingress_request_duration_99percentage",
  ingress_request_volume: "ingress_request_volume",
  ingress_request_volume_by_ingress: "ingress_request_volume_by_ingress",
  ingress_request_network_sent: "ingress_request_network_sent",
  ingress_request_network_received: "ingress_request_network_received"
};
const T = (0, _module40.inject)("detailStore")(i = (0, _module40.observer)(i = (Component_1 => {
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
  function r(...l) {
    let e;
    module36(this, r);
    e = a.call(this, ...l);
    e.monitorStore = new module1074({
      cluster: e.cluster
    });
    e.state = {
      options: [],
      podsName: ""
    };
    e.fetchData = async timeParams => {
      let r;
      let pod;
      r = e.detail.name;
      pod = await e.getGatewayPods();
      e.monitorStore.fetchMetrics({
        resources: [],
        metrics: Object.values(N),
        job: `${r}-metrics`,
        component: "ingress",
        namespace: e.namespace,
        pod,
        fillZero: true,
        ...timeParams,
        workspace: e.namespace ? undefined : e.workspace
      });
      e.setState({
        timeParams
      });
    };
    e.handlePodName = function (t) {
      const name = e.detail.name;
      const timeParams = e.state.timeParams;
      e.monitorStore.fetchMetrics({
        resources: [],
        metrics: Object.values(N),
        job: `${name}-metrics`,
        component: "ingress",
        namespace: e.namespace,
        pod: t,
        workspace: e.namespace ? undefined : e.workspace,
        ...timeParams
      });
      e.setState({
        podsName: t
      });
    };
    e.getGatewayPods = async function t() {
      let a;
      let podsName;
      let options;
      a = await e.store.getGatewayPods({
        ...e.props.match.params,
        cluster: e.cluster
      });
      options = module63(a) ? [] : a.map(e => ({
        label: e.name,
        value: e.name
      }));
      podsName = module63(options) ? "" : options[0].value;
      e.setState({
        options,
        podsName
      });
      return podsName;
    };
    e.getMonitoringCfgs = function () {
      const a = module26(e.metrics, `${N.ingress_request_volume_by_ingress}.data.result`, []);
      return [{
        title: "REQUEST_COUNT",
        unit: "",
        legend: a.map(e => module26(e, "metric.ingress", "")),
        data: a
      }, {
        title: "CONNECTION_COUNT",
        unit: "",
        legend: ["CONNECTION_COUNT"],
        data: module26(e.metrics, `${N.ingress_active_connections}.data.result`, {})
      }, {
        title: "REQUEST_LATENCY_MS",
        legend: [t("P_FIFTY_LATENCY"), t("P_NINETY_FIVE_LATENCY"), t("P_NINETY_NINE_LATENCY"), t("AVERAGE_LATENCY")],
        data: [module26(e.metrics, `${N.ingress_request_duration_50percentage}.data.result[0]`, {}), module26(e.metrics, `${N.ingress_request_duration_95percentage}.data.result[0]`, {}), module26(e.metrics, `${N.ingress_request_duration_99percentage}.data.result[0]`, {}), module26(e.metrics, `${N.ingress_request_duration_average}.data.result[0]`, {})],
        dot: 4
      }, {
        title: "FAILED_REQUEST_COUNT",
        unit: "",
        legend: [t("FOUR_XX_REQUEST_COUNT"), t("FIVE_XX_REQUEST_COUNT")],
        data: [module26(e.metrics, `${N.ingress_request_4xx_count}.data.result[0]`, {}), module26(e.metrics, `${N.ingress_request_5xx_count}.data.result[0]`, {})]
      }, {
        title: "NETWORK_TRAFFIC",
        unit: "",
        unitType: "traffic",
        legend: [t("INBOUND_TRAFFIC"), t("INBOUND_TRAFFIC")],
        data: [module26(e.metrics, `${N.ingress_request_network_received}.data.result[0]`, {}), module26(e.metrics, `${N.ingress_request_network_sent}.data.result[0]`, {})]
      }];
    };
    return e;
  }
  module37(r, [{
    key: "render",
    value: function () {
      const createTime = module26(this.store.detail, "createTime");
      const monitorStore = this.monitorStore;
      const {
        isLoading,
        isRefreshing
      } = monitorStore;
      const state = this.state;
      const {
        podsName,
        options
      } = state;
      const i = this.getMonitoringCfgs();
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Module4030, this.props), /*#__PURE__*/React.createElement(_index.Controller, {
        createTime: createTime,
        onFetch: this.fetchData,
        loading: isLoading,
        refreshing: isRefreshing,
        title: /*#__PURE__*/React.createElement(module186.Select, {
          value: podsName,
          options: options,
          onChange: this.handlePodName
        }),
        isEmpty: module63(this.metrics)
      }, i.map(e => {
        const t = (0, _monitoring.getAreaChartOps)(e);
        if (module63(t.data)) {
          return null;
        }
        return /*#__PURE__*/React.createElement(_index2.SimpleArea, _extends({
          key: t.title,
          width: "100%"
        }, t));
      })));
    }
  }, {
    key: "store",
    get: function () {
      return this.props.detailStore;
    }
  }, {
    key: "detail",
    get: function () {
      return this.store.gateway.data || {};
    }
  }, {
    key: "cluster",
    get: function () {
      const cluster = this.props.match.params.cluster;
      const pathname = this.props.location.pathname;
      if (pathname.indexOf("federatedprojects") > -1 || pathname.indexOf("/workspaces/") > -1) {
        return localStorage.getItem("federated-cluster");
      }
      return cluster;
    }
  }, {
    key: "namespace",
    get: function () {
      return this.props.match.params.namespace;
    }
  }, {
    key: "workspace",
    get: function () {
      return this.props.match.params.workspace;
    }
  }, {
    key: "metrics",
    get: function () {
      return this.monitorStore.data;
    }
  }]);
  return r;
})(_module39.Component)) || i) || i;
var _default = exports["default"] = T;

/***/ },

/***/ "./src/unpacked/module-4030.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4030.js ***!
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
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-86.js */ "./node_modules/core-js3/modules/es.array.index-of.js");
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
__webpack_require__(/*! unpacked/module-190.js */ "./node_modules/core-js3/modules/es.number.to-fixed.js");
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
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-88.js */ "./src/unpacked/module-88.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module52 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _index = __webpack_require__(/*! components/Charts/index */ "./src/components/Charts/index.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module55 = __webpack_require__(/*! unpacked/module-1840.js */ "./src/unpacked/module-1840.js");
var _module10 = _interopRequireWildcard(__webpack_require__(/*! stores/monitoring/gateway */ "./src/stores/monitoring/gateway.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! stores/project */ "./src/stores/project.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module13 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module14 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-189.js */ "./src/unpacked/module-189.js"));
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4031.js */ "./src/unpacked/module-4031.js"));
var _module15 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4035.js */ "./src/unpacked/module-4035.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module31 = (0, _recoverInterop.__recoverInterop)(_module);
const module41 = (0, _recoverInterop.__recoverInterop)(_module2);
const module44 = (0, _recoverInterop.__recoverInterop)(_module3);
const module36 = (0, _recoverInterop.__recoverInterop)(_module4);
const module37 = (0, _recoverInterop.__recoverInterop)(_module5);
const module88 = (0, _recoverInterop.__recoverInterop)(_module6);
const module55 = (0, _recoverInterop.__recoverInterop)(_module7);
const module56 = (0, _recoverInterop.__recoverInterop)(_module8);
const module51 = (0, _recoverInterop.__recoverInterop)(_module9);
const module186 = (0, _recoverInterop.__recoverInterop)(_module0);
const module3 = (0, _recoverInterop.__recoverInterop)(_module1);
const module1074 = (0, _recoverInterop.__recoverInterop)(_module10);
const module439 = (0, _recoverInterop.__recoverInterop)(_module11);
const module63 = (0, _recoverInterop.__recoverInterop)(_module12);
const module26 = (0, _recoverInterop.__recoverInterop)(_module13);
const module189 = (0, _recoverInterop.__recoverInterop)(_module14);
const Module4031 = (0, _recoverInterop.__recoverInterop)(_Module);
const module4035 = (0, _recoverInterop.__recoverInterop)(_module15);
const R = {
  ingress_request_count: "ingress_request_count",
  ingress_request_5xx_count: "ingress_request_5xx_count",
  ingress_request_4xx_count: "ingress_request_4xx_count",
  ingress_active_connections: "ingress_active_connections",
  ingress_success_rate: "ingress_success_rate",
  ingress_request_duration_average: "ingress_request_duration_average",
  ingress_request_duration_50percentage: "ingress_request_duration_50percentage",
  ingress_request_duration_95percentage: "ingress_request_duration_95percentage",
  ingress_request_duration_99percentage: "ingress_request_duration_99percentage"
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
  function r(...c_1) {
    let e;
    module36(this, r);
    e = a.call(this, ...c_1);
    e.state = {
      enableAutoRefresh: true,
      autoRefresh: false,
      duration: "10m",
      metrics: {},
      errorType: "ingress_request_4xx_count"
    };
    e.projectStore = new module439();
    e.monitorStore = new module1074({
      cluster: e.cluster
    });
    e.handleChange = function (duration) {
      e.setState({
        duration
      }, function () {
        e.fetchData();
      });
    };
    e.handleRequestError = function (errorType) {
      e.setState({
        errorType
      });
    };
    e.fetchProject = async function t() {
      let a;
      await e.projectStore.fetchList({
        cluster: e.cluster,
        workspace: e.props.match.params.workspace
      });
      a = e.projectStore.list.data.map(e => e.name);
      return a;
    };
    e.fetchData = (() => {
      const t = module44(module41.mark(function t(a) {
        let duration;
        let n;
        let l;
        let o;
        let i;
        let namespace;
        let s;
        let f;
        let d;
        let p;
        let m;
        return module41.wrap(function (t) {
          while (true) {
            switch (t.prev = t.next) {
              case 0:
                duration = e.state.duration;
                e.setState({
                  isLoading: true
                });
                n = e.detail || {};
                l = n.name;
                o = e.props.match.params;
                i = o.cluster;
                namespace = o.namespace;
                s = o.workspace;
                f = {
                  duration,
                  cluster: i || e.cluster,
                  namespace,
                  workspace: namespace ? undefined : s,
                  metrics: Object.values(R),
                  job: `${l}-metrics`,
                  component: "ingress",
                  ...a
                };
                if (!e.isWorkspaceGateway) {
                  t.next = 11;
                  break;
                }
                t.next = 8;
                return e.fetchProject();
              case 8:
                d = t.sent;
                f = module189(f, "namespace");
                f.namespaced_resources_filter = d.join("|");
              case 11:
                t.next = 13;
                return e.monitorStore.fetchGatewayMetrics(f);
              case 13:
                p = t.sent;
                m = e.handleMetricsData(p);
                e.setState({
                  metrics: {
                    ...m
                  },
                  duration,
                  isLoading: false
                });
              case 16:
              case "end":
                return t.stop();
            }
          }
        }, t);
      }));
      return function (e) {
        return t.apply(this, arguments);
      };
    })();
    e.handleMetricsData = function (e) {
      if (!module63(e)) {
        const t = {};
        Object.values(R).map(t => e[t]).forEach(e => {
          const a = module26(e, "data.result[0].value[1]", 0);
          const r = typeof a === "string" && a.indexOf(".") > -1 ? Number(a).toFixed(4) : isNaN(Number(a)) ? 0 : a;
          t[e.metric_name] = r;
        });
        return t;
      }
    };
    e.handleAutoRefresh = function () {
      e.setState({
        autoRefresh: !e.state.autoRefresh
      }, function () {
        if (e.state.autoRefresh) {
          (0, _monitoring.startAutoRefresh)(module88(e));
        } else {
          (0, _monitoring.stopAutoRefresh)(module88(e));
        }
      });
    };
    e.handleRefresh = function () {
      e.fetchData();
    };
    e.renderAutoRefresh = function () {
      const e_state = e.state;
      const {
        enableAutoRefresh,
        autoRefresh
      } = e_state;
      if (enableAutoRefresh) {
        return /*#__PURE__*/React.createElement(module186.Button, {
          className: module4035.button,
          type: "control",
          icon: autoRefresh ? "pause" : "start",
          iconType: "light",
          onClick: e.handleAutoRefresh
        });
      }
      return null;
    };
    e.getMetricsData = function (t, a = 0) {
      return module26(e.state.metrics, `${t}`, a);
    };
    e.renderCustomLegend = function (e = {}) {
      e.className;
      const {
        payload,
        activeSeries
      } = e;
      const n = activeSeries === undefined ? [] : activeSeries;
      const e_showAll = e.showAll;
      const o = e_showAll !== undefined && e_showAll;
      const i = payload || [];
      if (i.length < 2 && !o) {
        return /*#__PURE__*/React.createElement("div", {
          className: module4035.legend
        });
      }
      const onClick = function (t) {
        const e_onClick = e.onClick;
        if (e_onClick) {
          e_onClick(t, module26(t.target, "dataset.key"));
        }
      };
      return /*#__PURE__*/React.createElement("div", {
        className: module4035.legend,
        onClick: onClick
      }, i.map(e => {
        const a = !n.includes(e.value);
        const backgroundColor = module26(e, "payload.stroke");
        return /*#__PURE__*/React.createElement("div", {
          key: e.dataKey,
          "data-key": e.dataKey,
          className: module3(module4035.item, module31({}, module4035.inactive, a))
        }, /*#__PURE__*/React.createElement("i", {
          style: {
            backgroundColor
          }
        }), t(e.value));
      }));
    };
    return e;
  }
  module37(r, [{
    key: "componentDidMount",
    value: function () {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function () {
      const state = this.state;
      const {
        duration,
        errorType
      } = state;
      return /*#__PURE__*/React.createElement("div", {
        className: module4035.overview
      }, /*#__PURE__*/React.createElement("div", {
        className: module4035.header
      }, /*#__PURE__*/React.createElement("p", {
        className: module4035.title
      }, t("OVERVIEW")), /*#__PURE__*/React.createElement("div", {
        className: module4035.operations
      }, /*#__PURE__*/React.createElement(Module4031, {
        duration: duration,
        onChange: this.handleChange
      }), this.renderAutoRefresh(), /*#__PURE__*/React.createElement(module186.Button, {
        className: module4035.button,
        type: "control",
        icon: "refresh",
        iconType: "light",
        onClick: this.handleRefresh
      }))), /*#__PURE__*/React.createElement("div", {
        className: module4035.body
      }, /*#__PURE__*/React.createElement("div", {
        className: module4035.left
      }, /*#__PURE__*/React.createElement("div", {
        className: module4035.item
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "gateway",
        size: 56
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, t("TOTAL_REQUESTS")), /*#__PURE__*/React.createElement("span", null, this.getMetricsData("ingress_request_count")))), /*#__PURE__*/React.createElement("div", {
        className: module4035.item
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "error",
        size: 56
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(module186.Select, {
        width: 30,
        value: errorType,
        options: [{
          label: t("FOUR_XX_REQUEST_COUNT"),
          value: "ingress_request_4xx_count"
        }, {
          label: t("FIVE_XX_REQUEST_COUNT"),
          value: "ingress_request_5xx_count"
        }],
        onChange: this.handleRequestError
      }), /*#__PURE__*/React.createElement("span", null, this.getMetricsData(errorType))))), /*#__PURE__*/React.createElement("div", {
        className: module4035.middle
      }, /*#__PURE__*/React.createElement(_index.SimpleCircle, {
        theme: "light",
        width: 200,
        height: 200,
        title: "",
        value: `${(100 * this.getMetricsData("ingress_success_rate")).toFixed(2)}`,
        total: 100,
        unit: "%",
        innerRadius: "80%",
        legend: ["SUCCESSFUL_REQUESTS", "TOTAL"],
        showCenter: true,
        showRate: false,
        areaColors: ["#55BC8A", "#E3E9EF"],
        renderCustomCenter: function ({
          value
        }) {
          return /*#__PURE__*/React.createElement("div", {
            className: module4035.simpleContent
          }, /*#__PURE__*/React.createElement("p", null, t("SUCCESSFUL_REQUESTS")), /*#__PURE__*/React.createElement("span", null, value, "%"));
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: module4035.right
      }, /*#__PURE__*/React.createElement("div", {
        className: module4035.item
      }, /*#__PURE__*/React.createElement("span", {
        className: module4035.customIcon
      }, /*#__PURE__*/React.createElement(_module55.ReactComponent, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, t("AVERAGE_LATENCY")), /*#__PURE__*/React.createElement("span", null, `${this.getMetricsData("ingress_request_duration_average")} s`))), /*#__PURE__*/React.createElement("div", {
        className: module4035.itemSmall
      }, /*#__PURE__*/React.createElement("span", null, t("P_FIFTY_LATENCY")), /*#__PURE__*/React.createElement("span", null, `${this.getMetricsData("ingress_request_duration_50percentage")} s`)), /*#__PURE__*/React.createElement("div", {
        className: module4035.itemSmall
      }, /*#__PURE__*/React.createElement("span", null, t("P_NINETY_FIVE_LATENCY")), /*#__PURE__*/React.createElement("span", null, `${this.getMetricsData("ingress_request_duration_95percentage")} s`)), /*#__PURE__*/React.createElement("div", {
        className: module4035.itemSmall
      }, /*#__PURE__*/React.createElement("span", null, t("P_NINETY_NINE_LATENCY")), /*#__PURE__*/React.createElement("span", null, `${this.getMetricsData("ingress_request_duration_99percentage")} s`)))));
    }
  }, {
    key: "detail",
    get: function () {
      return this.props.detailStore.gateway.data;
    }
  }, {
    key: "isWorkspaceGateway",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        namespace
      } = params;
      return workspace && !namespace;
    }
  }, {
    key: "cluster",
    get: function () {
      const cluster = this.props.match.params.cluster;
      if (this.props.location.pathname.indexOf("federatedprojects") > -1 || this.isWorkspaceGateway) {
        return localStorage.getItem("federated-cluster");
      }
      return cluster;
    }
  }]);
  return r;
})(_module52.Component);
var _default = exports["default"] = I;

/***/ },

/***/ "./src/unpacked/module-4031.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4031.js ***!
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
var _module22 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4032.js */ "./src/unpacked/module-4032.js"));
var _module27 = __webpack_require__(/*! unpacked/module-1841.js */ "./src/unpacked/module-1841.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4034.js */ "./src/unpacked/module-4034.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module31 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module1 = (0, _recoverInterop.__recoverInterop)(_module7);
const module3 = (0, _recoverInterop.__recoverInterop)(_module8);
const module186 = (0, _recoverInterop.__recoverInterop)(_module9);
const Module4032 = (0, _recoverInterop.__recoverInterop)(_Module);
const module4034 = (0, _recoverInterop.__recoverInterop)(_module0);
const y = (PureComponent_1 => {
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
  function r(e) {
    let t;
    module36(this, r);
    t = a.call(this, e);
    t.handleToggle = function () {
      t.setState({
        visible: !t.state.visible
      }, function () {
        t.props.onToggle(t.state.visible);
      });
    };
    t.hideSelector = function () {
      t.setState({
        visible: false
      }, function () {
        t.props.onToggle(false);
      });
    };
    t.handleTimeChange = function ({
      duration
    }) {
      t.setState({
        visible: false,
        duration
      }, function () {
        t.props.onChange(duration);
      });
    };
    const e_duration = e.duration;
    t.state = {
      visible: false,
      preDuration: "",
      duration: e_duration || "10m"
    };
    return t;
  }
  module37(r, [{
    key: "renderButtonText",
    value: function () {
      const duration = this.state.duration;
      const a = (0, _module27.getTimeLabel)(duration);
      return `${t("LAST")} ${a}`;
    }
  }, {
    key: "renderContent",
    value: function () {
      const duration = this.state.duration;
      return /*#__PURE__*/React.createElement("div", {
        className: module4034.content
      }, /*#__PURE__*/React.createElement(Module4032, {
        duration: duration,
        onChange: this.handleTimeChange
      }));
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        className,
        dark,
        arrowIcon
      } = props;
      return /*#__PURE__*/React.createElement("div", {
        className: module3(module4034.selector, className, module31({}, module4034.active, this.state.visible))
      }, /*#__PURE__*/React.createElement("div", {
        className: module3(module4034.mask, module31({}, module4034.active, this.state.visible)),
        onClick: this.hideSelector
      }), /*#__PURE__*/React.createElement(module186.Button, {
        className: module4034.button,
        onClick: this.handleToggle
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        type: dark ? "dark" : "light",
        name: "timed-task",
        size: 20
      }), /*#__PURE__*/React.createElement("p", null, this.renderButtonText()), /*#__PURE__*/React.createElement(module186.Icon, {
        className: module4034.arrow,
        type: dark ? "dark" : "light",
        name: arrowIcon || "caret-down"
      })), /*#__PURE__*/React.createElement("div", {
        className: module4034.dropdown
      }, this.renderContent()));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function (e, t) {
      if (e.duration !== t.preDuration) {
        const a = e.duration;
        return {
          prevPropStep: a,
          duration: a
        };
      }
      return null;
    }
  }]);
  return r;
})(_module22.PureComponent);
var _default = exports["default"] = y;
y.propTypes = {
  duration: module1.string,
  onChange: module1.func,
  onToggle: module1.func
};
y.defaultProps = {
  duration: "10m",
  onChange: function () {},
  onToggle: function () {}
};

/***/ },

/***/ "./src/unpacked/module-4032.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4032.js ***!
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
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
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
var _module22 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module25 = __webpack_require__(/*! unpacked/module-1841.js */ "./src/unpacked/module-1841.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4033.js */ "./src/unpacked/module-4033.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module31 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module1 = (0, _recoverInterop.__recoverInterop)(_module7);
const module3 = (0, _recoverInterop.__recoverInterop)(_module8);
const module4033 = (0, _recoverInterop.__recoverInterop)(_module9);
const v = ["1m", "5m", "10m", "30m", "1h", "3h", "6h", "12h"];
const g = (Component_1 => {
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
    e.handleClick = function (t) {
      const value = t.target.dataset.value;
      if (value) {
        e.props.onChange({
          duration: value
        });
      }
    };
    return e;
  }
  module37(r, [{
    key: "render",
    value: function () {
      const e = (0, _module25.getTimeOptions)(v);
      const duration = this.props.duration;
      return /*#__PURE__*/React.createElement("div", {
        className: module4033.default
      }, /*#__PURE__*/React.createElement("div", {
        className: module4033.title
      }, t("SELECT_TIME_RANGE")), /*#__PURE__*/React.createElement("ul", {
        onClick: this.handleClick
      }, e.map(({
        label,
        value
      }) => /*#__PURE__*/React.createElement("li", {
        key: label,
        "data-value": value,
        className: module3(module31({}, module4033.cur, value === duration))
      }, t("LAST_TIME", {
        value: label
      })))));
    }
  }]);
  return r;
})(_module22.Component);
var _default = exports["default"] = g;
g.propTypes = {
  duration: module1.string,
  onChange: module1.func
};
g.defaultProps = {
  duration: "10m",
  onChange: function () {}
};

/***/ },

/***/ "./src/unpacked/module-4033.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4033.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  title: "e1y2fKT7YHaV6XfOOCrDv",
  default: "_327WDiVGD2urDadhIu1iDe",
  cur: "NU2Zf3sYiQCtz54m5aL1r",
  custom: "_1Lh-8JMUsuFdxn6OGugBV8",
  selectBox: "_13RX0xuFZFmo9QoCb6fUmO",
  actions: "_3h517gEQXsCsA58FetxHUY"
};

/***/ },

/***/ "./src/unpacked/module-4034.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4034.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  selector: "_1mOaVvA0z35PUDIJdGjK88",
  active: "_2t8WRCCQ4ggASoXOF8nAg1",
  arrow: "CFTzeejAkGAa_XLLeaiFT",
  dropdown: "_27PLp7Zzzab6bCyYx70ghK",
  button: "_1F3ae8ohH9JmxETLtsSxfM",
  mask: "_3bICmHVgKLnTdQTDx5eA3k",
  content: "_18IN8qgb-HsUFSYjIfSXb-"
};

/***/ },

/***/ "./src/unpacked/module-4035.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4035.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  overview: "_2hTrM133qfL0uUr_S1fadQ",
  header: "_1jy9VGHvOaVVfm8dvL8bMo",
  operations: "_1wYlom_Bo7NychRu74C8bD",
  button: "_1GnNLBwPJ8nr0MiBe-Tv3f",
  body: "dTsXWt-KM-Ikk_oi6nBQ8",
  left: "_7bKfzcnOgKm3npFE4FWgI",
  item: "_2UpgVSNsQRLd8DZ0nKv2Lr",
  middle: "_1RNen7PdwnS9Uj_2bbOGwj",
  right: "_2_Cl8scx9VJLhtxD2WgQKI",
  customIcon: "_2tmKWz-gU6N2A-XexZ12O_",
  itemSmall: "Qx9S4CJkobficre0PCNO8",
  simpleContent: "_3A0WQEo815SRiGxnMLdcXx"
};

/***/ },

/***/ "./src/unpacked/module-4036.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4036.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.Component = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-86.js */ "./node_modules/core-js3/modules/es.array.index-of.js");
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
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module42 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module44 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-240.js */ "./src/unpacked/module-240.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1070.js */ "./src/unpacked/module-1070.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1220.js */ "./src/unpacked/module-1220.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! pages/projects/components/Cards/Placement */ "./src/pages/projects/components/Cards/Placement.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4037.js */ "./src/unpacked/module-4037.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/gateway */ "./src/stores/gateway.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! stores/workload/index */ "./src/stores/workload/index.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! stores/configmap */ "./src/stores/configmap.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4039.js */ "./src/unpacked/module-4039.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module14 = (0, _recoverInterop.__recoverInterop)(_module6);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module240 = (0, _recoverInterop.__recoverInterop)(_module8);
const Module1070 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module1220 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module945 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module4037 = (0, _recoverInterop.__recoverInterop)(_Module4);
const module1 = (0, _recoverInterop.__recoverInterop)(_module9);
const module834 = (0, _recoverInterop.__recoverInterop)(_module0);
const module318 = (0, _recoverInterop.__recoverInterop)(_module1);
const module1001 = (0, _recoverInterop.__recoverInterop)(_module10);
const module4039 = (0, _recoverInterop.__recoverInterop)(_module11);
const R = (Component_1 => {
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
    n = a.call(this, e);
    n.gateway = new module834();
    n.fetchData = async function e() {
      let t;
      t = await n.store.getGatewayPods({
        ...n.props.match.params,
        cluster: n.cluster,
        namespace: n.namespace
      });
      n.setState({
        pods: t.length
      });
    };
    n.fetchReplica = async function e() {
      let gatewayPods;
      gatewayPods = await n.store.getGatewayPodsList({
        ...n.props.match.params,
        cluster: n.cluster,
        namespace: n.namespace
      });
      n.setState({
        gatewayPods
      });
    };
    n.checkGatewayLatest = async function e() {
      let t;
      t = n.props.match.params.workspace;
      await n.gateway.getGateway({
        type: n.type,
        cluster: n.cluster,
        namespace: n.namespace,
        workspace: t
      });
    };
    n.handleScale = async a => {
      let r;
      let u;
      let o;
      r = n.props.match.params;
      u = r.workspace;
      o = r.gatewayName;
      await n.checkGatewayLatest();
      if (!(n.gateway.detail.resourceVersion !== n.store.detail.resourceVersion)) {
        await n.store.scale({
          cluster: n.cluster,
          workspace: u,
          namespace: n.namespace,
          name: o
        }, a);
      } else {
        module240.info({
          content: t("GATEWAY_UPDATING_TIP")
        });
      }
      n.getGatewayDetail();
      n.fetchData();
      n.fetchReplica();
    };
    n.state = {
      pods: 0,
      gatewayPods: []
    };
    n.workloadStore = new module318("deployments");
    n.configMapStore = new module1001();
    return n;
  }
  module37(r, [{
    key: "getChildContext",
    value: function () {
      const params = this.props.match.params;
      const {
        namespace,
        workspace
      } = params;
      return {
        gatewayName: this.detail.name,
        gatewayNs: workspace && !namespace ? `workspace-${workspace}` : namespace,
        cluster: this.cluster
      };
    }
  }, {
    key: "getGatewayDetail",
    value: function () {
      const workspace = this.props.match.params.workspace;
      this.props.detailStore.getGateway({
        type: this.type,
        cluster: this.cluster,
        namespace: this.namespace,
        workspace
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      this.fetchData();
    }
  }, {
    key: "renderPlacement",
    value: function () {
      const params = this.props.match.params;
      const {
        name,
        namespace
      } = params;
      if (this.store.detail.isFedManaged) {
        return /*#__PURE__*/React.createElement(Module945, {
          module: this.store.module,
          name: name,
          namespace: namespace
        });
      }
      return null;
    }
  }, {
    key: "renderReplicaInfo",
    value: function () {
      const data = this.store.podList.data;
      const t = module14.toJS(this.detail);
      const pods = module14.toJS(data);
      return /*#__PURE__*/React.createElement(Module1220, {
        module: this.module,
        detail: module63(pods) ? t : {
          ...t,
          pods
        },
        onScale: this.handleScale,
        enableScale: this.enableScaleReplica
      });
    }
  }, {
    key: "renderContainerPorts",
    value: function () {
      const ports = this.detail.ports;
      const isLoading = this.store.gateway.isLoading;
      if (module63(ports)) {
        return null;
      }
      const ports_1 = ports.map(e => {
        e.containerPort = e.nodePort;
        return e;
      });
      return /*#__PURE__*/React.createElement(Module1070, {
        ports: ports_1,
        loading: isLoading
      });
    }
  }, {
    key: "renderPods",
    value: function () {
      const params = {
        ...this.props.match.params,
        cluster: this.cluster
      };
      return /*#__PURE__*/React.createElement(Module4037, {
        prefix: this.prefix,
        detail: this.detail,
        store: this.store,
        params: params,
        getReplica: this.fetchReplica
      });
    }
  }, {
    key: "renderContent",
    value: function () {
      return /*#__PURE__*/React.createElement("div", null, this.renderPlacement(), this.renderReplicaInfo(), this.renderContainerPorts(), this.renderPods());
    }
  }, {
    key: "render",
    value: function () {
      return /*#__PURE__*/React.createElement("div", {
        className: module4039.main
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
    key: "isWorkspaceGateway",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        namespace
      } = params;
      return workspace && !namespace;
    }
  }, {
    key: "detail",
    get: function () {
      return this.store.gateway.data || {};
    }
  }, {
    key: "cluster",
    get: function () {
      const cluster = this.props.match.params.cluster;
      if (this.props.location.pathname.indexOf("federatedprojects") > -1 || this.isWorkspaceGateway) {
        return localStorage.getItem("federated-cluster");
      }
      return cluster;
    }
  }, {
    key: "prefix",
    get: function () {
      return `/clusters/${this.cluster}`;
    }
  }, {
    key: "type",
    get: function () {
      const params = this.props.match.params;
      const {
        namespace,
        workspace
      } = params;
      if (this.cluster && workspace && !namespace) {
        return "workspace";
      }
      if (workspace && namespace) {
        return "project";
      }
      return "cluster";
    }
  }, {
    key: "namespace",
    get: function () {
      const namespace = this.props.match.params.namespace;
      if (this.type === "cluster") {
        return "";
      }
      return namespace;
    }
  }, {
    key: "actionModule",
    get: function () {
      const params = this.props.match.params;
      const {
        namespace,
        workspace
      } = params;
      if (namespace && workspace && this.cluster) {
        return "ks-project-gateway";
      }
      if (workspace && !namespace) {
        return "ks-workspace-gateway";
      }
      return "cluster-settings";
    }
  }, {
    key: "enabledActions",
    get: function () {
      return globals.app.getActions({
        module: this.actionModule,
        ...this.props.match.params,
        project: this.props.match.params.namespace,
        cluster: this.cluster
      });
    }
  }, {
    key: "volumesTitle",
    get: function () {
      return t("STORAGE_DEVICES");
    }
  }, {
    key: "enableScaleReplica",
    get: function () {
      return this.enabledActions.includes("edit") && !this.detail.isFedManaged;
    }
  }]);
  return r;
})(_module42.Component);
R.childContextTypes = {
  gatewayName: module1.string,
  gatewayNs: module1.string,
  cluster: module1.string
};
const I = (0, _module44.inject)("detailStore")((0, _module44.observer)(R));
var _default = exports["default"] = I;
const w = exports.Component = R;

/***/ },

/***/ "./src/unpacked/module-4037.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4037.js ***!
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
__webpack_require__(/*! unpacked/module-86.js */ "./node_modules/core-js3/modules/es.array.index-of.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-98.js */ "./node_modules/core-js3/modules/es.object.entries.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-316.js */ "./node_modules/core-js3/modules/es.object.values.js");
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
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/slicedToArray */ "./src/utils/babel-helpers/slicedToArray.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module47 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module48 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _module13 = _interopRequireWildcard(__webpack_require__(/*! stores/monitoring/gateway */ "./src/stores/monitoring/gateway.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4038.js */ "./src/unpacked/module-4038.js"));
var _module14 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1842.js */ "./src/unpacked/module-1842.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module96 = (0, _recoverInterop.__recoverInterop)(_module);
const module41 = (0, _recoverInterop.__recoverInterop)(_module2);
const module58 = (0, _recoverInterop.__recoverInterop)(_module3);
const module44 = (0, _recoverInterop.__recoverInterop)(_module4);
const module36 = (0, _recoverInterop.__recoverInterop)(_module5);
const module37 = (0, _recoverInterop.__recoverInterop)(_module6);
const module55 = (0, _recoverInterop.__recoverInterop)(_module7);
const module56 = (0, _recoverInterop.__recoverInterop)(_module8);
const module51 = (0, _recoverInterop.__recoverInterop)(_module9);
const module1 = (0, _recoverInterop.__recoverInterop)(_module0);
const module3 = (0, _recoverInterop.__recoverInterop)(_module1);
const module63 = (0, _recoverInterop.__recoverInterop)(_module10);
const module26 = (0, _recoverInterop.__recoverInterop)(_module11);
const module186 = (0, _recoverInterop.__recoverInterop)(_module12);
const module1074 = (0, _recoverInterop.__recoverInterop)(_module13);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module4038 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module1842 = (0, _recoverInterop.__recoverInterop)(_module14);
let s;
let f;
let d;
const P = {
  cpu: "ingress_request_cpu_usage",
  memory: "ingress_request_memory_bytes"
};
const A = (0, _module48.observer)((d = f = (Component_1 => {
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
    n = a.call(this, e);
    n.fetchData = module44(module41.mark(function e() {
      let t;
      let a;
      let r;
      let l;
      let limit;
      const i = arguments;
      return module41.wrap(function (e) {
        while (true) {
          switch (e.prev = e.next) {
            case 0:
              t = i.length > 0 && i[0] !== undefined ? i[0] : {};
              a = t.noMetrics;
              r = t.silent;
              l = module58(t, ["noMetrics", "silent"]);
              if (!module63(n.state.params)) {
                e.next = 4;
                break;
              }
              n.store.podList.isLoading = false;
              return e.abrupt("return");
            case 4:
              limit = n.props.limit;
              if (r) {
                n.store.podList.silent = true;
              }
              e.next = 8;
              return n.store.getGatewayPodsList({
                limit,
                ...n.state.params,
                ...l
              });
            case 8:
              n.store.podList.silent = false;
              if (!a) {
                n.fetchMetrics();
              }
            case 10:
            case "end":
              return e.stop();
          }
        }
      }, e);
    }));
    n.fetchMetrics = function (e = {}) {
      const podList = n.store.podList;
      const {
        data,
        isLoading
      } = podList;
      if (module63(data) || isLoading || module63(n.state.params)) {
        return false;
      }
      const params = n.state.params;
      const {
        gatewayName,
        namespace,
        workspace,
        cluster
      } = params;
      n.monitorStore.fetchMetrics({
        step: "1m",
        times: 30,
        resources: data.map(e => e.name),
        metrics: Object.values(P),
        namespace,
        workspace: namespace ? undefined : workspace,
        cluster: cluster || n.cluster,
        ...e,
        component: "ingress",
        job: `${gatewayName}-metrics`
      });
    };
    n.getPagination = function () {
      const podList = n.store.podList;
      return {
        page: podList.page,
        limit: podList.limit,
        total: podList.total
      };
    };
    n.getPodMetrics = function () {
      const data = n.monitorStore.data;
      const t = {};
      Object.entries(P).forEach(a => {
        const r = module96(a, 2);
        const n = r[0];
        const l = r[1];
        const o = module26(data, `${l}.data.result`) || [];
        t[n] = o[0];
      });
      return t;
    };
    n.handleSearch = function (search) {
      n.searchValue = search;
      n.fetchData({
        search
      });
    };
    n.handleRefresh = function () {
      const e = n.searchValue ? {
        search: n.searchValue
      } : {};
      n.fetchData(e);
    };
    n.handlePage = function (page) {
      n.fetchData({
        page
      }).then(() => {
        n.props.onPage(page);
      });
    };
    n.handleExpand = function (e) {
      n.setState(function (t) {
        return {
          expandItem: t.expandItem === e ? "" : e
        };
      });
    };
    n.getClustersOptions = function () {
      return n.props.clusters.map(e => ({
        label: e,
        value: e
      }));
    };
    n.renderHeader = function () {
      return /*#__PURE__*/React.createElement("div", {
        className: module1842.header
      }, /*#__PURE__*/React.createElement(module186.InputSearch, {
        className: module1842.search,
        name: "search",
        placeholder: t("SEARCH"),
        onSearch: n.handleSearch
      }), /*#__PURE__*/React.createElement("div", {
        className: module1842.actions
      }, /*#__PURE__*/React.createElement(module186.Button, {
        type: "flat",
        icon: "refresh",
        onClick: n.handleRefresh
      })));
    };
    n.renderFooter = function () {
      const e = n.getPagination();
      const e_total = e.total;
      return /*#__PURE__*/React.createElement(module186.Level, {
        className: module1842.footer
      }, /*#__PURE__*/React.createElement(module186.LevelLeft, null, t("TOTAL_ITEMS", {
        num: e_total
      })), /*#__PURE__*/React.createElement(module186.LevelRight, null, /*#__PURE__*/React.createElement(module186.Pagination, _extends({}, e, {
        onChange: n.handlePage
      }))));
    };
    n.store = e.store;
    n.monitorStore = new module1074();
    n.state = {
      expandItem: "",
      params: e.params
    };
    return n;
  }
  module37(r, [{
    key: "componentDidMount",
    value: function () {
      this.fetchData();
      (0, _monitoring.startAutoRefresh)(this, {
        method: "fetchMetrics",
        leading: false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      (0, _monitoring.stopAutoRefresh)(this);
      if (this.disposer) {
        this.disposer();
      }
    }
  }, {
    key: "renderContent",
    value: function () {
      const _this = this;
      const prefix = this.props.prefix;
      const podList = this.store.podList;
      const {
        data,
        isLoading,
        silent
      } = podList;
      const o = /*#__PURE__*/React.createElement("div", {
        className: module1842.body
      }, module63(data) ? /*#__PURE__*/React.createElement("div", {
        className: module1842.empty
      }, t("NO_RESOURCE_FOUND")) : data.map(detail => /*#__PURE__*/React.createElement(Module4038, {
        key: detail.uid,
        prefix: prefix,
        detail: detail,
        metrics: _this.getPodMetrics(detail),
        loading: _this.monitorStore.isLoading,
        refreshing: _this.monitorStore.isRefreshing,
        isExpand: _this.state.expandItem === detail.uid,
        onExpand: _this.handleExpand
      })));
      if (silent) {
        return o;
      }
      return /*#__PURE__*/React.createElement(module186.Loading, {
        spinning: isLoading
      }, o);
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        className,
        title,
        hideHeader,
        hideFooter,
        noWrapper
      } = props;
      const data = this.store.podList.data;
      if (noWrapper) {
        return this.renderContent();
      }
      return /*#__PURE__*/React.createElement(Module790, {
        className: module3(module1842.main, className),
        title: t(title),
        empty: t("NO_AVAILABLE_RESOURCE_VALUE", {
          resource: t("POD")
        }),
        isEmpty: module63(data)
      }, !hideHeader && this.renderHeader(), this.renderContent(), !hideFooter && this.renderFooter());
    }
  }, {
    key: "isWorkspaceGateway",
    get: function () {
      const params = this.props.params;
      const {
        workspace,
        namespace
      } = params;
      return workspace && !namespace;
    }
  }, {
    key: "cluster",
    get: function () {
      const cluster = this.props.params.cluster;
      if ((location?.pathname).indexOf("federatedprojects") > -1 || this.isWorkspaceGateway) {
        return localStorage.getItem("federated-cluster");
      }
      return cluster;
    }
  }]);
  return r;
})(_module47.Component), f.propTypes = {
  prefix: module1.string,
  title: module1.string,
  detail: module1.object,
  details: module1.object,
  hideHeader: module1.bool,
  hideFooter: module1.bool,
  onPage: module1.func,
  limit: module1.number
}, f.defaultProps = {
  title: "PODS",
  detail: {},
  details: {},
  hideHeader: false,
  hideFooter: false,
  onPage: function () {}
}, s = d)) || s;
var _default = exports["default"] = A;

/***/ },

/***/ "./src/unpacked/module-4038.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4038.js ***!
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
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-86.js */ "./node_modules/core-js3/modules/es.array.index-of.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-87.js */ "./node_modules/core-js3/modules/es.array.reduce.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js"));
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module33 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module34 = __webpack_require__(/*! unpacked/module-433.js */ "./src/shims/react-router-dom.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Indicator */ "./src/components/Base/Indicator.js"));
var _index2 = __webpack_require__(/*! components/Charts/index */ "./src/components/Charts/index.js");
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Cards/Containers/Item */ "./src/components/Cards/Containers/Item.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-805.js */ "./src/unpacked/module-805.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1842.js */ "./src/unpacked/module-1842.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module31 = (0, _recoverInterop.__recoverInterop)(_module2);
const module36 = (0, _recoverInterop.__recoverInterop)(_module3);
const module37 = (0, _recoverInterop.__recoverInterop)(_module4);
const module55 = (0, _recoverInterop.__recoverInterop)(_module5);
const module56 = (0, _recoverInterop.__recoverInterop)(_module6);
const module51 = (0, _recoverInterop.__recoverInterop)(_module7);
const module1 = (0, _recoverInterop.__recoverInterop)(_module8);
const module3 = (0, _recoverInterop.__recoverInterop)(_module9);
const module63 = (0, _recoverInterop.__recoverInterop)(_module0);
const module26 = (0, _recoverInterop.__recoverInterop)(_module1);
const module186 = (0, _recoverInterop.__recoverInterop)(_module10);
const Module838 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module1219 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module805 = (0, _recoverInterop.__recoverInterop)(_Module3);
const module1842 = (0, _recoverInterop.__recoverInterop)(_module11);
const N = (PureComponent_1 => {
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
  function r(...l_1) {
    let e;
    module36(this, r);
    e = a.call(this, ...l_1);
    e.getContainerStatus = function () {
      const t = module26(e.props.detail, "status.containerStatuses") || [];
      let readyCount = 0;
      t.forEach(e => {
        if (e.ready) {
          readyCount += 1;
        }
      });
      return {
        readyCount,
        total: t.length
      };
    };
    e.getUpdateStatus = function () {
      if (!e.isRunning) {
        const a = e.status;
        const {
          name,
          type
        } = a;
        return /*#__PURE__*/React.createElement(Module805, {
          status: type,
          reason: name,
          data: e.props.detail,
          type: "pod"
        });
      }
      return /*#__PURE__*/React.createElement("p", null, t("CREATED_TIME", {
        diff: (0, _index.getLocalTime)(e.props.detail.createTime).format("YYYY-MM-DD HH:mm:ss")
      }));
    };
    e.getLink = function () {
      const detail = e.props.detail;
      return `${e.props.prefix}/projects/${detail.namespace}/pods/${detail.name}`;
    };
    e.getMonitoringCfgs = function (e) {
      return [{
        type: "cpu",
        title: "CPU",
        unitType: "cpu",
        legend: ["USED"],
        data: [e.cpu],
        bgColor: "transparent"
      }, {
        type: "memory",
        title: "MEMORY",
        unitType: "memory",
        legend: ["USED"],
        data: [e.memory],
        bgColor: "transparent"
      }];
    };
    e.getNodeContent = function () {
      const detail = e.props.detail;
      const {
        cluster,
        node,
        nodeIp
      } = detail;
      const u = globals.app.hasPermission({
        cluster,
        module: "nodes",
        action: "view"
      });
      if (!node) {
        return "-";
      }
      const o = t("NODE_IP", {
        node,
        ip: nodeIp
      });
      if (u) {
        return /*#__PURE__*/React.createElement(_module34.Link, {
          to: `/clusters/${cluster}/nodes/${node}`
        }, o);
      }
      return o;
    };
    e.handleExpandExtra = function () {
      const e_props = e.props;
      const t_detail = e_props.detail;
      e_props.onExpand(t_detail.uid);
    };
    e.handleLinkClick = function () {
      localStorage.setItem("pod-detail-referrer", location.pathname);
    };
    e.renderPodIPContent = function (e) {
      return /*#__PURE__*/React.createElement("div", {
        className: module1842.ipTip
      }, /*#__PURE__*/React.createElement("div", null, t("POD_IP_ADDRESS")), /*#__PURE__*/React.createElement("ul", null, e.map(e => /*#__PURE__*/React.createElement("li", {
        key: e
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "ip",
        size: 20,
        type: "light"
      }), /*#__PURE__*/React.createElement("span", null, e)))));
    };
    return e;
  }
  module37(r, [{
    key: "renderStatusTip",
    value: function () {
      const name_1 = this.props.detail.name;
      const status = this.status;
      const {
        type,
        name
      } = status;
      const l = this.getContainerStatus();
      const {
        readyCount,
        total
      } = l;
      return /*#__PURE__*/React.createElement(module186.Tooltip, {
        content: /*#__PURE__*/React.createElement("div", {
          className: module1842.statusTip
        }, /*#__PURE__*/React.createElement("strong", null, name_1), /*#__PURE__*/React.createElement("p", null, t("READY"), ": ", readyCount, "/", total), /*#__PURE__*/React.createElement("p", null, t("STATUS"), ": ", t(name)))
      }, /*#__PURE__*/React.createElement(Module838, {
        className: module1842.indicator,
        type: type,
        flicker: true
      }));
    }
  }, {
    key: "renderMonitorings",
    value: function () {
      const {
        metrics = {},
        isExpand,
        loading,
        detail
      } = this.props;
      if (!globals.app.hasClusterModule(detail.cluster, "whizard-monitoring")) {
        return null;
      }
      if (loading) {
        return /*#__PURE__*/React.createElement("div", {
          className: module1842.monitors
        }, t("LOADING"));
      }
      if (module63(metrics.cpu) && module63(metrics.memory)) {
        return /*#__PURE__*/React.createElement("div", {
          className: module1842.monitors
        }, t("NO_MONITORING_DATA"));
      }
      const i = this.getMonitoringCfgs(metrics);
      return /*#__PURE__*/React.createElement("div", {
        className: module1842.monitors
      }, /*#__PURE__*/React.createElement("div", {
        className: module1842.charts
      }, i.map(e => {
        const t = (0, _monitoring.getAreaChartOps)(e);
        return /*#__PURE__*/React.createElement(_index2.TinyArea, _extends({
          key: e.type,
          width: "50%",
          height: 40
        }, t, {
          darkMode: isExpand
        }));
      })));
    }
  }, {
    key: "renderContent",
    value: function () {
      const props = this.props;
      const e_detail = props.detail;
      const {
        name,
        podIp
      } = e_detail;
      const e_isExpand = props.isExpand;
      return /*#__PURE__*/React.createElement("div", {
        className: module1842.content
      }, /*#__PURE__*/React.createElement("div", {
        className: module1842.text
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
        onClick: this.handleLinkClick
      }, name)), this.getUpdateStatus()), !(location.pathname.indexOf("/nodes") !== -1) && /*#__PURE__*/React.createElement("div", {
        className: module1842.text
      }, /*#__PURE__*/React.createElement("div", null, this.getNodeContent()), /*#__PURE__*/React.createElement("p", null, t("NODE"))), /*#__PURE__*/React.createElement("div", {
        className: module1842.text
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, podIp || "-"), !module63(this.networkIPs) && this.networkIPs.length > 1 && /*#__PURE__*/React.createElement(module186.Tooltip, {
        content: this.renderPodIPContent(this.networkIPs)
      }, /*#__PURE__*/React.createElement("div", {
        className: module1842.podip
      }, this.networkIPs.length))), /*#__PURE__*/React.createElement("p", null, t("POD_IP_ADDRESS_SCAP"))), this.renderMonitorings(), /*#__PURE__*/React.createElement("div", {
        className: module1842.arrow
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "chevron-down",
        type: e_isExpand ? "light" : "",
        size: 20
      })));
    }
  }, {
    key: "renderExtraContent",
    value: function () {
      const _this = this;
      const prefix = this.props.prefix;
      const {
        cluster,
        containers = [],
        initContainers = [],
        name
      } = this.props.detail;
      if (module63(containers)) {
        return null;
      }
      const prefix_1 = globals.app.hasPermission({
        module: "clusters",
        action: "view"
      }) && prefix ? this.getLink() : "";
      return /*#__PURE__*/React.createElement("div", {
        className: module1842.itemExtra
      }, /*#__PURE__*/React.createElement("div", {
        className: "margin-b8"
      }, /*#__PURE__*/React.createElement("strong", null, t("CONTAINER_PL"))), /*#__PURE__*/React.createElement("div", {
        className: module1842.containers
      }, containers.map(t => /*#__PURE__*/React.createElement(Module1219, {
        key: t.name,
        prefix: prefix_1,
        podName: name,
        detail: t,
        cluster: cluster,
        onContainerClick: _this.handleLinkClick,
        isCreating: _this.isCreating,
        hideterminal: true,
        hideLink: true
      })), initContainers.map(t => /*#__PURE__*/React.createElement(Module1219, {
        key: t.name,
        prefix: prefix_1,
        podName: name,
        detail: t,
        cluster: cluster,
        onContainerClick: _this.handleLinkClick,
        isCreating: _this.isCreating,
        isInit: true,
        hideterminal: true,
        hideLink: true
      }))));
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        className,
        isExpand
      } = props;
      return /*#__PURE__*/React.createElement("div", {
        className: module3(module1842.item, className, module31({}, module1842.expanded, isExpand))
      }, /*#__PURE__*/React.createElement("div", {
        className: module1842.itemMain,
        onClick: this.handleExpandExtra
      }, /*#__PURE__*/React.createElement("div", {
        className: module1842.icon
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "pod",
        size: 40,
        type: isExpand ? "light" : "dark"
      }), this.renderStatusTip()), this.renderContent()), this.renderExtraContent());
    }
  }, {
    key: "status",
    get: function () {
      const podStatus = this.props.detail.podStatus;
      const e_status = podStatus.status;
      return {
        type: podStatus.type.toLowerCase(),
        name: e_status
      };
    }
  }, {
    key: "isCreating",
    get: function () {
      return this.status.type === "warning" && this.status.name === "ContainerCreating";
    }
  }, {
    key: "isRunning",
    get: function () {
      return this.status.type === "running" || this.status.type === "completed";
    }
  }, {
    key: "networkIPs",
    get: function () {
      return this.props.detail.networksStatus.reduce((acc, item) => [].concat(module61(acc), module61(item.ips)), []);
    }
  }]);
  return r;
})(_module33.PureComponent);
var _default = exports["default"] = N;
N.propTypes = {
  className: module1.string,
  prefix: module1.string,
  detail: module1.object,
  metrics: module1.object,
  loading: module1.bool,
  isExpand: module1.bool,
  onExpand: module1.func
};
N.defaultProps = {
  prefix: "",
  detail: {},
  isExpand: false,
  onExpand: function () {}
};

/***/ },

/***/ "./src/unpacked/module-4039.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4039.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  deployment_codeResource: "_2sxIgN7h_UoStkDUN8ngoB"
};

/***/ },

/***/ "./src/unpacked/module-4040.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4040.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
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
var _module21 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _module22 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1839.js */ "./src/unpacked/module-1839.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module96 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module);
const module63 = (0, _recoverInterop.__recoverInterop)(_module7);
const module26 = (0, _recoverInterop.__recoverInterop)(_module8);
const module1839 = (0, _recoverInterop.__recoverInterop)(_module9);
let l;
const y = (0, _module22.inject)("detailStore")(l = (0, _module22.observer)(l = (Component_1 => {
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
  function r() {
    module36(this, r);
    return a.apply(this, arguments);
  }
  module37(r, [{
    key: "render",
    value: function () {
      const config = this.detail.config;
      return /*#__PURE__*/React.createElement(Module790, {
        title: t("CONFIGURATION_OPTIONS")
      }, /*#__PURE__*/React.createElement("div", {
        className: module1839.container
      }, /*#__PURE__*/React.createElement("ul", null, module63(config) ? /*#__PURE__*/React.createElement("li", null, t("NO_DATA")) : Object.entries(this.detail.config).map(e => {
        const t = module96(e, 2);
        const a = t[0];
        const r = t[1];
        return /*#__PURE__*/React.createElement("li", {
          key: a
        }, /*#__PURE__*/React.createElement("span", {
          className: module1839.key
        }, a), /*#__PURE__*/React.createElement("span", null, r));
      }))));
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
    key: "detail",
    get: function () {
      return module26(this.store.gateway, "data", {});
    }
  }]);
  return r;
})(_module21.Component)) || l) || l;
var _default = exports["default"] = y;

/***/ },

/***/ "./src/unpacked/module-4041.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4041.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-86.js */ "./node_modules/core-js3/modules/es.array.index-of.js");
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-87.js */ "./node_modules/core-js3/modules/es.array.reduce.js");
__webpack_require__(/*! unpacked/module-97.js */ "./node_modules/core-js3/modules/es.array.some.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-316.js */ "./node_modules/core-js3/modules/es.object.values.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-188.js */ "./src/unpacked/module-188.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-109.js */ "./src/unpacked/module-109.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-245.js */ "./node_modules/core-js3/modules/es.array.reverse.js");
__webpack_require__(/*! unpacked/module-442.js */ "./node_modules/core-js3/modules/es.date.now.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js"));
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module3 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/slicedToArray */ "./src/utils/babel-helpers/slicedToArray.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-65.js */ "./src/unpacked/module-65.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-88.js */ "./src/unpacked/module-88.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js"));
__webpack_require__(/*! utils/babel-helpers/initializerWarningHelper */ "./src/utils/babel-helpers/initializerWarningHelper.js");
var _module60 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module61 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-833.js */ "./src/unpacked/module-833.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Modals/LogSearch/Logging/SearchInput */ "./src/components/Modals/LogSearch/Logging/SearchInput.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module66 = __webpack_require__(/*! unpacked/module-2016.js */ "./src/shims/lodash.js");
var _module13 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-243.js */ "./src/shims/moment.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! components/Tables/Visible */ "./src/components/Tables/Visible.js"));
var _module14 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1383.js */ "./src/shims/memoizee.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _log = __webpack_require__(/*! utils/log */ "./src/utils/log.js");
var _module15 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1123.js */ "./src/shims/ansi_up.js"));
var _module16 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-4042.js */ "./src/unpacked/module-4042.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module31 = (0, _recoverInterop.__recoverInterop)(_module2);
const module96 = (0, _recoverInterop.__recoverInterop)(_module3);
const module65 = (0, _recoverInterop.__recoverInterop)(_module4);
const module36 = (0, _recoverInterop.__recoverInterop)(_module5);
const module37 = (0, _recoverInterop.__recoverInterop)(_module6);
const module88 = (0, _recoverInterop.__recoverInterop)(_module7);
const module55 = (0, _recoverInterop.__recoverInterop)(_module8);
const module56 = (0, _recoverInterop.__recoverInterop)(_module9);
const module51 = (0, _recoverInterop.__recoverInterop)(_module0);
const module49 = (0, _recoverInterop.__recoverInterop)(_module1);
const Module833 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module985 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module14 = (0, _recoverInterop.__recoverInterop)(_module10);
const module186 = (0, _recoverInterop.__recoverInterop)(_module11);
const module3 = (0, _recoverInterop.__recoverInterop)(_module12);
const module243 = (0, _recoverInterop.__recoverInterop)(_module13);
const Module1126 = (0, _recoverInterop.__recoverInterop)(_Module3);
const module1383 = (0, _recoverInterop.__recoverInterop)(_module14);
const module1123 = (0, _recoverInterop.__recoverInterop)(_module15);
const module4042 = (0, _recoverInterop.__recoverInterop)(_module16);
let i;
let c;
let s;
let f;
let d;
let p;
let m;
let h;
let v;
const Y = new module1123();
const W = (0, _module61.inject)("detailStore")(i = (0, _module61.observer)((c = (Component_1 => {
  module55(c, Component_1);
  var i = (e => {
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
  })(c);
  function c(...r_1) {
    let e;
    module36(this, c);
    e = i.call(this, ...r_1);
    module65(e, "searchInputState", s, module88(e));
    e.tableRef = (0, _module60.createRef)();
    e.state = {
      polling: false
    };
    module65(e, "pollingFrequency", f, module88(e));
    module65(e, "logs", d, module88(e));
    module65(e, "tableCols", p, module88(e));
    e.markMemoizee = module1383(_log.markAll, {
      normalizer: function (e) {
        const [a, n = [], u = function () {}] = module96(e, 3);
        return `${a}+${n.toString()})+${u.name}`;
      },
      maxAge: 3000
    });
    e.renderHightLightMatchTd = function ({
      resKey,
      searchKey,
      handler = _log.mark
    }) {
      return function (t) {
        const n = t[resKey] || "";
        const u = e.searchInputState.query.filter(e => {
          const e_key = e.key;
          return e.value && (0, _module66.includes)(searchKey, e_key);
        }).map(e => e.value);
        const o = e.markMemoizee(n, u, handler);
        return /*#__PURE__*/React.createElement("span", null, o.map((e, key) => {
          if ((0, _module66.isString)(e)) {
            return e;
          }
          return /*#__PURE__*/React.createElement("span", {
            key: key,
            className: module4042.hightLightMatch
          }, e.hightLighted);
        }));
      };
    };
    e.renderHightLightMatchLogTd = function ({
      resKey,
      searchKey,
      handler = _log.mark
    }) {
      return function (t) {
        const n = Y.ansi_to_html(t[resKey] || "");
        const u = e.searchInputState.query.filter(e => {
          const e_key = e.key;
          return e.value && (0, _module66.includes)(searchKey, e_key);
        }).map(e => e.value);
        const o = e.markMemoizee(n, u, handler).map(e => {
          if ((0, _module66.isString)(e)) {
            return e;
          }
          return `<span class="${module4042.hightLightMatch}">${e.hightLighted}</span>`;
        });
        return /*#__PURE__*/React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: o.join("")
          }
        });
      };
    };
    e.scrollTo = function (t) {
      try {
        e.tableRef.current.scrollToRow(t);
      } catch (e) {}
    };
    module65(e, "onTableScrollTop", m, module88(e));
    e.initQuery = function () {
      e.searchInputState = {
        query: [],
        start: "",
        end: "",
        durationAlias: "",
        nextParamsKey: ""
      };
    };
    e.togglePolling = function () {
      if (e.state.polling) {
        e.stopPolling();
      } else {
        e.startPolling();
      }
    };
    module65(e, "changeFrequency", h, module88(e));
    module65(e, "pollingFunc", v, module88(e));
    e.onSearchParamsChange = function () {
      e.stopPolling();
      e.refreshQuery();
    };
    e.handleRefresh = function () {
      e.refreshQuery();
    };
    e.clearFilter = function () {
      e.initQuery();
      e.refreshQuery();
    };
    e.renderEmpty = function () {
      return /*#__PURE__*/React.createElement("div", {
        className: module4042.emptyText
      }, /*#__PURE__*/React.createElement("span", {
        className: module4042.emptyTipIcon
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "exclamation",
        size: 48
      })), /*#__PURE__*/React.createElement("div", null, t("NO_MATCHING_RESULT_FOUND")), /*#__PURE__*/React.createElement("p", null, t("YOU_CAN_TRY_TO"), /*#__PURE__*/React.createElement("span", {
        className: module4042.action,
        onClick: e.handleRefresh,
        "data-test": "table-empty-refresh"
      }, t("REFRESH_DATA")), t("OR"), /*#__PURE__*/React.createElement("span", {
        className: module4042.action,
        onClick: e.clearFilter,
        "data-test": "table-empty-clear-filter"
      }, t("CLEAR_SEARCH_CONDITIONS"))));
    };
    return e;
  }
  module37(c, [{
    key: "componentDidMount",
    value: function () {
      this.refreshQuery();
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      clearInterval(this.pollingInterval);
    }
  }, {
    key: "getQueryParams",
    value: function () {
      return this.searchInputState.query.filter(e => e.key).reduce((acc, {
        key,
        value
      }) => {
        const n = key;
        const l = acc[n];
        acc[n] = l ? `${l},${value}` : value;
        return acc;
      }, {});
    }
  }, {
    key: "refreshQuery",
    value: async function () {
      let t;
      let a;
      t = this.getQueryParams();
      a = await this.fetchLog({
        ...t,
        from: 0,
        size: 50,
        ...this.duration
      });
      this.logs = a.reverse();
      this.scrollTo(this.logs.length);
    }
  }, {
    key: "fetchLog",
    value: async function (t) {
      let a;
      let namespace;
      let gatewayName;
      let workspace;
      a = this.props.match.params;
      namespace = a.namespace;
      gatewayName = a.gatewayName;
      workspace = a.workspace;
      return await this.store.getGatewayLogs({
        cluster: this.cluster,
        namespace,
        workspace,
        gatewayName,
        ...t
      });
    }
  }, {
    key: "loadMoreLogs",
    value: async function () {
      let from;
      let a;
      let r;
      from = this.store.logs.from + this.store.logs.size;
      a = this.getQueryParams();
      r = await this.fetchLog({
        ...a,
        ...this.duration,
        from,
        size: 50
      });
      this.logs = [].concat(module61(r.reverse()), module61(this.logs));
      this.scrollTo(r.length);
    }
  }, {
    key: "stopPolling",
    value: function () {
      clearTimeout(this.pollingInterval);
      this.setState({
        polling: false
      });
    }
  }, {
    key: "startPolling",
    value: function () {
      this.setState({
        polling: true
      });
      this.pollingFunc();
      if (this.pollingInterval) {
        clearTimeout(this.pollingInterval);
      }
      this.pollingInterval = setInterval(this.pollingFunc, this.pollingFrequency);
    }
  }, {
    key: "renderOperation",
    value: function () {
      const params = this.props.match.params;
      const {
        namespace,
        gatewayName,
        workspace
      } = params;
      const l = {
        cluster: this.cluster,
        namespace,
        workspace,
        gatewayName
      };
      const options = [5, 10, 20].map(e => ({
        label: t("REFRESH_INTERVAL_VALUE", {
          value: e
        }),
        value: 1000 * e
      }));
      const o = {
        ...l,
        ...this.duration,
        ...this.getQueryParams()
      };
      const href = (0, _index.getClusterUrl)(this.store.exportLinkFactory(o));
      return /*#__PURE__*/React.createElement("div", {
        className: module4042.filter
      }, /*#__PURE__*/React.createElement("div", {
        className: module3(module4042.filterButton, module4042.pollingBtn),
        onClick: this.togglePolling
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: this.state.polling ? "stop" : "start",
        type: "light"
      })), /*#__PURE__*/React.createElement(module186.Select, {
        prefixIcon: /*#__PURE__*/React.createElement(module186.Icon, {
          type: "light",
          name: "timed-task",
          size: 20
        }),
        className: module3(module4042.filterButton, module4042.frequencyOpts),
        defaultValue: 5000,
        options: options,
        onChange: this.changeFrequency
      }), /*#__PURE__*/React.createElement("a", {
        href: href,
        download: true
      }, /*#__PURE__*/React.createElement("span", {
        className: module3(module4042.filterButton, module4042.exportBtn)
      }, /*#__PURE__*/React.createElement(module186.Tooltip, {
        content: t("EXPORT_LOGS")
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "export",
        type: "light"
      })))));
    }
  }, {
    key: "render",
    value: function () {
      if (globals.app.hasKSModule("whizard-logging")) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: module4042.title
        }, /*#__PURE__*/React.createElement("div", {
          className: module3(module4042.search, module31({}, module4042.focus, this.hasValue))
        }, /*#__PURE__*/React.createElement(module186.Icon, {
          className: module4042.isLeft,
          name: "magnifier",
          size: 20
        }), /*#__PURE__*/React.createElement(Module985, {
          className: module4042.searchInput,
          onChange: this.onSearchParamsChange,
          params: this.searchInputState,
          dropdownClass: module4042.dropdownClass,
          iconThem: "light",
          enableClear: true,
          dropDownItems: this.dropDownContent,
          showStep: false
        }), /*#__PURE__*/React.createElement(module186.Icon, {
          className: module3(module4042.clearIcon, module31({}, module4042.hideIcon, !this.hasValue)),
          name: "close",
          onClick: this.initQuery
        })), this.renderOperation()), /*#__PURE__*/React.createElement("div", {
          className: module4042.body
        }, (0, _module66.isEmpty)(module14.toJS(this.logs)) ? this.renderEmpty() : /*#__PURE__*/React.createElement(Module1126, {
          onScroll: this.onTableScrollTop,
          cols: this.tableCols,
          data: module14.toJS(this.logs),
          tableRef: this.tableRef,
          trCLassName: module4042.trCLassName,
          body: module4042.bodyClassName,
          header: module4042.headerClassName
        })));
      }
      return /*#__PURE__*/React.createElement(Module833, {
        className: "no-shadow",
        icon: "cluster",
        title: t("LOGGING_DISABLED")
      });
    }
  }, {
    key: "hasValue",
    get: function () {
      return Object.values(module14.toJS(this.searchInputState)).some(e => {
        if ((0, _module66.isArray)(e)) {
          return e.some(e => !(0, _module66.isEmpty)(module14.toJS(e)));
        }
        return !(0, _module66.isEmpty)(e);
      });
    }
  }, {
    key: "defaultDuration",
    get: function () {
      return {
        start_time: 0,
        end_time: Date.now()
      };
    }
  }, {
    key: "isWorkspaceGateway",
    get: function () {
      const params = this.props.match.params;
      const {
        workspace,
        namespace
      } = params;
      return workspace && !namespace;
    }
  }, {
    key: "duration",
    get: function () {
      const e = Date.now();
      const searchInputState = this.searchInputState;
      const {
        start,
        end
      } = searchInputState;
      if (start) {
        return {
          start_time: (0, _module66.min)([1000 * start, e]),
          end_time: (0, _module66.min)([1000 * end, e])
        };
      }
      return this.defaultDuration;
    }
  }, {
    key: "dropDownContent",
    get: function () {
      return {
        log_query: {
          icon: "magnifier",
          text: t("KEYWORD")
        },
        pod_query: {
          icon: "pod",
          text: t("POD")
        }
      };
    }
  }, {
    key: "store",
    get: function () {
      return this.props.detailStore;
    }
  }, {
    key: "cluster",
    get: function () {
      const cluster = this.props.match.params.cluster;
      const pathname = this.props.location.pathname;
      if (pathname.indexOf("/federatedprojects/") > -1 || pathname.indexOf("/workspaces/") > -1) {
        return localStorage.getItem("federated-cluster");
      }
      return cluster;
    }
  }]);
  return c;
})(_module60.Component), s = module49(c.prototype, "searchInputState", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {
      query: [],
      start: "",
      end: "",
      durationAlias: "",
      nextParamsKey: ""
    };
  }
}), f = module49(c.prototype, "pollingFrequency", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 5000;
  }
}), d = module49(c.prototype, "logs", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
}), module49(c.prototype, "hasValue", [module14.computed], Object.getOwnPropertyDescriptor(c.prototype, "hasValue"), c.prototype), p = module49(c.prototype, "tableCols", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [{
      thead: t("TIME"),
      key: "time",
      dataIndex: "time",
      mustShow: true,
      content: function (e) {
        return `[${module243(e.time).format("YYYY-MM-DD HH:mm:ss")}]`;
      }
    }, {
      thead: t("POD"),
      key: "pod",
      dataIndex: "pod",
      mustShow: true,
      content: this.renderHightLightMatchTd({
        resKey: "pod",
        searchKey: ["pod_query"]
      })
    }, {
      thead: t("MESSAGE"),
      key: "log",
      dataIndex: "log",
      className: module4042.logItem,
      content: this.renderHightLightMatchLogTd({
        resKey: "log",
        searchKey: ["log_query"],
        handler: _log.esMark
      }),
      mustShow: true
    }];
  }
}), module49(c.prototype, "refreshQuery", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "refreshQuery"), c.prototype), module49(c.prototype, "fetchLog", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "fetchLog"), c.prototype), module49(c.prototype, "loadMoreLogs", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "loadMoreLogs"), c.prototype), m = module49(c.prototype, "onTableScrollTop", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return function ({
      scrollTop
    }) {
      const logs = _this.store.logs;
      const {
        from,
        size,
        total
      } = logs;
      if (scrollTop === 0 && total > from + size) {
        _this.loadMoreLogs();
      }
    };
  }
}), h = module49(c.prototype, "changeFrequency", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return function (t) {
      _this.pollingFrequency = t;
      if (_this.state.polling) {
        clearTimeout(_this.pollingInterval);
        _this.startPolling();
      }
    };
  }
}), v = module49(c.prototype, "pollingFunc", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return function () {
      _this.searchInputState.end = Math.ceil(Date.now() / 1000);
      _this.searchInputState.start = _this.searchInputState.end - 600;
      _this.searchInputState.durationAlias = `${10}m`;
      _this.refreshQuery();
    };
  }
}), i = c)) || i) || i;
var _default = exports["default"] = W;

/***/ },

/***/ "./src/unpacked/module-4042.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-4042.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  title: "h3EGYxJHcXzNAZU64Ys-7",
  focus: "_1TYZVVQtrXwaAaa2nwD6NE",
  search: "_2QSFqdrB9aMZjIVh3QK0R2",
  clearIcon: "_3qDug15F8wtzhqs8WjeLBW",
  hideIcon: "_2CnN8q86DPsSM48wJnL6Nv",
  searchInput: "_2432rvdXjewrevIwLoYaSt",
  filter: "_2fb4uH-e_iaRbWSOMvDMPn",
  filterButton: "_7ASJ4CE_FCBt8fhgHM3Nz",
  exportBtn: "_2JJ6SH_-_MTCF7OPFW7kys",
  pollingBtn: "rOD92XzSZBE4irFyl6UkB",
  frequencyOpts: "_39g5yqbm9RZmh3S9viq599",
  searchBar: "_2PXN-WMqrT8hDBu-4PGTte",
  icon: "_1Mf8725MJ88eggNRQj49ku",
  input: "_2ApsehJ2Zoyl1l3Er5b7Ki",
  dropdownClass: "e7mNbUyHuqgvvXQ3KQ-ip",
  body: "_2zscwenqDTZYN32pr5Ds5-",
  logItem: "_3OcRCVG8GQmCwWPLwTW978",
  bodyClassName: "_2RyfnALWpJKi2fQDgJ-5qc",
  headerClassName: "_1ClFBNqMO40nDrGs0NH27N",
  trCLassName: "_1JuCS0O3IJiNnkzG1zCHzs",
  emptyText: "_2p2Dbxritd_IaivnVdRvZ1",
  emptyTipIcon: "_1dM3MOctITqHWlne46RoCc",
  action: "_3ihxA24eqCRlJprACXfqZc",
  hightLightMatch: "_3f66pKDSXrWjGp0u0360VP"
};

/***/ }

}]);