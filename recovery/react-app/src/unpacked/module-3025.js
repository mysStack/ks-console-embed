import "./module-15.js";
import "./module-5.js";
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
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import Module789 from "components/Base/Avatar";
import module1694 from "./module-1694.js";
const h = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleMoreMenuClick = function(t, a) {
            const e_props = e.props;
            e_props.onSelect(e_props.user.username, a);
        };
        return e;
    }
    module37(r, [
        {
            key: "getDesc",
            value: function(e) {
                const a = module26(e, "description");
                return t(a);
            }
        },
        {
            key: "renderMoreMenu",
            value: function() {
                const _this = this;
                const roles = this.props.roles;
                return <div className={module1694.menu}><p>{t("ASSIGN_ROLE")}</p><module186.Menu onClick={this.handleMoreMenuClick}>{roles.map((t)=><module186.Menu.MenuItem key={t.name}><Module789 className={module1694.avatar} icon="role" iconSize={40} title={t.name} desc={_this.getDesc(t)} noLink/></module186.Menu.MenuItem>)}</module186.Menu></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { user, onSelect, selected } = props;
                return <div className={module1694.item} data-user={user.username}><p><strong>{user.username}</strong></p><p>{user.email}</p>{!selected && <module186.Dropdown content={this.renderMoreMenu()} trigger="click" placement="bottomRight"><module186.Button type="control" icon="add" iconType="light" onClick={onSelect}/></module186.Dropdown>}{selected && <module186.Button type="flat" icon="check" disabled/>}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.propTypes = {
    user: module1.object,
    roles: module1.array,
    selected: module1.bool,
    onSelect: module1.func
};
