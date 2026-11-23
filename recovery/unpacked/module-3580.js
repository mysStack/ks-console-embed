import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import Module800 from "./module-800.js";
import Module873 from "./module-873.js";
let l;
let o;
let u;
const S = observer((u = o = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.replicasValidator = function(a, r, n) {
            if (r > module26(e.props.formTemplate, "ingester.replicas")) {
                return n({
                    message: t("LOCAL_STORAGE_ERROR_MESSAGE")
                });
            }
            return n();
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return <module186.Form.Group><module186.Columns><module186.Column><module186.Form.Item label={t("DATA_RETENTION_REPLICA_COUNT")} desc={t("REPLICA_DESC", {
                    resource: t("DATA_RETENTION_LOW"),
                    default: 1
                })} rules={[
                    {
                        validator: this.replicasValidator
                    }
                ]}><module186.Select name="router.replicationFactor" options={this.replicationFactorOpts} defaultValue={1}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("COMPONENT_REPLICA_COUNT")} desc={t("REPLICA_DESC", {
                    resource: t("ROUTER_COMPONENT_LOW"),
                    default: 2
                })}><Module800 name="router.replicas" integer min={0} defaultValue={2} controls/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("CONTAINER_QUOTA")}><Module873 name="router.resources" {...this.resourceLimitProps}/></module186.Form.Item></module186.Column></module186.Columns></module186.Form.Group>;
            }
        },
        {
            key: "resourceLimitProps",
            get: function() {
                const _this = this;
                const formTemplate = this.props.formTemplate;
                return {
                    memoryProps: {
                        unit: "Gi"
                    },
                    defaultValue: {
                        limits: {
                            cpu: module26(formTemplate, 'router.resources["limits.cpu"]'),
                            memory: module26(formTemplate, 'router.resources["limits.memory"]')
                        },
                        requests: {
                            cpu: module26(formTemplate, 'router.resources["requests.cpu"]'),
                            memory: module26(formTemplate, 'router.resources["requests.memory"]')
                        }
                    },
                    onError: function(t) {
                        _this.context.setError(!!t);
                    }
                };
            }
        },
        {
            key: "replicationFactorOpts",
            get: function() {
                return [
                    1,
                    2,
                    3
                ].map((e)=>({
                        label: e,
                        value: e
                    }));
            }
        }
    ]);
    return r;
})(Component), o.contextTypes = {
    setError: module1.PropTypes.func
}, l = u)) || l;
export default S;
