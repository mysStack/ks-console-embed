import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
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
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { getAreaChartOps } from "utils/monitoring";
import module186 from "unpacked/module-186.js";
import Module848 from "components/Base/Empty";
import { SimpleArea } from "components/Charts/index";
import module1401 from "unpacked/module-1401.js";
const O = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.getItemName = function(e) {
            return module26(e, "metric.pod", "-");
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { loading, config, data } = props;
                return <div className={module1401.charts}><module186.Loading spinning={loading}><div className={module1401.list}>{module63(data) ? <Module848/> : data.map((t)=>{
                    const a = _this.getItemName(t);
                    const l = getAreaChartOps({
                        ...config,
                        legend: [
                            config.legend || "-"
                        ],
                        data: [
                            t
                        ]
                    });
                    if (module63(l.data)) {
                        return null;
                    }
                    return <div key={a} className={module1401.item}><div className={module1401.title}>{a}</div><SimpleArea width="100%" {...l}/></div>;
                })}</div></module186.Loading></div>;
            }
        }
    ]);
    return a;
})(Component);
export default O;
O.propTypes = {
    loading: module1.bool,
    config: module1.object,
    data: module1.array
};
O.defaultTypes = {
    loading: false,
    config: {},
    data: []
};
