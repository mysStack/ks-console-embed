import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module807 from "unpacked/module-807.js";
import { METER_RESOURCE_TITLE } from "components/Modals/Bill/constats";
const g = ((e)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.state = {
            value: "cpu"
        };
        e.getOptions = function() {
            const selectOptions = e.props.selectOptions;
            if (module63(selectOptions)) {
                return [];
            }
            return Object.keys(selectOptions).map((e)=>({
                    label: t(METER_RESOURCE_TITLE[e].toUpperCase().replace(/\s+/g, "_")),
                    value: e
                }));
        };
        e.handleSelect = function(t) {
            e.setState({
                value: t
            });
            e.props.getResourceMeterData(t);
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.activeName !== e.activeName || !module807(this.props.selectOptions, e.selectOptions)) {
                    const t = this.getOptions();
                    this.setState({
                        value: module26(t, "[0].value")
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const value = this.state.value;
                return module553.default.createElement("div", null, module553.default.createElement(module186.Select, {
                    onChange: this.handleSelect,
                    options: this.getOptions(),
                    width: "100%",
                    style: {
                        marginBottom: "20px",
                        width: "100%"
                    },
                    value
                }));
            }
        }
    ]);
    return r;
})(module553.Component);
export default g;
