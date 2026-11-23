import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module136 from "unpacked/module-136.js";
import module186 from "unpacked/module-186.js";
import Module829 from "components/Forms/Base/Confirm";
import Module2258 from "components/Forms/Workload/ContainerSettings/ContainerForm/ProbeForm/ProbeConfig";
import module1537 from "unpacked/module-1537.js";
import Module2259 from "components/Forms/Workload/ContainerSettings/ContainerForm/ProbeForm/ProbeSection";
let l;
let u;
let o;
function C(e, t) {
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
const D = [
    {
        value: "http",
        desc: "HTTP_REQUEST"
    },
    {
        value: "command",
        desc: "COMMAND"
    },
    {
        value: "tcp",
        desc: "TCP_PORT"
    }
];
const k = observer((o = u = ((Component_1)=>{
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
        t.filterData = function(e) {
            const checkerType = t.state.checkerType;
            const r = {
                ...e
            };
            switch(checkerType){
                default:
                    delete r.tcpSocket;
                    delete r.exec;
                    break;
                case "command":
                    delete r.httpGet;
                    delete r.tcpSocket;
                    break;
                case "tcp":
                    delete r.httpGet;
                    delete r.exec;
            }
            return r;
        };
        t.handleTypeChange = function(checkerType) {
            t.setState({
                checkerType
            });
        };
        t.handleSubmit = function() {
            const onSave = t.props.onSave;
            const current = t.formRef.current;
            if (current) {
                current.validate(function() {
                    onSave(t.filterData(current.getData()));
                });
            }
        };
        t.state = {
            formData: module136(e.data),
            checkerType: t.checkerType
        };
        t.formRef = createRef();
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { className, probType, onCancel, componentType = "heal" } = this.props;
                const state = this.state;
                const { formData, checkerType } = state;
                return <div className={module3(module1537.wrapper, className)}><div className={module3(module1537.radioGroup, "probe-radio-group")}><module186.RadioGroup mode="button" buttonWidth={150} value={checkerType} onChange={this.handleTypeChange} size="small">{D.map((e)=><module186.RadioButton value={e.value}>{t(e.desc)}</module186.RadioButton>)}</module186.RadioGroup></div><module186.Form ref={this.formRef} type="inner" data={formData}><div className="margin-b12"><Module2259 checkerType={checkerType}/></div>{componentType === "life" ? null : <Module2258 probType={probType}/>}</module186.Form><Module829 className={module1537.confirm} onOk={this.handleSubmit} onCancel={onCancel}/></div>;
            }
        },
        {
            key: "checkerType",
            get: function() {
                const data = this.props.data;
                if ("exec" in data) {
                    return "command";
                }
                if ("tcpSocket" in data) {
                    return "tcp";
                }
                return "http";
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    className: module1.string,
    componentType: module1.string,
    data: module1.object,
    onSave: module1.func,
    onCancel: module1.func
}, u.defaultProps = {
    data: {},
    onSave: function() {},
    onCancel: function() {},
    componentType: "heal"
}, l = o)) || l;
export default k;
