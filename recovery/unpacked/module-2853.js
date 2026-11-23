import "./module-15.js";
import "./module-9.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module14 from "./module-14.js";
let n;
let l;
let o;
let u;
n = (()=>{
    function e() {
        module36(this, e);
        module65(this, "theme", l, this);
        module65(this, "selectedMonitor", o, this);
        module65(this, "shouldNewMonitorModalShow", u, this);
    }
    module37(e, [
        {
            key: "selectMonitor",
            value: function(e) {
                this.selectedMonitor = e;
            }
        },
        {
            key: "unSelectMonitor",
            value: function() {
                this.selectedMonitor = null;
            }
        },
        {
            key: "changeTheme",
            value: function() {
                this.theme = this.theme === "light" ? "dark" : "light";
            }
        },
        {
            key: "showNewMonitorModal",
            value: function() {
                this.shouldNewMonitorModalShow = true;
            }
        },
        {
            key: "hideNewMonitorModal",
            value: function() {
                this.shouldNewMonitorModalShow = false;
            }
        }
    ]);
    return e;
})();
l = module49(n.prototype, "theme", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "dark";
    }
});
o = module49(n.prototype, "selectedMonitor", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return null;
    }
});
u = module49(n.prototype, "shouldNewMonitorModalShow", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
module49(n.prototype, "selectMonitor", [
    module14.action
], Object.getOwnPropertyDescriptor(n.prototype, "selectMonitor"), n.prototype);
module49(n.prototype, "unSelectMonitor", [
    module14.action
], Object.getOwnPropertyDescriptor(n.prototype, "unSelectMonitor"), n.prototype);
module49(n.prototype, "changeTheme", [
    module14.action
], Object.getOwnPropertyDescriptor(n.prototype, "changeTheme"), n.prototype);
module49(n.prototype, "showNewMonitorModal", [
    module14.action
], Object.getOwnPropertyDescriptor(n.prototype, "showNewMonitorModal"), n.prototype);
module49(n.prototype, "hideNewMonitorModal", [
    module14.action
], Object.getOwnPropertyDescriptor(n.prototype, "hideNewMonitorModal"), n.prototype);
export default n;
