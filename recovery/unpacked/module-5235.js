import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-245.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import { getLocalTime } from "./module-52.js";
import Module790 from "./module-790.js";
import Module796 from "./module-796.js";
import Module789 from "./module-789.js";
import module5236 from "./module-5236.js";
let o;
const E = {
    Failure: "error",
    Succeeded: "success",
    processing: "running",
    process_wait: "waiting",
    process_end: "success"
};
const b = inject("detailStore")(o = observer(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(e) {
        let r;
        module36(this, n);
        r = a.call(this, e);
        r.renderMessage = function(e) {
            if (e) {
                return <module186.Tooltip content={e.toString()} className={module5236.tooltip}><div className={module5236.message}>{e.toString()}</div></module186.Tooltip>;
            }
            return "-";
        };
        r.getColumns = function() {
            return [
                {
                    title: t("TASK_EXE_STATUS"),
                    dataIndex: "taskStatus",
                    width: "10%",
                    render: function(e) {
                        return <Module796 type={E[e]} name={t(`${e.toUpperCase()}`)}/>;
                    }
                },
                {
                    title: t("TASK_KEY"),
                    dataIndex: "taskId",
                    width: "16%",
                    render: function(e, t) {
                        return <Module789 icon={null} to={null} title={t.taskName} desc={t.taskId}/>;
                    }
                },
                {
                    title: t("TASK_INFO"),
                    dataIndex: "taskDefinition",
                    width: "18%",
                    render: r.renderMessage
                },
                {
                    title: t("TASK_EXE_INFO"),
                    dataIndex: "taskMessage",
                    render: r.renderMessage
                },
                {
                    title: t("TASK_EXE_TIME"),
                    dataIndex: "taskTime",
                    width: 160,
                    render: function(e) {
                        if (e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                        return "-";
                    }
                }
            ];
        };
        r.store = e.detailStore;
        return r;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const detail = this.store.detail;
                return <Module790><module186.Table rowKey="taskId" className={module5236.table} dataSource={module14.toJS(detail == null ? undefined : detail.taskList.reverse())} columns={this.getColumns()}/></Module790>;
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default b;
