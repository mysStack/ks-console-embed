"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-86.js");
require("./module-16.js");
require("./module-138.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-17.js");
require("./module-7.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("./module-12.js");
require("./module-45.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-86.js");
require("./module-28.js");
require("./module-42.js");
require("./module-16.js");
require("./module-138.js");
require("./module-34.js");
require("./module-15.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-57.js");
require("./module-24.js");
require("./module-193.js");
require("./module-17.js");
require("./module-7.js");
const n = module20(require("./module-31.js").default);
const l = module20(require("./module-41.js"));
const u = module20(require("./module-58.js").default);
require("./module-41.js");
let o;
let i;
let c;
let s;
let f;
let d;
let p;
let m;
let h;
const v = module20(require("./module-44.js").default);
const g = module20(require("./module-65.js").default);
const y = module20(require("./module-36.js").default);
const E = module20(require("./module-37.js").default);
const b = module20(require("./module-88.js").default);
const _ = module20(require("./module-55.js").default);
const O = module20(require("./module-56.js").default);
const S = module20(require("./module-51.js"));
const C = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const module14 = require("./module-14.js");
const k = module20(require("./module-122.js").default);
const module440 = require("./module-440.js");
const module917 = require("./module-917.js");
const module327 = require("./module-327.js");
o = ((e)=>{
    _.default(r, e);
    var a = ((e)=>{
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
            let a;
            const r = S.default(e);
            if (t) {
                const n = S.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return O.default(this, a);
        };
    })(r);
    function r(...n) {
        let e;
        y.default(this, r);
        e = a.call(this, ...n);
        e.resourceName = "files";
        g.default(e, "files", i, b.default(e));
        g.default(e, "isLoading", c, b.default(e));
        e.filters = {};
        g.default(e, "checkFile", s, b.default(e));
        g.default(e, "handleFileByBase64Str", f, b.default(e));
        g.default(e, "validateImageSize", d, b.default(e));
        g.default(e, "validatePackage", p, b.default(e));
        g.default(e, "uploadPackage", m, b.default(e));
        g.default(e, "downloadPackage", h, b.default(e));
        e.reject = function(t) {
            e.isLoading = false;
            window.onunhandledrejection(t);
        };
        return e;
    }
    E.default(r, [
        {
            key: "fetch",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                let o;
                let i;
                const c = arguments;
                t = c.length > 0 && c[0] !== undefined ? c[0] : {};
                a = t.app_id;
                r = t.version_id;
                n = u.default(t, [
                    "app_id",
                    "version_id"
                ]);
                this.isLoading = true;
                this.filters = Object.assign(this.filters, n);
                if (o = await request.get(this.getUrl({
                    app_id: a,
                    version_id: r
                }), this.filters, null, this.reject)) {
                    i = o.files || {};
                    Object.keys(i).forEach((e)=>{
                        i[e] = module440.safeAtob(i[e]);
                    });
                    this.files = i;
                    this.isLoading = false;
                }
            }
        }
    ]);
    return r;
})(module20(require("./module-458.js")).default);
i = C.default(o.prototype, "files", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
c = C.default(o.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
C.default(o.prototype, "fetch", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetch"), o.prototype);
s = C.default(o.prototype, "checkFile", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return function(e, t) {
            const a = module327.UPLOAD_CHECK_RULES[t];
            if (a.format.test(e.name.toLocaleLowerCase())) {
                if (e.size > a.size) {
                    return `FILE_MAX_${t.toLocaleUpperCase()}`;
                }
                return "";
            }
            return `FILE_FORMAT_${t.toLocaleUpperCase()}`;
        };
    }
});
f = C.default(o.prototype, "handleFileByBase64Str", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return async (t, a)=>{
            let r;
            (r = new FileReader).readAsDataURL(t, "UTF-8");
            r.addEventListener("load", v.default(l.default.mark(function* e() {
                let t;
                let n;
                t = r.result;
                n = t.substring(t.indexOf(",") + 1, t.length);
                yield a(n);
            })));
        };
    }
});
d = C.default(o.prototype, "validateImageSize", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return async (t)=>{
            let a;
            a = new Image;
            a.src = t;
            return new Promise((resolve)=>{
                a.addEventListener("load", v.default(l.default.mark(function* t() {
                    let r = true;
                    if (a.width > 96 || a.height > 96) {
                        r = false;
                    }
                    resolve(r);
                })));
            });
        };
    }
});
p = C.default(o.prototype, "validatePackage", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a, r)=>{
            let n;
            let u;
            let o;
            _this.isSubmitting = true;
            n = {};
            if (r) {
                n.type = "helm";
                n.package = a;
            } else {
                n.version_type = "helm";
                n.version_package = a;
            }
            u = r ? "versions" : "apps";
            o = await request.post(`${_this.getUrl({
                app_id: r,
                name: u
            })}?validate=true`, n, {}, _this.reject);
            _this.isSubmitting = false;
            if (o && o.name) {
                o.base64Str = a;
            }
            if (o && o.error_details) {
                o.missFile = k.default(o.error_details);
                o.error = "MISS_FILE_NOTE";
            }
            return o;
        };
    }
});
m = C.default(o.prototype, "uploadPackage", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return async function(t) {
            let a;
            let r;
            let n;
            const u = arguments;
            a = u.length > 1 && u[1] !== undefined ? u[1] : {};
            r = u.length > 2 ? u[2] : undefined;
            n = {
                ...a
            };
            if (t === "CREATE_APP") {
                n.version_package = a.base64Str;
            } else {
                n.package = a.base64Str;
            }
            delete n.base64Str;
            return await r(n);
        };
    }
});
h = C.default(o.prototype, "downloadPackage", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return v.default(l.default.mark(function* t() {
            let a;
            let r;
            let n;
            let u;
            let o;
            let i;
            const c = arguments;
            a = c.length > 0 && c[0] !== undefined ? c[0] : {};
            r = a.app_id;
            n = a.version_id;
            u = a.packageName;
            o = _this.getUrl({
                app_id: r,
                version_id: n,
                name: "package"
            });
            i = yield _this.submitting(request.get(o));
            module917.downloadFileFromBase64(i.package, u);
        }));
    }
});
exports.default = o;
