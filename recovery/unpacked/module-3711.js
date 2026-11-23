import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-97.js";
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
import module61 from "./module-61.js";
import "./module-31.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module250 from "./module-250.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import Module789 from "./module-789.js";
import Module797 from "./module-797.js";
import module794, { ListPage } from "./module-794.js";
import { getDisplayName } from "./module-52.js";
import { ICON_TYPES } from "./module-72.js";
import module1211 from "./module-1211.js";
import module867 from "./module-867.js";
import { storageClasses } from "./module-1793.js";
let u;
const R = module794({
    store: new module867,
    name: "STORAGE_CLASS",
    module: "storageclasses"
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
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.accessorStore = new module1211;
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, prefix } = e_props;
            return [
                {
                    title: t("NAME"),
                    key: "name",
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(r, n) {
                        const n_default = n.default;
                        let title = getDisplayName(n);
                        title = n_default ? <span><span className="margin-r12">{title}</span> <module186.Tag>{t("DEFAULT")}</module186.Tag></span> : title;
                        return <Module789 icon={ICON_TYPES[e.module]} to={`${prefix}/${r}`} title={title} desc={n.description}/>;
                    }
                },
                {
                    title: t("storageclasses"),
                    dataIndex: "storage.kubesphere.io/storagetype",
                    isHideable: true,
                    search: true,
                    filters: storageClasses.map((e)=>({
                            value: e.value,
                            text: t(e.label)
                        })),
                    render: function(e, { storagetype }) {
                        return t(storageClasses.find((e)=>e.value === storagetype)?.label ?? storageClasses[3].label);
                    }
                },
                {
                    title: t("PVC_COUNT"),
                    dataIndex: "volumeCount",
                    isHideable: true,
                    render: function(e, t) {
                        return module26(t, 'annotations["kubesphere.io/pvc-count"]') || 0;
                    }
                },
                {
                    title: t("ALLOW_VOLUME_CLONE"),
                    dataIndex: "annotations",
                    isHideable: true,
                    render: function(e) {
                        if (e["storageclass.kubesphere.io/allow-clone"] === "true") {
                            return t("TRUE");
                        }
                        return t("FALSE");
                    }
                },
                {
                    title: t("ALLOW_VOLUME_SNAPSHOT"),
                    dataIndex: "_originData",
                    isHideable: true,
                    render: function(e) {
                        if (e.metadata.annotations["storageclass.kubesphere.io/allow-snapshot"] === "true") {
                            return t("TRUE");
                        }
                        return t("FALSE");
                    }
                },
                {
                    title: t("ALLOW_VOLUME_EXPANSION"),
                    dataIndex: "allowVolumeExpansion",
                    isHideable: true,
                    render: function(e) {
                        if (e) {
                            return t("TRUE");
                        }
                        return t("FALSE");
                    }
                },
                {
                    title: t("PROVISIONER"),
                    dataIndex: "provisioner",
                    isHideable: true
                }
            ];
        };
        e.showCreate = function() {
            return e.props.trigger("storageclass.create", {
                name: "STORAGE_CLASS",
                module: e.props.module,
                cluster: e.props.match.params.cluster,
                success: e.props.getData
            });
        };
        e.handleBatchDelete = function() {
            e.props.trigger("storageclass.batch.delete", {
                accessorStore: e.accessorStore,
                cluster: e.props.match.params.cluster,
                success: e.props.getData
            });
        };
        e.handleDelete = function(t) {
            e.props.trigger("storageclass.delete", {
                detail: t,
                accessorStore: e.accessorStore,
                cluster: e.props.match.params.cluster,
                success: e.props.getData
            });
        };
        e.handleUpdate = function(t) {
            e.props.trigger("torageclass.update", {
                module: e.props.module,
                cluster: e.props.match.params.cluster,
                detail: t,
                success: e.props.getData
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "validateSelect",
            value: function(e) {
                const _this = this;
                const e_callback = e.callback;
                return function() {
                    const list = _this.list;
                    const { selectedRowKeys, data } = list;
                    const o = data.some((e)=>module250(selectedRowKeys, e.name) && e.associationPVCCount);
                    if (o) {
                        return _this.notifyDeleteTips();
                    }
                    return e_callback(...arguments);
                };
            }
        },
        {
            key: "notifyDeleteTips",
            value: function() {
                module240.error({
                    content: `${t("DEPENDENT_STORAGE_CLASS_DELETE_TIPS")}`
                });
            }
        },
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                return <ListPage {...this.props}><Module797 {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()} onCreate={this.showCreate}/></ListPage>;
            }
        },
        {
            key: "tableActions",
            get: function() {
                const tableProps = this.props.tableProps;
                const r = module26(tableProps, "tableActions.selectActions", []).filter((e)=>e.key !== "delete");
                return {
                    ...tableProps.tableActions,
                    selectActions: [].concat(module61(r), [
                        {
                            action: "delete",
                            key: "delete",
                            onClick: this.handleBatchDelete,
                            text: t("DELETE"),
                            type: "danger"
                        }
                    ])
                };
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const tableProps = this.props.tableProps;
                const n = [
                    "delete",
                    "edit"
                ];
                const a = module26(tableProps, "itemActions", []).filter((e)=>!n.includes(e.key));
                return [].concat(module61(a), [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(t) {
                            return _this.handleUpdate(t);
                        }
                    },
                    {
                        action: "delete",
                        key: "delete",
                        icon: "trash",
                        onClick: function(t) {
                            return _this.handleDelete(t);
                        },
                        text: t("DELETE"),
                        type: "danger"
                    }
                ]);
            }
        }
    ]);
    return n;
})(Component)) || u;
export default R;
