import "unpacked/module-15.js";
import "unpacked/module-18.js";
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
import { Component, createRef } from "unpacked/module-553.js";
import { renderIntoCanvas } from "utils/tracing";
const f = ((Component_1)=>{
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
        r.getColor = function(e) {
            return r.props.data.serviceColorMap[e];
        };
        r.canvas = createRef();
        return r;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.drawCanvas();
            }
        },
        {
            key: "drawCanvas",
            value: function() {
                if (this.canvas && this.canvas.current) {
                    const e = this.props.data;
                    const t = e.spans.map((e)=>({
                            valueOffset: e.relativeStartTime,
                            valueWidth: e.duration,
                            serviceName: e.process.serviceName
                        }));
                    renderIntoCanvas(this.canvas.current, t, e.duration, this.getColor);
                }
            }
        },
        {
            key: "render",
            value: function() {
                return <canvas ref={this.canvas}/>;
            }
        }
    ]);
    return a;
})(Component);
export default f;
