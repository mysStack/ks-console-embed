import "./module-12.js";
import "./module-135.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
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
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module789 from "./module-789.js";
import Module791 from "./module-791.js";
import { trigger } from "./module-792.js";
import Module874 from "./module-874.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module929 from "./module-929.js";
import module63 from "./module-63.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module1307 from "./module-1307.js";
import { getDisplayName } from "./module-52.js";
import { ICON_TYPES } from "./module-72.js";
import { getOverlayStatus } from "./module-434.js";
import module14 from "./module-14.js";
import module2430 from "./module-2430.js";
let l;
const M = observer(l = trigger(l = ((Component_1)=>{
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
        n.getIPPools = function(e = {}) {
            if (e.keyword) {
                e.name = e.keyword;
                delete e.keyword;
            }
            n.store.fetchList({
                limit: -1,
                cluster: n.props.cluster,
                namespace: n.props.namespace,
                status: "enabled",
                ...e
            });
        };
        n.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    search: true,
                    key: "name",
                    render: function(e, t) {
                        return <Module789 icon={ICON_TYPES.ippools} iconSize={40} title={getDisplayName(t)} desc={t.description || "-"}/>;
                    }
                },
                {
                    title: t("NETWORK_SEGMENT"),
                    isHideable: true,
                    dataIndex: "cidr"
                },
                {
                    title: n.isCalico ? t("USED_IP_ADDRESSES") : <span className="flexbox items-center"><span className="margin-r4">{t("USED_IP_ADDRESSES")}</span><module186.Tooltip content={t("IPPOOL_USED_TIP")}><module186.Icon name="question" size={16}/></module186.Tooltip></span>,
                    dataIndex: "status1",
                    isHideable: true,
                    render: function(e, { status }) {
                        const n = module26(status, "capacity", 0);
                        const l = module26(status, "unallocated", 0);
                        return <Module791 title={n - l} description={t("TOTAL_VALUE", {
                            value: n
                        })}/>;
                    }
                },
                {
                    title: t("IPPOOL_BLOCK_SIZE"),
                    dataIndex: "blockSize",
                    isHideable: true,
                    render: function(e) {
                        return e ?? "-";
                    }
                },
                n.props.isOutdated ? null : {
                    title: t("IPPOOL_OVERLAY_MODE"),
                    dataIndex: "overlay",
                    isHideable: true,
                    render: function(e, { ipipMode, vxlanMode }) {
                        const n = getOverlayStatus({
                            ipipMode,
                            vxlanMode
                        });
                        return <div><span className="font-bold">{n.type}</span>{n.value && <span style={{
                            marginLeft: "4px"
                        }}>({n.value})</span>}</div>;
                    }
                }
            ];
        };
        n.changeIPPools = function(e) {
            const n_props = n.props;
            const { name, formTemplate, data } = n_props;
            n.props?.formProps?.onChange(name, JSON.stringify(e));
            if (data) {
                module74(n.props.data, name, JSON.stringify(e));
            }
            if (formTemplate) {
                module74(n.props.formTemplate, name, JSON.stringify(e));
            }
        };
        n.showCreate = function() {
            const cluster = n.props.cluster;
            return n.trigger("network.ippool.add", {
                module: "ippools",
                cluster,
                trigger: n.trigger,
                isOutdated: n.props.isOutdated,
                hideWorkspace: n.columnConfig.hideWorkspace,
                isCalico: n.isCalico,
                allList: module14.toJS(n.store?.list?.data ?? []),
                success: n.getIPPools
            });
        };
        n.onSelectRowKeys = function(selectedRowKeys) {
            n.setState({
                selectedRowKeys
            }, function() {
                n.changeIPPools(selectedRowKeys);
            });
        };
        n.showEmpty = function() {
            const list = n.store.list;
            const { isLoading, filters, total } = list;
            return !isLoading && module63(filters) && total === 0;
        };
        n.deleteItem = function(e) {
            const selectedRowKeys = n.state.selectedRowKeys;
            module929(selectedRowKeys, function(t) {
                return t === e;
            });
            n.setState({
                selectedRowKeys
            }, function() {
                n.changeIPPools(selectedRowKeys);
            });
        };
        n.renderItems = function(e) {
            return e.map((e)=><span className={module2430.item}>{e}<module186.Icon name="close" size={14} clickable onClick={function() {
                    n.deleteItem(e);
                }}/></span>);
        };
        n.rootStore = e.rootStore;
        n.ippoolStore = new module1307;
        n.store = new (n.ippoolStore.getStoreByCluster(e.cluster));
        const l = module26(e.data, e.name, "");
        n.state = {
            selectedRowKeys: l && JSON.parse(l) || []
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.store.fetchList({
                    limit: -1,
                    cluster: this.props.cluster,
                    namespace: this.props.namespace,
                    status: "enabled"
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { tableProps, name } = props;
                const selectedRowKeys = this.state.selectedRowKeys;
                const filters = this.store.list.filters;
                return <div className={module2430.ippools} name={name}>{selectedRowKeys.length > 0 ? <div className={module2430.showSelects}><p>{t("SELECTED_IPPOOLS", {
                    number: selectedRowKeys.length
                })}</p><div className={module2430.selectWrapper}>{this.renderItems(selectedRowKeys)}</div></div> : ""}<Module874 {...tableProps} module="ippools" name="POD_IP_POOL" columns={this.getColumns()} cluster={this.props.cluster} onFetch={this.getIPPools} onRefresh={this.getIPPools} onSelectRowKeys={this.onSelectRowKeys} selectedRowKeys={this.state.selectedRowKeys} disabledSelectActions data={module14.toJS(this.store.list.data)} hideFooter hideCustom searchType="name" filters={filters} showEmpty={this.showEmpty()} emptyProps={{
                    desc: t("CLUSTER_IPPOOL_EMPTY_DES")
                }}/><p className={module2430.empty}>{this.canCreate ? <>{t("ADD_IPPOOL_EMPTY_DES_ADMIN")}<a onClick={this.showCreate}>{t("CREATE_POD_IP_POOL")}</a></> : t("ADD_IPPOOL_EMPTY_DES")}</p></div>;
            }
        },
        {
            key: "isOutdated",
            get: function() {
                const cluster = this.props.cluster;
                return this.ippoolStore.isOutdated(cluster);
            }
        },
        {
            key: "isCalico",
            get: function() {
                const cluster = this.props.cluster;
                return this.ippoolStore.isCalico(cluster);
            }
        },
        {
            key: "columnConfig",
            get: function() {
                const isCalico = this.isCalico;
                return {
                    hideWorkspace: isCalico,
                    hideSerch: isCalico,
                    hideFilter: isCalico
                };
            }
        },
        {
            key: "isNetworkManager",
            get: function() {
                const cluster = this.props.cluster;
                return module26(globals, `user.clusterRules.${cluster}.network`, []).indexOf("manage") !== -1;
            }
        },
        {
            key: "canCreate",
            get: function() {
                return globals.user.globalrole === "platform-admin" || this.isNetworkManager;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default M;
