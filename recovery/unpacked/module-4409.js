import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
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
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import Module790 from "./module-790.js";
import Module1711 from "./module-1711.js";
import { STORE_QUERY_STATUS } from "./module-327.js";
import Module4410 from "./module-4410.js";
import module1871 from "./module-1871.js";
let o;
let u;
let l;
const D = observer((l = u = ((Component_1)=>{
    module55(a, Component_1);
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
        n.fetchData = function(e = {}) {
            const params = n.props.match.params;
            const { appId, workspace } = params;
            const isAdmin = n.props.appStore.isAdmin;
            const status = isAdmin ? STORE_QUERY_STATUS : n.store.defaultStatus;
            n.store.fetchList({
                app_id: appId,
                workspace,
                status,
                ...e
            });
        };
        n.getPagination = function() {
            const list = n.store.list;
            return {
                page: list.page,
                limit: list.limit,
                total: list.total
            };
        };
        n.handleExpandExtra = function(e) {
            const t = module26(n.store, "list.data", []);
            n.store.list.data = t.map((t)=>({
                    ...t,
                    isExpand: t.version_id === e && !t.isExpand
                }));
        };
        n.handleSearch = function(keyword) {
            n.searchValue = keyword;
            n.fetchData({
                keyword
            });
        };
        n.handleRefresh = function() {
            const e = n.searchValue ? {
                keyword: n.searchValue
            } : {};
            n.fetchData(e);
        };
        n.handlePage = function(page) {
            n.fetchData({
                page
            });
        };
        n.addVersion = function() {
            return n.setState({
                uploadModal: true
            });
        };
        n.hideModal = function() {
            return n.setState({
                uploadModal: false
            });
        };
        n.handleCreate = function(e) {
            n.store.create(e).then(()=>{
                n.setState({
                    uploadModal: false
                });
                module240.success({
                    content: t("CREATE_SUCCESSFUL")
                });
                n.fetchData();
            });
        };
        n.renderHeader = function() {
            const isAdmin = n.props.appStore.isAdmin;
            return <div className={module1871.header}><module186.InputSearch className={module1871.search} name="search" placeholder={t("SEARCH_BY_NAME")} onSearch={n.handleSearch}/><div className={module1871.actions}><module186.Button type="flat" icon="refresh" onClick={n.handleRefresh}/>{!isAdmin && n.enabledActions.includes("manage") && <module186.Button onClick={n.addVersion}>{t("UPLOAD_NEW_VERSION")} </module186.Button>}</div></div>;
        };
        n.renderFooter = function() {
            const e = n.getPagination();
            const { total, page, limit } = e;
            return <module186.Level className={module1871.footer}><module186.LevelLeft>{t("TOTAL_ITEMS", {
                num: total
            })}</module186.LevelLeft><module186.LevelRight><module186.Pagination page={page} total={total} limit={limit} onChange={n.handlePage}/></module186.LevelRight></module186.Level>;
        };
        n.state = {
            uploadModal: false
        };
        n.store = n.props.versionStore;
        return n;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const list = this.store.list;
                const { data, isLoading } = list;
                const props = this.props;
                const params = props.match.params;
                const { appStore, clusters } = props;
                const appStore_isAdmin = appStore.isAdmin;
                const appDetail = appStore.detail || {};
                if (isLoading) {
                    return <module186.Loading className={module1871.loading}/>;
                }
                return <div className={module1871.body}>{module63(data) ? <div className={module1871.empty}>{t("NO_RESOURCE_FOUND")}</div> : data.map((detail)=><Module4410 key={detail.version_id} isAdmin={appStore_isAdmin} appDetail={appDetail} detail={detail} params={params} store={_this.store} appStore={appStore} clusters={clusters} enabledActions={_this.enabledActions} handleExpandExtra={_this.handleExpandExtra}/>)}</div>;
            }
        },
        {
            key: "renderModals",
            value: function() {
                const params = this.props.match.params;
                const { appId, workspace } = params;
                const isSubmitting = this.store.isSubmitting;
                return <div><Module1711 title={t("UPLOAD_NEW_VERSION")} description={t("UPLOAD_NEW_VERSION_DESC")} icon="templet" visible={this.state.uploadModal} appId={appId} workspace={workspace} isSubmitting={isSubmitting} type="ADD_VERSION" onOk={this.handleCreate} onCancel={this.hideModal}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { hideHeader, hideFooter } = props;
                return <Module790 className={module1871.main} title={t("VERSIONS")}><div className={module1871.inner}>{!hideHeader && this.renderHeader()}{this.renderContent()}{!hideFooter && this.renderFooter()}{this.renderModals()}</div></Module790>;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                if (this.props.match.params.workspace) {
                    return globals.app.getActions({
                        workspace: this.props.match.params.workspace,
                        module: "app-templates"
                    });
                }
                return [
                    "manage"
                ];
            }
        }
    ]);
    return a;
})(Component), u.propTypes = {
    versionStore: module1.object,
    appStore: module1.object,
    match: module1.object,
    hideHeader: module1.bool,
    hideFooter: module1.bool,
    onSearch: module1.func,
    onRefresh: module1.func,
    onPage: module1.func
}, u.defaultProps = {
    versionStore: {},
    appStore: {},
    match: {},
    hideHeader: false,
    hideFooter: false,
    onSearch: function() {},
    onRefresh: function() {},
    onPage: function() {}
}, o = l)) || o;
export default D;
