"use strict";
((e)=>{
    function r(t, n) {
        let r;
        let o;
        let i;
        const a = (r = n !== undefined ? n : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : e).document !== undefined && r.document.attachEvent;
        if (!a) {
            i = r.requestAnimationFrame || r.mozRequestAnimationFrame || r.webkitRequestAnimationFrame || function(e) {
                return r.setTimeout(e, 20);
            };
            const l = (e)=>i(e);
            o = r.cancelAnimationFrame || r.mozCancelAnimationFrame || r.webkitCancelAnimationFrame || r.clearTimeout;
            const u = (__resizeRAF__)=>o(__resizeRAF__);
            var s = ({ __resizeTriggers__ })=>{
                const { firstElementChild, lastElementChild } = __resizeTriggers__;
                const firstElementChild_firstElementChild = firstElementChild.firstElementChild;
                lastElementChild.scrollLeft = lastElementChild.scrollWidth;
                lastElementChild.scrollTop = lastElementChild.scrollHeight;
                firstElementChild_firstElementChild.style.width = `${firstElementChild.offsetWidth + 1}px`;
                firstElementChild_firstElementChild.style.height = `${firstElementChild.offsetHeight + 1}px`;
                firstElementChild.scrollLeft = firstElementChild.scrollWidth;
                firstElementChild.scrollTop = firstElementChild.scrollHeight;
            };
            var c = function(e) {
                if (!(e.target.className && typeof e.target.className.indexOf === "function" && e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0)) {
                    const t = this;
                    s(this);
                    if (this.__resizeRAF__) {
                        u(this.__resizeRAF__);
                    }
                    this.__resizeRAF__ = l(function() {
                        if (((e)=>e.offsetWidth != e.__resizeLast__.width || e.offsetHeight != e.__resizeLast__.height)(t)) {
                            t.__resizeLast__.width = t.offsetWidth;
                            t.__resizeLast__.height = t.offsetHeight;
                            t.__resizeListeners__.forEach((n)=>{
                                n.call(t, e);
                            });
                        }
                    });
                }
            };
            let f = false;
            let d = "";
            var p = "animationstart";
            const h = "Webkit Moz O ms".split(" ");
            const v = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");
            const g = r.document.createElement("fakeelement");
            if (g.style.animationName !== undefined) {
                f = true;
            }
            if (f === false) {
                for(let y = 0; y < h.length; y++){
                    if (g.style[`${h[y]}AnimationName`] !== undefined) {
                        d = `-${h[y].toLowerCase()}-`;
                        p = v[y];
                        f = true;
                        break;
                    }
                }
            }
            var m = "resizeanim";
            var b = `@${d}keyframes ${m} { from { opacity: 0; } to { opacity: 0; } } `;
            var x = `${d}animation: 1ms ${m}; `;
        }
        return {
            addResizeListener: function(e, n) {
                if (a) {
                    e.attachEvent("onresize", n);
                } else {
                    if (!e.__resizeTriggers__) {
                        const o = e.ownerDocument;
                        const i = r.getComputedStyle(e);
                        if (i && i.position == "static") {
                            e.style.position = "relative";
                        }
                        ((e)=>{
                            if (!e.getElementById("detectElementResize")) {
                                const n = `${b || ""}.resize-triggers { ${x || ""}visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }`;
                                const r = e.head || e.getElementsByTagName("head")[0];
                                const o = e.createElement("style");
                                o.id = "detectElementResize";
                                o.type = "text/css";
                                if (t != null) {
                                    o.setAttribute("nonce", t);
                                }
                                if (o.styleSheet) {
                                    o.styleSheet.cssText = n;
                                } else {
                                    o.appendChild(e.createTextNode(n));
                                }
                                r.appendChild(o);
                            }
                        })(o);
                        e.__resizeLast__ = {};
                        e.__resizeListeners__ = [];
                        (e.__resizeTriggers__ = o.createElement("div")).className = "resize-triggers";
                        e.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
                        e.appendChild(e.__resizeTriggers__);
                        s(e);
                        e.addEventListener("scroll", c, true);
                        if (p) {
                            e.__resizeTriggers__.__animationListener__ = function(t) {
                                if (t.animationName == m) {
                                    s(e);
                                }
                            };
                            e.__resizeTriggers__.addEventListener(p, e.__resizeTriggers__.__animationListener__);
                        }
                    }
                    e.__resizeListeners__.push(n);
                }
            },
            removeResizeListener: function(e, t) {
                if (a) {
                    e.detachEvent("onresize", t);
                } else {
                    e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1);
                    if (!e.__resizeListeners__.length) {
                        e.removeEventListener("scroll", c, true);
                        if (e.__resizeTriggers__.__animationListener__) {
                            e.__resizeTriggers__.removeEventListener(p, e.__resizeTriggers__.__animationListener__);
                            e.__resizeTriggers__.__animationListener__ = null;
                        }
                        try {
                            e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__);
                        } catch (e) {}
                    }
                }
            }
        };
    }
    require.d(exports, "a", function() {
        return r;
    });
})(require("unpacked/module-69.js").default);
