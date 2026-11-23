import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module794, { ListPage } from "./module-794.js";
import Module789 from "./module-789.js";
import Module797 from "./module-797.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import module911 from "./module-911.js";
let i;
const O = module794({
    store: new module911,
    module: "volumesnapshotclasses",
    authKey: "volumesnapshotclasses",
    name: "VOLUME_SNAPSHOT_CLASS",
    rowKey: "uid"
})(i = ((Component_1)=>{
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
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, prefix } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    search: true,
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(e, t) {
                        return <Module789 to={`${prefix}/${e}`} title={getDisplayName(t)} desc={t.description}/>;
                    }
                },
                {
                    title: t("VOLUME_SNAPSHOT_PL"),
                    dataIndex: "count",
                    isHideable: true,
                    width: "17.6%"
                },
                {
                    title: t("PROVISIONER"),
                    dataIndex: "driver",
                    isHideable: true,
                    width: "17.6%"
                },
                {
                    title: t("DELETION_POLICY"),
                    dataIndex: "deletionPolicy",
                    isHideable: true,
                    width: "17.6%"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    isHideable: true,
                    width: "12.3%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm");
                    }
                }
            ];
        };
        e.showCreate = function() {
            e.props.trigger("snapshotClasses.create", {
                name: "VOLUME_SNAPSHOT_CLASS",
                module: "volumesnapshotclass",
                cluster: e.props.match.params.cluster,
                success: e.props.routing.query
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                return <ListPage {...this.props} noWatch><Module797 {...tableProps} columns={this.getColumns()} itemActions={this.itemActions} onCreate={this.showCreate}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, store, match, name } = props;
                const cluster = match.params.cluster;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        show: this.showAction,
                        onClick: async (t)=>{
                            let r;
                            r = await store.fetchDetail(t);
                            trigger("resource.baseinfo.edit", {
                                store,
                                detail: r,
                                cluster,
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
                        onClick: async (t)=>{
                            let r;
                            r = await store.fetchDetail(t);
                            trigger("volume.snapshot.yaml.edit", {
                                store,
                                detail: r,
                                yaml: r._originData,
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
                        onClick: function(detail) {
                            return trigger("resource.delete", {
                                type: name,
                                detail,
                                success: _this.props.getData
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || i;
export default O;
