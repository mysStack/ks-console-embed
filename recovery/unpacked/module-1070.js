import "./module-15.js";
import "./module-18.js";
import "./module-16.js";
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
import module3 from "./module-3.js";
import Module790 from "./module-790.js";
import module63 from "./module-63.js";
import module1 from "./module-1.js";
import { Component } from "./module-553.js";
import { showNameAndAlias } from "./module-52.js";
import { PROTOCOLS } from "./module-72.js";
import module3841 from "./module-3841.js";
const b = ((Component_1)=>{
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
                const { ports, isFederated } = props;
                if (module63(ports)) {
                    return null;
                }
                return <div className={module3841.content}><table className={module3841.table}><thead><tr>{isFederated && <th>{t("CLUSTER")}</th>}<th>{t("NAME")}</th><th>{t("PROTOCOL")}</th><th>{t("PORT")}</th></tr></thead><tbody>{ports.map((e, key)=><tr key={key}>{isFederated && <td>{showNameAndAlias(e.cluster, "cluster")}</td>}<td>{e.name}</td><td>{e.protocol}</td><td>{e.containerPort}</td></tr>)}</tbody></table></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, loading: _loading, ...rest } = props;
                const title = this.props.title || t("PORT_PL");
                return <Module790 className={module3(module3841.card, className)} title={title} {...rest}>{this.renderContent()}</Module790>;
            }
        },
        {
            key: "protocols",
            get: function() {
                return PROTOCOLS.map((e)=>e.value);
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    isEdgeWize: module1.bool,
    className: module1.string,
    ports: module1.array
};
b.defaultProps = {
    isEdgeWize: false,
    ports: []
};
