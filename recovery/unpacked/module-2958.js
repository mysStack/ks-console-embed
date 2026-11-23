import "./module-15.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module31 from "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module74 from "./module-74.js";
import module26 from "./module-26.js";
import module242 from "./module-242.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module456 from "./module-456.js";
import module1332 from "./module-1332.js";
import { isEdgeWizePage } from "./module-52.js";
import { getLanguageIcon } from "./module-982.js";
import module1177 from "./module-1177.js";
import module1331 from "./module-1331.js";
import module2959 from "./module-2959.js";
const D = ((Component_1)=>{
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
        n.fetchData = async function e() {
            let cluster;
            let a;
            cluster = n.props.cluster;
            a = await n.store.getS2iSupportLanguage({
                cluster
            });
            n.setState(a);
        };
        n.handleLanguageSelect = function(e, t) {
            return function() {
                const steps = n.props.steps;
                if (t === "b2i") {
                    module74(steps, "[1].component", module1331);
                    module74(n.props.formTemplate, 'metadata.labels["s2i-type.kubesphere.io"]', "b2i");
                    module74(n.props.formTemplate, "spec.config.isBinaryURL", true);
                }
                if (t === "s2i") {
                    module74(steps, "[1].component", module1177);
                    module74(n.props.formTemplate, 'metadata.labels["s2i-type.kubesphere.io"]', "s2i");
                    module242(n.props.formTemplate, "spec.config.isBinaryURL");
                }
                n.context.setSteps(steps);
                module74(n.props.formTemplate, "metadata.annotations.languageType", e);
                module242(n.props.formTemplate, "spec.config.builderImage");
                n.forceUpdate();
            };
        };
        n.renderSupportTip = function() {
            if (globals.runtime.toLowerCase() === "containerd") {
                return <module186.Alert className={module2959.margin_b_10} type="warning" message={t("CONTAINERD_RUNTIME_NOT_SUPPORTED")}/>;
            }
        };
        n.isEdgeWize = isEdgeWizePage();
        n.store = n.isEdgeWize ? new module1332 : new module456;
        n.state = {
            s2i: [],
            b2i: []
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
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { formTemplate, formRef } = props;
                const o = module26(this.props.formTemplate, "metadata.annotations.languageType");
                const u = module26(this.props.formTemplate, 'metadata.labels["s2i-type.kubesphere.io"]', "s2i");
                return <module186.Form ref={formRef} data={formTemplate}>{this.renderSupportTip()}<div className={module2959.header}><p>{t("IMAGE_FROM_S2I")}</p><p>{t("S2I_DESC")}</p></div><ul className={module2959.content}>{this.state.s2i.map((a)=><li key={a} className={module3(module2959.item, module31({}, module2959.item_select, o === a && u === "s2i"))} onClick={_this.handleLanguageSelect(a, "s2i")}><module186.Icon name={getLanguageIcon(a, "radio")} size={48}/><p>{t(a.toUpperCase())}</p></li>)}</ul><div className={module2959.header}><p>{t("IMAGE_FROM_B2I")}</p><p>{t("B2I_DESC")}</p></div><ul className={module2959.content}>{this.state.b2i.map((a)=><li key={a} className={module3(module2959.item, module31({}, module2959.item_select, o === a && u === "b2i"))} onClick={_this.handleLanguageSelect(a, "b2i")}><module186.Icon name={getLanguageIcon(a, "radio")} size={48}/><p>{t(a.toUpperCase())}</p></li>)}</ul><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("EMPTY_IMAGE_TYPE_DESC")
                    }
                ]}><module186.Input style={{
                    display: "none"
                }} readOnly name="metadata.annotations.languageType"/></module186.Form.Item></module186.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default D;
D.contextTypes = {
    setSteps: module1.func
};
