import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
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
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module916 from "./module-916.js";
import Module788 from "./module-788.js";
import Module864 from "./module-864.js";
import module438 from "./module-438.js";
import module955 from "./module-955.js";
import Module4053 from "./module-4053.js";
import module4055 from "./module-4055.js";
let l;
function S(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const C = observer(l = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.fetchData = function(e) {
            e = e || {};
            e.limit = -1;
            e.labelSelector = e.labelSelector ? `${e.labelSelector},!cluster-role.kubesphere.io/edge` : "!cluster-role.kubesphere.io/edge";
            t.store.fetchList({
                ...e
            });
        };
        t.handleSearch = function(name) {
            t.fetchData({
                name
            });
        };
        t.handleRefresh = function() {
            t.fetchData();
        };
        t.handleOnEnter = function(e) {
            const onChange = t.props.onChange;
            localStorage.setItem(`${globals.user.username}-cluster`, e);
            if (onChange) {
                onChange(e);
            }
        };
        t.store = e.isEdgeWize ? new module955 : new module438;
        t.state = {
            filters: {}
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, onCancel, isEdgeWize, isObservability } = props;
                const list = this.store.list;
                const { data, total, page, isLoading } = list;
                return <Module788 bodyClassName={module4055.body} visible={visible} onCancel={onCancel} width={960} icon="cluster" title={isEdgeWize ? t("EDGE_CLUSTER_PL") : t("CLUSTER_PL")} description={isEdgeWize ? t("EDGE_CLUSTER_DESC") : t("CLUSTER_DESC")} hideFooter><div className={module4055.bar}><module186.Columns><module186.Column><Module916 placeholder={t("SEARCH_BY_NAME")} columns={this.columns} onChange={function(filters) {
                    _this.setState({
                        filters
                    });
                    _this.fetchData(filters);
                }} filters={this.state.filters}/></module186.Column><module186.Column className="is-narrow"><module186.Button icon="refresh" type="flat" onClick={this.handleRefresh}/></module186.Column></module186.Columns></div><div className={module4055.list}><Module864 wrapperClassName={module4055.listWrapper} data={module14.toJS(data)} total={total} page={page} loading={isLoading} onFetch={this.fetchData}>{data.map((t)=>{
                    if (isObservability && !globals.app.hasClusterModule(t.name, "whizard-monitoring")) {
                        return null;
                    }
                    return <Module4053 key={t.uid} data={t} onEnter={_this.handleOnEnter} isEdgeWize={isEdgeWize}/>;
                })}</Module864></div></Module788>;
            }
        },
        {
            key: "columns",
            get: function() {
                return [
                    {
                        dataIndex: "name",
                        title: t("NAME"),
                        search: true
                    },
                    {
                        dataIndex: "alias",
                        title: t("ALIAS"),
                        search: true
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || l;
export default C;
