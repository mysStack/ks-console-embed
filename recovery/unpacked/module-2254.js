import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-24.js";
import "./module-193.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module198 from "./module-198.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import module801 from "./module-801.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import { getDisplayName } from "./module-52.js";
import { PATTERN_ENV_NAME } from "./module-72.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module1535 from "./module-1535.js";
import Module868 from "./module-868.js";
const k = ((Component_1)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.state = {
            keyError: false,
            envType: "customization"
        };
        e.handleResourceValueForm = function(t) {
            let a;
            const e_props = e.props;
            const { configMaps, secrets } = e_props;
            const valueFrom = {};
            if (e.envType === "configMapKeyRef") {
                a = configMaps.find((e)=>e.name === t);
            } else if (e.envType === "secretKeyRef") {
                a = secrets.find((e)=>e.name === t);
            }
            valueFrom[e.envType] = {
                name: a ? a.name : "",
                key: ""
            };
            return {
                valueFrom,
                resourceType: e.envType
            };
        };
        e.handleChange = function(t) {
            const onChange = e.props.onChange;
            const r = {
                name: "",
                valueFrom: {}
            };
            if (t.resource) {
                const n = e.handleResourceValueForm(t.resource);
                const { valueFrom, resourceType } = n;
                r.valueFrom = {
                    ...valueFrom
                };
                if (t.resourceKey) {
                    r.valueFrom[resourceType].key = t.resourceKey;
                }
            }
            r.name = t.name;
            onChange(r);
        };
        e.handleKeyData = function(t) {
            const a = {
                ...e.props.value
            };
            const r = Object.keys(a.valueFrom);
            if (r) {
                module74(a, `valueFrom.${r}.key`, t);
            }
            if (!a.name) {
                a.name = t;
            }
            e.validEnvKey(a.name, a);
            e.props.onChange(a);
        };
        e.updateCheckStatus = function() {
            const { repeatKeyArr = [], index } = e.props;
            if (repeatKeyArr.length > 0) {
                const keyError = repeatKeyArr.includes(`${index}`);
                if (keyError) {
                    e.setState({
                        keyError
                    }, function() {
                        const a = t("DUPLICATE_KEYS");
                        e.handleError({
                            message: a
                        });
                    });
                }
            }
        };
        e.handleCfOrScChange = function(t) {
            const a = {
                name: e.props.value.name || "",
                valueFrom: module31({}, e.envType, {
                    name: t || "",
                    key: ""
                })
            };
            e.validEnvKey(a.name, a);
            e.props.onChange(a);
        };
        e.handleError = function(t = "") {
            const e_props = e.props;
            const { handleKeyError, handleInputError } = e_props;
            handleKeyError(t);
            handleInputError(t);
        };
        e.checkNameRepeat = function(t) {
            const e_props = e.props;
            const { arrayValue, index } = e_props;
            return arrayValue.length > 1 && arrayValue.filter((e, a)=>e.name === t && a !== index).length > 0;
        };
        e.validEnvKey = module801(function(a, r = {}) {
            const n = !PATTERN_ENV_NAME.test(a);
            const l = e.checkNameRepeat(a);
            const u = module198(r, "valueFrom") ? module63(r.valueFrom) : r.value === "";
            if (a === "" && u) {
                e.handleError();
                e.setState({
                    keyError: false
                });
            } else {
                if (l) {
                    const o = t("DUPLICATE_KEYS");
                    e.handleError({
                        message: o
                    });
                } else if (n) {
                    const i = a !== "" ? t("ENVIRONMENT_INVALID_TIP") : t("ENVIRONMENT_CANNOT_BE_EMPTY");
                    e.handleError({
                        message: i
                    });
                } else {
                    e.handleError();
                }
                e.setState({
                    keyError: n || l
                });
            }
        }, 300);
        e.handleValueChange = module801(function({ name, value }) {
            if (name === "" && value === "") {
                e.props.handleKeyError();
                e.props.handleInputError();
                e.setState({
                    keyError: false
                });
            } else {
                e.validEnvKey(name, {
                    value
                });
            }
        }, 300);
        e.handleTypeChange = function(envType) {
            const e_props = e.props;
            const { value, onChange } = e_props;
            e.setState({
                envType,
                keyError: ""
            }, function() {
                onChange(envType !== "customization" ? {
                    name: value.name || "",
                    valueFrom: module31({}, envType, {
                        name: "",
                        key: ""
                    })
                } : {
                    name: value.name || "",
                    value: ""
                });
                if (value.name === "") {
                    e.handleError();
                }
            });
        };
        e.renderConfigOrSecret = function() {
            const value = e.props.value;
            const r = value === undefined ? {} : value;
            const keyError = e.state.keyError;
            const u = e.parseValue(r.valueFrom);
            const { resourceType, resourceName, resourceKey } = u;
            const value_1 = {
                name: r.name,
                resource: resourceName,
                resourceKey
            };
            return <Module868 value={value_1} onChange={e.handleChange}><div className={module1535.typeBox}><module186.Select options={e.resourceOptions} onChange={e.handleTypeChange} value={e.envType}/></div><module186.Input name="name" placeholder={t("KEY")} className={module3(module31({}, module1535.formError, keyError))} onChange={function(t) {
                return e.validEnvKey(t, r);
            }}/><module186.Select name="resource" placeholder={t("RESOURCE")} prefixIcon=<module186.Icon name={e.envType === "configMapKeyRef" ? "hammer" : "key"}/> options={e.getConfigOrSecretOptions} onChange={e.handleCfOrScChange}/><module186.Select name="resourceKey" placeholder={t("KEY_IN_RESOURCE")} options={e.getKeysOptions({
                resourceType,
                resourceName
            })} onChange={e.handleKeyData}/></Module868>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.updateCheckStatus();
            }
        },
        {
            key: "parseValue",
            value: function(e) {
                const resourceType = module198(e, "configMapKeyRef") ? "configMapKeyRef" : "secretKeyRef";
                return {
                    resourceType,
                    resourceName: module26(e, `${resourceType}.name`, ""),
                    resourceKey: module26(e, `${resourceType}.key`, "")
                };
            }
        },
        {
            key: "getKeysOptions",
            value: function({ resourceType, resourceName }) {
                let t;
                const props = this.props;
                const { configMaps, secrets } = props;
                if (resourceType === "configMapKeyRef") {
                    t = configMaps.find((e)=>e.name === resourceName);
                } else if (resourceType === "secretKeyRef") {
                    t = secrets.find((e)=>e.name === resourceName);
                }
                if (t) {
                    return Object.keys(t.data || {}).map((e)=>({
                            label: e,
                            value: e
                        }));
                }
                return [];
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const { value = {}, onChange } = this.props;
                const keyError = this.state.keyError;
                if (value.valueFrom) {
                    return this.renderConfigOrSecret();
                }
                return <Module868 value={value} onChange={onChange}><div className={module1535.typeBox}><module186.Select options={this.resourceOptions} onChange={this.handleTypeChange} value={this.envType}/></div><module186.Input name="name" placeholder={t("KEY")} className={module3(module31({}, module1535.formError, keyError))} onChange={function(t) {
                    return _this.validEnvKey(t, value);
                }}/><module186.Input name="value" placeholder={t("VALUE")} onChange={function() {
                    return _this.handleValueChange(value);
                }}/></Module868>;
            }
        },
        {
            key: "envType",
            get: function() {
                const envType = this.state.envType;
                const value = this.props.value;
                return value.valueFrom && Object.keys(value.valueFrom)[0] || envType;
            }
        },
        {
            key: "resourceOptions",
            get: function() {
                return [
                    {
                        label: t("CUSTOM"),
                        value: "customization"
                    },
                    {
                        label: t("FROM_CONFIGMAP"),
                        value: "configMapKeyRef"
                    },
                    {
                        label: t("FROM_SECRET"),
                        value: "secretKeyRef"
                    }
                ];
            }
        },
        {
            key: "getConfigOrSecretOptions",
            get: function() {
                const props = this.props;
                const { configMaps, secrets } = props;
                if (this.envType === "configMapKeyRef") {
                    return configMaps.map((e)=>({
                            label: getDisplayName(e),
                            value: e.name
                        }));
                }
                return secrets.map((e)=>({
                        label: getDisplayName(e),
                        value: e.name
                    }));
            }
        }
    ]);
    return r;
})(Component);
export default k;
k.propTypes = {
    value: module1.object,
    onChange: module1.func,
    configMaps: module1.array,
    secrets: module1.array
};
k.defaultProps = {
    name: "",
    value: {},
    onChange: function() {},
    configMaps: [],
    secrets: []
};
