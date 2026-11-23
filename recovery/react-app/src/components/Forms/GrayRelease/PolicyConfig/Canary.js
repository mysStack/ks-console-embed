import "unpacked/module-15.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-97.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module63 from "unpacked/module-63.js";
import module831 from "unpacked/module-831.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module4682 from "components/Forms/GrayRelease/PolicyConfig/Canary/ByTraffic";
import Module4689 from "components/Forms/GrayRelease/PolicyConfig/Canary/ByContent";
import module4696 from "unpacked/module-4696.js";
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
        t.initFormTemplate = function(e) {
            const formTemplate = t.props.formTemplate;
            const host = module26(formTemplate, "strategy.spec.template.spec.hosts[0]");
            const n = module26(formTemplate, "strategy.spec.principal");
            const o = module26(formTemplate, "workload.metadata.labels.version");
            const c = e === "traffic" ? [
                {
                    route: [
                        {
                            destination: {
                                subset: n,
                                host
                            }
                        },
                        {
                            destination: {
                                subset: o,
                                host
                            }
                        }
                    ]
                }
            ] : [
                {
                    route: [
                        {
                            destination: {
                                subset: o,
                                host
                            },
                            weight: 100
                        }
                    ]
                },
                {
                    route: [
                        {
                            destination: {
                                subset: n,
                                host
                            },
                            weight: 100
                        }
                    ]
                }
            ];
            if (t.oldHttpData && (t.oldHttpData.length === 1 && e === "traffic" || t.oldHttpData.length === 2 && e === "content")) {
                if (e === "traffic") {
                    const s = module26(t.oldHttpData, "[0].route", []);
                    const l = s.find((e)=>module26(e, "destination.subset") === n);
                    const i = s.find((e)=>module26(e, "destination.subset") === o);
                    if (l && i) {
                        module74(c[0], "route[0].weight", l.weight);
                        module74(c[0], "route[1].weight", i.weight);
                    }
                } else {
                    const f = t.oldHttpData.find((e)=>!!e.match);
                    module74(c[0], "match", f.match);
                }
            }
            if (t.protocol === "tcp") {
                c.forEach((e)=>{
                    e.match = e.match || [];
                });
            }
            module74(t.formTemplate, t.strategyPath, c);
        };
        t.handleModeChange = function(mode) {
            t.initFormTemplate(mode);
            t.setState({
                mode
            });
        };
        const n = module26(t.formTemplate, t.strategyPath, []);
        t.state = {
            mode: n.some((e)=>!module63(e.match)) ? "content" : "traffic"
        };
        t.oldHttpData = module831(n);
        t.initFormTemplate(t.state.mode);
        return t;
    }
    module37(r, [
        {
            key: "renderContent",
            value: function() {
                if (this.state.mode === "traffic") {
                    return <Module4682 {...this.props}/>;
                }
                return <Module4689 {...this.props}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <><div className={module4696.bar}><module186.RadioGroup mode="button" value={this.state.mode} onChange={this.handleModeChange} size="small"><module186.RadioButton value="traffic">{t("SPECIFY_TRAFFIC_DISTRIBUTION")}</module186.RadioButton><module186.RadioButton value="content" disabled={this.protocol !== "http"}>{t("SPECIFY_REQUEST_PARAMETERS")}</module186.RadioButton></module186.RadioGroup>{this.protocol && <module186.Tooltip content={t("POLICY_REQUEST_CONTENT_TIP")}><module186.Icon className={module4696.tip} name="question"/></module186.Tooltip>}</div><div>{this.renderContent()}</div></>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return this.props.formTemplate.strategy;
            }
        },
        {
            key: "protocol",
            get: function() {
                return module26(this.formTemplate, "spec.protocol", "http");
            }
        },
        {
            key: "strategyPath",
            get: function() {
                return `spec.template.spec.${this.protocol}`;
            }
        }
    ]);
    return r;
})(Component);
export default y;
