import "./module-12.js";
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
import module246 from "./module-246.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module800 from "components/Inputs/NumberInput";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
function E(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const y = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.onChange = function(e) {
            return function(a) {
                const onChange = t.props.onChange;
                if (module246(a) === "object") {
                    a = a.target.value;
                }
                module74(t.state.kafkaUserConfig, e, a);
                t.setState({
                    ...t.state.kafkaUserConfig
                });
                onChange(a, e);
            };
        };
        t.state = {
            kafkaUserConfig: e.kafkaUserConfig
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const kafkaUserConfig = this.state.kafkaUserConfig;
                return this.config.map((a)=><module186.Form.Item label={a.name} desc={a.desc} key={a.name}><Module800 defaultValue={module26(kafkaUserConfig, a.name)} onChange={_this.onChange(a.name)} placeholder=" " integer min={a.min} max={a.max}/></module186.Form.Item>);
            }
        },
        {
            key: "config",
            get: function() {
                return [
                    {
                        name: "producerByteRate",
                        min: 0,
                        max: 2147483647,
                        desc: t("DBPARAM_PRODUCER_BYTERATE_DESC", {
                            min: 0,
                            max: 2147483647
                        })
                    },
                    {
                        name: "consumerByteRate",
                        min: 0,
                        max: 2147483647,
                        desc: t("DBPARAM_CONSUMER_BYTERATE_DESC", {
                            min: 0,
                            max: 2147483647
                        })
                    },
                    {
                        name: "requestPercentage",
                        min: 0,
                        max: 100,
                        desc: t("DBPARAM_REAUSET_PERCENTAGE_DESC", {
                            min: 0,
                            max: 100
                        })
                    },
                    {
                        name: "controllerMutationRate",
                        min: 0,
                        max: 2147483647,
                        desc: t("DBPARAM_CONTROLLER_MUTATION_DESC", {
                            min: 0,
                            max: 2147483647
                        })
                    }
                ];
            }
        }
    ]);
    return r;
})(Component);
export default y;
