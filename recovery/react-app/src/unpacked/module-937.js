import "./module-15.js";
import "./module-5.js";
import "./module-73.js";
import "./module-18.js";
import "./module-48.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import { Component } from "./module-553.js";
import module2723 from "./module-2723.js";
export default function(e) {
    return function(T) {
        const a = `id-${Math.random().toString(32).slice(2)}`;
        return ((Component_1)=>{
            module55(m, Component_1);
            let f;
            let d;
            f = m;
            d = (()=>{
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
            var p = function() {
                let e;
                const t = module51(f);
                if (d) {
                    const a = module51(this).constructor;
                    e = Reflect.construct(t, arguments, a);
                } else {
                    e = t.apply(this, arguments);
                }
                return module56(this, e);
            };
            function m() {
                module36(this, m);
                return p.apply(this, arguments);
            }
            module37(m, [
                {
                    key: "componentDidMount",
                    value: function() {
                        ((e, t)=>{
                            ((e, t)=>{
                                if (!document.querySelector(`#${t}`)) {
                                    const a = document.createElement("div");
                                    a.innerHTML = `<svg id="${t}">${e}</svg>`;
                                    let r;
                                    let n;
                                    const l = a.getElementsByTagName("svg")[0];
                                    if (l && l.innerHTML) {
                                        l.setAttribute("aria-hidden", "true");
                                        l.style.position = "absolute";
                                        l.style.width = 0;
                                        l.style.height = 0;
                                        l.style.overflow = "hidden";
                                        r = l;
                                        if ((n = document.body).firstChild) {
                                            n.insertBefore(r, n.firstChild);
                                        } else {
                                            n.appendChild(r);
                                        }
                                    }
                                }
                            })(e.map((e)=>{
                                const t = module2723[e];
                                if (t && !document.querySelector(`#icon-${e.replace("_", "-")}`)) {
                                    return t;
                                }
                                return "";
                            }).join("\n"), t);
                        })(e, a);
                    }
                },
                {
                    key: "componentWillUnmount",
                    value: function() {}
                },
                {
                    key: "render",
                    value: function() {
                        return <T {...this.props}/>;
                    }
                }
            ]);
            return m;
        })(Component);
    };
};
