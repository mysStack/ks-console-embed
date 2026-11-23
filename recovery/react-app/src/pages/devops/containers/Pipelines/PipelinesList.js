import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
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
import "unpacked/module-110.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module789 from "components/Base/Avatar";
import Module793 from "unpacked/module-793.js";
import { ListPage, withDevOpsList } from "components/HOCs/withList";
import Module875 from "components/Tables/Base/Empty";
import Module797 from "components/Tables/List";
import Module1253 from "pages/devops/components/Health";
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module189 from "unpacked/module-189.js";
import module14 from "unpacked/module-14.js";
import { Component } from "unpacked/module-553.js";
import module960 from "stores/devops/pipelines";
let l;
const L = withDevOpsList({
    store: new module960,
    module: "pipelines",
    name: "PIPELINE",
    rowKey: "name"
})(l = ((Component_1)=>{
    module55(a, Component_1);
    var n = ((e)=>{
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
    })(a);
    function a(e) {
        let r;
        module36(this, a);
        r = n.call(this, e);
        r.refreshHandler = function() {
            if (r.isRuning) {
                r.getData({
                    silent: true
                });
            } else {
                clearInterval(r.refreshTimer);
                r.refreshTimer = null;
            }
        };
        r.getData = function(e) {
            r.props.store.fetchList({
                devops: r.devops,
                devopsName: r.devopsName,
                ...r.props.match.params,
                ...e
            });
        };
        r.handleFetch = function(e, t) {
            r.routing.query(e, t);
        };
        r.handleCreate = function() {
            const r_props = r.props;
            const e_trigger = r_props.trigger;
            e_trigger("pipeline.create", {
                module: r_props.module,
                trigger: e_trigger,
                title: t("CREATE_PIPELINE"),
                formTemplate: r.formTemplate,
                devops: r.devops,
                cluster: r.cluster,
                noCodeEdit: true,
                success: function() {
                    r.getData();
                }
            });
        };
        r.handleCopy = async (n)=>{
            let a;
            let o;
            a = r.props.trigger;
            o = await r.getCRDDetail(n);
            a("pipeline.copy", {
                title: t("COPY_PIPELINE"),
                formTemplate: o,
                devops: r.devops,
                cluster: r.cluster,
                success: function() {
                    r.getData();
                }
            });
        };
        r.getCRDDetail = async (name)=>{
            let n;
            await r.props.store.fetchDetail({
                cluster: r.cluster,
                name,
                devops: r.devops
            });
            n = module136(r.props.store.getPipeLineConfig());
            n.devops = r.devops;
            n.cluster = r.cluster;
            n.devopsName = r.devopsName;
            return n;
        };
        r.handleAdvanceEdit = async (n)=>{
            let a;
            a = await r.getCRDDetail(n);
            r.props.trigger("pipeline.advance.edit", {
                title: t("EDIT_PIPELINE"),
                formTemplate: a,
                cluster: r.cluster,
                devops: r.devops,
                success: function() {
                    r.handleFetch();
                }
            });
        };
        r.getColumns = function() {
            const getFilteredValue = r.props.getFilteredValue;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "20%",
                    search: true,
                    render: function(title, t) {
                        const n = t.status !== "failed" && t.status !== "successful";
                        const a = `/${r.workspace}/clusters/${r.cluster}/devops/${r.devops}/pipelines/${encodeURIComponent(t.name)}${t.isMultiBranch ? "/activity" : ""}`;
                        return <Module789 to={n ? null : a} title={title}/>;
                    }
                },
                {
                    title: t("HEALTH"),
                    dataIndex: "weatherScore",
                    width: "25%",
                    isHideable: true,
                    render: function(score) {
                        return <Module1253 score={score}/>;
                    }
                },
                {
                    title: t("KIND_TCAP"),
                    dataIndex: "type",
                    width: "20%",
                    filters: r.getTypes(),
                    filteredValue: getFilteredValue("type"),
                    isHideable: true,
                    search: true,
                    render: function(e, r) {
                        if (r.isMultiBranch) {
                            return t("MULTI_BRANCH_PIPELINE");
                        }
                        return t("PIPELINE_PL");
                    }
                },
                {
                    title: t("BRANCH_COUNT"),
                    dataIndex: "totalNumberOfBranches",
                    width: "20%",
                    isHideable: true,
                    render: function(e, t) {
                        if (e === undefined || !t.isMultiBranch && e === 0) {
                            return "-";
                        }
                        return e;
                    }
                },
                {
                    title: t("PULL_REQUEST_COUNT"),
                    dataIndex: "totalNumberOfPullRequests",
                    width: "15%",
                    isHideable: true,
                    render: function(e) {
                        if (e === undefined) {
                            return "-";
                        }
                        return e;
                    }
                }
            ];
        };
        r.handleMultiBatchRun = function() {
            const e = module14.toJS(r.props.store.list);
            const { selectedRowKeys, data } = e;
            const o = selectedRowKeys.filter((e)=>data.find((t)=>t.name === e).totalNumberOfBranches);
            if (!module63(o)) {
                module240.error(t("BATCH_RUN_UNSUPPORTED_DESC"));
                return false;
            }
            r.props.trigger("pipeline.batch.run", {
                type: t("PIPELINE"),
                rowKey: "name",
                devops: r.devops,
                cluster: r.cluster,
                success: function() {
                    setTimeout(()=>{
                        r.handleFetch();
                    }, 1000);
                }
            });
        };
        r.formTemplate = {
            devopsName: r.devopsName,
            cluster: r.cluster,
            devops: r.devops,
            enable_timer_trigger: false,
            enable_discarder: true
        };
        r.refreshTimer = setInterval(()=>r.refreshHandler(), 4000);
        return r;
    }
    module37(a, [
        {
            key: "componentWillReceiveProps",
            value: function(e) {
                const params = this.props.match.params;
                const params_1 = e.match.params;
                if (params.devops !== params_1.devops) {
                    this.getData(params_1);
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function() {
                const _this = this;
                if (this.refreshTimer === null && this.isRuning) {
                    this.refreshTimer = setInterval(()=>_this.refreshHandler(), 4000);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                clearInterval(this.refreshTimer);
                if (this.unsubscribe) {
                    this.unsubscribe();
                }
            }
        },
        {
            key: "handleRun",
            value: async function(t) {
                let r;
                let n;
                let a;
                let o;
                const _this = this;
                r = t.branchNames && t.branchNames.length;
                n = t.parameters && t.parameters.length;
                a = this.props.trigger;
                o = this.props.match.params;
                if (!(!r && !n)) {
                    a("pipeline.params", {
                        devops: this.devops,
                        cluster: this.cluster,
                        branches: t.branchNames,
                        disabledBrancheNames: t.disabledBrancheNames,
                        parameters: t.parameters,
                        params: {
                            ...o,
                            name: module26(t, "name", "")
                        },
                        success: function(e) {
                            _this.props.rootStore.routing.push(`${_this.prefix}/${encodeURIComponent(t.name)}/${e ? `branch/${e}/` : ""}activity`);
                        }
                    });
                } else {
                    await this.props.store.runBranch({
                        cluster: o.cluster,
                        devops: o.devops,
                        name: t.name
                    });
                    this.props.rootStore.routing.push(`${this.prefix}/${encodeURIComponent(t.name)}/activity`);
                }
            }
        },
        {
            key: "getTypes",
            value: function() {
                return [
                    {
                        text: t("PIPELINE_PL"),
                        value: "pipeline"
                    },
                    {
                        text: t("MULTI_BRANCH_PIPELINE"),
                        value: "multi-branch-pipeline"
                    }
                ];
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const { data = [], filters, isLoading, total, page, limit, selectedRowKeys } = module14.toJS(this.props.store.list);
                const f = isLoading === false && total === 0;
                const filters_1 = module189(filters, [
                    "limit",
                    "page"
                ]);
                const h = this.enabledActions.includes("create") ? this.handleCreate : null;
                if (f && Object.keys(filters_1).length <= 0) {
                    return <Module875 name="PIPELINE" action={h ? <module186.Button onClick={h} type="control">{t("CREATE")}</module186.Button> : null}/>;
                }
                const pagination = {
                    total,
                    page,
                    limit
                };
                const tableActions = {
                    hideCustom: false,
                    onSelectRowKeys: this.props.store.setSelectRowKeys,
                    selectedRowKeys,
                    selectActions: [
                        {
                            key: "run",
                            type: "primary",
                            text: t("RUN"),
                            action: "delete",
                            onClick: this.handleMultiBatchRun
                        },
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function() {
                                return _this.props.trigger("pipeline.batch.delete", {
                                    type: "PIPELINE",
                                    rowKey: "name",
                                    devops: _this.devops,
                                    cluster: _this.cluster,
                                    success: function() {
                                        setTimeout(()=>{
                                            _this.handleFetch();
                                        }, 1000);
                                    }
                                });
                            }
                        }
                    ]
                };
                const tableProps = this.props.tableProps;
                return <Module797 {...tableProps} rowKey="name" data={data} selectedRowKeys={module14.toJS(selectedRowKeys)} columns={this.getColumns()} filters={filters_1} pagination={pagination} isLoading={isLoading} onFetch={this.handleFetch} onCreate={h} tableActions={tableActions} itemActions={this.itemActions} enabledActions={this.enabledActions}/>;
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
            key: "isRuning",
            get: function() {
                const e = module14.toJS(this.props.store.list).data.filter((e)=>e.status !== "failed" && e.status !== "successful");
                return !module63(e);
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "pipelines",
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
            key: "devopsName",
            get: function() {
                return this.props.devopsStore.devopsName;
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
                const { trigger, name } = props;
                return [
                    {
                        key: "run",
                        icon: "triangle-right",
                        text: t("RUN"),
                        action: "edit",
                        onClick: function(t) {
                            _this.handleRun(t);
                        }
                    },
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function(t) {
                            _this.handleAdvanceEdit(t.name);
                        }
                    },
                    {
                        key: "copy",
                        icon: "copy",
                        text: t("COPY"),
                        action: "edit",
                        onClick: function(t) {
                            _this.handleCopy(t.name);
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(t) {
                            trigger("resource.delete", {
                                type: name,
                                resource: t.name,
                                detail: {
                                    name: t.name,
                                    devops: _this.devops,
                                    cluster: _this.cluster
                                },
                                success: function() {
                                    _this.handleFetch();
                                }
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return a;
})(Component)) || l;
export default L;
