import "./module-15.js";
import "./module-18.js";
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
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import Module1215 from "./module-1215.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import { getDisplayNameNew, getDomTitle, getLocalTime, showNameAndAlias } from "./module-52.js";
import module4629 from "./module-4629.js";
const S = ((Component_1)=>{
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
            key: "renderMoreMenu",
            value: function() {
                const props = this.props;
                const { actions, onMenuClick } = props;
                return <module186.Menu onClick={onMenuClick}>{actions.map((e)=><module186.Menu.MenuItem key={e.key}><module186.Icon name={e.icon} type="light"/> {e.text}</module186.Menu.MenuItem>)}</module186.Menu>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, workspace, serviceCount, memberCount, roleCount, actions, showDetail } = props;
                return <Module790 className={module3(module4629.wrapper, module31({}, module4629.single, !showDetail))} title={t("PROJECT_INFO")}><div className={module4629.header}><Module791 icon="project" title={getDomTitle(getDisplayNameNew(detail))} description={t("NAME")} ellipsis/><div className={module3(module4629.item, "ellipsis")}><div><Link to={`/workspaces/${workspace}`} className="ellipsis block">{showNameAndAlias(workspace, "workspace")}</Link></div><p>{t("WORKSPACE")}</p></div><div className={module4629.item}><div>{module26(detail, "creator") || "-"}</div><p>{t("CREATOR")}</p></div><div className={module4629.item}><div>{getLocalTime(detail.createTime).format("YYYY-MM-DD HH:mm:ss")}</div><p>{t("CREATION_TIME")}</p></div>{!module63(actions) && <Module1215 content={this.renderMoreMenu()}/>}</div>{showDetail && <div className={module4629.content}><div className={module4629.contentItem}><module186.Icon name="appcenter" size={40}/><div className={module4629.item}><div>{serviceCount}</div><p>{serviceCount === "1" ? t("SERVICE") : t("SERVICE_PL")}</p></div></div><div className={module4629.contentItem}><module186.Icon name="role" size={40}/><div className={module4629.item}><div>{roleCount}</div><p>{roleCount === "1" ? t("PROJECT_ROLE_SCAP") : t("PROJECT_ROLE_SCAP_PL")}</p></div></div><div className={module4629.contentItem}><module186.Icon name="group" size={40}/><div className={module4629.item}><div>{memberCount}</div><p>{memberCount === 1 ? t("PROJECT_MEMBER_SCAP") : t("PROJECT_MEMBER_SCAP_PL")}</p></div></div></div>}</Module790>;
            }
        }
    ]);
    return r;
})(Component);
export default S;
