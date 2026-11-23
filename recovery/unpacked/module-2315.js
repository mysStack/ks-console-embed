import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module63 from "./module-63.js";
import module2316 from "./module-2316.js";
const y = [
    {
        label: "READ_AND_WRITE",
        value: "false"
    },
    {
        label: "READ_ONLY",
        value: "true"
    },
    {
        label: "NOT_MOUNT",
        value: "null"
    }
];
const E = ((Component_1)=>{
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
        e.state = {
            visible: false,
            subPath: e.props.value.subPath,
            defaultSubPath: e.props.value.subPath
        };
        e.handleSelectChange = function(readOnly) {
            const e_props = e.props;
            const { value, container } = e_props;
            e_props.onChange({
                ...value,
                readOnly,
                containerName: container,
                mountPath: readOnly === "null" ? "" : value.mountPath
            });
        };
        e.handleMountPathChange = function(t) {
            const e_props = e.props;
            const { value, container } = e_props;
            e_props.onChange({
                ...value,
                mountPath: t.target.value,
                containerName: container
            });
        };
        e.handleSubPathChange = function(t) {
            e.setState({
                subPath: t.target.value
            });
        };
        e.handleSubPathSave = function() {
            const e_props = e.props;
            const { value, container, onChange } = e_props;
            const subPath = e.state.subPath;
            onChange({
                ...value,
                subPath,
                containerName: container
            });
            e.setState({
                visible: false
            });
        };
        e.handleLogPathChange = function(t) {
            const e_props = e.props;
            const { value, container } = e_props;
            e_props.onChange({
                ...value,
                logPath: t.target.value,
                containerName: container
            });
        };
        e.showSubPathForm = function() {
            e.setState({
                visible: true
            });
        };
        e.hideSubPathForm = function() {
            e.setState({
                subPath: e.props.value.subPath,
                visible: false
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "getMountOptions",
            value: function() {
                const supportedAccessModes = this.props.supportedAccessModes;
                return y.filter((t)=>module63(supportedAccessModes) || supportedAccessModes.includes(t.label)).map((e)=>({
                        label: t(e.label),
                        value: e.value
                    }));
            }
        },
        {
            key: "renderLogPathTip",
            value: function() {
                return <div><p>{t.html("CONTAINER_LOG_PATH_TIP")}</p></div>;
            }
        },
        {
            key: "renderSubPathForm",
            value: function() {
                return <div className={module2316.subForm}><div className={module2316.formTitle}><div>{t("SPECIFY_SUBPATH")}</div><p>{t.html("SPECIFY_SUBPATH_TIP")}</p></div><div className={module2316.formContent}><div className={module2316.subPath}><div className="control has-icons-left has-icons-right"><module186.Icon className="is-left" name="textfield" size={20}/><module186.Input name="subPath" defaultValue={this.state.subPath} placeholder={t("SUBPATH")} onChange={this.handleSubPathChange}/></div></div></div><div className={module2316.formFooter}><module186.Button onClick={this.hideSubPathForm}>{t("CANCEL")}</module186.Button><module186.Button type="control" onClick={this.handleSubPathSave}>{t("OK")}</module186.Button></div></div>;
            }
        },
        {
            key: "renderSubPathTip",
            value: function() {
                return <div><div className="tooltip-title">{t("SPECIFY_SUBPATH")}</div><p>{t.html("SPECIFY_SUBPATH_TIP")}</p></div>;
            }
        },
        {
            key: "renderSubPath",
            value: function() {
                const value = this.props.value;
                const visible = this.state.visible;
                if (value && value.mountPath) {
                    if (visible) {
                        return <module186.Popper className={module2316.popper} trigger="click" visible={visible} placement="bottom" closeAfterClick={false} content={this.renderSubPathForm()} onClose={this.hideSubPathForm}>{value.subPath ? <div className={module2316.subPathText}>{value.subPath}</div> : <module186.Icon className="is-right" name="textfield" size={20} clickable/>}</module186.Popper>;
                    }
                    return <module186.Tooltip content={this.renderSubPathTip()}>{value.subPath ? <div className={module2316.subPathText} onClick={this.showSubPathForm}>{value.subPath}</div> : <module186.Icon className="is-right" name="textfield" size={20} clickable onClick={this.showSubPathForm}/>}</module186.Tooltip>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { value, container, collectSavedLog } = props;
                return <div className={module2316.wrapper}><div className={module2316.title}><module186.Icon name="docker" size={20}/>{container}</div><module186.Select name="readOnly" className={module2316.readOnly} value={value.readOnly} options={this.getMountOptions()} onChange={this.handleSelectChange}/><div className={`control has-icons-left has-icons-right ${module2316.mountPath}`}><module186.Icon className="is-left" name="mgmt-node" size={20}/><module186.Input name="mountPath" defaultValue={value.mountPath} disabled={value.readOnly === "null"} placeholder={t("MOUNT_PATH")} onChange={this.handleMountPathChange}/>{this.renderSubPath()}</div>{collectSavedLog === "true" && value.readOnly === "false" && <><div className={`control has-icons-left has-icons-right ${module2316.logPath}`}><module186.Icon className="is-left" name="log" size={20}/><module186.Input name="logPath" defaultValue={value.logPath} disabled={value.readOnly === "null"} placeholder={t("CONTAINER_LOG_PATH")} onChange={this.handleLogPathChange}/></div><module186.Tooltip content={this.renderLogPathTip()}><module186.Icon className={module2316.icon} name="question" size={20}/></module186.Tooltip></>}</div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.value.subPath !== t.defaultSubPath) {
                    return {
                        subPath: e.value.subPath,
                        defaultSubPath: e.value.subPath
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(Component);
export default E;
E.propTypes = {
    name: module1.string,
    container: module1.string,
    value: module1.object,
    onChange: module1.func
};
E.defaultProps = {
    name: "",
    value: {},
    supportedAccessModes: [],
    onChange: function() {}
};
