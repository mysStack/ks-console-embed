import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import Module802 from "./module-802.js";
import module1987 from "./module-1987.js";
let o;
let i;
let l;
const D = inject("detailStore")(o = observer((l = i = ((Component_1)=>{
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
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "50%"
                },
                {
                    title: t("RECORD"),
                    width: "50%",
                    render: function(t) {
                        if (t.ranges) {
                            const r = t.name.split("/");
                            const to = `/${e.workspace}/clusters/${e.cluster}/devops/${r[0]}/pipelines/${r[1]}${r[2] ? `/branch/${r[2]}` : ""}/activity`;
                            return <span>{t.ranges.ranges.map((e)=><Link to={to} key={`${e.start}${e.end}`}>#{e.start}-#{e.end}   </Link>)}</span>;
                        }
                        return "-";
                    }
                }
            ];
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const detailStore = this.props.detailStore;
                const { usage, isLoading } = detailStore;
                return <Module802 title={t("EVENT_PL")}><module186.Table className={module1987.table} dataSource={module14.toJS(module26(usage, "fingerprint.usage", [])) || []} rowKey="name" columns={this.getColumns()} loading={isLoading}/></Module802>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        }
    ]);
    return n;
})(Component), i.propTypes = {
    data: module1.array,
    loading: module1.bool
}, o = l)) || o) || o;
export default D;
