import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import Module790 from "components/Base/Panel";
import Module796 from "components/Base/Status";
import module3835 from "unpacked/module-3835.js";
const v = ((Component_1)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.getColumns = function() {
            return [
                {
                    title: t("TYPE"),
                    dataIndex: "type",
                    width: "10%",
                    render: function(e) {
                        return <Module796 type={e} name={t(`EVENT_${e.toUpperCase()}`)}/>;
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
                    width: "16%"
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
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, loading } = props;
                return <Module790 title={t("EVENT_PL")}><module186.Table className={module3835.table} dataSource={data} columns={this.getColumns()} loading={loading}/></Module790>;
            }
        }
    ]);
    return r;
})(Component);
v.propTypes = {
    data: module1.array,
    loading: module1.bool
};
export default v;
