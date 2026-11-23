import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import module63 from "unpacked/module-63.js";
import module3 from "unpacked/module-3.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module955 from "unpacked/module-955.js";
import module791 from "components/Base/Text";
import module875 from "components/Tables/Base/Empty";
import module816 from "components/Clusters/ClusterTitle";
import module916 from "components/Tables/Base/FilterInput";
import module3621 from "unpacked/module-3621.js";
let o;
const D = observer(o = ((e)=>{
    module55(r, e);
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
        t.fetchData = function(e = {}) {
            t.clusterStore.fetchList({
                limit: -1,
                ...e,
                labelSelector: "cluster-role.kubesphere.io/edge"
            });
        };
        t.handleEdgeClusterSelectChange = function(name) {
            t.props.onChange([
                {
                    name
                }
            ]);
        };
        t.clearFilter = function() {
            t.setState({
                filters: {}
            });
            t.fetchData();
        };
        t.handleReset = function() {
            const filters = t.state.filters;
            t.fetchData(filters);
        };
        t.clusterStore = new module955;
        t.state = {
            filters: {}
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const message = t("NO_CLUSTER_AVAILABLE_DESC", {
                    type: t("EDGE_CLUSTER")
                });
                const filters = this.state.filters;
                const n = module14.toJS(this.clusterStore.list);
                const { data, isLoading } = n;
                if (module63(data) && module63(filters) && !isLoading) {
                    return module553.default.createElement(module186.Alert, {
                        type: "warning",
                        message
                    });
                }
                return module553.default.createElement("div", {
                    className: module3621.wrapper
                }, module553.default.createElement("div", {
                    className: "margin-b12"
                }, module553.default.createElement(module916, {
                    placeholder: t("SEARCH_BY_NAME"),
                    columns: this.columns,
                    onChange: function(filters_1) {
                        _this.setState({
                            filters: filters_1
                        });
                        _this.fetchData(filters_1);
                    },
                    filters: this.state.filters
                })), module553.default.createElement(module186.RadioGroup, {
                    onChange: this.handleEdgeClusterSelectChange
                }, data.map((cluster)=>module553.default.createElement("div", {
                        key: cluster.name,
                        className: module3(module3621.item, module31({}, module3621.disabled, !globals.app.isMultiCluster)),
                        "data-cluster": cluster.name
                    }, module553.default.createElement(module186.Radio, {
                        key: cluster.name,
                        value: cluster.name,
                        disabled: false
                    }), module553.default.createElement(module816, {
                        className: module3621.cluster,
                        cluster,
                        isEdgeWize: true,
                        noTip: true
                    }), module553.default.createElement(module791, {
                        title: cluster?.hostCluster,
                        description: t("HOSTED_IN")
                    })))), isLoading && module553.default.createElement(module186.Loading, {
                    size: "large",
                    className: module3621.loading
                }), module63(data) && module553.default.createElement(module875, {
                    icon: "exclamation",
                    title: t("NO_MATCHING_RESULT_FOUND"),
                    desc: null,
                    action: module553.default.createElement("p", null, t("YOU_CAN_TRY_TO"), module553.default.createElement("span", {
                        className: module3621.action,
                        onClick: this.handleReset,
                        "data-test": "table-empty-refresh"
                    }, t("REFRESH_DATA")), t("OR"), module553.default.createElement("span", {
                        className: module3621.action,
                        onClick: this.clearFilter,
                        "data-test": "table-empty-clear-filter"
                    }, t("CLEAR_SEARCH_CONDITIONS")))
                }));
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
                    }
                ];
            }
        }
    ]);
    return r;
})(module553.Component)) || o;
export default D;
