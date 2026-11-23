import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import { inject, observer } from "unpacked/module-239.js";
import module3 from "unpacked/module-3.js";
import Module790 from "components/Base/Panel";
import module186 from "unpacked/module-186.js";
import { isEdgeWizePage } from "utils/index";
import Module851 from "unpacked/module-851.js";
import Module945 from "pages/projects/components/Cards/Placement";
import module1831 from "unpacked/module-1831.js";
import Module3919 from "pages/projects/containers/Volumes/Detail/ResourceStatus/UsageCard";
import module3922 from "unpacked/module-3922.js";
let l;
const k = inject("detailStore")(l = observer(l = ((Component_1)=>{
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
        n.isEdgeWize = isEdgeWizePage();
        n.renderResizeItem = function({ src, title, des, iconName, key }) {
            return <div key={key} className={module3(module3922.item, module3922.item_bg)}>{iconName ? <module186.Icon name={iconName} size={40}/> : <img src={src} className={module3922.icon}/>}<div><span className={module3922.resize_title}>{title}</span><span className={module3922.des}>{des}</span></div></div>;
        };
        n.renderResize = function() {
            const annotations = n.props.detailStore.detail.annotations;
            const a = JSON.parse(module26(annotations, "resize.kubesphere.io/enabled", "false"));
            const r = JSON.parse(module26(annotations, "restart.kubesphere.io/enabled", "false"));
            const l = module26(annotations, "resize.kubesphere.io/storage-limit", "10000Gi");
            const u = module26(annotations, "resize.kubesphere.io/threshold", "10%");
            const o = module26(annotations, "resize.kubesphere.io/increase", "10%");
            const value = module26(annotations, "restart.kubesphere.io/max-time", "300");
            const c = {
                title: t("VALUE_TIMEOUT", {
                    value
                }),
                src: "/assets/history_duotone.svg",
                des: t("RESTART_WORKLOAD_AUTOMATICALLY")
            };
            const s = [
                {
                    iconName: "storage",
                    title: l,
                    des: t("MAXIMUM_SIZE_SCAP")
                },
                {
                    src: "/assets/chart.svg",
                    title: u,
                    des: t("THRESHOLD")
                },
                {
                    iconName: "stretch",
                    title: o,
                    des: t("INCREMENT")
                }
            ];
            if (r) {
                s.push(c);
            }
            return a && <Module790><div className={module3(module3922.item, module3922.top)}><img src="/assets/storageclass_autoresizer.svg" className={module3922.icon}/><div><span className={module3922.resize_title}>{t("AUTO_EXPANSION")}</span><span className={module3922.des}>{t("AUTO_EXPANSION_DESC")}</span></div></div><div className={module3922.bottom}>{s.map((e, key)=>n.renderResizeItem({
                    ...e,
                    key
                }))}</div></Module790>;
        };
        const params = n.props.match.params;
        const { cluster, namespace, name } = params;
        n.monitor = new module1831({
            cluster,
            namespace,
            pvc: name
        });
        return n;
    }
    module37(r, [
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "module",
            get: function() {
                return this.props.module;
            }
        },
        {
            key: "canViewPods",
            get: function() {
                return globals.app.hasPermission({
                    skipAuth: this.isEdgeWize,
                    ...this.props.match.params,
                    module: "pods",
                    action: "view"
                });
            }
        },
        {
            key: "prefix",
            get: function() {
                if (!this.canViewPods) {
                    return null;
                }
                const params = this.props.match.params;
                const { workspace, cluster } = params;
                return `${this.isEdgeWize ? "/v2/edgewize" : ""}${workspace ? `/${workspace}` : ""}/clusters/${cluster}`;
            }
        }
    ]);
    module37(r, [
        {
            key: "renderPlacement",
            value: function() {
                const params = this.props.match.params;
                const { name, namespace } = params;
                if (this.store.detail.isFedManaged) {
                    return <Module945 isEdgeWizePage={this.isEdgeWize} module={this.store.module} name={name} namespace={namespace}/>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const detail = {
                    kind: "PVC",
                    ...module26(this.props.match, "params")
                };
                const cluster = this.props.match.params.cluster;
                return <div className={module3922.main}>{this.renderResize()}{globals.app.hasClusterModule(cluster, "whizard-monitoring") && <Module3919 isEdgeWizePage={this.isEdgeWize} title={t("PERSISTENT_VOLUME")} store={this.monitor}/>}<Module851 isEdgeWizePage={this.isEdgeWize} title={t("MOUNTED_PODS")} detail={detail} prefix={this.prefix}/></div>;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default k;
