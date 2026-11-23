import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module802 from "components/Base/Card";
import module3 from "unpacked/module-3.js";
import Module816 from "components/Clusters/ClusterTitle";
import module14 from "unpacked/module-14.js";
import Module4080 from "unpacked/module-4080.js";
import Module4082 from "unpacked/module-4082.js";
import Module4084 from "unpacked/module-4084.js";
import Module4086 from "unpacked/module-4086.js";
import Module4088 from "unpacked/module-4088.js";
import Module4094 from "unpacked/module-4094.js";
import Module4096 from "unpacked/module-4096.js";
import Module4098 from "unpacked/module-4098.js";
import module4100 from "unpacked/module-4100.js";
import Module4101 from "unpacked/module-4101.js";
let u;
let l;
let o;
let c;
const M = inject("clusterStore")(u = observer((l = ((Component_1)=>{
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
            showMore: false
        };
        module65(e, "isExclude", o, module88(e));
        module65(e, "rankModalVisible", c, module88(e));
        e.showRankModal = function() {
            e.rankModalVisible = true;
        };
        e.hideRankModal = function() {
            e.rankModalVisible = false;
        };
        e.showRankModal = function() {
            e.rankModalVisible = true;
        };
        e.hideRankModal = function() {
            e.rankModalVisible = false;
        };
        e.handleShowMore = function() {
            const showMore = e.state.showMore;
            e.setState({
                showMore: !showMore
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.clusterStore.fetchVersion(this.props.match.params);
            }
        },
        {
            key: "render",
            value: function() {
                const match = this.props.match;
                const detail = this.clusterStore.detail;
                const showMore = this.state.showMore;
                if (this.hasMonitoring) {
                    return <div><div className={module4100.header}><div className={module4100.title}>{t("OVERVIEW")}</div></div><div className={module4100.content}><module186.Columns className={module4100["margin-t0"]}><module186.Column className="is-8"><Module4088 cluster={match.params.cluster} isExclude={this.isExclude}/><Module4096 clusterDetail={detail}/><Module4098 cluster={match.params.cluster}/></module186.Column><module186.Column className="is-4"><Module802 className={module4100.padding12}><Module816 cluster={detail} size="large" noStatus theme="light" className={module4100.clusterTitle}/>{globals.app.isMultiCluster ? <><Module4082 cluster={detail} version={this.clusterStore.version}/>{showMore && <Module4086 cluster={match.params.cluster}/>}<div className={module3(module4100.showMore, module31({}, module4100.rotate, showMore))} onClick={this.handleShowMore}><module186.Icon name="chevron-down" size={16}/><span>{showMore ? t("FOLD") : t("UNFOLD")}</span></div></> : <Module4086 cluster={match.params.cluster}/>}{globals.app.isPlatformAdmin && <Module4080 cluster={match.params.cluster}/>}</Module802><Module802 className={module4100.padding12}><Module4084 cluster={match.params.cluster} showRankModal={this.showRankModal}/></Module802></module186.Column></module186.Columns></div><Module4101 visible={this.rankModalVisible} cluster={match.params.cluster} onCancel={this.hideRankModal}/></div>;
                }
                return <div><div className={module4100.header}><div className={module4100.title}>{t("OVERVIEW")}</div></div><div className={module4100.content}><module186.Columns className={module4100["margin-t0"]}><module186.Column className="is-8"><Module4094 cluster={match.params.cluster} isExclude={this.isExclude}/>{globals.app.isPlatformAdmin && <div className={module4100.toolWrapper}><Module4080 cluster={match.params.cluster}/></div>}</module186.Column><module186.Column className="is-4"><Module802 className={module4100.padding12}><Module816 cluster={detail} size="large" noStatus theme="light" className={module4100.clusterTitle}/><Module4082 cluster={detail} version={this.clusterStore.version}/></Module802></module186.Column></module186.Columns></div></div>;
            }
        },
        {
            key: "clusterStore",
            get: function() {
                return this.props.clusterStore;
            }
        },
        {
            key: "hasMonitoring",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return globals.app.hasClusterModule(cluster, "whizard-monitoring");
            }
        }
    ]);
    return r;
})(Component), o = module49(l.prototype, "isExclude", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), c = module49(l.prototype, "rankModalVisible", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), u = l)) || u) || u;
export default M;
