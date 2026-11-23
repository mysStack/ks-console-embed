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
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module791 from "./module-791.js";
import module790 from "./module-790.js";
import module437 from "./module-437.js";
import { trigger } from "./module-792.js";
import module4939 from "./module-4939.js";
let c;
const b = inject("rootStore", "projectStore")(c = observer(c = trigger(c = ((e)=>{
    module55(a, e);
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
        e.state = {
            showTip: false
        };
        e.store = new module437({
            module: "limitranges"
        });
        e.showSetting = function() {
            const e_params = e.params;
            const { namespace, workspace } = e_params;
            const data = e.store.list.data;
            e.trigger("project.default.resource", {
                ...e.params,
                detail: data[0],
                isFederated: true,
                workspace,
                name: namespace,
                clusters: e.clusters,
                projectDetail: e.props.projectStore.detail,
                success: function() {
                    return e.setState({
                        showTip: false
                    });
                }
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                const namespace = this.params.namespace;
                this.store.fetchListByK8s({
                    namespace
                }).then(()=>{
                    const total = _this.store.list.total;
                    _this.setState({
                        showTip: total === 0
                    });
                });
            }
        },
        {
            key: "render",
            value: function() {
                if (this.state.showTip) {
                    return module553.default.createElement(module790, {
                        className: module4939.wrapper
                    }, module553.default.createElement(module791, {
                        className: module4939.text,
                        icon: "exclamation",
                        title: t("DEFAULT_CONTAINER_QUOTAS_NOT_SET"),
                        description: t("DEFAULT_CONTAINER_QUOTAS_DESC")
                    }), module553.default.createElement(module186.Button, {
                        type: "control",
                        onClick: this.showSetting
                    }, t("EDIT_QUOTAS")));
                }
                return null;
            }
        },
        {
            key: "params",
            get: function() {
                return module26(this.props.match, "params", {});
            }
        },
        {
            key: "clusters",
            get: function() {
                return module26(this.props.projectStore, "detail.clusters", []).map((e)=>e.name);
            }
        }
    ]);
    return a;
})(module553.Component)) || c) || c) || c;
export default b;
