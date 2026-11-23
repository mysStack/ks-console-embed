import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-97.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { PureComponent } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module186 from "unpacked/module-186.js";
import module2286 from "unpacked/module-2286.js";
const v = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
        e.state = {
            isCheck: module26(e.props.data, "volumeMounts", []).some((e)=>e.mountPath === "/etc/localtime")
        };
        e.handleCheck = function() {
            e.setState(function(e) {
                return {
                    isCheck: !e.isCheck
                };
            }, function() {
                const t = module26(e.props.data, "volumeMounts", []);
                if (e.state.isCheck) {
                    module74(e.props.data, "volumeMounts", [].concat(module61(t), [
                        {
                            name: "host-time",
                            mountPath: "/etc/localtime",
                            readOnly: true
                        }
                    ]));
                } else {
                    module74(e.props.data, "volumeMounts", t.filter((e)=>e.mountPath !== "/etc/localtime"));
                }
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const isCheck = this.state.isCheck;
                return <div className={module2286.wrapper}><div className={module2286.title}><module186.Checkbox checked={isCheck} onChange={this.handleCheck}>{t("SYNC_HOST_TIMEZONE")}</module186.Checkbox></div><div className={module2286.desc}>{t("SYNC_HOST_TIMEZONE_DESC")}</div></div>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default v;
