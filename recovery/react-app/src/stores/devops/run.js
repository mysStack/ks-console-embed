import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-137.js";
import "unpacked/module-75.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-118.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-319.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module41 from "unpacked/module-41.js";
import module58 from "unpacked/module-58.js";
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
import module189 from "unpacked/module-189.js";
import module60 from "unpacked/module-60.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module910 from "unpacked/module-910.js";
import module14 from "unpacked/module-14.js";
import module240 from "unpacked/module-240.js";
import { getClusterUrl, safeParseJSON } from "utils/index";
import module323 from "stores/devops";
import module960 from "stores/devops/pipelines";
let s;
let u;
let c;
let d;
let f;
let p;
let h;
let m;
let v;
let g;
let y;
let b;
let E;
let S;
function J(e) {
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
        const n = module51(e);
        if (t) {
            const a = module51(this).constructor;
            r = Reflect.construct(n, arguments, a);
        } else {
            r = n.apply(this, arguments);
        }
        return module56(this, r);
    };
}
s = ((e)=>{
    module55(z, e);
    let R;
    let C;
    let F;
    var Y = J(z);
    function z() {
        let e;
        module36(this, z);
        e = Y.call(this);
        module65(e, "detail", u, module88(e));
        module65(e, "devops", c, module88(e));
        module65(e, "commitsList", d, module88(e));
        module65(e, "artifactsList", f, module88(e));
        module65(e, "isLoading", p, module88(e));
        module65(e, "getNodesStatusLoading", h, module88(e));
        module65(e, "nodesStatus", m, module88(e));
        module65(e, "runDetail", v, module88(e));
        module65(e, "runStartDetailLogs", g, module88(e));
        module65(e, "logSize", y, module88(e));
        module65(e, "overflow", b, module88(e));
        module65(e, "hasMore", E, module88(e));
        e.hasMoreNotify = false;
        module65(e, "lastDetailLogs", S, module88(e));
        e.saveAsFile = function(e = "", t = "default.txt") {
            const r = new Blob([
                e
            ], {
                type: "text/plain;charset=utf-8"
            });
            module910.saveAs(r, t);
        };
        e.pipelineStore = new module960;
        return e;
    }
    module37(z, [
        {
            key: "getUrl",
            value: function({ cluster, devops, name }) {
                return `${this.getDevopsUrlV2({
                    cluster,
                    devops
                })}pipelines/${decodeURIComponent(name)}/`;
            }
        },
        {
            key: "getRunUrl",
            value: function({ cluster, devops, name, branch, runId }) {
                return `${this.getUrl({
                    cluster,
                    devops,
                    name
                })}${branch ? `branches/${encodeURIComponent(branch)}/` : ""}runs/${runId}/`;
            }
        },
        {
            key: "getCommits",
            value: (F = module44(module41.mark(function e(t) {
                let r;
                let n;
                let runName;
                let o;
                let s;
                let u;
                let c;
                let f;
                let p;
                let h;
                let m;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                r = t.name;
                                n = t.branch;
                                runName = t.runName;
                                o = t.devops;
                                t.workspace;
                                s = t.cluster;
                                u = module58(t, [
                                    "name",
                                    "branch",
                                    "runName",
                                    "devops",
                                    "workspace",
                                    "cluster"
                                ]);
                                r = decodeURIComponent(r);
                                ({ page: c, limit: f = 10 } = u);
                                if (this.runDetail.id) {
                                    e.next = 6;
                                    break;
                                }
                                e.next = 6;
                                return this.getRunDetail({
                                    devops: o,
                                    cluster: s,
                                    runName
                                });
                            case 6:
                                this.commitsList.isLoading = true;
                                e.next = 9;
                                return request.get(`${this.getRunUrl({
                                    cluster: s,
                                    devops: o,
                                    name: r,
                                    branch: n,
                                    runId: this.runDetail.id
                                })}`, {
                                    start: (c - 1) * f || 0,
                                    limit: f
                                });
                            case 9:
                                p = e.sent;
                                h = [];
                                if (p.changeSet && module60(p.changeSet)) {
                                    h = p.changeSet.map((e)=>({
                                            commitId: module26(e, "commitId"),
                                            startTime: module26(e, "timestamp"),
                                            url: module26(e, "url"),
                                            author: module26(e, "author.fullName"),
                                            title: module26(e, "msg")
                                        }));
                                } else if (p.pullRequest) {
                                    m = {
                                        commitId: module26(p, "commitId"),
                                        startTime: module26(p, "startTime"),
                                        url: module26(p, "pullRequest.url"),
                                        author: module26(p, "pullRequest.author"),
                                        title: module26(p, "pullRequest.title")
                                    };
                                    h.push(m);
                                }
                                this.commitsList = {
                                    data: h,
                                    limit: f,
                                    total: h.length,
                                    page: parseInt(c, 10) || 1,
                                    filters: module189(u, "devops"),
                                    isLoading: false,
                                    selectedRowKeys: []
                                };
                            case 13:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return F.apply(this, arguments);
            })
        },
        {
            key: "getArtifacts",
            value: (C = module44(module41.mark(function e(t) {
                let r;
                let n;
                let a;
                let o;
                let s;
                let u;
                let c;
                let f;
                let p;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                r = t.devops;
                                n = t.name;
                                a = t.runName;
                                o = t.branch;
                                s = t.cluster;
                                t.workspace;
                                u = module58(t, [
                                    "devops",
                                    "name",
                                    "runName",
                                    "branch",
                                    "cluster",
                                    "workspace"
                                ]);
                                n = decodeURIComponent(n);
                                ({ page: c, limit: f = 10 } = u);
                                if (this.runDetail.id) {
                                    e.next = 6;
                                    break;
                                }
                                e.next = 6;
                                return this.getRunDetail({
                                    devops: r,
                                    cluster: s,
                                    runName: a
                                });
                            case 6:
                                this.artifactsList.isLoading = true;
                                e.next = 9;
                                return request.get(`${this.getRunUrl({
                                    cluster: s,
                                    devops: r,
                                    name: n,
                                    branch: o,
                                    runId: this.runDetail.id
                                })}artifacts/`, {
                                    start: (c - 1) * f || 0,
                                    limit: f
                                });
                            case 9:
                                p = e.sent;
                                this.artifactsList = {
                                    data: p || [],
                                    pipeline: n,
                                    pipelineRun: a,
                                    total: p.length,
                                    limit: f,
                                    page: parseInt(c, 10) || 1,
                                    filters: module189(u, "devops"),
                                    isLoading: false,
                                    selectedRowKeys: []
                                };
                            case 11:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return C.apply(this, arguments);
            })
        },
        {
            key: "getNodesStatus",
            value: (R = module44(module41.mark(function e(t) {
                let r;
                let n;
                let a;
                let o;
                let l;
                let s;
                const _this = this;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                r = t.devops;
                                n = t.name;
                                a = t.branch;
                                o = t.cluster;
                                n = decodeURIComponent(n);
                                this.getNodesStatusLoading = true;
                                e.next = 5;
                                return request.get(`${this.getBaseUrl({
                                    cluster: o,
                                    namespace: r
                                })}pipelineruns/${this.runDetail.name}/nodedetails`);
                            case 5:
                                l = e.sent;
                                if (module60(l)) {
                                    e.next = 9;
                                    break;
                                }
                                this.getNodesStatusLoading = false;
                                return e.abrupt("return");
                            case 9:
                                s = !module63(l);
                                this.nodesStatus = s ? l.reduce((acc, item, index)=>{
                                    item.causeOfBlockage = _this.runDetail.causeOfBlockage;
                                    if (item.type === "STAGE") {
                                        if (l[index + 1] && l[index + 1].type === "PARALLEL") {
                                            acc.push([]);
                                            return acc;
                                        }
                                        acc.push(item);
                                    } else {
                                        if (Array.isArray(acc[acc.length - 1])) {
                                            acc[acc.length - 1].push(item);
                                        } else {
                                            acc.push([
                                                item
                                            ]);
                                        }
                                    }
                                    return acc;
                                }, []) : [];
                                if (!l || l.length < 1) {
                                    this.getRunStatusLogs({
                                        devops: r,
                                        name: n,
                                        branch: a,
                                        runId: this.runDetail.id,
                                        cluster: o
                                    });
                                }
                                this.getNodesStatusLoading = false;
                            case 13:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return R.apply(this, arguments);
            })
        },
        {
            key: "getRunDetail",
            value: async function(t) {
                let namespace;
                let n;
                let a;
                let _originData;
                const _this = this;
                namespace = t.devops;
                n = t.cluster;
                a = t.runName;
                _originData = await request.get(`${this.getBaseUrl({
                    cluster: n,
                    namespace
                })}pipelineruns/${a}`, null, null, async (r)=>{
                    let n;
                    if (!(r.status !== 404)) {
                        n = await _this.pipelineStore.fetchDetail(t);
                        _this.runDetail = n.latestRun || {};
                        return module14.toJS(_this.runDetail);
                    }
                });
                this.runDetail = {
                    ...safeParseJSON(module26(_originData, "metadata.annotations.['devops.kubesphere.io/jenkins-pipelinerun-status']")),
                    name: module26(_originData, "metadata.name"),
                    _originData
                };
                this.isLoading = false;
            }
        },
        {
            key: "replay",
            value: async function(t, r) {
                let n;
                let a;
                let o;
                let l;
                n = t.devops;
                a = t.name;
                o = t.branch;
                l = t.cluster;
                return await request.post(`${this.getRunUrl({
                    cluster: l,
                    devops: n,
                    name: a,
                    branch: o,
                    runId: r || this.runDetail.id
                })}replay`);
            }
        },
        {
            key: "getRunStatusLogs",
            value: async function(t) {
                let r;
                let n;
                let a;
                let runId;
                let l;
                let s;
                let u;
                let c;
                let d;
                let f;
                const _this = this;
                const h = arguments;
                r = t.devops;
                n = t.name;
                a = t.branch;
                runId = t.runId;
                l = t.cluster;
                if (h.length > 1 && h[1] !== undefined && h[1]) {
                    this.logSize = 0;
                    this.runStartDetailLogs = "";
                    this.hasMore = false;
                }
                if (this.overflow) {
                    s = await request.get(`${this.getRunUrl({
                        cluster: l,
                        devops: r,
                        name: n,
                        branch: a,
                        runId
                    })}log/?thresholdInKB=150`);
                    this.hasMore = true;
                    this.lastDetailLogs = `

*****************************************************************
* The log is too large, please download it to view the details. *
*                                                               *
* The following is the latest 150KB log.                        *
*****************************************************************

${s}`;
                } else {
                    u = this.logSize;
                    c = u ? `?start=${u}` : "";
                    d = await request.get(`${this.getRunUrl({
                        cluster: l,
                        devops: r,
                        name: n,
                        branch: a,
                        runId
                    })}log/${c}`, {}, {
                        headers: {
                            "x-with-headers": true
                        }
                    });
                    if (f = d.headers.get("x-text-size")) {
                        this.logSize = Number(f);
                        this.hasMore = Boolean(d.headers.get("x-more-data"));
                    } else {
                        this.logSize += Number(d.headers.get("x-text-size"));
                        this.hasMore = Boolean(d.headers.get("x-more-data"));
                    }
                    this.overflow = Boolean(d.headers.get("X-File-Size-Limit-Out")) || this.logSize >= 10485760;
                    d.text().then((e)=>{
                        if (u !== 0) {
                            const t = _this.runStartDetailLogs.slice(-100).split("\n");
                            if (t.length >= 2) {
                                t.pop();
                                if (!(t.length && t.pop().startsWith("Finished:"))) {
                                    _this.runStartDetailLogs += e;
                                }
                            } else {
                                _this.runStartDetailLogs += e;
                            }
                        } else {
                            _this.runStartDetailLogs = e;
                        }
                    });
                }
            }
        },
        {
            key: "handleJumpFullLogs",
            value: function({ devops, name, branch, cluster }) {
                name = decodeURIComponent(name);
                const o = getClusterUrl(`${window.location.protocol}//${window.location.host}/${this.getRunUrl({
                    cluster,
                    devops,
                    name,
                    branch,
                    runId: this.runDetail.id
                })}log/?start=0`);
                window.open(o);
            }
        },
        {
            key: "handleDownloadLogs",
            value: async function(t) {
                let r;
                let n;
                let a;
                let o;
                let l;
                let s;
                r = t.devops;
                n = t.name;
                a = t.branch;
                o = t.cluster;
                n = decodeURIComponent(n);
                l = getClusterUrl(`${window.location.protocol}//${window.location.host}/${this.getRunUrl({
                    cluster: o,
                    devops: r,
                    name: n,
                    branch: a,
                    runId: this.runDetail.id
                })}log/?start=0&download=true`);
                s = document.createElement("a");
                s.href = l;
                s.download = `${n}-${this.runDetail.id}-${this.runDetail.name}.log`;
                s.headers = {
                    "x-add-res-header": JSON.stringify({
                        "Content-Disposition": `attachment; filename=${n}-${this.runDetail.name}.log`
                    })
                };
                s.click();
            }
        },
        {
            key: "handleProceed",
            value: async function(r) {
                let parameters;
                let a;
                let o;
                let l;
                let s;
                let u;
                let c;
                let d;
                parameters = r.parameters;
                a = r.devops;
                o = r.name;
                l = r.nodeId;
                s = r.branch;
                u = r.cluster;
                c = r.stepId;
                d = r.inputId;
                return await request.post(`${this.getRunUrl({
                    cluster: u,
                    devops: a,
                    name: o,
                    branch: s,
                    runId: this.runDetail.id
                })}nodes/${l}/steps/${c}/`, {
                    id: d,
                    parameters
                }, null, function(e) {
                    if (e.status === 400) {
                        module240.error({
                            content: t("Sorry, you don't have the permission to do this.")
                        });
                        return true;
                    }
                });
            }
        },
        {
            key: "handleBreak",
            value: async function(t) {
                let r;
                let n;
                let a;
                let o;
                let l;
                let s;
                let u;
                r = t.devops;
                n = t.name;
                a = t.nodeId;
                o = t.branch;
                l = t.stepId;
                s = t.inputId;
                u = t.cluster;
                return await request.post(`${this.getRunUrl({
                    cluster: u,
                    devops: r,
                    name: n,
                    branch: o,
                    runId: this.runDetail.id
                })}nodes/${a}/steps/${l}/`, {
                    id: s,
                    abort: true
                });
            }
        },
        {
            key: "runDetailLogs",
            get: function() {
                return this.runStartDetailLogs + this.lastDetailLogs;
            }
        }
    ]);
    return z;
})(module323);
u = module49(s.prototype, "detail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
c = module49(s.prototype, "devops", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
d = module49(s.prototype, "commitsList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            page: 1,
            limit: 10,
            total: 0,
            order: "",
            reverse: false,
            filters: {},
            isLoading: true
        };
    }
});
f = module49(s.prototype, "artifactsList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            page: 1,
            limit: 10,
            total: 0,
            order: "",
            reverse: false,
            filters: {},
            isLoading: true
        };
    }
});
p = module49(s.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
h = module49(s.prototype, "getNodesStatusLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
m = module49(s.prototype, "nodesStatus", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
v = module49(s.prototype, "runDetail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
g = module49(s.prototype, "runStartDetailLogs", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
y = module49(s.prototype, "logSize", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
b = module49(s.prototype, "overflow", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
E = module49(s.prototype, "hasMore", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
S = module49(s.prototype, "lastDetailLogs", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
module49(s.prototype, "runDetailLogs", [
    module14.computed
], Object.getOwnPropertyDescriptor(s.prototype, "runDetailLogs"), s.prototype);
module49(s.prototype, "getCommits", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "getCommits"), s.prototype);
module49(s.prototype, "getArtifacts", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "getArtifacts"), s.prototype);
module49(s.prototype, "getNodesStatus", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "getNodesStatus"), s.prototype);
module49(s.prototype, "getRunDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "getRunDetail"), s.prototype);
module49(s.prototype, "getRunStatusLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "getRunStatusLogs"), s.prototype);
export default s;
