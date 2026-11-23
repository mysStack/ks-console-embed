import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-48.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-188.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import Module790 from "./module-790.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module14 from "./module-14.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module250 from "./module-250.js";
import { PAGESIZE_OPTION } from "./module-72.js";
import module3 from "./module-3.js";
import Module3929 from "./module-3929.js";
import module1834 from "./module-1834.js";
let l;
const N = observer(l = ((Component_1)=>{
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
        n.getRules = function() {
            const n_state = n.state;
            const { searchValue, page, limit } = n_state;
            let n__rules = n._rules;
            if (searchValue !== "") {
                n__rules = n._rules.filter((e)=>module250(e.alert, searchValue));
            }
            return module136(n__rules).slice((page - 1) * limit, page * limit);
        };
        n.handleExpandClick = function(e) {
            n.setState(function(t) {
                return {
                    expandIndex: t.expandIndex === e ? "" : e
                };
            });
        };
        n.handleSearch = function(e, searchValue) {
            n.setState({
                searchValue,
                page: 1
            });
        };
        n.handleRefresh = function() {
            n.setState({
                searchValue: ""
            }, function() {
                n.props.handleRefresh();
            });
        };
        n.handlePage = function(page) {
            n.setState({
                page
            });
        };
        n.handlePageSizeClick = function(e, limit) {
            n.setState({
                limit
            });
        };
        n.renderHeader = function() {
            const searchValue = n.state.searchValue;
            return <div className={module1834.header}><module186.InputSearch className={module1834.search} name="search" value={searchValue} placeholder={t("SEARCH_BY_NAME")} onChange={n.handleSearch} autoComplete="off"/><div className={module1834.actions}><module186.Button type="flat" icon="refresh" onClick={n.handleRefresh}/></div></div>;
        };
        n.renderFooter = function() {
            const n_pagination = n.pagination;
            const { total, limit } = n_pagination;
            return <module186.Level className={module1834.footer}><module186.LevelLeft><div className={module1834.pageSizeBox}><module186.Dropdown placement="top" trigger="hover" content=<module186.Menu className={module1834.pageSizeMenu} onClick={n.handlePageSizeClick}>{PAGESIZE_OPTION.map((e)=><module186.Menu.MenuItem className={module3(module1834.pageSizeMenuitem)} key={e}><span>{e}</span></module186.Menu.MenuItem>)}</module186.Menu>><div className={module1834.pagesize}><span className={module1834.text}>{t("SHOW_NUM", {
                num: limit
            })}</span><module186.Icon name="caret-down" size={16}/></div></module186.Dropdown><div className={module1834.gap}/><span>{t("TOTAL_ITEMS", {
                num: total
            })}</span></div></module186.LevelLeft><module186.LevelRight><module186.Pagination {...n_pagination} onChange={n.handlePage}/></module186.LevelRight></module186.Level>;
        };
        n.state = {
            page: 1,
            limit: 10,
            expandIndex: "",
            searchValue: ""
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const expandIndex = this.state.expandIndex;
                const props = this.props;
                const { store, cluster, namespace } = props;
                const o = this.getRules();
                return <Module790 title={t("ALERTING_RULE")}>{this.renderHeader()}{o.map((rule, r)=><Module3929 key={r} rule={rule} index={r} store={store} isExpand={expandIndex === r} status={rule.state} onExpandClick={_this.handleExpandClick} cluster={cluster} namespace={namespace}/>)}{this.renderFooter()}</Module790>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.store;
            }
        },
        {
            key: "_rules",
            get: function() {
                const _this = this;
                return this.props.rules.map((t, a)=>({
                        ...t,
                        state: _this.status[a]
                    }));
            }
        },
        {
            key: "status",
            get: function() {
                const e = module26(this.store, "detail._originDataWithStatus.status.rulesStatus", []);
                return module14.toJS(e);
            }
        },
        {
            key: "pagination",
            get: function() {
                const state = this.state;
                return {
                    page: state.page,
                    limit: state.limit,
                    total: state.searchValue !== "" ? this.getRules().length : this._rules.length
                };
            }
        }
    ]);
    return r;
})(Component)) || l;
export default N;
