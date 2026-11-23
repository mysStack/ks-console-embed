import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module241 from "unpacked/module-241.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module3093 from "pages/projects/components/Modals/RepoApp/Apps";
import module3095 from "pages/projects/components/Modals/RepoApp/AppDetail";
import module3103 from "unpacked/module-3103.js";
let l;
let o;
let u;
const D = observer((u = o = ((e)=>{
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
        r.handleDeploy = function(e = {}) {
            r.props.trigger("openpitrix.template.deploy", {
                ...e,
                ...module241(r.props, [
                    "cluster",
                    "workspace",
                    "namespace"
                ]),
                success: function() {
                    return r.props.onOk();
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
                const { visible, onCancel, workspace, onDeploy: _onDeploy, ...rest } = props;
                const state = this.state;
                const { viewType, selectApp, selectRepo } = state;
                return module553.default.createElement(module788, {
                    width: 1070,
                    className: module3103.modal,
                    bodyClassName: module3103.body,
                    visible,
                    onCancel,
                    rightScreen: true,
                    hideHeader: true,
                    hideFooter: true,
                    ...rest
                }, module553.default.createElement(module186.Button, {
                    className: module3103.close,
                    icon: "close",
                    iconType: "light",
                    type: "control",
                    onClick: onCancel
                }), viewType === "appList" && module553.default.createElement(module3093, {
                    workspace,
                    selectRepo,
                    setType: this.setViewType,
                    onClickApp: this.handleClickApp
                }), viewType === "appDetail" && module553.default.createElement(module3095, {
                    setType: this.setViewType,
                    app: selectApp,
                    workspace,
                    onDeploy: this.handleDeploy
                }));
            }
        }
    ]);
    return a;
})(module553.Component), o.propTypes = {
    workspace: module1.string,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
}, o.defaultProps = {
    workspace: "",
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default D;
