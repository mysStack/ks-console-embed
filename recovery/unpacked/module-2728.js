import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
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
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import { REPO_KEY_MAP } from "./module-72.js";
import module1626 from "./module-1626.js";
const y = ((Component_1)=>{
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
        e.onChange = function(t) {
            e.props.onChange(t);
        };
        e.handleDeleteSource = function() {
            e.props.handleDeleteSource();
        };
        e.getIconName = function(e) {
            let t = "";
            switch(e){
                case "single_svn":
                    t = "svn";
                    break;
                case "bitbucket_server":
                    t = "bitbucket";
                    break;
                default:
                    t = e;
            }
            return t;
        };
        return e;
    }
    module37(r, [
        {
            key: "renderEmpty",
            value: function() {
                const props = this.props;
                const { onClick, type } = props;
                return <div className={module1626.empty} onClick={onClick}><p>{type === "cd" ? t("CD_SELECT_CODE_REPO_DESC") : t("SELECT_CODE_REPO_DESC")}</p></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const value = this.props.value;
                if (module63(value)) {
                    return this.renderEmpty();
                }
                const a = module26(value, `${REPO_KEY_MAP[value.source_type]}`, {});
                const name = this.getIconName(value.source_type);
                return <div className={module1626.wrapper}><div className={module3(module1626.branch, module1626.branch__show)}><div className={module1626.icon}><module186.Icon name={name} size={48}/></div><div className={module1626.info}><div className={module1626.name}>{a.repo || a.url || a.remote}</div><div className={module1626.desc}>{a.description || ""}</div></div><div className={module1626.action}><module186.Button onClick={this.props.onClick}>{t("RESELECT")}</module186.Button>{this.props.handleDeleteSource ? <span onClick={this.handleDeleteSource} className={module1626.deleteRepoBtn}><module186.Icon name="trash"/></span> : null}</div></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    name: module1.string,
    value: module1.object,
    onClick: module1.func
};
y.defaultProps = {
    name: "",
    value: {},
    onClick: function() {}
};
