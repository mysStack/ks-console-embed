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
import module4015 from "./module-4015.js";
let o;
let u;
const T = inject("detailStore")(o = observer((u = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((e)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.store = e.props.detailStore;
        e.workspaceStore = new module445;
        e.fetchWorkspaces = function() {
            const detail = e.store.detail;
            const r = module26(detail, "status.workspaces", {});
            e.workspaceStore.fetchList({
                names: Object.keys(r).join(","),
                limit: -1
            });
        };
        return e;
    }
    module37(n, [
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
                const r = module26(detail, "status.workspaces", {});
                const workspaces = this.workspaces;
                return <Module790 title={t("WORKSPACES")}><div className={module4015.wrapper}>{module63(r) && <div className={module4015.empty}>{t("IPPOOL_WORKSPACE_EMPTY_TIP")}</div>}{Object.keys(r).map((e)=>{
                    const a = workspaces[e] || {};
                    return <div key={e} className={module4015.item}><Module791 icon="enterprise" title={showNameAndAlias(a)} description={a.description || t("WORKSPACE")}/><Module791 title={r[e].allocations} description={t("USED_IP_ADDRESSES")}/><Module791 title={a.manager} description={t("MANAGER")}/></div>;
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
    return n;
})(Component), module49(u.prototype, "workspaces", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "workspaces"), u.prototype), o = u)) || o) || o;
export default T;
