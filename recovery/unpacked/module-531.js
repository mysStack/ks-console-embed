import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-62.js";
import "./module-7.js";
import "./module-109.js";
import "./module-249.js";
import "./module-45.js";
import "./module-28.js";
import "./module-448.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module26 from "./module-26.js";
import { getWebSocketProtocol } from "./module-52.js";
const f = [
    "connecting",
    "open",
    "closing",
    "closed"
];
const d = {
    reopenLimit: 5,
    onopen: function() {},
    onmessage: function() {},
    onclose: function() {},
    onerror: function() {}
};
const p = (()=>{
    function e(t, n = {}) {
        module36(this, e);
        this.endpoint = t;
        this.options = {
            ...d,
            ...n
        };
        if (!this.endpoint) {
            throw Error(`invalid websocket endpoint: ${this.endpoint}`);
        }
        this.reopenCount = 0;
        this.setUp();
    }
    module37(e, [
        {
            key: "getSocketState",
            value: function(e = this.client.readyState) {
                return f[e];
            }
        },
        {
            key: "initClient",
            value: function() {
                const e = module26(this.options, "subProtocol");
                if (!this.client) {
                    this.client = new WebSocket(this.endpoint, e);
                }
                if (this.client && this.client.readyState > 1) {
                    this.client.close();
                    this.client = new WebSocket(this.endpoint, e);
                }
                return this.client;
            }
        },
        {
            key: "attachEvents",
            value: function() {
                const _this = this;
                const options = this.options;
                const { onopen, onmessage, onclose, onerror } = options;
                this.client.onopen = function(t) {
                    if (!_this.immediately && _this.reopenCount < _this.options.reopenLimit) {
                        _this.timer = setTimeout(_this.setUp.bind(_this), 1000 * 2 ** _this.reopenCount);
                        _this.reopenCount++;
                    }
                    if (onopen) {
                        onopen(t);
                    }
                };
                this.client.onmessage = function({ data }) {
                    if (typeof data === "string") {
                        try {
                            data = JSON.parse(data);
                        } catch (e) {}
                    }
                    if (onmessage) {
                        onmessage(data);
                    }
                };
                this.client.onclose = function(e) {
                    if (onclose) {
                        onclose(e);
                    }
                };
                this.client.onerror = function(e) {
                    console.error("socket error: ", e);
                    if (onerror) {
                        onerror(e);
                    }
                };
            }
        },
        {
            key: "send",
            value: function(e) {
                return this.client.send(e);
            }
        },
        {
            key: "close",
            value: function(e) {
                if (e) {
                    this.immediately = true;
                }
                this.client.close();
                if (this.timer) {
                    clearTimeout(this.timer);
                }
            }
        },
        {
            key: "setUp",
            value: function() {
                this.initClient();
                this.attachEvents();
            }
        }
    ]);
    return e;
})();
export default p;
p.composeEndpoint = function(e, t = "") {
    const n = /(\w+?:\/\/)?([^\\?]+)/;
    const r = String(e).match(n);
    return `${getWebSocketProtocol(window.location.protocol)}://${r[2]}${t}`;
};
