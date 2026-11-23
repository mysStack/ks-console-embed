import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
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
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { PureComponent } from "./module-553.js";
import module14 from "./module-14.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import { inject } from "./module-239.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import Module823 from "./module-823.js";
import Module1713 from "./module-1713.js";
import Module1418 from "./module-1418.js";
import Module4411 from "./module-4411.js";
import Module4413 from "./module-4413.js";
import Module1869 from "./module-1869.js";
import Module4416 from "./module-4416.js";
import { getLocalTime } from "./module-52.js";
import { trigger } from "./module-792.js";
import { RadonDBAppIds } from "./module-817.js";
import { ACTION_TO_NAME, APP_STORE_ACTIONS, CAN_DELETE_STATUS, HANDLE_TYPE_TO_SHOW, STATUS_TO_ACTION, STATUS_TO_ACTION_ADMIN } from "./module-1048.js";
import { STORE_QUERY_STATUS } from "./module-327.js";
import module1871 from "./module-1871.js";
let o;
let u;
let l;
const TabPanel = module186.Tabs.TabPanel;
const L = inject("rootStore")(o = trigger((l = u = ((PureComponent_1)=>{
    module55(a, PureComponent_1);
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
        n.handleTabChange = function(tab) {
            n.setState({
                tab
            });
        };
        n.handleExpandExtra = function() {
            if (!n.isRadonDB) {
                const e = n.props.detail;
                n.props.handleExpandExtra(e.version_id);
            }
        };
        n.showDeploy = function() {
            n.trigger("openpitrix.template.deploy", {
                ...n.props.params,
                store: n.props.appStore,
                app: n.props.appDetail,
                versionId: n.props.detail.version_id
            });
        };
        n.showDeleteModel = function() {
            n.setState({
                deleteShow: true,
                handleType: "delete"
            });
        };
        n.showHandleModel = function(handleType) {
            return function() {
                if (handleType === "view") {
                    const t = n.props.detail.app_id;
                    n.props.rootStore.routing.push(`/apps/${t}`);
                } else {
                    if (handleType === "submit") {
                        n.setState({
                            submitShow: true,
                            handleType: "submit"
                        });
                    } else {
                        n.setState({
                            confirmShow: true,
                            handleType
                        });
                    }
                }
            };
        };
        n.hideHandleModal = function() {
            n.setState({
                deleteShow: false,
                confirmShow: false,
                submitShow: false,
                appDeploy: false
            });
        };
        n.deleteVersion = function() {
            const detail = n.props.detail;
            const { version_id, app_id } = detail;
            n.store.delete({
                app_id,
                version_id
            }).then(()=>{
                n.hideHandleModal();
                module240.success({
                    content: t("DELETED_SUCCESSFULLY")
                });
                n.store.fetchList({
                    app_id
                });
            });
        };
        n.handleVersion = function() {
            const n_props = n.props;
            const { detail, isAdmin } = n_props;
            const { version_id, app_id } = detail;
            const handleType = n.state.handleType;
            const c = {
                app_id,
                version_id,
                action: handleType
            };
            n.store.handle(c).then(()=>{
                const e = HANDLE_TYPE_TO_SHOW[handleType] || handleType;
                n.hideHandleModal();
                module240.success({
                    content: `${t(`${e.toUpperCase()}_SUCCESSFUL`)}`
                });
                const status = isAdmin ? STORE_QUERY_STATUS : n.store.defaultStatus;
                if (APP_STORE_ACTIONS.includes(handleType)) {
                    n.props.appStore.fetchDetail({
                        app_id
                    });
                } else {
                    n.store.fetchList({
                        app_id,
                        status
                    });
                }
            });
        };
        n.handleSubmit = function(e) {
            n.store.update(e).then(()=>{
                n.handleVersion();
            });
        };
        n.store = n.props.store;
        n.state = {
            tab: "configFile",
            handleType: ""
        };
        n.appId = e.detail.app_id;
        return n;
    }
    module37(a, [
        {
            key: "renderContent",
            value: function() {
                const detail = this.props.detail;
                return <div className={module1871.content}><dl><dt><Module1418 type={detail.status} noIcon/></dt><dd>{t("STATUS")}</dd></dl><dl><dt>{detail.name}</dt><dd>{t("VERSION")}</dd></dl><dl><dt>{detail.owner}</dt><dd>{t("DEVELOPER")}</dd></dl><dl><dt>{getLocalTime(detail.update_time || detail.status_time).format("YYYY-MM-DD HH:mm:ss")}</dt><dd>{t("UPDATE_TIME_SCAP")}</dd></dl>{!this.isRadonDB && <dl className={module1871.more}><module186.Icon name="chevron-down" size={20}/></dl>}</div>;
            }
        },
        {
            key: "renderVersionActions",
            value: function() {
                const props = this.props;
                const { isAdmin, enabledActions } = props;
                const status = this.props.detail.status;
                const o = isAdmin ? STATUS_TO_ACTION_ADMIN[status] : STATUS_TO_ACTION[status];
                if (enabledActions.includes("manage")) {
                    return <div className={module1871.actions}>{CAN_DELETE_STATUS.includes(status) && !isAdmin && <module186.Button onClick={this.showDeleteModel} type="danger">{t("DELETE")}</module186.Button>}{!isAdmin && <module186.Button onClick={this.showDeploy} type="default">{t("INSTALL")}</module186.Button>}{o && <module186.Button onClick={this.showHandleModel(o)} type="control">{t(ACTION_TO_NAME[o])}</module186.Button>}</div>;
                }
                return null;
            }
        },
        {
            key: "renderExtraContent",
            value: function() {
                const props = this.props;
                const { detail, appDetail, clusters } = props;
                const tab = this.state.tab;
                return <div className={module1871.itemExtra}><module186.Tabs type="button" activeName={tab} onChange={this.handleTabChange}>{<TabPanel label={t("CHART_FILES")} name="configFile"><Module4411 appId={detail.app_id} versionId={detail.version_id} appName={appDetail.name}/></TabPanel>}{<TabPanel label={t("APP_REVIEW")} name="auditRecord"><Module4413 appId={detail.app_id} versionId={detail.version_id}/></TabPanel>}{<TabPanel label={t("APP_INSTANCES")} name="deployInstances"><Module1869 title={t("APP_INSTANCES")} className={module1871.instances} appId={appDetail.app_id} versionId={detail.version_id} workspace={appDetail.workspace} clusters={clusters}/></TabPanel>}</module186.Tabs>{this.renderVersionActions()}</div>;
            }
        },
        {
            key: "renderModals",
            value: function() {
                const detail = this.props.detail;
                const handleType = this.state.handleType;
                return <div><Module1713 content={t.html(`VERSION_${handleType.toUpperCase()}_TIP`, {
                    name: detail.name
                })} visible={this.state.confirmShow} onOk={this.handleVersion} onCancel={this.hideHandleModal} isSubmitting={this.store.isSubmitting}/><Module823 detail={detail} desc={t.html(`VERSION_${handleType.toUpperCase()}_TIP`, {
                    name: detail.name
                })} visible={this.state.deleteShow} onOk={this.deleteVersion} onCancel={this.hideHandleModal} isSubmitting={this.store.isSubmitting}/><Module4416 visible={this.state.submitShow} onOk={this.handleSubmit} onCancel={this.hideHandleModal} isSubmitting={this.store.isSubmitting} detail={module14.toJS(detail)}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, detail } = props;
                return <div className={module3(module1871.item, className, module31({}, module1871.expanded, detail.isExpand))}><div className={module1871.itemMain} onClick={this.handleExpandExtra}><div className={module1871.icon}><module186.Icon name="cloud" size={40}/><Module1418 className={module1871.status} type={detail.status} noName/></div>{this.renderContent()}</div>{detail.isExpand && this.renderExtraContent()}{this.renderModals()}</div>;
            }
        },
        {
            key: "isRadonDB",
            get: function() {
                return RadonDBAppIds.includes(this.appId);
            }
        }
    ]);
    return a;
})(PureComponent), u.propTypes = {
    className: module1.string,
    isAdmin: module1.bool,
    appDetail: module1.object,
    detail: module1.object,
    params: module1.object,
    store: module1.object,
    appStore: module1.object,
    handleExpandExtra: module1.func,
    enabledActions: module1.array
}, u.defaultProps = {
    isAdmin: false,
    appDetail: {},
    detail: {},
    params: {},
    store: {},
    appStore: {},
    enabledActions: [],
    handleExpandExtra: function() {}
}, o = l)) || o) || o;
export default L;
