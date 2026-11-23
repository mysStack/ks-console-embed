import "./module-15.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-188.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module244 from "./module-244.js";
import module14 from "./module-14.js";
import module243 from "./module-243.js";
import module186 from "./module-186.js";
import module943 from "stores/openpitrix/version";
import Module1715 from "pages/apps/components/AppInfo";
import Module1709 from "pages/apps/components/AppBase";
import { isAppIsRadonDBAndAuthorized } from "utils/index";
import module3191 from "./module-3191.js";
const TabPanel = module186.Tabs.TabPanel;
const _ = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleDeploy = function() {
            t.props.showDeploy();
        };
        t.params = module244.parse(location.search.slice(1)) || {};
        t.htmlOrigBgColor = "";
        t.state = {
            tab: "appInfo",
            selectAppVersion: "",
            showDeploy: false
        };
        t.appId = t.props.app_id;
        t.versionStore = new module943;
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "getData",
            value: function() {
                const _this = this;
                this.versionStore.fetchList({
                    app_id: this.appId,
                    status: "active"
                }).then(()=>{
                    const selectAppVersion = module26(_this.versionStore, "list.data[0].version_id", "");
                    _this.setState({
                        selectAppVersion
                    });
                });
            }
        },
        {
            key: "renderDeployButton",
            value: function() {
                const detail = this.props.appStore.detail;
                const a = isAppIsRadonDBAndAuthorized(detail);
                const { isRadondb, isSupport } = a;
                const disabled = isRadondb && !isSupport;
                return <module186.Tooltip content={disabled ? <div className={module3191.authorizedTip}><div className={module3191.authorizedTipTitle}><module186.Icon name="information" color={{
                    primary: "#fff",
                    secondary: "#F5A623"
                }}/><span>{t("APP_UNAUTHORIZED")}</span></div><p>{t("APP_UNAUTHORIZED_DESC")}</p></div> : ""}><div className={module3191.deployButton}><module186.Button onClick={this.handleDeploy} type="control" disabled={disabled}>{t("INSTALL")}</module186.Button></div></module186.Tooltip>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const tab = this.state.tab;
                const detail = this.props.appStore.detail;
                const data = this.versionStore.list.data;
                return <module186.Tabs className="tabs-new" activeName={tab} onChange={this.handleTabChange}><TabPanel label={t("APP_INFORMATION")} name="appInfo">{this.renderDeployButton()}<module186.Columns><module186.Column className="is-9"><Module1715 app={detail} versions={module14.toJS(data)}/></module186.Column><module186.Column><Module1709 app={detail}/></module186.Column></module186.Columns></TabPanel></module186.Tabs>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3191.main}><div className={module3191.content}>{this.renderContent()}</div></div>;
            }
        },
        {
            key: "versionOptions",
            get: function() {
                return this.versionStore.list.data.map(({ version_id, name, create_time })=>({
                        label: name,
                        description: module243(create_time).format(t("YYYY-MM-DD")),
                        value: version_id
                    }));
            }
        }
    ]);
    return r;
})(Component);
export default _;
