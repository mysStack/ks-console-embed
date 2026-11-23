import "./module-12.js";
import "./module-135.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
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
import module952 from "./module-952.js";
import { UPLOAD_FILE_TYPES, UPLOAD_STATUS_WORD } from "./module-327.js";
import { getLocalTime } from "./module-52.js";
import module3136 from "./module-3136.js";
const D = ((e)=>{
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
        n.showPackage = function() {
            const n_props = n.props;
            const { hasPackage, canCreate, canEdit } = n_props;
            return (hasPackage || canCreate || canEdit) && n.state.status === "init";
        };
        n.onUploadClick = function(e) {
            e.stopPropagation();
            n.uploadRef.onClick();
        };
        n.checkPackage = async (t)=>{
            let a;
            let r;
            let l;
            let errorInfo;
            await n.setState({
                status: "uploading",
                fileName: t.name
            });
            a = n.fileStore;
            r = a.checkFile;
            l = a.handleFileByBase64Str;
            if (errorInfo = r(t, "package")) {
                n.setState({
                    errorInfo,
                    status: "error"
                });
            } else {
                await l(t, n.validatePackage);
            }
            return Promise.reject();
        };
        n.validatePackage = async (t)=>{
            let a;
            let version_id;
            let l;
            let u;
            let app_id;
            let c;
            let s;
            let f;
            let d;
            let p;
            let status;
            a = n.props;
            version_id = a.versionId;
            l = a.type;
            u = a.changeCheckStatus;
            app_id = a.appId;
            c = a.onOk;
            s = n.fileStore;
            f = s.validatePackage;
            d = s.uploadPackage;
            p = await f(t, app_id);
            status = p.error ? "error" : "success";
            n.setState({
                missFile: p.missFile,
                errorInfo: p.error,
                status
            });
            u({
                status,
                ...p
            });
            if (l === "MODIFY_VERSION" && status === "success") {
                d(l, {
                    version_id,
                    app_id,
                    name: p.version_name,
                    base64Str: p.base64Str
                }, c);
                n.setState({
                    status: "init"
                });
            }
        };
        n.downloadPackage = function() {
            const n_props = n.props;
            const e_appId = n_props.appId;
            const r = {
                version_id: n_props.versionId,
                app_id: e_appId,
                packageName: n_props.packageName
            };
            n.fileStore.downloadPackage(r).then(()=>{
                module240.success({
                    content: t("DOWNLOAD_SUCCESSFUL")
                });
            });
        };
        n.fileStore = n.props.fileStore;
        n.state = {
            errorInfo: "",
            status: "init"
        };
        return n;
    }
    module37(r, [
        {
            key: "renderIcon",
            value: function() {
                const status = this.state.status;
                if (status === "uploading") {
                    return module553.default.createElement("div", {
                        className: module3136.statusIcon
                    }, module553.default.createElement(module186.Loading, null));
                }
                return module553.default.createElement("div", {
                    className: module3136.statusIcon
                }, module553.default.createElement("span", {
                    className: module3136.emoji
                }, "📦"), module553.default.createElement(module186.Icon, {
                    size: 16,
                    name: status,
                    className: module3136.icon
                }));
            }
        },
        {
            key: "renderUploadInfo",
            value: function() {
                const state = this.state;
                const { status, fileName, errorInfo, missFile } = state;
                const u = {
                    ...UPLOAD_STATUS_WORD,
                    error: errorInfo
                };
                return module553.default.createElement("div", {
                    className: module3136.word
                }, module553.default.createElement("div", {
                    className: module3136.name
                }, status === "init" ? t("UPLOAD_HELM_TITLE") : fileName), module553.default.createElement("div", {
                    className: module3136.description
                }, t(u[status], {
                    file: missFile
                }), status === "error" && module553.default.createElement("label", null, ". ", t("UPLOAD_AGAIN_TIP"))));
            }
        },
        {
            key: "renderPackageInfo",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, packageName, updateTime, canEdit } = props;
                return module553.default.createElement("div", {
                    className: module3(module3136.upload, module3136.packageInfo, className)
                }, this.renderIcon(), module553.default.createElement("div", {
                    className: module3136.word
                }, module553.default.createElement("div", {
                    className: module3136.name
                }, packageName, canEdit && module553.default.createElement("label", {
                    className: module3136.edit,
                    onClick: this.onUploadClick
                }, t("UPLOAD"))), module553.default.createElement("div", {
                    className: module3136.description
                }, t("UPDATE_TIME_COLON"), getLocalTime(updateTime).format("YYYY-MM-DD HH:mm:ss"))), module553.default.createElement(module186.Button, {
                    onClick: this.downloadPackage,
                    type: "default"
                }, t("DOWNLOAD")), module553.default.createElement(module952, {
                    ref: function(t) {
                        _this.uploadRef = t;
                    },
                    beforeUpload: this.checkPackage,
                    accept: UPLOAD_FILE_TYPES.package
                }));
            }
        },
        {
            key: "renderInfo",
            value: function() {
                const props = this.props;
                const { className, canCreate } = props;
                const status = this.state.status;
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module3(module3136.upload, module3136[status], module31({}, module3136.hide, this.showPackage()), className)
                }, this.renderIcon(), this.renderUploadInfo()), canCreate && module553.default.createElement("div", {
                    onClick: this.onUploadClick,
                    className: module3136.reUpload
                }, "👉 ", t("INCORRECT_FILE"), module553.default.createElement("label", null, t("TRY_AGAIN"))));
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                if (this.showPackage()) {
                    return this.renderPackageInfo();
                }
                return module553.default.createElement(module952, {
                    ref: function(t) {
                        _this.uploadRef = t;
                    },
                    beforeUpload: this.checkPackage,
                    accept: UPLOAD_FILE_TYPES.package
                }, this.renderInfo());
            }
        }
    ]);
    return r;
})(module553.Component);
export default D;
D.propTypes = {
    className: module1.string,
    type: module1.string,
    appId: module1.string,
    versionId: module1.string,
    packageName: module1.string,
    updateTime: module1.string,
    hasPackage: module1.bool,
    canCreate: module1.bool,
    canEdit: module1.bool,
    onOk: module1.func,
    changeCheckStatus: module1.func,
    fileStore: module1.object
};
D.defaultProps = {
    type: "CREATE_APP",
    appId: "",
    versionId: "",
    packageName: "",
    updateTime: "",
    hasPackage: false,
    canCreate: false,
    canEdit: false,
    onOk: function() {},
    changeCheckStatus: function() {},
    fileStore: {}
};
