import "./module-15.js";
import "./module-5.js";
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
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import module1443 from "./module-1443.js";
import module4639 from "./module-4639.js";
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
        e.store = new module1443;
        e.state = {
            nacos: {}
        };
        e.fetchNacosConfig = function() {
            const cluster = e.props.cluster;
            e.store.getNacosConfig({
                cluster
            }).then((nacos)=>{
                e.setState({
                    nacos
                });
            });
        };
        e.handleDownload = function() {
            window.open(`${window.location.protocol}//${window.location.host}/${e.store.apiVersion}/files/bootstrap.yml`);
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchNacosConfig();
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.props.detail;
                const a = detail === undefined ? {} : detail;
                const nacos = this.state.nacos;
                const { Host, Port } = nacos;
                return <Module790 className="margin-b12"><div className={module4639.header}><div className={module4639.title}>{t("SERVICE_REGISTRY")}</div><a onClick={this.handleDownload}>{t("DOWNLOAD_SAMPLE_CONFIGURATION")}</a></div><div className={module4639.overview}><div className={module4639.item}><Module791 className="" icon="eip-group" title={Host && Port && `${Host}:${Port}`} description={t("SERVICE_REGISTRY_ADDRESS")}/></div><div className={module4639.item}><div className={module4639.content}><Module791 icon="java" title={a.allServiceCount} description={a.allServiceCount === 1 ? t("MICROSERVICE") : t("MICROSERVICE_PL")}/><Module791 title={a.allInstanceCount} description={a.allInstanceCount === 1 ? t("INSTANCE") : t("INSTANCE_PL")}/><Module791 title={a.healthyInstanceCount} description={a.healthyInstanceCount === 1 ? t("HEALTHY_INSTANCE") : t("HEALTHY_INSTANCE_PL")}/></div></div></div></Module790>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
