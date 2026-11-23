import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
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
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import { strategyOptions } from "./module-468.js";
import Module1143 from "./module-1143.js";
import Module4698 from "./module-4698.js";
import module4700 from "./module-4700.js";
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            versions: [],
            currentStrategy: ""
        };
        e.handleVersionChange = function(t) {
            if (module26(e.formTemplate, "spec.principal") === t) {
                module74(e.formTemplate, `${e.strategyPath}[0].route[0].weight`, 100);
                module74(e.formTemplate, `${e.strategyPath}[0].route[1].weight`, 0);
            } else {
                module74(e.formTemplate, `${e.strategyPath}[0].route[0].weight`, 0);
                module74(e.formTemplate, `${e.strategyPath}[0].route[1].weight`, 100);
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const formTemplate = this.props.formTemplate;
                const host = module26(formTemplate, "strategy.spec.template.spec.hosts[0]");
                const a = module26(formTemplate, "strategy.spec.principal");
                const r = module26(formTemplate, "workload.metadata.labels.version");
                const n = module26(formTemplate, "workload.spec.replicas");
                const o = module26(formTemplate, 'strategy.metadata.annotations["servicemesh.kubesphere.io/workloadReplicas"]', 0);
                const currentStrategy = module26(formTemplate, "strategy.spec.strategyPolicy");
                const s = [
                    {
                        route: [
                            {
                                destination: {
                                    subset: a,
                                    host
                                },
                                weight: 100
                            },
                            {
                                destination: {
                                    subset: r,
                                    host
                                },
                                weight: 0
                            }
                        ]
                    }
                ];
                if (this.protocol === "tcp") {
                    s.forEach((e)=>{
                        e.match = e.match || [];
                    });
                }
                if (module63(module26(this.formTemplate, "spec.governor"))) {
                    module74(this.formTemplate, "spec.governor", a);
                }
                if (module63(module26(this.formTemplate, this.strategyPath))) {
                    module74(this.formTemplate, this.strategyPath, s);
                }
                this.setState({
                    versions: [
                        {
                            name: a,
                            replicas: o
                        },
                        {
                            name: r,
                            replicas: n
                        }
                    ],
                    currentStrategy
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, ...rest } = props;
                const value = module26(this.formTemplate, "spec.strategyPolicy");
                return <module186.Form ref={formRef} data={this.formTemplate} {...rest}><div className={module4700.wrapper}><div className={module4700.item}><p>{t("BLUE_GREEN_STRATEGY_DESC")}</p></div><div className={module4700.item}><div className={module4700.title}>{t("SELECT_VERSION")}</div><module186.Form.Item><Module4698 name="spec.governor" options={this.state.versions} onChange={this.handleVersionChange}/></module186.Form.Item></div></div><module186.Form.Item><Module1143 name="spec.strategyPolicy" value={value} options={strategyOptions}/></module186.Form.Item></module186.Form>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return this.props.formTemplate.strategy;
            }
        },
        {
            key: "protocol",
            get: function() {
                return module26(this.formTemplate, "spec.protocol", "http");
            }
        },
        {
            key: "strategyPath",
            get: function() {
                return `spec.template.spec.${this.protocol}`;
            }
        }
    ]);
    return r;
})(Component);
export default b;
