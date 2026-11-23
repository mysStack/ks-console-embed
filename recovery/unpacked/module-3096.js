import "./module-15.js";
import "./module-9.js";
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
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module63 from "./module-63.js";
import module936 from "./module-936.js";
import Module1002 from "./module-1002.js";
import Module1708 from "./module-1708.js";
import module3098 from "./module-3098.js";
let l;
let o;
let u;
let c;
const TabPanel = module186.Tabs.TabPanel;
const R = observer((c = u = ((Component_1)=>{
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
        n.handleTabChange = function(tab) {
            n.setState({
                tab
            });
        };
        n.renderReadMe = function() {
            const source = n.files["README.md"];
            if (source || n.fileStore.isLoading) {
                return <Module1002 source={source}/>;
            }
            return <p className={module3098.noReadme}>{t("VERSION_INTRO_EMPTY_DESC")}</p>;
        };
        n.renderChartFiles = function() {
            if (!module63(n.files)) {
                return <Module1708 files={module14.toJS(n.files)} editorOptions={{
                    options: {
                        readOnly: true
                    }
                }}/>;
            }
        };
        n.fileStore = new module936;
        n.state = {
            tab: "versionInfo"
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const versionId = this.props.versionId;
                if (versionId !== e.versionId) {
                    this.fetchFile(versionId);
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                const versionId = this.props.versionId;
                this.fetchFile(versionId);
            }
        },
        {
            key: "fetchFile",
            value: function(version_id) {
                const appId = this.props.appId;
                if (version_id) {
                    this.fileStore.fetch({
                        app_id: appId,
                        version_id
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { versionId, currentTab } = props;
                const tab = this.state.tab;
                if (versionId) {
                    if (this.fileStore.isLoading) {
                        return <module186.Loading className={module3098.loading}/>;
                    }
                    if (currentTab === "versionInfo") {
                        return <>{this.renderReadMe()}</>;
                    }
                    if (currentTab === "chartFiles") {
                        return <>{this.renderChartFiles()}</>;
                    }
                    return <module186.Tabs type="button" activeName={tab} onChange={this.handleTabChange}><TabPanel label={t("APP_INTRODUCTION")} name="versionInfo"><div className={module3098.wrapper}>{this.renderReadMe()}</div></TabPanel><TabPanel label={t("CHART_FILES")} name="chartFiles"><div className={module3098.wrapper}>{this.renderChartFiles()}</div></TabPanel></module186.Tabs>;
                }
                return null;
            }
        },
        {
            key: "files",
            get: function() {
                return this.fileStore.files;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    appId: module1.string,
    versionId: module1.string,
    currentTab: module1.string
}, u.defaultProps = {
    currentTab: "",
    appId: "",
    versionId: ""
}, o = c, module49(o.prototype, "files", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "files"), o.prototype), l = o)) || l;
export default R;
