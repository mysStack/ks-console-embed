import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-137.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-57.js";
import module63 from "unpacked/module-63.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module1044 from "components/Base/Label";
import { formatDuration } from "utils/tracing";
import module4781 from "unpacked/module-4781.js";
const v = (type, t)=>{
    switch(type){
        case "bool":
            return String(t);
        case "string":
        case "number":
            return t;
        default:
            return JSON.stringify(t);
    }
};
const GComponent = function({ data }) {
    return <ul className={module4781.properties}>{data.map((e)=><li key={e.key}><span>{e.key}: </span><span>{v(e.type, e.value)}</span></li>)}</ul>;
};
const YComponent = function({ data, startTime }) {
    return <div>{data.map((e)=>{
        const t = formatDuration(e.timestamp - startTime);
        return <div key={e.timestamp} classNames={module4781.log}><span>{t}</span>{e.fields.map((e)=><span className="margin-l12" key={e.key}><span>{e.key}= </span><span><strong> {v(e.type, e.value)}</strong></span></span>)}</div>;
    })}</div>;
};
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
        t.handleTypeChange = function(type) {
            t.setState({
                type
            });
        };
        t.renderContentBody = function() {
            const span = t.props.span;
            switch(t.state.type){
                case "tags":
                    return <GComponent data={span.tags}/>;
                case "process":
                    return <GComponent data={span.process.tags}/>;
                case "logs":
                    return <YComponent data={span.logs} startTime={span.startTime - span.relativeStartTime}/>;
            }
            return null;
        };
        t.state = {
            type: "tags"
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.span !== e.span) {
                    this.setState({
                        type: "tags"
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { span, onClose } = props;
                const type = this.state.type;
                const l = formatDuration(span.relativeStartTime);
                const u = formatDuration(span.duration);
                const o = span.process.serviceName.split(".")[0];
                return <div className={module4781.wrapper}><div className={module4781.header}><module186.Icon name="target" size={40}/><div className={module4781.text}><div className={module4781.name}>{span.process.serviceName}<Module1044 name={t("SERVICE")} value={o}/><Module1044 name={t("START_TIME")} value={l}/><Module1044 name={t("DURATION")} value={u}/></div><p>{span.operationName}</p></div><div className={module4781.close} onClick={onClose}><module186.Icon name="minimize" size={20}/></div></div><div className={module4781.content}><div className={module4781.contentHeader}><module186.RadioGroup mode="button" buttonWidth={155} value={type} onChange={this.handleTypeChange} size="small"><module186.RadioButton value="tags">{t("TAG")}</module186.RadioButton><module186.RadioButton value="process">{t("PROCESS")}</module186.RadioButton>{!module63(span.logs) && <module186.RadioButton value="logs">{t("LOG")}</module186.RadioButton>}</module186.RadioGroup></div><div className={module4781.contentBody}>{this.renderContentBody()}</div></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
