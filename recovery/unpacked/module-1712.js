import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-320.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
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
import module186 from "./module-186.js";
import Module791 from "./module-791.js";
import { RadonDBAppIds } from "./module-817.js";
import module26 from "./module-26.js";
import module241 from "./module-241.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import { Component } from "./module-553.js";
import { showNameAndAlias } from "./module-52.js";
import { compareVersion } from "./module-917.js";
import { PATTERN_SERVICE_NAME } from "./module-72.js";
import module3142 from "./module-3142.js";
import Module3143 from "./module-3143.js";
let c;
let s;
const A = observer((s = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.versionOptionRender = function({ label, value }) {
            return <span style={{
                display: "flex",
                alignItem: "center"
            }}>{label}  {value === e.latestVersion && <module186.Tag type="warning">{t("LATEST_VERSION_SCAP")}</module186.Tag>}</span>;
        };
        e.fetchVersions = async function t() {
            let a;
            let r;
            let app_id;
            let l;
            let u;
            const c = arguments;
            a = c.length > 0 && c[0] !== undefined ? c[0] : {};
            r = e.props;
            app_id = r.appId;
            l = r.versionStore;
            u = r.fromStore;
            return l.fetchList({
                ...a,
                app_id,
                status: u ? "active" : undefined
            });
        };
        e.handleVersionChange = function(version_id) {
            e.props.fileStore.fetch({
                version_id
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "renderStaticPlacement",
            value: function() {
                const props = this.props;
                const { cluster, namespace, workspace } = props;
                return <div className={module3142.placementWrapper}><div className={module3142.placementContent}><Module791 title={showNameAndAlias(workspace, "workspace")} description={t("WORKSPACE")}/><Module791 title={showNameAndAlias(cluster, "cluster")} description={t("CLUSTER")}/><Module791 icon="project" title={showNameAndAlias(namespace, "project")} description={t("PROJECT")}/></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formData, formRef, namespace, versionStore } = props;
                return <div className={module3142.wrapper}><module186.Form data={formData} ref={formRef}><div className={module3142.title}>{t("BASIC_INFORMATION")}</div><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("CLUSTER_NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_SERVICE_NAME,
                        message: t("CLUSTER_NAME_DESC")
                    }
                ]}><module186.Input name="name" maxLength={32}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("VERSION")} rules={[
                    {
                        required: true,
                        message: t("VERSION_EMPTY_DESC")
                    }
                ]}><module186.Select name="version_id" options={this.sortedVersions} placeholder=" " pagination={module241(versionStore.list, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={versionStore.list.isLoading} onFetch={this.fetchVersions} onChange={this.handleVersionChange} optionRenderer={this.versionOptionRender} valueRenderer={this.versionOptionRender}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="description" maxLength={256}/></module186.Form.Item></module186.Column><module186.Column/></module186.Columns><br/><div className={module3142.title}>{t("LOCATION")}</div><div className={module3142.placement}>{namespace ? this.renderStaticPlacement() : <module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("PROJECT_NOT_SELECT_DESC")
                    }
                ]}><Module3143 name="namespace" {...this.props}/></module186.Form.Item>}</div></module186.Form></div>;
            }
        },
        {
            key: "sortedVersions",
            get: function() {
                const appId = this.props.appId;
                const t = RadonDBAppIds.includes(appId);
                return this.props.versionStore.list.data.map((e)=>({
                        label: e.name,
                        value: t ? e.name : e.version_id
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
})(Component), module49(s.prototype, "sortedVersions", [
    module14.computed
], Object.getOwnPropertyDescriptor(s.prototype, "sortedVersions"), s.prototype), module49(s.prototype, "latestVersion", [
    module14.computed
], Object.getOwnPropertyDescriptor(s.prototype, "latestVersion"), s.prototype), c = s)) || c;
export default A;
