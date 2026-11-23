let r;
var o = o || ((e)=>{
    "use strict";
    if (!(e === undefined || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent))) {
        const t = e.document;
        const n = ()=>e.URL || e.webkitURL || e;
        const r = t.createElementNS("http://www.w3.org/1999/xhtml", "a");
        const o = "download" in r;
        const i = /constructor/i.test(e.HTMLElement) || e.safari;
        const a = /CriOS\/[\d]+/.test(navigator.userAgent);
        const l = (error)=>{
            (e.setImmediate || e.setTimeout)(function() {
                throw error;
            }, 0);
        };
        const u = (e)=>{
            setTimeout(()=>{
                if (typeof e === "string") {
                    n().revokeObjectURL(e);
                } else {
                    e.remove();
                }
            }, 40000);
        };
        const s = (e)=>{
            if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)) {
                return new Blob([
                    String.fromCharCode(65279),
                    e
                ], {
                    type: e.type
                });
            }
            return e;
        };
        const c = function(t, c, f) {
            if (!f) {
                t = s(t);
            }
            let d;
            const _this = this;
            const h = t.type === "application/octet-stream";
            const v = ()=>{
                ((_this_1, t, n)=>{
                    for(let r = (t = [].concat(t)).length; r--;){
                        const o = _this_1[`on${t[r]}`];
                        if (typeof o === "function") {
                            try {
                                o.call(_this_1, _this_1);
                            } catch (error) {
                                l(error);
                            }
                        }
                    }
                })(_this, "writestart progress write writeend".split(" "));
            };
            _this.readyState = _this.INIT;
            if (o) {
                d = n().createObjectURL(t);
                return void setTimeout(()=>{
                    let e;
                    let t;
                    r.href = d;
                    r.download = c;
                    e = r;
                    t = new MouseEvent("click");
                    e.dispatchEvent(t);
                    v();
                    u(d);
                    _this.readyState = _this.DONE;
                });
            }
            (()=>{
                if ((a || h && i) && e.FileReader) {
                    const r = new FileReader;
                    r.onloadend = function() {
                        let t = a ? r.result : r.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                        if (!e.open(t, "_blank")) {
                            e.location.href = t;
                        }
                        t = undefined;
                        _this.readyState = _this.DONE;
                        v();
                    };
                    r.readAsDataURL(t);
                    return void (_this.readyState = _this.INIT);
                }
                if (!d) {
                    d = n().createObjectURL(t);
                }
                if (h) {
                    e.location.href = d;
                } else if (!e.open(d, "_blank")) {
                    e.location.href = d;
                }
                _this.readyState = _this.DONE;
                v();
                u(d);
            })();
        };
        const f = c.prototype;
        if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
            return function(e, t, n) {
                t = t || e.name || "download";
                if (!n) {
                    e = s(e);
                }
                return navigator.msSaveOrOpenBlob(e, t);
            };
        }
        f.abort = function() {};
        f.readyState = f.INIT = 0;
        f.WRITING = 1;
        f.DONE = 2;
        f.error = f.onwritestart = f.onprogress = f.onwrite = f.onabort = f.onerror = f.onwriteend = null;
        return function(e, t, n) {
            return new c(e, t || e.name || "download", n);
        };
    }
})(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content);
if (module.exports) {
    module.exports.saveAs = o;
} else {
    if (require("./module-1269.js").default !== null && require("./module-2052.js") !== null) {
        if ((r = (()=>o)(require, exports, module)) !== undefined) {
            module.exports = r;
        }
    }
}
