import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
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
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import Module796 from "./module-796.js";
import { getLocalTime } from "./module-52.js";
import module4428 from "./module-4428.js";
let o;
function _(e, t) {
    const r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let a = Object.getOwnPropertySymbols(e);
        if (t) {
            a = a.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        r.push.apply(r, a);
    }
    return r;
}
const S = inject("detailStore")(o = observer(o = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let n;
        module36(this, a);
        n = r.call(this, e);
        n.getColumns = function() {
            return [
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "create_time",
                    width: "24%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    width: "16%",
                    render: function(e) {
                        return <Module796 type={e} name={t(e)}/>;
                    }
                },
                {
                    title: t("MESSAGE"),
                    dataIndex: "result",
                    render: function(e) {
                        return e || "-";
                    }
                }
            ];
        };
        n.store = e.detailStore;
        return n;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "fetchData",
            value: function() {
                this.store.fetchEvents({
                    ...this.props.match.params
                });
            }
        },
        {
            key: "render",
            value: function() {
                const events = this.store.events;
                const { data, isLoading } = events;
                return <Module790 title={t("EVENT_PL")}><module186.Table className={module4428.table} dataSource={module14.toJS(data)} columns={this.getColumns()} loading={isLoading} rowKey="create_time"/></Module790>;
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default S;
