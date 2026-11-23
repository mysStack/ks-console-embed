import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-319.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { PureComponent } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module1990 from "unpacked/module-1990.js";
const f = [
    "A",
    "B",
    "C",
    "D"
];
const p = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
    var t = ((e)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(r);
    function r() {
        module36(this, r);
        return t.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { hasIcon, title, value, resultClass, unit, url } = props;
                const l = f[parseInt(resultClass, 10) - 1];
                return <div className={module1990.resultCard}><p className={module1990.title}>{hasIcon ? <module186.Icon name="debug" size={20}/> : null}{title}{resultClass ? <span className={module1990[l]}>{l}</span> : null}</p><p className={module1990.value}>{url ? <a href={url} target="_blank" rel="noreferrer noopener"><span>{value}</span></a> : <span>{value}</span>}<span className={module1990.unit}>{unit}</span></p></div>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default p;
p.defaultProps = {
    hasIcon: false,
    title: "-",
    value: 0,
    url: ""
};
