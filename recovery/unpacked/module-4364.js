import "./module-12.js";
import "./module-5.js";
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
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module14 from "./module-14.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module801 from "./module-801.js";
import module856 from "./module-856.js";
import module186 from "./module-186.js";
import Module793 from "./module-793.js";
import module240 from "./module-240.js";
import module325 from "./module-325.js";
import module322 from "./module-322.js";
import module1732 from "./module-1732.js";
import Module4365 from "./module-4365.js";
import Module4377 from "./module-4377.js";
import Module4379 from "./module-4379.js";
import module4381 from "./module-4381.js";
let o;
function N(e, t) {
    const r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let a = Object.getOwnPropertySymbols(e);
        if (t) {
            a = a.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        r.push.apply(r, a);
    }
    return r;
}
const A = inject("rootStore", "workspaceStore")(o = observer(o = ((Component_1)=>{
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
        n.initWebsocket = function() {
            const e = n.store.getWatchListUrl({
                ...n.props.match.params
            });
            if (e) {
                n.websocket.watch(e);
                const t = module801(n.fetchGroup, 1000);
                n.disposer = module14.reaction(function() {
                    return n.websocket.message;
                }, function(e) {
                    n.silentLoading = true;
                    if (!(e.type !== "MODIFIED" && e.type !== "ADDED")) {
                        t();
                    }
                    if (e.type === "DELETED") {
                        t(true);
                    }
                });
            }
        };
        n.fetchGroup = function(e) {
            const workspace = n.props.match.params.workspace;
            n.store.fetchGroup({
                workspace
            }).then(()=>{
                if (!n.unmount && e) {
                    const t = n.store.treeData;
                    n.setState(function(e) {
                        return {
                            refreshFlag: !e.refrseshFlag,
                            group: module26(t[0], "children[0].key", ""),
                            groupTitle: module26(t[0], "children[0].group_name", "")
                        };
                    });
                }
            });
        };
        n.handleRefresh = module856(function() {
            n.fetchGroup(true);
        }, 1000);
        n.handleSelectTree = function(e, { selectedNodes }) {
            n.setState({
                group: e[0],
                groupTitle: selectedNodes[0].props.title,
                selectUserKeys: []
            });
        };
        n.handleSelectUser = function(e) {
            n.setState(function(t) {
                return {
                    selectUserKeys: [].concat(module61(t.selectUserKeys), [
                        e.name
                    ])
                };
            });
        };
        n.handleCancelSelect = function() {
            n.setState({
                selectUserKeys: []
            });
        };
        n.handleAddGroup = function() {
            const workspace = n.props.match.params.workspace;
            const n_state = n.state;
            const { selectUserKeys, group } = n_state;
            const u = selectUserKeys.map((userName)=>({
                    userName,
                    groupName: group
                }));
            n.store.addGroupBinding(u, {
                workspace
            }).then(()=>{
                module240.success({
                    content: `${t("ADDED_SUCCESS_DESC")}`
                });
                n.setState(function(e) {
                    return {
                        refreshFlag: !e.refreshFlag,
                        selectUserKeys: []
                    };
                });
            });
        };
        n.showEditModal = function() {
            n.setState({
                showModal: true
            });
        };
        n.hideModal = function() {
            n.setState({
                showModal: false
            });
        };
        n.store = new module1732;
        n.userStore = new module322;
        n.websocket = new module325;
        n.silentLoading = false;
        n.state = {
            group: "",
            groupTitle: "",
            selectUserKeys: [],
            refreshFlag: false,
            showModal: false
        };
        return n;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchGroup(true);
                this.initWebsocket();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.unmount = true;
                this.websocket.close();
                if (this.disposer) {
                    this.disposer();
                }
            }
        },
        {
            key: "renderBanner",
            value: function() {
                return <Module793 icon="group" title={t("DEPARTMENT_PL")} description={t("DEPARTMENT_DESC")}/>;
            }
        },
        {
            key: "renderTitle",
            value: function() {
                const e = this.state.selectUserKeys.length > 0;
                if (this.enabledActions.includes("manage")) {
                    return <div className={module3(module4381.contentHeader, e && module4381.hasSelected)}>{e ? this.renderSelectedTitle() : this.renderToolBar()}</div>;
                }
                return null;
            }
        },
        {
            key: "renderToolBar",
            value: function() {
                return <module186.Level><module186.LevelLeft/><module186.LevelRight><module186.Button type="flat" onClick={this.handleRefresh}><module186.Icon name="refresh"/></module186.Button><module186.Button type="control" onClick={this.showEditModal}>{t("SET_DEPARTMENTS")}</module186.Button></module186.LevelRight></module186.Level>;
            }
        },
        {
            key: "renderSelectedTitle",
            value: function() {
                return <module186.Level><module186.LevelLeft>{this.state.selectUserKeys.length === 1 ? t.html("ADD_MEMBER_TIP_SI", {
                    group: this.state.groupTitle
                }) : t.html("ADD_MEMBER_TIP_PL", {
                    group: this.state.groupTitle
                })}</module186.LevelLeft><module186.LevelRight><module186.Button type="primary" onClick={this.handleAddGroup}>{t("OK")}</module186.Button><module186.Button onClick={this.handleCancelSelect}>{t("CANCEL")}</module186.Button></module186.LevelRight></module186.Level>;
            }
        },
        {
            key: "render",
            value: function() {
                const e = module14.toJS(this.store);
                const { treeData, rowTreeData, total, isLoading } = e;
                const state = this.state;
                const { group, selectUserKeys, refreshFlag, showModal } = state;
                return <><div className={module4381.wrapper}>{this.renderTitle()}<div className={module4381.content}><div className={module4381.container}><Module4377 treeData={treeData} group={group} total={total} isLoading={!this.silentLoading && isLoading} onSelect={this.handleSelectTree}/><Module4379 groupStore={this.store} userStore={this.userStore} group={group} refreshFlag={refreshFlag} selectedKeys={selectUserKeys} onSelect={this.handleSelectUser} enabledActions={this.enabledActions} {...this.props}/></div></div></div>{showModal && <Module4365 visible={showModal} title={t("SET_DEPARTMENTS")} treeData={treeData} rowTreeData={rowTreeData} store={this.store} workspaceStore={this.props.workspaceStore} onCancel={this.hideModal} {...this.props.match.params}/>}</>;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const workspace = this.props.match.params.workspace;
                return globals.app.getActions({
                    module: "groups",
                    workspace
                });
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default A;
