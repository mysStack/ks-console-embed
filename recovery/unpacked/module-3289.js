import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-196.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import Module788 from "./module-788.js";
import Module842 from "./module-842.js";
import Module823 from "./module-823.js";
import module26 from "./module-26.js";
import module807 from "./module-807.js";
import module1 from "./module-1.js";
import { Component } from "./module-553.js";
import module960 from "./module-960.js";
import { compareVersion } from "./module-52.js";
import module3290 from "./module-3290.js";
const _ = ((Component_1)=>{
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
        n.showConfirm = function() {
            const defaultValue = n.props.defaultValue;
            const value = n.state.value;
            if (module807(defaultValue, value)) {
                n.props.onCancel();
            } else {
                n.setState({
                    isShowConfirm: true
                });
            }
        };
        n.hideConfirm = function() {
            n.setState({
                isShowConfirm: false
            });
        };
        n.handleCancel = function() {
            n.hideConfirm();
            n.props.onCancel();
        };
        n.handleChange = function(value) {
            n.setState({
                value
            });
        };
        n.getEditorInstance = function(e) {
            n.editor = e;
        };
        n.checkScriptCompile = module44(module41.mark(function e() {
            let t;
            let devops;
            let pipeline;
            let cluster;
            let u;
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            t = n.props.params;
                            devops = t.devops;
                            pipeline = t.name;
                            cluster = t.cluster;
                            n.setState({
                                isLoading: true
                            });
                            e.next = 4;
                            return n.store.checkScriptCompile({
                                value: n.newValue,
                                pipeline,
                                devops,
                                cluster
                            }, function() {
                                n.setState({
                                    shouldCheckScriptCompile: false
                                });
                            }).finally(()=>n.setState({
                                    isLoading: false
                                }));
                        case 4:
                            if ((u = e.sent).status !== "fail") {
                                e.next = 9;
                                break;
                            }
                            n.setState({
                                error: {
                                    row: u.line - 1,
                                    column: u.column,
                                    type: "error",
                                    text: u.message
                                }
                            });
                            n.forceUpdate();
                            return e.abrupt("return", u);
                        case 9:
                            n.setState({
                                error: null
                            });
                            return e.abrupt("return", false);
                        case 11:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        n.saveJenkins = function(data) {
            const params = n.props.params;
            const { devops, name, cluster } = params;
            n.setState({
                isLoading: true
            });
            const o = cluster && cluster !== "default" ? `/klusters/${cluster}` : "";
            return request.put(`/kapis/devops.kubesphere.io/v1alpha3${o}/namespaces/${devops}/pipelines/${name}/jenkinsfile?mode=raw`, {
                data
            }, {
                headers: {
                    "content-type": "application/json"
                }
            }).finally(()=>n.setState({
                    isLoading: false
                }));
        };
        n.handleOk = module44(module41.mark(function e() {
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            n.newValue = n.state.value.replace(/\t/g, "    ");
                            if (!n.state.shouldCheckScriptCompile) {
                                e.next = 7;
                                break;
                            }
                            e.next = 4;
                            return n.checkScriptCompile();
                        case 4:
                            if (!e.sent) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return");
                        case 7:
                            if (n.isOld) {
                                e.next = 10;
                                break;
                            }
                            e.next = 10;
                            return n.saveJenkins(n.newValue);
                        case 10:
                            n.props.onOk(n.newValue);
                        case 11:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        n.store = new module960;
        n.state = {
            value: e.defaultValue ?? "",
            isLoading: false,
            isShowConfirm: false,
            shouldCheckScriptCompile: true
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { visible, defaultValue } = props;
                if (visible && !e.visible && defaultValue) {
                    this.setState({
                        value: defaultValue
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting } = props;
                const state = this.state;
                const { isShowConfirm, error, shouldCheckScriptCompile, value, isLoading } = state;
                return <><Module788 icon="cogwheel" width={900} bodyClassName={module3290.body} isSubmitting={isSubmitting || isLoading} onCancel={this.showConfirm} onOk={this.handleOk} okButtonType={shouldCheckScriptCompile ? undefined : "danger"} okText={shouldCheckScriptCompile ? undefined : "continue"} visible={visible} closable={false} maskClosable={false} title="Jenkinsfile"><><Module842 className={module3290.codeEditor} name="script" mode="groovy" value={value} onChange={this.handleChange} options={error && {
                    annotations: [
                        error
                    ]
                }}/>{error && <div className={module3290.checkResult}><img src="/assets/error.svg"/><span>{t("JENKINS_LINS_ERROR", {
                    line: error.row + 1
                })}</span></div>}{!shouldCheckScriptCompile && <div className={module3290.checkResult}><img src="/assets/error.svg"/><span>{t("FAILED_CHECK_SCRIPT_COMPILE")}</span></div>}</></Module788><Module823 visible={isShowConfirm} onCancel={this.hideConfirm} onOk={this.handleCancel} title={t("CLOSE")} desc={t("CLOSE_JENKINSFILE_EDITOR_TIP")}/></>;
            }
        },
        {
            key: "ksVersion",
            get: function() {
                const cluster = this.props.params.cluster;
                if (window.parent.globals.app.isMultiCluster) {
                    return module26(window, `parent.globals.clusterConfig.${cluster}.ksVersion`);
                }
                return module26(window, "parent.globals.ksConfig.ksVersion");
            }
        },
        {
            key: "isOld",
            get: function() {
                return compareVersion(this.ksVersion, "3.4.0") < 0;
            }
        }
    ]);
    return r;
})(Component);
export default _;
_.propTypes = {
    name: module1.string,
    params: module1.object
};
_.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
};
