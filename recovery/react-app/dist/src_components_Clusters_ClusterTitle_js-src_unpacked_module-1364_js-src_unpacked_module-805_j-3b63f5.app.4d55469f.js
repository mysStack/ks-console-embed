"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_components_Clusters_ClusterTitle_js-src_unpacked_module-1364_js-src_unpacked_module-805_j-3b63f5"],{

/***/ "./src/chunks/common/module-1296.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-1296.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _defaultExport = _interopRequireWildcard(__webpack_require__(/*! stores/container */ "./src/stores/container.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module55 = (0, _recoverInterop.__recoverInterop)(_module2);
const module56 = (0, _recoverInterop.__recoverInterop)(_module3);
const module51 = (0, _recoverInterop.__recoverInterop)(_module4);
const defaultExport = (0, _recoverInterop.__recoverInterop)(_defaultExport);
const i = (defaultExport_1 => {
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
  function a() {
    module36(this, a);
    return t.apply(this, arguments);
  }
  return a;
})(defaultExport);
var _default = exports["default"] = i;

/***/ },

/***/ "./src/chunks/common/module-1364.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-1364.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-62.js */ "./src/unpacked/module-62.js");
__webpack_require__(/*! unpacked/module-64.js */ "./node_modules/core-js3/modules/es.string.replace.js");
__webpack_require__(/*! unpacked/module-137.js */ "./node_modules/core-js3/modules/es.string.split.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module46 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module48 = __webpack_require__(/*! unpacked/module-239.js */ "./src/shims/mobx-react.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-910.js */ "./src/shims/file-saver.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1123.js */ "./src/shims/ansi_up.js"));
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module12 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-240.js */ "./src/unpacked/module-240.js"));
var _Module = _interopRequireWildcard(__webpack_require__(/*! components/Base/Card */ "./src/components/Base/Card.js"));
var _Module2 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Empty */ "./src/components/Base/Empty.js"));
var _module13 = _interopRequireWildcard(__webpack_require__(/*! stores/container */ "./src/stores/container.js"));
var _module14 = _interopRequireWildcard(__webpack_require__(/*! stores/pod */ "./src/stores/pod.js"));
var _module15 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1365.js */ "./src/unpacked/module-1365.js"));
var _module16 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1296.js */ "./src/unpacked/module-1296.js"));
var _module17 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3031.js */ "./src/unpacked/module-3031.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module41 = (0, _recoverInterop.__recoverInterop)(_module);
const module44 = (0, _recoverInterop.__recoverInterop)(_module2);
const module36 = (0, _recoverInterop.__recoverInterop)(_module3);
const module37 = (0, _recoverInterop.__recoverInterop)(_module4);
const module55 = (0, _recoverInterop.__recoverInterop)(_module5);
const module56 = (0, _recoverInterop.__recoverInterop)(_module6);
const module51 = (0, _recoverInterop.__recoverInterop)(_module7);
const module3 = (0, _recoverInterop.__recoverInterop)(_module8);
const module910 = (0, _recoverInterop.__recoverInterop)(_module9);
const module26 = (0, _recoverInterop.__recoverInterop)(_module0);
const module63 = (0, _recoverInterop.__recoverInterop)(_module1);
const module1123 = (0, _recoverInterop.__recoverInterop)(_module10);
const module186 = (0, _recoverInterop.__recoverInterop)(_module11);
const module240 = (0, _recoverInterop.__recoverInterop)(_module12);
const Module802 = (0, _recoverInterop.__recoverInterop)(_Module);
const Module848 = (0, _recoverInterop.__recoverInterop)(_Module2);
const module1040 = (0, _recoverInterop.__recoverInterop)(_module13);
const module452 = (0, _recoverInterop.__recoverInterop)(_module14);
const module1365 = (0, _recoverInterop.__recoverInterop)(_module15);
const module1296 = (0, _recoverInterop.__recoverInterop)(_module16);
const module3031 = (0, _recoverInterop.__recoverInterop)(_module17);
let o;
const P = new module1123();
const A = (0, _module48.observer)(o = (Component_1 => {
  module55(n, Component_1);
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
  })(n);
  function n(e) {
    let a;
    module36(this, n);
    a = r.call(this, e);
    a.scrollToBottom = function () {
      const current = a.ref.current;
      if (current) {
        current.scrollTop = current.scrollHeight;
      }
      a.setState({
        loadingNext: false
      });
    };
    a.scrollToCurrent = function () {
      const current = a.ref.current;
      if (current) {
        current.scrollTop = current.scrollHeight - a.currentHeight;
      }
      a.setState({
        loadingPrev: false
      });
    };
    a.handleNext = function () {
      a.tailLines = 1000;
      a.setState({
        loadingNext: true
      });
      a.getData({
        silent: true
      }, a.scrollToBottom);
    };
    a.handlePrev = function () {
      a.tailLines += 1000;
      a.setState({
        loadingPrev: true
      });
      a.currentHeight = module26(a.ref, "current.scrollHeight", 0);
      a.getData({
        silent: true
      }, a.scrollToCurrent);
    };
    a.handleRealtime = function () {
      a.setState(function (e) {
        return {
          isRealtime: !e.isRealtime
        };
      }, function () {
        return a.getData({
          silent: true
        }, a.scrollToBottom);
      });
    };
    a.handleDownload = module44(module41.mark(function e() {
      let r;
      let n;
      let l;
      let podName;
      let i;
      let c;
      let s;
      return module41.wrap(function (e) {
        while (true) {
          switch (e.prev = e.next) {
            case 0:
              r = a.props;
              n = r.cluster;
              l = r.namespace;
              podName = r.podName;
              i = r.containerName;
              a.setState({
                isDownloading: true
              });
              e.next = 4;
              return a.store.fetchAllLogs({
                cluster: n,
                namespace: l,
                podName,
                container: i
              });
            case 4:
              c = e.sent;
              a.setState({
                isDownloading: false
              });
              if (c) {
                e.next = 9;
                break;
              }
              module240.info({
                content: t("NO_LOG_DATA_FOUND_TIP")
              });
              return e.abrupt("return");
            case 9:
              s = new Blob([c], {
                type: "text/plain;charset=utf-8"
              });
              module910.saveAs(s, `${i}.log`);
            case 11:
            case "end":
              return e.stop();
          }
        }
      }, e);
    }));
    a.state = {
      loadingPrev: false,
      loadingNext: false,
      isDownloading: false,
      isRealtime: !!e.isRealtime
    };
    a.tailLines = 1000;
    a.store = e.isEdgeWize ? new module1296() : new module1040();
    a.podStore = e.isEdgeWize ? new module1365() : new module452();
    a.ref = (0, _module46.createRef)();
    return a;
  }
  module37(n, [{
    key: "componentDidMount",
    value: function () {
      this.getData({}, this.scrollToBottom);
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      if (this.props.podName && this.props.podName !== e.podName) {
        this.getData({}, this.scrollToBottom);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.store.stopWatchLogs();
    }
  }, {
    key: "getData",
    value: async function (t, a) {
      let r;
      let n;
      let l;
      let o;
      let i;
      let gateways;
      let s;
      let f;
      r = this.props;
      n = r.cluster;
      l = r.namespace;
      o = r.podName;
      i = r.containerName;
      gateways = r.gatewayName;
      s = r.gatewayNamespace;
      f = r.isEdgeWize;
      this.store.stopWatchLogs();
      if ((await this.podStore.checkName({
        cluster: n,
        namespace: l,
        name: o
      })).exist) {
        this.store.watchLogs({
          cluster: n,
          namespace: gateways ? s : l,
          podName: o,
          container: i,
          tailLines: this.tailLines,
          insecureSkipTLSVerifyBackend: !!f || undefined,
          timestamps: true,
          follow: this.state.isRealtime,
          gateways,
          ...t
        }, a);
      }
    }
  }, {
    key: "renderOperations",
    value: function () {
      const state = this.state;
      const {
        isRealtime,
        isDownloading
      } = state;
      return /*#__PURE__*/React.createElement("div", {
        className: module3031.operations
      }, /*#__PURE__*/React.createElement(module186.Tooltip, {
        content: t(isRealtime ? "STOP_REAL_TIME_CONTAINER_LOG" : "START_REAL_TIME_CONTAINER_LOG")
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: isRealtime ? "stop" : "start",
        color: {
          primary: "#fff",
          secondary: "#fff"
        },
        size: 20,
        onClick: this.handleRealtime,
        clickable: true,
        changeable: true
      })), /*#__PURE__*/React.createElement("span", {
        className: module3031.split
      }, "|"), /*#__PURE__*/React.createElement(module186.Tooltip, {
        content: t("REFRESH")
      }, /*#__PURE__*/React.createElement(module186.Icon, {
        name: "refresh",
        color: {
          primary: "#fff",
          secondary: "#fff"
        },
        size: 20,
        onClick: this.handleNext,
        clickable: true,
        changeable: true,
        disabled: isRealtime
      })), /*#__PURE__*/React.createElement("span", {
        className: module3031.split
      }, "|"), /*#__PURE__*/React.createElement(module186.Tooltip, {
        content: t("DOWNLOAD")
      }, isDownloading ? /*#__PURE__*/React.createElement(module186.Loading, {
        size: 16
      }) : /*#__PURE__*/React.createElement(module186.Icon, {
        name: "download",
        color: {
          primary: "#fff",
          secondary: "#fff"
        },
        size: 20,
        onClick: this.handleDownload,
        clickable: true,
        changeable: true
      })));
    }
  }, {
    key: "renderContent",
    value: function () {
      const contentClassName = this.props.contentClassName;
      const data = this.store.logs.data;
      const state = this.state;
      const {
        loadingPrev,
        loadingNext
      } = state;
      if (module63(data)) {
        return /*#__PURE__*/React.createElement(Module848, {
          desc: "NO_DATA"
        });
      }
      const u = String(data).replace(/\\r\\n/g, "\n").split("\n");
      return /*#__PURE__*/React.createElement("div", {
        className: module3(module3031.content, contentClassName),
        ref: this.ref
      }, this.tailLines <= u.length && /*#__PURE__*/React.createElement("div", {
        className: module3031.loading
      }, loadingPrev ? /*#__PURE__*/React.createElement(module186.Loading, {
        spinning: loadingPrev,
        size: "small"
      }) : /*#__PURE__*/React.createElement("div", {
        className: module3031.more,
        onClick: this.handlePrev
      }, t("VIEW_MORE"))), u.map((e, t) => {
        const a = e.match(_constants.PATTERN_UTC_TIME);
        const key = a ? a[0] : t;
        const n = a ? e.replace(a[0], "") : e;
        return /*#__PURE__*/React.createElement("p", {
          key: key,
          dangerouslySetInnerHTML: {
            __html: P.ansi_to_html(n)
          }
        });
      }), /*#__PURE__*/React.createElement("div", {
        className: module3031.loading
      }, /*#__PURE__*/React.createElement(module186.Loading, {
        spinning: loadingNext,
        size: "small"
      })), this.renderOperations());
    }
  }, {
    key: "render",
    value: function () {
      const className = this.props.className;
      const isLoading = this.store.logs.isLoading;
      return /*#__PURE__*/React.createElement(Module802, {
        className: className,
        empty: t("NO_LOG_DATA_FOUND"),
        loading: isLoading
      }, this.renderContent());
    }
  }]);
  return n;
})(_module46.Component)) || o;
var _default = exports["default"] = A;

/***/ },

/***/ "./src/chunks/common/module-1365.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-1365.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _defaultExport = _interopRequireWildcard(__webpack_require__(/*! stores/pod */ "./src/stores/pod.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module55 = (0, _recoverInterop.__recoverInterop)(_module2);
const module56 = (0, _recoverInterop.__recoverInterop)(_module3);
const module51 = (0, _recoverInterop.__recoverInterop)(_module4);
const defaultExport = (0, _recoverInterop.__recoverInterop)(_defaultExport);
const i = (defaultExport_1 => {
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
  function a() {
    module36(this, a);
    return t.apply(this, arguments);
  }
  return a;
})(defaultExport);
var _default = exports["default"] = i;

/***/ },

/***/ "./src/chunks/common/module-2112.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2112.js ***!
  \******************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  reason: "_3JDYKrJKhc0_3ccKRTWjbm",
  condition: "_3QACUKLP4siIkBKdrDW-kH",
  title: "mzPe8sBOFqw47SGIKPrZW",
  warning: "ZLc6bv2hKoXfyrevZ2_Ny",
  error: "HaXzDca7Adqyw5TSX98wt"
};

/***/ },

/***/ "./src/chunks/common/module-2114.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2114.js ***!
  \******************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  wrapper: "_1zRhmhoqa7hKxIDHXtcQBl",
  icon: "_3zzcn1sJsd8OE2-UlVh5Dt",
  indicator: "_3_FKNd25UQ1SrtjwfzQsQa",
  title: "_2EJdDmBbkeOhXJGYqE2ODn",
  name: "iC7sVV_ohn78d_o-bnIsG",
  description: "_121vxZTmC4ekgLxeINz_qj",
  ellipsis: "_2D4Gh4G0EV2qp97eGpO8pA",
  isExpired: "cAV_fM4HAoL_7N476HQ-8",
  light: "aSm0o7OnDBr1lwEbEO6Qv",
  large: "_2oqSS3OkMT7aMTmyO3QDYQ",
  small: "ThqV9yofYHAOd-P_wF-3F"
};

/***/ },

/***/ "./src/chunks/common/module-2701.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2701.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module_ = _interopRequireWildcard(__webpack_require__(/*! stores/base.list */ "./src/stores/base.list.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module36 = (0, _recoverInterop.__recoverInterop)(_module2);
const module37 = (0, _recoverInterop.__recoverInterop)(_module3);
const module55 = (0, _recoverInterop.__recoverInterop)(_module4);
const module56 = (0, _recoverInterop.__recoverInterop)(_module5);
const module51 = (0, _recoverInterop.__recoverInterop)(_module6);
const module49 = (0, _recoverInterop.__recoverInterop)(_module7);
const module14 = (0, _recoverInterop.__recoverInterop)(_module8);
const module_120 = (0, _recoverInterop.__recoverInterop)(_module_);
let n;
n = (module_120_1 => {
  module55(a, module_120_1);
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
    key: "addItem",
    value: function (e) {
      this.data = [].concat(module61(this.data), [e]);
    }
  }, {
    key: "deleteItem",
    value: function (e) {
      this.data = this.data.filter(t => t.name !== e.name);
    }
  }]);
  return a;
})(module_120);
module49(n.prototype, "addItem", [module14.action], Object.getOwnPropertyDescriptor(n.prototype, "addItem"), n.prototype);
module49(n.prototype, "deleteItem", [module14.action], Object.getOwnPropertyDescriptor(n.prototype, "deleteItem"), n.prototype);
var _default = exports["default"] = n;

/***/ },

/***/ "./src/chunks/common/module-2906.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2906.js ***!
  \******************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  reason: "_2dAqW00YgMOSGORjuFVBGs",
  condition: "_3AeobLZKN_rHf4jlnsiMQk",
  title: "_3TkAdRLw937iktrSAezDu7",
  warning: "ALCcOSqNlYNtz2BKsiq8d",
  error: "_28enlxYAYUjvqkyLqd5qPC",
  reasonDesc: "dlkjsSoal876oQiTVfCr7"
};

/***/ },

/***/ "./src/chunks/common/module-3031.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-3031.js ***!
  \******************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  title: "_27MAX13PiUAzOsXD-R9gw2",
  operations: "_24RyEmdRdSORfES3B37-Ig",
  split: "_3UTVVRpfTorBqaIOAvmHf",
  content: "_4NEZZqVQd_YQAxdWy1PTV",
  loading: "_39m20vEem86oLHu-jSp0RG",
  more: "_2sr0xxYkh1IdZYY34aaZjJ"
};

/***/ },

/***/ "./src/chunks/common/module-805.js"
/*!*****************************************!*\
  !*** ./src/chunks/common/module-805.js ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2906.js */ "./src/unpacked/module-2906.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module186 = (0, _recoverInterop.__recoverInterop)(_module);
const module26 = (0, _recoverInterop.__recoverInterop)(_module2);
const module2906 = (0, _recoverInterop.__recoverInterop)(_module3);
function _default({
  data,
  status,
  reason,
  type: type_1 = "workload",
  onShowEvents
}) {
  const content = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tooltip-title"
  }, t("STATUS_INFORMATION")), /*#__PURE__*/React.createElement("div", null, module26(data, "status.conditions", []).map(e => /*#__PURE__*/React.createElement("div", {
    key: e.type,
    className: module2906.condition
  }, /*#__PURE__*/React.createElement("div", {
    className: module2906.title
  }, ((type_1_1, {
    type,
    status
  }) => {
    if (type_1_1 === "volume") {
      return status === "True";
    }
    if (type === "ReplicaFailure") {
      return status === "False";
    }
    return status === "True";
  })(type_1, e) ? /*#__PURE__*/React.createElement(module186.Icon, {
    name: "success",
    type: "coloured"
  }) : /*#__PURE__*/React.createElement(module186.Icon, {
    name: "error",
    color: {
      primary: "#ffffff",
      secondary: "#ea4641"
    }
  }), /*#__PURE__*/React.createElement("span", null, t(`${type_1.toUpperCase()}_CONDITION_${e.type.toUpperCase()}`, {
    defaultValue: e.type
  }))), e.status && /*#__PURE__*/React.createElement("p", null, t("STATUS_VALUE", {
    value: e.status === "True" ? "True" : "False"
  })), e.reason && /*#__PURE__*/React.createElement("p", null, t("REASON_VALUE", {
    value: t(`${type_1.toUpperCase()}_REASON_${e.reason.toUpperCase()}`, {
      defaultValue: e.reason
    })
  })), e.message && /*#__PURE__*/React.createElement("p", null, t("MESSAGE_VALUE", {
    value: e.message
  }))))), onShowEvents && /*#__PURE__*/React.createElement(module186.Button, {
    type: "primary",
    onClick: onShowEvents,
    className: "margin-t8 width-full"
  }, t("VIEW_EVENTS")));
  return /*#__PURE__*/React.createElement("span", {
    className: module2906.reason
  }, /*#__PURE__*/React.createElement(module186.Tooltip, {
    placement: "right",
    content: content,
    positionFixed: true
  }, /*#__PURE__*/React.createElement("span", {
    className: module2906.reasonDesc
  }, /*#__PURE__*/React.createElement(module186.Icon, {
    name: "information",
    color: {
      primary: "#ffffff",
      secondary: status === "error" ? "#ab2f29" : "#f5a623"
    }
  }), reason && /*#__PURE__*/React.createElement("span", {
    className: status === "error" ? module2906.error : module2906.warning
  }, t(reason)))));
}
;

/***/ },

/***/ "./src/chunks/common/module-955.js"
/*!*****************************************!*\
  !*** ./src/chunks/common/module-955.js ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {



(e => {
  const module20 = (__webpack_require__(/*! utils/babel-helpers/interopRequireDefault */ "./src/utils/babel-helpers/interopRequireDefault.js")["default"]);
  __webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
  __webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
  __webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
  __webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
  __webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
  (__webpack_require__(/*! unpacked/module-30.js */ "./src/shims/corejs-es-array-iterator.js")["default"]);
  __webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
  __webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
  __webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
  __webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
  __webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
  __webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
  __webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
  __webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
  __webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
  __webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
  __webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
  __webpack_require__(/*! unpacked/module-38.js */ "./src/shims/corejs-es-string-iterator.js");
  __webpack_require__(/*! unpacked/module-64.js */ "./node_modules/core-js3/modules/es.string.replace.js");
  __webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
  __webpack_require__(/*! unpacked/module-32.js */ "./src/unpacked/module-32.js");
  Object.defineProperty(exports, "__esModule", ({
    value: true
  }));
  exports["default"] = undefined;
  __webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
  __webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
  __webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
  __webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
  __webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
  __webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
  (__webpack_require__(/*! unpacked/module-30.js */ "./src/shims/corejs-es-array-iterator.js")["default"]);
  __webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
  __webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
  __webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
  __webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
  __webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
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
  __webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
  __webpack_require__(/*! unpacked/module-38.js */ "./src/shims/corejs-es-string-iterator.js");
  __webpack_require__(/*! unpacked/module-64.js */ "./node_modules/core-js3/modules/es.string.replace.js");
  __webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
  __webpack_require__(/*! unpacked/module-32.js */ "./src/unpacked/module-32.js");
  const l = module20(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
  const u = module20((__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js")["default"]));
  const o = module20((__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js")["default"]));
  const i = module20((__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js")["default"]));
  __webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
  let c;
  let s;
  let f;
  let d;
  let p;
  let m;
  let h;
  let v;
  let g;
  let y;
  const E = module20((__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js")["default"]));
  const b = module20((__webpack_require__(/*! unpacked/module-65.js */ "./src/unpacked/module-65.js")["default"]));
  const _ = module20((__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js")["default"]));
  const O = module20((__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js")["default"]));
  const S = module20((__webpack_require__(/*! unpacked/module-88.js */ "./src/unpacked/module-88.js")["default"]));
  const C = module20((__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js")["default"]));
  const D = module20((__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js")["default"]));
  const k = module20(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
  const N = module20((__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js")["default"]));
  module20((__webpack_require__(/*! utils/babel-helpers/initializerWarningHelper */ "./src/utils/babel-helpers/initializerWarningHelper.js")["default"]));
  const T = module20((__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js")["default"]));
  const R = module20((__webpack_require__(/*! unpacked/module-136.js */ "./src/unpacked/module-136.js")["default"]));
  const I = module20((__webpack_require__(/*! unpacked/module-74.js */ "./src/unpacked/module-74.js")["default"]));
  const module14 = __webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js");
  const module72 = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
  const P = module20(__webpack_require__(/*! stores/base */ "./src/stores/base.js"));
  const A = module20(__webpack_require__(/*! stores/base.list */ "./src/stores/base.list.js"));
  const j = module20(__webpack_require__(/*! unpacked/module-2701.js */ "./src/unpacked/module-2701.js"));
  function L(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      let r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(t => Object.getOwnPropertyDescriptor(e, t).enumerable);
      }
      a.push.apply(a, r);
    }
    return a;
  }
  function x(e) {
    for (let t = 1; t < arguments.length; t++) {
      var a = arguments[t] ?? {};
      if (t % 2) {
        L(Object(a), true).forEach(t => {
          o.default(e, t, a[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
      } else {
        L(Object(a)).forEach(t => {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
    }
    return e;
  }
  function U(e) {
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
      const r = k.default(e);
      if (t) {
        const n = k.default(this).constructor;
        a = Reflect.construct(r, arguments, n);
      } else {
        a = r.apply(this, arguments);
      }
      return D.default(this, a);
    };
  }
  c = (a => {
    C.default(P, a);
    let r;
    let n;
    let o;
    let c;
    let D;
    let k;
    let N;
    var w = U(P);
    function P(...a) {
      let e;
      _.default(this, P);
      e = w.call(this, ...a);
      b.default(e, "initializing", s, S.default(e));
      b.default(e, "isAgentLoading", f, S.default(e));
      b.default(e, "agent", d, S.default(e));
      b.default(e, "isValidating", p, S.default(e));
      b.default(e, "isSubmitting", m, S.default(e));
      b.default(e, "version", h, S.default(e));
      e.module = "clusters";
      b.default(e, "project", v, S.default(e));
      e.list = new j.default();
      e.projects = new A.default();
      e.getAgentUrl = function ({
        cluster
      }) {
        return `kapis/cluster.kubesphere.io/v1alpha1/clusters/${cluster}/agent/deployment`;
      };
      e.getTenantUrl = function (t = {}) {
        return `kapis/tenant.kubesphere.io/v1beta1${e.getPath(t)}/${e.module}`;
      };
      e.getResourceUrl = function () {
        return "/kapis/infra.edgewize.io/v1alpha1/edgeclusters";
      };
      e.getListResourceUrl = function () {
        return "/kapis/tenant.kubesphere.io/v1beta1/clusters";
      };
      e.getDetailUrl = function ({
        name
      }) {
        return `/apis/cluster.kubesphere.io/v1alpha1/clusters/${name}`;
      };
      e.getEdgeDetailUrl = function ({
        name
      }) {
        return `/apis/infra.edgewize.io/v1alpha1/clusters/${name}`;
      };
      e.getListUrl = function ({
        name
      }) {
        return `/kapis/infra.edgewize.io/v1alpha1/edgeclusters/${name}`;
      };
      b.default(e, "createWithKubeConfig", g, S.default(e));
      b.default(e, "delete", y, S.default(e));
      return e;
    }
    O.default(P, [{
      key: "setProject",
      value: function (e) {
        this.project = e;
      }
    }, {
      key: "fetchList",
      value: (N = E.default(l.default.mark(function* e() {
        let t;
        let a;
        let r;
        let n;
        let o;
        const c = arguments;
        (t = c.length > 0 && c[0] !== undefined ? c[0] : {}).from;
        a = t.more;
        r = i.default(t, ["from", "more"]);
        this.list.isLoading = true;
        if (!(r.sortBy || r.ascending !== undefined)) {
          r.sortBy = module72.LIST_DEFAULT_ORDER[this.module] || "createTime";
        }
        if (!(r.limit !== Infinity && r.limit !== -1)) {
          r.limit = -1;
          r.page = 1;
        }
        r.limit = r.limit || 10;
        n = yield request.get(this.getListResourceUrl({}), x(x({}, r), {}, {
          labelSelector: "cluster-role.kubesphere.io/edge"
        }));
        o = T.default(n, "items", []).map(this.mapper);
        this.list.update(x(x({
          data: a ? [].concat(u.default(this.list.data), u.default(o)) : o,
          total: n.totalItems || n.total_count || o.length || 0
        }, r), {}, {
          limit: Number(r.limit) || 10,
          page: Number(r.page) || 1,
          isLoading: false
        }, this.list.silent ? {} : {
          selectedRowKeys: []
        }));
        return o;
      })), function () {
        return N.apply(this, arguments);
      })
    }, {
      key: "fetchDetail",
      value: (k = E.default(l.default.mark(function* t(a) {
        let r;
        let n;
        this.isLoading = true;
        if (!globals.app.isMultiCluster) {
          r = this.mapper(R.default(module72.DEFAULT_CLUSTER));
        } else {
          n = yield request.get(this.getDetailUrl(a), null, null, function (t, a) {
            if (a.reason === "Not Found") {
              e.navigateTo("/404");
            }
          });
          r = x(x({}, a), this.mapper(n));
        }
        this.detail = r;
        this.isLoading = false;
        return r;
      })), function (e) {
        return k.apply(this, arguments);
      })
    }, {
      key: "fetchProjects",
      value: (D = E.default(l.default.mark(function* e() {
        let t;
        let cluster;
        let namespace;
        let n;
        let o;
        let c;
        let s;
        const _this = this;
        const d = arguments;
        t = d.length > 0 && d[0] !== undefined ? d[0] : {};
        cluster = t.cluster;
        namespace = t.namespace;
        n = t.more;
        o = i.default(t, ["cluster", "namespace", "more"]);
        this.projects.isLoading = true;
        if (!(o.sortBy || o.ascending !== undefined)) {
          o.sortBy = module72.LIST_DEFAULT_ORDER[this.module] || "createTime";
        }
        if (!(o.limit !== Infinity && o.limit !== -1)) {
          o.limit = -1;
          o.page = 1;
        }
        o.limit = o.limit || 10;
        c = yield request.get(`/kapis/resources.kubesphere.io/v1alpha3${this.getPath({
          cluster,
          namespace
        })}/namespaces`, x({
          labelSelector: "!kubesphere.io/devopsproject"
        }, o));
        s = T.default(c, "items", []).map(e => x({
          cluster
        }, _this.mapper(e)));
        this.projects.update(x(x({
          data: n ? [].concat(u.default(this.projects.data), u.default(s)) : s,
          total: c.totalItems || c.total_count || s.length || 0
        }, o), {}, {
          limit: Number(o.limit) || 10,
          page: Number(o.page) || 1,
          isLoading: false
        }, this.projects.silent ? {} : {
          selectedRowKeys: []
        }));
      })), function () {
        return D.apply(this, arguments);
      })
    }, {
      key: "fetchClusterConfigz",
      value: (c = E.default(l.default.mark(function* e(t) {
        let a;
        a = t.cluster;
        yield this.fetchDetail({
          name: a
        });
        I.default(globals, `edgeClusterConfig.${a}`, this.detail.configz);
        return T.default(this.detail.configz, "ksVersion", "") !== "";
      })), function (e) {
        return c.apply(this, arguments);
      })
    }, {
      key: "fetchKubeEdgeIp",
      value: (o = E.default(l.default.mark(function* e() {
        let t;
        let a;
        t = yield request.get("/kapis/infra.edgewize.io/v1alpha1/config");
        a = T.default(t, "data.advertiseAddress", []);
        return a;
      })), function () {
        return o.apply(this, arguments);
      })
    }, {
      key: "validate",
      value: (n = E.default(l.default.mark(function* e(a) {
        const _this = this;
        this.isValidating = true;
        yield request.post(`${this.getResourceUrl()}/validation`, a, {}, function (e, a) {
          if (e.status !== 430) {
            _this.isValidating = false;
            window.onunhandledrejection({
              status: 400,
              reason: t("VALIDATION_FAILED"),
              message: a.message
            });
            return Promise.reject();
          }
        });
        this.isValidating = false;
      })), function (e) {
        return n.apply(this, arguments);
      })
    }, {
      key: "batchDelete",
      value: function (e) {
        const _this = this;
        return this.submitting(Promise.all(e.map(e => {
          const a = _this.list.data.find(t => t.name === e);
          return request.delete(_this.getListUrl(a));
        })));
      }
    }, {
      key: "checkName",
      value: function (e, t) {
        const a = this.getDetailUrl(e);
        return request.get(a, x({}, t), {
          headers: {
            "x-check-exist": true
          }
        });
      }
    }, {
      key: "fetchVersion",
      value: (r = E.default(l.default.mark(function* e(t) {
        let a;
        let r;
        a = t.cluster;
        r = yield request.get(`kapis/clusters/${a}/version`.replace("/clusters/default", ""));
        this.version = T.default(r, "kubernetes.gitVersion");
      })), function (e) {
        return r.apply(this, arguments);
      })
    }]);
    return P;
  })(P.default);
  s = N.default(c.prototype, "initializing", [module14.observable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  });
  f = N.default(c.prototype, "isAgentLoading", [module14.observable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  });
  d = N.default(c.prototype, "agent", [module14.observable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "";
    }
  });
  p = N.default(c.prototype, "isValidating", [module14.observable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  });
  m = N.default(c.prototype, "isSubmitting", [module14.observable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  });
  h = N.default(c.prototype, "version", [module14.observable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "";
    }
  });
  v = N.default(c.prototype, "project", [module14.observable], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {}
  });
  N.default(c.prototype, "setProject", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "setProject"), c.prototype);
  N.default(c.prototype, "fetchList", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "fetchList"), c.prototype);
  N.default(c.prototype, "fetchDetail", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "fetchDetail"), c.prototype);
  N.default(c.prototype, "fetchProjects", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "fetchProjects"), c.prototype);
  N.default(c.prototype, "fetchClusterConfigz", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "fetchClusterConfigz"), c.prototype);
  N.default(c.prototype, "fetchKubeEdgeIp", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "fetchKubeEdgeIp"), c.prototype);
  N.default(c.prototype, "validate", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "validate"), c.prototype);
  g = N.default(c.prototype, "createWithKubeConfig", [module14.action], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      const _this = this;
      return function (t, {
        name
      }) {
        return request.post(`${_this.getResourceUrl()}/${name}`, t);
      };
    }
  });
  y = N.default(c.prototype, "delete", [module14.action], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      const _this = this;
      return function (t) {
        return _this.submitting(request.delete(`${_this.getResourceUrl()}/${t.name}`));
      };
    }
  });
  N.default(c.prototype, "batchDelete", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "batchDelete"), c.prototype);
  N.default(c.prototype, "checkName", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "checkName"), c.prototype);
  N.default(c.prototype, "fetchVersion", [module14.action], Object.getOwnPropertyDescriptor(c.prototype, "fetchVersion"), c.prototype);
  exports["default"] = c;
})((__webpack_require__(/*! unpacked/module-69.js */ "./src/unpacked/module-69.js")["default"]));

/***/ },

/***/ "./src/chunks/common/module-959.js"
/*!*****************************************!*\
  !*** ./src/chunks/common/module-959.js ***!
  \*****************************************/
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
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js");
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
var _monitoring = __webpack_require__(/*! utils/monitoring */ "./src/utils/monitoring.js");
var _module0 = _interopRequireWildcard(__webpack_require__(/*! stores/monitoring/base */ "./src/stores/monitoring/base.js"));
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
const module847 = (0, _recoverInterop.__recoverInterop)(_module0);
let u;
let o;
let i;
const metrics = ["namespace_alerts_critical_total", "namespace_alerts_warning_total", "namespace_alerts_error_total", "namespace_alerts_total", "namespace_alerts_firing_total", "namespace_alerts_pending_total"];
u = (e => {
  module55(n, e);
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
  })(n);
  function n(...a) {
    let e;
    module36(this, n);
    e = r.call(this, ...a);
    module65(e, "baseResourcesSummary", o, module88(e));
    module65(e, "alertData", i, module88(e));
    e.getApi = function () {
      return `${e.apiVersion}/namespace_metrics`;
    };
    return e;
  }
  module37(n, [{
    key: "getBaseResourcesSummary",
    value: async function (t) {
      let a;
      let r;
      let n;
      let u;
      let o;
      let i;
      a = t.cluster;
      r = t.namespace;
      this.baseResourcesSummary.isLoading = true;
      n = `/kapis/resources.kubesphere.io/v1alpha3/klusters/${a}/namespaces/${r}/metrics`;
      u = await (0, _index.to)(request.get(n));
      o = this.getResult(u);
      i = (0, _monitoring.getLastMonitoringData)(o);
      this.baseResourcesSummary.isLoading = false;
      this.baseResourcesSummary.data = i;
      return i;
    }
  }, {
    key: "fetchAlertData",
    value: async function () {
      let t;
      const a = arguments;
      t = a.length > 0 && a[0] !== undefined ? a[0] : {};
      this.alertData.isLoading = true;
      await this.fetchMetrics({
        metrics,
        ...t
      });
      this.alertData = {
        isLoading: false,
        data: this.data
      };
    }
  }]);
  return n;
})(module847);
o = module49(u.prototype, "baseResourcesSummary", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {
      isLoading: true,
      data: {}
    };
  }
});
i = module49(u.prototype, "alertData", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {
      isLoading: false,
      data: {}
    };
  }
});
module49(u.prototype, "getBaseResourcesSummary", [module14.action], Object.getOwnPropertyDescriptor(u.prototype, "getBaseResourcesSummary"), u.prototype);
module49(u.prototype, "fetchAlertData", [module14.action], Object.getOwnPropertyDescriptor(u.prototype, "fetchAlertData"), u.prototype);
var _default = exports["default"] = u;

/***/ },

/***/ "./src/chunks/common/module-997.js"
/*!*****************************************!*\
  !*** ./src/chunks/common/module-997.js ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-316.js */ "./node_modules/core-js3/modules/es.object.values.js");
__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2112.js */ "./src/unpacked/module-2112.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module26 = (0, _recoverInterop.__recoverInterop)(_module);
const module3 = (0, _recoverInterop.__recoverInterop)(_module2);
const module186 = (0, _recoverInterop.__recoverInterop)(_module3);
const module2112 = (0, _recoverInterop.__recoverInterop)(_module4);
function _default({
  data,
  noTip,
  placement = "right",
  tooltipModifiers
}) {
  const content = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tooltip-title"
  }, t("CLUSTER_STATUS")), /*#__PURE__*/React.createElement("div", null, Object.values(module26(data, "conditions", {})).map(e => /*#__PURE__*/React.createElement("div", {
    key: e.type,
    className: module2112.condition
  }, /*#__PURE__*/React.createElement("div", {
    className: module2112.title
  }, e.status === "True" ? /*#__PURE__*/React.createElement(module186.Icon, {
    name: "success",
    type: "coloured"
  }) : /*#__PURE__*/React.createElement(module186.Icon, {
    name: "error",
    color: {
      primary: "#ffffff",
      secondary: "#ea4641"
    }
  }), /*#__PURE__*/React.createElement("span", null, t(`CLUSTER_CONDITION_${e.type.toUpperCase()}`, {
    defaultValue: e.type
  }))), e.status && /*#__PURE__*/React.createElement("p", null, `${t("STATUS")}: ${e.status}`), e.reason && /*#__PURE__*/React.createElement("p", null, `${t("REASON")}: ${t(`CLUSTER_REASON_${e.reason.toUpperCase()}`, {
    defaultValue: e.reason
  })}`), e.message && /*#__PURE__*/React.createElement("p", null, `${t("MESSAGE")}: ${e.message}`)))));
  const p = /*#__PURE__*/React.createElement(module186.Icon, {
    name: "information",
    color: {
      primary: "#ffffff",
      secondary: status === "error" ? "#ab2f29" : "#f5a623"
    }
  });
  const m = module26(data, "isReady");
  const h = module26(data, "isSchedulable");
  const v = m ? h ? "" : t("UNSCHEDULABLE") : t("UNREADY");
  return /*#__PURE__*/React.createElement(React.Fragment, null, noTip ? /*#__PURE__*/React.createElement("span", {
    className: module3(module2112.reason, status === "error" ? module2112.error : module2112.warning)
  }, p, v) : /*#__PURE__*/React.createElement(module186.Tooltip, {
    placement: placement,
    content: content,
    modifiers: tooltipModifiers,
    positionFixed: true
  }, /*#__PURE__*/React.createElement("span", {
    className: module3(module2112.reason, status === "error" ? module2112.error : module2112.warning)
  }, p, v)));
}
;

/***/ },

/***/ "./src/chunks/vendor/module-856.js"
/*!*****************************************!*\
  !*** ./src/chunks/vendor/module-856.js ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-801.js */ "./src/unpacked/module-801.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-76.js */ "./src/unpacked/module-76.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module801 = (0, _recoverInterop.__recoverInterop)(_module);
const module76 = (0, _recoverInterop.__recoverInterop)(_module2);
function _default(e, maxWait, n) {
  let leading = true;
  let trailing = true;
  if (typeof e !== "function") {
    throw new TypeError("Expected a function");
  }
  if (module76(n)) {
    leading = "leading" in n ? !!n.leading : leading;
    trailing = "trailing" in n ? !!n.trailing : trailing;
  }
  return module801(e, maxWait, {
    leading,
    maxWait,
    trailing
  });
}
;

/***/ },

/***/ "./src/chunks/vendor/module-857.js"
/*!*****************************************!*\
  !*** ./src/chunks/vendor/module-857.js ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-207.js */ "./src/unpacked/module-207.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-526.js */ "./src/unpacked/module-526.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module207 = (0, _recoverInterop.__recoverInterop)(_module);
const module526 = (0, _recoverInterop.__recoverInterop)(_module2);
const hasOwnProperty = Object.prototype.hasOwnProperty;
const a = module526(function (e, t, n) {
  if (hasOwnProperty.call(e, n)) {
    e[n].push(t);
  } else {
    module207(e, n, [t]);
  }
});
var _default = exports["default"] = a;

/***/ },

/***/ "./src/components/Clusters/ClusterTitle.js"
/*!*************************************************!*\
  !*** ./src/components/Clusters/ClusterTitle.js ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



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
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-3.js */ "./src/shims/classnames.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-997.js */ "./src/unpacked/module-997.js"));
var _module9 = _interopRequireWildcard(__webpack_require__(/*! components/Base/Indicator */ "./src/components/Base/Indicator.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-189.js */ "./src/unpacked/module-189.js"));
var _module10 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module11 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2114.js */ "./src/unpacked/module-2114.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module3 = (0, _recoverInterop.__recoverInterop)(_module7);
const module997 = (0, _recoverInterop.__recoverInterop)(_module8);
const module838 = (0, _recoverInterop.__recoverInterop)(_module9);
const module26 = (0, _recoverInterop.__recoverInterop)(_module0);
const module189 = (0, _recoverInterop.__recoverInterop)(_module1);
const module1 = (0, _recoverInterop.__recoverInterop)(_module10);
const module2114 = (0, _recoverInterop.__recoverInterop)(_module11);
const D = (e => {
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
    e.iconSizeMap = {
      large: 48,
      normal: 40,
      small: 20
    };
    return e;
  }
  module37(r, [{
    key: "render",
    value: function () {
      const {
        theme,
        size,
        className,
        cluster,
        tagClass,
        noStatus,
        onClick,
        isEdgeWize,
        isExpired = false
      } = this.props;
      if (!cluster) {
        return null;
      }
      const y = module26(cluster.conditions, "Ready.status") === "True";
      const cluster_isSchedulable = cluster.isSchedulable;
      const D = this.iconSizeMap[size];
      return module553.default.createElement("div", {
        className: module3(module2114.wrapper, module2114[theme], module2114[size], className)
      }, module553.default.createElement("div", {
        className: module2114.icon,
        style: {
          height: D
        }
      }, module553.default.createElement(module186.Icon, {
        name: isEdgeWize ? "edge-cluster" : _constants.CLUSTER_PROVIDER_ICON[cluster.provider] || "kubernetes",
        size: D,
        type: theme
      }), isExpired ? module553.default.createElement(module838, {
        className: module2114.indicator,
        type: "error"
      }) : noStatus ? null : y ? module553.default.createElement(module838, {
        className: module2114.indicator,
        type: "ready"
      }) : null), module553.default.createElement("div", {
        className: module2114.title
      }, module553.default.createElement("div", {
        className: module2114.name
      }, onClick && y ? module553.default.createElement("a", {
        title: (0, _index.showNameAndAlias)(cluster),
        onClick
      }, (0, _index.showNameAndAlias)(cluster)) : module553.default.createElement("span", {
        title: (0, _index.showNameAndAlias)(cluster)
      }, (0, _index.showNameAndAlias)(cluster)), cluster.group && module553.default.createElement(module186.Tag, {
        className: module3("margin-l12", tagClass),
        type: _constants.CLUSTER_GROUP_TAG_TYPE[cluster.group]
      }, t(`ENV_${cluster.group.toUpperCase()}`, {
        defaultValue: cluster.group
      })), cluster.isHost && module553.default.createElement(module186.Tag, {
        className: module3("margin-l12", tagClass),
        type: "warning"
      }, t("HOST_CLUSTER")), " ", size === "small" && !noStatus && (!y || !cluster_isSchedulable) && module553.default.createElement(module997, {
        data: cluster
      })), module553.default.createElement("div", {
        className: module2114.description
      }, (() => {
        if (isExpired) {
          return module553.default.createElement("p", {
            className: module2114.isExpired
          }, module553.default.createElement(module186.Icon, {
            name: "information",
            size: "15",
            color: {
              primary: "#ffffff",
              secondary: "#ab2f29"
            }
          }), t("KUBE_CONFIG_IS_EXPIRED"));
        }
        const e = module553.default.createElement("p", {
          className: module3("ellipsis", module2114.ellipsis),
          title: cluster.description
        }, cluster.description || "-");
        if (noStatus || y && cluster_isSchedulable) {
          return e;
        }
        return module553.default.createElement(module997, {
          data: {
            ...cluster,
            conditions: module189(cluster.conditions, "KubeConfigCertExpiresInSevenDays")
          }
        });
      })())));
    }
  }]);
  return r;
})(module553.Component);
var _default = exports["default"] = D;
D.propTypes = {
  theme: module1.PropTypes.oneOf(["dark", "light"]),
  size: module1.PropTypes.oneOf(["normal", "small", "large"])
};
D.defaultProps = {
  theme: "dark",
  size: "normal"
};

/***/ },

/***/ "./src/stores/container.js"
/*!*********************************!*\
  !*** ./src/stores/container.js ***!
  \*********************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-65.js */ "./src/unpacked/module-65.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js"));
__webpack_require__(/*! utils/babel-helpers/initializerWarningHelper */ "./src/utils/babel-helpers/initializerWarningHelper.js");
var _module9 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js"));
var _module0 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module1 = _interopRequireWildcard(__webpack_require__(/*! utils/object.mapper */ "./src/utils/object.mapper.js"));
var _workload = __webpack_require__(/*! utils/workload */ "./src/utils/workload.js");
var _module10 = _interopRequireWildcard(__webpack_require__(/*! stores/base.list */ "./src/stores/base.list.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const module58 = (0, _recoverInterop.__recoverInterop)(_module2);
const module41 = (0, _recoverInterop.__recoverInterop)(_module3);
const module44 = (0, _recoverInterop.__recoverInterop)(_module4);
const module65 = (0, _recoverInterop.__recoverInterop)(_module5);
const module36 = (0, _recoverInterop.__recoverInterop)(_module6);
const module37 = (0, _recoverInterop.__recoverInterop)(_module7);
const module49 = (0, _recoverInterop.__recoverInterop)(_module8);
const module14 = (0, _recoverInterop.__recoverInterop)(_module9);
const module26 = (0, _recoverInterop.__recoverInterop)(_module0);
const module105 = (0, _recoverInterop.__recoverInterop)(_module1);
const module120 = (0, _recoverInterop.__recoverInterop)(_module10);
let i;
let c;
let s;
let f;
let d;
let p;
let m;
let h;
let v;
let g;
i = (() => {
  function e() {
    module36(this, e);
    module65(this, "detail", c, this);
    module65(this, "tagList", s, this);
    module65(this, "isLoading", f, this);
    module65(this, "volumes", d, this);
    module65(this, "logs", p, this);
    this.watchHandler = null;
    this.encryptKey = module26(globals, "config.encryptKey", "kubesphere");
    this.module = "containers";
    this.getDetailUrl = function ({
      cluster,
      namespace,
      podName,
      gateways
    }) {
      let l = "api/v1";
      if (cluster) {
        l += `/klusters/${cluster}`;
      }
      if (gateways) {
        l = "";
        const u = namespace !== "kubesphere-controls-system" && namespace ? namespace : "kubesphere-system";
        if (cluster) {
          l += `/clusters/${cluster}`;
        }
        return l + `/kapis/gateway.kubesphere.io/v2alpha1/namespaces/${u}/gateways/${gateways}/pods/${podName}`;
      }
      return `${l}/namespaces/${namespace}/pods/${podName}`;
    };
    this.getPath = function ({
      cluster,
      namespace
    }) {
      let r = "";
      if (cluster) {
        r += `/klusters/${cluster}`;
      }
      if (namespace) {
        r += `/namespaces/${namespace}`;
      }
      return r;
    };
    module65(this, "fetchRepositoryImages", m, this);
    module65(this, "getImageDetail", h, this);
    module65(this, "getImageTagList", v, this);
    module65(this, "updateTagList", g, this);
  }
  module37(e, [{
    key: "fetchDetail",
    value: async function (t) {
      let a;
      let r;
      let n;
      let l;
      let u;
      let i;
      let c;
      a = t.cluster;
      r = t.namespace;
      n = t.podName;
      l = t.containerName;
      this.isLoading = true;
      u = await request.get(this.getDetailUrl({
        cluster: a,
        namespace: r,
        podName: n
      }));
      i = module105.pods(u);
      c = i.containers.find(e => e.name === l) || i.initContainers.find(e => e.name === l);
      c.createTime = module26(i, "createTime", "");
      c.app = c.app || i.app;
      c.cluster = a;
      i.cluster = a;
      this.volumes = await (0, _workload.getWorkloadVolumes)(i);
      this.detail = c;
      this.isLoading = false;
    }
  }, {
    key: "watchLogs",
    value: async function (t, a) {
      let r;
      let n;
      let l;
      let gateways;
      let c;
      let s;
      let f;
      const _this = this;
      ({
        cluster: r,
        namespace: n,
        podName: l,
        gateways,
        silent: c,
        ...s
      } = t);
      if (!c) {
        this.logs.isLoading = true;
      }
      if (s.follow) {
        this.watchHandler = request.watch(`${this.getDetailUrl({
          cluster: r,
          namespace: n,
          podName: l,
          gateways
        })}/log`, s, function (data) {
          _this.logs = {
            data,
            isLoading: false
          };
          a();
        });
      } else {
        f = await request.get(`${this.getDetailUrl({
          cluster: r,
          namespace: n,
          podName: l,
          gateways
        })}/log`, s);
        this.logs = {
          data: f,
          isLoading: false
        };
        a();
      }
    }
  }, {
    key: "stopWatchLogs",
    value: function () {
      if (this.watchHandler) {
        this.watchHandler.abort();
      }
    }
  }, {
    key: "checkPreviousLog",
    value: async function (t) {
      let a;
      let r;
      let n;
      let l;
      let i;
      ({
        cluster: a,
        namespace: r,
        podName: n,
        ...l
      } = t);
      i = await request.get(`${this.getDetailUrl({
        cluster: a,
        namespace: r,
        podName: n
      })}/log`, l, {}, function () {});
      return !!i;
    }
  }, {
    key: "fetchAllLogs",
    value: async function (t) {
      let a;
      let r;
      let n;
      let l;
      ({
        cluster: a,
        namespace: r,
        podName: n,
        ...l
      } = t);
      return await request.get(`${this.getDetailUrl({
        cluster: a,
        namespace: r,
        podName: n
      })}/log`, l);
    }
  }]);
  return e;
})();
c = module49(i.prototype, "detail", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
});
s = module49(i.prototype, "tagList", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return new module120();
  }
});
f = module49(i.prototype, "isLoading", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
});
d = module49(i.prototype, "volumes", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
});
p = module49(i.prototype, "logs", [module14.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {
      data: "",
      isLoading: true
    };
  }
});
module49(i.prototype, "fetchDetail", [module14.action], Object.getOwnPropertyDescriptor(i.prototype, "fetchDetail"), i.prototype);
module49(i.prototype, "watchLogs", [module14.action], Object.getOwnPropertyDescriptor(i.prototype, "watchLogs"), i.prototype);
module49(i.prototype, "stopWatchLogs", [module14.action], Object.getOwnPropertyDescriptor(i.prototype, "stopWatchLogs"), i.prototype);
module49(i.prototype, "fetchAllLogs", [module14.action], Object.getOwnPropertyDescriptor(i.prototype, "fetchAllLogs"), i.prototype);
m = module49(i.prototype, "fetchRepositoryImages", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return async a => {
      let r;
      let n;
      let l;
      r = a.pathParams;
      n = a.queryParams;
      l = `kapis/resources.kubesphere.io/v1alpha3${_this.getPath({
        cluster: r?.cluster,
        namespace: r?.namespace
      })}/images`;
      return await request.get(l, n);
    };
  }
});
h = module49(i.prototype, "getImageDetail", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return (() => {
      const t = module44(module41.mark(function t(a) {
        let r;
        let n;
        let l;
        let i;
        return module41.wrap(function (t) {
          while (true) {
            switch (t.prev = t.next) {
              case 0:
                r = a.cluster;
                n = a.namespace;
                l = module58(a, ["cluster", "namespace"]);
                t.next = 3;
                return request.get(`kapis/resources.kubesphere.io/v1alpha3${_this.getPath({
                  cluster: r
                })}/namespaces/${n || "default"}/imageconfig`, l, null, function (e, t) {
                  return t;
                });
              case 3:
                i = t.sent;
                if (module26(i, "status", "succeeded") === "succeeded") {
                  t.next = 6;
                  break;
                }
                return t.abrupt("return", {
                  status: "failed",
                  message: i.message
                });
              case 6:
                return t.abrupt("return", module105.imageBlob(i));
              case 7:
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
  }
});
v = module49(i.prototype, "getImageTagList", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return async a => {
      let r;
      let l;
      let i;
      let limit;
      let f;
      let d;
      let p;
      ({
        namespace: r,
        cluster: l,
        more: i,
        limit = 10
      } = a);
      f = module58(a, ["namespace", "cluster", "more", "limit"]);
      _this.tagList.isLoading = true;
      if (!(limit !== Infinity && limit !== -1)) {
        limit = -1;
        f.page = 1;
      }
      d = await request.get(`kapis/resources.kubesphere.io/v1alpha3${_this.getPath({
        cluster: l,
        namespace: r
      })}/repositorytags`, {
        ...f,
        limit
      }, null, function (e, t) {
        return t;
      });
      p = d.tags || [];
      _this.tagList.update({
        data: i ? [].concat(module61(_this.tagList.data), module61(p)) : p,
        total: d.total || p.length || 0,
        limit: Number(f.limit) || 10,
        page: Number(f.page) || 1,
        isLoading: false
      });
      return d.tags;
    };
  }
});
g = module49(i.prototype, "updateTagList", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return function (t) {
      _this.tagList.update(t);
    };
  }
});
var _default = exports["default"] = i;

/***/ },

/***/ "./src/unpacked/module-1296.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1296.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-1296 */ "./src/chunks/common/module-1296.js"));
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

/***/ "./src/unpacked/module-1364.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1364.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-1364 */ "./src/chunks/common/module-1364.js"));
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

/***/ "./src/unpacked/module-1365.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1365.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-1365 */ "./src/chunks/common/module-1365.js"));
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

/***/ "./src/unpacked/module-2112.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2112.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2112 */ "./src/chunks/common/module-2112.js"));
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

/***/ "./src/unpacked/module-2114.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2114.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2114 */ "./src/chunks/common/module-2114.js"));
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

/***/ "./src/unpacked/module-2701.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2701.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2701 */ "./src/chunks/common/module-2701.js"));
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

/***/ "./src/unpacked/module-2906.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2906.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2906 */ "./src/chunks/common/module-2906.js"));
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

/***/ "./src/unpacked/module-3031.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-3031.js ***!
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-3031 */ "./src/chunks/common/module-3031.js"));
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

/***/ "./src/unpacked/module-805.js"
/*!************************************!*\
  !*** ./src/unpacked/module-805.js ***!
  \************************************/
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-805 */ "./src/chunks/common/module-805.js"));
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

/***/ "./src/unpacked/module-856.js"
/*!************************************!*\
  !*** ./src/unpacked/module-856.js ***!
  \************************************/
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/vendor/module-856 */ "./src/chunks/vendor/module-856.js"));
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

/***/ "./src/unpacked/module-857.js"
/*!************************************!*\
  !*** ./src/unpacked/module-857.js ***!
  \************************************/
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/vendor/module-857 */ "./src/chunks/vendor/module-857.js"));
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

/***/ "./src/unpacked/module-955.js"
/*!************************************!*\
  !*** ./src/unpacked/module-955.js ***!
  \************************************/
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-955 */ "./src/chunks/common/module-955.js"));
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

/***/ "./src/unpacked/module-959.js"
/*!************************************!*\
  !*** ./src/unpacked/module-959.js ***!
  \************************************/
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-959 */ "./src/chunks/common/module-959.js"));
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

/***/ "./src/unpacked/module-997.js"
/*!************************************!*\
  !*** ./src/unpacked/module-997.js ***!
  \************************************/
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
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-997 */ "./src/chunks/common/module-997.js"));
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