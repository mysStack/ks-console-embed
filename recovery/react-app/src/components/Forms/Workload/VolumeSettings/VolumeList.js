import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
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
import "unpacked/module-58.js";
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
import module159 from "unpacked/module-159.js";
import module186 from "unpacked/module-186.js";
import module814 from "components/Base/List";
import { isNotPersistentVolume } from "utils/volume";
import Module2312 from "components/Forms/Workload/VolumeSettings/VolumeList/Card";
import module1546 from "unpacked/module-1546.js";
const N = ((Component_1)=>{
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
            const { value, volumes, containers, logPath } = e_props;
            if (module63(value)) {
                return [];
            }
            return value.map((e)=>{
                let t = {};
                if (!module159(e.persistentVolumeClaim)) {
                    t = volumes.find((t)=>t.name === e.persistentVolumeClaim.claimName);
                }
                const volumeMounts = [];
                containers.forEach((t)=>{
                    if (t.volumeMounts) {
                        const r = t.volumeMounts.find((t)=>t.name === e.name);
                        if (r) {
                            const logPath_1 = module26(logPath, `containerLogConfigs.${t.name}.${e.name}`, []).join(",");
                            volumeMounts.push({
                                ...r,
                                logPath: logPath_1,
                                containerName: t.name
                            });
                        }
                    }
                });
                return {
                    ...e,
                    volume: t,
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
            e.props.onShowVolume();
        };
        e.handleAddConfig = function() {
            e.props.onShowConfig();
        };
        e.handleEdit = function(t) {
            const { volume, volumeMounts, ...rest } = t;
            if (isNotPersistentVolume(t)) {
                e.props.onShowEdit({
                    ...rest,
                    volumeMounts
                });
            } else {
                e.props.onShowEdit({
                    volume,
                    volumeMounts,
                    specVolume: {
                        ...rest
                    }
                });
            }
        };
        e.handleDelete = function(t) {
            const e_props = e.props;
            const { value, onChange } = e_props;
            e.deleteVolumeMounts(t);
            onChange(value.filter((e)=>e.name !== t));
        };
        return e;
    }
    module37(r, [
        {
            key: "renderAddVolume",
            value: function() {
                return <module186.Columns><module186.Column><module814.Add onClick={this.handleAddVolume} title={t("MOUNT_VOLUME")} description={t("WORKLOAD_MOUNT_VOLUME_DESC")}/></module186.Column><module186.Column><module814.Add onClick={this.handleAddConfig} title={t("MOUNT_CONFIGMAP_OR_SECRET")} description={t("MOUNT_CONFIGMAP_OR_SECRET_DESC")}/></module186.Column></module186.Columns>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const className = this.props.className;
                const a = this.getFormattedVolumes();
                return <div className={module3(module1546.wrapper, className)}><div className={module1546.content}>{!module63(a) && <ul className={module1546.list}>{a.map((t)=><Module2312 volume={t} key={t.name} onEdit={_this.handleEdit} onDelete={_this.handleDelete}/>)}</ul>}{this.renderAddVolume()}</div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default N;
N.propTypes = {
    prefix: module1.string,
    name: module1.string,
    value: module1.array,
    volumes: module1.array,
    volumeTypes: module1.array,
    containers: module1.array,
    onChange: module1.func,
    onShowVolume: module1.func,
    onShowConfig: module1.func,
    onShowEdit: module1.func
};
N.defaultProps = {
    prefix: "",
    name: "",
    value: [],
    volumes: [],
    volumeTypes: [],
    containers: [],
    onChange: function() {},
    onShowVolume: function() {},
    onShowConfig: function() {},
    onShowEdit: function() {}
};
N.contextTypes = {
    formData: module1.object
};
