import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module31 from "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module1373 from "./module-1373.js";
import module3137 from "./module-3137.js";
import module936 from "./module-936.js";
import module3139 from "./module-3139.js";
import module3140 from "./module-3140.js";
const N = ((e)=>{
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
        n.reset = function() {
            n.setState({
                canCreate: false,
                checkStatus: "init"
            });
        };
        n.changeCheckStatus = function(resultInfo = {}) {
            n.setState({
                checkStatus: resultInfo.status,
                resultInfo
            });
        };
        n.changeIcon = function(icon) {
            n.setState({
                icon
            });
        };
        n.onCancel = function() {
            n.props.onCancel();
            n.reset();
        };
        n.createApp = async function e() {
            let t;
            let a;
            let r;
            let l;
            let u;
            let o;
            let i;
            let icon;
            let f;
            t = n.props;
            a = t.type;
            r = t.onOk;
            if (l = n.state.canCreate) {
                u = n.state;
                o = u.icon;
                i = u.resultInfo;
                icon = o || i.icon;
                f = {
                    version_type: "helm",
                    name: i.name,
                    base64Str: i.base64Str,
                    icon
                };
                n.fileStore.uploadPackage(a, f, r).then(()=>{
                    n.reset();
                });
            } else {
                n.setState({
                    canCreate: !l
                });
            }
        };
        n.handleSubmit = function() {
            const n_props = n.props;
            const { appId, workspace, type, onOk } = n_props;
            const resultInfo = n.state.resultInfo;
            if (n.state.checkStatus !== "success") {
                module240.error({
                    content: `${t("UPLOAD_PACKAGE_OK_NOTE")}`
                });
                return false;
            }
            if (type === "CREATE_APP") {
                n.createApp();
            } else {
                const i = {
                    type: "helm",
                    app_id: appId,
                    workspace,
                    base64Str: resultInfo.base64Str
                };
                n.fileStore.uploadPackage(type, i, onOk).then(()=>{
                    n.setState({
                        checkStatus: "init"
                    });
                });
            }
        };
        n.fileStore = new module936;
        n.state = {
            checkStatus: "init",
            canCreate: false,
            resultInfo: {},
            icon: ""
        };
        return n;
    }
    module37(r, [
        {
            key: "renderCheckFiles",
            value: function() {
                const errorFiles = this.props.errorFiles;
                return module553.default.createElement("div", null, module553.default.createElement("div", {
                    className: module3140.checkFiles
                }, module553.default.createElement("ul", null, module3139.map((a)=>module553.default.createElement("li", {
                        key: a.name,
                        className: module3(module31({}, module3140.error, errorFiles.includes(a.name)))
                    }, module553.default.createElement("span", {
                        className: module3140.name
                    }, a.name), module553.default.createElement("div", {
                        className: module3140.description
                    }, "#  ", a.isOptional && module553.default.createElement("span", null, "[", t("OPTIONAL"), "]  "), t(a.description))))), this.state.checkStatus !== "success" && module553.default.createElement("div", {
                    className: module3140.configMask
                })));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { appId, ...rest } = props;
                const state = this.state;
                const { canCreate, resultInfo } = state;
                return module553.default.createElement(module788, {
                    width: 960,
                    bodyClassName: module3140.body,
                    ...rest,
                    onOk: this.handleSubmit,
                    onCancel: this.onCancel,
                    disableSubmit: !resultInfo.name
                }, module553.default.createElement("div", {
                    className: module3140.content
                }, module553.default.createElement("div", {
                    className: module3140.helmIcon
                }, module553.default.createElement(module186.Icon, {
                    name: "helm",
                    size: 60
                })), module553.default.createElement(module1373, {
                    className: module3(module3140.upload, module31({}, module3140.canCreate, canCreate)),
                    canCreate,
                    changeCheckStatus: this.changeCheckStatus,
                    fileStore: this.fileStore,
                    appId
                }), canCreate ? module553.default.createElement(module3137, {
                    createInfo: resultInfo,
                    uploadIcon: this.changeIcon,
                    fileStore: this.fileStore
                }) : this.renderCheckFiles()));
            }
        }
    ]);
    return r;
})(module553.Component);
export default N;
N.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    isSubmitting: module1.bool,
    errorFiles: module1.array,
    appId: module1.string,
    type: module1.string,
    onOk: module1.func,
    onCancel: module1.func
};
N.defaultProps = {
    visible: false,
    isSubmitting: false,
    errorFiles: [],
    type: "CREATE_APP",
    appId: "",
    onOk: function() {},
    onCancel: function() {}
};
