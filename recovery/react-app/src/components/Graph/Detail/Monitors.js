import "unpacked/module-15.js";
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
import module186 from "unpacked/module-186.js";
import Module4761 from "components/Graph/Detail/Monitors/ServiceMonitor";
import Module4762 from "components/Graph/Detail/Monitors/WorkloadMonitor";
const m = ((Component_1)=>{
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
        t.handleTypeChange = function(type) {
            t.setState({
                type
            });
        };
        t.state = {
            type: "service"
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const type = this.state.type;
                return <div><module186.RadioGroup mode="button" buttonWidth={50} value={this.state.type} onChange={this.handleTypeChange} options={this.types}/>{type === "service" ? <Module4761 {...this.props}/> : <Module4762 {...this.props}/>}</div>;
            }
        },
        {
            key: "types",
            get: function() {
                return [
                    {
                        label: t("SERVICE_PL"),
                        value: "service"
                    },
                    {
                        label: t("WORKLOAD_PL"),
                        value: "workload"
                    }
                ];
            }
        }
    ]);
    return r;
})(Component);
export default m;
