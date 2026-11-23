import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-64.js";
import "./module-137.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-31.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module3 from "./module-3.js";
import { observer } from "./module-239.js";
import module910 from "./module-910.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module1123 from "./module-1123.js";
import { PATTERN_UTC_TIME } from "./module-72.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import Module802 from "./module-802.js";
import Module848 from "./module-848.js";
import module1040 from "./module-1040.js";
import module452 from "./module-452.js";
import module1365 from "./module-1365.js";
import module1296 from "./module-1296.js";
import module3031 from "./module-3031.js";
let o;
const P = new module1123;
const A = observer(o = ((Component_1)=>{
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
    })(n);
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.scrollToBottom = function() {
            const current = a.ref.current;
            if (current) {
                current.scrollTop = current.scrollHeight;
            }
            a.setState({
                loadingNext: false
            });
        };
        a.scrollToCurrent = function() {
            const current = a.ref.current;
            if (current) {
                current.scrollTop = current.scrollHeight - a.currentHeight;
            }
            a.setState({
                loadingPrev: false
            });
        };
        a.handleNext = function() {
            a.tailLines = 1000;
            a.setState({
                loadingNext: true
            });
            a.getData({
                silent: true
            }, a.scrollToBottom);
        };
        a.handlePrev = function() {
            a.tailLines += 1000;
            a.setState({
                loadingPrev: true
            });
            a.currentHeight = module26(a.ref, "current.scrollHeight", 0);
            a.getData({
                silent: true
            }, a.scrollToCurrent);
        };
        a.handleRealtime = function() {
            a.setState(function(e) {
                return {
                    isRealtime: !e.isRealtime
                };
            }, function() {
                return a.getData({
                    silent: true
                }, a.scrollToBottom);
            });
        };
        a.handleDownload = module44(module41.mark(function e() {
            let r;
            let n;
            let l;
            let podName;
            let i;
            let c;
            let s;
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            r = a.props;
                            n = r.cluster;
                            l = r.namespace;
                            podName = r.podName;
                            i = r.containerName;
                            a.setState({
                                isDownloading: true
                            });
                            e.next = 4;
                            return a.store.fetchAllLogs({
                                cluster: n,
                                namespace: l,
                                podName,
                                container: i
                            });
                        case 4:
                            c = e.sent;
                            a.setState({
                                isDownloading: false
                            });
                            if (c) {
                                e.next = 9;
                                break;
                            }
                            module240.info({
                                content: t("NO_LOG_DATA_FOUND_TIP")
                            });
                            return e.abrupt("return");
                        case 9:
                            s = new Blob([
                                c
                            ], {
                                type: "text/plain;charset=utf-8"
                            });
                            module910.saveAs(s, `${i}.log`);
                        case 11:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        a.state = {
            loadingPrev: false,
            loadingNext: false,
            isDownloading: false,
            isRealtime: !!e.isRealtime
        };
        a.tailLines = 1000;
        a.store = e.isEdgeWize ? new module1296 : new module1040;
        a.podStore = e.isEdgeWize ? new module1365 : new module452;
        a.ref = createRef();
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData({}, this.scrollToBottom);
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.podName && this.props.podName !== e.podName) {
                    this.getData({}, this.scrollToBottom);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.store.stopWatchLogs();
            }
        },
        {
            key: "getData",
            value: async function(t, a) {
                let r;
                let n;
                let l;
                let o;
                let i;
                let gateways;
                let s;
                let f;
                r = this.props;
                n = r.cluster;
                l = r.namespace;
                o = r.podName;
                i = r.containerName;
                gateways = r.gatewayName;
                s = r.gatewayNamespace;
                f = r.isEdgeWize;
                this.store.stopWatchLogs();
                if ((await this.podStore.checkName({
                    cluster: n,
                    namespace: l,
                    name: o
                })).exist) {
                    this.store.watchLogs({
                        cluster: n,
                        namespace: gateways ? s : l,
                        podName: o,
                        container: i,
                        tailLines: this.tailLines,
                        insecureSkipTLSVerifyBackend: !!f || undefined,
                        timestamps: true,
                        follow: this.state.isRealtime,
                        gateways,
                        ...t
                    }, a);
                }
            }
        },
        {
            key: "renderOperations",
            value: function() {
                const state = this.state;
                const { isRealtime, isDownloading } = state;
                return <div className={module3031.operations}><module186.Tooltip content={t(isRealtime ? "STOP_REAL_TIME_CONTAINER_LOG" : "START_REAL_TIME_CONTAINER_LOG")}><module186.Icon name={isRealtime ? "stop" : "start"} color={{
                    primary: "#fff",
                    secondary: "#fff"
                }} size={20} onClick={this.handleRealtime} clickable changeable/></module186.Tooltip><span className={module3031.split}>|</span><module186.Tooltip content={t("REFRESH")}><module186.Icon name="refresh" color={{
                    primary: "#fff",
                    secondary: "#fff"
                }} size={20} onClick={this.handleNext} clickable changeable disabled={isRealtime}/></module186.Tooltip><span className={module3031.split}>|</span><module186.Tooltip content={t("DOWNLOAD")}>{isDownloading ? <module186.Loading size={16}/> : <module186.Icon name="download" color={{
                    primary: "#fff",
                    secondary: "#fff"
                }} size={20} onClick={this.handleDownload} clickable changeable/>}</module186.Tooltip></div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const contentClassName = this.props.contentClassName;
                const data = this.store.logs.data;
                const state = this.state;
                const { loadingPrev, loadingNext } = state;
                if (module63(data)) {
                    return <Module848 desc="NO_DATA"/>;
                }
                const u = String(data).replace(/\\r\\n/g, "\n").split("\n");
                return <div className={module3(module3031.content, contentClassName)} ref={this.ref}>{this.tailLines <= u.length && <div className={module3031.loading}>{loadingPrev ? <module186.Loading spinning={loadingPrev} size="small"/> : <div className={module3031.more} onClick={this.handlePrev}>{t("VIEW_MORE")}</div>}</div>}{u.map((e, t)=>{
                    const a = e.match(PATTERN_UTC_TIME);
                    const key = a ? a[0] : t;
                    const n = a ? e.replace(a[0], "") : e;
                    return <p key={key} dangerouslySetInnerHTML={{
                        __html: P.ansi_to_html(n)
                    }}/>;
                })}<div className={module3031.loading}><module186.Loading spinning={loadingNext} size="small"/></div>{this.renderOperations()}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                const isLoading = this.store.logs.isLoading;
                return <Module802 className={className} empty={t("NO_LOG_DATA_FOUND")} loading={isLoading}>{this.renderContent()}</Module802>;
            }
        }
    ]);
    return n;
})(Component)) || o;
export default A;
