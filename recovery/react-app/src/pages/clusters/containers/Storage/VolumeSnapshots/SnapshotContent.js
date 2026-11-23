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
import "unpacked/module-58.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { ListPage, withClusterList } from "components/HOCs/withList";
import { VOLUME_SNAPSHOT_CLASS_STATUS } from "utils/constants";
import Module797 from "components/Tables/List";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import module1212 from "stores/volumeSnapshotContent";
import { cantDeleteSnapshotContent } from "utils/volume";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { getLocalTime, memoryFormat } from "utils/index";
let i;
const T = withClusterList({
    store: new module1212,
    module: "volume-snapshot-content",
    name: "VOLUME_SNAPSHOT_CONTENT",
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
    function n() {
        module36(this, n);
        return r.apply(this, arguments);
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
                const { getSortOrder, getFilteredValue } = props;
                const cluster = this.props.match.params.cluster;
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        sortOrder: getSortOrder("name"),
                        search: true,
                        sorter: true,
                        render: function(title, t) {
                            return <Module789 icon="snapshot" iconSize={40} to={`/clusters/${cluster}/volume-snapshot-content/${title}`} title={title} desc={t.snapshotClassName}/>;
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
                            return <div><Module796 type={status} name={t(status.toUpperCase())}/> {!module63(errorMessage) && <Tooltip content={errorMessage}><Icon name="question"/></Tooltip>}</div>;
                        }
                    },
                    {
                        title: t("CAPACITY"),
                        dataIndex: "restoreSize",
                        isHideable: true,
                        width: "7%",
                        render: function(e) {
                            return `${memoryFormat(e, "Gi")}Gi`;
                        }
                    },
                    {
                        title: t("VOLUME_SNAPSHOT_CLASS"),
                        dataIndex: "snapshotClassName",
                        isHideable: true,
                        width: "14%",
                        render: function(e) {
                            return e || "-";
                        }
                    },
                    {
                        title: t("DELETION_POLICY"),
                        dataIndex: "deletionPolicy",
                        isHideable: true,
                        width: "9.86%",
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
                        width: "12.33%",
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
                return <ListPage {...this.props} noWatch><Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} cluster={match.params.cluster}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, routing, name, store } = props;
                const cluster = props.match.params.cluster;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        onClick: function(detail) {
                            trigger("volume.snapshotContent.baseInfo.edit", {
                                store,
                                cluster,
                                detail,
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "view",
                        icon: "eye",
                        text: t("VIEW_YAML"),
                        onClick: async (detail)=>{
                            let r;
                            r = await store.fetchDetail({
                                name: detail.name,
                                cluster
                            });
                            trigger("resource.yaml.edit", {
                                readOnly: true,
                                detail,
                                yaml: r._originData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        disabled: cantDeleteSnapshotContent,
                        onClick: function({ namespace: _namespace, ...rest }) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: rest,
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
export default T;
export const cantDelete = function({ _originData }) {
    return !(module26(_originData, "spec.source.snapshotHandle") && module26(_originData, "spec.volumeSnapshotRef.uid") || module26(_originData, 'metadata.annotations["snapshot.storage.kubernetes.io/volumesnapshot-being-deleted"]'));
};
