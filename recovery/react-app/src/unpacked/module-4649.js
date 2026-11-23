import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module852 from "components/Base/Switch";
import Module790 from "components/Base/Panel";
import Module788 from "components/Base/Modal";
import module4650 from "unpacked/module-4650.js";
let o;
const E = observer(o = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            showCloseConfirm: false
        };
        e.handleSwitch = function() {
            const detail = e.props.store.detail;
            if (module26(detail, 'labels["logging.kubesphere.io/logsidecar-injection"]') === "enabled") {
                return e.setState({
                    showCloseConfirm: true
                });
            }
            return e.handleToggle();
        };
        e.handleToggle = function() {
            const detail = e.props.store.detail;
            const a = module26(detail, 'labels["logging.kubesphere.io/logsidecar-injection"]') === "enabled";
            e.props.store.patch(detail, {
                metadata: {
                    labels: {
                        "logging.kubesphere.io/logsidecar-injection": a ? "disabled" : "enabled"
                    }
                }
            }).then(()=>{
                e.hideCloseConfirm();
                e.props.store.fetchDetail({
                    namespace: detail.name,
                    cluster: detail.cluster
                });
            });
        };
        e.hideCloseConfirm = function() {
            e.setState({
                showCloseConfirm: false
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const showCloseConfirm = this.state.showCloseConfirm;
                const detail = this.props.store.detail;
                const checked = module26(detail, 'labels["logging.kubesphere.io/logsidecar-injection"]') === "enabled";
                return <><Module790 title={t("COLLECT_LOGS_ON_VOLUMES")}><div className={module4650.header}><module186.Icon name="log" size={40}/><div className={module4650.item}><div>{checked ? t("ENABLED") : t("DISABLED")}</div><p>{t("LOG_COLLECTION_ENABLED_DESC")}</p></div>{this.canEdit && <div className={module3(module4650.item, "text-right")}><Module852 type="control" text={checked ? t("ENABLED") : t("DISABLED")} onChange={this.handleSwitch} checked={checked}/></div>}</div></Module790>{this.canEdit && <Module788 visible={showCloseConfirm} onOk={this.handleToggle} onCancel={this.hideCloseConfirm} width={520} hideHeader><div className={module4650.modalHeader}><module186.Icon name="question" size={40} color={{
                    primary: "#fff",
                    secondary: "#329dce"
                }}/><div className={module4650.title}><div>{t("DISABLE_LOG_COLLECTION")}</div></div></div><div>{t("DISABLE_LOG_COLLECTION_TIP")}</div></Module788>}</>;
            }
        },
        {
            key: "canEdit",
            get: function() {
                return this.props.actions.includes("manage");
            }
        }
    ]);
    return r;
})(Component)) || o;
export default E;
