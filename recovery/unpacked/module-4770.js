import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import { Link } from "./module-433.js";
import { getLocalTime } from "./module-52.js";
import module1916 from "./module-1916.js";
const g = ((Component_1)=>{
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
        e.handleLinkClick = function() {
            localStorage.setItem("pod-detail-referrer", location.pathname);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const data = this.props.data;
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                const e_podStatus = data.podStatus;
                const o = e_podStatus.type === "running" || e_podStatus.type === "completed" ? "running" : "updating";
                return <div className={module1916.podItem}><div className={module1916.icon}><module186.Icon name="pod" size={32}/><span className={module3(module1916.status, module1916[o])}/></div><div className={module1916.text}><Link to={`/${workspace}/clusters/${cluster}/projects/${namespace}/pods/${data.name}`}><strong onClick={this.handleLinkClick}>{data.name}</strong></Link><p>{t("UPDATED_AT_VALUE_SCAP", {
                    value: getLocalTime(module26(data, "status.startTime") || module26(data, "createTime")).format("YYYY-MM-DD HH:mm:ss")
                })}</p></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
