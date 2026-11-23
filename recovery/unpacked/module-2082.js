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
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module830 from "./module-830.js";
import module439 from "./module-439.js";
import module189 from "./module-189.js";
import module2084 from "./module-2084.js";
import module1486 from "./module-1486.js";
const E = ((e)=>{
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.store = new module439;
        e.handleSelectChange = function(t) {
            const e_props = e.props;
            const a_onChange = e_props.onChange;
            e_props.handleChangeNs(t);
            a_onChange(t.map((e)=>module189(e, "id")));
        };
        e.checkItemValid = function(e) {
            return !!(e.cluster && e.cluster !== "" && e.names && e.names.length > 0);
        };
        e.fetchNsList = function({ cluster, workspace }) {
            return e.store.fetchList({
                cluster,
                workspace,
                labelSelector: "kubefed.io/managed!=true, kubesphere.io/kubefed-host-namespace!=true",
                limit: -1
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                return module553.default.createElement("div", {
                    className: module1486.wrapper
                }, module553.default.createElement(module830, {
                    value: this.props.value.map((e, id)=>({
                            ...e,
                            id
                        })),
                    onChange: this.handleSelectChange,
                    checkItemValid: this.checkItemValid,
                    itemType: "object"
                }, module553.default.createElement(module2084, {
                    clusterOptions: this.clusterOptions,
                    fetchNsList: this.fetchNsList,
                    allWorkspace: this.props.allWorkspace,
                    workloadType: this.props.workloadType
                })));
            }
        },
        {
            key: "clusterOptions",
            get: function() {
                return this.props.allClusters;
            }
        }
    ]);
    return a;
})(module553.Component);
export default E;
