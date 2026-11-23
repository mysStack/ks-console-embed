import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-84.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import module186 from "./module-186.js";
import Module818 from "./module-818.js";
import Module1100 from "./module-1100.js";
import Module1772 from "./module-1772.js";
import Module3567 from "./module-3567.js";
import module3568 from "./module-3568.js";
const _ = [
    {
        icon: "snapshot",
        value: "snapshot",
        get label () {
            return t("CREATE_VOLUME_BY_SNAPSHOT");
        },
        get description () {
            return t("SELECT_SNAPSHOT_TO_CREATE_VOLUME");
        }
    },
    {
        icon: "database",
        value: "storageClass",
        get label () {
            return t("CREATE_VOLUME_BY_STORAGE_CLASS");
        },
        get description () {
            return t("SELECT_STORAGE_CLASS_CREATE_VOLUME");
        }
    },
    {
        icon: "meta-data",
        value: "pv",
        get label () {
            return t("BIND_EXISTING_PVC");
        },
        get description () {
            return t("BIND_EXISTING_PVC_DESC");
        }
    }
];
const O = (formTemplate)=>{
    if (module26(formTemplate, "spec.volumeName")) {
        return "pv";
    }
    if (module26(formTemplate, "spec.dataSource.name")) {
        return "snapshot";
    }
    return "storageClass";
};
const C = ((Component_1)=>{
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
        e.state = {
            fromSnapshot: O(e.formTemplate)
        };
        e.isClusterAdmin = function() {
            return module26(window, "globals.user.globalRules.clusters", []).includes("manage");
        };
        e.handleChangePv = function(t, a) {
            const n = a.find((e)=>e?.name === t) ?? {};
            module74(e.fedFormTemplate, "spec.accessModes", n.accessModes);
            module74(e.fedFormTemplate, "spec.resources.requests.storage", n.capacity);
            module74(e.fedFormTemplate, "spec.storageClassName", n.storageClassName);
            module74(e.fedFormTemplate, "spec.volumeMode", n.volumeMode);
        };
        e.handleChange = function(fromSnapshot) {
            if (fromSnapshot !== e.state.fromSnapshot) {
                module242(e.fedFormTemplate, "spec.storageClassName");
                module74(e.fedFormTemplate, "spec.accessModes", []);
                module74(e.fedFormTemplate, "spec.dataSource", {});
                module74(e.fedFormTemplate, "spec.resources.requests.storage", "0Gi");
                e.setState({
                    fromSnapshot
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, isFederated, cluster } = props;
                const fromSnapshot = this.state.fromSnapshot;
                return <module186.Form data={this.fedFormTemplate} ref={formRef} className={module3568.wrapper}>{!isFederated && <module186.Form.Item label={t("CREATION_METHOD")}><Module818 value={fromSnapshot} options={this.createTypeOption} onChange={this.handleChange}/></module186.Form.Item>}{fromSnapshot === "snapshot" && <Module1772 namespace={module26(this.formTemplate, "metadata.namespace")} cluster={cluster}/>}{fromSnapshot === "pv" && <module186.Form.Item label={t("PERSISTENT_VOLUME")} rules={[
                    {
                        required: true,
                        message: t("PLEASE_SELECT_PERSISTENT_VOLUME")
                    }
                ]} desc={this.isClusterAdmin() && this.props.onAddPv ? <span className={module3568.action} onClick={this.props.onAddPv}>{t.html("ADMIN_CREATE_PV_DESC")}</span> : t("PV_EMPTY_DESC")}><Module3567 name="spec.volumeName" onChange={this.handleChangePv}/></module186.Form.Item>}{fromSnapshot !== "snapshot" && fromSnapshot !== "pv" && <Module1100 cluster={cluster} isFederated={isFederated}/>}</module186.Form>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        },
        {
            key: "fedFormTemplate",
            get: function() {
                if (this.props.isFederated) {
                    return module26(this.formTemplate, "spec.template");
                }
                return this.formTemplate;
            }
        },
        {
            key: "createTypeOption",
            get: function() {
                const e = module136(_);
                if (!globals.app.hasKSModule("storage-utils")) {
                    e.shift();
                }
                return e;
            }
        }
    ]);
    return r;
})(Component);
export default C;
