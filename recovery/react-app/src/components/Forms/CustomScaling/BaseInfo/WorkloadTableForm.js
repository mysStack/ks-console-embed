import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import { ReactComponent } from "unpacked/module-882.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import { Component } from "unpacked/module-553.js";
import module318 from "stores/workload/index";
import module1359 from "unpacked/module-1359.js";
import Module2910 from "components/Forms/CustomScaling/BaseInfo/WorkloadTableForm/WorkloadTable";
let l;
let o;
let u;
function C(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const T = {
    deployments: "Deployment",
    statefulsets: "StatefulSet"
};
const R = observer((u = o = ((Component_1)=>{
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
        t.handleGoBack = function() {
            const resetSubRoute = t.context.resetSubRoute;
            if (resetSubRoute) {
                resetSubRoute();
            }
            t.props.onCancel();
        };
        t.handleSubmit = function(e) {
            t.props.onSave(t.state.workloadData);
            if (e) {
                e();
            }
        };
        t.handleTypeChange = function(e) {
            const formTemplate = t.props.formTemplate;
            module74(formTemplate, "spec.scaleTargetRef.kind", T[e]);
            t.store = new module318(e);
            t.setState({
                type: e,
                workloadData: undefined
            });
        };
        t.fetchList = function(e) {
            const t_props = t.props;
            const { namespace, cluster } = t_props;
            t.store.fetchList({
                cluster,
                namespace,
                labelSelector: "!autoscaling.kubeshpere.io/name",
                annotation: "!kubesphere.io/relatedHPA",
                ...e
            });
        };
        t.handleSelectWorkload = function(workloadData) {
            t.setState({
                workloadData
            });
        };
        t.state = {
            type: "deployments",
            workloadData: undefined
        };
        t.store = new module318("deployments");
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const onCancel = this.props.onCancel;
                const registerSubRoute = this.context.registerSubRoute;
                if (registerSubRoute) {
                    registerSubRoute(this.handleSubmit, onCancel);
                }
                const formTemplate = this.props.formTemplate;
                module74(formTemplate, "spec.scaleTargetRef.kind", T.deployments);
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { type, workloadData } = state;
                return <div className={module1359.wrapper}><div className="h6"><a className="icon" onClick={this.handleGoBack}><ReactComponent/></a>{t("ADD_WORKLOAD")}</div><div className={module1359.content}><module186.RadioGroup mode="button" buttonWidth={155} value={type} onChange={this.handleTypeChange}><module186.RadioButton value="deployments">{t("DEPLOYMENT_PL")}</module186.RadioButton><module186.RadioButton value="statefulsets">{t("STATEFULSET_PL")}</module186.RadioButton></module186.RadioGroup><div className={module1359.tableWrapper}><Module2910 key={type} fetchList={this.fetchList} list={module14.toJS(this.store.list)} module={type} checkedValue={workloadData} handleSelectWorkload={this.handleSelectWorkload}/></div></div></div>;
            }
        }
    ]);
    return r;
})(Component), o.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
}, l = u)) || l;
export default R;
