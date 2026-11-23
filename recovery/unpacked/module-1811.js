import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-110.js";
import "./module-45.js";
import "./module-42.js";
import "./module-319.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module159 from "./module-159.js";
import module469 from "./module-469.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import Module802 from "./module-802.js";
import { getSuitableUnit, getValueByUnit } from "./module-795.js";
import { coreUnitTS } from "./module-52.js";
import module3842 from "./module-3842.js";
let l;
let u;
let o;
const N = observer((o = u = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.getValue = function(e, t) {
            const a = getSuitableUnit(e, t);
            const r = getValueByUnit(e, a);
            const n = coreUnitTS(r, a);
            return `${r} ${n}`;
        };
        n.getHPAData = function() {
            const detail = n.props.detail;
            const h = detail?._originData?.spec?.minReplicas || 0;
            const v = detail?._originData?.spec?.maxReplicas || 0;
            const g = detail._originData.spec.metrics?.find(function(e) {
                return e.type === "Resource" && e.resource.name === "cpu";
            })?.resource.target.averageUtilization || 0;
            const y = detail._originData.spec.metrics?.find(function(e) {
                return e.type === "Resource" && e.resource.name === "memory";
            })?.resource.target.averageValue || 0;
            const b = detail.status.currentMetrics?.find(function(e) {
                return e.type === "Resource" && e.resource.name === "cpu";
            })?.resource.current.averageUtilization || 0;
            const _ = detail.status.currentMetrics?.find(function(e) {
                return e.type === "Resource" && e.resource.name === "memory";
            })?.resource.current.averageValue || 0;
            return [
                {
                    icon: "chevron-down",
                    name: t("MINIMUM_REPLICAS"),
                    value: h
                },
                {
                    icon: "chevron-up",
                    name: t("MAXIMUM_REPLICAS"),
                    value: v
                },
                {
                    icon: "cpu",
                    name: t("TARGET_CPU_USAGE"),
                    value: module159(g) || g === "" ? t("NONE") : `${g}%`,
                    current: `${b}%`
                },
                {
                    icon: "memory",
                    name: t("TARGET_MEMORY_USAGE"),
                    value: module159(y) || y === "" ? t("NONE") : y,
                    current: n.getValue(String(_).endsWith("m") ? parseInt(_, 10) / 1000 : _, "memory")
                }
            ];
        };
        n.getOperations = function() {
            return [
                {
                    key: "cancel",
                    icon: "close",
                    text: t("CANCEL"),
                    onClick: n.handleCancel
                }
            ];
        };
        n.handleMoreClick = function(e, t) {
            const onClick = n.getOperations().find((e)=>e.key === t).onClick;
            if (onClick) {
                onClick();
            }
        };
        n.handleCancel = function() {
            const n_props = n.props;
            const { detail, onDeleted, k8sVersion } = n_props;
            n.store.delete(detail, k8sVersion).then(()=>{
                module240.success({
                    content: `${t("CANCEL_SUCCESSFUL")}`
                });
                onDeleted();
            });
        };
        n.renderCard = function({ icon, name, value, current }) {
            return <div key={icon} className={module3842.box}><div className={module3842.card}><module186.Icon name={icon} size={40}/><div><div className={module3842.name} title={name}>{name}</div><p className={module3842.value}>{current ? t("TARGET_CURRENT", {
                target: value,
                current
            }) : value}</p></div></div></div>;
        };
        n.store = e.store || new module469;
        return n;
    }
    module37(r, [
        {
            key: "renderOperations",
            value: function() {
                const e = this.getOperations();
                const content = <module186.Menu onClick={this.handleMoreClick}>{e.map(({ icon, text, show = true, ...rest })=>{
                    if (show) {
                        return <module186.Menu.MenuItem key={text} {...rest}>{icon && <module186.Icon name={icon} type="light"/>} {text}</module186.Menu.MenuItem>;
                    }
                    return null;
                })}</module186.Menu>;
                return <module186.Dropdown theme="dark" content={content}><module186.Button type="ghost" icon="more"/></module186.Dropdown>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                if (!this.props.detail.name) {
                    return null;
                }
                const e = this.getHPAData();
                return <div className={module3842.wrapper}>{e.map(this.renderCard)}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const { className, loading, enableCancelHpa = true } = this.props;
                const title = this.props.title || t("AUTOSCALING");
                return <Module802 className={module3(module3842.main, className)} title={title} operations={enableCancelHpa ? this.renderOperations() : null} empty={t("NOT_ENABLE", {
                    resource: t("AUTOSCALING")
                })} loading={loading}>{this.renderContent()}</Module802>;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    className: module1.string,
    title: module1.string,
    store: module1.object,
    detail: module1.object,
    loading: module1.bool,
    onDeleted: module1.func
}, u.defaultProps = {
    detail: {},
    loading: true,
    onDelete: function() {}
}, l = o)) || l;
export default N;
