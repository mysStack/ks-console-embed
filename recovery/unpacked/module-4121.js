import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
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
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module63 from "./module-63.js";
import module794, { ListPage } from "./module-794.js";
import Module797 from "./module-797.js";
import module908 from "./module-908.js";
import { getDisplayName, getLocalTime, map_accessModes } from "./module-52.js";
import module186 from "./module-186.js";
import { getVolumeStatus } from "./module-434.js";
import { PV_STATUS } from "./module-72.js";
import Module805 from "./module-805.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import module4122 from "./module-4122.js";
let l;
const k = module794({
    store: new module908,
    module: "persistentvolumes",
    authKey: "persistentvolumeclaims",
    name: "PERSISTENT_VOLUME",
    rowKey: "uid"
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
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
            const content = <div><div>{t("ACCESS_MODE_TCAP")}</div><div>RWO (ReadWriteOnce): {t("ACCESS_MODE_RWO")}</div><div>ROX (ReadOnlyMany): {t("ACCESS_MODE_ROX")}</div><div>RWX (ReadWriteMany): {t("ACCESS_MODE_RWX")}</div></div>;
            return <div className={module4122.mode_title}>{t("ACCESS_MODE_TCAP")}<module186.Tooltip content={content}><module186.Icon name="question" size={16} className={module4122.question}/></module186.Tooltip></div>;
        };
        e.mapperAccessMode = function(e) {
            const t = map_accessModes(e);
            return <span>{t.join(",")}</span>;
        };
        return e;
    }
    module37(r, [
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
                        render: function(t, a) {
                            return <Module789 icon="storage" iconSize={40} to={a.phase === "Terminating" ? "" : `/whizard-telemetry/${cluster}/pv/${t}`} isMultiCluster={a.isFedManaged} desc={_this.getItemDesc(a)} title={getDisplayName(a)}/>;
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
                return <ListPage {...this.props}><Module797 {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()} cluster={match.params.cluster} getCheckboxProps={this.getCheckboxProps} renderProjectSelect={false}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                return [];
            }
        },
        {
            key: "tableActions",
            get: function() {
                return {
                    ...this.props.tableProps.tableActions,
                    selectActions: []
                };
            }
        }
    ]);
    return r;
})(Component)) || l;
export default k;
