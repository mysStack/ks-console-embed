import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module321 from "./module-321.js";
import module63 from "./module-63.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import { PATTERN_NAME } from "./module-72.js";
import Module1041 from "./module-1041.js";
import module2321 from "./module-2321.js";
const y = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.mountValidator = function(a, r, n) {
            if (module63(r)) {
                return n();
            }
            r.forEach((r)=>{
                if (!r) {
                    return n();
                }
                if (r.readOnly === "null") {
                    n();
                } else if (r.mountPath) {
                    if (e.getMountPaths(r).includes(r.mountPath)) {
                        return n({
                            message: t("MOUNT_PATH_IN_USE"),
                            field: a.field
                        });
                    }
                    n();
                } else {
                    n({
                        message: t(""),
                        field: a.field
                    });
                }
            });
        };
        e.nameValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            const e_props = e.props;
            const l_currentName = e_props.currentName;
            if (e_props.checkVolumeNameExist(r) && l_currentName !== r) {
                n({
                    message: t("VOLUME_NAME_EXIST"),
                    field: a.field
                });
            } else {
                n();
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "getMountPaths",
            value: function(e) {
                if (!this.mountPaths) {
                    this.mountPaths = module321(this.props.containers, "name");
                }
                if (module63(this.mountPaths[e.containerName]) || module63(this.mountPaths[e.containerName].volumeMounts)) {
                    return [];
                }
                return this.mountPaths[e.containerName].volumeMounts.filter((t)=>t.name !== e.name).map((e)=>e.mountPath);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { containers, formData, formRef, collectSavedLog } = props;
                return <div className={module2321.wrapper}><module186.Alert className="margin-b12" type="info" message={t("HOSTPATH_TIP")}/><module186.Form data={formData} ref={formRef}><module186.Form.Item label={t("VOLUME_NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("VOLUME_NAME_EMPTY")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="name" autoFocus maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("HOST_PATH")} rules={[
                    {
                        required: true,
                        message: t("HOST_PATH_EMPTY")
                    }
                ]}><module186.Input name="hostPath.path"/></module186.Form.Item><module186.Form.Item rules={[
                    {
                        validator: this.mountValidator
                    }
                ]}><Module1041 name="volumeMounts" containers={containers} collectSavedLog={collectSavedLog}/></module186.Form.Item></module186.Form></div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    formRef: module1.object,
    formData: module1.object,
    containers: module1.array,
    checkVolumeNameExist: module1.func
};
y.defaultProps = {
    formData: {},
    containers: []
};
