import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-31.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module189 from "./module-189.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module186 from "./module-186.js";
import { ReactComponent } from "./module-882.js";
import module105 from "./module-105.js";
import Module2314 from "./module-2314.js";
import Module2318 from "./module-2318.js";
import Module2320 from "./module-2320.js";
import module2322 from "./module-2322.js";
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.volumeTypeMap = function(e) {
            if (e.includes("emptyDir")) {
                return "temp";
            }
            if (e.includes("hostPath")) {
                return "host";
            }
            return "exist";
        };
        t.handleGoBack = function() {
            const resetSubRoute = t.context.resetSubRoute;
            if (resetSubRoute) {
                resetSubRoute();
            }
            t.props.onCancel();
        };
        t.handleSubmit = function(e) {
            const onSave = t.props.onSave;
            const t_state = t.state;
            const { type, editVolume } = t_state;
            const current = t.formRef.current;
            if (current) {
                current.validate(function() {
                    let volume;
                    const i = current.getData();
                    if (type === "exist") {
                        volume = i.volume;
                    } else if (type === "temp") {
                        volume = {
                            name: i.name,
                            emptyDir: {}
                        };
                    } else if (type === "host") {
                        const c = i.hostPath;
                        const hostPath = c === undefined ? {} : c;
                        const name = i.name;
                        volume = {
                            hostPath,
                            name
                        };
                    } else if (type === "new") {
                        const { volumeMounts: _volumeMounts, ...rest } = i;
                        volume = module105.volumes(rest);
                    }
                    let p = [];
                    if (i.volumeMounts) {
                        p = i.volumeMounts.map((e)=>({
                                ...e,
                                volume
                            }));
                    }
                    if (!module63(editVolume)) {
                        if (type === "temp") {
                            const m = t.updateVolume(volume, p, "hostPath");
                            const { newVolume, newMounts } = m;
                            volume = newVolume;
                            p = newMounts;
                        }
                        if (type === "host") {
                            const y = t.updateVolume(volume, p, "emptyDir");
                            const { newVolume, newMounts } = y;
                            volume = newVolume;
                            p = newMounts;
                        }
                    }
                    onSave(volume, p, t.state.editVolume);
                    if (e) {
                        e();
                    }
                });
            }
        };
        t.updateVolume = function(e, a, r) {
            const editVolume = t.state.editVolume;
            const newVolume = module189(e, r);
            const o = a.filter((e)=>e.name !== editVolume.name);
            const i = a.filter((e)=>e.name === editVolume.name);
            if (i.length > 0) {
                i[0].volume = module189(i[0].volume, r);
            }
            return {
                newVolume,
                newMounts: [].concat(module61(o), module61(i))
            };
        };
        t.handleTypeChange = function(type) {
            t.setState({
                type
            });
        };
        t.formRef = createRef();
        t.state = {
            type: t.checkVolumeType(e.volume) || "exist",
            editVolume: {}
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const onCancel = this.props.onCancel;
                const registerSubRoute = this.context.registerSubRoute;
                if (registerSubRoute) {
                    registerSubRoute(this.handleSubmit, onCancel);
                }
                this.saveEditVolume();
            }
        },
        {
            key: "saveEditVolume",
            value: function() {
                const volume = this.props.volume;
                if (!module63(volume)) {
                    const t = this.volumeTypeMap(Object.keys(module189(volume, [
                        "name",
                        "volumeMounts"
                    ])));
                    if (t !== "exist") {
                        this.setState({
                            editVolume: {
                                name: volume.name,
                                type: t
                            }
                        });
                    } else {
                        this.setState({
                            editVolume: {
                                name: module26(volume, "specVolume.name", ""),
                                type: t
                            }
                        });
                    }
                }
            }
        },
        {
            key: "checkVolumeType",
            value: function(e) {
                let t = "exist";
                if (!module63(e)) {
                    if (e.emptyDir) {
                        t = "temp";
                    } else if (e.hostPath) {
                        t = "host";
                    }
                }
                return t;
            }
        },
        {
            key: "renderContent",
            value: function() {
                let e;
                const props = this.props;
                const { volume, volumes, containers, checkVolumeNameExist, collectSavedLog } = props;
                const volume_name = volume.name;
                const i = module26(volume, "volumeMounts", []);
                if (this.state.type === "exist") {
                    const c = module26(volume, "specVolume.name", false);
                    if (c) {
                        volume.name = c;
                    }
                } else {
                    const s = module26(volume, "name", false);
                    if (s) {
                        volume.name = s;
                        module74(volume, "specVolume.name", s);
                    }
                }
                if (i.length > 0) {
                    volume.volumeMounts.forEach((e)=>module74(e, "name", volume.name));
                }
                switch(this.state.type){
                    case "temp":
                        e = <Module2318 formRef={this.formRef} formData={volume} currentName={volume_name} containers={containers} checkVolumeNameExist={checkVolumeNameExist} collectSavedLog={collectSavedLog}/>;
                        break;
                    case "host":
                        e = <Module2320 formRef={this.formRef} formData={volume} currentName={volume_name} containers={containers} checkVolumeNameExist={checkVolumeNameExist}/>;
                        break;
                    default:
                        e = <Module2314 formRef={this.formRef} formData={volume} currentName={volume_name} volumes={volumes} containers={containers} collectSavedLog={collectSavedLog}/>;
                }
                return e;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, contentClassName } = props;
                return <div className={module3(module2322.wrapper, className)}><div className="h6"><a className="custom-icon" onClick={this.handleGoBack}><ReactComponent/></a>{t("VOLUME_PL")}</div><div className={module3(module2322.contentWrapper, contentClassName)}><div className={module2322.title}>{t("MOUNT_VOLUME")}</div><module186.RadioGroup mode="button" value={this.state.type} onChange={this.handleTypeChange} size="small"><module186.RadioButton value="exist">{t("PERSISTENT_VOLUME")}</module186.RadioButton><module186.RadioButton value="temp">{t("TEMPORARY_VOLUME")}</module186.RadioButton><module186.RadioButton value="host">{t("HOSTPATH_VOLUME")}</module186.RadioButton></module186.RadioGroup>{this.renderContent()}</div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default R;
R.propTypes = {
    className: module1.string,
    containers: module1.array,
    volume: module1.object,
    onSave: module1.func,
    onCancel: module1.func
};
R.defaultProps = {
    className: "",
    volume: {},
    containers: [],
    onSave: function() {},
    onCancel: function() {}
};
R.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
