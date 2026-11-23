import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-75.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module796 from "components/Base/Status";
import Module1025 from "pages/apps/components/Avatar";
import Module793 from "unpacked/module-793.js";
import Module797 from "components/Tables/List";
import module794, { ListPage } from "components/HOCs/withList";
import { getDisplayName, getLocalTime } from "utils/index";
import { transferAppStatus } from "utils/app";
import module470 from "stores/openpitrix/app";
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
