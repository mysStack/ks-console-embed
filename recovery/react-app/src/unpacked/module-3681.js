import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { inject, observer } from "unpacked/module-239.js";
import module1207 from "unpacked/module-1207.js";
import module1789 from "unpacked/module-1789.js";
import module1129 from "unpacked/module-1129.js";
import { Component } from "unpacked/module-1790.js";
let a;
const y = {
    limit: 10,
    page: 1,
    sort_type: "desc"
};
const v = inject("rootStore")(a = observer(a = ((Component_1)=>{
    module55(r, Component_1);
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
    })(r);
    function r(...a) {
        let e;
        module36(this, r);
        e = t.call(this, ...a);
        e.sourceMap = {
            node: {
                store: new module1207({
                    ...y,
                    cluster: e.cluster
                }),
                icon: "nodes",
                name: "node",
                desc: "host_ip",
                url: function(t) {
                    return `/clusters/${e.cluster}/nodes/${t}`;
                }
            },
            pod: {
                store: new module1789({
                    ...y,
                    cluster: e.cluster
                }),
                icon: "pod",
                name: "pod",
                desc: "namespace",
                descLabel: "PROJECTS",
                url: function(t, r) {
                    return `/clusters/${e.cluster}/projects/${r}/pods/${t}`;
                }
            },
            project: {
                store: new module1129({
                    ...y,
                    cluster: e.cluster
                }),
                icon: "project",
                name: "namespace",
                desc: "workspace",
                descLabel: "WORKSPACES",
                url: function(t) {
                    return `/clusters/${e.cluster}/projects/${t}`;
                }
            }
        };
        return e;
    }
    return r;
})(Component)) || a) || a;
export default v;
