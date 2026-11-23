import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-188.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import Module864 from "components/Base/ScrollLoad";
import module186 from "unpacked/module-186.js";
import { observer } from "unpacked/module-239.js";
import Module2911 from "components/Forms/CustomScaling/BaseInfo/WorkloadTableForm/Card";
import module1359 from "unpacked/module-1359.js";
let l;
const b = observer(l = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.handleSearch = function(name) {
            e.props.fetchList({
                name
            }, true);
        };
        e.handleRefresh = function() {
            const page = e.props.page;
            e.props.fetchList({
                limit: 10,
                page
            });
        };
        e.clearFilter = function() {
            e.handleSearch();
        };
        e.renderEmpty = function() {
            return <div className={module1359.emptyText}><span className={module1359.emptyTipIcon}><module186.Icon name="exclamation" size={48}/></span><div>{t("NO_MATCHING_RESULT_FOUND")}</div><p>{t("YOU_CAN_TRY_TO")}<span className={module1359.action} onClick={e.handleRefresh} data-test="table-empty-refresh">{t("REFRESH_DATA")}</span>{t("OR")}<span className={module1359.action} onClick={e.clearFilter} data-test="table-empty-clear-filter">{t("CLEAR_SEARCH_CONDITIONS")}</span></p></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.list.total < 1) {
                    this.props.fetchList();
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { list, fetchList, handleSelectWorkload, checkedValue, module } = props;
                const { data, total, page, isLoading } = list;
                return <div><module186.InputSearch className={module1359.search} value={list.filters.name} onSearch={this.handleSearch} placeholder={t("SEARCH_BY_NAME")}/><div className={module1359.cardList}>{total < 1 ? this.renderEmpty() : <Module864 data={data} total={total} page={page} loading={isLoading} onFetch={fetchList}>{data.map((e, key)=><Module2911 detail={{
                        ...e,
                        module
                    }} key={key} onClick={function() {
                        return handleSelectWorkload(e);
                    }} isChecked={checkedValue && checkedValue.name === e.name}/>)}</Module864>}</div></div>;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default b;
