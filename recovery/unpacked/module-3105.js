import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-320.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module241 from "./module-241.js";
import module186 from "./module-186.js";
import Module842 from "./module-842.js";
import Module788 from "./module-788.js";
import module943 from "./module-943.js";
import module936 from "./module-936.js";
import { compareVersion } from "./module-917.js";
import module3106 from "./module-3106.js";
let c;
let s;
let i;
let f;
const L = observer((f = i = ((Component_1)=>{
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
        n.updateValuesYaml = function() {
            const files = n.fileStore.files;
            if (files && files["values.yaml"]) {
                module74(n.state.formData, "conf", files["values.yaml"]);
                n.setState({
                    valuesYaml: files["values.yaml"],
                    loadingFile: false
                });
            } else {
                n.setState({
                    loadingFile: false
                });
            }
        };
        n.versionOptionRender = function({ label, value }) {
            return <span style={{
                display: "flex",
                alignItem: "center"
            }}>{label}  {value === n.latestVersion && <module186.Tag type="warning">{t("LATEST_VERSION")}</module186.Tag>}</span>;
        };
        n.fetchVersions = async function e() {
            let t;
            let a;
            const r = arguments;
            t = r.length > 0 && r[0] !== undefined ? r[0] : {};
            a = n.props.detail;
            return n.versionStore.fetchList({
                ...t,
                app_id: a.app_id
            });
        };
        n.handleVersionChange = function(version_id) {
            const detail = n.props.detail;
            module74(n.state.formData, "version_id", version_id);
            n.setState({
                loadingFile: true,
                valuesYaml: ""
            });
            n.fileStore.fetch({
                app_id: detail.app_id,
                version_id
            }).then(()=>{
                n.updateValuesYaml();
            });
        };
        n.handleYamlChange = function(valuesYaml) {
            const formData = n.state.formData;
            n.setState({
                valuesYaml
            }, function() {
                module74(formData, "conf", valuesYaml);
            });
        };
        n.handleOk = function() {
            n.props.onOk(n.state.formData);
        };
        n.state = {
            currentStep: 0,
            formData: {
                ...module241(e.detail, [
                    "app_id",
                    "cluster_id",
                    "description",
                    "name",
                    "owner",
                    "version_id"
                ]),
                namespace: e.namespace,
                cluster: e.cluster,
                workspace: e.workspace
            },
            valuesYaml: "",
            conf: module26(e.detail, "env", ""),
            loadingFile: false
        };
        n.versionStore = new module943;
        n.fileStore = new module936;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.init();
            }
        },
        {
            key: "init",
            value: function() {
                const _this = this;
                this.setState({
                    loadingFile: true
                });
                this.versionStore.fetchList({
                    app_id: this.props.detail.app_id
                });
                this.fileStore.fetch({
                    app_id: this.props.detail.app_id,
                    version_id: this.state.formData.version_id
                }).then(()=>{
                    _this.updateValuesYaml();
                });
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.props.detail;
                const state = this.state;
                const { valuesYaml, conf, loadingFile } = state;
                return <Module788 title={t("EDIT_APP_SETTINGS")} {...this.props} onOk={this.handleOk} width={1280} okText={t("OK")}><module186.Columns><module186.Column><div className={module3106.label}>{t("CURRENT_APP_VERSION")}</div><module186.Input className="margin-b12" value={detail.version.name} readOnly/><div className={module3106.label}>{t("CURRENT_APP_SETTINGS_READONLY")}</div><module186.Loading spinning={false}><Module842 mode="yaml" className={module3106.readOnly} value={conf} options={{
                    readOnly: true
                }}/></module186.Loading></module186.Column><module186.Column><div className={module3106.label}>{t("TARGET_APP_VERSION")}</div><module186.Select name="version_id" className="margin-b12" value={this.state.formData.version_id} options={this.sortedVersions} placeholder={t("VERSION_EMPTY_DESC")} pagination={module241(this.versionStore.list, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={this.versionStore.list.isLoading} onFetch={this.fetchVersions} onChange={this.handleVersionChange} optionRenderer={this.versionOptionRender} valueRenderer={this.versionOptionRender}/><div className={module3106.label}>{t("TARGET_APP_SETTINGS")}</div><module186.Loading spinning={loadingFile}><Module842 mode="yaml" value={valuesYaml} onChange={this.handleYamlChange}/></module186.Loading></module186.Column></module186.Columns></Module788>;
            }
        },
        {
            key: "sortedVersions",
            get: function() {
                return this.versionStore.list.data.map((e)=>({
                        label: e.name,
                        value: e.version_id
                    })).sort((e, t)=>compareVersion(t.name, e.name));
            }
        },
        {
            key: "latestVersion",
            get: function() {
                return module26(this.sortedVersions, "[0].value", "");
            }
        }
    ]);
    return r;
})(Component), i.propTypes = {
    visible: module1.bool,
    detail: module1.object,
    store: module1.object,
    cluster: module1.string,
    workspace: module1.string,
    namespace: module1.string,
    onOk: module1.func,
    onCancel: module1.func
}, i.defaultProps = {
    visible: false,
    detail: {},
    onOk: function() {},
    onCancel: function() {}
}, s = f, module49(s.prototype, "sortedVersions", [
    module14.computed
], Object.getOwnPropertyDescriptor(s.prototype, "sortedVersions"), s.prototype), module49(s.prototype, "latestVersion", [
    module14.computed
], Object.getOwnPropertyDescriptor(s.prototype, "latestVersion"), s.prototype), c = s)) || c;
export default L;
