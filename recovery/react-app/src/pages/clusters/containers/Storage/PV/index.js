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
import module4122 from "unpacked/module-4122.js";
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
