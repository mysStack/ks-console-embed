import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module929 from "unpacked/module-929.js";
import module856 from "unpacked/module-856.js";
import { cacheFunc } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import { getSuitableValue } from "utils/monitoring";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module848 from "components/Base/Empty";
import module1401 from "unpacked/module-1401.js";
const N = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.getItemName = function(e) {
            return module26(e, "metric.pod", "-");
        };
        n.getCurrentValue = function(e) {
            const config = n.props.config;
            const { type, unitType } = config;
            return getSuitableValue(module26(e, "value[1]"), unitType || type);
        };
        n.handleScroll = function({ target }) {
            const { clientHeight, scrollHeight } = target;
            const l = clientHeight + target.scrollTop === scrollHeight;
            const n_props = n.props;
            const { data, page, total, onFetch } = n_props;
            if (!n.scrolling && total !== data.length && l) {
                n.scrolling = true;
                onFetch({
                    more: true,
                    page: page + 1
                }).then(()=>{
                    n.scrolling = false;
                });
            }
        };
        n.toggleChecked = function(showChecked) {
            n.setState({
                showChecked
            });
        };
        n.handleCheck = function(e) {
            const a = n.getItemName(e);
            return cacheFunc(`_resource_${a}`, function() {
                const maxChecked = n.props.maxChecked;
                const r = module61(n.props.checked);
                if (r.includes(a)) {
                    module929(r, function(e) {
                        return e === a;
                    });
                } else if (r.length >= maxChecked) {
                    module240.info({
                        content: t("MONITORING_SELECT_LIMIT_MSG")
                    });
                } else {
                    r.push(a);
                }
                n.props.onChange(r);
            }, module88(n));
        };
        n.renderResourceItem = function(e) {
            const checked = n.props.checked;
            const r = n.getItemName(e);
            const value = n.getCurrentValue(e);
            return <div key={r} className={module1401.item} onClick={n.handleCheck(e)}><module186.Checkbox className={module1401.itemCheck} checked={checked.includes(r)}/><module186.Icon name={n.icon} size={16}/><div className={module1401.itemInfo}><strong title={r}>{r}</strong><p>{t("CURRENT_VALUE", {
                value
            })}</p></div></div>;
        };
        n.renderResourceList = function(e) {
            if (module63(e)) {
                return <Module848/>;
            }
            return e.map(n.renderResourceItem);
        };
        n.state = {
            showChecked: false
        };
        n.listRef = createRef();
        n.throttleScroll = module856(n.handleScroll, 100);
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.listNode = this.listRef.current;
                if (this.listNode) {
                    this.listNode.addEventListener("scroll", this.throttleScroll);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.listNode) {
                    this.listNode.removeEventListener("scroll", this.throttleScroll);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { loading, name } = props;
                const showChecked = this.state.showChecked;
                const u = showChecked ? this.checkedData : this.props.data;
                return <div className={module1401.resources}><div className={module1401.title}><strong>{t(name.toUpperCase())}</strong><module186.Checkbox checked={showChecked} onChange={this.toggleChecked}>{t("SHOW_SELECTED_ONLY")}</module186.Checkbox></div><div className={module1401.content}><module186.Loading spinning={loading}><div className={module1401.list}><div className={module3(module31({}, module1401.hide, !showChecked))}>{this.renderResourceList(u)}</div><div className={module3(module31({}, module1401.hide, showChecked))} ref={this.listRef}>{this.renderResourceList(u)}</div></div></module186.Loading></div></div>;
            }
        },
        {
            key: "icon",
            get: function() {
                return ICON_TYPES[this.props.name.toLowerCase()] || "appcenter";
            }
        },
        {
            key: "checkedData",
            get: function() {
                const _this = this;
                const props = this.props;
                const t_checked = props.checked;
                return props.data.filter((t)=>t_checked.includes(_this.getItemName(t)));
            }
        }
    ]);
    return r;
})(Component);
export default N;
N.propTypes = {
    loading: module1.bool,
    config: module1.object,
    name: module1.string,
    maxChecked: module1.number,
    page: module1.number,
    total: module1.number,
    checked: module1.array,
    data: module1.array,
    onFetch: module1.func,
    onChange: module1.func
};
N.defaultProps = {
    loading: false,
    config: {},
    name: "Resources",
    maxChecked: 10,
    page: 1,
    total: 0,
    checked: [],
    data: [],
    onFetch: function() {},
    onChange: function() {}
};
