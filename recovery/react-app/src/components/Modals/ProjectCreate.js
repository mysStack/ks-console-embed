import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
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
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import { Component, createRef } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module159 from "unpacked/module-159.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import Module951 from "components/ToggleView";
import Module843 from "components/Inputs/PropertiesInput";
import Module816 from "components/Clusters/ClusterTitle";
import { isValidAnnotation } from "utils/index";
import module445 from "stores/workspace";
import module3310 from "unpacked/module-3310.js";
import { PATTERN_ALIAS_NAME, PATTERN_SERVICE_NAME } from "utils/constants";
import module3311 from "unpacked/module-3311.js";
let l;
let o;
let u;
let c;
const L = observer((c = u = ((Component_1)=>{
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
        n.nameValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            if (a.indexOf("kube-") === 0) {
                return r({
                    message: t("NAME_VALIDATION_FAILED"),
                    field: e.field
                });
            }
            const l = n.props.cluster || module26(n.props.formTemplate, "cluster");
            if (!l && globals.app.isMultiCluster) {
                return r();
            }
            n.store.checkName({
                name: a,
                cluster: l
            }).then((a)=>{
                if (a.exist) {
                    return r({
                        message: t("PROJECT_NAME_EXIST_DESC"),
                        field: e.field
                    });
                }
                r();
            });
        };
        n.annotationValidator = function(e, a, r) {
            if (module159(a) || module63(a)) {
                return r();
            }
            if (isValidAnnotation(a)) {
                return void r();
            }
            return r({
                message: t("ANNOTATION_FORMAT_DESC")
            });
        };
        n.handleClusterChange = function() {
            if (n.nameRef && n.nameRef.current) {
                const e = "metadata.name";
                if (n.formRef && n.formRef.current && !module63(n.formRef.current.state.errors)) {
                    n.formRef.current.resetValidateResults(e);
                }
                n.nameRef.current.validate(module31({}, e, module26(n.props.formTemplate, e)));
            }
        };
        n.valueRenderer = function(e) {
            return <Module816 cluster={e.cluster} isEdgeWize={n.isEdgeCluster} size="small" noStatus/>;
        };
        n.optionRenderer = function(e) {
            return <Module816 isEdgeWize={n.isEdgeCluster} cluster={e.cluster} size="small" theme="light" noStatus/>;
        };
        n.store = e.store;
        n.workspaceStore = e.isEdgeWize ? new module3310 : new module445;
        n.formRef = createRef();
        n.nameRef = createRef();
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
                this.workspaceStore.fetchClusters({
                    ...e,
                    workspace: this.props.workspace
                });
            }
        },
        {
            key: "renderClusters",
            value: function() {
                const e = this.isEdgeCluster ? t("EDGE_CLUSTER") : t("KS_CLUSTER");
                return <module186.Form.Group label={e} desc={t("SELECT_CLUSTER_DESC", {
                    type: e
                })}><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("CLUSTER_EMPTY_DESC")
                    }
                ]}><module186.Select name="cluster" className={module3311.cluster} options={this.clusters} defaultValue={this.props.defaultCluster} valueRenderer={this.valueRenderer} optionRenderer={this.optionRenderer} onChange={this.handleClusterChange} placeholder=" " disabled={this.isEdgeCluster} showTip/></module186.Form.Item></module186.Form.Group>;
            }
        },
        {
            key: "renderAdvancedSettings",
            value: function() {
                return <Module951 className={module3311.advanced}><module186.Columns><module186.Column><module186.Form.Item label={t("ANNOTATION_PL")} rules={[
                    {
                        validator: this.annotationValidator
                    }
                ]}><Module843 name="metadata.annotations" addText={t("ADD")}/></module186.Form.Item></module186.Column></module186.Columns></Module951>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, formTemplate, hideCluster, onOk, onCancel, isSubmitting } = props;
                return <module788.Form width={960} formRef={this.formRef} bodyClassName={module3311.body} data={formTemplate} onCancel={onCancel} onOk={onOk} visible={visible} closable={false} isSubmitting={isSubmitting} hideHeader><div className={module3311.header}><img src="/assets/project-create.svg" alt=""/><div className={module3311.title}><div>{t("CREATE_PROJECT")}</div><p>{t("CREATE_PROJECT_DESC")}</p></div></div><div className={module3311.content}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("PROJECT_NAME_DESC")} ref={this.nameRef} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_SERVICE_NAME,
                        message: t("PROJECT_NAME_INVALID_DESC")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name" autoFocus maxLength={63}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column><module186.Column/></module186.Columns>{!hideCluster && this.renderClusters()}{this.isClusterManage && this.renderAdvancedSettings()}</div></module788.Form>;
            }
        },
        {
            key: "isClusterManage",
            get: function() {
                return globals.app.isPlatformAdmin || globals.app.hasPermission({
                    module: "clusters",
                    action: "manage"
                });
            }
        },
        {
            key: "isEdgeCluster",
            get: function() {
                return this.props.type === "edge";
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
                return this.workspaceStore.clusters.data.map((e)=>({
                        label: e.name,
                        value: e.name,
                        cluster: e,
                        disabled: !e.isReady
                    }));
            }
        },
        {
            key: "defaultClusters",
            get: function() {
                const e = this.workspaceStore.clusters.data.filter((e)=>e.isReady).map((e)=>({
                        name: e.name
                    }));
                if (module63(e)) {
                    return undefined;
                }
                return e;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    isEdgeWize: module1.bool,
    formTemplate: module1.object,
    visible: module1.bool,
    isSubmitting: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
}, u.defaultProps = {
    formTemplate: {},
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, o = c, module49(o.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "clusters"), o.prototype), module49(o.prototype, "defaultClusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "defaultClusters"), o.prototype), l = o)) || l;
export default L;
