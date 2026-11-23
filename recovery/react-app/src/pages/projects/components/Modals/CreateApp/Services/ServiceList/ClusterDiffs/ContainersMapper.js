import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-75.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module136 from "unpacked/module-136.js";
import module63 from "unpacked/module-63.js";
import * as module553 from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module2613 from "unpacked/module-2613.js";
const b = ((e)=>{
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
        e.renderContainer = function(container_1, a, containerType) {
            const e_props = e.props;
            const { children, selected } = e_props;
            const container = e.getContainer({
                container: container_1,
                index: a,
                containerType
            });
            return module553.default.createElement("div", {
                key: container_1.name,
                className: module3(module2613.wrapper, module31({}, module2613.selected, selected))
            }, children({
                ...e.props,
                index: a,
                key: a,
                containerType: "worker",
                container
            }));
        };
        return e;
    }
    module37(a, [
        {
            key: "getContainer",
            value: function({ index, container, containerType }) {
                const props = this.props;
                const { cluster, formTemplate } = props;
                const o = module26(formTemplate, "spec.overrides", []).find((e)=>e.clusterName === cluster) || {};
                const i = module136(container);
                const c = `/spec/template/spec/${containerType === "init" ? "init_containers" : "containers"}/${index}/`;
                if (o && !module63(o.clusterOverrides)) {
                    o.clusterOverrides.forEach((e)=>{
                        if (e.path.startsWith(c)) {
                            const t = e.path.replace(c, "").replace(/\//g, ".");
                            module74(i, t, e.value);
                        }
                    });
                }
                return i;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const formTemplate = this.props.formTemplate;
                const a = module26(formTemplate, "spec.template.spec.containers", []);
                const r = module26(formTemplate, "spec.template.spec.init_containers", []);
                return module553.default.createElement(module553.default.Fragment, null, a.map((t, a)=>_this.renderContainer(t, a, "worker")), r.map((t, a)=>_this.renderContainer(t, a, "init")));
            }
        }
    ]);
    return a;
})(module553.Component);
export default b;
