import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-73.js";
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
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import Module823 from "./module-823.js";
import Module916 from "./module-916.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module321 from "./module-321.js";
import module14 from "./module-14.js";
import { Component } from "./module-553.js";
import module445 from "./module-445.js";
import module3653 from "./module-3653.js";
import Module3654 from "./module-3654.js";
const T = ((Component_1)=>{
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
    function n(...a_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...a_1);
        e.state = {
            allWorkspaces: [],
            authoredWorkspaces: [],
            addWorkspaces: [],
            deleteWorkspaces: [],
            isPublic: module26(e.props, "cluster.visibility") === "public",
            showUnAuthTip: false,
            showConfirm: false,
            filters: {}
        };
        e.workspaceStore = new module445;
        e.authoredWorkspaceStore = new module445;
        e.handleOk = function() {
            const e_state = e.state;
            const { allWorkspaces, authoredWorkspaces } = e_state;
            const a = module14.toJS(e.authoredWorkspaceStore.list.data);
            const o = module321(allWorkspaces, "name");
            const u = module321(authoredWorkspaces, "name");
            const i = module321(a, "name");
            const addWorkspaces = authoredWorkspaces.filter((e)=>!i[e.name]);
            const deleteWorkspaces = a.filter((e)=>!u[e.name]).map((e)=>o[e.name]);
            e.setState({
                addWorkspaces,
                deleteWorkspaces
            }, function() {
                if (e.state.deleteWorkspaces.length > 0) {
                    e.setState({
                        showConfirm: true
                    });
                } else {
                    e.handleConfirm();
                }
            });
        };
        e.handleConfirm = function() {
            const onOk = e.props.onOk;
            const e_state = e.state;
            const { addWorkspaces, deleteWorkspaces } = e_state;
            onOk({
                public: e_state.isPublic,
                addWorkspaces,
                deleteWorkspaces
            });
        };
        e.hideConfirm = function() {
            e.setState({
                showConfirm: false
            });
        };
        e.handleSearch = function(nameAndAlias) {
            e.fetchWorkspaces({
                nameAndAlias
            });
        };
        e.fetchWorkspaces = function(t) {
            e.workspaceStore.fetchList({
                ...t,
                labelSelector: "!cluster-role.kubesphere.io/edge",
                limit: -1
            }).then(()=>{
                e.setState({
                    allWorkspaces: module14.toJS(e.workspaceStore.list.data)
                });
            });
        };
        e.fetchAuthoredWorkspaces = function(t) {
            const cluster = e.props.cluster;
            const n = cluster === undefined ? {} : cluster;
            e.authoredWorkspaceStore.fetchList({
                ...t,
                limit: -1,
                cluster: n.name
            }).then(()=>{
                e.setState({
                    authoredWorkspaces: module61(module14.toJS(e.authoredWorkspaceStore.list.data))
                });
            });
        };
        e.handleWorkspaceAuth = function(t) {
            e.setState(function({ authoredWorkspaces }) {
                return {
                    authoredWorkspaces: [].concat(module61(authoredWorkspaces), [
                        t
                    ])
                };
            });
        };
        e.handleWorkspaceUnAuth = function(t) {
            const allWorkspaces = e.state.allWorkspaces;
            e.setState(function({ authoredWorkspaces }) {
                const a = allWorkspaces.filter((e)=>e.name === t.name);
                if (module63(a)) {
                    allWorkspaces.push(t);
                }
                return {
                    authoredWorkspaces: authoredWorkspaces.filter((e)=>e.name !== t.name),
                    allWorkspaces,
                    showUnAuthTip: true
                };
            });
        };
        e.handlePublicChange = function(isPublic) {
            e.setState({
                isPublic
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchWorkspaces();
                this.fetchAuthoredWorkspaces();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, onCancel } = props;
                const state = this.state;
                const { allWorkspaces, authoredWorkspaces, showUnAuthTip, isPublic, showConfirm, deleteWorkspaces } = state;
                const resource = deleteWorkspaces.map((e)=>e.name).join(", ");
                const desc = deleteWorkspaces.length === 1 ? t.html("REMOVE_WORKSPACE_CONFIRM_SI", {
                    resource
                }) : t.html("REMOVE_WORKSPACE_CONFIRM_PL", {
                    resource
                });
                return <Module788 visible={visible} onCancel={onCancel} onOk={this.handleOk} width={960} icon="key" title={t("EDIT_VISIBILITY")} description={t("EDIT_VISIBILITY_DESC")}>{!showUnAuthTip && <module186.Alert className="margin-b12" type="warning" message={t("HOST_CLUSTER_VISIBILITY_WARNING")}/>}{showUnAuthTip && <module186.Alert className="margin-b12" type="error" message={t("CLUSTER_VISIBILITY_REMOVE_WARNING")}/>}<div className={module3653.wrapper}><module186.Columns><module186.Column className="is-half"><div className={module3653.title}>{t("UNAUTHORIZED")}</div><div className={module3653.content}><div className={module3653.search}><Module916 placeholder={t("SEARCH_BY_NAME")} columns={this.columns} onChange={function(filters) {
                    _this.setState({
                        filters
                    });
                    _this.fetchWorkspaces(filters);
                }} filters={this.state.filters}/></div><div className={module3653.list}>{allWorkspaces.map((t)=><Module3654 key={t.name} data={t} type="all" onClick={_this.handleWorkspaceAuth} disabled={authoredWorkspaces.find((e)=>e.name === t.name)}/>)}</div><div className={module3653.footer}>{globals.user.globalRules.clusters.includes("manage") && <><module186.Toggle checked={isPublic} onChange={this.handlePublicChange}/><span>{t("SET_PUBLIC_CLUSTER")}</span><module186.Tooltip content={t("CLUSTER_VISIBILITY_A2")}><module186.Icon name="information"/></module186.Tooltip></>}</div></div></module186.Column><module186.Column className="is-half"><div className={module3653.title}>{t("AUTHORIZED")}</div><div className={module3653.content}><div className={module3653.authedList}>{authoredWorkspaces.map((t)=><Module3654 key={t.name} data={t} type="authed" onClick={_this.handleWorkspaceUnAuth}/>)}</div><div className={module3653.footer}/></div></module186.Column></module186.Columns></div><Module823 visible={showConfirm} onOk={this.handleConfirm} onCancel={this.hideConfirm} resource={resource} title={t("REMOVE_WORKSPACE_CONFIRM_TITLE")} desc={desc}/></Module788>;
            }
        },
        {
            key: "columns",
            get: function() {
                return [
                    {
                        dataIndex: "name",
                        title: t("NAME"),
                        search: true
                    },
                    {
                        dataIndex: "alias",
                        title: t("ALIAS"),
                        search: true
                    }
                ];
            }
        }
    ]);
    return n;
})(Component);
export default T;
