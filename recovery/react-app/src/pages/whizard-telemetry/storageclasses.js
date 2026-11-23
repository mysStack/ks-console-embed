import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import module26 from "unpacked/module-26.js";
import module250 from "unpacked/module-250.js";
import module240 from "unpacked/module-240.js";
import Module789 from "components/Base/Avatar";
import Module793 from "unpacked/module-793.js";
import Module797 from "components/Tables/List";
import module794, { ListPage } from "components/HOCs/withList";
import { getDisplayName } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import module867 from "stores/storageClass";
import module1211 from "stores/accessor";
let l;
const P = module794({
    store: new module867,
    name: "STORAGE_CLASS",
    module: "storageclasses"
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
                    render: function(t, a) {
                        return <Module789 icon={ICON_TYPES[e.module]} to={`${prefix}/${t}`} title={getDisplayName(a)} desc={a.description}/>;
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
                    title: t("DEFAULT_STORAGE_CLASS"),
                    dataIndex: "default",
                    isHideable: true,
                    render: function(e) {
                        if (e) {
                            return t("YES");
                        }
                        return "-";
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
        return e;
    }
    module37(r, [
        {
            key: "validateSelect",
            value: function(e) {
                const _this = this;
                const e_callback = e.callback;
                return function() {
                    const list = _this.list;
                    const { selectedRowKeys, data } = list;
                    const u = data.some((e)=>module250(selectedRowKeys, e.name) && e.associationPVCCount);
                    if (u) {
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
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps}/><Module797 {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()}/></ListPage>;
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
        },
        {
            key: "itemActions",
            get: function() {
                return [];
            }
        }
    ]);
    return r;
})(Component)) || l;
export default P;
