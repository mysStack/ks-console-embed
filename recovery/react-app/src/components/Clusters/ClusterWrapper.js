import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module321 from "unpacked/module-321.js";
import * as module553 from "unpacked/module-553.js";
import { getDisplayNameNew } from "utils/index";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PROVIDER_ICON } from "utils/constants";
import module2554 from "unpacked/module-2554.js";
const g = ((e)=>{
    module55(a, e);
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.renderItem = function(t, a) {
            const r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
            const n = module321(e.props.clustersDetail, "name");
            const children = e.props.children;
            const o = n[t.name] || t;
            return module553.default.createElement("span", {
                className: r ? module2554.tagItem : "",
                title: getDisplayNameNew(o, false),
                key: `${o.name}-${a}`
            }, module553.default.createElement(module186.Tag, {
                key: o.name,
                type: r ? "info" : CLUSTER_GROUP_TAG_TYPE[o.group]
            }, module553.default.createElement(module186.Icon, {
                name: CLUSTER_PROVIDER_ICON[o.provider] || "kubernetes",
                size: 16,
                ...!(CLUSTER_GROUP_TAG_TYPE[o.group] !== "default" || r) ? {
                    type: "light"
                } : {}
            }), children ? children(o) : getDisplayNameNew(o)));
        };
        e.renderItem1 = function(t, a) {
            return e.renderItem(t, a, false);
        };
        e.renderTooltip = function(t, a) {
            return e.renderItem(t, a, true);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const clusters = this.props.clusters;
                const t = clusters === undefined ? [] : clusters;
                const a = module321(this.props.clustersDetail, "name");
                const r = t.filter((e)=>a[e.name]);
                const n = r.slice(2);
                const l = r.slice(0, 2);
                return module553.default.createElement("div", {
                    className: module2554.wrapper
                }, module553.default.createElement("div", {
                    className: module2554.tags
                }, l.map(this.renderItem1), n.length ? module553.default.createElement(module186.Tooltip, {
                    content: module553.default.createElement("div", {
                        className: `flexbox items-center ${module2554.tooltipContent}`
                    }, n.map(this.renderTooltip))
                }, module553.default.createElement(module186.Tag, {
                    type: "primary"
                }, r.length)) : null, r.length === 0 && "-"));
            }
        }
    ]);
    return a;
})(module553.Component);
export default g;
