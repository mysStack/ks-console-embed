import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
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
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import { Link } from "unpacked/module-433.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module802 from "components/Base/Card";
import Module796 from "components/Base/Status";
import { getJobStatus } from "utils/status";
import { getLocalTime, isEdgeWizePage } from "utils/index";
import module318 from "stores/workload/index";
import module1403 from "stores/workload/record";
import module859 from "unpacked/module-859.js";
import module1819 from "unpacked/module-1819.js";
import module3873 from "unpacked/module-3873.js";
let l;
const R = inject("rootStore", "detailStore")(l = observer(l = ((Component_1)=>{
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
        n.fetchData = function(e) {
            const t = module14.toJS(n.store.detail);
            const { cluster, namespace } = t;
            const selector = module26(t, "spec.jobTemplate.metadata.labels", {});
            n.recordStore.fetchListByK8s({
                ...e,
                cluster,
                namespace,
                selector
            });
        };
        n.getColumns = function() {
            return [
                {
                    title: t("JOB"),
                    dataIndex: "name",
                    width: "19%",
                    render: function(e) {
                        return <Link className="item-name" to={`${n.prefix}/jobs/${e}`}>{e}</Link>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    width: "19%",
                    render: function(e, a) {
                        const r = getJobStatus(a);
                        return <Module796 type={r} name={t(r)}/>;
                    }
                },
                {
                    title: t("START_TIME"),
                    dataIndex: "status.startTime",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                },
                {
                    title: t("END_TIME"),
                    dataIndex: "status.completionTime",
                    render: function(e, t) {
                        const a = module26(t, "status.conditions[0].lastProbeTime");
                        if (e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                        if (a) {
                            return getLocalTime(a).format("YYYY-MM-DD HH:mm:ss");
                        }
                        return "-";
                    }
                },
                {
                    render: function(e) {
                        return <module186.Button icon="refresh" type="flat" onClick={n.handleRerun(e)}/>;
                    }
                }
            ];
        };
        n.handleRerun = function(e) {
            return function() {
                n.imitateJobsStore.rerun(e).then(()=>{
                    n.fetchData();
                });
            };
        };
        const l = isEdgeWizePage();
        n.recordStore = e.recordStore || l ? new module1819 : new module1403;
        n.imitateJobsStore = l ? new module859("jobs") : new module318("jobs");
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "renderTable",
            value: function() {
                const list = this.recordStore.list;
                const { data, isLoading } = list;
                return <module186.Table className={module3873.table} dataSource={module14.toJS(data)} columns={this.getColumns()} loading={isLoading}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <Module802 className={module3873.main} title={t("RUN_RECORDS")}><div className={module3873.content}>{this.renderTable()}</div></Module802>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "params",
            get: function() {
                return this.props.match.params;
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { cluster, workspace, namespace } = params;
                let n = `${workspace ? `/${workspace}` : ""}/clusters/${cluster}/projects/${namespace}`;
                if (isEdgeWizePage()) {
                    n = `/v2/edgewize/${n}`;
                }
                return n;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default R;
const w = R;
export { w as Component };
