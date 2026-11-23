import "unpacked/module-15.js";
import "unpacked/module-138.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-245.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module1335 from "unpacked/module-1335.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module1109 from "stores/event";
import module1623 from "unpacked/module-1623.js";
import { Modal, Status } from "components/Base/index";
import { joinSelector } from "utils/index";
import module2713 from "unpacked/module-2713.js";
let c;
const T = observer(c = ((Component_1)=>{
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
    })(n);
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.getColumns = function() {
            return [
                {
                    title: t("TYPE"),
                    dataIndex: "type",
                    width: "10%",
                    render: function(e) {
                        return <Status type={e} name={t(`EVENT_${e.toUpperCase()}`)}/>;
                    }
                },
                {
                    title: t("REASON"),
                    dataIndex: "reason",
                    width: "16%"
                },
                {
                    title: t("EVENT_AGE"),
                    dataIndex: "age",
                    width: "16%",
                    sorter: true,
                    sortOrder: a.state.reverse
                },
                {
                    title: t("SOURCE"),
                    dataIndex: "from",
                    width: "18%"
                },
                {
                    title: t("MESSAGE"),
                    dataIndex: "message"
                }
            ];
        };
        a.handleSort = function(e, t) {
            a.setState({
                reverse: t.order
            });
        };
        a.state = {
            reverse: "descend"
        };
        a.eventStore = e.isEdgeWize ? new module1623 : new module1109;
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "fetchData",
            value: async function() {
                let t;
                let r;
                let cluster;
                let namespace;
                let o;
                t = this.props;
                ({ detail: r = {}, cluster } = t);
                namespace = module26(r, "namespace", "");
                o = {
                    "involvedObject.name": module26(r, "name", ""),
                    "involvedObject.namespace": namespace,
                    "involvedObject.uid": module26(r, "uid", "")
                };
                this.eventStore.fetchList({
                    namespace,
                    cluster,
                    fieldSelector: joinSelector(o)
                });
            }
        },
        {
            key: "renderList",
            value: function() {
                const { data = [], isLoading } = this.eventStore.list;
                const dataSource = module1335(data, "lastTimestamp", this.state.reverse === "descend" ? "desc" : "asc");
                return <module186.Table className={module2713.table} dataSource={dataSource} columns={this.getColumns()} onChange={this.handleSort} loading={isLoading} emptyText=<div className={module2713.emptyText}><span className={module2713.emptyTipIcon}><module186.Icon name="exclamation" size={48}/></span><div>{t("NO_MATCHING_RESULT_FOUND")}</div></div>/>;
            }
        },
        {
            key: "render",
            value: function() {
                const e = {
                    ...this.props
                };
                return <Modal {...e} width={1160}>{this.renderList()}</Modal>;
            }
        }
    ]);
    return n;
})(Component)) || c;
export default T;
