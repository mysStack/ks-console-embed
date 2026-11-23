import "./module-15.js";
import "./module-5.js";
import "./module-200.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import * as module553 from "./module-553.js";
import { PAGESIZE_OPTION } from "./module-72.js";
import module5772 from "./module-5772.js";
import module2427 from "./module-2427.js";
const y = ((e)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.state = {
            pagesize: 10
        };
        e.handlePrev = function() {
            const e_props = e.props;
            const { page, onChange, limit } = e_props;
            if (onChange) {
                onChange({
                    page: Math.max(page - 1, 1),
                    limit
                });
            }
        };
        e.handleNext = function() {
            const e_props = e.props;
            const { page, onChange, limit } = e_props;
            if (onChange) {
                onChange({
                    page: Math.min(page + 1, e.totalPage),
                    limit
                });
            }
        };
        e.renderPagesize = function() {
            const pagesize = e.state.pagesize;
            const total = e.props.total;
            return module553.default.createElement("div", {
                className: module2427.pageSizeBox
            }, module553.default.createElement(module186.Dropdown, {
                placement: "bottomLeft",
                trigger: "hover",
                content: module553.default.createElement(module186.Menu, {
                    className: module2427.pageSizeMenu,
                    onClick: e.handlePageSizeClick
                }, PAGESIZE_OPTION.map((e)=>module553.default.createElement(module186.Menu.MenuItem, {
                        className: module3(module2427.pageSizeMenuitem),
                        key: e
                    }, module553.default.createElement("span", null, e))))
            }, module553.default.createElement("div", {
                className: module2427.pagesize
            }, module553.default.createElement("span", {
                className: module2427.text
            }, t("SHOW_NUM", {
                num: pagesize
            })), module553.default.createElement(module186.Icon, {
                name: "caret-down",
                size: 16
            }))), module553.default.createElement("div", {
                className: module2427.gap
            }), module553.default.createElement("span", null, t("TOTAL_ITEMS", {
                num: total
            })));
        };
        e.handlePageSizeClick = function(t, a) {
            const onChange = e.props.onChange;
            e.setState({
                pagesize: a
            }, function() {
                onChange({
                    page: 1,
                    limit: a
                });
            });
        };
        e.renderPageDropDown = function() {
            const page = e.props.page;
            if (e.totalPage > 0) {
                const a = Array.from({
                    length: e.totalPage
                }, function(e, t) {
                    const a = ++t;
                    return {
                        id: a,
                        value: a
                    };
                });
                if (a.length <= 10) {
                    return module553.default.createElement(module186.Menu, {
                        className: module3(module2427.menu)
                    }, module553.default.createElement(module553.default.Fragment, null, a.map((a)=>module553.default.createElement(module186.Menu.MenuItem, {
                            className: module3(module2427.menuitem, module31({}, module2427.menuActive, page === a.value)),
                            key: a.id,
                            onClick: function() {
                                return e.handlePageMenuClick(a.value);
                            }
                        }, a.value))));
                }
                return module553.default.createElement(module186.Menu, {
                    className: module3(module2427.menu)
                }, module553.default.createElement(module5772, {
                    data: a,
                    key: "page-dropdown",
                    itemKey: "id",
                    height: 160,
                    itemHeight: 32
                }, function(a) {
                    return module553.default.createElement(module186.Menu.MenuItem, {
                        className: module3(module2427.menuitem, module31({}, module2427.menuActive, page === a.value)),
                        key: a.id,
                        onClick: function() {
                            return e.handlePageMenuClick(a.value);
                        }
                    }, a.value);
                }));
            }
            return null;
        };
        e.handlePageMenuClick = function(t) {
            const e_props = e.props;
            const { onChange, limit } = e_props;
            if (onChange) {
                onChange({
                    page: Math.min(t, e.totalPage),
                    limit
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const page = this.props.page;
                return module553.default.createElement(module186.Level, {
                    className: module2427.wrapper
                }, module553.default.createElement(module186.LevelLeft, null, this.renderPagesize()), module553.default.createElement(module186.LevelRight, null, module553.default.createElement(module186.LevelItem, {
                    className: module2427.pagination
                }, module553.default.createElement(module186.Button, {
                    className: module2427.button,
                    type: "flat",
                    icon: "previous",
                    iconSize: 16,
                    disabled: page <= 1,
                    onClick: this.handlePrev
                }), module553.default.createElement(module186.Dropdown, {
                    placement: "bottom",
                    trigger: "hover",
                    content: this.renderPageDropDown()
                }, module553.default.createElement("div", {
                    className: module2427.pages
                }, module553.default.createElement("span", null, page, " / ", this.totalPage))), module553.default.createElement(module186.Button, {
                    className: module2427.button,
                    type: "flat",
                    icon: "next",
                    iconSize: 16,
                    disabled: page >= this.totalPage,
                    onClick: this.handleNext
                }))));
            }
        },
        {
            key: "totalPage",
            get: function() {
                const props = this.props;
                const { total, limit } = props;
                const r = total % limit;
                if (r === 0) {
                    return Math.max(total / limit, 1);
                }
                return (total - r) / limit + 1;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.limit !== t.pagesize) {
                    return {
                        pagesize: e.limit
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(module553.Component);
export default y;
