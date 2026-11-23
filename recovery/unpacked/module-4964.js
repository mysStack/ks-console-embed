import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-16.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import Module793 from "./module-793.js";
import { ListPage, withProjectList } from "./module-794.js";
import Module797 from "./module-797.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { ICON_TYPES, SECRET_TYPES } from "./module-72.js";
import module437 from "./module-437.js";
let o;
const _ = withProjectList({
    store: new module437({
        module: "secrets"
    }),
    module: "secrets",
    name: "SECRET"
})(o = ((Component_1)=>{
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
    function a(e) {
        let n;
        module36(this, a);
        n = r.call(this, e);
        n.getColumns = function() {
            const module = n.props.module;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(t, r) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(r)} desc={r.description || "-"} to={r.deletionTime ? null : `${n.props.match.url}/${t}`} isMultiCluster={r.isFedManaged}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "12%",
                    render: function(e) {
                        return <Module796 type={e} name={t(e)} flicker/>;
                    }
                },
                {
                    title: t("TYPE"),
                    dataIndex: "type",
                    isHideable: true,
                    width: "12%",
                    render: function(e) {
                        return t(SECRET_TYPES[e] || e);
                    }
                },
                {
                    title: t("SECRET_FIELD_COUNT"),
                    dataIndex: "data",
                    isHideable: true,
                    width: "12%",
                    render: function(e) {
                        return Object.keys(e).length;
                    }
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
        n.fetchData = function() {
            n.store.fetchList(n.props.match.params);
        };
        n.showCreate = function() {
            const n_props = n.props;
            const { match, module, getData, projectStore } = n_props;
            return n.props.trigger("secret.create", {
                module,
                isFederated: true,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace,
                success: getData
            });
        };
        n.store = e.store;
        return n;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} isFederated><Module793 {...bannerProps} tabs={this.tabs}/><Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate} searchType="name"/></ListPage>;
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
                        key: "editSecret",
                        icon: "pen",
                        text: t("EDIT_SETTINGS"),
                        action: "edit",
                        onClick: function(t) {
                            return trigger("secret.edit", {
                                detail: t,
                                isFederated: true,
                                success: _this.fetchData
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
    return a;
})(Component)) || o;
export default _;
