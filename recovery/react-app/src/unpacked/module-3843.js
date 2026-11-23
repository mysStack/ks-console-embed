import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import module3 from "unpacked/module-3.js";
import Module789 from "components/Base/Avatar";
import Module802 from "components/Base/Card";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import { Component } from "unpacked/module-553.js";
import { getUnitValueString } from "utils/index";
import { timeUnit } from "utils/time";
import module3844 from "unpacked/module-3844.js";
let l;
let u;
let o;
const O = observer((o = u = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.getCumstomScalingData = function() {
            const detail = e.props.detail;
            return [
                {
                    icon: "down-duotone",
                    title: detail?.minReplicaCount ?? "-",
                    desc: t("MINIMUM_REPLICAS")
                },
                {
                    icon: "up-duotone",
                    title: detail?.maxReplicaCount ?? "-",
                    desc: t("MAXIMUM_REPLICAS")
                },
                {
                    icon: "history-duotone",
                    title: getUnitValueString(detail?.pollingInterval ?? "-", timeUnit),
                    desc: t("POLLING_INTERVAL")
                },
                {
                    icon: "clock-duotone",
                    title: getUnitValueString(detail?.cooldownPeriod ?? "-", timeUnit),
                    desc: t("WAITING_TIME")
                }
            ];
        };
        e.renderCard = function({ icon, title, desc }) {
            return <div key={icon} className={module3844.box}><Module789 icon={icon} iconSize={30} title={title} desc={desc} noLink/></div>;
        };
        e.renderTriggers = function() {
            return e.props.detail.triggers?.map(function(e, key) {
                const r = e.type === "cron" ? <Module789 icon="cronjob-duotone" iconSize={30} title="Cron" desc={t("CORN_DESC")} noLink/> : e.type === "prometheus" ? <Module789 icon="prometheus" iconSize={30} title="Prometheus" desc={t("SCALING_Prometheus_DESC")} noLink/> : <Module789 icon="computing-setting" iconSize={30} title={e.type} desc={t("SCALING_CUSTOM_DESC")} noLink/>;
                return <div key={key} className={module3844.trigger}>{r}</div>;
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "renderContent",
            value: function() {
                const e = this.getCumstomScalingData();
                return <div className={module3844.wrapper}><div className={module3844.baseInfo}>{e.map(this.renderCard)}</div><div className={module3844.triggers}><div className="h6">{t("TRIGGER")}</div>{this.renderTriggers()}</div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, loading, workspace, detail } = props;
                const { name, namespace, cluster } = detail;
                if (name) {
                    return <Module802 className={module3(module3844.main, className)} loading={loading} header=<Module789 icon="stretch" iconSize={40} title={name} desc={t("SCALING_CUSTOM_DESC")} to={`/${workspace}/clusters/${cluster}/projects/${namespace}/custom-scaling/${name}`}/>>{this.renderContent()}</Module802>;
                }
                return null;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    className: module1.string,
    title: module1.string,
    detail: module1.object,
    loading: module1.bool
}, u.defaultProps = {
    detail: {},
    loading: true,
    onDelete: function() {}
}, l = o)) || l;
export default O;
