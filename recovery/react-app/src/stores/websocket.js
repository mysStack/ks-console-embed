import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-316.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-4.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module14 from "unpacked/module-14.js";
import { getClusterUrl, getWebSocketProtocol } from "utils/index";
import module531 from "utils/socket.client";
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
