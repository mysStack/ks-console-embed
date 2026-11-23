import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module321 from "unpacked/module-321.js";
import module74 from "unpacked/module-74.js";
import { MODULE_KIND_MAP } from "utils/constants";
import module186 from "unpacked/module-186.js";
import Module1324 from "components/Forms/Workload/ClusterDiffSettings/ClustersMapper";
import Module1599 from "components/Forms/Workload/ClusterDiffSettings/ContainersMapper";
import Module1600 from "components/Forms/Workload/ClusterDiffSettings/ContainerPorts";
import Module1601 from "components/Forms/Workload/ClusterDiffSettings/Environments";
import Module1602 from "components/Forms/Workload/ClusterDiffSettings/VolumesMapper";
import Module1603 from "components/Forms/Workload/ClusterDiffSettings/VolumeTemplate";
import Module2930 from "components/Forms/Workload/ClusterDiffSettings/ContainersMapperWithService";
import Module2932 from "components/Forms/Workload/ClusterDiffSettings/ContainerPortsWithService";
import Module1322 from "components/Forms/Route/RouteRules/RuleForm/ClusterSelect";
import Module2934 from "pages/fedprojects/components/ContainerImage";
const N = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleLocal = function(t) {
            e.formTemplate.spec.overrides.map((e)=>{
                if (!(t.includes(e.clusterName) || module63(e.clusterOverrides))) {
                    e.clusterOverrides = [];
                }
                return e;
            });
            const a = [];
            t.forEach((name)=>{
                a.push({
                    name
                });
            });
            module74(e.formTemplate, "spec.placement.clusters", a);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { formRef, projectDetail, withService, formProps, module, isEdit, workspace } = props;
                const clustersDetail = module321(projectDetail.clusters, "name");
                return <div><module186.Form data={this.formTemplate} ref={formRef} {...formProps}><module186.Form.Group label={t("CLUSTER")}><module186.Form.Item><Module1322 name="clusters" options={this.clustersOption} defaultValue={this.defaultClusters} onChange={this.handleLocal}/></module186.Form.Item></module186.Form.Group>{module === "service" && isEdit ? null : <module186.Form.Group label={t("CONTAINER_IMAGE")} desc={t("CLUSTER_DIFF_CONTAINER_SETTINGS_DESC")} checkable><Module1324 clusters={this.clusters} clustersDetail={clustersDetail} namespace={this.namespace}>{function(t) {
                    return <Module1599 formTemplate={_this.formTemplate} {...t} {...formProps}>{function(e) {
                        return <Module2934 isEdit={isEdit} {...e} workspace={workspace}/>;
                    }}</Module1599>;
                }}</Module1324></module186.Form.Group>}{this.showVolumeTemplate && <module186.Form.Group label={t("VOLUME_TEMPLATE_SETTINGS")} desc={t("CLUSTER_VOLUME_DIFF_DESC")} checkable><Module1324 clusters={this.clusters} clustersDetail={clustersDetail} namespace={this.namespace}>{function(t) {
                    return <Module1602 formTemplate={_this.formTemplate} {...t}>{function(e) {
                        return <Module1603 {...e}/>;
                    }}</Module1602>;
                }}</Module1324></module186.Form.Group>}<module186.Form.Group label={t("PORT_SETTINGS")} desc={t("CLUSTER_DIFF_PORT_SETTINGS_DESC")} checkable><Module1324 clusters={this.clusters} clustersDetail={clustersDetail} namespace={this.namespace}>{module === "service" && isEdit ? function(t) {
                    return <Module2930 formTemplate={_this.formTemplate} withService={withService} {...t} {...formProps}>{function(e) {
                        return <Module2932 {...e}/>;
                    }}</Module2930>;
                } : function(t) {
                    return <Module1599 formTemplate={_this.formTemplate} withService={withService} serviceTemplate={module26(_this.props.formTemplate, "Service")} {...t} {...formProps}>{function(e) {
                        return <Module1600 {...e}/>;
                    }}</Module1599>;
                }}</Module1324></module186.Form.Group>{module === "service" && isEdit ? null : <module186.Form.Group label={t("ENVIRONMENT_VARIABLE_PL")} desc={t("CLUSTER_DIFF_ENVIRONMENT_VARIABLES_DESC")} checkable><Module1324 clusters={this.clusters} clustersDetail={clustersDetail} namespace={this.namespace}>{function(t) {
                    return <Module1599 formTemplate={_this.formTemplate} {...t} {...formProps}>{function(e) {
                        return <Module1601 {...e}/>;
                    }}</Module1599>;
                }}</Module1324></module186.Form.Group>}</module186.Form></div>;
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.formTemplate, "metadata.namespace");
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        },
        {
            key: "clusters",
            get: function() {
                return module26(this.formTemplate, "spec.placement.clusters", []);
            }
        },
        {
            key: "clustersOption",
            get: function() {
                const clusters = this.props.projectDetail.clusters;
                const t = [];
                clusters.forEach((e)=>{
                    t.push({
                        name: e.name,
                        value: e.name,
                        provider: e.provider
                    });
                });
                return t;
            }
        },
        {
            key: "showVolumeTemplate",
            get: function() {
                return this.props.module === "statefulsets" && module26(this.formTemplate, "spec.template.spec.volumeClaimTemplates");
            }
        },
        {
            key: "defaultClusters",
            get: function() {
                return module26(this.formTemplate, "spec.placement.clusters", []).map((e)=>e.name);
            }
        }
    ]);
    return r;
})(Component);
export default N;
