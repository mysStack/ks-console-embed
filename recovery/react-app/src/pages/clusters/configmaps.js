import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-16.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import Module811 from "pages/clusters/components/ResourceTable";
import Module789 from "components/Base/Avatar";
import { ListPage, withClusterList } from "components/HOCs/withList";
import { Component } from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import module1001 from "stores/configmap";
import { getDisplayName, getLocalTime, showNameAndAlias } from "utils/index";
import { ICON_TYPES } from "utils/constants";
let o;
const E = withClusterList({
    store: new module1001,
    module: "configmaps",
    name: "CONFIGMAP",
    rowKey: "uid"
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
        e.getCheckboxProps = function(e) {
            return {
                disabled: e.isFedManaged,
                name: e.name
            };
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, module } = e_props;
            const cluster = e.props.match.params.cluster;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(e, t) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(t)} desc={t.description || "-"} isMultiCluster={t.isFedManaged} to={`/clusters/${cluster}/projects/${t.namespace}/${module}/${e}`}/>;
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
                    title: t("FIELDS"),
                    dataIndex: "data",
                    isHideable: true,
                    width: "13%",
                    render: function(e) {
                        return Object.keys(e).join(",");
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
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module } = e_props;
            return e.props.trigger("configmap.create", {
                module,
                namespace: match.params.namespace,
                cluster: match.params.cluster
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, tableProps } = props;
                return <ListPage {...this.props}><Module811 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate} cluster={match.params.cluster} getCheckboxProps={this.getCheckboxProps} searchType="name"/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        show: this.showAction,
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
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("resource.yaml.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editConfigMap",
                        icon: "pen",
                        text: t("EDIT_SETTINGS"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("configmap.edit", {
                                detail: e
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
                                detail: e
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || o;
export default E;
