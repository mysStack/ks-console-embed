import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module4699 from "./module-4699.js";
const v = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.handleTakeOver = function(t) {
            e.props.onChange(t.currentTarget.dataset.version);
        };
        e.handleOffline = function(t) {
            const e_props = e.props;
            const { onChange, options } = e_props;
            const version = t.currentTarget.dataset.version;
            const c = options.find((e)=>e.name !== version);
            if (c) {
                onChange(c.name);
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { value, options } = props;
                return <ul className={module4699.wrapper}>{options.map((a)=><li key={a.name} className={module3(module31({}, module4699.selected, value === a.name))}><module186.Icon name="appcenter" size={40}/><div className={module4699.text}><p>{t("GRAYSCALE_VERSION", {
                        version: a.name
                    })}</p><p>{a.replicas === 1 ? t("GRAYSCALE_REPLICA_SI", {
                        count: a.replicas
                    }) : t("GRAYSCALE_REPLICA_PL", {
                        count: a.replicas
                    })}</p></div>{value !== a.name ? <module186.Button className={module4699.button} type="control" data-version={a.name} onClick={_this.handleTakeOver}>{t("TAKE_OVER")}</module186.Button> : <module186.Button className={module4699.button} data-version={a.name} onClick={_this.handleOffline}>{t("TAKE_OFFLINE")}</module186.Button>}</li>)}</ul>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    value: module1.string,
    options: module1.array,
    onChange: module1.func
};
v.defaultProps = {
    value: "",
    options: [],
    onChange: function() {}
};
