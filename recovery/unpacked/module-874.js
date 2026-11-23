import "./module-12.js";
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
import "./module-188.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module837 from "./module-837.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import { safeParseJSON } from "./module-52.js";
import Module2410 from "./module-2410.js";
import Module1046 from "./module-1046.js";
import Module916 from "./module-916.js";
import Module875 from "./module-875.js";
import Module887 from "./module-887.js";
import module2428 from "./module-2428.js";
function N(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const T = {
    ascend: false,
    descend: true
};
const R = ((Component_1)=>{
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
        n.handleChange = function(e, t) {
            n.props.onFetch({
                sortBy: t.field || "",
                ascending: !T[t.order],
                page: 1,
                ...e
            });
        };
        n.handlePagination = function({ page, limit }) {
            n.props.onFetch({
                page,
                limit
            });
        };
        n.handleRefresh = function() {
            const { onRefresh, justRefresh = true, onFetch, pagination, filters } = n.props;
            if (!(onRefresh && (onRefresh(filters), justRefresh))) {
                onFetch({
                    limit: pagination.limit,
                    page: pagination.page
                });
            }
        };
        n.handleColumnsHide = function(e) {
            n.setState({
                hideColumns: e
            }, function() {
                if (n.props.tableId) {
                    const e = safeParseJSON(localStorage.getItem("hide-columns"), {});
                    e[n.props.tableId] = n.state.hideColumns;
                    localStorage.setItem("hide-columns", JSON.stringify(e));
                }
            });
        };
        n.handleCancelSelect = function() {
            n.props.onSelectRowKeys([]);
        };
        n.handleFilterInput = function(e) {
            if (!module837(e, n.props.filters)) {
                n.props.onFetch(e, true);
            }
        };
        n.handleSearch = function(e) {
            const searchType = n.props.searchType;
            n.props.onFetch(module31({}, searchType, e), true);
        };
        n.clearFilter = function() {
            if (n.props.searchType) {
                n.handleSearch();
            }
            n.handleFilterInput([]);
        };
        n.renderSelectedTitle = function() {
            return <module186.Level><module186.LevelLeft>{n.renderSelectActions()}</module186.LevelLeft><module186.LevelRight><module186.Button type="flat" className={module2428.cancelSelect} onClick={n.handleCancelSelect} data-test="table-cancel-select">{t("DESELECT")}</module186.Button></module186.LevelRight></module186.Level>;
        };
        n.renderTableTitle = function() {
            if (n.props.selectedRowKeys && n.props.selectedRowKeys.length > 0 && !n.props.disabledSelectActions) {
                return n.renderSelectedTitle();
            }
            return n.renderNormalTitle();
        };
        n.renderTableFooter = function() {
            if (!n.props.pagination) {
                return null;
            }
            const pagination = n.props.pagination;
            const { total, page, limit } = pagination;
            return <Module887 page={page} total={total} limit={limit} onChange={n.handlePagination}/>;
        };
        const l = module26(safeParseJSON(localStorage.getItem("hide-columns"), {}), e.tableId, []);
        n.state = {
            hideColumns: l
        };
        return n;
    }
    module37(r, [
        {
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return !!this.props.alwaysUpdate || e.data !== this.props.data || e.columns.length !== this.props.columns.length || e.selectedRowKeys.length !== this.props.selectedRowKeys.length || !module837(e.filters, this.props.filters) || e.isLoading !== this.props.isLoading || !module837(e.pagination, this.props.pagination) || t.hideColumns.length !== this.state.hideColumns.length;
            }
        },
        {
            key: "renderSelectActions",
            value: function() {
                const props = this.props;
                const { onDelete, selectActions } = props;
                if (selectActions) {
                    return <div>{selectActions.map((e)=><module186.Button key={e.key} type={e.type} disabled={e.disabled} className={module2428.button} onClick={e.onClick} data-test={`table-${e.key}`}>{e.text}</module186.Button>)}</div>;
                }
                return <div>{onDelete && <module186.Button type="danger" className={module2428.button} onClick={onDelete} data-test="table-delete">{t("DELETE")}</module186.Button>}</div>;
            }
        },
        {
            key: "renderSearch",
            value: function() {
                const props = this.props;
                const { hideSearch, searchType, filters, columns, columnSearch, showTimeSelector, onTimeSelectorChange, onTimeSelectorDelete, showKeywords } = props;
                if (hideSearch) {
                    return null;
                }
                if (searchType) {
                    const placeholder = this.props.placeholder || t("SEARCH_BY_NAME");
                    return <module186.InputSearch className={module2428.search} value={filters[searchType]} onSearch={this.handleSearch} placeholder={placeholder}/>;
                }
                return <Module916 className={module2428.search} columns={columnSearch || columns} filters={filters} showTimeSelector={showTimeSelector} showKeywords={showKeywords} onTimeSelectorChange={onTimeSelectorChange} onTimeSelectorDelete={onTimeSelectorDelete} onChange={this.handleFilterInput}/>;
            }
        },
        {
            key: "renderActions",
            value: function() {
                const props = this.props;
                const { onCreate, createText, actions } = props;
                if (actions) {
                    return actions.map((e)=>{
                        if (e.customDom) {
                            return e.customDom;
                        }
                        if (e.tooltip) {
                            return <Module2410 key={`${e.key}_tooltip`} content={e.tooltip.message} placement={e.tooltip.placement}><div className={module2428.tooltipBox}><module186.Button key={e.key} type={e.type} className={module2428.create} onClick={e.onClick} data-test={`table-${e.key}`} disabled={e.forbidden || false}>{e.text}</module186.Button></div></Module2410>;
                        }
                        return <module186.Button key={e.key} type={e.type} className={module2428.create} onClick={e.onClick} data-test={`table-${e.key}`} disabled={e.forbidden || false}>{e.text}</module186.Button>;
                    });
                }
                if (onCreate) {
                    return <module186.Button type="control" className={module2428.create} onClick={onCreate} data-test="table-create">{t(createText || "CREATE")}</module186.Button>;
                }
                return null;
            }
        },
        {
            key: "renderNormalTitle",
            value: function() {
                const props = this.props;
                const { hideCustom, customFilter, columns } = props;
                const hideColumns = this.state.hideColumns;
                return <module186.Level>{customFilter && <module186.LevelLeft>{customFilter}</module186.LevelLeft>}<module186.LevelItem>{this.renderSearch()}</module186.LevelItem><module186.LevelRight><div><module186.Button type="flat" icon="refresh" onClick={this.handleRefresh} data-test="table-refresh"/>{!hideCustom && <Module1046 className={module2428.columnMenu} title={t("CUSTOM_COLUMNS")} columns={columns} value={hideColumns} onChange={this.handleColumnsHide}/>}{this.renderActions()}</div></module186.LevelRight></module186.Level>;
            }
        },
        {
            key: "renderEmptyText",
            value: function() {
                return this.props.emptyText || <div className={module2428.emptyText}><span className={module2428.emptyTipIcon}><module186.Icon name="exclamation" size={48}/></span><div>{t("NO_MATCHING_RESULT_FOUND")}</div><p>{t("YOU_CAN_TRY_TO")}<span className={module2428.action} onClick={this.handleRefresh} data-test="table-empty-refresh">{t("REFRESH_DATA")}</span>{t("OR")}<span className={module2428.action} onClick={this.clearFilter} data-test="table-empty-clear-filter">{t("CLEAR_SEARCH_CONDITIONS")}</span></p></div>;
            }
        },
        {
            key: "renderEmpty",
            value: function() {
                const { module, name, emptyProps = {} } = this.props;
                return <Module875 action={this.renderActions()} name={name} module={module} {...emptyProps}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, data, isLoading, silentLoading, rowKey, selectedRowKeys, onSelectRowKeys, hideHeader, hideFooter, extraProps, getCheckboxProps, expandedRowRender, rowExpandable } = props;
                if (this.showEmpty) {
                    return this.renderEmpty();
                }
                const y = {};
                if (!hideHeader) {
                    y.title = this.renderTableTitle();
                }
                if (!hideFooter) {
                    y.footer = this.renderTableFooter();
                }
                if (onSelectRowKeys) {
                    y.rowSelection = {
                        selectedRowKeys,
                        getCheckboxProps,
                        onSelect: function(e, t, a) {
                            onSelectRowKeys(a);
                        },
                        onSelectAll: function(e, t) {
                            onSelectRowKeys(t);
                        }
                    };
                }
                return <module186.Table className={module3(module2428.table, "ks-table", className, module2428.filterMenu)} rowKey={rowKey} columns={this.filteredColumns} dataSource={module14.toJS(data)} loading={!silentLoading && isLoading} onChange={this.handleChange} emptyText={this.renderEmptyText()} expandedRowRender={expandedRowRender} rowExpandable={rowExpandable} {...y} {...extraProps}/>;
            }
        },
        {
            key: "showEmpty",
            get: function() {
                const props = this.props;
                const { filters, pagination, isLoading } = props;
                if ("showEmpty" in this.props) {
                    return this.props.showEmpty;
                }
                return !isLoading && module63(filters) && pagination.total === 0;
            }
        },
        {
            key: "filteredColumns",
            get: function() {
                const hideColumns = this.state.hideColumns;
                const t = hideColumns === undefined ? [] : hideColumns;
                return this.props.columns.filter((e)=>e && !t.includes(e.key || e.dataIndex));
            }
        }
    ]);
    return r;
})(Component);
export default R;
R.propTypes = {
    data: module1.oneOfType([
        module1.array,
        module1.object
    ]).isRequired,
    columns: module1.array.isRequired,
    selectedRowKeys: module1.array,
    isLoading: module1.bool,
    pagination: module1.object,
    filters: module1.object,
    rowKey: module1.any,
    onFetch: module1.func,
    onRefresh: module1.func,
    onSelectRowKeys: module1.func,
    getCheckboxProps: module1.func,
    onDelete: module1.func,
    onCreate: module1.func,
    hideHeader: module1.bool,
    hideFooter: module1.bool,
    hideSearch: module1.bool,
    hideCustom: module1.bool,
    actions: module1.array,
    selectActions: module1.array,
    extraProps: module1.object,
    alwaysUpdate: module1.bool,
    emptyText: module1.any
};
R.defaultProps = {
    rowKey: "name",
    selectedRowKeys: [],
    onFetch: function() {},
    hideHeader: false,
    hideFooter: false,
    hideSearch: false,
    hideCustom: false,
    extraProps: {},
    pagination: {},
    filters: {}
};
