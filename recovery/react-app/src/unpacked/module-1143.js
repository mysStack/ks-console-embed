import "unpacked/module-15.js";
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
import module1 from "unpacked/module-1.js";
import { strategyMap } from "unpacked/module-468.js";
import module186 from "unpacked/module-186.js";
import Module4683 from "unpacked/module-4683.js";
import module4687 from "unpacked/module-4687.js";
import { strategyOptionType } from "unpacked/module-1907.js";
const g = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                if (!this.props.options) {
                    console.error("options is required");
                    return null;
                }
                const props = this.props;
                const { options, value, isGroupDisabled, onChange, paddingTop, hiddenRadio } = props;
                return <div className={module4687.publishStrategy} style={{
                    paddingTop: `${paddingTop}px`
                }}><span className={module4687.title}>{t("PUBLISH_STRATEGY_TITLE")}</span><module186.RadioGroup defaultValue={strategyMap.wait} value={value} disabled={isGroupDisabled} onChange={onChange} style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                }}>{options.map((option)=><Module4683 key={option.title} option={option} hiddenRadio={hiddenRadio}/>)}</module186.RadioGroup></div>;
            }
        }
    ]);
    return r;
})(Component);
g.defaultProps = {
    paddingTop: 12,
    options: [],
    value: "",
    isGroupDisabled: false,
    hiddenRadio: false,
    onChange: function() {}
};
g.propTypes = {
    paddingTop: module1.number,
    options: module1.arrayOf(strategyOptionType),
    value: module1.string,
    isGroupDisabled: module1.bool,
    hiddenRadio: module1.bool,
    onChange: module1.func
};
export default g;
