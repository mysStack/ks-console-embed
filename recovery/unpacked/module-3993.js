import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import { getDisplayName, getLocalTime, showNameAndAlias } from "./module-52.js";
import module839 from "./module-839.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import Module789 from "./module-789.js";
import Module802 from "./module-802.js";
import Module796 from "./module-796.js";
import Module874 from "./module-874.js";
import Module1130 from "./module-1130.js";
import module3 from "./module-3.js";
import module3994 from "./module-3994.js";
let o;
const A = inject("detailStore")(o = observer(o = ((Component_1)=>{
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
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.handleFetch = function(e = {}) {
            const detail = a.store.detail;
            const { cluster, name } = detail;
            if (e.keyword) {
                e.name = e.keyword;
                delete e.keyword;
            }
            a.volumeStore.fetchList({
                storageClassName: name,
                cluster,
                ...e
            });
        };
        a.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(e, t) {
                        return <Module789 icon="storage" title={getDisplayName(t)} noLink/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "phase",
                    width: "13%",
                    render: function(e) {
                        return <Module796 type={e} name={t(`VOLUME_STATUS_${e.toUpperCase()}`)}/>;
                    }
                },
                {
                    title: t("CAPACITY"),
                    dataIndex: "capacity",
                    width: "13%",
                    render: function(e) {
                        return e || "-";
                    }
                },
                {
                    title: t("MOUNT_STATUS"),
                    dataIndex: "inUse",
                    width: "13%",
                    render: function(e, t) {
                        return <Module1130 namespace={t.namespace} cluster={t.cluster} name={t.name}/>;
                    }
                },
                {
                    title: t("PROJECT"),
                    dataIndex: "namespace",
                    key: "namespace",
                    width: "13%",
                    customizable: true,
                    render: function(e) {
                        return showNameAndAlias(e, "project");
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    width: "21%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        a.renderResizeItem = function({ src, title, des, iconName, key }) {
            return <div key={key} className={module3(module3994.item, module3994.item_bg)}>{iconName ? <module186.Icon name={iconName} size={40}/> : <img src={src} className={module3994.icon}/>}<div><span className={module3994.title}>{title}</span><span className={module3994.des}>{des}</span></div></div>;
        };
        a.renderResize = function() {
            const annotations = a.props.detailStore.detail.annotations;
            const r = JSON.parse(module26(annotations, "resize.kubesphere.io/enabled", "false"));
            const n = JSON.parse(module26(annotations, "restart.kubesphere.io/enabled", "false"));
            const o = module26(annotations, "resize.kubesphere.io/storage-limit", "10000Gi");
            const u = module26(annotations, "resize.kubesphere.io/threshold", "10%");
            const i = module26(annotations, "resize.kubesphere.io/increase", "10%");
            const value = module26(annotations, "restart.kubesphere.io/max-time", "300");
            const l = {
                title: t("VALUE_TIMEOUT", {
                    value
                }),
                iconName: "history-duotone",
                des: t("RESTART_WORKLOAD_AUTOMATICALLY")
            };
            const s = [
                {
                    iconName: "storage",
                    title: o,
                    des: t("MAXIMUM_SIZE_SCAP")
                },
                {
                    src: "/assets/chart.svg",
                    title: u,
                    des: t("THRESHOLD")
                },
                {
                    iconName: "stretch",
                    title: i,
                    des: t("INCREMENT")
                }
            ];
            if (n) {
                s.push(l);
            }
            return r && globals.app.hasKSModule("storage-utils") && <Module790><div className={module3(module3994.item, module3994.top)}><img src="/assets/storageclass_autoresizer.svg" className={module3994.icon}/><div><span className={module3994.title}>{t("AUTO_EXPANSION")}</span><span className={module3994.des}>{t("AUTO_EXPANSION_DESC")}</span></div></div><div className={module3994.bottom}>{s.map((e, key)=>a.renderResizeItem({
                    ...e,
                    key
                }))}</div></Module790>;
        };
        a.volumeStore = e.volumeStore || new module839;
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.handleFetch();
            }
        },
        {
            key: "render",
            value: function() {
                const list = this.volumeStore.list;
                const { data, filters, isLoading } = list;
                const pagination = {
                    total: list.total,
                    page: list.page,
                    limit: list.limit
                };
                return <>{this.renderResize()}<Module802 title={t("PERSISTENT_VOLUME_CLAIM_PL")} loading={isLoading} empty={t("NO_AVAILABLE_RESOURCE_VALUE", {
                    resource: t("PERSISTENT_VOLUME_CLAIM")
                })}><Module874 className={module3994.table} data={data} columns={this.getColumns()} searchType="name" keyword={filters.name} filters={filters} placeholder={t("SEARCH_BY_NAME")} pagination={pagination} isLoading={isLoading} onFetch={this.handleFetch}/></Module802></>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "storageClassName",
            get: function() {
                return this.store.detail.name;
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default A;
