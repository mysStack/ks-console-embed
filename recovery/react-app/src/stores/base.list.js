import "unpacked/module-15.js";
import "unpacked/module-197.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-4.js";
import module61 from "unpacked/module-61.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module14 from "unpacked/module-14.js";
let o;
let a;
let i;
let l;
let s;
let u;
o = (()=>{
    function e() {
        module36(this, e);
        module65(this, "data", a, this);
        this.page = 1;
        this.limit = 10;
        module65(this, "total", i, this);
        this.sortBy = "";
        this.ascending = false;
        this.silent = false;
        this.filters = {};
        module65(this, "isLoading", l, this);
        module65(this, "selectedRowKeys", s, this);
        module65(this, "setSelectRowKeys", u, this);
    }
    module37(e, [
        {
            key: "update",
            value: function(e) {
                const _this = this;
                this.filters = {};
                Object.keys(e).forEach((n)=>{
                    if (Object.prototype.hasOwnProperty.call(_this, n)) {
                        _this[n] = e[n];
                    } else if (e[n]) {
                        _this.filters[n] = e[n];
                    }
                });
            }
        },
        {
            key: "updateItem",
            value: function(e) {
                if (e.uid) {
                    const t = this.data.findIndex((t)=>t.uid === e.uid);
                    if (t >= 0) {
                        this.data[t] = e;
                        this.data = module61(this.data);
                    }
                }
            }
        },
        {
            key: "reset",
            value: function() {
                this.data = [];
                this.page = 1;
                this.limit = 10;
                this.sortBy = "";
                this.ascending = false;
                this.silent = false;
                this.filters = {};
                this.isLoading = true;
                this.selectedRowKeys = [];
            }
        }
    ]);
    return e;
})();
a = module49(o.prototype, "data", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
i = module49(o.prototype, "total", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
l = module49(o.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
s = module49(o.prototype, "selectedRowKeys", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
module49(o.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "update"), o.prototype);
module49(o.prototype, "updateItem", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "updateItem"), o.prototype);
u = module49(o.prototype, "setSelectRowKeys", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.selectedRowKeys = t;
        };
    }
});
export default o;
