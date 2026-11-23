import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
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
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module988 from "unpacked/module-988.js";
import module186 from "unpacked/module-186.js";
import Module848 from "components/Base/Empty";
import module3770 from "pages/clusters/components/Cards/Monitoring/ETCDNodes/item";
import module1795 from "unpacked/module-1795.js";
let l;
const C = {
    etcd_online: "etcd_server_up_total",
    etcd_total: "etcd_server_total",
    etcd_has_leader: "etcd_server_has_leader",
    etcd_leader_changes: "etcd_server_leader_changes",
    etcd_server_list: "etcd_server_list",
    etcd_server_is_leader: "etcd_server_is_leader"
};
const D = inject("rootStore")(l = observer(l = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.getReulst = function(e) {
            return module26(t.metrics, `${e}.data.result`) || [];
        };
        t.fetchData = function(e) {
            t.store.fetchMetrics({
                metrics: Object.values(C),
                last: true,
                ...e
            });
        };
        t.store = new module988({
            module: "etcd",
            cluster: e.cluster
        });
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const list = this.list;
                return <div className={module3(module1795.wrapper, this.props.className)}><div className={module1795.title}>{t("SERVICE_STATUS")}</div><module186.Loading spinning={this.store.isLoading}><div className={module1795.list}>{module63(list) ? <Module848 className={module1795.emtpy}/> : list.map((data)=>module3770({
                        prefix: "/infrastructure/nodes",
                        data
                    }))}</div></module186.Loading></div>;
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.store.data;
            }
        },
        {
            key: "list",
            get: function() {
                const e = this.getReulst(C.etcd_has_leader);
                const t = this.getReulst(C.etcd_server_is_leader);
                const a = this.getReulst(C.etcd_leader_changes);
                return this.getReulst(C.etcd_server_list).map((r)=>{
                    const n = module26(r, "metric.node_ip");
                    const isOnline = module26(r, "value[1]") === "1";
                    const hasLeader = module26(e.find((e)=>module26(e, "metric.node_ip") === n), "value[1]") === "1";
                    const isLeader = module26(t.find((e)=>module26(e, "metric.node_ip") === n), "value[1]") === "1";
                    const leaderChanges = module26(a.find((e)=>module26(e, "metric.node_ip") === n), "value[1]") || 0;
                    return {
                        ...r.metric,
                        hasLeader,
                        isLeader,
                        leaderChanges,
                        isOnline
                    };
                });
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default D;
