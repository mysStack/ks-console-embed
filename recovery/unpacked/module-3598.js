import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-319.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module446 from "./module-446.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import { getCurrentRevision } from "./module-248.js";
import module1206 from "./module-1206.js";
import module1390 from "./module-1390.js";
let l;
let o;
let u;
const D = observer((u = o = ((Component_1)=>{
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
        t.fetchData = function(e) {
            t.revisionStore.fetchList(e);
        };
        t.getFormData = function() {
            return {
                name: t.props.detail.name,
                currentRevision: `#${t.curRevision}`
            };
        };
        t.getRevisionOps = function() {
            return module446(t.revisions, function(e) {
                return parseInt(e.revision, 10);
            }).map(({ revision })=>({
                    label: `#${revision}`,
                    value: Number(revision)
                })).filter((e)=>e.value !== t.curRevision);
        };
        t.handleOk = function() {
            const t_props = t.props;
            const { detail, store, onOk } = t_props;
            if (t.form && t.form.current) {
                const l = t.form.current;
                if (l) {
                    l.validate(function() {
                        let e;
                        const o = l.getData();
                        const u = t.revisions.find((e)=>Number(e.revision) === o.revision);
                        e = store.module === "deployments" ? [
                            {
                                op: "replace",
                                path: "/spec/template",
                                value: module14.toJS(module26(u, "spec.template"))
                            },
                            {
                                op: "replace",
                                path: "/metadata/annotations",
                                value: detail.annotations
                            }
                        ] : {
                            spec: {
                                template: {
                                    $patch: "replace",
                                    ...module14.toJS(module26(u, "spec.template"))
                                }
                            }
                        };
                        onOk(e);
                    });
                }
            }
        };
        t.revisionStore = e.isEdgeWize ? new module1390(e.store.module) : new module1206(e.store.module);
        t.form = createRef();
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.visible) {
                    this.fetchData(this.props.detail);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, isSubmitting } = props;
                const data = this.getFormData();
                return <module788.Form formRef={this.form} data={data} width={691} title={t("ROLL_BACK")} icon="timed-task" onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Form.Item label={t("RESOURCE_NAME")}><module186.Input name="name" disabled/></module186.Form.Item><module186.Form.Item label={t("CURRENT_REVISION_RECORD")}><module186.Input name="currentRevision" disabled/></module186.Form.Item><module186.Form.Item label={t("TARGET_REVISION_RECORD")} rules={[
                    {
                        required: true,
                        message: t("TARGET_REVISION_EMPTY_DESC")
                    }
                ]}><module186.Select name="revision" placeholder=" " options={this.getRevisionOps()}/></module186.Form.Item></module788.Form>;
            }
        },
        {
            key: "revisions",
            get: function() {
                const list = this.revisionStore.list;
                const e_data = list.data;
                if (list.isLoading) {
                    return [];
                }
                return e_data;
            }
        },
        {
            key: "curRevision",
            get: function() {
                const props = this.props;
                const { store, detail } = props;
                return getCurrentRevision(detail, this.revisions, store.module);
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    isEdgeWize: module1.bool,
    visible: module1.bool,
    detail: module1.object,
    onOk: module1.func,
    onCancel: module1.func
}, o.defaultProps = {
    isEdgeWize: false,
    visible: false,
    detail: {},
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default D;
