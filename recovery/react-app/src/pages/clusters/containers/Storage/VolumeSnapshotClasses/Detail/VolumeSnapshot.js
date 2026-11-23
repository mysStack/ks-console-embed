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
import module3940 from "unpacked/module-3940.js";
let o;
const S = inject("detailStore")(o = observer(o = ((Component_1)=>{
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
        a.handleFetch = function(e = {}) {
            const detail = a.store.detail;
            const { cluster, name } = detail;
            if (e.keyword) {
                e.name = e.keyword;
                delete e.keyword;
            }
            a.volumeSnapshotStore.fetchList({
                volumeSnapshotClassName: name,
                cluster,
                ...e
            });
        };
        a.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(e, t) {
                        return <Module789 icon="snapshot" iconSize={40} title={getDisplayName(t)} to={`/clusters/${t.cluster}/projects/${t.namespace}/volume-snapshots/${e}`} desc={t.snapshotClassName} noLink/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "backupStatus",
                    width: "20.5%",
                    render: function(e, r) {
                        return <Module796 type={r.readyToUse ? "ready" : "failed"} name={r.readyToUse ? t("READY") : t("UNREADY")}/>;
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
        a.volumeSnapshotStore = e.volumeSnapshotStore || new module915;
        return a;
    }
    module37(n, [
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
                })} className={module3940.noPadding}><Module874 className={module3940.table} data={data} columns={this.getColumns()} searchType="name" keyword={filters.name} filters={filters} placeholder={t("SEARCH_BY_NAME")} pagination={pagination} isLoading={isLoading} onFetch={this.handleFetch}/></Module790>;
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
    return n;
})(Component)) || o) || o;
export default S;
