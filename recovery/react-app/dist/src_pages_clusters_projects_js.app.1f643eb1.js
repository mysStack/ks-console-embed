"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_pages_clusters_projects_js"],{

/***/ "./src/pages/clusters/projects.js"
/*!****************************************!*\
  !*** ./src/pages/clusters/projects.js ***!
  \****************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.MetricTypes = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
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
__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module42 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-189.js */ "./src/unpacked/module-189.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Avatar */ "./src/components/Base/Avatar.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Status */ "./src/components/Base/Status.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! components/HOCs/withList */ "./src/components/HOCs/withList.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! components/Tables/List */ "./src/components/Tables/List.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! stores/project */ "./src/stores/project.js"));
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-959.js */ "./src/unpacked/module-959.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module26 = (0, _recoverInterop.__recoverInterop)(_module6);
const module189 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module789 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module796 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module3);
const module794 = (0, _recoverInterop.__recoverInterop)(_module8);
const ListPage = _module8.ListPage;
const Module797 = (0, _recoverInterop.__recoverInterop)(_Module4);
const module439 = (0, _recoverInterop.__recoverInterop)(_module9);
const module959 = (0, _recoverInterop.__recoverInterop)(_module0);
let c;
const MetricTypes = exports.MetricTypes = {
  cpu: "namespace_cpu_usage",
  memory: "namespace_memory_usage_wo_cache",
  gpu: "namespace_gpu_usage",
  gpu_memory: "namespace_gpu_memory_usage",
  pod: "namespace_pod_count"
};
const M = module794({
  store: new module439(),
  name: "PROJECT",
  module: "projects"
})(c = (Component_1 => {
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
    e.monitoringStore = new module959();
    e.showAction = function (e) {
      return !e.isFedManaged;
    };
    e.handleFetch = function (t, a) {
      e.props.routing.query({
        ...t,
        type: e.type
      }, a);
    };
    e.handleTabChange = function (t) {
      e.props.routing.push(`/clusters/${e.cluster}/projects?type=${t}`);
    };
    e.getData = async function t() {
      let a;
      let r;
      let n;
      let l;
      const u = arguments;
      a = u.length > 0 && u[0] !== undefined ? u[0] : {};
      ({
        silent: r,
        ...n
      } = a);
      e.query = n;
      n.type = n.type || "user";
      e.type = n.type;
      l = e.props.store;
      if (r) {
        l.list.silent = true;
      }
      await l.fetchList({
        ...e.props.match.params,
        ...n
      });
      await e.monitoringStore.fetchMetrics({
        ...e.props.match.params,
        resources: l.list.data.map(e => e.name),
        metrics: Object.values((0, _index.hideGPUByLicense)(MetricTypes, e.cluster)),
        last: true
      });
      l.list.silent = false;
    };
    e.getLastValue = function (t, a) {
      const data = e.monitoringStore.data;
      const n = (module26(data, `${a}.data.result`) || []).find(e => module26(e, "metric.namespace") === t.name);
      return module26(n, "value[1]", 0);
    };
    e.getColumns = function () {
      const e_props = e.props;
      const {
        getSortOrder,
        prefix
      } = e_props;
      const l = [{
        title: t("NAME"),
        dataIndex: "name",
        sorter: true,
        sortOrder: getSortOrder("name"),
        search: true,
        render: function (e, t) {
          return /*#__PURE__*/React.createElement(Module789, {
            to: t.status === "Terminating" ? null : `${prefix}/${e}`,
            icon: "project",
            iconSize: 40,
            isMultiCluster: t.isFedHostNamespace,
            desc: t.description || "-",
            title: (0, _index.getDisplayNameNew)(t)
          });
        }
      }, {
        title: t("STATUS"),
        dataIndex: "status",
        isHideable: true,
        search: true,
        render: function (e) {
          return /*#__PURE__*/React.createElement(Module796, {
            type: e,
            name: t(e.toUpperCase()),
            flicker: true
          });
        }
      }, {
        title: t("WORKSPACE"),
        dataIndex: "workspace",
        isHideable: true,
        search: true,
        render: function (e) {
          return (0, _index.showNameAndAlias)(e, "workspace");
        }
      }];
      if (globals.app.hasClusterModule(e.cluster, "whizard-monitoring")) {
        l.push({
          title: t("CPU_USAGE"),
          key: "namespace_cpu_usage",
          isHideable: true,
          render: function (t) {
            return (0, _monitoring.getSuitableValue)(e.getLastValue(t, MetricTypes.cpu), "cpu", "-");
          }
        }, {
          title: t("MEMORY_USAGE"),
          key: "namespace_memory_usage_wo_cache",
          isHideable: true,
          render: function (t) {
            return (0, _monitoring.getSuitableValue)(e.getLastValue(t, MetricTypes.memory), "memory", "-");
          }
        }, {
          title: t("GPU_USAGE"),
          key: "namespace_gpu_usage",
          isHideable: true,
          render: function (t) {
            return (0, _monitoring.getSuitableValue)(e.getLastValue(t, MetricTypes.gpu), "gpu", "-");
          }
        }, {
          title: t("GPU_MEMORY_USAGE"),
          key: "namespace_gpu_memory_usage",
          isHideable: true,
          render: function (t) {
            return (0, _monitoring.getSuitableValue)(e.getLastValue(t, MetricTypes.gpu_memory), "memory", "-");
          }
        }, {
          title: t("POD_PL"),
          key: "namespace_pod_count",
          isHideable: true,
          render: function (t) {
            return e.getLastValue(t, MetricTypes.pod);
          }
        });
      }
      return l;
    };
    e.showCreate = function () {
      return e.props.trigger("project.create", {
        ...e.props.match.params,
        success: function () {
          return e.getData();
        }
      });
    };
    return e;
  }
  module37(r, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        bannerProps,
        tableProps
      } = props;
      const isLoading = this.monitoringStore.isLoading;
      const columns = (0, _index.hideGPUByLicense)(this.getColumns(), this.cluster);
      return /*#__PURE__*/React.createElement(ListPage, _extends({}, this.props, {
        getData: this.getData,
        module: "namespaces"
      }), /*#__PURE__*/React.createElement(Module793, _extends({}, bannerProps, {
        tabs: this.tabs
      })), /*#__PURE__*/React.createElement(Module797, _extends({}, tableProps, {
        className: "table-2-6 table-4-3",
        itemActions: this.itemActions,
        tableActions: this.tableActions,
        columns: columns,
        columnSearch: this.columnSearch,
        onCreate: this.type === "system" ? null : this.showCreate,
        isLoading: tableProps.isLoading || isLoading
      })));
    }
  }, {
    key: "itemActions",
    get: function () {
      const _this = this;
      const props = this.props;
      const {
        trigger,
        routing,
        name
      } = props;
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        show: this.showAction,
        onClick: function (e) {
          return trigger("resource.baseinfo.edit", {
            detail: module189(e, "workspace"),
            success: routing.query
          });
        }
      }, {
        key: "edit-annotations",
        icon: "pen",
        text: t("EDIT_ANNOTATIONS"),
        action: "manage",
        show: function (t) {
          return t.workspace !== globals.config.systemWorkspace && _this.showAction(t);
        },
        onClick: function (e) {
          return trigger("resource.annotations.edit", {
            detail: e
          });
        }
      }, {
        key: "modify",
        icon: "restart",
        text: t("ASSIGN_WORKSPACE"),
        action: "manage",
        show: function (t) {
          return !t.workspace && _this.showAction(t);
        },
        onClick: function (e) {
          return trigger("project.assignworkspace", {
            detail: e,
            success: routing.query
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        show: function (t) {
          return t.workspace !== globals.config.systemWorkspace && _this.showAction(t);
        },
        onClick: function (e) {
          return trigger("resource.delete", {
            type: name,
            resource: e.name,
            detail: module189(e, "workspace"),
            success: routing.query
          });
        }
      }];
    }
  }, {
    key: "tabs",
    get: function () {
      return {
        value: this.type || "user",
        onChange: this.handleTabChange,
        options: [{
          value: "user",
          label: t("USER_PROJECTS")
        }, {
          value: "system",
          label: t("SYSTEM_PROJECTS")
        }]
      };
    }
  }, {
    key: "tableActions",
    get: function () {
      return {
        ...this.props.tableProps.tableActions,
        onFetch: this.handleFetch
      };
    }
  }, {
    key: "cluster",
    get: function () {
      return this.props.match.params.cluster;
    }
  }, {
    key: "columnSearch",
    get: function () {
      const search = (0, _index.compareVersion)((0, _index.getClusterVersion)(this.cluster), "3.4.0") >= 0;
      return [{
        dataIndex: "name",
        title: t("NAME"),
        search: true
      }, {
        dataIndex: "alias",
        title: t("ALIAS"),
        search
      }];
    }
  }]);
  return r;
})(_module42.Component)) || c;
var _default = exports["default"] = M;

/***/ }

}]);