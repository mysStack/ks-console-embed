import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import Module811 from "./module-811.js";
import Module789 from "./module-789.js";
import Module793 from "./module-793.js";
import { ListPage, withClusterList } from "./module-794.js";
import module26 from "./module-26.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import module3805 from "./module-3805.js";
import { getDisplayName, getLocalTime, htmlLinkControl, showNameAndAlias } from "./module-52.js";
import { ICON_TYPES } from "./module-72.js";
let o;
const C = withClusterList({
    store: new module3805("networkpolicies"),
    name: "NETWORK_POLICY",
    module: "networkpolicies",
    authKey: "network",
    rowKey: "key"
})(o = ((Component_1)=>{
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
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.tips = function() {
            const e = t.html("NETWORK_POLICY_A1");
            return [
                {
                    title: t("NETWORK_POLICY_Q"),
                    description: t.html("NETWORK_POLICY_A")
                },
                {
                    title: t("NETWORK_POLICY_Q1"),
                    description: htmlLinkControl(e)
                }
            ];
        };
        a.store = e.store;
        return a;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const tips = this.tips;
                const props = this.props;
                const { query, match, bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps} tips={tips()}/><Module811 {...tableProps} rowKey="key" itemActions={this.itemActions} namespace={query.namespace} columns={this.getColumns} actions={this.actions} cluster={match.params.cluster} searchType="name"/></ListPage>;
            }
        },
        {
            key: "params",
            get: function() {
                return module26(this.props.match, "params", {});
            }
        },
        {
            key: "cluster",
            get: function() {
                return module26(this.params, "cluster");
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, routing, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: e,
                                success: routing.query
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
                                detail: e,
                                success: routing.query
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
                                detail: e,
                                success: routing.query
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "actions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, routing } = props;
                const cluster = this.cluster;
                return [
                    {
                        key: "create",
                        type: "control",
                        text: t("CREATE_BTN"),
                        action: "create",
                        onClick: function() {
                            return trigger("network.policies.addByYaml", {
                                ..._this.props,
                                cluster,
                                success: routing.query
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "getColumns",
            get: function() {
                const props = this.props;
                const { getSortOrder, module } = props;
                const cluster = this.props.match.params.cluster;
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        sorter: true,
                        sortOrder: getSortOrder("name"),
                        render: function(e, t) {
                            return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(t)} desc={t.description} to={`/clusters/${cluster}/projects/${t.namespace}/${module}/${e}`}/>;
                        }
                    },
                    {
                        title: t("PROJECT"),
                        dataIndex: "namespace",
                        isHideable: true,
                        width: "22%",
                        render: function(e) {
                            return <Link to={`/clusters/${cluster}/projects/${e}`}>{showNameAndAlias(e, "project")}</Link>;
                        }
                    },
                    {
                        title: t("CREATION_TIME_TCAP"),
                        dataIndex: "createTime",
                        sorter: true,
                        sortOrder: getSortOrder("createTime"),
                        isHideable: true,
                        width: 150,
                        render: function(e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || o;
export default C;
