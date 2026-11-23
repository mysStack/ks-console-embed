import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module61 from "./module-61.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module63 from "./module-63.js";
import { Provider, inject, observer } from "./module-239.js";
import * as module553 from "./module-553.js";
import module793 from "./module-793.js";
import module438 from "./module-438.js";
import module884 from "./module-884.js";
import { safeParseJSON } from "./module-52.js";
import { trigger } from "./module-792.js";
import module4290 from "./module-4290.js";
import module1856 from "./module-1856.js";
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
