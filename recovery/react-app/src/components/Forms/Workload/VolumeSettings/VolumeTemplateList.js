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
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module1165 from "unpacked/module-1165.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module63 from "unpacked/module-63.js";
import module814 from "components/Base/List";
import Module2326 from "components/Forms/Workload/VolumeSettings/VolumeTemplateList/Card";
import module1547 from "unpacked/module-1547.js";
const S = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.getFormattedVolumes = function() {
            const e_props = e.props;
            const { value, containers } = e_props;
            if (module63(value) || module63(containers)) {
                return [];
            }
            return value.map((e)=>{
                const volumeMounts = [];
                containers.forEach((a)=>{
                    if (module26(a, "volumeMounts", false)) {
                        const r = a.volumeMounts.find((t)=>t.name === e.metadata.name);
                        if (r) {
                            volumeMounts.push({
                                ...r,
                                containerName: a.name
                            });
                        }
                    }
                });
                return {
                    ...e,
                    volumeMounts
                };
            });
        };
        e.deleteVolumeMounts = function(t) {
            const formData = e.context.formData;
            const r = module26(formData, `${e.props.prefix}spec.containers`, []).map((e)=>({
                    ...e,
                    type: "worker"
                }));
            const n = module26(formData, `${e.props.prefix}spec.initContainers`, []).map((e)=>({
                    ...e,
                    type: "init"
                }));
            const l = module1165(r, n);
            l.forEach((e)=>{
                if (!module63(e.volumeMounts)) {
                    e.volumeMounts = e.volumeMounts.filter((e)=>e.name !== t);
                }
            });
            const u = [];
            const o = [];
            l.forEach((e)=>{
                if (e.type === "worker") {
                    delete e.type;
                    u.push(e);
                } else {
                    delete e.type;
                    o.push(e);
                }
            });
            module74(formData, `${e.props.prefix}spec.containers`, u);
            module74(formData, `${e.props.prefix}spec.initContainers`, o);
        };
        e.handleAddVolume = function() {
            e.props.onShowAddVolume();
        };
        e.handleEdit = function(t) {
            e.props.onShowEdit(t);
        };
        e.handleDelete = function(t) {
            const e_props = e.props;
            const { value, onChange } = e_props;
            e.deleteVolumeMounts(t);
            onChange(value.filter((e)=>e.metadata.name !== t));
        };
        return e;
    }
    module37(r, [
        {
            key: "renderAddVolume",
            value: function() {
                return <module814.Add onClick={this.handleAddVolume} title={t("ADD_PERSISTENT_VOLUME_CLAIM_TEMPLATE")} description={t("ADD_PERSISTENT_VOLUME_CLAIM_TEMPLATE_DESC")}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, hideVolumeSetting } = props;
                const n = this.getFormattedVolumes();
                return <div className={module3(module1547.wrapper, className)}><div className={module1547.content}>{!module63(n) && <ul className={module1547.list}>{n.map((volume)=><Module2326 volume={volume} key={module26(volume, "metadata.name")} onEdit={_this.handleEdit} onDelete={_this.handleDelete} banEdit={hideVolumeSetting}/>)}</ul>}{!hideVolumeSetting && this.renderAddVolume()}</div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default S;
S.propTypes = {
    prefix: module1.string,
    name: module1.string,
    value: module1.array,
    containers: module1.array,
    onChange: module1.func,
    onShowAddVolume: module1.func,
    onShowEdit: module1.func,
    hideVolumeSetting: module1.bool
};
S.defaultProps = {
    prefix: "",
    name: "",
    value: [],
    containers: [],
    onChange: function() {},
    onShowAddVolume: function() {},
    onShowEdit: function() {},
    hideVolumeSetting: false
};
S.contextTypes = {
    formData: module1.object
};
