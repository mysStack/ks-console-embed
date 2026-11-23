import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module63 from "unpacked/module-63.js";
import module321 from "unpacked/module-321.js";
import module856 from "unpacked/module-856.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import Module1101 from "components/Base/NotifyConfirm";
import Module1355 from "components/Inputs/TrafficSlider";
import module1446 from "stores/grayrelease";
import module318 from "stores/workload/index";
import { trigger } from "utils/action";
import { joinSelector, mergeLabels } from "utils/index";
import { GRAY_RELEASE_CANARY_CONTENT, GRAY_RELEASE_CATEGORIES } from "utils/constants";
import module435 from "utils/form.templates";
import { strategyOptions } from "unpacked/module-468.js";
import Module1143 from "unpacked/module-1143.js";
import Module4704 from "pages/projects/components/Modals/GrayReleaseDetail/Component";
import Module4706 from "pages/projects/components/Modals/GrayReleaseDetail/Monitor";
import Module4709 from "pages/projects/components/Modals/GrayReleaseDetail/Edit";
import module4712 from "unpacked/module-4712.js";
let o;
let c;
let s;
const q = {
    exact: "EXACT_MATCH",
    prefix: "PREFIX_MATCH",
    regex: "REGEX_MATCH"
};
const z = module321(GRAY_RELEASE_CANARY_CONTENT, "value");
const K = inject("rootStore")(o = observer(o = trigger((s = c = ((Component_1)=>{
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
        n.updateTipInfo = function() {
            const e = module14.toJS(n.store.detail);
            const { governor, newVersion, oldVersion } = e;
            if (governor) {
                n.setState({
                    tipType: "info",
                    tipInfo: governor === oldVersion ? t.html("OLD_VERSION_TAKEOVER_DESC", {
                        newVersion,
                        oldVersion
                    }) : t.html("NEW_VERSION_TAKEOVER_DESC", {
                        newVersion,
                        oldVersion
                    })
                });
            } else {
                n.setState({
                    tipInfo: ""
                });
            }
        };
        n.handleRatioChange = function(e) {
            n.setState({
                ratio: e
            });
        };
        n.handleConfirmSaveRatio = function() {
            const ratio = n.state.ratio;
            n.handleSaveRatio(ratio);
        };
        n.handleSaveRatio = function(weight) {
            const t = module14.toJS(n.store.detail);
            const { oldRoute, oldVersion, newRoute, newVersion, protocol } = t;
            const l = {};
            module74(l, `spec.template.spec.${protocol}[0].route`, [
                {
                    ...oldRoute,
                    weight: 100 - weight
                },
                {
                    ...newRoute,
                    weight
                }
            ]);
            if (protocol === "tcp") {
                module74(l, `spec.template.spec.${protocol}[0].match`, []);
            }
            let i = "";
            if (weight === 100) {
                i = newVersion;
            } else if (weight === 0) {
                i = oldVersion;
            }
            module74(l, "spec.governor", i);
            n.triggerUpdateRatio(l);
        };
        n.triggerUpdateTipInfo = function(e, t) {
            return n.trigger("grayrelease.takeover.confirm", {
                store: n.store,
                data: e,
                mode: t,
                success: function() {
                    n.updateTipInfo();
                    n.hideEditModal();
                }
            });
        };
        n.triggerUpdateRatio = function(e, t) {
            return n.trigger("grayrelease.takeover.confirm", {
                store: n.store,
                data: e,
                mode: t,
                success: function() {
                    const e = module14.toJS(n.store.detail);
                    const t = module26(e, "newRoute.weight", 50);
                    n.setState({
                        ratio: t
                    });
                    n.updateTipInfo();
                    n.hideEditModal();
                }
            });
        };
        n.handleResetRatio = function() {
            const e = module14.toJS(n.store.detail);
            const t = module26(e, "newRoute.weight");
            n.setState({
                ratio: t
            });
        };
        n.showEditModal = function() {
            n.setState({
                showEditModal: true
            });
        };
        n.hideEditModal = function() {
            n.setState({
                showEditModal: false
            });
        };
        n.updateStrategy = function(e) {
            const t = module26(e, "spec.protocol", "http");
            const a = `spec.template.spec.${t}[0]`;
            const r = module26(e, `${a}.match[0].headers.cookie`);
            if (r && module63(Object.values(r)[0])) {
                module242(e, `${a}.match[0].headers.cookie`);
            }
            const n = module26(e, `${a}.match[0].headers`);
            if (n) {
                Object.keys(n).forEach((t)=>{
                    if (module63(t)) {
                        module242(e, `${a}.match[0].headers.${t}`);
                    }
                });
            }
            const o = module26(e, `${a}.match[0].uri`);
            if (o && module63(Object.values(o)[0])) {
                module242(e, `${a}.match[0].uri`);
            }
            const c = module26(e, `${a}.match[0].headers['User-Agent'].regex`);
            if (c && module63(Object.values(c)[0])) {
                module242(e, `${a}.match[0].headers['User-Agent'].regex`);
            }
            return e;
        };
        n.handleComponentEdit = function(e, t) {
            const a = module14.toJS(n.store.detail);
            const { type, byContent, protocol, newVersion, oldVersion } = a;
            const i = {};
            if (t.includes("grayReleaseStrategy")) {
                i.strategy = n.updateStrategy(e.strategy);
            }
            if (t.includes("grayReleaseComponent")) {
                i.workload = e.workload;
            }
            const u = module26(i, `strategy.spec.template.spec.${protocol}[0].route[1].weight`);
            if (type === "Canary") {
                let d = "";
                if (u === 100) {
                    d = newVersion;
                } else if (u === 0) {
                    d = oldVersion;
                }
                module74(i, "strategy.spec.governor", d);
                if (byContent) {
                    return n.triggerUpdateTipInfo(i, "edit");
                }
                return n.triggerUpdateRatio(i, "edit");
            }
            if (type === "Bluegreen") {
                return n.triggerUpdateTipInfo(i, "edit");
            }
        };
        n.handleOffline = function() {
            const e = module14.toJS(n.store.detail);
            const { type, cluster, namespace, governor, oldVersion, oldWorkloadName, newWorkloadName } = e;
            if (governor) {
                const u = n.props.onDelete;
                const d = governor === oldVersion ? newWorkloadName : oldWorkloadName;
                if (d) {
                    n.workloadStore.delete({
                        name: d,
                        cluster,
                        namespace
                    });
                    u();
                }
            } else if (type !== "Mirror") {
                n.setState({
                    tipType: "warning",
                    tipInfo: t("DELETE_GRAYSCALE_RELEASE_TASK_DESC")
                });
            } else {
                const f = n.props.onDelete;
                if (newWorkloadName) {
                    n.workloadStore.delete({
                        name: newWorkloadName,
                        cluster,
                        namespace
                    });
                    f();
                }
            }
        };
        n.handleTakeover = function(e) {
            const t = module14.toJS(n.store.detail);
            const { type, byContent, newVersion, oldVersion } = t;
            const s = {
                spec: {
                    governor: e === "new" ? newVersion : oldVersion
                }
            };
            switch(type){
                case "Canary":
                    if (byContent) {
                        return n.triggerUpdateTipInfo(s);
                    }
                    return n.handleSaveRatio(e === "new" ? 100 : 0);
                case "Bluegreen":
                    return n.triggerUpdateTipInfo(s);
                default:
                    return undefined;
            }
        };
        n.handleRecover = function() {
            n.triggerUpdateTipInfo({
                spec: {
                    governor: ""
                }
            });
        };
        n.state = {
            tipType: "",
            tipInfo: "",
            ratio: 50,
            showEditModal: false
        };
        n.store = new module1446;
        n.workloadType = module26(e.detail, 'annotations["servicemesh.kubesphere.io/workloadType"]', "deployments");
        n.workloadStore = new module318(n.workloadType);
        if (e.visible) {
            n.getData(e.detail);
            n.getWorkLoadDetail(e.detail);
        }
        return n;
    }
    module37(r, [
        {
            key: "initWebsocket",
            value: function(e) {
                const _this = this;
                const a = e || {};
                const { cluster, namespace, selector } = a;
                const c = `api/v1/watch/${cluster ? `klusters/${cluster}/` : ""}namespaces/${namespace}/pods?labelSelector=${joinSelector(selector)}`;
                if (c && namespace && selector) {
                    this.websocket.watch(c);
                    this.getWorkLoadDetail = module856(this.getWorkLoadDetail, 2000);
                    this.disposer = module14.reaction(function() {
                        return _this.websocket.message;
                    }, function(a) {
                        if (a.object.kind === "Pod" && a.type !== "ADDED") {
                            _this.getWorkLoadDetail({
                                ...e,
                                silent: true
                            });
                        }
                    });
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { visible, detail } = props;
                if (visible && visible !== e.visible) {
                    this.getData(detail);
                    this.getWorkLoadDetail(detail);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.disposer) {
                    this.disposer();
                }
                this.websocket.close();
            }
        },
        {
            key: "getData",
            value: function(t = {}) {
                const _this = this;
                if (t.name && t.namespace) {
                    this.store.fetchDetail(t).then(()=>{
                        const t = module14.toJS(_this.store.detail);
                        if (t.type === "Canary" && !t.byContent) {
                            const a = module26(t, "newRoute.weight", 50);
                            _this.setState({
                                ratio: a
                            });
                        }
                        _this.initWebsocket(t);
                        _this.updateTipInfo();
                    });
                }
            }
        },
        {
            key: "getWorkLoadDetail",
            value: function({ silent, ...rest } = {}) {
                const { cluster, namespace, selector, hosts, newVersion, oldVersion } = rest;
                if (namespace && selector) {
                    const labelSelector = joinSelector(selector);
                    this.workloadStore.fetchListByK8s({
                        cluster,
                        namespace,
                        labelSelector
                    });
                    this.store.fetchComponents({
                        cluster,
                        namespace,
                        service: hosts,
                        labelSelector,
                        newVersion,
                        oldVersion,
                        silent
                    });
                }
            }
        },
        {
            key: "getStrategyOptions",
            value: function(e) {
                try {
                    const t = module26(e, "_originData.spec.strategyPolicy");
                    return strategyOptions.filter((e)=>e.value === t);
                } catch (error) {
                    console.error("getCurrentStrategyOptions -> error", error);
                    return [];
                }
            }
        },
        {
            key: "renderTitle",
            value: function() {
                const e = module14.toJS(this.store.detail);
                const a = GRAY_RELEASE_CATEGORIES.find((t)=>t.type === e.type) || {};
                return <div className={module4712.title}><img src="/assets/default-app.svg" alt=""/><div className={module4712.text}><div className="h4">{e.name}</div><p>{t("RELEASE_MODE")}: <strong>{t(`${a.title}_LOW`)}</strong></p></div>{this.CanDelete && <module186.Button onClick={this.handleOffline}>{t("DELETE")}</module186.Button>}</div>;
            }
        },
        {
            key: "renderComponents",
            value: function() {
                const jobDetail = module14.toJS(this.store.detail);
                const data = this.store.components.data;
                const isComponentsLoading = this.store.isComponentsLoading;
                if (isComponentsLoading) {
                    return <div><div className={module4712.sectionTitle}><div>{t("VERSIONS")}</div><p>{t("GRAY_COMPONENT_DESC")}</p></div><module186.Loading spinning={isComponentsLoading} className={module4712.loading}/></div>;
                }
                const n = {
                    showEditModal: this.showEditModal,
                    onTakeover: jobDetail.type !== "Mirror" ? this.handleTakeover : null,
                    namespace: this.props.detail.namespace,
                    cluster: this.props.detail.cluster,
                    workspace: this.props.detail.workspace,
                    maxLength: Math.min(Math.max(module26(data, `[${jobDetail.newVersion}].pods.length`, 0), module26(data, `[${jobDetail.oldVersion}].pods.length`, 0)), 3),
                    jobDetail,
                    workloadType: this.workloadType
                };
                return <div><div className={module4712.sectionTitle}><div>{t("VERSIONS")}</div><p>{t("GRAY_COMPONENT_DESC")}</p></div><module186.Columns><module186.Column><Module4704 data={data[jobDetail.newVersion]} pods={module14.toJS(module26(data, `[${jobDetail.newVersion}].pods`, []))} type="new" isGovernor={jobDetail.governor === jobDetail.newVersion} {...n}/></module186.Column><module186.Column><Module4704 data={data[jobDetail.oldVersion]} pods={module14.toJS(module26(data, `[${jobDetail.oldVersion}].pods`, []))} type="old" isGovernor={jobDetail.governor === jobDetail.oldVersion} {...n}/></module186.Column></module186.Columns></div>;
            }
        },
        {
            key: "renderTraffic",
            value: function() {
                const e = module14.toJS(this.store.detail);
                const ratio = this.state.ratio;
                const r = module26(e, "newRoute.weight");
                return <><div className={module4712.sectionTitle}><div>{t("TRAFFIC_DISTRIBUTION")}</div><p>{t("ALLOCATE_TRAFFIC_DESC")}</p></div><Module1355 min={0} max={100} value={ratio} leftContent={e.newVersion} rightContent={e.oldVersion} onChange={this.handleRatioChange}/><Module1101 visible={ratio !== r} width={400} title={t("ADJUST_TRAFFIC_DISTRIBUTION")} content={t.html("ADJUST_TRAFFIC_DISTRIBUTION_DESC", {
                    newVersion: e.newVersion,
                    oldVersion: e.oldVersion,
                    ratioNew: ratio,
                    ratioOld: 100 - ratio
                })} cancelText={t("CANCEL")} confirmText={t("OK")} isSubmitting={this.store.isSubmitting} onCancel={this.handleResetRatio} onConfirm={this.handleConfirmSaveRatio}/><Module1143 paddingTop={20} hiddenRadio options={this.getStrategyOptions(e)}/></>;
            }
        },
        {
            key: "renderBluegreen",
            value: function() {
                const e = module14.toJS(this.store.detail);
                const version = e.governor || (e.oldRoute.weight === 100 ? e.oldVersion : e.newVersion);
                return <><div className={module4712.sectionTitle}><div>{t("TRAFFIC_DISTRIBUTION")}</div><p>{t("BLUE_GREEN_TRAFFIC_DISTRI_DESC")}</p></div><div className={module4712.barWrapper}><div className={module4712.bar}>{t("VERSION_TRAFFIC_PERCENT", {
                    version,
                    percent: "100"
                })}</div></div><Module1143 paddingTop={20} hiddenRadio options={this.getStrategyOptions(e)}/></>;
            }
        },
        {
            key: "renderMirror",
            value: function() {
                const e = module14.toJS(this.store.detail);
                const a = e.governor || (e.oldRoute.weight === 100 ? e.oldVersion : e.newVersion);
                return <><div className={module4712.sectionTitle}><div>{t("TRAFFIC_DISTRIBUTION")}</div><p>{t("TRAFFIC_MIRRORING_TRAFFIC_DISTRI_DESC")}</p></div><div className={module4712.mirror}><div className={module4712.barWrapper}><div className={module3(module4712.bar, module31({}, module4712.mirrorBar, a !== e.newVersion))}>{t("VERSION_TRAFFIC_PERCENT", {
                    version: e.newVersion,
                    percent: "100"
                })}</div></div><div className={module3(module4712.mirrorIcon, module31({}, module4712.revertMirrorIcon, a === e.oldVersion))}><img src="/assets/mirror.svg" alt=""/></div><div className={module4712.barWrapper}><div className={module3(module4712.bar, module31({}, module4712.mirrorBar, a !== e.oldVersion))}>{t("VERSION_TRAFFIC_PERCENT", {
                    version: e.oldVersion,
                    percent: "100"
                })}</div></div></div><Module1143 paddingTop={20} hiddenRadio options={this.getStrategyOptions(e)}/></>;
            }
        },
        {
            key: "renderContentMatch",
            value: function() {
                const e = module14.toJS(this.store.detail);
                const data = this.store.components.data;
                const isComponentsLoading = this.store.isComponentsLoading;
                if (isComponentsLoading) {
                    return <div><div className={module4712.sectionTitle}><div>{t("REQUEST_PARAMETERS")}</div><p>{t("SPECIFY_REQUEST_PARAMETERS_DESC")}</p></div><module186.Loading spinning={isComponentsLoading} className={module4712.loading}/></div>;
                }
                const n = module26(e, "newRoute.match[0]");
                const o = data[e.newVersion] || {};
                if (!n) {
                    return null;
                }
                const c = module26(n, "uri", {});
                const s = module26(n, "headers", {});
                const l = Object.keys(c)[0] || "";
                const i = c[l] || "-";
                const u = s.cookie || {};
                const d = Object.keys(u)[0] || "";
                const f = u[d] || "-";
                const p = s["User-Agent"] || {};
                const m = p.regex && p.regex.slice(3, p.regex.length - 3).split("|").map((e)=>{
                    if (z[e]) {
                        return z[e].label;
                    }
                    return e;
                }).join(", ") || "-";
                const h = Object.keys(s).find((e)=>![
                        "cookie",
                        "User-Agent"
                    ].includes(e));
                const g = s[h] || {};
                const _ = Object.keys(g)[0] || "";
                const y = g[_] || "-";
                return <><div className={module4712.sectionTitle}><div>{t("REQUEST_PARAMETERS")}</div><p>{t("SPECIFY_REQUEST_PARAMETERS_DESC")}</p></div><div className={module4712.matchWrapper}>{e.governor && <div className={module4712.governor}><div><div><module186.Icon name="appcenter" size={40}/></div><div>{t.html("SERVICE_VERSION_RECEIVE_ALL_TRAFFIC", {
                    version: e.governor
                })}</div><div><module186.Button onClick={this.handleRecover}>{t("RESTORE")}</module186.Button></div></div></div>}<module186.Columns><module186.Column><ul><li><module186.Icon name="earth" size={24}/><strong>{d ? t(`COOKIE_${q[d]}`) : t("COOKIE")}</strong>{f}</li><li><module186.Icon name="image" size={24}/><strong>{t("OS")}</strong>{m}</li><li><module186.Icon name="pen" size={24}/><strong>{_ ? t(`HEADER_${q[_]}`) : t("HEADER")}</strong>{h ? `${h}: ${y}` : ""}</li><li><module186.Icon name="ip" size={24}/><strong>{l ? t(`URL_${q[l]}`) : t("URL")}</strong>{i}</li></ul></module186.Column><module186.Column className="is-narrow"><div className={module4712.matchArrow}><module186.Icon name="update" color={{
                    primary: "#329dce"
                }} size={24}/></div></module186.Column><module186.Column className="is-narrow"><div className={module4712.matchVersion}><div><div><module186.Icon name="appcenter" size={40}/></div><div><span className="ks-tag">{e.newVersion}</span></div><div><strong>{e.hosts}</strong></div><p>{t("REPLICA_COUNT")}: <strong>{o.available}</strong>/{o.desire}</p></div></div></module186.Column></module186.Columns></div><Module1143 paddingTop={20} hiddenRadio options={this.getStrategyOptions(e)}/></>;
            }
        },
        {
            key: "renderPolicy",
            value: function() {
                const e = module14.toJS(this.store.detail);
                if (e.type === "Canary") {
                    return <div style={{
                        marginTop: 20
                    }}>{e.byContent ? this.renderContentMatch() : this.renderTraffic()}</div>;
                }
                if (e.type === "Bluegreen") {
                    return <div style={{
                        marginTop: 20
                    }}>{this.renderBluegreen()}</div>;
                }
                if (e.type === "Mirror") {
                    return <div style={{
                        marginTop: 20
                    }}>{this.renderMirror()}</div>;
                }
                return null;
            }
        },
        {
            key: "renderMonitor",
            value: function() {
                const detail = module14.toJS(this.store.detail);
                return <Module4706 detail={detail} store={this.store}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                const state = this.state;
                const { showEditModal, tipInfo, tipType } = state;
                const l = module14.toJS(this.store.detail);
                return <Module788 className={module4712.modal} bodyClassName={module4712.body} headerClassName={module4712.header} title={t("TASK_STATUS")} cancelText={t("CLOSE")} onCancel={onCancel} visible={visible} fullScreen>{tipInfo && <module186.Alert className="margin-b8" type={tipType} message={tipInfo}/>}{this.renderTitle()}<div className={module4712.wrapper}>{this.renderComponents()}{this.renderPolicy()}</div><div className={module4712.monitor}>{this.renderMonitor()}</div><Module4709 visible={showEditModal} module="grayreleases" formData={this.formData} cluster={l.cluster} onOk={this.handleComponentEdit} onCancel={this.hideEditModal} isSubmitting={this.store.isSubmitting}/></Module788>;
            }
        },
        {
            key: "websocket",
            get: function() {
                return this.props.rootStore.websocket;
            }
        },
        {
            key: "formData",
            get: function() {
                const e = module14.toJS(this.store.detail);
                const t = `${e.hosts}-${e.newVersion}`;
                const a = module14.toJS(this.workloadStore.list.data).find((e)=>e.name === t) || {};
                const r = module435[this.workloadType]({
                    namespace: e.namespace
                });
                const n = {
                    strategy: module14.toJS(e._originData),
                    workload: {
                        apiVersion: r.apiVersion,
                        kind: r.kind,
                        metadata: {
                            name: t,
                            namespace: a.namespace,
                            labels: a.labels,
                            annotations: a.annotations
                        },
                        spec: a.spec
                    }
                };
                mergeLabels(n.workload, {
                    version: e.newVersion
                });
                return n;
            }
        },
        {
            key: "CanDelete",
            get: function() {
                const detail = this.store.detail;
                const { cluster, workspace, namespace } = detail;
                return globals.app.hasPermission({
                    cluster,
                    workspace,
                    project: namespace,
                    module: "grayscale-release",
                    action: "delete"
                });
            }
        }
    ]);
    return r;
})(Component), c.propTypes = {
    visible: module1.bool,
    detail: module1.object,
    onCancel: module1.func,
    onDelete: module1.func
}, c.defaultProps = {
    visible: false,
    detail: {},
    onCancel: function() {},
    onDelete: function() {}
}, o = s)) || o) || o) || o;
export default K;
