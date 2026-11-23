import "unpacked/module-15.js";
import "unpacked/module-197.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module41 from "unpacked/module-41.js";
import module61 from "unpacked/module-61.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import Module816 from "components/Clusters/ClusterTitle";
import Module830 from "components/Inputs/ArrayInput";
import Module868 from "components/Inputs/ObjectInput";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module74 from "unpacked/module-74.js";
import module862 from "unpacked/module-862.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import { Component, createRef } from "unpacked/module-553.js";
import { PATTERN_ALIAS_NAME, PATTERN_SERVICE_NAME } from "utils/constants";
import module2923 from "unpacked/module-2923.js";
let c;
let s;
let i;
let f;
const M = observer((f = i = ((Component_1)=>{
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
        n.nameValidator = (()=>{
            const e = module44(module41.mark(function e(a, r, l) {
                let c;
                let s;
                let i;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if (r) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return", l());
                            case 2:
                                e.next = 4;
                                return n.store.checkName({
                                    name: r
                                });
                            case 4:
                                if (!e.sent.exist) {
                                    e.next = 7;
                                    break;
                                }
                                return e.abrupt("return", l({
                                    message: t("PROJECT_NAME_EXISTS_IN_HOST"),
                                    field: a.field
                                }));
                            case 7:
                                c = module26(n.props.formTemplate, "spec.placement.clusters", []);
                                e.next = 10;
                                return Promise.all(module61(c.map((e)=>n.store.checkName({
                                        name: r,
                                        cluster: e.name
                                    }))));
                            case 10:
                                s = e.sent;
                                if (!((i = s.findIndex((e)=>e.exist)) > -1 && c[i])) {
                                    e.next = 14;
                                    break;
                                }
                                return e.abrupt("return", l({
                                    message: t("PROJECT_NAME_EXISTS_IN_CLUSTER", {
                                        cluster: c[i].name
                                    }),
                                    field: a.field
                                }));
                            case 14:
                                l();
                            case 15:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t, a, r) {
                return e.apply(this, arguments);
            };
        })();
        n.valueRenderer = function(e) {
            return <Module816 cluster={e.cluster} size="small" noStatus/>;
        };
        n.optionRenderer = function(e) {
            return <Module816 cluster={e.cluster} size="small" theme="light" noStatus/>;
        };
        n.handleClusterChange = function(e) {
            module74(n.props.formTemplate, "spec.placement.clusters", module862(e, "name"));
            if (n.nameRef && n.nameRef.current) {
                const t = "metadata.name";
                if (n.formRef && n.formRef.current && !module63(n.formRef.current.state.errors)) {
                    n.formRef.current.resetValidateResults(t);
                }
                n.nameRef.current.validate(module31({}, t, module26(n.props.formTemplate, t)));
            }
        };
        n.store = e.store;
        n.formRef = createRef();
        n.nameRef = createRef();
        return n;
    }
    module37(r, [
        {
            key: "renderClusters",
            value: function() {
                return <module186.Form.Group label={t("CLUSTER_PL")} desc={t("PROJECT_CLUSTER_SETTINGS_DESC")}><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("CLUSTER_EMPTY_DESC")
                    }
                ]}><Module830 name="spec.placement.clusters" addText={t("ADD_CLUSTER")} itemType="object" onChange={this.handleClusterChange}><Module868><module186.Select name="name" placeholder=" " className={module2923.cluster} options={this.clusters} valueRenderer={this.valueRenderer} optionRenderer={this.optionRenderer} showTip/></Module868></Module830></module186.Form.Item></module186.Form.Group>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, formTemplate, onOk, onCancel, isSubmitting } = props;
                return <module788.Form width={960} formRef={this.formRef} bodyClassName={module2923.body} data={formTemplate} onCancel={onCancel} onOk={onOk} visible={visible} closable={false} isSubmitting={isSubmitting} hideHeader><div className={module2923.header}><img src="/assets/project-create.svg" alt=""/><div className={module2923.title}><div>{t("CREATE_MULTI_CLUSTER_PROJECT")}</div><p>{t("CREATE_MULTI_CLUSTER_PROJECT_DESC")}</p></div></div><div className={module2923.content}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("SERVICE_NAME_DESC")} ref={this.nameRef} rules={[
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
                ]}><module186.Input name="metadata.name" autoFocus maxLength={63}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column><module186.Column/></module186.Columns>{this.renderClusters()}</div></module788.Form>;
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
                return this.props.clusters.map((cluster)=>({
                        label: cluster.name,
                        value: cluster.name,
                        cluster,
                        disabled: !cluster.isReady
                    }));
            }
        }
    ]);
    return r;
})(Component), i.propTypes = {
    formTemplate: module1.object,
    visible: module1.bool,
    isSubmitting: module1.bool,
    clusters: module1.array,
    onOk: module1.func,
    onCancel: module1.func
}, i.defaultProps = {
    formTemplate: {},
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, s = f, module49(s.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(s.prototype, "clusters"), s.prototype), c = s)) || c;
export default M;
