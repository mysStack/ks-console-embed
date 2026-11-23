import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-188.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-860.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import module61 from "./module-61.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import onClickApp from "./module-455.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module1615 from "./module-1615.js";
import module1099 from "./module-1099.js";
import { STORE_APP_LIMIT } from "./module-327.js";
import module2643 from "./module-2643.js";
let s;
let i;
let f;
const P = observer((f = i = ((e)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.fetchTemplates = async function e() {
            let a;
            let r;
            let n;
            let cluster;
            let workspace;
            let s;
            let i;
            let f;
            const d = arguments;
            a = d.length > 0 && d[0] !== undefined ? d[0] : {};
            r = !(d.length > 1 && d[1] !== undefined) || d[1];
            n = t.props;
            cluster = n.cluster;
            workspace = n.workspace;
            await t.appTemplateStore.fetchList({
                page: 1,
                limit: STORE_APP_LIMIT,
                cluster,
                workspace,
                ...a
            });
            s = t.appTemplateStore;
            i = s.allTemplates;
            f = s.list;
            if (r) {
                i.clear();
                i.replace(f.data);
            } else {
                i.push.apply(i, module61(f.data));
            }
        };
        t.formatTemplates = function(e) {
            return e.map((e)=>{
                const { name, latestVersion } = e;
                return {
                    ...e,
                    app_id: name,
                    latest_app_version: latestVersion
                };
            });
        };
        t.fetchMoreTemplates = async function e() {
            let a;
            let r;
            a = t.appTemplateStore.list.page;
            r = t.state.name;
            await t.fetchTemplates({
                page: a + 1,
                name: r
            }, false);
        };
        t.handleSearch = function(name) {
            t.setState({
                name
            });
            t.fetchTemplates({
                name
            });
        };
        t.handleRefresh = function() {
            const name = t.state.name;
            t.fetchTemplates({
                name
            });
        };
        t.state = {
            selectRepo: e.selectRepo,
            name: ""
        };
        t.appTemplateStore = new module1099;
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchTemplates();
            }
        },
        {
            key: "renderHeader",
            value: function() {
                return module553.default.createElement("div", {
                    className: module2643.header
                }, module553.default.createElement("div", {
                    className: module2643.logo
                }, module553.default.createElement("img", {
                    src: "/assets/edge-application.svg",
                    alt: ""
                })), module553.default.createElement("div", {
                    className: module2643.text
                }, module553.default.createElement("h2", null, t("EDGE_APP_TEMPLATES_PL")), module553.default.createElement("p", null, t("EDGE_APP_TEMPLATES_MODAL_DESC"))));
            }
        },
        {
            key: "renderToolbar",
            value: function() {
                return module553.default.createElement("div", {
                    className: module2643.toolbar
                }, module553.default.createElement(module186.InputSearch, {
                    onSearch: this.handleSearch,
                    className: module2643.search,
                    placeholder: t("SEARCH")
                }), module553.default.createElement(module186.Button, {
                    type: "flat",
                    icon: "refresh",
                    onClick: this.handleRefresh
                }));
            }
        },
        {
            key: "render",
            value: function() {
                const appTemplateStore = this.appTemplateStore;
                const { allTemplates, list } = appTemplateStore;
                const { isLoading, total } = list;
                return module553.default.createElement(module553.default.Fragment, null, this.renderHeader(), this.renderToolbar(), module553.default.createElement("div", {
                    className: module2643.apps
                }, module553.default.createElement(module1615, {
                    itemCls: module2643.appItem,
                    iconName: "appcenter",
                    showCreateVendor: true,
                    apps: this.formatTemplates(module14.toJS(allTemplates)),
                    isLoading,
                    total,
                    onFetchMore: this.fetchMoreTemplates,
                    onClickAppItem: this.props.onClickApp,
                    disableLink: true
                })));
            }
        },
        {
            key: "repoSelectOptions",
            get: function() {
                const e = this.repoStore.list.data.map((e)=>{
                    const e_name = e.name;
                    return {
                        value: e.repo_id,
                        label: e_name
                    };
                });
                e.unshift({
                    value: null,
                    label: t("CURRENT_WORKSPACE")
                });
                return e;
            }
        },
        {
            key: "selectedRepo",
            get: function() {
                return this.state.selectRepo || module26(this.repoSelectOptions, "[0].value");
            }
        }
    ]);
    return r;
})(module553.Component), i.propTypes = {
    workspace: module1.string,
    store: module1.object,
    onClickApp: module1.func,
    fetchTemplates: module1.func,
    selectRepo: module1.string
}, i.defaultProps = {
    workspace: "",
    store: {},
    onClickApp
}, s = f)) || s;
export default P;
