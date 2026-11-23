import "./module-15.js";
import "./module-18.js";
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
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import Module802 from "./module-802.js";
import { parseUrl } from "./module-52.js";
import Module5110 from "./module-5110.js";
import Module1991 from "./module-1991.js";
import module1462 from "./module-1462.js";
const y = ((Component_1)=>{
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
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.showMore = function() {
            a.setState({
                showMore: true
            });
        };
        a.renderTitle = function() {
            const detail = a.props.detail;
            const { critical, major, minor, info, blocker } = detail;
            return <div className={module1462.header}><span className={module1462.title}>{t("ISSUE_PL")}</span><div className={module1462.details}><span><Module1991 errorClass="blocker"/>{blocker || 0}</span><span><Module1991 errorClass="critical"/>{critical || 0}</span><span><Module1991 errorClass="major"/>{major || 0}</span><span><Module1991 errorClass="minor"/>{minor || 0}</span><span><Module1991 errorClass="info"/>{info || 0}</span></div></div>;
        };
        a.renderIssue = function(issue, t) {
            const issues = a.props.issues;
            if (a.state.showMore && t > 10) {
                return null;
            }
            const hasTitle = t === 0 || issue.component !== issues[t - 1].component;
            return <Module5110 key={t} hasTitle={hasTitle} issue={issue} origin={a.sonarqubeOrigin}/>;
        };
        a.renderMoreBtn = function() {
            if (a.state.showMore) {
                return null;
            }
            return <p className={module1462.titleShowMore}>{t("DISPLAY_ONLY_LAST_TEN")},<span onClick={a.showMore}>{t("DISPLAY_ALL")}</span></p>;
        };
        const showMore = e.issues.length <= 10;
        a.state = {
            showMore
        };
        return a;
    }
    module37(n, [
        {
            key: "sonarqubeOrigin",
            get: function() {
                const sonarqubeDashboardUrl = this.props.detail.sonarqubeDashboardUrl;
                return module26(globals, "config.devops.sonarqubeURL") || parseUrl(sonarqubeDashboardUrl).origin;
            }
        }
    ]);
    module37(n, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { loading, issues } = props;
                if (loading) {
                    return null;
                }
                if (issues.length) {
                    return <Module802 title={this.renderTitle()} operations={this.renderMoreBtn()}><div className={module1462.content}>{issues.map((t, r)=>_this.renderIssue(t, r))}{this.state.showMore ? null : <div className={module1462.displayAll} onClick={this.showMore}>{t("DISPLAY_ALL")}</div>}</div></Module802>;
                }
                return null;
            }
        }
    ]);
    return n;
})(Component);
y.propTypes = {
    issues: module1.array,
    loading: module1.bool
};
y.defaultProps = {
    issues: []
};
export default y;
