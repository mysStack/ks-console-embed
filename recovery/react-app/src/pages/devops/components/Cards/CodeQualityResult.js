import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-190.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-436.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import Module802 from "components/Base/Card";
import module186 from "unpacked/module-186.js";
import { parseUrl } from "utils/index";
import Module5108 from "pages/devops/components/Cards/CodeQualityResult/StatusCard";
import module1990 from "unpacked/module-1990.js";
const E = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((e)=>{
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
    })(n);
    function n(...l_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...l_1);
        e.goToSonarqube = function() {
            const sonarqubeDashboardUrl = e.props.detail.sonarqubeDashboardUrl;
            const r = module26(globals, "config.devops.sonarqubeURL");
            if (r) {
                const n = parseUrl(sonarqubeDashboardUrl);
                const a = r + module26(n, "pathname", "") + module26(n, "search", "");
                window.open(a);
            } else {
                window.open(sonarqubeDashboardUrl);
            }
        };
        e.renderTotalResult = function() {
            let r;
            const n = e.props.detail.totalStatus !== "ERROR";
            return <div className={module3(module1990.totalResult, (r = {}, module31(r, module1990.success, n), module31(r, module1990.error, !n), r))}><module186.Icon name={n ? "check" : "close"} className={module1990.icon} size={24} color={{
                primary: "#ffffff",
                secondary: "#ffffff"
            }}/><p>{t("CODE_CHECK")}</p><p>{n ? t("PASSED") : t("FAILED")}</p></div>;
        };
        e.renderOtherResults = function() {
            const detail = e.props.detail;
            const { bugRating, bugs, securityRating, vulnerabilities, codeSmells, coverage, key } = detail;
            const value = detail.totalCode > 1000 ? parseFloat(detail.totalCode / 1000).toFixed(2) : detail.totalCode;
            const unit = detail.totalCode > 1000 ? "K" : "";
            return <div className={module1990.otherCards}><Module5108 title={t("CODE_LINE_COUNT")} value={value} unit={unit} url={`${e.sonarqubeOrigin}/component_measures?id=${key}&metric=ncloc`}/><Module5108 hasIcon title={t("BUG_PL")} value={bugs} unit="" resultClass={bugRating} url={`${e.sonarqubeOrigin}/project/issues?id=${key}&resolved=false&types=BUG`}/><Module5108 hasIcon title={t("VULNERABILITY_PL")} value={vulnerabilities} unit="" resultClass={securityRating} url={`${e.sonarqubeOrigin}/project/issues?id=${key}&resolved=false&types=VULNERABILITY`}/><Module5108 hasIcon title={t("CODE_SMELL_PL")} value={codeSmells} unit="" url={`${e.sonarqubeOrigin}/project/issues?id=${key}&resolved=false&types=CODE_SMELL`}/><Module5108 hasIcon title={t("COVERAGE")} value={coverage} unit="%" url={`${e.sonarqubeOrigin}/component_measures?id=${key}&metric=coverage`}/></div>;
        };
        e.renderLogo = function() {
            return <span onClick={e.goToSonarqube} className={module1990.logo}/>;
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                if (this.props.loading) {
                    return null;
                }
                return <Module802 title={t("TEST_RESULTS")} operations={this.renderLogo()}><div className={module1990.content}>{this.renderTotalResult()}{this.renderOtherResults()}</div></Module802>;
            }
        },
        {
            key: "sonarqubeOrigin",
            get: function() {
                const sonarqubeDashboardUrl = this.props.detail.sonarqubeDashboardUrl;
                return module26(globals, "config.devops.sonarqubeURL") || parseUrl(sonarqubeDashboardUrl).origin;
            }
        }
    ]);
    return n;
})(Component);
E.propTypes = {
    detail: module1.object,
    loading: module1.bool
};
export default E;
