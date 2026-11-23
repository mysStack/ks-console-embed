import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module14 from "./module-14.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import Module833 from "./module-833.js";
import module186 from "./module-186.js";
import module3506 from "./module-3506.js";
import module3507 from "./module-3507.js";
import module3509 from "./module-3509.js";
import { CARD_CONFIG } from "./module-944.js";
let l;
let u;
let o;
let i;
let c;
const I = observer((u = ((Component_1)=>{
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
        module65(e, "type", o, module88(e));
        module65(e, "nav", i, module88(e));
        e.renderEmpty = function() {
            return <div className={module3506.empty}><Module833 className={module3506.empty__Container} title={t("USER_DASHBOARD_EMPTY_TITLE")} desc={t("USER_DASHBOARD_EMPTY_DESC")}/></div>;
        };
        e.contentConfig = function() {
            return {
                home: {
                    Component: module3507,
                    props: {
                        handleSelected: e.handleSelected
                    }
                },
                detail: {
                    Component: module3509,
                    props: {
                        handleBack: e.handleBack
                    }
                },
                empty: {
                    Component: e.renderEmpty
                }
            };
        };
        module65(e, "handleSelected", c, module88(e));
        e.handleBack = function() {
            if (e.isWorkspace && e.isCluster) {
                e.type = undefined;
            }
        };
        e.renderContent = function() {
            const t = e.contentConfig();
            if (!e.type) {
                let a = CARD_CONFIG;
                if (e.isCluster && !e.isWorkspace) {
                    a = CARD_CONFIG.filter((e)=>e.type === "cluster");
                    e.type = "cluster";
                    return t.detail;
                }
                if (e.isWorkspace && !e.isCluster) {
                    if (module63(globals.user.workspaces)) {
                        return t.empty;
                    }
                    a = CARD_CONFIG.filter((e)=>e.type === "workspaces");
                    e.type = "workspaces";
                    return t.detail;
                }
                if (!globals.app.enableAppStore) {
                    a = CARD_CONFIG.filter((e)=>e.type !== "openpitrix");
                }
                module74(t, "home.props.cardConfigRule", a);
                return t.home;
            }
            return t.detail;
        };
        e.renderTitle = function() {
            return <div><module186.Icon size={20} name="wallet" style={{
                marginRight: 7
            }}/><span style={{
                fontSize: 12,
                fontWeight: 600,
                lineHeight: "20px",
                height: "20px"
            }}>{t("RESOURCE_CONSUMPTION_STATISTICS")}</span></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const e = this.renderContent();
                const { Component, props } = e;
                return <div className={module3506.bill} style={{
                    padding: "20px"
                }}>{<Component type={this.type} {...props}/>}</div>;
            }
        },
        {
            key: "isWorkspace",
            get: function() {
                return globals.app.hasPermission({
                    module: "workspaces",
                    action: "view"
                }) || !module63(globals.user.workspaces);
            }
        },
        {
            key: "isCluster",
            get: function() {
                return globals.app.hasPermission({
                    module: "clusters",
                    action: "view"
                });
            }
        }
    ]);
    return r;
})(Component), o = module49(u.prototype, "type", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), i = module49(u.prototype, "nav", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), c = module49(u.prototype, "handleSelected", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.type = t;
        };
    }
}), l = u)) || l;
export default I;
