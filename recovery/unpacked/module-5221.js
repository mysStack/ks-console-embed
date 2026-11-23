import "./module-15.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
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
import module1 from "./module-1.js";
import module831 from "./module-831.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module14 from "./module-14.js";
import { CLUSTER_GROUP_TAG_TYPE } from "./module-72.js";
const v = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(e) {
        let r;
        module36(this, n);
        r = a.call(this, e);
        r.groupOptionRenderer = function(e) {
            return <><module186.Tag type={CLUSTER_GROUP_TAG_TYPE[e.value]}>{t(`ENV_${e.label.toUpperCase()}`)}</module186.Tag>  {e.label}</>;
        };
        r.providerOptionRenderer = function(e) {
            return <><module186.Icon name={e.icon} type="light" size={20}/>{e.label}</>;
        };
        r.handleOk = function(e) {
            r.props.onOk(e);
        };
        r.handleRegionSelect = function(region) {
            r.setState({
                region
            });
        };
        r.state = {
            region: module26(e.detail, 'metadata.labels["topology.kubernetes.io/region"]', ""),
            formData: module831(module14.toJS(e.detail._originData))
        };
        return r;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onCancel } = props;
                const formData = this.state.formData;
                return <module788.Form data={formData} width={691} title={t("EDIT_INFORMATION")} description={t("EDIT_CLUSTER_INFO_DESC")} icon="cluster" onOk={this.handleOk} okText={t("OK")} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Form.Item label={t("CLUSTER_NAME")} desc={t("NAME_DESC")}><module186.Input name="metadata.name" disabled/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module788.Form>;
            }
        },
        {
            key: "regions",
            get: function() {
                return module26(globals.config, "regionZones", []).map((e)=>({
                        label: e.alias,
                        value: e.name
                    }));
            }
        },
        {
            key: "zones",
            get: function() {
                const _this = this;
                const t = module26(globals.config, "regionZones", []).find((t)=>t.name === _this.state.region);
                if (t && t.zones) {
                    return t.zones.map((e)=>({
                            label: e.alias,
                            value: e.name
                        }));
                }
                return [];
            }
        }
    ]);
    return n;
})(Component);
export default v;
v.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
v.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
