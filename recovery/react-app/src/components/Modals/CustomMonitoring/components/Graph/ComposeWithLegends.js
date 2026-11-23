import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import Module1636 from "unpacked/module-1636.js";
import module2825 from "unpacked/module-2825.js";
const y = ((Component_1)=>{
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
            legendsVisibleStates: e.props.legends.reduce((acc, legend)=>({
                    ...acc,
                    ...module31({}, legend.ID, true)
                }), {})
        };
        e.handleClick = function(t) {
            const a = t.currentTarget.dataset.id;
            const legendsVisibleStates = e.state.legendsVisibleStates;
            e.setState({
                legendsVisibleStates: {
                    ...legendsVisibleStates,
                    ...module31({}, a, !legendsVisibleStates[a])
                }
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
                const { legends, ...rest } = props;
                const legendsVisibleStates = this.state.legendsVisibleStates;
                return <div className={module2825.wrapper}><Module1636 {...rest} legends={legends.filter((e)=>legendsVisibleStates[e.ID])}/><div>{legends.map((t)=><span className={module3(module2825.legend, module31({}, module2825.hidden, !legendsVisibleStates[t.ID]))} key={t.ID} data-id={t.ID} onClick={_this.handleClick}><small className={module2825.radios} style={{
                        backgroundColor: t.color
                    }}/><span>{t.name}</span></span>)}</div></div>;
            }
        }
    ]);
    return a;
})(Component);
export default y;
