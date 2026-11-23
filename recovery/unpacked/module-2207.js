import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
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
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module241 from "./module-241.js";
import module186 from "./module-186.js";
import module858 from "./module-858.js";
import module1038 from "./module-1038.js";
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.store = e.props.isEdgeWize ? new module1038 : new module858;
        e.state = {
            node: [],
            isLoading: false
        };
        e.fetchData = function(t) {
            const cluster = e.props.cluster;
            e.setState({
                isLoading: false
            });
            e.store.fetchList({
                cluster,
                ...t
            }).then(()=>{
                e.setState({
                    nodes: e.store.list.data.map((e)=>({
                            label: e.name,
                            value: e.name
                        })),
                    isLoading: false
                });
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData(this.props.isEdgeWize ? {
                    type: "edgenode"
                } : undefined);
            }
        },
        {
            key: "render",
            value: function() {
                const targetName = this.props.targetName;
                const pagination = module241(this.store.list, [
                    "page",
                    "limit",
                    "total"
                ]);
                return module553.default.createElement(module186.Form.Item, {
                    label: t("MONITORING_TARGETS"),
                    rules: [
                        {
                            required: true,
                            message: t("SELECT_NODE_TIP")
                        }
                    ]
                }, module553.default.createElement(module186.Select, {
                    name: targetName,
                    options: this.state.nodes,
                    pagination,
                    isLoading: this.state.isLoading,
                    onFetch: this.fetchData,
                    searchable: true,
                    multi: true,
                    placeholder: t("NODE")
                }));
            }
        }
    ]);
    return r;
})(module553.Component);
export default g;
