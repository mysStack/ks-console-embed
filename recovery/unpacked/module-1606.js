import "./module-15.js";
import "./module-5.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-98.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
import "./module-32.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module63 from "./module-63.js";
import module801 from "./module-801.js";
import { Component } from "./module-553.js";
import module837 from "./module-837.js";
import module186 from "./module-186.js";
import Module843 from "./module-843.js";
import module318 from "./module-318.js";
import module859 from "./module-859.js";
import { isEdgeWizePage, isValidLabel, joinSelector } from "./module-52.js";
import Module2589 from "./module-2589.js";
import module2591 from "./module-2591.js";
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.fetchRelatedWorkloads = module801(function({ value, cluster, namespace }) {
            if (module63(value) || Object.keys(value).some(module63) || Object.values(value).some(module63)) {
                t.setState({
                    relatedDeployments: [],
                    relatedDaemonSets: [],
                    relatedStatefulSets: []
                });
            } else if (isValidLabel(value)) {
                const labelSelector = joinSelector(value);
                Promise.all([
                    t.store.fetchListByK8s({
                        cluster,
                        namespace,
                        labelSelector,
                        module: "deployments"
                    }),
                    t.store.fetchListByK8s({
                        cluster,
                        namespace,
                        labelSelector,
                        module: "daemonsets"
                    }),
                    t.store.fetchListByK8s({
                        cluster,
                        namespace,
                        labelSelector,
                        module: "statefulsets"
                    })
                ]).then((e)=>{
                    const a = module96(e, 3);
                    const relatedDeployments = a[0];
                    const relatedDaemonSets = a[1];
                    const relatedStatefulSets = a[2];
                    t.setState({
                        relatedDeployments,
                        relatedDaemonSets,
                        relatedStatefulSets
                    });
                });
            }
        }, 500);
        t.handleWorkloadSelect = function(e) {
            const onChange = t.props.onChange;
            if (onChange) {
                onChange(e);
            }
        };
        t.handleCancel = function() {
            t.setState({
                visible: false
            });
        };
        t.store = isEdgeWizePage() ? new module859 : new module318;
        t.state = {
            relatedDeployments: [],
            relatedDaemonSets: [],
            relatedStatefulSets: []
        };
        if (!module63(e.value)) {
            t.fetchRelatedWorkloads(e);
        }
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!module837(e.value, this.props.value)) {
                    this.fetchRelatedWorkloads(this.props);
                }
            }
        },
        {
            key: "renderRelatedTips",
            value: function() {
                const value = this.props.value;
                const state = this.state;
                const { relatedDeployments, relatedDaemonSets, relatedStatefulSets } = state;
                const count = relatedDeployments.length + relatedDaemonSets.length + relatedStatefulSets.length;
                if (module63(value)) {
                    return null;
                }
                if (count === 0) {
                    const i = t("NO_WORKLOAD_MATCH_SELECTOR");
                    return <module186.Alert className={module2591.alert} message={i} type="warning"/>;
                }
                const selector = Object.entries(value).map((e)=>{
                    const t = module96(e, 2);
                    const a = t[0];
                    const r = t[1];
                    return `${a}=${r}`;
                }).join(", ");
                const s = count === 1 ? t("WORKLOADS_MATCH_SELECTOR_SI", {
                    selector,
                    count
                }) : t("WORKLOADS_MATCH_SELECTOR_PL", {
                    selector,
                    count
                });
                const content = <div><p>{t("TOTAL_WORKLOADS_VALUE", {
                    count
                })}</p>{relatedDeployments.map(({ name })=><p key={`deploy-${name}`}>{t("DEPLOYMENTS_VALUE", {
                        value: name
                    })}</p>)}{relatedDaemonSets.map(({ name })=><p key={`ds-${name}`}>{t("STATEFULSETS_VALUE", {
                        value: name
                    })}</p>)}{relatedStatefulSets.map(({ name })=><p key={`sts-${name}`}>{t("STATEFULSETS_VALUE", {
                        value: name
                    })}</p>)}</div>;
                const p = <div><p className="inline-block">{s}</p> <module186.Tooltip content={content} trigger="click"><a className="text-green">{t("VIEW_DETAILS")}</a></module186.Tooltip></div>;
                return <module186.Alert className={module2591.alert} message={p} type="warning"/>;
            }
        },
        {
            key: "renderWorkloadSelectForm",
            value: function() {
                const props = this.props;
                const { cluster, namespace } = props;
                return <Module2589 cluster={cluster} namespace={namespace} onSelect={this.handleWorkloadSelect} onCancel={this.handleCancel}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const visible = this.state.visible;
                return <div className={module2591.wrapper}>{this.renderRelatedTips()}<Module843 {...this.props} controlled/><module186.Popper className={module2591.popper} trigger="click" visible={visible} placement="right" content={this.renderWorkloadSelectForm()} closeAfterClick={false}><module186.Button className={module2591.workload}>{t("SPECIFY_WORKLOAD")}</module186.Button></module186.Popper></div>;
            }
        }
    ]);
    return r;
})(Component);
export default S;
