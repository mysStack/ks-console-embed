import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module5148 from "./module-5148.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import { observer } from "./module-239.js";
import Module818 from "./module-818.js";
import module5149 from "./module-5149.js";
import module5150 from "./module-5150.js";
import Module1996 from "./module-1996.js";
import module5151 from "./module-5151.js";
let l;
const k = observer(l = ((Component_1)=>{
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
                name: n.store.detailName
            });
        };
        n.handleChange = async (language)=>{
            module74(n.store.detail, "spec.template.language", language);
            await n.store.patch(n.store.detail, {
                spec: {
                    template: {
                        language
                    }
                }
            });
            module240.success({
                content: t("NOTIFICATION_LANGUAGE_CHANGE_SUCCESS")
            });
            n.fetchData();
        };
        n.store = new module5148;
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
                const value = module26(this.store.detail, "spec.template.language", "English");
                return <div className={module5151.wrapper}><Module1996 type="notification-language"/><div className={module5151.headerTitle}>{t("NOTIFICATION_LANGUAGE")}</div><div><module186.Loading spinning={this.store.isLoading}><Module818 value={value} options={this.types} onChange={this.handleChange}/></module186.Loading></div></div>;
            }
        },
        {
            key: "types",
            get: function() {
                return [
                    {
                        label: "简体中文",
                        description: t("NOTIFICATION_SIMPLIFIED_CHINESE_DESC"),
                        icon: <img className={module5151.icon} src={module5149} alt=""/>,
                        value: "zh-cn",
                        hasPadding: false
                    },
                    {
                        label: "English",
                        description: t("NOTIFICATION_ENGLISH_DESC"),
                        icon: <img className={module5151.icon} src={module5150} alt=""/>,
                        value: "English",
                        hasPadding: false
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || l;
export default k;
