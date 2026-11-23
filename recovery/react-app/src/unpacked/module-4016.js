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
import module4020 from "unpacked/module-4020.js";
import module14 from "unpacked/module-14.js";
import module186 from "unpacked/module-186.js";
import { trigger } from "utils/action";
import Module4021 from "unpacked/module-4021.js";
import Module4023 from "unpacked/module-4023.js";
import module4025 from "unpacked/module-4025.js";
let f;
function D(e) {
    const t = module14.toJS(module26(e, "annotations"));
    const r = module26(t, '["cni.projectcalico.org/ipv4pools"]', "[]");
    return JSON.parse(r);
}
function A(e, t) {
    const r = module26(module14.toJS(e), "_originData", {});
    module74(r, 'metadata.annotations["cni.projectcalico.org/ipv4pools"]', JSON.stringify(t));
    return r;
}
const N = inject("detailStore", "rootStore")(f = observer(f = trigger(f = ((Component_1)=>{
    module55(n, Component_1);
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.fetchNamespacesList = function() {
            const a_name = a.name;
            const cluster = a.props.match.params.cluster;
            a.store.fetchList({
                cluster,
                limit: -1,
                labelSelector: `ippool.network.kubesphere.io/${a_name}`
            });
        };
        a.handleShowForm = function() {
            a.setState({
                showForm: true
            });
        };
        a.handleCancel = function() {
            a.setState({
                showForm: false
            });
        };
        a.handleAdd = (()=>{
            const e = module44(module41.mark(function e(t) {
                let r;
                let n;
                let u;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                r = D(t);
                                n = a.name;
                                if (r.includes(n)) {
                                    e.next = 7;
                                    break;
                                }
                                r.push(n);
                                u = A(t, r);
                                e.next = 7;
                                return a.store.patchNamespace({
                                    cluster: a.cluster,
                                    namespace: t.name
                                }, u);
                            case 7:
                                a.handleCancel();
                                a.fetchNamespacesList();
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
        a.handleDelete = function(e) {
            const { workspace, name } = e;
            const data = A(e, module1030(D(e), function(e) {
                return e !== a.name;
            }));
            a.trigger("network.ipool.removeNamespace", {
                namespace: name,
                workspace,
                cluster: a.cluster,
                data,
                title: t("DROP"),
                desc: t("REMOVEALL_IPPOOLL_NAMESPACE_PROJECT_DESC"),
                store: a.store,
                success: function() {
                    a.fetchNamespacesList();
                }
            });
        };
        a.removeAll = function() {
            const list = a.store.list;
            const name = a.detailStore.detail.name;
            const namespaceList = list.data.filter((e)=>D(e).includes(name));
            a.trigger("network.ipool.removeNamespaceAll", {
                title: t("REMOVEALL_IPPOOLL_NAMESPACE_PROJECT"),
                desc: t("REMOVEALL_IPPOOLL_NAMESPACE_PROJECT_DESC"),
                store: a.store,
                namespaceList,
                cluster: a.cluster,
                getData: function(e) {
                    return A(e, module1030(D(e), function(e) {
                        return e !== a.name;
                    }));
                },
                success: function() {
                    a.fetchNamespacesList();
                }
            });
        };
        a.renderTitle = function() {
            return <div className={module4025.titleWrapper}><div className={module4025.title}>{t("NAMESPACE_PL")}</div><module186.Button icon="trash" type="float" disabled={!module1024(a.store.list.data)} onClick={a.removeAll}>{t("REMOVEALL_IPPOOLL_NAMESPACE")}</module186.Button></div>;
        };
        a.detailStore = e.detailStore;
        a.store = new module4020;
        a.state = {
            showForm: false
        };
        return a;
    }
    module37(n, [
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
                return <div>{this.renderTitle()}<div className={module4025.panel}><Module814><Module4021 icon="add" title={t("ADD_IPPOOLL_NAMESPACE")} description={t("ADD_IPPOOLL_NAMESPACE_DESC")} onClick={this.handleShowForm}/>{showForm && <Module4023 onOk={this.handleAdd} onCancel={this.handleCancel} cluster={this.props.match.params.cluster}/>}{this.list.map((r)=><Module814.Item key={r.name} icon="project" title={r.name} description={t("PROJECT")} onDelete={function() {
                        return _this.handleDelete(r);
                    }} details={[
                        {
                            title: module26(_this.namespaceState, r.name, 0),
                            description: t("USED_IP_ADDRESSES")
                        },
                        {
                            title: r.creator || "-",
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
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
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
    return n;
})(Component)) || f) || f) || f;
export default N;
