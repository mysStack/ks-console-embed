import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-138.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import module194 from "unpacked/module-194.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
export default function(E) {
    const t = ((Component_1)=>{
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
        function r(...n_1) {
            let e;
            module36(this, r);
            e = a.call(this, ...n_1);
            e.getColumns = function() {
                const columns = e.props.columns;
                return [].concat(module61(columns), [
                    {
                        key: "more",
                        width: 20,
                        render: e.renderMore
                    }
                ]);
            };
            e.handleMoreMenuClick = function(t) {
                return function(a, r) {
                    const n = e.enabledItemActions.find((e)=>e.key === r);
                    if (n && n.onClick) {
                        n.onClick(t);
                    }
                };
            };
            e.renderMore = function(t, a) {
                if (module63(e.enabledItemActions)) {
                    return null;
                }
                const content = e.renderMoreMenu(a);
                if (content === null) {
                    return null;
                }
                return <module186.Dropdown content={content} trigger="click" placement="bottomRight"><module186.Button icon="more" type="flat"/></module186.Dropdown>;
            };
            e.renderMoreMenu = function(t) {
                const a = e.enabledItemActions.map((e)=>{
                    const a = module194(e.show) ? e.show(t) : e.show || true;
                    const name = module194(e.icon) ? e.icon(t) : e.icon;
                    const n = module194(e.text) ? e.text(t) : e.text;
                    const l = module26(e, "disabled", undefined);
                    if (a) {
                        return <module186.Menu.MenuItem key={e.key} disabled={!!module194(l) && l(t)}><module186.Icon name={name}/> <span data-test={`table-item-${e.key}`}>{n}</span></module186.Menu.MenuItem>;
                    }
                    return null;
                });
                if (a.every((e)=>e === null)) {
                    return null;
                }
                return <module186.Menu onClick={e.handleMoreMenuClick(t)}>{a}</module186.Menu>;
            };
            return e;
        }
        module37(r, [
            {
                key: "getEnabledTableActions",
                value: function() {
                    const _this = this;
                    const props = this.props;
                    const { tableActions, enabledActions, ...rest } = props;
                    Object.assign(tableActions, rest);
                    if (!enabledActions.includes("delete")) {
                        tableActions.onDelete = null;
                    }
                    if (!enabledActions.includes("create")) {
                        tableActions.onCreate = null;
                    }
                    if (tableActions.actions) {
                        tableActions.actions = tableActions.actions.filter((t)=>!t.action || typeof t.filter === "function" && t.filter.call(_this, t) || enabledActions.includes(t.action));
                    }
                    if (tableActions.selectActions) {
                        tableActions.selectActions = tableActions.selectActions.filter((e)=>!e.action || enabledActions.includes(e.action));
                    }
                    if (module63(tableActions.selectActions) && !tableActions.disabledSelectActions) {
                        tableActions.onSelectRowKeys = null;
                    }
                    return tableActions;
                }
            },
            {
                key: "render",
                value: function() {
                    return <E {...this.getEnabledTableActions()} columns={this.getColumns()}/>;
                }
            },
            {
                key: "enabledItemActions",
                get: function() {
                    const props = this.props;
                    const { itemActions, enabledActions } = props;
                    return itemActions.filter((e)=>!e.action || enabledActions.includes(e.action));
                }
            }
        ]);
        return r;
    })(Component);
    t.defaultProps = {
        itemActions: [],
        enabledActions: [],
        tableActions: {}
    };
    return observer(t);
};
