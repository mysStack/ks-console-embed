import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-197.js";
import "./module-6.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-64.js";
import "./module-7.js";
import "./module-109.js";
import module61 from "./module-61.js";
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import "./module-45.js";
import "./module-28.js";
import "./module-245.js";
import "./module-442.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module96 from "./module-96.js";
import { Component, createRef } from "./module-553.js";
import { observer } from "./module-239.js";
import module14 from "./module-14.js";
import module243 from "./module-243.js";
import module968 from "./module-968.js";
import module195 from "./module-195.js";
import module250 from "./module-250.js";
import module1383 from "./module-1383.js";
import module1123 from "./module-1123.js";
import module1755 from "./module-1755.js";
import module1744 from "./module-1744.js";
import module186 from "./module-186.js";
import Module1126 from "./module-1126.js";
import { esMark, mark, markAll } from "./module-1388.js";
import Module1064 from "./module-1064.js";
import Module985 from "./module-985.js";
import module3477 from "./module-3477.js";
let g;
let y;
let E;
let b;
let _;
let O;
let S;
let C;
let D;
let k;
function H(e) {
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
}
const Q = new module1123;
const K = [
    "m",
    "h",
    "d",
    "M",
    "y"
];
const J = observer((y = ((Component_1)=>{
    module55(h, Component_1);
    var m = H(h);
    function h(...r_1) {
        let e;
        module36(this, h);
        e = m.call(this, ...r_1);
        e.queryStore = new module1755({
            size: 50
        });
        e.histogramStore = new module1744;
        e.markMemoizee = module1383(markAll, {
            normalizer: function(e) {
                const [a, n = [], u = function() {}] = module96(e, 3);
                return `${a}+${n.toString()})+${u.name}`;
            },
            maxAge: 3000
        });
        module65(e, "tableCols", E, module88(e));
        module65(e, "logs", b, module88(e));
        module65(e, "loading", _, module88(e));
        e.state = {
            showHistogram: true,
            polling: false,
            pollingFrequency: 5000
        };
        e.tableRef = createRef();
        e.frequencyOptions = [
            5,
            10,
            15
        ].map((num)=>({
                value: 1000 * num,
                label: `${t("TIME_S", {
                    num
                })}`
            }));
        e.queryModeOptions = [
            1,
            0
        ].map((e)=>({
                value: e,
                label: e ? t("EXACT_QUERY") : t("FUZZY_QUERY")
            }));
        module65(e, "selectedDurationParameter", O, module88(e));
        module65(e, "onTableScrollTop", S, module88(e));
        e.onSearchParamsChange = function() {
            e.stopPolling();
            e.fetchHistogram();
            e.refreshQuery();
        };
        module65(e, "toggleHistogram", C, module88(e));
        module65(e, "togglePolling", D, module88(e));
        e.poll = function() {
            const searchInputState = e.props.searchInputState;
            searchInputState.end = Math.ceil(Date.now() / 1000);
            searchInputState.start = searchInputState.end - 600;
            searchInputState.step = "10s";
            searchInputState.durationAlias = `${10}m`;
            e.fetchHistogram();
            e.refreshQuery();
            e.setState({
                polling: true
            });
        };
        module65(e, "changeFrequency", k, module88(e));
        e.changeQueryMode = function(t) {
            e.props.searchInputState.queryMode = t;
            e.onSearchParamsChange();
        };
        e.changeClusterChange = function(t) {
            e.props.searchInputState.setCluster(t);
            e.onSearchParamsChange();
        };
        e.selectLog = function(t) {
            e.props.detailState.setState({
                ...t
            });
            e.props.formStepState.next();
        };
        e.clusterRenderer = function(e) {
            return t("CLUSTER_VALUE", {
                value: e.label
            });
        };
        e.renderMoreMenu = function() {
            const a = {
                ...e.duration,
                ...e.getQueryParams()
            };
            const r = [
                <module186.Menu.MenuItem key="asc"><span className={module3477.menuLinkContent}><a href={e.queryStore.exportLinkFactory({
                    ...a,
                    sort: "asc"
                })} download>{t("ASC_EXPORT")}</a></span></module186.Menu.MenuItem>,
                <module186.Menu.MenuItem key="desc"><span className={module3477.menuLinkContent}><a href={e.queryStore.exportLinkFactory({
                    ...a,
                    sort: "desc"
                })} download>{t("DESC_EXPORT")}</a> </span></module186.Menu.MenuItem>
            ];
            return <module186.Menu>{r}</module186.Menu>;
        };
        return e;
    }
    module37(h, [
        {
            key: "getQueryParams",
            value: function() {
                const searchInputState = this.props.searchInputState;
                const { query, queryMode, cluster } = searchInputState;
                return query.filter((e)=>e.key).reduce((acc, { key, value })=>{
                    const l = queryMode ? key.replace(/([^(log)]+)_query/, "$1s") : key;
                    const u = acc[l];
                    acc[l] = u ? `${u},${value}` : value;
                    return acc;
                }, {
                    cluster
                });
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.fetchHistogram();
                this.refreshQuery();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.stopPolling();
                this.markMemoizee.clear();
            }
        },
        {
            key: "refreshQuery",
            value: async function() {
                let t;
                let a;
                this.loading = true;
                this.queryStore.from = 0;
                t = this.getQueryParams();
                a = await this.fetchQuery({
                    ...t,
                    ...this.duration
                });
                this.loading = false;
                this.logs = a.reverse();
                this.scrollTo(this.logs.length);
            }
        },
        {
            key: "fetchQuery",
            value: async function(t) {
                await this.queryStore.fetch(t);
                return this.queryStore.records;
            }
        },
        {
            key: "fetchHistogram",
            value: function() {
                const e = this.getQueryParams();
                this.histogramStore.interval = this.duration.interval;
                this.histogramStore.fetch({
                    ...e,
                    ...this.duration
                });
            }
        },
        {
            key: "loadMoreLogs",
            value: async function() {
                let from;
                let a;
                from = this.queryStore.from + this.queryStore.size;
                a = await this.fetchQuery({
                    ...this.queryStore.preParams,
                    from
                });
                this.logs = [].concat(module61(a.reverse()), module61(this.logs));
                this.scrollTo(a.length);
            }
        },
        {
            key: "getNextStepLevel",
            value: function(e) {
                const t = e.match(/\d+(\w+)$/);
                const a = module96(t, 2)[1];
                const r = a === undefined ? "m" : a;
                const n = K.findIndex((e)=>e === r);
                return `1${n < 1 ? K[0] : K[n - 1]}`;
            }
        },
        {
            key: "renderHightLightMatchTd",
            value: function(e) {
                const _this = this;
                const { resKey, searchKey, handler } = e;
                const l = handler === undefined ? mark : handler;
                return function(e) {
                    const n = e[resKey] || "";
                    const u = _this.props.searchInputState.query.filter((e)=>{
                        const e_key = e.key;
                        return e.value && module250(searchKey, e_key);
                    }).map((e)=>e.value);
                    const o = _this.markMemoizee(n, u, l);
                    return <span>{o.map((e, key)=>{
                        if (module195(e)) {
                            return e;
                        }
                        return <span key={key} className={module3477.hightLightMatch}>{e.hightLighted}</span>;
                    })}</span>;
                };
            }
        },
        {
            key: "renderHightLightMatchLogTd",
            value: function(e) {
                const _this = this;
                const { resKey, searchKey, handler } = e;
                const l = handler === undefined ? mark : handler;
                return function(e) {
                    const n = Q.ansi_to_html(e[resKey] || "");
                    const u = _this.props.searchInputState.query.filter((e)=>{
                        const e_key = e.key;
                        return e.value && module250(searchKey, e_key);
                    }).map((e)=>e.value);
                    const o = _this.markMemoizee(n, u, l);
                    return <span dangerouslySetInnerHTML={{
                        __html: o.map((e)=>{
                            if (module195(e)) {
                                return e;
                            }
                            return `<span class="${module3477.hightLightMatch}">${e.hightLighted}</span>`;
                        })
                    }}/>;
                };
            }
        },
        {
            key: "startPolling",
            value: function(e) {
                this.poll();
                if (this.pollingInterval) {
                    clearInterval(this.pollingInterval);
                }
                this.pollingInterval = setInterval(this.poll, e || this.state.pollingFrequency);
            }
        },
        {
            key: "stopPolling",
            value: function() {
                this.setState({
                    polling: false
                });
                clearInterval(this.pollingInterval);
            }
        },
        {
            key: "addPollingQuery",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                a = this.getQueryParams();
                r = {
                    from: 0,
                    start_time: Date.now() - this.state.pollingFrequency,
                    end_time: Date.now()
                };
                n = await this.fetchQuery({
                    ...a,
                    ...r
                });
                (t = this.logs).push.apply(t, module61(n.reverse()));
                this.scrollTo(this.logs.length);
            }
        },
        {
            key: "scrollTo",
            value: function(e) {
                this.tableRef.current.scrollToRow(e);
            }
        },
        {
            key: "render",
            value: function() {
                const showHistogram = this.state.showHistogram;
                return <div className={module3477.container}><module186.Loading spinning={this.loading}>{this.renderSearchBar()}</module186.Loading><div className={module3477.searchResult}><module186.Loading spinning={this.loading}><>{this.renderToolBar()}{showHistogram && this.renderTimeChart()}</></module186.Loading>{this.renderTable()}</div></div>;
            }
        },
        {
            key: "renderSearchBar",
            value: function() {
                return <div className={module3477.searchBar}>{globals.app.isMultiCluster && <module186.Select value={this.props.searchInputState.cluster} onChange={this.changeClusterChange} className={module3477.select} valueRenderer={this.clusterRenderer} options={this.props.clustersOpts}/>}<Module985 className={module3477.searchInput} onChange={this.onSearchParamsChange} params={this.props.searchInputState} dropDownItems={{
                    log_query: {
                        icon: "magnifier",
                        text: t("KEYWORD")
                    },
                    namespace_query: {
                        icon: "project",
                        text: t("PROJECT")
                    },
                    workload_query: {
                        icon: "backup",
                        text: t("WORKLOAD")
                    },
                    pod_query: {
                        icon: "pod",
                        text: t("POD")
                    },
                    container_query: {
                        icon: "docker",
                        text: t("CONTAINER")
                    }
                }}/><module186.Select className={module3477.select} value={this.props.searchInputState.queryMode} onChange={this.changeQueryMode} options={this.queryModeOptions}/></div>;
            }
        },
        {
            key: "renderToolBar",
            value: function() {
                const state = this.state;
                const { showHistogram, polling, pollingFrequency } = state;
                return <div className={module3477.toolbar}><div>{t("TIME_TOPOLOGY")}<span className={module3477.showHistogramBtn} onClick={this.toggleHistogram}>{showHistogram ? t("DISPLAY") : t("HIDE")}<module186.Icon name="caret-down" type="light"/></span></div><div className={module3477.operation}><span className={module3477.pollingBtn} onClick={this.togglePolling}><module186.Tooltip content={polling ? t("STOP_REAL_TIME_CONTAINER_LOG") : t("START_REAL_TIME_CONTAINER_LOG")}><module186.Icon name={polling ? "stop" : "start"} type="light" size={16}/></module186.Tooltip></span><span className={module3477.exportButton}><module186.Dropdown content={this.renderMoreMenu} trigger="click" placement="bottomRight"><div className={module3477.exportText}><span className={module3477.text}>{t("LOG_EXPORT")}</span><module186.Icon name="more" type="light"/></div></module186.Dropdown></span><span className={module3477.frequencyOpts}><span> {t("REFRESH_RATE_COLON")}</span><module186.Select value={pollingFrequency} onChange={this.changeFrequency} className={module3477.frequencyOptions} options={this.frequencyOptions}/></span></div></div>;
            }
        },
        {
            key: "renderTimeChart",
            value: function() {
                return <div className={module3477.chartContainer}><div className={module3477.recentSummary}><h2 className={module3477.count}>{this.histogramStore.logsCount}</h2><p>{t("SEARCH_RESULTS")}</p></div><div className={module3477.chart}><Module1064 xKey="time" data={module14.toJS(this.histogramStore.histograms)} legend={[
                    [
                        "count",
                        t("CONTAINER_LOG_COUNT")
                    ]
                ]} interval={this.histogramStore.interval} onBarClick={this.selectedDurationParameter}/></div></div>;
            }
        },
        {
            key: "renderTable",
            value: function() {
                return <div className={module3477.table}><Module1126 onScroll={this.onTableScrollTop} onTrClick={this.selectLog} cols={this.tableCols} data={this.logs} tableRef={this.tableRef}/></div>;
            }
        },
        {
            key: "defaultDuration",
            get: function() {
                return {
                    start_time: 0,
                    end_time: Date.now(),
                    interval: "1d"
                };
            }
        },
        {
            key: "duration",
            get: function() {
                const searchInputState = (this.props || {}).searchInputState;
                const t = Date.now();
                const { start, end, step } = searchInputState;
                if (start) {
                    return {
                        start_time: module968([
                            1000 * start,
                            t
                        ]),
                        end_time: module968([
                            1000 * end,
                            t
                        ]),
                        interval: step
                    };
                }
                return this.defaultDuration;
            }
        }
    ]);
    return h;
})(Component), E = module49(y.prototype, "tableCols", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [
            {
                thead: t("TIME"),
                key: "time",
                content: function(e) {
                    return `[${module243(e.time).format("YYYY-MM-DD HH:mm:ss")}]`;
                },
                hidden: false
            },
            {
                thead: t("PROJECT"),
                key: "project",
                content: this.renderHightLightMatchTd({
                    resKey: "namespace",
                    searchKey: [
                        "namespace_query"
                    ]
                }),
                hidden: false
            },
            {
                thead: t("POD"),
                key: "pod",
                hidden: false,
                content: this.renderHightLightMatchTd({
                    resKey: "pod",
                    searchKey: [
                        "pod_query",
                        "workload_query"
                    ]
                })
            },
            {
                thead: t("CONTAINER"),
                key: "container",
                hidden: true,
                content: this.renderHightLightMatchTd({
                    resKey: "container",
                    searchKey: [
                        "container_query"
                    ]
                })
            },
            {
                thead: t("LOG"),
                key: "log",
                className: module3477.logItem,
                content: this.renderHightLightMatchLogTd({
                    resKey: "log",
                    searchKey: [
                        "log_query"
                    ],
                    handler: esMark
                }),
                mustShow: true
            }
        ];
    }
}), b = module49(y.prototype, "logs", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), _ = module49(y.prototype, "loading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
}), module49(y.prototype, "refreshQuery", [
    module14.action
], Object.getOwnPropertyDescriptor(y.prototype, "refreshQuery"), y.prototype), module49(y.prototype, "fetchQuery", [
    module14.action
], Object.getOwnPropertyDescriptor(y.prototype, "fetchQuery"), y.prototype), module49(y.prototype, "fetchHistogram", [
    module14.action
], Object.getOwnPropertyDescriptor(y.prototype, "fetchHistogram"), y.prototype), O = module49(y.prototype, "selectedDurationParameter", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            let a;
            let r;
            let n;
            let l;
            const t_time = t.time;
            const o = t_time === undefined ? 0 : t_time;
            const interval = _this.histogramStore.interval;
            const searchInputState = _this.props.searchInputState;
            searchInputState.durationAlias = "";
            searchInputState.end = Math.ceil(o / 1000) + (a = interval.match(/(\d+)(\w+)/), ((n = (r = module96(a, 3))[1]) === undefined ? 0 : n) * ({
                s: 1,
                m: 60,
                h: 3600,
                d: 86400
            })[(l = r[2]) === undefined ? "s" : l]);
            searchInputState.start = Math.ceil(o / 1000);
            searchInputState.step = _this.getNextStepLevel(interval);
            _this.fetchHistogram();
            _this.refreshQuery();
        };
    }
}), S = module49(y.prototype, "onTableScrollTop", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ scrollTop }) {
            const queryStore = _this.queryStore;
            const { from, size, total } = queryStore;
            if (scrollTop === 0 && total > from + size) {
                _this.loadMoreLogs();
            }
        };
    }
}), module49(y.prototype, "loadMoreLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(y.prototype, "loadMoreLogs"), y.prototype), C = module49(y.prototype, "toggleHistogram", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.setState(function(e) {
                return {
                    showHistogram: !e.showHistogram
                };
            });
        };
    }
}), D = module49(y.prototype, "togglePolling", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            const polling = _this.state.polling;
            if (polling) {
                _this.stopPolling();
            } else {
                _this.startPolling();
            }
            _this.setState({
                polling: !polling
            });
        };
    }
}), module49(y.prototype, "addPollingQuery", [
    module14.action
], Object.getOwnPropertyDescriptor(y.prototype, "addPollingQuery"), y.prototype), k = module49(y.prototype, "changeFrequency", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(pollingFrequency) {
            _this.setState({
                pollingFrequency
            });
            if (_this.state.polling) {
                _this.stopPolling();
                _this.startPolling(pollingFrequency);
            }
        };
    }
}), g = y)) || g;
export default J;
