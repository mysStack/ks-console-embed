import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-188.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module61 from "unpacked/module-61.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module454 from "unpacked/module-454.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module807 from "unpacked/module-807.js";
import module247 from "unpacked/module-247.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import { trigger } from "utils/action";
import { startAutoRefresh, stopAutoRefresh } from "utils/monitoring";
import { getAccessNodeDisplayName, getSoftIconName, getSoftStatus } from "unpacked/module-983.js";
import Module796 from "components/Base/Status";
import Module793 from "unpacked/module-793.js";
import Module875 from "components/Tables/Base/Empty";
import Module887 from "components/Tables/Base/Pagination";
import module2000 from "unpacked/module-2000.js";
import Module5192 from "unpacked/module-5192.js";
import module5193 from "unpacked/module-5193.js";
let o;
const U = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function n(e) {
        let r;
        module36(this, n);
        r = a.call(this, e);
        r.canDelete = function({ status }) {
            return [
                "registerFail",
                "unmanaged"
            ].includes(status);
        };
        r.canCancelManaged = function({ status }) {
            return [
                "running",
                "warning",
                "unschedulable"
            ].includes(status);
        };
        r.canManage = function(e) {
            return e.status === "unmanaged";
        };
        r.canEditSoftInfo = function({ status }) {
            return ![
                "registering",
                "registerFail"
            ].includes(status);
        };
        r.getData = function({ isFirst, ...rest } = {}) {
            const list = r.store.list;
            const { limit, page } = list;
            r.store.fetchList({
                limit,
                page,
                ...r.props.match.params,
                ...r.state.filters,
                ...rest
            }, isFirst);
        };
        r.handleRegistry = function() {
            r.trigger("node.edge.register", {
                cluster: r.cluster,
                store: r.store,
                success: r.getData
            });
        };
        r.handleManageNodes = function() {
            r.setState({
                isManaging: !r.state.isManaging
            });
        };
        r.changeUnmanagedNodesFilter = function(e) {
            r.setState({
                filters: e ? {
                    status: "unmanaged"
                } : {}
            });
            r.handleFetch({
                status: e ? "unmanaged" : ""
            });
        };
        r.handleCardCheckChange = function(e, t) {
            const n = r.state.selectedKeys ?? [];
            r.setState({
                selectedKeys: e ? module247([].concat(module61(n), [
                    t
                ])) : n.filter((e)=>e !== t)
            });
        };
        r.handleCancelSelect = function() {
            r.setState({
                selectedKeys: [],
                isManaging: false
            });
        };
        r.handleSelectAll = function(e) {
            if (e) {
                return r.setState({
                    selectedKeys: r.allAllowedNodes.map((e)=>e.name)
                });
            }
            r.setState({
                selectedKeys: []
            });
        };
        r.handleFilterInput = function(filters) {
            if (!module807(filters, r.state.filters)) {
                r.setState({
                    filters
                });
                r.handleFetch(filters, true);
            }
        };
        r.clearFilter = function() {
            r.setState({
                filters: {}
            });
            r.handleFetch({}, true);
        };
        r.handleFetch = function(e) {
            r.getData(e);
        };
        r.handleManage = function() {
            if (r.selectedNodes.every(r.canManage)) {
                r.trigger("node.batch.manage", {
                    cluster: r.cluster,
                    selectedNodes: r.selectedNodes,
                    success: function() {
                        r.setState({
                            selectedKeys: []
                        });
                        r.getData();
                    }
                });
            } else {
                r.trigger("node.filter.confirm", {
                    title: t("BATCH_ACTION", {
                        action: t("ACCESS_MANAGE")
                    }),
                    okText: t("NEXT_OP", {
                        action: t("ACCESS_MANAGE")
                    }),
                    nodes: r.selectedNodes.filter(r.canManage),
                    nextStep: function(e) {
                        r.trigger("node.batch.manage", {
                            cluster: r.cluster,
                            selectedNodes: e,
                            success: function() {
                                r.setState({
                                    selectedKeys: []
                                });
                                r.getData();
                            }
                        });
                    }
                });
            }
        };
        r.handleDelete = function() {
            if (r.selectedNodes.every(r.canDelete)) {
                r.trigger("node.batch.delete", {
                    cluster: r.cluster,
                    type: "ACCESS_NODE",
                    selectedNodes: r.selectedNodes,
                    resource: r.state.selectedKeys.join(", "),
                    success: function() {
                        r.setState({
                            selectedKeys: []
                        });
                        r.getData();
                    }
                });
            } else {
                r.trigger("node.filter.confirm", {
                    title: t("BATCH_ACTION", {
                        action: t("DELETE")
                    }),
                    okText: t("NEXT_OP", {
                        action: t("DELETE")
                    }),
                    nodes: r.selectedNodes.filter(r.canDelete),
                    nextStep: function(e) {
                        r.trigger("node.batch.delete", {
                            cluster: r.cluster,
                            type: "ACCESS_NODE",
                            selectedNodes: e,
                            resource: e.map((e)=>e.name).join(", "),
                            success: function() {
                                r.setState({
                                    selectedKeys: []
                                });
                                r.getData();
                            }
                        });
                    }
                });
            }
        };
        r.handleCancelManaged = function() {
            if (r.selectedNodes.every(r.canCancelManaged)) {
                r.trigger("node.batch.cancel.managed", {
                    cluster: r.cluster,
                    selectedNodes: r.selectedNodes,
                    success: function() {
                        r.setState({
                            selectedKeys: []
                        });
                        r.getData();
                    }
                });
            } else {
                r.trigger("node.filter.confirm", {
                    title: t("BATCH_ACTION", {
                        action: t("CANCEL_MANAGED")
                    }),
                    okText: t("NEXT_OP", {
                        action: t("CANCEL_MANAGED")
                    }),
                    nodes: r.selectedNodes.filter(r.canCancelManaged),
                    nextStep: function(e) {
                        r.trigger("node.batch.cancel.managed", {
                            cluster: r.cluster,
                            selectedNodes: e,
                            success: function() {
                                r.setState({
                                    selectedKeys: []
                                });
                                r.getData();
                            }
                        });
                    }
                });
            }
        };
        r.handleEditSoftInfo = function() {
            if (r.selectedNodes.every(r.canEditSoftInfo)) {
                const versionList = r.selectedNodes[0].versionList;
                r.trigger("node.batch.softInfo", {
                    cluster: r.cluster,
                    versionList,
                    batchMode: true,
                    formData: {
                        containerEngineSofts: [],
                        edgeSofts: []
                    },
                    selectedNodes: r.selectedNodes,
                    success: function() {
                        r.setState({
                            selectedKeys: [],
                            isManaging: false
                        });
                        r.getData();
                    }
                });
            } else {
                r.trigger("node.filter.confirm", {
                    title: t("BATCH_ACTION", {
                        action: t("EDIT_SOFTWARE_INFO")
                    }),
                    okText: t("NEXT_OP", {
                        action: t("EDIT_SOFTWARE_INFO")
                    }),
                    nodes: r.selectedNodes.filter(r.canEditSoftInfo),
                    nextStep: function(e) {
                        const versionList = e[0].versionList;
                        r.trigger("node.batch.softInfo", {
                            cluster: r.cluster,
                            versionList,
                            batchMode: true,
                            formData: {
                                containerEngineSofts: [],
                                edgeSofts: []
                            },
                            selectedNodes: e,
                            success: function() {
                                r.setState({
                                    selectedKeys: [],
                                    isManaging: false
                                });
                                r.getData();
                            }
                        });
                    }
                });
            }
        };
        r.handleCardLink = function(e) {
            if (e.status !== "registering") {
                r.routing.push(`${r.prefix}/${e.name}`);
            }
        };
        r.batchActions = function() {
            return <><module186.Checkbox checked={r.allAllowedNodes.every(({ name })=>r.state.selectedKeys.includes(name))} onChange={r.handleSelectAll}><span className={module5193.selectAll}>{t("SELECT_ALL")}</span></module186.Checkbox><module186.Button key="delete" type="danger" disabled={!r.selectedNodes.some(r.canDelete)} onClick={r.handleDelete} data-test="table-batch-delete">{t("DELETE")}</module186.Button><module186.Button key="cancel_managed" type="danger" disabled={!r.selectedNodes.some(r.canCancelManaged)} onClick={r.handleCancelManaged} data-test="table-cancel-manage">{t("CANCEL_MANAGED")}</module186.Button><module186.Button key="access_manage" disabled={!r.selectedNodes.some(r.canManage)} onClick={r.handleManage} data-test="table-access-manage">{t("ACCESS_MANAGE")}</module186.Button><module186.Button key="edit_software_info" disabled={!r.selectedNodes.some(r.canEditSoftInfo)} onClick={r.handleEditSoftInfo} data-test="table-edit-software-info">{t("EDIT_SOFTWARE_INFO")}</module186.Button></>;
        };
        r.renderActions = function() {
            if (r.enabledActions.includes("create")) {
                return <module186.Button key="register" type="control" onClick={r.handleRegistry} data-test="table-register">{t("REGISTER")}</module186.Button>;
            }
        };
        r.renderToolbar = function() {
            return <module186.Level className={module5193.toolbar}><module186.LevelItem><Module5192 className={module5193.search} columns={r.filterColumns} filters={r.state.filters} onChange={r.handleFilterInput}/></module186.LevelItem><module186.LevelRight style={{
                marginLeft: "12px"
            }}><module186.Button type="flat" icon="refresh" onClick={function() {
                return r.handleFetch(r.state.filters);
            }} data-test="table-refresh"/>{r.renderActions()}</module186.LevelRight></module186.Level>;
        };
        r.renderBatchActions = function() {
            const isManaging = r.state.isManaging;
            return <module186.Level style={{
                marginBottom: "8px"
            }} className={module3(module31({}, module5193.batchActions, isManaging))}><module186.LevelLeft>{isManaging ? r.batchActions() : <div onClick={r.handleManageNodes} className={module5193.batchBtn}><module186.Icon name="cogwheel"/>{t("BATCH_ACCESS_NODE")}</div>}</module186.LevelLeft><module186.LevelRight>{isManaging ? <module186.Button type="flat" className={module5193.cancelSelect} onClick={r.handleCancelSelect} data-test="table-cancel-select">{t("DESELECT")}</module186.Button> : <module186.Checkbox onChange={r.changeUnmanagedNodesFilter}>{t("NODE_STATUS_UNMANAGED")}</module186.Checkbox>}</module186.LevelRight></module186.Level>;
        };
        r.renderSoftwareAvatar = function({ name, softIcon, status, title, softwares, edgeSoft }, a) {
            return <module186.Tooltip key={`${name}_${a}`} className={module5193.statusTip} content=<><strong>{t("STATUS_INFORMATION")}</strong>{softwares ? softwares.map(({ status, title })=><div key={title}><p className={module5193.info}><module186.Icon {...getSoftStatus(status)}/>{title}</p><p className={module5193.statusInfo}>{t("STATUS_VALUE", {
                    value: t(`NODE_SOFT_STATUS_${status.toLocaleUpperCase()}`)
                })}</p></div>) : <><p className={module5193.info}><module186.Icon {...getSoftStatus(status)}/>{title}</p><p className={module5193.statusInfo}>{t("STATUS_VALUE", {
                value: t(`NODE_SOFT_STATUS_${status.toLocaleUpperCase()}`)
            })}</p></>}</>><div className={module5193.flex}><div className={module5193.software}><module186.Icon name={softIcon} size={20}/><module186.Icon size={12} className={module5193.softwareStatus} {...getSoftStatus(status)}/></div>{edgeSoft && <div className={module5193.connect}/>}</div></module186.Tooltip>;
        };
        r.renderEdgeSofts = function(e) {
            if (module63(e)) {
                return r.renderSoftwareAvatar({
                    name: "edge-soft",
                    title: t("EDGE_SOFT"),
                    softIcon: "turn-dot-delta-duotone",
                    status: "uninstalled"
                });
            }
            return e.map(({ name, installationStatus })=>r.renderSoftwareAvatar({
                    name,
                    title: t("SOFT", {
                        value: name
                    }),
                    softIcon: getSoftIconName(name),
                    status: installationStatus,
                    edgeSoft: true
                }));
        };
        r.renderContainerEngineSofts = function(e) {
            if (module63(e)) {
                return r.renderSoftwareAvatar({
                    key: "container-engine",
                    title: t("CONTAINER_ENGINE"),
                    softIcon: "turn-dot-duotone",
                    status: "uninstalled"
                });
            }
            if (e.length === 1) {
                const a = e[0];
                const { name, installationStatus } = a;
                return r.renderSoftwareAvatar({
                    name,
                    title: t("SOFT", {
                        value: name
                    }),
                    softIcon: getSoftIconName(name),
                    status: installationStatus
                });
            }
            return r.renderSoftwareAvatar({
                key: "container-engine",
                title: t("CONTAINER_ENGINE"),
                softIcon: "turn-dot-duotone",
                status: "installed",
                softwares: e.map(({ name, installationStatus })=>({
                        name,
                        title: t("SOFT", {
                            value: name
                        }),
                        softIcon: getSoftIconName(name),
                        status: installationStatus
                    }))
            });
        };
        r.renderNoMatchDataTips = function() {
            return <div className={module5193.emptyText}><span className={module5193.emptyTipIcon}><module186.Icon name="exclamation" size={48}/></span><div>{t("NO_MATCHING_RESULT_FOUND")}</div><p>{t("YOU_CAN_TRY_TO")}<span className={module5193.action} onClick={function() {
                return r.handleFetch(r.state.filters, true);
            }} data-test="table-empty-refresh">{t("REFRESH_DATA")}</span>{t("OR")}<span className={module5193.action} onClick={r.clearFilter} data-test="table-empty-clear-filter">{t("CLEAR_SEARCH_CONDITIONS")}</span></p></div>;
        };
        r.renderNodeCards = function() {
            const list = r.store.list;
            const { isLoading, data } = list;
            if (isLoading || module63(data)) {
                return <div className={module5193.emptyText}>{r.renderNoMatchDataTips()}</div>;
            }
            return <div className={module5193.nodeCards}>{module14.toJS(data).map((e, a)=>{
                const { name, status, nodeIP, edgeSofts, containerEngineSofts } = e;
                const s = status === "registering";
                return <div key={`${name}_${a}`} className={module3(module5193.card, module31({}, module5193.notAllowed, s))}><div className={module5193.operators}><div className={module5193.avatar}><module186.Icon name="edge-node" size={40}/>{r.state.isManaging && <module186.Checkbox className={module5193.checkBox} checked={r.state.selectedKeys.includes(name)} disabled={r.enabledActions} onChange={function(e) {
                    r.handleCardCheckChange(e, name);
                }}/>}</div>{!s && r.renderMoreMenu(e)}</div><div className={module3(module5193.title, module31({}, module5193.notAllowed, s))} onClick={function() {
                    return r.handleCardLink(e);
                }}>{getAccessNodeDisplayName(e)}</div><div className={module5193.desc}>{nodeIP}</div><Module796 className={module5193.status} type={status} name={t(`NODE_STATUS_${status.toLocaleUpperCase()}`)}/><div className={module5193.softwares}>{r.renderContainerEngineSofts(containerEngineSofts)}<div className={module5193.edgeSofts}>{r.renderEdgeSofts(edgeSofts)}</div></div></div>;
            })}</div>;
        };
        r.getItemActions = function({ status }) {
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
                        onClick: function(e) {
                            r.trigger("node.edge.register", {
                                cluster: r.cluster,
                                detail: e,
                                title: t("RE_REGISTER"),
                                reRegister: true,
                                success: r.getData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            r.trigger("resource.delete", {
                                type: "ACCESS_NODE",
                                detail: e,
                                resource: e.name,
                                onOk: function() {
                                    const t = [
                                        {
                                            nodeName: e.name,
                                            taskName: "del_node"
                                        }
                                    ];
                                    return r.store.patchNode(r.cluster, t);
                                },
                                success: function() {
                                    r.setState({
                                        selectedKeys: []
                                    });
                                    module240.success(t("DELETED_SUCCESSFULLY"));
                                    r.getData();
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
                    onClick: function(e) {
                        return r.trigger("node.baseinfo.edit", {
                            detail: e,
                            success: r.getData
                        });
                    }
                },
                {
                    key: "editSoftwareInfo",
                    icon: "pen",
                    text: t("EDIT_SOFTWARE_INFO"),
                    action: "edit",
                    show: [
                        "registerFail",
                        "unmanaged"
                    ].includes(status),
                    onClick: function({ name, edgeSofts, versionList, containerEngineSofts }) {
                        r.trigger("node.softInfo", {
                            cluster: r.cluster,
                            nodeName: name,
                            versionList,
                            formData: {
                                containerEngineSofts,
                                edgeSofts
                            },
                            success: r.getData
                        });
                    }
                },
                {
                    key: "syncTime",
                    icon: "loading-circle-duotone",
                    text: t("SYNC_TIME"),
                    action: "edit",
                    onClick: function(e) {
                        return r.trigger("node.sync.time", {
                            detail: e,
                            success: r.getData
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
                        onClick: function(e) {
                            return r.trigger("node.edge.manage", {
                                detail: e,
                                success: r.getData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            r.trigger("resource.delete", {
                                type: "ACCESS_NODE",
                                detail: e,
                                resource: e.name,
                                onOk: function() {
                                    const t = [
                                        {
                                            nodeName: e.name,
                                            taskName: "del_node"
                                        }
                                    ];
                                    return r.store.patchNode(r.cluster, t);
                                },
                                success: function() {
                                    r.setState({
                                        selectedKeys: []
                                    });
                                    module240.success(t("DELETED_SUCCESSFULLY"));
                                    r.getData();
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
                    onClick: function(e) {
                        return r.trigger("resource.delete", {
                            title: t("CANCEL_MANAGED"),
                            type: "ACCESS_NODE",
                            detail: e,
                            resource: e.name,
                            onOk: function() {
                                const t = [
                                    {
                                        nodeName: e.name,
                                        taskName: "cancel_managed"
                                    }
                                ];
                                return r.store.patchNode(r.cluster, t);
                            },
                            success: function() {
                                module240.success({
                                    content: t("CANCEL_MANAGED_SUCCESSFULLY")
                                });
                                r.getData;
                            }
                        });
                    }
                }
            ];
        };
        r.renderItemActions = function(e) {
            const t = r.getItemActions(e).filter((e)=>r.enabledActions.includes(e.action));
            if (module63(t)) {
                return null;
            }
            return t.map(({ key, text, icon, onClick }, a)=><div key={`${key}_${a}`} onClick={function() {
                    return onClick?.(e);
                }} className={module5193.menuItem}><module186.Icon name={icon}/><span>{text}</span></div>);
        };
        r.renderMoreMenu = function(e) {
            const t = r.renderItemActions(e);
            if (module63(r.enabledActions) || module63(t)) {
                return null;
            }
            return <module186.Dropdown placement="bottomRight" modifiers={{
                preventOverflow: {
                    boundariesElement: "viewport"
                }
            }} content=<div className={module5193.menu}>{t}</div>><module186.Button type="flat" className={module5193.more}><module186.Icon name="more"/></module186.Button></module186.Dropdown>;
        };
        r.renderPagination = function() {
            const list = r.store.list;
            const { page, total, limit } = list;
            return <Module887 page={page} total={total} limit={limit} onChange={r.handleFetch}/>;
        };
        r.renderList = function() {
            if (module63(r.allAllowedNodes) && module63(r.state.filters)) {
                return <Module875 icon="edge-node" title={t("EMPTY_WRAPPER", {
                    resource: t("EDGE_NODE")
                })} desc={t("NODE_ACCESS_EMPTY_DESC")} action={r.renderActions()}/>;
            }
            return <module186.Loading spinning={r.store.list.isLoading}><>{r.renderToolbar()}{r.enabledActions.includes("edit") && r.renderBatchActions()}{r.renderNodeCards()}{r.renderPagination()}</></module186.Loading>;
        };
        if (!module454(r.edgeClusterNavs, function(e) {
            const t = module26(e, "items");
            return module454(t, [
                "name",
                "nodes"
            ]);
        })) {
            const o = e.location.pathname.replace("fota", "node-groups");
            e.history.replace(o);
        }
        r.store = new module2000;
        r.state = {
            isLoading: false,
            isManaging: false,
            filters: {},
            selectedKeys: []
        };
        return r;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData({
                    isFirst: true
                });
                startAutoRefresh(this, {
                    method: "getData",
                    leading: false,
                    interval: 5000
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                stopAutoRefresh(this);
            }
        },
        {
            key: "render",
            value: function() {
                return <><Module793 className={module5193.banner} icon="edge-fota" title={t("NODE_ACCESS_PL")} description={t("NODE_ACCESS_DESC")}/>{this.renderList()}</>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "edgeClusterNavs",
            get: function() {
                return globals.app.getEdgeCalculationNavs(this.cluster);
            }
        },
        {
            key: "filterColumns",
            get: function() {
                const filters = [
                    {
                        text: t("NODE_STATUS_REGISTERING"),
                        value: "registering"
                    },
                    {
                        text: t("NODE_STATUS_REGISTERFAIL"),
                        value: "registerFail"
                    },
                    {
                        text: t("NODE_STATUS_RUNNING"),
                        value: "running"
                    },
                    {
                        text: t("NODE_STATUS_WARNING"),
                        value: "warning"
                    },
                    {
                        text: t("NODE_STATUS_UNMANAGED"),
                        value: "unmanaged"
                    },
                    {
                        text: t("NODE_STATUS_UNSCHEDULABLE"),
                        value: "unschedulable"
                    }
                ];
                return [
                    {
                        dataIndex: "nodeName",
                        title: t("NAME"),
                        search: true
                    },
                    {
                        dataIndex: "status",
                        title: t("STATUS"),
                        search: true,
                        filters
                    }
                ];
            }
        },
        {
            key: "prefix",
            get: function() {
                return `/v2/edgewize/clusters/${this.cluster}/fota`;
            }
        },
        {
            key: "allAllowedNodes",
            get: function() {
                return module14.toJS(this.store.list.data);
            }
        },
        {
            key: "selectedNodes",
            get: function() {
                const _this = this;
                return module14.toJS(this.store.list.data).filter(({ name })=>_this.state.selectedKeys.includes(name));
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const params = this.props.match.params;
                return globals.app.getActions({
                    module: "nodes",
                    ...params
                });
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default U;
