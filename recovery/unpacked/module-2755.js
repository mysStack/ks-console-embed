import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import Module1632 from "./module-1632.js";
import module1667 from "./module-1667.js";
const m = ((Component_1)=>{
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
        module36(this, a);
        r = t.call(this, e);
        r.handleOk = async function e() {
            let t;
            t = r.store.toJS();
            await r.props.onOk(t);
            r.store.switchEditingMode(false);
        };
        const { metadata = {}, spec = {} } = e.data;
        const { title, description, refresh, panels, datasource, templatings, time } = spec;
        const { namespace, name } = metadata;
        r.store = new module1667({
            title,
            cluster: e.cluster,
            namespace,
            description,
            refresh,
            isEditing: false,
            panels,
            datasource,
            templatings,
            time,
            name,
            formTemplate: e.data
        });
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { cluster, readOnly, isSubmitting, onCancel } = props;
                return <Module1632 store={this.store} cluster={cluster} readOnly={readOnly} isSubmitting={isSubmitting} onCancel={onCancel} onOk={this.handleOk}/>;
            }
        }
    ]);
    return a;
})(Component);
export default m;
