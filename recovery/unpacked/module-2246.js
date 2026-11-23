import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module63 from "./module-63.js";
import module136 from "./module-136.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import { ReactComponent } from "./module-882.js";
import module186 from "./module-186.js";
import Module1096 from "./module-1096.js";
import Module1288 from "./module-1288.js";
import Module1290 from "./module-1290.js";
import Module1292 from "./module-1292.js";
import Module1293 from "./module-1293.js";
import Module1294 from "./module-1294.js";
import Module2276 from "./module-2276.js";
import Module2285 from "./module-2285.js";
import Module2287 from "./module-2287.js";
import module2289 from "./module-2289.js";
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
    function r(e) {
        let u;
        module36(this, r);
        u = a.call(this, e);
        u.registerForm = function() {
            const registerSubRoute = u.context.registerSubRoute;
            const onCancel = u.props.onCancel;
            if (registerSubRoute) {
                registerSubRoute(u.handleSubmit, onCancel);
            }
        };
        u.handleGoBack = function() {
            const resetSubRoute = u.context.resetSubRoute;
            if (resetSubRoute) {
                resetSubRoute();
            }
            u.props.onCancel();
        };
        u.handleSubmit = function(e) {
            const u_props = u.props;
            const { onSave, withService } = u_props;
            const current = u.formRef.current;
            if (current) {
                current.validate(function() {
                    const t = current.getData();
                    if (t.args) {
                        t.args = t.args.filter((e)=>!module63(e));
                    }
                    if (t.command) {
                        t.command = t.command.filter((e)=>!module63(e));
                    }
                    if (t.env) {
                        t.env = t.env.filter(({ name })=>!module63(name));
                    }
                    if (t.ports) {
                        t.ports = t.ports.filter((e)=>e.name && e.containerPort);
                    }
                    if (module63(t.lifecycle)) {
                        delete t.lifecycle;
                    }
                    if (module63(t.livenessProbe)) {
                        delete t.livenessProbe;
                    }
                    if (module63(t.startupProbe)) {
                        delete t.startupProbe;
                    }
                    if (module63(t.readinessProbe)) {
                        delete t.readinessProbe;
                    }
                    if (!withService && t.ports) {
                        t.ports.forEach((e)=>{
                            if (e.servicePort !== undefined) {
                                delete e.servicePort;
                            }
                        });
                    }
                    t.image = u.state.imageDetail.image;
                    onSave(t);
                    if (e) {
                        e();
                    }
                });
            }
        };
        u.handleContainerTypeChange = function(containerType) {
            u.setState({
                containerType
            });
        };
        u.formRef = createRef();
        u.state = {
            containerType: e.data.type || "worker",
            formData: module136(e.data),
            imageDetail: e.data?.image ? {
                image: e.data?.image
            } : {}
        };
        return u;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                const _this = this;
                return {
                    forceUpdate: function() {
                        _this.forceUpdate();
                    },
                    imageDetail: this.state.imageDetail,
                    setImageDetail: function(imageDetail) {
                        _this.setState({
                            imageDetail
                        });
                    }
                };
            }
        }
    ]);
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.registerForm();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, isFederated, cluster, limitRange, imageRegistries, namespace, withService, supportGpuSelect, projectDetail, containers, type, isEdgeWize, onlyDockerHub } = props;
                const state = this.state;
                const { containerType, formData } = state;
                return <div className={module3(module2289.wrapper, className)}><div className="h5"><a className="custom-icon" onClick={this.handleGoBack}><ReactComponent/></a>{this.title}</div><module186.Form ref={this.formRef} data={formData}><Module1294 data={formData} cluster={cluster} namespace={namespace} limitRange={limitRange} imageRegistries={onlyDockerHub ? [] : imageRegistries} defaultContainerType={containerType} onContainerTypeChange={this.handleContainerTypeChange} workspaceQuota={this.props.workspaceQuota} supportGpuSelect={supportGpuSelect} isEdgeWize={isEdgeWize} containers={containers} type={type}/><Module1096 withService={containerType !== "init" && withService} data={formData}/><Module1292/>{containerType !== "init" && <Module1293/>}<Module2287/><Module1288/><Module1290 namespace={namespace} isFederated={isFederated} cluster={cluster} isEdgeWize={isEdgeWize} projectDetail={projectDetail}/><Module2276/><Module2285 data={formData}/></module186.Form></div>;
            }
        },
        {
            key: "title",
            get: function() {
                const props = this.props;
                const { type, titlePrefix } = props;
                const n = t(`${type.toUpperCase()}_CONTAINER`);
                return `${titlePrefix}${n}`;
            }
        }
    ]);
    return r;
})(Component);
export default N;
N.propTypes = {
    onlyDockerHub: module1.bool,
    isEdgeWize: module1.bool,
    className: module1.string,
    type: module1.string,
    titlePrefix: module1.string,
    namespace: module1.string,
    module: module1.string,
    data: module1.object,
    onSave: module1.func,
    onCancel: module1.func,
    configMaps: module1.array,
    secrets: module1.array,
    containers: module1.array
};
N.defaultProps = {
    className: "",
    type: "Add",
    titlePrefix: "",
    onlyDockerHub: false,
    isEdgeWize: false,
    namespace: "",
    module: "",
    data: {},
    onSave: function() {},
    onCancel: function() {},
    configMaps: [],
    secrets: [],
    containers: []
};
N.childContextTypes = {
    forceUpdate: module1.func,
    imageDetail: module1.object,
    setImageDetail: module1.func
};
N.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
