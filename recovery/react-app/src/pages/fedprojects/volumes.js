import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module793 from "unpacked/module-793.js";
import Module1107 from "components/Clusters/ClusterWrapper";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import Module805 from "unpacked/module-805.js";
import { Component } from "unpacked/module-553.js";
import module437 from "stores/federated";
import module839 from "stores/volume";
import { getDisplayName, getLocalTime, map_accessModes } from "utils/index";
import { getVolumeStatus } from "utils/status";
import module908 from "stores/pv";
import module4957 from "unpacked/module-4957.js";
let o;
const w = withProjectList({
    store: new module437(new module839),
    module: "persistentvolumeclaims",
    authKey: "persistentvolumeclaims",
    name: "PERSISTENT_VOLUME_CLAIM",
    rowKey: "uid"
})(o = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(...o_1) {
        let e;
        module36(this, a);
        e = r.call(this, ...o_1);
        e.pvStore = new module908;
        e.renderAccessTitle = function() {
            const content = <div><div>{t("RWO_DESC")}</div><div>{t("ROX_DESC")}</div><div>{t("RWX_DESC")}</div></div>;
            return <div className={module4957.mode_title}>{t("ACCESS_MODE_TCAP")}<module186.Tooltip content={content}><module186.Icon name="question" size={16} className={module4957.question}/></module186.Tooltip></div>;
        };
        e.mapperAccessMode = function(e) {
            const t = map_accessModes(e);
            return <span>{t.join(",")}</span>;
        };
        e.renderStatus = function({ cluster, record }) {
            const n = module26(record, `resources[${cluster.name}]`);
            if (!n) {
                return t("WAITING");
            }
            const reason = getVolumeStatus(n);
            const phase = (n.status || {}).phase;
            const u = phase === undefined ? "" : phase;
            if (module63(reason)) {
                return <Module796 type={u} className={module4957.status} name={t(`VOLUME_STATUS_${u.toUpperCase()}`)}/>;
            }
            return <Module805 reason={reason} data={n} type="volume"/>;
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, projectStore } = e_props;
            return e.props.trigger("volume.create", {
                module,
                isFederated: true,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace,
                onAddPv: function() {
                    return e.props.trigger("pv.create", {
                        store: e.pvStore
                    });
                }
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "getColumns",
            value: function() {
                const _this = this;
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        render: function(t, r) {
                            return <Module789 icon="storage" iconSize={40} title={getDisplayName(r)} desc={r.storageClassName || "-"} to={r.deletionTime ? null : `${_this.props.match.url}/${t}`} isMultiCluster/>;
                        }
                    },
                    {
                        title: t("STATUS"),
                        dataIndex: "status",
                        isHideable: true,
                        render: function(r, record) {
                            if (r === "Deleting") {
                                return <Module796 type={r} name={t(r.toUpperCase())} flicker/>;
                            }
                            return <Module1107 clusters={record.clusters} clustersDetail={_this.props.projectStore.detail.clusters}>{function(cluster) {
                                return _this.renderStatus({
                                    cluster,
                                    record
                                });
                            }}</Module1107>;
                        }
                    },
                    {
                        title: t("MOUNT_STATUS"),
                        dataIndex: "inUse",
                        isHideable: true,
                        width: "14%",
                        render: function(r, a) {
                            return <Module1107 clusters={a.clusters} clustersDetail={_this.props.projectStore.detail.clusters}>{function(e) {
                                if (module26(a, `resources[${e.name}].inUse`)) {
                                    return t("MOUNTED");
                                }
                                return t("NOT_MOUNTED");
                            }}</Module1107>;
                        }
                    },
                    {
                        title: this.renderAccessTitle(),
                        dataIndex: "accessModes",
                        isHideable: false,
                        render: function(t) {
                            return _this.mapperAccessMode(t);
                        }
                    },
                    {
                        title: t("CREATION_TIME_TCAP"),
                        dataIndex: "createTime",
                        isHideable: true,
                        width: 150,
                        render: function(e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm");
                        }
                    }
                ];
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { query, match, bannerProps, tableProps } = props;
                return <ListPage {...this.props} isFederated><Module793 {...bannerProps} tips={this.tips}/><Module797 {...tableProps} className="table-2-5" itemActions={this.itemActions} namespace={query.namespace} columns={this.getColumns()} onCreate={this.showCreate} cluster={match.params.cluster} searchType="name"/></ListPage>;
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
    return a;
})(Component)) || o;
export default w;
