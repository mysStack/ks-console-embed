import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
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
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import Module790 from "components/Base/Panel";
import Module791 from "components/Base/Text";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import module445 from "stores/workspace";
import { showNameAndAlias } from "utils/index";
import module4015 from "unpacked/module-4015.js";
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
