import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module825 from "unpacked/module-825.js";
import Module796 from "components/Base/Status";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { Netmask } from "unpacked/module-478.js";
import { Component } from "unpacked/module-553.js";
import module1307 from "unpacked/module-1307.js";
import { compareVersion, getDisplayName, getLocalTime } from "utils/index";
import { trigger } from "utils/action";
import { getOverlayStatus } from "utils/status";
import module4013 from "unpacked/module-4013.js";
let o;
const D = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
        a.fetchData = function() {
            a.store.fetchDetail(a.props.match.params);
        };
        a.handleNatOutgoing = function() {
            const e = module14.toJS(a.store.detail);
            const r = module26(e, "natOutgoing", false);
            a.store.patch(e, {
                spec: {
                    natOutgoing: !r
                }
            }).then(()=>{
                if (r) {
                    module240.success({
                        content: `${t("CLOSED_SUCCESSFUL")}`
                    });
                } else {
                    module240.success({
                        content: `${t("OPENED_SUCCESSFUL")}`
                    });
                }
                a.fetchData();
            });
        };
        a.getOperations = function() {
            const a_name = a.name;
            const cluster = a.props.match.params.cluster;
            const detail = module14.toJS(a.store.detail);
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    type: "control",
                    onClick: function() {
                        return a.trigger("resource.baseinfo.edit", {
                            type: a_name,
                            detail,
                            success: a.fetchData
                        });
                    }
                },
                {
                    key: "editOverlay",
                    icon: "pen",
                    show: function() {
                        return !a.isOutdated;
                    },
                    text: t("EDIT_OVERLAY"),
                    action: "edit",
                    onClick: function() {
                        a.trigger("network.ipool.editoverlay", {
                            detail,
                            cluster,
                            success: a.fetchData
                        });
                    }
                },
                {
                    key: "viewYaml",
                    icon: "eye",
                    text: t("VIEW_YAML"),
                    action: "view",
                    onClick: function() {
                        return a.trigger("resource.yaml.edit", {
                            detail,
                            readOnly: true
                        });
                    }
                },
                {
                    key: "editYaml",
                    icon: "pen",
                    text: t("EDIT_YAML"),
                    action: "edit",
                    onClick: function() {
                        return a.trigger("resource.yaml.edit", {
                            detail
                        });
                    }
                },
                {
                    key: "modify",
                    icon: "enterprise",
                    text: t("ASSIGN_WORKSPACE"),
                    action: "edit",
                    show: function() {
                        return !a.isCalico;
                    },
                    onClick: function() {
                        return a.trigger("network.ipool.assignworkspace", {
                            detail,
                            success: a.fetchData
                        });
                    }
                },
                {
                    key: "OnOutgoing",
                    icon: "start",
                    text: t("CLOSE_NAT_OUTGOING"),
                    action: "edit",
                    show: function(e) {
                        return !a.isOutdated && e.natOutgoing;
                    },
                    onClick: a.handleNatOutgoing
                },
                {
                    key: "OffOutgoing",
                    icon: "stop",
                    text: t("OPEN_NAT_OUTGOING"),
                    action: "edit",
                    show: function(e) {
                        return !a.isOutdated && !e.natOutgoing;
                    },
                    onClick: a.handleNatOutgoing
                },
                {
                    key: "enable",
                    icon: "start",
                    text: t("ENABLE"),
                    action: "edit",
                    show: function(e) {
                        return e.disabled && !a.isOutdated;
                    },
                    onClick: function() {
                        a.store.patch(detail, {
                            spec: {
                                disabled: false
                            }
                        }).then(()=>{
                            a.fetchData();
                            module240.success({
                                content: `${t("ENABLE_SUCCESSFUL")}`
                            });
                        });
                    }
                },
                {
                    key: "disable",
                    icon: "stop",
                    text: t("DISABLE"),
                    action: "edit",
                    show: function(e) {
                        return !e.disabled && !a.isOutdated;
                    },
                    onClick: function() {
                        a.trigger("network.ipool.disable", {
                            detail,
                            cluster,
                            success: a.fetchData
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    onClick: function() {
                        return a.trigger("resource.delete", {
                            type: a_name,
                            detail,
                            success: function() {
                                return a.routing.push(a.listUrl);
                            }
                        });
                    }
                }
            ].filter((e)=>!e.show || e.show(detail));
        };
        a.getAttrs = function() {
            const e = module14.toJS(a.store.detail);
            if (!module63(e)) {
                const r = new Netmask(e.cidr);
                const n = getOverlayStatus(e);
                return [
                    !a.isOutdated && {
                        name: t("STATUS"),
                        value: <Module796 type={e.disabled ? "Disabled" : "Running"} name={t(e.disabled ? "DISABLED" : "ENABLED")}/>
                    },
                    {
                        name: t("NETWORK_SEGMENT"),
                        value: e.cidr
                    },
                    {
                        name: t("USED_IP_ADDRESSES"),
                        value: module26(e, "status.capacity", 0) - module26(e, "status.unallocated", 0)
                    },
                    {
                        name: t("IPPOOL_BLOCK_SIZE"),
                        value: e.blockSize
                    },
                    {
                        name: t("NAT outgoing"),
                        value: e.natOutgoing ? t("OPENED") : t("CLOSED")
                    },
                    !a.isOutdated && {
                        name: t("IPPOOL_OVERLAY_MODE"),
                        value: n.value ? `${n.type}(${n.value})` : n.type
                    },
                    {
                        name: t("MASK"),
                        value: r.mask
                    },
                    {
                        name: t("NETWORK"),
                        value: r.base
                    },
                    {
                        name: t("START_IP_ADDRESS"),
                        value: r.base
                    },
                    {
                        name: t("END_IP_ADDRESS"),
                        value: r.broadcast
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(e.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: e.creator || "-"
                    }
                ].filter(Boolean);
            }
        };
        a.ippoolStore = new module1307;
        a.store = new (a.ippoolStore.getStoreByCluster(e.match.params.cluster));
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const r = {
                    module: this.module,
                    authKey: this.authKey,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("POD_IP_POOL_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 stores={stores} routes={this.routes} {...r}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "ippools";
            }
        },
        {
            key: "authKey",
            get: function() {
                return "network";
            }
        },
        {
            key: "name",
            get: function() {
                return "POD_IP_POOL";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return `/clusters/${cluster}/ippools`;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "params",
            get: function() {
                return module26(this.props.match, "params", {});
            }
        },
        {
            key: "isOutdated",
            get: function() {
                if (!globals.app.isMultiCluster) {
                    return false;
                }
                const e = module26(globals, `clusterConfig.${this.props.match.params.cluster}.ksVersion`);
                return compareVersion(e, "3.4.0") < 0;
            }
        },
        {
            key: "isCalico",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return this.ippoolStore.isCalico(cluster);
            }
        },
        {
            key: "routes",
            get: function() {
                return module4013(this.isCalico);
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default D;
