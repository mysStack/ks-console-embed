import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module791 from "components/Base/Text";
import Module885 from "components/EditMode";
import module26 from "unpacked/module-26.js";
import module2677 from "unpacked/module-2677.js";
const h = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleTypeChange = function(connectType) {
            t.setState({
                connectType
            });
        };
        t.state = {
            connectType: module26(e.formTemplate, "spec.connection.type", "direct")
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate } = props;
                const connectType = this.state.connectType;
                return <div><module186.Form data={formTemplate} ref={formRef}><module186.Form.Item label={t("CONNECTION_MODE")} desc={t("CLUSTER_CONNECT_MODE_DESC")}><module186.Select name="spec.connection.type" options={this.types} onChange={this.handleTypeChange}/></module186.Form.Item>{connectType === "direct" && <div className={module2677.tip}>{t.html("CLUSTER_DIRECT_IMPORT_TIP")}</div>}{connectType === "direct" ? <div className={module2677.editorWrapper}><div className={module2677.editor}><div className={module2677.editorTitle}><div><module186.Icon name="kubernetes" size={20}/>{t("INPUT_KUBECONFIG")}</div></div><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("INPUT_KUBECONFIG")
                    }
                ]} unControl><Module885 mode="yaml" name="spec.connection.kubeconfig" options={this.editOptions}/></module186.Form.Item></div></div> : <div className={module2677.tip}><Module791 title={t("CLUSTER_AGENT_TITLE")} description={t("CLUSTER_AGENT_DESC")}/><div className="margin-t12">{t.html("CLUSTER_AGENT_IMPORT_TIP")}</div></div>}</module186.Form></div>;
            }
        },
        {
            key: "types",
            get: function() {
                const e = [
                    {
                        label: t("CONNTECT_DIRECT"),
                        value: "direct"
                    }
                ];
                if (globals.app.hasKSModule("tower") && globals.app.isLicenseAuthorized("tower")) {
                    e.push({
                        label: t("CONNTECT_PROXY"),
                        value: "proxy"
                    });
                }
                return e;
            }
        },
        {
            key: "editOptions",
            get: function() {
                return {
                    width: "100%",
                    height: "100%"
                };
            }
        }
    ]);
    return r;
})(Component);
export default h;
