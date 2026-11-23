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
import Module789 from "components/Base/Avatar";
import Module793 from "unpacked/module-793.js";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import { getDisplayName, getLocalTime } from "utils/index";
import { ICON_TYPES, SECRET_TYPES } from "utils/constants";
import module853 from "stores/secret";
import module4633 from "unpacked/module-4633.js";
let o;
const b = withProjectList({
    store: new module853,
    module: "secrets",
    name: "SECRET"
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.showSetDefault = function(e) {
            return e.type === "kubernetes.io/dockerconfigjson" && !e.isDefault;
        };
        e.getDefaultLabel = function(e, a) {
            if (a.isDefault) {
                return <div className={module4633.titleRow}><span className={module4633.title}>{e}</span><span className={module4633.tag}>{t("DEFAULT_IMAGE_REGISTRY")}</span></div>;
            }
            return e;
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, module } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(t, a) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={e.getDefaultLabel(getDisplayName(a), a)} desc={a.description || "-"} to={`${e.props.match.url}/${t}`} isMultiCluster={a.isFedManaged}/>;
                    }
                },
                {
                    title: t("TYPE"),
                    dataIndex: "type",
                    isHideable: true,
                    width: "24%",
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
                    width: "20%",
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
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module } = e_props;
            return e.props.trigger("secret.create", {
                module,
                namespace: match.params.namespace,
                cluster: match.params.cluster
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps} tabs={this.tabs}/><Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate} searchType="name"/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { getData, trigger, name } = props;
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
                        key: "editSecret",
                        icon: "pen",
                        text: t("EDIT_SETTINGS"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("secret.edit", {
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
                        onClick: function(t) {
                            const match = _this.props.match;
                            trigger("secret.default", {
                                detail: t,
                                cluster: match.params.cluster,
                                success: getData
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
    return r;
})(Component)) || o;
export default b;
