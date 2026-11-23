import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-138.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-109.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import { getLocalTime } from "./module-52.js";
import module796 from "./module-796.js";
import module1374 from "./module-1374.js";
import module984 from "./module-984.js";
const R = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.onOk = async function t() {
            await e.props.store.create({
                ...e.props,
                id: e.props.cluster_id
            });
            await e.props.store.fetchList({
                ...e.props,
                id: e.props.cluster_id
            });
            e.props.onOk();
        };
        e.onCancel = function() {
            e.props.onCancel();
        };
        return e;
    }
    module37(r, [
        {
            key: "getIsRebalancing",
            value: function(e) {
                const t = module26(e, "[0]");
                return t && t.status === "Creating";
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                if (this.getIsRebalancing(this.props.store.list.data)) {
                    const t = this.props;
                    const a = {
                        cluster: t.cluster,
                        namespace: t.namespace,
                        id: t.cluster_id
                    };
                    this.props.store.fetchList(a);
                    this.timer = setInterval(()=>{
                        _this.props.store.fetchList(a).then((t)=>{
                            if (!_this.getIsRebalancing(t)) {
                                clearInterval(_this.timer);
                            }
                        }, ()=>{
                            clearInterval(_this.timer);
                        });
                    }, 10000);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.timer) {
                    clearInterval(this.timer);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const e = {
                    ...this.props
                };
                const list = this.props.store.list;
                const r = this.getIsRebalancing(this.props.store.list.data);
                const disableSubmit = list.isLoading || r;
                return module553.default.createElement(module1374, {
                    width: 600,
                    footerClassName: module984.footer,
                    ...e,
                    disableSubmit,
                    onOk: this.onOk,
                    onCancel: this.onCancel,
                    okText: t("START_REBALANCING"),
                    okTooltip: r ? t("REBALANCING_IN_PROGRESS_DESC") : ""
                }, module553.default.createElement("div", {
                    className: module984.modalPadding
                }, module553.default.createElement(module186.Alert, {
                    className: module984.alert,
                    type: "warning",
                    message: t("KAFKA_OPERATION_WARNING")
                }), module553.default.createElement("div", {
                    className: module984.rebalance
                }, module553.default.createElement("div", {
                    className: module984.subTitle
                }, t("REBALANCING_HISTORY")), module553.default.createElement("div", {
                    className: module984.historyContainer
                }, module553.default.createElement("div", {
                    className: module984.row
                }, module553.default.createElement("div", {
                    className: module984.time
                }, t("TIME")), module553.default.createElement("div", {
                    className: module984.status
                }, t("STATUS"))), list.data.slice(0, 3).map((e)=>module553.default.createElement("div", {
                        key: e.name,
                        className: module3(module984.row, module984.historyItem)
                    }, module553.default.createElement("div", {
                        className: module984.time
                    }, getLocalTime(e.creationTimestamp).format("YYYY-MM-DD HH:mm:ss")), module553.default.createElement("div", {
                        className: module984.status
                    }, module553.default.createElement(module796, {
                        type: e.status,
                        name: t(e.statusName),
                        flicker: true
                    }))))))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default R;
R.propTypes = {
    onOk: module1.func,
    onCancel: module1.func
};
R.defaultProps = {
    onOk: function() {},
    onCancel: function() {}
};
