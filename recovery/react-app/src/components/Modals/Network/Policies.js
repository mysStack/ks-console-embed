import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-138.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module788 from "components/Base/Modal";
import Module790 from "components/Base/Panel";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component, createRef } from "unpacked/module-553.js";
import module443 from "stores/service";
import { generateId, showNameAndAlias } from "utils/index";
import { ProjectSelect } from "components/Inputs/index";
import module1690 from "unpacked/module-1690.js";
let l;
let o;
let u;
let c;
let s;
let i;
let f;
const j = inject("projectStore")(l = observer((o = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        module65(n, "tabName", u, module88(n));
        module65(n, "specType", c, module88(n));
        module65(n, "specNameSpaces", s, module88(n));
        module65(n, "specCurNameSpace", i, module88(n));
        module65(n, "specServices", f, module88(n));
        n.handleTabChange = function(e) {
            n.tabName = e;
            n.specNameSpaces = [];
            n.specCurNameSpace = n.props.namespace;
            n.specServices = [];
        };
        n.handleNameSpaceChange = function(e) {
            const cluster = n.props.cluster;
            n.specCurNameSpace = e;
            n.serviceStore.fetchList({
                namespace: e,
                cluster,
                limit: -1
            });
        };
        n.handleNameSpaceChecked = function(e, t) {
            const a = module88(n);
            const { specNameSpaces, tabName } = a;
            const o = specNameSpaces.filter((t)=>t.name === e.name).length > 0;
            if (t && !o) {
                specNameSpaces.push({
                    name: e.name
                });
                n.specNameSpaces = module14.toJS(specNameSpaces);
            } else if (!t && o) {
                n.specNameSpaces = specNameSpaces.filter((t)=>t.name !== e.name);
            }
            n.psRef.current.handleValueChange("type", null, tabName);
        };
        n.handleServiceChange = function(e, t) {
            const a = module88(n);
            const { specCurNameSpace, specServices, tabName } = a;
            const u = specServices.filter((t)=>t.name === e.name && t.namespace === specCurNameSpace).length > 0;
            if (t && !u) {
                specServices.push({
                    name: e.name,
                    namespace: specCurNameSpace
                });
                n.specServices = module14.toJS(specServices);
            } else if (!t && u) {
                n.specServices = specServices.filter((t)=>!(t.name === e.name && t.namespace === specCurNameSpace));
            }
            n.psRef.current.handleValueChange("type", null, tabName);
        };
        n.handleSave = function() {
            const e = module88(n);
            const { tabName, specType, specNameSpaces, specServices } = e;
            const formTemplate = n.props.formTemplate;
            const u = tabName === "projects" ? specNameSpaces.map((e)=>({
                    namespace: e
                })) : specServices.map((e)=>({
                    service: e
                }));
            if (u.length) {
                const c = specType === "egress" ? "to" : "from";
                module74(formTemplate, `spec.${specType}[0].${c}`, u);
                module74(formTemplate, "metadata.name", `policy-${c}-${generateId()}`);
            }
            module74(formTemplate, 'metadata.labels.["kubesphere.io/policy-traffic"]', "inside");
            module74(formTemplate, 'metadata.labels.["kubesphere.io/policy-type"]', specType);
            n.props.onOk(formTemplate);
        };
        n.psValidator = function(e, a, r) {
            const l = module88(n);
            const { tabName, specNameSpaces, specServices } = l;
            if ((tabName === "projects" ? specNameSpaces.map((e)=>({
                    namespace: e
                })) : specServices.map((e)=>({
                    service: e
                }))).length === 0) {
                r({
                    message: t("EMPTY_RESOURCE_DESC")
                });
            } else {
                r();
            }
        };
        n.projectStore = e.projectStore;
        n.serviceStore = new module443;
        n.specCurNameSpace = e.namespace;
        n.psRef = createRef();
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const props = this.props;
                const e_namespace = props.namespace;
                const a = {
                    cluster: props.cluster,
                    limit: -1
                };
                this.projectStore.fetchList({
                    ...a,
                    labelSelector: this.ProjectLabelSelector
                });
                this.serviceStore.fetchList({
                    namespace: e_namespace,
                    ...a
                });
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const list = this.projectStore.list;
                const list_1 = this.serviceStore.list;
                const n = {
                    ...this.props
                };
                const specNameSpaces = this.specNameSpaces;
                const specType = this.specType;
                const tabName = this.tabName;
                const specCurNameSpace = this.specCurNameSpace;
                const specServices = this.specServices;
                return <module788.Form width={600} title={t("ADD_ALLOWLIST_ENTRY")} closable {...n} onOk={this.handleSave}><module186.Form.Item label={t("TRAFFIC_DIRECTION")} desc={t("INTERNAL_TRAFFIC_DIRECTION_DESC")} rules={[
                    {
                        required: true,
                        message: t("SELECT_RULE_DIRECTION_TIP")
                    }
                ]}><module186.RadioGroup name="direction" defaultValue={specType} wrapClassName={module1690.dirCheck} onChange={function(t) {
                    _this.specType = t;
                }}><module186.RadioButton value="egress"><module186.Icon name="upload" size={32}/><div>{t("EGRESS")}</div></module186.RadioButton><module186.RadioButton value="ingress"><module186.Icon name="download" size={32}/><div>{t("INGRESS")}</div></module186.RadioButton></module186.RadioGroup></module186.Form.Item><module186.Form.Item label={t("TYPE")} rules={[
                    {
                        validator: this.psValidator
                    }
                ]} ref={this.psRef}><module186.RadioGroup name="type" mode="button" buttonWidth={155} defaultValue={tabName} onChange={this.handleTabChange} size="small" rules={[
                    {
                        required: true
                    }
                ]}><module186.RadioButton value="projects">{t("PROJECT")}</module186.RadioButton><module186.RadioButton value="services">{t("SERVICE")}</module186.RadioButton></module186.RadioGroup></module186.Form.Item><Module790 className={module3(tabName === "projects" ? "block" : "hide", module1690.panel_p)}><ul className={module1690.list}>{list.data.map((a)=><li key={a.name}><module186.Checkbox value={a.name} checked={specNameSpaces.filter((e)=>e.name === a.name).length > 0} disabled={a.isFedManaged} onChange={function(t) {
                        _this.handleNameSpaceChecked(a, t);
                    }}>{showNameAndAlias(a)}</module186.Checkbox>{a.isFedManaged && <module186.Tooltip content={t("FED_HOST_NAMESPACE_TIP")}><module186.Icon className={module1690.tip} name="question"/></module186.Tooltip>}</li>)}</ul></Module790><Module790 className={module3(tabName === "services" ? "block" : "hide", module1690.panel_s)}><div className={module1690.sheader}><ProjectSelect cluster={this.props.cluster} defaultValue={specCurNameSpace} onChange={this.handleNameSpaceChange} tipMessage={t("FED_HOST_NAMESPACE_TIP")} labelSelector={this.ProjectLabelSelector}/></div><div className={module1690.sbody}><ul className={module1690.list}>{list_1.data.map((t)=><li key={t.name}><module186.Checkbox value={t.name} checked={specServices.filter((e)=>e.name === t.name && e.namespace === specCurNameSpace).length > 0} onChange={function(a) {
                        _this.handleServiceChange(t, a);
                    }}>{t.name}</module186.Checkbox></li>)}</ul></div></Module790></module788.Form>;
            }
        },
        {
            key: "ProjectLabelSelector",
            get: function() {
                return "!kubesphere.io/devopsproject";
            }
        }
    ]);
    return r;
})(Component), u = module49(o.prototype, "tabName", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "projects";
    }
}), c = module49(o.prototype, "specType", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), s = module49(o.prototype, "specNameSpaces", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), i = module49(o.prototype, "specCurNameSpace", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), f = module49(o.prototype, "specServices", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), l = o)) || l) || l;
export default j;
