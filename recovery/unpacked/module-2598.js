import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
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
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-64.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
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
import module240 from "./module-240.js";
import Module952 from "./module-952.js";
import module459 from "./module-459.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module3 from "./module-3.js";
import { formatSize } from "./module-52.js";
import { B2I_SUPPORTED_TYPES } from "./module-72.js";
import module456 from "./module-456.js";
import module2599 from "./module-2599.js";
const headers = {
    "x-kubernetes-action": "post",
    "x-kubernetes-group-version-kind": '{"group":"devops.kubesphere.io","version":"v1alpha1","kind":"S2iBinary"}'
};
const R = ((Component_1)=>{
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
        n.formatFileName = function(e) {
            n.binaryName = e.toLowerCase().replace(/([^a-zA-Z0-9])/g, "-") + Math.random().toString(36).slice(-4);
            return n.binaryName;
        };
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
        n.getUploadUrl = function() {
            return `/kapis/devops.kubesphere.io/v1alpha2${n.store.getPath({
                namespace: n.props.namespace,
                cluster: n.props.cluster
            })}/s2ibinaries/${n.binaryName}/file`;
        };
        n.beforeUploadHandler = (()=>{
            const e = module44(module41.mark(function e(a) {
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if ([
                                    a.name.slice(a.name.lastIndexOf(".") + 1),
                                    "binary",
                                    ""
                                ].includes(n.filesType)) {
                                    e.next = 4;
                                    break;
                                }
                                module240.error(t("WRONG_FILE_EXTENSION_NAME", {
                                    type: n.filesType
                                }));
                                return e.abrupt("return", Promise.reject(t("WRONG_FILE_EXTENSION_NAME", {
                                    type: n.filesType
                                })));
                            case 4:
                                e.next = 6;
                                return n.store.creatBinary(n.formatFileName(a.name), n.props.namespace, n.props.cluster);
                            case 6:
                                return e.abrupt("return", e.sent);
                            case 7:
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
            n.props.onChange(module26(e, "spec.downloadURL"));
            module74(n.props.formTemplate, 'metadata.annotations.["kubesphere.io/file"]', JSON.stringify(r));
            module240.success({
                content: t("FILE_UPLOADED_TIP")
            });
            if (n.props.uploadSuccess) {
                n.props.uploadSuccess();
            }
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
        n.store = new module456;
        let l = {};
        if (n.filesType && n.filesType !== "binary") {
            l = {
                accept: `.${n.filesType}`
            };
        }
        n.uploaderProps = {
            name: "s2ibinary",
            method: "put",
            action: n.getUploadUrl,
            multiple: false,
            headers,
            ...l,
            beforeUpload: n.beforeUploadHandler,
            onStart: n.startHandler,
            onSuccess: n.successHandler,
            onProgress: n.progressHandler,
            onError: n.errorHandler
        };
        n.state = {
            files: n.uploadedfile ? {
                default: JSON.parse(n.uploadedfile)
            } : {}
        };
        return n;
    }
    module37(r, [
        {
            key: "renderProgress",
            value: function(e) {
                const a = this.state.files[e];
                return <div className={module2599.uploadingContent} key={e}><p className={module2599.fileInfo}><span className={module2599.fileName}>{a.name}</span><span className={module2599.uploadText}>{t("UPLOAD_PERCENT", {
                    percent: a.percentage
                })}</span><span className={module2599.uploadText}>{t("FILE_SIZE", {
                    size: formatSize(a.size)
                })}</span></p><module186.Progress status="primary" className={module2599.progress} percent={a.percentage} strokeWidth={8} key={e} showInfo={false}/></div>;
            }
        },
        {
            key: "renderFileItem",
            value: function(e) {
                const a = this.state.files[e];
                return <div className={module2599.uploadingContent} key={e}><p className={module2599.fileInfo}><span className={module2599.fileName}>{a.name}</span><span className={module2599.uploadText}>{t("UPLOAD_FULLY")}</span><span className={module2599.uploadText}>{t("FILE_SIZE", {
                    size: formatSize(a.size)
                })}</span></p><module186.Progress status="primary" className={module2599.progress} percent={100} strokeWidth={8} showInfo={false}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const files = this.state.files;
                const length = Object.keys(files).length;
                return <div className={module2599.container}><Module952 {...this.uploaderProps} ref={function(t) {
                    _this.uploader = t;
                }}><div className={module3(module2599.selectContainer, module31({}, module2599.none, length))}><module186.Icon className={module2599.icon} size={40} name={this.filesType} type="coloured"/><p className={module2599.title}>{t("UPLOAD_ARTIFACT_FILE")}</p><p className={module2599.desc}>{t(`${this.filesType.toUpperCase() || "B2I_DEFAULT"}_DESC`)}</p></div></Module952><div className={module3(module2599.uploadContainer, module31({}, module2599.none, !length))}><module186.Icon className={module2599.icon} size={40} name={this.filesType} type="coloured"/>{Object.keys(files).map((t)=>{
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
                })}<module186.Icon changeable name="upload" onClick={this.handleReUpload} className={module2599.uploadIcon}/></div></div>;
            }
        },
        {
            key: "filesType",
            get: function() {
                const e = module26(this.props.formTemplate, "metadata.annotations.languageType");
                if (e && B2I_SUPPORTED_TYPES.includes(e)) {
                    return e;
                }
                return "";
            }
        },
        {
            key: "uploadedfile",
            get: function() {
                return module26(this.props.formTemplate, 'metadata.annotations.["kubesphere.io/file"]');
            }
        }
    ]);
    return r;
})(Component);
export default R;
