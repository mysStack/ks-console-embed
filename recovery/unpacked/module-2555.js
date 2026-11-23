import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-48.js";
import "./module-97.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module2556 from "./module-2556.js";
import { Component, createRef } from "./module-553.js";
import module3 from "./module-3.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import Module830 from "./module-830.js";
import Module1321 from "./module-1321.js";
import { ReactComponent } from "./module-882.js";
import module918 from "./module-918.js";
import { PATTERN_HOST } from "./module-72.js";
import { withDot } from "./module-52.js";
import Module1322 from "./module-1322.js";
import module2560 from "./module-2560.js";
const R = ((Component_1)=>{
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
        n.checkItemValid = function(e) {
            return e.path && e.backend && e.backend.service && e.backend.service.name && e.backend.service.port && e.backend.service.port.number;
        };
        n.pathValidator = function(e, a, r) {
            if (a) {
                if (a.some((e)=>!n.checkItemValid(e))) {
                    return r({
                        message: t("INVALID_PATH_DESC"),
                        field: e.field
                    });
                }
                if (n.handlePathExistValidator(a)) {
                    return r({
                        message: t("PATH_EXIST"),
                        field: e.field
                    });
                }
                return void r();
            }
            return r();
        };
        n.handlePathExistValidator = function(e) {
            const t = e.map((e)=>e.path);
            let a = false;
            t.forEach((e)=>{
                for(let r = t.length, n = 0, l = 0; n <= r;){
                    if (e === t[n]) {
                        l++;
                    }
                    if (l > 1) {
                        a = true;
                        break;
                    }
                    n++;
                }
            });
            return a;
        };
        n.handleGoBack = function() {
            const resetSubRoute = n.context.resetSubRoute;
            if (resetSubRoute) {
                resetSubRoute();
            }
            n.props.onCancel();
            return false;
        };
        n.handleProtocolChange = function(protocol) {
            n.setState({
                protocol
            });
        };
        n.handleSubmit = function(e) {
            const onSave = n.props.onSave;
            const current = n.formRef.current;
            if (current) {
                current.validate(function() {
                    const r = current.getData();
                    onSave(r);
                    if (e) {
                        e();
                    }
                });
            }
        };
        n.handleValidator = function() {
            let e = false;
            const current = n.formRef.current;
            if (current) {
                current.validate(function() {
                    e = true;
                });
            }
            return e;
        };
        n.domainValidator = function(e, host, r) {
            const n_props = n.props;
            const { isFederated, data, validData, detail } = n_props;
            const m = module26(detail, "clusters", []).map((e)=>e.name);
            let v = validData?.metadata?.creationTimestamp ? "put" : "post";
            if (!host) {
                return r();
            }
            let h = n.props.cluster || n.defaultClusters;
            const namespace = module26(validData, "metadata.namespace", "");
            const name = module26(validData, "metadata.name", "");
            if (isFederated) {
                module74(validData, "apiVersion", "networking.k8s.io/v1");
                module74(validData, "kind", "Ingress");
                module74(validData, "spec", {});
            }
            module74(validData, "spec.rules", [
                {
                    host
                }
            ]);
            if (data?.clusters) {
                Promise.all(data.clusters.map((e)=>{
                    if (module2556(m, e) === -1) {
                        v = "post";
                    }
                    return n.ingressStore.checkValidDomain({
                        cluster: e,
                        namespace,
                        name
                    }, validData, v).then((e)=>e.exist);
                })).then((a)=>{
                    if (a.some((e)=>e)) {
                        return r({
                            message: t("EXIT_DOMAIN_DESC"),
                            field: e.field
                        });
                    }
                    r();
                });
            } else {
                h = isFederated ? "" : h;
                n.ingressStore.checkValidDomain({
                    cluster: h,
                    namespace,
                    name
                }, validData, v).then((a)=>{
                    if (a.exist) {
                        return r({
                            message: t("EXIT_DOMAIN_DESC"),
                            field: e.field
                        });
                    }
                    r();
                });
            }
        };
        n.state = {
            service: "",
            protocol: module26(e, "data.protocol", "http")
        };
        n.formRef = createRef();
        n.ingressStore = new module918;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const registerSubRoute = this.context.registerSubRoute;
                if (registerSubRoute) {
                    registerSubRoute(this.handleSubmit, this.handleGoBack);
                }
            }
        },
        {
            key: "getType",
            value: function(e) {
                const t = module26(e, "host");
                if (!t) {
                    return "auto";
                }
                const props = this.props;
                const { gateway, projectDetail, namespace } = props;
                const o = module26(e, "http.paths[0].backend.service.name");
                const u = module26(projectDetail, '_originData.metadata.labels["kubesphere.io/namespace"]') || namespace;
                if (t === (gateway.isHostName ? gateway.defaultIngress : `${withDot(o)}${withDot(u)}${withDot(gateway.defaultIngress)}nip.io`)) {
                    return "auto";
                }
                return "specify";
            }
        },
        {
            key: "renderForm",
            value: function() {
                const protocol = this.state.protocol;
                return <><module186.Form.Item label={t("DOMAIN_NAME_TCAP")} key={this.props.data?.clusters?.length} rules={[
                    {
                        required: true,
                        message: t("DOMAIN_NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_HOST,
                        message: t("INVALID_DOMAIN_DESC")
                    },
                    {
                        validator: this.domainValidator
                    }
                ]}><module186.Input name="host" autoFocus/></module186.Form.Item><module186.Form.Item label={t("PROTOCOL")}><module186.Select name="protocol" defaultValue="http" onChange={this.handleProtocolChange} options={this.protocols}/></module186.Form.Item>{protocol === "https" && <module186.Form.Item label={t("SECRET")}><module186.Select name="secretName" options={this.secrets} placeholder=" "/></module186.Form.Item>}<module186.Form.Item label={t("PATH_PL")} rules={[
                    {
                        required: true,
                        message: t("PATH_EMPTY_DESC")
                    },
                    {
                        validator: this.pathValidator,
                        checkOnSubmit: true
                    }
                ]}><Module830 name="http.paths" itemType="object" addText={t("ADD")} checkItemValid={this.checkItemValid}><Module1321 services={this.props.services}/></Module830></module186.Form.Item></>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { data, className, isFederated } = props;
                return <div className={module3(module2560.wrapper, className)}><div className="h4"><a className="custom-icon" onClick={this.handleGoBack}><ReactComponent/></a>{t("SET_ROUTING_RULES")}</div><div className={module2560.formWrapper}><module186.Form ref={this.formRef} data={data}>{isFederated && <module186.Form.Group label={t("CLUSTER")}><module186.Form.Item><Module1322 name="clusters" options={this.clusters} defaultValue={this.defaultClusters} onChange={function() {
                    module74(data, "host", "");
                    _this.forceUpdate();
                }}/></module186.Form.Item></module186.Form.Group>}<module186.Form.Group noWrapper>{this.renderForm()}</module186.Form.Group></module186.Form></div></div>;
            }
        },
        {
            key: "protocols",
            get: function() {
                return [
                    {
                        label: "HTTP",
                        value: "http"
                    },
                    {
                        label: "HTTPS",
                        value: "https"
                    }
                ];
            }
        },
        {
            key: "secrets",
            get: function() {
                return this.props.secrets.map((e)=>({
                        label: e.name,
                        value: e.name
                    }));
            }
        },
        {
            key: "clusters",
            get: function() {
                return module26(this.props, "projectDetail.clusters", []).slice();
            }
        },
        {
            key: "clusterNames",
            get: function() {
                let e;
                if (this == null || (e = this.clusters) === null || e === undefined) {
                    return undefined;
                }
                return e.map((e)=>e.name);
            }
        },
        {
            key: "defaultClusters",
            get: function() {
                return module26(this.props, "projectDetail.clusters", []).map((e)=>e.name);
            }
        },
        {
            key: "enableAutoGenerated",
            get: function() {
                const props = this.props;
                const { isFederated, gateway } = props;
                return !isFederated && !module63(gateway.defaultIngress);
            }
        }
    ]);
    return r;
})(Component);
export default R;
R.propTypes = {
    data: module1.object,
    secrets: module1.array,
    services: module1.array,
    gateway: module1.object,
    onSave: module1.func,
    onCancel: module1.func
};
R.defaultProps = {
    data: {},
    secrets: [],
    services: [],
    gateway: {},
    onSave: function() {},
    onCancel: function() {}
};
R.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
