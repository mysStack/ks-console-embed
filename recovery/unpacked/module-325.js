import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-316.js";
import "./module-7.js";
import "./module-109.js";
import "./module-4.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module14 from "./module-14.js";
import { getClusterUrl, getWebSocketProtocol } from "./module-52.js";
import module531 from "./module-531.js";
let o;
let a;
let i;
o = (()=>{
    function e() {
        module36(this, e);
        module65(this, "message", a, this);
        this.wsMap = {};
        module65(this, "receive", i, this);
    }
    module37(e, [
        {
            key: "watch",
            value: function(e) {
                if (this.wsClient) {
                    this.wsClient.close(true);
                }
                this.wsClient = new module531(`${getWebSocketProtocol(window.location.protocol)}://${window.location.host}${getClusterUrl(`/${e}`)}`, {
                    onmessage: this.receive
                });
            }
        },
        {
            key: "watchByKey",
            value: function(e, t, onmessage, r) {
                if (this.wsMap[e]) {
                    this.wsMap[e].close(true);
                }
                this.wsMap[e] = new module531(`${getWebSocketProtocol(window.location.protocol)}://${window.location.host}${getClusterUrl(`/${t}`)}`, {
                    onmessage,
                    onerror: function(e) {
                        setTimeout(r, 1000);
                        console.error(e);
                    }
                });
            }
        },
        {
            key: "closeBy",
            value: function(...n) {
                const _this = this;
                n.forEach((t)=>{
                    if (_this.wsMap[t]) {
                        _this.wsMap[t].close(true);
                    }
                });
            }
        },
        {
            key: "closeMap",
            value: function() {
                Object.values(this.wsMap).forEach((e)=>{
                    e.close(true);
                });
            }
        },
        {
            key: "close",
            value: function() {
                if (this.wsClient) {
                    this.wsClient.close(true);
                }
            }
        }
    ]);
    return e;
})();
a = module49(o.prototype, "message", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
i = module49(o.prototype, "receive", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.message = t;
        };
    }
});
export default o;
