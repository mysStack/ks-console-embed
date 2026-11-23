import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import { Component } from "unpacked/module-553.js";
import module194 from "unpacked/module-194.js";
import module186 from "unpacked/module-186.js";
import module14 from "unpacked/module-14.js";
import Module2806 from "components/Modals/CustomMonitoring/components/TableColumnStyleModal";
import module2819 from "unpacked/module-2819.js";
const h = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            shouldInputModalShow: false
        };
        e.handleCustomClick = function() {
            e.setState({
                shouldInputModalShow: true
            });
        };
        e.handleCustomColseClick = function() {
            e.setState({
                shouldInputModalShow: false
            });
        };
        e.handleModalSubmit = function(t) {
            e.setState({
                shouldInputModalShow: false
            });
            e.props.onChange(t);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const shouldInputModalShow = this.state.shouldInputModalShow;
                const value = this.props.value;
                return <div><div className={module2819.wrapper}><div>{this.renderItems()}</div><div onClick={this.handleCustomClick}><span className={module2819.button}><module186.Icon name="pen"/>{t("DISPLAY_FORMAT")}</span></div></div><Module2806 data={module14.toJS(value)} visible={shouldInputModalShow} onCancel={this.handleCustomColseClick} onOk={this.handleModalSubmit}/></div>;
            }
        },
        {
            key: "renderItems",
            value: function() {
                const value = this.props.value;
                return [
                    {
                        key: "type",
                        label: t("TYPE")
                    },
                    {
                        key: "unit",
                        label: t("UNIT"),
                        visible: function(e, t) {
                            return t.type === "number";
                        }
                    },
                    {
                        key: "dateFormat",
                        label: t("TIME_FORMAT"),
                        visible: function(e, t) {
                            return t.type === "date";
                        }
                    },
                    {
                        key: "decimals",
                        label: t("DECIMALS"),
                        visible: function(e, t) {
                            return t.type === "number";
                        }
                    },
                    {
                        key: "colorMode",
                        label: function(e) {
                            return `t('THRESHOLD_FILL') (${e})`;
                        },
                        visible: function(e, t) {
                            return t.type === "number" && e !== "disabled";
                        },
                        value: function(e, t) {
                            return <><span className={module2819.colorCycle} style={{
                                backgroundColor: t.colors[0]
                            }}/><span>{"<"}</span><span>{t.thresholds[0]}</span><span>{"<"}</span><span className={module2819.colorCycle} style={{
                                backgroundColor: t.colors[1]
                            }}/><span>{"<"}</span><span>{t.thresholds[1]}</span><span>{"<"}</span><span className={module2819.colorCycle} style={{
                                backgroundColor: t.colors[2]
                            }}/></>;
                        }
                    }
                ].map((t)=>{
                    if (module194(t.visible) && !t.visible(value[t.key], value)) {
                        return false;
                    }
                    const a = module194(t.value) ? t.value(value[t.key], value) : value[t.key];
                    if (!a) {
                        return false;
                    }
                    const r = module194(t.label) ? t.label(value[t.key], value) : t.label;
                    return <span key={t.key} className={module2819.item}>{r}: {a}</span>;
                });
            }
        }
    ]);
    return r;
})(Component);
export default h;
