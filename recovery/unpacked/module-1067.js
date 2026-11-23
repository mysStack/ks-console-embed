import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component, createRef } from "./module-553.js";
import { observer } from "./module-239.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import Module818 from "./module-818.js";
import Module3501 from "./module-3501.js";
import Module1763 from "./module-1763.js";
import module1764 from "./module-1764.js";
import module1765 from "./module-1765.js";
import module438 from "./module-438.js";
import module955 from "./module-955.js";
import { learnMoreTip } from "./module-52.js";
import { CLUSTER_PROVIDER_ICON } from "./module-72.js";
import module14 from "./module-14.js";
import module3504 from "./module-3504.js";
let u;
let o;
let i;
const P = module1764(u = observer((o = ((Component_1)=>{
    module55(n, Component_1);
    let a;
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
    function n(...a_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...a_1);
        e.state = {
            cluster: e.props.cluster || ""
        };
        e.store = new module1765;
        e.clusterStore = e.props.isEdgeWize ? new module955 : new module438;
        e.terminalRef = createRef();
        module65(e, "url", i, module88(e));
        e.handleClusterChange = function(t) {
            e.setState({
                cluster: t
            }, function() {
                e.getKubeWebUrl(t);
            });
        };
        e.onTipsToggle = function() {
            const current = e.terminalRef.current;
            if (current) {
                current.resizeTerminal();
            }
        };
        e.getKubeWebUrl = async (cluster)=>{
            await e.store.fetchKubeCtl({
                cluster
            });
            e.url = await e.store.kubeWebsocketUrl();
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "fetchData",
            value: (a = module44(module41.mark(function e() {
                let t;
                const _this = this;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if (!this.props.nodename) {
                                    e.next = 4;
                                    break;
                                }
                                this.store.setNodename(this.props.nodename);
                                this.getKubeWebUrl(this.props.cluster);
                                return e.abrupt("return");
                            case 4:
                                if (globals.app.isMultiCluster) {
                                    e.next = 7;
                                    break;
                                }
                                this.getKubeWebUrl();
                                return e.abrupt("return");
                            case 7:
                                if (t = this.props.cluster) {
                                    e.next = 15;
                                    break;
                                }
                                e.next = 11;
                                return this.clusterStore.fetchListByK8s();
                            case 11:
                                t = module26(this.clusters, "[0].value");
                                this.setState({
                                    cluster: t
                                }, function() {
                                    _this.getKubeWebUrl(t);
                                });
                                e.next = 16;
                                break;
                            case 15:
                                this.getKubeWebUrl(t);
                            case 16:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function() {
                return a.apply(this, arguments);
            })
        },
        {
            key: "render",
            value: function() {
                return <Module1763 wrapperClassName={module3504.kubectl} onToggleTip={this.onTipsToggle} localStorageKey="kubectl-doc" article={this.renderTerminal()} tips={this.renderTips()} onToggle={this.onTipsToggle}/>;
            }
        },
        {
            key: "renderTips",
            value: function() {
                const e = t.html("KUBECTL_TIP");
                return <div>{!this.props.cluster && globals.app.isMultiCluster && !this.props.isEdgeNode && <Module818 searchable options={this.clusters} value={this.state.cluster} onChange={this.handleClusterChange}/>}<div className={module3("markdown-body", module3504.doc)}>{learnMoreTip(e)}</div></div>;
            }
        },
        {
            key: "renderTerminal",
            value: function() {
                const isEdgeNode = this.props.isEdgeNode;
                return <div className={module3(module3504.pane, module3504.terminal)}><Module3501 isLoading={this.store.kubectl.isLoading} url={this.url} ref={this.terminalRef} isEdgeNode={isEdgeNode}/></div>;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.clusterStore.list.data.filter((e)=>e.isReady).map((e)=>({
                        label: e.name,
                        value: e.name,
                        icon: CLUSTER_PROVIDER_ICON[e.provider] || "kubernetes",
                        version: module26(e, "configz.ksVersion"),
                        description: e.provider
                    }));
            }
        }
    ]);
    return n;
})(Component), i = module49(o.prototype, "url", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), u = o)) || u) || u;
export default P;
