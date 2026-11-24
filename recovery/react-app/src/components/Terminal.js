import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module801 from "unpacked/module-801.js";
import { Terminal } from "unpacked/module-5731.js";
import module1 from "unpacked/module-1.js";
import * as module5764 from "unpacked/module-5764.js";
import module531 from "utils/socket.client";
import "unpacked/module-5765.js";
import "unpacked/module-5766.js";
Terminal.applyAddon(module5764);
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
const v = ((Component_1)=>{
    module55(i, Component_1);
    var t = ((e)=>{
        const t = (()=>{
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
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
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
        r.sendTerminalInput = function(e) {
            if (r.isWsOpen) {
                r.ws.send(r.packStdin(e));
            }
        };
        r.resizeRemoteTerminal = function() {
            const r_term = r.term;
            const { cols, rows } = r_term;
            if (r.isWsOpen) {
                r.ws.send(r.packResize(cols, rows));
            }
        };
        r.fitTerm = function() {
            return r.term.fit();
        };
        r.onResize = module801(r.fitTerm, 800);
        r.packStdin = function(Data) {
            return JSON.stringify({
                Op: "stdin",
                Data
            });
        };
        r.packResize = function(Cols, Rows) {
            return JSON.stringify({
                Op: "resize",
                Cols,
                Rows
            });
        };
        r.unpackStdout = function(e) {
            return e.Data;
        };
        r.onWSError = function(e) {
            r.fatal(e.message);
        };
        r.onWSReceive = function(e) {
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
        r.disconnect = function() {
            if (r.term) {
                r.disableTermStdin(true);
            }
            if (r.ws) {
                r.ws.close(true);
            }
        };
        r.fatal = function(e) {
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
        r.containerRef = module553.createRef();
        return r;
    }
    module37(i, [
        {
            key: "isWsOpen",
            get: function() {
                return this.ws && this.ws.getSocketState() === "open";
            }
        }
    ]);
    module37(i, [
        {
            key: "componentDidMount",
            value: function() {
                this.term = this.initTerm();
                this.ws = this.createWS();
                this.onTerminalResize();
                this.onTerminalKeyPress();
                this.disableTermStdin();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.term.destroy();
                this.disconnect();
                this.removeResizeListener();
            }
        },
        {
            key: "initTerm",
            value: function() {
                const initText = this.props.initText;
                const t = this.getTerminalOpts();
                const i = new Terminal(t);
                i.open(this.containerRef.current);
                i.write(initText);
                i.fit();
                return i;
            }
        },
        {
            key: "disableTermStdin",
            value: function(e = true) {
                const textarea = this.term.textarea;
                const i = textarea === undefined ? {} : textarea;
                i.disabled = e;
            }
        },
        {
            key: "getTerminalOpts",
            value: function() {
                const terminalOpts = this.props.terminalOpts;
                return {
                    ...g,
                    ...terminalOpts
                };
            }
        },
        {
            key: "onTerminalResize",
            value: function() {
                window.addEventListener("resize", this.onResize);
                this.term.on("resize", this.resizeRemoteTerminal);
            }
        },
        {
            key: "onTerminalKeyPress",
            value: function() {
                this.term.on("data", this.sendTerminalInput);
            }
        },
        {
            key: "removeResizeListener",
            value: function() {
                window.removeEventListener("resize", this.onResize);
            }
        },
        {
            key: "createWS",
            value: function() {
                return new module531(this.props.websocketUrl, {
                    onmessage: this.onWSReceive,
                    onerror: this.onWSError
                });
            }
        },
        {
            key: "render",
            value: function() {
                return <kubernetes-container-terminal style={{
                    width: "100%",
                    height: "100%",
                    display: "block"
                }} ref={this.containerRef}/>;
            }
        }
    ]);
    return i;
})(module553.Component);
export default v;
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
