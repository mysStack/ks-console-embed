import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module61 from "./module-61.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module241 from "./module-241.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import * as module553 from "./module-553.js";
import module439 from "./module-439.js";
import { showNameAndAlias } from "./module-52.js";
let s;
let i;
let f;
const I = "";
const P = observer((f = i = ((e)=>{
    module55(r, e);
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
        n.fetchProjects = async (t)=>n.projectStore.fetchList(t);
        n.projectValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            const detail = n.props.detail;
            const o = module26(detail, "status.allocations", 0) > 0;
            if (module26(detail, "status.tunnel") === module26(detail, "status.allocations")) {
                return r();
            }
            const l_namespace = detail.namespace;
            if (o && l_namespace && a !== l_namespace) {
                return r({
                    message: t("IPPOOL_ASSIGN_PROJECT_CHANGE_WARNING"),
                    field: e.field
                });
            }
            if (o && a !== I) {
                return r({
                    message: t("IPPOOL_ASSIGN_PROJECT_ALLOCATED_WARNING"),
                    field: e.field
                });
            }
            r();
        };
        n.handleSubmit = function(e) {
            const onOk = n.props.onOk;
            const a = {};
            const r = module26(e, "metadata.labels['kubesphere.io/namespace']");
            if (r === I) {
                module74(a, "metadata.labels['kubesphere.io/namespace']", null);
                module74(a, "metadata.labels['ippool.network.kubesphere.io/default']", "");
            } else {
                module74(a, "metadata.labels['kubesphere.io/namespace']", r || null);
                module74(a, "metadata.labels['ippool.network.kubesphere.io/default']", null);
            }
            onOk(a);
        };
        n.formTemplate = module136(module14.toJS(e.detail._originData));
        n.projectStore = new module439;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.detail.isDefault) {
                    module74(this.formTemplate, "metadata.labels['kubesphere.io/namespace']", I);
                }
                this.projectStore.fetchList({
                    cluster: this.props.cluster
                });
            }
        },
        {
            key: "getProjects",
            value: function() {
                return [
                    {
                        label: t("ALL"),
                        value: I
                    }
                ].concat(module61(this.projectStore.list.data.map((e)=>({
                        label: showNameAndAlias(e, "name"),
                        value: e.name
                    }))));
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.props.detail;
                const a = module26(detail, "status.allocations", 0) > 0;
                const e_namespace = detail.namespace;
                return module553.default.createElement(module788.Form, {
                    title: t("ASSIGN_PROJECT"),
                    icon: "enterprise",
                    width: 691,
                    data: this.formTemplate,
                    ...this.props,
                    onOk: this.handleSubmit
                }, a && e_namespace ? module553.default.createElement(module186.Alert, {
                    className: "margin-b12",
                    type: "warning",
                    message: t("IPPOOL_ASSIGN_PROJECT_ALLOCATED_WARNING")
                }) : module553.default.createElement(module186.Alert, {
                    className: "margin-b12",
                    type: "info",
                    message: t("IPPOOL_ASSIGN_PROJECT_DESC")
                }), module553.default.createElement(module186.Form.Item, {
                    label: t("PROJECT"),
                    desc: t("SELECT_PROJECT_DESC"),
                    rules: [
                        {
                            validator: this.projectValidator
                        }
                    ]
                }, module553.default.createElement(module186.Select, {
                    name: "metadata.labels['kubesphere.io/namespace']",
                    options: this.getProjects(),
                    pagination: module241(this.projectStore.list, [
                        "page",
                        "total",
                        "limit"
                    ]),
                    isLoading: this.projectStore.list.isLoading,
                    onFetch: this.fetchProjects,
                    searchable: true,
                    clearable: true,
                    placeholder: " "
                })));
            }
        }
    ]);
    return r;
})(module553.Component), i.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
}, i.defaultProps = {
    detail: {},
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, s = f)) || s;
export default P;
