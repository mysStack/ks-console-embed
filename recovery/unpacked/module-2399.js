import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-10.js";
import "./module-7.js";
import "./module-249.js";
import "./module-45.js";
import "./module-4.js";
import { getClusterUrl } from "./module-52.js";
export default function(e) {
    const t = new window.XMLHttpRequest;
    if (e.onProgress && t.upload) {
        t.upload.onprogress = function(t) {
            if (t.total > 0) {
                t.percent = t.loaded / t.total * 100;
            }
            e.onProgress(t);
        };
    }
    const formData = new FormData;
    e.action = getClusterUrl(e.action);
    if (e.data) {
        Object.keys(e.data).forEach((t)=>{
            formData.append(t, e.data[t]);
        });
    }
    formData.append(e.filename, e.file);
    t.onerror = function(t) {
        e.onError(t);
    };
    t.onload = function() {
        if (t.status < 200 || t.status >= 300) {
            return e.onError(((e, t)=>{
                const a = `cannot post ${e.action} ${t.status}'`;
                const r = new Error(a);
                r.status = t.status;
                r.method = e.method || "post";
                r.url = e.action;
                return r;
            })(e, t), n(t));
        }
        return e.onSuccess(n(t), t);
    };
    t.open(e.method || "post", e.action, true);
    if (e.withCredentials && "withCredentials" in t) {
        t.withCredentials = true;
    }
    const l = e.headers || {};
    if (l["X-Requested-With"] !== null) {
        t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    }
    Object.keys(l).forEach((e)=>{
        t.setRequestHeader(e, l[e]);
    });
    t.send(formData);
    return {
        abort: function() {
            t.abort();
        }
    };
};
function n(e) {
    const t = e.responseText || e.response;
    if (!t) {
        return t;
    }
    try {
        return JSON.parse(t);
    } catch (e) {
        return t;
    }
}
