import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import { PureComponent } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import Module1991 from "pages/devops/components/Cards/CodeQualityIssues/ClassIcon";
import module1462 from "unpacked/module-1462.js";
const v = ((PureComponent_1)=>{
    module55(n, PureComponent_1);
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
    function n(...i) {
        let e;
        module36(this, n);
        e = r.call(this, ...i);
        e.renderErrorCode = function(r) {
            const origin = e.props.origin;
            const errorClass = (r.severity || "").toLocaleLowerCase();
            return <a key={r.line} href={`${origin}/project/issues?id=${r.project}&open=${r.key}`} target="_blank" rel="noreferrer noopener"><div className={module3(module1462.errorCard, module1462[`card-${errorClass}`])} onClick={e.handleGoToDetail}><p className={module1462.message}>{r.message}</p><div className={module1462.status}><Module1991 errorClass={errorClass}/><span className={module1462.type}><module186.Icon name="debug" size={20}/>{t(r.type.toUpperCase())}</span><span>{t("LINE_VALUE", {
                value: r.line
            })}</span></div></div></a>;
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const e_issue = props.issue;
                if (props.hasTitle) {
                    return <><p key={e_issue.component} className={module1462.fileTitle}>{e_issue.component}</p>{this.renderErrorCode(e_issue)}</>;
                }
                return this.renderErrorCode(e_issue);
            }
        }
    ]);
    return n;
})(PureComponent);
v.propTypes = {
    issues: module1.array,
    index: module1.number
};
v.defaultProps = {
    issues: []
};
export default v;
