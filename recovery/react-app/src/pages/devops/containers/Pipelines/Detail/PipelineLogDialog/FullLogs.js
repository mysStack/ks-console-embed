import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-86.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-137.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import { Component, createRef } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module5102 from "unpacked/module-5102.js";
let i;
let l;
const E = observer((l = ((Component_1)=>{
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
    function n(...i) {
        let e;
        module36(this, n);
        e = r.call(this, ...i);
        e.ref = createRef();
        e.store = e.props.store;
        e.logRefreshInterval = null;
        e.state = {
            isRealtime: false,
            isDownloading: false
        };
        e.scrollToBottom = function() {
            const current = e.ref.current;
            if (current) {
                current.scrollTop = current.scrollHeight;
            }
        };
        e.handleGetLogs = async function t() {
            await e.getPipelineIndexLog();
            e.handleAutoRefreshLogs();
        };
        e.handleDownload = async function t() {
            e.setState({
                isDownloading: true
            });
            await e.store.handleDownloadLogs(e.props.params);
            e.setState({
                isDownloading: false
            });
        };
        e.handleRefreshLogs = async function t() {
            await e.getPipelineIndexLog(true);
            await e.handleRealtime();
            e.scrollToBottom();
        };
        e.handleSetLogsInterval = function(t) {
            e.logRefreshInterval = setInterval(module44(module41.mark(function* r() {
                yield e.getPipelineIndexLog();
                e.scrollToBottom();
                if (e.isLogFinish) {
                    clearInterval(e.logRefreshInterval);
                    if (t) {
                        t();
                    }
                }
            })), 2000);
        };
        e.handleRealtime = function() {
            if (e.state.isRealtime) {
                clearInterval(e.logRefreshInterval);
                e.setState({
                    isRealtime: false
                });
            } else {
                e.setState({
                    isRealtime: true
                });
                e.handleSetLogsInterval(function() {
                    e.setState({
                        isRealtime: false
                    });
                });
            }
        };
        e.handleAutoRefreshLogs = function() {
            if (!(e.isLogFinish || e.logRefreshInterval)) {
                e.setState({
                    isRealtime: true
                });
                e.handleSetLogsInterval(function() {
                    e.setState({
                        isRealtime: false
                    });
                });
            }
            if (e.isLogFinish) {
                e.scrollToBottom();
            }
        };
        e.renderOperations = function() {
            const e_state = e.state;
            const { isRealtime, isDownloading } = e_state;
            return <div className={module5102.operations}><module186.Tooltip content={t("BACK")}><module186.Icon name="return" color={{
                primary: "#fff",
                secondary: "#fff"
            }} size={20} onClick={e.props.handleVisableLog} clickable changeable/></module186.Tooltip><span className={module5102.split}>|</span><module186.Tooltip content={t(isRealtime ? "STOP_REAL_TIME_LOG" : "START_REAL_TIME_LOG")}><module186.Icon name={isRealtime ? "stop" : "start"} color={{
                primary: "#fff",
                secondary: "#fff"
            }} size={20} onClick={e.handleRealtime} clickable changeable/></module186.Tooltip><span className={module5102.split}>|</span><module186.Tooltip content={t("REFRESH")}><module186.Icon name="refresh" color={{
                primary: "#fff",
                secondary: "#fff"
            }} size={20} onClick={isRealtime ? null : e.handleRefreshLogs} clickable changeable disabled={isRealtime}/></module186.Tooltip><span className={module5102.split}>|</span><module186.Tooltip content={t("DOWNLOAD")}>{isDownloading ? <module186.Loading size={16}/> : <module186.Icon name="download" color={{
                primary: "#fff",
                secondary: "#fff"
            }} size={20} onClick={e.handleDownload} clickable changeable/>}</module186.Tooltip></div>;
        };
        return e;
    }
    module37(n, [
        {
            key: "getPipelineIndexLog",
            value: function(...args) {
                const e = args.length > 0 && args[0] !== undefined && args[0];
                const params = this.props.params;
                this.store.getRunStatusLogs(params, e);
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.handleGetLogs();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                clearInterval(this.logRefreshInterval);
            }
        },
        {
            key: "render",
            value: function() {
                const runDetailLogs = this.store.runDetailLogs;
                return <div className={module5102.logs_container}><div className={module5102.log} ref={this.ref}>{this.renderOperations()}<pre className={module5102.LogItem_content}>{runDetailLogs}</pre></div></div>;
            }
        },
        {
            key: "isLogFinish",
            get: function() {
                if (this.store.overflow) {
                    return true;
                }
                const e = this.store.runDetailLogs.split("\n");
                let t = e.length - 1;
                for(var r = 0, n = false; r < 2;){
                    n = e[t] && e[t].indexOf("Finished") > -1;
                    t--;
                    r++;
                }
                return n;
            }
        }
    ]);
    return n;
})(Component), module49(l.prototype, "getPipelineIndexLog", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "getPipelineIndexLog"), l.prototype), module49(l.prototype, "isLogFinish", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "isLogFinish"), l.prototype), i = l)) || i;
export default E;
