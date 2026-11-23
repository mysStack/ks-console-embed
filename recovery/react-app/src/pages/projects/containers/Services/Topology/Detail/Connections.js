import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-27.js";
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
import module31 from "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module4610 from "pages/projects/containers/Services/Topology/Detail/Table";
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
                const jumpTo = this.props.jumpTo;
                return [
                    {
                        id: "label",
                        label: e.label,
                        defaultSort: false,
                        render: function(e, a) {
                            return module553.default.createElement("a", {
                                onClick: function() {
                                    return jumpTo(a);
                                }
                            }, e);
                        }
                    }
                ].concat(module61(e.columns));
            }
        },
        {
            key: "getData",
            value: function(e) {
                const _this = this;
                return e.connections.map((e)=>({
                        id: e.nodeId,
                        label: {
                            value: e.label
                        },
                        ...e.metadata.reduce((acc, item)=>({
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
                const t = module26(this.props.detail, "connections", []);
                if (module63(t)) {
                    return null;
                }
                return t.map((t)=>module553.default.createElement(module4610, {
                        key: t.id,
                        columns: _this.getColumns(t),
                        data: _this.getData(t)
                    }));
            }
        }
    ]);
    return a;
})(module553.Component);
export default _;
