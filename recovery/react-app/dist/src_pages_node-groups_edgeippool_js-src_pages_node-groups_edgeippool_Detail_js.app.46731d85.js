"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_pages_node-groups_edgeippool_js-src_pages_node-groups_edgeippool_Detail_js"],{

/***/ "./src/pages/node-groups/edgeippool.js"
/*!*********************************************!*\
  !*** ./src/pages/node-groups/edgeippool.js ***!
  \*********************************************/
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
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-48.js */ "./node_modules/core-js3/modules/es.array.slice.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-188.js */ "./src/unpacked/module-188.js");
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
var _module42 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-240.js */ "./src/unpacked/module-240.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Avatar */ "./src/components/Base/Avatar.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Card */ "./src/components/Base/Card.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Status */ "./src/components/Base/Status.js"));
var _Module4 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Text */ "./src/components/Base/Text.js"));
var _Module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-793.js */ "./src/unpacked/module-793.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! components/HOCs/withList */ "./src/components/HOCs/withList.js"));
var _Module6 = _interopRequireWildcard(__webpack_require__(/*! components/Tables/List */ "./src/components/Tables/List.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2003.js */ "./src/unpacked/module-2003.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _status = __webpack_require__(/*! utils/status */ "./src/utils/status.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-244.js */ "./src/shims/qs.js"));
var _module47 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5272.js */ "./src/unpacked/module-5272.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module240 = (0, _recoverInterop.__recoverInterop)(_module6);
const Module789 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module802 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module796 = (0, _recoverInterop.__recoverInterop)(_Module3);
const Module791 = (0, _recoverInterop.__recoverInterop)(_Module4);
const Module793 = (0, _recoverInterop.__recoverInterop)(_Module5);
const module794 = (0, _recoverInterop.__recoverInterop)(_module7);
const ListPage = _module7.ListPage;
const Module797 = (0, _recoverInterop.__recoverInterop)(_Module6);
const module2003 = (0, _recoverInterop.__recoverInterop)(_module8);
const module244 = (0, _recoverInterop.__recoverInterop)(_module9);
const module14 = (0, _recoverInterop.__recoverInterop)(_module0);
const module5272 = (0, _recoverInterop.__recoverInterop)(_module1);
let u;
const P = module794({
  module: "ippools",
  name: "POD_IP_POOL",
  skipAuth: true,
  rowKey: "uid"
})(u = (Component_1 => {
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
    n.getColumns = function () {
      const n_props = n.props;
      const {
        getSortOrder,
        module,
        getFilteredValue
      } = n_props;
      return [{
        title: t("NAME"),
        dataIndex: "name",
        sorter: true,
        sortOrder: getSortOrder("name"),
        search: true,
        key: "name",
        render: function (e, t) {
          return /*#__PURE__*/React.createElement(Module789, {
            icon: _constants.ICON_TYPES[module],
            iconSize: 40,
            title: (0, _index.getDisplayName)(t),
            desc: t.description || "-",
            to: `${n.props.match.url}/${e}`
          });
        }
      }, {
        title: t("STATUS"),
        dataIndex: "status",
        filters: n.getDisabledFilters(),
        filteredValue: getFilteredValue("disabled"),
        isHideable: true,
        search: true,
        render: function (e, a) {
          const disabled = (a?.spec || {}).disabled;
          return /*#__PURE__*/React.createElement(Module796, {
            type: disabled ? "Disabled" : "Running",
            name: t(disabled ? "DISABLED" : "ENABLED")
          });
        }
      }, {
        title: t("NETWORK_SEGMENT"),
        isHideable: true,
        dataIndex: "cidr"
      }, {
        title: t("IPPOOL_BLOCK_SIZE"),
        dataIndex: "blockSize",
        isHideable: true,
        render: function (e) {
          return e ?? "-";
        }
      }, n.isOutdated ? null : {
        title: t("IPPOOL_OVERLAY_MODE"),
        dataIndex: "overlay",
        isHideable: true,
        render: function (e, {
          ipipMode,
          vxlanMode
        }) {
          const n = (0, _status.getOverlayStatus)({
            ipipMode,
            vxlanMode
          });
          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
            className: "font-bold"
          }, n.type), n.value && /*#__PURE__*/React.createElement("span", {
            style: {
              marginLeft: "4px"
            }
          }, "(", n.value, ")"));
        }
      }, n.isOutdated ? null : {
        title: t("IPPOOL_IS_AUTO_ASSIGN"),
        dataIndex: "nodeSelector",
        isHideable: true,
        render: function (e) {
          if (e === "!all()") {
            return t("NO");
          }
          return t("YES");
        }
      }, {
        title: t(n.isEdge ? "PROJECT_PL" : "WORKSPACE"),
        dataIndex: n.isEdge ? "namespace" : "workspace",
        isHideable: true,
        render: function (e, a) {
          if (a.isDefault) {
            return t("ALL");
          }
          return a.metadata?.labels?.["kubesphere.io/namespace"];
        }
      }].filter(Boolean);
    };
    n.showCreate = function () {
      const n_props = n.props;
      const {
        match,
        module
      } = n_props;
      if (match.params.group) {
        return n.props.trigger("edge.nodegroup.ippool.add", {
          module,
          ...match.params,
          store: n.store,
          success: function () {
            return n.props.getData({});
          }
        });
      }
      return n.props.trigger("network.ippool.add", {
        module,
        cluster: match.params.cluster,
        namespace: match.params.namespace,
        trigger: n.props.trigger,
        isOutdated: n.isOutdated,
        hideWorkspace: true,
        isCalico: n.isCalico,
        success: n.props.getData,
        allList: module14.toJS(n.store?.list?.data ?? [])
      });
    };
    n.ippoolStore = new module2003();
    n.store = new (n.ippoolStore.getStoreByCluster(e.match.params.cluster))();
    n.isEdge = location.href.includes("edgeippool");
    return n;
  }
  module37(r, [{
    key: "getDisabledFilters",
    value: function () {
      return [{
        text: t("ENABLED"),
        value: "enabled"
      }, {
        text: t("DISABLED"),
        value: "disabled"
      }];
    }
  }, {
    key: "render",
    value: function () {
      const props = this.props;
      const {
        match,
        bannerProps,
        tableProps
      } = props;
      const createText = match?.params?.group ? "绑定" : undefined;
      return /*#__PURE__*/React.createElement(ListPage, this.props, /*#__PURE__*/React.createElement(Module793, _extends({}, bannerProps, {
        tips: this.tips
      })), this.isOutdated && /*#__PURE__*/React.createElement(Module802, {
        className: module5272.upload
      }, /*#__PURE__*/React.createElement(Module791, {
        icon: "upload-duotone",
        title: t("FUNCTION_UPGRADE"),
        description: t("FUNCTION_UPGRADE_DESC")
      })), /*#__PURE__*/React.createElement(Module797, _extends({}, tableProps, {
        itemActions: this.itemActions,
        columns: this.getColumns(),
        onCreate: this.showCreate,
        createText: createText,
        cluster: match.params.cluster,
        getCheckboxProps: this.getCheckboxProps,
        searchType: "name"
      })));
    }
  }, {
    key: "isOutdated",
    get: function () {
      return false;
    }
  }, {
    key: "isCalico",
    get: function () {
      const cluster = this.props.match.params.cluster;
      return this.ippoolStore.isCalico(cluster);
    }
  }, {
    key: "columnConfig",
    get: function () {
      const isCalico = this.isCalico;
      return {
        hideWorkspace: isCalico,
        hideSerch: isCalico,
        hideFilter: isCalico
      };
    }
  }, {
    key: "tips",
    get: function () {
      return [{
        title: t("IPPOOL_USAGE_Q"),
        description: this.isCalico ? t("IPPOOL_USAGE_A_1") : t("IPPOOL_USAGE_A")
      }];
    }
  }, {
    key: "itemActions",
    get: function () {
      const _this = this;
      const props = this.props;
      const {
        trigger,
        name,
        match
      } = props;
      if (match.params.group) {
        return [{
          key: "remove",
          icon: "trash",
          text: t("DROP"),
          action: "delete",
          onClick: function (a) {
            return trigger("resource.delete", {
              type: name,
              detail: a,
              store: _this.store,
              title: `${t("DROP")}${t("POD_IP_POOL_PL")}`,
              success: _this.props.getData,
              onOk: function () {
                return _this.store.delIpPoolToNodeGroup({
                  cluster: match.params.cluster,
                  nodetree: match.params.group,
                  params: [{
                    op: "remove",
                    path: `/metadata/annotations/infra.kubesphere.io~1ippool-${a.metadata.labels["kubesphere.io/namespace"]}`,
                    value: a.name
                  }]
                });
              }
            });
          }
        }];
      }
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        onClick: function (t) {
          return trigger("resource.baseinfo.edit", {
            detail: t,
            success: _this.props.getData
          });
        }
      }, {
        key: "editOverlay",
        icon: "pen",
        text: t("EDIT_OVERLAY"),
        action: "edit",
        show: function () {
          return !_this.isOutdated;
        },
        onClick: function (t) {
          trigger("network.ipool.editoverlay", {
            detail: t,
            cluster: match.params.cluster,
            success: _this.props.getData
          });
        }
      }, {
        key: "viewYaml",
        icon: "eye",
        text: t("VIEW_YAML"),
        action: "view",
        onClick: function (e) {
          return trigger("resource.yaml.edit", {
            detail: e,
            readOnly: true
          });
        }
      }, {
        key: "modify",
        icon: "enterprise",
        text: t(this.isEdge ? "ASSIGN_PROJECT" : "ASSIGN_WORKSPACE"),
        show: function () {
          return !_this.columnConfig.hideWorkspace;
        },
        action: "edit",
        onClick: function (t) {
          return trigger(_this.isEdge ? "network.ipool.assignnamespace" : "network.ipool.assignworkspace", {
            detail: t,
            cluster: match.params.cluster,
            success: _this.props.getData
          });
        }
      }, {
        key: "autoAssign",
        icon: "changing-over",
        text: t("IPPOOL_AUTO_ASSIGN"),
        show: function () {
          return !_this.isOutdated;
        },
        action: "edit",
        onClick: function (t) {
          return trigger("network.ipool.autoAssign", {
            detail: t,
            cluster: match.params.cluster,
            success: _this.props.getData
          });
        }
      }, {
        key: "enable",
        icon: "start",
        text: t("ENABLE"),
        action: "edit",
        show: function (t) {
          return !_this.isOutdated && t.spec?.disabled;
        },
        onClick: function (a) {
          _this.props.store.patch(a, {
            spec: {
              disabled: false
            }
          }).then(() => {
            module240.success({
              content: `${t("ENABLE_SUCCESSFUL")}`
            });
            _this.props.rootStore.routing.query();
          });
        }
      }, {
        key: "disable",
        icon: "stop",
        text: t("DISABLE"),
        action: "edit",
        show: function (t) {
          return !_this.isOutdated && !t.spec?.disabled;
        },
        onClick: function (t) {
          trigger("network.ipool.disable", {
            store: _this.store,
            detail: t,
            isEdge: _this.isEdge,
            cluster: match.params.cluster,
            success: _this.props.getData
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        onClick: function (t) {
          return trigger("resource.delete", {
            type: name,
            detail: t,
            success: _this.props.getData
          });
        }
      }];
    }
  }]);
  return r;
})(_module42.Component)) || u;
const A = (0, _module47.inject)("rootStore")(function (e) {
  const cluster = e.match.params.cluster;
  const a = module244.parse(e.location.search.slice(1));
  const r = (0, _module42.useMemo)(function () {
    return new module2003();
  }, []);
  const store = (0, _module42.useMemo)(function () {
    return new (r.getStoreByCluster(cluster))();
  }, [cluster]);
  const l = r.isCalico(cluster);
  (0, _module42.useEffect)(function () {
    if (l && Number(a.page) > 1) {
      e.rootStore.routing.query({
        ...a,
        page: 1
      });
    }
  }, [l]);
  return /*#__PURE__*/React.createElement(P, _extends({
    store: store
  }, e));
});
var _default = exports["default"] = A;

/***/ },

/***/ "./src/pages/node-groups/edgeippool/Detail.js"
/*!****************************************************!*\
  !*** ./src/pages/node-groups/edgeippool/Detail.js ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-64.js */ "./node_modules/core-js3/modules/es.string.replace.js");
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
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-240.js */ "./src/unpacked/module-240.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-825.js */ "./src/unpacked/module-825.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Status */ "./src/components/Base/Status.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module38 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module39 = __webpack_require__(/*! unpacked/module-478.js */ "./src/shims/netmask.js");
var _module40 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2003.js */ "./src/unpacked/module-2003.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _status = __webpack_require__(/*! utils/status */ "./src/utils/status.js");
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5259.js */ "./src/unpacked/module-5259.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module240 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module825 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module796 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module26 = (0, _recoverInterop.__recoverInterop)(_module8);
const module63 = (0, _recoverInterop.__recoverInterop)(_module9);
const module14 = (0, _recoverInterop.__recoverInterop)(_module0);
const module2003 = (0, _recoverInterop.__recoverInterop)(_module1);
const module5259 = (0, _recoverInterop.__recoverInterop)(_module10);
let l;
const N = (0, _module38.inject)("rootStore")(l = (0, _module38.observer)(l = (0, _action.trigger)(l = (Component_1 => {
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
    n.fetchData = function () {
      n.store.fetchDetail(n.props.match.params);
    };
    n.getOperations = function () {
      const n_name = n.name;
      const cluster = n.props.match.params.cluster;
      const detail = module14.toJS(n.store.detail);
      return [{
        key: "edit",
        icon: "pen",
        text: t("EDIT_INFORMATION"),
        action: "edit",
        type: "control",
        onClick: function () {
          return n.trigger("resource.baseinfo.edit", {
            type: n_name,
            detail,
            success: n.fetchData
          });
        }
      }, {
        key: "editOverlay",
        icon: "pen",
        show: function () {
          return !n.isOutdated;
        },
        text: t("EDIT_OVERLAY"),
        action: "edit",
        onClick: function () {
          n.trigger("network.ipool.editoverlay", {
            detail,
            cluster,
            success: n.fetchData
          });
        }
      }, {
        key: "viewYaml",
        icon: "eye",
        text: t("VIEW_YAML"),
        action: "view",
        onClick: function () {
          return n.trigger("resource.yaml.edit", {
            detail,
            readOnly: true
          });
        }
      }, {
        key: "modify",
        icon: "enterprise",
        text: t("ASSIGN_WORKSPACE"),
        action: "edit",
        show: function () {
          return !n.isCalico;
        },
        onClick: function () {
          return n.trigger("network.ipool.assignworkspace", {
            detail,
            success: n.fetchData
          });
        }
      }, {
        key: "autoAssign",
        icon: "changing-over",
        text: t("IPPOOL_AUTO_ASSIGN"),
        show: function () {
          return !n.isOutdated;
        },
        action: "edit",
        onClick: function () {
          return n.trigger("network.ipool.autoAssign", {
            detail,
            cluster,
            success: n.fetchData
          });
        }
      }, {
        key: "enable",
        icon: "start",
        text: t("ENABLE"),
        action: "edit",
        show: function (e) {
          return e.disabled && !n.isOutdated;
        },
        onClick: function () {
          n.store.patch(detail, {
            spec: {
              disabled: false
            }
          }).then(() => {
            n.fetchData();
            module240.success({
              content: `${t("ENABLE_SUCCESSFUL")}`
            });
          });
        }
      }, {
        key: "disable",
        icon: "stop",
        text: t("DISABLE"),
        action: "edit",
        show: function (e) {
          return !e.disabled && !n.isOutdated;
        },
        onClick: function () {
          n.trigger("network.ipool.disable", {
            detail,
            cluster,
            success: n.fetchData
          });
        }
      }, {
        key: "delete",
        icon: "trash",
        text: t("DELETE"),
        action: "delete",
        type: "danger",
        onClick: function () {
          return n.trigger("resource.delete", {
            type: n_name,
            detail,
            success: function () {
              return n.routing.push(n.listUrl);
            }
          });
        }
      }].filter(e => !e.show || e.show(detail));
    };
    n.getAttrs = function () {
      const e = module14.toJS(n.store.detail);
      if (!module63(e)) {
        const a = new _module39.Netmask(e.cidr);
        const r = (0, _status.getOverlayStatus)(e);
        return [!n.isOutdated && {
          name: t("STATUS"),
          value: /*#__PURE__*/React.createElement(Module796, {
            type: e.disabled ? "Disabled" : "Running",
            name: t(e.disabled ? "DISABLED" : "ENABLED")
          })
        }, {
          name: t("NETWORK_SEGMENT"),
          value: e.cidr
        }, {
          name: t("USED_IP_ADDRESSES"),
          value: module26(e, "status.capacity", 0) - module26(e, "status.unallocated", 0)
        }, {
          name: t("IPPOOL_BLOCK_SIZE"),
          value: e.blockSize
        }, !n.isOutdated && {
          name: t("IPPOOL_OVERLAY_MODE"),
          value: r.value ? `${r.type}(${r.value})` : r.type
        }, {
          name: t("MASK"),
          value: a.mask
        }, {
          name: t("NETWORK"),
          value: a.base
        }, {
          name: t("START_IP_ADDRESS"),
          value: a.base
        }, {
          name: t("END_IP_ADDRESS"),
          value: a.broadcast
        }, {
          name: t("CREATION_TIME_TCAP"),
          value: (0, _index.getLocalTime)(e.createTime).format("YYYY-MM-DD HH:mm:ss")
        }, {
          name: t("CREATOR"),
          value: e.creator || "-"
        }].filter(Boolean);
      }
    };
    n.ippoolStore = new module2003();
    n.store = new (n.ippoolStore.getStoreByCluster(e.match.params.cluster))();
    return n;
  }
  module37(r, [{
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
      const a = {
        module: this.module,
        name: (0, _index.getDisplayName)(this.store.detail),
        desc: this.store.detail.description,
        operations: this.getOperations(),
        attrs: this.getAttrs(),
        breadcrumbs: [{
          label: t("POD_IP_POOL_PL"),
          url: this.listUrl
        }]
      };
      return /*#__PURE__*/React.createElement(Module825, _extends({
        stores: stores,
        routes: this.routes
      }, a));
    }
  }, {
    key: "module",
    get: function () {
      return "ippools";
    }
  }, {
    key: "name",
    get: function () {
      return "POD_IP_POOL";
    }
  }, {
    key: "listUrl",
    get: function () {
      const match = this.props.match;
      const {
        url,
        params
      } = match;
      return url.replace(`/${params.name}`, "");
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
    key: "isOutdated",
    get: function () {
      if (!globals.app.isMultiCluster) {
        return false;
      }
      const e = module26(globals, `clusterConfig.${this.props.match.params.cluster}.ksVersion`);
      return (0, _index.compareVersion)(e, "3.4.0") < 0;
    }
  }, {
    key: "isCalico",
    get: function () {
      const cluster = this.props.match.params.cluster;
      return this.ippoolStore.isCalico(cluster);
    }
  }, {
    key: "routes",
    get: function () {
      return module5259(this.isCalico);
    }
  }]);
  return r;
})(_module40.Component)) || l) || l) || l;
var _default = exports["default"] = N;

/***/ },

/***/ "./src/unpacked/module-2003.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2003.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
__webpack_require__(/*! unpacked/module-1314.js */ "./src/unpacked/module-1314.js");
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1175.js */ "./src/unpacked/module-1175.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module26 = (0, _recoverInterop.__recoverInterop)(_module2);
const module1175 = (0, _recoverInterop.__recoverInterop)(_module3);
var e = exports["default"] = function e(t) {
  const _this = this;
  module36(this, e);
  this.store = null;
  this.setStore = function (e) {
    _this.store = e;
  };
  this.isCalico = function (e) {
    const t = globals.app.isMultiCluster ? module26(globals, `clusterConfig.${e}.ksVersion`) : module26(globals, "ksConfig.ksVersion");
    return (0, _index.compareVersion)(t, "3.4.1") >= 0;
  };
  this.isOutdated = function (e) {
    if (!globals.app.isMultiCluster) {
      return false;
    }
    const t = module26(globals, `clusterConfig.${e}.ksVersion`);
    return (0, _index.compareVersion)(t, "3.4.0") < 0;
  };
  this.getStoreByCluster = function (e) {
    return module1175;
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

/***/ "./src/unpacked/module-5259.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5259.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
var _router = __webpack_require__(/*! utils/router.config */ "./src/utils/router.config.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5260.js */ "./src/unpacked/module-5260.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5262.js */ "./src/unpacked/module-5262.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5269.js */ "./src/unpacked/module-5269.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module5260 = (0, _recoverInterop.__recoverInterop)(_module);
const module5262 = (0, _recoverInterop.__recoverInterop)(_module2);
const module5269 = (0, _recoverInterop.__recoverInterop)(_module3);
const path = "/clusters/:cluster/ippools/:name";
function _default(e) {
  let t = [{
    path: `${path}/workspaces`,
    title: "WORKSPACE_PL",
    component: module5260,
    exact: true
  }, {
    path: `${path}/namespaces`,
    title: "NAMESPACE_PL",
    component: module5262,
    exact: true
  }, {
    path: `${path}/pods`,
    title: "POD_PL",
    component: module5269,
    exact: true
  }];
  if (e) {
    (t = t.filter(e => e.title !== "WORKSPACE_PL")).push((0, _router.getIndexRoute)({
      path,
      to: `${path}/namespaces`,
      exact: true
    }));
  } else {
    (t = t.filter(e => e.title !== "NAMESPACE_PL")).push((0, _router.getIndexRoute)({
      path,
      to: `${path}/workspaces`,
      exact: true
    }));
  }
  return t;
}
;

/***/ },

/***/ "./src/unpacked/module-5260.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5260.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-73.js */ "./node_modules/core-js3/modules/es.array.join.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-87.js */ "./node_modules/core-js3/modules/es.array.reduce.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
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
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Panel */ "./src/components/Base/Panel.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Text */ "./src/components/Base/Text.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module42 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module43 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module1 = _interopRequireWildcard(__webpack_require__(/*! stores/workspace */ "./src/stores/workspace.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5261.js */ "./src/unpacked/module-5261.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module31 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module49 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module790 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module791 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module26 = (0, _recoverInterop.__recoverInterop)(_module8);
const module63 = (0, _recoverInterop.__recoverInterop)(_module9);
const module14 = (0, _recoverInterop.__recoverInterop)(_module0);
const module445 = (0, _recoverInterop.__recoverInterop)(_module1);
const module5261 = (0, _recoverInterop.__recoverInterop)(_module10);
let l;
let u;
const k = (0, _module42.inject)("detailStore")(l = (0, _module42.observer)((u = (Component_1 => {
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
    e.store = e.props.detailStore;
    e.workspaceStore = new module445();
    e.fetchWorkspaces = function () {
      const detail = e.store.detail;
      const a = module26(detail, "status.workspaces", {});
      e.workspaceStore.fetchList({
        names: Object.keys(a).join(","),
        limit: -1
      });
    };
    return e;
  }
  module37(r, [{
    key: "componentDidMount",
    value: function () {
      this.fetchWorkspaces();
    }
  }, {
    key: "render",
    value: function () {
      const detail = this.store.detail;
      const a = module26(detail, "status.workspaces", {});
      const workspaces = this.workspaces;
      return /*#__PURE__*/React.createElement(Module790, {
        title: t("WORKSPACES")
      }, /*#__PURE__*/React.createElement("div", {
        className: module5261.wrapper
      }, module63(a) && /*#__PURE__*/React.createElement("div", {
        className: module5261.empty
      }, t("IPPOOL_WORKSPACE_EMPTY_TIP")), Object.keys(a).map(e => {
        const n = workspaces[e] || {};
        return /*#__PURE__*/React.createElement("div", {
          key: e,
          className: module5261.item
        }, /*#__PURE__*/React.createElement(Module791, {
          icon: "enterprise",
          title: (0, _index.showNameAndAlias)(n),
          description: n.description || t("WORKSPACE")
        }), /*#__PURE__*/React.createElement(Module791, {
          title: a[e].allocations,
          description: t("USED_IP_ADDRESSES")
        }), /*#__PURE__*/React.createElement(Module791, {
          title: n.manager,
          description: t("MANAGER")
        }));
      })));
    }
  }, {
    key: "workspaces",
    get: function () {
      return this.workspaceStore.list.data.reduce((acc, item) => ({
        ...acc,
        ...module31({}, item.name, item)
      }), {});
    }
  }]);
  return r;
})(_module43.Component), module49(u.prototype, "workspaces", [module14.computed], Object.getOwnPropertyDescriptor(u.prototype, "workspaces"), u.prototype), l = u)) || l) || l;
var _default = exports["default"] = k;

/***/ },

/***/ "./src/unpacked/module-5261.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5261.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "_3dJkLFAtplwKpCPxVWTIiy",
  item: "aImuQ90XIYrRVok6o9SZ",
  empty: "_3vgRGEWvfPJkuYyY0_KvLd"
};

/***/ },

/***/ "./src/unpacked/module-5262.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5262.js ***!
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
__webpack_require__(/*! unpacked/module-84.js */ "./node_modules/core-js3/modules/es.array.includes.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-85.js */ "./node_modules/core-js3/modules/es.string.includes.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-191.js */ "./node_modules/core-js3/modules/es.date.to-json.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-160.js */ "./node_modules/core-js3/modules/es.json.stringify.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/List */ "./src/components/Base/List.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-74.js */ "./src/unpacked/module-74.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1024.js */ "./src/unpacked/module-1024.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1030.js */ "./src/unpacked/module-1030.js"));
var _module42 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module43 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5263.js */ "./src/unpacked/module-5263.js"));
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _action = __webpack_require__(/*! utils/action */ "./src/utils/action.js");
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5264.js */ "./src/unpacked/module-5264.js"));
var _Module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5266.js */ "./src/unpacked/module-5266.js"));
var _module13 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5268.js */ "./src/unpacked/module-5268.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module41 = (0, _recoverInterop.__recoverInterop)(_module);
const module44 = (0, _recoverInterop.__recoverInterop)(_module2);
const module36 = (0, _recoverInterop.__recoverInterop)(_module3);
const module37 = (0, _recoverInterop.__recoverInterop)(_module4);
const module55 = (0, _recoverInterop.__recoverInterop)(_module5);
const module56 = (0, _recoverInterop.__recoverInterop)(_module6);
const module51 = (0, _recoverInterop.__recoverInterop)(_module7);
const Module814 = (0, _recoverInterop.__recoverInterop)(_Module);
const module26 = (0, _recoverInterop.__recoverInterop)(_module8);
const module74 = (0, _recoverInterop.__recoverInterop)(_module9);
const module1024 = (0, _recoverInterop.__recoverInterop)(_module0);
const module1030 = (0, _recoverInterop.__recoverInterop)(_module1);
const module5263 = (0, _recoverInterop.__recoverInterop)(_module10);
const module14 = (0, _recoverInterop.__recoverInterop)(_module11);
const module186 = (0, _recoverInterop.__recoverInterop)(_module12);
const Module5264 = (0, _recoverInterop.__recoverInterop)(_Module2);
const Module5266 = (0, _recoverInterop.__recoverInterop)(_Module3);
const module5268 = (0, _recoverInterop.__recoverInterop)(_module13);
let d;
function N(e) {
  const t = module14.toJS(module26(e, "annotations"));
  const a = module26(t, '["cni.projectcalico.org/ipv4pools"]', "[]");
  return JSON.parse(a);
}
function T(e, t) {
  const a = module26(module14.toJS(e), "_originData", {});
  module74(a, 'metadata.annotations["cni.projectcalico.org/ipv4pools"]', JSON.stringify(t));
  return a;
}
const R = (0, _module42.inject)("detailStore", "rootStore")(d = (0, _module42.observer)(d = (0, _action.trigger)(d = (Component_1 => {
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
    n.fetchNamespacesList = function () {
      const n_name = n.name;
      n.store.fetchList({
        limit: -1,
        labelSelector: `ippool.network.kubesphere.io/${n_name}`
      });
    };
    n.handleShowForm = function () {
      n.setState({
        showForm: true
      });
    };
    n.handleCancel = function () {
      n.setState({
        showForm: false
      });
    };
    n.handleAdd = (() => {
      const e = module44(module41.mark(function e(t) {
        let a;
        let r;
        let u;
        return module41.wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                a = N(t);
                r = n.name;
                if (a.includes(r)) {
                  e.next = 7;
                  break;
                }
                a.push(r);
                u = T(t, a);
                e.next = 7;
                return n.store.patchNamespace({
                  namespace: t.name
                }, u);
              case 7:
                n.handleCancel();
                n.fetchNamespacesList();
              case 9:
              case "end":
                return e.stop();
            }
          }
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    })();
    n.handleDelete = function (e) {
      const {
        workspace,
        name
      } = e;
      const data = T(e, module1030(N(e), function (e) {
        return e !== n.name;
      }));
      n.trigger("network.ipool.removeNamespace", {
        namespace: name,
        workspace,
        data,
        title: t("DROP"),
        desc: t("REMOVEALL_IPPOOLL_NAMESPACE_PROJECT_DESC"),
        store: n.store,
        success: function () {
          n.fetchNamespacesList();
        }
      });
    };
    n.removeAll = function () {
      const list = n.store.list;
      const name = n.detailStore.detail.name;
      const namespaceList = list.data.filter(e => N(e).includes(name));
      n.trigger("network.ipool.removeNamespaceAll", {
        title: t("REMOVEALL_IPPOOLL_NAMESPACE_PROJECT"),
        desc: t("REMOVEALL_IPPOOLL_NAMESPACE_PROJECT_DESC"),
        store: n.store,
        namespaceList,
        getData: function (e) {
          return T(e, module1030(N(e), function (e) {
            return e !== n.name;
          }));
        },
        success: function () {
          n.fetchNamespacesList();
        }
      });
    };
    n.renderTitle = function () {
      return /*#__PURE__*/React.createElement("div", {
        className: module5268.titleWrapper
      }, /*#__PURE__*/React.createElement("div", {
        className: module5268.title
      }, t("NAMESPACE_PL")), /*#__PURE__*/React.createElement(module186.Button, {
        icon: "trash",
        type: "float",
        disabled: !module1024(n.store.list.data),
        onClick: n.removeAll
      }, t("REMOVEALL_IPPOOLL_NAMESPACE")));
    };
    n.detailStore = e.detailStore;
    n.store = new module5263();
    n.state = {
      showForm: false
    };
    return n;
  }
  module37(r, [{
    key: "componentDidMount",
    value: function () {
      this.fetchNamespacesList();
    }
  }, {
    key: "render",
    value: function () {
      const _this = this;
      const showForm = this.state.showForm;
      return /*#__PURE__*/React.createElement("div", null, this.renderTitle(), /*#__PURE__*/React.createElement("div", {
        className: module5268.panel
      }, /*#__PURE__*/React.createElement(Module814, null, /*#__PURE__*/React.createElement(Module5264, {
        icon: "add",
        title: t("ADD_IPPOOLL_NAMESPACE"),
        description: t("ADD_IPPOOLL_NAMESPACE_DESC"),
        onClick: this.handleShowForm
      }), showForm && /*#__PURE__*/React.createElement(Module5266, {
        onOk: this.handleAdd,
        onCancel: this.handleCancel,
        cluster: this.props.match.params.cluster
      }), this.list.map(a => /*#__PURE__*/React.createElement(Module814.Item, {
        key: a.name,
        icon: "project",
        title: a.name,
        description: t("PROJECT"),
        onDelete: function () {
          return _this.handleDelete(a);
        },
        details: [{
          title: module26(_this.namespaceState, a.name, 0),
          description: t("USED_IP_ADDRESSES")
        }, {
          title: a.creator || "-",
          description: t("ADMINISTRATOR")
        }]
      })))));
    }
  }, {
    key: "namespaceState",
    get: function () {
      const e = module14.toJS(this.detailStore.detail);
      return module26(e, "status.namespaces", {});
    }
  }, {
    key: "list",
    get: function () {
      const data = module14.toJS(this.store.list).data;
      if (data === undefined) {
        return [];
      }
      return data;
    }
  }, {
    key: "name",
    get: function () {
      const detail = this.detailStore.detail;
      return module26(detail, "name", "");
    }
  }]);
  return r;
})(_module43.Component)) || d) || d) || d;
var _default = exports["default"] = R;

/***/ },

/***/ "./src/unpacked/module-5263.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5263.js ***!
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
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _defaultExport = _interopRequireWildcard(__webpack_require__(/*! stores/base */ "./src/stores/base.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const defaultExport = (0, _recoverInterop.__recoverInterop)(_defaultExport);
const f = (defaultExport_1 => {
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
  function r(...n) {
    let e;
    module36(this, r);
    e = a.call(this, ...n);
    e.module = "namespaces";
    e.getBindUrl = function ({
      namespace
    }) {
      return `api/v1/namespaces/${namespace}`;
    };
    return e;
  }
  module37(r, [{
    key: "patchNamespace",
    value: async function (t, a) {
      return request.put(this.getBindUrl(t), a);
    }
  }, {
    key: "apiVersion",
    get: function () {
      return "kapis/resources.kubesphere.io/v1alpha3";
    }
  }]);
  return r;
})(defaultExport);
var _default = exports["default"] = f;

/***/ },

/***/ "./src/unpacked/module-5264.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5264.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
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
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5265.js */ "./src/unpacked/module-5265.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module31 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module3 = (0, _recoverInterop.__recoverInterop)(_module7);
const module186 = (0, _recoverInterop.__recoverInterop)(_module8);
const module5265 = (0, _recoverInterop.__recoverInterop)(_module9);
const m = (Component_1 => {
  module55(a, Component_1);
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
  function a() {
    module36(this, a);
    return t.apply(this, arguments);
  }
  module37(a, [{
    key: "render",
    value: function () {
      const props = this.props;
      const {
        icon,
        image,
        title,
        description,
        onClick,
        type
      } = props;
      return /*#__PURE__*/React.createElement("div", {
        className: module3(module5265.add, module31({}, module5265.withIcon, icon || image), module5265[type]),
        onClick: onClick
      }, /*#__PURE__*/React.createElement("div", {
        className: module5265.icon
      }, icon && /*#__PURE__*/React.createElement(module186.Icon, {
        name: icon,
        size: 40
      })), /*#__PURE__*/React.createElement("div", {
        className: module5265.text
      }, /*#__PURE__*/React.createElement("div", {
        className: module5265.title
      }, title), /*#__PURE__*/React.createElement("div", {
        className: module5265.description
      }, description)));
    }
  }]);
  return a;
})(_module22.Component);
var _default = exports["default"] = m;

/***/ },

/***/ "./src/unpacked/module-5265.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5265.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  add: "_2fRjxPmEECm6slNANxuPVW",
  withIcon: "_1iWqJ12ZoCjP9SM2L5eEwq"
};

/***/ },

/***/ "./src/unpacked/module-5266.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5266.js ***!
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
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-860.js */ "./src/unpacked/module-860.js");
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
var _module34 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! stores/project */ "./src/stores/project.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _module38 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5267.js */ "./src/unpacked/module-5267.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module3 = (0, _recoverInterop.__recoverInterop)(_module6);
const module186 = (0, _recoverInterop.__recoverInterop)(_module7);
const module439 = (0, _recoverInterop.__recoverInterop)(_module8);
const module1 = (0, _recoverInterop.__recoverInterop)(_module9);
const module5267 = (0, _recoverInterop.__recoverInterop)(_module0);
let l;
let u;
let o;
const C = (0, _module38.observer)((o = u = (Component_1 => {
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
    let e;
    module36(this, r);
    e = a.call(this);
    e.handleChange = function (namespace) {
      e.setState({
        namespace
      });
    };
    e.fetchProjects = function (t = {}) {
      const cluster = e.props.cluster;
      if (t.name) {
        t.nameAndAlias = t.name;
        delete t.name;
      }
      return e.projectStore.fetchList({
        cluster,
        ...t,
        limit: -1
      });
    };
    e.handleOk = function () {
      const onOk = e.props.onOk;
      const namespace = e.state.namespace;
      const r = e.projectStore.list.data.find(e => e.name === namespace);
      if (onOk) {
        if (onOk != null) {
          onOk(r);
        }
      }
    };
    e.projectStore = new module439();
    e.state = {
      namespace: ""
    };
    return e;
  }
  module37(r, [{
    key: "componentDidMount",
    value: function () {
      this.fetchProjects();
    }
  }, {
    key: "getProjects",
    value: function () {
      const defaultValue = this.props.defaultValue;
      const data = this.projectStore.list.data;
      const a = data.filter(e => e.status !== "Terminating").map(e => ({
        label: (0, _index.showNameAndAlias)(e),
        value: e.name,
        disabled: e.isFedManaged,
        isFedManaged: e.isFedManaged
      }));
      if (defaultValue && !data.find(t => t.name === defaultValue)) {
        a.unshift({
          label: defaultValue,
          value: defaultValue
        });
      }
      return a;
    }
  }, {
    key: "render",
    value: function () {
      const onCancel = this.props.onCancel;
      const namespace = this.state.namespace;
      return /*#__PURE__*/React.createElement("div", {
        className: module3(module5267.item)
      }, /*#__PURE__*/React.createElement(module186.Select, {
        options: this.getProjects(),
        isLoading: this.projectStore.list.isLoading,
        onChange: this.handleChange,
        defaultValue: namespace
      }), /*#__PURE__*/React.createElement("div", {
        className: module5267.operate
      }, /*#__PURE__*/React.createElement(module186.Button, {
        type: "control",
        onClick: this.handleOk
      }, t("OK")), /*#__PURE__*/React.createElement(module186.Button, {
        onClick: onCancel
      }, t("CANCEL"))));
    }
  }]);
  return r;
})(_module34.Component), u.propTypes = {
  onOk: module1.func,
  onCancel: module1.func
}, l = o)) || l;
var _default = exports["default"] = C;

/***/ },

/***/ "./src/unpacked/module-5267.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5267.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  item: "_2VZojJMCcr5LCPjcy6xuXj",
  operate: "_2BjQJV11IdoAn6d-n9zWbC"
};

/***/ },

/***/ "./src/unpacked/module-5268.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5268.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  panel: "myyMir8aQeW7zvNdoD_ye",
  titleWrapper: "_12YJqhh4laJo2pSemgH7Bo",
  title: "_1LHpDb3CKBk2875n2BK-NW"
};

/***/ },

/***/ "./src/unpacked/module-5269.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5269.js ***!
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
var _module18 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module19 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _Module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-851.js */ "./src/unpacked/module-851.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const Module851 = (0, _recoverInterop.__recoverInterop)(_Module);
let n;
const p = (0, _module19.inject)("detailStore")(n = (0, _module19.observer)(n = (Component_1 => {
  module55(a, Component_1);
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
    e.store = e.props.detailStore;
    return e;
  }
  module37(a, [{
    key: "render",
    value: function () {
      const cluster = this.props.match.params.cluster;
      return /*#__PURE__*/React.createElement(Module851, {
        detail: this.store.detail,
        limit: 6,
        prefix: `/clusters/${cluster}`
      });
    }
  }]);
  return a;
})(_module18.Component)) || n) || n;
var _default = exports["default"] = p;

/***/ },

/***/ "./src/unpacked/module-5272.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5272.js ***!
  \*************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  upload: "_1gyHcQHLAAAmHyWn3YtlRP"
};

/***/ }

}]);