import "./module-15.js";
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
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import { Link } from "./module-433.js";
import module186 from "./module-186.js";
import Module838 from "./module-838.js";
import { getLocalTime } from "./module-52.js";
import module1910 from "./module-1910.js";
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const e_detail = props.detail;
                const { enabled, ip, port, podName, podStartTime, weight, instanceId } = e_detail;
                const { workspace, cluster, namespace } = props;
                return <div className={module1910.item}><div className={module1910.icon}><module186.Icon name="pod" size={40}/><Module838 className={module1910.indicator} type={enabled ? "running" : "stopped"} flicker/></div><div className={module3(module1910.text, module1910.name)}><div><Link className={module1910.title} to={`/${workspace}/clusters/${cluster}/projects/${namespace}/microservice-instances/${podName}/${encodeURIComponent(instanceId)}`}>{podName}</Link></div><p>{t("CREATED_AGO", {
                    diff: getLocalTime(podStartTime).fromNow()
                })}</p></div><div className={module1910.text}><div>{weight}</div><p>{t("WEIGHT")}</p></div><div className={module1910.text}><div>{ip}</div><p>{t("IP_ADDRESS")}</p></div><div className={module1910.text}><div>{port}</div><p>{t("PORT")}</p></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
