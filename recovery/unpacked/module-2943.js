import "./module-15.js";
import "./module-5.js";
import "./module-187.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module830 from "./module-830.js";
import Module868 from "./module-868.js";
import module14 from "./module-14.js";
import module788 from "./module-788.js";
import module74 from "./module-74.js";
import module862 from "./module-862.js";
import module26 from "./module-26.js";
import Module816 from "./module-816.js";
import module2944 from "./module-2944.js";
let l;
l = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.clustersList = module26(e.props.formTemplate, "spec.placement.clusters", []);
        e.formTemplate = {};
        e.handleClusterChange = function(t) {
            module74(e.formTemplate, "clusters", module862(t, "name"));
        };
        e.valueRenderer = function(e) {
            return <Module816 cluster={e.cluster} size="small" noStatus/>;
        };
        e.optionRenderer = function(e) {
            return <Module816 cluster={e.cluster} size="small" theme="light" noStatus/>;
        };
        e.handleOk = function(t) {
            const e_props = e.props;
            const { onOk, formTemplate } = e_props;
            const l = module862([].concat(module61(e.clustersList), module61(t.clusters)), "name");
            const value = module26(formTemplate, "metadata.annotations");
            const c = l.map((e)=>({
                    clusterName: e.name,
                    clusterOverrides: [
                        {
                            path: "/metadata/annotations",
                            value
                        }
                    ]
                }));
            module74(formTemplate, "spec.placement.clusters", l);
            module74(formTemplate, "spec.overrides", c);
            onOk(formTemplate);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onCancel } = props;
                return <module788.Form data={this.formTemplate} width={691} title={t("ADD_CLUSTER")} icon="enterprise" onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><div className={module2944.fedProClusterContainer}><module186.Form.Group><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("CLUSTER_EMPTY_DESC")
                    }
                ]} desc={this.enableAddCluster ? t("FEDPROJECT_CANNOT_ADD_CLUSTER") : null}><Module830 name="clusters" addText={t("ADD_CLUSTER")} itemType="object" onChange={this.handleClusterChange}><Module868><module186.Select name="name" placeholder=" " options={this.clusters} valueRenderer={this.valueRenderer} optionRenderer={this.optionRenderer} showTip/></Module868></Module830></module186.Form.Item></module186.Form.Group></div></module788.Form>;
            }
        },
        {
            key: "clusters",
            get: function() {
                const _this = this;
                return this.props.clusters.map((cluster)=>{
                    const a = _this.clustersList.some((e)=>e.name === cluster.name);
                    return {
                        label: cluster.name,
                        value: cluster.name,
                        cluster,
                        disabled: !cluster.isReady || a
                    };
                });
            }
        },
        {
            key: "enableAddCluster",
            get: function() {
                return this.clusters.every((e)=>e.disabled);
            }
        }
    ]);
    return r;
})(Component);
module49(l.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "clusters"), l.prototype);
module49(l.prototype, "enableAddCluster", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "enableAddCluster"), l.prototype);
export default l;
