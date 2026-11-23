import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import { ICON_TYPES } from "./module-72.js";
import { trigger } from "./module-792.js";
import Module852 from "./module-852.js";
import module4659 from "./module-4659.js";
let o;
const _ = inject("rootStore")(o = trigger(o = observer(o = ((Component_1)=>{
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
        n.toggle = function() {
            const opened = n.state.opened;
            if (opened) {
                n.trigger("network.policies.toggle", {
                    resource: t("DISABLED_PROJECT_NETWORK_ISOLATION"),
                    title: t("DISABLED_PROJECT_NETWORK_ISOLATION"),
                    desc: t.html("DISABLED_RESOURCE_TYPE_DESC", {
                        resource: t("DISABLED_PROJECT_NETWORK_ISOLATION")
                    }),
                    success: function() {
                        n.props.onEdit(!opened);
                        n.setState({
                            opened: !opened
                        });
                    }
                });
            } else {
                n.props.onEdit(!opened);
                n.setState({
                    opened: !opened
                });
            }
        };
        n.state = {
            opened: e.networkIsolate
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const opened = this.state.opened;
                const props = this.props;
                const { module, canEdit } = props;
                return <div className={module4659.wrapper}><div className={module4659.left}><module186.Icon name={ICON_TYPES[module]} size={40} color={{
                    primary: "#324558",
                    secondary: "#f5a623"
                }}/><div className={module4659.isolate}><div className={module4659.isolatetitle}>{t("ENABLED")}</div><div>{t("PROJECT_NETWORK_ISOLATION")}</div></div></div>{canEdit && <Module852 className={module4659.switch} text={opened ? t("ENABLED") : t("DISABLED")} onChange={this.toggle} checked={opened}/>}</div>;
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
export default _;
