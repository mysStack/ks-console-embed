import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module63 from "unpacked/module-63.js";
import "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import module186 from "unpacked/module-186.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { joinSelector } from "utils/index";
import Module833 from "unpacked/module-833.js";
import { Component } from "pages/projects/grayrelease/jobs";
import module4775 from "unpacked/module-4775.js";
let o;
const b = inject("detailStore")(o = observer(o = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.detailStore = e.detailStore;
        t.module = e.module;
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.disposer = module14.when(function() {
                    return !module63(_this.detailStore.detail);
                }, function() {
                    return _this.getData();
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.disposer) {
                    this.disposer();
                }
            }
        },
        {
            key: "getData",
            value: function() {
                const selector = module14.toJS(this.detailStore.detail).selector;
                const t = {
                    namespace: this.namespace,
                    cluster: this.cluster,
                    labelSelector: joinSelector(selector)
                };
                this.store.fetchList(t).then();
            }
        },
        {
            key: "renderEmpty",
            value: function() {
                return <Module833 icon="istio" title={t("NO_GRAYSCALE_RELEASE_TASK_FOUND")} desc={t("NO_GRAYSCALE_RELEASE_TASK_FOUND_DESC")}/>;
            }
        },
        {
            key: "renderHeader",
            value: function() {
                const params = this.props.match.params;
                const { cluster, workspace, namespace } = params;
                return <div className={module4775.header}><module186.Columns><module186.Column><p className={module4775.headerTip}>{t("GRAYSCALE_RELEASE_DESC")}</p></module186.Column><module186.Column className="is-narrow"><Link to={`/${workspace}/clusters/${cluster}/projects/${namespace}/grayrelease/cates`}>{this.canCreate && <module186.Button type="control">{t("CREATE_GRAYSCALE_RELEASE_TASK")}</module186.Button>}</Link></module186.Column></module186.Columns></div>;
            }
        },
        {
            key: "canCreate",
            get: function() {
                const params = this.props.match.params;
                const { cluster, workspace, namespace } = params;
                return globals.app.hasPermission({
                    cluster,
                    workspace,
                    project: namespace,
                    module: "grayscale-release",
                    action: "create"
                });
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default b;
