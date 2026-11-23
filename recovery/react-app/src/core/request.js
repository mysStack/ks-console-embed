import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-86.js";
import "unpacked/module-87.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-24.js";
import "unpacked/module-85.js";
import "unpacked/module-64.js";
import "unpacked/module-75.js";
import "unpacked/module-428.js";
import "unpacked/module-7.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-756.js";
import module244 from "unpacked/module-244.js";
import module76 from "unpacked/module-76.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module199 from "unpacked/module-199.js";
import module63 from "unpacked/module-63.js";
import { getClusterUrl, safeParseJSON, syncLicenseStatusByRequest } from "utils/index";
const h = [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
].reduce((acc, method)=>({
        ...acc,
        ...module31({}, method.toLowerCase(), function(url, params = {}, options, reject) {
            return defaults({
                method,
                url,
                params,
                options,
                reject
            });
        })
    }), {
    defaults,
    watch: function(e, t = {}, n) {
        const xmlHttpRequest = new XMLHttpRequest;
        xmlHttpRequest.open("GET", getClusterUrl(`/${e}?${module244.stringify(t)}`), true);
        xmlHttpRequest.onreadystatechange = function() {
            if (xmlHttpRequest.readyState >= 3 && xmlHttpRequest.status === 200) {
                n(xmlHttpRequest.responseText);
            }
        };
        xmlHttpRequest.send();
        return xmlHttpRequest;
    }
});
function defaults({ method = "GET", url, params = {}, options, reject, handler }) {
    let v = ((url_1)=>{
        if (url_1.startsWith("http")) {
            return url_1;
        }
        return `/${url_1.trimLeft("/")}`;
    })(url);
    const g = module199({
        method,
        mode: "cors",
        credentials: "include",
        headers: {
            "content-type": method === "PATCH" ? "application/merge-patch+json" : "application/json"
        }
    }, options);
    const y = module26(options, "headers[content-type]", "").indexOf("application/x-www-form-urlencoded") !== -1;
    if (method === "GET") {
        if (!module63(params)) {
            v += `?${module244.stringify(params)}`;
        }
    } else if (y) {
        g.body = module244.stringify(params);
    } else {
        if (method === "POST" && params.metadata) {
            module74(params, 'metadata.annotations["kubesphere.io/creator"]', globals.user.username);
            if (module26(params, "spec.template")) {
                module74(params, 'spec.template.metadata.annotations["kubesphere.io/creator"]', globals.user.username);
            }
        }
        g.body = JSON.stringify(params);
    }
    let b = m;
    if (typeof handler === "function") {
        b = handler;
    }
    return fetch(getClusterUrl(v), g).then((e)=>b(e, reject, g));
}
function m(e, t, n = {}) {
    const e_redirected = e.redirected;
    if (e_redirected) {
        window.location.replace(e.url);
        return Promise.reject();
    }
    const a = e.headers.get("content-type");
    const i = e.headers.get("x-qkcp-license-violation");
    syncLicenseStatusByRequest(e.url, i);
    if (a && a.includes("json")) {
        return e.json().then((r)=>{
            if (e.status === 401) {
                console.warn("Unauthorized", e, e.ok);
            }
            if (e.ok && e.status >= 200 && e.status < 400) {
                return r;
            }
            if (e.status === 403 && n.headers?.["x-ignore-error-notify"] === true) {
                return e;
            }
            const a = g(e, r, n);
            if (typeof t === "function") {
                return t(a, e);
            }
            if (window.onunhandledrejection) {
                window.onunhandledrejection(a);
            }
            return Promise.reject(a);
        });
    }
    if (e.status === 200 || e.status === 204) {
        if (n.headers?.["x-with-headers"] === true) {
            return e;
        }
        return e.text();
    }
    return e.text().then((n)=>{
        const r = y(e, n);
        if (typeof t === "function") {
            return t(e, r);
        }
        if (window.onunhandledrejection) {
            const l = e.url?.includes("monitoring.kubesphere.io");
            const s = globals?.ksConfig?.monitoring;
            if (!(l && !s)) {
                window.onunhandledrejection(r);
            }
        }
        return Promise.reject(r);
    });
}
function g(e, t, req) {
    if (t.code < 100) {
        t.code = 500;
    }
    const r = {
        status: e.status,
        reason: e.statusText,
        req,
        data: t
    };
    if (typeof t.code === "number") {
        r.status = t.code;
    }
    if (t.status) {
        r.status = t.status;
    }
    if (t.reason || t.error) {
        r.reason = t.reason || t.error;
    }
    r.message = t.message || t.Error || JSON.stringify(t.details);
    return r;
}
function y(e, message) {
    let n = {
        status: e.status,
        reason: e.statusText,
        message
    };
    const r = safeParseJSON(message);
    if (module76(r) && !module63(r)) {
        n = {
            ...n,
            code: r.code,
            message: r.message,
            errors: r.errors
        };
    }
    return n;
}
export default h;
