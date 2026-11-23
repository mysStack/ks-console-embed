import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import module63 from "./module-63.js";
import Module790 from "./module-790.js";
import module1178 from "./module-1178.js";
import module1380 from "./module-1380.js";
import { joinSelector } from "./module-52.js";
import Module3878 from "./module-3878.js";
import module1821 from "./module-1821.js";
let l;
let u;
let o;
const N = observer((o = u = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.getData = function() {
            const t_props = t.props;
            const { cluster, namespace, labels } = t_props;
            if (!module63(labels)) {
                t.store.fetchListByK8s({
                    cluster,
                    namespace,
                    labelSelector: joinSelector(labels)
                });
            }
        };
        if (e.store) {
            t.store = e.store;
        } else {
            t.store = t.props.isEdgeWize ? new module1380 : new module1178;
        }
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "renderContent",
            value: function() {
                const data = this.store.list.data;
                if (module63(data)) {
                    return null;
                }
                const t = data.reduce((acc, item)=>[].concat(module61(acc), module61(item.endpoints.map((e)=>({
                            ...e,
                            name: item.name
                        })))), []);
                return <div className={module1821.content}>{t.map((detail, t)=><Module3878 key={`${detail.name}_${t}`} detail={detail}/>)}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                const a = this.renderContent();
                if (a) {
                    return <Module790 className={className} title={`${t("SERVICE_MONITORING_EXPORTER")} (${t("EXPORTER_SERVICE_PORTS")})`}>{a}</Module790>;
                }
                return null;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    isEdgeWize: module1.bool,
    className: module1.string,
    selector: module1.object
}, l = o)) || l;
export default N;
