import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
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
import module189 from "unpacked/module-189.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module244 from "unpacked/module-244.js";
import { getLocalTime } from "utils/index";
import Module797 from "components/Tables/List";
import Module963 from "unpacked/module-963.js";
let o;
const D = inject("rootStore", "detailStore")(o = observer(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.store = e.props.detailStore || {};
        e.name = "Commit";
        e.handleFetch = function(t, r) {
            e.routing.query(t, r);
        };
        e.getFilteredValue = function(t) {
            return e.store.list.filters[t];
        };
        e.getColumns = function() {
            return [
                {
                    title: t("COMMIT"),
                    dataIndex: "commitId",
                    width: "20%",
                    render: function(e, t) {
                        return <a href={t.url} target="_blank" rel="noreferrer noopener">{e && e.slice(0, 6)}</a>;
                    }
                },
                {
                    title: t("AUTHOR"),
                    dataIndex: "author",
                    width: "20%",
                    render: function(e) {
                        return e || "-";
                    }
                },
                {
                    title: t("MESSAGE"),
                    dataIndex: "title",
                    width: "40%"
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "startTime",
                    isHideable: true,
                    width: "15%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                const params = this.props.match.params;
                this.unsubscribe = this.routing.history.subscribe(function(r) {
                    if (r.pathname === _this.props.match.url) {
                        const n = module244.parse(r.search.slice(1));
                        _this.getData({
                            ...params,
                            ...n
                        });
                    }
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.unsubscribe) {
                    this.unsubscribe();
                }
            }
        },
        {
            key: "getData",
            value: function(e) {
                this.store.getCommits({
                    ...e
                });
            }
        },
        {
            key: "render",
            value: function() {
                const e = module14.toJS(this.store.commitsList);
                const { data, filters, selectedRowKeys, isLoading, total, page, limit } = e;
                const u = isLoading === false && total === 0;
                const filters_1 = module189(filters, "page");
                if (u && !filters.page) {
                    return <Module963 desc={t("NO_COMMIT_FOUND")}/>;
                }
                const pagination = {
                    total,
                    page,
                    limit
                };
                return <Module797 data={data} rowKey="commitId" columns={this.getColumns()} filters={filters_1} pagination={pagination} isLoading={isLoading} selectedRowKeys={selectedRowKeys} onFetch={this.handleFetch} hideSearch/>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default D;
