import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module31 from "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import Module788 from "components/Base/Modal";
import Module833 from "unpacked/module-833.js";
import module450 from "unpacked/module-450.js";
import module26 from "unpacked/module-26.js";
import module60 from "unpacked/module-60.js";
import module63 from "unpacked/module-63.js";
import module241 from "unpacked/module-241.js";
import module862 from "unpacked/module-862.js";
import module1 from "unpacked/module-1.js";
import { Component } from "unpacked/module-553.js";
import module1047 from "unpacked/module-1047.js";
import module437 from "stores/federated";
import module443 from "stores/service";
import { joinFieldSelector, joinSelector } from "utils/index";
import { ICON_TYPES, MODULE_KIND_MAP } from "utils/constants";
import module2459 from "unpacked/module-2459.js";
const A = ((Component_1)=>{
    module55(n, Component_1);
    let a;
    var r = ((e)=>{
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
    })(n);
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.stopPropagation = function(e) {
            return e.stopPropagation();
        };
        a.handleOk = module44(module41.mark(function e() {
            let t;
            let r;
            let n;
            let l;
            let u;
            let o;
            let i;
            let s;
            let f;
            let d;
            let p;
            let m;
            let namespace;
            let v;
            let g;
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            t = a.props;
                            r = t.onOk;
                            n = t.resource;
                            l = t.k8sVersion;
                            u = t.store;
                            o = a.state;
                            i = o.selectedRelatedResourceIds;
                            s = o.relatedResources;
                            f = o.scheduledProjectList;
                            d = o.customScaling;
                            p = [];
                            s.forEach((e)=>{
                                if (i.includes(e.uid) && e.module === "services") {
                                    p.push(a.serviceStore.delete(e));
                                }
                            });
                            m = [];
                            d.forEach((e)=>{
                                m.push(a.hpaStore.delete(module241(e, "cluster", "namespace", "name"), l));
                            });
                            e.next = 8;
                            return Promise.all(m);
                        case 8:
                            e.next = 10;
                            return Promise.all(p);
                        case 10:
                            if (!module60(n)) {
                                e.next = 21;
                                break;
                            }
                            namespace = n[0].namespace;
                            v = n.map((e)=>e.name);
                            g = v.filter((e)=>f.includes(e));
                            e.next = 16;
                            return Promise.all(n.map((e)=>u.delete(e, l)));
                        case 16:
                            e.next = 18;
                            return Promise.all(g.map((name)=>u.deleteSchedule({
                                    name,
                                    namespace
                                })));
                        case 18:
                            u.list.setSelectRowKeys([]);
                            e.next = 27;
                            break;
                        case 21:
                            e.next = 23;
                            return u.delete(n, l);
                        case 23:
                            e.t0 = f.includes(n.name);
                            if (!e.t0) {
                                e.next = 27;
                                break;
                            }
                            e.next = 27;
                            return u.deleteSchedule({
                                name: n.name,
                                namespace: n.namespace
                            });
                        case 27:
                            r();
                        case 28:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        a.handleItemClick = function(e) {
            const uid = e.currentTarget.dataset.uid;
            a.setState(function({ selectedRelatedResourceIds }) {
                return {
                    selectedRelatedResourceIds: selectedRelatedResourceIds.includes(uid) ? selectedRelatedResourceIds.filter((e)=>e !== uid) : [].concat(module61(selectedRelatedResourceIds), [
                        uid
                    ])
                };
            });
        };
        a.handleSelectAll = function() {
            const a_state = a.state;
            const e_relatedResources = a_state.relatedResources;
            if (a_state.selectedRelatedResourceIds.length < e_relatedResources.length) {
                a.setState({
                    selectedRelatedResourceIds: e_relatedResources.map((e)=>e.uid)
                });
            } else {
                a.setState({
                    selectedRelatedResourceIds: []
                });
            }
        };
        a.renderContentItem = function(e) {
            const selectedRelatedResourceIds = a.state.selectedRelatedResourceIds;
            return <div key={e.uid} data-uid={e.uid} className={module3(module2459.resource, module31({}, module2459.selected, selectedRelatedResourceIds.includes(e.uid)))} onClick={a.handleItemClick}><module186.Checkbox checked={selectedRelatedResourceIds.includes(e.uid)} onClick={a.stopPropagation}/><module186.Icon name={ICON_TYPES[e.module]} size={20} type={selectedRelatedResourceIds.includes(e.uid) ? "light" : "dark"}/><span className={module2459.resourceName}>{e.name}</span><span className={module2459.resourceType}>{t(MODULE_KIND_MAP[e.module])}</span></div>;
        };
        a.renderCustomScalingIterm = function(e) {
            return <div key={e.uid} data-uid={e.uid} className={module3(module2459.resource, module2459.selected, module2459.disabled, module2459.customScalingItem)}><div className={module2459.disabled}><module186.Checkbox checked/><module186.Icon name={ICON_TYPES[e.module]} size={20} type="light"/><span className={module2459.resourceName}>{e.name}</span><span className={module2459.resourceType}>{t(MODULE_KIND_MAP[e.module])}</span></div><module186.Tooltip content={t("DELETE_CUSTOM_SCALING_WITH_WORKLOAD")}><module186.Icon name="question" size={20} type="light"/></module186.Tooltip></div>;
        };
        a.serviceStore = new module443;
        a.hpaStore = new module1047;
        if (e.isFederated) {
            a.serviceStore = new module437({
                module: a.serviceStore.module
            });
        }
        a.state = {
            relatedResources: [],
            selectedRelatedResourceIds: [],
            enableConfirm: false,
            timer: 3,
            scheduledProjectList: [],
            customScaling: []
        };
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.visible) {
                    this.fetchRelatedResources(this.props.resource);
                    this.startTimer();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.timer) {
                    clearInterval(this.timer);
                }
            }
        },
        {
            key: "startTimer",
            value: function() {
                const _this = this;
                if (this.timer) {
                    clearInterval(this.timer);
                }
                this.timer = setInterval(()=>{
                    _this.setState(function({ timer }) {
                        return {
                            timer: Math.max(timer - 1, 0),
                            enableConfirm: timer <= 1
                        };
                    }, function() {
                        if (_this.state.enableConfirm && _this.timer) {
                            clearInterval(_this.timer);
                        }
                    });
                }, 1000);
            }
        },
        {
            key: "fetchRelatedResources",
            value: (a = module44(module41.mark(function e(t) {
                let a;
                let scheduledProjectList;
                let n;
                let customScaling;
                let u;
                let o;
                let i;
                let s;
                let f;
                let p;
                const _this = this;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = this.props.store;
                                this.setState({
                                    isLoading: true
                                });
                                scheduledProjectList = [];
                                n = [].concat(t);
                                customScaling = [];
                                if (!globals.app.hasKSModule("ks-autoscaling")) {
                                    e.next = 11;
                                    break;
                                }
                                u = [].concat(t);
                                e.next = 9;
                                return Promise.all(u.map((e)=>_this.hpaStore.fetchList({
                                        limit: -1,
                                        cluster: e.cluster,
                                        namespace: e.namespace,
                                        labelSelector: joinSelector({
                                            "autoscaling.kubeshpere.io/scale-target-kind": module26(e, "._originData.kind"),
                                            "autoscaling.kubeshpere.io/scale-target-name": e.name
                                        })
                                    })));
                            case 9:
                                o = e.sent;
                                customScaling = module450(o).map((e)=>module26(e, "name")).filter(Boolean).map((e)=>({
                                        cluster: undefined,
                                        namespace: undefined,
                                        module: _this.hpaStore.module,
                                        uid: e,
                                        name: e
                                    }));
                            case 11:
                                i = [];
                                n.forEach((e)=>{
                                    const t = e.selector || e.resource.selector;
                                    if (!module63(t)) {
                                        const fieldSelector = joinFieldSelector(t);
                                        i.push(_this.serviceStore.fetchListByMatchedDeployments({
                                            cluster: e.cluster,
                                            namespace: e.namespace,
                                            fieldSelector
                                        }));
                                    }
                                });
                                e.next = 15;
                                return Promise.all(i);
                            case 15:
                                s = e.sent;
                                if (a.module !== "deployments") {
                                    e.next = 30;
                                    break;
                                }
                                e.next = 19;
                                return a.getAllScheduleProject?.({
                                    namespace: undefined
                                });
                            case 19:
                                e.t1 = f = e.sent;
                                e.t0 = e.t1 !== null;
                                if (!e.t0) {
                                    e.next = 23;
                                    break;
                                }
                                e.t0 = f !== undefined;
                            case 23:
                                if (!e.t0) {
                                    e.next = 27;
                                    break;
                                }
                                e.t2 = f;
                                e.next = 28;
                                break;
                            case 27:
                                e.t2 = [];
                            case 28:
                                p = e.t2;
                                if (!module63(p)) {
                                    scheduledProjectList = p.items.map((e)=>e.metadata.name);
                                }
                            case 30:
                                this.setState({
                                    relatedResources: module862(module450(s), "uid"),
                                    isLoading: false,
                                    scheduledProjectList,
                                    customScaling
                                });
                            case 31:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return a.apply(this, arguments);
            })
        },
        {
            key: "renderContent",
            value: function() {
                const state = this.state;
                const { isLoading, relatedResources, selectedRelatedResourceIds, customScaling } = state;
                if (isLoading === false && module63(relatedResources) && module63(customScaling)) {
                    return <Module833 icon="appcenter" className={module2459.empty} title={t("NO_RELATED_RESOURCE_FOUND")} desc={t("NO_WORKLOAD_RELATED_RESOURCE_DESC")}/>;
                }
                return <div className={module2459.resources}>{!module63(relatedResources) && <div className={module2459.resource}><module186.Checkbox checked={!module63(selectedRelatedResourceIds)} onClick={this.handleSelectAll} indeterminate={!(module63(selectedRelatedResourceIds) || relatedResources.length === selectedRelatedResourceIds.length)}/><span className={module2459.resourceName}>{t("SELECT_ALL")}</span></div>}{relatedResources.map(this.renderContentItem)}{customScaling.map(this.renderCustomScalingIterm)}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { enableConfirm, timer } = state;
                const props = this.props;
                const { resource, onOk: _onOk, onCancel, isSubmitting, ...rest } = props;
                const title = module60(resource) && resource.length !== 1 ? t("DELETE_MULTIPLE_WORKLOADS") : t("DELETE_WORKLOAD");
                const description = module60(resource) && resource.length !== 1 ? t.html("DELETE_WORKLOAD_DESC_PL", {
                    resource: resource.map((e)=>e.name).join(", ")
                }) : module60(resource) ? t.html("DELETE_WORKLOAD_DESC_SI", {
                    resource: resource.map((e)=>e.name).join(", ")
                }) : t.html("DELETE_WORKLOAD_DESC_SI", {
                    resource: resource.name
                });
                return <Module788 width={520} icon="question" title={title} description={description} closable={false} headerClassName={module2459.modalHeader} bodyClassName={module2459.modalBody} hideFooter {...rest}><div className={module2459.body}>{this.renderContent()}</div><div className={module2459.footer}><module186.Button onClick={onCancel} data-test="modal-cancel">{t("CANCEL")}</module186.Button><module186.Button type="danger" loading={isSubmitting} disabled={!enableConfirm || isSubmitting} onClick={this.handleOk} data-test="modal-ok">{t("OK")}{!enableConfirm && `(${timer}s)`}</module186.Button></div></Module788>;
            }
        }
    ]);
    return n;
})(Component);
export default A;
A.propTypes = {
    resource: module1.any,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
A.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
};
