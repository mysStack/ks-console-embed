import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
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
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module791 from "components/Base/Text";
import Module793 from "unpacked/module-793.js";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import { getDisplayName, getLocalTime } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import module437 from "stores/federated";
import module443 from "stores/service";
let u;
const P = withProjectList({
    store: new module437(new module443),
    module: "services",
    name: "SERVICE"
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
        e.getColumns = function() {
            const e_props = e.props;
            const { module, getSortOrder } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(t, r) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(r)} desc={r.description || "-"} isMultiCluster to={r.deletionTime ? null : `${e.props.match.url}/${t}`}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    render: function(e) {
                        return <Module796 type={e} name={t(e.toUpperCase())} flicker/>;
                    }
                },
                {
                    title: t("SERVICE_TYPE_TCAP"),
                    dataIndex: 'annotations["kubesphere.io/serviceType"]',
                    isHideable: true,
                    render: function(e, r) {
                        return <Module791 title={e ? t(`SERVICE_TYPE_${e.toUpperCase()}`) : t("CUSTOM_SERVICE")} description={t(r.type) || "-"}/>;
                    }
                },
                {
                    title: t("APP"),
                    dataIndex: "app",
                    isHideable: true,
                    width: "22%"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    isHideable: true,
                    width: 150,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, projectStore } = e_props;
            return e.props.trigger("service.create", {
                module,
                isFederated: true,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} isFederated><Module793 {...bannerProps} tips={this.tips}/><Module797 {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()} onCreate={this.showCreate} searchType="name"/></ListPage>;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("SERVICE_TYPES_Q"),
                        description: t("SERVICE_TYPES_A")
                    },
                    {
                        title: t("SCENARIOS_FOR_SERVICES_Q"),
                        description: t("SCENARIOS_FOR_SERVICES_A")
                    }
                ];
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
                        key: "editConfigTemplate",
                        icon: "storage",
                        text: t("EDIT_SETTINGS"),
                        action: "edit",
                        onClick: async (t)=>{
                            let a;
                            a = await _this.props.store.fetchDetail(t);
                            trigger("federated.workload.template.edit", {
                                detail: a,
                                projectDetail: _this.props.projectStore.detail,
                                module: "service",
                                ..._this.props.match.params,
                                name: t.name,
                                isFederated: true,
                                withService: true
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            return trigger("service.delete", {
                                type: name,
                                detail: e,
                                isFederated: true
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "tableActions",
            get: function() {
                const props = this.props;
                const { tableProps, name, trigger } = props;
                return {
                    ...tableProps.tableActions,
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function() {
                                return trigger("service.batch.delete", {
                                    type: name,
                                    rowKey: "name",
                                    isFederated: true
                                });
                            }
                        }
                    ]
                };
            }
        }
    ]);
    return a;
})(Component)) || u;
export default P;
