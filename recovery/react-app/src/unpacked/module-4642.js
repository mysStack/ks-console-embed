import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
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
import { Component } from "unpacked/module-553.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import Module790 from "components/Base/Panel";
import Module796 from "components/Base/Status";
import Module791 from "components/Base/Text";
import { getLocalTime } from "utils/index";
import module4643 from "unpacked/module-4643.js";
const E = ((Component_1)=>{
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
                const { actions, onMenuClick, detail } = props;
                return <module186.Menu onClick={function(e, t) {
                    return onMenuClick(e, t, detail);
                }}>{actions.map((e)=><module186.Menu.MenuItem key={e.key}><module186.Icon name={e.icon}/> {e.text}</module186.Menu.MenuItem>)}</module186.Menu>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, actions } = props;
                return <Module790 title={t("MICROSERVICE_GATEWAY")}><div className={module4643.header}><module186.Icon name="springcloudgateway" size={40}/><div className={module4643.item}><div>{t("MICROSERVICE_GATEWAY")}</div><p>{t("GATEWAY_TYPE")}</p></div><div className={module4643.item}><div><Module796 name={t(`MICROSERVICE_GATEWAY_STATUS_${detail.status.toUpperCase()}`)} type={detail.status} flicker/></div><p>{t("STATUS")}</p></div><div className={module4643.item}><div>{module26(detail, "creator", "-")}</div><p>{t("CREATOR")}</p></div><div className={module4643.item}><div>{getLocalTime(detail.createTime).format("YYYY-MM-DD HH:mm:ss")}</div><p>{t("CREATION_TIME")}</p></div>{!module63(actions) && <div className={module3(module4643.item, "text-right")}><module186.Dropdown theme="dark" content={this.renderMoreMenu()} trigger="click" placement="bottomRight"><module186.Button>{t("MANAGE")}</module186.Button></module186.Dropdown></div>}</div><div className={module4643.content}><Module791 icon="eip-group" title={module26(detail, "specType")} description={t("ACCESS_MODE_SCAP")}/><Module791 icon="container" title={this.gatewayIp} description={t("GATEWAY_ADDRESS_SCAP")}/><Module791 icon="ip" title={this.gatewayPort} description={detail.specType === "ClusterIP" ? t("SERVICE_PORT_SCAP") : t("NODE_PORT")}/><Module791 icon="pod" title={module26(detail, "replicas")} description={module26(detail, "replicas") === 1 ? t("REPLICA") : t("REPLICA_PL")}/></div></Module790>;
            }
        },
        {
            key: "gatewayIp",
            get: function() {
                const loadBalancerIngress = this.props.detail.loadBalancerIngress;
                if (module63(loadBalancerIngress)) {
                    return "-";
                }
                return loadBalancerIngress.join(";");
            }
        },
        {
            key: "gatewayPort",
            get: function() {
                const detail = this.props.detail;
                const { ports, specType } = detail;
                if (module63(ports)) {
                    return "-";
                }
                return ports.map((e)=>`${e.name.toUpperCase()}: ${specType === "NodePort" ? e.nodePort : e.port}`).join("/");
            }
        }
    ]);
    return r;
})(Component);
export default E;
