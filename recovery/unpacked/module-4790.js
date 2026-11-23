import "./module-15.js";
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
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import module943 from "./module-943.js";
import module936 from "./module-936.js";
import Module802 from "./module-802.js";
import Module1002 from "./module-1002.js";
import Module1708 from "./module-1708.js";
import module4791 from "./module-4791.js";
let o;
const TabPanel = module186.Tabs.TabPanel;
const O = inject("detailStore")(o = observer(o = ((Component_1)=>{
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
        t.handleTabChange = function(tab) {
            t.setState({
                tab
            });
        };
        t.state = {
            tab: "readme"
        };
        t.store = e.detailStore;
        t.appVersionStore = new module943;
        t.appFileStore = new module936;
        module14.when(function() {
            return !module63(t.store.detail);
        }, function() {
            return t.getData();
        });
        return t;
    }
    module37(r, [
        {
            key: "getData",
            value: function() {
                const detail = module14.toJS(this.store).detail;
                const { app_id, version_id } = detail;
                this.appVersionStore.fetchList({
                    app_id,
                    status: "active"
                });
                this.appFileStore.fetch({
                    app_id,
                    version_id
                });
            }
        },
        {
            key: "renderReadme",
            value: function() {
                const files = this.appFileStore.files;
                if (files["README.md"] || this.appFileStore.isLoading) {
                    return <Module1002 source={files["README.md"]} className={module4791.markdown}/>;
                }
                return <p>{t("NO_APP_DESC_FOUND")}</p>;
            }
        },
        {
            key: "renderSettings",
            value: function() {
                const files = this.appFileStore.files;
                return <Module1708 files={files}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const tab = this.state.tab;
                return <Module802 title={t("APP_TEMPLATE")} className={module4791.wrapper}><module186.Tabs type="button" activeName={tab} onChange={this.handleTabChange}><TabPanel label={t("APP_DESCRIPTION")} name="readme">{this.renderReadme()}</TabPanel><TabPanel label={t("CHART_FILES")} name="settings">{this.renderSettings()}</TabPanel></module186.Tabs></Module802>;
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default O;
