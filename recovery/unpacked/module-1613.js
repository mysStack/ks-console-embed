import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module830 from "./module-830.js";
import module800 from "./module-800.js";
import { joinSelector } from "./module-52.js";
import module853 from "./module-853.js";
import module934 from "./module-934.js";
import module2628 from "./module-2628.js";
import module2633 from "./module-2633.js";
let o;
const I = observer(o = ((e)=>{
    module55(r, e);
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.store = e.props.store;
        e.secretStore = e.props.isEdgeWize ? new module934 : new module853;
        e.state = {
            formTemplate: module136(e.props.formTemplate)
        };
        e.updateFormTemplate = function() {
            const detail = e.props.detail;
            if (e.store.list.data.length > 0) {
                const a = e.store.list.data.find((e)=>e.name === detail.name) || e.store.list.data[0];
                const formTemplate = module14.toJS(a._originData);
                const n = module26(formTemplate, "spec.endpoints", []);
                if (n.length > 0) {
                    n.forEach((e)=>{
                        if (e.tlsConfig) {
                            e.authType = "tlsConfig";
                        } else if (e.bearerTokenSecret) {
                            e.authType = "bearerTokenSecret";
                        } else if (e.basicAuth) {
                            e.authType = "basicAuth";
                        } else {
                            e.authType = "";
                        }
                    });
                    formTemplate.spec.interval = module26(n, "[0].interval");
                    formTemplate.spec.scrapeTimeout = module26(n, "[0].scrapeTimeout");
                }
                e.setState({
                    formTemplate
                });
            }
        };
        e.handleOk = function(t) {
            const e_props = e.props;
            const { onOk, detail } = e_props;
            const l = module26(t, "spec.interval");
            const o = module26(t, "spec.scrapeTimeout");
            module26(t, "spec.endpoints", []).forEach((e)=>{
                e.interval = l;
                e.scrapeTimeout = o;
            });
            module74(t, "spec.selector.matchLabels", detail.labels);
            module74(t, "metadata.labels", {
                ...detail.labels || {},
                "app.kubernetes.io/vendor": "kubesphere"
            });
            onOk(t);
        };
        e.checkItemValid = function(e) {
            return e.port && e.path && e.scheme;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                const props = this.props;
                const { cluster, namespace, detail } = props;
                this.store.fetchListByK8s({
                    cluster,
                    namespace,
                    labelSelector: joinSelector(detail.labels)
                }).then(()=>_this.updateFormTemplate());
                this.secretStore.fetchListByK8s({
                    cluster,
                    namespace
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, workspace, namespace, cluster, detail, isSubmitting, onCancel } = props;
                const formTemplate = this.state.formTemplate;
                return module553.default.createElement(module788.Form, {
                    icon: "linechart",
                    title: t("EDIT_MONITORING_EXPORTER"),
                    width: 960,
                    data: formTemplate,
                    visible,
                    onOk: this.handleOk,
                    onCancel,
                    isSubmitting
                }, module553.default.createElement("div", {
                    className: module2633.wrapper
                }, module553.default.createElement(module186.Form.Item, {
                    label: t("PATH_PL")
                }, module553.default.createElement(module830, {
                    className: module2633.endpoints,
                    name: "spec.endpoints",
                    defaultValue: this.defaultEndpoints,
                    checkItemValid: this.checkItemValid,
                    itemType: "object",
                    addText: t("ADD")
                }, module553.default.createElement(module2628, {
                    detail,
                    secretStore: this.secretStore,
                    cluster,
                    namespace,
                    workspace
                }))), module553.default.createElement("div", {
                    className: module2633.timeout
                }, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
                    label: t("COLLECTION_INTERVAL_MIN"),
                    desc: t("COLLECTION_INTERVAL_MIN_DESC")
                }, module553.default.createElement(module800, {
                    name: "spec.interval",
                    defaultValue: "1m",
                    min: 0,
                    unit: "m",
                    integer: true
                }))), module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
                    label: t("TIMEOUT_PERIOD_S"),
                    desc: t("COLLECTION_TIMEOUT_DESC")
                }, module553.default.createElement(module800, {
                    name: "spec.scrapeTimeout",
                    defaultValue: "10s",
                    min: 0,
                    unit: "s",
                    integer: true
                })))))));
            }
        },
        {
            key: "defaultEndpoints",
            get: function() {
                return [
                    {
                        scheme: "http",
                        path: "/metrics",
                        authType: ""
                    }
                ];
            }
        }
    ]);
    return r;
})(module553.Component)) || o;
export default I;
