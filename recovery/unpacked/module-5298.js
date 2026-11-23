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
import { Component } from "./module-553.js";
import Module5299 from "./module-5299.js";
import "./module-5305.js";
import "./module-5720.js";
import "./module-5721.js";
import "./module-5722.js";
import "./module-5723.js";
import "./module-5724.js";
import "./module-5725.js";
import "./module-5726.js";
import "./module-5727.js";
import "./module-5728.js";
import "./module-5729.js";
const u = ((Component_1)=>{
    module55(i, Component_1);
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
            let i;
            const n = module51(e);
            if (t) {
                const o = module51(this).constructor;
                i = Reflect.construct(n, arguments, o);
            } else {
                i = n.apply(this, arguments);
            }
            return module56(this, i);
        };
    })(i);
    function i() {
        module36(this, i);
        return t.apply(this, arguments);
    }
    module37(i, [
        {
            key: "render",
            value: function() {
                return <Module5299 theme="chaos" width="auto" height="100%" tabSize={2} editorProps={{
                    $blockScrolling: true
                }} showPrintMargin={false} keyboardHandler="vscode" wrapEnabled {...this.props}/>;
            }
        }
    ]);
    return i;
})(Component);
export default u;
