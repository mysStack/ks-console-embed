import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module826 from "components/Modals/Create";
import { GRAY_RELEASE_CATEGORIES } from "utils/constants";
import module435 from "utils/form.templates";
import module902 from "utils/form.persist";
import module1446 from "stores/grayrelease";
import module4670 from "configs/steps/grayreleases";
import module4702 from "unpacked/module-4702.js";
let o;
const S = inject("rootStore")(o = observer(o = ((Component_1)=>{
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
        n.showCreate = function(e) {
            n.setState({
                showCreateModal: true,
                selectType: e.currentTarget.dataset.type
            });
        };
        n.hideCreate = function() {
            n.setState({
                showCreateModal: false,
                selectType: ""
            });
        };
        n.handleCreate = function(e) {
            const params = n.props.match.params;
            const { workspace, cluster, namespace } = params;
            n.store.create(e, {
                cluster,
                namespace
            }).then(()=>{
                n.hideCreate();
                module240.success({
                    content: t("CREATE_SUCCESSFUL")
                });
                n.routing.push(`/${workspace}/clusters/${cluster}/projects/${namespace}/grayrelease/jobs`);
                module902.delete(`${n.module}_create_form`);
            });
        };
        n.state = {
            showCreateModal: false,
            selectType: ""
        };
        n.store = new module1446;
        n.module = "strategies";
        n.namespace = n.props.match.params.namespace;
        n.cluster = n.props.match.params.cluster;
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const state = this.state;
                const { showCreateModal, selectType } = state;
                const o = GRAY_RELEASE_CATEGORIES.find((e)=>e.type === selectType) || {};
                return <div><ul className={module4702.wrapper}>{GRAY_RELEASE_CATEGORIES.map((a)=><li key={a.title}><div className={module4702.content}><div className={module4702.icon}><module186.Icon name={a.icon} size={24} type="light"/></div><div className={module4702.text}><div className="h5">{t(a.title)}</div><p>{t.html(a.desc)}</p></div></div><div className={module4702.footer}>{_this.canCreate && <module186.Button type="control" data-type={a.type} onClick={_this.showCreate}>{t("CREATE")}</module186.Button>}</div></li>)}</ul><Module826 title={t(`CREATE_${o.title}_TASK`)} module={`grayreleases_${o.type}`} formTemplate={this.formTemplate} cluster={this.cluster} namespace={this.namespace} store={this.store} visible={showCreateModal} steps={this.steps} onCancel={this.hideCreate} onOk={this.handleCreate} closable noCodeEdit/></div>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return {
                    strategy: module435[this.module]({
                        namespace: this.namespace,
                        type: this.state.selectType
                    })
                };
            }
        },
        {
            key: "steps",
            get: function() {
                return module4670;
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
export default S;
