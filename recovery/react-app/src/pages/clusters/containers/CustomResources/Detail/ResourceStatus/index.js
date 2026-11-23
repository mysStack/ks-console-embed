import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import Module789 from "components/Base/Avatar";
import Module797 from "components/Tables/List";
import { getDisplayName, getLocalTime } from "utils/index";
import { trigger } from "utils/action";
import module1172 from "stores/crd.resource";
import module4254 from "unpacked/module-4254.js";
let u;
const R = inject("rootStore", "detailStore")(u = observer(u = trigger(u = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.getData = function(e) {
            t.store.fetchList({
                ...e,
                cluster: t.props.match.params.cluster
            });
        };
        const detail = t.props.detailStore.detail;
        const { group, latestVersion, kind, module } = detail;
        t.store = new module1172({
            kind,
            module,
            apiVersion: `apis/${group}/${latestVersion}`
        });
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "render",
            value: function() {
                const list = this.store.list;
                const { data, name, page, total, limit, isLoading } = list;
                const pagination = {
                    page,
                    total,
                    limit
                };
                const filters = {
                    name
                };
                return <div><div className={module4254.title}>{t("CUSTOM_RESOURCE_PL")}</div><Module797 data={module14.toJS(data)} columns={this.columns} isLoading={isLoading} onFetch={this.getData} itemActions={this.itemActions} enabledActions={this.enabledActions} pagination={pagination} filters={filters} showEmpty={false} searchType="name" hideCustom/></div>;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "customresourcedefinitions",
                    cluster: this.props.match.params.cluster
                });
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                return [
                    this.enabledActions.includes("edit") ? {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        onClick: function(t) {
                            return _this.trigger("resource.yaml.edit", {
                                detail: t,
                                yaml: t._originData,
                                success: _this.getData
                            });
                        }
                    } : {
                        key: "viewYaml",
                        icon: "eye",
                        text: t("VIEW_YAML"),
                        action: "view",
                        onClick: function(t) {
                            return _this.trigger("resource.yaml.edit", {
                                detail: t,
                                yaml: t._originData,
                                readOnly: true
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(detail) {
                            return _this.trigger("resource.delete", {
                                type: "CUSTOM_RESOURCE",
                                detail,
                                success: _this.getData
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "columns",
            get: function() {
                const scope = this.props.detailStore.detail.scope;
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        render: function(e, t) {
                            return <Module789 title={getDisplayName(t)} desc={t.description} noLink/>;
                        }
                    }
                ].concat(module61(scope === "Namespaced" ? [
                    {
                        title: t("PROJECT_DEVOPS_PROJECT"),
                        dataIndex: "namespace"
                    }
                ] : []), [
                    {
                        title: t("CREATION_TIME_TCAP"),
                        dataIndex: "createTime",
                        render: function(e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                    }
                ]);
            }
        }
    ]);
    return r;
})(Component)) || u) || u) || u;
export default R;
