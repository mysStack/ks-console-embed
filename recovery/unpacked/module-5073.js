import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-109.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module1110 from "./module-1110.js";
import Module922 from "./module-922.js";
import Module1144 from "./module-1144.js";
import { trigger } from "./module-792.js";
import module26 from "./module-26.js";
import routes from "./module-5075.js";
let o;
const _ = inject("rootStore", "devopsStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.state = {
            showEdit: false,
            showYamlEdit: false,
            deleteModule: false,
            isLoading: true
        };
        e.refreshTimer = setInterval(()=>e.refreshHandler(), 4000);
        e.store = new module1110(e.module);
        e.refreshHandler = function() {
            if (e.isRuning) {
                e.store.fetchDetail();
            } else {
                clearInterval(e.refreshTimer);
                e.refreshTimer = null;
            }
        };
        e.fetchData = function() {
            const params = e.props.match.params;
            e.store.setParams(params);
            e.store.fetchDetail();
        };
        e.getOperations = function() {
            return [
                {
                    key: "edit",
                    type: "control",
                    text: t("EDIT"),
                    action: "edit",
                    onClick: function() {
                        e.trigger("devops.credential.edit", {
                            title: t("Edit Credential"),
                            formTemplate: e.store.detail,
                            cluster: e.cluster,
                            devops: e.devops,
                            isEditMode: true,
                            success: function() {
                                e.store.fetchDetail();
                            }
                        });
                    }
                },
                {
                    key: "delete",
                    type: "danger",
                    text: t("DELETE"),
                    action: "delete",
                    onClick: function() {
                        e.trigger("resource.delete", {
                            type: "CREDENTIAL",
                            detail: e.store.detail,
                            success: function() {
                                const params = e.props.match.params;
                                const { devops, workspace, cluster } = params;
                                e.routing.push(`/${workspace}/clusters/${cluster}/devops/${devops}/${e.module}`);
                            }
                        });
                    }
                }
            ];
        };
        e.getPipelineStatus = function(e) {
            return {
                ...{
                    failed: {
                        type: "failure",
                        label: t("FAILED")
                    },
                    pending: {
                        type: "running",
                        label: t("RUNNING")
                    },
                    working: {
                        type: "running",
                        label: t("RUNNING")
                    },
                    successful: {
                        type: "success",
                        label: t("SUCCESSFUL")
                    }
                }[e]
            };
        };
        e.getAttrs = function() {
            const detail = e.store.detail;
            const n = module26(detail, 'annotations["credential.devops.kubesphere.io/syncstatus"]');
            return [
                {
                    name: t("TYPE"),
                    value: t(detail.type)
                },
                {
                    name: t("DESCRIPTION"),
                    value: detail.description
                },
                {
                    name: t("SYNC_STATUS"),
                    value: <Module922 {...e.getPipelineStatus(n)}/>
                }
            ];
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
            key: "componentDidUpdate",
            value: function() {
                const _this = this;
                if (this.refreshTimer === null && this.isRuning) {
                    this.refreshTimer = setInterval(()=>_this.refreshHandler(), 4000);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                clearInterval(this.refreshTimer);
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.store.detail;
                const stores = {
                    detailStore: this.store
                };
                const n = {
                    module: this.module,
                    name: detail.id,
                    desc: detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("CREDENTIAL_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module1144 routes={routes} {...n} stores={stores}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "credentials";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, devops, cluster } = params;
                return `/${workspace}/clusters/${cluster}/devops/${devops}/credentials`;
            }
        },
        {
            key: "devops",
            get: function() {
                return this.props.match.params.devops;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "isRuning",
            get: function() {
                const detail = this.store.detail;
                const t = module26(detail, 'annotations["credential.devops.kubesphere.io/syncstatus"]');
                return t === "pending" || t === "working";
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default _;
