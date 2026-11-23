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
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module450 from "unpacked/module-450.js";
import module60 from "unpacked/module-60.js";
import module63 from "unpacked/module-63.js";
import module862 from "unpacked/module-862.js";
import module186 from "unpacked/module-186.js";
import { getDisplayName, joinSelector } from "utils/index";
import { ICON_TYPES, MODULE_KIND_MAP } from "utils/constants";
import Module788 from "components/Base/Modal";
import Module833 from "unpacked/module-833.js";
import module318 from "stores/workload/index";
import module437 from "stores/federated";
import module456 from "stores/s2i/builder";
import module3357 from "unpacked/module-3357.js";
const w = [
    "deployments",
    "daemonsets",
    "statefulsets"
];
const M = ((Component_1)=>{
    module55(n, Component_1);
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
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.stopPropagation = function(e) {
            return e.stopPropagation();
        };
        t.handleOk = async function e() {
            let a;
            let r;
            let n;
            let l;
            let o;
            let u;
            let c;
            let i;
            a = t.props;
            r = a.onOk;
            n = a.store;
            l = a.resource;
            o = t.state;
            u = o.selectedRelatedResourceIds;
            c = o.relatedResources;
            i = [];
            c.forEach((e)=>{
                if (u.includes(e.uid)) {
                    if (w.includes(e.module)) {
                        t.workloadStore.setModule(e.module);
                        i.push(t.workloadStore.delete(e));
                    } else if (!(e.module !== "s2ibuilders" && e.type !== "s2i")) {
                        i.push(t.builderStore.delete(e));
                    }
                }
            });
            if (module60(l)) {
                await Promise.all(l.map((e)=>n.delete(e)));
                n.list.setSelectRowKeys([]);
            } else {
                await n.delete(l);
            }
            await Promise.all(i);
            r();
        };
        t.handleItemClick = function(e) {
            const a = e.currentTarget.dataset.id;
            t.setState(function({ selectedRelatedResourceIds }) {
                return {
                    selectedRelatedResourceIds: selectedRelatedResourceIds.includes(a) ? selectedRelatedResourceIds.filter((e)=>e !== a) : [].concat(module61(selectedRelatedResourceIds), [
                        a
                    ])
                };
            });
        };
        t.state = {
            relatedResources: [],
            selectedRelatedResourceIds: [],
            enableConfirm: false,
            timer: 3
        };
        t.workloadStore = new module318;
        t.builderStore = new module456;
        if (e.isFederated) {
            t.workloadStore = new module437({
                module: "deployments"
            });
        }
        return t;
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
            value: async function(t) {
                let a;
                let namespace;
                let cluster;
                let l;
                let o;
                let u;
                let relatedResources;
                const _this = this;
                this.setState({
                    isLoading: true
                });
                a = [];
                if (module60(t)) {
                    a = t.map((e)=>e.selector || module26(e, "resource.selector"));
                    namespace = t[0].namespace;
                    cluster = t[0].cluster;
                } else {
                    a.push(t.selector || module26(t, "resource.selector"));
                    namespace = t.namespace;
                    cluster = t.cluster;
                }
                l = [];
                o = this.props.isFederated ? [
                    "deployments",
                    "statefulsets"
                ] : w;
                a.forEach((e)=>{
                    if (!module63(e)) {
                        const labelSelector = joinSelector(e);
                        l.push.apply(l, module61(o.map((module)=>_this.workloadStore.fetchListByK8s({
                                cluster,
                                namespace,
                                labelSelector,
                                module
                            }))));
                        if (e.s2ibuilder) {
                            l.push(_this.builderStore.fetchDetail({
                                cluster,
                                namespace,
                                name: e.s2ibuilder,
                                module: "s2ibuilders"
                            }).then((e)=>[
                                    e
                                ]));
                        }
                    }
                });
                u = await Promise.all(l);
                relatedResources = module862(module450(u), "uid").filter((e)=>!module63(e.name));
                this.setState({
                    relatedResources,
                    isLoading: false
                });
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const state = this.state;
                const { isLoading, relatedResources, selectedRelatedResourceIds } = state;
                if (isLoading === false && module63(relatedResources)) {
                    return <Module833 icon="appcenter" className={module3357.empty} title={t("NO_RELATED_RESOURCE_FOUND")} desc={t("NO_SERVICE_RELATED_RESOURCE_DESC")}/>;
                }
                return <div className={module3357.resources}>{relatedResources.map((a)=><div key={a.uid} data-id={a.uid} className={module3(module3357.resource, module31({}, module3357.selected, selectedRelatedResourceIds.includes(a.uid)))} onClick={_this.handleItemClick}><module186.Checkbox checked={selectedRelatedResourceIds.includes(a.uid)} onClick={_this.stopPropagation}/><module186.Icon name={ICON_TYPES[a.module]} size={20} type={selectedRelatedResourceIds.includes(a.uid) ? "light" : "dark"}/><span className={module3357.resourceName}>{getDisplayName(a)}</span><span className={module3357.resourceType}>{t(MODULE_KIND_MAP[a.module])}</span></div>)}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { enableConfirm, timer } = state;
                const props = this.props;
                const { resource, onOk: _onOk, onCancel, isSubmitting, ...rest } = props;
                const title = module60(resource) && resource.length !== 1 ? t("DELETE_MULTIPLE_SERVICES") : t("DELETE_SERVICE");
                const description = module60(resource) && resource.length !== 1 ? t.html("DELETE_SERVICE_DESC_PL", {
                    resource: resource.map((e)=>e.name).join(", ")
                }) : module60(resource) ? t.html("DELETE_SERVICE_DESC_SI", {
                    resource: resource.map((e)=>e.name).join(", ")
                }) : t.html("DELETE_SERVICE_DESC_SI", {
                    resource: resource.name
                });
                return <Module788 width={520} icon="question" title={title} description={description} closable={false} headerClassName={module3357.modalHeader} bodyClassName={module3357.modalBody} hideFooter {...rest}><div className={module3357.body}>{this.renderContent()}</div><div className={module3357.footer}><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button><module186.Button type="danger" loading={isSubmitting} disabled={!enableConfirm || isSubmitting} onClick={this.handleOk}>{t("OK")}{!enableConfirm && `(${timer}s)`}</module186.Button></div></Module788>;
            }
        }
    ]);
    return n;
})(Component);
export default M;
M.propTypes = {
    resource: module1.any,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
M.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
};
