"use strict";
require("unpacked/module-15.js");
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-5.js");
require("unpacked/module-18.js");
require("unpacked/module-4.js");
require("unpacked/module-23.js");
require("unpacked/module-17.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("unpacked/module-45.js");
require("unpacked/module-5.js");
require("unpacked/module-18.js");
require("unpacked/module-42.js");
require("unpacked/module-4.js");
require("unpacked/module-23.js");
require("unpacked/module-57.js");
require("unpacked/module-17.js");
let l;
const o = module20(require("unpacked/module-36.js").default);
const u = module20(require("unpacked/module-37.js").default);
const c = module20(require("unpacked/module-55.js").default);
const s = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const i = module20(require("unpacked/module-51.js"));
const f = module20(require("unpacked/module-553.js"));
const d = module20(require("unpacked/module-26.js").default);
const p = module20(require("unpacked/module-247.js").default);
const module186 = require("unpacked/module-186.js");
const module72 = require("utils/constants");
const h = module20(require("stores/storageClass"));
const module14 = require("unpacked/module-14.js");
const y = require("unpacked/module-239.js").observer(l = ((e)=>{
    c.default(r, e);
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
            const r = i.default(e);
            if (t) {
                const n = i.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return s.default(this, a);
        };
    })(r);
    function r(...n) {
        let e;
        o.default(this, r);
        e = a.call(this, ...n);
        e.storageClass = new h.default;
        return e;
    }
    u.default(r, [
        {
            key: "componentDidMount",
            value: function() {
                const cluster = this.props.cluster;
                this.storageClass.fetchList({
                    cluster,
                    limit: -1
                });
            }
        },
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                return f.default.createElement("div", null, f.default.createElement(module186.Form, {
                    data: this.formTemplate,
                    ref: formRef
                }, f.default.createElement(module186.Columns, null, f.default.createElement(module186.Column, null, f.default.createElement(module186.Form.Item, {
                    label: t("PROVISIONER"),
                    desc: t("SNAPSHOT_CLASS_PROVISIONER_DESC"),
                    rules: [
                        {
                            required: true,
                            message: t("SNAPSHOT_CLASS_PROVISIONER_EMPTY_DESC")
                        }
                    ]
                }, f.default.createElement(module186.Select, {
                    name: "driver",
                    options: this.provisionerOption
                }))), f.default.createElement(module186.Column, null, f.default.createElement(module186.Form.Item, {
                    label: t("DELETION_POLICY")
                }, f.default.createElement(module186.Select, {
                    name: "deletionPolicy",
                    defaultValue: "Delete",
                    options: this.options
                }))))));
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return d.default(formTemplate, module72.MODULE_KIND_MAP[module], formTemplate);
            }
        },
        {
            key: "options",
            get: function() {
                return [
                    {
                        label: "Delete",
                        value: "Delete"
                    },
                    {
                        label: "Retain",
                        value: "Retain"
                    }
                ];
            }
        },
        {
            key: "provisionerOption",
            get: function() {
                const e = module14.toJS(this.storageClass.list.data).map((e)=>e.provisioner);
                return p.default(e).map((e)=>({
                        label: e,
                        value: e
                    }));
            }
        }
    ]);
    return r;
})(f.default.Component)) || l;
exports.default = y;
