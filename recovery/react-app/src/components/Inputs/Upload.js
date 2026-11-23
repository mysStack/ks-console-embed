import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module952 from "components/Base/Upload";
import module2873 from "unpacked/module-2873.js";
const g = ((Component_1)=>{
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
        n.uploaderProps = {
            name: "file",
            action: "/images/upload",
            accept: "image/*",
            beforeUpload: function(e) {
                return !(e.size > 2097152 && (module240.error(t("FILE_OVERSIZED_TIP")), 1));
            },
            onSuccess: function(t) {
                if (t) {
                    e.onChange(t.path);
                }
            }
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, value, placeholder, defaultLogo } = props;
                return <module186.Columns className={module3("is-variable is-2", className)}><module186.Column className="is-narrow"><img className={module3(module2873.image, "upload-preview")} src={value || defaultLogo}/></module186.Column><module186.Column><Module952 {...this.uploaderProps}><div className={module2873.upload}><module186.Icon size={32} name="upload"/><p>{placeholder}</p></div></Module952></module186.Column></module186.Columns>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
g.propTypes = {
    className: module1.string,
    defaultLogo: module1.string,
    placeholder: module1.string,
    value: module1.string,
    onChange: module1.func
};
g.defaultProps = {
    className: "",
    value: "",
    onChange: function() {}
};
