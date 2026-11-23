import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module194 from "unpacked/module-194.js";
import module186 from "unpacked/module-186.js";
import { getAreaChartOps } from "utils/monitoring";
import Module3975 from "unpacked/module-3975.js";
import module3976 from "unpacked/module-3976.js";
let l;
let u;
let o;
const C = inject("rootStore")(l = observer((o = u = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.handleClick = function() {
            const e_props = e.props;
            const { onClick, name, routeName, workspace, namespace, cluster, isEdgeWize, isObservability } = e_props;
            if (module194(onClick)) {
                onClick(name);
            } else if (routeName) {
                e.routing.push(isObservability ? `/whizard-telemetry/${cluster}/${routeName}?namespace=${namespace}` : workspace ? `/${workspace}/clusters/${cluster}/projects/${namespace}/${routeName}` : `${isEdgeWize ? "/v2/edgewize" : ""}/clusters/${cluster}/${routeName}?namespace=${namespace}`);
            }
        };
        e.handleWarnClick = function(t) {
            t.stopPropagation();
            const e_props = e.props;
            const { routeName, onClick, name, workspace, namespace, cluster, isEdgeWize, isObservability } = e_props;
            const f = routeName === "volumes" ? "pending" : "updating";
            if (module194(onClick)) {
                onClick(name, f);
            } else if (routeName) {
                e.routing.push(isObservability ? `/whizard-telemetry/${cluster}/projects/${namespace}/${routeName}?status=${f}` : workspace ? `/${workspace}/clusters/${cluster}/projects/${namespace}/${routeName}?status=${f}` : `${isEdgeWize ? "/v2/edgewize" : ""}/clusters/${cluster}/${routeName}?status=${f}`);
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "renderWarn",
            value: function() {
                const props = this.props;
                const { warnNum, name } = props;
                const n = warnNum > 99 ? <div className={module3976.skip}>...</div> : warnNum;
                if (warnNum > 0) {
                    return <div className={module3976.warn}><module186.Tooltip className={module3976.tips} content={t("RESOURCE_WARNING_TIPS", {
                        warnNum,
                        tipName: t(`${name}_PL`)
                    })}><div onClick={this.handleWarnClick}>{n}</div></module186.Tooltip></div>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, icon, iconSize, name, routeName, num, metrics, onClick, cluster } = props;
                const p = getAreaChartOps({
                    title: "",
                    unit: "",
                    legend: [
                        "COUNT"
                    ],
                    data: metrics
                });
                return <div data-name={name} className={module3(module3976.card, className)}><div className={module3976.icon}><module186.Icon name={icon} size={iconSize}/>{this.renderWarn()}</div><div className={module3(module3976.info, module31({}, module3976.cursor, routeName || onClick))} onClick={this.handleClick}><strong>{num}</strong><span>{num === "1" ? t(name) : t(`${name}_PL`)}</span></div>{globals.app.hasClusterModule(cluster, "whizard-monitoring") && <Module3975 width={330} height={44} bgColor="transparent" {...p}/>}</div>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    isEdgeWize: module1.bool,
    className: module1.string,
    icon: module1.string,
    iconSize: module1.number,
    name: module1.string,
    namespace: module1.string,
    routeName: module1.string,
    num: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    warnNum: module1.number,
    onClick: module1.func
}, u.defaultProps = {
    isEdgeWize: false,
    icon: "appcenter",
    iconSize: 40,
    name: "deployment",
    namespace: "default",
    routeName: "",
    num: 0,
    warnNum: 0
}, l = o)) || l) || l;
export default C;
