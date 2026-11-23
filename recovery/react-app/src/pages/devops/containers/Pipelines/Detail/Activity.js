import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-73.js";
import "unpacked/module-48.js";
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
import "unpacked/module-64.js";
import "unpacked/module-188.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module189 from "unpacked/module-189.js";
import module801 from "unpacked/module-801.js";
import module63 from "unpacked/module-63.js";
import { Link } from "unpacked/module-433.js";
import module14 from "unpacked/module-14.js";
import module244 from "unpacked/module-244.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import { formatUsedTime, getLocalTime } from "utils/index";
import Module922 from "pages/devops/components/Status";
import { getPipelineStatus } from "utils/status";
import { ReactComponent } from "unpacked/module-1145.js";
import { trigger } from "utils/action";
import Module797 from "components/Tables/List";
import Module963 from "unpacked/module-963.js";
import module960 from "stores/devops/pipelines";
let l;
const x = inject("rootStore", "detailStore")(l = observer(l = trigger(l = ((Component_1)=>{
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
    function n(...l) {
        let e;
        module36(this, n);
        e = r.call(this, ...l);
        e.name = "Activity";
        e.store = e.props.detailStore || {};
        e.deletedStore = new module960;
        e.refreshTimer = setInterval(()=>e.getData(), 4000);
        e.getData = function() {
            const params = e.props.match.params;
            const r = module244.parse(location.search.slice(1));
            e.store.getActivities({
                ...params,
                ...r
            });
        };
        e.refreshHandler = function() {
            if (e.isRuning) {
                e.getData();
            } else {
                clearInterval(e.refreshTimer);
                e.refreshTimer = null;
            }
        };
        e.handleRunning = module801(module44(module41.mark(function* r() {
            let params;
            let a;
            let o;
            params = e.props.match.params;
            yield e.store.fetchDetail(params);
            a = e.store.detail;
            o = !module63(module14.toJS(a.parameters));
            if (!(module63(module14.toJS(a.branchNames)) && !o)) {
                e.trigger("pipeline.params", {
                    devops: params.devops,
                    cluster: params.cluster,
                    params,
                    branches: module14.toJS(a.branchNames),
                    disabledBrancheNames: module14.toJS(a.disabledBrancheNames),
                    parameters: module14.toJS(a.parameters),
                    success: function() {
                        e.handleFetch();
                    }
                });
            } else {
                module240.success({
                    content: `${t("PIPELINE_RUN_START_SI")}`
                });
                yield e.props.detailStore.runBranch(params);
                e.handleFetch();
            }
        })), 500);
        e.handleFetch = function(t, r) {
            e.routing.query(t, r);
        };
        e.handleReplay = function(r) {
            return module44(module41.mark(function n() {
                let a;
                return module41.wrap(function(n) {
                    while(true){
                        switch(n.prev = n.next){
                            case 0:
                                a = e.props.match.params;
                                if (!e.isMultiBranch) {
                                    n.next = 7;
                                    break;
                                }
                                n.next = 4;
                                return e.deletedStore.getBranchDetail({
                                    ...a,
                                    branch: r.pipeline
                                });
                            case 4:
                                if (!n.sent.disabled) {
                                    n.next = 7;
                                    break;
                                }
                                return n.abrupt("return", module240.error(t("BRANCH_DISABLED_NOT_REPLAY")));
                            case 7:
                                n.next = 9;
                                return e.props.detailStore.handleActivityReplay({
                                    ...a,
                                    url: e.getActivityDetailLinks(r)
                                });
                            case 9:
                                module240.success({
                                    content: `${t("PIPELINE_RUN_START_SI")}`
                                });
                                e.handleFetch();
                            case 11:
                            case "end":
                                return n.stop();
                        }
                    }
                }, n);
            }));
        };
        e.handleScanRepository = async function r() {
            let n;
            let a;
            n = e.props.match.params;
            a = e.props.detailStore.detail;
            await e.props.detailStore.scanRepository({
                devops: n.devops,
                name: a.name,
                cluster: n.cluster
            });
            e.store.fetchDetail(n);
            module240.success({
                content: t("SCAN_REPO_SUCCESSFUL")
            });
            e.handleFetch();
        };
        e.handleStop = function(r) {
            return module44(module41.mark(function* n() {
                let a;
                a = e.props.match.params;
                yield e.props.detailStore.handleActivityStop({
                    url: e.getActivityDetailLinks(r),
                    ...a
                });
                module240.success({
                    content: t("STOP_PIPELINE_SUCCESSFUL")
                });
                e.handleFetch();
            }));
        };
        e.getActivityDetailLinks = function(e) {
            const t = module26(e, "_originData.spec.scm.refName");
            if (t) {
                return `branches/${encodeURIComponent(t)}/runs/${e.id}`;
            }
            return `runs/${e.id}`;
        };
        e.getRunhref = function(t) {
            const r = module26(t, "_originData.spec.scm.refName");
            const n = module26(t, "_originData.metadata.name");
            if (r && !e.isAtBranchDetailPage) {
                return `${e.prefix}/branch/${t.pipeline}/run/${n}`;
            }
            return `${e.prefix}/run/${n}`;
        };
        e.getColumns = function() {
            return [
                {
                    title: t("STATUS"),
                    width: "15%",
                    key: "status",
                    render: function(t) {
                        if (getPipelineStatus(t)?.type !== "nostatus" && t.result) {
                            return <Link className="item-name" to={e.getRunhref(t)}><Module922 {...getPipelineStatus(t)}/></Link>;
                        }
                        return <Module922 {...getPipelineStatus(t)}/>;
                    }
                },
                {
                    title: t("RUN_ID"),
                    width: "10%",
                    key: "run",
                    render: function(t) {
                        if (t.id) {
                            return <Link className="item-name" to={e.getRunhref(t)}>{t.id}</Link>;
                        }
                        return <span>-</span>;
                    }
                },
                {
                    title: t("COMMIT"),
                    dataIndex: "commitId",
                    width: "10%",
                    render: function(e) {
                        return e && e.slice(0, 6) || "-";
                    }
                }
            ].concat(module61(e.isAtBranchDetailPage || !e.isMultiBranch ? [] : [
                {
                    title: t("BRANCH_SI"),
                    width: "15%",
                    key: "branch",
                    render: function(t) {
                        const r = module26(t, "_originData.spec.scm.refName", "");
                        if (r) {
                            return <Link className="item-name" to={`${e.prefix}/branch/${r}/activity`}><ReactComponent style={{
                                width: "20px",
                                height: "20px"
                            }}/> {decodeURIComponent(r)}</Link>;
                        }
                        return "-";
                    }
                }
            ]), [
                {
                    title: t("LAST_MESSAGE"),
                    dataIndex: "causes",
                    width: "25%",
                    render: function(e, t) {
                        let r = module26(e, "[0].shortDescription", "");
                        const n = module26(t, '_originData.metadata.annotations["devops.kubesphere.io/creator"]');
                        if (n) {
                            if (r === "Started by user admin") {
                                r = r.replace("user admin", `user ${n}`);
                            }
                            return r;
                        }
                        return r;
                    }
                },
                {
                    title: t("DURATION"),
                    dataIndex: "durationInMillis",
                    width: "10%",
                    render: function(e) {
                        if (e) {
                            return formatUsedTime(e);
                        }
                        return "-";
                    }
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "startTime",
                    width: "20%",
                    render: function(e) {
                        if (e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                        return "-";
                    }
                },
                {
                    isHideable: false,
                    width: "10%",
                    key: "action",
                    render: function(r) {
                        if (r.branch && !r.commitId || !e.enabledActions.includes("edit") || !r.id) {
                            return null;
                        }
                        if (r.state === "FINISHED") {
                            return <module186.Tooltip content={t("Replay")}><module186.Button onClick={e.handleReplay(r)} icon="restart" type="flat"/></module186.Tooltip>;
                        }
                        return <module186.Tooltip content={t("STOP")}><module186.Button onClick={e.handleStop(r)} icon="stop" type="flat"/></module186.Tooltip>;
                    }
                }
            ]);
        };
        e.getActions = function() {
            if (e.isAtBranchDetailPage) {
                return null;
            }
            return [
                {
                    type: "control",
                    key: "run",
                    text: t("RUN"),
                    action: "edit",
                    onClick: e.handleRunning
                }
            ];
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                const params = this.props.match.params;
                this.unsubscribe = this.routing.history.subscribe(function(r) {
                    if (r.pathname === _this.props.match.url) {
                        const n = module244.parse(r.search.slice(1));
                        _this.store.getActivities({
                            ...params,
                            ...n
                        });
                    }
                });
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
            key: "render",
            value: function() {
                const activityList = this.store.activityList;
                const { data, isLoading, total, page, limit, filters } = activityList;
                const filters_1 = module189(filters, "page", "workspace");
                const pagination = {
                    total,
                    page,
                    limit
                };
                if (total === 0) {
                    const c = this.store.detail;
                    const d = this.enabledActions.includes("edit");
                    const f = !module63(module14.toJS(c.branchNames));
                    const p = module26(this.props, "match.params.branch");
                    if (!f || module63(f) || p) {
                        return <Module963 desc={t("ACTIVITY_EMPTY_TIP")}>{d && <module186.Button type="control" onClick={this.handleRunning}>{t("RUN")}</module186.Button>}</Module963>;
                    }
                    return <Module963 desc={t("NO_PIPELINE_CONFIG_FILE_TIP")}>{d && <module186.Button type="control" onClick={this.handleScanRepository}>{t("SCAN_REPOSITORY")}</module186.Button>}</Module963>;
                }
                return <Module797 data={module14.toJS(data)} columns={this.getColumns()} rowKey="uid" filters={filters_1} pagination={pagination} isLoading={isLoading} onFetch={this.handleFetch} actions={this.getActions()} showEmpty={false} hideSearch enabledActions={this.enabledActions}/>;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const params = this.props.match.params;
                const { devops, cluster } = params;
                return globals.app.getActions({
                    module: "pipelineruns",
                    cluster,
                    devops
                });
            }
        },
        {
            key: "isRuning",
            get: function() {
                const e = module26(module14.toJS(this.store), "activityList.data", []).filter((e)=>e.state !== "FINISHED" && e.state !== "PAUSED");
                return !module63(e);
            }
        },
        {
            key: "isAtBranchDetailPage",
            get: function() {
                return this.props.match.params.branch;
            }
        },
        {
            key: "isMultiBranch",
            get: function() {
                return !module63(module14.toJS(this.store.detail.branchNames));
            }
        },
        {
            key: "isDisabled",
            get: function() {
                return this.store?.branchDetail?.disabled;
            }
        },
        {
            key: "prefix",
            get: function() {
                const e = this.props.match.url.split("/");
                e.pop();
                return e.join("/");
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return n;
})(Component)) || l) || l) || l;
export default x;
