import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-137.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module96 from "./module-96.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module910 from "./module-910.js";
import Module790 from "./module-790.js";
import Module842 from "./module-842.js";
import { learnMoreTip } from "./module-52.js";
import { getValue } from "./module-895.js";
import { copyToClipboard } from "./module-453.js";
import { safeBtoa } from "./module-440.js";
import module853 from "./module-853.js";
import module1823 from "./module-1823.js";
let l;
let u;
const w = observer((u = ((Component_1)=>{
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
        n.fetchData = function() {
            n.store.fetchDetail({
                ...n.props.match.params,
                name: n.secret
            });
        };
        n.convert = function(e) {
            if (n.state.showSecret) {
                return e;
            }
            return safeBtoa(e);
        };
        n.changeSecretState = function(e) {
            e.preventDefault();
            e.stopPropagation();
            n.setState(function(e) {
                return {
                    showSecret: !e.showSecret
                };
            });
        };
        n.handleCopy = function() {
            copyToClipboard(getValue(n.kubeconfig));
            module240.success({
                content: t("COPY_SUCCESSFUL")
            });
        };
        n.handleDownload = function() {
            const e = new Blob([
                getValue(n.kubeconfig)
            ], {
                type: "text/plain;charset=utf-8"
            });
            module910.saveAs(e, "kubeconfig.yaml");
        };
        n.secret = e.secret;
        n.serviceAccountName = e.serviceAccountName;
        n.store = new module853;
        n.state = {
            showSecret: false
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "renderSecretContent",
            value: function() {
                const _this = this;
                const data = module14.toJS(this.store).detail.data;
                const r = data === undefined ? {} : data;
                return <div className={module1823.secretWrapper}><div className={module1823.title}><div className="h6">{t("DATA_SETTINGS")}</div>{this.renderOperations()}</div><div className={module1823.defaultWrapper}><ul>{Object.entries(r).map((t)=>{
                    const a = module96(t, 2);
                    const r = a[0];
                    const n = a[1];
                    return <li key={r}><span>{r}:</span><span><pre>{_this.convert(n)}</pre></span></li>;
                })}</ul></div></div>;
            }
        },
        {
            key: "renderOperations",
            value: function() {
                const showSecret = this.state.showSecret;
                return <module186.Button type="flat" icon={showSecret ? "eye-closed" : "eye"} onClick={this.changeSecretState}/>;
            }
        },
        {
            key: "renderConfigContent",
            value: function() {
                const e = t.html("SERVICEACCOUNT_KUBECONFIG_DESC");
                return <div className={module1823.configWrapper}><div className={module1823.title}><div className="h6">{t("KUBECONFIG_SETTINGS")}</div><p className="text-desc">{learnMoreTip(e)}</p></div><div className={module1823.codeEditor}><div className={module1823.ops}><module186.Icon name="copy" size={20} clickable color={{
                    primary: "#fff",
                    secondary: "#fff"
                }} onClick={this.handleCopy}/><span className={module1823.split}>|</span><module186.Icon name="download" size={20} clickable color={{
                    primary: "#fff",
                    secondary: "#fff"
                }} onClick={this.handleDownload}/></div><Module842 value={getValue(this.kubeconfig)} options={{
                    readOnly: true
                }}/></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <Module790 title={t("SECRET_VALUE", {
                    value: this.secret
                })}>{this.renderSecretContent()}{this.renderConfigContent()}</Module790>;
            }
        },
        {
            key: "kubeconfig",
            get: function() {
                const { data = {}, namespace } = module14.toJS(this.store).detail;
                return {
                    apiVersion: "v1",
                    kind: "Config",
                    clusters: [
                        {
                            name: `${this.serviceAccountName}@local`,
                            cluster: {
                                server: "https://kubernetes.default.svc:443",
                                "certificate-authority-data": safeBtoa(data["ca.crt"])
                            }
                        }
                    ],
                    users: [
                        {
                            name: this.serviceAccountName,
                            user: {
                                token: data.token
                            }
                        }
                    ],
                    contexts: [
                        {
                            name: `${this.serviceAccountName}@local`,
                            context: {
                                user: this.serviceAccountName,
                                cluster: `${this.serviceAccountName}@local`,
                                namespace
                            }
                        }
                    ],
                    "current-context": `${this.serviceAccountName}@local`
                };
            }
        }
    ]);
    return r;
})(Component), module49(u.prototype, "kubeconfig", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "kubeconfig"), u.prototype), l = u)) || l;
export default w;
