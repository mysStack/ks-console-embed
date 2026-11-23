import "unpacked/module-15.js";
import "unpacked/module-16.js";
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
import Module791 from "components/Base/Text";
import module1821 from "unpacked/module-1821.js";
const m = ((Component_1)=>{
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
                const detail = this.props.detail;
                if (detail) {
                    return <div className={module1821.item}><Module791 icon="monitor" title={detail.name} description={t("MONITORING_EXPORTER")}/><Module791 title={detail.port} description={t("PORT")}/><Module791 title={detail.path} description={t("PATH")}/><Module791 title={detail.interval} description={t("SCRAPE_INTERVAL_MIN")}/><Module791 title={detail.scrapeTimeout} description={t("TIMEOUT_PERIOD_S")}/></div>;
                }
                return null;
            }
        }
    ]);
    return r;
})(Component);
export default m;
m.propTypes = {
    detail: module1.object
};
m.defaultProps = {
    detail: {}
};
