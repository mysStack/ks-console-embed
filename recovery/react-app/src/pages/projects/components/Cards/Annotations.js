import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-10.js";
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
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import Module802 from "components/Base/Card";
import module5021 from "unpacked/module-5021.js";
const v = ((Component_1)=>{
    module55(a, Component_1);
    var r = ((e)=>{
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a() {
        module36(this, a);
        return r.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, data } = props;
                if (module63(data)) {
                    return null;
                }
                return <Module802 className={className} title={t("ANNOTATION_PL")}><ul className={module5021.annotations}>{Object.keys(data).filter((e)=>!module63(data[e])).map((e)=><li key={e}><module186.Columns><module186.Column className="is-narrow"><p style={{
                        width: 317
                    }}>{e}</p></module186.Column><module186.Column><p>{data[e]}</p></module186.Column></module186.Columns></li>)}</ul></Module802>;
            }
        }
    ]);
    return a;
})(Component);
export default v;
v.propTypes = {
    className: module1.string,
    data: module1.object
};
v.defaultProps = {
    data: {}
};
