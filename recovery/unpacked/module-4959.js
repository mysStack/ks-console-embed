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
import module4960 from "./module-4960.js";
const _ = ((Component_1)=>{
    module55(a, Component_1);
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
                const { detail, workspace, actions } = props;
                return <Module790 className={module4960.wrapper} title={t("PROJECT_INFO")}><div className={module4960.header}><Module791 icon="project" title={getDomTitle(getDisplayNameNew(detail))} description={t("PROJECT_NAME")} ellipsis/><div className={module3(module4960.item, "ellipsis")}><div><Link className="ellipsis block" to={`/workspaces/${workspace}`}>{showNameAndAlias(workspace, "workspace", {}, false, undefined, true)}</Link></div><p>{t("WORKSPACE")}</p></div><div className={module4960.item}><div>{module26(detail, "creator") || "-"}</div><p>{t("CREATOR")}</p></div><div className={module4960.item}><div>{getLocalTime(detail.createTime).format("YYYY-MM-DD HH:mm:ss")}</div><p>{t("CREATION_TIME")}</p></div>{!module63(actions) && <Module1215 content={this.renderMoreMenu()}/>}</div></Module790>;
            }
        }
    ]);
    return a;
})(Component);
export default _;
