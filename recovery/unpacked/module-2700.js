import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module885 from "./module-885.js";
import { PATTERN_IP } from "./module-72.js";
import module955 from "./module-955.js";
import Module1622 from "./module-1622.js";
import module2702 from "./module-2702.js";
let l;
const b = observer(l = ((Component_1)=>{
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
        t.store = new module955;
        t.state = {
            formData: e.formTemplate
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const formRef = this.props.formRef;
                const formData = this.state.formData;
                const n = module26(formData, "spec.type");
                return <module186.Form data={formData} ref={formRef} className={module2702.wrapper}><module186.Form.Item label={t("EDGE_WAY_TO_INSTALL")} desc={t("EDGE_WAY_TO_INSTALL_DESC")}><module186.Select name="spec.type" onChange={function(clusterType) {
                    return _this.setState({
                        clusterType
                    });
                }} options={this.clusterTypes}/></module186.Form.Item>{n === "manual" ? <><div className={module2702.tip}>{t.html("CLUSTER_DIRECT_IMPORT_TIP")}</div><div className={module2702.editorWrapper}><div className={module2702.editorHead}><span className={module2702.title}><module186.Icon name="kubernetes" size={20}/>{t("INPUT_EDGE_KUBECONFIG")}</span></div><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("INPUT_KUBECONFIG")
                    }
                ]} unControl><Module885 className={module2702.editor} mode="yaml" name="spec.kubeconfig" options={{
                    width: "100%",
                    height: "100%"
                }}/></module186.Form.Item></div></> : <><module186.Form.Item label={t("HOSTED_IN")} desc={t("HOSTED_IN_DESC")} rules={[
                    {
                        required: true,
                        message: t("HOSTED_IN_DESC")
                    }
                ]}><module186.Select searchable placeholder=" " name="spec.hostCluster" options={this.clusterOptions}/></module186.Form.Item><module186.Form.Item label={t("ADVERTISE_ADDRESS")} desc={t("ADVERTISE_ADDRESS_DESC")} rules={[
                    {
                        required: true,
                        message: t("HOSTED_IN_EMPTY")
                    },
                    {
                        pattern: PATTERN_IP,
                        message: t("INVALID_IP_DESC")
                    }
                ]}><Module1622 name="spec.advertiseAddress" simpleInput isMultiMode disabled/></module186.Form.Item></>}</module186.Form>;
            }
        },
        {
            key: "clusterTypes",
            get: function() {
                return [
                    {
                        label: "自动安装",
                        value: "auto"
                    },
                    {
                        label: "手动安装",
                        value: "manual"
                    }
                ];
            }
        },
        {
            key: "clusterOptions",
            get: function() {
                const hostedInOptions = this.props.hostedInOptions;
                const t = module26(this.state.formData, "metadata.name");
                if (!globals.app.isMultiCluster && t) {
                    return [
                        {
                            label: t,
                            value: t
                        }
                    ];
                }
                return hostedInOptions;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default b;
