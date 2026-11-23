import "./module-15.js";
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
import Module1143 from "./module-1143.js";
import { strategyOptions } from "./module-468.js";
const y = ((Component_1)=>{
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
            key: "componentDidMount",
            value: function() {
                const formTemplate = this.props.formTemplate;
                const host = module26(formTemplate, "strategy.spec.template.spec.hosts[0]");
                const a = [
                    {
                        route: [
                            {
                                destination: {
                                    subset: module26(formTemplate, "strategy.spec.principal"),
                                    host
                                },
                                weight: 100
                            }
                        ],
                        mirror: {
                            host,
                            subset: module26(formTemplate, "workload.metadata.labels.version")
                        }
                    }
                ];
                if (this.protocol === "tcp") {
                    a.forEach((e)=>{
                        e.match = e.match || [];
                    });
                }
                if (module63(module26(this.formTemplate, this.strategyPath))) {
                    module74(this.formTemplate, this.strategyPath, a);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, ...rest } = props;
                const value = module26(this.formTemplate, "spec.strategyPolicy");
                return <module186.Form ref={formRef} data={this.formTemplate} {...rest}><module186.Alert type="info" message={t("MIRROR_POLICY_DESC")}/><module186.Form.Item><Module1143 name="spec.strategyPolicy" value={value} options={strategyOptions}/></module186.Form.Item></module186.Form>;
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
export default y;
