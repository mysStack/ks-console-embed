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
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-58.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module321 from "./module-321.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import { trigger } from "./module-792.js";
import module14 from "./module-14.js";
import Module5011 from "./module-5011.js";
import module5015 from "./module-5015.js";
let o;
const k = inject("rootStore", "detailStore", "projectStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = r.call(this, ...n_1);
        e.store = e.props.detailStore;
        e.fetchData = function() {
            const params = e.props.match.params;
            const clusters = e.store.detail.clusters.map((e)=>e.name);
            e.store.fetchDetail(params);
            e.store.fetchResources({
                ...params,
                clusters
            });
        };
        e.handleUpdateService = function(cluster) {
            const e_store = e.store;
            const { detail, resources } = e_store;
            e.trigger("fedservice.gateway.edit", {
                cluster,
                detail: module14.toJS(detail),
                resources: module14.toJS(resources),
                success: e.fetchData
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "renderServiceAccess",
            value: function() {
                const _this = this;
                const { resources = [], isResourcesLoading } = this.store;
                const c = module321(this.props.projectStore.detail.clusters, "name");
                return <module186.Loading spinning={isResourcesLoading}><div><div className={module5015.title}>{t("ACCESS_INFORMATION")}</div>{Object.keys(resources).map((t)=><Module5011 key={t} store={_this.store} detail={resources[t]} cluster={c[t]} enabledActions={_this.enabledActions} updateService={_this.handleUpdateService}/>)}</div></module186.Loading>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module5015.main}>{this.renderServiceAccess()}</div>;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const params = this.props.match.params;
                const { namespace, ...rest } = params;
                return globals.app.getActions({
                    module: "services",
                    ...rest,
                    project: namespace,
                    fedproject: true
                });
            }
        }
    ]);
    return a;
})(Component)) || o) || o) || o;
export default k;
