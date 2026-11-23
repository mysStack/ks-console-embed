import "unpacked/module-84.js";
import "unpacked/module-85.js";
import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-188.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-245.js";
import "unpacked/module-442.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-41.js";
import module31 from "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module96 from "utils/babel-helpers/slicedToArray";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import { Component, createRef } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import Module833 from "unpacked/module-833.js";
import Module985 from "components/Modals/LogSearch/Logging/SearchInput";
import module14 from "unpacked/module-14.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import { includes, isArray, isEmpty, isString, min } from "unpacked/module-2016.js";
import module243 from "unpacked/module-243.js";
import Module1126 from "components/Tables/Visible";
import module1383 from "unpacked/module-1383.js";
import { esMark, mark, markAll } from "utils/log";
import module1123 from "unpacked/module-1123.js";
import module4280 from "unpacked/module-4280.js";
let c;
let i;
let s;
let d;
let f;
let p;
let m;
let h;
let v;
const H = new module1123;
const B = inject("detailStore")(c = observer((i = ((Component_1)=>{
    module55(i, Component_1);
    var c = ((e)=>{
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
    })(i);
    function i(...r_1) {
        let e;
        module36(this, i);
        e = c.call(this, ...r_1);
        module65(e, "searchInputState", s, module88(e));
        e.tableRef = createRef();
        e.state = {
            polling: false
        };
        module65(e, "pollingFrequency", d, module88(e));
        module65(e, "logs", f, module88(e));
        module65(e, "tableCols", p, module88(e));
        e.markMemoizee = module1383(markAll, {
            normalizer: function(e) {
                const [a, n = [], l = function() {}] = module96(e, 3);
                return `${a}+${n.toString()})+${l.name}`;
            },
            maxAge: 3000
        });
        e.renderHightLightMatchTd = function({ resKey, searchKey, handler = mark }) {
            return function(t) {
                const n = t[resKey] || "";
                const l = e.searchInputState.query.filter((e)=>{
                    const e_key = e.key;
                    return e.value && includes(searchKey, e_key);
                }).map((e)=>e.value);
                const o = e.markMemoizee(n, l, handler);
                return <span>{o.map((e, key)=>{
                    if (isString(e)) {
                        return e;
                    }
                    return <span key={key} className={module4280.hightLightMatch}>{e.hightLighted}</span>;
                })}</span>;
            };
        };
        e.renderHightLightMatchLogTd = function({ resKey, searchKey, handler = mark }) {
            return function(t) {
                const n = H.ansi_to_html(t[resKey] || "");
                const l = e.searchInputState.query.filter((e)=>{
                    const e_key = e.key;
                    return e.value && includes(searchKey, e_key);
                }).map((e)=>e.value);
                const o = e.markMemoizee(n, l, handler).map((e)=>{
                    if (isString(e)) {
                        return e;
                    }
                    return `<span class="${module4280.hightLightMatch}">${e.hightLighted}</span>`;
                });
                return <span dangerouslySetInnerHTML={{
                    __html: o.join("")
                }}/>;
            };
        };
        e.scrollTo = function(t) {
            try {
                e.tableRef.current.scrollToRow(t);
            } catch (e) {}
        };
        module65(e, "onTableScrollTop", m, module88(e));
        e.initQuery = function() {
            e.searchInputState = {
                query: [],
                start: "",
                end: "",
                durationAlias: "",
                nextParamsKey: ""
            };
        };
        e.togglePolling = function() {
            if (e.state.polling) {
                e.stopPolling();
            } else {
                e.startPolling();
            }
        };
        module65(e, "changeFrequency", h, module88(e));
        module65(e, "pollingFunc", v, module88(e));
        e.onSearchParamsChange = function() {
            e.stopPolling();
            e.refreshQuery();
        };
        e.handleRefresh = function() {
            e.refreshQuery();
        };
        e.clearFilter = function() {
            e.initQuery();
            e.refreshQuery();
        };
        e.renderEmpty = function() {
            return <div className={module4280.emptyText}><span className={module4280.emptyTipIcon}><module186.Icon name="exclamation" size={48}/></span><div>{t("NO_MATCHING_RESULT_FOUND")}</div><p>{t("YOU_CAN_TRY_TO")}<span className={module4280.action} onClick={e.handleRefresh} data-test="table-empty-refresh">{t("REFRESH_DATA")}</span>{t("OR")}<span className={module4280.action} onClick={e.clearFilter} data-test="table-empty-clear-filter">{t("CLEAR_SEARCH_CONDITIONS")}</span></p></div>;
        };
        return e;
    }
    module37(i, [
        {
            key: "componentDidMount",
            value: function() {
                this.refreshQuery();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                clearInterval(this.pollingInterval);
            }
        },
        {
            key: "getQueryParams",
            value: function() {
                return this.searchInputState.query.filter((e)=>e.key).reduce((acc, { key, value })=>{
                    const n = key;
                    const u = acc[n];
                    acc[n] = u ? `${u},${value}` : value;
                    return acc;
                }, {});
            }
        },
        {
            key: "refreshQuery",
            value: async function() {
                let t;
                let a;
                t = this.getQueryParams();
                a = await this.fetchLog({
                    ...t,
                    from: 0,
                    size: 50,
                    ...this.duration
                });
                this.logs = a.reverse();
                this.scrollTo(this.logs.length);
            }
        },
        {
            key: "fetchLog",
            value: async function(t) {
                let a;
                let cluster;
                let namespace;
                let gatewayName;
                let workspace;
                a = this.props.match.params;
                cluster = a.cluster;
                namespace = a.namespace;
                gatewayName = a.gatewayName;
                workspace = a.workspace;
                return await this.store.getGatewayLogs({
                    cluster,
                    namespace,
                    gatewayName,
                    workspace,
                    ...t
                });
            }
        },
        {
            key: "loadMoreLogs",
            value: async function() {
                let from;
                let a;
                let r;
                from = this.store.logs.from + this.store.logs.size;
                a = this.getQueryParams();
                r = await this.fetchLog({
                    ...a,
                    ...this.duration,
                    from,
                    size: 50
                });
                this.logs = [].concat(module61(r.reverse()), module61(this.logs));
                this.scrollTo(r.length);
            }
        },
        {
            key: "stopPolling",
            value: function() {
                clearTimeout(this.pollingInterval);
                this.setState({
                    polling: false
                });
            }
        },
        {
            key: "startPolling",
            value: function() {
                this.setState({
                    polling: true
                });
                this.pollingFunc();
                if (this.pollingInterval) {
                    clearTimeout(this.pollingInterval);
                }
                this.pollingInterval = setInterval(this.pollingFunc, this.pollingFrequency);
            }
        },
        {
            key: "renderOperation",
            value: function() {
                const options = [
                    5,
                    10,
                    20
                ].map((e)=>({
                        label: t("REFRESH_INTERVAL_VALUE", {
                            value: e
                        }),
                        value: 1000 * e
                    }));
                const a = {
                    ...this.duration,
                    ...this.getQueryParams()
                };
                return <div className={module4280.filter}><div className={module3(module4280.filterButton, module4280.pollingBtn)} onClick={this.togglePolling}><module186.Icon name={this.state.polling ? "stop" : "start"} type="light"/></div><module186.Select prefixIcon=<module186.Icon type="light" name="timed-task" size={20}/> className={module3(module4280.filterButton, module4280.frequencyOpts)} defaultValue={5000} options={options} onChange={this.changeFrequency}/><a href={this.store.exportLinkFactory(a)} download><span className={module3(module4280.filterButton, module4280.exportBtn)}><module186.Tooltip content={t("EXPORT_LOGS")}><module186.Icon name="export" type="light"/></module186.Tooltip></span></a></div>;
            }
        },
        {
            key: "render",
            value: function() {
                if (globals.app.hasKSModule("whizard-logging")) {
                    return <div><div className={module4280.title}><div className={module3(module4280.search, module31({}, module4280.focus, this.hasValue))}><module186.Icon className={module4280.isLeft} name="magnifier" size={20}/><Module985 className={module4280.searchInput} onChange={this.onSearchParamsChange} params={this.searchInputState} dropdownClass={module4280.dropdownClass} iconThem="light" enableClear dropDownItems={this.dropDownContent} showStep={false}/><module186.Icon className={module3(module4280.clearIcon, module31({}, module4280.hideIcon, !this.hasValue))} name="close" onClick={this.initQuery}/></div>{this.renderOperation()}</div><div className={module4280.body}>{isEmpty(module14.toJS(this.logs)) ? this.renderEmpty() : <Module1126 onScroll={this.onTableScrollTop} cols={this.tableCols} data={module14.toJS(this.logs)} tableRef={this.tableRef} trCLassName={module4280.trCLassName} body={module4280.bodyClassName} header={module4280.headerClassName}/>}</div></div>;
                }
                return <Module833 className="no-shadow" icon="cluster" title={t("LOGGING_DISABLED")}/>;
            }
        },
        {
            key: "hasValue",
            get: function() {
                return Object.values(module14.toJS(this.searchInputState)).some((e)=>{
                    if (isArray(e)) {
                        return e.some((e)=>!isEmpty(module14.toJS(e)));
                    }
                    return !isEmpty(e);
                });
            }
        },
        {
            key: "defaultDuration",
            get: function() {
                return {
                    start_time: 0,
                    end_time: Date.now()
                };
            }
        },
        {
            key: "duration",
            get: function() {
                const e = Date.now();
                const searchInputState = this.searchInputState;
                const { start, end } = searchInputState;
                if (start) {
                    return {
                        start_time: min([
                            1000 * start,
                            e
                        ]),
                        end_time: min([
                            1000 * end,
                            e
                        ])
                    };
                }
                return this.defaultDuration;
            }
        },
        {
            key: "dropDownContent",
            get: function() {
                return {
                    log_query: {
                        icon: "magnifier",
                        text: t("KEYWORD")
                    },
                    pod_query: {
                        icon: "pod",
                        text: t("POD")
                    }
                };
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        }
    ]);
    return i;
})(Component), s = module49(i.prototype, "searchInputState", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            query: [],
            start: "",
            end: "",
            durationAlias: "",
            nextParamsKey: ""
        };
    }
}), d = module49(i.prototype, "pollingFrequency", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 5000;
    }
}), f = module49(i.prototype, "logs", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), module49(i.prototype, "hasValue", [
    module14.computed
], Object.getOwnPropertyDescriptor(i.prototype, "hasValue"), i.prototype), p = module49(i.prototype, "tableCols", [
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
                dataIndex: "time",
                mustShow: true,
                content: function(e) {
                    return `[${module243(e.time).format("YYYY-MM-DD HH:mm:ss")}]`;
                }
            },
            {
                thead: t("POD"),
                key: "pod",
                dataIndex: "pod",
                mustShow: true,
                content: this.renderHightLightMatchTd({
                    resKey: "pod",
                    searchKey: [
                        "pod_query"
                    ]
                })
            },
            {
                thead: t("MESSAGE"),
                key: "log",
                dataIndex: "log",
                className: module4280.logItem,
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
}), module49(i.prototype, "refreshQuery", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "refreshQuery"), i.prototype), module49(i.prototype, "fetchLog", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchLog"), i.prototype), module49(i.prototype, "loadMoreLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "loadMoreLogs"), i.prototype), m = module49(i.prototype, "onTableScrollTop", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ scrollTop }) {
            const logs = _this.store.logs;
            const { from, size, total } = logs;
            if (scrollTop === 0 && total > from + size) {
                _this.loadMoreLogs();
            }
        };
    }
}), h = module49(i.prototype, "changeFrequency", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.pollingFrequency = t;
            if (_this.state.polling) {
                clearTimeout(_this.pollingInterval);
                _this.startPolling();
            }
        };
    }
}), v = module49(i.prototype, "pollingFunc", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.searchInputState.end = Math.ceil(Date.now() / 1000);
            _this.searchInputState.start = _this.searchInputState.end - 600;
            _this.searchInputState.durationAlias = `${10}m`;
            _this.refreshQuery();
        };
    }
}), c = i)) || c) || c;
export default B;
