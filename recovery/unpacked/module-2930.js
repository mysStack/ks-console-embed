import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-75.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module862 from "./module-862.js";
import module60 from "./module-60.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module2931 from "./module-2931.js";
const _ = ((e)=>{
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
        e.state = {
            editContainer: ""
        };
        e.showEdit = function(t) {
            const e_props = e.props;
            const { onSelect, cluster } = e_props;
            e.setState({
                editContainer: t.clusterName
            }, function() {
                onSelect(cluster);
            });
        };
        e.handleEdit = function({ data }) {
            const e_props = e.props;
            const { cluster, formTemplate, onChange } = e_props;
            const c = [];
            data.ports.forEach((e)=>{
                if (e.servicePort) {
                    c.push({
                        name: e.name,
                        protocol: e.protocol,
                        port: e.servicePort,
                        targetPort: e.containerPort
                    });
                }
            });
            const clusterOverrides = [
                {
                    path: "/spec/ports",
                    value: c
                }
            ];
            const i = module26(formTemplate, "spec.overrides", []);
            const f = i.find((e)=>e.clusterName === cluster);
            if (f) {
                f.clusterOverrides = module862([].concat(clusterOverrides, module61(f.clusterOverrides || [])), "path");
            } else {
                i.push({
                    clusterName: cluster,
                    clusterOverrides
                });
            }
            module74(formTemplate, "spec.overrides", i);
            e.setState({
                editContainer: ""
            });
            onChange();
        };
        e.renderContainer = function(formData) {
            const e_props = e.props;
            const { children, selected } = e_props;
            const editContainer = e.state.editContainer;
            return module553.default.createElement("div", {
                key: formData.name,
                className: module3(module2931.wrapper, module31({}, module2931.selected, selected))
            }, children({
                ...e.props,
                containerType: "worker",
                formData,
                isEdit: editContainer === formData.clusterName,
                showEdit: e.showEdit,
                onEdit: e.handleEdit
            }));
        };
        return e;
    }
    module37(a, [
        {
            key: "getContainer",
            value: function(value) {
                const props = this.props;
                const { cluster, formTemplate } = props;
                const n = module26(formTemplate, "spec.overrides", []).find((e)=>e.clusterName === cluster) || {};
                const l = {
                    path: "/spec/ports",
                    value
                };
                if (n && !module63(n.clusterOverrides)) {
                    n.clusterOverrides.forEach((e)=>{
                        if (e && e.path.startsWith("/spec/ports")) {
                            let t = e.value;
                            if (!(!module63(t) && module60(t))) {
                                t = module26(formTemplate, "spec.template.spec.ports");
                            }
                            module74(l, "value", t);
                        }
                    });
                }
                const ports = l.value.map((e)=>({
                        name: e.name,
                        protocol: e.protocol,
                        servicePort: e.port,
                        containerPort: e.targetPort
                    }));
                return {
                    clusterName: cluster,
                    ports
                };
            }
        },
        {
            key: "render",
            value: function() {
                const formTemplate = this.props.formTemplate;
                const t = module26(formTemplate, "spec.template.spec.ports", []);
                const a = this.getContainer(t);
                return module553.default.createElement(module553.default.Fragment, null, this.renderContainer(a, "worker"));
            }
        }
    ]);
    return a;
})(module553.Component);
export default _;
