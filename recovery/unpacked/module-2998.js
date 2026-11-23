import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import * as module553 from "./module-553.js";
let o;
let u;
let c;
const C = observer((c = u = ((e)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleSubmit = function(e) {
            const onOk = t.props.onOk;
            const t_formTemplate = t.formTemplate;
            const e_nodeSelector = e.nodeSelector;
            module74(t_formTemplate, "spec.nodeSelector", e_nodeSelector);
            onOk(t_formTemplate);
        };
        t.formTemplate = module136(module14.toJS(e.detail._originData));
        t.state = {
            nodeSelector: module26(e.detail, "nodeSelector", "all()")
        };
        return t;
    }
    module37(r, [
        {
            key: "getOptions",
            value: function() {
                return [
                    {
                        label: t("YES"),
                        value: "all()"
                    },
                    {
                        label: t("NO"),
                        value: "!all()"
                    }
                ];
            }
        },
        {
            key: "render",
            value: function() {
                return module553.default.createElement(module788.Form, {
                    title: t("IPPOOL_AUTO_ASSIGN"),
                    width: 691,
                    data: this.state,
                    ...this.props,
                    onOk: this.handleSubmit
                }, module553.default.createElement(module186.Form.Item, {
                    label: t("IPPOOL_IS_AUTO_ASSIGN")
                }, module553.default.createElement(module186.Select, {
                    name: "nodeSelector",
                    options: this.getOptions(),
                    clearable: true,
                    placeholder: " "
                })));
            }
        }
    ]);
    return r;
})(module553.Component), u.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
}, u.defaultProps = {
    detail: {},
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, o = c)) || o;
export default C;
