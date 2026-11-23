import "./module-15.js";
import "./module-5.js";
import "./module-48.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-109.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module14 from "./module-14.js";
import module1 from "./module-1.js";
import Module797 from "./module-797.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import { ReactComponent } from "./module-1145.js";
import { formatUsedTime, getLocalTime } from "./module-52.js";
import module5122 from "./module-5122.js";
import Module1461 from "./module-1461.js";
let o;
let i;
let l;
const O = inject("detailStore")(o = observer((l = i = ((Component_1)=>{
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
        e.refreshTimer = setInterval(()=>e.getDetail(), 4000);
        e.getDetail = function() {
            const params = e.props.match.params;
            e.props.detailStore.fetchDetail({
                name: params.cd,
                devops: params.devops,
                cluster: params.cluster
            });
        };
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "20%"
                },
                {
                    title: t("TYPE"),
                    dataIndex: "kind",
                    width: "20%"
                },
                {
                    title: t("PROJECT_PL"),
                    dataIndex: "namespace",
                    width: "15%"
                },
                {
                    title: t("SYNC_STATUS"),
                    dataIndex: "status",
                    width: "10%",
                    render: function(e) {
                        return <Module1461 type={e} label={e}/>;
                    }
                },
                {
                    title: t("MESSAGE"),
                    dataIndex: "message"
                }
            ];
        };
        e.renderTable = function() {
            const t = module26(e.detail, "status.operationState.syncResult.resources", []);
            return <Module797 hideHeader hideFooter rowKey="name" data={t} showEmpty={t.length === 0} columns={e.getColumns()} name="sync_result"/>;
        };
        e.renderSyncTip = function() {
            const t = module26(e.detail, "status.conditions[0]", {});
            const content = <div className={module5122.statusTip}><strong>{t.type}</strong><p>Last Transition Time:  {getLocalTime(t.lastTransitionTime).format("YYYY-MM-DD HH:mm:ss")}</p><p>{t.message}</p></div>;
            if (module63(t)) {
                return <div className={module5122.syncStatus}><module186.Icon name="rocket" size={40}/><span className={module5122.syncStatus_icon}><Module1461 type={e.detail.syncStatus} hasLabel={false}/></span></div>;
            }
            return <module186.Tooltip content={content}><div className={module5122.syncStatus}><module186.Icon name="rocket" size={40}/><span className={module5122.syncStatus_icon}><Module1461 type={e.detail.syncStatus} hasLabel={false}/></span></div></module186.Tooltip>;
        };
        return e;
    }
    module37(n, [
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.refreshTimer) {
                    clearInterval(this.refreshTimer);
                    this.refreshTimer = null;
                }
            }
        },
        {
            key: "render",
            value: function() {
                let e = module26(this.detail, "status.sync.revision");
                e = e ? e.slice(0, 6) : "-";
                const r = module26(this.detail, "status.operationState.startedAt");
                const n = module26(this.detail, "status.operationState.finishedAt");
                const a = new Date(n) - new Date(r);
                const o = isNaN(a) ? "-" : formatUsedTime(a);
                return <div className={module5122.container}><div className={module5122.sync_info}><h3>{t("SYNC_STATUS")}</h3><div className={module5122.info_card}><div className={module5122.wrapper}><div className={module5122.wrapper_icon}>{this.renderSyncTip()}<div><h4>{this.detail.syncStatus}</h4><p>{t("CURRENT_SYNC_STATUS")}</p></div></div><div><div><h4>{r ? getLocalTime(r).format("YYYY-MM-DD HH:mm:ss") : "-"}</h4><p>{t("START_TIME_SCAP")}</p></div></div><div><div><h4>{n ? getLocalTime(n).format("YYYY-MM-DD HH:mm:ss") : "-"}</h4><p>{t("END_TIME_SCAP")}</p></div></div></div><div className={module5122.wrapper}><div className={module5122.wrapper_gray}><module186.Icon name="timed-task" size={40}/><div><h4>{this.detail.syncType === "automated" ? t("AUTO_SYNC") : t("MANUAL_SYNC")}</h4><p>{t("SYNC_STRATEGY")}</p></div></div><div className={module5122.wrapper_gray}><ReactComponent style={{
                    width: "40px",
                    height: "40px"
                }}/><div><h4>{e}</h4><p>{t("REVISION")}</p></div></div><div className={module5122.wrapper_gray}><module186.Icon name="druration" size={40}/><div><h4>{o}</h4><p>{t("DURATION")}</p></div></div></div></div></div><div className={module5122.sync_result}><h3>{t("SYNC_RESULT_PL")}</h3>{this.renderTable()}</div></div>;
            }
        },
        {
            key: "detail",
            get: function() {
                return module14.toJS(this.props.detailStore.detail);
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        }
    ]);
    return n;
})(Component), i.propTypes = {
    data: module1.array,
    loading: module1.bool
}, o = l)) || o) || o;
export default O;
