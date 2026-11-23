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
import "./module-448.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import module241 from "./module-241.js";
import module788 from "components/Base/Modal";
import module483 from "stores/root";
import module484 from "./module-484.js";
import { trigger } from "utils/action";
import module1287 from "./module-1287.js";
import module435 from "utils/form.templates";
import module1529 from "./module-1529.js";
import module2242 from "./module-2242.js";
let l;
let u;
let o;
const M = trigger((o = u = ((e)=>{
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
        r.rootStore = new module483;
        r.handleDeploy = function({ containerDetail, selectedVersion, ...rest } = {}) {
            const c = module88(r)?.props || module88(r);
            const { trigger = r.trigger, success } = module88(r)?.props;
            success === undefined && r.success;
            const formTemplate = module435.edgeappsets(module241(c, "namespace"));
            const appTemplateName = module26(containerDetail, "metadata.name");
            const y = module26(containerDetail, "spec");
            const version = module26(selectedVersion, "_originData.spec.versionName");
            const spec = module189(y, "version");
            if (formTemplate) {
                formTemplate.spec = {
                    ...formTemplate?.spec,
                    appTemplateName,
                    version,
                    deploymentTemplate: {
                        spec: {
                            ...spec,
                            template: {
                                spec: {
                                    deploymentTemplate: {
                                        spec
                                    }
                                }
                            }
                        }
                    }
                };
            }
            r.trigger("app.template.deploy.v2", {
                trigger,
                ...module88(r),
                ...c,
                ...rest,
                ...containerDetail,
                app: r.props?.app || module88(r)?.app,
                isEdgeTable: true,
                ...module241(c, [
                    "cluster",
                    "workspace",
                    "namespace"
                ]),
                formTemplate,
                onOK: c?.onOK
            });
        };
        r.store = new module484;
        return r;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                if (!this.rootStore.actions?.["app.template.deploy.v2"]) {
                    this.rootStore.registerActions(module1287);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onOk: _onOk, onDeploy: _onDeploy, ...rest } = props;
                return module553.default.createElement(module788, {
                    className: module1529.modal,
                    bodyClassName: module1529.body,
                    visible,
                    hideHeader: true,
                    rightScreen: true,
                    hideFooter: true,
                    ...rest
                }, module553.default.createElement(module2242, {
                    ...rest,
                    onDeploy: this.handleDeploy.bind(this)
                }));
            }
        }
    ]);
    return a;
})(module553.Component), u.propTypes = {
    app: module1.object,
    visible: module1.bool,
    onOK: module1.func,
    onCancel: module1.func,
    appName: module1.string,
    cluster: module1.string,
    workspace: module1.string,
    namespace: module1.string,
    trigger: module1.func
}, u.defaultProps = {
    visible: false,
    onCancel: function() {}
}, l = o)) || l;
export default M;
