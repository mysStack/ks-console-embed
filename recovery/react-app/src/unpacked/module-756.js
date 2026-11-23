var r = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || r !== undefined && r;
const o = "URLSearchParams" in r;
const a = "Symbol" in r && "iterator" in Symbol;
const i = "FileReader" in r && "Blob" in r && (()=>{
    try {
        new Blob;
        return true;
    } catch (e) {
        return false;
    }
})();
const l = "FormData" in r;
const s = "ArrayBuffer" in r;
if (s) {
    const u = [
        "[object Int8Array]",
        "[object Uint8Array]",
        "[object Uint8ClampedArray]",
        "[object Int16Array]",
        "[object Uint16Array]",
        "[object Int32Array]",
        "[object Uint32Array]",
        "[object Float32Array]",
        "[object Float64Array]"
    ];
    var c = ArrayBuffer.isView || ((e)=>e && u.indexOf(Object.prototype.toString.call(e)) > -1);
}
function f(e) {
    if (typeof e !== "string") {
        e = String(e);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "") {
        throw new TypeError("Invalid character in header field name");
    }
    return e.toLowerCase();
}
function d(e) {
    if (typeof e !== "string") {
        e = String(e);
    }
    return e;
}
function p(e) {
    const t = {
        next: function() {
            const t = e.shift();
            return {
                done: t === undefined,
                value: t
            };
        }
    };
    if (a) {
        t[Symbol.iterator] = function() {
            return t;
        };
    }
    return t;
}
export class Headers {
    constructor(e){
        this.map = {};
        if (e instanceof Headers) {
            e.forEach(function(e, t) {
                this.append(t, e);
            }, this);
        } else if (Array.isArray(e)) {
            e.forEach(function(e) {
                this.append(e[0], e[1]);
            }, this);
        } else if (e) {
            Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t]);
            }, this);
        }
    }
    append(e, t) {
        e = f(e);
        t = d(t);
        const n = this.map[e];
        this.map[e] = n ? `${n}, ${t}` : t;
    }
    delete(e) {
        delete this.map[f(e)];
    }
    get(e) {
        e = f(e);
        if (this.has(e)) {
            return this.map[e];
        }
        return null;
    }
    has(e) {
        return this.map.hasOwnProperty(f(e));
    }
    set(e, t) {
        this.map[f(e)] = d(t);
    }
    forEach(e, t) {
        for(const n in this.map){
            if (this.map.hasOwnProperty(n)) {
                e.call(t, this.map[n], n, this);
            }
        }
    }
    keys() {
        const e = [];
        this.forEach((t, n)=>{
            e.push(n);
        });
        return p(e);
    }
    values() {
        const e = [];
        this.forEach((t)=>{
            e.push(t);
        });
        return p(e);
    }
    entries() {
        const e = [];
        this.forEach((t, n)=>{
            e.push([
                n,
                t
            ]);
        });
        return p(e);
    }
}
function v(e) {
    if (e.bodyUsed) {
        return Promise.reject(new TypeError("Already read"));
    }
    e.bodyUsed = true;
}
function m(e) {
    return new Promise((resolve, reject)=>{
        e.onload = function() {
            resolve(e.result);
        };
        e.onerror = function() {
            reject(e.error);
        };
    });
}
function g(e) {
    const fileReader = new FileReader;
    const n = m(fileReader);
    fileReader.readAsArrayBuffer(e);
    return n;
}
function y(e) {
    if (e.slice) {
        return e.slice(0);
    }
    const t = new Uint8Array(e.byteLength);
    t.set(new Uint8Array(e));
    return t.buffer;
}
function b() {
    this.bodyUsed = false;
    this._initBody = function(e) {
        let t;
        this.bodyUsed = this.bodyUsed;
        this._bodyInit = e;
        if (e) {
            if (typeof e === "string") {
                this._bodyText = e;
            } else if (i && Blob.prototype.isPrototypeOf(e)) {
                this._bodyBlob = e;
            } else if (l && FormData.prototype.isPrototypeOf(e)) {
                this._bodyFormData = e;
            } else if (o && URLSearchParams.prototype.isPrototypeOf(e)) {
                this._bodyText = e.toString();
            } else if (s && i && (t = e) && DataView.prototype.isPrototypeOf(t)) {
                this._bodyArrayBuffer = y(e.buffer);
                this._bodyInit = new Blob([
                    this._bodyArrayBuffer
                ]);
            } else if (s && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e))) {
                this._bodyArrayBuffer = y(e);
            } else {
                this._bodyText = e = Object.prototype.toString.call(e);
            }
        } else {
            this._bodyText = "";
        }
        if (!this.headers.get("content-type")) {
            if (typeof e === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
            } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
            } else if (o && URLSearchParams.prototype.isPrototypeOf(e)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
        }
    };
    if (i) {
        this.blob = function() {
            const e = v(this);
            if (e) {
                return e;
            }
            if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
            }
            if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([
                    this._bodyArrayBuffer
                ]));
            }
            if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
            }
            return Promise.resolve(new Blob([
                this._bodyText
            ]));
        };
        this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                return v(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
            }
            return this.blob().then(g);
        };
    }
    this.text = function() {
        let e;
        let t;
        let n;
        const r = v(this);
        if (r) {
            return r;
        }
        if (this._bodyBlob) {
            e = this._bodyBlob;
            n = m(t = new FileReader);
            t.readAsText(e);
            return n;
        }
        if (this._bodyArrayBuffer) {
            return Promise.resolve(((e)=>{
                for(var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++){
                    n[r] = String.fromCharCode(t[r]);
                }
                return n.join("");
            })(this._bodyArrayBuffer));
        }
        if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
        }
        return Promise.resolve(this._bodyText);
    };
    if (l) {
        this.formData = function() {
            return this.text().then(_);
        };
    }
    this.json = function() {
        return this.text().then(JSON.parse);
    };
    return this;
}
if (a) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}
const C = [
    "DELETE",
    "GET",
    "HEAD",
    "OPTIONS",
    "POST",
    "PUT"
];
export function Request(e, t) {
    if (!(this instanceof Request)) {
        throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    }
    let n;
    let r;
    let body = (t = t || {}).body;
    if (e instanceof Request) {
        if (e.bodyUsed) {
            throw new TypeError("Already read");
        }
        this.url = e.url;
        this.credentials = e.credentials;
        if (!t.headers) {
            this.headers = new Headers(e.headers);
        }
        this.method = e.method;
        this.mode = e.mode;
        this.signal = e.signal;
        if (!(body || e._bodyInit == null)) {
            body = e._bodyInit;
            e.bodyUsed = true;
        }
    } else {
        this.url = String(e);
    }
    this.credentials = t.credentials || this.credentials || "same-origin";
    if (!(!t.headers && this.headers)) {
        this.headers = new Headers(t.headers);
    }
    this.method = (r = (n = t.method || this.method || "GET").toUpperCase(), C.indexOf(r) > -1 ? r : n);
    this.mode = t.mode || this.mode || null;
    this.signal = t.signal || this.signal;
    this.referrer = null;
    if ((this.method === "GET" || this.method === "HEAD") && body) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
    }
    this._initBody(body);
    if (!(this.method !== "GET" && this.method !== "HEAD" || t.cache !== "no-store" && t.cache !== "no-cache")) {
        const a = /([?&])_=[^&]*/;
        if (a.test(this.url)) {
            this.url = this.url.replace(a, `\$1_=${(new Date).getTime()}`);
        } else {
            this.url += `${/\?/.test(this.url) ? "&" : "?"}_=${(new Date).getTime()}`;
        }
    }
}
function _(e) {
    const formData = new FormData;
    e.trim().split("&").forEach((e)=>{
        if (e) {
            const n = e.split("=");
            const r = n.shift().replace(/\+/g, " ");
            const o = n.join("=").replace(/\+/g, " ");
            formData.append(decodeURIComponent(r), decodeURIComponent(o));
        }
    });
    return formData;
}
export function Response(e, t) {
    if (!(this instanceof Response)) {
        throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
    }
    if (!t) {
        t = {};
    }
    this.type = "default";
    this.status = t.status === undefined ? 200 : t.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = "statusText" in t ? t.statusText : "";
    this.headers = new Headers(t.headers);
    this.url = t.url || "";
    this._initBody(e);
}
Request.prototype.clone = function() {
    return new Request(this, {
        body: this._bodyInit
    });
};
b.call(Request.prototype);
b.call(Response.prototype);
Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
    });
};
Response.error = function() {
    const e = new Response(null, {
        status: 0,
        statusText: ""
    });
    e.type = "error";
    return e;
};
const M = [
    301,
    302,
    303,
    307,
    308
];
Response.redirect = function(location, status) {
    if (M.indexOf(status) === -1) {
        throw new RangeError("Invalid status code");
    }
    return new Response(null, {
        status,
        headers: {
            location
        }
    });
};
export let DOMException = r.DOMException;
try {
    new DOMException;
} catch (e) {
    DOMException = function(e, t) {
        this.message = e;
        this.name = t;
        const n = Error(e);
        this.stack = n.stack;
    };
    DOMException.prototype = Object.create(Error.prototype);
    DOMException.prototype.constructor = DOMException;
}
export function fetch(e, t) {
    return new Promise((resolve, reject)=>{
        const a = new Request(e, t);
        if (a.signal && a.signal.aborted) {
            return reject(new DOMException("Aborted", "AbortError"));
        }
        const xmlHttpRequest = new XMLHttpRequest;
        function u() {
            xmlHttpRequest.abort();
        }
        xmlHttpRequest.onload = function() {
            let e;
            let t;
            const r = {
                status: xmlHttpRequest.status,
                statusText: xmlHttpRequest.statusText,
                headers: (e = xmlHttpRequest.getAllResponseHeaders() || "", t = new Headers, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((e)=>{
                    const n = e.split(":");
                    const r = n.shift().trim();
                    if (r) {
                        const o = n.join(":").trim();
                        t.append(r, o);
                    }
                }), t)
            };
            r.url = "responseURL" in xmlHttpRequest ? xmlHttpRequest.responseURL : r.headers.get("X-Request-URL");
            const o = "response" in xmlHttpRequest ? xmlHttpRequest.response : xmlHttpRequest.responseText;
            setTimeout(()=>{
                resolve(new Response(o, r));
            }, 0);
        };
        xmlHttpRequest.onerror = function() {
            setTimeout(()=>{
                reject(new TypeError("Network request failed"));
            }, 0);
        };
        xmlHttpRequest.ontimeout = function() {
            setTimeout(()=>{
                reject(new TypeError("Network request failed"));
            }, 0);
        };
        xmlHttpRequest.onabort = function() {
            setTimeout(()=>{
                reject(new DOMException("Aborted", "AbortError"));
            }, 0);
        };
        xmlHttpRequest.open(a.method, ((e)=>{
            try {
                if (e === "" && r.location.href) {
                    return r.location.href;
                }
                return e;
            } catch (t) {
                return e;
            }
        })(a.url), true);
        if (a.credentials === "include") {
            xmlHttpRequest.withCredentials = true;
        } else if (a.credentials === "omit") {
            xmlHttpRequest.withCredentials = false;
        }
        if ("responseType" in xmlHttpRequest) {
            if (i) {
                xmlHttpRequest.responseType = "blob";
            } else if (s && a.headers.get("Content-Type") && a.headers.get("Content-Type").indexOf("application/octet-stream") !== -1) {
                xmlHttpRequest.responseType = "arraybuffer";
            }
        }
        if (!t || typeof t.headers !== "object" || t.headers instanceof Headers) {
            a.headers.forEach((e, t)=>{
                xmlHttpRequest.setRequestHeader(t, e);
            });
        } else {
            Object.getOwnPropertyNames(t.headers).forEach((e)=>{
                xmlHttpRequest.setRequestHeader(e, d(t.headers[e]));
            });
        }
        if (a.signal) {
            a.signal.addEventListener("abort", u);
            xmlHttpRequest.onreadystatechange = function() {
                if (xmlHttpRequest.readyState === 4) {
                    a.signal.removeEventListener("abort", u);
                }
            };
        }
        xmlHttpRequest.send(a._bodyInit === undefined ? null : a._bodyInit);
    });
}
fetch.polyfill = true;
if (!r.fetch) {
    r.fetch = fetch;
    r.Headers = Headers;
    r.Request = Request;
    r.Response = Response;
}
