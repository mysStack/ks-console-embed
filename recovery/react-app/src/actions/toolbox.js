import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module1743 from "components/Modals/LogSearch";
import module1757 from "components/Modals/EventSearch";
import module1760 from "components/Modals/AuditingSearch";
import module1067 from "components/Modals/KubeCtl";
import module1766 from "components/Modals/KubeConfig";
import module1767 from "components/Modals/Bill";
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
