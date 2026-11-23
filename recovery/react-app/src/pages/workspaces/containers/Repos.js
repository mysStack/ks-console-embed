import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-62.js";
import "unpacked/module-188.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module244 from "unpacked/module-244.js";
import module801 from "unpacked/module-801.js";
import module240 from "unpacked/module-240.js";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module793 from "unpacked/module-793.js";
import Module797 from "components/Tables/List";
import module794, { ListPage } from "components/HOCs/withList";
import module1371 from "stores/openpitrix/repo";
let s;
const D = module794({
    store: new module1371,
    module: "repos",
    authKey: "app-repos",
    name: "APP_REPOSITORY",
    rowKey: "repo_id"
})(s = ((Component_1)=>{
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
        e.handleIndex = async function r() {
            await Promise.all(e.props.store.list.selectedRowKeys.map(async (repo_id)=>{
                if ((await e.props.store.index({
                    repo_id,
                    workspace: e.workspace
                })).message === "success") {
                    module240.success(t("UPDATE_SUCCESSFUL"));
                }
            }));
            e.props.store.setSelectRowKeys([]);
        };
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "25%",
                    render: function(title, r) {
                        return <Module789 icon="catalog" iconSize={40} title={title} desc={r.description || "-"} to={`${e.props.match.url}/${r.repo_id}`}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "15%",
                    render: function(e = "syncing") {
                        return <Module796 type={e} name={t(`APP_REPO_STATUS_${e.toUpperCase()}`)} flicker/>;
                    }
                },
                {
                    title: t("URL"),
                    dataIndex: "url"
                }
            ];
        };
        e.handleFetch = module801(function(t) {
            const e_props = e.props;
            const { store, getData } = e_props;
            if (!store.list.isLoading) {
                return getData({
                    ...module244.parse(location.search.slice(1)),
                    ...t,
                    silent: true
                });
            }
        }, 1000);
        e.handleWatch = function(t) {
            if (t.object.kind === "HelmRepo" && [
                "MODIFIED",
                "DELETED",
                "ADDED"
            ].includes(t.type)) {
                e.handleFetch();
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} onMessage={this.handleWatch}><Module793 {...bannerProps} tips={this.tips} title={t("APP_REPO")} description={t("APP_REPO_DESC")}/><Module797 {...tableProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} searchType="keyword"/></ListPage>;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("HOW_TO_USE_APP_REPO_Q"),
                        description: t.html("HOW_TO_USE_APP_REPO_A")
                    }
                ];
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, name, routing } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function(t) {
                            return trigger("openpitrix.repo.edit", {
                                detail: t,
                                workspace: _this.workspace,
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
                                detail: e,
                                type: name,
                                success: routing.query
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
                const { trigger, routing } = props;
                return {
                    ...props.tableProps.tableActions,
                    searchType: "keyword",
                    actions: [
                        {
                            key: "create",
                            type: "control",
                            text: t("ADD"),
                            action: "manage",
                            onClick: function() {
                                return trigger("openpitrix.repo.add", {
                                    workspace: _this.workspace,
                                    success: routing.query
                                });
                            }
                        }
                    ],
                    selectActions: [
                        {
                            key: "index",
                            type: "primary",
                            text: t("SYNC"),
                            action: "manage",
                            onClick: this.handleIndex
                        }
                    ]
                };
            }
        }
    ]);
    return a;
})(Component)) || s;
export default D;
