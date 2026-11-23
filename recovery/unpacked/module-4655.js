import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import { trigger } from "./module-792.js";
import module443 from "./module-443.js";
import Module4656 from "./module-4656.js";
import Module4657 from "./module-4657.js";
import module1445 from "./module-1445.js";
let o;
const O = inject("rootStore", "projectStore")(o = trigger(o = observer(o = ((Component_1)=>{
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
        t.module = e.module;
        t.projectStore = e.projectStore;
        t.serviceStore = new module443;
        t.state = {
            curTab: "inner"
        };
        return t;
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
                    ...a
                });
                this.serviceStore.fetchList({
                    namespace: e_namespace,
                    ...a
                });
            }
        },
        {
            key: "renderTabs",
            value: function() {
                const _this = this;
                const curTab = this.state.curTab;
                return <div className={module1445.tabs}><div className={module3(module1445.tab, curTab === "inner" && module1445.on)} onClick={function() {
                    return _this.setState({
                        curTab: "inner"
                    });
                }}><module186.Icon name="eip-pool" size={40}/><div className={module1445.disc}><div className={module1445.dictitle}>{t("INTERNAL_ALLOWLIST")}</div><div>{t("INTERNAL_ALLOWLIST_DESC")}</div></div></div><div className={module3(module1445.tab, curTab === "outer" && module1445.on)} onClick={function() {
                    return _this.setState({
                        curTab: "outer"
                    });
                }}><module186.Icon name="eip" size={40}/><div className={module1445.disc}><div className={module1445.dictitle}>{t("EXTERNAL_ALLOWLIST")}</div><div>{t("EXTERNAL_ALLOWLIST_DESC")}</div></div></div></div>;
            }
        },
        {
            key: "renderInner",
            value: function() {
                const curTab = this.state.curTab;
                return <><div className={module3({
                    hide: curTab === "outer"
                })}><Module4656 {...this.props}/></div><div className={module3({
                    hide: curTab === "inner"
                })}><Module4657 {...this.props}/></div></>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module1445.wrapper}>{this.renderTabs()}{this.renderInner()}</div>;
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
export default O;
