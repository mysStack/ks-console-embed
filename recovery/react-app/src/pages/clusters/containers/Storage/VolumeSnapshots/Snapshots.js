import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module811 from "pages/clusters/components/ResourceTable";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import { ListPage, withClusterList } from "components/HOCs/withList";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { Component } from "unpacked/module-553.js";
import module839 from "stores/volume";
import module915 from "stores/volumeSnapshot";
import module911 from "stores/volumeSnapshotClasses";
import { getLocalTime, showNameAndAlias } from "utils/index";
import { VOLUME_SNAPSHOT_CLASS_STATUS } from "utils/constants";
import module908 from "stores/pv";
let i;
const N = withClusterList({
    store: new module915,
    module: "volume-snapshots",
    name: "VOLUME_SNAPSHOT",
    authKey: "volumesnapshots"
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
    function n(...a_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...a_1);
        e.volumeStore = new module839;
        e.snapshotClass = new module911;
        e.pvStore = new module908;
        e.showApply = function({ cluster, namespace }) {
            return globals.app.hasPermission({
                module: "volumesnapshots",
                action: "create",
                project: namespace,
                cluster
            });
        };
        e.showCreate = async function t() {
            let r;
            let n;
            let store;
            let o;
            let i;
            let c;
            let l;
            r = e.props;
            n = r.trigger;
            store = r.store;
            o = r.match;
            i = o.params;
            c = i.cluster;
            l = i.namespace;
            n("create.snapshot", {
                store,
                module: store.module,
                cluster: c,
                namespace: l,
                success: e.props.getData
            });
        };
        e.checkSnapshotClassExist = async (name)=>{
            let n;
            let a;
            let o;
            n = e.props.match.params;
            a = n.cluster;
            o = n.namespace;
            await e.snapshotClass.fetchDetail({
                name,
                cluster: a,
                namespace: o
            });
            return !module63(e.snapshotClass.detail);
        };
        return e;
    }
    module37(n, [
        {
            key: "getStatus",
            value: function() {
                return VOLUME_SNAPSHOT_CLASS_STATUS.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
            }
        },
        {
            key: "getColumns",
            value: function() {
                const props = this.props;
                const { getSortOrder, getFilteredValue, module } = props;
                const cluster = this.props.match.params.cluster;
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        sortOrder: getSortOrder("name"),
                        search: true,
                        sorter: true,
                        render: function(title, t) {
                            return <Module789 icon="snapshot" iconSize={40} to={`/clusters/${cluster}/projects/${t.namespace}/${module}/${title}`} title={title} desc={t.snapshotClassName}/>;
                        }
                    },
                    {
                        title: t("STATUS"),
                        dataIndex: "readyToUse",
                        isHideable: true,
                        filters: this.getStatus(),
                        filteredValue: getFilteredValue("readyToUse"),
                        search: true,
                        render: function(e, { errorMessage, status }) {
                            return <div><Module796 type={status} name={t(status.toUpperCase())}/> {!module63(errorMessage) && <module186.Tooltip content={errorMessage}><module186.Icon name="question"/></module186.Tooltip>}</div>;
                        }
                    },
                    {
                        title: t("PROJECT"),
                        dataIndex: "namespace",
                        isHideable: true,
                        render: function(e) {
                            return <div>{showNameAndAlias(e, "project")}</div>;
                        }
                    },
                    {
                        title: t("VOLUME_SNAPSHOT_CONTENT"),
                        dataIndex: "boundVolumeSnapshotContentName",
                        isHideable: true,
                        render: function(e) {
                            return e;
                        }
                    },
                    {
                        title: t("CAPACITY"),
                        dataIndex: "restoreSize",
                        isHideable: true,
                        width: "20%",
                        render: function(e) {
                            return e || "-";
                        }
                    },
                    {
                        title: t("CREATION_TIME_TCAP"),
                        dataIndex: "createTime",
                        isHideable: true,
                        sorter: true,
                        sortOrder: getSortOrder("createTime"),
                        width: "20%",
                        render: function(e) {
                            if (e) {
                                return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                            }
                            return "-";
                        }
                    }
                ];
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, tableProps } = props;
                return <ListPage {...this.props} noWatch><Module811 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate} cluster={match.params.cluster}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                let e;
                const _this = this;
                const props = this.props;
                const { trigger, routing, name } = props;
                return [
                    {
                        key: "apply",
                        icon: "copy",
                        text: t("CREATE_VOLUME"),
                        show: function(e) {
                            return _this.showApply(e) && e.backupStatus === "success" && module63(e.error);
                        },
                        onClick: (e = module44(module41.mark(function e(n) {
                            let o;
                            let i;
                            let c;
                            let l;
                            return module41.wrap(function(e) {
                                while(true){
                                    switch(e.prev = e.next){
                                        case 0:
                                            o = n.cluster;
                                            i = n.namespace;
                                            c = n.snapshotClassName;
                                            e.next = 3;
                                            return _this.checkSnapshotClassExist(c);
                                        case 3:
                                            if (e.sent) {
                                                e.next = 7;
                                                break;
                                            }
                                            module240.error({
                                                title: t("SNAPSHOT_CLASS_NOT_EXIST_TITLE"),
                                                content: t("SNAPSHOT_CLASS_NOT_EXIST")
                                            });
                                            return e.abrupt("return");
                                        case 7:
                                            l = module26(n, "_originData.spec.source.persistentVolumeClaimName");
                                            e.next = 10;
                                            return _this.volumeStore.fetchDetail({
                                                cluster: o,
                                                name: l,
                                                namespace: i
                                            });
                                        case 10:
                                            trigger("volume.create", {
                                                fromSnapshot: true,
                                                module: "persistentvolumeclaims",
                                                cluster: o,
                                                namespace: i,
                                                store: new module839,
                                                onAddPv: function() {
                                                    return trigger("pv.create", {
                                                        store: _this.pvStore
                                                    });
                                                },
                                                noCodeEdit: true,
                                                extendformTemplate: {
                                                    spec: {
                                                        resources: {
                                                            requests: {
                                                                storage: module26(n, "restoreSize")
                                                            }
                                                        },
                                                        storageClassName: module26(_this.volumeStore, "detail.storageClassName"),
                                                        dataSource: {
                                                            name: module26(n, "name"),
                                                            kind: "VolumeSnapshot",
                                                            apiGroup: "snapshot.storage.k8s.io"
                                                        }
                                                    }
                                                }
                                            });
                                        case 11:
                                        case "end":
                                            return e.stop();
                                    }
                                }
                            }, e);
                        })), function(t) {
                            return e.apply(this, arguments);
                        })
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: function(e) {
                            return !(e.backupStatus === "deleting");
                        },
                        onClick: function(detail) {
                            return trigger("resource.delete", {
                                type: name,
                                detail,
                                success: routing.query
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || i;
export default N;
