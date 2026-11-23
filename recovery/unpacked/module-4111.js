import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-137.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import Module793 from "./module-793.js";
import { renderRoutes } from "./module-317.js";
import module839 from "./module-839.js";
import module4112 from "./module-4112.js";
let u;
const b = inject("rootStore")(u = observer(u = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.store = new module839;
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.store.getKsVersion(this.props.match.params);
            }
        },
        {
            key: "renderBanner",
            value: function() {
                if (this.store.ksVersion >= 3.3) {
                    return <Module793 {...this.bannerProps} tips={this.tips} routes={this.routes}/>;
                }
                return <Module793 {...this.bannerProps}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <>{this.renderBanner()}{renderRoutes(module4112)}</>;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("WHAT_IS_VOLUME_SNAPSHOT_CLASS_Q"),
                        description: t("WHAT_IS_VOLUME_SNAPSHOT_CLASS_A")
                    },
                    {
                        title: t("WHAT_IS_VOLUME_SNAPSHOT_CONTENT_Q"),
                        description: t("WHAT_IS_VOLUME_SNAPSHOT_CONTENT_A")
                    }
                ];
            }
        },
        {
            key: "bannerProps",
            get: function() {
                return {
                    className: "margin-b12",
                    description: t("VOLUME_SNAPSHOT_DESC"),
                    module: "VOLUME_SNAPSHOT",
                    title: t("VOLUME_SNAPSHOT_PL"),
                    icon: "snapshot"
                };
            }
        },
        {
            key: "routes",
            get: function() {
                return module4112.filter((e)=>!!e.title).map((e)=>({
                        ...e,
                        name: e.path.split("/").pop()
                    }));
            }
        }
    ]);
    return r;
})(Component)) || u) || u;
export default b;
