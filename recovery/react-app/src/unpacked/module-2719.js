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
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module31 from "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module189 from "./module-189.js";
import module1162 from "./module-1162.js";
import { observer } from "./module-239.js";
import { Component } from "./module-553.js";
import module946 from "./module-946.js";
import { Modal } from "components/Base/index";
import Module875 from "components/Tables/Base/Empty";
import Module916 from "components/Tables/Base/FilterInput";
import module2720 from "./module-2720.js";
import Module2721 from "./module-2721.js";
let o;
const P = observer(o = ((Component_1)=>{
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
        n.getParamsLabel = function({ group, tags = [] }) {
            if (group) {
                group = `cluster.kubesphere.io/group=${group}`;
            }
            tags = tags.map((e)=>`label.cluster.kubesphere.io/${e}`);
            return [
                group
            ].concat(module61(tags)).filter(Boolean).join(",");
        };
        n.getList = function(t = {}) {
            const n_props = n.props;
            const a_hasBundled = n_props.hasBundled;
            const name = n_props.detail.name;
            const a_getList = n_props.getList;
            n.setState({
                loading: true
            });
            if (a_hasBundled) {
                t.tags = (t.tags ?? []).concat(name);
            }
            const u = {
                ...module189(t, "group", "tags", "__index"),
                labelSelector: n.getParamsLabel(t)
            };
            a_getList(u).then((e)=>{
                n.setState({
                    loading: false,
                    list: a_hasBundled ? e : e.filter((e)=>!e.tags.find((e)=>e.name === name))
                });
            });
        };
        n.handleAdd = function(e) {
            n.setState(function({ value }) {
                return {
                    value: [].concat(module61(value), [
                        e
                    ])
                };
            });
        };
        n.handleDelete = function(e) {
            n.setState(function(t) {
                return {
                    value: t.value.filter((t)=>t.name !== e.name)
                };
            });
        };
        n.handleOk = function() {
            const onOk = n.props.onOk;
            if (onOk) {
                onOk(n.state.value, !!n.state.hasRemoved.length);
            }
        };
        n.handleCancel = function() {
            const n_props = n.props;
            const { onCancel, onOk } = n_props;
            if (n.state.hasRemoved.length) {
                if (onOk) {
                    onOk(n.state.value, true);
                }
            } else if (onCancel) {
                onCancel();
            }
        };
        n.handleOnUnBind = function(e) {
            const onUnBind = n.props.onUnBind;
            if (onUnBind) {
                onUnBind(e);
            }
            n.setState({
                hasRemoved: [].concat(module61(n.state.hasRemoved), [
                    e.name
                ])
            });
        };
        n.handleReset = function() {
            n.getList(n.state.filters);
        };
        n.clearFilter = function() {
            n.setState({
                filters: {}
            });
            n.getList();
        };
        n.renderEmpty = function() {
            const hasBundled = n.props.hasBundled;
            return <Module875 icon="exclamation" title={t("NO_CLUSTER_FOUND")} desc={null} action={hasBundled ? null : <p>{t("YOU_CAN_TRY_TO")}<span className={module2720.action} onClick={n.handleReset} data-test="table-empty-refresh">{t("REFRESH_DATA")}</span>{t("OR")}<span className={module2720.action} onClick={n.clearFilter} data-test="table-empty-clear-filter">{t("CLEAR_SEARCH_CONDITIONS")}</span></p>}/>;
        };
        n.state = {
            list: [],
            filters: {},
            value: [],
            hasRemoved: [],
            loading: false
        };
        n.tagsStore = new module946;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getList();
                this.tagsStore.fetchGroupList();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { hasBundled, onUnBind: _onUnBind, detail, ...rest } = props;
                const state = this.state;
                const { list, hasRemoved, loading, value } = state;
                const p = list.filter((e)=>!hasRemoved.includes(e.name));
                const m = detail && `[${detail.label}:${detail.value}]`;
                return <Modal width={960} {...rest} title={hasBundled ? <span>{t("REMOVE_TAG_FROM_CLUSTERS")} {m}</span> : t("ADD_TAG_TO_CLUSTERS")} onOk={this.handleOk} onCancel={this.handleCancel} hideFooter={hasBundled}><module186.Alert type="warning" message={t("ADD_TAG_DESC")}/><div className={module2720.title}>{t("CLUSTER_PL")}</div><div>{loading && <module186.Loading size="large" className={module2720.loading}/>}<div className={module2720.bindContainer}>{!hasBundled && <Module916 placeholder={t("SEARCH_BY_NAME")} columns={this.columns} onChange={function(filters) {
                    _this.setState({
                        filters
                    });
                    _this.getList(filters);
                }} filters={this.state.filters}/>}{p.map((t)=>{
                    const a = {
                        ...t,
                        tags: t.tags.map((t)=>_this.tagsStore.tags.find((e)=>e.name === t.name)).filter(Boolean)
                    };
                    const a_expiredDay = a.expiredDay;
                    const isExpired = a_expiredDay && a_expiredDay < 0;
                    const isChecked = module1162(value, {
                        uid: a.uid
                    });
                    return <Module2721 key={a.uid} data={a} hasBundled={hasBundled} isExpired={isExpired} isChecked={isChecked} onAdd={_this.handleAdd} onDelete={_this.handleDelete} onUnBind={_this.handleOnUnBind}/>;
                })}{module63(p) && this.renderEmpty()}</div></div></Modal>;
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
                        title: t("ALIAS")
                    },
                    {
                        dataIndex: "group",
                        title: t("TYPE"),
                        search: true,
                        filters: (this.tagsStore.group ?? []).map((e)=>({
                                text: e,
                                value: e
                            })),
                        renderSearch: function(e) {
                            return <div className="flex"><div className={module3(module2720.clusterGroupTag, module31({}, module2720[e.key], true))}>{t(`ENV_${e.label.toUpperCase()}`)}</div>{e.label}</div>;
                        }
                    },
                    {
                        dataIndex: "tags",
                        title: t("TAG_PL"),
                        filters: (this.tagsStore.tags ?? []).map((e)=>({
                                text: `${e.label}:${e.value}`,
                                value: e.name
                            })),
                        search: true,
                        multi: true,
                        renderSearch: function(e) {
                            return <div>{e.label}</div>;
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || o;
export default P;
