import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module321 from "unpacked/module-321.js";
import module63 from "unpacked/module-63.js";
import { Component } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import Module818 from "components/Base/TypeSelect";
import Module1041 from "components/Inputs/MountInput";
import { getDisplayName } from "utils/index";
import module2317 from "unpacked/module-2317.js";
const b = ((Component_1)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
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
                        message: t("READ_WRITE_MOUNT_EMPTY"),
                        field: a.field
                    });
                }
            });
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
                const { containers, formRef, formData, className, collectSavedLog } = props;
                const placeholder = {
                    icon: "storage",
                    label: t("SELECT_PERSISITENT_VOLUME_CLAIM"),
                    description: t("SELECT_PERSISITENT_VOLUME_CLAIM_DESC")
                };
                return <div className={module3(module2317.wrapper, className)}><module186.Form data={formData} ref={formRef}><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("PVC_NOT_SELECT")
                    }
                ]}><Module818 name="volume" options={this.volumes} placeholder={placeholder}/></module186.Form.Item><module186.Form.Item rules={[
                    {
                        validator: this.mountValidator
                    }
                ]}><Module1041 name="volumeMounts" containers={containers} collectSavedLog={collectSavedLog}/></module186.Form.Item></module186.Form></div>;
            }
        },
        {
            key: "volumes",
            get: function() {
                return this.props.volumes.map((e)=>({
                        uid: e.name,
                        icon: "storage",
                        label: <span>{getDisplayName(e)} </span>,
                        description: e.storageClassName,
                        value: e,
                        details: [
                            {
                                label: e.capacity,
                                description: t("CAPACITY")
                            },
                            {
                                label: e.accessMode,
                                description: t("ACCESS_MODE_SCAP")
                            }
                        ]
                    }));
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    formRef: module1.object,
    formData: module1.object,
    className: module1.string,
    containers: module1.array,
    volumes: module1.array
};
b.defaultProps = {
    className: "",
    volumes: [],
    formData: {},
    containers: []
};
