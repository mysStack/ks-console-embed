import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import module243 from "unpacked/module-243.js";
import module186 from "unpacked/module-186.js";
import module818 from "components/Base/TypeSelect";
import module3096 from "pages/apps/components/AppPreview";
import module1709 from "pages/apps/components/AppBase";
import module470 from "stores/openpitrix/app";
import module943 from "stores/openpitrix/version";
import module3100 from "pages/projects/components/Modals/RepoApp/AppDetail/Banner";
import module3102 from "unpacked/module-3102.js";
let c;
let s;
let i;
const A = observer((i = s = ((e)=>{
    module55(n, e);
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
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.fetchVersions = async function e() {
            let a;
            const r = arguments;
            a = r.length > 0 && r[0] !== undefined ? r[0] : {};
            await t.versionStore.fetchList({
                ...a,
                app_id: t.appId,
                noLimit: true
            });
        };
        t.handleTabChange = function(tab) {
            t.setState({
                tab
            });
        };
        t.handleClickBack = function() {
            const app = t.props.app;
            t.props.setType("appList", app.repo_id);
        };
        t.showDeploy = function() {
            t.props.onDeploy({
                app: t.appStore.detail,
                store: t.appStore
            });
        };
        t.handleChangeAppVersion = function(selectAppVersion) {
            t.setState({
                selectAppVersion
            });
        };
        t.state = {
            tab: "versionInfo",
            selectAppVersion: "",
            showDeploy: false
        };
        t.appStore = new module470;
        t.versionStore = new module943;
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: async function() {
                let selectAppVersion;
                await this.fetchVersions();
                selectAppVersion = module26(this.versionStore, "list.data[0].version_id", "");
                this.setState(function() {
                    return {
                        selectAppVersion
                    };
                });
                this.appStore.fetchDetail({
                    app_id: [
                        this.appId
                    ]
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.props.setType();
            }
        },
        {
            key: "renderVersionList",
            value: function() {
                return module553.default.createElement("div", {
                    className: "margin-b12"
                }, module553.default.createElement("div", {
                    className: "h6 margin-b12"
                }, t("VERSION")), module553.default.createElement(module818, {
                    value: this.state.selectAppVersion,
                    options: this.versionOptions,
                    onChange: this.handleChangeAppVersion
                }));
            }
        },
        {
            key: "render",
            value: function() {
                const app = this.props.app;
                const state = this.state;
                const { selectAppVersion, tab } = state;
                const detail = this.appStore.detail;
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module3100, {
                    onClickBack: this.handleClickBack,
                    title: app.name,
                    desc: app.description,
                    icon: app.icon
                }), module553.default.createElement("div", {
                    className: module3102.bar
                }, module553.default.createElement(module186.RadioGroup, {
                    mode: "button",
                    value: tab,
                    options: this.tabs,
                    onChange: this.handleTabChange
                }), module553.default.createElement(module186.Button, {
                    type: "control",
                    onClick: this.showDeploy
                }, t("INSTALL"))), module553.default.createElement("div", {
                    className: module3102.content
                }, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module3096, {
                    appId: this.appId,
                    versionId: selectAppVersion,
                    currentTab: tab
                })), module553.default.createElement(module186.Column, {
                    className: "is-narrow"
                }, this.renderVersionList(), module553.default.createElement(module1709, {
                    app: detail
                })))));
            }
        },
        {
            key: "appId",
            get: function() {
                return this.props.app.app_id;
            }
        },
        {
            key: "tabs",
            get: function() {
                return [
                    {
                        label: t("APP_INFORMATION"),
                        value: "versionInfo"
                    },
                    {
                        label: t("CHART_FILES"),
                        value: "chartFiles"
                    }
                ];
            }
        },
        {
            key: "versionOptions",
            get: function() {
                return this.versionStore.list.data.map(({ version_id, name, create_time })=>({
                        label: name,
                        description: module243(create_time).format("YYYY-MM-DD"),
                        value: version_id
                    }));
            }
        }
    ]);
    return n;
})(module553.Component), s.propTypes = {
    app: module1.object,
    setType: module1.func,
    workspace: module1.string
}, s.defaultProps = {
    app: {}
}, c = i)) || c;
export default A;
