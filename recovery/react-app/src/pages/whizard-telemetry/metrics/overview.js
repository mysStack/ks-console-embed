import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module63 from "unpacked/module-63.js";
import { Provider, inject, observer } from "unpacked/module-239.js";
import * as module553 from "unpacked/module-553.js";
import module1236 from "unpacked/module-1236.js";
import module438 from "stores/cluster";
import module946 from "unpacked/module-946.js";
import module884 from "unpacked/module-884.js";
import module4299 from "unpacked/module-4299.js";
import module439 from "stores/project";
import module445 from "stores/workspace";
import { safeParseJSON } from "utils/index";
import { trigger } from "utils/action";
import module3 from "unpacked/module-3.js";
import module4300 from "unpacked/module-4300.js";
import module4306 from "unpacked/module-4306.js";
import module1856 from "unpacked/module-1856.js";
import module4313 from "unpacked/module-4313.js";
import module4315 from "unpacked/module-4315.js";
import module4317 from "unpacked/module-4317.js";
import module4321 from "unpacked/module-4321.js";
let i;
const x = inject("rootStore")(i = observer(i = trigger(i = ((e)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            gridType: "row",
            whizardConfigVisible: false,
            customPanelModalVisible: false,
            rankModalVisible: false,
            resourceType: undefined,
            selectedClusterList: [],
            originClusterList: [],
            alerts: [],
            fetchFin: false,
            isHideClusterList: false
        };
        e.store = new module884;
        e.tagsStore = new module946;
        e.clusterStore = new module438;
        e.alertStore = new module1236;
        e.workspaceStore = new module445;
        e.projectStore = new module439;
        e.whizardStore = new module4299;
        e.handleGridType = function(gridType) {
            e.setState({
                gridType
            });
        };
        e.showCustomPanelModal = function() {
            e.setState({
                customPanelModalVisible: true
            });
        };
        e.hideCustomPanelModal = function() {
            e.setState({
                customPanelModalVisible: false
            });
        };
        e.showWhizardConfigModal = function() {
            e.trigger("whizard.create", {
                store: e.whizardStore,
                rootStore: e.props.rootStore
            });
        };
        e.showRankModal = function(resourceType) {
            if (resourceType) {
                e.setState({
                    resourceType
                });
            } else {
                e.setState({
                    resourceType: undefined
                });
            }
            e.setState({
                rankModalVisible: true
            });
        };
        e.hideRankModal = function() {
            e.setState({
                rankModalVisible: false
            });
        };
        e.setClusters = async (a)=>{
            let r;
            localStorage.setItem(`${globals.user.username}-observability`, JSON.stringify(a));
            e.store.setClusters(a);
            r = e.getClustersOriginList();
            e.setState({
                selectedClusterList: r
            }, module44(module41.mark(function* t() {
                yield Promise.all([
                    e.store.getBaseResourcesSummary(),
                    e.store.fetchAllMetricsData(),
                    e.store.fetchRoleAndMember(),
                    e.store.fetchAlertData(),
                    e.getAlert()
                ]);
                e.hideCustomPanelModal();
            })));
        };
        e.initClustersList = async function t() {
            let a;
            let r;
            let n;
            let u;
            if (globals.app.hasPermission({
                module: "clusters",
                action: "manage"
            })) {
                await e.clusterStore.fetchList({
                    limit: -1
                });
            } else {
                await e.clusterStore.fetchList({
                    limit: -1,
                    from: "resource",
                    "cluster.kubesphere.io/visibility": "public",
                    labelSelector: "!cluster-role.kubesphere.io/edge"
                });
            }
            if ((a = safeParseJSON(localStorage.getItem(`${globals.user.username}-observability`), [])).length > 0) {
                e.store.setClusters(a);
            } else {
                r = e.clusterStore.list.data;
                n = (r === undefined ? [] : r).map((e)=>({
                        name: e.name
                    }));
                localStorage.setItem(`${globals.user.username}-observability`, JSON.stringify(n));
                e.store.setClusters(n);
            }
            u = e.getClustersOriginList();
            e.setState({
                selectedClusterList: u
            });
        };
        e.getAlert = module44(module41.mark(function t() {
            let a;
            let r;
            let originClusterList;
            let alerts;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            if (e.hasAlerting) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return");
                        case 2:
                            a = e.state.selectedClusterList.map((e)=>e.name).join("|");
                            r = e.clusterStore.list.data;
                            originClusterList = r === undefined ? [] : r;
                            t.next = 6;
                            return e.alertStore.fetchList({
                                limit: 5,
                                label_matcher: `{cluster=~"${a}",severity=~"warning|error|critical"}`,
                                allBuiltin: true,
                                sortBy: "activeAt"
                            });
                        case 6:
                            alerts = t.sent;
                            e.setState({
                                alerts,
                                originClusterList
                            });
                        case 8:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        e.initData = async function t() {
            await e.initClustersList();
            await Promise.all([
                e.store.getBaseResourcesSummary(),
                e.store.fetchAllMetricsData(),
                e.store.fetchRoleAndMember(),
                e.tagsStore.fetchGroupList(),
                e.store.fetchAlertData(),
                e.getAlert()
            ]);
        };
        e.handleClusterList = function() {
            e.setState({
                isHideClusterList: !e.state.isHideClusterList
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "getClustersOriginList",
            value: function() {
                const data = this.clusterStore.list.data;
                const t = data === undefined ? [] : data;
                const clusters = this.store.clusters;
                const r = clusters === undefined ? [] : clusters;
                const n = t.filter((e)=>{
                    const t = r.filter((t)=>t.name === e.name);
                    return !module63(t);
                });
                if (!module63(n)) {
                    const u = n.filter((e)=>e && e.isHost);
                    const l = n.filter((e)=>e && !e.isHost);
                    return [].concat(module61(u), module61(l));
                }
                return [];
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.initData();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.setState = function() {
                    return false;
                };
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const isLoading = this.clusterStore.list.isLoading;
                const isHideClusterList = this.state.isHideClusterList;
                if (isLoading) {
                    return module553.default.createElement(module186.Loading, {
                        className: "ks-page-loading",
                        size: 28,
                        spinning: isLoading
                    });
                }
                return module553.default.createElement(Provider, {
                    observabilityStore: this.store
                }, module553.default.createElement("div", {
                    className: module3(module4321.contentWrapper, module31({}, module4321.collapse, isHideClusterList))
                }, module553.default.createElement("div", {
                    className: module4321.rightWrapper
                }, module553.default.createElement("div", {
                    className: module4321.mainTitleWrapper
                }, module553.default.createElement("h3", {
                    className: module4321.mainTitle
                }, t("OVERVIEW")), module553.default.createElement("div", {
                    className: module4321.mainButtonWrapper
                }, module553.default.createElement(module186.Button, {
                    className: module4321.clusterListButton,
                    onClick: this.handleClusterList
                }, module553.default.createElement("img", {
                    src: "/assets/whizard-telemetry-left.svg",
                    alt: ""
                }), t(isHideClusterList ? "WHIZARD_MONITORING.UNFOLD_CLUSTER_LIST" : "WHIZARD_MONITORING.COLLAPSE_CLUSTER_LIST")), module553.default.createElement(module186.Button, {
                    type: "control",
                    icon: "layout",
                    iconType: "light",
                    className: module4321.mainFilterClusterButton,
                    onClick: this.showCustomPanelModal
                }, t("SELECT_CLUSTER")), module553.default.createElement(module186.Tooltip, {
                    content: t("COMPONENT_PARAMETER_CONFIG"),
                    placement: "topLeft"
                }, module553.default.createElement(module186.Button, {
                    type: "control",
                    iconType: "light",
                    className: module4321.mainWhizardSettingButton,
                    icon: "cogwheel",
                    onClick: this.showWhizardConfigModal
                })))), module553.default.createElement(module4315, {
                    resources: this.store.baseResourcesSummary,
                    showResourceRankModal: this.showRankModal
                }), module553.default.createElement("div", {
                    className: module4321.customWrapper
                }, module553.default.createElement(module4306, {
                    monitorData: this.store.monitorData
                }), this.hasAlerting && module553.default.createElement(module4300, {
                    resources: this.store.alertData,
                    alerts: this.state.alerts,
                    originClusterList: this.state.originClusterList
                }), module553.default.createElement(module4313, null))), module553.default.createElement("div", {
                    className: module4321.clustersListWrapper
                }, module553.default.createElement("div", {
                    className: module4321.clustersListHeader
                }, module553.default.createElement("p", null, t("CLUSTER_PL")), module553.default.createElement("div", {
                    className: module4321.clusterShowTypeTabs
                }, module553.default.createElement(module186.RadioGroup, {
                    mode: "button",
                    buttonWidth: 32,
                    value: this.state.gridType,
                    onChange: this.handleGridType
                }, module553.default.createElement(module186.RadioButton, {
                    value: "row",
                    key: "row"
                }, module553.default.createElement(module186.Icon, {
                    name: "grid-row",
                    size: 16
                })), module553.default.createElement(module186.RadioButton, {
                    value: "list",
                    key: "list"
                }, module553.default.createElement(module186.Icon, {
                    name: "grid-list",
                    size: 16
                }))))), module553.default.createElement("div", {
                    className: module4321.clustersList
                }, this.state.selectedClusterList.map((clusterDetail)=>module553.default.createElement(module4317, {
                        key: clusterDetail.uid,
                        gridType: _this.state.gridType,
                        tagGroupList: _this.tagsStore.tags,
                        clusterDetail
                    }))))), module553.default.createElement(module1856, {
                    visible: this.state.customPanelModalVisible,
                    onOk: this.setClusters,
                    onCancel: this.hideCustomPanelModal,
                    clusters: this.store.clusters
                }));
            }
        },
        {
            key: "hasAlerting",
            get: function() {
                return globals.app.hasKSModule("whizard") && globals.app.hasKSModule("whizard-alerting");
            }
        }
    ]);
    return r;
})(module553.Component)) || i) || i) || i;
export default x;
