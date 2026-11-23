import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-24.js";
import "unpacked/module-193.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import Module836 from "components/Base/Image";
import Module1002 from "components/Base/Markdown";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import { Component } from "unpacked/module-553.js";
import { hrefControl, showNameAndAlias } from "utils/index";
import module3155 from "unpacked/module-3155.js";
let l;
let o;
let u;
const b = observer((u = o = ((Component_1)=>{
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
            key: "renderBase",
            value: function() {
                const props = this.props;
                const { detail, versionName } = props;
                const n = detail.home ? /^https?:\/\//.test(detail.home) ? detail.home : `http://${detail.home}` : detail.home;
                return <div className={module3155.base}><div className={module3155.title}>{t("BASIC_INFORMATION")}</div><div className={module3155.info}><div className={module3155.icon}><Module836 src={detail.icon} iconLetter={detail.name} iconSize={100}/></div><div className={module3155.words}><dl><dd>{detail.name}</dd><dt>{t("NAME")}</dt></dl><dl><dd>{globals.config.showOutSiteLink && <a href={hrefControl(n)} target="_blank" rel="noopener noreferrer">{detail.home}</a>}{!detail.home && <span>-</span>}</dd><dt>{t("SERVICE_PROVIDER_WEBSITE")}</dt></dl></div><div><dl><dd>{versionName}</dd><dt>{t("VERSION")}</dt></dl><dl><dd>{showNameAndAlias(detail.isv, "workspace")}</dd><dt>{t("WORKSPACE")}</dt></dl></div></div><div className={module3155.description}><dl><pre>{detail.description || "-"}</pre><dt>{t("INTRODUCTION")}</dt></dl></div><div className={module3155.title}>{t("APP_DESCRIPTION")}</div><div><Module1002 source={detail.abstraction || t("NONE")}/></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3155.main}>{this.renderBase()}</div>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    detail: module1.object,
    versionName: module1.string
}, o.defaultProps = {
    detail: {},
    versionName: ""
}, l = u)) || l;
export default b;
