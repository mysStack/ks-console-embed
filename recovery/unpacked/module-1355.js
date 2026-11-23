import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module159 from "./module-159.js";
import { PureComponent } from "./module-553.js";
import module186 from "./module-186.js";
import module2875 from "./module-2875.js";
const v = {
    className: module2875.slider,
    railStyle: {
        height: 30,
        backgroundColor: "#7eb8dc",
        borderRadius: 2
    },
    handleStyle: {
        width: 14,
        height: 30,
        marginTop: 0,
        backgroundColor: "#fff",
        borderRadius: 0,
        border: "none"
    },
    trackStyle: {
        height: 30,
        borderRadius: 2,
        backgroundColor: "#329dce"
    }
};
const g = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
                const props = this.props;
                const { leftContent, rightContent, defaultValue, ...rest } = props;
                const i = module159(rest.value) ? defaultValue : rest.value;
                return <div className={module2875.wrapper}><module186.Slider min={0} max={100} defaultValue={i} {...rest} {...v}/><span className={module2875.floatContent} style={{
                    left: `${Math.floor(i / 2)}%`,
                    maxWidth: `${i}%`
                }}>{t("VERSION_TRAFFIC_PERCENT", {
                    version: leftContent,
                    percent: i
                })}</span><span className={module2875.floatContent} style={{
                    left: `${Math.floor(i / 2) + 50}%`,
                    maxWidth: `${100 - i}%`
                }}>{t("VERSION_TRAFFIC_PERCENT", {
                    version: rightContent,
                    percent: 100 - i
                })}</span></div>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default g;
g.defaultProps = {
    defaultValue: 50
};
