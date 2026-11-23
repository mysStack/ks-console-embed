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
import module74 from "unpacked/module-74.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module852 from "components/Base/Switch";
import Module790 from "components/Base/Panel";
import Module788 from "components/Base/Modal";
import module437 from "stores/federated";
import module4973 from "unpacked/module-4973.js";
let o;
const O = observer(o = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = r.call(this, ...n);
        e.state = {
            showCloseConfirm: false
        };
        e.store = new module437({
            module: "namespaces"
        });
        e.handleSwitch = function() {
            const detail = e.store.detail;
            if (module26(detail, 'labels["logging.kubesphere.io/logsidecar-injection"]') === "enabled") {
                return e.setState({
                    showCloseConfirm: true
                });
            }
            return e.handleToggle();
        };
        e.handleToggle = function() {
            const detail = e.store.detail;
            const r = module26(detail, 'labels["logging.kubesphere.io/logsidecar-injection"]') === "enabled";
            const a = {
                metadata: {
                    labels: {
                        "logging.kubesphere.io/logsidecar-injection": r ? "disabled" : "enabled"
                    }
                }
            };
            module74(a, 'spec.template.metadata.labels["logging.kubesphere.io/logsidecar-injection"]', r ? "disabled" : "enabled");
            e.store.patch(detail, a).then(()=>{
                e.hideCloseConfirm();
                e.store.fetchDetail({
                    name: detail.name,
                    namespace: detail.name
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
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const namespace = this.props.namespace;
                this.store.fetchDetail({
                    namespace,
                    name: namespace
                });
            }
        },
        {
            key: "render",
            value: function() {
                const showCloseConfirm = this.state.showCloseConfirm;
                const detail = this.store.detail;
                const checked = module26(detail, 'labels["logging.kubesphere.io/logsidecar-injection"]') === "enabled";
                return <><Module790 title={t("COLLECT_LOGS_ON_VOLUMES")}><div className={module4973.header}><module186.Icon name="log" size={40}/><div className={module4973.item}><div>{checked ? t("ENABLED") : t("DISABLED")}</div><p>{t("LOG_COLLECTION_ENABLED_DESC")}</p></div>{this.canEdit && <div className={module3(module4973.item, "text-right")}><Module852 type="control" text={checked ? t("ENABLED") : t("DISABLED")} onChange={this.handleSwitch} checked={checked}/></div>}</div></Module790>{this.canEdit && <Module788 visible={showCloseConfirm} onOk={this.handleToggle} onCancel={this.hideCloseConfirm} width={520} hideHeader><div className={module4973.modalHeader}><module186.Icon name="question" size={40} color={{
                    primary: "#fff",
                    secondary: "#329dce"
                }}/><div className={module4973.title}><div>{t("DISABLE_LOG_COLLECTION")}</div></div></div><div>{t("DISABLE_LOG_COLLECTION_TIP")}</div></Module788>}</>;
            }
        },
        {
            key: "canEdit",
            get: function() {
                return this.props.actions.includes("manage");
            }
        }
    ]);
    return a;
})(Component)) || o;
export default O;
