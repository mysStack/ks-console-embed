import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import Module788 from "./module-788.js";
import module3 from "./module-3.js";
import module3503 from "./module-3503.js";
export default function(E, t = {}) {
    const a = ((Component_1)=>{
        module55(c, Component_1);
        var r = h(c);
        function c() {
            module36(this, c);
            return r.apply(this, arguments);
        }
        module37(c, [
            {
                key: "pageClose",
                value: function() {
                    window.opener = null;
                    window.open("", "_self", "");
                    window.close();
                }
            },
            {
                key: "render",
                value: function() {
                    const props = this.props;
                    const { title, onCancel, icon, description, ...rest } = props;
                    return <Module788 visible fullScreen hideFooter title={title} icon={icon} description={description} onCancel={onCancel} className={module3503.container} headerClassName={module3503.header} bodyClassName={module3(module3503.body, module3503.fullScreen)}><E onCancel={t.isSinglePage ? this.pageClose : onCancel} {...rest}/></Module788>;
                }
            }
        ]);
        return c;
    })(Component);
    return a;
};
function h(e) {
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
