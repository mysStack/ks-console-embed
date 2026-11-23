import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-84.js";
import "./module-73.js";
import "./module-18.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-137.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-85.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module910 from "./module-910.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module195 from "./module-195.js";
import Module2053 from "./module-2053.js";
import module186 from "./module-186.js";
import Module842 from "./module-842.js";
import { getAllYAMLValue, getValue } from "./module-895.js";
import module2056 from "./module-2056.js";
const _ = (e, t)=>{
    const a = getAllYAMLValue(e);
    if (t && a.length === 1) {
        return a[0];
    }
    return a;
};
const O = ((Component_1)=>{
    module55(a, Component_1);
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
        let l;
        module36(this, a);
        r = t.call(this, e);
        r.handleUpload = function(e) {
            const fileReader = new FileReader;
            fileReader.onload = function(e) {
                if (!module63(e.target.result)) {
                    r.value = e.target.result;
                    r.forceUpdate();
                    if (r.props.onChange) {
                        r.props.onChange(r.value);
                    }
                }
            };
            fileReader.readAsText(e[0]);
        };
        r.handleDownload = function() {
            let e;
            const r_props = r.props;
            const { value, mode } = r_props;
            if (value.metadata) {
                e = value;
            } else {
                const l = Object.values(value);
                if (l && l[0] && l[0].metadata) {
                    e = l[0];
                }
            }
            const u = [
                module26(e, "metadata.name", "default"),
                module26(e, "metadata.namespace", ""),
                module26(e, "kind", "").toLowerCase()
            ].filter((e)=>e).join(".");
            r.saveAsFile(r.value, `${u}.${mode}`);
        };
        r.saveAsFile = function(e = "", t = "default.txt") {
            const a = new Blob([
                e
            ], {
                type: "text/plain;charset=utf-8"
            });
            module910.saveAs(a, t);
        };
        r.handleChange = function(e) {
            r.value = e;
            if (r.props.returnType === "obj") {
                if (r.props.onChange) {
                    r.props.onChange(_(r.value, true));
                }
            } else if (r.props.onChange) {
                r.props.onChange(e);
            }
        };
        r.getData = function() {
            return _(r.value, !!r.props.value.metadata);
        };
        r.value = (l = e.value, [
            undefined,
            null
        ].includes(l) ? "" : l?.metadata ? getValue(l) : module195(l) ? l : Object.values(l).map((e)=>getValue(e || {})).join("---\n"));
        return r;
    }
    module37(a, [
        {
            key: "options",
            get: function() {
                return {
                    readOnly: this.props.readOnly,
                    width: "100%",
                    height: "100%"
                };
            }
        }
    ]);
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { mode, className, editorClassName, readOnly } = props;
                return <div className={module3(module2056.mode, className)}><div className={module3(module2056.edit, editorClassName)}><Module842 className={module2056.editor} mode={mode} value={this.value} options={this.options} onChange={this.handleChange}/><div className={module2056.ops} onClick={this.handleModeChange}>{!readOnly && <><Module2053 fileTypes={[
                    ".yaml"
                ]} handleFiles={this.handleUpload}><module186.Icon name="upload" size={20} color={{
                    primary: "#fff",
                    secondary: "#fff"
                }} clickable changeable/></Module2053><span className={module2056.split}>|</span></>}<module186.Icon name="download" size={20} color={{
                    primary: "#fff",
                    secondary: "#fff"
                }} onClick={this.handleDownload} clickable changeable/></div></div></div>;
            }
        }
    ]);
    return a;
})(Component);
export default O;
O.propTypes = {
    className: module1.string,
    mode: module1.string,
    value: module1.oneOfType([
        module1.object,
        module1.arrayOf(module1.object),
        module1.string
    ]),
    readOnly: module1.bool
};
O.defaultProps = {
    mode: "yaml",
    readOnly: false
};
