import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-45.js";
import "./module-245.js";
import "./module-42.js";
import "./module-319.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import module446 from "./module-446.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module3854 from "./module-3854.js";
import Module791 from "./module-791.js";
import Module818 from "./module-818.js";
import Module790 from "./module-790.js";
import { getValue } from "./module-895.js";
import { getCurrentRevision } from "./module-248.js";
import { getLocalTime, isEdgeWizePage } from "./module-52.js";
import module1206 from "./module-1206.js";
import module1390 from "./module-1390.js";
import module3859 from "./module-3859.js";
let l;
l = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.revisionStore = isEdgeWizePage() ? new module1390(e.module) : new module1206(e.module);
        e.state = {
            showViewYaml: false,
            lastRevision: 0,
            selectRevision: 0
        };
        e.fetchData = function() {
            e.revisionStore.fetchList(e.store.detail).then(()=>{
                e.setState({
                    selectRevision: e.curRevision
                });
            });
        };
        e.handleRevisionChange = function(selectRevision) {
            e.setState({
                selectRevision
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "renderDiff",
            value: function() {
                const selectRevision = this.state.selectRevision;
                const a = module14.toJS(this.revisionStore.list.data);
                const r = Math.max(Number(selectRevision) - 1, 0);
                const n = a.find((t)=>t.revision === selectRevision);
                const l = a.find((e)=>e.revision === r);
                const u = n ? getValue(n._originData) : "";
                const o = l ? getValue(l._originData) : "";
                return <Module3854 datas={[
                    o,
                    u
                ]} title={t("CONFIG_FILE")} description={l ? t("COMPARE_WITH", {
                    version: `#${r} (${l.name.replace(`${l.ownerName}-`, "")})`
                }) : ""}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const list = this.revisionStore.list;
                const { data, isLoading } = list;
                const selectRevision = this.state.selectRevision;
                const l = data.find((e)=>e.revision === selectRevision);
                return <div><Module790 title={t("REVISION_RECORDS")}><module186.Alert className="margin-b12" message={t("REVISION_RECORDS_DESC")} hideIcon/><Module818 value={selectRevision} options={this.revisions} loading={isLoading} onChange={this.handleRevisionChange}/></Module790>{l && <Module790><div className={module3859.header}><Module791 title={`#${l.revision}`} description={t("SERIAL_NUMBER")}/><Module791 title={getLocalTime(l.createTime).format("YYYY-MM-DD HH:mm:ss")} description={t("CREATION_TIME")}/></div><div className={module3859.diffWrapper}>{this.renderDiff()}</div></Module790>}</div>;
            }
        },
        {
            key: "module",
            get: function() {
                return this.store.module;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "curRevision",
            get: function() {
                const data = module14.toJS(this.revisionStore.list).data;
                return getCurrentRevision(this.store.detail, data, this.module);
            }
        },
        {
            key: "revisions",
            get: function() {
                const _this = this;
                const data = module14.toJS(this.revisionStore.list).data;
                return module446(data, function(e) {
                    return parseInt(e.revision, 10);
                }).reverse().map((a)=>{
                    let label = `#${a.revision} (${a.name.replace(`${a.ownerName}-`, "")})`;
                    if (a.revision === _this.curRevision) {
                        label = <span><span>{label}</span> <module186.Tag type="primary">{t("RUNNING")}</module186.Tag></span>;
                    }
                    return {
                        label,
                        description: t("CREATED_TIME", {
                            diff: getLocalTime(a.createTime).format("YYYY-MM-DD HH:mm:ss")
                        }),
                        icon: "timed-task",
                        value: a.revision
                    };
                });
            }
        }
    ]);
    return r;
})(Component);
module49(l.prototype, "curRevision", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "curRevision"), l.prototype);
module49(l.prototype, "revisions", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "revisions"), l.prototype);
const N = l;
const T = inject("rootStore", "detailStore")(observer(N));
export default T;
const R = N;
export { R as Component };
