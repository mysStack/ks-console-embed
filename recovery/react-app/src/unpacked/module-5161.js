import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module198 from "unpacked/module-198.js";
import module195 from "unpacked/module-195.js";
import module63 from "unpacked/module-63.js";
import { Component } from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import { Provider, inject } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module789 from "components/Base/Avatar";
import Module791 from "components/Base/Text";
import Module5162 from "unpacked/module-5162.js";
import module5164 from "unpacked/module-5164.js";
const D = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.getEnabledOperations = function() {
            const operations = e.props.operations;
            return (operations === undefined ? [] : operations).filter((t)=>!(module198(t, "show") && !t.show) && (!t.action || e.enabledActions.includes(t.action)));
        };
        e.renderNav = function() {
            const breadcrumbs = e.props.breadcrumbs;
            if (module63(breadcrumbs)) {
                return null;
            }
            const a = breadcrumbs[0];
            return <><Link to={a.url} className={module5164.back}><module186.Icon name="chevron-left" size={20}/></Link>{a.label}</>;
        };
        e.renderAttributes = function() {
            const attrs = e.props.attrs;
            if (module63(attrs)) {
                return null;
            }
            return <ul className={module5164.attrs}>{attrs.map(({ name, value, show })=>{
                if (show === undefined || show) {
                    return <li key={name}><Module791 title={value ?? "-"} description={name}/></li>;
                }
                return null;
            })}</ul>;
        };
        e.renderBtnGroup = function() {
            const operations = e.props.operations;
            if (module63(operations)) {
                return null;
            }
            return <Module5162 options={operations} limit={0}/>;
        };
        return e;
    }
    module37(a, [
        {
            key: "getEnabledRoutes",
            value: function() {
                const routes = this.props.routes;
                const cluster = this.props.match.params.cluster;
                return routes.filter((e)=>{
                    if (e.ksModule) {
                        return (module195(e.ksModule) ? [
                            e.ksModule
                        ] : e.ksModule).every((e)=>globals.app.hasKSModule(e));
                    }
                    return !e.clusterModule || (module195(e.clusterModule) ? [
                        e.clusterModule
                    ] : e.clusterModule).every((e)=>globals.app.hasClusterModule(cluster, e));
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { stores, children, avatar, name, desc, icon } = props;
                return <Provider {...this.stores} {...stores}><div className={module5164.detail}><div className={module5164.header}>{this.renderNav()}</div><div className={module5164.body}><div className={module5164.baseInfo}><Module789 className={module5164.avatar} avatar={avatar} title={name} icon={icon} desc={desc} noLink/>{this.renderBtnGroup()}</div>{this.renderAttributes()}<div className={module5164.content}>{children}</div></div></div></Provider>;
            }
        },
        {
            key: "authKey",
            get: function() {
                return this.props.authKey || this.props.module;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const params = this.props.match.params;
                const { namespace, ...rest } = params;
                return globals.app.getActions({
                    module: this.authKey,
                    ...rest,
                    project: namespace
                });
            }
        }
    ]);
    return a;
})(Component);
const k = inject("rootStore")(D);
export default k;
const C = D;
export { C as Component };
