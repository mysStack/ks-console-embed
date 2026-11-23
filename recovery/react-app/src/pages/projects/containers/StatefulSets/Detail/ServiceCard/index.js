import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
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
import { Link } from "unpacked/module-433.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { ICON_TYPES } from "utils/constants";
import module186 from "unpacked/module-186.js";
import Module790 from "components/Base/Panel";
import module4205 from "unpacked/module-4205.js";
const E = ((Component_1)=>{
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
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { service, prefix } = props;
                if (module63(service)) {
                    return null;
                }
                const { name, type } = service;
                return <div className={module4205.item}><module186.Icon className={module4205.icon} name={ICON_TYPES.services} size={40}/><div className={module4205.info}><div className={module4205.base}><strong><Link to={`${prefix}/services/${name}`}>{name}</Link></strong><p>{t(type)}</p></div><div className={module4205.ports}><div className={module4205.record}><label>{t("PORT_PL")}:</label><div className={module4205.text}>{this.ports.map((e, key)=><p key={key}>{e}</p>)}</div></div></div></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                const title = this.props.title || t("SERVICE_PL");
                return <Module790 className={module3(module4205.main, className)} title={title}>{this.renderContent()}</Module790>;
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
    return r;
})(Component);
export default E;
E.propTypes = {
    className: module1.string,
    title: module1.string,
    service: module1.object,
    loading: module1.bool
};
E.defaultProps = {
    service: {},
    loading: true
};
