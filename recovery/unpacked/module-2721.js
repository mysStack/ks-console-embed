import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import Module816 from "./module-816.js";
import { Text } from "./module-904.js";
import { ClusterTagGroup } from "./module-925.js";
import module2722 from "./module-2722.js";
import module_937 from "./module-937.js";
let o;
let u;
let c;
const O = module_937([
    "chain-off-duotone"
])((c = u = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.handleChange = function(e) {
            const n_props = n.props;
            const { onAdd, onDelete, data } = n_props;
            if (e) {
                if (onAdd) {
                    onAdd(data);
                }
            } else if (onDelete) {
                onDelete(data);
            }
        };
        n.renderPopconfirm = function() {
            const n_props = n.props;
            const { onUnBind, data } = n_props;
            return <div><div className={module2722.body}><div className={module2722.header}><module186.Icon name="information" type="green" size={20}/><span>{t("REMOVE_TAG")}</span></div><div className={module2722.desc}>{t("REMOVE_TAG_DESC")}</div></div><div className={module2722.footer}><module186.Button>{t("CANCEL")}</module186.Button><module186.Button type="control" onClick={function() {
                return onUnBind(data);
            }}>{t("OK")}</module186.Button></div></div>;
        };
        n.state = {};
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                let e;
                const props = this.props;
                const { data, isExpired, isChecked, hasBundled } = props;
                return <li className={module3(module2722.wrapper, (e = {}, module31(e, module2722.itemWithCheckbox, !hasBundled), module31(e, module2722.itemWithButton, hasBundled), e))} data-test="cluster-item">{!hasBundled && <div><module186.Checkbox checked={isChecked} disabled={data.tags.length >= 5} onChange={this.handleChange}/></div>}<Module816 cluster={data} isExpired={isExpired}/><Text title=<ClusterTagGroup empty="-" data={data?.tags ?? []}/> description={t("TAG_PL")}/>{hasBundled && <div><module186.Dropdown className={module2722.popconfirm} content={this.renderPopconfirm()} placement="left"><module186.Button className={module2722.itemCloseButton}><module186.Icon name="chain-off-duotone"/></module186.Button></module186.Dropdown><span className={module2722.itemCloseIcon}><module186.Icon name="chain-off-duotone"/></span></div>}</li>;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    data: module1.object,
    isExpired: module1.bool,
    isChecked: module1.bool,
    hasBundled: module1.bool,
    onAdd: module1.func,
    onDelete: module1.func,
    onUnBind: module1.func
}, o = c)) || o;
export default O;
