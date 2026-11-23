import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-73.js";
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
import { ICON_TYPES } from "./module-72.js";
import module437 from "./module-437.js";
let o;
const _ = withProjectList({
    store: new module437({
        module: "configmaps"
    }),
    module: "configmaps",
    name: "CONFIGMAP"
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
    function a(...o) {
        let e;
        module36(this, a);
        e = r.call(this, ...o);
        e.getColumns = function() {
            const module = e.props.module;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(t, a) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(a)} desc={a.description || "-"} to={a.deletionTime ? null : `${e.props.match.url}/${t}`} isMultiCluster/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    render: function(e) {
                        return <Module796 type={e} name={t(e)} flicker/>;
                    }
                },
                {
                    title: t("DATA"),
                    dataIndex: "data",
                    isHideable: true,
                    width: "33%",
                    render: function(e) {
                        return Object.keys(e).join(",");
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
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, projectStore } = e_props;
            return e.props.trigger("configmap.create", {
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
                return <ListPage {...this.props} isFederated><Module793 {...bannerProps} tabs={this.tabs}/><Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate} searchType="name"/></ListPage>;
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
                        key: "editConfigMap",
                        icon: "pen",
                        text: t("EDIT_SETTINGS"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("configmap.edit", {
                                detail: e,
                                isFederated: true
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
