import "unpacked/module-15.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import { getLanguageName } from "utils/index";
import module3848 from "unpacked/module-3848.js";
const h = ((Component_1)=>{
    module55(r, Component_1);
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                const config = this.props.config;
                const { sourceUrl, builderImage } = config;
                return <ul className={module3(module3848.builderContent, className)}><li><span className={module3848.icon}><module186.Icon name="resource" size={24}/></span><div className={module3848.info}><p className={module3848.value}>{sourceUrl}</p><p className={module3848.name}>{t("SOURCE_URL")}</p></div></li><li><span className={module3848.icon} style={{
                    backgroundImage: `url('/assets/${getLanguageName(builderImage)}.png')`
                }}/><div className={module3848.info}><p className={module3848.value}>{builderImage}</p><p className={module3848.name}>{t("BUILDER_IMAGE")}</p></div></li></ul>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.defaultProps = {
    config: {
        sourceUrl: "-",
        builderImage: "-"
    }
};
