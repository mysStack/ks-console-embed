import "unpacked/module-6.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-188.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import Module789 from "components/Base/Avatar";
import Module802 from "components/Base/Card";
import Module796 from "components/Base/Status";
import Module791 from "components/Base/Text";
import module240 from "unpacked/module-240.js";
import Module793 from "unpacked/module-793.js";
import module794, { ListPage } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import { Component, useEffect, useMemo } from "unpacked/module-553.js";
import module1307 from "unpacked/module-1307.js";
import { getDisplayName, showNameAndAlias } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import { getOverlayStatus } from "utils/status";
import module244 from "unpacked/module-244.js";
import { inject } from "unpacked/module-239.js";
import module14 from "unpacked/module-14.js";
import module3807 from "unpacked/module-3807.js";
let u;
const J = module794({
    module: "ippools",
    name: "POD_IP_POOL",
    authKey: "network"
})(u = ((Component_1)=>{
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
        a.handleNatOutgoing = function(e) {
            const r = module14.toJS(e);
            const r__originData = r._originData;
            const o = module26(r, "natOutgoing", false);
            module74(r__originData, "spec.natOutgoing", !o);
            a.store.patch(r, {
                spec: {
                    natOutgoing: !o
                }
            }).then(()=>{
                if (o) {
                    module240.success({
                        content: `${t("CLOSED_SUCCESSFUL")}`
                    });
                } else {
                    module240.success({
                        content: `${t("OPENED_SUCCESSFUL")}`
                    });
                }
                a.props.rootStore.routing.query();
            });
        };
        a.getColumns = function() {
            const a_props = a.props;
            const { getSortOrder, module, getFilteredValue } = a_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    key: "name",
                    render: function(e, t) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(t)} desc={t.description || "-"} to={`${a.props.match.url}/${e}`}/>;
                    }
                },
                a.isOutdated ? null : {
                    title: t("STATUS"),
                    dataIndex: "status",
                    filters: a.getDisabledFilters(),
                    filteredValue: getFilteredValue("disabled"),
                    isHideable: true,
                    search: true,
                    render: function(e, { disabled }) {
                        return <Module796 type={disabled ? "Disabled" : "Running"} name={t(disabled ? "DISABLED" : "ENABLED")}/>;
                    }
                },
                {
                    title: t("NETWORK_SEGMENT"),
                    isHideable: true,
                    dataIndex: "cidr"
                },
                {
                    title: a.isCalico ? t("USED_IP_ADDRESSES") : <span className="flexbox items-center"><span className="margin-r4">{t("USED_IP_ADDRESSES")}</span><module186.Tooltip content={t("IPPOOL_USED_TIP")}><module186.Icon name="question" size={16}/></module186.Tooltip></span>,
                    dataIndex: "status1",
                    isHideable: true,
                    render: function(e, { status }) {
                        const a = module26(status, "capacity", 0);
                        const o = module26(status, "unallocated", 0);
                        return <Module791 title={a - o} description={t("TOTAL_VALUE", {
                            value: a
                        })}/>;
                    }
                },
                {
                    title: t("IPPOOL_BLOCK_SIZE"),
                    dataIndex: "blockSize",
                    isHideable: true,
                    render: function(e) {
                        return e ?? "-";
                    }
                },
                a.isOutdated ? null : {
                    title: t("IPPOOL_OVERLAY_MODE"),
                    dataIndex: "overlay",
                    isHideable: true,
                    render: function(e, { ipipMode, vxlanMode }) {
                        const a = getOverlayStatus({
                            ipipMode,
                            vxlanMode
                        });
                        return <div><span className="font-bold">{a.type}</span>{a.value && <span style={{
                            marginLeft: "4px"
                        }}>({a.value})</span>}</div>;
                    }
                },
                a.isOutdated ? null : {
                    title: t("NAT outgoing"),
                    dataIndex: "natOutgoing",
                    isHideable: true,
                    render: function(e) {
                        if (e) {
                            return t("OPENED");
                        }
                        return t("CLOSED");
                    }
                },
                a.columnConfig.hideWorkspace ? null : {
                    title: t("WORKSPACE"),
                    dataIndex: "workspace",
                    isHideable: true,
                    render: function(e, r) {
                        if (r.isDefault) {
                            return t("ALL");
                        }
                        return showNameAndAlias(e, "workspace") || t("NOT_ASSIGNED");
                    }
                }
            ].filter(Boolean);
        };
        a.showCreate = function() {
            const a_props = a.props;
            const { match, module } = a_props;
            return a.props.trigger("network.ippool.add", {
                module,
                cluster: match.params.cluster,
                trigger: a.props.trigger,
                isOutdated: a.isOutdated,
                hideWorkspace: a.columnConfig.hideWorkspace,
                isCalico: a.isCalico,
                success: a.props.rootStore.routing.query,
                allList: module14.toJS(a.store?.list?.data ?? [])
            });
        };
        a.ippoolStore = new module1307;
        a.store = new (a.ippoolStore.getStoreByCluster(e.match.params.cluster));
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.store.fetchList({
                    hasStatus: !this.isCalico && undefined,
                    limit: -1,
                    page: 1,
                    cluster: this.props.match.params.cluster
                });
            }
        },
        {
            key: "getDisabledFilters",
            value: function() {
                return [
                    {
                        text: t("ENABLED"),
                        value: "enabled"
                    },
                    {
                        text: t("DISABLED"),
                        value: "disabled"
                    }
                ];
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps} tips={this.tips}/>{this.isOutdated && <Module802 className={module3807.upload}><Module791 icon="upload-duotone" title={t("FUNCTION_UPGRADE")} description={t("FUNCTION_UPGRADE_DESC")}/></Module802>}<Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate} cluster={match.params.cluster} getCheckboxProps={this.getCheckboxProps}/></ListPage>;
            }
        },
        {
            key: "isOutdated",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return this.ippoolStore.isOutdated(cluster);
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
            key: "columnConfig",
            get: function() {
                const isCalico = this.isCalico;
                return {
                    hideWorkspace: isCalico,
                    hideSerch: isCalico,
                    hideFilter: isCalico
                };
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("IPPOOL_USAGE_Q"),
                        description: this.isCalico ? t("IPPOOL_USAGE_A_1") : t("IPPOOL_USAGE_A")
                    }
                ];
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, name, match } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(t) {
                            trigger("resource.baseinfo.edit", {
                                detail: t,
                                success: _this.props.rootStore.routing.query
                            });
                        }
                    },
                    {
                        key: "editOverlay",
                        icon: "pen",
                        text: t("EDIT_OVERLAY"),
                        action: "edit",
                        show: function() {
                            return !_this.isOutdated;
                        },
                        onClick: function(t) {
                            trigger("network.ipool.editoverlay", {
                                detail: t,
                                cluster: match.params.cluster,
                                success: _this.props.rootStore.routing.query
                            });
                        }
                    },
                    {
                        key: "viewYaml",
                        icon: "eye",
                        text: t("VIEW_YAML"),
                        action: "view",
                        onClick: function(e) {
                            return trigger("resource.yaml.edit", {
                                detail: e,
                                readOnly: true
                            });
                        }
                    },
                    {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.yaml.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "modify",
                        icon: "enterprise",
                        text: t("ASSIGN_WORKSPACE"),
                        show: function() {
                            return !_this.columnConfig.hideWorkspace;
                        },
                        action: "edit",
                        onClick: function(t) {
                            return trigger("network.ipool.assignworkspace", {
                                detail: t,
                                cluster: match.params.cluster,
                                success: _this.props.rootStore.routing.query
                            });
                        }
                    },
                    {
                        key: "OnOutgoing",
                        icon: "start",
                        text: t("CLOSE_NAT_OUTGOING"),
                        action: "edit",
                        show: function(t) {
                            return !_this.isOutdated && t.natOutgoing;
                        },
                        onClick: this.handleNatOutgoing
                    },
                    {
                        key: "OffOutgoing",
                        icon: "stop",
                        text: t("OPEN_NAT_OUTGOING"),
                        action: "edit",
                        show: function(t) {
                            return !_this.isOutdated && !t.natOutgoing;
                        },
                        onClick: this.handleNatOutgoing
                    },
                    {
                        key: "enable",
                        icon: "start",
                        text: t("ENABLE"),
                        action: "edit",
                        show: function(t) {
                            return !_this.isOutdated && t.disabled;
                        },
                        onClick: function(r) {
                            _this.props.store.patch(r, {
                                spec: {
                                    disabled: false
                                }
                            }).then(()=>{
                                module240.success({
                                    content: `${t("ENABLE_SUCCESSFUL")}`
                                });
                                _this.props.rootStore.routing.query();
                            });
                        }
                    },
                    {
                        key: "disable",
                        icon: "stop",
                        text: t("DISABLE"),
                        action: "edit",
                        show: function(t) {
                            return !_this.isOutdated && !t.disabled;
                        },
                        onClick: function(t) {
                            trigger("network.ipool.disable", {
                                detail: t,
                                cluster: match.params.cluster,
                                success: _this.props.rootStore.routing.query
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: e
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || u;
const x = inject("rootStore")(function(e) {
    const cluster = e.match.params.cluster;
    const r = module244.parse(e.location.search.slice(1));
    const n = useMemo(function() {
        return new module1307;
    }, []);
    const store = useMemo(function() {
        return new (n.getStoreByCluster(cluster));
    }, [
        cluster
    ]);
    const o = n.isCalico(cluster);
    useEffect(function() {
        if (o && Number(r.page) > 1) {
            e.rootStore.routing.query({
                ...r,
                page: 1
            });
        }
    }, [
        o
    ]);
    return <J store={store} {...e}/>;
});
export default x;
