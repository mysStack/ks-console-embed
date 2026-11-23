import "./module-12.js";
import "./module-5.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module3 from "./module-3.js";
import Module789 from "./module-789.js";
import Module790 from "./module-790.js";
import Module852 from "./module-852.js";
import Module793 from "./module-793.js";
import Module823 from "./module-823.js";
import Module875 from "./module-875.js";
import Module5064 from "./module-5064.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module76 from "./module-76.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import module441 from "./module-441.js";
import module322 from "./module-322.js";
import { compareVersion, getDisplayNameNew, getDomTitle, getLocalTime, inCluster2Default, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import { eventKeys, initEvents } from "./module-144.js";
import module5065 from "./module-5065.js";
let i;
const H = inject("rootStore", "devopsStore")(i = observer(i = trigger(i = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...i) {
        let e;
        module36(this, n);
        e = r.call(this, ...i);
        e.state = {
            showEdit: false,
            showDelete: false,
            opened: false
        };
        e.roleStore = new module441;
        e.memberStore = new module322;
        e.handleHostClusterChange = function() {
            e.forceUpdate();
        };
        e.hideEdit = function() {
            e.setState({
                showEdit: false
            });
        };
        e.handleEdit = function({ devops, ...rest }) {
            e.store.update({
                devops,
                cluster: e.cluster,
                workspace: e.workspace
            }, rest, true).then(()=>{
                e.hideEdit();
                module240.success({
                    content: t("UPDATE_SUCCESSFUL")
                });
                e.store.fetchDetail({
                    workspace: e.workspace,
                    ...e.props.match.params
                });
            });
        };
        e.hideDelete = function() {
            e.setState({
                showDelete: false
            });
        };
        e.handleDelete = function() {
            e.store.delete({
                devops: e.devops,
                cluster: e.cluster,
                workspace: e.workspace
            }).then(()=>{
                e.routing.push("/");
            });
        };
        e.handleMoreMenuClick = function(t, r) {
            switch(r){
                case "edit":
                    e.setState({
                        showEdit: true
                    });
                    break;
                case "delete":
                    e.setState({
                        showDelete: true
                    });
            }
        };
        e.handleEditAllowlist = function() {
            e.trigger("devops.edit.allowlist", {
                devops: e.devops,
                store: e.store,
                cluster: e.cluster,
                workspace: e.workspace,
                detail: e.detail,
                success: async ()=>{
                    await e.store.fetchDetail({
                        workspace: e.workspace,
                        ...e.props.match.params
                    });
                    e.setState({
                        opened: !(module63(e.detail.sourceRepos) && module63(e.detail.destinations))
                    });
                }
            });
        };
        e.toggle = module44(module41.mark(function t() {
            let r;
            let spec;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            if (!(r = e.state.opened)) {
                                t.next = 9;
                                break;
                            }
                            spec = module26(module136(module14.toJS(e.detail)), "_originData.spec", {});
                            module74(spec, "argo.destinations", []);
                            module74(spec, "argo.sourceRepos", []);
                            t.next = 7;
                            return e.store.editAllowlist(e.store.data, {
                                spec
                            });
                        case 7:
                            t.next = 9;
                            return e.store.fetchDetail({
                                workspace: e.workspace,
                                ...e.props.match.params
                            });
                        case 9:
                            e.setState({
                                opened: !r
                            });
                        case 10:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.canViewMembers && this.canViewRoles) {
                    this.memberStore.fetchList({
                        namespace: this.devops,
                        cluster: this.cluster
                    });
                    this.roleStore.fetchList({
                        devops: this.devops,
                        cluster: this.cluster
                    });
                }
                this.setState({
                    opened: !(module63(this.detail.sourceRepos) && module63(this.detail.destinations))
                });
                this.subscribe = initEvents([
                    eventKeys.HOST_CLUSTER_CHANGE,
                    this.handleHostClusterChange
                ]);
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.subscribe) {
                    this.subscribe();
                }
            }
        },
        {
            key: "renderMoreMenu",
            value: function() {
                return <module186.Menu onClick={this.handleMoreMenuClick}>{this.enabledItemActions.map((e)=><module186.Menu.MenuItem key={e.key}><module186.Icon name={e.icon}/> {e.text}</module186.Menu.MenuItem>)}</module186.Menu>;
            }
        },
        {
            key: "renderBaseInfo",
            value: function() {
                const _this = this;
                const total = this.roleStore.list.total;
                const total_1 = this.memberStore.list.total;
                return <Module790 className={module5065.wrapper} title={t("BASIC_INFORMATION")}><div className={module5065.header}><module186.Icon name="strategy-group" size={40}/><div className={module5065.item}><div>{getDomTitle(getDisplayNameNew(this.detail))}</div><p>{t("DEVOPS_PROJECT_SCAP")}</p></div><div className={module5065.item}><div><Link to={`/workspaces/${this.workspace}`}>{getDomTitle(showNameAndAlias(this.workspace, "workspace", {}, true, function() {
                    return _this.forceUpdate();
                }))}</Link></div><p>{t("WORKSPACE")}</p></div><div className={module5065.item}><div>{this.detail.creator || "-"}</div><p>{t("CREATOR")}</p></div><div className={module5065.item}><div>{getLocalTime(this.detail.createTime).format("YYYY-MM-DD HH:mm:ss")}</div><p>{t("CREATION_TIME")}</p></div>{!module63(this.enabledItemActions) && <div className={module3(module5065.item, "text-right")}><module186.Dropdown theme="dark" content={this.renderMoreMenu()} trigger="click" placement="bottomRight"><module186.Button>{t("MANAGE")}</module186.Button></module186.Dropdown></div>}</div>{this.canViewRoles && this.canViewMembers && <div className={module5065.content}><div className={module5065.contentItem}><module186.Icon name="role" size={40}/><div className={module5065.item}><div>{total}</div><p>{total === 1 ? t("DEVOPS_PROJECT_ROLE_SCAP") : t("DEVOPS_PROJECT_ROLE_PL_SCAP")}</p></div></div><div className={module5065.contentItem}><module186.Icon name="group" size={40}/><div className={module5065.item}><div>{total_1}</div><p>{total_1 === 1 ? t("DEVOPS_PROJECT_MEMBER_SCAP") : t("DEVOPS_PROJECT_MEMBER_PL_SCAP")}</p></div></div></div>}</Module790>;
            }
        },
        {
            key: "renderEmptyCD",
            value: function() {
                return <div className={module5065.empty}><Module875 name="ALLOWLIST" module="allowlists" title={t("EMPTY_ALLOWLIST_TITLE")} action={!module63(this.enabledItemActions) && <module186.Button onClick={this.handleEditAllowlist} type="control">{t("ENABLE_ALLOWLIST")}</module186.Button>}/></div>;
            }
        },
        {
            key: "renderItem",
            value: function(e) {
                const r = this.detail[e];
                if (module63(r)) {
                    return <div className={module5065.item_tag}>{e === "sourceRepos" ? t("CODE_REPOSITORY_NOT_SELECTED") : t("RESOURCE_DEPLOYMENT_LOCATION_NOT_SELECTED")}</div>;
                }
                if (r.length === 1 && r.every((e)=>{
                    if (module76(e)) {
                        return Object.keys(e).every((t)=>e[t] === "*");
                    }
                    return e === "*";
                })) {
                    return <div className={module5065.item_tag}>{e === "sourceRepos" ? t("ALL_CODE_REPOSITORIES") : t("ALL_RESOURCE_DEPLOYMENT_LOCATIONS")}</div>;
                }
                if (e === "sourceRepos") {
                    return <div className={module5065.items}>{this.detail.sourceRepos.map((e)=><div key={e} className={module5065.item}>{e === "*" ? t("ALL") : e}</div>)}</div>;
                }
                return <div className={module5065.items}>{this.detail.destinations.map((e)=><div key={`${e.name}-${e.namespace}+'-'+${globals.hostClusterName}}`} className={`${module5065.item} ${module5065.item_flex}`}><div><module186.Icon name="cluster" size={20}/><b>{e.name === "*" ? t("ALL") : showNameAndAlias(inCluster2Default(e.name), "cluster")}</b>{e?.name !== "*" && <span>({e?.server})</span>}</div><div><module186.Icon name="enterprise" size={20}/><b>{e?.namespace === "*" ? t("ALL") : showNameAndAlias(e?.namespace, "project", {
                        cluster: inCluster2Default(e.name)
                    })}</b></div></div>)}</div>;
            }
        },
        {
            key: "renderCD",
            value: function() {
                const opened = this.state.opened;
                return <Module790 className={module5065.wrapper} title={t("CD_ALLOWLIST")}>{module63(this.detail.sourceRepos) && module63(this.detail.destinations) ? this.renderEmptyCD() : <><div className={module5065.cd_header}><Module789 icon="allowlist" iconSize={40} title={opened ? t("ENABLED") : t("DISABLED")} desc={t("CD_ALLOWLIST_SCAP")}/>{!module63(this.enabledItemActions) && <div className={module3(module5065.item, "text-right")}><Module852 className={module5065.switch} text={opened ? t("ENABLED") : t("DISABLED")} onChange={this.toggle} checked={opened}/><module186.Button onClick={this.handleEditAllowlist}>{t("EDIT_ALLOWLIST")}</module186.Button></div>}</div><div className={module5065.content_CD}><div className={module5065.content_item}><div className={module5065.content_item_title}>{t("CODE_REPO_PL")}</div>{this.renderItem("sourceRepos")}</div><div className={module5065.content_item}><div className={module5065.content_item_title}>{t("DEPLOYMENT_LOCATION_PL")}</div>{this.renderItem("destinations")}</div></div></>}</Module790>;
            }
        },
        {
            key: "render",
            value: function() {
                const data = module14.toJS(this.store).data;
                return <div><Module793 title={t("BASIC_INFORMATION")} icon="cdn" description={t("DEVOPS_DESCRIPTION")} module={this.module}/>{this.renderBaseInfo()}{this.isNeedHide ? null : this.renderCD()}<Module5064 detail={data} workspace={this.workspace} visible={this.state.showEdit} onOk={this.handleEdit} onCancel={this.hideEdit} isSubmitting={this.store.isSubmitting} namespace={this.devops} cluster={this.cluster}/><Module823 detail={data} title={t("DELETE_DEVOPS_PROJECT")} desc={t.html("DELETE_DEVOPS_PROJECT_TIP", {
                    resource: data.name
                })} resource={data.name} visible={this.state.showDelete} onOk={this.handleDelete} onCancel={this.hideDelete} isSubmitting={this.store.isSubmitting}/></div>;
            }
        },
        {
            key: "isMultiCluster",
            get: function() {
                return window.parent?.globals.ksConfig.multicluster;
            }
        },
        {
            key: "clusterVersion",
            get: function() {
                if (this.isMultiCluster) {
                    return module26(window, `parent.globals.clusterConfig.${this.cluster}.ksVersion`);
                }
                return module26(window, "parent.globals.ksConfig.ksVersion");
            }
        },
        {
            key: "isNeedHide",
            get: function() {
                return compareVersion(this.clusterVersion, "3.3.0") < 0 || !this.isHostCluster;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.devopsStore;
            }
        },
        {
            key: "devops",
            get: function() {
                return this.props.match.params.devops;
            }
        },
        {
            key: "devopsName",
            get: function() {
                return this.store.devopsName;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "isHostCluster",
            get: function() {
                return !globals.app.isMultiCluster || this.cluster === this.props.devopsStore.hostName;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "devops-settings",
                    cluster: this.cluster,
                    devops: this.devops
                });
            }
        },
        {
            key: "canViewRoles",
            get: function() {
                return globals.app.hasPermission({
                    module: "roles",
                    action: "view",
                    cluster: this.cluster,
                    devops: this.devops
                });
            }
        },
        {
            key: "canViewMembers",
            get: function() {
                return globals.app.hasPermission({
                    module: "members",
                    action: "view",
                    cluster: this.cluster,
                    devops: this.devops
                });
            }
        },
        {
            key: "itemActions",
            get: function() {
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        action: "edit",
                        text: t("EDIT")
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        action: "delete",
                        text: t("DELETE")
                    }
                ];
            }
        },
        {
            key: "enabledItemActions",
            get: function() {
                const _this = this;
                return this.itemActions.filter((t)=>!t.action || _this.enabledActions.includes(t.action));
            }
        },
        {
            key: "detail",
            get: function() {
                return this.store.data;
            }
        }
    ]);
    return n;
})(Component)) || i) || i) || i;
export default H;
