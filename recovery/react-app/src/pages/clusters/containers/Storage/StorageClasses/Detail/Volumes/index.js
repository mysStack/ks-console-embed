import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
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
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import Module789 from "components/Base/Avatar";
import Module802 from "components/Base/Card";
import Module790 from "components/Base/Panel";
import Module796 from "components/Base/Status";
import Module874 from "components/Tables/Base";
import Module1130 from "unpacked/module-1130.js";
import module26 from "unpacked/module-26.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import module839 from "stores/volume";
import { getDisplayName, getLocalTime, showNameAndAlias } from "utils/index";
import module4250 from "unpacked/module-4250.js";
let u;
const P = inject("detailStore")(u = observer(u = ((Component_1)=>{
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
        n.handleFetch = function(e = {}) {
            const detail = n.store.detail;
            const { cluster, name } = detail;
            if (e.keyword) {
                e.name = e.keyword;
                delete e.keyword;
            }
            n.volumeStore.fetchList({
                storageClassName: name,
                cluster,
                ...e
            });
        };
        n.getColumns = function() {
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
        n.renderResizeItem = function({ src, title, des, iconName, key }) {
            return <div key={key} className={module3(module4250.item, module4250.item_bg)}>{iconName ? <module186.Icon name={iconName} size={40}/> : <img src={src} className={module4250.icon}/>}<div><span className={module4250.title}>{title}</span><span className={module4250.des}>{des}</span></div></div>;
        };
        n.renderResize = function() {
            const annotations = n.props.detailStore.detail.annotations;
            const a = JSON.parse(module26(annotations, "resize.kubesphere.io/enabled", "false"));
            const r = JSON.parse(module26(annotations, "restart.kubesphere.io/enabled", "false"));
            const u = module26(annotations, "resize.kubesphere.io/storage-limit", "10000Gi");
            const l = module26(annotations, "resize.kubesphere.io/threshold", "10%");
            const o = module26(annotations, "resize.kubesphere.io/increase", "10%");
            const value = module26(annotations, "restart.kubesphere.io/max-time", "300");
            const i = {
                title: t("VALUE_TIMEOUT", {
                    value
                }),
                iconName: "history-duotone",
                des: t("RESTART_WORKLOAD_AUTOMATICALLY")
            };
            const s = [
                {
                    iconName: "storage",
                    title: u,
                    des: t("MAXIMUM_SIZE_SCAP")
                },
                {
                    src: "/assets/chart.svg",
                    title: l,
                    des: t("THRESHOLD")
                },
                {
                    iconName: "stretch",
                    title: o,
                    des: t("INCREMENT")
                }
            ];
            if (r) {
                s.push(i);
            }
            return a && <Module790><div className={module3(module4250.item, module4250.top)}><img src="/assets/storageclass_autoresizer.svg" className={module4250.icon}/><div><span className={module4250.title}>{t("AUTO_EXPANSION")}</span><span className={module4250.des}>{t("AUTO_EXPANSION_DESC")}</span></div></div><div className={module4250.bottom}>{s.map((e, key)=>n.renderResizeItem({
                    ...e,
                    key
                }))}</div></Module790>;
        };
        n.volumeStore = e.volumeStore || new module839;
        return n;
    }
    module37(r, [
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
                })}><Module874 className={module4250.table} data={data} columns={this.getColumns()} searchType="name" keyword={filters.name} filters={filters} placeholder={t("SEARCH_BY_NAME")} pagination={pagination} isLoading={isLoading} onFetch={this.handleFetch}/></Module802></>;
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
    return r;
})(Component)) || u) || u;
export default P;
