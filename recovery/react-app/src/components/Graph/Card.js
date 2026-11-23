import "unpacked/module-15.js";
import "unpacked/module-86.js";
import "unpacked/module-190.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import { PureComponent } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module4757 from "unpacked/module-4757.js";
const g = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
            key: "renderHTTPMetrics",
            value: function() {
                const props = this.props;
                const { health, edge } = props;
                const n = module26(health, "requests.errorRatio");
                const l = module26(edge, "data.traffic.rates.http", 0);
                const u = n === -1 ? NaN : (100 - n).toFixed(2);
                const o = module26(edge, "data.responseTime", NaN);
                return <div className={module4757.detail}><p><module186.Icon name="changing-over" size={16}/> {`${l} RPS`}</p><p><module186.Icon name="check" size={16}/> {isNaN(u) ? t("NO_DATA_SCAP") : `${u}%`}</p><p><module186.Icon name="timed-task" size={16}/> {isNaN(o) || o === "0" ? t("NO_DATA_SCAP") : `${o} ms`}</p><p><module186.Icon name="pod" size={16}/> {module26(health, "workloadStatus.available") || module26(health, "workloadStatus.availableReplicas")} / {module26(health, "workloadStatus.replicas") || module26(health, "workloadStatus.desiredReplicas")}</p></div>;
            }
        },
        {
            key: "renderTCPMetrics",
            value: function() {
                const props = this.props;
                const { data, health } = props;
                const n = module26(data, "traffic[0].rates.tcpIn");
                const l = module26(data, "traffic[0].rates.tcpOut");
                return <div className={module4757.detail}><p><module186.Icon name="next" size={16}/> {isNaN(n) ? t("NO_DATA_SCAP") : `${n} B/s`}</p><p><module186.Icon name="previous" size={16}/> {isNaN(l) ? t("NO_DATA_SCAP") : `${l} B/s`}</p><p><module186.Icon name="pod" size={16}/> {module26(health, "workloadStatus.availableReplicas")} / {module26(health, "workloadStatus.desiredReplicas")}</p></div>;
            }
        },
        {
            key: "renderDetail",
            value: function() {
                const edge = this.props.edge;
                if ((module26(edge, "data.traffic.protocol") || "http") === "http") {
                    return this.renderHTTPMetrics();
                }
                return this.renderTCPMetrics();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, health, className, inGroup } = props;
                if (data.app.indexOf("kubesphere") !== -1 || data.app === "unknown") {
                    return <div className={module3(module4757.card, className)} data-workload={data.workload} data-workload-id={data.id} data-group={inGroup}><div className={module4757.type}>{t("TRAFFIC_ENTRY")}</div><div className={module4757.wrapper}><div className={module4757.gatewayName}><module186.Icon name="project" size={16}/>{data.targetNamespace}</div></div></div>;
                }
                const o = module26(health, "requests.errorRatio");
                return <div className={module3(module4757.card, className, module31({}, module4757.error, o > 0))} data-workload={data.workload} data-workload-id={data.id} data-group={inGroup}><div className={module4757.type}>{data.hasCB && <module186.Icon name="thunder" type="light"/>}{t("DEPLOYMENT")}</div><div className={module4757.wrapper}>{this.renderDetail()}<div className={module4757.workload}><span>{t("DEPLOYMENT")}</span><span>{data.workload}</span></div></div></div>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default g;
g.propTypes = {
    data: module1.object,
    health: module1.object,
    edge: module1.object
};
g.defaultProps = {
    data: {},
    health: {},
    edge: {}
};
