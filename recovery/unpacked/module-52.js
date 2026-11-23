import "./module-12.js";
import "./module-135.js";
import "./module-210.js";
import "./module-5.js";
import "./module-187.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-200.js";
import "./module-84.js";
import "./module-86.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-87.js";
import "./module-48.js";
import "./module-97.js";
import "./module-320.js";
import "./module-16.js";
import "./module-27.js";
import "./module-190.js";
import "./module-138.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-140.js";
import "./module-24.js";
import "./module-17.js";
import "./module-110.js";
import "./module-85.js";
import "./module-38.js";
import "./module-62.js";
import "./module-64.js";
import "./module-137.js";
import "./module-75.js";
import "./module-7.js";
import "./module-32.js";
import module31 from "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import "./module-315.js";
import module96 from "./module-96.js";
import "./module-249.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-436.js";
import "./module-319.js";
import "./module-251.js";
import "./module-252.js";
import "./module-193.js";
import module293 from "./module-293.js";
import module199 from "./module-199.js";
import module447 from "./module-447.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module640 from "./module-640.js";
import module459 from "./module-459.js";
import module76 from "./module-76.js";
import module195 from "./module-195.js";
import module159 from "./module-159.js";
import module241 from "./module-241.js";
import module334 from "./module-334.js";
import module655 from "./module-655.js";
import module74 from "./module-74.js";
import module471 from "./module-471.js";
import module660 from "./module-660.js";
import module264 from "./module-264.js";
import module243 from "./module-243.js";
import module662 from "./module-662.js";
import { createElement } from "./module-553.js";
import { LICENSE_AUTHORIZED_SERVICE_MAP, LICENSE_OVERLIMIT_STATUS_MAP, LICENSE_UNAUTHORIZED_STATUS_MAP, MODULE_KIND_MAP, PATTERN_ANNOTATION, PATTERN_LABEL } from "./module-72.js";
import { Netmask } from "./module-478.js";
import module201 from "./module-201.js";
export const flattenObject = function(e) {
    const t = {};
    (function e(n, r) {
        if (Array.isArray(n)) {
            if (n.length > 0) {
                n.forEach((t, n)=>e(t, `${r}[${n}]`));
            } else {
                t[r] = [];
            }
        } else if (module76(n)) {
            if (Object.keys(n).length > 0) {
                Object.entries(n).forEach((t)=>{
                    const n = module96(t, 2);
                    const o = n[0];
                    const a = n[1];
                    const i = /\./g.test(o) ? `['${o}']` : `.${o}`;
                    e(a, r ? `${r}${i}` : o);
                });
            } else {
                t[r] = {};
            }
        } else {
            t[r] = n;
        }
    })(e, "");
    return t;
};
export const htmlLinkControl = function(e) {
    const t = module26(e, q, undefined);
    const n = module26(t.match(/href(="[^"]+")/), "[1]", undefined);
    if (!(module26(globals, "config.showOutSiteLink", true) || module159(t) || module159(n))) {
        module74(e, q, t.replace(n, '" style="pointer-events: none;" target="'));
    }
    return e;
};
export const learnMoreTip = function(e) {
    const t = /<a.+?>(.+)<\/a>/g;
    const n = module26(e, q, undefined);
    if (!module26(globals, "config.showOutSiteLink", true)) {
        if (!module159(n) && t.test(n)) {
            module74(e, q, n.replace(t, ""));
        }
    }
    return e;
};
export const hideGPUByLicense = function(e, t) {
    const n = e;
    const r = globals.app.hasExtensionModuleAnnotation("whizard-monitoring", "monitoring.kubesphere.io/enable-gpu-monitoring");
    const o = globals.app.isMultiCluster && t ? r && globals.app.hasClusterModule(t, "whizard-monitoring") : r;
    const a = Object.prototype.toString.call(n);
    if (o) {
        return n;
    }
    if (a === "[object Array]") {
        return n.filter((e)=>(e.key || e.title || e.name || e.icon || e).toLowerCase().indexOf("gpu") < 0);
    }
    Object.keys(n).filter((e)=>e.indexOf("gpu") > -1).forEach((e)=>delete n[e]);
    return n;
};
export const fireEvent = function(e, t) {
    let n;
    if (e.ownerDocument) {
        n = e.ownerDocument;
    } else {
        if (e.nodeType !== 9) {
            throw new Error(`Invalid node passed to fireEvent: ${e.id}`);
        }
        n = e;
    }
    if (e.dispatchEvent) {
        let r = "";
        switch(t){
            case "click":
            case "mousedown":
            case "mouseup":
                r = "MouseEvents";
                break;
            case "focus":
            case "change":
            case "blur":
            case "select":
                r = "HTMLEvents";
                break;
            default:
                throw new Error(`fireEvent: Couldn't find an event class for event '${t}'.`);
        }
        const o = n.createEvent(r);
        o.initEvent(t, true, true);
        o.synthetic = true;
        e.dispatchEvent(o, true);
    } else if (e.fireEvent) {
        const a = n.createEventObject();
        a.synthetic = true;
        e.fireEvent(`on${t}`, a);
    }
};
export const withDot = function(e) {
    if (e && e[e.length - 1] !== ".") {
        return `${e}.`;
    }
    return e || "";
};
export { showNameAndAlias } from "./module-665.js";
function H(e, t) {
    let n;
    if (typeof Symbol === "undefined" || e[Symbol.iterator] == null) {
        if (Array.isArray(e) || (n = ((e, t)=>{
            if (e) {
                if (typeof e === "string") {
                    return P(e, t);
                }
                let n = Object.prototype.toString.call(e).slice(8, -1);
                if (n === "Object" && e.constructor) {
                    n = e.constructor.name;
                }
                if (n === "Map" || n === "Set") {
                    return Array.from(e);
                }
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                    return P(e, t);
                }
                return undefined;
            }
        })(e)) || t && e && typeof e.length === "number") {
            if (n) {
                e = n;
            }
            let r = 0;
            const o = function() {};
            return {
                s: o,
                n: function() {
                    if (r >= e.length) {
                        return {
                            done: true
                        };
                    }
                    return {
                        done: false,
                        value: e[r++]
                    };
                },
                e: function(e) {
                    throw e;
                },
                f: o
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    let a;
    let i = true;
    let l = false;
    return {
        s: function() {
            n = e[Symbol.iterator]();
        },
        n: function() {
            const e = n.next();
            i = e.done;
            return e;
        },
        e: function(e) {
            l = true;
            a = e;
        },
        f: function() {
            try {
                if (!(i || n.return == null)) {
                    n.return();
                }
            } finally{
                if (l) {
                    throw a;
                }
            }
        }
    };
}
function P(e, t) {
    if (t == null || t > e.length) {
        t = e.length;
    }
    for(var n = 0, r = new Array(t); n < t; n++){
        r[n] = e[n];
    }
    return r;
}
export const formatSize = function(e) {
    const t = [
        "B",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB",
        "BB"
    ];
    let n = 0;
    if (!module459(e)) {
        return e;
    }
    while(e >= 1024 && n < t.length){
        e = parseFloat(e / 1024).toFixed(2);
        n += 1;
    }
    if (n === 0) {
        e = parseInt(e, 10);
    }
    return `${e} ${t[n]}`;
};
export const formatUsedTime = function(e) {
    if (e < 1000) {
        return `${e} ms`;
    }
    if (e <= 60000) {
        return `${parseFloat(e / 1000).toFixed(2)}s`;
    }
    if (e <= 3600000) {
        return `${parseFloat(e / 60000).toFixed(2)} min`;
    }
    return `${parseFloat(e / 3600000).toFixed(2)} h`;
};
export const formaDayTime = function(e) {
    return `${parseFloat(e / 86400000)} `;
};
export const formatDuration = function(e, t = "s") {
    const n = [
        "d",
        "h",
        "m",
        "s",
        "ms"
    ];
    const r = [
        24,
        60,
        60,
        1000,
        1
    ];
    const o = e.match(/^([0-9.]*)(.*)$/);
    const a = module96(o, 3);
    const i = a[1];
    const l = a[2];
    if (module159(i) || module159(l)) {
        return e;
    }
    let s = n.indexOf(l);
    const c = n.indexOf(t);
    let f = parseFloat(i);
    if (s < c) {
        while(s !== c){
            f *= r[s];
            s++;
        }
    } else {
        while(s !== c){
            f /= r[--s];
        }
    }
    return f;
};
export const generateId = function(e) {
    return module662("0123456789abcdefghijklmnopqrstuvwxyz", e || 6);
};
export const joinSelector = function(e = {}) {
    return Object.entries(e).filter((e)=>!module159(e[1]) && !module640(e[1])).map((e)=>{
        const t = module96(e, 2);
        const n = t[0];
        const r = t[1];
        return `${n}=${r}`;
    }).join(",");
};
export const joinFieldSelector = function(e = {}) {
    return Object.entries(e).filter((e)=>!module159(e[1]) && !module640(e[1])).map((e)=>{
        const t = module96(e, 2);
        const n = t[0];
        const r = t[1];
        return `spec.selector.${n.replace(/\./g, "\\.")}=${r}`;
    }).join(",");
};
export const safeParseJSON = function(e, t) {
    let n;
    try {
        n = JSON.parse(e);
    } catch (e) {}
    if (n || t === undefined) {
        return n;
    }
    return t;
};
export const isSystemRole = function(e) {
    return /^system:/.test(e);
};
export const to = function(e) {
    return e.then((e)=>e).catch((e)=>{
        console.warn(e);
        return [];
    });
};
export const getLocalTime = function(e) {
    let t = e;
    if (e && module195(e) && e.indexOf(" +0000 UTC") !== -1) {
        t = e.replace(" +0000 UTC", "Z").replace(" ", "T");
    }
    return module243.utc(t).local();
};
export const capitalize = function(e) {
    return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
};
export const getQueryString = function(e, t = true) {
    return Object.keys(e).filter((t)=>e[t]).map((n)=>`${n}=${t ? encodeURIComponent(e[n]) : e[n]}`).join("&");
};
export const getFilterString = function(e, t = [
    "name",
    "app.kubernetes.io/name",
    "label",
    "annotation"
]) {
    return Object.keys(e).filter((t)=>!module159(e[t]) && e[t] !== "").map((n)=>{
        if (t.includes(n) && !/\|/g.test(e[n])) {
            return `${n}~${module660(e[n])}`;
        }
        return `${n}=${module660(e[n])}`;
    }).join(",");
};
export const isValidLabel = function(e) {
    return Object.entries(e).every((e)=>{
        const t = module96(e, 2);
        const n = t[0];
        const r = t[1];
        return r.length <= 63 && n.length <= (n.indexOf("/") !== -1 ? 253 : 63) && n.replace(/\//g, "").replace(PATTERN_LABEL, "") === "" && r.replace(PATTERN_LABEL, "") === "";
    });
};
export const updateLabels = function(e, t, n) {
    const r = e[MODULE_KIND_MAP[t]] || e;
    module74(r, "metadata.labels", n);
    if ([
        "deployments",
        "daemonsets",
        "statefulsets"
    ].indexOf(t) !== -1) {
        module74(r, "spec.selector.matchLabels", n);
    }
    if (t === "cronjobs") {
        module74(r, "spec.jobTemplate.metadata.labels", n);
    }
    if ([
        "ingresses",
        "persistentvolumeclaims",
        "services"
    ].indexOf(t) === -1) {
        module74(r, "spec.template.metadata.labels", n);
    }
};
export const isValidAnnotation = function(e) {
    return Object.keys(e).every((e)=>e.length <= 63 && e.length <= (e.indexOf("/") !== -1 ? 253 : 63) && PATTERN_ANNOTATION.test(e));
};
export const updateFederatedAnnotations = function(e) {
    const t = module26(e, "metadata.annotations", {});
    const n = module26(e, "spec.overrides", []);
    n.forEach((e)=>{
        e.clusterOverrides = e.clusterOverrides || [];
        const n = e.clusterOverrides.find((e)=>e.path === "/metadata/annotations");
        if (n) {
            n.value = t;
        } else {
            e.clusterOverrides.push({
                path: "/metadata/annotations",
                value: t
            });
        }
    });
    module74(e, "spec.overrides", n);
};
const j = (e, t, n)=>{
    const r = module26(e, t);
    if (r) {
        Object.assign(r, n);
    } else {
        module74(e, t, n);
    }
};
export const mergeLabels = function(e, t) {
    if (e && e.kind) {
        const n = e.kind.startsWith("Federated");
        const r = n ? "spec.template." : "";
        if (n) {
            j(e, "metadata.labels", t);
        }
        switch(e.kind){
            case "Deployment":
            case "DaemonSet":
            case "StatefulSet":
                j(e, `${r}metadata.labels`, t);
                j(e, `${r}spec.selector.matchLabels`, t);
                j(e, `${r}spec.template.metadata.labels`, t);
                break;
            case "Service":
                j(e, `${r}metadata.labels`, t);
                j(e, `${r}spec.selector`, t);
                break;
            default:
                j(e, `${r}metadata.labels`, t);
        }
    }
};
export const withProps = function(e, t) {
    return function(n) {
        return createElement(e, {
            ...t,
            ...n
        });
    };
};
export const composeComponent = function(...t) {
    return function(e) {
        return <>{t.map((T)=><T {...e} key={T.name}/>)}</>;
    };
};
export const cpuFormat = function(e, t = "Core") {
    if (module159(e) || e === null || e === "") {
        return e;
    }
    const n = [
        "m",
        "Core",
        "k",
        "M",
        "G"
    ];
    const r = String(e).slice(-1);
    const o = n.indexOf(r) > -1 ? n.indexOf(r) : 1;
    const a = n.indexOf(t);
    let i = Number(o === 1 ? e : module471(String(e), r));
    i *= 1000 ** (o - a);
    return Number(i.toFixed(3));
};
export const memoryFormat = function(e, t = "Mi") {
    if (module159(e) || e === null || e === "") {
        return e;
    }
    const n = [
        "ki",
        "mi",
        "gi",
        "ti"
    ];
    const r = String(e).toLowerCase().slice(-2);
    let o = n.indexOf(r) > -1 ? n.indexOf(r) : 1;
    const a = n.indexOf(t.toLowerCase());
    let i = Number(module471(String(e).toLowerCase(), r));
    if (/m$/g.test(String(e))) {
        i = Number(module471(String(e), "m")) / 1024000;
        o = 0;
    } else if (/^[0-9.]*$/.test(String(e))) {
        i = Number(e) / 1024;
        o = 0;
    }
    i *= 1024 ** (o - a);
    if (String(i).indexOf(".") > -1) {
        i = Number(i.toFixed(3));
    }
    return i;
};
export const cacheFunc = function(e, t, n) {
    n._funcCaches = n._funcCaches || {};
    if (!n._funcCaches[e]) {
        n._funcCaches[e] = t;
    }
    return n._funcCaches[e];
};
export const getResourceCreator = function(e) {
    return module26(e, 'metadata.annotations["kubesphere.io/creator"]') || module26(e, "metadata.annotations.creator") || "";
};
export const getDescription = function(e) {
    const t = module26(e, 'metadata.annotations["kubesphere.io/description"]') || module26(e, "metadata.annotations.desc") || "";
    try {
        if (t) {
            const r = JSON.parse(t);
            if (module264(r)) {
                return r[module26(globals, "user.lang", "en") === "zh" ? "zh" : "en"]?.toString();
            }
            return r.toString();
        }
    } catch (e) {
        return t;
    }
    return t;
};
export const getAliasName = function(e) {
    return module26(e, 'metadata.annotations["kubesphere.io/alias-name"]') || module26(e, "metadata.annotations.displayName") || "";
};
export const getDisplayNameNew = function(e) {
    const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    if (module63(e)) {
        return "";
    }
    if (e.display_name) {
        return e.display_name;
    }
    if (t === false) {
        if (e.aliasName) {
            return `${e.aliasName}(${e.name})`;
        }
        return e.name;
    }
    const n = typeof t === "number" ? t : 20;
    if (e.aliasName) {
        return <span title={`${e.aliasName}(${e.name})`}>{`${truncateString(e.aliasName, n)}(${truncateString(e.name, 30)})`}</span>;
    }
    return e.name;
};
export const getDisplayName = function(e) {
    if (module63(e)) {
        return "";
    }
    if (e.display_name) {
        return e.display_name;
    }
    if (e.aliasName) {
        return `${e.name}(${e.aliasName})`;
    }
    return e.name;
};
export const getWebSocketProtocol = function(e) {
    if (e.startsWith("https")) {
        return "wss";
    }
    return "ws";
};
export const getWebsiteUrl = function() {
    const e = module201("lang") === "zh" ? "zh" : "en";
    return globals.config.documents[e];
};
export const getConfigSupportLink = function(e) {
    const r = module201("lang") === "zh" ? "zh" : "en";
    return globals.config.supportLinks[e]?.[r] ?? globals.config.supportLinks[e];
};
export const getDocsUrl = function(e) {
    const url = getWebsiteUrl().url;
    const n = module26(globals.config, `resourceDocs[${e}]`, "");
    if (n && globals.config.showOutSiteLink) {
        return `${url}${n}`;
    }
    return "";
};
export const hasChinese = function(e) {
    return /.*[\u4E00-\u9FA5]+.*/.test(e);
};
export const getBrowserLang = function() {
    const e = (navigator.language || navigator.browserLanguage).toLowerCase();
    if (e === "zh-tw") {
        return "tc";
    }
    if (e.indexOf("zh") !== -1) {
        return "zh";
    }
    if (e.indexOf("en") !== -1) {
        return "en";
    }
    return module26(globals, "config.defaultLang", "en");
};
export const toPromise = function(e) {
    return new Promise((resolve)=>{
        e(function() {
            resolve();
        });
    });
};
export const getLanguageName = function(e) {
    if (e) {
        return [
            "nodejs",
            "python",
            "java",
            "ruby",
            "php",
            "go",
            "nginx",
            "binary",
            "jar",
            "war"
        ].find((t)=>e.indexOf(t) !== -1);
    }
    return "";
};
export const parseUrl = function(e) {
    const t = {};
    const n = [
        "href",
        "origin",
        "protocol",
        "host",
        "hostname",
        "port",
        "pathname",
        "search",
        "hash"
    ];
    const r = /(([^:]+:)\/\/(([^:/?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/.exec(e);
    if (r) {
        for(let o = n.length - 1; o >= 0; --o){
            t[n[o]] = r[o] ? r[o] : "";
        }
    }
    return t;
};
export const replaceToLocalOrigin = function(e) {
    const t = module26(parseUrl(e), "pathname", `/${e}`);
    return `${window.location.protocol}//${window.location.host}${t}`;
};
export const withDryRun = async (t)=>{
    let n;
    let r;
    n = t.map((e)=>request.post(`${e.url}?dryRun=All`, e.data));
    await Promise.all(n);
    r = t.map((e)=>request.post(e.url, e.data));
    return Promise.all(r);
};
export const isAppsPage = function(e = location.pathname) {
    return e === "/apps" || e.startsWith("/apps/app-");
};
export const isEdgeWizePage = function() {
    return location.pathname.startsWith("/v2/edgewize") || location.pathname.includes("/v2/edgewize");
};
export const isMemberClusterPage = function(e = location.pathname, t) {
    const n = module26(/\/clusters\/?([-0-9a-z]*)\/?/.exec(e), "1", "host");
    const r = [
        "token used before issued",
        "signature is invalid",
        "token not found in cache"
    ];
    const o = t.toLowerCase();
    let a = true;
    r.forEach((e)=>{
        if (o.indexOf(e) > -1) {
            a = false;
        }
    });
    return n !== "host" && !a;
};
export const getClusterUrl = function(e) {
    let t = e;
    const n = new RegExp(/\/(api|apis|kapis)\/(.*)\/?(klusters\/[^/]*)\/(.*)/);
    const r = t.match(n);
    if (r && r.length === 5) {
        t = globals.app.isMultiCluster ? `/${r[1]}/${r[3].replace("klusters", "clusters")}/${r[2]}/${r[4]}` : `/${r[1]}/${r[2]}/${r[4]}`;
    }
    t.replace(/\/\/+/, "/");
    const o = new RegExp(/\/(api|apis|kapis)\/(clusters\/[^/]*)\/(.*)/);
    const a = t.match(o);
    if (a && a.length === 4 && a[1].indexOf("monitoring.kubesphere.io") < 0) {
        t = `/${a[2]}/${a[1]}/${a[3]}`;
    }
    return t.replace(/\/\/+/, "/");
};
export const parseDockerImage = function(e) {
    const t = e.match(/^(?:([^/]+)\/)?(?:([^/]+)\/)?([^@:/]+)(?:[@:](.+))?$/);
    if (!t) {
        return {};
    }
    let n = t[1];
    let r = t[2];
    const repository = t[3];
    const a = t[4];
    if (!(r || !n || /[:.]/.test(n))) {
        r = n;
        n = null;
    }
    return {
        registry: n || null,
        namespace: r || null,
        repository,
        tag: a || null
    };
};
export const lazy = function(e) {
    return function() {
        return e();
    };
};
export const compareVersion = function(e = "", t = "") {
    const n = (e)=>e.split("-")[0].replace("v", "").split(".").map((e)=>parseInt(e, 10));
    const r = n(e);
    const o = n(t);
    for(let a = Math.min(r.length, o.length), i = 0; i < a;){
        if (r[i] < o[i]) {
            return -1;
        }
        if (r[i] > o[i]) {
            return 1;
        }
        i++;
    }
    if (r.length < o.length) {
        return -1;
    }
    if (r.length > o.length) {
        return 1;
    }
    return 0;
};
export const cancel_Num_Dot = function(e, t) {
    const n = [
        "ki",
        "mi",
        "gi",
        "ti"
    ];
    Object.keys(e).forEach((e)=>{
        const r = t[e];
        if (module640(r)) {
            t[e] = "";
        }
        if (module195(r)) {
            if (r.slice(-1) === ".") {
                t[e] = r.slice(0, -1);
            }
            const o = r.slice(-2).toLowerCase();
            if (r.slice(-3, -2) === "." && n.indexOf(o) > -1) {
                t[e] = `${r.slice(0, -3)}${r.slice(-2)}`;
            }
        }
    });
};
export const cancelContainerDot = function(e) {
    if (!module63(module26(e, "resources", {}))) {
        const t = module241(e.resources, [
            "requests",
            "limits"
        ]);
        Object.keys(t).forEach((n)=>{
            cancel_Num_Dot(t[n], e.resources[n]);
        });
    }
};
export const LimitsEqualRequests = function(e) {
    if (e.length > 0) {
        const t = module26(e, "[0].limit.default", {});
        const n = module26(e, "[0].limit.defaultRequest", {});
        const r = (e)=>module26(t, e, 0);
        const o = (e)=>module26(n, e, 1);
        if (r("cpu") === o("cpu")) {
            module74(e[0].limit, "defaultRequest.cpu", undefined);
        }
        if (r("memory") === o("memory")) {
            module74(e[0].limit, "defaultRequest.memory", undefined);
        }
    }
};
export const limits_Request_EndsWith_Dot = function({ limits, requests }) {
    const r = [];
    [
        limits,
        requests
    ].forEach((e, t)=>{
        const n = {};
        if (!module159(module26(e, "cpu", undefined)) && e.cpu.endsWith(".")) {
            module74(n, "cpu", module471(e.cpu, "."));
        }
        if (!module159(module26(e, "memory", undefined)) && e.memory.slice(0, e.memory.length - 2).endsWith(".")) {
            module74(n, "memory", module655(e.memory, ".", ""));
        }
        r[t] = module199(e, n);
    });
    return {
        limits: r[0],
        requests: r[1]
    };
};
export const multiCluster_overrides_Dot = function(e) {
    e.forEach((e)=>{
        e.clusterOverrides.forEach((e)=>{
            if (e.path.endsWith("resources")) {
                Object.keys(e.value).forEach((t)=>{
                    cancel_Num_Dot(e.value[t], e.value[t]);
                });
            }
        });
    });
};
export const resourceLimitKey = [
    "limits.cpu",
    "limits.memory",
    "requests.cpu",
    "requests.memory"
];
const Z = {
    ReadWriteOnce: "RWO",
    ReadOnlyMany: "ROX",
    ReadWriteMany: "RWX"
};
export const gpuLimitsArr = function(e) {
    const supportGpuType = globals.config.supportGpuType;
    const n = module334(e, function(e, n) {
        return supportGpuType.some((e)=>module447(n, e));
    });
    return Object.keys(n).map((e)=>module31({}, e, n[e]));
};
export const map_accessModes = function(e) {
    return e.map((e)=>Z[e]);
};
export const quota_limits_requests_Dot = function(e) {
    const t = module241(e, resourceLimitKey);
    cancel_Num_Dot(t, e);
};
export const hrefControl = function(e) {
    if (globals.config.showOutSiteLink) {
        return e;
    }
    return "";
};
var q = "props.dangerouslySetInnerHTML.__html";
export const isAppIsRadonDBAndAuthorized = function(e = {}) {
    const isRadondb = module26(e, "category_set[0].category_id") === "radondb";
    const n = isRadondb ? module660(e.name.replace(`${e.owner}`, "")) : e.name;
    const r = module26(globals, "licenseInfo.componentConstraints", []).map((e)=>e.name || "");
    const o = module26(globals, "licenseInfo.isExpired", false);
    const a = module26(globals, "licenseInfo.isUnAuthorized", false);
    const i = module26(globals, "licenseInfo.isOverLimit", false);
    const l = o || a || i || r.length < 0 || !r.includes(LICENSE_AUTHORIZED_SERVICE_MAP[n]);
    return {
        isRadondb,
        isSupport: !l
    };
};
export const isHasRadonDBAuthorized = function(e) {
    const n = e?.map(function(e) {
        return e.name || "";
    }) ?? module26(globals, "licenseInfo.componentConstraints", []).map((e)=>e.name || "");
    const r = module26(globals, "licenseInfo.isExpired", false);
    const o = module26(globals, "licenseInfo.isUnAuthorized", false);
    const a = module26(globals, "licenseInfo.isOverLimit", false);
    return !(r || o || a || n.length < 0 || !n.some((e)=>e.toLowerCase().startsWith("radondb")));
};
export const checkComponentAuthorized = function() {
    return true;
};
export const _checkComponentAuthorized = function({ componentConstraints, componentName }) {
    const o = componentConstraints?.map(function(e) {
        return e.name || "";
    }) ?? module26(globals, "licenseInfo.componentConstraints", []).map((e)=>e.name || "");
    const a = module26(globals, "licenseInfo.isExpired", false);
    const i = module26(globals, "licenseInfo.isUnAuthorized", false);
    const l = module26(globals, "licenseInfo.isOverLimit", false);
    return !(a || i || l || o.length < 0 || !o.includes(componentName));
};
export const syncLicenseStatusByRequest = function(e, t) {
    let n = false;
    const { isUnAuthorized = false, isExpired = false, isOverLimit = false, unExpired = false, licenseType = "" } = globals.licenseInfo || {};
    if (LICENSE_UNAUTHORIZED_STATUS_MAP.includes(t) && !isUnAuthorized) {
        n = true;
    } else if (t !== "Time expired" || licenseType !== "subscription" || isExpired) {
        if (LICENSE_OVERLIMIT_STATUS_MAP.includes(t) && !isOverLimit) {
            n = true;
        } else if (!(unExpired || t || !(isUnAuthorized || isExpired || isOverLimit))) {
            n = true;
        }
    } else {
        n = true;
    }
    if (n) {
        window.triggerEvent.trigger("licenseViolation", "needUpdated");
    }
};
export const coreUnitTS = function(e, n) {
    let r = n || "";
    if (n === "core") {
        r = e !== 1 ? t("CORE_PL") : t("CORE");
    }
    return r;
};
export const inCluster2Default = function(e) {
    const t = getHostClusterName() || "default";
    if (e === "in-cluster") {
        return t;
    }
    return e;
};
export var getHostClusterName = function() {
    return module26(globals, "ksConfig.multicluster.hostClusterName", "");
};
export function truncateString(e, t = 20) {
    let n = 0;
    for(let r = 0; r < e.length; r++){
        if (e.charCodeAt(r) > 255) {
            n += 2;
        } else {
            n += 1;
        }
        if (n > t) {
            return `${e.slice(0, r)}...`;
        }
    }
    return e;
}
export const encrypt = function(e, t) {
    return ((e, t)=>{
        if (t.length > e.length) {
            e += t.slice(0, t.length - e.length);
        }
        const n = [];
        const r = [];
        for(let o = 0, a = e.length; o < a; o++){
            const i = t.length > o ? t.charCodeAt(o) : 64;
            const l = e.charCodeAt(o) + i;
            r.push(l % 2 == 0 ? "0" : "1");
            n.push(String.fromCharCode(Math.floor(l / 2)));
        }
        return `${module293.Base64.encode(r.join(""))}@${n.join("")}`;
    })(e, module293.Base64.encode(t));
};
export const capitalizeSimple = function(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
};
export const transformEmptyFn = function(e) {
    return function(t) {
        if (module26(t, e) === "") {
            module74(t, e, undefined);
        }
        return t;
    };
};
export const getTransformData = function(...t_1) {
    return function(e) {
        return t_1.reduce((acc, item)=>item(acc), e);
    };
};
export const getDomTitle = function(title) {
    if (typeof title !== "string") {
        return title;
    }
    return <span title={title}>{title}</span>;
};
export const getClusterVersion = function(e) {
    if (globals.app.isMultiCluster) {
        return module26(globals, `clusterConfig.${e}.ksVersion`);
    }
    return module26(globals, "ksConfig.ksVersion");
};
export const getUnitValue = function(e = 0, t = []) {
    if (!e) {
        return t.find((e)=>e.value === 1);
    }
    const n = t.sort((e, t)=>t.value - e.value);
    return n.find((t)=>e % t.value == 0);
};
export const getUnitValueString = function(e = 0, n = []) {
    if (isNaN(Number(e))) {
        return e;
    }
    const r = getUnitValue(e, n);
    if (r) {
        return `${e / r.value} ${t(r.label)}`;
    }
    return `${e}`;
};
export const cidrOverlap = function(e, t) {
    let n;
    const r = e.map((e)=>({
            ...e,
            obj: new Netmask(e.cidr)
        }));
    const o = H(t);
    try {
        for(o.s(); !(n = o.n()).done;){
            const a = n.value;
            if (a.cidr) {
                let i;
                const l = new Netmask(a.cidr);
                const s = H(r);
                try {
                    for(s.s(); !(i = s.n()).done;){
                        const u = i.value;
                        if (l.contains(u.cidr) || u.obj.contains(a.cidr)) {
                            return [
                                u.name,
                                a.name
                            ];
                        }
                    }
                } catch (error) {
                    s.e(error);
                } finally{
                    s.f();
                }
            }
        }
    } catch (error) {
        o.e(error);
    } finally{
        o.f();
    }
    return null;
};
export const removeV4DashboardHistory = function(e, t, r = "history-cache-v4") {
    const o = (e)=>{
        const t = localStorage.getItem(e);
        if (!t) {
            return {};
        }
        try {
            return JSON.parse(t);
        } catch (e) {
            return {};
        }
    };
    const i = o(r)[e] ?? [];
    const l = i.filter((e)=>{
        if (Array.isArray(t)) {
            return !t.includes(e.id);
        }
        return e.id !== t;
    });
    if (l.length !== i.length) {
        localStorage.setItem(r, JSON.stringify({
            ...o(r),
            ...module31({}, e, l)
        }));
    }
};
