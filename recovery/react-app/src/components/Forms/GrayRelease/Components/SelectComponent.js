import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
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
import module186 from "unpacked/module-186.js";
import Module4674 from "components/Forms/GrayRelease/Components/Card";
import module4676 from "unpacked/module-4676.js";
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
    function a(...o_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...o_1);
        e.state = {
            loadingName: ""
        };
        e.handleCardSelect = function(t, a) {
            const e_props = e.props;
            const { onChange, onSelect } = e_props;
            e.setState({
                loadingName: t.name
            });
            onSelect(a ? t.name : "", function(t) {
                onChange(t);
                e.setState({
                    loadingName: ""
                });
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { data, value, loading } = props;
                const loadingName = this.state.loadingName;
                if (loading) {
                    return <div className="text-center margin-t12"><module186.Loading spinning/></div>;
                }
                return <div className={module4676.wrapper}>{data.map((component)=><Module4674 key={component.name} component={component} value={component.name === value} loading={component.name === loadingName} onSelect={_this.handleCardSelect}/>)}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default m;
m.propTypes = {
    data: module1.array,
    value: module1.string,
    onChange: module1.func,
    onSelect: module1.func
};
m.defaultProps = {
    data: [],
    value: "",
    onChange: function() {},
    onSelect: function() {}
};
