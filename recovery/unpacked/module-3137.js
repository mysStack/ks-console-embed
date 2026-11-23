import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module449 from "./module-449.js";
import module952 from "./module-952.js";
import module836 from "./module-836.js";
import { UPLOAD_FILE_TYPES } from "./module-327.js";
import module3138 from "./module-3138.js";
const b = ((e)=>{
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
        n.onUploadClick = function() {
            n.uploadRef.onClick();
        };
        n.setShowBase64 = function({ base64Str, base64Show }) {
            n.setState({
                base64Str,
                base64Show,
                error: ""
            });
            n.props.uploadIcon(base64Str);
        };
        n.checkPackage = async (a)=>{
            let r;
            let l;
            let i;
            let c;
            let error;
            let f;
            r = n.fileStore;
            l = r.checkFile;
            i = r.handleFileByBase64Str;
            c = r.validateImageSize;
            if (error = l(a, "icon")) {
                n.setState({
                    error,
                    base64Str: "",
                    base64Show: ""
                });
                n.props.uploadIcon("");
            } else {
                f = module449(a.name.toLocaleLowerCase().split("."));
                await i(a, async (base64Str)=>{
                    let base64Show;
                    base64Show = `data:image/${f === "svg" ? "svg+xml" : f};base64,${base64Str}`;
                    if (await c(base64Show)) {
                        n.setShowBase64({
                            base64Str,
                            base64Show
                        });
                    } else {
                        n.setState({
                            error: t("FILE_MAX_SIZE_ICON"),
                            base64Str: "",
                            base64Show: ""
                        });
                        n.props.uploadIcon("");
                    }
                });
            }
            return Promise.reject();
        };
        n.fileStore = n.props.fileStore;
        n.state = {
            error: "",
            base64Str: "",
            base64Show: ""
        };
        return n;
    }
    module37(r, [
        {
            key: "renderInfo",
            value: function() {
                const createInfo = this.props.createInfo;
                return module553.default.createElement("div", null, module553.default.createElement("dl", null, module553.default.createElement("dt", null, createInfo.name || "-"), module553.default.createElement("dd", null, t("NAME"))), module553.default.createElement("dl", null, module553.default.createElement("dt", null, createInfo.version_name || "-"), module553.default.createElement("dd", null, t("VERSION"))), module553.default.createElement("dl", null, module553.default.createElement("dt", null, createInfo.home || "-"), module553.default.createElement("dd", null, t("HOMEPAGE"))), module553.default.createElement("dl", null, module553.default.createElement("dt", null, createInfo.description || "-"), module553.default.createElement("dd", null, t("DESCRIPTION"))));
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const state = this.state;
                const { error, base64Show } = state;
                const createInfo = this.props.createInfo;
                return module553.default.createElement("div", {
                    className: module3138.createInfo
                }, module553.default.createElement("div", {
                    className: module3138.title
                }, t("APP_INFORMATION")), module553.default.createElement("div", {
                    className: module3138.appContent
                }, module553.default.createElement(module952, {
                    ref: function(t) {
                        _this.uploadRef = t;
                    },
                    beforeUpload: this.checkPackage,
                    accept: UPLOAD_FILE_TYPES.icon
                }, module553.default.createElement("div", {
                    className: module3138.appIcon
                }, module553.default.createElement("div", {
                    className: module3138.iconShow
                }, module553.default.createElement(module836, {
                    src: base64Show || createInfo.icon,
                    iconSize: 100,
                    iconLetter: createInfo.name
                })), module553.default.createElement("label", {
                    className: module3138.uploadIcon
                }, t("UPLOAD_ICON")), module553.default.createElement("p", {
                    className: module3138.note
                }, t("APP_ICON_NOTE")))), this.renderInfo()), error && module553.default.createElement("div", {
                    className: module3138.error
                }, t(`${error}_DESC`)));
            }
        }
    ]);
    return r;
})(module553.Component);
export default b;
b.propTypes = {
    createInfo: module1.object,
    fileStore: module1.object,
    uploadIcon: module1.func
};
b.defaultProps = {
    createInfo: {},
    fileStore: {},
    uploadIcon: function() {}
};
