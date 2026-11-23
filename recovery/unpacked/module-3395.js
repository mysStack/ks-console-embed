import "./module-15.js";
import "./module-187.js";
import "./module-11.js";
import "./module-29.js";
import "./module-18.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import "./module-24.js";
import "./module-193.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import module63 from "./module-63.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module843 from "./module-843.js";
import input from "./module-3396.js";
import { ACCESS_MODES, MODULE_KIND_MAP, PROVISIONERS } from "./module-72.js";
const g = {
    input,
    select: module186.Select
};
const b = {
    maxsize: "GiB",
    stepsize: "GiB",
    minsize: "GiB"
};
const S = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.isCustomizedProvision = PROVISIONERS.every((e)=>e.value !== t.provisionerValue);
        return t;
    }
    module37(r, [
        {
            key: "getRules",
            value: function(e) {
                return this.validators.filter((t)=>t._key === e).map((e)=>module189(e, "_key"));
            }
        },
        {
            key: "getAccessModesOptions",
            value: function() {
                const _this = this;
                const a = PROVISIONERS.find((t)=>t.value === _this.provisionerValue) || {};
                return (module63(a.access_modes) ? Object.keys(ACCESS_MODES) : a.access_modes).map((e)=>({
                        label: t(e),
                        value: e
                    }));
            }
        },
        {
            key: "renderCustom",
            value: function() {
                return <module186.Form.Item label={t("PARAMETERS")}><Module843 name="parameters" addText={t("ADD")}/></module186.Form.Item>;
            }
        },
        {
            key: "renderParams",
            value: function() {
                const _this = this;
                const a = PROVISIONERS.find((t)=>t.value === _this.provisionerValue);
                if (module63(a) || module63(a.params)) {
                    return this.renderCustom();
                }
                const r = [];
                for(let n = 0; n < a.params.length; n += 2){
                    const c = a.params[n] || {};
                    const s = a.params[n + 1] || {};
                    const options = c.options ? c.options.map((e)=>({
                            label: t(e.label),
                            value: e.value
                        })) : [];
                    const H1 = g[c.type];
                    const E = module26(g, s.type || "");
                    r.push(<module186.Columns key={n}><module186.Column><module186.Form.Item label={t(c.key.toUpperCase())} desc={t(c.desc.toUpperCase())} rules={this.getRules(c._key)}>{<H1 name={`parameters.${c._key || c.key.toLowerCase()}`} {...module189(c, [
                        "type",
                        "key",
                        "desc",
                        "placeholder",
                        "options"
                    ])} unit={b[c.key.toLowerCase()] ?? null} options={options} placeholder={t(c.placeholder)}/>}</module186.Form.Item></module186.Column>{s.type && <module186.Column><module186.Form.Item label={t(s.key.toUpperCase())} desc={t(s.desc.toUpperCase())} rules={this.getRules(s._key)}><E name={`parameters.${s._key || s.key.toLowerCase()}`} unit={b[s.key.toLowerCase()] ?? null} {...module189(s, [
                        "type",
                        "key",
                        "desc"
                    ])}/></module186.Form.Item></module186.Column>}</module186.Columns>);
                }
                return r;
            }
        },
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                const options = this.getAccessModesOptions();
                const defaultValue = options.map((e)=>e.value);
                return <div><module186.Form data={this.formTemplate} ref={formRef}><module186.Columns><module186.Column><module186.Form.Item label={t("VOLUME_EXPANSION")}><module186.Select name="allowVolumeExpansion" options={[
                    {
                        label: t("YES"),
                        value: "true"
                    },
                    {
                        label: t("NO"),
                        value: "false"
                    }
                ]}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("RECLAIM_POLICY")}><module186.Select name="reclaimPolicy" defaultValue="Delete" options={this.options}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("ACCESS_MODE")} desc={t("ACCESS_MODES_DESC")}><module186.Select name="metadata.annotations['storageclass.kubesphere.io/supported-access-modes']" options={options} defaultValue={defaultValue} multi/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]} label={t("PROVISIONER")}><module186.Input name="provisioner"/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("VOLUME_BINDING_MODE")}><module186.Select name="volumeBindingMode" options={this.volumeBindingMode} defaultValue="WaitForFirstConsumer"/></module186.Form.Item></module186.Column><module186.Column/></module186.Columns>{this.renderParams()}</module186.Form></div>;
            }
        },
        {
            key: "provisionerValue",
            get: function() {
                return module26(this.formTemplate, 'metadata.annotations["kubesphere.io/provisioner"]', this.formTemplate.provisioner);
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        },
        {
            key: "volumeBindingMode",
            get: function() {
                return [
                    {
                        label: t("IMMEDIATE_BINDING"),
                        value: "Immediate"
                    },
                    {
                        label: t("BINDING_WAIT"),
                        value: "WaitForFirstConsumer"
                    }
                ];
            }
        },
        {
            key: "options",
            get: function() {
                return [
                    {
                        label: "Delete",
                        value: "Delete"
                    },
                    {
                        label: "Retain",
                        value: "Retain"
                    }
                ];
            }
        },
        {
            key: "validators",
            get: function() {
                const validator = function(e, a, r) {
                    if (a) {
                        if (/^[0-9]*$/.test(a)) {
                            if (a < 2000 || a > 2147483647) {
                                return r({
                                    message: t("GID_RANGE_TIP"),
                                    field: e.field
                                });
                            }
                            return void r();
                        }
                        return r({
                            message: t("ENTER_POSITIVE_INTEGER_DESC"),
                            field: e.field
                        });
                    }
                    return r();
                };
                return [
                    {
                        _key: "gidMin",
                        validator,
                        checkOnSubmit: true
                    },
                    {
                        _key: "gidMax",
                        validator,
                        checkOnSubmit: true
                    }
                ];
            }
        }
    ]);
    return r;
})(Component);
export default S;
