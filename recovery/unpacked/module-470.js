"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-30.js").default;
require("./module-73.js");
require("./module-18.js");
require("./module-192.js");
require("./module-16.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-17.js");
require("./module-38.js");
require("./module-7.js");
require("./module-32.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("./module-12.js");
require("./module-45.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-30.js").default;
require("./module-73.js");
require("./module-18.js");
require("./module-28.js");
require("./module-192.js");
require("./module-42.js");
require("./module-16.js");
require("./module-34.js");
require("./module-15.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-57.js");
require("./module-17.js");
require("./module-38.js");
require("./module-7.js");
require("./module-32.js");
const o = module20(require("./module-31.js").default);
const a = module20(require("./module-58.js").default);
const i = module20(require("./module-41.js"));
require("./module-41.js");
let l;
let s;
let u;
let c;
let f;
let d;
let p;
let h;
let v;
let m;
let g;
let y;
let b;
let C;
const w = module20(require("./module-44.js").default);
const _ = module20(require("./module-65.js").default);
const x = module20(require("./module-36.js").default);
const M = module20(require("./module-37.js").default);
const E = module20(require("./module-88.js").default);
const k = module20(require("./module-55.js").default);
const O = module20(require("./module-56.js").default);
const S = module20(require("./module-51.js"));
const L = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const module14 = require("./module-14.js");
const D = module20(require("./module-26.js").default);
const module327 = require("./module-327.js");
const module52 = require("./module-52.js");
l = ((e)=>{
    k.default(r, e);
    var n = ((e)=>{
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
            let n;
            const r = S.default(e);
            if (t) {
                const o = S.default(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return O.default(this, n);
        };
    })(r);
    function r(...o) {
        let e;
        x.default(this, r);
        e = n.call(this, ...o);
        e.defaultStatus = module327.DEFAULT_QUERY_STATUS;
        e.resourceName = "apps";
        _.default(e, "showAddVersion", s, E.default(e));
        _.default(e, "allApps", u, E.default(e));
        e.uploadScreenshotsList = [];
        _.default(e, "fetchDetail", c, E.default(e));
        _.default(e, "upload", f, E.default(e));
        _.default(e, "deleteImage", d, E.default(e));
        _.default(e, "getImageUrl", p, E.default(e));
        _.default(e, "getImageUrlList", h, E.default(e));
        _.default(e, "uploadBySequence", v, E.default(e));
        _.default(e, "uploadIcon", m, E.default(e));
        _.default(e, "uploadScreenshot2", g, E.default(e));
        _.default(e, "uploadScreenshot", y, E.default(e));
        _.default(e, "deleteScreenshot", b, E.default(e));
        _.default(e, "handle", C, E.default(e));
        return e;
    }
    M.default(r, [
        {
            key: "deploy",
            value: async function(t, n) {
                let r;
                let namespace;
                let cluster;
                r = n.workspace;
                namespace = n.namespace;
                cluster = n.cluster;
                if (namespace) {
                    await this.submitting(request.post(`${this.baseUrl}${this.getPath({
                        workspace: r,
                        namespace,
                        cluster
                    })}/applications`, t));
                }
            }
        }
    ]);
    return r;
})(module20(require("./module-458.js")).default);
s = L.default(l.prototype, "showAddVersion", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
u = L.default(l.prototype, "allApps", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
c = L.default(l.prototype, "fetchDetail", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return w.default(i.default.mark(function* t() {
            let r;
            let o;
            let l;
            let version_id;
            let u;
            let c;
            let f;
            let d;
            const p = arguments;
            r = p.length > 0 && p[0] !== undefined ? p[0] : {};
            o = r.app_id;
            l = r.appId;
            version_id = r.version_id;
            u = r.workspace;
            c = a.default(r, [
                "app_id",
                "appId",
                "version_id",
                "workspace"
            ]);
            _this.isLoading = true;
            f = yield request.get(_this.getUrl({
                app_id: o || l,
                version_id,
                workspace: u
            }), c, {}, _this.reject);
            d = D.default(globals.user, "lang") || module52.getBrowserLang();
            f.abstraction = D.default(f, `abstraction_${d}`, f.abstraction);
            f.screenshots = D.default(f, `screenshots_${d}`, f.screenshots);
            _this.detail = {
                ...f,
                ...f?.metadata,
                icon: f?.spec?.icon,
                aliasName: D.default(f, 'metadata.annotations["kubesphere.io/alias-name"]'),
                description: D.default(f, 'metadata.annotations["kubesphere.io/description"]'),
                categoryName: D.default(f, 'metadata.labels["application.kubesphere.io/app-category-name"]')
            };
            _this.detail.workspace = u;
            _this.isLoading = false;
        }));
    }
});
f = L.default(l.prototype, "upload", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return w.default(i.default.mark(function* e() {
            let t;
            let n;
            let r;
            let o;
            let l;
            const s = arguments;
            t = s.length > 0 && s[0] !== undefined ? s[0] : {};
            n = t.workspace;
            r = a.default(t, [
                "workspace"
            ]);
            o = n ? `workspaces/${n}/` : "";
            l = yield fetch(`/kapis/application.kubesphere.io/v2/${o}attachments`, {
                headers: {},
                method: "POST",
                body: r.formData
            }).then((e)=>e.json());
            return l.attachment_id;
        }));
    }
});
d = L.default(l.prototype, "deleteImage", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return async (t)=>{
            let n;
            let r;
            let o;
            n = t.workspace;
            r = t.id;
            o = n ? `workspaces/${n}/` : "";
            await request.delete(`/kapis/application.kubesphere.io/v2/${o}attachments/${r}`);
        };
    }
});
p = L.default(l.prototype, "getImageUrl", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return async (t)=>{
            let r;
            let a;
            let l;
            let s;
            r = t.workspace;
            a = t.id;
            l = r ? `workspaces/${r}/` : "";
            s = await request.get(`/kapis/application.kubesphere.io/v2/${l}attachments/${a}`);
            return o.default({}, a, s?.attachment_content?.raw);
        };
    }
});
h = L.default(l.prototype, "getImageUrlList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (n, r)=>{
            let o;
            o = await Promise.all(n?.map(function(id) {
                return _this.getImageUrl({
                    workspace: r,
                    id
                });
            }));
            _this.uploadScreenshotsList = o;
            return o;
        };
    }
});
v = L.default(l.prototype, "uploadBySequence", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = w.default(i.default.mark(function t(n, r, attachment_content, a, l) {
                let s;
                let u;
                let c;
                let f;
                return i.default.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                s = l || module14.toJS(_this.detail);
                                t.next = 3;
                                return _this.upload({
                                    app_id: s.name,
                                    workspace: s.workspace,
                                    type: "screenshot",
                                    attachment_content,
                                    sequence: n + r
                                });
                            case 3:
                                u = a ? `${a},${attachment_content}` : attachment_content;
                                c = r + 1;
                                if (!(f = _this.uploadScreenshotsList[c])) {
                                    t.next = 10;
                                    break;
                                }
                                t.next = 9;
                                return _this.uploadBySequence(n, c, f, u);
                            case 9:
                                return t.abrupt("return", t.sent);
                            case 10:
                                return t.abrupt("return", u);
                            case 11:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e, n, r, o, a) {
                return t.apply(this, arguments);
            };
        })();
    }
});
L.default(l.prototype, "deploy", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "deploy"), l.prototype);
m = L.default(l.prototype, "uploadIcon", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(attachment_content) {
            return _this.upload({
                app_id: _this.detail.app_id,
                workspace: _this.detail.workspace,
                type: "icon",
                attachment_content
            });
        };
    }
});
g = L.default(l.prototype, "uploadScreenshot2", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (n, r, a)=>{
            let formData;
            let s;
            (formData = new FormData).append("file", n);
            s = await _this.upload({
                formData,
                workspace: a
            });
            _this.uploadScreenshotsList.push(o.default({}, s, r));
            return _this.uploadScreenshotsList;
        };
    }
});
y = L.default(l.prototype, "uploadScreenshot", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = w.default(i.default.mark(function t(n, r, o, a) {
                let l;
                let s;
                let u;
                return i.default.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                l = r.length;
                                s = "";
                                if (!(o + l >= module327.SCREENSHOTS_LIMIT)) {
                                    t.next = 5;
                                    break;
                                }
                                return t.abrupt("return", false);
                            case 5:
                                if (o !== 0) {
                                    t.next = 12;
                                    break;
                                }
                                _this.uploadScreenshotsList = [
                                    n
                                ];
                                u = l < 1 ? "" : r.join(",");
                                t.next = 10;
                                return _this.uploadBySequence(l, o, n, u, a);
                            case 10:
                                s = t.sent;
                                return t.abrupt("return", s);
                            case 12:
                                _this.uploadScreenshotsList.push(n);
                            case 13:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e, n, r, o) {
                return t.apply(this, arguments);
            };
        })();
    }
});
b = L.default(l.prototype, "deleteScreenshot", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, n) {
            let r = [];
            if (t >= 0) {
                (r = D.default(n, "attachments", [])).splice(t, 1);
            }
            _this.uploadScreenshotsList = r;
            return r;
        };
    }
});
C = L.default(l.prototype, "handle", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return w.default(i.default.mark(function* t() {
            let n;
            let app_id;
            let o;
            let l;
            let s;
            const u = arguments;
            n = u.length > 0 && u[0] !== undefined ? u[0] : {};
            app_id = n.app_id;
            o = n.workspace;
            l = a.default(n, [
                "app_id",
                "workspace"
            ]);
            s = _this.getUrl({
                app_id,
                workspace: o,
                name: "action"
            });
            return yield _this.submitting(request.post(s, l));
        }));
    }
});
exports.default = l;
