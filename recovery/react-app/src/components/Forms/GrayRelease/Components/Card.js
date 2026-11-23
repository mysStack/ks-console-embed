import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-73.js";
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
import { PureComponent } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import module4675 from "unpacked/module-4675.js";
const v = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleClick = function() {
            const e_props = e.props;
            const { value, component } = e_props;
            e_props.onSelect(component, !value);
        };
        return e;
    }
    module37(r, [
        {
            key: "renderActions",
            value: function() {
                const props = this.props;
                const { value, component, loading } = props;
                if (component.workloads.length <= 0) {
                    return <span className={module4675.right}>{t("NO_WORKLOAD_FOUND_TIP")}</span>;
                }
                if (component.workloadType !== "Deployment") {
                    return <span className={module4675.right}>{t("UNSUPPORTED_WORKLOAD_TYPE")}</span>;
                }
                if (component.strategies.length > 0) {
                    return <span className={module4675.right}>{t("UNFINISHED_GRAY_TASK")}</span>;
                }
                return <module186.Button className={module4675.right} type={value ? "control" : "default"} loading={loading} onClick={this.handleClick}>{value ? t("DESELECT") : t("SELECT")}</module186.Button>;
            }
        },
        {
            key: "render",
            value: function() {
                const component = this.props.component;
                const a = component.workloads.map((e)=>module26(e, "labels.version")).filter((e)=>!module63(e));
                const r = module26(component, 'annotations["servicemesh.kubesphere.io/enabled"]') === "true";
                return <div className={module4675.card}><div className={module4675.icon}><module186.Icon name="network-router" size={40}/>{r && <span className={module4675.istio}><module186.Icon name="istio" size={16} color={{
                    primary: "#329dce"
                }}/></span>}</div><div className={module4675.text}><div className="h6">{component.name}</div><p>{component.workloadType ? t(`TYPE_SERVICE_${component.workloadType.toUpperCase()}`) : ""}</p></div><div className={module4675.version}><strong>{a.join(", ") || "-"}</strong><p>{a.length === 1 ? t("VERSION") : t("VERSIONS")}</p></div>{this.renderActions()}</div>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default v;
v.propTypes = {
    component: module1.object,
    value: module1.bool,
    loading: module1.bool,
    onSelect: module1.func
};
v.defaultProps = {
    component: {},
    value: false,
    loading: false,
    onSelect: function() {}
};
