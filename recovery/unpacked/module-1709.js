import "./module-15.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { PureComponent } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module243 from "./module-243.js";
import { safeParseJSON } from "./module-52.js";
import { getAppCategoryNames } from "./module-917.js";
import module3099 from "./module-3099.js";
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
                const { className, app } = props;
                const n = safeParseJSON(module26(app, "latest_app_version.maintainers", []), []).map((e)=>e.name);
                const l = safeParseJSON(module26(app, "latest_app_version.sources", []), []);
                return <div className={module3(module3099.appBase, className)}><h3>{t("BASIC_INFORMATION")}</h3><dl><dt>{t("CATEGORY_COLON")}</dt><dd>{getAppCategoryNames(module26(app, "category_set", []))}</dd><dt>{t("HOMEPAGE_COLON")}</dt><dd>{app.home || "-"}</dd><dt>{t("RELEASE_DATE_COLON")}</dt><dd>{module243(app.status_time).format("YYYY-MM-DD")}</dd><dt>{t("APP_ID_COLON")}</dt><dd>{app.app_id || "-"}</dd>{!module63(n) && <><dt>{t("MAINTAINER_COLON")}</dt><dd>{n.join("、")}</dd></>}{!module63(l) && <><dt>{t("SOURCE_CODE_ADDRESS_COLON")}</dt><dd>{l.map((e)=><p>{e}</p>)}</dd></>}</dl></div>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default g;
g.propTypes = {
    className: module1.string,
    app: module1.object.isRequired
};
g.defaultProps = {
    app: {}
};
