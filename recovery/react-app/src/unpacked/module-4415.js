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
import { PureComponent } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import Module796 from "components/Base/Status";
import { getLocalTime } from "utils/index";
import module1870 from "unpacked/module-1870.js";
const v = ((PureComponent_1)=>{
    module55(a, PureComponent_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a() {
        module36(this, a);
        return r.apply(this, arguments);
    }
    module37(a, [
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { detail, showVersion } = props;
                const detail_version = detail.version;
                return <div className={module1870.content}><dl><dt>{detail.name}</dt><dd>{t("NAME")}</dd></dl><dl><dt><Module796 className={module1870.status} type={detail.status} name={t(detail.status)}/></dt><dd>{t("STATUS")}</dd></dl>{showVersion && <dl><dt>{detail_version.name}</dt><dd>{t("VERSION")}</dd></dl>}<dl><dt>{detail.zone}</dt><dd>{t("PROJECT")}</dd></dl><dl><dt>{detail.cluster || detail.runtime_id}</dt><dd>{t("CLUSTER")}</dd></dl><dl><dt>{getLocalTime(detail.upgrade_time || detail.create_time).format("YYYY-MM-DD HH:mm:ss")}</dt><dd>{t("CREATION_TIME")}</dd></dl></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                return <div className={module3(module1870.item, className)}><div className={module1870.itemMain}>{this.renderContent()}</div></div>;
            }
        }
    ]);
    return a;
})(PureComponent);
export default v;
v.propTypes = {
    className: module1.string,
    detail: module1.object,
    showVersion: module1.bool
};
v.defaultProps = {
    detail: {},
    showVersion: false
};
