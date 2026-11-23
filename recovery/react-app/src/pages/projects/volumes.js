import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-192.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module63 from "unpacked/module-63.js";
import { Component } from "unpacked/module-553.js";
import module908 from "stores/pv";
import module839 from "stores/volume";
import { getDisplayName, getLocalTime, map_accessModes } from "utils/index";
import { VOLUME_STATUS } from "utils/constants";
import { getVolumeStatus } from "utils/status";
import Module805 from "unpacked/module-805.js";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module793 from "unpacked/module-793.js";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import Module1130 from "unpacked/module-1130.js";
import module4624 from "unpacked/module-4624.js";
let s;
const P = withProjectList({
    store: new module839,
    module: "persistentvolumeclaims",
    authKey: "persistentvolumeclaims",
    name: "PERSISTENT_VOLUME_CLAIM",
    rowKey: "uid"
})(s = ((Component_1)=>{
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
        e.pvStore = new module908;
        e.getItemDesc = function(e) {
            const reason = getVolumeStatus(e);
            if (module63(reason)) {
                return e.storageClassName || "-";
            }
            return <Module805 reason={reason} data={e} type="volume"/>;
        };
        e.renderAccessTitle = function() {
            const content = <div><div>{t("RWO_DESC")}</div><div>{t("ROX_DESC")}</div><div>{t("RWX_DESC")}</div></div>;
            return <div className={module4624.mode_title}>{t("ACCESS_MODE_TCAP")}<module186.Tooltip content={content}><module186.Icon name="question" size={16} className={module4624.question}/></module186.Tooltip></div>;
        };
        e.mapperAccessMode = function(e) {
            const t = map_accessModes(e);
            return <span>{t.join(",")}</span>;
        };
        e.pvYamlView = async (a)=>{
            let r;
            let cluster;
            r = a.spec.volumeName;
            cluster = e.props.match.params.cluster;
            await e.pvStore.fetchDetail({
                cluster,
                name: r
            });
            return e.props.trigger("resource.yaml.edit", {
                detail: e.pvStore.detail,
                yaml: e.pvStore.detail._originData,
                readOnly: true
            });
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, projectStore, store } = e_props;
            return e.props.trigger("volume.create", {
                module,
                store,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace,
                cluster: match.params.cluster,
                onAddPv: function() {
                    return e.props.trigger("pv.create", {
                        store: e.pvStore
                    });
                }
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.props.store.getKsVersion(this.props.match.params);
            }
        },
        {
            key: "getStatus",
            value: function() {
                return VOLUME_STATUS.map((e)=>({
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
                const o = {
                    title: t("PERSISTENT_VOLUME"),
                    dataIndex: "_originData",
                    isHideable: true,
                    search: false,
                    width: "28.5%",
                    render: function(a) {
                        return <div id="pvColumn" className={module4624.pv_content}>{a.spec.volumeName}{a.spec.volumeName && <module186.Tooltip content={t("VIEW_YAML")}><module186.Icon className={module4624.yaml} name="log" size={20} onClick={function() {
                            return _this.pvYamlView(a);
                        }}/></module186.Tooltip>}</div>;
                    }
                };
                const c = [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        sortOrder: getSortOrder("name"),
                        search: true,
                        sorter: true,
                        render: function(t, a) {
                            return <Module789 icon="storage" iconSize={40} to={`${_this.props.match.url}/${t}`} desc={_this.getItemDesc(a)} title={getDisplayName(a)}/>;
                        }
                    },
                    {
                        title: t("STATUS"),
                        dataIndex: "status",
                        isHideable: true,
                        search: true,
                        filters: this.getStatus(),
                        filteredValue: getFilteredValue("status"),
                        width: "10.6%",
                        render: function(e, { phase }) {
                            return <Module796 type={phase} className={module4624.status} name={t(`VOLUME_STATUS_${phase.toUpperCase()}`)} flicker/>;
                        }
                    },
                    {
                        title: this.renderAccessTitle(),
                        dataIndex: "accessModes",
                        isHideable: false,
                        width: "12.3%",
                        render: function(t) {
                            return _this.mapperAccessMode(t);
                        }
                    },
                    {
                        title: t("MOUNT_STATUS"),
                        dataIndex: "inUse",
                        isHideable: true,
                        width: "7.7%",
                        render: function(e, t) {
                            return <Module1130 namespace={t.namespace} cluster={t.cluster} name={t.name}/>;
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
                if (this.props.store.ksVersion >= 3.2) {
                    c.splice(2, 0, o);
                }
                return c;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { query, match, bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps} tips={this.tips}/><Module797 {...tableProps} className="table-2-6" itemActions={this.itemActions} namespace={query.namespace} columns={this.getColumns()} onCreate={this.showCreate} cluster={match.params.cluster}/></ListPage>;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("WHAT_IS_STORAGE_CLASS_Q"),
                        description: t("WHAT_IS_STORAGE_CLASS_A")
                    },
                    {
                        title: t("WHAT_IS_LOCAL_VOLUME_Q"),
                        description: t("WHAT_IS_LOCAL_VOLUME_A")
                    }
                ];
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.yaml.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: e
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || s;
export default P;
