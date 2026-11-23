import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-188.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module794, { ListPage } from "./module-794.js";
import Module797 from "./module-797.js";
import module1929 from "./module-1929.js";
import Module4874 from "./module-4874.js";
import module3 from "./module-3.js";
import Module1976 from "./module-1976.js";
import { RadonDBAppId } from "./module-817.js";
import module74 from "./module-74.js";
import module26 from "./module-26.js";
import module159 from "./module-159.js";
import module63 from "./module-63.js";
import module244 from "./module-244.js";
import { KafkaOptions } from "./module-4876.js";
import module4877 from "./module-4877.js";
let l;
const M = module794({
    store: new module1929,
    module: "applications",
    name: "PARAMETER",
    injectStores: [
        "rootStore",
        "detailStore"
    ]
})(l = ((Component_1)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.state = {
            editMode: false,
            data: {},
            nodeRole: "kafka"
        };
        e.getColumns = function() {
            const a = {
                title: t("PARAMETER"),
                dataIndex: "name",
                width: "200px"
            };
            const r = {
                title: t("VALUE"),
                dataIndex: "value",
                width: "120px",
                render: function(a, r) {
                    const e_state = e.state;
                    const { editMode, data } = e_state;
                    if (editMode) {
                        if (r.type === "select") {
                            if (r.disable) {
                                return <module186.Input disabled value={a} style={{
                                    width: 160
                                }}/>;
                            }
                            return <module186.Select options={(r.options || []).map((e)=>({
                                    ...e,
                                    label: typeof e.label === "number" ? e.label : t(e.label)
                                }))} value={module159(data[r.key]) ? a : data[r.key]} style={{
                                width: 160
                            }} onChange={e.handleChange(r.key)}/>;
                        }
                        if (typeof a === "number") {
                            return <Module4874 value={module159(data[r.key]) ? a : data[r.key]} onChange={e.handleChange(r.key)} disabled={r.disable} integer={module26(r, "integer", true)} style={{
                                width: 160
                            }} min={module26(r, "range.min")} max={module26(r, "range.max")}/>;
                        }
                        return <module186.Input value={module159(data[r.key]) ? a : data[r.key]} style={{
                            width: 160
                        }} disabled={r.disable} onChange={e.handleChange(r.key)}/>;
                    }
                    if (t(r.name) === t("PASSWORD")) {
                        return <Module1976/>;
                    }
                    let s = String(a);
                    if (r.type === "select") {
                        s = module26((r.options || []).find((e)=>e.value === a), "label", s);
                    }
                    return <div>{s}</div>;
                }
            };
            const n = {
                title: t("DESCRIPTION"),
                dataIndex: "description",
                isHideable: true,
                render: function(e) {
                    return <pre>{e}</pre>;
                }
            };
            const o = {
                title: t("AUTO_RESTART"),
                dataIndex: "restart",
                width: "100px"
            };
            const c = {
                title: t("RANGE"),
                dataIndex: "range",
                width: "100px",
                render: function({ min, max } = {}) {
                    if (module159(min) && module159(max)) {
                        return null;
                    }
                    return <div>{`${module159(min) ? " " : min}–${module159(max) ? " " : max}`}</div>;
                }
            };
            if (e.appId === RadonDBAppId.ClickHouse) {
                return [
                    a,
                    r,
                    n,
                    c
                ];
            }
            return [
                a,
                r,
                n,
                o,
                c
            ];
        };
        e.handleChange = function(t) {
            return function(a) {
                module74(e.state.data, `["${t}"]`, module26(a, "target.value", a));
                e.forceUpdate();
            };
        };
        e.editParameters = function() {
            e.setState({
                editMode: true
            });
        };
        e.handleConfirm = module44(module41.mark(function a() {
            let r;
            let workspace;
            let namespace;
            let cluster_id;
            let cluster;
            return module41.wrap(function(a) {
                while(true){
                    switch(a.prev = a.next){
                        case 0:
                            r = e.props.match.params;
                            workspace = r.workspace;
                            namespace = r.namespace;
                            cluster_id = r.id;
                            cluster = r.cluster;
                            if (!module63(e.state.data)) {
                                a.next = 4;
                                break;
                            }
                            e.handleCancel();
                            return a.abrupt("return");
                        case 4:
                            a.prev = 4;
                            a.next = 7;
                            return e.props.store.updateParams({
                                workspace,
                                namespace,
                                cluster_id,
                                cluster,
                                nodeRole: e.state.nodeRole,
                                params: e.state.data
                            });
                        case 7:
                            a.next = 13;
                            break;
                        case 9:
                            a.prev = 9;
                            a.t0 = a.catch(4);
                            module240.error({
                                content: t(a.t0.message)
                            });
                            return a.abrupt("return");
                        case 13:
                            e.handleCancel();
                            a.next = 16;
                            return e.getData(module244.parse(location.search.slice(1)));
                        case 16:
                            module240.success({
                                content: t("MODIFY_SUCCESSFUL")
                            });
                        case 17:
                        case "end":
                            return a.stop();
                    }
                }
            }, a, null, [
                [
                    4,
                    9
                ]
            ]);
        }));
        e.handleCancel = function() {
            e.setState({
                editMode: false,
                data: {}
            });
        };
        e.getData = function(t) {
            const params = e.props.match.params;
            const { workspace, namespace, id: cluster_id, cluster } = params;
            return e.props.store.fetchList({
                ...t,
                workspace,
                namespace,
                cluster,
                cluster_id,
                nodeRole: e.state.nodeRole
            });
        };
        e.getEditTitle = function() {
            return <module186.Level><module186.LevelLeft><module186.Button type="primary" onClick={e.handleConfirm}>{t("OK")}</module186.Button><module186.Button onClick={e.handleCancel}>{t("CANCEL")}</module186.Button></module186.LevelLeft></module186.Level>;
        };
        e.rowClassName = function(e) {
            if (e.disable) {
                return "disable";
            }
            return "";
        };
        e.handleNodeRoleChange = function(nodeRole) {
            e.setState({
                data: {},
                nodeRole
            }, function() {
                e.getData();
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "getTableProps",
            value: function() {
                const props = this.props;
                const { tableProps, detailStore } = props;
                const actions = this.canCreate ? [
                    {
                        key: "edit",
                        type: "default",
                        text: t("EDIT"),
                        forbidden: !detailStore.detail.isRunning,
                        onClick: this.editParameters
                    }
                ] : [];
                if (!detailStore.detail.isRunning) {
                    actions[0].tooltip = {
                        message: t("EDIT_NOT_ALLOWED"),
                        placement: "bottomRight"
                    };
                }
                const o = {
                    tableActions: {
                        ...tableProps.tableActions,
                        actions,
                        selectActions: null
                    },
                    emptyProps: {
                        desc: ""
                    },
                    searchType: "keyword",
                    alwaysUpdate: true
                };
                if (this.state.editMode) {
                    o.extraProps = {
                        title: this.getEditTitle(),
                        rowClassName: this.rowClassName
                    };
                    o.hideHeader = true;
                }
                return o;
            }
        },
        {
            key: "getCustomFilter",
            value: function() {
                if (this.appId === RadonDBAppId.Kafka) {
                    return <module186.Select options={KafkaOptions} value={this.state.nodeRole} style={{
                        width: 200,
                        marginRight: "12px"
                    }} onChange={this.handleNodeRoleChange}/>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module797 {...tableProps} {...this.getTableProps()} className={module3({
                    "params-table-edit": this.state.editMode
                }, module4877.params)} itemActions={[]} columns={this.getColumns()} hideFooter customFilter={this.getCustomFilter()}/></ListPage>;
            }
        },
        {
            key: "appId",
            get: function() {
                return this.props.store.app_id;
            }
        },
        {
            key: "canCreate",
            get: function() {
                const params = this.props.match.params;
                const { cluster, namespace } = params;
                return globals.app.hasPermission({
                    cluster,
                    project: namespace,
                    module: "applications",
                    action: "create"
                });
            }
        }
    ]);
    return r;
})(Component)) || l;
export default M;
