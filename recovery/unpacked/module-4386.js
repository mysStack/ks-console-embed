import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
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
import "./module-75.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module796 from "./module-796.js";
import Module1025 from "./module-1025.js";
import Module793 from "./module-793.js";
import Module797 from "./module-797.js";
import module794, { ListPage } from "./module-794.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { transferAppStatus } from "./module-917.js";
import module470 from "./module-470.js";
let u;
const P = module794({
    store: new module470,
    module: "apps",
    authKey: "app-templates",
    name: "APP_TEMPLATE",
    rowKey: "app_id"
})(u = ((Component_1)=>{
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
    function a(...o) {
        let e;
        module36(this, a);
        e = r.call(this, ...o);
        e.getData = function(t) {
            e.props.store.fetchList({
                workspace: e.workspace,
                statistics: true,
                ...t
            });
        };
        e.showCreate = function() {
            e.props.trigger("openpitrix.template.create", {
                success: e.showUpload
            });
        };
        e.showUpload = function() {
            e.props.trigger("openpitrix.template.upload", {
                workspace: e.workspace,
                success: e.props.routing.query
            });
        };
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "app_id",
                    render: function(t, r) {
                        const avatar = e.getAvatar(r.icon);
                        return <Module1025 isApp to={`/workspaces/${e.workspace}/apps/${t}`} avatarType="appIcon" avatar={avatar} iconLetter={r.name} iconSize={40} title={getDisplayName(r)} desc={r.description}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "20%",
                    render: function(e) {
                        return <Module796 type={e} name={transferAppStatus(e)}/>;
                    }
                },
                {
                    title: t("LATEST_VERSION"),
                    dataIndex: "latest_app_version.name",
                    isHideable: true,
                    width: "20%"
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "update_time",
                    isHideable: true,
                    width: "120",
                    render: function(e, t) {
                        return getLocalTime(e || t.status_time).fromNow();
                    }
                }
            ];
        };
        e.getAvatar = function(t) {
            const baseUrl = e.props.store.baseUrl;
            if (String(t).startsWith("att-")) {
                return `/${baseUrl}/attachments/${t}?filename=raw`;
            }
            return t;
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} tips={this.tips}/><Module797 {...tableProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} searchType="keyword"/></ListPage>;
            }
        },
        {
            key: "tips",
            get: function() {
                const enabledActions = this.props.enabledActions;
                return [
                    {
                        title: t("DEVELOP_APP_TITLE"),
                        description: t("DEVELOP_APP_DESC"),
                        operation: enabledActions.includes("create") ? <module186.Button type="flat" onClick={this.showUpload}>{t("UPLOAD_TEMPLATE")}</module186.Button> : null,
                        closable: false
                    },
                    {
                        title: t("HOW_PUBLISH_APP_TITLE"),
                        description: t("HOW_PUBLISH_APP_DESC")
                    }
                ];
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "itemActions",
            get: function() {
                return [];
            }
        },
        {
            key: "tableActions",
            get: function() {
                return {
                    ...this.props.tableProps.tableActions,
                    onCreate: this.showCreate,
                    selectActions: []
                };
            }
        }
    ]);
    return a;
})(Component)) || u;
export default P;
