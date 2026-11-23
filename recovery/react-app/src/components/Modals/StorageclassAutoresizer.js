import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-48.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-110.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-319.js";
import "unpacked/module-57.js";
import "unpacked/module-193.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import Module791 from "components/Base/Text";
import Module852 from "components/Base/Switch";
import Module800 from "components/Inputs/NumberInput";
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module1740 from "unpacked/module-1740.js";
import module1085 from "unpacked/module-1085.js";
import module74 from "unpacked/module-74.js";
import module972 from "unpacked/module-972.js";
import module447 from "unpacked/module-447.js";
import Module3383 from "unpacked/module-3383.js";
import Module3385 from "components/Modals/StorageclassAutoresizer/TailItemInput";
import module3387 from "unpacked/module-3387.js";
let d;
let p;
let m;
const M = (e, t, a, r)=>module26(e.formData, `metadata.annotations['${t}.kubesphere.io/${a}']`, r);
const unit = "Gi";
const j = observer((m = p = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.enable = function() {
            const resize = n.state.resize;
            n.setState({
                resize: {
                    ...resize,
                    enabled: !resize.enabled
                }
            });
        };
        n.NumberEndDot = function(e) {
            const a = /^[0-9]+(\.[0-9]{0,})?/g.exec(e) ?? [];
            if (module447(a[0], ".")) {
                return e.split(".").join("");
            }
            return e;
        };
        n.handleOk = function() {
            n.formRef.current.validate(function() {
                const n_state = n.state;
                const { resize, restart } = n_state;
                const r = {
                    resize,
                    restart
                };
                const o = Object.entries(r).map((e)=>{
                    const t = module96(e, 2);
                    const a = t[0];
                    const r = t[1];
                    const o = {};
                    Object.entries(r).forEach((e)=>{
                        const t = module96(e, 2);
                        const r = t[0];
                        const u = t[1];
                        const c = module1740(u) ? JSON.stringify(u) : n.NumberEndDot(u);
                        module74(o, `annotations['${a}.kubesphere.io/${r}']`, c);
                    });
                    return o.annotations;
                });
                n.props.onOk({
                    ...o[0],
                    ...o[1],
                    "restart.kubesphere.io/online-expansion-support": `${!restart.enabled}`
                });
            });
        };
        n.handleLimitChange = function(fakeLimit) {
            const resize = n.state.resize;
            const a = /^[0-9]+(\.[0-9]{0,})?/g.test(fakeLimit) ? `${module972(fakeLimit)}Gi` : "10000Gi";
            n.setState({
                resize: {
                    ...resize,
                    "storage-limit": a
                },
                fakeLimit
            });
        };
        n.handleThreshold = function(fakeThreshold) {
            const resize = n.state.resize;
            const threshold = fakeThreshold === "%" ? "10%" : fakeThreshold;
            n.setState({
                resize: {
                    ...resize,
                    threshold
                },
                fakeThreshold
            });
        };
        n.handleIncrease = function(fakeIncrease) {
            const resize = n.state.resize;
            const increase = fakeIncrease === "Gi" ? "10Gi" : fakeIncrease;
            n.setState({
                resize: {
                    ...resize,
                    increase
                },
                fakeIncrease
            });
        };
        n.handleMaxTime = function(e) {
            const restart = n.state.restart;
            if (/^[0-9]*$/g.test(e)) {
                n.setState({
                    restart: {
                        ...restart,
                        "max-time": e === "" ? "300" : `${module972(e)}`
                    },
                    fakeMaxTime: module972(e)
                });
            }
        };
        n.restartEnable = function() {
            const restart = n.state.restart;
            n.setState({
                restart: {
                    ...restart,
                    enabled: !restart.enabled
                }
            });
        };
        n.renderMaxTime = function() {
            const fakeMaxTime = n.state.fakeMaxTime;
            return <><module186.Alert type="warning" message={t("RESTART_WORKLOAD_AUTOMATICALLY_TIP")}/><div className={module3387.settings}><module186.Form.Item label={t("TIMEOUT_PERIOD_S")}><Module800 onChange={n.handleMaxTime} value={fakeMaxTime} min={0}/></module186.Form.Item></div></>;
        };
        n.formRef = createRef();
        n.state = {
            resize: {
                enabled: JSON.parse(M(e, "resize", "enabled", false)),
                increase: M(e, "resize", "increase", "10Gi"),
                "storage-limit": M(e, "resize", "storage-limit", "10000Gi"),
                threshold: M(e, "resize", "threshold", "10%")
            },
            restart: {
                enabled: JSON.parse(M(e, "restart", "enabled", false)),
                "max-time": M(e, "restart", "max-time", "300")
            },
            fakeIncrease: M(e, "resize", "increase", "10Gi"),
            fakeThreshold: M(e, "resize", "threshold", "10%"),
            fakeLimit: M(e, "resize", "storage-limit", "10000Gi"),
            fakeMaxTime: M(e, "restart", "max-time", "300")
        };
        return n;
    }
    module37(r, [
        {
            key: "getMarks",
            value: function() {
                return module1085(6).reduce((acc, item)=>{
                    const a = 10000 * item / 5;
                    const r = a === 0 ? "0" : `${Math.floor(a)}Gi`;
                    return {
                        ...acc,
                        ...module31({}, a, r)
                    };
                }, {});
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, formData, isSubmitting } = props;
                const state = this.state;
                const { resize, restart, fakeThreshold, fakeIncrease, fakeLimit } = state;
                const resize_enabled = resize.enabled;
                const restart_enabled = restart.enabled;
                const marks = this.getMarks();
                const S = /[0-9]+/g.exec(fakeLimit)?.[0];
                const size = S ? parseInt(S, 10) : "";
                const O = /[0-9]+/g.test(fakeIncrease) ? fakeIncrease.endsWith("%") ? fakeIncrease.slice(0, -1) : fakeIncrease.slice(0, -2) : "";
                const C = fakeIncrease !== "" ? fakeThreshold.slice(0, -1) : fakeIncrease;
                return <Module788 width={960} onOk={this.handleOk} onCancel={onCancel} visible={visible} title={t("SET_AUTO_EXPANSION")} okText={t("OK")} cancelText={t("CANCEL")} isSubmitting={isSubmitting}><module186.Form formData={formData} ref={this.formRef}><module186.Form.Item><div className={module3387.wrapper}><Module791 className={module3387.text} icon={function() {
                    return <img src="/assets/autoscaling.svg" style={{
                        width: "32px",
                        marginRight: "16px"
                    }}/>;
                }} title={t("AUTO_EXPANSION")} description={t("AUTO_EXPANSION_DESC")}/><Module852 className={module3387.switch} text={resize_enabled ? t("ENABLED") : t("DISABLED")} checked={resize_enabled} onChange={this.enable}/></div></module186.Form.Item><div className={module3387.settings}><div className={module3387.title}>{t("AUTO_EXPANSION_SETTINGS")}</div><div className={module3387.container}><div className={module3387.limit}><module186.Form.Item label={t("MAXIMUM_SIZE")}><Module3383 size={size} max={10000} min={0} marks={marks} unit={unit} onChange={this.handleLimitChange}/></module186.Form.Item></div><module186.Columns><module186.Column><module186.Form.Item><Module3385 title={t("THRESHOLD")} unit="%" max={100} value={C} onChange={this.handleThreshold}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item desc={t("INCREMENT_DESC")}><Module3385 title={t("INCREMENT")} value={O} unit="Gi" onChange={this.handleIncrease}/></module186.Form.Item></module186.Column></module186.Columns></div><div className={module3387.group}><div className={module3387.container}><div className={module3387.checkItem}><module186.Checkbox checked={restart_enabled} onChange={this.restartEnable}/><div className={module3387.text}><span className={module3387.title}>{t("RESTART_WORKLOAD_AUTOMATICALLY")}</span><span className={module3387.des}>{t("RESTART_WORKLOAD_AUTOMATICALLY_DESC")}</span></div></div>{restart_enabled && this.renderMaxTime()}</div></div></div></module186.Form></Module788>;
            }
        },
        {
            key: "increaseOptions",
            get: function() {
                return [
                    {
                        label: "GiB",
                        value: "Gi"
                    },
                    {
                        label: "%",
                        value: "%"
                    }
                ];
            }
        },
        {
            key: "increaseUnit",
            get: function() {
                const fakeIncrease = this.state.fakeIncrease;
                return this.increaseOptions.filter((e)=>fakeIncrease.endsWith(e.value))[0].value ?? "%";
            }
        }
    ]);
    return r;
})(Component), p.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, d = m)) || d;
export default j;
