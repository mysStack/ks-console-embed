import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-110.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import module794, { ListPage } from "./module-794.js";
import Module789 from "./module-789.js";
import Module793 from "./module-793.js";
import module1108 from "./module-1108.js";
import Module797 from "./module-797.js";
import { capitalize, getDisplayName, getLocalTime } from "./module-52.js";
import module189 from "./module-189.js";
import module5062 from "./module-5062.js";
let u;
const P = module794({
    store: new module1108,
    module: "codeRepos",
    name: "CODE_REPO",
    rowKey: "name",
    authKey: "gitrepositories"
})(u = ((Component_1)=>{
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
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.getData = async (r)=>{
            await e.props.store.fetchList({
                devops: e.devops,
                ...e.props.match.params,
                ...r
            });
        };
        e.handleFetch = function(t, r) {
            e.routing.query(t, r);
        };
        e.handleCreate = function() {
            e.props.trigger("codeRepo.create", {
                title: t("IMPORT_CODE_REPO"),
                devops: e.devops,
                cluster: e.cluster,
                module: "codeRepos",
                noCodeEdit: true,
                success: e.getData
            });
        };
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "20%",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(e, t) {
                        return <Module789 className={module5062.avatar} to="" icon={t.provider === "bitbucket_server" ? "bitbucket" : t.provider} iconSize={40} desc={t.description} title={getDisplayName(t)}/>;
                    }
                },
                {
                    title: t("SOURCE"),
                    dataIndex: "provider",
                    isHideable: true,
                    width: "20%",
                    render: function(e) {
                        return capitalize(e === "bitbucket_server" ? "bitbucket" : e);
                    }
                },
                {
                    title: t("CODE_REPOSITORY_ADDRESS"),
                    dataIndex: "repoURL",
                    isHideable: true,
                    width: "40%"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("createTime"),
                    isHideable: true,
                    width: "20%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        return e;
    }
    module37(n, [
        {
            key: "renderContent",
            value: function() {
                const tableProps = this.props.tableProps;
                const r = module14.toJS(this.props.store.list);
                const { filters, isLoading, total } = r;
                const l = module189(filters, [
                    "limit",
                    "page"
                ]);
                const onCreate = this.enabledActions.includes("create") ? this.handleCreate : null;
                const showEmpty = isLoading === false && total === 0 && Object.keys(l).length <= 0;
                return <Module797 rowKey="name" {...tableProps} columns={this.getColumns()} onCreate={onCreate} onFetch={this.handleFetch} tableActions={{}} itemActions={this.itemActions} isLoading={isLoading} showEmpty={showEmpty} enabledActions={this.enabledActions} createText={t("ADD")}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const bannerProps = this.props.bannerProps;
                return <ListPage getData={this.getData} {...this.props}><Module793 {...bannerProps}/>{this.renderContent()}</ListPage>;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "gitrepositories",
                    cluster: this.props.match.params.cluster,
                    devops: this.devops
                });
            }
        },
        {
            key: "devops",
            get: function() {
                return this.props.match.params.devops;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "prefix",
            get: function() {
                this.props.match.url.endsWith("/");
                return this.props.match.url;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, routing } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function(r) {
                            trigger("codeRepo.edit", {
                                title: t("EDIT_CODE_REPO"),
                                devops: _this.devops,
                                cluster: _this.cluster,
                                module: "codeRepos",
                                detail: r,
                                noCodeEdit: true,
                                success: _this.getData
                            });
                        }
                    },
                    {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        onClick: function(t) {
                            trigger("resource.yaml.edit", {
                                detail: {
                                    ...t,
                                    devops: _this.devops,
                                    cluster: _this.cluster
                                },
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(t) {
                            trigger("codeRepo.delete", {
                                type: "CODE_REPO",
                                detail: t,
                                devops: _this.devops,
                                cluster: _this.cluster,
                                success: routing.query
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || u;
export default P;
