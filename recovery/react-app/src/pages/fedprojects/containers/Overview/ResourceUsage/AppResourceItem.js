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
import Module4942 from "pages/fedprojects/containers/Overview/ResourceUsage/TinyArea";
import module4943 from "unpacked/module-4943.js";
let o;
let c;
let u;
const b = inject("rootStore")(o = observer((u = c = ((Component_1)=>{
    module55(a, Component_1);
    var r = ((e)=>{
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(...n_1) {
        let e;
        module36(this, a);
        e = r.call(this, ...n_1);
        e.handleClick = function() {
            const e_props = e.props;
            const { onClick, name, routeName } = e_props;
            if (module194(onClick)) {
                onClick(name);
            } else if (routeName) {
                e.routing.push(`${e.prefix}/${routeName}`);
            }
        };
        e.handleWarnClick = function(t) {
            t.stopPropagation();
            const e_props = e.props;
            const { routeName, onClick, name } = e_props;
            const c = routeName === "volumes" ? "pending" : "updating";
            if (module194(onClick)) {
                onClick(name, c);
            } else if (routeName) {
                e.routing.push(`${e.prefix}/${routeName}?status=${c}`);
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "renderWarn",
            value: function() {
                const props = this.props;
                const { warnNum, name } = props;
                const n = warnNum > 99 ? <div className={module4943.skip}>...</div> : warnNum;
                if (warnNum > 0) {
                    return <div className={module4943.warn}><module186.Tooltip className={module4943.tips} content={t("RESOURCE_WARNING_TIPS", {
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
                const { className, icon, iconSize, name, routeName, num, metrics, onClick } = props;
                const d = getAreaChartOps({
                    title: "",
                    unit: "",
                    legend: [
                        "COUNT"
                    ],
                    data: metrics
                });
                return <div data-name={name} className={module3(module4943.card, className)}><div className={module4943.icon}><module186.Icon name={icon} size={iconSize}/>{this.renderWarn()}</div><div className={module3(module4943.info, module31({}, module4943.cursor, routeName || onClick))} onClick={this.handleClick}><strong>{num}</strong><span>{num === "1" ? t(name) : t(`${name}_PL`)}</span></div><Module4942 width={330} height={44} bgColor="transparent" {...d}/></div>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "prefix",
            get: function() {
                const props = this.props;
                const { namespace, workspace } = props;
                return `/${workspace}/federatedprojects/${namespace}`;
            }
        }
    ]);
    return a;
})(Component), c.propTypes = {
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
}, c.defaultProps = {
    icon: "appcenter",
    iconSize: 40,
    name: "deployment",
    namespace: "default",
    routeName: "",
    num: 0,
    warnNum: 0
}, o = u)) || o) || o;
export default b;
