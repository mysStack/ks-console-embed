import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
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
import module96 from "utils/babel-helpers/slicedToArray";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import Module816 from "components/Clusters/ClusterTitle";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module972 from "unpacked/module-972.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import { Component, createRef } from "unpacked/module-553.js";
import module445 from "stores/workspace";
import { PATTERN_ALIAS_NAME, PATTERN_SERVICE_NAME } from "utils/constants";
import { compareVersion } from "utils/app";
import module529 from "core/request";
import module2915 from "unpacked/module-2915.js";
let l;
let o;
let u;
const P = observer((u = o = ((Component_1)=>{
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
        n.valueRenderer = function(e) {
            return <Module816 cluster={e.cluster} size="small" noStatus/>;
        };
        n.optionRenderer = function(e) {
            return <><Module816 cluster={e.cluster} size="small" theme="light" noStatus/>{e.disabled && <div className={module2915.toolmessage}><span>{e.cluster.isReady ? t("NO_DEVOPS_INSTALL") : t("UNREADY")}</span></div>}</>;
        };
        n.nameValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            const n_props = n.props;
            const { formTemplate, workspace } = n_props;
            const cluster = module26(formTemplate, "spec.placement.cluster");
            n.store.checkDevopsName({
                cluster,
                workspace,
                name: a
            }, compareVersion(n.ksVersion, "3.4.0") < 0).then((a)=>{
                if (a.exist) {
                    return r({
                        message: t("NAME_EXIST_DESC"),
                        field: e.field
                    });
                }
                r();
            });
        };
        n.handleClusterChange = function() {
            if (n.nameRef && n.nameRef.current) {
                const e = "metadata.generateName";
                if (n.formRef && n.formRef.current && !module63(n.formRef.current.state.errors)) {
                    n.formRef.current.resetValidateResults(e);
                }
                n.nameRef.current.validate(module31({}, e, module26(n.props.formTemplate, e)));
            }
        };
        n.store = e.store;
        n.workspaceStore = new module445;
        n.nameRef = createRef();
        n.formRef = createRef();
        n.state = {
            clusters: {}
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (!this.props.hideCluster) {
                    this.fetchClusters();
                }
            }
        },
        {
            key: "fetchClusters",
            value: function(e) {
                const _this = this;
                module529.get("/apis/kubesphere.io/v1alpha1/extensions/devops").then((e)=>{
                    const clusters = {};
                    const r = module26(e, "status.clusterSchedulingStatuses", {});
                    Object.entries(r).forEach((e)=>{
                        const t = module96(e, 2);
                        const r = t[0];
                        const n = t[1];
                        clusters[r] = n?.state === "Installed";
                    });
                    _this.setState({
                        clusters
                    });
                });
                this.workspaceStore.fetchClusters({
                    ...e,
                    workspace: this.props.workspace
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, formTemplate, hideCluster, onOk, onCancel } = props;
                return <module788.Form width={960} bodyClassName={module2915.body} data={formTemplate} onCancel={onCancel} onOk={onOk} visible={visible} closable={false} hideHeader formRef={this.formRef}><div className={module2915.header}><img src="/assets/project-create.svg" alt=""/><div className={module2915.title}><div>{t("CREATE_DEVOPS_PROJECT")}</div><p>{t("DEVOPS_PROJECT_CREATE_DESC")}</p></div></div><div className={module2915.content}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("SERVICE_NAME_DESC")} ref={this.nameRef} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_SERVICE_NAME,
                        message: t("INVALID_NAME_DESC", {
                            message: t("SERVICE_NAME_DESC")
                        })
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.generateName" autoFocus maxLength={63}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns>{!hideCluster && <module186.Column><module186.Form.Item label={t("CLUSTER_SETTINGS")} rules={[
                    {
                        required: true,
                        message: t("CLUSTER_EMPTY_DESC")
                    }
                ]}><module186.Select name="spec.placement.cluster" className={module2915.cluster} options={this.clusters} valueRenderer={this.valueRenderer} optionRenderer={this.optionRenderer} defaultValue={this.defaultCluster} onChange={this.handleClusterChange} showTip/></module186.Form.Item></module186.Column>}<module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns></div></module788.Form>;
            }
        },
        {
            key: "networkOptions",
            get: function() {
                return [
                    {
                        label: t("OFF"),
                        value: ""
                    },
                    {
                        label: t("ON"),
                        value: "enabled"
                    }
                ];
            }
        },
        {
            key: "clusters",
            get: function() {
                const clusters = this.state.clusters;
                return this.workspaceStore.clusters.data.map((cluster)=>({
                        label: cluster.name,
                        value: cluster.name,
                        cluster,
                        disabled: !cluster.isReady || !clusters[cluster.name]
                    }));
            }
        },
        {
            key: "defaultCluster",
            get: function() {
                const cluster = this.props.cluster;
                const t = this.clusters.filter((e)=>!e.disabled).map((e)=>e.value);
                return t.find((t)=>t === cluster) || t[0];
            }
        },
        {
            key: "ksVersion",
            get: function() {
                const formTemplate = this.props.formTemplate;
                const t = module26(formTemplate, "spec.placement.cluster");
                const a = globals.app.isMultiCluster ? module26(globals, `clusterConfig.${t}.ksVersion`, module26(this.workspaceStore.clusters.data.find((e)=>e.name === t), "configz.ksVersion")) : module26(globals, "ksConfig.ksVersion");
                return module972(a, "v");
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    formTemplate: module1.object,
    visible: module1.bool,
    isSubmitting: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
}, o.defaultProps = {
    formTemplate: {},
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default P;
