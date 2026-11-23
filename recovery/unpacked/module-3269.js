import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module241 from "./module-241.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import { observer } from "./module-239.js";
import module1720 from "./module-1720.js";
let o;
const _ = observer(o = ((e)=>{
    module55(n, e);
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
    })(n);
    function n(...l) {
        let e;
        module36(this, n);
        e = r.call(this, ...l);
        e.getCredentialsListData = function(t) {
            return e.props.store.getCredentials(t);
        };
        e.getCredentialsList = function(t) {
            return module61(e.props.store.credentialsList.data.map((e)=>({
                    label: e.name,
                    value: e.name,
                    type: e.type,
                    disabled: !!t.secretType && e.type !== t.secretType
                })));
        };
        e.optionRender = function({ label, type, disabled }) {
            return module553.default.createElement("span", {
                style: {
                    display: "flex",
                    alignItem: "center"
                }
            }, label, "  ", module553.default.createElement(module186.Tag, {
                type: disabled ? "" : "warning"
            }, type === "ssh" ? "SSH" : t(type)));
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                t = this.props;
                a = t.formData;
                r = t.onChange;
                n = t.option;
                await this.getCredentialsListData();
                if (!module26(a, `${n.name}.name`)) {
                    r(a[n.name]);
                }
            }
        },
        {
            key: "renderCredentialDesc",
            value: function() {
                return module553.default.createElement("p", null, t("SELECT_CREDENTIAL_DESC"), module553.default.createElement("span", {
                    className: module1720.clickable,
                    onClick: this.props.showCredential
                }, t("CREATE_CREDENTIAL")));
            }
        },
        {
            key: "render",
            value: function() {
                let e;
                const props = this.props;
                const { option, onChange } = props;
                const credentialsList = this.props.store.credentialsList;
                const u = {
                    key: option.name,
                    label: t(option.display),
                    rules: [
                        {
                            required: (e = option.required) !== null && e !== undefined && e,
                            message: t("PARAM_REQUIRED")
                        }
                    ],
                    desc: this.renderCredentialDesc()
                };
                return module553.default.createElement(module186.Form.Item, u, module553.default.createElement(module186.Select, {
                    name: `${option.name}.name`,
                    options: this.getCredentialsList(option),
                    pagination: module241(credentialsList, [
                        "page",
                        "limit",
                        "total"
                    ]),
                    isLoading: credentialsList.isLoading,
                    onFetch: this.getCredentialsListData,
                    searchable: true,
                    clearable: true,
                    onChange
                }));
            }
        }
    ]);
    return n;
})(module553.Component)) || o;
export default _;
