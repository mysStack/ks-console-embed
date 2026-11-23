import "./module-15.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module875 from "./module-875.js";
import Module802 from "./module-802.js";
import Module818 from "./module-818.js";
import { getLocalTime } from "./module-52.js";
import { trigger } from "./module-792.js";
import { getVersionFormattedData } from "./module-248.js";
import module1333 from "./module-1333.js";
import Module4432 from "./module-4432.js";
import module4434 from "./module-4434.js";
let u;
const D = inject("rootStore", "workspaceStore", "detailStore")(u = observer(u = trigger(u = ((Component_1)=>{
    module55(a, Component_1);
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
    function a(e) {
        let n;
        module36(this, a);
        n = r.call(this, e);
        n.fetchData = function() {
            return n.store.fetchList({
                cluster: n.cluster,
                workspace: n.workspace,
                limit: -1,
                labelSelector: `apps.edgewize.io/apptemplate=${n.name}`
            });
        };
        n.handleCreateVersion = function() {
            n.trigger("app.template.version.create", {
                templateName: n.name,
                workspace: n.workspace,
                cluster: n.cluster,
                success: n.fetchData
            });
        };
        n.handleVersionChange = function(selectedVersionKey) {
            n.setState({
                selectedVersionKey
            });
        };
        n.handleEditVersionSettings = function() {
            const formTemplate = getVersionFormattedData(n.selectedVersion);
            n.trigger("app.template.version.create", {
                templateName: n.name,
                formTemplate,
                title: t("EDIT_SETTINGS"),
                okBtnText: t("OK"),
                isEdit: true,
                workspace: n.workspace,
                cluster: n.cluster,
                success: n.fetchData
            });
        };
        n.handleDeleteVersion = function() {
            return n.trigger("resource.delete", {
                store: n.store,
                type: "APP_TEMPLATE_VERSION",
                detail: n.selectedVersion,
                success: async ()=>{
                    await n.fetchData();
                    n.setState({
                        selectedVersionKey: n.versions[0]?.name
                    });
                }
            });
        };
        n.renderCardHead = function() {
            return <div className={module4434.cardHead}><span>{t("VERSION_INFO")}</span><div className={module4434.actions}><module186.Button onClick={n.handleEditVersionSettings} disabled={!n.selectedVersion}>{t("EDIT_SETTINGS")}</module186.Button><module186.Button type="danger" onClick={n.handleDeleteVersion} disabled={!(n.selectedVersion && n.versions.length > 1)}>{t("DELETE")}</module186.Button></div></div>;
        };
        n.renderVersionsEmpty = function() {
            return <Module875 icon="time-backup" title={t("EMPTY_WRAPPER", {
                resource: t("APP_TEMPLATE_VERSION")
            })} desc={t("APP_TEMPLATE_VERSION_EMPTY_TIP")} action=<module186.Button key="create" type="control" onClick={n.handleCreateVersion}>{t("CREATE")}</module186.Button>/>;
        };
        n.renderVersionsItems = function() {
            const containers = (n.selectedVersion ?? {}).containers;
            return <>{n.renderCardHead()}<Module802 className={module4434.card}><Module818 value={n.state.selectedVersionKey} options={n.versionOptions} onChange={n.handleVersionChange}/><div className={module4434.containersWrapper}><div className={module4434.containers}>{module63(containers) ? t("EMPTY_IMAGE_DESC") : containers.map((container)=><Module4432 key={container.name} container={container}/>)}</div></div></Module802></>;
        };
        n.store = new module1333;
        n.state = {
            selectedVersionKey: n.latestVersionName
        };
        return n;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const versions = e.detailStore.detail.versions;
                const versions_1 = this.versions;
                if (versions.length > versions_1.length) {
                    this.fetchData();
                }
            }
        },
        {
            key: "render",
            value: function() {
                if (module63(this.versions)) {
                    return this.renderVersionsEmpty();
                }
                return this.renderVersionsItems();
            }
        },
        {
            key: "latestVersionName",
            get: function() {
                const detail = module14.toJS(this.props.detailStore).detail;
                return detail?.latestVersion.name || this.versions[0].name;
            }
        },
        {
            key: "name",
            get: function() {
                return this.props.match.params.name;
            }
        },
        {
            key: "cluster",
            get: function() {
                const detail = this.props.workspaceStore.detail;
                return module26(module14.toJS(detail), "clusters.[0].name", "");
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "versions",
            get: function() {
                return module14.toJS(this.store.list.data);
            }
        },
        {
            key: "selectedVersion",
            get: function() {
                const _this = this;
                return this.versions.find((t)=>t.name === _this.state.selectedVersionKey);
            }
        },
        {
            key: "versionOptions",
            get: function() {
                const _this = this;
                return this.versions.map(({ name, createTime })=>({
                        value: name,
                        label: <>{name}{name === _this.latestVersionName && <module186.Tag type="warning" className={module4434.latestTag}>{t("LATEST_VERSION_SCAP")}</module186.Tag>}</>,
                        icon: "time-backup",
                        description: t("CREATED_TIME", {
                            diff: getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss")
                        })
                    }));
            }
        }
    ]);
    return a;
})(Component)) || u) || u) || u;
export default D;
