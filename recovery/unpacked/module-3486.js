import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-10.js";
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
import module186 from "./module-186.js";
import { getLocalTime } from "./module-52.js";
import Module3487 from "./module-3487.js";
import module3489 from "./module-3489.js";
const TabPanel = module186.Tabs.TabPanel;
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.renderHeader = function(e) {
            return <div className={module3489.title}>{t(e)}</div>;
        };
        e.renderEventMetadata = function() {
            const eventMetadata = e.props.eventMetadata;
            const a = eventMetadata === undefined ? [] : eventMetadata;
            return e.renderMetadata(a);
        };
        e.renderDetail = function() {
            const detail = e.props.detail;
            const { source = {}, involvedObject = {}, type, count, firstTimestamp, lastTimestamp } = detail === undefined ? {} : detail;
            return <div className={module3489.center}><div className={module3489.row}><div className={module3489.rowTitle}>{t("PROJECT")}</div><div className={module3489.rowDesc}>{t(involvedObject.namespace) || "-"}</div></div><div className={module3489.row}><div className={module3489.rowTitle}>{t("RESOURCE")}</div><div className={module3489.rowDesc}><span>{`[${involvedObject.kind}]`}</span><span className={module3489.namespace}>{involvedObject.name}</span></div></div><div className={module3489.row}><div className={module3489.rowTitle}>{t("CATEGORY")}</div><div className={module3(module3489.category, module3489[type && type.toLocaleLowerCase()])} style={{
                marginLeft: 10
            }}>{type}</div></div><div className={module3489.row}><div className={module3489.rowTitle}>{t("COUNT")}</div><div className={module3489.rowDesc}>{count || 0}</div></div><div className={module3489.row}><div className={module3489.rowTitle}>{t("SOURCE")}</div><div className={module3489.rowDesc}>{t(source.component) || "-"}</div></div><div className={module3489.row}><div className={module3489.rowTitle}>{t("EARLIEST_START_TIME")}</div><div className={module3489.rowDesc}>{getLocalTime(firstTimestamp).format("YYYY-MM-DD HH:mm:ss")}</div></div><div className={module3489.row}><div className={module3489.rowTitle}>{t("LATEST_START_TIME")}</div><div className={module3489.rowDesc}>{getLocalTime(lastTimestamp).format("YYYY-MM-DD HH:mm:ss")}</div></div></div>;
        };
        e.renderFooter = function() {
            let detail = e.props.detail;
            const reason = (detail = detail === undefined ? {} : detail).reason;
            const a_message = detail.message;
            return <div className={module3489.bottom}><div className={module3489.reason}>{t("REASON_VALUE", {
                value: reason
            })}</div><div className={module3489.message}>{t("MESSAGE_VALUE", {
                value: a_message
            })}</div></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "renderMetadata",
            value: function(t = []) {
                const _this = this;
                return t.map((t)=>{
                    const key = Object.keys(t)[0];
                    return <Module3487 key={key} data={t} renderMetadata={_this.renderMetadata}/>;
                });
            }
        },
        {
            key: "render",
            value: function() {
                return <module186.Tabs direction="vertical" className={module3489.tabs}>{<TabPanel label=<module186.Icon name="resource" size={16}/> name="resource"><div className={module3489.content}>{this.renderHeader("METADATA")}{this.renderEventMetadata()}</div></TabPanel>}{<TabPanel label=<module186.Icon name="cloud" size={16}/> name="cloud"><div className={module3489.content}>{this.renderHeader("DETAILS")}{this.renderDetail()}{this.renderFooter()}</div></TabPanel>}</module186.Tabs>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
