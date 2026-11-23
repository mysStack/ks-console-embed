import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import { getLocalTime } from "./module-52.js";
import module1631 from "./module-1631.js";
let l;
let o;
let u;
const _ = observer((u = o = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.form = createRef();
        e.historyStore = new module1631;
        e.fetchData = function({ namespace, cluster, name }) {
            e.historyStore.fetchList({
                cluster,
                namespace,
                labelSelector: `springcloud.kubesphere.io/configuration.name=${name}`
            });
        };
        e.getFormData = function() {
            return {
                name: e.props.detail.name,
                currentRevision: module26(e.revisions, "[0].name")
            };
        };
        e.getRevisionOps = function() {
            return e.revisions.slice(1).map(({ name, createTime })=>({
                    label: `${name} ${getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss")}`,
                    value: name
                }));
        };
        e.handleOk = function() {
            if (e.form && e.form.current) {
                const t = e.form.current;
                if (t) {
                    t.validate(function() {
                        const a = t.getData();
                        const r = module14.toJS(e.revisions).find((e)=>e.name === a.revision);
                        e.props.onOk({
                            data: module26(r, "data"),
                            metadata: {
                                annotations: {
                                    "kubesphere.io/configuration-data": module26(r, 'annotations["kubesphere.io/configuration-data"]')
                                }
                            }
                        });
                    });
                }
            }
        };
        return e;
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
                return <module788.Form formRef={this.form} data={data} width={600} title={t("ROLL_BACK")} icon="timed-task" onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Form.Item label={t("RESOURCE_NAME")}><module186.Input name="name" disabled/></module186.Form.Item><module186.Form.Item label={t("CURRENT_REVISION_RECORD")}><module186.Input name="currentRevision" disabled/></module186.Form.Item><module186.Form.Item label={t("TARGET_REVISION_RECORD")} rules={[
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
                const list = this.historyStore.list;
                const e_data = list.data;
                if (list.isLoading) {
                    return [];
                }
                return e_data;
            }
        },
        {
            key: "curRevisionItem",
            get: function() {
                const resourceVersion = this.props.detail.resourceVersion;
                return this.revisions.find((t)=>t.resourceVersion === resourceVersion);
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    visible: module1.bool,
    detail: module1.object,
    onOk: module1.func,
    onCancel: module1.func
}, o.defaultProps = {
    visible: false,
    detail: {},
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default _;
