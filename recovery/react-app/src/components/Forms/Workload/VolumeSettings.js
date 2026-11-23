import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-448.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module1165 from "unpacked/module-1165.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module159 from "unpacked/module-159.js";
import module63 from "unpacked/module-63.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import { MODULE_KIND_MAP } from "utils/constants";
import { generateId, isEdgeWizePage, safeParseJSON } from "utils/index";
import { findVolume, isNotPersistentVolume } from "utils/volume";
import module839 from "stores/volume";
import module437 from "stores/federated";
import module439 from "stores/project";
import module1300 from "unpacked/module-1300.js";
import module1000 from "unpacked/module-1000.js";
import module970 from "unpacked/module-970.js";
import Module2311 from "components/Forms/Workload/VolumeSettings/VolumeList";
import Module2313 from "components/Forms/Workload/VolumeSettings/AddVolume";
import Module2323 from "components/Forms/Workload/VolumeSettings/MountConfig";
import Module2325 from "components/Forms/Workload/VolumeSettings/VolumeTemplateList";
import Module2327 from "components/Forms/Workload/VolumeSettings/AddVolumeTemplate";
import module2329 from "unpacked/module-2329.js";
const V = ((Component_1)=>{
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
        t.showVolume = function() {
            t.setState({
                state: "ShowVolume",
                selectVolume: {}
            });
        };
        t.showEditVolume = function(selectVolume) {
            let state;
            state = module159(selectVolume.configMap) && module159(selectVolume.secret) ? "ShowVolume" : "ShowConfig";
            t.setState({
                state,
                selectVolume
            });
        };
        t.showVolumeTemplate = function() {
            t.setState({
                state: "ShowVolumeTemplate"
            });
        };
        t.showEditVolumeTemplate = function(selectVolume) {
            t.setState({
                state: "ShowVolumeTemplate",
                selectVolume
            });
        };
        t.resetState = function(e) {
            t.setState({
                state: e || "",
                selectVolume: {}
            });
        };
        t.showConfig = function() {
            t.setState({
                state: "ShowConfig",
                selectVolume: {}
            });
        };
        t.formatSpecVolume = function(e = {}, t) {
            if (isNotPersistentVolume(t)) {
                return t;
            }
            return {
                name: e.name || `volume-${generateId()}`,
                persistentVolumeClaim: {
                    claimName: t.name
                }
            };
        };
        t.updateVolumes = function(e) {
            let a;
            const r = module26(t.fedFormTemplate, `${t.prefix}spec.volumes`, []);
            const n = module63(t.selectVolume) ? undefined : module26(t.selectVolume, "specVolume", t.selectVolume);
            const l = t.formatSpecVolume(n, e);
            a = n ? r.map((e)=>{
                if (e.name === n.name) {
                    return l;
                }
                return e;
            }) : [].concat(module61(r), [
                l
            ]);
            module74(t.fedFormTemplate, `${t.prefix}spec.volumes`, a);
            t.checkMaxUnavalable(r);
        };
        t.updateVolumeMounts = function(e, a) {
            const r = module26(t.fedFormTemplate, `${t.prefix}spec.containers`, []).map((e)=>({
                    ...e,
                    type: "worker"
                }));
            const n = module26(t.fedFormTemplate, `${t.prefix}spec.initContainers`, []).map((e)=>({
                    ...e,
                    type: "init"
                }));
            const l = module1165(r, n);
            const o = module26(t.fedFormTemplate, `${t.prefix}spec.volumes`, []);
            e.forEach(({ containerName, volume, ...rest })=>{
                const i = l.find((e)=>e.name === containerName);
                const c = findVolume(o, volume);
                if (c && i) {
                    i.volumeMounts = i.volumeMounts || [];
                    const s = {
                        name: c.name,
                        ...rest
                    };
                    if (i.volumeMounts.find((e)=>e.name === c.name)) {
                        i.volumeMounts = i.volumeMounts.map((e)=>{
                            if (e.name === c.name) {
                                return s;
                            }
                            return e;
                        });
                    } else {
                        i.volumeMounts.push(s);
                    }
                    if (a && a.name !== c.name) {
                        i.volumeMounts = i.volumeMounts.filter((e)=>e.name !== a.name);
                    }
                    i.volumeMounts = i.volumeMounts.filter((e)=>e.readOnly !== "null").map(({ logPath: _logPath, ...rest })=>({
                            ...rest,
                            readOnly: String(rest.readOnly) === "true"
                        }));
                }
            });
            const i = [];
            const c = [];
            l.forEach((e)=>{
                if (e.type === "worker") {
                    delete e.type;
                    i.push(e);
                } else {
                    delete e.type;
                    c.push(e);
                }
            });
            module74(t.fedFormTemplate, `${t.prefix}spec.containers`, i);
            module74(t.fedFormTemplate, `${t.prefix}spec.initContainers`, c);
        };
        t.checkMaxUnavalable = function(e) {
            if ([
                "deployments",
                "daemonsets"
            ].includes(t.props.module) && module26(t.fedFormTemplate, "spec.strategy.type") === "RollingUpdate") {
                const a = e.some((e)=>!module63(e.persistentVolumeClaim));
                const r = module26(t.fedFormTemplate, "spec.strategy.rollingUpdate.maxUnavailable", null);
                if (a && !r) {
                    module74(t.fedFormTemplate, "spec.strategy.rollingUpdate.maxUnavailable", 1);
                }
            }
        };
        t.updateLogConfigs = function(e) {
            const a = safeParseJSON(module26(t.fedFormTemplate, t.logPathPrefix, ""), {});
            const r = module26(t.fedFormTemplate, `${t.prefix}spec.volumes`, []);
            e.forEach((e)=>{
                const t = findVolume(r, e.volume);
                if (t) {
                    const n = `containerLogConfigs.${e.containerName}.${e.name || t.name}`;
                    if (e.logPath) {
                        module74(a, n, e.logPath.split(","));
                    } else {
                        module242(a, n);
                    }
                }
            });
            module74(t.fedFormTemplate, t.logPathPrefix, JSON.stringify(a));
        };
        t.updateVolumeTemplate = function(e) {
            const a = module26(t.formTemplate, "metadata.namespace");
            const r = module26(t.fedFormTemplate, "spec.volumeClaimTemplates", []);
            module74(e, "metadata.namespace", a);
            let n;
            n = r.find((t)=>t.metadata.name === e.metadata.name) ? r.map((t)=>{
                if (t.metadata.name === e.metadata.name) {
                    return e;
                }
                return t;
            }) : [].concat(module61(r), [
                e
            ]);
            module74(t.fedFormTemplate, "spec.volumeClaimTemplates", n);
        };
        t.updateVolumeTemplateMounts = function(e) {
            const a = module26(t.fedFormTemplate, `${t.prefix}spec.containers`, []).map((e)=>({
                    ...e,
                    type: "worker"
                }));
            const r = module26(t.fedFormTemplate, `${t.prefix}spec.initContainers`, []).map((e)=>({
                    ...e,
                    type: "init"
                }));
            const n = module1165(a, r);
            e.forEach(({ containerName, ...rest })=>{
                const r = n.find((e)=>e.name === containerName);
                if (r) {
                    r.volumeMounts = r.volumeMounts || [];
                    const l = rest;
                    if (r.volumeMounts.find((e)=>e.name === l.name)) {
                        r.volumeMounts = r.volumeMounts.map((e)=>{
                            if (e.name === l.name) {
                                return l;
                            }
                            return e;
                        });
                    } else {
                        r.volumeMounts.push(l);
                    }
                    r.volumeMounts = r.volumeMounts.filter((e)=>e.readOnly !== "null").map((e)=>({
                            ...e,
                            readOnly: e.readOnly === "true"
                        }));
                }
            });
            const l = [];
            const o = [];
            n.forEach((e)=>{
                if (e.type === "worker") {
                    delete e.type;
                    l.push(e);
                } else {
                    delete e.type;
                    o.push(e);
                }
            });
            module74(t.fedFormTemplate, `${t.prefix}spec.containers`, l);
            module74(t.fedFormTemplate, `${t.prefix}spec.initContainers`, o);
        };
        t.checkVolumeNameExist = function(e) {
            const a = module26(t.fedFormTemplate, `${t.prefix}spec.volumes`, []);
            const r = module26(t.fedFormTemplate, "spec.volumeClaimTemplates", []);
            return a.some((t)=>t.name === e) || r.some((t)=>t.name === e);
        };
        t.state = {
            state: "",
            selectVolume: {},
            collectSavedLog: module26(t.fedFormTemplate, t.collectSavedLogPath)
        };
        const n = isEdgeWizePage();
        t.store = n ? new module1300 : new module839;
        t.projectStore = n ? new module970 : new module439;
        if (e.isFederated) {
            t.projectStore = n ? new module1000({
                module: t.projectStore.module
            }) : new module437({
                module: t.projectStore.module
            });
            t.store = n ? new module1000({
                module: t.store.module
            }) : new module437({
                module: t.store.module
            });
        }
        t.store.fetchList({
            namespace: t.namespace,
            cluster: t.cluster,
            limit: -1
        });
        t.handleVolume = t.handleVolume.bind(module88(t));
        t.handleVolumeTemplate = t.handleVolumeTemplate.bind(module88(t));
        t.handleLogToggle = t.handleLogToggle.bind(module88(t));
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.namespace) {
                    this.projectStore.fetchDetail({
                        name: this.namespace,
                        namespace: this.namespace,
                        cluster: this.cluster
                    });
                }
            }
        },
        {
            key: "handleVolume",
            value: function(e = {}, t = [], a) {
                if (!e.uid) {
                    t.forEach((t)=>{
                        t.name = e.name;
                    });
                }
                this.updateVolumes(e);
                this.updateVolumeMounts(t, a);
                this.updateLogConfigs(t);
                this.resetState();
            }
        },
        {
            key: "handleVolumeTemplate",
            value: function(e = {}, t = []) {
                t.forEach((t)=>{
                    t.name = e.name || module26(e, "metadata.name");
                });
                this.updateVolumeTemplate(e);
                this.updateVolumeTemplateMounts(t);
                this.updateLogConfigs(t);
                this.resetState();
            }
        },
        {
            key: "renderVolume",
            value: function() {
                const collectSavedLog = this.state.collectSavedLog;
                const t = module14.toJS(this.store.list.data);
                const isLoading = this.store.list.isLoading;
                const r = module26(this.fedFormTemplate, `${this.prefix}spec.containers`, []);
                const n = module26(this.fedFormTemplate, `${this.prefix}spec.initContainers`, []);
                const l = module1165(r, n);
                return <Module2313 volumes={t} volume={this.selectVolume} namespace={this.namespace} module={this.props.module} containers={l} onSave={this.handleVolume} onCancel={this.resetState} isLoading={isLoading} checkVolumeNameExist={this.checkVolumeNameExist} collectSavedLog={collectSavedLog}/>;
            }
        },
        {
            key: "renderConfig",
            value: function() {
                const props = this.props;
                const { isFederated, projectDetail, isEdgeWize } = props;
                const n = module26(this.fedFormTemplate, `${this.prefix}spec.containers`, []);
                const l = module26(this.fedFormTemplate, `${this.prefix}spec.initContainers`, []);
                const u = module1165(n, l);
                return <Module2323 isEdgeWize={isEdgeWize} volume={this.selectVolume} containers={u} cluster={this.cluster} namespace={this.namespace} onSave={this.handleVolume} onCancel={this.resetState} isFederated={isFederated} projectDetail={projectDetail} checkVolumeNameExist={this.checkVolumeNameExist}/>;
            }
        },
        {
            key: "renderVolumeTemplate",
            value: function() {
                const props = this.props;
                const { cluster, isEdgeWize } = props;
                const collectSavedLog = this.state.collectSavedLog;
                const n = module26(this.fedFormTemplate, `${this.prefix}spec.containers`, []);
                const l = module26(this.fedFormTemplate, `${this.prefix}spec.initContainers`, []);
                const u = module1165(n, l);
                const namespace = module26(this.formTemplate, "metadata.namespace", "");
                return <Module2327 isEdgeWize={isEdgeWize} volume={this.selectVolume} containers={u} cluster={cluster} namespace={namespace} onSave={this.handleVolumeTemplate} onCancel={this.resetState} checkVolumeNameExist={this.checkVolumeNameExist} collectSavedLog={collectSavedLog}/>;
            }
        },
        {
            key: "handleLogToggle",
            value: function() {
                const _this = this;
                this.setState(function(e) {
                    return {
                        collectSavedLog: e.collectSavedLog === "true" ? "false" : "true"
                    };
                }, function() {
                    module74(_this.fedFormTemplate, _this.collectSavedLogPath, _this.state.collectSavedLog);
                    if (_this.state.collectSavedLog === "false") {
                        module242(_this.fedFormTemplate, _this.logPathPrefix);
                    }
                });
            }
        },
        {
            key: "renderToolTipContent",
            value: function() {
                return <div><p>{t("COLLECT_LOGS_ON_VOLUMES_DESC")}</p></div>;
            }
        },
        {
            key: "renderToggle",
            value: function(disabled) {
                const collectSavedLog = this.state.collectSavedLog;
                return <span><module186.Toggle disabled={disabled} checked={collectSavedLog === "true"} onChange={this.handleLogToggle}/></span>;
            }
        },
        {
            key: "renderTitle",
            value: function() {
                return <div className="font-bold margin-b8 relative"><span>{t("STORAGE_SETTINGS")}</span>{globals.app.hasClusterExtensionModule(this.cluster, "whizard-logging") && <div className={module2329.toggle}>{this.projectEnableCollectingFileLog ? this.renderToggle() : <module186.Tooltip content={t.html("PROJECT_COLLECT_SAVED_DISABLED_DESC")}>{this.renderToggle(true)}</module186.Tooltip>}<span className="text-secondary align-middle"> {t("COLLECT_LOGS_ON_VOLUMES")} </span><module186.Tooltip content={this.renderToolTipContent()}><module186.Icon name="question"/></module186.Tooltip></div>}</div>;
            }
        },
        {
            key: "renderList",
            value: function() {
                const { formRef, formProps = {}, module, hideVolumeSetting = false } = this.props;
                const collectSavedLog = this.state.collectSavedLog;
                const s = module14.toJS(this.store.list.data);
                const isLoading = this.store.list.isLoading;
                const d = module26(this.fedFormTemplate, `${this.prefix}spec.containers`, []);
                const p = module26(this.fedFormTemplate, `${this.prefix}spec.initContainers`, []);
                const m = module1165(d, p);
                const g = module26(this.fedFormTemplate, `${this.prefix}spec.volumes`, []).length === 0 && module26(this.fedFormTemplate, "spec.volumeClaimTemplates", []).length === 0;
                const logPath = safeParseJSON(module26(this.fedFormTemplate, this.logPathPrefix, []));
                const E = module === "statefulsets";
                return <module186.Form data={this.fedFormTemplate} ref={formRef} {...formProps}>{this.renderTitle()}{collectSavedLog === "true" && g && <module186.Alert className="margin-b12" icon="information" type="warning" message={t(E ? "PVC_OR_TEMPLATE_EMPTY" : "PVC_EMPTY")}/>}<div className={module2329.volumes}>{E && <module186.Form.Item><Module2325 prefix={this.prefix} name="spec.volumeClaimTemplates" containers={m} onShowAddVolume={this.showVolumeTemplate} onShowEdit={this.showEditVolumeTemplate} collectSavedLog={collectSavedLog} logPath={logPath} hideVolumeSetting={hideVolumeSetting}/></module186.Form.Item>}<module186.Form.Item><Module2311 prefix={this.prefix} name={`${this.prefix}spec.volumes`} volumes={s} containers={m} loading={isLoading} onShowVolume={this.showVolume} onShowConfig={this.showConfig} onShowEdit={this.showEditVolume} collectSavedLog={collectSavedLog} logPath={logPath}/></module186.Form.Item></div></module186.Form>;
            }
        },
        {
            key: "render",
            value: function() {
                let e = null;
                switch(this.state.state){
                    case "ShowVolume":
                        e = this.renderVolume();
                        break;
                    case "ShowConfig":
                        e = this.renderConfig();
                        break;
                    case "ShowVolumeTemplate":
                        e = this.renderVolumeTemplate();
                        break;
                    default:
                        e = this.renderList();
                }
                return e;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.prefix || "spec.template.";
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.cluster;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.namespace || module26(this.formTemplate, "metadata.namespace", "");
            }
        },
        {
            key: "collectSavedLogPath",
            get: function() {
                return `${this.prefix}metadata.annotations["kubesphere.io/collectSavedLog"]`;
            }
        },
        {
            key: "logPathPrefix",
            get: function() {
                return `${this.prefix}metadata.annotations["logging.kubesphere.io/logsidecar-config"]`;
            }
        },
        {
            key: "projectEnableCollectingFileLog",
            get: function() {
                return module26(this.projectStore.detail, 'labels["logging.kubesphere.io/logsidecar-injection"]') === "enabled";
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        },
        {
            key: "fedFormTemplate",
            get: function() {
                if (this.props.isFederated) {
                    return module26(this.formTemplate, "spec.template");
                }
                return this.formTemplate;
            }
        },
        {
            key: "selectVolume",
            get: function() {
                return {
                    ...this.state.selectVolume
                };
            }
        }
    ]);
    return r;
})(Component);
const B = V;
export { B as Component };
const Y = observer(V);
export default Y;
