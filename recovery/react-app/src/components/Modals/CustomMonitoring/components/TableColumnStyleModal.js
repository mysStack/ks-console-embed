import "unpacked/module-15.js";
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
import module241 from "unpacked/module-241.js";
import Module788 from "components/Base/Modal";
import module186 from "unpacked/module-186.js";
import Module800 from "components/Inputs/NumberInput";
import Module2807 from "components/Modals/CustomMonitoring/components/FormInput/ColorSelector";
import module2818 from "unpacked/module-2818.js";
const E = ((Component_1)=>{
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
        t.form = createRef();
        t.handleTypeChange = function(type) {
            t.setState({
                type
            });
        };
        t.onOk = function() {
            let e;
            const type = t.props.data.type;
            switch(type){
                case "date":
                    e = module241(t.props.data, [
                        "type",
                        "dateFormat"
                    ]);
                    break;
                case "number":
                    e = module241(t.props.data, [
                        "type",
                        "decimals",
                        "unit",
                        "colorMode",
                        "thresholds",
                        "colors"
                    ]);
                    break;
                default:
                    if (type === "string") {
                        e = module241(t.props.data, [
                            "type"
                        ]);
                    }
            }
            t.form.current.validator(function() {
                return t.props.onOk(e);
            });
        };
        t.state = {
            type: e.data.type
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, visible, onCancel } = props;
                const type = this.state.type;
                return <Module788 width={960} title={t("CUSTOM_DISPLAY_STYLE")} description={t("CUSTOM_DISPLAY_MODAL_DESC")} icon="table-chart" visible={visible} okText={t("OK")} onCancel={onCancel} onOk={this.onOk}><module186.Form data={data} ref={this.form}><module186.Columns><module186.Column><module186.Form.Item label={t("DATA_TYPE")}><module186.Select name="type" onChange={this.handleTypeChange} options={[
                    {
                        label: "string",
                        value: "string"
                    },
                    {
                        label: "date",
                        value: "date"
                    },
                    {
                        label: "number",
                        value: "number"
                    }
                ]}/></module186.Form.Item></module186.Column><module186.Column/></module186.Columns>{type === "number" && <div><module186.Columns><module186.Column><module186.Form.Item label={t("UNIT")}><module186.Select defaultValue="null" name="unit" options={[
                    {
                        label: "Bytes",
                        value: "Bytes"
                    },
                    {
                        label: "null",
                        value: "null"
                    }
                ]}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item rules={[
                    {
                        required: true
                    }
                ]} label={t("DECIMALS")}><Module800 defaultValue={0} name="decimals"/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("THRESHOLD_FILL")} desc={t("THRESHOLD_FILL_DESC")}><module186.Select name="colorMode" defaultValue="disabled" options={[
                    {
                        label: "cell",
                        value: "cell"
                    },
                    {
                        label: "disabled",
                        value: "disabled"
                    },
                    {
                        label: "value",
                        value: "value"
                    }
                ]}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("HIGHT_RULES")}><div className={module2818.tableColorStyle}><module186.Form.Item className={module2818.thresholds}><Module2807 name="colors[0]" defaultValue="#fff"/></module186.Form.Item><span>{" < "}</span><module186.Form.Item className={module2818.thresholds} rules={[
                    {
                        required: true
                    }
                ]}><Module800 name="thresholds[0]" defaultValue={0}/></module186.Form.Item><span>{" < "}</span><module186.Form.Item className={module2818.thresholds}><Module2807 defaultValue="#fff" name="colors[1]"/></module186.Form.Item><span>{" < "}</span><module186.Form.Item className={module2818.thresholds} rules={[
                    {
                        required: true
                    }
                ]}><Module800 name="thresholds[1]" defaultValue={0}/></module186.Form.Item><span>{" < "}</span><module186.Form.Item className={module2818.thresholds}><Module2807 name="colors[2]" defaultValue="#fff"/></module186.Form.Item></div></module186.Form.Item></module186.Column></module186.Columns></div>}{type === "date" && <div><module186.Columns><module186.Column><module186.Form.Item label={t("TIME_FORMAT")} rules={[
                    {
                        required: true
                    }
                ]}><module186.Select name="dateFormat" defaultValue="YYYY/MM/DD HH:mm:ss" options={[
                    {
                        label: "YYYY/MM/DD HH:mm:ss",
                        value: "YYYY/MM/DD HH:mm:ss"
                    }
                ]}/></module186.Form.Item></module186.Column></module186.Columns></div>}</module186.Form></Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
