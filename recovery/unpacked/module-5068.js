import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-110.js";
import "./module-85.js";
import "./module-62.js";
import "./module-188.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module14 from "./module-14.js";
import module244 from "./module-244.js";
import module189 from "./module-189.js";
import module1110 from "./module-1110.js";
import { trigger } from "./module-792.js";
import { getLocalTime } from "./module-52.js";
import Module789 from "./module-789.js";
import Module793 from "./module-793.js";
import Module874 from "./module-874.js";
import module5069 from "./module-5069.js";
let o;
const w = inject("rootStore", "devopsStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
        a.handleFetch = function(e, t) {
            a.routing.query(e, t);
        };
        a.handleCreate = function() {
            const params = a.props.match.params;
            const { devops, cluster } = params;
            a.trigger("devops.credential.create", {
                devops,
                cluster,
                success: function() {
                    a.getData();
                }
            });
        };
        a.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "35%",
                    render: function(title) {
                        const t = `${a.prefix}/${encodeURIComponent(title)}`;
                        return <Module789 to={a.isRuning ? null : t} title={title}/>;
                    }
                },
                {
                    title: t("TYPE"),
                    dataIndex: "type",
                    width: "25%",
                    render: function(e) {
                        return t(`CREDENTIAL_TYPE_${e.toUpperCase()}`);
                    }
                },
                {
                    title: t("DESCRIPTION"),
                    dataIndex: "description",
                    render: function(e) {
                        return e;
                    },
                    width: "25%"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    width: "20%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        a.store = new module1110;
        a.formTemplate = {};
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.unsubscribe = this.routing.history.subscribe(function(t) {
                    const r = module244.parse(t.search.slice(1));
                    const params = _this.props.match.params;
                    const { devops, cluster } = params;
                    _this.store.fetchList({
                        devops,
                        cluster,
                        ...r
                    });
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.unsubscribe) {
                    this.unsubscribe();
                }
            }
        },
        {
            key: "getData",
            value: function() {
                const params = this.props.match.params;
                const { devops, cluster } = params;
                const n = module244.parse(location.search.slice(1));
                this.store.fetchList({
                    devops,
                    cluster,
                    ...n
                });
            }
        },
        {
            key: "renderContent",
            value: function() {
                const e = module14.toJS(this.store.list);
                const { data, filters, isLoading, total, page, limit } = e;
                const onCreate = this.enabledActions.includes("create") ? this.handleCreate : null;
                const filters_1 = module189(filters, [
                    "page",
                    "limit",
                    "sortBy"
                ]);
                const pagination = {
                    total,
                    page,
                    limit
                };
                return <Module874 data={data} columns={this.getColumns()} filters={filters_1} pagination={pagination} rowKey="uid" isLoading={isLoading} onFetch={this.handleFetch} onCreate={onCreate} searchType="name" module={this.module} name={this.name}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module5069.wrapper}><Module793 title={t("CREDENTIAL_PL")} icon="key" description={t("DEVOPS_CREDENTIALS_DESC")} module={this.module}/>{this.renderContent()}</div>;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "credentials",
                    cluster: this.props.match.params.cluster,
                    devops: this.props.devopsStore.devops
                });
            }
        },
        {
            key: "prefix",
            get: function() {
                if (this.props.match.url.endsWith("/")) {
                    return this.props.match.url.slice(0, -1);
                }
                return this.props.match.url;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "module",
            get: function() {
                return "cridentials";
            }
        },
        {
            key: "name",
            get: function() {
                return "CREDENTIAL";
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default w;
