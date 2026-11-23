import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
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
import module3 from "unpacked/module-3.js";
import { getLocalTime } from "utils/index";
import module814 from "components/Base/List";
import Module5283 from "unpacked/module-5283.js";
import module5285 from "unpacked/module-5285.js";
const g = ((Component_1)=>{
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
            const { data, onEnter } = e_props;
            if (onEnter) {
                onEnter(data.name);
            }
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const data = this.props.data;
                const details = [
                    {
                        title: data.nodesCount,
                        description: t("NODE_COUNT")
                    },
                    {
                        title: data.namespacesCount,
                        description: t("PROJECTS")
                    },
                    {
                        title: data.createTime ? getLocalTime(data.createTime).format("YYYY-MM-DD HH:mm:ss") : "-",
                        description: t("CREATION_TIME")
                    }
                ];
                const title = <Module5283 group={data}/>;
                return <module814.Item className={module3(module5285.wrapper)} titleClass={module5285.title} title={title} details={details} onClick={this.handleClick}/>;
            }
        }
    ]);
    return n;
})(Component);
export default g;
