import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
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
import "unpacked/module-319.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module926 from "unpacked/module-926.js";
import module242 from "unpacked/module-242.js";
import module241 from "unpacked/module-241.js";
import module159 from "unpacked/module-159.js";
import module63 from "unpacked/module-63.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import module1 from "unpacked/module-1.js";
import { safeParseJSON } from "utils/index";
import { ACCESS_MODES } from "utils/constants";
import module186 from "unpacked/module-186.js";
import Module967 from "components/Inputs/UnitSlider";
import module867 from "stores/storageClass";
import module1548 from "unpacked/module-1548.js";
const R = ((Component_1)=>{
    module55(r, Component_1);
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.updateStorageClass = function(e = {}) {
            n.setState({
                isLoading: true
            });
            const formData = n.context.formData;
            const a = module26(formData, "spec.storageClassName");
            return n.store.fetchList({
                ...e,
                cluster: n.props.cluster
            }).then(()=>{
                const e = module14.toJS(n.store.list.data);
                n.setState({
                    storageClasses: module14.toJS(n.store.list.data),
                    storageClass: e.find((e)=>a === e.name) || e.find((e)=>e.default) || {},
                    isLoading: false
                });
            });
        };
        n.getStorageClasses = function() {
            return n.state.storageClasses.map((e)=>({
                    label: e.name,
                    value: e.name
                }));
        };
        n.getSupportedAccessModes = function() {
            const storageClass = n.state.storageClass;
            let t = null;
            if (storageClass) {
                t = safeParseJSON(module26(storageClass, 'annotations["storageclass.kubesphere.io/supported-access-modes"]', ""));
            }
            if (module159(t)) {
                return [];
            }
            return t;
        };
        n.handleStorageClassChange = function(e) {
            const storageClass = n.state.storageClasses.find((t)=>t.name === e) || {};
            module242(n.context.formData, "spec.accessModes");
            n.setState({
                storageClass
            });
        };
        n.sizeValidator = function(e, a, r) {
            if (parseInt(a, 10) <= 0) {
                return r({
                    message: t("VOLUME_SIZE_TIP"),
                    field: e.field
                });
            }
            return r();
        };
        n.store = e.isEdgeWize ? new module1548 : new module867;
        n.state = {
            storageClasses: [],
            storageClass: {},
            isLoading: false
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.updateStorageClass();
            }
        },
        {
            key: "getSliderProps",
            value: function(e) {
                const t = {
                    min: 0,
                    max: 2048,
                    defaultValue: "10Gi",
                    step: 1,
                    unit: "Gi"
                };
                const a = Number(module26(e, "parameters.minSize"));
                const r = Number(module26(e, "parameters.maxSize"));
                const n = Number(module26(e, "parameters.stepSize"));
                if (!module926(a)) {
                    t.min = a;
                }
                if (!module926(r)) {
                    t.max = r;
                }
                if (!module926(n)) {
                    t.step = n;
                }
                const l = (t.max / t.step - t.min / t.step) / 4;
                const u = {};
                for(let o = 0; o < 4; o++){
                    const i = Math.floor(l * o) * t.step + t.min;
                    u[i] = i === 0 ? "0" : `${i}Gi`;
                }
                u[t.max] = `${t.max}Gi`;
                t.marks = u;
                return t;
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { storageClass, isLoading } = state;
                const props = this.props;
                const { editModalTitle, tabTitle, isFederated, isEdit } = props;
                const s = this.getStorageClasses();
                const f = this.store.list || {};
                const d = this.getSupportedAccessModes();
                const p = module63(d) ? Object.keys(ACCESS_MODES) : d;
                const m = p.map((e)=>({
                        value: e,
                        label: e
                    }));
                const defaultValue = "ReadWriteOnce" in p ? [
                    "ReadWriteOnce"
                ] : p.slice(0, 1);
                return <>{!isFederated && !isEdit && <module186.Form.Item label={t("STORAGE_CLASS")} desc={t("VOLUME_STORAGE_CLASS_DESC")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Select name="spec.storageClassName" defaultValue={storageClass.name} pagination={module241(f, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={f.isLoading} onChange={this.handleStorageClassChange} options={s} onFetch={this.updateStorageClass} searchable clearable/></module186.Form.Item>}{editModalTitle !== "EDIT_SETTINGS" && tabTitle !== "CLUSTER_DIFF" ? <module186.Form.Item label={t("ACCESS_MODE")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]} desc={t("ACCESS_MODES_DESC")}><module186.Select name="spec.accessModes" options={m} loading={isLoading} defaultValue={defaultValue} multi/></module186.Form.Item> : ""}<module186.Form.Item label={t("VOLUME_CAPACITY")} rules={[
                    {
                        validator: this.sizeValidator
                    }
                ]}><Module967 name="spec.resources.requests.storage" {...this.getSliderProps(storageClass)} withInput/></module186.Form.Item></>;
            }
        }
    ]);
    return r;
})(Component);
export default R;
R.contextTypes = {
    formData: module1.PropTypes.object
};
