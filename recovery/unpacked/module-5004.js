import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import { ICON_TYPES } from "./module-72.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import module5005 from "./module-5005.js";
const S = ((Component_1)=>{
    module55(a, Component_1);
    var r = ((e)=>{
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a() {
        module36(this, a);
        return r.apply(this, arguments);
    }
    module37(a, [
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { service, workspace } = props;
                if (module63(service)) {
                    return null;
                }
                const { name, namespace } = service;
                return <div className={module5005.item}><Module791 icon={ICON_TYPES.services} title=<Link to={`/${workspace}/federatedprojects/${namespace}/services/${name}`}>{name}</Link> description={t(service.type)}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                const title = this.props.title || t("SERVICE_PL");
                return <Module790 className={module3(module5005.main, className)} title={title}>{this.renderContent()}</Module790>;
            }
        },
        {
            key: "ports",
            get: function() {
                return module26(this.props.service, "ports", []).map((e)=>{
                    const t = e.targetPort ? `:${e.targetPort}` : "";
                    return `${e.port}${t}/${e.protocol}`;
                });
            }
        }
    ]);
    return a;
})(Component);
export default S;
S.propTypes = {
    className: module1.string,
    title: module1.string,
    service: module1.object,
    loading: module1.bool
};
S.defaultProps = {
    service: {},
    loading: true
};
