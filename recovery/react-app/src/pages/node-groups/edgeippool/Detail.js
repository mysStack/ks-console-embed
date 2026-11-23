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
import "unpacked/module-64.js";
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
import module2003 from "unpacked/module-2003.js";
import { compareVersion, getDisplayName, getLocalTime } from "utils/index";
import { trigger } from "utils/action";
import { getOverlayStatus } from "utils/status";
import module5259 from "unpacked/module-5259.js";
let l;
const N = inject("rootStore")(l = observer(l = trigger(l = ((Component_1)=>{
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
        n.fetchData = function() {
            n.store.fetchDetail(n.props.match.params);
        };
        n.getOperations = function() {
            const n_name = n.name;
            const cluster = n.props.match.params.cluster;
            const detail = module14.toJS(n.store.detail);
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    type: "control",
                    onClick: function() {
                        return n.trigger("resource.baseinfo.edit", {
                            type: n_name,
                            detail,
                            success: n.fetchData
                        });
                    }
                },
                {
                    key: "editOverlay",
                    icon: "pen",
                    show: function() {
                        return !n.isOutdated;
                    },
                    text: t("EDIT_OVERLAY"),
                    action: "edit",
                    onClick: function() {
                        n.trigger("network.ipool.editoverlay", {
                            detail,
                            cluster,
                            success: n.fetchData
                        });
                    }
                },
                {
                    key: "viewYaml",
                    icon: "eye",
                    text: t("VIEW_YAML"),
                    action: "view",
                    onClick: function() {
                        return n.trigger("resource.yaml.edit", {
                            detail,
                            readOnly: true
                        });
                    }
                },
                {
                    key: "modify",
                    icon: "enterprise",
                    text: t("ASSIGN_WORKSPACE"),
                    action: "edit",
                    show: function() {
                        return !n.isCalico;
                    },
                    onClick: function() {
                        return n.trigger("network.ipool.assignworkspace", {
                            detail,
                            success: n.fetchData
                        });
                    }
                },
                {
                    key: "autoAssign",
                    icon: "changing-over",
                    text: t("IPPOOL_AUTO_ASSIGN"),
                    show: function() {
                        return !n.isOutdated;
                    },
                    action: "edit",
                    onClick: function() {
                        return n.trigger("network.ipool.autoAssign", {
                            detail,
                            cluster,
                            success: n.fetchData
                        });
                    }
                },
                {
                    key: "enable",
                    icon: "start",
                    text: t("ENABLE"),
                    action: "edit",
                    show: function(e) {
                        return e.disabled && !n.isOutdated;
                    },
                    onClick: function() {
                        n.store.patch(detail, {
                            spec: {
                                disabled: false
                            }
                        }).then(()=>{
                            n.fetchData();
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
                        return !e.disabled && !n.isOutdated;
                    },
                    onClick: function() {
                        n.trigger("network.ipool.disable", {
                            detail,
                            cluster,
                            success: n.fetchData
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
                        return n.trigger("resource.delete", {
                            type: n_name,
                            detail,
                            success: function() {
                                return n.routing.push(n.listUrl);
                            }
                        });
                    }
                }
            ].filter((e)=>!e.show || e.show(detail));
        };
        n.getAttrs = function() {
            const e = module14.toJS(n.store.detail);
            if (!module63(e)) {
                const a = new Netmask(e.cidr);
                const r = getOverlayStatus(e);
                return [
                    !n.isOutdated && {
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
                    !n.isOutdated && {
                        name: t("IPPOOL_OVERLAY_MODE"),
                        value: r.value ? `${r.type}(${r.value})` : r.type
                    },
                    {
                        name: t("MASK"),
                        value: a.mask
                    },
                    {
                        name: t("NETWORK"),
                        value: a.base
                    },
                    {
                        name: t("START_IP_ADDRESS"),
                        value: a.base
                    },
                    {
                        name: t("END_IP_ADDRESS"),
                        value: a.broadcast
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
        n.ippoolStore = new module2003;
        n.store = new (n.ippoolStore.getStoreByCluster(e.match.params.cluster));
        return n;
    }
    module37(r, [
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
                const a = {
                    module: this.module,
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
                return <Module825 stores={stores} routes={this.routes} {...a}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "ippools";
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
                const match = this.props.match;
                const { url, params } = match;
                return url.replace(`/${params.name}`, "");
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
                return module5259(this.isCalico);
            }
        }
    ]);
    return r;
})(Component)) || l) || l) || l;
export default N;
