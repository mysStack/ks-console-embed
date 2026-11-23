"use strict";
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-12.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-29.js");
require("unpacked/module-6.js");
require("unpacked/module-18.js");
require("unpacked/module-9.js");
require("unpacked/module-13.js");
require("unpacked/module-10.js");
require("unpacked/module-4.js");
require("unpacked/module-23.js");
require("unpacked/module-17.js");
require("unpacked/module-7.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
const c = module20(require("unpacked/module-41.js"));
require("unpacked/module-41.js");
const o = module20(require("utils/babel-helpers/asyncToGenerator").default);
const i = module20(require("unpacked/module-65.js").default);
const u = module20(require("unpacked/module-36.js").default);
const a = module20(require("unpacked/module-37.js").default);
const s = module20(require("unpacked/module-88.js").default);
const l = module20(require("unpacked/module-55.js").default);
const f = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const p = module20(require("unpacked/module-51.js"));
const d = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
require("unpacked/module-12.js");
require("unpacked/module-45.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-29.js");
require("unpacked/module-6.js");
require("unpacked/module-18.js");
require("unpacked/module-28.js");
require("unpacked/module-42.js");
require("unpacked/module-34.js");
require("unpacked/module-15.js");
require("unpacked/module-9.js");
require("unpacked/module-13.js");
require("unpacked/module-10.js");
require("unpacked/module-4.js");
require("unpacked/module-22.js");
require("unpacked/module-23.js");
require("unpacked/module-57.js");
require("unpacked/module-17.js");
require("unpacked/module-7.js");
let y;
let v;
const h = module20(require("unpacked/module-31.js").default);
const module14 = require("unpacked/module-14.js");
function O(e) {
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
        let r;
        const n = p.default(e);
        if (t) {
            const c = p.default(this).constructor;
            r = Reflect.construct(n, arguments, c);
        } else {
            r = n.apply(this, arguments);
        }
        return f.default(this, r);
    };
}
function j(e) {
    const extensionName = e?.extension;
    const isAuthorized = e?.violation?.type === "No violation";
    return {
        ...e,
        extensionName,
        isAuthorized
    };
}
y = ((e)=>{
    l.default(f, e);
    var n = O(f);
    function f(...r) {
        let e;
        u.default(this, f);
        e = n.call(this, ...r);
        e.module = "licenses";
        i.default(e, "licenses", v, s.default(e));
        return e;
    }
    a.default(f, [
        {
            key: "getUrl",
            value: function({ path }) {
                return `${this.apiVersion}/${path}`;
            }
        },
        {
            key: "fetchLicenses",
            value: async function() {
                let r;
                let n;
                let licenses;
                r = await request.get(this.getUrl({
                    path: "licenses"
                }), {}, {}, function() {
                    return {};
                });
                n = r?.items ?? [];
                licenses = n.map(j);
                return module14.toJS({
                    licenses
                });
            }
        },
        {
            key: "fetchLicenseByLicenses",
            value: async function(t) {
                let n;
                let o;
                let i;
                let u;
                n = t.extensionName;
                o = await this.fetchLicenses();
                i = o?.licenses ?? [];
                u = i.find((e)=>e.extensionName === n);
                return u;
            }
        }
    ]);
    return f;
})(module20(require("stores/base")).default);
v = d.default(y.prototype, "licenses", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
d.default(y.prototype, "fetchLicenses", [
    module14.action
], Object.getOwnPropertyDescriptor(y.prototype, "fetchLicenses"), y.prototype);
d.default(y.prototype, "fetchLicenseByLicenses", [
    module14.action
], Object.getOwnPropertyDescriptor(y.prototype, "fetchLicenseByLicenses"), y.prototype);
exports.default = y;
