import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-188.js";
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
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import { inject, observer } from "./module-239.js";
import module3 from "./module-3.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import module864 from "./module-864.js";
import { trigger } from "./module-792.js";
import module4380 from "./module-4380.js";
import module1866 from "./module-1866.js";
let u;
let l;
let c;
const C = inject("rootStore")(u = observer(u = trigger((c = l = ((e)=>{
    module55(a, e);
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
        n.getConfigs = function() {
            return [
                {
                    type: "notingroup",
                    title: t("NOT_ASSIGNED_TCAP"),
                    onFetch: "fetchNotingroupData"
                },
                {
                    type: "ingroup",
                    title: t("ASSIGNED"),
                    onFetch: "fetchIngroupData"
                }
            ];
        };
        n.getCount = function(e) {
            return n.userStore[e].total || 0;
        };
        n.getColor = function(e) {
            if (e === n.state.type) {
                return "#55bc8a";
            }
            return "#c1c9d1";
        };
        n.fetchNotingroupData = function(e = {}) {
            const n_state = n.state;
            const { group, search } = n_state;
            n.userStore.fetchGroupUser({
                ...e,
                notingroup: group,
                name: search,
                type: "notingroup",
                limit: -1
            });
        };
        n.fetchIngroupData = function(e = {}) {
            const n_state = n.state;
            const { group, search } = n_state;
            n.userStore.fetchGroupUser({
                ...e,
                ingroup: group,
                name: search,
                type: "ingroup",
                limit: -1
            });
        };
        n.handleTypeChange = function(type) {
            n.setState({
                type
            });
        };
        n.handleSearch = function(search) {
            n.setState({
                search
            }, function() {
                n.fetchIngroupData();
                n.fetchNotingroupData();
            });
        };
        n.handleSelect = function(e) {
            n.props.onSelect(e);
        };
        n.handleDelete = function(e) {
            n.trigger("group.user.remove", {
                store: n.props.groupStore,
                detail: module14.toJS({
                    ...e,
                    group: n.state.group
                }),
                success: function() {
                    n.fetchIngroupData({
                        page: 1
                    });
                    n.fetchNotingroupData({
                        page: 1
                    });
                },
                ...n.props.match.params
            });
        };
        n.renderPlaceHolder = function() {
            return module553.default.createElement("div", {
                className: module1866.item
            }, t("DEPARTMENT_EMPTY_DESC"));
        };
        n.userStore = e.userStore;
        n.groupStore = e.groupStore;
        n.state = {
            type: "ingroup",
            group: e.group,
            search: ""
        };
        n.configs = n.getConfigs();
        return n;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const _this = this;
                if (!(e.refreshFlag === this.props.refreshFlag && e.group === this.props.group)) {
                    this.setState({
                        group: this.props.group
                    }, function() {
                        _this.fetchIngroupData();
                        _this.fetchNotingroupData();
                    });
                }
            }
        },
        {
            key: "renderToolBar",
            value: function() {
                const _this = this;
                return module553.default.createElement("div", {
                    className: "level"
                }, module553.default.createElement("div", {
                    className: "level-left"
                }, module553.default.createElement(module186.RadioGroup, {
                    mode: "button",
                    value: this.state.type,
                    onChange: this.handleTypeChange
                }, this.configs.map(({ type, title })=>module553.default.createElement(module186.RadioButton, {
                        key: type,
                        value: type
                    }, title, module553.default.createElement(module186.Tag, {
                        color: _this.getColor(type)
                    }, _this.getCount(type))))), this.state.group && module553.default.createElement(module186.InputSearch, {
                    className: module1866.search,
                    onSearch: this.handleSearch,
                    placeholder: t("SEARCH_BY_NAME")
                })));
            }
        },
        {
            key: "renderUserItem",
            value: function(e) {
                const _this = this;
                const { type, onFetch } = e;
                const { data = [], total, page, isLoading } = module14.toJS(this.userStore[type]);
                const props = this.props;
                const { selectedKeys, enabledActions } = props;
                const group = this.state.group;
                if (group || type !== "ingroup") {
                    return module553.default.createElement(module864, {
                        data,
                        total,
                        page,
                        loading: isLoading,
                        onFetch: this[onFetch]
                    }, data.map((user)=>module553.default.createElement(module4380, {
                            key: `${type}-${user.name}`,
                            type,
                            user,
                            group,
                            groupStore: _this.groupStore,
                            enabledActions,
                            selected: selectedKeys.includes(user.name),
                            onSelect: function() {
                                return _this.handleSelect(user);
                            },
                            onDelete: function() {
                                return _this.handleDelete(user);
                            }
                        })));
                }
                return this.renderPlaceHolder();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const type = this.state.type;
                return module553.default.createElement("div", {
                    className: module1866.userWrapper
                }, this.renderToolBar(), module553.default.createElement("div", {
                    className: module1866.scrollWrapper
                }, this.configs.map((r)=>module553.default.createElement("div", {
                        className: module3(module1866.tabPanel, type === r.type && module1866.active),
                        key: r.type
                    }, _this.renderUserItem(r)))));
            }
        }
    ]);
    return a;
})(module553.Component), l.propTypes = {
    group: module1.string,
    enabledActions: module1.array,
    selectedKeys: module1.array,
    refreshFlag: module1.bool,
    onSelect: module1.func
}, u = c)) || u) || u) || u;
export default C;
