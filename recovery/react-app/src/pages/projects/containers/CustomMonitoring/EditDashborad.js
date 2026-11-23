import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import Module1632 from "components/Modals/CustomMonitoring";
import module1667 from "stores/monitoring/custom/template";
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
