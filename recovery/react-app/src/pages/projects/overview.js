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
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import module886 from "stores/quota";
import module14 from "unpacked/module-14.js";
import module4518 from "unpacked/module-4518.js";
import Module4519 from "unpacked/module-4519.js";
import Module4521 from "unpacked/module-4521.js";
import Module4523 from "unpacked/module-4523.js";
import Module4525 from "unpacked/module-4525.js";
import Module4527 from "unpacked/module-4527.js";
import Module4529 from "unpacked/module-4529.js";
import Module4531 from "unpacked/module-4531.js";
import Module4533 from "unpacked/module-4533.js";
import Module4537 from "unpacked/module-4537.js";
let o;
const P = inject("rootStore", "workspaceStore", "projectStore")(o = observer(o = ((Component_1)=>{
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
        e.state = {
            rankModalVisible: false
        };
        e.quotaStore = new module886;
        e.showRankModal = function() {
            e.setState({
                rankModalVisible: true
            });
        };
        e.hideRankModal = function() {
            e.setState({
                rankModalVisible: false
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.quotaStore.fetch(this.params);
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.project.detail;
                const isEdge = this.props.workspaceStore.isEdge;
                return <div className={module4518.container}><div className={module4518.header}><div className={module4518.title}>{t("OVERVIEW")}</div></div><div className={module4518.content}><module186.Columns className={module4518["margin-t0"]}><module186.Column className="is-8"><Module4519 currentResource={this.props.match.params} isEdge={isEdge}/>{this.hasMonitoring && <Module4521 currentResource={this.props.match.params} isEdge={isEdge}/>}{!isEdge && <Module4533 detail={module14.toJS(this.quotaStore.data)} isLoading={module14.toJS(this.quotaStore.isLoading)} currentResource={this.props.match.params}/>}{this.hasAlerting && <Module4527 currentResource={this.props.match.params}/>}{this.hasMonitoring && <Module4523 currentResource={this.props.match.params}/>}</module186.Column><module186.Column className="is-4"><Module4525 detail={detail}/>{this.hasRolesAndMembersPermission && <Module4531 currentResource={this.props.match.params}/>}{this.hasMonitoring && <Module4529 currentResource={this.props.match.params} showRankModal={this.showRankModal} isEdge={isEdge}/>}</module186.Column></module186.Columns></div><Module4537 visible={this.state.rankModalVisible} currentResource={this.props.match.params} onCancel={this.hideRankModal}/></div>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.props.match, "params.namespace");
            }
        },
        {
            key: "project",
            get: function() {
                return this.props.projectStore;
            }
        },
        {
            key: "hasMonitoring",
            get: function() {
                return globals.app.hasClusterModule(this.params.cluster, "whizard-monitoring");
            }
        },
        {
            key: "hasAlerting",
            get: function() {
                return globals.app.hasClusterModule(this.params.cluster, "whizard-alerting");
            }
        },
        {
            key: "hasRolesAndMembersPermission",
            get: function() {
                return globals.app.hasPermission({
                    module: "members",
                    action: "view",
                    ...this.props.match.params,
                    project: this.namespace
                }) && globals.app.hasPermission({
                    module: "roles",
                    action: "view",
                    ...this.props.match.params,
                    project: this.namespace
                });
            }
        },
        {
            key: "params",
            get: function() {
                return module26(this.props.match, "params", {});
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default P;
