import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module41 from "./module-41.js";
import "./module-31.js";
import module44 from "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import module910 from "./module-910.js";
import module1366 from "./module-1366.js";
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import module449 from "./module-449.js";
import module26 from "./module-26.js";
import { getRetentionDay } from "./module-1204.js";
import Module3524 from "./module-3524.js";
import module3526 from "./module-3526.js";
let o;
let i;
let c;
let s;
let f;
let d;
const x = observer((i = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        module65(e, "billReportList", c, module88(e));
        module65(e, "getBillReportList", s, module88(e));
        e.handleExportBillReport = module44(module41.mark(function t() {
            let a;
            let r;
            let n;
            let u;
            let o;
            let i;
            let c;
            let s;
            let f;
            let d;
            let start;
            let m;
            let h;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            a = e.props;
                            r = a.getMeterParamsByCrumb;
                            n = a.crumbData;
                            u = a.fetchMeterData;
                            o = a.cluster;
                            i = a.timeRange;
                            c = a.priceConfigList;
                            if (!module63(e.billReportList)) {
                                t.next = 3;
                                break;
                            }
                            return t.abrupt("return");
                        case 3:
                            s = r();
                            f = module449(n);
                            d = f.type;
                            start = f.start;
                            m = f.name;
                            if (d !== "cluster") {
                                s.cluster = o;
                            }
                            if (!(d !== "applications" && d !== "openpitrixs")) {
                                delete s[d];
                            }
                            h = [];
                            e.billReportList.forEach((e)=>{
                                const t = module1366(s);
                                t[e.type] = e.name;
                                let a = {
                                    start
                                };
                                if (e.type === "cluster") {
                                    const r = c.find((t)=>t.cluster === e.name);
                                    a = {
                                        start: getRetentionDay(module26(r, "retention_day", "7d"))
                                    };
                                }
                                if (e.name === m && d === e.type) {
                                    a = {
                                        ...i
                                    };
                                }
                                h.push(u({
                                    module: e.type,
                                    meters: "all",
                                    resources: [
                                        e.name
                                    ],
                                    isTime: true,
                                    operation: "export",
                                    ...t,
                                    ...a
                                }));
                            });
                            t.next = 11;
                            return Promise.all(h);
                        case 11:
                            t.sent.forEach((t, a)=>{
                                const r = new Blob([
                                    t
                                ], {
                                    type: "text/plain;charset=utf-8"
                                });
                                module910.saveAs(r, `${e.billReportList[a].name}.csv`);
                            });
                            e.billReportList = [];
                        case 14:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        module65(e, "getChildrenData", f, module88(e));
        module65(e, "cancelExportBillReport", d, module88(e));
        e.renderBillReportConform = function() {
            const e_props = e.props;
            const { active, priceConfig } = e_props;
            const l = active.type === "cluster" || active.type === "workspaces" || module63(priceConfig);
            if (module63(module14.toJS(e.billReportList))) {
                return null;
            }
            return <div className={module3526.exportContainer} style={{
                bottom: l ? "10px" : "70px"
            }}><div className={module3526.text}>{t("EXPORT_BILL")}</div><div className={module3526.button} onClick={e.cancelExportBillReport} data-test="confirm-cancel"><module186.Icon name="close" type="light"/></div><div className={module3526.button} onClick={e.handleExportBillReport} data-test="confirm-ok"><module186.Icon name="check" type="light"/></div></div>;
        };
        e.renderSideCardItem = function() {
            const { list, active, handleSelectResource, loading, clusterList = [] } = e.props;
            return list.map((t)=><Module3524 key={`${t.name}-${t.type}`} data={t} active={active} clusterList={clusterList} getCurrentMeterData={handleSelectResource} getChildrenData={e.getChildrenData} getCheckData={e.getBillReportList} loading={loading} isCheck={!module159(e.billReportList.find((e)=>e.name === t.name))}/>);
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.active.name !== e.active.name) {
                    this.cancelExportBillReport();
                }
            }
        },
        {
            key: "render",
            value: function() {
                const loading = this.props.loading;
                return <div className={module3526.side}><module186.Loading spinning={loading}>{this.renderSideCardItem()}</module186.Loading>{this.renderBillReportConform()}</div>;
            }
        }
    ]);
    return r;
})(Component), c = module49(i.prototype, "billReportList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), s = module49(i.prototype, "getBillReportList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ name, type }) {
            if (module159(_this.billReportList.find((e)=>e.name === name))) {
                _this.billReportList.push({
                    name,
                    type
                });
            } else {
                _this.billReportList = _this.billReportList.filter((e)=>e.name !== name);
            }
        };
    }
}), f = module49(i.prototype, "getChildrenData", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.billReportList = [];
            _this.props.getChildrenData(t);
        };
    }
}), d = module49(i.prototype, "cancelExportBillReport", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.billReportList = [];
        };
    }
}), o = i)) || o;
export default x;
