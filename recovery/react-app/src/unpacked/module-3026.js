import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
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
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module241 from "./module-241.js";
import Module788 from "components/Base/Modal";
import module186 from "./module-186.js";
import module1009 from "./module-1009.js";
import module3027 from "./module-3027.js";
let l;
const _ = observer(l = ((Component_1)=>{
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
        e.store = new module1009;
        e.state = {
            selected: ""
        };
        e.formRef = createRef();
        e.fetchList = function(t) {
            const cluster = e.props.cluster;
            e.store.fetchList({
                ...t,
                cluster,
                labelSelector: "vcluster.loft.sh/fake-node!=true",
                type: ""
            });
        };
        e.handleOnOk = function() {
            e.props.onOk(e.state.selected);
        };
        e.handleSelect = function(selected) {
            e.setState({
                selected
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchList();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                const selected = this.state.selected;
                const pagination = module241(this.store.list, [
                    "page",
                    "limit",
                    "total"
                ]);
                const { data = [], isLoading } = module14.toJS(this.store.list);
                return <Module788 visible={visible} width={600} title={t("BOUND_EDGE_NODE")} onOk={this.handleOnOk} onCancel={onCancel}><module186.Form.Item label={t("EDGE_NODE")} desc={t("SELECT_A_CLUSTER")}><module186.Select className={module3027.Select} value={selected} options={data.map((e)=>({
                        label: e.name,
                        value: e.name
                    }))} pagination={pagination} isLoading={isLoading} onFetch={this.fetchList} onChange={this.handleSelect} placeholder=" "/></module186.Form.Item></Module788>;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default _;
