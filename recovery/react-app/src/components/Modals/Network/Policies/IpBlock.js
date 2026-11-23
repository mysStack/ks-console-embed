import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-192.js";
import "unpacked/module-27.js";
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
import "unpacked/module-24.js";
import "unpacked/module-193.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module74 from "unpacked/module-74.js";
import module63 from "unpacked/module-63.js";
import module136 from "unpacked/module-136.js";
import module186 from "unpacked/module-186.js";
import module1169 from "unpacked/module-1169.js";
import module443 from "stores/service";
import { PATTERN_ALIAS_NAME, PATTERN_IP, PATTERN_IP_MASK, PATTERN_NAME } from "utils/constants";
import module1690 from "unpacked/module-1690.js";
let l;
const T = inject("projectStore")(l = observer(l = ((Component_1)=>{
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
        t.modifyCIDR = function(e, a) {
            const cidrRules = t.state.cidrRules;
            const n = cidrRules[e];
            cidrRules[e] = {
                ...n,
                ...a
            };
            t.setState(cidrRules);
        };
        t.addCIDRRule = function() {
            const cidrRules = t.state.cidrRules;
            cidrRules.push({
                ip: {
                    value: ""
                },
                mask: {
                    value: ""
                }
            });
            t.setState(cidrRules);
        };
        t.copyCIDRRule = function(e) {
            const cidrRules = t.state.cidrRules;
            cidrRules.splice(e, 0, module136(cidrRules[e]));
            t.setState(cidrRules, function() {
                t.validCIDR();
            });
        };
        t.delCIDRRule = function(e) {
            const cidrRules = t.state.cidrRules;
            if (cidrRules.length > 1) {
                cidrRules.splice(e, 1);
                t.setState(cidrRules);
            }
        };
        t.addPortRule = function() {
            const portRules = t.state.portRules;
            portRules.push({
                port: {
                    value: ""
                },
                protocol: "TCP"
            });
            t.setState(portRules);
        };
        t.addPortRangeRule = function() {
            const portRules = t.state.portRules;
            portRules.push({
                port: {
                    value: ""
                },
                endPort: {
                    value: ""
                },
                protocol: "TCP"
            });
            t.setState(portRules);
        };
        t.copyPortRule = function(e) {
            const portRules = t.state.portRules;
            portRules.splice(e, 0, module136(portRules[e]));
            t.setState(portRules, function() {
                t.validPort();
            });
        };
        t.delPortRule = function(e) {
            const portRules = t.state.portRules;
            if (portRules.length > 1) {
                portRules.splice(e, 1);
                t.setState(portRules);
            }
        };
        t.modifyRule = function(e, a) {
            const portRules = t.state.portRules;
            const n = portRules[e];
            portRules[e] = {
                ...n,
                ...a
            };
            t.setState(portRules, function() {
                t.validPort();
            });
        };
        t.isRepeatCIDR = function(e, t, a) {
            let r = false;
            t.forEach((t, n)=>{
                if (t.ip.value !== "" && t.mask.value !== "" && a > n && t.ip.value + t.mask.value === e.ip.value + e.mask.value) {
                    r = true;
                }
            });
            return r;
        };
        t.validCIDR = function() {
            const cidrRules = t.state.cidrRules.slice();
            let a = true;
            cidrRules.forEach((r, n)=>{
                const l = t.isRepeatCIDR(r, cidrRules, n);
                r.ip.valid = !module63(r.ip.value) && PATTERN_IP.test(r.ip.value) && !l;
                r.mask.valid = !module63(r.mask.value) && PATTERN_IP_MASK.test(r.mask.value) && !l && Number(r.mask.value) > -1 && Number(r.mask.value) < 33;
                if (!(r.ip.valid && r.mask.valid)) {
                    a = false;
                }
            });
            t.setState({
                cidrRules
            });
            return a;
        };
        t.isValidPort = function(e) {
            return e !== "" && /^(?![0])(\d{0,5})$/.test(e) && e < 65536;
        };
        t.isRepeatPort = function(e, t, a) {
            let r = false;
            t.forEach((t, n)=>{
                if (t.port.value !== "" && t?.endPort?.value !== "" && a > n && e.protocol + e.port.value + e?.endPort?.value === t.protocol + t.port.value + t?.endPort?.value) {
                    r = true;
                }
            });
            return r;
        };
        t.validPort = function() {
            const portRules = t.state.portRules.slice();
            let a = true;
            portRules.forEach((r, n)=>{
                const l = t.isRepeatPort(r, portRules, n);
                let o = true;
                if (r?.endPort && Number(r.endPort.value) - Number(r.port.value) < 0) {
                    o = false;
                }
                r.port.valid = module63(r.port.value) || t.isValidPort(r.port.value) && !l && o;
                if (r?.endPort) {
                    r.endPort.valid = module63(r.endPort.value) || t.isValidPort(r.endPort.value) && !l && o;
                    if (!(r.port.valid || r.endPort.valid)) {
                        a = false;
                    }
                }
            });
            t.setState({
                portRules
            });
            return a;
        };
        t.validSpecType = function() {
            const specType = t.state.specType;
            if (specType === "") {
                t.setState({
                    specType: false
                });
            }
            return specType !== "";
        };
        t.validFormData = function() {
            return t.validSpecType() && t.validCIDR() && t.validPort();
        };
        t.handleSave = function() {
            const t_state = t.state;
            const { specType, cidrRules, portRules } = t_state;
            if (t.validFormData()) {
                const l = t.props.formTemplate;
                const o = portRules.filter((e)=>!module63(e.port.value)).map((e)=>({
                        port: +e.port.value,
                        endPort: e.endPort?.value ? +e.endPort?.value : undefined,
                        protocol: e.protocol
                    }));
                const u = cidrRules.filter((e)=>!module63(e.ip.value) && !module63(e.mask.value)).map((e)=>({
                        ipBlock: {
                            cidr: `${e.ip.value}/${e.mask.value}`
                        }
                    }));
                const c = specType === "egress" ? "to" : "from";
                module74(l, `spec.${specType}[0].ports`, o);
                module74(l, `spec.${specType}[0].${c}`, u);
                module74(l, 'metadata.labels.["kubesphere.io/policy-traffic"]', "outside");
                module74(l, 'metadata.labels.["kubesphere.io/policy-type"]', specType);
                t.props.onOk(l);
            }
        };
        t.projectStore = e.projectStore;
        t.serviceStore = new module443;
        t.state = {
            specType: e.edit ? e.formTemplate.specType : "",
            specNameSpaces: [],
            specServices: [],
            specCurNameSpace: e.namespace,
            protocols: [
                {
                    value: "TCP",
                    label: "TCP"
                },
                {
                    value: "UDP",
                    label: "UDP"
                },
                {
                    value: "SCTP",
                    label: "SCTP"
                }
            ],
            cidrRules: e.edit && e.formTemplate.cidrRules.length > 0 ? e.formTemplate.cidrRules : [
                {
                    ip: {
                        value: ""
                    },
                    mask: {
                        value: ""
                    }
                }
            ],
            portRules: e.edit && e.formTemplate.portRules.length > 0 ? e.formTemplate.portRules : [
                {
                    port: {
                        value: ""
                    },
                    protocol: "TCP"
                }
            ]
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const { maxNameLength = 63, formTemplate, formRef, edit } = this.props;
                const s = {
                    ...this.props
                };
                const state = this.state;
                const { specType, protocols, portRules, cidrRules } = state;
                let E = false;
                let b = false;
                const message = maxNameLength === 253 ? t("LONG_NAME_DESC") : t("NAME_DESC");
                return <module1169.Form width={900} title={edit ? t("EDIT_ALLOWLIST_ENTRY") : t("ADD_ALLOWLIST_ENTRY")} closable {...s} onOk={this.handleSave} data={formTemplate} ref={formRef}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC", {
                            message
                        })
                    }
                ]}><module186.Input name="metadata.name" maxLength={maxNameLength} disabled={edit}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns><module186.Form.Item label={t("TRAFFIC_DIRECTION")} desc={specType ? t("EXTERNAL_TRAFFIC_DIRECTION_DESC") : <span className={module1690.errColor}>{t("SELECT_RULE_DIRECTION_TIP")}</span>}><module186.RadioGroup size="large" name="direction" defaultValue={specType} wrapClassName={module1690.dirCheck} onChange={function(specType_1) {
                    return _this.setState({
                        specType: specType_1
                    });
                }}><module186.RadioButton value="egress"><module186.Icon name="upload" size={32}/><div>{t("EGRESS")}</div></module186.RadioButton><module186.RadioButton value="ingress"><module186.Icon name="download" size={32}/><div>{t("INGRESS")}</div></module186.RadioButton></module186.RadioGroup></module186.Form.Item><div className={module1690.title}>{t("NETWORK_SEGMENT")}</div>{cidrRules.map(({ ip, mask }, r)=>{
                    if (!(ip.valid !== false && mask.valid !== false)) {
                        b = true;
                    }
                    if (cidrRules.length === 1 && (module63(ip.value) || module63(mask.value))) {
                        b = true;
                    }
                    return <div className={module1690.cidrrow} key={`${r} `}><div className={module1690.cidr}><module186.Input name="cidr-ip" className={ip.valid === false ? module1690.error : ""} value={ip.value} placeholder={t("NETWORK_SEGMENT_EXAMPLE")} onChange={function(t, a) {
                        return _this.modifyCIDR(r, {
                            ip: {
                                value: a
                            }
                        });
                    }} onBlur={_this.validCIDR}/><span>/</span><module186.Input name="cidr-mask" className={mask.valid === false ? module1690.error : ""} placeholder="24" value={mask.value} onChange={function(t, a) {
                        return _this.modifyCIDR(r, {
                            mask: {
                                value: a
                            }
                        });
                    }} onBlur={_this.validCIDR}/></div><div><module186.Tooltip content={t("ADD_REPLICA")}><module186.Icon changeable clickable name="copy" className={module1690.copy} onClick={function() {
                        _this.copyCIDRRule(r);
                    }}/></module186.Tooltip><module186.Tooltip content={t("DROP")}><module186.Icon changeable clickable name="trash" onClick={function() {
                        _this.delCIDRRule(r);
                    }}/></module186.Tooltip></div></div>;
                })}<div className={module1690.addBtn}><module186.Button onClick={this.addCIDRRule}>{t("ADD_NEW_NETWORK_SEGMENT")}</module186.Button></div>{b && <div className={module1690.errColor}>{t("ENTER_VALID_SEGMENT_DESC")}</div>}{E && <div className={module1690.errColor}>{t("ENTER_VALID_PORT_NUMBER_DESC")}</div>}<div className={module1690.title}>{t("PORT_PL")}</div>{portRules.map(({ port, protocol, endPort = "" }, r)=>{
                    if (port.valid === false) {
                        E = true;
                    }
                    return <div className={module1690.rulerow} key={`${r} `}><div><module186.Select name="proto" value={protocol} options={protocols} onChange={function(protocol_1) {
                        return _this.modifyRule(r, {
                            protocol: protocol_1
                        });
                    }}/>{endPort ? <div><module186.Input placeholder={t("PORT_EXAMPLE")} className={port.valid === false ? module1690.error : ""} value={port.value} onBlur={_this.validPort} onChange={function(t, a) {
                        return _this.modifyRule(r, {
                            port: {
                                value: a
                            }
                        });
                    }}/><span> - </span><module186.Input placeholder={t("PORT_EXAMPLE")} className={endPort.valid === false ? module1690.error : ""} value={endPort.value} onBlur={_this.validPort} onChange={function(t, a) {
                        return _this.modifyRule(r, {
                            endPort: {
                                value: a
                            }
                        });
                    }}/></div> : <module186.Input placeholder={t("PORT_EXAMPLE")} className={port.valid === false ? module1690.error : ""} value={port.value} onBlur={_this.validPort} onChange={function(t, a) {
                        return _this.modifyRule(r, {
                            port: {
                                value: a
                            }
                        });
                    }}/>}</div><div><module186.Tooltip content={t("REPLICA")}><module186.Icon changeable clickable name="copy" className={module1690.copy} onClick={function() {
                        _this.copyPortRule(r);
                    }}/></module186.Tooltip><module186.Tooltip content={t("DROP")}><module186.Icon changeable clickable name="trash" onClick={function() {
                        _this.delPortRule(r);
                    }}/></module186.Tooltip></div></div>;
                })}<div className={module1690.addBtn}><module186.Button onClick={this.addPortRangeRule}>{t("ADD_NEW_PORT_RANGE")}</module186.Button><module186.Button onClick={this.addPortRule}>{t("ADD_NEW_PORT")}</module186.Button></div>{E && <div className={module1690.errColor}>{t("ENTER_VALID_PORT_NUMBER_DESC")}</div>}</module1169.Form>;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default T;
