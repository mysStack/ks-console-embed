import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-315.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-442.js";
import "./module-42.js";
import "./module-57.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module1 from "./module-1.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module243 from "./module-243.js";
import module240 from "./module-240.js";
import module2770 from "./module-2770.js";
const O = ((e)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.state = {
            showDropdown: false
        };
        e.toggleDropdown = function() {
            e.setState({
                showDropdown: !e.state.showDropdown
            });
        };
        e.hideDropdown = function() {
            e.setState({
                showDropdown: false
            });
        };
        e.handleRecentClick = function(t) {
            const index = t.currentTarget.dataset.index;
            const e_props = e.props;
            const r_recentOpts = e_props.recentOpts;
            e_props.onRecentSelect(module26(r_recentOpts, `[${index}].value`));
        };
        e.handleSubmit = function({ startTime, endTime, interval }) {
            const startTime_1 = module96(startTime, 1)[0];
            const endTime_1 = module96(endTime, 1)[0];
            if (startTime_1 > endTime_1) {
                module240.error({
                    content: t("TIMERANGE_SELECTOR_MSG")
                });
            } else {
                e.props.onCustomSubmit({
                    startTime: startTime_1,
                    endTime: endTime_1,
                    interval
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const showDropdown = this.state.showDropdown;
                const props = this.props;
                const { format, timeRange } = props;
                const n = format(props.recent || {}, timeRange);
                return module553.default.createElement("div", {
                    className: module3(module2770.wrapper, module31({}, module2770.active, showDropdown))
                }, module553.default.createElement("div", {
                    className: module3(module2770.mask, module31({}, module2770.active, showDropdown)),
                    onClick: this.hideDropdown
                }), module553.default.createElement("div", {
                    className: module2770.content,
                    onClick: this.toggleDropdown
                }, module553.default.createElement(module186.Icon, {
                    name: "calendar",
                    type: "light"
                }), module553.default.createElement("span", null, n), module553.default.createElement(module186.Icon, {
                    name: "chevron-down",
                    type: "light"
                })), this.renderDropDown());
            }
        },
        {
            key: "renderDropDown",
            value: function() {
                return module553.default.createElement("div", {
                    className: module2770.dropdown
                }, this.renderRecentOpts(), this.renderCustomOpts());
            }
        },
        {
            key: "renderRecentOpts",
            value: function() {
                const _this = this;
                const recentOpts = this.props.recentOpts;
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module2770.title
                }, t("SELECT_TIME_RANGE")), module553.default.createElement("div", {
                    className: module2770.recentWrapper
                }, recentOpts.map(({ label }, a)=>module553.default.createElement("span", {
                        onClick: _this.handleRecentClick,
                        "data-index": a,
                        key: a
                    }, label))));
            }
        },
        {
            key: "renderCustomOpts",
            value: function() {
                const props = this.props;
                const { timeRange, interval, intervalOpts } = props;
                const { startTime, endTime } = timeRange;
                const c = {
                    enableSeconds: true,
                    enableTime: true,
                    dateFormat: "Y-m-d H:i:S"
                };
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module2770.title
                }, t("CUSTOM_TIME_RANGE")), module553.default.createElement(module186.Form, {
                    data: {
                        interval,
                        startTime: [
                            startTime
                        ],
                        endTime: [
                            endTime
                        ]
                    },
                    onSubmit: this.handleSubmit
                }, module553.default.createElement(module186.Form.Item, {
                    label: t("START_TIME")
                }, module553.default.createElement(module186.DatePicker, {
                    name: "startTime",
                    ...c
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("END_TIME")
                }, module553.default.createElement(module186.DatePicker, {
                    name: "endTime",
                    ...c
                })), module553.default.createElement("div", {
                    className: module2770.footer
                }, module63(intervalOpts) || module553.default.createElement(module186.Form.Item, {
                    label: t("SAMPLING_INTERVAL")
                }, module553.default.createElement(module186.Select, {
                    name: "interval",
                    className: module2770.select,
                    options: intervalOpts
                })), module553.default.createElement("div", null, module553.default.createElement(module186.Button, {
                    htmlType: "submit"
                }, t("OK"))))));
            }
        }
    ]);
    return r;
})(module553.Component);
O.propTypes = {
    recent: module1.object,
    timeRange: module1.object,
    format: module1.func,
    recentOpts: module1.array,
    interval: module1.string,
    intervalOpts: module1.array,
    onRecentSelect: module1.func,
    onCustomSubmit: module1.func
};
O.defaultProps = {
    recent: null,
    timeRange: {
        startTime: Date.now(),
        endTime: Date.now()
    },
    format: function({ count, unit } = {}, n) {
        const n_startTime = n.startTime;
        const o = n_startTime === undefined ? 0 : n_startTime;
        const n_endTime = n.endTime;
        const c = n_endTime === undefined ? 0 : n_endTime;
        if (count) {
            return `${t("LAST")} ${count} ${t(unit)}`;
        }
        return `${module243(o).format("YYYY/MM/DD HH:mm:ss")} ~ ${module243(c).format("YYYY/MM/DD HH:mm:ss")}`;
    },
    recentOpts: [
        {
            label: "Last 5 Minutes",
            value: {
                count: 5,
                unit: "Minutes"
            }
        }
    ],
    intervalOpts: [],
    onRecentSelect: function() {},
    onCustomSummit: function() {}
};
export default O;
