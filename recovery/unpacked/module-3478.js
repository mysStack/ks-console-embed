import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-86.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-813.js";
import "./module-7.js";
import "./module-109.js";
import "./module-45.js";
import "./module-28.js";
import "./module-245.js";
import "./module-860.js";
import "./module-442.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
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
import { Component, createRef } from "./module-553.js";
import module243 from "./module-243.js";
import module3 from "./module-3.js";
import { observer } from "./module-239.js";
import module14 from "./module-14.js";
import module1123 from "./module-1123.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module452 from "./module-452.js";
import module439 from "./module-439.js";
import module1755 from "./module-1755.js";
import { ReactComponent } from "./module-882.js";
import Module3479 from "./module-3479.js";
import module3481 from "./module-3481.js";
let o;
let i;
let c;
let s;
let f;
let d;
function z(e) {
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
const F = new module1123;
const G = observer((i = ((Component_1)=>{
    module55(_, Component_1);
    var b = z(_);
    function _(e) {
        let a;
        module36(this, _);
        a = b.call(this, e);
        a.logWindow = createRef();
        a.pollingFrequencyOpts = [
            5,
            10,
            15
        ].map((num)=>({
                label: `${t("REFRESH_RATE_COLON")}${t("TIME_S", {
                    num
                })}`,
                value: 1000 * num
            }));
        module65(a, "logs", c, module88(a));
        module65(a, "changePod", s, module88(a));
        module65(a, "changeContainer", f, module88(a));
        a.changeSearchLog = function(e) {
            a.setState({
                query: e.target.value
            });
        };
        a.queryLog = function(e) {
            if (e.keyCode === 13) {
                a.refreshLogs();
            }
        };
        a.togglePolling = function() {
            const polling = a.state.polling;
            if (polling) {
                a.stopPolling();
            } else {
                a.startPolling();
            }
            a.setState({
                polling: !polling
            });
        };
        a.stopPolling = function() {
            clearInterval(a.interval);
        };
        module65(a, "onFrequencySelect", d, module88(a));
        a.onDurationChange = function() {
            a.refreshLogs();
        };
        a.onLogScroll = function({ currentTarget }) {
            const currentTarget_scrollHeight = currentTarget.scrollHeight;
            if (currentTarget.scrollTop + currentTarget.clientHeight >= currentTarget_scrollHeight) {
                const n = a.logStore;
                const { from, size } = n;
                if (n.total > from + size) {
                    a.loadMoreLogs();
                }
            }
        };
        a.pre = function() {
            a.props.formStepState.pre();
        };
        a.clearQuery = function() {
            a.setState({
                query: ""
            }, function() {
                a.refreshLogs();
            });
        };
        a.renderMoreMenu = function() {
            const a_logStore = a.logStore;
            const { pods, containers, log_query, startTime, endTime, namespaces } = a_logStore;
            const c = {
                cluster: a.props.searchInputState.cluster,
                namespaces,
                pods,
                containers,
                log_query,
                start_time: startTime,
                end_time: endTime
            };
            const s = [
                <module186.Menu.MenuItem key="asc"><span className={module3481.menuLinkContent}><a href={a.logStore.exportLinkFactory({
                    ...c,
                    sort: "asc"
                })} download>{t("ASC_EXPORT")}</a></span></module186.Menu.MenuItem>,
                <module186.Menu.MenuItem key="desc"><span className={module3481.menuLinkContent}><a href={a.logStore.exportLinkFactory({
                    ...c,
                    sort: "desc"
                })} download>{t("DESC_EXPORT")}</a></span></module186.Menu.MenuItem>
            ];
            return <module186.Menu>{s}</module186.Menu>;
        };
        const detailState = a.props.detailState;
        const { pod, container, namespace, log, time } = detailState;
        const p = new Date(time).getTime();
        a.logStore = new module1755({
            sort: "desc",
            pods: pod,
            namespaces: namespace,
            containers: container,
            size: 100,
            startTime: p - 1000,
            endTime: p + 1000
        });
        a.podStore = new module452;
        a.projectStore = new module439;
        a.state = {
            pollingFrequency: 5000,
            polling: false,
            query: log
        };
        return a;
    }
    module37(_, [
        {
            key: "startPolling",
            value: async function() {
                let t;
                const _this = this;
                t = Date.now();
                this.logs = await this.fetchLogs({
                    end_time: t,
                    start_time: t - 60000,
                    from: 0
                });
                this.interval = setInterval(()=>{
                    _this.addPollingLogs();
                }, this.state.pollingFrequency);
            }
        },
        {
            key: "addPollingLogs",
            value: async function() {
                let t;
                let a;
                let r;
                a = Date.now();
                r = await this.fetchLogs({
                    end_time: a,
                    start_time: a - this.state.pollingFrequency,
                    from: 0
                });
                (t = this.logs).unshift.apply(t, module61(r));
                this.scrollToBottom();
            }
        },
        {
            key: "scrollToBottom",
            value: function() {
                const current = this.logWindow.current;
                current.scrollTop = current.scrollHeight;
            }
        },
        {
            key: "loadMoreLogs",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                let o;
                a = this.logStore;
                r = a.from;
                n = a.size;
                this.logStore.from = r + n;
                o = await this.fetchLogs();
                (t = this.logs).push.apply(t, module61(o));
            }
        },
        {
            key: "getPodContainers",
            value: function(e) {
                const t = this.podStore.list.data.find((t)=>t.name === e) || {};
                return module26(t, "containers", []);
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.fetchPods();
                this.fetchProject();
                this.initialFetch();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.stopPolling();
            }
        },
        {
            key: "initialFetch",
            value: async function() {
                this.logs = await this.fetchLogs();
            }
        },
        {
            key: "refreshLogs",
            value: async function() {
                this.logStore.from = 0;
                this.logStore.log_query = this.state.query;
                this.setState({
                    polling: false
                });
                this.stopPolling();
                this.logs = await this.fetchLogs();
            }
        },
        {
            key: "fetchLogs",
            value: async function() {
                let t;
                let cluster;
                const r = arguments;
                t = r.length > 0 && r[0] !== undefined ? r[0] : {};
                cluster = this.props.searchInputState.cluster;
                await this.logStore.fetch({
                    ...t,
                    cluster
                });
                return this.logStore.records;
            }
        },
        {
            key: "fetchProject",
            value: function() {
                const namespace = this.props.detailState.namespace;
                const cluster = this.props.searchInputState.cluster;
                this.projectStore.fetchDetail({
                    name: namespace,
                    namespace,
                    cluster
                }, function() {});
            }
        },
        {
            key: "fetchPods",
            value: function() {
                const namespace = this.props.detailState.namespace;
                const cluster = this.props.searchInputState.cluster;
                this.podStore.fetchList({
                    cluster,
                    namespace,
                    limit: -1
                });
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3481.container}><div className={module3481.article}>{this.renderSummary()}{this.renderLog()}</div></div>;
            }
        },
        {
            key: "renderLog",
            value: function() {
                const polling = this.state.polling;
                return <div className={module3481.log}><div className={module3(module3481.toolbar, this.state.polling ? module3481.pollingMode : "")}>{this.state.polling || this.renderDurationSelect()}{this.renderSearchInput()}{this.renderPollingBtn()}{this.renderPollingOpts()}{this.renderExportBtn()}</div><div className={module3481.terminal} onScroll={polling ? null : this.onLogScroll} ref={this.logWindow}>{this.renderTerminal()}</div></div>;
            }
        },
        {
            key: "renderPollingOpts",
            value: function() {
                return <div className={module3481.frequencyOpts}><module186.Select options={this.pollingFrequencyOpts} value={this.state.pollingFrequency} onChange={this.onFrequencySelect}/></div>;
            }
        },
        {
            key: "renderPollingBtn",
            value: function() {
                return <div className={module3481.pollingBtn} onClick={this.togglePolling}><module186.Tooltip content={this.state.polling ? t("STOP") : t("START")}><module186.Icon type="light" name={this.state.polling ? "stop" : "start"}/></module186.Tooltip></div>;
            }
        },
        {
            key: "renderExportBtn",
            value: function() {
                return <div className={module3481.operation}><module186.Dropdown content={this.renderMoreMenu} trigger="click" placement="bottomRight"><div className={module3481.exportText}><span className={module3481.text}>{t("LOG_EXPORT")}</span><module186.Icon name="more" type="light"/></div></module186.Dropdown></div>;
            }
        },
        {
            key: "renderDurationSelect",
            value: function() {
                return <div className={module3481.duration}><Module3479 duration={this.logStore} onChange={this.onDurationChange}/></div>;
            }
        },
        {
            key: "renderSearchInput",
            value: function() {
                return <div className={module3481.input}><module186.Icon name="magnifier" type="light"/><input type="text" onKeyUp={this.queryLog} value={this.state.query} onChange={this.changeSearchLog}/>{this.state.query && <module186.Icon className={module3481.clearQuery} name="close" type="light" onClick={this.clearQuery}/>}</div>;
            }
        },
        {
            key: "renderTerminal",
            value: function() {
                const _this = this;
                return <div className={module3481.logWindow}>{this.logs.reverse().map(({ time, log })=><p key={`${time}${log}`}><span className={module3481.logTime}>{module243(time).format("YYYY-MM-DD HH:mm:ss")}: {_this.renderHighLightLog(log ?? "")}</span></p>)}</div>;
            }
        },
        {
            key: "renderHighLightLog",
            value: function(e = "") {
                const query = this.state.query;
                const a = query.trim();
                const r = e.toUpperCase().indexOf(a.toUpperCase());
                if (a && r !== -1) {
                    return <span className={module3481.queryLog}><span dangerouslySetInnerHTML={{
                        __html: F.ansi_to_html(e.slice(0, r))
                    }}/><span className={module3481.hightLight} dangerouslySetInnerHTML={{
                        __html: F.ansi_to_html(e.slice(r, r + a.length))
                    }}/><span dangerouslySetInnerHTML={{
                        __html: F.ansi_to_html(e.slice(r + a.length))
                    }}/></span>;
                }
                return <span className={module3481.queryLog} dangerouslySetInnerHTML={{
                    __html: F.ansi_to_html(e)
                }}/>;
            }
        },
        {
            key: "renderLink",
            value: function(href, a) {
                if (href) {
                    return <module186.Tooltip content={t("VIEW_DETAILS")}><a href={href} target="_blank" rel="noopener noreferrer">{a}</a></module186.Tooltip>;
                }
                return a;
            }
        },
        {
            key: "renderSummary",
            value: function() {
                const detailState = this.props.detailState;
                return <div className={module3481.summery}><div className={module3481.header}><div className={module3481.pre} onClick={this.pre}><ReactComponent width={16} height={22}/><span>{t("BACK")}</span></div></div><h3>{t("CONTAINER_LOG_SOURCE")}</h3><div className={module3481.dataList}><div><h4>{t("PROJECT")}</h4><p><span><module186.Icon name="project"/> {detailState.namespace}</span></p></div><div><h4>{t("POD")}</h4><div className={module3481.selectContainer}><module186.Select prefixIcon=<module186.Icon name="pod"/> value={this.logStore.pods} onChange={this.changePod} options={this.PodOpts}/><div className={module3481.resourceIcon}>{this.renderLink(this.podLink, <module186.Icon name="cogwheel" size={16}/>)}</div></div></div><div><h4>{t("CONTAINER")}</h4><div className={module3481.selectContainer}><module186.Select prefixIcon=<module186.Icon name="docker"/> value={this.logStore.containers} options={this.ContainersOpts} onChange={this.changeContainer}/><div className={module3481.resourceIcon}>{this.renderLink(this.containerLink, <module186.Icon name="cogwheel" size={16}/>)}</div></div></div></div></div>;
            }
        },
        {
            key: "podLink",
            get: function() {
                const namespace = this.props.detailState.namespace;
                const cluster = this.props.searchInputState.cluster;
                const pods = this.logStore.pods;
                const workspace = this.projectStore.detail.workspace;
                if (workspace) {
                    return `/${workspace}/clusters/${cluster}/projects/${namespace}/pods/${pods}`;
                }
                return "";
            }
        },
        {
            key: "containerLink",
            get: function() {
                const namespace = this.props.detailState.namespace;
                const cluster = this.props.searchInputState.cluster;
                const logStore = this.logStore;
                const { pods, containers } = logStore;
                const workspace = this.projectStore.detail.workspace;
                if (workspace) {
                    return `/${workspace}/clusters/${cluster}/projects/${namespace}/pods/${pods}/containers/${containers}`;
                }
                return "";
            }
        },
        {
            key: "PodOpts",
            get: function() {
                return this.podStore.list.data.map((e)=>({
                        label: e.name || t("ALL"),
                        value: e.name || ""
                    }));
            }
        },
        {
            key: "ContainersOpts",
            get: function() {
                const pods = this.logStore.pods;
                return this.getPodContainers(pods).map((e)=>({
                        label: e.name,
                        value: e.name
                    }));
            }
        }
    ]);
    return _;
})(Component), c = module49(i.prototype, "logs", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), module49(i.prototype, "podLink", [
    module14.computed
], Object.getOwnPropertyDescriptor(i.prototype, "podLink"), i.prototype), module49(i.prototype, "containerLink", [
    module14.computed
], Object.getOwnPropertyDescriptor(i.prototype, "containerLink"), i.prototype), module49(i.prototype, "PodOpts", [
    module14.computed
], Object.getOwnPropertyDescriptor(i.prototype, "PodOpts"), i.prototype), module49(i.prototype, "ContainersOpts", [
    module14.computed
], Object.getOwnPropertyDescriptor(i.prototype, "ContainersOpts"), i.prototype), s = module49(i.prototype, "changePod", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.logStore.pods = t || "";
            const a = module26(_this.getPodContainers(t), "[0].name", "");
            _this.changeContainer(a);
        };
    }
}), f = module49(i.prototype, "changeContainer", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.logStore.containers = t;
            _this.logStore.log_query = "";
            _this.refreshLogs();
        };
    }
}), module49(i.prototype, "startPolling", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "startPolling"), i.prototype), module49(i.prototype, "addPollingLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "addPollingLogs"), i.prototype), d = module49(i.prototype, "onFrequencySelect", [
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
        };
    }
}), module49(i.prototype, "loadMoreLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "loadMoreLogs"), i.prototype), module49(i.prototype, "initialFetch", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "initialFetch"), i.prototype), module49(i.prototype, "refreshLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "refreshLogs"), i.prototype), o = i)) || o;
export default G;
