import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import Module793 from "unpacked/module-793.js";
import { renderRoutes } from "utils/router.config";
import module908 from "stores/pv";
import module4118 from "unpacked/module-4118.js";
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.pv = new module908;
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.pv.getKsVersion(this.props.match.params);
            }
        },
        {
            key: "renderBanner",
            value: function() {
                if (this.pv.ksVersion >= 3.2) {
                    return <Module793 {...this.bannerProps} tips={this.tips} routes={this.routes}/>;
                }
                return <Module793 {...this.bannerProps} tips={this.tips}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <>{this.renderBanner()}{renderRoutes(module4118)}</>;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("WHAT_IS_STORAGE_CLASS_Q"),
                        description: t("WHAT_IS_STORAGE_CLASS_A")
                    },
                    {
                        title: t("WHAT_IS_LOCAL_VOLUME_Q"),
                        description: t("WHAT_IS_LOCAL_VOLUME_A")
                    }
                ];
            }
        },
        {
            key: "bannerProps",
            get: function() {
                return {
                    className: "margin-b12",
                    description: t("PERSISTENT_VOLUME_CLAIM_DESC"),
                    module: "persistentvolumeclaims",
                    title: t("PERSISTENT_VOLUME_CLAIM_PL")
                };
            }
        },
        {
            key: "routes",
            get: function() {
                return module4118.filter((e)=>!!e.title).map((e)=>({
                        ...e,
                        name: e.path.split("/").pop()
                    }));
            }
        }
    ]);
    return r;
})(Component)) || u) || u;
export default b;
