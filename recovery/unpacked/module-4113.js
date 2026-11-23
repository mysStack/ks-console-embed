import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module811 from "./module-811.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import { ListPage, withClusterList } from "./module-794.js";
import module63 from "./module-63.js";
import { Component } from "./module-553.js";
import module839 from "./module-839.js";
import module915 from "./module-915.js";
import module911 from "./module-911.js";
import { getLocalTime, showNameAndAlias } from "./module-52.js";
import { VOLUME_SNAPSHOT_STATUS } from "./module-72.js";
import module4114 from "./module-4114.js";
let o;
const A = withClusterList({
    store: new module915,
    module: "volume-snapshots",
    name: "VOLUME_SNAPSHOT",
    authKey: "volumesnapshots"
})(o = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.volumeStore = new module839;
        e.snapshotClass = new module911;
        e.checkSnapshotClassExist = async (name)=>{
            let r;
            let cluster;
            let namespace;
            r = e.props.match.params;
            cluster = r.cluster;
            namespace = r.namespace;
            await e.snapshotClass.fetchDetail({
                name,
                cluster,
                namespace
            });
            return !module63(e.snapshotClass.detail);
        };
        return e;
    }
    module37(r, [
        {
            key: "getStatus",
            value: function() {
                return VOLUME_SNAPSHOT_STATUS.map((e)=>({
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
                            return <Module789 icon="snapshot" iconSize={40} to={`/whizard-telemetry/${cluster}/projects/${t.namespace}/${module}/${title}`} title={title} desc={t.snapshotClassName}/>;
                        }
                    },
                    {
                        title: t("STATUS"),
                        dataIndex: "status",
                        isHideable: true,
                        filters: this.getStatus(),
                        filteredValue: getFilteredValue("status"),
                        search: true,
                        render: function(e, { errorMessage, backupStatus }) {
                            return <div className={module4114.status}><Module796 type={backupStatus} name={t(`CREATE_STATUS_${backupStatus.toUpperCase()}`)}/> {!module63(errorMessage) && <module186.Tooltip content={errorMessage}><module186.Icon name="question"/></module186.Tooltip>}</div>;
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
                return <ListPage {...this.props} noWatch><Module811 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} cluster={match.params.cluster}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                return [];
            }
        }
    ]);
    return r;
})(Component)) || o;
export default A;
