import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import "./module-58.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module1743 from "./module-1743.js";
import module1757 from "./module-1757.js";
import module1760 from "./module-1760.js";
import module1067 from "./module-1067.js";
import module1766 from "./module-1766.js";
import module1767 from "./module-1767.js";
const y = {
    "toolbox.logquery": {
        on: function({ store: _store, ...rest }) {
            var r = module788.open({
                onOk: function() {
                    module788.close(r);
                },
                modal: module1743,
                title: t("CONTAINER_LOG_SEARCH"),
                ...rest
            });
        }
    },
    "toolbox.eventsearch": {
        on: function({ store: _store, ...rest }) {
            var r = module788.open({
                onOk: function() {
                    module788.close(r);
                },
                modal: module1757,
                title: <div><module186.Icon size={20} name="thunder" style={{
                    marginRight: 7
                }}/> <span style={{
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "20px",
                    height: "20px"
                }}>{t("RESOURCE_EVENT_SEARCH")}</span></div>,
                ...rest
            });
        }
    },
    "toolbox.auditingsearch": {
        on: function({ store: _store, ...rest }) {
            var r = module788.open({
                onOk: function() {
                    module788.close(r);
                },
                modal: module1760,
                title: <div><module186.Icon size={20} name="login-servers" style={{
                    marginRight: 7
                }}/> <span style={{
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "20px",
                    height: "20px"
                }}>{t("AUDIT_LOG_SEARCH")}</span></div>,
                ...rest
            });
        }
    },
    "toolbox.kubectl": {
        on: function({ store: _store, ...rest }) {
            var a = module788.open({
                onOk: function() {
                    module788.close(a);
                },
                modal: module1067,
                title: "kubectl",
                ...rest
            });
        }
    },
    "toolbox.kubeconfig": {
        on: function({ store: _store, ...rest }) {
            var a = module788.open({
                onOk: function() {
                    module788.close(a);
                },
                modal: module1766,
                title: "kubeconfig",
                ...rest
            });
        }
    },
    "toolbox.bill": {
        on: function({ store, ...rest }) {
            var r = module788.open({
                onOk: function() {
                    module788.close(r);
                },
                modal: module1767,
                store,
                ...rest
            });
        }
    }
};
export default y;
