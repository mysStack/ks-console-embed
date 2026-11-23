import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
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
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import Module864 from "components/Base/ScrollLoad";
import { isEdgeWizePage } from "utils/index";
import module318 from "stores/workload/index";
import module859 from "unpacked/module-859.js";
import Module2590 from "components/Forms/Service/ServiceSettings/WorkloadSelect/Item";
import module1607 from "unpacked/module-1607.js";
let l;
const D = observer(l = ((Component_1)=>{
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
            }, function() {
                t.store.setModule(t.state.type);
                t.fetchData();
            });
        };
        t.fetchData = function(e = {}) {
            const t_props = t.props;
            const { cluster, namespace } = t_props;
            t.store.fetchList({
                cluster,
                namespace,
                ...e
            });
        };
        t.handleSelect = function(selectItem) {
            t.setState({
                selectItem
            });
        };
        t.handleCancel = function() {
            t.setState({
                selectItem: {}
            }, function() {
                t.props.onCancel();
            });
        };
        t.handleOK = function() {
            const onSelect = t.props.onSelect;
            const selectItem = t.state.selectItem;
            onSelect(module26(selectItem, "_originData.spec.template.metadata.labels", {}));
        };
        t.state = {
            type: "deployments",
            selectItem: {}
        };
        t.store = isEdgeWizePage() ? new module859(t.state.type) : new module318(t.state.type);
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const state = this.state;
                const { type, selectItem } = state;
                const l = module14.toJS(this.store.list);
                const { data, total, page, isLoading } = l;
                return <div><div className={module1607.body}><module186.Alert className="margin-b8" message={t("SELECT_WORKLOAD_DESC")} hideIcon/><module186.RadioGroup mode="button" buttonWidth={120} value={type} onChange={this.handleTypeChange} size="small"><module186.RadioButton value="deployments">{t("DEPLOYMENT_PL")}</module186.RadioButton><module186.RadioButton value="statefulsets">{t("STATEFULSET_PL")}</module186.RadioButton><module186.RadioButton value="daemonsets">{t("DAEMONSET_PL")}</module186.RadioButton></module186.RadioGroup><div className={module1607.workloads}><Module864 data={data} total={total} page={page} loading={isLoading} onFetch={this.fetchData}>{data.map((detail, a)=><Module2590 key={`${detail.uid}${a}`} module={type} detail={detail} onClick={_this.handleSelect} selected={selectItem.uid === detail.uid}/>)}</Module864></div></div><div className={module1607.footer}><module186.Button onClick={this.handleCancel}>{t("CANCEL")}</module186.Button><module186.Button type="control" onClick={this.handleOK}>{t("OK")}</module186.Button></div></div>;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default D;
