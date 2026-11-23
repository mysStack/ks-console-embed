import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module63 from "unpacked/module-63.js";
import { Provider, inject, observer } from "unpacked/module-239.js";
import * as module553 from "unpacked/module-553.js";
import module793 from "unpacked/module-793.js";
import module438 from "stores/cluster";
import module884 from "unpacked/module-884.js";
import { safeParseJSON } from "utils/index";
import { trigger } from "utils/action";
import module4290 from "unpacked/module-4290.js";
import module1856 from "unpacked/module-1856.js";
let i;
const A = inject("rootStore")(i = observer(i = trigger(i = ((e)=>{
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
            customPanelModalVisible: false,
            resourceType: undefined,
            selectedClusterList: [],
            originClusterList: []
        };
        e.store = new module884;
        e.clusterStore = new module438;
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
        e.setClusters = async (a)=>{
            let r;
            localStorage.setItem(`${globals.user.username}-observability`, JSON.stringify(a));
            e.store.setClusters(a);
            r = e.getClustersOriginList();
            e.setState({
                selectedClusterList: r
            }, function() {
                e.hideCustomPanelModal();
            });
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
        e.initData = async function t() {
            await e.initClustersList();
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
                    return !module63(t) && globals.app.hasClusterModule(e.name, "whizard-monitoring");
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
                const isLoading = this.clusterStore.list.isLoading;
                const bannerProps = this.props.bannerProps;
                if (isLoading) {
                    return module553.default.createElement(module186.Loading, {
                        className: "ks-page-loading",
                        size: 28,
                        spinning: isLoading
                    });
                }
                return module553.default.createElement(Provider, {
                    observabilityStore: this.store
                }, module553.default.createElement(module793, {
                    ...bannerProps,
                    icon: "loudspeaker",
                    title: t("WHIZARD_MONITORING.RESOURCE_RANKING_PL"),
                    description: t("WHIZARD_MONITORING.RESOURCE_RANKING_DESC")
                }), module553.default.createElement(module4290, {
                    clusterList: this.state.selectedClusterList,
                    type: this.state.resourceType,
                    showCustomPanelModal: this.showCustomPanelModal
                }), module553.default.createElement(module1856, {
                    visible: this.state.customPanelModalVisible,
                    onOk: this.setClusters,
                    onCancel: this.hideCustomPanelModal,
                    clusters: this.store.clusters
                }));
            }
        }
    ]);
    return r;
})(module553.Component)) || i) || i) || i;
export default A;
