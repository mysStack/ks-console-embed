import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import { getDisplayName, getLocalTime } from "utils/index";
import module915 from "stores/volumeSnapshot";
import Module789 from "components/Base/Avatar";
import Module790 from "components/Base/Panel";
import Module796 from "components/Base/Status";
import Module874 from "components/Tables/Base";
import module4215 from "unpacked/module-4215.js";
let u;
const O = inject("detailStore")(u = observer(u = ((Component_1)=>{
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
        n.handleFetch = function(e = {}) {
            const detail = n.store.detail;
            const { cluster, name } = detail;
            if (e.keyword) {
                e.name = e.keyword;
                delete e.keyword;
            }
            n.volumeSnapshotStore.fetchList({
                volumeSnapshotClassName: name,
                cluster,
                ...e
            });
        };
        n.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(e, t) {
                        return <Module789 icon="snapshot" iconSize={40} title={getDisplayName(t)} to={`/whizard-telemetry/${t.cluster}/projects/${t.namespace}/volume-snapshots/${e}`} desc={t.snapshotClassName} noLink/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "backupStatus",
                    width: "20.5%",
                    render: function(e, a) {
                        return <Module796 type={a.readyToUse ? "ready" : "failed"} name={a.readyToUse ? t("READY") : t("UNREADY")}/>;
                    }
                },
                {
                    title: t("CAPACITY"),
                    dataIndex: "restoreSize",
                    width: "20.5%",
                    render: function(e) {
                        return e;
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    width: "20.5%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        n.volumeSnapshotStore = e.volumeSnapshotStore || new module915;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.handleFetch();
            }
        },
        {
            key: "render",
            value: function() {
                const list = this.volumeSnapshotStore.list;
                const { data, filters, isLoading } = list;
                const pagination = {
                    total: list.total,
                    page: list.page,
                    limit: list.limit
                };
                return <Module790 title={t("VOLUME_SNAPSHOT_PL")} loading={isLoading} empty={t("NO_AVAILABLE_RESOURCE_VALUE", {
                    resource: t("VOLUME_SNAPSHOT")
                })} className={module4215.noPadding}><Module874 className={module4215.table} data={data} columns={this.getColumns()} searchType="name" keyword={filters.name} filters={filters} placeholder={t("SEARCH_BY_NAME")} pagination={pagination} isLoading={isLoading} onFetch={this.handleFetch}/></Module790>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "storageClassName",
            get: function() {
                return this.store.detail.name;
            }
        }
    ]);
    return r;
})(Component)) || u) || u;
export default O;
