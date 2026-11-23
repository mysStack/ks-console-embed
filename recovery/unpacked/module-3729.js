import "./module-15.js";
import "./module-11.js";
import "./module-29.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-188.js";
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
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import Module793 from "./module-793.js";
import module244 from "./module-244.js";
import module1794 from "./module-1794.js";
import Module3730 from "./module-3730.js";
import module3732 from "./module-3732.js";
let o;
const E = inject("rootStore")(o = observer(o = ((Component_1)=>{
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
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.getColor = function(e) {
            if (e) {
                return "#f5a623";
            }
            return "#55bc8a";
        };
        a.getCount = function(e) {
            const exceptionCount = a.store.exceptionCount;
            const healthyCount = a.store.healthyCount;
            return exceptionCount[e] || healthyCount[e] || 0;
        };
        a.getConfigs = function() {
            return [
                {
                    type: "kubesphere",
                    title: "KubeSphere",
                    icon: "/assets/kubesphere.svg"
                },
                {
                    type: "kubernetes",
                    title: "Kubernetes",
                    icon: "/assets/kubernetes.svg"
                },
                {
                    type: "istio",
                    title: t("APPLICATION_GOVERNANCE"),
                    icon: "/assets/istio.svg",
                    disabled: !globals.app.hasClusterModule(a.cluster, "servicemesh")
                },
                {
                    type: "monitoring",
                    title: t("MONITORING"),
                    icon: "/assets/monitoring.svg",
                    disabled: !globals.app.hasClusterModule(a.cluster, "monitoring")
                },
                {
                    type: "logging",
                    title: t("LOGGING"),
                    icon: "/assets/logging.svg",
                    disabled: !globals.app.hasClusterModule(a.cluster, "logging")
                },
                {
                    type: "devops",
                    title: "DevOps",
                    icon: "/assets/dev-ops.svg",
                    disabled: !globals.app.hasClusterModule(a.cluster, "devops")
                },
                {
                    type: "edgewize",
                    title: "EdgeWize",
                    icon: "/assets/edgewize.svg",
                    disabled: !globals.app.hasClusterModule(a.cluster, "edgewize")
                }
            ];
        };
        a.handleTypeChange = function(type_1) {
            a.setState({
                type: type_1
            });
        };
        const type = (module244.parse(location.search.slice(1)) || {}).type;
        a.state = {
            type: type || "kubesphere"
        };
        a.configs = a.getConfigs();
        a.store = new module1794;
        a.store.fetchList({
            cluster: a.cluster
        });
        return a;
    }
    module37(n, [
        {
            key: "renderHeader",
            value: function() {
                return <Module793 icon="components" title={t("SYSTEM_COMPONENT_PL")} description={t("SERVICE_COMPONENTS_DESC")} extra=<div className={module3732.toolbar}>{this.renderBar()}</div>/>;
            }
        },
        {
            key: "renderBar",
            value: function() {
                const _this = this;
                const exceptionCount = this.store.exceptionCount;
                return <div className="inline-block"><module186.RadioGroup mode="button" value={this.state.type} onChange={this.handleTypeChange}>{this.configs.filter((e)=>!e.disabled).map(({ type, title })=><module186.RadioButton key={type} value={type}>{title}<module186.Tag color={_this.getColor(exceptionCount[type])}>{_this.getCount(type)}</module186.Tag></module186.RadioButton>)}</module186.RadioGroup></div>;
            }
        },
        {
            key: "renderCards",
            value: function(e) {
                const _this = this;
                return <div className={module3732.cards}>{e.map((component)=><Module3730 key={component.name} component={component} cluster={_this.cluster}/>)}</div>;
            }
        },
        {
            key: "renderComponents",
            value: function(e) {
                const data = this.store.list.data;
                const r = this.configs.find((t)=>t.type === e) || {};
                const n = data[e];
                if (module63(n)) {
                    return null;
                }
                return <div className={module3732.cardsWrapper}><div className={module3732.cardTitle}><img src={r.icon} alt={r.title}/></div>{this.renderCards(n)}</div>;
            }
        },
        {
            key: "renderList",
            value: function() {
                const isLoading = this.store.list.isLoading;
                const type = this.state.type;
                if (isLoading) {
                    return <div className="loading"><module186.Loading/></div>;
                }
                return this.renderComponents(type);
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3732.wrapper}>{this.renderHeader()}{this.renderList()}</div>;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.match.url;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default E;
