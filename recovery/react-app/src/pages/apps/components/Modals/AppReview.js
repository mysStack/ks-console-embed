import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-137.js";
import "unpacked/module-75.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-58.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import { observer } from "unpacked/module-239.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import module14 from "unpacked/module-14.js";
import module788 from "components/Base/Modal";
import module836 from "components/Base/Image";
import module3154 from "pages/apps/components/Cards/BaseInfo";
import module3156 from "pages/apps/components/Cards/AppReadme";
import module3158 from "unpacked/module-3158.js";
import module1373 from "pages/apps/components/Cards/UploadInfo";
import module3160 from "pages/apps/components/Cards/UpdateLog";
import module470 from "stores/openpitrix/app";
import module943 from "stores/openpitrix/version";
import module936 from "stores/openpitrix/file";
import module3162 from "unpacked/module-3162.js";
let i;
let f;
let d;
const TabPanel = module186.Tabs.TabPanel;
const U = observer((d = f = ((e)=>{
    module55(r, e);
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
        t.fetchData = function({ detail }) {
            t.store.fetchDetail({
                app_id: detail.app_id
            });
            t.versionStore.fetchDetail({
                app_id: detail.app_id,
                version_id: detail.version_id
            });
            t.fileStore.fetch({
                app_id: detail.app_id,
                version_id: detail.version_id
            });
        };
        t.getPackageName = function() {
            const detail = t.props.detail;
            const a = module26(t.versionStore, "detail.package_name");
            if (!a || a.startsWith("att-")) {
                return `${detail.app_name}-${detail.version_name}`;
            }
            return a;
        };
        t.handleTabChange = async (tab)=>{
            t.setState({
                tab
            });
        };
        t.store = new module470;
        t.versionStore = new module943;
        t.fileStore = new module936;
        t.state = {
            tab: "appInfo"
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible && this.props.visible !== e.visible) {
                    this.fetchData(this.props);
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.visible) {
                    this.fetchData(this.props);
                }
            }
        },
        {
            key: "renderBaseInfo",
            value: function() {
                const detail = module14.toJS(this.store.detail);
                const a = module14.toJS(this.versionStore.detail);
                const r = module26(detail, "screenshots", "");
                const n = r ? r.split(",") : [];
                const n_length = n.length;
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module3154, {
                    detail,
                    versionName: a.name
                }), module553.default.createElement("div", {
                    className: module3162.screenshots
                }, module553.default.createElement("div", {
                    className: module3162.title
                }, t("APP_SCREENSHOTS")), n_length > 0 ? module553.default.createElement("ul", null, n.map((src, key)=>module553.default.createElement("li", {
                        key
                    }, module553.default.createElement(module836, {
                        src
                    })))) : module553.default.createElement("p", null, t("NONE"))));
            }
        },
        {
            key: "renderConfigFiles",
            value: function() {
                const detail = this.versionStore.detail;
                const files = this.fileStore.files;
                return module553.default.createElement("div", null, module553.default.createElement(module1373, {
                    className: module3162.downloadInfo,
                    fileStore: this.fileStore,
                    packageName: this.getPackageName(),
                    updateTime: detail.update_time || detail.status_time,
                    appId: detail.app_id,
                    versionId: detail.version_id,
                    hasPackage: true
                }), module553.default.createElement(module3158, {
                    files
                }));
            }
        },
        {
            key: "renderFooter",
            value: function() {
                const props = this.props;
                const { isSubmitting, onReject, onOk } = props;
                return module553.default.createElement("div", {
                    className: module3162.footer
                }, module553.default.createElement(module186.Button, {
                    type: "danger",
                    onClick: onReject
                }, t("REJECT")), module553.default.createElement(module186.Button, {
                    type: "control",
                    loading: isSubmitting,
                    disabled: isSubmitting,
                    onClick: onOk
                }, t("APPROVE")));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, canHandle, ...rest } = props;
                const l = module14.toJS(this.versionStore.detail);
                const tab = this.state.tab;
                const readme = module26(this.fileStore, "files", {})["README.md"];
                return module553.default.createElement(module788, {
                    bodyClassName: module3(module3162.body, module31({}, module3162.hideFooter, !canHandle)),
                    visible,
                    ...rest,
                    rightScreen: true,
                    hideFooter: true
                }, module553.default.createElement(module186.Tabs, {
                    type: "button",
                    activeName: tab,
                    onChange: this.handleTabChange
                }, module553.default.createElement(TabPanel, {
                    label: t("APP_INFORMATION"),
                    name: "appInfo"
                }, this.renderBaseInfo()), module553.default.createElement(TabPanel, {
                    label: t("DOCUMENTATION"),
                    name: "readme"
                }, module553.default.createElement(module3156, {
                    readme
                })), module553.default.createElement(TabPanel, {
                    label: t("CHART_FILES"),
                    name: "configFiles"
                }, this.renderConfigFiles()), module553.default.createElement(TabPanel, {
                    label: t("UPDATE_LOG"),
                    name: "updateLog"
                }, module553.default.createElement(module3160, {
                    description: l.description
                }))), canHandle && this.renderFooter());
            }
        }
    ]);
    return r;
})(module553.Component), f.propTypes = {
    visible: module1.bool,
    canHandle: module1.bool,
    detail: module1.object,
    onReject: module1.func,
    onOk: module1.func,
    onCancel: module1.func
}, f.defaultProps = {
    visible: false,
    canHandle: false,
    detail: {},
    onReject: function() {},
    onOk: function() {},
    onCancel: function() {}
}, i = d)) || i;
export default U;
