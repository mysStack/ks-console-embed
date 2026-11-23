import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
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
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import module241 from "./module-241.js";
import module74 from "./module-74.js";
import module199 from "./module-199.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module788 from "components/Base/Modal";
import module435 from "utils/form.templates";
import module2638 from "./module-2638.js";
import module2644 from "./module-2644.js";
import module1529 from "./module-1529.js";
let l;
let o;
let u;
const A = observer((u = o = ((e)=>{
    module55(a, e);
    var t = ((e)=>{
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
    })(a);
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.setViewType = function(viewType = "appList", selectRepo) {
            r.setState({
                selectRepo,
                viewType
            });
        };
        r.handleClickApp = function(selectApp) {
            r.setState({
                viewType: "appDetail",
                selectApp
            });
        };
        r.handleDeploy = function({ containerDetail, ...rest } = {}) {
            const formTemplate = module435.edgeappsets(module241(r.props, "namespace"));
            const l = module26(containerDetail, [
                "metadata",
                "labels",
                "apps.edgewize.io/apptemplate"
            ]);
            const o = module26(containerDetail, "spec");
            const u = module26(o, "version");
            const spec = module189(o, "version");
            module74(formTemplate, "spec.appTemplateName", l);
            module74(formTemplate, "spec.version", u);
            module74(formTemplate, "spec.deploymentTemplate.spec", spec);
            module199(formTemplate, {
                spec: {
                    deploymentTemplate: {
                        spec: {
                            template: {
                                spec: {
                                    deploymentTemplate: {
                                        spec
                                    }
                                }
                            }
                        }
                    }
                }
            });
            r.props.trigger("app.template.deploy", {
                ...rest,
                ...module241(r.props, [
                    "cluster",
                    "workspace",
                    "namespace"
                ]),
                formTemplate,
                success: function() {
                    r.props.onOk();
                    r.props.routing.query();
                }
            });
        };
        r.state = {
            selectRepo: "",
            viewType: "appList",
            selectApp: null
        };
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, cluster = "", workspace = "", namespace, onDeploy: _onDeploy, ...rest } = props;
                const state = this.state;
                const { viewType, selectApp, selectRepo } = state;
                return module553.default.createElement(module788, {
                    width: 1070,
                    className: module1529.modal,
                    bodyClassName: module1529.body,
                    visible,
                    onCancel,
                    rightScreen: true,
                    hideHeader: true,
                    hideFooter: true,
                    ...rest
                }, module553.default.createElement(module186.Button, {
                    className: module1529.close,
                    icon: "close",
                    iconType: "light",
                    type: "control",
                    onClick: onCancel
                }), viewType === "appList" && module553.default.createElement(module2638, {
                    cluster,
                    workspace,
                    selectRepo,
                    setType: this.setViewType,
                    onClickApp: this.handleClickApp
                }), viewType === "appDetail" && module553.default.createElement(module2644, {
                    setType: this.setViewType,
                    app: selectApp,
                    cluster,
                    workspace,
                    namespace,
                    onDeploy: this.handleDeploy
                }));
            }
        }
    ]);
    return a;
})(module553.Component), o.propTypes = {
    cluster: module1.string,
    workspace: module1.string,
    namespace: module1.string,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
}, o.defaultProps = {
    workspace: "",
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default A;
