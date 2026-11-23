import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module63 from "unpacked/module-63.js";
import module794, { ListPage } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import module908 from "stores/pv";
import { getDisplayName, getLocalTime, map_accessModes } from "utils/index";
import module186 from "unpacked/module-186.js";
import { getVolumeStatus } from "utils/status";
import { PV_STATUS } from "utils/constants";
import Module805 from "unpacked/module-805.js";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import module3724 from "unpacked/module-3724.js";
let u;
const N = module794({
    store: new module908,
    module: "persistentvolumes",
    name: "PERSISTENT_VOLUME",
    authKey: "persistentvolumeclaim",
    rowKey: "uid"
})(u = ((Component_1)=>{
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
        e.showAction = function(e) {
            return !e.isFedManaged;
        };
        e.cantDelete = function({ status }) {
            return [
                "Bound"
            ].indexOf(status.phase) > -1;
        };
        e.getItemDesc = function(e) {
            const reason = getVolumeStatus(e);
            if (module63(reason)) {
                return e.storageClassName || "-";
            }
            return <Module805 reason={reason} data={e} type="volume"/>;
        };
        e.getCheckboxProps = function(e) {
            return {
                disabled: e.isFedManaged || [
                    "Bound"
                ].indexOf(e.status.phase) > -1,
                name: e.name
            };
        };
        e.renderAccessTitle = function() {
            const content = <div><div>{t("RWO_DESC")}</div><div>{t("ROX_DESC")}</div><div>{t("RWX_DESC")}</div></div>;
            return <div className={module3724.mode_title}>{t("ACCESS_MODE_TCAP")}<module186.Tooltip content={content}><module186.Icon name="question" size={16} className={module3724.question}/></module186.Tooltip></div>;
        };
        e.mapperAccessMode = function(e) {
            const t = map_accessModes(e);
            return <span>{t.join(",")}</span>;
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, getData } = e_props;
            e_props.trigger("pv.create", {
                module,
                cluster: match.params.cluster,
                success: getData
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "getStatus",
            value: function() {
                return PV_STATUS.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
            }
        },
        {
            key: "getColumns",
            value: function() {
                const _this = this;
                const props = this.props;
                const { getSortOrder, getFilteredValue } = props;
                const cluster = this.props.match.params.cluster;
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        sortOrder: getSortOrder("name"),
                        search: true,
                        sorter: true,
                        render: function(t, r) {
                            return <Module789 icon="storage" iconSize={40} to={r.phase === "Terminating" ? "" : `/clusters/${cluster}/pv/${t}`} isMultiCluster={r.isFedManaged} desc={_this.getItemDesc(r)} title={getDisplayName(r)}/>;
                        }
                    },
                    {
                        title: t("STATUS"),
                        dataIndex: "status",
                        isHideable: true,
                        search: true,
                        filters: this.getStatus(),
                        filteredValue: getFilteredValue("status"),
                        width: "10.56%",
                        render: function({ phase }) {
                            return <Module796 type={phase} name={t(`PV_STATUS_${phase.toUpperCase()}`)}/>;
                        }
                    },
                    {
                        title: t("CAPACITY"),
                        dataIndex: "capacity",
                        isHideable: true,
                        width: "7%",
                        render: function(e) {
                            return <div><p>{e}</p></div>;
                        }
                    },
                    {
                        title: this.renderAccessTitle(),
                        dataIndex: "accessModes",
                        isHideable: false,
                        width: "12.32%",
                        render: function(t) {
                            return _this.mapperAccessMode(t);
                        }
                    },
                    {
                        title: t("RECLAIM_POLICY"),
                        dataIndex: "_originData",
                        isHideable: true,
                        width: "7.74%",
                        render: function(e) {
                            return e.spec.persistentVolumeReclaimPolicy;
                        }
                    },
                    {
                        title: t("CREATION_TIME_TCAP"),
                        dataIndex: "createTime",
                        sorter: true,
                        sortOrder: getSortOrder("createTime"),
                        isHideable: true,
                        width: 140,
                        render: function(e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm");
                        }
                    }
                ];
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, tableProps } = props;
                return <ListPage {...this.props}><Module797 {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()} onCreate={this.showCreate} cluster={match.params.cluster} getCheckboxProps={this.getCheckboxProps} renderProjectSelect={false} emptyProps={{
                    desc: ""
                }}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const trigger = this.props.trigger;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(t) {
                            return trigger("resource.baseinfo.edit", {
                                detail: t,
                                success: _this.props.getData
                            });
                        }
                    },
                    {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "view",
                        show: this.showAction,
                        onClick: function(t) {
                            return trigger("resource.yaml.edit", {
                                detail: t,
                                success: _this.props.getData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: this.showAction,
                        disabled: this.cantDelete,
                        onClick: function(t) {
                            return trigger("pv.delete", {
                                ..._this.props.tableProps,
                                detail: t,
                                success: _this.props.getData
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "tableActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const r_trigger = props.trigger;
                return {
                    ...props.tableProps.tableActions,
                    selectActions: [
                        {
                            key: "delete",
                            icon: "trash",
                            text: t("DELETE"),
                            action: "delete",
                            type: "danger",
                            show: this.showAction,
                            onClick: function() {
                                return r_trigger("pv.batch.delete", {
                                    ..._this.props.tableProps,
                                    success: _this.props.getData
                                });
                            }
                        }
                    ]
                };
            }
        }
    ]);
    return n;
})(Component)) || u;
export default N;
