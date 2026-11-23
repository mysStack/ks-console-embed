import "./module-15.js";
import "./module-11.js";
import "./module-29.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import { observer } from "./module-239.js";
import module14 from "./module-14.js";
import { Modal } from "components/Base/index";
import { ClusterTagAdd } from "./module-925.js";
import module2725 from "./module-2725.js";
let o;
const S = observer(o = ((Component_1)=>{
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
        t.handleChange = function(value) {
            t.setState({
                value
            });
        };
        t.handleOk = function() {
            const t_props = t.props;
            const { onOk, defaultValue } = t_props;
            const value = t.state.value;
            onOk((value === undefined ? [] : value).filter((e)=>!defaultValue.find((t)=>t.name === e.name)));
        };
        t.state = {
            list: e.list,
            value: e.value
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { tagsGroup: _tagsGroup, tags, onAddTags, defaultValue = [], ...rest } = props;
                const value = this.state.value;
                return <Modal width={600} {...rest} onOk={this.handleOk}><div className={module2725.wrapper}><module186.Alert type="info" message={t("ADD_TAG_DESC")}/><div className={module2725.title}>{t("ADD_TAGS")}</div><ClusterTagAdd value={value} tagsGroup={module14.toJS(this.props.store.tagsGroup)} onChange={this.handleChange} defaultValue={defaultValue} onAddTags={onAddTags} tags={tags}/></div></Modal>;
            }
        }
    ]);
    return r;
})(Component)) || o;
export default S;
