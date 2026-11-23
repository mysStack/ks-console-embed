import "./module-15.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-109.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import module456 from "./module-456.js";
import module473 from "./module-473.js";
import module105 from "./module-105.js";
import Module3847 from "./module-3847.js";
import Module3849 from "./module-3849.js";
import Module3851 from "./module-3851.js";
import module1815 from "./module-1815.js";
const S = ((Component_1)=>{
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
        n.showRerun = function() {
            n.setState({
                showRerun: true
            });
        };
        n.hideRerun = function() {
            n.setState({
                showRerun: false
            });
        };
        n.handleCurrentBuilderChange = function(currentBuilderName) {
            n.setState({
                currentBuilderName,
                builderDetail: {},
                runDetail: {}
            });
            n.fetchData(currentBuilderName);
        };
        n.fetchData = async (t)=>{
            let a;
            let r;
            a = await n.getBuilderDetail(t);
            if (r = module26(a, "status.lastRunName")) {
                n.getRunDetail(r);
            }
        };
        n.getBuilderDetail = (()=>{
            const e = module44(module41.mark(function e(name) {
                let a;
                let builderDetail;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = n.props.namespace;
                                e.next = 3;
                                return n.builderStore.fetchDetail({
                                    cluster: n.cluster,
                                    name,
                                    namespace: a
                                });
                            case 3:
                                builderDetail = e.sent;
                                if (module26(builderDetail, "_originData.reason", "") !== "NotFound") {
                                    e.next = 7;
                                    break;
                                }
                                n.setState({
                                    notFound: true
                                });
                                return e.abrupt("return");
                            case 7:
                                n.setState({
                                    builderDetail
                                });
                                return e.abrupt("return", builderDetail);
                            case 9:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        })();
        n.getRunDetail = async (t)=>{
            let a;
            let r;
            let runDetail;
            a = n.props.namespace;
            n.setState({
                getRunDetailLoading: true
            });
            clearTimeout(n.refreshTimer);
            r = module26(n.state.builderDetail, "status.lastRunName");
            runDetail = await n.runStore.fetchRunDetail({
                namespace: a,
                runName: t || r
            });
            if (module26(runDetail, "status", "") === "running") {
                n.refreshTimer = setTimeout(n.getRunDetail, 4000);
            }
            n.setState({
                runDetail,
                getRunDetailLoading: false
            });
        };
        n.handleRerun = async (t)=>{
            let newTag;
            let isUpdateWorkload;
            let u;
            let o;
            let i;
            newTag = t.newTag;
            isUpdateWorkload = t.isUpdateWorkload;
            u = n.props.namespace;
            o = n.state.currentBuilderName;
            clearTimeout(n.refreshTimer);
            i = await n.builderStore.rerun({
                cluster: n.cluster,
                newTag,
                name: o,
                namespace: u,
                isUpdateWorkload
            });
            n.setState({
                runDetail: module105.s2iruns(i),
                getRunDetailLoading: false,
                showRerun: false
            });
            setTimeout(()=>{
                n.fetchData(o);
            }, 1000);
        };
        n.renderBuilderSelect = function() {
            const builderNames = n.props.builderNames;
            if (builderNames.length === 1) {
                return null;
            }
            const options = builderNames.map((e)=>({
                    label: e,
                    value: e
                }));
            return <module186.Select className={module1815.builderSelector} onChange={n.handleCurrentBuilderChange} options={options} defaultValue={options[0]}/>;
        };
        n.renderLog = function() {
            const runDetail = n.state.runDetail;
            const { logURL, status } = runDetail;
            if (logURL || status !== "Running") {
                if (logURL) {
                    return <Module3851 onRerun={n.showRerun} runDetail={n.state.runDetail} builderName={n.state.currentBuilderName}/>;
                }
                return null;
            }
            return <div className={module1815.title}><module186.Loading size="16"/><p>{t("TASK")}<span className={module1815.taskName}>{n.state.currentBuilderName}</span>{t("IN_PROGRESS")}</p></div>;
        };
        const e_builderNames = e.builderNames;
        n.state = {
            builderDetail: {},
            runDetail: {},
            getRunDetailLoading: true,
            currentBuilderName: e_builderNames[0],
            showRerun: false,
            notFound: false
        };
        n.refreshTimer = null;
        n.builderStore = new module456;
        n.runStore = new module473;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const builderNames = this.props.builderNames;
                this.fetchData(builderNames[0]);
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                clearTimeout(this.refreshTimer);
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                const config = module26(this.state.builderDetail, "spec.config");
                if (this.state.notFound) {
                    return null;
                }
                return <Module790 title={t("IMAGE_BUILDING")} operations={this.renderBuilderSelect()}><Module3847 config={config} className={className}/>{this.renderLog()}<Module3849 detail={this.state.builderDetail} visible={this.state.showRerun} onOk={this.handleRerun} onCancel={this.hideRerun}/></Module790>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.cluster;
            }
        }
    ]);
    return r;
})(Component);
export default S;
S.defaultProps = {
    builderNames: []
};
