import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-137.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import module801 from "./module-801.js";
import module74 from "./module-74.js";
import module186 from "./module-186.js";
import module1718 from "./module-1718.js";
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.triggerChange = module801(function(t) {
            e.props.onChange(t);
        }, 500);
        e.handleChange = function(t) {
            return function(a) {
                const r = t.split(".");
                if (r.length > 1) {
                    let n = module26(e.props.value, r[0]);
                    if (n) {
                        module74(n, r[1], a);
                    } else {
                        n = module31({}, r[1], a);
                    }
                    return void e.triggerChange({
                        ...e.props.value,
                        ...module31({}, r[0], n)
                    });
                }
                e.triggerChange({
                    ...e.props.value,
                    ...module31({}, t, a)
                });
            };
        };
        return e;
    }
    module37(r, [
        {
            key: "renderFormItems",
            value: function(e) {
                let t = null;
                switch(e){
                    case "discover_branches":
                        t = this.renderBranchesFormItems();
                        break;
                    case "discover_pr_from_origin":
                        t = this.renderPrOriginFormItems();
                        break;
                    case "discover_pr_from_forks":
                        t = this.renderPrForkFormItems();
                        break;
                    default:
                        t = this.renderTagBranchesFormItems();
                }
                return t;
            }
        },
        {
            key: "renderTagBranchesFormItems",
            value: function() {
                const value = this.props.value;
                return <div><module186.Form.Item label={t("STRATEGY")}><module186.Select name="discover_tags" defaultValue={value.discover_tags} onChange={this.handleChange("discover_tags")} options={[
                    {
                        label: t("ENABLE_TAG_BRANCH_DISCOVERY"),
                        value: true
                    },
                    {
                        label: t("DISABLE_TAG_BRANCH_DISCOVERY"),
                        value: false
                    }
                ]}/></module186.Form.Item></div>;
            }
        },
        {
            key: "renderBranchesFormItems",
            value: function() {
                const value = this.props.value;
                return <div><module186.Form.Item label={t("STRATEGY")}><module186.Select name="discover_branches" defaultValue={value.discover_branches} onChange={this.handleChange("discover_branches")} options={[
                    {
                        label: t("EXCLUDE_PR_BRANCHES"),
                        value: 1
                    },
                    {
                        label: t("ONLY_PR_BRANCHES"),
                        value: 2
                    },
                    {
                        label: t("ALL_BRANCHES"),
                        value: 3
                    }
                ]}/></module186.Form.Item></div>;
            }
        },
        {
            key: "renderPrOriginFormItems",
            value: function() {
                const value = this.props.value;
                return <div><module186.Form.Item label={t("PULL_STRATEGY")}><module186.Select name="discover_pr_from_origin" defaultValue={value.discover_pr_from_origin} onChange={this.handleChange("discover_pr_from_origin")} options={[
                    {
                        label: t("OPTIONS_PR_PARAMS_1"),
                        value: 1
                    },
                    {
                        label: t("OPTIONS_PR_PARAMS_2"),
                        value: 2
                    },
                    {
                        label: t("OPTIONS_PR_PARAMS_3"),
                        value: 3
                    }
                ]}/></module186.Form.Item></div>;
            }
        },
        {
            key: "renderPrForkFormItems",
            value: function() {
                const value = this.props.value;
                return <div><module186.Columns><module186.Column><module186.Form.Item label={t("PULL_STRATEGY")}><module186.Select name="discover_pr_from_forks.strategy" defaultValue={value.discover_pr_from_forks && value.discover_pr_from_forks.strategy} onChange={this.handleChange("discover_pr_from_forks.strategy")} options={[
                    {
                        label: t("OPTIONS_PR_PARAMS_1"),
                        value: 1
                    },
                    {
                        label: t("OPTIONS_PR_PARAMS_2"),
                        value: 2
                    },
                    {
                        label: t("OPTIONS_PR_PARAMS_3"),
                        value: 3
                    }
                ]}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("TRUSTED_USERS")}><module186.Select name="discover_pr_from_forks.trust" defaultValue={value.discover_pr_from_forks && value.discover_pr_from_forks.trust} onChange={this.handleChange("discover_pr_from_forks.trust")} options={[
                    {
                        label: t("CONTRIBUTORS"),
                        value: 1
                    },
                    {
                        label: t("EVERYONE"),
                        value: 2
                    },
                    {
                        label: t("USERS_WITH_PERMISSION"),
                        value: 3
                    },
                    {
                        label: t("NOBODY"),
                        value: 4
                    }
                ]}/></module186.Form.Item></module186.Column></module186.Columns></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { value, onDelete, menuData } = props;
                const l = Object.keys(value)[0];
                return <div className={module1718.itemWrapper}><div className={module1718.itemTitle}><p><strong>{t(menuData[l].replace(/\s/g, "_").toUpperCase())}</strong></p><module186.Button className={module1718.delete} type="flat" icon="trash" onClick={onDelete}/></div>{l && this.renderFormItems(l)}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    value: module1.object,
    onChange: module1.func,
    onDelete: module1.func
};
b.defaultProps = {
    value: {},
    onChange: function() {},
    onDelete: function() {}
};
