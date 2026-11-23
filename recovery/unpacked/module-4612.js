import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-87.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module4613 from "./module-4613.js";
const _ = ((e)=>{
    module55(a, e);
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
        e.format = function(e) {
            if (!(e.dataType !== "number" && e.id !== "count" && e.id !== "port")) {
                e.value = Number(e.value);
            }
            return e;
        };
        return e;
    }
    module37(a, [
        {
            key: "getColumns",
            value: function(e) {
                return [
                    {
                        id: "label",
                        label: e.label,
                        defaultSort: false,
                        render: function(e) {
                            return module553.default.createElement("strong", null, e);
                        }
                    }
                ].concat(module61(e.columns));
            }
        },
        {
            key: "getData",
            value: function(e) {
                const _this = this;
                return e.nodes.map((e)=>({
                        id: e.id,
                        label: {
                            value: e.label
                        },
                        ...[].concat(module61(e.metadata || []), module61(e.metrics || [])).reduce((acc, item)=>({
                                ...acc,
                                ...module31({}, item.id, _this.format(item))
                            }), {})
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const t = module26(this.props.detail, "children", []);
                if (module63(t)) {
                    return null;
                }
                return t.filter((e)=>e.label === "Pods").map((t)=>module553.default.createElement(module4613, {
                        key: t.topologyId,
                        data: _this.getData(t)
                    }));
            }
        }
    ]);
    return a;
})(module553.Component);
export default _;
