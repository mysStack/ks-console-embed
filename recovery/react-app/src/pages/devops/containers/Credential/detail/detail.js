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
import module1 from "unpacked/module-1.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module802 from "components/Base/Card";
import module1987 from "unpacked/module-1987.js";
let o;
let i;
let l;
const b = inject("detailStore")(o = observer((l = i = ((Component_1)=>{
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
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "50%"
                },
                {
                    title: t("RECORD"),
                    dataIndex: "record",
                    width: "50%"
                }
            ];
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const detail = this.props.detailStore.detail;
                return <Module802 title={t("CREDENTIAL")}><div className={module1987.card_content}><div className={module1987.icon}><module186.Icon name="key" size={40}/></div><div className={module1987.info}><div className={module1987.name}>{detail.id || "-"}</div><div className={module1987.desc}>{t("TYPE_VALUE", {
                    value: t(detail.type && `CREDENTIAL_TYPE_${detail.type.toUpperCase()}`)
                })}</div></div></div></Module802>;
            }
        }
    ]);
    return n;
})(Component), i.propTypes = {
    data: module1.array,
    loading: module1.bool
}, o = l)) || o) || o;
export default b;
