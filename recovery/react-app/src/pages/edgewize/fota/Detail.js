import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import module63 from "unpacked/module-63.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module796 from "components/Base/Status";
import Module825 from "unpacked/module-825.js";
import { getLocalTime } from "utils/index";
import { trigger } from "utils/action";
import { getAccessNodeDisplayName } from "unpacked/module-983.js";
import module2000 from "unpacked/module-2000.js";
import routes from "unpacked/module-5234.js";
let o;
const C = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = a.call(this, ...o_1);
        e.store = new module2000;
        e.startPolling = function() {
            e.interval = setInterval(()=>{
                e.fetchData();
            }, 1000);
        };
        e.fetchData = function(t) {
            const params = e.props.match.params;
            const { cluster, node } = params;
            e.store.fetchDetail({
                name: node,
                cluster
            }, t);
        };
        e.renderSoftUninstalledStatus = function() {
            return <div style={{
                display: "flex",
                alignItems: "center",
                gap: "4px"
            }}><module186.Icon name="information" color={{
                primary: "#ffffff"
            }}/><span>{t("NODE_SOFT_STATUS_UNINSTALLED")}</span></div>;
        };
        e.getSoftsInfo = function(a, name) {
            if (module63(a)) {
                return [
                    {
                        name,
                        value: e.renderSoftUninstalledStatus()
                    }
                ];
            }
            return a.map(({ name, version })=>({
                    name: t("SOFT_VERSION_DESC", {
                        name
                    }),
                    value: version
                }));
        };
        e.enabledActions = function() {
            const status = e.store.detail.status;
            if (status === "registering") {
                return [];
            }
            if (status === "registerFail") {
                return [
                    {
                        key: "reRegister",
                        icon: "login-left-duotone",
                        text: t("RE_REGISTER"),
                        action: "edit",
                        onClick: function() {
                            e.trigger("node.edge.register", {
                                cluster: e.cluster,
                                detail: e.store.detail,
                                title: t("RE_REGISTER"),
                                reRegister: true,
                                success: e.fetchData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function() {
                            e.trigger("resource.delete", {
                                type: "ACCESS_NODE",
                                cluster: e.cluster,
                                detail: e.store.detail,
                                resource: e.store.detail.name,
                                onOk: function() {
                                    const t = [
                                        {
                                            nodeName: e.store.detail.name,
                                            taskName: "del_node"
                                        }
                                    ];
                                    return e.store.patchNode(e.cluster, t);
                                },
                                success: function() {
                                    module240.success(t("DELETED_SUCCESSFULLY"));
                                    e.fetchData();
                                }
                            });
                        }
                    }
                ];
            }
            const n = [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    show: status !== "registerFail",
                    onClick: function() {
                        return e.trigger("node.baseinfo.edit", {
                            cluster: e.cluster,
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editSoftwareInfo",
                    icon: "pen",
                    text: t("EDIT_SOFTWARE_INFO"),
                    action: "edit",
                    onClick: function() {
                        const t = module14.toJS(e.store.detail);
                        const { name, edgeSofts, versionList, containerEngineSofts } = t;
                        e.trigger("node.softInfo", {
                            cluster: e.cluster,
                            nodeName: name,
                            versionList,
                            formData: {
                                containerEngineSofts,
                                edgeSofts
                            },
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "syncTime",
                    icon: "loading-circle-duotone",
                    text: t("SYNC_TIME"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("node.sync.time", {
                            cluster: e.cluster,
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                }
            ];
            if (status === "unmanaged") {
                return [
                    ...n,
                    {
                        key: "manage",
                        icon: "download-box-2-duotone",
                        text: t("ACCESS_MANAGE"),
                        action: "edit",
                        onClick: function() {
                            return e.trigger("node.edge.manage", {
                                cluster: e.cluster,
                                detail: e.store.detail,
                                success: e.fetchData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function() {
                            e.trigger("resource.delete", {
                                type: "ACCESS_NODE",
                                cluster: e.cluster,
                                detail: e.store.detail,
                                resource: e.store.detail.name,
                                onOk: function() {
                                    const t = [
                                        {
                                            nodeName: e.store.detail.name,
                                            taskName: "del_node"
                                        }
                                    ];
                                    return e.store.patchNode(e.cluster, t);
                                },
                                success: function() {
                                    module240.success(t("DELETED_SUCCESSFULLY"));
                                    e.fetchData();
                                }
                            });
                        }
                    }
                ];
            }
            return [
                ...n,
                {
                    key: "cancelManage",
                    icon: "trash",
                    text: t("CANCEL_MANAGED"),
                    action: "delete",
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            title: t("CANCEL_MANAGED"),
                            type: "ACCESS_NODE",
                            cluster: e.cluster,
                            detail: e.store.detail,
                            resource: e.store.detail.name,
                            onOk: function() {
                                const t = [
                                    {
                                        nodeName: e.store.detail.name,
                                        taskName: "cancel_managed"
                                    }
                                ];
                                return e.store.patchNode(e.cluster, t);
                            },
                            success: function() {
                                module240.success({
                                    content: t("CANCEL_MANAGED_SUCCESSFULLY")
                                });
                                e.fetchData;
                            }
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const a = module14.toJS(e.store.detail);
            if (!module63(a)) {
                const { arch, status, nodeIP, osType, timesync, osVersion, edgeSofts, createTime, kernelVersion, specification, agentUpdateTime, containerEngineSofts } = a;
                return [
                    {
                        name: t("STATUS"),
                        value: <Module796 type={status} name={t(`NODE_STATUS_${status.toUpperCase()}`)}/>
                    },
                    {
                        name: t("NODE_ACCESS_IP"),
                        value: nodeIP
                    },
                    {
                        name: t("CREATION_TIME"),
                        value: createTime ? getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss") : "-"
                    },
                    {
                        name: t("ARCHITECTURE"),
                        value: arch
                    },
                    {
                        name: t("OS_TYPE"),
                        value: osType
                    },
                    {
                        name: t("OS_VERSION"),
                        value: osVersion
                    },
                    {
                        name: t("SPECIFICATION"),
                        value: specification
                    },
                    {
                        name: t("EDGE_NODE_TIME"),
                        value: timesync ? getLocalTime(timesync).format("YYYY-MM-DD HH:mm:ss") : "-"
                    },
                    {
                        name: t("KERNEL_VERSION"),
                        value: kernelVersion
                    }
                ].concat(module61(e.getSoftsInfo(containerEngineSofts, t("CONTAINER_ENGINE"))), module61(e.getSoftsInfo(edgeSofts, t("EDGE_SOFT"))), [
                    {
                        name: t("SYNC_TIME_LATELY"),
                        value: getLocalTime(agentUpdateTime).format("YYYY-MM-DD HH:mm:ss")
                    }
                ]).filter((e)=>!!e.value);
            }
        };
        e.handleCordon = function() {
            const t = module14.toJS(e.store.detail);
            if (t.unschedulable) {
                e.store.uncordon(t).then(e.fetchData);
            } else {
                e.store.cordon(t).then(e.fetchData);
            }
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData(true);
                setTimeout(this.startPolling, 1000);
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.interval) {
                    clearInterval(this.interval);
                }
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
                    name: getAccessNodeDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.enabledActions(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("NODE_ACCESS_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 icon="edge-node" stores={stores} routes={routes} {...a}/>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "module",
            get: function() {
                return "edgenodes";
            }
        },
        {
            key: "name",
            get: function() {
                return "EDGE_NODE";
            }
        },
        {
            key: "listUrl",
            get: function() {
                return `/v2/edgewize/clusters/${this.cluster}/fota`;
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default C;
