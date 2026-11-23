import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module473 from "stores/s2i/run";
import module186 from "unpacked/module-186.js";
import Module4899 from "unpacked/module-4899.js";
import module4901 from "unpacked/module-4901.js";
let s;
let l;
let i;
const k = observer((i = l = ((Component_1)=>{
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
        n.setAutoRefresh = function() {
            const data = n.store.list.data;
            clearInterval(n.timer);
            if (data.some((e)=>![
                    "successful",
                    "failed"
                ].includes(e.status) || module63(e.status))) {
                n.timer = setInterval(n.fetchData, 4000);
            }
        };
        n.fetchData = async function e() {
            let t;
            let a;
            let limit;
            let c;
            const s = arguments;
            t = s.length > 0 && s[0] !== undefined ? s[0] : {};
            a = n.props;
            limit = a.limit;
            c = a.params;
            await n.store.fetchS2IRunRecords({
                limit,
                ...c,
                ...t
            });
            n.setAutoRefresh();
        };
        n.getPagination = function() {
            const list = n.store.list;
            return {
                page: list.page,
                limit: list.limit,
                total: list.total
            };
        };
        n.handleSearch = function(e) {
            n.searchValue = e;
            n.fetchData({
                name: e
            }).then(()=>{
                n.props.onSearch(e);
            });
        };
        n.handlePage = function(page) {
            n.fetchData({
                page
            }).then(()=>{
                n.props.onPage(page);
            });
        };
        n.renderFooter = function() {
            const e = n.getPagination();
            const { total, page, limit } = e;
            return <module186.Level className={module4901.footer}><module186.LevelLeft>{t("TOTAL_ITEMS", {
                num: total
            })}</module186.LevelLeft><module186.LevelRight><module186.Pagination page={page} total={total} limit={limit} onChange={n.handlePage}/></module186.LevelRight></module186.Level>;
        };
        n.store = new module473;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                clearInterval(this.timer);
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const list = this.store.list;
                const { data, isLoading } = list;
                const o = <div className={module4901.body}>{module63(data) ? <div className={module4901.empty}>{t("NO_DATA")}</div> : data.map((t)=>_this.renderItem(t))}</div>;
                if (this.isTable) {
                    return <module186.Loading spinning={isLoading}>{o}</module186.Loading>;
                }
                return o;
            }
        },
        {
            key: "renderItem",
            value: function(runDetail) {
                const isLoading = this.store.list.isLoading;
                return <Module4899 key={runDetail.name} runDetail={runDetail} loading={isLoading} store={this.store} isB2i={this.props.isB2i}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, hideFooter } = props;
                return <div className={module3(className, module4901.content)}>{this.renderContent()}{!hideFooter && this.renderFooter()}</div>;
            }
        },
        {
            key: "isTable",
            get: function() {
                const props = this.props;
                const { hideHeader, hideFooter } = props;
                return !hideHeader || !hideFooter;
            }
        }
    ]);
    return r;
})(Component), l.propTypes = {
    prefix: module1.string,
    title: module1.string,
    detail: module1.object,
    hideHeader: module1.bool,
    hideFooter: module1.bool,
    onSearch: module1.func,
    onRefresh: module1.func,
    onPage: module1.func,
    limit: module1.number
}, l.defaultProps = {
    isB2i: false,
    detail: {},
    hideHeader: false,
    hideFooter: false,
    onSearch: function() {},
    onRefresh: function() {},
    onPage: function() {}
}, s = i)) || s;
export default k;
