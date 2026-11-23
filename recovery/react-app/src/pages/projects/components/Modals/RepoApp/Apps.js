import "unpacked/module-12.js";
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
import "unpacked/module-64.js";
import "unpacked/module-188.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-860.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import onClickApp from "unpacked/module-455.js";
import module186 from "unpacked/module-186.js";
import module1615 from "pages/apps/components/AppList";
import module470 from "stores/openpitrix/app";
import module1371 from "stores/openpitrix/repo";
import { STORE_APP_LIMIT } from "configs/openpitrix/app";
import module3094 from "unpacked/module-3094.js";
let s;
let i;
let f;
const P = observer((f = i = ((e)=>{
    module55(n, e);
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
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.fetchRepos = async function e() {
            let a;
            let workspace;
            const n = arguments;
            a = n.length > 0 && n[0] !== undefined ? n[0] : {};
            workspace = t.props.workspace;
            await t.repoStore.fetchList({
                status: "active",
                noLimit: true,
                workspace,
                ...a
            });
        };
        t.fetchApps = async function e() {
            let a;
            let r;
            let n;
            let l;
            let c;
            const s = arguments;
            a = s.length > 0 && s[0] !== undefined ? s[0] : {};
            r = !(s.length > 1 && s[1] !== undefined) || s[1];
            await t.appStore.fetchList({
                page: 1,
                limit: STORE_APP_LIMIT,
                status: t.isFormWorkspace ? "" : "active",
                workspace: t.isFormWorkspace ? t.props.workspace : "",
                repo_id: t.selectedRepo,
                ...a
            });
            n = t.appStore;
            l = n.allApps;
            c = n.list;
            if (r) {
                l.clear();
                l.replace(c.data);
            } else {
                l.push.apply(l, module61(c.data));
            }
        };
        t.fetchMoreApps = async function e() {
            let a;
            a = t.appStore.list.page;
            await t.fetchApps({
                page: a + 1
            }, false);
        };
        t.handleSearch = function(keyword) {
            t.fetchApps({
                keyword
            });
        };
        t.handleRefresh = function() {
            t.fetchApps();
        };
        t.handleChangeRepo = function(selectRepo) {
            if (t.selectedRepo !== selectRepo) {
                t.setState({
                    selectRepo
                }, function() {
                    t.fetchApps();
                });
            }
        };
        t.state = {
            selectRepo: e.selectRepo
        };
        t.appStore = new module470;
        t.repoStore = new module1371;
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: async function() {
                await this.fetchRepos();
                if (this.repoSelectOptions.length > 0) {
                    await this.fetchApps();
                }
            }
        },
        {
            key: "renderHeader",
            value: function() {
                return module553.default.createElement("div", {
                    className: module3094.header
                }, module553.default.createElement("div", {
                    className: module3094.logo
                }, module553.default.createElement("img", {
                    src: "/assets/application.svg",
                    alt: ""
                })), module553.default.createElement("div", {
                    className: module3094.text
                }, module553.default.createElement("h2", null, t("APP_TEMPLATE_PL")), module553.default.createElement("p", null, t("APP_TEMPLATES_MODAL_DESC"))));
            }
        },
        {
            key: "renderToolbar",
            value: function() {
                return module553.default.createElement("div", {
                    className: module3094.toolbar
                }, module553.default.createElement(module186.Select, {
                    name: "repo",
                    placeholder: t("SELECT_APP_REPOSITORY"),
                    onChange: this.handleChangeRepo,
                    className: module3094.selectRepos,
                    options: this.repoSelectOptions,
                    value: this.selectedRepo
                }), module553.default.createElement(module186.InputSearch, {
                    onSearch: this.handleSearch,
                    className: module3094.search,
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
                const appStore = this.appStore;
                const { allApps, list } = appStore;
                const { isLoading, total } = list;
                return module553.default.createElement(module553.default.Fragment, null, this.renderHeader(), this.renderToolbar(), module553.default.createElement("div", {
                    className: module3094.apps
                }, module553.default.createElement(module1615, {
                    itemCls: module3094.appItem,
                    apps: allApps.toJS(),
                    isLoading,
                    total,
                    onFetchMore: this.fetchMoreApps,
                    onClickAppItem: this.props.onClickApp,
                    disableLink: true
                })));
            }
        },
        {
            key: "isFormWorkspace",
            get: function() {
                return !this.selectedRepo;
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
    return n;
})(module553.Component), i.propTypes = {
    workspace: module1.string,
    store: module1.object,
    onClickApp: module1.func,
    fetchApps: module1.func,
    selectRepo: module1.string
}, i.defaultProps = {
    workspace: "",
    store: {},
    onClickApp
}, s = f)) || s;
export default P;
