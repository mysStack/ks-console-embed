(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_components_Terminal_js"],{

/***/ "./src/components/Terminal.js"
/*!************************************!*\
  !*** ./src/components/Terminal.js ***!
  \************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
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
__webpack_require__(/*! unpacked/module-191.js */ "./node_modules/core-js3/modules/es.date.to-json.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-160.js */ "./node_modules/core-js3/modules/es.json.stringify.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module30 = __webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js");
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-801.js */ "./src/unpacked/module-801.js"));
var _module32 = __webpack_require__(/*! unpacked/module-5731.js */ "./src/shims/xterm.js");
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-1.js */ "./src/shims/prop-types.js"));
var module5764 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-5764.js */ "./src/shims/xterm-fit.js"));
var _module8 = _interopRequireWildcard(__webpack_require__(/*! utils/socket.client */ "./src/utils/socket.client.js"));
__webpack_require__(/*! unpacked/module-5765.js */ "./src/unpacked/module-5765.js");
__webpack_require__(/*! unpacked/module-5766.js */ "./src/unpacked/module-5766.js");
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module801 = (0, _recoverInterop.__recoverInterop)(_module6);
const module1 = (0, _recoverInterop.__recoverInterop)(_module7);
const module531 = (0, _recoverInterop.__recoverInterop)(_module8);
_module32.Terminal.applyAddon(module5764);
const g = {
  lineHeight: 1.2,
  cursorBlink: true,
  cursorStyle: "underline",
  fontSize: 12,
  fontFamily: "Monaco, Menlo, Consolas, 'Courier New', monospace",
  theme: {
    background: "#181d28"
  }
};
const v = (Component_1 => {
  module55(i, Component_1);
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
      let i;
      const r = module51(e);
      if (t) {
        const n = module51(this).constructor;
        i = Reflect.construct(r, arguments, n);
      } else {
        i = r.apply(this, arguments);
      }
      return module56(this, i);
    };
  })(i);
  function i(e) {
    let r;
    module36(this, i);
    r = t.call(this, e);
    r.sendTerminalInput = function (e) {
      if (r.isWsOpen) {
        r.ws.send(r.packStdin(e));
      }
    };
    r.resizeRemoteTerminal = function () {
      const r_term = r.term;
      const {
        cols,
        rows
      } = r_term;
      if (r.isWsOpen) {
        r.ws.send(r.packResize(cols, rows));
      }
    };
    r.fitTerm = function () {
      return r.term.fit();
    };
    r.onResize = module801(r.fitTerm, 800);
    r.packStdin = function (Data) {
      return JSON.stringify({
        Op: "stdin",
        Data
      });
    };
    r.packResize = function (Cols, Rows) {
      return JSON.stringify({
        Op: "resize",
        Cols,
        Rows
      });
    };
    r.unpackStdout = function (e) {
      return e.Data;
    };
    r.onWSError = function (e) {
      r.fatal(e.message);
    };
    r.onWSReceive = function (e) {
      const r_term = r.term;
      if (r.first) {
        r.first = false;
        r.disableTermStdin(false);
        r_term.reset();
        if (r_term.element) {
          r_term.focus();
        }
        r.resizeRemoteTerminal();
      }
      const i = r.unpackStdout(e);
      r_term.write(i);
    };
    r.disconnect = function () {
      if (r.term) {
        r.disableTermStdin(true);
      }
      if (r.ws) {
        r.ws.close(true);
      }
    };
    r.fatal = function (e) {
      const isEdgeNode = r.props.isEdgeNode;
      const r_first = r.first;
      if (!e && r_first) {
        e = `Could not connect to the ${isEdgeNode ? "node" : "container"}. Do you have sufficient privileges?`;
      }
      if (!e) {
        e = "disconnected";
      }
      if (!r_first) {
        e = `\r\n${e}`;
      }
      if (r_first) {
        r.term.reset();
      }
      r.term.write(`[31m${e}[m\r\n`);
    };
    r.first = true;
    r.containerRef = (0, _module30.createRef)();
    return r;
  }
  module37(i, [{
    key: "isWsOpen",
    get: function () {
      return this.ws && this.ws.getSocketState() === "open";
    }
  }]);
  module37(i, [{
    key: "componentDidMount",
    value: function () {
      this.term = this.initTerm();
      this.ws = this.createWS();
      this.onTerminalResize();
      this.onTerminalKeyPress();
      this.disableTermStdin();
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.term.destroy();
      this.disconnect();
      this.removeResizeListener();
    }
  }, {
    key: "initTerm",
    value: function () {
      const initText = this.props.initText;
      const t = this.getTerminalOpts();
      const i = new _module32.Terminal(t);
      i.open(this.containerRef.current);
      i.write(initText);
      i.fit();
      return i;
    }
  }, {
    key: "disableTermStdin",
    value: function (e = true) {
      const textarea = this.term.textarea;
      const i = textarea === undefined ? {} : textarea;
      i.disabled = e;
    }
  }, {
    key: "getTerminalOpts",
    value: function () {
      const terminalOpts = this.props.terminalOpts;
      return {
        ...g,
        ...terminalOpts
      };
    }
  }, {
    key: "onTerminalResize",
    value: function () {
      window.addEventListener("resize", this.onResize);
      this.term.on("resize", this.resizeRemoteTerminal);
    }
  }, {
    key: "onTerminalKeyPress",
    value: function () {
      this.term.on("data", this.sendTerminalInput);
    }
  }, {
    key: "removeResizeListener",
    value: function () {
      window.removeEventListener("resize", this.onResize);
    }
  }, {
    key: "createWS",
    value: function () {
      return new module531(this.props.websocketUrl, {
        onmessage: this.onWSReceive,
        onerror: this.onWSError
      });
    }
  }, {
    key: "render",
    value: function () {
      return /*#__PURE__*/React.createElement("kubernetes-container-terminal", {
        style: {
          width: "100%",
          height: "100%",
          display: "block"
        },
        ref: this.containerRef
      });
    }
  }]);
  return i;
})(_module30.Component);
var _default = exports["default"] = v;
v.propsTypes = {
  terminalOpts: module1.object,
  websocketUrl: module1.string,
  initText: module1.string,
  isEdgeNode: module1.bool
};
v.defaultProps = {
  terminalOpts: {},
  initText: "Connecting...",
  isEdgeNode: false
};

/***/ },

/***/ "./src/shims/xterm-fit.js"
/*!********************************!*\
  !*** ./src/shims/xterm-fit.js ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

const fit = __webpack_require__(/*! xterm/lib/addons/fit/fit */ "./node_modules/xterm/lib/addons/fit/fit.js");
module.exports = fit;
module.exports["default"] = fit;
Object.keys(fit).forEach(key => {
  module.exports[key] = fit[key];
});

/***/ },

/***/ "./src/shims/xterm.js"
/*!****************************!*\
  !*** ./src/shims/xterm.js ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! xterm/dist/xterm.css */ "./node_modules/xterm/dist/xterm.css");
const xterm = __webpack_require__(/*! xterm */ "./node_modules/xterm/lib/public/Terminal.js");
const Terminal = xterm.Terminal || xterm;
module.exports = {
  Terminal
};
module.exports.Terminal = Terminal;
module.exports["default"] = {
  Terminal
};

/***/ },

/***/ "./src/unpacked/module-5765.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5765.js ***!
  \*************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {};

/***/ },

/***/ "./src/unpacked/module-5766.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-5766.js ***!
  \*************************************/
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {};

/***/ }

}]);