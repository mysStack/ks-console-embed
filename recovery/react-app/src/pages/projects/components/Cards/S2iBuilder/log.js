import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import { Component, createRef } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module194 from "unpacked/module-194.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import Module848 from "components/Base/Empty";
import module473 from "stores/s2i/run";
import module1815 from "unpacked/module-1815.js";
let u;
let o;
let i;
const S = observer((i = o = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
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
    })(r);
    function r() {
        let e;
        module36(this, r);
        e = a.call(this);
        e.toggleLog = function() {
            if (e.state.showLog) {
                e.setState({
                    showLog: false
                });
            } else {
                e.setState({
                    showLog: true
                });
            }
        };
        e.getLog = module44(module41.mark(function t() {
            let a;
            let r;
            let n;
            let u;
            let o;
            let i;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            a = e.props.runDetail;
                            r = a.logURL;
                            n = a.status;
                            u = a.cluster;
                            o = e.store.logData;
                            i = n === "Building" || n === "Unknown";
                            clearTimeout(e.refreshTimer);
                            if (r) {
                                t.next = 7;
                                break;
                            }
                            e.refreshTimer = setTimeout(e.getLog, 4000);
                            return t.abrupt("return");
                        case 7:
                            t.next = 9;
                            return e.store.getLog(r, u);
                        case 9:
                            e.handleScrollToBottom();
                            if (!o.hasMore) {
                                t.next = 13;
                                break;
                            }
                            e.getLog();
                            return t.abrupt("return");
                        case 13:
                            if (i) {
                                e.refreshTimer = setTimeout(e.getLog, 4000);
                            }
                        case 14:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        e.handleScrollToBottom = function() {
            const current = e.LogContent.current;
            if (current) {
                current.scrollTop = current.scrollHeight;
            }
        };
        e.handleRerun = function() {
            e.props.onRerun();
        };
        e.renderTitle = function() {
            const status = e.props.runDetail.status;
            const e_props = e.props;
            const { builderName, onRerun } = e_props;
            switch(status){
                case "Successful":
                    return <><span className={module3(module1815.icon, module1815.successful)}/><p><span className={module1815.taskName}>{builderName}</span>{t("BUILD_LOG")}</p></>;
                case "Building":
                    return <><span className={module3(module1815.icon, module1815.running)}/><p>{t("TASK")}<span className={module1815.taskName}>{builderName}</span>{t("IN_PROGRESS")}</p></>;
                case "Failed":
                    return <><span className={module3(module1815.icon, module1815.failed)}/><p>{t("TASK")}<span className={module1815.taskName}>{builderName}</span>{t("HAS_FAILED")}{module194(onRerun) ? <module186.Tooltip content={t("RERUN")}><module186.Icon name="refresh" onClick={e.handleRerun}/></module186.Tooltip> : null}</p></>;
                default:
                    return <><span className={module3(module1815.icon, module1815.unknow)}/><p><span className={module1815.taskName}>{builderName}</span>{t("BUILD_LOG")}</p></>;
            }
        };
        e.state = {
            showLog: true,
            isContainerPending: false,
            noModuleMsg: null
        };
        e.store = new module473;
        e.refreshTimer = null;
        e.LogContent = createRef();
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (globals.app.hasKSModule("whizard-logging")) {
                    this.getLog();
                } else {
                    this.store.logData.isLoading = false;
                    this.setState({
                        noModuleMsg: t("CONTAINER_LOG_NOT_ENABLED")
                    });
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.setState({
                    noModuleMsg: null
                });
                clearTimeout(this.refreshTimer);
            }
        },
        {
            key: "renderLog",
            value: function() {
                const log = this.store.logData.log;
                const runState = this.props.runState;
                const noModuleMsg = this.state.noModuleMsg;
                if (log) {
                    return <pre ref={this.LogContent}>{noModuleMsg || log || t("LOADING_DOTS")}</pre>;
                }
                if (runState === "Running" || runState === "Unknown") {
                    return <module186.Loading><p className={module1815.noneLogDesc}/></module186.Loading>;
                }
                return <p className={module1815.noneLogDesc}>{t("NO_DATA")}</p>;
            }
        },
        {
            key: "render",
            value: function() {
                if (this.state.isContainerPending) {
                    return <div className={module1815.logContainer}><Module848 desc="CONTAINER_LOGS_NOT_SUPPORTED"/></div>;
                }
                return <div className={module1815.logContainer}><div className={module1815.title} onClick={this.toggleLog}>{this.renderTitle()}<module186.Icon name={this.state.showLog ? "chevron-up" : "chevron-down"} size={20}/></div>{this.state.showLog ? this.renderLog() : null}</div>;
            }
        }
    ]);
    return r;
})(Component), o.defaultProps = {
    logURL: "",
    runState: ""
}, u = i)) || u;
export default S;
