import "./module-15.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module63 from "./module-63.js";
import module195 from "./module-195.js";
import { Link } from "./module-433.js";
import module186 from "./module-186.js";
import Module3826 from "./module-3826.js";
import Module3828 from "./module-3828.js";
import Module1217 from "./module-1217.js";
import module3832 from "./module-3832.js";
const S = ((Component_1)=>{
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
            key: "renderNav",
            value: function() {
                const breadcrumbs = this.props.breadcrumbs;
                if (module63(breadcrumbs)) {
                    return null;
                }
                const t = breadcrumbs[0];
                return <Link to={t.url} className={module3832.breadcrumbs}><module186.Icon name="chevron-left" size={20}/>{t.label}</Link>;
            }
        },
        {
            key: "renderName",
            value: function() {
                const props = this.props;
                const { icon, name } = props;
                return <div className={module3832.name} title={name} data-test="detail-title">{module195(icon) ? <module186.Icon name={icon} size={28}/> : icon}{name}</div>;
            }
        },
        {
            key: "renderDesc",
            value: function() {
                const desc = this.props.desc;
                return <div className={module3832.desc} data-test="detail-desc">{desc}</div>;
            }
        },
        {
            key: "renderBtnGroup",
            value: function() {
                const operations = this.props.operations;
                if (module63(operations)) {
                    return null;
                }
                return <Module3826 options={operations} limit={2}/>;
            }
        },
        {
            key: "renderLabels",
            value: function() {
                const labels = this.props.labels;
                if (module63(labels)) {
                    return null;
                }
                return <div className={module3832.labels} data-test="detail-labels"><div className="h6">{t("LABEL_PL")}</div><div className={module3832.labelList}>{Object.entries(labels).map((e)=>{
                    const t = module96(e, 2);
                    const a = t[0];
                    const value = t[1];
                    return <Module3828 key={a} name={a} value={value}/>;
                })}</div></div>;
            }
        },
        {
            key: "renderAttributes",
            value: function() {
                const attrs = this.props.attrs;
                if (module63(attrs)) {
                    return null;
                }
                return <div className={module3832.attrs} data-test="detail-attrs"><div className="h6">{t("ATTRIBUTES")}</div><Module1217>{attrs.map(({ name, value, show = true, ...rest })=>{
                    if (show) {
                        return <Module1217.Item key={name} name={name} value={value ?? "-"} {...rest}/>;
                    }
                    return null;
                })}</Module1217></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3832.card}><div className={module3832.base}>{this.renderNav()}{this.renderName()}{this.renderDesc()}{this.renderBtnGroup()}</div><div className={module3832.extra}>{this.renderLabels()}{this.renderAttributes()}{this.props.customAttrs}</div></div>;
            }
        }
    ]);
    return r;
})(Component);
S.propTypes = {
    icon: module1.oneOfType([
        module1.string,
        module1.element
    ]),
    name: module1.string,
    desc: module1.string,
    operations: module1.array,
    labels: module1.object,
    attrs: module1.array,
    customAttrs: module1.node
};
S.defaultProps = {
    icon: "appcenter",
    name: "",
    desc: "",
    customAttrs: null
};
export default S;
