import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-138.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-315.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module455 from "unpacked/module-455.js";
import module2399 from "unpacked/module-2399.js";
import module2400 from "unpacked/module-2400.js";
import module2401 from "unpacked/module-2401.js";
const E = +new Date;
let b = 0;
function _() {
    b += 1;
    return `upload-${E}-${b}`;
}
const O = ((e)=>{
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.reqs = {};
        e.files = {};
        e.state = {
            uid: _(),
            isDraging: false
        };
        e.onChange = function(t) {
            const files = t.target.files;
            e.uploadFiles(files);
            e.reset();
        };
        e.onClick = function() {
            if (e.fileInput) {
                e.fileInput.click();
            }
        };
        e.onKeyDown = function(t) {
            if (t.key === "Enter") {
                e.onClick();
            }
        };
        e.onFileDrop = function(t) {
            const e_props = e.props;
            const { directory, accept } = e_props;
            t.preventDefault();
            if (t.type !== "dragover") {
                if (t.type !== "dragleave") {
                    if (t.type === "drop") {
                        e.setState({
                            isDraging: false
                        });
                        const l = function(e) {
                            return module2400(e, accept);
                        };
                        if (directory) {
                            module2401(module61(t.dataTransfer.items), e.uploadFiles, l);
                        } else {
                            const o = module61(t.dataTransfer.files).filter(l);
                            e.uploadFiles(o);
                        }
                    }
                } else {
                    e.setState({
                        isDraging: false
                    });
                }
            } else {
                e.setState({
                    isDraging: true
                });
            }
        };
        e.uploadFiles = function(t) {
            const a = module61(t);
            a.forEach((t)=>{
                const r = Object.assign(t, {
                    uid: _()
                });
                e.upload(r, a);
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.uploaderMounted = true;
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.uploaderMounted = false;
                this.files = {};
                this.abort();
            }
        },
        {
            key: "upload",
            value: function(e, t) {
                const _this = this;
                const beforeUpload = this.props.beforeUpload;
                if (!beforeUpload) {
                    return setTimeout(()=>_this.post(e), 0);
                }
                const n = beforeUpload(e, t);
                if (n && n.then) {
                    n.then((t)=>{
                        const r = Object.prototype.toString.call(t);
                        if (r === "[object File]" || r === "[object Blob]") {
                            return _this.post(t);
                        }
                        return _this.post(e);
                    });
                } else if (n !== false) {
                    setTimeout(()=>_this.post(e), 0);
                }
                return true;
            }
        },
        {
            key: "post",
            value: function(file) {
                const _this = this;
                if (this.uploaderMounted) {
                    const a = this.props;
                    const { data, onStart, onProgress, onSuccess, onError, action, customRequest, name, headers, withCredentials, method } = a;
                    let m = data;
                    if (typeof m === "function") {
                        m = m(file);
                    }
                    new Promise((resolve)=>resolve(typeof action === "function" ? action(file) : action)).then((action_1)=>{
                        const e_uid = file.uid;
                        const i = customRequest || module2399;
                        _this.files[e_uid] = file;
                        _this.reqs[e_uid] = i({
                            file,
                            headers,
                            withCredentials,
                            action: action_1,
                            method,
                            filename: name,
                            data: m,
                            onProgress: onProgress ? function(t) {
                                onProgress(t, file);
                            } : null,
                            onSuccess: function(a, n) {
                                delete _this.files[e_uid];
                                delete _this.reqs[e_uid];
                                onSuccess(a, file, n);
                            },
                            onError: function(a, n) {
                                delete _this.reqs[e_uid];
                                onError(a, n, file);
                            }
                        });
                        onStart(file);
                    });
                }
            }
        },
        {
            key: "reset",
            value: function() {
                this.setState({
                    uid: _()
                });
            }
        },
        {
            key: "resend",
            value: function(e) {
                let t;
                const accept = this.props.accept;
                const r = this.files[e];
                if (r && (t = r, module2400(t, accept))) {
                    this.upload(r, [
                        r
                    ]);
                }
            }
        },
        {
            key: "abort",
            value: function(e) {
                const reqs = this.reqs;
                if (e) {
                    if (reqs[e]) {
                        reqs[e].abort();
                        delete reqs[e];
                    }
                } else {
                    Object.keys(reqs).forEach((e)=>{
                        if (reqs[e]) {
                            reqs[e].abort();
                        }
                        delete reqs[e];
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, disabled, style, multiple, accept, children, directory } = props;
                const state = this.state;
                const { isDraging, uid } = state;
                const h = disabled ? {} : {
                    onClick: this.onClick,
                    onKeyDown: this.onKeyDown,
                    onDrop: this.onFileDrop,
                    onDragOver: this.onFileDrop,
                    onDragLeave: this.onFileDrop
                };
                return module553.default.createElement("span", {
                    ...h,
                    className: module3("upload", {
                        "upload-dragover": isDraging,
                        "upload-disabled": disabled
                    }, className),
                    role: "button",
                    style
                }, module553.default.createElement("input", {
                    type: "file",
                    ref: function(t) {
                        _this.fileInput = t;
                    },
                    key: uid,
                    style: {
                        display: "none"
                    },
                    accept,
                    directory: directory ? "directory" : null,
                    webkitdirectory: directory ? "webkitdirectory" : null,
                    multiple,
                    onChange: this.onChange
                }), children);
            }
        }
    ]);
    return a;
})(module553.Component);
O.propTypes = {
    name: module1.string,
    disabled: module1.bool,
    action: module1.oneOfType([
        module1.string,
        module1.func
    ]),
    directory: module1.bool,
    onError: module1.func,
    onSuccess: module1.func,
    onProgress: module1.func,
    onStart: module1.func,
    data: module1.oneOfType([
        module1.object,
        module1.func
    ]),
    headers: module1.object,
    accept: module1.string,
    multiple: module1.bool,
    beforeUpload: module1.func,
    customRequest: module1.func,
    children: module1.node,
    withCredentials: module1.bool,
    style: module1.object,
    className: module1.string,
    method: module1.string
};
O.defaultProps = {
    data: {},
    headers: {},
    name: "file",
    method: "post",
    onStart: module455,
    onError: module455,
    onSuccess: module455,
    multiple: false,
    beforeUpload: null,
    customRequest: null,
    withCredentials: false
};
export default O;
