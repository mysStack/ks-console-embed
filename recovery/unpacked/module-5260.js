import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-73.js";
import "./module-18.js";
import "./module-87.js";
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
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import { Component } from "./module-553.js";
import module445 from "./module-445.js";
import { showNameAndAlias } from "./module-52.js";
import module5261 from "./module-5261.js";
let l;
let u;
const k = inject("detailStore")(l = observer((u = ((Component_1)=>{
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
        e.workspaceStore = new module445;
        e.fetchWorkspaces = function() {
            const detail = e.store.detail;
            const a = module26(detail, "status.workspaces", {});
            e.workspaceStore.fetchList({
                names: Object.keys(a).join(","),
                limit: -1
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchWorkspaces();
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.store.detail;
                const a = module26(detail, "status.workspaces", {});
                const workspaces = this.workspaces;
                return <Module790 title={t("WORKSPACES")}><div className={module5261.wrapper}>{module63(a) && <div className={module5261.empty}>{t("IPPOOL_WORKSPACE_EMPTY_TIP")}</div>}{Object.keys(a).map((e)=>{
                    const n = workspaces[e] || {};
                    return <div key={e} className={module5261.item}><Module791 icon="enterprise" title={showNameAndAlias(n)} description={n.description || t("WORKSPACE")}/><Module791 title={a[e].allocations} description={t("USED_IP_ADDRESSES")}/><Module791 title={n.manager} description={t("MANAGER")}/></div>;
                })}</div></Module790>;
            }
        },
        {
            key: "workspaces",
            get: function() {
                return this.workspaceStore.list.data.reduce((acc, item)=>({
                        ...acc,
                        ...module31({}, item.name, item)
                    }), {});
            }
        }
    ]);
    return r;
})(Component), module49(u.prototype, "workspaces", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "workspaces"), u.prototype), l = u)) || l) || l;
export default k;
