"use strict";
require("./module-15.js");
const module20 = require("./module-20.js").default;
require("./module-5.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-17.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
const l = module20(require("./module-36.js").default);
const u = module20(require("./module-37.js").default);
const o = module20(require("./module-55.js").default);
const i = module20(require("./module-56.js").default);
const c = module20(require("./module-51.js"));
require("./module-45.js");
require("./module-5.js");
require("./module-30.js").default;
require("./module-42.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-57.js");
require("./module-17.js");
require("./module-38.js");
require("./module-32.js");
const s = module20(require("./module-553.js"));
const module186 = require("./module-186.js");
const d = module20(require("./module-1291.js"));
const p = module20(require("./module-483.js"));
const m = require("./module-52.js").lazy(function() {
    return import("./module-776.js");
});
const h = ((e)=>{
    o.default(r, e);
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
            const r = c.default(e);
            if (t) {
                const n = c.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return i.default(this, a);
        };
    })(r);
    function r(...n) {
        let e;
        l.default(this, r);
        e = a.call(this, ...n);
        e.rootStore = new p.default;
        e.envError = "";
        e.handleErrorStatus = function(t = "") {
            e.envError = t;
        };
        e.envValidator = function(t, a, r) {
            if (e.envError === "") {
                r();
            }
        };
        return e;
    }
    u.default(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                m().then((t)=>_this.rootStore.registerActions(t.default));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { checkable, namespace, isFederated, isEdgeWize, cluster, projectDetail } = props;
                return s.default.createElement(module186.Form.Group, {
                    label: t("ENVIRONMENT_VARIABLE_PL"),
                    desc: t("CONTAINER_ENVIRONMENT_DESC"),
                    checkable
                }, s.default.createElement(module186.Form.Item, {
                    rules: [
                        {
                            validator: this.envValidator
                        }
                    ]
                }, s.default.createElement(d.default, {
                    isEdgeWize,
                    rootStore: this.rootStore,
                    name: `${this.prefix}env`,
                    namespace,
                    isFederated,
                    cluster,
                    projectDetail,
                    handleInputError: this.handleErrorStatus
                })));
            }
        },
        {
            key: "prefix",
            get: function() {
                const prefix = this.props.prefix;
                if (prefix) {
                    return `${prefix}.`;
                }
                return "";
            }
        }
    ]);
    return r;
})(s.default.Component);
exports.default = h;
h.defaultProps = {
    prefix: "",
    checkable: true
};
