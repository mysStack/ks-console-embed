import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
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
import module186 from "./module-186.js";
import module26 from "./module-26.js";
const p = ((Component_1)=>{
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.state = {
            options: []
        };
        e.getUrl = function() {
            return `
      /kapis${globals.app.isMultiCluster ? `/clusters/${e.props.cluster}` : ""}/resources.kubesphere.io/v1alpha3/storageclasses?sortBy=createTime`;
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                request.get(this.getUrl()).then((t)=>{
                    const options = t.items.map((e)=>({
                            label: e.metadata.name,
                            value: e.metadata.name
                        }));
                    _this.setState({
                        options
                    });
                    _this.props.onChange(module26(_this.state.options, "[0].value"));
                });
            }
        },
        {
            key: "render",
            value: function() {
                return <module186.Select {...this.props} options={this.state.options}/>;
            }
        }
    ]);
    return a;
})(Component);
export default p;
