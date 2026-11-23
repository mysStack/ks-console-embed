import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module321 from "unpacked/module-321.js";
import module857 from "unpacked/module-857.js";
import module446 from "unpacked/module-446.js";
import module247 from "unpacked/module-247.js";
import { Component } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import Module788 from "components/Base/Modal";
import Module791 from "components/Base/Text";
import Module838 from "components/Base/Indicator";
import { getBrowserLang } from "utils/index";
import Module3321 from "components/Modals/EditAuthorization/CheckItem";
import { ROLE_MODULES_ICON } from "components/Modals/EditAuthorization/constants";
import module1731 from "unpacked/module-1731.js";
let l;
let o;
let u;
const w = observer((u = o = ((Component_1)=>{
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
        let l;
        module36(this, r);
        l = a.call(this, e);
        l.handleOk = function() {
            const basicRoleTemplates = l.props.basicRoleTemplates;
            const t = basicRoleTemplates ? basicRoleTemplates.map((e)=>e.name) : [];
            l.props.onOk(module247([].concat(module61(l.state.roleTemplates), module61(t))));
        };
        l.handleTabChange = function(e) {
            const module = e.currentTarget.dataset.module;
            l.setState({
                currentModule: module
            });
        };
        l.handleCheckChange = function(e) {
            const l_state = l.state;
            const { currentModule, roleModules, groupedTemplates } = l_state;
            const o = roleModules.find((e)=>e.name === currentModule);
            if (o) {
                o.state = groupedTemplates[currentModule].some((t)=>e.includes(t.name)) ? "ENABLED" : "NOT_ENABLED";
            }
            l.setState({
                roleTemplates: e
            });
        };
        const roleTemplatesMap = module321(l.props.roleTemplates, "name");
        const u = module26(l.props.formTemplate, "aggregationRoleTemplates.templateNames", []);
        const groupedTemplates = module857(l.props.roleTemplates, 'labels["iam.kubesphere.io/category"]');
        const roleModules = l.props.roleModules?.map(function(e) {
            return {
                ...e,
                icon: ROLE_MODULES_ICON[e.name] || "templet",
                state: u.some((t)=>module26(roleTemplatesMap[t], 'labels["iam.kubesphere.io/category"]') === e.name) ? "ENABLED" : "NOT_ENABLED"
            };
        })?.filter(function(t) {
            if (e.isEdge) {
                return ![
                    "DevOps Management",
                    "Apps Management"
                ].includes(t.name);
            }
            const a = groupedTemplates[t.name];
            return a && a.length > 0;
        });
        l.state = {
            roleTemplates: u,
            roleModules,
            roleTemplatesMap,
            currentModule: roleModules && roleModules.length > 0 ? roleModules[0].name : "",
            groupedTemplates
        };
        return l;
    }
    module37(r, [
        {
            key: "renderTabs",
            value: function() {
                const _this = this;
                const { roleModules = [], currentModule } = this.state;
                const o = module26(globals.user, "lang") || getBrowserLang();
                return <div className={module1731.tabs}><div className={module1731.title}>{t("CATEGORIES")}</div><div className={module1731.tabsWrapper}>{roleModules.map((a)=><div key={a.name} className={module3(module1731.tab, module31({}, module1731.enabled, currentModule === a.name))} onClick={_this.handleTabChange} data-module={a.name}><Module791 icon={a.icon} title={a.displayName[o] || a.displayName.en} description={currentModule === a.name ? t("CURRENT") : a.state === "ENABLED" ? t("AUTHORIZED") : t("UNAUTHORIZED")}/><Module838 className={module1731.indicator} type={a.state === "ENABLED" ? "running" : "disabled"}/></div>)}</div></div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const state = this.state;
                const { groupedTemplates, roleTemplates, roleTemplatesMap, currentModule } = state;
                const u = module446(groupedTemplates[currentModule] || [], "name");
                return <div className={module1731.content}><div className={module1731.title}>{t("PERMISSION_PL")}</div><div className={module1731.contentWrapper}>{u.map((t)=><Module3321 key={t.name} data={t} roleTemplates={roleTemplates} roleTemplatesMap={roleTemplatesMap} onChange={_this.handleCheckChange}/>)}</div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, visible, onCancel, isSubmitting } = props;
                return <Module788 title={title || t("EDIT_PERMISSIONS")} icon="role" onCancel={onCancel} onOk={this.handleOk} visible={visible} isSubmitting={isSubmitting} fullScreen><div className={module1731.wrapper}>{this.renderTabs()}{this.renderContent()}</div></Module788>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    roleTemplates: module1.array,
    formTemplate: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, o.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default w;
