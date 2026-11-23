import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
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
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module1301 from "unpacked/module-1301.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { observer } from "unpacked/module-239.js";
import { compareVersion } from "utils/index";
import module1565 from "stores/network/ippool";
import module1103 from "unpacked/module-1103.js";
let u;
const C = function(e) {
    return module26(e, "disabled", false) !== true;
};
const D = (e)=>function(t) {
        return module26(t, "status.unallocated", 0) >= e;
    };
const k = observer(u = ((e)=>{
    module55(r, e);
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
        e.store = e.props.isEdgewize ? new module1565 : new module1103;
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const props = this.props;
                const { cluster, namespace } = props;
                this.store.fetchList({
                    cluster,
                    namespace,
                    limit: -1
                });
            }
        },
        {
            key: "render",
            value: function() {
                const options = this.options;
                if (module63(options)) {
                    return null;
                }
                return module553.default.createElement(module186.Form.Item, {
                    label: t("POD_IP_POOL")
                }, module553.default.createElement(module1301, {
                    isOutdated: this.isOutdated,
                    type: "array",
                    name: `${this.prefix}metadata.annotations["cni.projectcalico.org/ipv4pools"]`,
                    list: options,
                    icon: "eip-group",
                    hideColumns: [
                        "workspace"
                    ]
                }));
            }
        },
        {
            key: "isOutdated",
            get: function() {
                const cluster = this.props.cluster;
                const t = module26(globals, `clusterConfig.${cluster}.ksVersion`);
                return compareVersion(t, "3.4.0") < 0;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.prefix || "spec.template.";
            }
        },
        {
            key: "options",
            get: function() {
                const replicas = this.props.replicas;
                const t = replicas === undefined ? 0 : replicas;
                return this.store.list.data.filter((e)=>[
                        C,
                        D(t)
                    ].every((t)=>t(e))).map((e)=>({
                        ...e,
                        label: e.name,
                        value: e.name
                    }));
            }
        }
    ]);
    return r;
})(module553.Component)) || u;
export default k;
