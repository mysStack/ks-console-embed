import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import module61 from "unpacked/module-61.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module318 from "stores/workload/index";
import module859 from "unpacked/module-859.js";
import Module790 from "components/Base/Panel";
import { joinSelector } from "utils/index";
import Module3876 from "unpacked/module-3876.js";
import module1820 from "unpacked/module-1820.js";
let i;
let c;
let s;
const R = observer((s = c = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.store = e.props.isEdgeWize ? new module859 : new module318;
        e.state = {
            workloads: [],
            isLoading: true
        };
        e.getData = async function t() {
            let a;
            let r;
            let cluster;
            let namespace;
            let labelSelector;
            let s;
            let f;
            let d;
            let p;
            let m;
            a = e.props;
            r = a.selector;
            cluster = a.cluster;
            namespace = a.namespace;
            if (!module63(r)) {
                e.setState({
                    isLoading: true
                });
                labelSelector = joinSelector(r);
                s = await Promise.all([
                    e.store.fetchListByK8s({
                        cluster,
                        namespace,
                        labelSelector,
                        module: "deployments"
                    }),
                    e.store.fetchListByK8s({
                        cluster,
                        namespace,
                        labelSelector,
                        module: "statefulsets"
                    }),
                    e.store.fetchListByK8s({
                        cluster,
                        namespace,
                        labelSelector,
                        module: "daemonsets"
                    })
                ]);
                f = module96(s, 3);
                d = f[0];
                p = f[1];
                m = f[2];
                e.setState({
                    workloads: [].concat(module61(d), module61(p), module61(m)),
                    isLoading: false
                });
            }
        };
        return e;
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
                const props = this.props;
                const { prefix, isEdgeWize } = props;
                const state = this.state;
                const { workloads, isLoading } = state;
                if (module63(workloads) && !isLoading) {
                    return <div className={module1820.empty}>{t("NO_AVAILABLE_RESOURCE_VALUE", {
                        resource: t("WORKLOAD")
                    })}</div>;
                }
                return <module186.Loading spinning={isLoading}><div className={module1820.content}>{workloads.map((detail)=><Module3876 key={`${detail.module}-${detail.name}`} prefix={prefix} detail={detail} isEdgeWize={isEdgeWize}/>)}</div></module186.Loading>;
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                return <Module790 className={module3(module1820.main, className)} title={t("WORKLOAD_PL")}>{this.renderContent()}</Module790>;
            }
        }
    ]);
    return r;
})(Component), c.propTypes = {
    isEdgeWize: module1.bool,
    className: module1.string,
    prefix: module1.string,
    selector: module1.object
}, c.defaultProps = {
    prefix: "",
    selector: {}
}, i = s)) || i;
export default R;
