import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module321 from "unpacked/module-321.js";
import module63 from "unpacked/module-63.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module1041 from "components/Inputs/MountInput";
import { PATTERN_NAME } from "utils/constants";
import { ReactComponent } from "unpacked/module-882.js";
import Module1100 from "components/Forms/Volume/VolumeSettings/FormTemplate";
import module839 from "stores/volume";
import module1300 from "unpacked/module-1300.js";
import module2328 from "unpacked/module-2328.js";
let l;
let u;
let o;
const w = observer((o = u = ((Component_1)=>{
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
        n.handleGoBack = function() {
            const resetSubRoute = n.context.resetSubRoute;
            if (resetSubRoute) {
                resetSubRoute();
            }
            n.props.onCancel();
        };
        n.handleSubmit = function(e) {
            const onSave = n.props.onSave;
            const current = n.formRef.current;
            if (current) {
                current.validate(function() {
                    const r = current.getData();
                    const { volumeMounts = [], ...rest } = r;
                    onSave(rest, volumeMounts.map((e)=>({
                            ...e,
                            name: rest.metadata.name
                        })));
                    if (e) {
                        e();
                    }
                });
            }
        };
        n.mountValidator = function(e, a, r) {
            if (module63(a)) {
                return r();
            }
            a.forEach((a)=>{
                if (!a) {
                    return r();
                }
                if (a.readOnly === "null") {
                    r();
                } else if (a.mountPath) {
                    if (n.getMountPaths(a).includes(a.mountPath)) {
                        return r({
                            message: t("MOUNT_PATH_IN_USE"),
                            field: e.field
                        });
                    }
                    r();
                } else {
                    r({
                        message: t("READ_WRITE_MOUNT_EMPTY"),
                        field: e.field
                    });
                }
            });
        };
        n.nameValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            const n_props = n.props;
            const { volume, cluster, namespace } = n_props;
            if (n_props.checkVolumeNameExist(a) && volume.metadata.name !== a) {
                r({
                    message: t("PVC_NAME_PREFIX_EXISTS"),
                    field: e.field
                });
            } else {
                n.volumeStore.checkName({
                    name: a,
                    cluster,
                    namespace
                }).then((a)=>{
                    if (a.exist) {
                        return r({
                            message: t("PVC_NAME_PREFIX_EXISTS"),
                            field: e.field
                        });
                    }
                    r();
                });
            }
        };
        n.formRef = createRef();
        n.volumeStore = e.isEdgeWize ? new module1300 : new module839;
        n.state = {
            formData: e.volume
        };
        return n;
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
            }
        },
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
                const { containers, className, contentClassName, collectSavedLog, cluster, namespace, isEdgeWize } = props;
                const formData = this.state.formData;
                return <div className={module3(module2328.wrapper, className)}><div className="h6"><a className="custom-icon" onClick={this.handleGoBack}><ReactComponent/></a>{t("STORAGE_SETTINGS")}</div><div className={module3(module2328.contentWrapper, contentClassName)}><div className={module2328.card}><module186.Form data={formData} ref={this.formRef}><module186.Form.Item className={module2328.name} label={t("PVC_NAME_PREFIX")} desc={t("PVC_NAME_PREFIX_DESC")} rules={[
                    {
                        required: true,
                        message: t("PVC_NAME_PREFIX_EMPTY")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_PVC_NAME_PREFIX")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name" autoFocus maxLength={253}/></module186.Form.Item><Module1100 isEdgeWize={isEdgeWize} cluster={cluster} namespace={namespace}/><module186.Form.Item label={t("MOUNT_PATH_TCAP")} rules={[
                    {
                        validator: this.mountValidator
                    }
                ]}><Module1041 name="volumeMounts" containers={containers} collectSavedLog={collectSavedLog}/></module186.Form.Item></module186.Form></div></div></div>;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    isEdgeWize: module1.bool,
    containers: module1.array,
    volume: module1.object,
    cluster: module1.string,
    namespace: module1.string,
    onSave: module1.func,
    onCancel: module1.func,
    checkVolumeNameExist: module1.func
}, u.defaultProps = {
    volume: {},
    containers: [],
    cluster: "",
    namespace: "",
    onSave: function() {},
    onCancel: function() {}
}, u.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
}, l = o)) || l;
export default w;
