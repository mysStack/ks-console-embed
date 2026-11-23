import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
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
import { Component } from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import Module789 from "components/Base/Avatar";
import Module793 from "unpacked/module-793.js";
import { ListPage, withClusterList } from "components/HOCs/withList";
import Module811 from "pages/clusters/components/ResourceTable";
import module934 from "unpacked/module-934.js";
import { getDisplayName, getLocalTime } from "utils/index";
import { ICON_TYPES, SECRET_TYPES } from "utils/constants";
import module5182 from "unpacked/module-5182.js";
let o;
const S = withClusterList({
    store: new module934,
    module: "secrets",
    name: "SECRET",
    rowKey: "uid"
})(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = a.call(this, ...o_1);
        e.getCheckboxProps = function(e) {
            return {
                disabled: e.isFedManaged,
                name: e.name
            };
        };
        e.getDefaultLabel = function(e, a) {
            if (a.isDefault) {
                return <div className={module5182.titleRow}><span className={module5182.title}>{e}</span><span className={module5182.tag}>{t("DEFAULT_IMAGE_REGISTRY")}</span></div>;
            }
            return e;
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
                    render: function(t, a) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={e.getDefaultLabel(getDisplayName(a), a)} desc={a.description || "-"} to={`/v2/edgewize/clusters/${cluster}/projects/${a.namespace}/${module}/${t}`} isMultiCluster={a.isFedManaged}/>;
                    }
                },
                {
                    title: t("PROJECT"),
                    dataIndex: "namespace",
                    isHideable: true,
                    width: "16%",
                    render: function(e) {
                        return <Link to={`/v2/edgewize/clusters/${cluster}/projects/${e}`}>{e}</Link>;
                    }
                },
                {
                    title: t("TYPE"),
                    dataIndex: "type",
                    isHideable: true,
                    width: "20%",
                    render: function(e) {
                        if (SECRET_TYPES[e]) {
                            return t(SECRET_TYPES[e]);
                        }
                        return e;
                    }
                },
                {
                    title: t("SECRET_FIELD_COUNT"),
                    dataIndex: "data",
                    isHideable: true,
                    width: "16%",
                    render: function(e) {
                        return Object.keys(e).length;
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
        e.showAction = function(e) {
            return !e.isFedManaged;
        };
        e.showSetDefault = function(e) {
            return e.type === "kubernetes.io/dockerconfigjson" && !e.isDefault;
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, getData } = e_props;
            return e.props.trigger("secret.create", {
                module,
                isEdgeWize: true,
                cluster: match.params.cluster,
                namespace: match.params.namespace,
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
                return <ListPage {...this.props}><Module793 {...bannerProps}/><Module811 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate} cluster={match.params.cluster} getCheckboxProps={this.getCheckboxProps} searchType="name"/></ListPage>;
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
                        key: "editSecret",
                        icon: "pen",
                        text: t("EDIT_SETTINGS"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            trigger("secret.edit", {
                                detail: e,
                                success: getData
                            });
                        }
                    },
                    {
                        key: "default",
                        icon: "star",
                        text: t("SET_AS_DEFAULT"),
                        action: "edit",
                        show: this.showSetDefault,
                        onClick: function(e) {
                            trigger("secret.default", {
                                detail: e,
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
                            trigger("resource.delete", {
                                type: name,
                                detail: e,
                                success: getData
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || o;
export default S;
