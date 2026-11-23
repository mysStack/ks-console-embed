import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-109.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module61 from "./module-61.js";
import "./module-41.js";
import module31 from "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module60 from "./module-60.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import { getDisplayName } from "./module-52.js";
import Module788 from "./module-788.js";
import Module833 from "./module-833.js";
import module2659 from "./module-2659.js";
const k = ((Component_1)=>{
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
            a = t.props;
            r = a.onOk;
            n = a.store;
            l = a.resource;
            o = t.state.selectedRelatedResourceIds;
            if (module60(l)) {
                u = [];
                l.forEach((e)=>{
                    u.push(n.delete({
                        ...e,
                        isRelated: o.includes(e.uid)
                    }));
                });
                await Promise.all(u);
                n.list.setSelectRowKeys([]);
            } else {
                await n.delete({
                    ...l,
                    isRelated: o.includes(l.uid)
                });
            }
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
            enableConfirm: false,
            selectedRelatedResourceIds: [],
            relatedResources: [],
            timer: 3
        };
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
                let relatedResources;
                this.setState({
                    isLoading: true
                });
                relatedResources = [];
                if (module60(t)) {
                    relatedResources = t.filter((e)=>module26(e, "status.operationState.syncResult.resources"));
                } else if (module26(t, "status.operationState.syncResult.resources")) {
                    relatedResources.push(t);
                }
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
                const { isLoading, relatedResources = [], selectedRelatedResourceIds } = this.state;
                if (isLoading === false && module63(relatedResources)) {
                    return <Module833 icon="appcenter" className={module2659.empty} title={t("NO_RELATED_RESOURCE_FOUND")} desc={t("NO_CONTINUOUS_DEPLOYMENT_RELATED_RESOURCE_DESC")}/>;
                }
                return <div className={module2659.resources}>{relatedResources.map((a)=><div key={a.uid} data-id={a.uid} className={module3(module2659.resource, module31({}, module2659.selected, selectedRelatedResourceIds.includes(a.uid)))} onClick={_this.handleItemClick}><module186.Checkbox checked={selectedRelatedResourceIds.includes(a.uid)} onClick={_this.stopPropagation}/><span className={module2659.resourceName}>{t("DELETE_CONTINUOUS_DEPLOYMENT_RELATE_DESC", {
                        resourceName: getDisplayName(a)
                    })}</span></div>)}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { enableConfirm, timer } = state;
                const props = this.props;
                const { resource, onOk: _onOk, onCancel, isSubmitting, ...rest } = props;
                const title = module60(resource) && resource.length !== 1 ? t("DELETE_MULTIPLE_CONTINUOUS_DEPLOYMENT") : t("DELETE_CONTINUOUS_DEPLOYMENT");
                const description = module60(resource) && resource.length !== 1 ? t.html("DELETE_CONTINUOUS_DEPLOYMENT_DESC_PL", {
                    resource: resource.map((e)=>e.name).join(", ")
                }) : module60(resource) ? t.html("DELETE_CONTINUOUS_DEPLOYMENT_DESC_SI", {
                    resource: resource.map((e)=>e.name).join(", ")
                }) : t.html("DELETE_CONTINUOUS_DEPLOYMENT_DESC_SI", {
                    resource: resource.name
                });
                return <Module788 width={520} icon="question" title={title} description={description} closable={false} headerClassName={module2659.modalHeader} bodyClassName={module2659.modalBody} hideFooter {...rest}><div className={module2659.body}>{this.renderContent()}</div><div className={module2659.footer}><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button><module186.Button type="danger" loading={isSubmitting} disabled={!enableConfirm || isSubmitting} onClick={this.handleOk}>{t("OK")}{!enableConfirm && `(${timer}s)`}</module186.Button></div></Module788>;
            }
        }
    ]);
    return n;
})(Component);
export default k;
k.propTypes = {
    resource: module1.any,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
k.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
};
