import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-193.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import module58 from "unpacked/module-58.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module14 from "unpacked/module-14.js";
import module60 from "unpacked/module-60.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { compareVersion, generateId, getQueryString, parseUrl } from "utils/index";
import module244 from "unpacked/module-244.js";
import module323 from "stores/devops";
import module1110 from "stores/devops/credential";
let s;
let i;
let f;
let d;
let p;
let m;
let v;
let h;
let E;
let y;
let g;
let b;
let S;
let _;
let O;
let C;
function z(e) {
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
        const r = module51(e);
        if (t) {
            const n = module51(this).constructor;
            a = Reflect.construct(r, arguments, n);
        } else {
            a = r.apply(this, arguments);
        }
        return module56(this, a);
    };
}
s = ((e)=>{
    module55(P, e);
    var s = z(P);
    function P(e) {
        let a;
        module36(this, P);
        a = s.call(this, e);
        module65(a, "isAccessTokenWrong", i, module88(a));
        module65(a, "credentials", f, module88(a));
        module65(a, "orgList", d, module88(a));
        module65(a, "repoList", p, module88(a));
        module65(a, "activeRepoIndex", m, module88(a));
        module65(a, "formData", v, module88(a));
        module65(a, "creatBitBucketServersError", h, module88(a));
        module65(a, "orgParams", E, module88(a));
        a.getClusterVersion = function(e) {
            if (a.isMultiCluster) {
                return module26(window, `parent.globals.clusterConfig.${e}.ksVersion`);
            }
            return module26(window, "parent.globals.ksConfig.ksVersion");
        };
        a.isNeedUpdate = function(e) {
            return compareVersion(a.getClusterVersion(e), "3.3.0") < 0;
        };
        module65(a, "getCredentials", y, module88(a));
        a.getCredentialDetail = async (t)=>{
            await a.credentialStore.fetchDetail(t);
            return a.credentialStore.detail;
        };
        a.createCredential = async (t, r)=>{
            await a.credentialStore.handleCreate(t, r);
        };
        module65(a, "creatBitBucketServers", g, module88(a));
        module65(a, "clearBitbucketErrors", b, module88(a));
        a.getBitbucketList = async (t)=>{
            let r;
            let n;
            let l;
            r = t.cluster;
            n = await request.get(`${a.getDevopsUrlV2({
                cluster: r
            })}scms/bitbucket-server/servers`);
            [];
            l = !module63(n) && module60(n) ? n.map((e)=>({
                    label: e.apiUrl,
                    value: e.apiUrl
                })) : [
                {
                    label: "https://bitbucket.org",
                    value: "https://bitbucket.org"
                }
            ];
            return l;
        };
        module65(a, "resetStore", S, module88(a));
        module65(a, "checkCronScript", _, module88(a));
        module65(a, "fetchGitLabServerList", O, module88(a));
        module65(a, "fetchGitLabProjectList", C, module88(a));
        a.credentialStore = new module1110;
        a.verifyAccessErrorHandle = {
            github: function(e, t) {
                const r = t.headers ? e : t;
                if (t.code === 428) {
                    a.isAccessTokenWrong = true;
                    return void (a.orgList.isLoading = false);
                }
                if (window.onunhandledrejection) {
                    window.onunhandledrejection(r);
                }
                return Promise.reject(r);
            },
            "bitbucket-server": function(e, r) {
                const n = r.headers ? e : r;
                if (n.code !== 428) {
                    if (!module60(n.errors) || module63(n.errors)) {
                        a.creatBitBucketServersError = {
                            all: n.message
                        };
                        if (window.onunhandledrejection) {
                            window.onunhandledrejection(n);
                        }
                        return Promise.reject(n);
                    }
                    a.creatBitBucketServersError = n.errors.reduce((acc, error)=>{
                        acc[error.field] = {
                            message: error.message
                        };
                        return acc;
                    }, {});
                } else {
                    a.creatBitBucketServersError = {
                        password: {
                            message: t("INCORRECT_USERNAME_OR_PASSWORD")
                        }
                    };
                }
            }
        };
        return a;
    }
    module37(P, [
        {
            key: "getOrganizationList",
            value: async function(t, a, r) {
                let o;
                let i;
                let d;
                let credentialId;
                let m;
                let v;
                let h;
                let E;
                ({ pageNumber: o = 1, pageSize: i = 100, more: d = false, credentialId } = t);
                m = module58(t, [
                    "pageNumber",
                    "pageSize",
                    "more",
                    "credentialId"
                ]);
                this.orgList.isLoading = true;
                this.scmType = a;
                this.orgParams = m;
                v = `${this.getDevopsUrlV3({
                    cluster: r
                })}scms/${a || "github"}/organizations?${getQueryString({
                    pageNumber: o,
                    pageSize: i,
                    ...m
                }, false)}`;
                h = `${this.getDevopsUrlV2({
                    cluster: r
                })}scms/${a || "github"}/organizations/?${getQueryString({
                    ...m,
                    credentialId
                }, false)}`;
                E = await request.get(this.isNeedUpdate(r) ? h : v).catch(()=>[]);
                if (module60(E)) {
                    this.orgList.data = d ? [].concat(module61(this.orgList.data), module61(E)) : E;
                }
                this.orgList.isLoading = false;
                this.orgList.isEnd = E.length < i;
                this.orgList.pagination = {
                    pageSize: i,
                    pageNumber: o
                };
                return this.orgList;
            }
        },
        {
            key: "handleChangeActiveRepoIndex",
            value: function(e) {
                this.activeRepoIndex = e;
            }
        },
        {
            key: "handleChangeAccessTokenWrong",
            value: function() {
                this.isAccessTokenWrong = false;
            }
        },
        {
            key: "getRepoList",
            value: async function(t) {
                let a;
                let r;
                let o;
                let s;
                let f;
                let d;
                let p;
                let m;
                let v;
                let h;
                const _this = this;
                ({ cluster: a, activeRepoIndex: r, pageNumber: o = 1, pageSize: s = 100, more: f = false } = t);
                d = r !== undefined ? r : this.activeRepoIndex === "" ? 0 : this.activeRepoIndex;
                p = this.scmType || "github";
                m = this.isNeedUpdate(a) && p === "bitbucket-server" ? this.orgList.data[d].key : this.orgList.data[d].name;
                this.repoList.isLoading = true;
                v = `${this.isNeedUpdate(a) ? this.getDevopsUrlV2({
                    cluster: a
                }) : this.getDevopsUrlV3({
                    cluster: a
                })}scms/${p}/organizations/${m}/repositories?${getQueryString({
                    ...this.orgParams,
                    pageNumber: o,
                    pageSize: s
                }, false)}`;
                if ((h = await request.get(v, {}, null, function(e, t) {
                    _this.repoList.isLoading = false;
                    _this.repoList.data = [];
                    if (window.onunhandledrejection) {
                        window.onunhandledrejection(t);
                    }
                    return Promise.reject(t);
                })).repositories) {
                    if (module60(module14.toJS(this.repoList.data))) {
                        this.repoList.data = f ? [].concat(module61(this.repoList.data), module61(h.repositories.items)) : module61(h.repositories.items);
                        this.repoList.isEnd = h.repositories.items.length < s;
                        this.repoList.pagination = {
                            pageSize: s,
                            pageNumber: o
                        };
                    } else {
                        this.repoList.data = h.repositories;
                    }
                }
                this.repoList.isLoading = false;
                return this.repoList;
            }
        },
        {
            key: "putAccessName",
            value: async function(t) {
                let secret;
                let r;
                let n;
                let l;
                let o;
                secret = t.secretName;
                r = t.secretNamespace;
                n = t.cluster;
                l = t.token;
                this.isAccessTokenWrong = false;
                if (!(!(o = await this.verifySecretForRepo({
                    secret,
                    secretNamespace: r
                }, {
                    scmType: "github",
                    cluster: n,
                    accessToken: l
                })) || !o.credentialId)) {
                    await this.getOrganizationList({
                        secret,
                        secretNamespace: r,
                        includeUser: true,
                        credentialId: o.credentialId
                    }, "github", n);
                }
            }
        },
        {
            key: "verifySecretForRepo",
            value: async function(t, a) {
                let r;
                let n;
                let l;
                let o;
                let s;
                let i;
                let f;
                r = a.scmType;
                n = a.cluster;
                a.devops;
                l = a.accessToken;
                o = module58(a, [
                    "scmType",
                    "cluster",
                    "devops",
                    "accessToken"
                ]);
                s = r;
                if (/https:\/\/bitbucket.org\/?/gm.test(`${o.apiUrl}`)) {
                    s = "bitbucket_cloud";
                }
                i = `${this.getDevopsUrlV2({
                    cluster: n
                })}scms/${s}/verify/`;
                f = `${this.getDevopsUrlV3({
                    cluster: n
                })}scms/${s}/verify?${getQueryString(t, false)}`;
                return await request.post(this.isNeedUpdate(n) ? i : f, this.isNeedUpdate(n) ? {
                    ...o,
                    accessToken: l
                } : o, null, this.verifyAccessErrorHandle[r]);
            }
        },
        {
            key: "isMultiCluster",
            get: function() {
                return window.parent?.globals.ksConfig.multicluster;
            }
        }
    ]);
    return P;
})(module323);
i = module49(s.prototype, "isAccessTokenWrong", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
f = module49(s.prototype, "credentials", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            isLoading: false,
            data: []
        };
    }
});
d = module49(s.prototype, "orgList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            isLoading: false,
            data: [],
            isEnd: false,
            pagination: {
                pageNumber: 1,
                pageSize: 100
            }
        };
    }
});
p = module49(s.prototype, "repoList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            isLoading: false,
            data: [],
            isEnd: false,
            pagination: {
                pageNumber: 1,
                pageSize: 100
            }
        };
    }
});
m = module49(s.prototype, "activeRepoIndex", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
v = module49(s.prototype, "formData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
h = module49(s.prototype, "creatBitBucketServersError", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
E = module49(s.prototype, "orgParams", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
module49(s.prototype, "getOrganizationList", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "getOrganizationList"), s.prototype);
module49(s.prototype, "handleChangeActiveRepoIndex", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "handleChangeActiveRepoIndex"), s.prototype);
module49(s.prototype, "handleChangeAccessTokenWrong", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "handleChangeAccessTokenWrong"), s.prototype);
module49(s.prototype, "getRepoList", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "getRepoList"), s.prototype);
y = module49(s.prototype, "getCredentials", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            _this.credentials.loading = true;
            await _this.credentialStore.fetchList({
                ...a
            });
            _this.credentials = _this.credentialStore.list;
            _this.credentials.loading = false;
        };
    }
});
g = module49(s.prototype, "creatBitBucketServers", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const a = module44(module41.mark(function a(r) {
                let n;
                let l;
                let o;
                let u;
                let s;
                let password;
                let f;
                let d;
                let p;
                return module41.wrap(function(a) {
                    while(true){
                        switch(a.prev = a.next){
                            case 0:
                                n = r.apiUrl;
                                l = r.cluster;
                                o = r.secretName;
                                u = r.secretNamespace;
                                s = r.username;
                                password = r.password;
                                _this.creatBitBucketServersError = {};
                                _this.tokenFormData = {
                                    username: s,
                                    password,
                                    apiUrl: n,
                                    credentialId: o
                                };
                                if (!module63(parseUrl(n))) {
                                    a.next = 6;
                                    break;
                                }
                                _this.creatBitBucketServersError = {
                                    apiUrl: {
                                        message: module63(n) ? t("BITBUCKET_ADDRESS_EMPTY_TIP") : t("BITBUCKET_ADDRESS_INVALID_TIP")
                                    }
                                };
                                return a.abrupt("return");
                            case 6:
                                if (!_this.isNeedUpdate(l)) {
                                    a.next = 20;
                                    break;
                                }
                                f = {
                                    id: generateId(4)
                                };
                                if (/https:\/\/bitbucket.org\/?/gm.test(`${n}`)) {
                                    a.next = 12;
                                    break;
                                }
                                a.next = 11;
                                return request.post(`${_this.getDevopsUrlV2({
                                    cluster: l
                                })}scms/bitbucket-server/servers`, {
                                    apiUrl: n,
                                    name: o
                                }, null, _this.verifyAccessErrorHandle["bitbucket-server"]);
                            case 11:
                                f = a.sent;
                            case 12:
                                if (f && f.id) {
                                    a.next = 14;
                                    break;
                                }
                                return a.abrupt("return");
                            case 14:
                                a.next = 16;
                                return _this.verifySecretForRepo({}, {
                                    apiUrl: n,
                                    scmType: "bitbucket-server",
                                    cluster: l,
                                    userName: s,
                                    password
                                });
                            case 16:
                                if ((d = a.sent) && d.credentialId) {
                                    _this.orgList.isLoading = false;
                                    _this.getOrganizationList({
                                        credentialId: d.credentialId,
                                        apiUrl: n
                                    }, d.credentialId, l);
                                }
                                a.next = 30;
                                break;
                            case 20:
                                a.next = 22;
                                return _this.verifySecretForRepo({
                                    secret: o,
                                    secretNamespace: u,
                                    server: n
                                }, {
                                    scmType: "bitbucket-server",
                                    cluster: l,
                                    apiUrl: n
                                });
                            case 22:
                                if (!(p = a.sent) || p.code !== 0) {
                                    a.next = 29;
                                    break;
                                }
                                _this.orgList.isLoading = false;
                                a.next = 27;
                                return _this.getOrganizationList({
                                    secret: o,
                                    secretNamespace: u,
                                    server: n
                                }, "bitbucket-server", l);
                            case 27:
                                a.next = 30;
                                break;
                            case 29:
                                if (p && p.code !== 0) {
                                    _this.creatBitBucketServersError = {
                                        apiUrl: {
                                            message: p.message
                                        }
                                    };
                                }
                            case 30:
                            case "end":
                                return a.stop();
                        }
                    }
                }, a);
            }));
            return function(e) {
                return a.apply(this, arguments);
            };
        })();
    }
});
b = module49(s.prototype, "clearBitbucketErrors", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.creatBitBucketServersError = {};
        };
    }
});
S = module49(s.prototype, "resetStore", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.orgList = {
                isLoading: false,
                data: []
            };
            _this.activeRepoIndex = "";
            _this.isAccessTokenWrong = false;
            _this.formData = {};
            _this.tokenFormData = {};
            _this.creatBitBucketServersError = {};
        };
    }
});
_ = module49(s.prototype, "checkCronScript", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ devops, script, pipeline, cluster }) {
            return request.post(`${_this.getDevopsUrlV2({
                cluster,
                devops
            })}checkCron`, {
                cron: script,
                name: pipeline
            });
        };
    }
});
O = module49(s.prototype, "fetchGitLabServerList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            let n;
            let l;
            let o;
            let u;
            r = a.cluster;
            n = a.devops;
            l = `${_this.getDevopsUrlV2({
                cluster: r,
                devops: n
            })}jenkins/gitlab/serverList`;
            o = await request.post(l, {}, {}, function() {
                return [];
            });
            u = [];
            if (o.status === "ok" && module60(o.data)) {
                u = o.data.map((e)=>({
                        label: e.name,
                        value: e.name,
                        url: e.url
                    }));
            }
            return u;
        };
    }
});
C = module49(s.prototype, "fetchGitLabProjectList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            let n;
            let server;
            let owner;
            let u;
            let s;
            let i;
            r = a.cluster;
            n = a.devops;
            server = a.server;
            owner = a.owner;
            u = `${_this.getDevopsUrlV2({
                cluster: r,
                devops: n
            })}jenkins/gitlab/projectList`;
            u += `?${module244.stringify({
                server,
                owner
            })}`;
            s = await request.post(u, {}, {}, function() {
                return [];
            });
            i = [];
            if (s.status === "ok" && module60(s.data)) {
                i = s.data.map((label)=>({
                        label,
                        value: label.split("/").pop()
                    }));
            }
            return i;
        };
    }
});
export default s;
