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
import Module791 from "./module-791.js";
import Module793 from "./module-793.js";
import module794, { ListPage } from "./module-794.js";
import Module797 from "./module-797.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import module1804 from "./module-1804.js";
import module3816 from "./module-3816.js";
let u;
const k = module794({
    store: new module1804,
    module: "clusterdashboards",
    authKey: "monitoring",
    name: "CUSTOM_MONITORING_DASHBOARD"
})(u = ((Component_1)=>{
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
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.showCreate = function() {
            e.props.trigger("custom.monitoring.create", {
                ...e.props.match.params,
                module: "clusterdashboards"
            });
        };
        e.showEdit = function(t) {
            e.props.trigger("custom.monitoring.edit", {
                ...e.props.match.params,
                readOnly: !e.props.tableProps.enabledActions.includes("edit"),
                detail: t
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "getColumns",
            value: function() {
                const _this = this;
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "title",
                        render: function(t, r) {
                            return <Module791 title=<div className={module3816.title} onClick={function() {
                                return _this.showEdit(r);
                            }}>{getDisplayName(r)}</div> description={r.description || "-"}/>;
                        }
                    },
                    {
                        title: t("CREATION_TIME_TCAP"),
                        dataIndex: "createTime",
                        width: 150,
                        render: function(e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                    }
                ];
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <div><ListPage {...this.props}><Module793 {...bannerProps} tabs={this.tabs}/><Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate} searchType="name"/></ListPage></div>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { name, trigger } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.yaml.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: e
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || u;
export default k;
