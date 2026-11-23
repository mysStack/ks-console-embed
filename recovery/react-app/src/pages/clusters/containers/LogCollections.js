import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-137.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module41 from "unpacked/module-41.js";
import module31 from "unpacked/module-31.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module14 from "unpacked/module-14.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module136 from "unpacked/module-136.js";
import module1153 from "unpacked/module-1153.js";
import module250 from "unpacked/module-250.js";
import { safeAtob, safeBtoa } from "utils/base64";
import { getValueObj, objectToYaml } from "utils/yaml";
import { Link } from "unpacked/module-433.js";
import module186 from "unpacked/module-186.js";
import Module791 from "components/Base/Text";
import Module790 from "components/Base/Panel";
import Module793 from "unpacked/module-793.js";
import Module3809 from "components/Modals/LogCollectionCreate";
import module853 from "stores/secret";
import { getHostClusterName, getLocalTime } from "utils/index";
import module1394, { supportNames } from "pages/clusters/containers/LogCollections/config";
import module3814 from "unpacked/module-3814.js";
let c;
let l;
const x = inject("rootStore")(c = observer((l = ((Component_1)=>{
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
    function n(...a_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...a_1);
        e.store = new module853;
        e.state = {
            showCreate: false
        };
        e.refresh = function() {
            e.store.fetchListByK8s({
                labelSelector: `logging.whizard.io/component=${e.component}`,
                cluster: e.props.match.params.cluster,
                namespace: "kubesphere-logging-system"
            });
        };
        e.handleTabChange = function(t) {
            e.props.rootStore.routing.push(`/clusters/${e.cluster}/log-collections/${t}`);
        };
        e.showCreateModal = function() {
            e.setState({
                showCreate: true
            });
        };
        e.hideCreateModal = function() {
            e.setState({
                showCreate: false
            });
        };
        e.createCollection = (()=>{
            const t = module44(module41.mark(function t(r) {
                let n;
                let a;
                let o;
                let c;
                let d;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                n = r.Name;
                                a = `${n}_${e.component}`.replace("-", "_");
                                if (o = module136(module26(module1394, `${n}.createConfig.${e.component}`, ""))) {
                                    t.next = 5;
                                    break;
                                }
                                return t.abrupt("return");
                            case 5:
                                c = module26(o, `data["sink.yaml"].sinks.[${a}]`, "");
                                if (!(n !== "elasticsearch" && n !== "opensearch")) {
                                    c.endpoints[0] = module1153(r.host, "http") ? `${r.host}:${r.port}` : `http://${r.host}:${r.port}`;
                                    c.bulk = {
                                        index: `{{ .cluster }}-${r.logstashPrefix}-%Y.%m.%d`
                                    };
                                }
                                if (n === "opensearch") {
                                    c.auth = {
                                        strategy: "basic",
                                        user: r?.auth?.user,
                                        password: r?.auth?.password
                                    };
                                }
                                if (n === "kafka") {
                                    c.bootstrap_servers = r.bootstrap_servers;
                                    c.topic = r.topic;
                                }
                                d = objectToYaml({
                                    data: {
                                        sinks: module31({}, a, c)
                                    }
                                });
                                o.data["sink.yaml"] = safeBtoa(d);
                                t.next = 13;
                                return e.store.create(o, {
                                    namespace: "kubesphere-logging-system",
                                    cluster: e.cluster
                                });
                            case 13:
                                e.hideCreateModal();
                                e.refresh();
                            case 15:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.refresh();
                const e = this.tabs.options.filter((e)=>!e.hidden).map((e)=>e.value);
                if (!e.includes(this.component)) {
                    this.handleTabChange(e[0] || "logs");
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
            key: "renderCreateButton",
            value: function() {
                if (this.enabledActions.includes("create")) {
                    return <module186.Button type="control" disabled={this.store.list.isLoading} onClick={this.showCreateModal}>{t("ADD_LOG_RECEIVER")}</module186.Button>;
                }
                return null;
            }
        },
        {
            key: "renderModal",
            value: function() {
                const showCreate = this.state.showCreate;
                return showCreate && <Module3809 title={t("ADD_LOG_RECEIVER")} store={this.store} visible={showCreate} isSubmitting={this.store.isSubmitting} onCancel={this.hideCreateModal} onOk={this.createCollection} component={this.component}/>;
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
                if (!module250(supportNames, e.name)) {
                    return null;
                }
                const r = e.name.split("-").pop();
                const n = `${r}_${this.component}`.replace("-", "_");
                const a = module26(module1394, r, {});
                const o = module26(getValueObj(safeAtob(module26(e._originData, 'data["sink.yaml"]', {}))), `sinks.${n}`, {});
                const U = module26(a, "ICON", function() {});
                const i = module26(a, "title", "");
                let c = module26(o, "endpoints[0]", "");
                if (r === "kafka") {
                    c = module26(o, "bootstrap_servers", "");
                }
                const l = {
                    logs: t("LOGGING"),
                    events: t("EVENT_PL"),
                    auditing: t("AUDIT_LOGS"),
                    "notification-history": t("NOTIFICATION_HISTORY")
                };
                return <Link key={e.uid} to={`${this.props.match.url}/${e.name}`}><Module790 className={module3814.item}>{<U width={40} height={40}/>}<Module791 title=<span className={module3814.title}>{i}</span> description={t("ADDRESS_VALUE", {
                    value: c
                })}/><Module791 title={module26(e, 'labels["logging.whizard.io/enable"]', "false") === "true" ? t("ENABLED") : t("DISABLED")} description={t("STATUS")}/><Module791 title={l[module26(e, 'labels["logging.whizard.io/component"]', "logs")]} description={t("TYPE")}/><Module791 title={getLocalTime(e.createTime).format("YYYY-MM-DD HH:mm:ss")} description={t("CREATION_TIME")}/></Module790></Link>;
            }
        },
        {
            key: "renderEmptyCollection",
            value: function() {
                return <div className={module3(module3814.pane, module3814.empty)}><module186.Icon size={40} name="file"/><p>{t("EMPTY_LOG_COLLECTIONS")}</p>{this.renderCreateButton()}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3814.wrapper}><Module793 className={module3814.header} icon="file" title={t("LOG_RECEIVER_PL")} description={t("LOG_COLLECTION_DESC")} tabs={this.tabs} extra=<div className={module3814.extra}><module186.Button type="flat" onClick={this.refresh}><module186.Icon name="refresh"/></module186.Button>{this.renderCreateButton()}</div>/>{this.renderCollection()}{this.renderModal()}</div>;
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
                const e = getHostClusterName();
                return {
                    value: this.component,
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "logs",
                            label: t("CONTAINER_LOGS"),
                            hidden: !globals.app.hasClusterExtensionModule(this.cluster, "whizard-logging")
                        },
                        {
                            value: "events",
                            label: t("RESOURCE_EVENTS"),
                            hidden: !globals.app.hasClusterExtensionModule(this.cluster, "whizard-events")
                        },
                        {
                            value: "auditing",
                            label: t("AUDIT_LOGS"),
                            hidden: !globals.app.hasClusterExtensionModule(this.cluster, "whizard-auditing")
                        },
                        {
                            value: "notification-history",
                            label: t("NOTIFICATION_HISTORY"),
                            hidden: globals.currentCluster !== e || !globals.app.hasExtensionModuleAnnotation("whizard-notification", "logging.kubesphere.io/enable-notification-history")
                        }
                    ]
                };
            }
        }
    ]);
    return n;
})(Component), module49(l.prototype, "collections", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "collections"), l.prototype), c = l)) || c) || c;
export default x;
