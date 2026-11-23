import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-975.js";
import "./module-18.js";
import "./module-48.js";
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
import "./module-315.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module952 from "./module-952.js";
import module240 from "./module-240.js";
import module459 from "./module-459.js";
import module3 from "./module-3.js";
import { formatSize } from "./module-52.js";
import { ReactComponent } from "./module-2861.js";
import module2862 from "./module-2862.js";
const T = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.setFileStatus = function(e, t) {
            n.setState(function(a) {
                return {
                    files: {
                        ...a.files,
                        ...module31({}, e, {
                            ...a.files[e],
                            ...t
                        })
                    }
                };
            });
        };
        n.beforeUploadHandler = (()=>{
            const e = module44(module41.mark(function e(a) {
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if (!(Object.keys(n.state.files).length > 0)) {
                                    e.next = 4;
                                    break;
                                }
                                module240.error(t("FILE_UPLOAD_ERROR"));
                                return e.abrupt("return", Promise.reject(t("FILE_UPLOAD_ERROR")));
                            case 4:
                                if (a.name.slice(a.name.lastIndexOf(".") + 1) === "json") {
                                    e.next = 8;
                                    break;
                                }
                                module240.error(t("WRONG_FILE_EXTENSION_NAME", {
                                    type: "JSON"
                                }));
                                return e.abrupt("return", Promise.reject(t("WRONG_FILE_EXTENSION_NAME", {
                                    type: "JSON"
                                })));
                            case 8:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        })();
        n.startHandler = function(e) {
            n.setFileStatus(e.uid, {
                size: e.size,
                name: e.name,
                showProgress: true,
                showFile: false,
                percentage: 0,
                status: "active"
            });
        };
        n.progressHandler = function(e, t) {
            const a = module459(e.percent) ? Math.round(e.percent) : 0;
            n.setFileStatus(t.uid, {
                size: t.size,
                percentage: a === 100 ? 99 : a,
                status: "active"
            });
        };
        n.successHandler = function(e, a) {
            const r = {
                name: a.name,
                size: a.size,
                showProgress: false,
                showFile: true,
                percentage: 100,
                status: "active"
            };
            n.setFileStatus(a.uid, r);
            const fileReader = new FileReader;
            fileReader.readAsText(a, "utf8");
            fileReader.addEventListener("load", function() {
                const fileReader_result = fileReader.result;
                if (n.props.onChange) {
                    n.props.onChange(fileReader_result);
                }
            });
            module240.success({
                content: t("UPLOAD_SUCCESSFUL")
            });
        };
        n.errorHandler = function(e, a, r) {
            n.setFileStatus(r.uid, {
                size: r.size,
                showProgress: true,
                showFile: false,
                status: "exception"
            });
            module240.error({
                content: t("UPLOAD_FAILED_MESSAGE")
            });
        };
        n.handleReUpload = function() {
            Object.keys(n.state.files).forEach((e)=>{
                n.uploader.abort(e);
            });
            n.setState({
                files: {}
            });
            n.props.onChange("");
            n.uploader.onClick();
        };
        n.renderProgress = function(e) {
            const a = n.state.files[e];
            return <div className={module2862.uploadingContent} key={e}><p className={module2862.fileInfo}><span className={module2862.fileName}>{a.name}</span><span className={module2862.uploadText}>{t("UPLOAD_PERCENT", {
                percent: a.percentage
            })}</span><span className={module2862.uploadText}>{t("FILE_SIZE", {
                size: formatSize(a.size)
            })}</span></p><module186.Progress status="primary" className={module2862.progress} percent={a.percentage} strokeWidth={8} key={e} showInfo={false}/></div>;
        };
        n.renderFileItem = function(e) {
            const a = n.state.files[e];
            return <div className={module2862.uploadingContent} key={e}><p className={module2862.fileInfo}><span className={module2862.fileName}>{a.name}</span><span className={module2862.uploadText}>{t("UPLOAD_FULLY")}</span><span className={module2862.uploadText}>{t("FILE_SIZE", {
                size: formatSize(a.size)
            })}</span></p><module186.Progress status="primary" className={module2862.progress} percent={100} strokeWidth={8} showInfo={false}/></div>;
        };
        n.uploaderProps = {
            name: "grafanaDashboard",
            method: "post",
            action: n.getUploadUrl,
            multiple: false,
            type: "json",
            beforeUpload: n.beforeUploadHandler,
            onStart: n.startHandler,
            onSuccess: n.successHandler,
            onProgress: n.progressHandler,
            onError: n.errorHandler
        };
        n.state = {
            files: {}
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const files = this.state.files;
                const length = Object.keys(files).length;
                return <div><div className={module2862.container}><Module952 {...this.uploaderProps} ref={function(t) {
                    _this.uploader = t;
                }}><div className={module3(module2862.selectContainer, {})}><module186.Icon className={module2862.icon} size={40} name="upload"/><p className={module2862.title}>{t("UPLOAD_FROM_LOCAL_TITLE")}</p><p className={module2862.desc}>{t("SUPPORT_JSON_FILE")}</p></div></Module952></div><div className={module3(module2862.uploadContainer, module31({}, module2862.none, !length))}><span className={module2862.icon}><ReactComponent/></span>{Object.keys(files).map((t)=>{
                    if (files[t]) {
                        if (files[t].showProgress) {
                            return _this.renderProgress(t);
                        }
                        if (files[t].showFile) {
                            return _this.renderFileItem(t);
                        }
                        return null;
                    }
                    return null;
                })}<module186.Icon changeable name="trash" onClick={this.handleReUpload} className={module2862.uploadIcon}/></div></div>;
            }
        },
        {
            key: "getUploadUrl",
            get: function() {
                return "/grafana/file";
            }
        }
    ]);
    return r;
})(Component);
export default T;
