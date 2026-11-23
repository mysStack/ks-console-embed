import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-188.js";
import "./module-7.js";
import "./module-109.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module244 from "./module-244.js";
import { getLocalTime } from "./module-52.js";
import Module922 from "./module-922.js";
import { getPipelineStatus } from "./module-434.js";
import Module1253 from "./module-1253.js";
import module3 from "./module-3.js";
import Module1414 from "./module-1414.js";
import Module797 from "./module-797.js";
import Module963 from "./module-963.js";
import module5089 from "./module-5089.js";
let o;
const C = inject("rootStore", "detailStore")(o = observer(o = ((Component_1)=>{
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
        e.name = "PullRequest";
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
        e.getData = function() {
            const params = e.props.match.params;
            const r = module244.parse(location.search.slice(1));
            e.store.getPullRequest({
                ...params,
                ...r
            });
        };
        e.handleFetch = function(t, r) {
            e.routing.query(t, r);
        };
        e.getFilteredValue = function(t) {
            return e.store.list.filters[t];
        };
        e.getColumns = function() {
            return [
                {
                    title: t("STATUS"),
                    width: "15%",
                    render: function(e) {
                        return <Module922 {...getPipelineStatus(module26(e, "latestRun", {}))}/>;
                    }
                },
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "15%",
                    render: function(t, r) {
                        return <Module1414 className={module3("item-name", module31({}, module5089.itemNameDisabled, r.disabled))} to={`${e.prefix}/branch/${t}/`} disabled={r.disabled}>{t}</Module1414>;
                    }
                },
                {
                    title: t("HEALTH_STATUS"),
                    dataIndex: "weatherScore",
                    width: "15%",
                    render: function(score) {
                        return <Module1253 score={score}/>;
                    }
                },
                {
                    title: t("LAST_MESSAGE"),
                    width: "20%",
                    render: function(e) {
                        return module26(e, "pullRequest.title", "");
                    }
                },
                {
                    title: t("AUTHOR"),
                    width: "15%",
                    render: function(e) {
                        return module26(e, "pullRequest.author", "");
                    }
                },
                {
                    title: t("TIME"),
                    dataIndex: "latestRun",
                    width: "20%",
                    render: function(e) {
                        return getLocalTime(e.startTime).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.getRowKey = function(e) {
            return e.enQueueTime;
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
                        _this.store.getPullRequest({
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
                const pullRequestList = this.store.pullRequestList;
                const { data, isLoading, total, page, limit, filters } = pullRequestList;
                const l = isLoading === false && total === 0 && data.length > 0;
                const pagination = {
                    total,
                    page,
                    limit
                };
                const filters_1 = module189(filters, "page", "workspace");
                if (l && !filters.page) {
                    return <Module963 name={this.name}/>;
                }
                return <Module797 data={module14.toJS(data)} columns={this.getColumns()} rowKey="displayName" filters={filters_1} pagination={pagination} isLoading={isLoading} onFetch={this.handleFetch} hideSearch/>;
            }
        },
        {
            key: "isRuning",
            get: function() {
                const e = module26(module14.toJS(this.store), "pullRequestList.data", []).filter((e)=>{
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
                const params = this.props.match.params;
                const { workspace, devops, name, cluster } = params;
                return `/${workspace}/clusters/${cluster}/devops/${devops}/pipelines/${name}`;
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default C;
