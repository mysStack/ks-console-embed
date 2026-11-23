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
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-75.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module136 from "unpacked/module-136.js";
import module63 from "unpacked/module-63.js";
import module862 from "unpacked/module-862.js";
import * as module553 from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module2572 from "unpacked/module-2572.js";
const O = ((e)=>{
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
                editContainer: t.name
            }, function() {
                onSelect(cluster);
            });
        };
        e.handleEdit = function({ index, containerType, data }) {
            const e_props = e.props;
            const { cluster, withService, formTemplate, onChange } = e_props;
            const f = `spec.template.spec.${containerType === "init" ? "init_containers" : "containers"}.${index}`;
            const m = [];
            const g = {};
            Object.keys(data).forEach((e)=>{
                const t = `${f}.${e}`;
                if (e === "pullSecret") {
                    if (data[e]) {
                        g[data.name] = data.pullSecret;
                    }
                } else {
                    m.push({
                        path: `/${t.replace(/\./g, "/")}`,
                        value: data[e]
                    });
                }
            });
            const y = module26(formTemplate, "spec.overrides", []);
            const E = y.find((e)=>e.clusterName === cluster);
            if (!module63(g)) {
                const D = E.clusterOverrides.find((e)=>e.path === "/spec/template/spec/imagePullSecrets")?.value ?? [];
                const k = Object.values(g).map((name)=>({
                        name
                    }));
                const N = [].concat(module61(D), module61(k));
                m.push({
                    path: "/spec/template/spec/imagePullSecrets".replace(/\n/g, ""),
                    value: N
                });
                const T = E.clusterOverrides.find((e)=>e.path === "/spec/template/metadata/annotations/'kubesphere.io/imagepullsecrets'")?.value ?? "{}";
                const R = JSON.parse(T);
                const I = JSON.stringify({
                    ...R,
                    ...g
                });
                m.push({
                    path: "/spec/template/metadata/annotations/'kubesphere.io/imagepullsecrets'".replace(/\n/g, ""),
                    value: I
                });
            }
            if (E) {
                E.clusterOverrides = module862([].concat(m, module61(E.clusterOverrides || [])), "path");
            } else {
                y.push({
                    clusterName: cluster,
                    clusterOverrides: m
                });
            }
            module74(formTemplate, "spec.overrides", y);
            if (withService && data.ports) {
                e.updateService(data);
            }
            e.setState({
                editContainer: ""
            });
            if (onChange) {
                onChange();
            }
        };
        e.updateService = function(t) {
            const e_props = e.props;
            const { cluster, serviceTemplate } = e_props;
            const l = [];
            t.ports.forEach((e)=>{
                if (e.servicePort) {
                    l.push({
                        name: e.name,
                        protocol: e.protocol,
                        port: e.servicePort,
                        targetPort: e.containerPort
                    });
                }
            });
            const o = [
                {
                    path: "/spec/ports",
                    value: l
                }
            ];
            const i = module26(serviceTemplate, "spec.overrides", []);
            const c = i.find((e)=>e.clusterName === cluster);
            if (c) {
                c.clusterOverrides = module862([].concat(o, module61(c.clusterOverrides || [])), "path");
            } else {
                i.push({
                    clusterName: cluster,
                    clusterOverrides: o
                });
            }
            module74(serviceTemplate, "spec.overrides", i);
        };
        e.renderContainer = function(container, a, containerType) {
            const e_props = e.props;
            const { children, selected } = e_props;
            const editContainer = e.state.editContainer;
            const formData = e.getContainer({
                container,
                index: a,
                containerType
            });
            return module553.default.createElement("div", {
                key: container.name,
                className: module3(module2572.wrapper, module31({}, module2572.selected, selected))
            }, children({
                ...e.props,
                index: a,
                key: a,
                containerType: "worker",
                formData,
                isEdit: editContainer === container.name,
                showEdit: e.showEdit,
                onEdit: e.handleEdit
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
                const a = module26(formTemplate, "spec.template.spec.template.spec.containers", []);
                const r = module26(formTemplate, "spec.template.spec.template.spec.init_containers", []);
                return module553.default.createElement(module553.default.Fragment, null, a.map((t, a)=>_this.renderContainer(t, a, "worker")), r.map((t, a)=>_this.renderContainer(t, a, "init")));
            }
        }
    ]);
    return a;
})(module553.Component);
export default O;
