import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-188.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, useEffect, useMemo } from "unpacked/module-553.js";
import module240 from "unpacked/module-240.js";
import Module789 from "components/Base/Avatar";
import Module802 from "components/Base/Card";
import Module796 from "components/Base/Status";
import Module791 from "components/Base/Text";
import Module793 from "unpacked/module-793.js";
import module794, { ListPage } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import module2003 from "unpacked/module-2003.js";
import { getDisplayName } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import { getOverlayStatus } from "utils/status";
import module244 from "unpacked/module-244.js";
import { inject } from "unpacked/module-239.js";
import module14 from "unpacked/module-14.js";
import module5272 from "unpacked/module-5272.js";
let u;
const P = module794({
    module: "ippools",
    name: "POD_IP_POOL",
    skipAuth: true,
    rowKey: "uid"
})(u = ((Component_1)=>{
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
        n.getColumns = function() {
            const n_props = n.props;
            const { getSortOrder, module, getFilteredValue } = n_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    key: "name",
                    render: function(e, t) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(t)} desc={t.description || "-"} to={`${n.props.match.url}/${e}`}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    filters: n.getDisabledFilters(),
                    filteredValue: getFilteredValue("disabled"),
                    isHideable: true,
                    search: true,
                    render: function(e, a) {
                        const disabled = (a?.spec || {}).disabled;
                        return <Module796 type={disabled ? "Disabled" : "Running"} name={t(disabled ? "DISABLED" : "ENABLED")}/>;
                    }
                },
                {
                    title: t("NETWORK_SEGMENT"),
                    isHideable: true,
                    dataIndex: "cidr"
                },
                {
                    title: t("IPPOOL_BLOCK_SIZE"),
                    dataIndex: "blockSize",
                    isHideable: true,
                    render: function(e) {
                        return e ?? "-";
                    }
                },
                n.isOutdated ? null : {
                    title: t("IPPOOL_OVERLAY_MODE"),
                    dataIndex: "overlay",
                    isHideable: true,
                    render: function(e, { ipipMode, vxlanMode }) {
                        const n = getOverlayStatus({
                            ipipMode,
                            vxlanMode
                        });
                        return <div><span className="font-bold">{n.type}</span>{n.value && <span style={{
                            marginLeft: "4px"
                        }}>({n.value})</span>}</div>;
                    }
                },
                n.isOutdated ? null : {
                    title: t("IPPOOL_IS_AUTO_ASSIGN"),
                    dataIndex: "nodeSelector",
                    isHideable: true,
                    render: function(e) {
                        if (e === "!all()") {
                            return t("NO");
                        }
                        return t("YES");
                    }
                },
                {
                    title: t(n.isEdge ? "PROJECT_PL" : "WORKSPACE"),
                    dataIndex: n.isEdge ? "namespace" : "workspace",
                    isHideable: true,
                    render: function(e, a) {
                        if (a.isDefault) {
                            return t("ALL");
                        }
                        return a.metadata?.labels?.["kubesphere.io/namespace"];
                    }
                }
            ].filter(Boolean);
        };
        n.showCreate = function() {
            const n_props = n.props;
            const { match, module } = n_props;
            if (match.params.group) {
                return n.props.trigger("edge.nodegroup.ippool.add", {
                    module,
                    ...match.params,
                    store: n.store,
                    success: function() {
                        return n.props.getData({});
                    }
                });
            }
            return n.props.trigger("network.ippool.add", {
                module,
                cluster: match.params.cluster,
                namespace: match.params.namespace,
                trigger: n.props.trigger,
                isOutdated: n.isOutdated,
                hideWorkspace: true,
                isCalico: n.isCalico,
                success: n.props.getData,
                allList: module14.toJS(n.store?.list?.data ?? [])
            });
        };
        n.ippoolStore = new module2003;
        n.store = new (n.ippoolStore.getStoreByCluster(e.match.params.cluster));
        n.isEdge = location.href.includes("edgeippool");
        return n;
    }
    module37(r, [
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
                const createText = match?.params?.group ? "绑定" : undefined;
                return <ListPage {...this.props}><Module793 {...bannerProps} tips={this.tips}/>{this.isOutdated && <Module802 className={module5272.upload}><Module791 icon="upload-duotone" title={t("FUNCTION_UPGRADE")} description={t("FUNCTION_UPGRADE_DESC")}/></Module802>}<Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate} createText={createText} cluster={match.params.cluster} getCheckboxProps={this.getCheckboxProps} searchType="name"/></ListPage>;
            }
        },
        {
            key: "isOutdated",
            get: function() {
                return false;
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
                if (match.params.group) {
                    return [
                        {
                            key: "remove",
                            icon: "trash",
                            text: t("DROP"),
                            action: "delete",
                            onClick: function(a) {
                                return trigger("resource.delete", {
                                    type: name,
                                    detail: a,
                                    store: _this.store,
                                    title: `${t("DROP")}${t("POD_IP_POOL_PL")}`,
                                    success: _this.props.getData,
                                    onOk: function() {
                                        return _this.store.delIpPoolToNodeGroup({
                                            cluster: match.params.cluster,
                                            nodetree: match.params.group,
                                            params: [
                                                {
                                                    op: "remove",
                                                    path: `/metadata/annotations/infra.kubesphere.io~1ippool-${a.metadata.labels["kubesphere.io/namespace"]}`,
                                                    value: a.name
                                                }
                                            ]
                                        });
                                    }
                                });
                            }
                        }
                    ];
                }
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(t) {
                            return trigger("resource.baseinfo.edit", {
                                detail: t,
                                success: _this.props.getData
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
                                success: _this.props.getData
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
                        key: "modify",
                        icon: "enterprise",
                        text: t(this.isEdge ? "ASSIGN_PROJECT" : "ASSIGN_WORKSPACE"),
                        show: function() {
                            return !_this.columnConfig.hideWorkspace;
                        },
                        action: "edit",
                        onClick: function(t) {
                            return trigger(_this.isEdge ? "network.ipool.assignnamespace" : "network.ipool.assignworkspace", {
                                detail: t,
                                cluster: match.params.cluster,
                                success: _this.props.getData
                            });
                        }
                    },
                    {
                        key: "autoAssign",
                        icon: "changing-over",
                        text: t("IPPOOL_AUTO_ASSIGN"),
                        show: function() {
                            return !_this.isOutdated;
                        },
                        action: "edit",
                        onClick: function(t) {
                            return trigger("network.ipool.autoAssign", {
                                detail: t,
                                cluster: match.params.cluster,
                                success: _this.props.getData
                            });
                        }
                    },
                    {
                        key: "enable",
                        icon: "start",
                        text: t("ENABLE"),
                        action: "edit",
                        show: function(t) {
                            return !_this.isOutdated && t.spec?.disabled;
                        },
                        onClick: function(a) {
                            _this.props.store.patch(a, {
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
                            return !_this.isOutdated && !t.spec?.disabled;
                        },
                        onClick: function(t) {
                            trigger("network.ipool.disable", {
                                store: _this.store,
                                detail: t,
                                isEdge: _this.isEdge,
                                cluster: match.params.cluster,
                                success: _this.props.getData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(t) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: t,
                                success: _this.props.getData
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || u;
const A = inject("rootStore")(function(e) {
    const cluster = e.match.params.cluster;
    const a = module244.parse(e.location.search.slice(1));
    const r = useMemo(function() {
        return new module2003;
    }, []);
    const store = useMemo(function() {
        return new (r.getStoreByCluster(cluster));
    }, [
        cluster
    ]);
    const l = r.isCalico(cluster);
    useEffect(function() {
        if (l && Number(a.page) > 1) {
            e.rootStore.routing.query({
                ...a,
                page: 1
            });
        }
    }, [
        l
    ]);
    return <P store={store} {...e}/>;
});
export default A;
