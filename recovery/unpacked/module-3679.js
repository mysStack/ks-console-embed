import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module802 from "./module-802.js";
import module3 from "./module-3.js";
import Module816 from "./module-816.js";
import module14 from "./module-14.js";
import Module3680 from "./module-3680.js";
import Module3685 from "./module-3685.js";
import Module3687 from "./module-3687.js";
import Module3689 from "./module-3689.js";
import Module3691 from "./module-3691.js";
import Module3693 from "./module-3693.js";
import Module3698 from "./module-3698.js";
import Module3701 from "./module-3701.js";
import module3703 from "./module-3703.js";
let o;
let u;
let i;
let c;
const I = inject("clusterStore")(o = observer((u = ((Component_1)=>{
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
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.state = {
            showMore: false
        };
        module65(e, "isExclude", i, module88(e));
        module65(e, "rankModalVisible", c, module88(e));
        e.showRankModal = function() {
            e.rankModalVisible = true;
        };
        e.hideRankModal = function() {
            e.rankModalVisible = false;
        };
        e.handleExclude = function() {
            e.isExclude = !e.isExclude;
        };
        e.handleShowMore = function() {
            const showMore = e.state.showMore;
            e.setState({
                showMore: !showMore
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.cluster.fetchVersion(this.props.match.params);
            }
        },
        {
            key: "render",
            value: function() {
                const match = this.props.match;
                const detail = this.cluster.detail;
                const showMore = this.state.showMore;
                return <div><div className={module3703.header}><div className={module3703.title}>{t("OVERVIEW")}</div></div><div className={module3703.content}><module186.Columns className={module3703["margin-t0"]}><module186.Column className="is-8"><Module3693 cluster={match.params.cluster} isExclude={this.isExclude}/><Module3698 clusterDetail={detail}/><Module3701 cluster={match.params.cluster}/></module186.Column><module186.Column className="is-4"><Module802 className={module3703.padding12}><Module816 cluster={detail} size="large" noStatus theme="light" className={module3703.clusterTitle}/>{globals.app.isMultiCluster ? <><Module3687 cluster={detail} version={this.cluster.version}/>{showMore && <Module3691 cluster={match.params.cluster}/>}<div className={module3(module3703.showMore)} onClick={this.handleShowMore}><module186.Icon name={showMore ? "chevron-up" : "chevron-down"} size={16}/><span className={module3703.text}>{showMore ? t("FOLD") : t("UNFOLD")}</span></div></> : <Module3691 cluster={match.params.cluster}/>}{globals.app.isPlatformAdmin && <Module3685 cluster={match.params.cluster}/>}</Module802><Module802 className={module3703.padding12}><Module3689 cluster={match.params.cluster} showRankModal={this.showRankModal}/></Module802></module186.Column></module186.Columns></div><Module3680 visible={this.rankModalVisible} cluster={match.params.cluster} onCancel={this.hideRankModal}/></div>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.clusterStore;
            }
        }
    ]);
    return n;
})(Component), i = module49(u.prototype, "isExclude", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), c = module49(u.prototype, "rankModalVisible", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), o = u)) || o) || o;
export default I;
