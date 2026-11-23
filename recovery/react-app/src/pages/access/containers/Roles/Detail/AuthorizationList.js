import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module857 from "unpacked/module-857.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import Module802 from "components/Base/Card";
import Module4004 from "unpacked/module-4004.js";
import module441 from "stores/role";
let l;
const E = inject("detailStore")(l = observer(l = ((Component_1)=>{
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
        e.store = e.props.detailStore;
        e.newRoleStore = new module441;
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const roleType = this.props.roleType;
                this.newRoleStore.fetchRoleTemplates("namespace", `iam.kubesphere.io/scope=namespace,${roleType ? `${roleType}/` : ""}kubesphere.io/managed=true`);
            }
        },
        {
            key: "render",
            value: function() {
                const e = module14.toJS(this.store);
                const { detail, isLoading, roleCategory } = e;
                const roleTemplates = module14.toJS(this.newRoleStore).roleTemplates;
                const templates = module857(roleTemplates.data.filter((e)=>module26(e, 'labels["iam.kubesphere.io/category"]') && (detail == null ? undefined : detail.roleTemplates.includes(e.name))), 'labels["iam.kubesphere.io/category"]');
                return <Module802 title={t("PERMISSION_PL")} empty={t("NO_PERMISSION")} loading={isLoading || roleTemplates.isLoading} isEmpty={Object.keys(templates).length <= 0}><Module4004 templates={templates} roleCategory={roleCategory}/></Module802>;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default E;
