import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module791 from "./module-791.js";
import { getBrowserLang } from "./module-52.js";
import module1731 from "./module-1731.js";
const b = ((e)=>{
    module55(r, e);
    var a = ((e)=>{
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
    })(r);
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.getName = function(t) {
            return module26(t, `_originData.spec.displayName[${e.lang}]`) || module26(t, "_originData.spec.displayName.en");
        };
        e.getDesc = function(t) {
            return module26(t, `_originData.spec.description[${e.lang}]`) || module26(t, "_originData.spec.description.en");
        };
        e.handleCheck = function() {
            const e_props = e.props;
            const { roleTemplates, roleTemplatesMap, data, onChange } = e_props;
            let c = module61(roleTemplates);
            if (c.includes(data.name)) {
                const s = c.filter((t)=>t !== data.name && e.getDependencies([
                        t
                    ]).includes(data.name));
                if (s.length === 0) {
                    c = c.filter((e)=>e !== data.name);
                } else {
                    module240.warning(t("DESELECT_RESOURCE_FIRST", {
                        resource: s.map((t)=>e.getName(roleTemplatesMap[t])).join("/")
                    }));
                }
            } else {
                c.push(data.name);
            }
            onChange([].concat(module61(c), module61(e.getDependencies(c))));
        };
        e.getDependencies = function(t) {
            const roleTemplatesMap = e.props.roleTemplatesMap;
            const r = [];
            if (!module63(t)) {
                t.forEach((e)=>{
                    const n = roleTemplatesMap[e];
                    if (n && n.dependencies) {
                        n.dependencies.forEach((e)=>{
                            if (!(t.includes(e) || r.includes(e))) {
                                r.push(e);
                            }
                        });
                    }
                });
                if (r.length > 0) {
                    r.push.apply(r, module61(e.getDependencies(r)));
                }
            }
            return r;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { roleTemplates, roleTemplatesMap, data } = props;
                const o = data.dependencies.length > 0 ? data.dependencies.map((t)=>_this.getName(roleTemplatesMap[t])).filter((e)=>e !== undefined) : [];
                return module553.default.createElement("div", {
                    className: module1731.checkItem
                }, module553.default.createElement(module186.Checkbox, {
                    checked: roleTemplates.includes(data.name),
                    onClick: this.handleCheck
                }), module553.default.createElement(module791, {
                    title: this.getName(data),
                    onClick: this.handleCheck,
                    description: this.getDesc(data)
                }), o.length > 0 && module553.default.createElement("div", {
                    className: module1731.extra
                }, t("DEPENDS_ON"), o.map((e)=>module553.default.createElement(module186.Tag, {
                        className: module1731.tag,
                        type: "info",
                        key: e
                    }, e))));
            }
        },
        {
            key: "lang",
            get: function() {
                return module26(globals.user, "lang") || getBrowserLang();
            }
        }
    ]);
    return r;
})(module553.Component);
export default b;
