import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
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
import module63 from "unpacked/module-63.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import { inject, observer } from "unpacked/module-239.js";
import module240 from "unpacked/module-240.js";
import Module833 from "unpacked/module-833.js";
import Module4703 from "pages/projects/components/Modals/GrayReleaseDetail";
import module1446 from "stores/grayrelease";
import Module4713 from "pages/projects/containers/GrayRelease/Jobs/Item";
import module1448 from "unpacked/module-1448.js";
const O = ((Component_1)=>{
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
        n.showDetail = function(e) {
            n.setState({
                showDetailModal: true,
                selectItem: {
                    ...e,
                    workspace: n.workspace
                }
            });
        };
        n.hideDetail = function() {
            n.setState({
                showDetailModal: false,
                selectItem: {}
            }, function() {
                n.getData();
            });
        };
        n.handleDelete = function() {
            n.store.delete(n.state.selectItem).then(()=>{
                module240.success({
                    content: `${t("DELETED_SUCCESSFULLY")}`
                });
                n.hideDetail();
            });
        };
        n.showCreateGrayReleaseJob = function() {
            const params = n.props.match.params;
            const { workspace, cluster, namespace } = params;
            n.props.rootStore.routing.push(`/${workspace}/clusters/${cluster}/projects/${namespace}/grayrelease/cates`);
        };
        n.state = {
            showDetailModal: false,
            selectItem: {}
        };
        n.store = new module1446;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "getData",
            value: function() {
                this.store.fetchList({
                    namespace: this.namespace,
                    cluster: this.cluster
                });
            }
        },
        {
            key: "renderHeader",
            value: function() {
                return null;
            }
        },
        {
            key: "renderEmpty",
            value: function() {
                return <Module833 icon="istio" title={t("NO_GRAYSCALE_RELEASE_TASK_FOUND")} desc={t("NO_GRAYSCALE_RELEASE_TASK_FOUND_DESC")} actions={this.canCreate ? <module186.Button type="control" onClick={this.showCreateGrayReleaseJob}>{t("CREATE")}</module186.Button> : null}/>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const list = this.store.list;
                const t_data = list.data;
                if (list.isLoading) {
                    return <module186.Loading className={module1448.loading}/>;
                }
                if (module63(t_data)) {
                    return this.renderEmpty();
                }
                return <div className={module1448.items}>{t_data.map((t)=><Module4713 key={t.name} data={t} onClick={_this.showDetail} store={_this.store}/>)}</div>;
            }
        },
        {
            key: "renderFooter",
            value: function() {
                const total = this.store.list.total;
                return <div className={module1448.footer}><p>{t("TOTAL_ITEMS", {
                    num: total
                })}</p></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderHeader()}{this.renderContent()}{this.renderFooter()}<Module4703 detail={this.state.selectItem} visible={this.state.showDetailModal} onCancel={this.hideDetail} onDelete={this.handleDelete}/></div>;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.match.params.namespace;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "canCreate",
            get: function() {
                const params = this.props.match.params;
                const { cluster, workspace, namespace } = params;
                return globals.app.getActions({
                    cluster,
                    workspace,
                    project: namespace,
                    module: "applications"
                }).includes("edit") && this.serviceMeshEnable;
            }
        },
        {
            key: "serviceMeshEnable",
            get: function() {
                return globals.app.hasClusterModule(this.cluster, "servicemesh");
            }
        }
    ]);
    return r;
})(Component);
const R = inject("rootStore")(observer(O));
export default R;
const A = O;
export { A as Component };
