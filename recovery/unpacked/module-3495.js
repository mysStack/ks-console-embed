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
import "./module-7.js";
import "./module-109.js";
import "./module-45.js";
import "./module-28.js";
import "./module-442.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module61 from "./module-61.js";
import "./module-41.js";
import module31 from "./module-31.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module968 from "./module-968.js";
import module243 from "./module-243.js";
import module3 from "./module-3.js";
import { observer } from "./module-239.js";
import module14 from "./module-14.js";
import module985 from "./module-985.js";
import module1126 from "./module-1126.js";
import module1064 from "./module-1064.js";
import module1761 from "./module-1761.js";
import module3496 from "./module-3496.js";
import { dropDownItems, getSecond, queryKeyMapping, queryModeOptions, toArray } from "./module-1762.js";
import module3500 from "./module-3500.js";
let s;
let f;
let d;
let p;
let m;
let h;
let v;
let g;
let y;
let E;
const q = [
    "m",
    "h",
    "d",
    "M",
    "y"
];
const H = observer((f = ((e)=>{
    module55(s, e);
    var l = ((e)=>{
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
    })(s);
    function s(e) {
        let a;
        module36(this, s);
        a = l.call(this, e);
        module65(a, "logs", d, module88(a));
        module65(a, "loading", p, module88(a));
        module65(a, "tableCols", m, module88(a));
        module65(a, "selectedDurationParameter", h, module88(a));
        module65(a, "onTableScrollEnd", v, module88(a));
        a.onSearchParamsChange = function() {
            a.stopPolling();
            a.refreshQuery();
            a.fetchHistogram();
        };
        module65(a, "toggleHistogram", g, module88(a));
        module65(a, "togglePolling", y, module88(a));
        a.poll = function() {
            const searchInputState = a.props.searchInputState;
            searchInputState.end = Math.ceil(Date.now() / 1000);
            searchInputState.start = searchInputState.end - 600;
            searchInputState.step = "10s";
            searchInputState.durationAlias = `${10}m`;
            a.fetchHistogram();
            a.refreshQuery();
        };
        module65(a, "changeFrequency", E, module88(a));
        a.changeQueryMode = function(e) {
            a.props.searchInputState.queryMode = e;
            a.onSearchParamsChange();
        };
        a.changeClusterChange = function(e) {
            a.props.searchInputState.setCluster(e);
            a.onSearchParamsChange();
        };
        a.onCancel = function() {
            a.setState({
                visible: false
            });
        };
        a.openDetailsModal = function(detail) {
            a.setState({
                detail,
                eventMetadata: toArray(detail),
                visible: true
            });
        };
        a.clusterRenderer = function(e) {
            return t("CLUSTER_VALUE", {
                value: e.label
            });
        };
        a.renderTable = function() {
            return module553.default.createElement("div", {
                className: module3500.table
            }, module553.default.createElement(module1126, {
                onScroll: a.onTableScrollEnd,
                onTrClick: a.openDetailsModal,
                cols: a.tableCols,
                data: a.logs,
                body: module3500.body
            }));
        };
        a.state = {
            visible: false,
            detail: {},
            eventMetadata: [],
            showHistogram: true,
            polling: false,
            pollingFrequency: 5000
        };
        a.frequencyOptions = [
            5,
            10,
            15
        ].map((num)=>({
                value: 1000 * num,
                label: `${t("TIME_S", {
                    num
                })}`
            }));
        a.store = new module1761({
            size: 50
        });
        return a;
    }
    module37(s, [
        {
            key: "componentDidMount",
            value: function() {
                this.refreshQuery();
                this.fetchHistogram();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.stopPolling();
            }
        },
        {
            key: "refreshQuery",
            value: async function() {
                let t;
                this.loading = true;
                this.store.from = 0;
                t = this.getQueryParams();
                this.logs = await this.fetchQuery({
                    ...t,
                    ...this.duration
                });
                this.loading = false;
            }
        },
        {
            key: "loadMoreLogs",
            value: async function() {
                let t;
                let from;
                let r;
                from = this.store.from + this.store.size;
                r = await this.fetchQuery({
                    ...this.store.preParams,
                    from
                });
                (t = this.logs).push.apply(t, module61(r));
            }
        },
        {
            key: "getNextStepLevel",
            value: function(e) {
                const t = e.match(/\d+(\w+)$/);
                const a = module96(t, 2)[1];
                const r = a === undefined ? "m" : a;
                const n = q.findIndex((e)=>e === r);
                return `1${n < 1 ? q[0] : q[n - 1]}`;
            }
        },
        {
            key: "fetchQuery",
            value: async function(t) {
                let cluster;
                let r;
                cluster = this.props.searchInputState.cluster;
                r = {
                    ...t,
                    cluster
                };
                await this.store.fetchQuery(r);
                return this.store.data;
            }
        },
        {
            key: "fetchHistogram",
            value: function() {
                const e = this.getQueryParams();
                this.store.interval = this.duration.interval;
                this.store.fetchHistogram({
                    ...e,
                    ...this.duration
                });
            }
        },
        {
            key: "getQueryParams",
            value: function() {
                const searchInputState = this.props.searchInputState;
                const { query, queryMode, cluster } = searchInputState;
                return query.filter((e)=>e.key).reduce((acc, { key, value })=>{
                    const l = queryMode ? key : queryKeyMapping[key];
                    const u = acc[l];
                    acc[l] = u ? `${u},${value}` : value;
                    return acc;
                }, {
                    cluster
                });
            }
        },
        {
            key: "startPolling",
            value: function() {
                this.poll();
                this.pollingInterval = setInterval(this.poll, this.state.pollingFrequency);
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
            key: "renderSearchBar",
            value: function() {
                const props = this.props;
                const { searchInputState, clustersOpts } = props;
                return module553.default.createElement("div", {
                    className: module3500.searchBar
                }, globals.app.isMultiCluster && module553.default.createElement(module186.Select, {
                    value: searchInputState.cluster,
                    onChange: this.changeClusterChange,
                    className: module3500.select,
                    valueRenderer: this.clusterRenderer,
                    options: clustersOpts
                }), module553.default.createElement(module985, {
                    className: module3500.searchInput,
                    placeholder: t("SEARCH"),
                    onChange: this.onSearchParamsChange,
                    params: searchInputState,
                    dropDownItems
                }), module553.default.createElement(module186.Select, {
                    value: searchInputState.queryMode,
                    onChange: this.changeQueryMode,
                    className: module3500.select,
                    options: queryModeOptions
                }));
            }
        },
        {
            key: "renderToolBar",
            value: function() {
                const state = this.state;
                const { showHistogram, polling, pollingFrequency } = state;
                return module553.default.createElement("div", {
                    className: module3500.toolbar
                }, module553.default.createElement("div", null, t("TIME_TOPOLOGY"), module553.default.createElement("span", {
                    className: module3500.showHistogramBtn,
                    onClick: this.toggleHistogram
                }, showHistogram ? t("DISPLAY") : t("HIDE"), module553.default.createElement(module186.Icon, {
                    name: "caret-down",
                    type: "light"
                }))), module553.default.createElement("div", null, module553.default.createElement("span", {
                    className: module3500.pollingBtn,
                    onClick: this.togglePolling
                }, module553.default.createElement(module186.Tooltip, {
                    content: polling ? t("STOP_REAL_TIME_AUDIT_LOG") : t("START_REAL_TIME_AUDIT_LOG")
                }, module553.default.createElement(module186.Icon, {
                    name: polling ? "stop" : "start",
                    type: "light",
                    size: 16
                }))), module553.default.createElement("span", {
                    className: module3500.frequencyOpts
                }, module553.default.createElement("span", null, " ", t("REFRESH_RATE_COLON")), module553.default.createElement(module186.Select, {
                    value: pollingFrequency,
                    onChange: this.changeFrequency,
                    className: module3500.frequencyOptions,
                    options: this.frequencyOptions
                }))));
            }
        },
        {
            key: "renderTimeChart",
            value: function() {
                const store = this.store;
                const { logsCount, histogramData, interval } = store;
                const buckets = (module14.toJS(histogramData) || {}).buckets;
                const data = buckets === undefined ? [] : buckets;
                return module553.default.createElement("div", {
                    className: module3500.chartContainer
                }, module553.default.createElement("div", {
                    className: module3500.recentSummary
                }, module553.default.createElement("h2", {
                    className: module3500.count
                }, logsCount), module553.default.createElement("p", null, t("SEARCH_RESULTS"))), module553.default.createElement("div", {
                    className: module3500.chart
                }, module553.default.createElement(module1064, {
                    xKey: "time",
                    data,
                    legend: [
                        [
                            "count",
                            t("AUDIT_LOG_COUNT")
                        ]
                    ],
                    interval,
                    onBarClick: this.selectedDurationParameter
                })));
            }
        },
        {
            key: "render",
            value: function() {
                const showHistogram = this.state.showHistogram;
                return module553.default.createElement("div", {
                    className: module3500.container
                }, module553.default.createElement(module186.Loading, {
                    spinning: this.loading
                }, this.renderSearchBar()), module553.default.createElement("div", {
                    className: module3500.searchResult
                }, module553.default.createElement(module186.Loading, {
                    spinning: this.loading
                }, module553.default.createElement(module553.default.Fragment, null, this.renderToolBar(), showHistogram && this.renderTimeChart())), this.renderTable(), this.renderDetailModal()));
            }
        },
        {
            key: "renderDetailModal",
            value: function() {
                const state = this.state;
                const { visible, detail, eventMetadata, showHistogram } = state;
                if (visible) {
                    return module553.default.createElement(module553.Fragment, null, module553.default.createElement("div", {
                        className: module3500.mask,
                        onClick: this.onCancel
                    }), module553.default.createElement("div", {
                        className: module3(module3500.detail, module31({}, module3500.visibleHeight, showHistogram))
                    }, module553.default.createElement(module3496, {
                        detail,
                        eventMetadata
                    })));
                }
                return null;
            }
        },
        {
            key: "defaultDuration",
            get: function() {
                return {
                    start_time: 0,
                    end_time: Math.ceil(Date.now() / 1000),
                    interval: "1d"
                };
            }
        },
        {
            key: "duration",
            get: function() {
                const searchInputState = (this.props || {}).searchInputState;
                const t = Math.ceil(Date.now() / 1000);
                const { start, end, step } = searchInputState;
                if (start) {
                    return {
                        start_time: module968([
                            Math.ceil(start),
                            t
                        ]),
                        end_time: module968([
                            Math.ceil(end),
                            t
                        ]),
                        interval: step
                    };
                }
                return this.defaultDuration;
            }
        }
    ]);
    return s;
})(module553.default.PureComponent), d = module49(f.prototype, "logs", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), p = module49(f.prototype, "loading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
}), m = module49(f.prototype, "tableCols", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [
            {
                thead: t("TIME"),
                key: "Time",
                content: function({ RequestReceivedTimestamp }) {
                    return `[${module243(RequestReceivedTimestamp).format("YYYY-MM-DD HH:mm:ss")}]`;
                },
                hidden: false,
                className: module3500.timecol
            },
            {
                thead: t("VERB"),
                key: "verb",
                hidden: false,
                content: function(e) {
                    return e.Verb;
                },
                className: module3500.Verbcol
            },
            {
                thead: t("STATUS_CODE"),
                key: "Status Code",
                hidden: false,
                content: function({ ResponseStatus }) {
                    return module26(ResponseStatus, "code") || "";
                },
                className: module3500.statuscol
            },
            {
                thead: t("WORKSPACE"),
                key: "Workspace",
                hidden: false,
                content: function(e) {
                    return e.Workspace;
                },
                className: module3500.workspacecol
            },
            {
                thead: t("PROJECT"),
                key: "Project",
                hidden: false,
                content: function({ ObjectRef }) {
                    return module26(ObjectRef, "Namespace");
                },
                className: module3500.namespacecol
            },
            {
                thead: t("REASON"),
                key: "reason",
                hidden: true,
                content: function({ ResponseStatus }) {
                    return module26(ResponseStatus, "reason");
                },
                className: module3500.reasoncol
            },
            {
                thead: t("RESOURCE_NAME_AND_TYPE"),
                key: "resources",
                hidden: false,
                content: function({ ObjectRef = {} }) {
                    return module553.default.createElement(module553.Fragment, null, module553.default.createElement("div", {
                        className: module3500.kind
                    }, ObjectRef.Resource), module553.default.createElement("div", {
                        className: module3500.name
                    }, ObjectRef.Name));
                },
                className: module3500.namecol
            },
            {
                thead: t("SUBRESOURCE"),
                key: "Subresource",
                hidden: true,
                content: function({ ObjectRef }) {
                    return module26(ObjectRef, "Subresource");
                },
                className: module3500.subresourcecol
            },
            {
                thead: t("OPERATOR"),
                key: "Operation Account",
                hidden: false,
                content: function({ User }) {
                    return module26(User, "Username");
                },
                className: module3500.usernamecol
            },
            {
                thead: t("SOURCE_IP_ADDRESS"),
                key: "sourceIP",
                hidden: true,
                content: function(e) {
                    return e.SourceIPs;
                },
                className: module3500.messagecol
            }
        ];
    }
}), module49(f.prototype, "refreshQuery", [
    module14.action
], Object.getOwnPropertyDescriptor(f.prototype, "refreshQuery"), f.prototype), h = module49(f.prototype, "selectedDurationParameter", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ time = 0 }) {
            const interval = _this.store.interval;
            const searchInputState = _this.props.searchInputState;
            searchInputState.durationAlias = "";
            searchInputState.end = Math.ceil(time / 1000) + getSecond(interval);
            searchInputState.start = Math.ceil(time / 1000);
            searchInputState.step = _this.getNextStepLevel(interval);
            _this.fetchHistogram();
            _this.refreshQuery();
        };
    }
}), v = module49(f.prototype, "onTableScrollEnd", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ clientHeight, scrollHeight, scrollTop }) {
            if (Math.ceil(clientHeight + scrollTop) >= scrollHeight) {
                const l = _this.store;
                const { from, size } = l;
                if (l.total > from + size) {
                    _this.loadMoreLogs();
                }
            }
        };
    }
}), module49(f.prototype, "loadMoreLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(f.prototype, "loadMoreLogs"), f.prototype), module49(f.prototype, "fetchQuery", [
    module14.action
], Object.getOwnPropertyDescriptor(f.prototype, "fetchQuery"), f.prototype), module49(f.prototype, "fetchHistogram", [
    module14.action
], Object.getOwnPropertyDescriptor(f.prototype, "fetchHistogram"), f.prototype), g = module49(f.prototype, "toggleHistogram", [
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
}), y = module49(f.prototype, "togglePolling", [
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
}), E = module49(f.prototype, "changeFrequency", [
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
                _this.startPolling();
            }
        };
    }
}), s = f)) || s;
export default H;
