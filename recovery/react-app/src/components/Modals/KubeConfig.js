import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module3 from "unpacked/module-3.js";
import module910 from "unpacked/module-910.js";
import module1764 from "unpacked/module-1764.js";
import Module1763 from "components/Cards/Tips";
import module186 from "unpacked/module-186.js";
import Module842 from "components/Base/CodeEditor";
import module26 from "unpacked/module-26.js";
import { learnMoreTip } from "utils/index";
import module1765 from "stores/terminal";
import module3505 from "unpacked/module-3505.js";
let l;
const S = module1764(l = observer(l = ((Component_1)=>{
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
        e.store = new module1765;
        e.handleDownload = function() {
            const kubeconfig = e.store.kubeconfig;
            const a = new Blob([
                kubeconfig
            ], {
                type: "text/plain;charset=utf-8"
            });
            module910.saveAs(a, "kubeconfig.yaml");
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const e = module26(this.props, "match.params", {});
                this.store.fetchKubeConfig(e);
            }
        },
        {
            key: "render",
            value: function() {
                return <Module1763 wrapperClassName={module3505.kubectl} localStorageKey="kubectl-config" article={this.renderConfig()} tips={this.renderTips()} onToggle={this.onTipsToggle}/>;
            }
        },
        {
            key: "renderConfig",
            value: function() {
                return <div className={module3(module3505.pane, module3505.terminal)}><div className={module3505.download} onClick={this.handleDownload}><module186.Icon name="download" size={20} type="light"/>{t("DOWNLOAD")}</div><Module842 value={this.store.kubeconfig} options={{
                    readOnly: true
                }}/></div>;
            }
        },
        {
            key: "renderTips",
            value: function() {
                const e = t.html("KUBECONFIG_TIP");
                return <div className={module3("markdown-body", module3505.tipWrapper)}>{learnMoreTip(e)}</div>;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default S;
