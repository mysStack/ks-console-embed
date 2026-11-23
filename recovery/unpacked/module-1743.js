import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module903 from "./module-903.js";
import module438 from "./module-438.js";
import { Detail, Home, Search } from "./module-3400.js";
let u;
let o;
let i;
let c;
const D = observer((c = i = ((Component_1)=>{
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
    function r(...l) {
        let e;
        let t;
        module36(this, r);
        e = a.call(this, ...l);
        e.clusters = new module438;
        e.formStepState = e.initStepState();
        e.searchInputState = ((t = module14.observable({
            query: [],
            start: "",
            end: "",
            step: "",
            durationAlias: "",
            nextParamsKey: "",
            queryMode: 1,
            cluster: ""
        })).setCluster = module14.action(function(e) {
            t.cluster = e;
        }), t);
        e.detailState = (()=>{
            const e = module14.observable({
                container: "",
                host: "",
                log: "",
                namespace: "",
                pod: ""
            });
            e.setState = module14.action(function(t) {
                module903(e, t);
            });
            return e;
        })();
        return e;
    }
    module37(r, [
        {
            key: "initStepState",
            value: function() {
                const e = module14.observable({
                    step: 0
                });
                e.next = module14.action(function() {
                    e.step += 1;
                });
                e.pre = module14.action(function() {
                    e.step -= 1;
                });
                return e;
            }
        },
        {
            key: "componentDidMount",
            value: async function() {
                await this.clusters.fetchList({
                    limit: -1,
                    ascending: true
                });
                this.searchInputState.setCluster(module26(this, "clustersOpts[0].value"));
            }
        },
        {
            key: "render",
            value: function() {
                const Content = this.Content;
                const { Component, props } = Content;
                if (Component) {
                    return <div style={{
                        height: "calc(100vh - 100px)"
                    }}>{<Component clustersOpts={this.clustersOpts} formStepState={this.formStepState} {...props}/>}</div>;
                }
                return null;
            }
        },
        {
            key: "clustersOpts",
            get: function() {
                return this.clusters.list.data.map(({ name })=>({
                        value: name,
                        label: name
                    }));
            }
        },
        {
            key: "formStepConfig",
            get: function() {
                return [
                    {
                        Component: Home,
                        props: {
                            searchInputState: this.searchInputState
                        }
                    },
                    {
                        Component: Search,
                        props: {
                            searchInputState: this.searchInputState,
                            detailState: this.detailState
                        }
                    },
                    {
                        Component: Detail,
                        props: {
                            searchInputState: this.searchInputState,
                            detailState: this.detailState,
                            close: this.props.onCancel
                        }
                    }
                ];
            }
        },
        {
            key: "Content",
            get: function() {
                return this.formStepConfig[this.formStepState.step] || {};
            }
        }
    ]);
    return r;
})(Component), i.propTypes = {
    onCancel: module1.func
}, o = c, module49(o.prototype, "clustersOpts", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "clustersOpts"), o.prototype), u = o)) || u;
export default D;
