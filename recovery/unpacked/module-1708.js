import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
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
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module910 from "./module-910.js";
import module1270 from "./module-1270.js";
import Module842 from "./module-842.js";
import module3097 from "./module-3097.js";
const y = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.DEFAULT_PREVIEW_FILE = "values.yaml";
        e.state = {
            selectFile: e.defaultSelectFile,
            mode: "yaml"
        };
        e.changeMode = function(mode) {
            e.setState({
                mode
            });
        };
        e.changeSelectFile = function(selectFile) {
            e.setState({
                selectFile
            });
        };
        e.handleDownload = function() {
            const e_state = e.state;
            const { mode, selectFile } = e_state;
            const n = e.props.files[selectFile];
            if (mode === "yaml") {
                e.downloadAsYaml(n);
            } else if (mode === "json") {
                e.downloadAsJSON(n);
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "downloadAsJSON",
            value: function(e) {
                const t = this.state.selectFile.replace(/yaml$/, "json");
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
                const selectFile = this.state.selectFile;
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
            key: "renderFileSelect",
            value: function() {
                return <module186.Select defaultValue={this.state.selectFile} onChange={this.changeSelectFile} options={this.fileOptions}/>;
            }
        },
        {
            key: "renderOverlayBtns",
            value: function() {
                if (this.props.hideOverlayBtns) {
                    return null;
                }
                return <div className={module3097.overlayTools}><module186.Icon className={module3097.download} name="download" size={20} color={{
                    primary: "#fff"
                }} onClick={this.handleDownload} clickable changeable/></div>;
            }
        },
        {
            key: "renderToolbar",
            value: function() {
                const props = this.props;
                const e_type = props.type;
                if (props.hideToolbar) {
                    return null;
                }
                return <div className={module3097.toolbar}>{e_type === "selectFiles" && <><div className={module3097.icon}><module186.Icon name="coding" size={20}/><span>{t("CHART_FILES")}</span></div>{this.renderFileSelect()}</>}{e_type === "values.yaml" && <div className={module3097.icon}><img src="/assets/helm.svg" alt=""/><span>Values.yaml</span></div>}</div>;
            }
        },
        {
            key: "renderPreviewContent",
            value: function() {
                const editorOptions = this.props.editorOptions;
                const state = this.state;
                const { mode, selectFile } = state;
                return <Module842 mode={mode} value={this.props.files[selectFile]} {...editorOptions}/>;
            }
        },
        {
            key: "render",
            value: function() {
                if (this.state.selectFile) {
                    return <div className={module3097.wrapper}>{this.renderToolbar()}<div className={module3097.edit}>{this.renderOverlayBtns()}{this.renderPreviewContent()}</div></div>;
                }
                return <p>{t("NO_APP_CHART_FILE_FOUND")}</p>;
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
})(Component);
export default y;
y.propTypes = {
    files: module1.object,
    type: module1.oneOf([
        "selectFiles",
        "values.yaml"
    ]),
    editorOptions: module1.object,
    hideToolbar: module1.bool,
    hideOverlayBtns: module1.bool
};
y.defaultProps = {
    files: {},
    type: "selectFiles",
    editorOptions: {},
    hideToolbar: false,
    hideOverlayBtns: false
};
