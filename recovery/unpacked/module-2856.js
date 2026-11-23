import "./module-15.js";
import "./module-18.js";
import "./module-192.js";
import "./module-9.js";
import "./module-28.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module14 from "./module-14.js";
import module250 from "./module-250.js";
let n;
let l;
let o;
n = (()=>{
    function e(a = {}) {
        const _this = this;
        const a_config = a.config;
        const n = a_config === undefined ? {} : a_config;
        const a_monitors = a.monitors;
        const i = a_monitors === undefined ? [] : a_monitors;
        module36(this, e);
        module65(this, "monitors", l, this);
        module65(this, "config", o, this);
        this.config = n;
        this.monitors = i.map((e)=>e.belong(_this));
    }
    module37(e, [
        {
            key: "push",
            value: function(e) {
                e.belong(this);
                this.monitors.push(e);
                return this;
            }
        },
        {
            key: "has",
            value: function(e) {
                return module250(this.monitors, e);
            }
        },
        {
            key: "updateMonitors",
            value: function(e) {
                this.monitors = e;
            }
        },
        {
            key: "deleteTextMonitorByIndex",
            value: function(e) {
                this.monitors.splice(e, 1);
            }
        }
    ]);
    return e;
})();
l = module49(n.prototype, "monitors", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
o = module49(n.prototype, "config", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
module49(n.prototype, "updateMonitors", [
    module14.action
], Object.getOwnPropertyDescriptor(n.prototype, "updateMonitors"), n.prototype);
module49(n.prototype, "deleteTextMonitorByIndex", [
    module14.action
], Object.getOwnPropertyDescriptor(n.prototype, "deleteTextMonitorByIndex"), n.prototype);
export default n;
