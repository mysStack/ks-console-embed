import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import Module791 from "components/Base/Text";
import Module2608 from "pages/projects/components/Modals/CreateApp/Services/ServiceList/Item";
import module1612 from "unpacked/module-1612.js";
const h = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleAdd = function() {
            e.props.onAdd();
        };
        return e;
    }
    module37(r, [
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { data, clusters, onAdd, onDelete } = props;
                return <div>{Object.keys(data).map((e)=><Module2608 key={e} data={data[e]} clusters={clusters} propsKey={e} onEdit={onAdd} onDelete={onDelete}/>)}<div className={module1612.add} onClick={this.handleAdd}><Module791 title={t("CREATE_SERVICE")} description={t("APP_CREATE_SERVICE_DESC")}/></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const error = this.props.error;
                return <div className={module1612.wrapper}>{this.renderContent()}{error && <p className={module1612.error}>{error}</p>}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.propTypes = {
    data: module1.object,
    onAdd: module1.func,
    onDelete: module1.func
};
h.defaultProps = {
    data: {},
    onAdd: function() {},
    onDelete: function() {}
};
