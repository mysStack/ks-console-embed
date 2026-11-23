import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-192.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import Module811 from "pages/clusters/components/ResourceTable";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import { ListPage, withClusterList } from "components/HOCs/withList";
import Module1130 from "unpacked/module-1130.js";
import module63 from "unpacked/module-63.js";
import Module805 from "unpacked/module-805.js";
import { Component } from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import module908 from "stores/pv";
import module839 from "stores/volume";
import { getDisplayName, getLocalTime, map_accessModes } from "utils/index";
import { VOLUME_STATUS } from "utils/constants";
import { getVolumeStatus } from "utils/status";
import module3722 from "unpacked/module-3722.js";
let i;
const R = withClusterList({
    store: new module839,
    module: "persistentvolumeclaims",
    authKey: "persistentvolumeclaims",
    name: "PERSISTENT_VOLUME_CLAIM",
    rowKey: "uid"
})(i = ((Component_1)=>{
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
        e.pvStore = new module908;
        e.handleTabChange = function() {
            const cluster = e.props.match.params.cluster;
            e.props.rootStore.routing.push(`/clusters/${cluster}/PV`);
        };
        e.showAction = function() {
            return true;
        };
        e.getItemDesc = function(e) {
            const reason = getVolumeStatus(e);
            if (module63(reason)) {
                return e.storageClassName || "-";
            }
            return <Module805 reason={reason} data={e} type="volume"/>;
        };
        e.getCheckboxProps = function(e) {
            return {
                disabled: e.isFedManaged,
                name: e.name
            };
        };
        e.mapperAccessMode = function(e) {
            const t = map_accessModes(e);
            return <span>{t.join(",")}</span>;
        };
        e.renderAccessTitle = function() {
            const content = <div><div>{t("RWO_DESC")}</div><div>{t("ROX_DESC")}</div><div>{t("RWX_DESC")}</div></div>;
            return <div className={module3722.mode_title}>{t("ACCESS_MODE_TCAP")}<module186.Tooltip content={content}><module186.Icon name="question" size={16} className={module3722.question}/></module186.Tooltip></div>;
        };
        e.pvYamlView = async (r)=>{
            let n;
            let cluster;
            n = r.spec.volumeName;
            cluster = e.props.match.params.cluster;
            await e.pvStore.fetchDetail({
                cluster,
                name: n
            });
            return e.props.trigger("resource.yaml.edit", {
                detail: e.pvStore.detail,
                yaml: e.pvStore.detail._originData,
                readOnly: true
            });
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { store, match, module } = e_props;
            return e.props.trigger("volume.create", {
                store,
                module,
                onAddPv: function() {
                    return e.props.trigger("pv.create", {
                        store: e.pvStore
                    });
                },
                cluster: match.params.cluster
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.props.store.getKsVersion(this.props.match.params);
            }
        },
        {
            key: "getStatus",
            value: function() {
                return VOLUME_STATUS.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
            }
        },
        {
            key: "getColumns",
            value: function() {
                const _this = this;
                const props = this.props;
                const { getSortOrder, getFilteredValue } = props;
                const cluster = this.props.match.params.cluster;
                const u = {
                    title: t("PERSISTENT_VOLUME"),
                    dataIndex: "_originData",
                    isHideable: true,
                    search: false,
                    width: "25%",
                    render: function(r) {
                        return <div id="pvColumn" className={module3722.pv_content}><Link to={`/clusters/${cluster}/pv/${r.spec.volumeName}`}>{r.spec.volumeName}</Link>{r.spec.volumeName && <module186.Tooltip content={t("VIEW_YAML")}><module186.Icon className={module3722.yaml} name="log" size={16} onClick={function() {
                            return _this.pvYamlView(r);
                        }}/></module186.Tooltip>}</div>;
                    }
                };
                const i = [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        sortOrder: getSortOrder("name"),
                        search: true,
                        sorter: true,
                        width: "20%",
                        render: function(t, r) {
                            return <Module789 icon="storage" iconSize={40} to={r.phase === "Terminating" ? "" : `/clusters/${cluster}/projects/${r.namespace}/volumes/${t}`} isMultiCluster={r.isFedManaged} desc={_this.getItemDesc(r)} title={getDisplayName(r)}/>;
                        }
                    },
                    {
                        title: t("STATUS"),
                        dataIndex: "status",
                        isHideable: true,
                        search: true,
                        filters: this.getStatus(),
                        filteredValue: getFilteredValue("status"),
                        width: "15%",
                        render: function(e, { phase }) {
                            return <Module796 type={phase} name={t(`VOLUME_STATUS_${phase.toUpperCase()}`)} flicker/>;
                        }
                    },
                    {
                        title: this.renderAccessTitle(),
                        dataIndex: "accessModes",
                        isHideable: false,
                        width: "10%",
                        render: function(t) {
                            return _this.mapperAccessMode(t);
                        }
                    },
                    {
                        title: t("MOUNT_STATUS"),
                        dataIndex: "inUse",
                        isHideable: true,
                        width: "12%",
                        render: function(e, t) {
                            return <Module1130 namespace={t.namespace} cluster={t.cluster} name={t.name}/>;
                        }
                    },
                    {
                        title: t("CREATION_TIME_TCAP"),
                        dataIndex: "createTime",
                        sorter: true,
                        sortOrder: getSortOrder("createTime"),
                        isHideable: true,
                        width: "15%",
                        render: function(e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm");
                        }
                    }
                ];
                if (this.props.store.ksVersion >= 3.2) {
                    i.splice(2, 0, u);
                }
                return i;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { tableProps, match } = props;
                return <ListPage {...this.props}><Module811 {...tableProps} className="table-2-6" itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate} cluster={match.params.cluster} getCheckboxProps={this.getCheckboxProps}/></ListPage>;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("WHAT_IS_STORAGE_CLASS_Q"),
                        description: t("WHAT_IS_STORAGE_CLASS_A")
                    },
                    {
                        title: t("WHAT_IS_LOCAL_VOLUME_Q"),
                        description: t("WHAT_IS_LOCAL_VOLUME_A")
                    }
                ];
            }
        },
        {
            key: "tabs",
            get: function() {
                return {
                    value: "Volume",
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "Volume",
                            label: t("PERSISTENT_VOLUME_CLAIM")
                        },
                        {
                            value: "PV",
                            label: t("PV")
                        }
                    ]
                };
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("resource.yaml.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: this.showAction,
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
})(Component)) || i;
export default R;
