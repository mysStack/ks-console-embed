import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module60 from "unpacked/module-60.js";
import module186 from "unpacked/module-186.js";
import Module796 from "components/Base/Status";
import { formatSize, getLocalTime, parseUrl } from "utils/index";
import module4900 from "unpacked/module-4900.js";
let s;
const O = observer(s = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.toggleShowLog = function() {
            const showLog = n.state.showLog;
            if (showLog) {
                clearTimeout(n.refreshTimer);
            } else if (globals.app.hasKSModule("whizard-logging")) {
                n.getLog();
                n.setState({
                    noModuleMsg: null
                });
            } else {
                n.store.logData.isLoading = false;
                n.setState({
                    noModuleMsg: t("LOG_MODULE_NOT_INSTALLED")
                });
            }
            n.setState({
                showLog: !showLog
            });
        };
        n.getLog = module44(module41.mark(function e() {
            let t;
            let a;
            let r;
            let o;
            let s;
            let l;
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            t = n.props.runDetail;
                            a = t.logURL;
                            r = t.status;
                            o = t.cluster;
                            s = n.store.logData;
                            l = r === "Building" || r === "Unknown";
                            clearTimeout(n.refreshTimer);
                            if (a) {
                                e.next = 7;
                                break;
                            }
                            n.refreshTimer = setTimeout(n.getLog, 4000);
                            return e.abrupt("return");
                        case 7:
                            e.next = 9;
                            return n.store.getLog(a, o);
                        case 9:
                            n.handleScrollToBottom();
                            if (!s.hasMore) {
                                e.next = 13;
                                break;
                            }
                            n.getLog();
                            return e.abrupt("return");
                        case 13:
                            if (l) {
                                n.refreshTimer = setTimeout(n.getLog, 4000);
                            }
                        case 14:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        n.handleScrollToBottom = function() {
            const current = n.LogContent.current;
            if (current) {
                current.scrollTop = current.scrollHeight;
            }
        };
        n.showLog = function() {
            n.setState({
                showLog: true
            });
        };
        n.stopPropagation = function(e) {
            if (e) {
                e.stopPropagation();
            }
        };
        n.pathAddCluster = function(e, t) {
            const a = e.match(/(\/kapis|api|apis)(.*)/);
            if (t && t !== "default" && module60(a)) {
                return `${a[1]}/clusters/${t}${a[2]}`;
            }
            return e;
        };
        n.handleDownload = function() {
            const runDetail = n.props.runDetail;
            const { sourceUrl, cluster } = runDetail;
            const r = module26(parseUrl(sourceUrl), "pathname", `/${sourceUrl}`);
            const o = n.pathAddCluster(r, cluster);
            const c = `${window.location.protocol}//${window.location.host}/b2i_download${o}`;
            window.open(c);
        };
        n.renderLog = function() {
            const logData = n.store.logData;
            const { log, isLoading } = logData;
            const noModuleMsg = n.state.noModuleMsg;
            if (n.state.showLog) {
                if (isLoading) {
                    return <div className={module4900.logContent} onClick={n.stopPropagation}><module186.Loading/></div>;
                }
                return <div className={module4900.logContent} onClick={n.stopPropagation}><pre ref={n.LogContent}>{noModuleMsg || log || t("LOADING_DOTS")}</pre></div>;
            }
            return null;
        };
        n.renderDetailInfo = function() {
            const runDetail = n.props.runDetail;
            const { imageName, branch, binaryName, binarySize, status } = runDetail;
            if (!n.props.isB2i) {
                return <span className={module4900.branchName}><module186.Icon name="branch"/><span>{branch || "master"}</span></span>;
            }
            const content = <div className={module4900.artifactContent}><p className={module4900.title}>{t("ARTIFACT_FILE")}</p><div className={module4900.info}><module186.Icon name="file"/><p>{binaryName} <span>{formatSize(binarySize)}</span></p></div><div className={module4900.info}><module186.Icon name="templet"/><p>{imageName}</p></div><module186.Button onClick={n.handleDownload} type="primary" disabled={status !== "Successful"}>{t("DOWNLOAD_ARTIFACT")}</module186.Button></div>;
            return <module186.Tooltip className={module4900.tooltip} content={content} trigger="hover"><module186.Icon name="file"/></module186.Tooltip>;
        };
        n.state = {
            showLog: false,
            noModuleMsg: null
        };
        n.LogContent = createRef();
        n.store = e.store;
        return n;
    }
    module37(r, [
        {
            key: "componentWillUnmount",
            value: function() {
                clearTimeout(this.refreshTimer);
                this.setState({
                    noModuleMsg: null
                });
            }
        },
        {
            key: "render",
            value: function() {
                const runDetail = this.props.runDetail;
                const { count, status, imageName, startTime, name } = runDetail;
                if (this.props.loading) {
                    return null;
                }
                return <ul className={module3(module4900.item, module31({}, module4900.active, this.state.showLog))} onClick={this.toggleShowLog}><li><div className={module4900.value}>#{count} {this.renderDetailInfo()}</div><div className={module4900.label}>{t("SERIAL_NUMBER")}</div></li><li><div className={module4900.value}><Module796 className={module4900.status} type={status} name={t(t(status))} flicker/></div><div className={module4900.label}>{t("STATUS")}</div></li><li><div className={module4900.value}>{imageName}</div><div className={module4900.label}>{t("IMAGE_NAME_SCAP")}</div></li><li><div className={module4900.value}>{getLocalTime(startTime).format("YYYY-MM-DD HH:mm:ss")}</div><div className={module4900.label}>{t("START_TIME_SCAP")}</div></li><li><div className={module4900.value}>{status && name && t(`IMAGE_NAME_${status.toUpperCase()}`, {
                    name
                })}</div><div className={module4900.label}>{t("LAST_MESSAGE_SCAP")}</div></li><module186.Icon className={module4900.icon} name="chevron-down"/>{this.renderLog()}</ul>;
            }
        }
    ]);
    return r;
})(Component)) || s;
export default O;
