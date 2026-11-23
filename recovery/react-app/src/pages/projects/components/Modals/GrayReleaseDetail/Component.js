import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
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
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import { Link } from "unpacked/module-433.js";
import module837 from "unpacked/module-837.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module194 from "unpacked/module-194.js";
import module14 from "unpacked/module-14.js";
import module186 from "unpacked/module-186.js";
import module989 from "unpacked/module-989.js";
import Module4705 from "pages/projects/components/Modals/GrayReleaseDetail/Component/Item";
import module1909 from "unpacked/module-1909.js";
const k = {
    cpu: "pod_cpu_usage",
    memory: "pod_memory_usage_wo_cache"
};
const D = ((Component_1)=>{
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
        t.handleMoreMenuClick = function(e, a) {
            switch(a){
                case "edit":
                    t.props.showEditModal();
                    break;
                case "offline":
                    t.props.onOffline(t.props.type);
                    break;
                case "takeover":
                    t.props.onTakeover(t.props.type);
            }
        };
        t.state = {
            pods: e.pods || []
        };
        t.monitorStore = new module989;
        t.getData(e.pods);
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const pods = this.props.pods;
                if (!module837(pods, e.pods)) {
                    this.getData(pods);
                }
            }
        },
        {
            key: "getData",
            value: function(e) {
                const _this = this;
                if (!module63(e)) {
                    this.monitorStore.fetchMetrics({
                        cluster: this.props.cluster,
                        namespace: this.props.namespace,
                        resources: e.map((e)=>e.name),
                        metrics: Object.values(k),
                        last: true
                    }).then(()=>{
                        const a = module14.toJS(_this.monitorStore.data);
                        _this.setState({
                            pods: e.map((e)=>{
                                const metrics = {};
                                Object.entries(k).forEach((r)=>{
                                    const n = module96(r, 2);
                                    const o = n[0];
                                    const s = n[1];
                                    const l = module26(a, `${s}.data.result`) || [];
                                    metrics[o] = l.find((t)=>module26(t, "metric.pod") === e.name);
                                });
                                return {
                                    ...e,
                                    metrics
                                };
                            })
                        });
                    });
                }
            }
        },
        {
            key: "renderMoreMenu",
            value: function() {
                const props = this.props;
                const { type, isGovernor, onTakeover } = props;
                return <module186.Menu onClick={this.handleMoreMenuClick}>{type === "new" && <module186.Menu.MenuItem key="edit"><module186.Icon name="update" type="light"/> {t("EDIT")}</module186.Menu.MenuItem>}{!isGovernor && module194(onTakeover) && <module186.Menu.MenuItem key="takeover"><module186.Icon name="linechart" type="light"/> {t("TAKE_OVER")}</module186.Menu.MenuItem>}</module186.Menu>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { data, type, isGovernor, onTakeover, jobDetail, maxLength, workloadType } = props;
                const pods = this.state.pods;
                const d = type !== "new" && (isGovernor || !module194(onTakeover));
                const style = {
                    minHeight: 40 * maxLength + 4 * (maxLength - 1)
                };
                const v = [
                    "Bluegreen",
                    "Mirror"
                ].includes(jobDetail.type) && !isGovernor;
                return <div className={module1909.wrapper}><div className={module1909.header}><module186.Icon name="appcenter" size={40}/><div className={module1909.title}><div className="h6"><Link to={`${this.prefix}/${workloadType}/${data.name}-${data.version}`}>{data.name}</Link>  <span className={module3("ks-tag", {
                    "ks-tag-disable": v
                })}>{data.version}</span>{v && <module186.Tooltip content={jobDetail.type === "Mirror" ? t("MIRRORED_TRAFFIC_TIP") : t("OFFLINE_TIP")}><span className="ks-tag ks-tag-disable">{jobDetail.type === "Mirror" ? t("MIRRORED_TRAFFIC") : t("OFFLINE")}</span></module186.Tooltip>}</div><p>{t("REPLICA_COUNT")}: <strong>{data.available}</strong>/{data.desire}</p></div>{!d && <div className={module1909.right}><module186.Dropdown theme="dark" content={this.renderMoreMenu()} trigger="click" placement="bottomRight"><module186.Button icon="more" type="flat"/></module186.Dropdown></div>}</div><ul className={module1909.pods} style={style}>{pods.map((t)=><Module4705 data={t} key={t.uid} prefix={_this.prefix}/>)}</ul></div>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const props = this.props;
                const { workspace, cluster, namespace } = props;
                return `/${workspace}/clusters/${cluster}/projects/${namespace}`;
            }
        }
    ]);
    return r;
})(Component);
export default D;
D.propTypes = {
    namespace: module1.string,
    data: module1.object,
    isGovernor: module1.bool,
    showEditModal: module1.func,
    onTakeover: module1.func
};
D.defaultProps = {
    namespace: "",
    data: {},
    isGovernor: true,
    maxLength: 0,
    jobDetail: {},
    showEditModal: function() {}
};
