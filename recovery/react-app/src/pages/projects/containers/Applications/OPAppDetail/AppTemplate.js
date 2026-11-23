import "unpacked/module-15.js";
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
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module943 from "stores/openpitrix/version";
import module936 from "stores/openpitrix/file";
import Module802 from "components/Base/Card";
import Module1002 from "components/Base/Markdown";
import Module1708 from "components/TextPreview";
import module4791 from "unpacked/module-4791.js";
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
