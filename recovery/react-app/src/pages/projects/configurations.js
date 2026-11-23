import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module793 from "unpacked/module-793.js";
import Module797 from "components/Tables/List";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import { getDisplayName, getLocalTime } from "utils/index";
import { CONFIGURATION_STATUS, ICON_TYPES } from "utils/constants";
import module1901 from "unpacked/module-1901.js";
let o;
const R = withProjectList({
    store: new module1901,
    module: "configurations",
    name: "SQ_CONFIGURATION",
    rowKey: "uid",
    authKey: "springcloud-microservices"
})(o = ((Component_1)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.fetchData = function() {
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            const name = e.props.query.name;
            e.props.store.fetchList({
                cluster,
                namespace,
                name
            });
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, module } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sortOrder: getSortOrder("name"),
                    sorter: true,
                    search: true,
                    render: function(t, a) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(a)} to={`${e.prefix}/${module}/${t}`}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    filters: e.getStatus(),
                    isHideable: true,
                    search: true,
                    width: "20%",
                    render: function(e) {
                        return <Module796 name={t(`CONFIGURATION_STATUS_${e.toUpperCase()}`)} type={e} flicker/>;
                    }
                },
                {
                    title: t("DATA_ID"),
                    dataIndex: "data",
                    isHideable: true,
                    width: "20%",
                    render: function(e) {
                        return Object.keys(e).join(",");
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    isHideable: true,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, projectStore } = e_props;
            return e.props.trigger("configuration.create", {
                module,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace,
                cluster: match.params.cluster,
                title: t("CREATE_CONFIGURATION"),
                success: e.fetchData
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "getStatus",
            value: function() {
                return CONFIGURATION_STATUS.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} noWatch><Module793 {...bannerProps}/><Module797 {...tableProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate}/></ListPage>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, namespace, cluster } = params;
                return `/${workspace}/clusters/${cluster}/projects/${namespace}`;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function(a) {
                            return trigger("configuration.edit", {
                                title: t("EDIT_CONFIGURATION"),
                                detail: a,
                                success: _this.fetchData
                            });
                        }
                    },
                    {
                        key: "copy",
                        icon: "copy",
                        text: t("REPLICATE"),
                        action: "edit",
                        onClick: function(a) {
                            return trigger("configuration.copy", {
                                title: t("REPLICATE_CONFIGURATION_NAME", {
                                    name: a.name
                                }),
                                isCopy: true,
                                detail: a,
                                success: _this.fetchData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(t) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: t,
                                success: _this.fetchData
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
                                    rowKey: tableProps_rowKey,
                                    success: _this.fetchData
                                });
                            }
                        }
                    ]
                };
            }
        }
    ]);
    return r;
})(Component)) || o;
export default R;
