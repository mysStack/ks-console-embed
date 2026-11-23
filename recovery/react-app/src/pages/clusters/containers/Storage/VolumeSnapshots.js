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
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import { renderRoutes } from "utils/router.config";
import module839 from "stores/volume";
import module3713 from "pages/clusters/containers/Storage/VolumeSnapshots/routes";
let o;
const _ = inject("rootStore")(o = observer(o = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((e)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.store = new module839;
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.store.getKsVersion(this.props.match.params);
            }
        },
        {
            key: "render",
            value: function() {
                return <>{renderRoutes(module3713)}</>;
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
                return module3713.filter((e)=>!!e.title).map((e)=>({
                        ...e,
                        name: e.path.split("/").pop()
                    }));
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default _;
