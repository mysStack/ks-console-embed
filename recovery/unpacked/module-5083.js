import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-188.js";
import "./module-7.js";
import "./module-109.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import module63 from "./module-63.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module244 from "./module-244.js";
import Module1414 from "./module-1414.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import Module922 from "./module-922.js";
import Module1253 from "./module-1253.js";
import { getLocalTime } from "./module-52.js";
import { getPipelineStatus } from "./module-434.js";
import { ReactComponent } from "./module-1145.js";
import Module797 from "./module-797.js";
import Module963 from "./module-963.js";
import module3 from "./module-3.js";
let l;
const A = inject("rootStore", "detailStore")(l = observer(l = ((Component_1)=>{
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
        e.name = "branch";
        e.store = e.props.detailStore || {};
        e.refreshTimer = setInterval(()=>e.getData(), 4000);
        e.refreshHandler = function() {
            if (e.isRuning) {
                e.getData();
            } else {
                clearInterval(e.refreshTimer);
                e.refreshTimer = null;
            }
        };
        e.handleFetch = function(t, r) {
            e.routing.query(t, r);
        };
        e.handleScanRepository = async function r() {
            let n;
            let a;
            n = e.props.match.params;
            a = e.props.detailStore.detail;
            await e.props.detailStore.scanRepository({
                devops: n.devops,
                cluster: n.cluster,
                name: a.name
            });
            e.store.fetchDetail(n);
            module240.success({
                content: t("SCAN_REPO_SUCCESSFUL")
            });
        };
        e.getColumns = function() {
            return [
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    width: "20%",
                    render: function(e, r) {
                        if (r.disabled) {
                            return <Module922 label={t("DISABLED")} type="error"/>;
                        }
                        return <Module922 {...getPipelineStatus(module26(r, "latestRun", {}))}/>;
                    }
                },
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "20%",
                    render: function(t, r) {
                        return <Module1414 className={module3("item-name", {})} to={`${e.prefix}/${t}/activity`}><ReactComponent style={{
                            width: "20px",
                            height: "20px"
                        }}/>{r.disabled ? <del>{decodeURIComponent(t)}</del> : decodeURIComponent(t)}</Module1414>;
                    }
                },
                {
                    title: t("HEALTH_STATUS"),
                    dataIndex: "weatherScore",
                    width: "20%",
                    render: function(score) {
                        return <Module1253 score={score}/>;
                    }
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "updateTime",
                    width: "20%",
                    render: function(e, t) {
                        if (t?.latestRun?.startTime) {
                            return getLocalTime(t.latestRun.startTime).format("YYYY-MM-DD HH:mm:ss");
                        }
                        return "-";
                    }
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
                        _this.store.getBranches({
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
            key: "getData",
            value: function() {
                const params = this.props.match.params;
                const t = module244.parse(location.search.slice(1));
                this.store.getBranches({
                    ...params,
                    ...t
                });
            }
        },
        {
            key: "render",
            value: function() {
                const e = module14.toJS(this.store.branchList);
                const { data, filters, isLoading, total, page, limit } = e;
                const s = isLoading === false && total === 0;
                const filters_1 = module189(filters, "page", "workspace");
                const c = this.enabledActions.includes("edit");
                const pagination = {
                    total,
                    page,
                    limit
                };
                if (s && !filters.page) {
                    return <Module963 desc={t("NO_BRANCHES_FOUND")}>{c && <module186.Button type="control" onClick={this.handleScanRepository}>{t("SCAN_REPOSITORY")}</module186.Button>}</Module963>;
                }
                return <Module797 rowKey="displayName" data={data} columns={this.getColumns()} filters={filters_1} pagination={pagination} isLoading={isLoading} onFetch={this.handleFetch} hideSearch/>;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const params = this.props.match.params;
                const { cluster, devops } = params;
                return globals.app.getActions({
                    module: "pipelines",
                    cluster,
                    devops
                });
            }
        },
        {
            key: "isRuning",
            get: function() {
                const e = module26(module14.toJS(this.store), "branchList.data", []).filter((e)=>{
                    const t = module26(e, "latestRun.state");
                    return t && t !== "FINISHED" && t !== "PAUSED";
                });
                return !module63(e);
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.match.url;
            }
        }
    ]);
    return n;
})(Component)) || l) || l;
export default A;
