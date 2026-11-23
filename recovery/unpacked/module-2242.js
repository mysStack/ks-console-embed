import "./module-12.js";
import "./module-135.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module243 from "./module-243.js";
import module63 from "./module-63.js";
import module199 from "./module-199.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module435 from "./module-435.js";
import { getVersionFormattedData } from "./module-248.js";
import module818 from "./module-818.js";
import module933 from "./module-933.js";
import module484 from "./module-484.js";
import module1099 from "./module-1099.js";
import module2308 from "./module-2308.js";
import module2310 from "./module-2310.js";
let i;
let c;
let s;
const j = observer((s = c = ((e)=>{
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
            const app = t.props.app;
            const { name, description } = app;
            const current = t.containerFormRef.current;
            if (current) {
                current.validate(function() {
                    (t.props.onDeploy || t.onDeploy)({
                        ...t.props || module88(t),
                        title: name,
                        selectedVersion: t.selectedVersion,
                        description: description || "-",
                        containerDetail: current.getData(),
                        store: t.store
                    });
                });
            }
        };
        t.handleChangeAppVersion = function(selectedVersionKey) {
            t.setState({
                selectedVersionKey
            });
        };
        t.state = {
            tab: "versionInfo",
            selectedVersionKey: "",
            showDeploy: false
        };
        t.store = new module484;
        t.appTemplateStore = new module1099;
        t.containerFormRef = module553.default.createRef();
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: async function() {
                let selectedVersionKey;
                selectedVersionKey = this.props.app.latestVersion.name;
                this.setState({
                    selectedVersionKey
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
            key: "renderContainerGroupInfo",
            value: function() {
                const props = this.props;
                const { cluster, namespace } = props;
                return module553.default.createElement("div", {
                    className: module2310.content
                }, module553.default.createElement("div", {
                    className: module2310.title
                }, t("VERSION")), module553.default.createElement(module818, {
                    className: "margin-b12",
                    value: this.state.selectedVersionKey,
                    options: this.versionOptions,
                    onChange: this.handleChangeAppVersion
                }), this.selectedVersion && module553.default.createElement(module933, {
                    formRef: this.containerFormRef,
                    store: this.appTemplateStore,
                    cluster,
                    namespace,
                    formTemplate: this.containerFormTemplate,
                    onlyDockerHub: true,
                    isReadOnlyContainers: true,
                    isShowAddContainer: false
                }));
            }
        },
        {
            key: "render",
            value: function() {
                const app = this.props.app;
                const { name, description } = app;
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module2308, {
                    onClickBack: this.handleClickBack,
                    title: name,
                    desc: description || "-"
                }), module553.default.createElement("div", {
                    className: module2310.bar
                }, module553.default.createElement("span", {
                    className: "h6"
                }, t("CONTAINER_GROUP_INFO")), module553.default.createElement(module186.Button, {
                    type: "control",
                    onClick: this.showDeploy,
                    disabled: module63(this.versionOptions)
                }, t("DEPLOYMENT"))), this.renderContainerGroupInfo());
            }
        },
        {
            key: "appId",
            get: function() {
                return this.props.app.name;
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
                const app = this.props.app;
                const { versions, latestVersion } = app;
                return versions.map(({ name, createTime })=>({
                        value: name,
                        label: module553.default.createElement(module553.default.Fragment, null, name, name === latestVersion.name && module553.default.createElement(module186.Tag, {
                            type: "warning",
                            className: module2310.latestTag
                        }, t("LATEST_VERSION_SCAP"))),
                        description: module243(createTime).format("YYYY-MM-DD")
                    }));
            }
        },
        {
            key: "selectedVersion",
            get: function() {
                const selectedVersionKey = this.state.selectedVersionKey;
                return this.props.app.versions.find((t)=>t.name === selectedVersionKey);
            }
        },
        {
            key: "containerFormTemplate",
            get: function() {
                const namespace = this.props.namespace;
                let t = module435.apptemplateversions({
                    name: this.appId
                });
                if (this.selectedVersion) {
                    t = getVersionFormattedData(this.selectedVersion);
                }
                return module199({
                    metadata: {
                        namespace
                    }
                }, t);
            }
        }
    ]);
    return n;
})(module553.Component), c.propTypes = {
    app: module1.object,
    setType: module1.func,
    cluster: module1.string,
    workspace: module1.string,
    namespace: module1.string,
    onDeploy: module1.func
}, c.defaultProps = {
    app: {}
}, i = s)) || i;
export default j;
