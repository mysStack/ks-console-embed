"use strict";
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-16.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-23.js");
require("./module-17.js");
require("./module-7.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("./module-12.js");
require("./module-45.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-28.js");
require("./module-42.js");
require("./module-16.js");
require("./module-34.js");
require("./module-15.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-57.js");
require("./module-17.js");
require("./module-7.js");
const n = module20(require("./module-41.js"));
const l = module20(require("./module-31.js").default);
require("./module-41.js");
let u;
let o;
const i = module20(require("utils/babel-helpers/asyncToGenerator").default);
const c = module20(require("./module-65.js").default);
const s = module20(require("./module-36.js").default);
const f = module20(require("./module-37.js").default);
const d = module20(require("./module-88.js").default);
const p = module20(require("./module-55.js").default);
const m = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const h = module20(require("./module-51.js"));
const v = module20(require("./module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("./module-14.js");
const module72 = require("utils/constants");
u = ((e)=>{
    p.default(l, e);
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
            let a;
            const r = h.default(e);
            if (t) {
                const n = h.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return m.default(this, a);
        };
    })(l);
    function l(...a) {
        let e;
        s.default(this, l);
        e = r.call(this, ...a);
        c.default(e, "nodegroupEdgeNodeDetail", o, d.default(e));
        return e;
    }
    f.default(l, [
        {
            key: "getNodeGroupPath",
            value: function(e) {
                const nodegroups = module72.API_VERSIONS.nodegroups;
                const { cluster, nodegroup, name } = e;
                let l = nodegroups;
                if (cluster) {
                    l += `/klusters/${cluster}`;
                }
                if (nodegroup) {
                    l += `/nodegroups/${nodegroup}`;
                }
                if (name) {
                    l += `/nodes/${name}`;
                }
                return l;
            }
        },
        {
            key: "fetchNodeGroupEdgeNodeDetail",
            value: async function(t) {
                let a;
                let r;
                let l;
                a = this.getNodeGroupPath(t);
                r = await request.get(a);
                l = {
                    ...t,
                    ...this.mapper(r),
                    kind: "Node"
                };
                this.nodegroupEdgeNodeDetail = l;
                return l;
            }
        },
        {
            key: "removeNodeGroupEdgeNode",
            value: async function(t) {
                let a;
                a = this.getNodeGroupPath(t);
                await request.delete(a);
            }
        }
    ]);
    return l;
})(module20(require("stores/node")).default);
o = v.default(u.prototype, "nodegroupEdgeNodeDetail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
v.default(u.prototype, "fetchNodeGroupEdgeNodeDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchNodeGroupEdgeNodeDetail"), u.prototype);
v.default(u.prototype, "removeNodeGroupEdgeNode", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "removeNodeGroupEdgeNode"), u.prototype);
exports.default = u;
