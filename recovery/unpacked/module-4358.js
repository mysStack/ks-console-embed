import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject } from "./module-239.js";
import module26 from "./module-26.js";
import Module4359 from "./module-4359.js";
import module4361 from "./module-4361.js";
let o;
const g = inject("workspaceStore")(o = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = r.call(this, ...n);
        e.getData = function() {
            e.store.fetchDetail(e.params);
        };
        e.handleMoreMenuClick = function(t, r) {
            const a = e.enabledItemActions.find((e)=>e.key === r);
            if (a && a.onClick) {
                a.onClick();
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const r = module14.toJS(this.store.clusters.data);
                return <div><div className={module4361.title}>{t("RESOURCE_QUOTA_PL")}</div>{r.map((cluster)=><Module4359 key={cluster.name} cluster={cluster} {..._this.props.match.params} canEdit={_this.canEdit}/>)}</div>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.workspaceStore;
            }
        },
        {
            key: "params",
            get: function() {
                return module26(this.props.match, "params", {});
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "workspace-settings",
                    workspace: this.params.workspace
                });
            }
        },
        {
            key: "canEdit",
            get: function() {
                return this.enabledActions.includes("edit");
            }
        }
    ]);
    return a;
})(Component)) || o;
export default g;
