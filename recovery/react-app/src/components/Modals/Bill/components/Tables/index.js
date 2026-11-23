import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-31.js";
import module246 from "unpacked/module-246.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module3175 from "unpacked/module-3175.js";
function y(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const options = [
    "Read",
    "Write",
    "Delete",
    "Alter",
    "Describe",
    "All",
    "IdempotentWrite",
    "ClusterAction",
    "Create",
    "AlterConfigs",
    "DescribeConfigs"
].map((e)=>({
        label: e,
        value: e
    }));
const b = ((Component_1)=>{
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
        n.handleDetele = function() {
            n.props.onDelete(n.props.index);
        };
        n.onChange = function(e) {
            return function(t) {
                const { index = 1, onChange } = n.props;
                if (module246(t) === "object") {
                    t = t.target.value;
                }
                module74(n.state.permissionRule, e, t);
                n.setState({
                    ...n.state.permissionRule
                });
                onChange(t, `[${index - 1}]${e}`);
            };
        };
        n.renderModeTip = function() {
            return <div><div>{t("PREFIX_DESC")}</div><div>{t("LITERAL_DESC")}</div></div>;
        };
        n.state = {
            permissionRule: JSON.parse(JSON.stringify(e.permissionRule))
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { index = 1, canDelete, isEmptyError } = this.props;
                const permissionRule = this.state.permissionRule;
                const disabled = module26(permissionRule, "resource.type") === "cluster";
                const c = module26(permissionRule, "resource.name") === "";
                const s = !disabled && c && isEmptyError;
                return <div className={module3175.cardContainer}><div className={module3175.cardHeader}><div>{t("PERMISSION_RULE")} {index}</div>{canDelete && <module186.Icon className={module3175.delete} onClick={this.handleDetele} name="trash" size={16}/>}</div><div className={module3175.cardRow}><div className={module3175.inputItem}><div>{t("RESOURCE_TYPE")}</div><module186.Select value={module26(permissionRule, "resource.type")} onChange={this.onChange("resource.type")} options={[
                    {
                        label: t("TOPIC"),
                        value: "topic"
                    },
                    {
                        label: t("GROUP"),
                        value: "group"
                    },
                    {
                        label: t("CLUSTER"),
                        value: "cluster"
                    },
                    {
                        label: t("TRANSACTION_ID"),
                        value: "transactionalId"
                    }
                ]}/><div className={module3175.desc}>{t("RESOURCE_TYPE_DESC")}</div></div><div className={module3175.inputItem}><div>{t("RESOURCE_MATCHING_MODE")}<module186.Tooltip content={this.renderModeTip()}><module186.Icon name="question" size={16} className="margin-l6"/></module186.Tooltip></div><module186.Select value={module26(permissionRule, "resource.patternType")} onChange={this.onChange("resource.patternType")} options={[
                    {
                        label: t("PREFIX"),
                        value: "prefix"
                    },
                    {
                        label: t("LITERAL"),
                        value: "literal"
                    }
                ]} disabled={disabled}/><div className={module3175.desc}>{t("RESOURCE_MATCHING_MODE_DESC")}</div></div><div className={module3(module3175.inputItem, module3175.wide, {
                    "form-item": s,
                    "error-item": s
                })}><div>{t("RESOURCE_NAME")}</div><module186.Input defaultValue={module26(permissionRule, "resource.name")} onChange={this.onChange("resource.name")} disabled={disabled} maxLength={1000} placeholder=" "/><div className={module3175.desc}>{t("")}</div>{s && <div className="form-item-error">{t("KAFKA_USER_RESOURCE_NAME_EMPTY_ERROR")}</div>}</div></div><div className={module3175.cardRow}><div className={module3175.inputItem}><div>{t("OPERATION")}</div><module186.Select value={module26(permissionRule, "operation")} onChange={this.onChange("operation")} options={options}/><div className={module3175.desc}>{t("OPERATION_DESC")}</div></div><div className={module3175.inputItem}><div>{t("TYPE")}</div><module186.Select value={module26(permissionRule, "type")} onChange={this.onChange("type")} options={[
                    {
                        label: t("ALLOW"),
                        value: "allow"
                    }
                ]} disabled/><div className={module3175.desc}>{t("RULE_TYPE_DESC")}</div></div></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
