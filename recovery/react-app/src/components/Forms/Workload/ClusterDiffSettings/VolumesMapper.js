import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
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
import module2576 from "unpacked/module-2576.js";
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
            editVolumeTemplate: ""
        };
        e.showEdit = function(t) {
            const e_props = e.props;
            const { onSelect, cluster } = e_props;
            e.setState({
                editVolumeTemplate: module26(t, "metadata.name")
            }, function() {
                onSelect(cluster);
            });
        };
        e.handleEdit = function({ index, data }) {
            const e_props = e.props;
            const { cluster, formTemplate } = e_props;
            const i = `spec.volumeClaimTemplates.${index}`;
            const clusterOverrides = [];
            Object.keys(data).forEach((e)=>{
                const t = `${i}.${e}`;
                if (module26(formTemplate, `spec.template.${t}`) !== data[e]) {
                    clusterOverrides.push({
                        path: `/${t.replace(/\./g, "/")}`,
                        value: data[e]
                    });
                }
            });
            const s = module26(formTemplate, "spec.overrides", []);
            const f = s.find((e)=>e.clusterName === cluster);
            if (f) {
                f.clusterOverrides = module862([].concat(clusterOverrides, module61(f.clusterOverrides || [])), "path");
            } else {
                s.push({
                    clusterName: cluster,
                    clusterOverrides
                });
            }
            module74(formTemplate, "spec.overrides", s);
            e.setState({
                editVolumeTemplate: ""
            });
        };
        e.renderVolumeTemplates = function(vt, a) {
            const e_props = e.props;
            const { children, selected } = e_props;
            const editVolumeTemplate = e.state.editVolumeTemplate;
            const formData = e.getVolumeTemplate({
                vt,
                index: a
            });
            const c = module26(vt, "metadata.name");
            return module553.default.createElement("div", {
                key: c,
                className: module3(module2576.wrapper, module31({}, module2576.selected, selected))
            }, children({
                ...e.props,
                index: a,
                key: a,
                formData,
                isEdit: editVolumeTemplate === c,
                showEdit: e.showEdit,
                onEdit: e.handleEdit
            }));
        };
        return e;
    }
    module37(a, [
        {
            key: "getVolumeTemplate",
            value: function({ index, vt }) {
                const props = this.props;
                const { cluster, formTemplate } = props;
                const u = module26(formTemplate, "spec.overrides", []).find((e)=>e.clusterName === cluster) || {};
                const o = module136(vt);
                const i = `/spec/volumeClaimTemplates/${index}/`;
                if (u && !module63(u.clusterOverrides)) {
                    u.clusterOverrides.forEach((e)=>{
                        if (e.path.startsWith(i)) {
                            const t = e.path.replace(i, "").replace(/\//g, ".");
                            module74(o, t, e.value);
                        }
                    });
                }
                return o;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const formTemplate = this.props.formTemplate;
                return module26(formTemplate, "spec.template.spec.volumeClaimTemplates", []).map((t, a)=>_this.renderVolumeTemplates(t, a));
            }
        }
    ]);
    return a;
})(module553.Component);
export default O;
