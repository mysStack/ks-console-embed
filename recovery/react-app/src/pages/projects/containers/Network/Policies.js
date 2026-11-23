import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module186 from "unpacked/module-186.js";
import Module790 from "components/Base/Panel";
import Module793 from "unpacked/module-793.js";
import Module833 from "unpacked/module-833.js";
import { ICON_TYPES } from "utils/constants";
import { htmlLinkControl } from "utils/index";
import Module4655 from "pages/projects/containers/Network/Policies/RuleInfo";
import Module4658 from "pages/projects/containers/Network/Policies/IsolateInfo";
import module4660 from "unpacked/module-4660.js";
let o;
const D = inject("projectStore")(o = observer(o = ((Component_1)=>{
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
        n.name = "NETWORK_ISOLATION";
        n.module = "namespacenetworkpolicies";
        n.tips = function() {
            const e = t.html("NETWORK_POLICY_A1");
            return [
                {
                    title: t("NETWORK_ISOLATION_Q"),
                    description: t.html("NETWORK_POLICY_A")
                },
                {
                    title: t("NETWORK_ISOLATION_Q1"),
                    description: htmlLinkControl(e)
                }
            ];
        };
        n.toggleNetworkIsolate = function(e = true) {
            const t = {};
            module74(t, 'metadata.annotations["kubesphere.io/network-isolate"]', e ? "enabled" : "");
            n.projectStore.patch({
                name: n.namespace,
                cluster: n.cluster
            }, t).then(()=>{
                n.projectStore.fetchDetail(n.params);
            });
        };
        n.handleEditNetworkIsolate = function(e) {
            n.toggleNetworkIsolate(e);
        };
        n.projectStore = n.props.projectStore;
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const module = this.module;
                const name = this.name;
                const tips = this.tips;
                const namespace = this.namespace;
                const cluster = this.cluster;
                const workspace = this.workspace;
                const isSubmitting = this.projectStore.isSubmitting;
                const networkIsolate = module26(this.projectStore, 'detail.annotations["kubesphere.io/network-isolate"]') === "enabled";
                const canEdit = this.enabledActions.includes("edit");
                return <div><Module793 module={module} className="margin-b12" title={t(name)} tips={tips()} description={t("NETWORK_ISOLATION_DESC")}/><div className={module4660.subtitle}>{t(name)}</div>{networkIsolate ? <Module790 className={module4660.wrapper}><Module4658 module={module} networkIsolate={networkIsolate} onEdit={this.handleEditNetworkIsolate} canEdit={canEdit} {...this.props}/><Module4655 module={module} namespace={namespace} cluster={cluster} workspace={workspace} canEdit={canEdit} {...this.props}/></Module790> : <Module833 icon={ICON_TYPES[module]} title={t("NETWORK_POLICY_EMP_TITLE")} desc={t("NETWORK_POLICY_EMP_DESC")} className={module4660.eplist} actions={canEdit && <module186.Button type="control" loading={isSubmitting} onClick={this.toggleNetworkIsolate}>{t("ENABLE")}</module186.Button>}/>}</div>;
            }
        },
        {
            key: "params",
            get: function() {
                return module26(this.props.match, "params", {});
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.params, "namespace");
            }
        },
        {
            key: "cluster",
            get: function() {
                return module26(this.params, "cluster");
            }
        },
        {
            key: "workspace",
            get: function() {
                return module26(this.projectStore, "detail.workspace", "");
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "networkpolicies",
                    ...this.params,
                    project: this.params.namespace
                });
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default D;
