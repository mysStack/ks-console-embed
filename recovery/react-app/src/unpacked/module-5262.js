import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-10.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import Module814 from "components/Base/List";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module1024 from "unpacked/module-1024.js";
import module1030 from "unpacked/module-1030.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import module5263 from "unpacked/module-5263.js";
import module14 from "unpacked/module-14.js";
import module186 from "unpacked/module-186.js";
import { trigger } from "utils/action";
import Module5264 from "unpacked/module-5264.js";
import Module5266 from "unpacked/module-5266.js";
import module5268 from "unpacked/module-5268.js";
let d;
function N(e) {
    const t = module14.toJS(module26(e, "annotations"));
    const a = module26(t, '["cni.projectcalico.org/ipv4pools"]', "[]");
    return JSON.parse(a);
}
function T(e, t) {
    const a = module26(module14.toJS(e), "_originData", {});
    module74(a, 'metadata.annotations["cni.projectcalico.org/ipv4pools"]', JSON.stringify(t));
    return a;
}
const R = inject("detailStore", "rootStore")(d = observer(d = trigger(d = ((Component_1)=>{
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
        n.fetchNamespacesList = function() {
            const n_name = n.name;
            n.store.fetchList({
                limit: -1,
                labelSelector: `ippool.network.kubesphere.io/${n_name}`
            });
        };
        n.handleShowForm = function() {
            n.setState({
                showForm: true
            });
        };
        n.handleCancel = function() {
            n.setState({
                showForm: false
            });
        };
        n.handleAdd = (()=>{
            const e = module44(module41.mark(function e(t) {
                let a;
                let r;
                let u;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = N(t);
                                r = n.name;
                                if (a.includes(r)) {
                                    e.next = 7;
                                    break;
                                }
                                a.push(r);
                                u = T(t, a);
                                e.next = 7;
                                return n.store.patchNamespace({
                                    namespace: t.name
                                }, u);
                            case 7:
                                n.handleCancel();
                                n.fetchNamespacesList();
                            case 9:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        })();
        n.handleDelete = function(e) {
            const { workspace, name } = e;
            const data = T(e, module1030(N(e), function(e) {
                return e !== n.name;
            }));
            n.trigger("network.ipool.removeNamespace", {
                namespace: name,
                workspace,
                data,
                title: t("DROP"),
                desc: t("REMOVEALL_IPPOOLL_NAMESPACE_PROJECT_DESC"),
                store: n.store,
                success: function() {
                    n.fetchNamespacesList();
                }
            });
        };
        n.removeAll = function() {
            const list = n.store.list;
            const name = n.detailStore.detail.name;
            const namespaceList = list.data.filter((e)=>N(e).includes(name));
            n.trigger("network.ipool.removeNamespaceAll", {
                title: t("REMOVEALL_IPPOOLL_NAMESPACE_PROJECT"),
                desc: t("REMOVEALL_IPPOOLL_NAMESPACE_PROJECT_DESC"),
                store: n.store,
                namespaceList,
                getData: function(e) {
                    return T(e, module1030(N(e), function(e) {
                        return e !== n.name;
                    }));
                },
                success: function() {
                    n.fetchNamespacesList();
                }
            });
        };
        n.renderTitle = function() {
            return <div className={module5268.titleWrapper}><div className={module5268.title}>{t("NAMESPACE_PL")}</div><module186.Button icon="trash" type="float" disabled={!module1024(n.store.list.data)} onClick={n.removeAll}>{t("REMOVEALL_IPPOOLL_NAMESPACE")}</module186.Button></div>;
        };
        n.detailStore = e.detailStore;
        n.store = new module5263;
        n.state = {
            showForm: false
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchNamespacesList();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const showForm = this.state.showForm;
                return <div>{this.renderTitle()}<div className={module5268.panel}><Module814><Module5264 icon="add" title={t("ADD_IPPOOLL_NAMESPACE")} description={t("ADD_IPPOOLL_NAMESPACE_DESC")} onClick={this.handleShowForm}/>{showForm && <Module5266 onOk={this.handleAdd} onCancel={this.handleCancel} cluster={this.props.match.params.cluster}/>}{this.list.map((a)=><Module814.Item key={a.name} icon="project" title={a.name} description={t("PROJECT")} onDelete={function() {
                        return _this.handleDelete(a);
                    }} details={[
                        {
                            title: module26(_this.namespaceState, a.name, 0),
                            description: t("USED_IP_ADDRESSES")
                        },
                        {
                            title: a.creator || "-",
                            description: t("ADMINISTRATOR")
                        }
                    ]}/>)}</Module814></div></div>;
            }
        },
        {
            key: "namespaceState",
            get: function() {
                const e = module14.toJS(this.detailStore.detail);
                return module26(e, "status.namespaces", {});
            }
        },
        {
            key: "list",
            get: function() {
                const data = module14.toJS(this.store.list).data;
                if (data === undefined) {
                    return [];
                }
                return data;
            }
        },
        {
            key: "name",
            get: function() {
                const detail = this.detailStore.detail;
                return module26(detail, "name", "");
            }
        }
    ]);
    return r;
})(Component)) || d) || d) || d;
export default R;
