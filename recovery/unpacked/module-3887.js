import "./module-15.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-64.js";
import "./module-137.js";
import "./module-45.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module802 from "./module-802.js";
import Module945 from "./module-945.js";
import { isEdgeWizePage } from "./module-52.js";
import module3888 from "./module-3888.js";
let l;
const b = inject("detailStore")(l = observer(l = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.convert = function(e, a) {
            const showSecret = t.state.showSecret;
            const detail = t.store.detail;
            if (showSecret) {
                return e;
            }
            if (detail.type === "kubernetes.io/dockerconfigjson" && e) {
                return e.split("").map((e)=>e.replace(/[\s\S]/g, "*")).join("");
            }
            return module26(t.originData, a, "");
        };
        t.changeSecretState = function() {
            t.setState(function(e) {
                return {
                    showSecret: !e.showSecret
                };
            });
        };
        t.store = e.detailStore;
        t.module = e.module;
        t.state = {
            showSecret: false
        };
        return t;
    }
    module37(r, [
        {
            key: "renderTLS",
            value: function(e = {}) {
                return <div className={module3888.tlsWrapper}><div className={module3888.tlsItem}><div className="h6">{t("CREDENTIAL_SI")}</div><pre>{this.convert(e["tls.crt"], "tls.crt")}</pre></div><div className={module3888.tlsItem}><div className="h6">{t("PRIVATE_KEY_TCAP")}</div><pre>{this.convert(e["tls.key"], "tls.key")}</pre></div></div>;
            }
        },
        {
            key: "renderImageRepositorySecret",
            value: function(e) {
                const _this = this;
                const r = e[".dockerconfigjson"];
                if (r && r.auths) {
                    return <div className={module3888.imageWrapper}><ul>{Object.entries(r.auths).map((e)=>{
                        const n = module96(e, 1)[0];
                        return <li key={n}><div className="h6"><module186.Icon name="earth"/>{n}</div><ul><li><span>{t(".dockerconfigjson")}:</span><span>{_this.convert(JSON.stringify(r), ".dockerconfigjson")}</span></li></ul></li>;
                    })}</ul></div>;
                }
                return null;
            }
        },
        {
            key: "renderDefault",
            value: function(t = {}) {
                const _this = this;
                return <div className={module3888.defaultWrapper}><ul>{Object.entries(t).map((t)=>{
                    const a = module96(t, 2);
                    const r = a[0];
                    const n = a[1];
                    return <li key={r}><span>{r}:</span><span><pre>{_this.convert(n, r)}</pre></span></li>;
                })}</ul></div>;
            }
        },
        {
            key: "renderBasicAuth",
            value: function(a = {}) {
                const _this = this;
                return <div className={module3888.defaultWrapper}><ul>{Object.entries(a).map((a)=>{
                    const r = module96(a, 2);
                    const n = r[0];
                    const l = r[1];
                    return <li key={n}><span>{t(n.toUpperCase())}:</span><span><pre>{_this.convert(l, n)}</pre></span></li>;
                })}</ul></div>;
            }
        },
        {
            key: "renderContent",
            value: function(e) {
                if (!e.type) {
                    return null;
                }
                let t = null;
                switch(e.type){
                    case "kubernetes.io/tls":
                        t = this.renderTLS(e.data);
                        break;
                    case "kubernetes.io/dockerconfigjson":
                        t = this.renderImageRepositorySecret(e.data);
                        break;
                    case "kubernetes.io/basic-auth":
                        t = this.renderBasicAuth(e.data);
                        break;
                    default:
                        t = this.renderDefault(e.data);
                }
                return t;
            }
        },
        {
            key: "renderOperations",
            value: function() {
                const showSecret = this.state.showSecret;
                return <module186.Button type="flat" icon={showSecret ? "eye" : "eye-closed"} onClick={this.changeSecretState}/>;
            }
        },
        {
            key: "renderPlacement",
            value: function() {
                const params = this.props.match.params;
                const { name, namespace } = params;
                if (this.store.detail.isFedManaged) {
                    return <Module945 module={this.store.module} name={name} namespace={namespace} isEdgeWize={isEdgeWizePage()}/>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.store.detail;
                return <div>{this.renderPlacement()}<Module802 title={t("DATA")} operations={this.renderOperations()}>{this.renderContent(detail)}</Module802></div>;
            }
        },
        {
            key: "originData",
            get: function() {
                return this.store.detail._originData?.data ?? {};
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default b;
