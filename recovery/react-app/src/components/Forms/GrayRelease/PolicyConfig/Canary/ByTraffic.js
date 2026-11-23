import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module159 from "unpacked/module-159.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module1355 from "components/Inputs/TrafficSlider";
import { strategyOptions } from "unpacked/module-468.js";
import Module1143 from "unpacked/module-1143.js";
import module4688 from "unpacked/module-4688.js";
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleRatioChange = function(ratio) {
            t.setState({
                ratio
            }, function() {
                module74(t.oldRoute, "weight", 100 - ratio);
            });
        };
        t.state = {
            ratio: module26(t.newRoute, "weight", 50)
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const e = module26(this.oldRoute, "weight");
                const t = module26(this.newRoute, "weight");
                if (module159(e)) {
                    module74(this.oldRoute, "weight", 100 - this.state.ratio);
                }
                if (module159(t)) {
                    module74(this.newRoute, "weight", this.state.ratio);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const ratio = this.state.ratio;
                const props = this.props;
                const { formRef, ...rest } = props;
                const component = module26(this.formTemplate, "spec.template.spec.hosts[0]");
                const newVersion = module26(this.newRoute, "destination.subset");
                const i = module26(this.oldRoute, "destination.subset");
                const leftContent = `${newVersion} ${t("TRAFFIC_LOW")}`;
                const rightContent = `${i} ${t("TRAFFIC_LOW")}`;
                const value = module26(this.formTemplate, "spec.strategyPolicy");
                return <module186.Form ref={formRef} data={this.formTemplate} {...rest}><div className={module4688.paddingWrapper}><div className={module4688.wrapper}><div className={module4688.item}><module186.Alert type="info" message={t.html("CANARY_BY_TRAFFIC_DESC", {
                    ratio,
                    component,
                    newVersion
                })}/></div><div className={module4688.item}><div className={module4688.title}>{t("TRAFFIC_DISTRIBUTION")}</div><module186.Form.Item><Module1355 name={`${this.strategyPath}[0].route[1].weight`} min={0} max={100} leftContent={leftContent} rightContent={rightContent} onChange={this.handleRatioChange}/></module186.Form.Item></div></div></div><module186.Form.Item><Module1143 name="spec.strategyPolicy" value={value} options={strategyOptions}/></module186.Form.Item></module186.Form>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return this.props.formTemplate.strategy;
            }
        },
        {
            key: "strategyPath",
            get: function() {
                const e = module26(this.formTemplate, "spec.protocol", "http");
                return `spec.template.spec.${e}`;
            }
        },
        {
            key: "oldRoute",
            get: function() {
                return module26(this.formTemplate, `${this.strategyPath}[0].route[0]`, {});
            }
        },
        {
            key: "newRoute",
            get: function() {
                return module26(this.formTemplate, `${this.strategyPath}[0].route[1]`, {});
            }
        }
    ]);
    return r;
})(Component);
export default b;
