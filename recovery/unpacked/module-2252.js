import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
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
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module136 from "./module-136.js";
import module3 from "./module-3.js";
import module2253 from "./module-2253.js";
const E = ((e)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            tab: "configMaps",
            chooseAll: false,
            name: "",
            list: []
        };
        e.settingKeys = function() {
            const e_props = e.props;
            const { configMaps, secrets } = e_props;
            const e_state = e.state;
            const { tab, name } = e_state;
            let o = [];
            if (name !== "") {
                const i = tab === "configMaps" ? configMaps.find((e)=>e.name === name) : secrets.find((e)=>e.name === name);
                o = Object.keys(i.data || {}).map((e)=>({
                        label: e,
                        value: e,
                        checked: false
                    }));
            }
            e.setState({
                list: o
            });
        };
        e.handleRadioChange = function(tab) {
            e.setState({
                tab,
                name: "",
                list: []
            });
        };
        e.handleAllChoose = function() {
            const e_state = e.state;
            const { list, allChoose } = e_state;
            const n = module136(list);
            e.setState({
                allChoose: !allChoose,
                list: n.map((e)=>({
                        ...e,
                        checked: !allChoose
                    }))
            });
        };
        e.handleTypeChange = function(name) {
            e.setState({
                name,
                list: []
            }, function() {
                e.settingKeys();
            });
        };
        e.handleKeyChecked = function(t) {
            const list = e.state.list;
            const r = module136(list);
            r[t].checked = !r[t].checked;
            e.setState({
                list: r
            });
        };
        e.handleCancel = function() {
            const onCancel = e.props.onCancel;
            e.setState({
                name: "",
                list: []
            }, function() {
                onCancel();
            });
        };
        e.handleOk = function() {
            const onOK = e.props.onOK;
            const e_state = e.state;
            const { tab, name, list } = e_state;
            const o = tab === "configMaps" ? "configMapKeyRef" : "secretKeyRef";
            onOK(list.filter((e)=>e.checked).map((e)=>({
                    name: e.value,
                    valueFrom: module31({}, o, {
                        name,
                        key: e.value
                    })
                })));
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const className = this.props.className;
                const state = this.state;
                const { tab, allChoose, name, list } = state;
                return module553.default.createElement("div", {
                    className: module3(className, module2253.contentBox),
                    style: this.style
                }, module553.default.createElement("div", {
                    className: module2253.content
                }, module553.default.createElement("span", {
                    className: module2253.title
                }, t("BATCH_REFERENCE")), module553.default.createElement(module186.Alert, {
                    className: module2253.tip,
                    message: t("BATCH_REFERENCE_DESC")
                }), module553.default.createElement(module186.RadioGroup, {
                    defaultValue: tab,
                    buttonWidth: 120,
                    wrapClassName: module2253.tabs,
                    onChange: this.handleRadioChange
                }, this.tabs.map((e)=>module553.default.createElement(module186.RadioButton, {
                        key: e.value,
                        value: e.value
                    }, e.label))), module553.default.createElement("div", {
                    className: module2253.subTitle
                }, module553.default.createElement("span", null, tab === "configMaps" ? t("CONFIGMAP") : t("SECRET"))), module553.default.createElement(module186.Select, {
                    className: module2253.select,
                    prefixIcon: module553.default.createElement(module186.Icon, {
                        name: tab === "configMaps" ? "hammer" : "key"
                    }),
                    options: this.options,
                    onChange: this.handleTypeChange,
                    value: name
                }), module553.default.createElement("div", {
                    className: module2253.subTitle
                }, module553.default.createElement("span", null, t("KEY_PL")), list.length > 0 && module553.default.createElement("span", {
                    className: module2253.allChoose,
                    onClick: this.handleAllChoose
                }, allChoose ? t("DESELECT_ALL") : t("SELECT_ALL"))), module553.default.createElement("div", {
                    className: module2253.table
                }, module553.default.createElement("div", {
                    className: module3(module2253.innerBox, module31({}, module2253.scroll, list.length > 4))
                }, list.map((t, a)=>module553.default.createElement(module186.Checkbox, {
                        className: module3(module2253.tableItem, module31({}, module2253.checked, t.checked)),
                        checked: t.checked,
                        onChange: function() {
                            return _this.handleKeyChecked(a);
                        }
                    }, t.label))))), module553.default.createElement("div", {
                    className: module2253.options
                }, module553.default.createElement(module186.Button, {
                    onClick: this.handleCancel
                }, t("CANCEL")), module553.default.createElement(module186.Button, {
                    type: "control",
                    onClick: this.handleOk
                }, t("OK"))));
            }
        },
        {
            key: "tabs",
            get: function() {
                return [
                    {
                        label: t("CONFIGMAP_PL"),
                        value: "configMaps"
                    },
                    {
                        label: t("SECRET_PL"),
                        value: "secrets"
                    }
                ];
            }
        },
        {
            key: "options",
            get: function() {
                const props = this.props;
                const { configMaps, secrets } = props;
                if (this.state.tab === "configMaps") {
                    return configMaps.map((e)=>({
                            label: e.name,
                            value: e.name
                        }));
                }
                return secrets.map((e)=>({
                        label: e.name,
                        value: e.name
                    }));
            }
        },
        {
            key: "style",
            get: function() {
                const props = this.props;
                const e_showModal = props.showModal;
                const a = props.getParentPosition();
                if (e_showModal) {
                    return {
                        top: a.y,
                        left: `calc(${a.x}px - 12px)`
                    };
                }
                return {};
            }
        }
    ]);
    return r;
})(module553.Component);
export default E;
