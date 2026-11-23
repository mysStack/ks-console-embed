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
import module63 from "./module-63.js";
import Module797 from "./module-797.js";
import Module789 from "./module-789.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import Module793 from "./module-793.js";
import { ListPage, withClusterList } from "./module-794.js";
import { Component } from "./module-553.js";
import { ReactComponent } from "./module-3744.js";
import module3745 from "./module-3745.js";
import { getDisplayName } from "./module-52.js";
import module3746 from "./module-3746.js";
let o;
const D = withClusterList({
    store: new module3745,
    module: "clusteringresssettings",
    name: "ROUTE_SETTING",
    rowKey: "uid",
    authKey: "ingress-utils"
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
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.showAction = function(e) {
            return !e.isFedManaged;
        };
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(e, t) {
                        return <Module789 icon={ReactComponent} title={getDisplayName(t)} desc={t.description || "-"} isMultiCluster={t.isFedManaged} noLink/>;
                    }
                },
                {
                    title: t("DOMAIN_NAME_TCAP"),
                    dataIndex: "uniqueDomainPattern",
                    isHideable: true,
                    search: true
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { query, match, module, getData } = e_props;
            return e.props.trigger("router.setting.create", {
                module,
                namespace: query.namespace,
                cluster: match.params.cluster,
                success: function() {
                    return getData();
                }
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps} icon="loadbalancer"/>{!this.showEmpty && <div className={module3746.routesSetting}><Module790><div className={module3746.panel}><Module791 icon={ReactComponent} title={t("INVALID_DOMAIN_NAME")} description={t("ROUTE_SETTING_EMPTY_DESC")}/></div></Module790></div>}<Module797 {...tableProps} itemActions={this.itemActions} className={module3746.table} tableActions={this.tableActions} columns={this.getColumns()} onCreate={this.showCreate} cluster={match.params.cluster} emptyProps={{
                    title: t("ROUTE_SETTING_EMPT"),
                    icon: ReactComponent
                }} createText={t("CREATE_DOMAIN_NAME")}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, name, getData } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("router.setting.edit", {
                                detail: e,
                                isEdit: true,
                                success: getData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: e,
                                success: getData
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "tableActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, name, tableProps } = props;
                const tableProps_rowKey = tableProps.rowKey;
                return {
                    ...tableProps.tableActions,
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function() {
                                trigger("resource.batch.delete", {
                                    type: name,
                                    title: t("DELETE_MULTIPLE_ROUTE_SETTING"),
                                    rowKey: tableProps_rowKey,
                                    success: _this.routing.query
                                });
                            }
                        }
                    ]
                };
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "showEmpty",
            get: function() {
                const t = this.props.store?.list;
                const { filters, total } = t;
                return !t.isLoading && module63(filters) && total === 0;
            }
        }
    ]);
    return n;
})(Component)) || o;
export default D;
