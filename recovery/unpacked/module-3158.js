import "./module-15.js";
import "./module-18.js";
import "./module-9.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-45.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-66.js";
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module14 from "./module-14.js";
import module910 from "./module-910.js";
import module3 from "./module-3.js";
import module1270 from "./module-1270.js";
import Module842 from "./module-842.js";
import module3159 from "./module-3159.js";
let l;
let o;
let u;
let c;
let s;
const N = observer((o = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.DEFAULT_PREVIEW_FILE = "values.yaml";
        module65(t, "changeMode", u, module88(t));
        module65(t, "changeSelectFile", c, module88(t));
        module65(t, "changePreviewType", s, module88(t));
        t.handleDownload = function() {
            const e = t.props.files[t.selectFile];
            if (t.mode === "yaml") {
                t.downloadAsYaml(e);
            } else if (t.mode === "json") {
                t.downloadAsJSON(e);
            }
        };
        module14.extendObservable(module88(t), {
            selectFile: t.defaultSelectFile,
            mode: "yaml"
        });
        return t;
    }
    module37(r, [
        {
            key: "downloadAsJSON",
            value: function(e) {
                const t = this.selectFile.replace(/yaml$/, "json");
                let a = "";
                try {
                    a = JSON.stringify(module1270.safeLoad(e), null, 2);
                } catch (error) {
                    a = error;
                }
                this.saveAs(a, t);
            }
        },
        {
            key: "downloadAsYaml",
            value: function(e) {
                const selectFile = this.selectFile;
                this.saveAs(e, selectFile);
            }
        },
        {
            key: "saveAs",
            value: function(e, t) {
                const a = new Blob([
                    e
                ], {
                    type: "text/plain;charset=utf-8"
                });
                module910.saveAs(a, t);
            }
        },
        {
            key: "render",
            value: function() {
                if (this.selectFile) {
                    return <div className={module3159.wrapper}><div className={module3159.topbar}><div className={module3159.icon}><module186.Icon name="coding" size={20}/><span>{t("CHART_FILES")}</span></div>{this.renderFileSelect()}</div><div className={module3159.edit}>{this.renderPreviewToolbar()}{this.renderPreviewContent()}</div></div>;
                }
                return <p>{t("NO_APP_CHART_FILE_FOUND")}</p>;
            }
        },
        {
            key: "renderFileSelect",
            value: function() {
                return <module186.Select defaultValue={this.selectFile} onChange={this.changeSelectFile} options={this.fileOptions}/>;
            }
        },
        {
            key: "renderPreviewToolbar",
            value: function() {
                return <div className={module3159.toolbar}><module186.Icon className={module3159.download} name="download" size={20} color={{
                    primary: "#fff"
                }} onClick={this.handleDownload} clickable changeable/></div>;
            }
        },
        {
            key: "renderPreviewTypeBtn",
            value: function(e, t) {
                const _this = this;
                return <span className={module3(module3159.preview_btn, module31({}, module3159.active, this.mode === e))} onClick={function() {
                    return _this.changePreviewType(e);
                }}>{t}</span>;
            }
        },
        {
            key: "renderPreviewContent",
            value: function() {
                return <Module842 mode={this.mode} value={this.props.files[this.selectFile]} options={{
                    readOnly: true
                }}/>;
            }
        },
        {
            key: "fileOptions",
            get: function() {
                const files = this.props.files;
                const t = files === undefined ? {} : files;
                return Object.keys(t).map((e)=>({
                        label: e,
                        value: e
                    }));
            }
        },
        {
            key: "defaultSelectFile",
            get: function() {
                const files = this.props.files;
                const t = (files === undefined ? {} : files)[this.DEFAULT_PREVIEW_FILE];
                const a = this.fileOptions.length ? this.fileOptions[0].value : "";
                if (t) {
                    return this.DEFAULT_PREVIEW_FILE;
                }
                return a;
            }
        }
    ]);
    return r;
})(Component), module49(o.prototype, "fileOptions", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "fileOptions"), o.prototype), module49(o.prototype, "defaultSelectFile", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "defaultSelectFile"), o.prototype), u = module49(o.prototype, "changeMode", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.mode = t;
        };
    }
}), c = module49(o.prototype, "changeSelectFile", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.selectFile = t;
        };
    }
}), s = module49(o.prototype, "changePreviewType", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.mode = t;
        };
    }
}), l = o)) || l;
export default N;
