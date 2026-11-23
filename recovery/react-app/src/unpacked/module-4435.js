import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
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
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module199 from "unpacked/module-199.js";
import module241 from "unpacked/module-241.js";
import module4436 from "unpacked/module-4436.js";
import module186 from "unpacked/module-186.js";
import { getDisplayName, joinSelector } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import { getWorkloadStatus } from "utils/status";
import Module789 from "components/Base/Avatar";
import Module797 from "components/Tables/List";
import module794 from "components/HOCs/withList";
import Module866 from "unpacked/module-866.js";
import Module805 from "unpacked/module-805.js";
import module318 from "stores/workload/index";
import module1333 from "unpacked/module-1333.js";
import module4440 from "unpacked/module-4440.js";
let o;
const I = module794({
    store: new module318("deployments"),
    module: "deployments"
})(o = inject("workspaceStore")(o = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let n;
        module36(this, a);
        n = r.call(this, e);
        n.fetchVersions = function() {
            return n.appTemplateVersionStore.fetchList({
                cluster: n.cluster,
                workspace: n.workspace,
                labelSelector: `apps.edgewize.io/apptemplate=${n.name}`,
                limit: -1
            });
        };
        n.getItemDesc = function(e) {
            const r = getWorkloadStatus(e, n.props.module);
            const { status, reason } = r;
            if (reason) {
                return <Module805 status={status} reason={t(reason)} data={e}/>;
            }
            return e.description || "-";
        };
        n.getColumns = function() {
            const n_props = n.props;
            const { getSortOrder, module } = n_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(e, t) {
                        const r = `/${n.workspace}/clusters/${n.cluster}/projects/${t.namespace}`;
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(t)} desc={n.getItemDesc(t)} to={`${r}/${module}/${e}`} isMultiCluster={t.isFedManaged}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "22%",
                    render: function(e, data) {
                        return <Module866 data={data} module={module}/>;
                    }
                },
                {
                    title: t("VERSION"),
                    dataIndex: 'labels["apps.edgewize.io/apptemplateversion"]',
                    isHideable: true
                },
                {
                    title: t("PROJECT"),
                    dataIndex: "namespace",
                    isHideable: true
                },
                {
                    title: t("NODE_GROUP"),
                    dataIndex: 'labels["apps.edgewize.io/nodegroup"]',
                    isHideable: true
                },
                {
                    title: t("EDGE_NODE"),
                    dataIndex: 'labels["apps.edgewize.io/node"]',
                    isHideable: true
                }
            ];
        };
        n.fetchData = function(e) {
            const selectedVersion = n.state.selectedVersion;
            const r = {
                cluster: n.cluster,
                labelSelectorMap: {
                    "apps.edgewize.io/apptemplate": n.name,
                    "apps.edgewize.io/apptemplateversion": selectedVersion
                }
            };
            const a = module199(null, r, e);
            const { labelSelectorMap, ...rest } = a;
            const labelSelector = joinSelector(module4436(labelSelectorMap));
            const s = {
                ...rest,
                labelSelector
            };
            n.workloadStore.fetchList(s);
        };
        n.renderEmpty = function() {
            return <div className={module4440.empty}><span><module186.Icon name="exclamation" size={48}/></span><h5>{t("NO_MATCHING_RESULT_FOUND")}</h5></div>;
        };
        n.workloadStore = e.store;
        n.appTemplateVersionStore = new module1333;
        n.state = {
            selectedVersion: ""
        };
        return n;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.fetchVersions();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                if (t.selectedVersion !== this.state.selectedVersion) {
                    this.fetchData();
                }
            }
        },
        {
            key: "renderSelect",
            value: function() {
                const _this = this;
                const options = this.versions.map(({ versionId })=>({
                        value: versionId,
                        label: versionId,
                        icon: "time-backup"
                    }));
                return <module186.Select className={module4440.select} name="selectedVersion" options={options} placeholder={t("ALL_VERSIONS")} prefixIcon=<module186.Icon name="time-backup" size={20}/> optionRenderer={function(e) {
                    return <><module186.Icon name="time-backup" type="light" size={16}/><span className={module4440["select-option-text"]}>{e.label}</span></>;
                }} clearable isLoading={this.appTemplateVersionStore.list.isLoading} onChange={function(selectedVersion) {
                    return _this.setState({
                        selectedVersion
                    });
                }}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const list = this.workloadStore.list;
                const { data, filters, page, total, limit, isLoading } = list;
                const pagination = {
                    page,
                    total,
                    limit
                };
                return <Module797 name="app-template-instances" columns={this.getColumns()} data={module14.toJS(data)} customFilter={this.renderSelect()} searchType="name" filters={module241(filters, "name")} pagination={pagination} isLoading={isLoading} emptyProps={{
                    desc: ""
                }} emptyText={this.renderEmpty()} onFetch={this.fetchData}/>;
            }
        },
        {
            key: "name",
            get: function() {
                return this.props.match.params.name;
            }
        },
        {
            key: "cluster",
            get: function() {
                const detail = this.props.workspaceStore.detail;
                return module26(module14.toJS(detail), "clusters.[0].name", "");
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "versions",
            get: function() {
                return module14.toJS(this.appTemplateVersionStore.list.data);
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default I;
