import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module3 from "unpacked/module-3.js";
import module814 from "components/Base/List";
import { Component } from "unpacked/module-553.js";
import { getDisplayNameNew, getLocalTime } from "utils/index";
import module5047 from "unpacked/module-5047.js";
const v = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.handleClick = function() {
            const e_props = e.props;
            const { onEnter, data } = e_props;
            if (data.status !== "Terminating" && onEnter) {
                onEnter(data);
            }
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                let title;
                let description;
                let icon;
                let a;
                let i;
                const props = this.props;
                const { type, data } = props;
                if (type === "devops") {
                    title = getDisplayNameNew(data);
                    description = data.description || "-";
                    a = data.creator;
                    i = data.create_time || data.createTime;
                    icon = "strategy-group";
                } else {
                    title = getDisplayNameNew(data);
                    description = data.description || "-";
                    a = data.creator;
                    i = data.createTime;
                    icon = "project";
                }
                const c = data.status === "Terminating" || data.status === "Pending";
                title = <div className={module3(module5047.name, "ellipsis")} title={title}>{c ? title : <a>{title}</a>}</div>;
                description = c ? t(data.status) : description;
                const details = [
                    {
                        title: a || "-",
                        description: t("CREATOR")
                    },
                    {
                        title: getLocalTime(i).format("YYYY-MM-DD HH:mm:ss"),
                        description: t("CREATION_TIME")
                    }
                ];
                return <module814.Item className={module3(module5047.wrapper, module31({}, module5047.disabled, c))} icon={icon} title={title} description={description} details={details} onClick={this.handleClick} withDomDesc/>;
            }
        }
    ]);
    return n;
})(Component);
export default v;
