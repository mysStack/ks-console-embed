import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-197.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-140.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-442.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-251.js";
import "unpacked/module-252.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module61 from "unpacked/module-61.js";
import "unpacked/module-41.js";
import module31 from "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module968 from "unpacked/module-968.js";
import module243 from "unpacked/module-243.js";
import module3 from "unpacked/module-3.js";
import { observer } from "unpacked/module-239.js";
import module14 from "unpacked/module-14.js";
import module985 from "components/Modals/LogSearch/Logging/SearchInput";
import module1126 from "components/Tables/Visible";
import module1064 from "components/Charts/Bar/TimeBar";
import module1758 from "stores/eventSearch";
import module3486 from "components/Modals/EventSearch/Event/Detail/MetadataModal";
import { dropDownItems, getSecond, queryKeyMapping, queryModeOptions, toArray } from "components/Modals/EventSearch/Event/utils";
import module3490 from "unpacked/module-3490.js";
let s;
let f;
let d;
let p;
let m;
let h;
let v;
let g;
let y;
const Y = [
    "m",
    "h",
    "d",
    "M",
    "y"
];
const W = observer((f = ((e)=>{
    module55(f, e);
    var s = ((e)=>{
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
    })(f);
    function f(e) {
        let a;
        module36(this, f);
        a = s.call(this, e);
        module65(a, "logs", d, module88(a));
        module65(a, "tableCols", p, module88(a));
        module65(a, "selectedDurationParameter", m, module88(a));
        module65(a, "onTableScrollEnd", h, module88(a));
        a.onSearchParamsChange = function() {
            a.stopPolling();
            a.refreshQuery();
            a.fetchHistogram();
        };
        module65(a, "toggleHistogram", v, module88(a));
        module65(a, "togglePolling", g, module88(a));
        a.renderHightLightMatchTd = function({ message }) {
            const r = a.props.searchInputState.query.find((e)=>e.key === "message_search");
            if (!r) {
                return message;
            }
            const n = new RegExp(r.value, "gi");
            const l = message.split(n);
            if (l.length === 1) {
                return message;
            }
            const u = message.match(n);
            return module553.default.createElement(module553.Fragment, null, l.map((e, t)=>module553.default.createElement(module553.Fragment, {
                    key: e + t
                }, e, module553.default.createElement("span", {
                    className: module3490.hightLightMatch
                }, u[t]))));
        };
        a.poll = function() {
            const searchInputState = a.props.searchInputState;
            searchInputState.end = Math.ceil(Date.now() / 1000);
            searchInputState.start = searchInputState.end - 600;
            searchInputState.step = "10s";
            searchInputState.durationAlias = `${10}m`;
            a.fetchHistogram();
            a.refreshQuery();
            a.setState({
                polling: true
            });
        };
        module65(a, "changeFrequency", y, module88(a));
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
                className: module3490.table
            }, module553.default.createElement(module1126, {
                onScroll: a.onTableScrollEnd,
                onTrClick: a.openDetailsModal,
                cols: a.tableCols,
                data: a.logs,
                body: module3490.body
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
        a.store = new module1758({
            size: 50
        });
        return a;
    }
    module37(f, [
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
                this.store.from = 0;
                t = this.getQueryParams();
                this.logs = await this.fetchQuery({
                    ...t,
                    ...this.duration
                });
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
                const n = Y.findIndex((e)=>e === r);
                return `1${n < 1 ? Y[0] : Y[n - 1]}`;
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
                (t = this.logs).push.apply(t, module61(n));
                this.scrollToBottom();
            }
        },
        {
            key: "renderSearchBar",
            value: function() {
                const props = this.props;
                const { searchInputState, clustersOpts } = props;
                return module553.default.createElement("div", {
                    className: module3490.searchBar
                }, globals.app.isMultiCluster && module553.default.createElement(module186.Select, {
                    value: searchInputState.cluster,
                    onChange: this.changeClusterChange,
                    className: module3490.select,
                    valueRenderer: this.clusterRenderer,
                    options: clustersOpts
                }), module553.default.createElement(module985, {
                    className: module3490.searchInput,
                    placeholder: t("SEARCH"),
                    onChange: this.onSearchParamsChange,
                    params: searchInputState,
                    dropDownItems
                }), module553.default.createElement(module186.Select, {
                    value: searchInputState.queryMode,
                    onChange: this.changeQueryMode,
                    className: module3490.select,
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
                    className: module3490.toolbar
                }, module553.default.createElement("div", null, t("TIME_TOPOLOGY"), module553.default.createElement("span", {
                    className: module3490.showHistogramBtn,
                    onClick: this.toggleHistogram
                }, showHistogram ? t("DISPLAY") : t("HIDE"), module553.default.createElement(module186.Icon, {
                    name: "caret-down",
                    type: "light"
                }))), module553.default.createElement("div", null, module553.default.createElement("span", {
                    className: module3490.pollingBtn,
                    onClick: this.togglePolling
                }, module553.default.createElement(module186.Tooltip, {
                    content: polling ? t("STOP_REAL_TIME_RESOURCE_EVENT") : t("START_REAL_TIME_RESOURCE_EVENT")
                }, module553.default.createElement(module186.Icon, {
                    name: polling ? "stop" : "start",
                    type: "light",
                    size: 16
                }))), module553.default.createElement("span", {
                    className: module3490.frequencyOpts
                }, module553.default.createElement("span", null, " ", t("REFRESH_RATE_COLON")), module553.default.createElement(module186.Select, {
                    value: pollingFrequency,
                    onChange: this.changeFrequency,
                    className: module3490.frequencyOptions,
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
                    className: module3490.chartContainer
                }, module553.default.createElement("div", {
                    className: module3490.recentSummary
                }, module553.default.createElement("h2", {
                    className: module3490.count
                }, logsCount), module553.default.createElement("p", null, t("SEARCH_RESULTS"))), module553.default.createElement("div", {
                    className: module3490.chart
                }, module553.default.createElement(module1064, {
                    xKey: "time",
                    data,
                    legend: [
                        [
                            "count",
                            t("RESOURCE_EVENT_COUNT")
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
                    className: module3490.container
                }, this.renderSearchBar(), module553.default.createElement("div", {
                    className: module3490.searchResult
                }, this.renderToolBar(), showHistogram && this.renderTimeChart(), this.renderTable(), this.renderDetailModal()));
            }
        },
        {
            key: "renderDetailModal",
            value: function() {
                const state = this.state;
                const { visible, detail, eventMetadata, showHistogram } = state;
                if (visible) {
                    return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                        className: module3490.mask,
                        onClick: this.onCancel
                    }), module553.default.createElement("div", {
                        className: module3(module3490.detail, module31({}, module3490.visibleHeight, showHistogram))
                    }, module553.default.createElement(module3486, {
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
    return f;
})(module553.default.PureComponent), d = module49(f.prototype, "logs", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), p = module49(f.prototype, "tableCols", [
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
                content: function({ lastTimestamp }) {
                    return `[${module243(lastTimestamp).format("YYYY-MM-DD HH:mm:ss")}]`;
                },
                hidden: false,
                className: module3490.timecol
            },
            {
                thead: t("CATEGORY"),
                key: "type",
                hidden: false,
                content: function({ type }) {
                    return module553.default.createElement("div", {
                        className: module3(module3490.category, module3490[type.toLocaleLowerCase()])
                    }, type);
                },
                className: module3490.typecol
            },
            {
                thead: t("PROJECT"),
                key: "name",
                hidden: false,
                content: function({ involvedObject }) {
                    return (involvedObject === undefined ? {} : involvedObject).namespace;
                },
                className: module3490.namecol
            },
            {
                thead: t("RESOURCE_NAME_AND_TYPE"),
                key: "kind",
                hidden: false,
                content: function({ involvedObject = {} }) {
                    return module553.default.createElement(module553.Fragment, null, module553.default.createElement("div", {
                        className: module3490.kind
                    }, involvedObject.kind), module553.default.createElement("div", {
                        className: module3490.name
                    }, involvedObject.name));
                },
                className: module3490.kindcol
            },
            {
                thead: t("REASON"),
                key: "reason",
                hidden: false,
                content: function(e) {
                    return e.reason;
                },
                className: module3490.reasoncol
            },
            {
                thead: t("MESSAGE"),
                key: "message",
                hidden: false,
                content: this.renderHightLightMatchTd,
                mustShow: true,
                className: module3490.messagecol
            }
        ];
    }
}), module49(f.prototype, "refreshQuery", [
    module14.action
], Object.getOwnPropertyDescriptor(f.prototype, "refreshQuery"), f.prototype), m = module49(f.prototype, "selectedDurationParameter", [
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
}), h = module49(f.prototype, "onTableScrollEnd", [
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
], Object.getOwnPropertyDescriptor(f.prototype, "fetchHistogram"), f.prototype), v = module49(f.prototype, "toggleHistogram", [
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
}), g = module49(f.prototype, "togglePolling", [
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
}), module49(f.prototype, "addPollingQuery", [
    module14.action
], Object.getOwnPropertyDescriptor(f.prototype, "addPollingQuery"), f.prototype), y = module49(f.prototype, "changeFrequency", [
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
}), s = f)) || s;
export default W;
