import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
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
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import Module830 from "components/Inputs/ArrayInput";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import Module848 from "components/Base/Empty";
import module26 from "unpacked/module-26.js";
import module159 from "unpacked/module-159.js";
import module323 from "stores/devops";
import module1193 from "stores/cd";
import module14 from "unpacked/module-14.js";
import Module2918 from "components/Modals/DevOpsAllowList/Destinations";
import Module2919 from "components/Modals/DevOpsAllowList/CodeRepoSelect";
const k = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.state = {
            formTemplate: {},
            options: [],
            clusters: [],
            isLoading: false
        };
        e.store = new module323;
        e.cdStore = new module1193;
        e.formRef = createRef();
        e.init = async function t() {
            e.setState({
                isLoading: true
            });
            await e.initFormTemplate();
            await e.fetchClusters();
            e.setState({
                isLoading: false
            });
        };
        e.fetchClusters = async function a() {
            let r;
            let n;
            await e.cdStore.getClustersList();
            r = e.cdStore.clustersList.map((e)=>({
                    label: e.label,
                    value: e.name,
                    server: e.server
                }));
            n = {
                label: t("ALL"),
                value: "*",
                server: "*"
            };
            e.setState({
                clusters: [
                    n
                ].concat(module61(r))
            });
        };
        e.initFormTemplate = function() {
            e.store.fetchDetail({
                ...e.props
            }).then(()=>{
                const argo = module26(module14.toJS(e.store.detail), "_originData.spec.argo", {});
                e.setState({
                    formTemplate: {
                        spec: {
                            argo
                        }
                    }
                });
            });
        };
        e.checkItemValid = function(e) {
            return e !== "";
        };
        e.sourceReposValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            if (a.length > 0) {
                const n = [];
                a.forEach((e)=>{
                    if (n.includes(e)) {
                        return r({
                            message: t("CODE_REPOSITORY_EXIST_DESC")
                        });
                    }
                    if (e) {
                        return void n.push(e);
                    }
                    return r({
                        message: t("REPO_EMPTY_DESC")
                    });
                });
            }
            r();
        };
        e.destinationsValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            if (a.length > 0) {
                const n = [];
                a.forEach((e)=>{
                    const a = n.find((t)=>t.namespace === e.namespace && t.cluster === e.name);
                    if (module159(a)) {
                        if (e.name && !e.namespace) {
                            return r({
                                message: t("PROJECT_NOT_SELECT_DESC")
                            });
                        }
                        return void n.push({
                            namespace: e.namespace,
                            cluster: e.name
                        });
                    }
                    return r({
                        message: t("DEPLOYMENT_LOCATION_EXIST_DESC")
                    });
                });
            }
            r();
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.init();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, onOk, devops, cluster } = props;
                return <module788.Form width={960} title={t("EDIT_ALLOWLIST")} data={this.state.formTemplate} onCancel={onCancel} onOk={onOk} visible={visible} formRef={this.formRef}>{this.state.isLoading ? <module186.Loading spinning={this.state.isLoading}><Module848 desc="NO_DATA"/></module186.Loading> : <><module186.Form.Item label={t("CODE_REPO_PL")} rules={[
                    {
                        validator: this.sourceReposValidator
                    }
                ]}><Module830 name="spec.argo.sourceRepos" addText={t("ADD")} itemType="string" checkItemValid={this.checkItemValid}><Module2919 devops={devops} cluster={cluster}/></Module830></module186.Form.Item><module186.Form.Item label={t("DEPLOYMENT_LOCATION_PL")} rules={[
                    {
                        validator: this.destinationsValidator
                    }
                ]}><Module830 name="spec.argo.destinations" itemType="object" addText={t("ADD")}><Module2918 clusters={this.state.clusters} formtemplate={this.state.formTemplate}/></Module830></module186.Form.Item></>}</module788.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default k;
k.propTypes = {
    formTemplate: module1.object,
    visible: module1.bool,
    isSubmitting: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
k.defaultProps = {
    formTemplate: {},
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
};
