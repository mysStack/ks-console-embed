import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-188.js";
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
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module244 from "./module-244.js";
import module189 from "./module-189.js";
import module186 from "./module-186.js";
import { formatSize } from "./module-52.js";
import Module797 from "./module-797.js";
import Module963 from "./module-963.js";
let o;
const _ = inject("rootStore", "detailStore")(o = observer(o = ((Component_1)=>{
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
        e.name = "Artifacts";
        e.store = e.props.detailStore || {};
        e.handleFetch = function(t, r) {
            e.routing.query(t, r);
        };
        e.getDownloadUrl = function(t, r, n) {
            const params = e.props.match.params;
            if (params.cluster !== "default" && params.cluster) {
                return `/kapis/clusters/${params.cluster}/devops.kubesphere.io/v1alpha3/namespaces/${params.devops}/pipelineruns/${r}/artifacts/download?filename=${n}`;
            }
            return `/kapis/devops.kubesphere.io/v1alpha3/namespaces/${params.devops}/pipelineruns/${r}/artifacts/download?filename=${n}`;
        };
        e.getFilteredValue = function(t) {
            return e.store.list.filters[t];
        };
        e.getColumns = function(r, n) {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "path",
                    width: "40%",
                    render: function(t) {
                        return <a href={e.getDownloadUrl(r, n, t)} target="_blank" download rel="noreferrer noopener">{t}</a>;
                    }
                },
                {
                    title: t("SIZE"),
                    dataIndex: "size",
                    width: "40%",
                    render: function(e) {
                        return formatSize(e);
                    }
                },
                {
                    title: t("DOWNLOAD"),
                    width: "20%",
                    key: "download",
                    render: function(t, { path }) {
                        return <a href={e.getDownloadUrl(r, n, path)} target="_blank" download rel="noreferrer noopener"><module186.Icon name="download"/></a>;
                    }
                }
            ];
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                const params = this.props.match.params;
                this.unsubscribe = this.routing.history.subscribe(function(r) {
                    if (r.pathname === _this.props.match.url) {
                        const n = module244.parse(r.search.slice(1));
                        _this.getData({
                            ...params,
                            ...n
                        });
                    }
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.unsubscribe) {
                    this.unsubscribe();
                }
            }
        },
        {
            key: "getData",
            value: function(e) {
                this.store.getArtifacts({
                    ...e
                });
            }
        },
        {
            key: "render",
            value: function() {
                const e = module14.toJS(this.store.artifactsList);
                const { data, pipeline, pipelineRun, filters, isLoading, total, page, limit } = e;
                const c = total === 0;
                const filters_1 = module189(filters, "page", "workspace");
                if (c && !filters.page) {
                    return <Module963 desc={t("NO_ARTIFACT_FOUND_TIP")}/>;
                }
                const pagination = {
                    total,
                    page,
                    limit
                };
                return <Module797 data={data} columns={this.getColumns(pipeline, pipelineRun)} filters={filters_1} rowKey="path" pagination={pagination} isLoading={isLoading} onFetch={this.handleFetch} hideSearch/>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.match.url;
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default _;
