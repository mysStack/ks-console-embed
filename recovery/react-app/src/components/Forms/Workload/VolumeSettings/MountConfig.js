import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-24.js";
import "unpacked/module-193.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module321 from "unpacked/module-321.js";
import module63 from "unpacked/module-63.js";
import module159 from "unpacked/module-159.js";
import module247 from "unpacked/module-247.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import Module818 from "components/Base/TypeSelect";
import Module830 from "components/Inputs/ArrayInput";
import Module868 from "components/Inputs/ObjectInput";
import Module1041 from "components/Inputs/MountInput";
import { ReactComponent } from "unpacked/module-882.js";
import { generateId, getDisplayName } from "utils/index";
import module853 from "stores/secret";
import module1001 from "stores/configmap";
import module437 from "stores/federated";
import module934 from "unpacked/module-934.js";
import module1168 from "unpacked/module-1168.js";
import module1000 from "unpacked/module-1000.js";
import module2324 from "unpacked/module-2324.js";
const L = ((Component_1)=>{
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
        n.handleSelectChange = function(e) {
            let resource;
            const n_state = n.state;
            const { configMaps, secrets } = n_state;
            resource = n_state.type === "configmap" ? configMaps.find((t)=>t.name === e) : secrets.find((t)=>t.name === e);
            n.setState({
                resource
            });
        };
        n.handleTypeChange = function(type) {
            const formData = n.state.formData;
            const current = n.formRef.current;
            n.setState({
                type,
                formData: module74(formData, "name", undefined)
            }, function() {
                current.validate();
            });
        };
        n.handleSubmit = function(e) {
            const onSave = n.props.onSave;
            const resource = n.state.resource;
            const current = n.formRef.current;
            if (current) {
                current.validate(function() {
                    const l = current.getData();
                    const { volumeMounts, name, items } = l;
                    const volume = {
                        name: module26(n.props, "volume.name", `volume-${generateId()}`)
                    };
                    if (resource.module === "secrets") {
                        volume.secret = {
                            secretName: name,
                            items
                        };
                    } else {
                        volume.configMap = {
                            name,
                            items
                        };
                    }
                    let s = [];
                    if (volumeMounts) {
                        s = volumeMounts.map((e)=>({
                                ...e,
                                volume
                            }));
                    }
                    onSave(volume, s);
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
            const n_state = n.state;
            const { formData, type } = n_state;
            const i = module26(formData, "volumeMounts");
            const c = (e)=>!module63(e) && module26(e, "[0].readOnly") !== "null";
            if (c(i) && !a) {
                return r(type === "configmap" ? {
                    message: t("CONFIGMAP_NOT_SELECT")
                } : {
                    message: t("SECRET_NOT_SELECT")
                });
            }
            if (!c(i) || a) {
                return r();
            }
        };
        n.relativePathValidator = function(e, a, r) {
            n.validateSpecificKey(a, r);
            if (a) {
                if (a.some((e)=>e.path === "")) {
                    return r({
                        message: t("MOUNT_PATH_EMPTY")
                    });
                }
                if (a.some((e)=>/^\//.test(e.path))) {
                    return r({
                        message: t("PLEASE_USE_RELATIVE_PATH")
                    });
                }
                if (a.some((e)=>/^(\.)\1{1,}/.test(e.path))) {
                    return r({
                        message: t("RELATIVE_PATH_NOT_SUPPORT")
                    });
                }
                if (a.some((e)=>/(\/)\1{1,}|(\.)\2{1,}/.test(e.path))) {
                    return r({
                        message: t("MOUNT_PATH_INCORRECT")
                    });
                }
                n.checkMountPathRepeat(a, r);
                return r();
            }
            return r();
        };
        n.formRef = createRef();
        n.specificKeyRef = createRef();
        if (module63(e.volume)) {
            n.state = {
                formData: {},
                configMaps: [],
                secrets: [],
                resource: {},
                type: "configmap"
            };
        } else {
            const l = e.volume.configMap || e.volume.secret || {};
            n.state = {
                formData: {
                    name: l.name || l.secretName,
                    items: l.items,
                    volumeMounts: e.volume.volumeMounts
                },
                configMaps: [],
                secrets: [],
                resource: {},
                type: e.volume.configMap ? "configmap" : "secret"
            };
        }
        const e_isEdgeWize = e.isEdgeWize;
        n.configMapStore = e_isEdgeWize ? new module1168 : new module1001;
        n.secretStore = e_isEdgeWize ? new module934 : new module853;
        if (e.isFederated) {
            n.configMapStore = e_isEdgeWize ? new module1000({
                module: n.configMapStore.module
            }) : new module437({
                module: n.configMapStore.module
            });
            n.secretStore = e_isEdgeWize ? new module1000({
                module: n.secretStore.module
            }) : new module437({
                module: n.secretStore.module
            });
        }
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
                this.fetchData();
            }
        },
        {
            key: "fetchData",
            value: function() {
                const _this = this;
                const props = this.props;
                const t_cluster = props.cluster;
                const r = {
                    namespace: props.namespace,
                    cluster: t_cluster
                };
                Promise.all([
                    this.configMapStore.fetchListByK8s(r),
                    this.secretStore.fetchListByK8s(r)
                ]).then((t)=>{
                    const a = module96(t, 2);
                    const configMaps = a[0];
                    const secrets = a[1];
                    _this.setState({
                        configMaps,
                        secrets
                    }, function() {
                        if (_this.state.formData.name) {
                            _this.handleSelectChange(_this.state.formData.name);
                        }
                    });
                });
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
            key: "getResourceOptions",
            value: function() {
                const state = this.state;
                const { type, configMaps, secrets } = state;
                if (type !== "configmap" || module63(configMaps)) {
                    if (type !== "secret" || module63(secrets)) {
                        return [];
                    }
                    return secrets.map((e)=>({
                            label: getDisplayName(e),
                            description: t("SECRET"),
                            value: e.name,
                            icon: "key"
                        }));
                }
                return configMaps.map((e)=>({
                        label: getDisplayName(e),
                        description: t("CONFIGMAP"),
                        value: e.name,
                        icon: "hammer"
                    }));
            }
        },
        {
            key: "getKeysOptions",
            value: function() {
                const resource = this.state.resource;
                return Object.keys(resource.data || {}).map((e)=>({
                        label: e,
                        value: e
                    }));
            }
        },
        {
            key: "validateSpecificKey",
            value: function(e, a) {
                if (this.specificKeyRef.current.state.isCheck && module159(e)) {
                    a({
                        message: t("MOUNT_PATH_NOT_SPECIFIED")
                    });
                }
            }
        },
        {
            key: "checkMountPathRepeat",
            value: function(e, a) {
                const r = e.map((e)=>e.path);
                if (module247(r).length !== e.length) {
                    a({
                        message: t("MOUNT_PATH_REPEATED")
                    });
                }
            }
        },
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { containers, collectSavedLog } = props;
                const state = this.state;
                const { type, formData } = state;
                const options = this.getResourceOptions();
                const placeholder = {
                    label: module63(options) ? t("NO_AVAILABLE_RESOURCE") : t("SELECT_TYPE", {
                        type: t(type.toUpperCase())
                    }),
                    description: t(`SELECT_${type.toUpperCase()}_DESC`)
                };
                return <module186.Form data={formData} ref={this.formRef}><div className={module2324.card}><module186.Form.Item rules={[
                    {
                        validator: this.nameValidator
                    }
                ]}><Module818 name="name" options={options} placeholder={placeholder} onChange={this.handleSelectChange}/></module186.Form.Item><module186.Form.Item rules={[
                    {
                        validator: this.mountValidator
                    }
                ]}><Module1041 name="volumeMounts" supportedAccessModes={[
                    "READ_ONLY",
                    "NOT_MOUNT"
                ]} containers={containers} collectSavedLog={collectSavedLog}/></module186.Form.Item></div><module186.Form.Group label={t("SELECT_SPECIFIC_KEYS")} desc={t("SELECT_SPECIFIC_KEYS_DESC")} ref={this.specificKeyRef} checkable keepDataWhenUncheck><module186.Form.Item rules={[
                    {
                        validator: this.relativePathValidator
                    }
                ]}><Module830 name="items" itemType="object" addText={t("ADD")}><Module868><module186.Select name="key" placeholder={t("KEY")} options={this.getKeysOptions()}/><module186.Input name="path" placeholder={t("PATH")}/></Module868></Module830></module186.Form.Item></module186.Form.Group></module186.Form>;
            }
        },
        {
            key: "render",
            value: function() {
                const type = this.state.type;
                return <div className={module2324.wrapper}><div className="h6"><a className="custom-icon" onClick={this.handleGoBack}><ReactComponent/></a>{t("STORAGE_SETTINGS")}</div><div className={module2324.contentWrapper}><div className={module2324.title}>{t("MOUNT_CONFIGMAP_OR_SECRET")}</div><module186.RadioGroup mode="button" value={type} onChange={this.handleTypeChange} size="small"><module186.RadioButton value="configmap">{t("CONFIGMAP")}</module186.RadioButton><module186.RadioButton value="secret">{t("SECRET")}</module186.RadioButton></module186.RadioGroup>{this.renderContent()}</div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default L;
L.propTypes = {
    isEdgeWize: module1.bool,
    containers: module1.array,
    volume: module1.object,
    namespace: module1.string,
    onSave: module1.func,
    onCancel: module1.func
};
L.defaultProps = {
    volume: {},
    containers: [],
    onSave: function() {},
    onCancel: function() {}
};
L.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
