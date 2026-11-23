import "unpacked/module-15.js";
import "unpacked/module-86.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-137.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import Module788 from "components/Base/Modal";
import module3277 from "unpacked/module-3277.js";
let o;
let u;
let c;
const C = observer((c = u = ((Component_1)=>{
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
        n.refreshHandler = function() {
            const e = n.props.store.repositoryLog.split("\n");
            let t = false;
            for(let a = e.length - 1; a >= 0; a--){
                if (!module63(e[a]) && e[a].indexOf("Finished") > -1) {
                    return void (t = true);
                }
            }
            if (t) {
                clearInterval(n.refresh);
                n.refresh = null;
            } else {
                const r = n.props.params;
                n.props.store.getRepoScanLogs(r);
            }
        };
        n.handleFetch = async function e() {
            let a;
            a = n.props.params;
            await n.props.handleScanRepository();
            await n.props.store.getRepoScanLogs(a);
            module240.success({
                content: t("LOGS_OBTAINED_SUCCESSFULLY")
            });
        };
        n.handleDownloadLogs = function() {
            const repositoryLog = n.props.store.repositoryLog;
            n.props.store.saveAsFile(repositoryLog, "log.txt");
        };
        n.formRef = createRef();
        n.refresh = setInterval(()=>{
            n.refreshHandler();
        }, 4000);
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const params = this.props.params;
                this.props.store.getRepoScanLogs(params);
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!e.visible && this.props.visible) {
                    const t = this.props.params;
                    this.props.store.getRepoScanLogs(t);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                clearInterval(this.refresh);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                const repositoryLog = this.props.store.repositoryLog;
                return <Module788 width={1160} onCancel={onCancel} visible={visible} closable={false} title={t("REPOSITORY_SCAN_LOGS")} cancelText={t("CLOSE")}><div className={module3277.content}><div className={module3277.btn_group}><module186.Icon name="human" size={20}/>{this.startBy}<module186.Button onClick={this.handleDownloadLogs}>{t("DOWNLOAD")}</module186.Button><module186.Button onClick={this.handleFetch}>{t("RESCAN")}</module186.Button></div><pre className={module3277.pre}>{repositoryLog}</pre></div></Module788>;
            }
        },
        {
            key: "startBy",
            get: function() {
                const e = this.props.store.repositoryLog.split("\n");
                const a = module26(e, "[0]", "");
                const r = a.match(/^Started by (user )?(.*)?/) || [];
                const n = r[1];
                const l = r[2];
                if (a && n) {
                    return t("STARTED_BY_NAME", {
                        name: l
                    });
                }
                if (a && !n) {
                    return t("STARTED_BY_NAME", {
                        name: t(l)
                    });
                }
                return t("STARTED_BY_NAME", {
                    name: "-"
                });
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    name: module1.string,
    branches: module1.array
}, u.defaultProps = {
    branches: [],
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, o = c)) || o;
export default C;
