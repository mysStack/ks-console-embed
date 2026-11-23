import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-98.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-57.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module802 from "components/Base/Card";
import module26 from "unpacked/module-26.js";
import module5036 from "unpacked/module-5036.js";
let o;
const g = inject("detailStore")(o = observer(o = ((Component_1)=>{
    module55(a, Component_1);
    var r = ((e)=>{
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let t;
        module36(this, a);
        t = r.call(this, e);
        t.convert = function(e, r) {
            if (t.state.showSecret) {
                return e;
            }
            return module26(t.originData, r, "");
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
    module37(a, [
        {
            key: "renderTLS",
            value: function(e = {}) {
                return <div className={module5036.tlsWrapper}><div className={module5036.tlsItem}><div className="h6">{t("CREDENTIAL_SI")}</div><pre>{this.convert(e["tls.crt"], "tls.crt")}</pre></div><div className={module5036.tlsItem}><div className="h6">{t("PRIVATE_KEY_TCAP")}</div><pre>{this.convert(e["tls.key"], "tls.key")}</pre></div></div>;
            }
        },
        {
            key: "renderImageRepositorySecret",
            value: function(e) {
                const _this = this;
                const a = e[".dockerconfigjson"];
                if (a && a.auths) {
                    return <div className={module5036.imageWrapper}><ul>{Object.entries(a.auths).map((e)=>{
                        const n = module96(e, 1)[0];
                        return <li key={n}><div className="h6"><module186.Icon name="earth"/>{n}</div><ul><li><span>{t(".dockerconfigjson")}:</span><span>{_this.convert(JSON.stringify(a), ".dockerconfigjson")}</span></li></ul></li>;
                    })}</ul></div>;
                }
                return null;
            }
        },
        {
            key: "renderDefault",
            value: function(t = {}) {
                const _this = this;
                return <div className={module5036.defaultWrapper}><ul>{Object.entries(t).map((t)=>{
                    const r = module96(t, 2);
                    const a = r[0];
                    const n = r[1];
                    return <li key={a}><span>{a}:</span><span><pre>{_this.convert(n, a)}</pre></span></li>;
                })}</ul></div>;
            }
        },
        {
            key: "renderBasicAuth",
            value: function(r = {}) {
                const _this = this;
                return <div className={module5036.defaultWrapper}><ul>{Object.entries(r).map((r)=>{
                    const a = module96(r, 2);
                    const n = a[0];
                    const o = a[1];
                    return <li key={n}><span>{t(n.toUpperCase())}:</span><span><pre>{_this.convert(o, n)}</pre></span></li>;
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
                return <module186.Button type="flat" icon={showSecret ? "eye-closed" : "eye"} onClick={this.changeSecretState}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.store.detail;
                const r = detail === undefined ? {} : detail;
                return <Module802 title={t("DATA")} operations={this.renderOperations()}>{this.renderContent(r)}</Module802>;
            }
        },
        {
            key: "originData",
            get: function() {
                return this.store.detail._originData?.data ?? {};
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default g;
