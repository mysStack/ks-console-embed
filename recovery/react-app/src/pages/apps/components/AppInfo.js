import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-137.js";
import "unpacked/module-813.js";
import "unpacked/module-45.js";
import "unpacked/module-118.js";
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
import module243 from "unpacked/module-243.js";
import module26 from "unpacked/module-26.js";
import { getBrowserLang, htmlLinkControl } from "utils/index";
import Module1002 from "components/Base/Markdown";
import Module3188 from "pages/apps/components/AppInfo/ImageSlider";
import module3190 from "unpacked/module-3190.js";
const E = ((PureComponent_1)=>{
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
            key: "filterImages",
            value: function(e) {
                if (typeof e === "string") {
                    return e.split(",").map((e)=>e.trim()).filter(Boolean);
                }
                if (Array.isArray(e)) {
                    return e;
                }
                return [];
            }
        },
        {
            key: "renderVersionTable",
            value: function() {
                const versions = this.props.versions;
                const a = module26(globals.user, "lang") || getBrowserLang();
                return <table className={module3190.versions}><thead><tr><th>{t("VERSION_NUMBER")}</th><th>{t("UPDATE_LOG")}</th></tr></thead><tbody>{versions.map((e)=>{
                    const { name, description } = e;
                    const n = description === undefined ? "-" : description;
                    const { status_time, version_id } = e;
                    return <tr key={version_id}><td><p className={module3190.name}>{name}</p><p className={module3190.date}>{module243(status_time).format("YYYY-MM-DD")}</p></td><td><pre className={module3190.desc}>{module26(e, `description_${a}`, n)}</pre></td></tr>;
                })}</tbody></table>;
            }
        },
        {
            key: "renderAppDeployAgreement",
            value: function() {
                const props = this.props;
                const { isCheck, onChange } = props;
                const n = t.html("APP_DEPLOY_AGREEMENT_2");
                return <div className={module3190.agree}><p>{t("APP_DEPLOY_AGREEMENT_1")}</p><p>{htmlLinkControl(n)}</p><div className="margin-t12"><Checkbox checked={isCheck} onChange={onChange}>{t("APP_DEPLOY_AGREEMENT_CHEKC")}</Checkbox></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, app } = props;
                const { abstraction, screenshots } = app;
                return <div className={module3(module3190.appInfo, className)}><div><h3 className={module3190.title}>{t("APP_INTRODUCTION")}</h3><Module1002 source={abstraction || t("NONE")}/></div><div><h3 className={module3190.title}>{t("APP_SCREENSHOTS")}</h3><Module3188 images={this.filterImages(screenshots)}/></div><div><h3 className={module3190.title}>{t("APP_VERSIONS_TITLE")}</h3>{this.renderVersionTable()}</div></div>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default E;
E.propTypes = {
    className: module1.string,
    app: module1.object.isRequired,
    versions: module1.array
};
E.defaultProps = {
    app: {},
    versions: []
};
