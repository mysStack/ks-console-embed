import "./module-15.js";
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
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import Module800 from "components/Inputs/NumberInput";
import Module873 from "components/Inputs/ResourceLimit";
import module186 from "./module-186.js";
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return <module186.Form.Group><module186.Columns><module186.Column><module186.Form.Item label={t("RETENTION_RAW")} desc={t("RETENTION_RAW_DESC")}><Module800 name="compactor.retention.retentionRaw" unit="d" integer min={0} defaultValue={60}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("RETENTION_FIVE_MIN")} desc={t("RETENTION_FIVE_MIN_DESC")}><Module800 name="compactor.retention.retention5m" unit="d" integer min={0} defaultValue={180}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("RETENTION_ONE_HOUR")} desc={t("RETENTION_ONE_HOUR_DESC")}><Module800 name="compactor.retention.retention1h" unit="d" integer min={0} defaultValue={360}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("CONTAINER_QUOTA")}><Module873 name="compactor.resources" {...this.resourceLimitProps}/></module186.Form.Item></module186.Column></module186.Columns></module186.Form.Group>;
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
                            cpu: module26(formTemplate, 'compactor.resources["limits.cpu"]'),
                            memory: module26(formTemplate, 'compactor.resources["limits.memory"]')
                        },
                        requests: {
                            cpu: module26(formTemplate, 'compactor.resources["requests.cpu"]'),
                            memory: module26(formTemplate, 'compactor.resources["requests.memory"]')
                        }
                    },
                    onError: function(t) {
                        _this.context.setError(!!t);
                    }
                };
            }
        }
    ]);
    return r;
})(Component), o.contextTypes = {
    setError: module1.PropTypes.func
}, l = u)) || l;
export default S;
