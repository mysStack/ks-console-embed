import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module14 from "./module-14.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import { Link } from "./module-433.js";
import module186 from "./module-186.js";
import Module791 from "./module-791.js";
import Module790 from "./module-790.js";
import Module793 from "./module-793.js";
import module1848 from "./module-1848.js";
import { getLocalTime } from "./module-52.js";
import module1849 from "./module-1849.js";
import module4170 from "./module-4170.js";
let u;
let l;
const A = inject("rootStore")(u = observer((l = ((Component_1)=>{
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
        e.store = new module1848;
        e.state = {
            showCreate: false
        };
        e.refresh = function() {
            e.store.fetch({
                labelSelector: `logging.kubesphere.io/component=${e.component}`,
                cluster: e.props.match.params.cluster
            });
        };
        e.handleTabChange = function(t) {
            e.props.rootStore.routing.push(`/whizard-telemetry/${e.cluster}/log-collections/${t}`);
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.refresh();
                const e = this.tabs.options.filter((e)=>!e.hidden).map((e)=>e.value);
                if (!e.includes(this.component)) {
                    this.handleTabChange(e[0] || "logging");
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.component !== e.match.params.component) {
                    this.refresh();
                }
            }
        },
        {
            key: "renderCollection",
            value: function() {
                return <module186.Loading spinning={this.store.list.isLoading}><div>{this.collections.length ? this.collections.map(this.renderCollectionItem, this) : this.renderEmptyCollection()}</div></module186.Loading>;
            }
        },
        {
            key: "renderCollectionItem",
            value: function(e) {
                const e_type = e.type;
                const r = module26(module1849, e_type, {});
                const N = module26(r, "ICON", function() {});
                const u = module26(r, "title", "");
                const e_address = e.address;
                return <Link key={e.uid} to={`${this.props.match.url}/${e.name}`}><Module790 className={module4170.item}>{<N width={40} height={40}/>}<Module791 title=<span className={module4170.title}>{u}</span> description={`${t("LOG_ADDRESS")}${e_address}`}/><Module791 title={e.enabled ? t("ENABLED") : t("DISABLED")} description={t("STATUS")}/><Module791 title={t(e.component.toUpperCase())} description={t("TYPE")}/><Module791 title={getLocalTime(e.creationTimestamp).format("YYYY-MM-DD HH:mm:ss")} description={t("CREATION_TIME")}/></Module790></Link>;
            }
        },
        {
            key: "renderEmptyCollection",
            value: function() {
                return <div className={module3(module4170.pane, module4170.empty)}><module186.Icon size={40} name="file"/><p>{t("EMPTY_LOG_COLLECTIONS")}</p></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module4170.wrapper}><Module793 className={module4170.header} icon="file" title={t("LOG_RECEIVER_PL")} description={t("LOG_COLLECTION_DESC")} tabs={this.tabs} extra=<div className={module4170.extra}/>/>{this.renderCollection()}</div>;
            }
        },
        {
            key: "collections",
            get: function() {
                return this.store.list.data;
            }
        },
        {
            key: "component",
            get: function() {
                return this.props.match.params.component;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "cluster-settings",
                    cluster: this.props.match.params.cluster
                });
            }
        },
        {
            key: "tabs",
            get: function() {
                return {
                    value: this.component,
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "logging",
                            label: t("CONTAINER_LOGS"),
                            hidden: !globals.app.hasClusterModule(this.cluster, "logging")
                        },
                        {
                            value: "events",
                            label: t("RESOURCE_EVENTS"),
                            hidden: !globals.app.hasClusterModule(this.cluster, "events")
                        },
                        {
                            value: "auditing",
                            label: t("AUDIT_LOGS"),
                            hidden: !globals.app.hasClusterModule(this.cluster, "auditing")
                        }
                    ]
                };
            }
        }
    ]);
    return r;
})(Component), module49(l.prototype, "collections", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "collections"), l.prototype), u = l)) || u) || u;
export default A;
