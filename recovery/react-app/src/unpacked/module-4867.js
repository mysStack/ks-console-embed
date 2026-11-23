import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-62.js";
import "unpacked/module-1975.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-1246.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-1080.js";
import "unpacked/module-1923.js";
import "unpacked/module-1924.js";
import "unpacked/module-1925.js";
import "unpacked/module-1926.js";
import "unpacked/module-1927.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module4868 from "unpacked/module-4868.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module1025 from "pages/apps/components/Avatar";
import module794, { ListPage } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import module4869 from "unpacked/module-4869.js";
import Module1976 from "unpacked/module-1976.js";
import { binaryStringToBlob } from "unpacked/module-1247.js";
import { RadonDBAppId } from "unpacked/module-817.js";
import module4870 from "unpacked/module-4870.js";
let h;
function N(e) {
    if (e && typeof e === "string") {
        return e[0].toUpperCase() + e.substr(1);
    }
    return e;
}
const I = module794({
    store: new module4869,
    module: "applications",
    name: "USER",
    injectStores: [
        "rootStore",
        "detailStore"
    ]
})(h = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.getColumns = function() {
            const a = {
                title: t("USERNAME"),
                dataIndex: "name",
                render: function(e, t) {
                    return <Module1025 avatar={module26(t, "icon", "/assets/default-user.svg")} iconLetter={e} iconSize={40} title={e} desc={t.desc}/>;
                }
            };
            const r = [
                a,
                {
                    title: t("PASSWORD"),
                    dataIndex: "password",
                    render: function() {
                        return <Module1976/>;
                    }
                }
            ];
            switch(e.props.detailStore.detail.app_id){
                case RadonDBAppId.RedisCluster:
                case RadonDBAppId.RedisSentinel:
                    return [].concat(r, [
                        {
                            title: t("PERMISSIONS"),
                            dataIndex: "permission",
                            render: function(e) {
                                return <div>{t(e)}</div>;
                            }
                        }
                    ]);
                case RadonDBAppId.MySQL:
                case RadonDBAppId.PostgreSQL:
                    return [].concat(r, [
                        {
                            title: t("PERMISSIONS"),
                            dataIndex: "permission",
                            render: function(e) {
                                return <div>{t(`${e.toUpperCase()}_PERMISSIONS`)}</div>;
                            }
                        }
                    ]);
                case RadonDBAppId.Kafka:
                    return [
                        {
                            ...a,
                            width: "20%"
                        },
                        {
                            title: t("AUTHENTICATION_MODE"),
                            dataIndex: "authentication",
                            render: function(a) {
                                return <div><img src="/assets/paper-work.svg" className="icon" style={{
                                    width: "16px"
                                }}/><span>{a.toUpperCase()}</span>{e.props.detailStore.detail.authentication !== a && <module186.Tooltip content=<b>{t("AUTHENTICATION_MODE_INCORRECT_DESC")}</b>><module186.Icon style={{
                                    marginLeft: "4px"
                                }} name="exclamation" size={16} color={{
                                    primary: "#ffffff",
                                    secondary: "#eaa944"
                                }}/></module186.Tooltip>}</div>;
                            }
                        },
                        {
                            title: t("SECRET_KEY"),
                            dataIndex: "password",
                            render: function(password, a) {
                                let r;
                                if (a.cert) {
                                    r = binaryStringToBlob(a.cert.value);
                                }
                                if (a.cert) {
                                    return <module186.Tooltip closeAfterClick={false} content=<div><div className={module4870.bold}>{t("USER_CERTIFICATE")}</div><div><span className={module4870.bold}>{t("CERTIFICATE")}{t(": ")}</span><span>{a.name}.p12</span><a className={module4870.bold} style={{
                                        marginLeft: "4px",
                                        color: "#329DCE"
                                    }} href={URL.createObjectURL(r)} download={`${a.name}.p12`}>{t("DOWNLOAD")}</a></div><div><span className={module4870.bold}>{t("PASSWORD")}{t(": ")}</span><Module1976 password={password} color={{
                                        primary: "#ffffff"
                                    }}/></div><div><span className={module4870.bold}>{t("VALIDITY_PERIOD")}{t(": ")}{a.cert.validDate}</span></div></div>><span><img className="icon" src="/assets/certificates.svg" style={{
                                        width: "16px"
                                    }}/><span>{t("CA_CERTIFICATE")}</span></span></module186.Tooltip>;
                                }
                                return <module186.Tooltip closeAfterClick={false} content=<div><span className={module4870.bold}>{t("PASSWORD")}{t(": ")}</span><Module1976 password={password} color={{
                                    primary: "#ffffff"
                                }}/></div>><span><module186.Icon name="lock" size={16}/><Module1976/></span></module186.Tooltip>;
                            }
                        },
                        {
                            title: t("AUTHORIZATION_RULE"),
                            dataIndex: "permissionRules",
                            render: function(e) {
                                return <module186.Tooltip content=<div>{e.map((e, t)=><div><b>ACL {t + 1}</b><div>{N(e.type)} {e.operation} {N(e.resource.type)}；{N(e.resource.patternType)} {e.resource.name}</div></div>)}</div> style={{
                                    top: "-8px"
                                }}><span>{e.length} ACL{e.length > 1 ? "s" : ""}</span></module186.Tooltip>;
                            }
                        }
                    ];
                default:
                    return r;
            }
        };
        e.createAccount = function() {
            const a = {
                ...e.props.match.params,
                ...e.props.query,
                app_id: e.props.detailStore.detail.app_id
            };
            return e.props.trigger("openpitrix.db.createAccount", {
                icon: "human",
                title: t("CREATE_USER"),
                action: e.props.store.add,
                content: `${t("CREATE_SUCCESSFUL")}`,
                nameReplicationValidator: e.props.store.checkUserName,
                authentication: e.props.detailStore.detail.authentication,
                ...a
            });
        };
        e.getData = function(t) {
            const cluster_id = e.props.match.params.id;
            e.props.getData({
                ...t,
                cluster_id
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "getTableProps",
            value: function() {
                const _this = this;
                const props = this.props;
                const a_tableProps = props.tableProps;
                const detail = props.detailStore.detail;
                const { isRunning, authentication, app_id } = detail;
                const l = [
                    {
                        key: "deploy",
                        type: "control",
                        text: t("CREATE"),
                        action: "create",
                        forbidden: !isRunning,
                        onClick: this.createAccount
                    }
                ];
                if (!isRunning) {
                    l[0].tooltip = {
                        message: t("USERCREATION_NOT_ALLOWED"),
                        placement: "bottom"
                    };
                }
                const i = {
                    key: "delete",
                    type: "danger",
                    text: t("DELETE"),
                    action: "delete",
                    onClick: function() {
                        const a = a_tableProps.data.filter((e)=>e.root);
                        if (module4868(a, a_tableProps.selectedRowKeys.map((name)=>({
                                name
                            })), "name").length > 0) {
                            module240.warning({
                                content: t("CANNOT_DELETE_ROOT_USER")
                            });
                        } else {
                            _this.props.trigger("resource.batch.delete", {
                                once: true,
                                type: "USER",
                                rowKey: a_tableProps.rowKey,
                                ..._this.props.match.params,
                                ..._this.props.query,
                                success: function() {
                                    return _this.getData({
                                        ..._this.props.match.params,
                                        ..._this.props.query
                                    });
                                }
                            });
                        }
                    }
                };
                return {
                    tableActions: {
                        ...a_tableProps.tableActions,
                        selectActions: isRunning ? [
                            i
                        ] : [],
                        actions: app_id !== RadonDBAppId.Kafka || authentication ? l : [],
                        onCreate: null
                    },
                    emptyProps: {
                        icon: "human",
                        desc: app_id === RadonDBAppId.Kafka ? authentication ? t("KAFKA_NO_USER_DESC") : t("NO_AUTHENTICATION_DESC") : t("DATABASE_USERS_EMPTY_DESC")
                    },
                    searchType: "keyword"
                };
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.props.store.clear();
            }
        },
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                return <div className={module4870.account}><ListPage {...this.props} getData={this.getData} noWatch><Module797 {...tableProps} {...this.getTableProps()} itemActions={this.itemActions} columns={this.getColumns()} alwaysUpdate/></ListPage></div>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, detailStore, store } = props;
                const detailStore_detail = detailStore.detail;
                const { app_id, authentication } = detailStore_detail;
                if (!detailStore.detail.isRunning || app_id === RadonDBAppId.Kafka && !authentication) {
                    return [];
                }
                const d = {
                    ...this.props.match.params,
                    ...this.props.query,
                    app_id
                };
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function(detail) {
                            let a;
                            trigger("openpitrix.db.createAccount", {
                                detail,
                                title: t("EDIT_USER"),
                                action: (a = module44(module41.mark(function a(r) {
                                    return module41.wrap(function(a) {
                                        while(true){
                                            switch(a.prev = a.next){
                                                case 0:
                                                    if (!detail.root) {
                                                        a.next = 3;
                                                        break;
                                                    }
                                                    module240.warning({
                                                        content: t("CANNOT_EDIT_ROOT_USER")
                                                    });
                                                    return a.abrupt("return");
                                                case 3:
                                                    a.next = 5;
                                                    return store.edit(r);
                                                case 5:
                                                case "end":
                                                    return a.stop();
                                            }
                                        }
                                    }, a);
                                })), function(e) {
                                    return a.apply(this, arguments);
                                }),
                                content: detail.root ? "" : `${t("MODIFY_SUCCESSFUL")}`,
                                nameReplicationValidator: store.checkUserName,
                                authentication,
                                ...d
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(a) {
                            if (a.root) {
                                module240.warning({
                                    content: t("CANNOT_DELETE_ROOT_USER")
                                });
                            } else {
                                trigger("resource.delete", {
                                    type: "USER",
                                    title: t("DELETE_USER"),
                                    detail: {
                                        ...a,
                                        ...d
                                    },
                                    store: _this.props.store
                                });
                            }
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || h;
export default I;
