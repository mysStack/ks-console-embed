import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module790 from "components/Base/Panel";
import module839 from "stores/volume";
import { getLocalTime, map_accessModes } from "utils/index";
import module14 from "unpacked/module-14.js";
import module63 from "unpacked/module-63.js";
import Module3943 from "unpacked/module-3943.js";
import module3945 from "unpacked/module-3945.js";
let l;
function O(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const content = <div><div>{t("RWO_DESC")}</div><div>{t("ROX_DESC")}</div><div>{t("RWX_DESC")}</div></div>;
const C = inject("detailStore")(l = observer(l = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.store = new module839;
        e.renderItem = function() {
            const detail = e.store.detail;
            return <div><div className={module3945.ItemBox}><div className={module3945.leftBox}><module186.Icon name="storage" size="40"/><div className={module3945.rightBox}><span className={module3945.title}>{detail.name}</span><span className={module3945.des}>{t("STORAGE_CLASS_VALUE", {
                value: detail.storageClassName
            })}</span></div></div><div className={module3945.titleBox}><span className={module3945.title}>{getLocalTime(detail.createTime).format("YYYY-MM-DD HH:mm:ss")}</span><span className={module3945.des}>{t("CREATION_TIME")}</span></div></div><div className={module3945.IconLine}><div className={module3945.cardBox}><module186.Icon name="bm" size={30}/><div className={module3945.text}><span className={module3945.title}>{detail.storageProvisioner}</span><span className={module3945.des}>{t("PROVISIONER")}</span></div></div><div className={module3945.cardBox}><img src="/assets/Accessmodes.svg" size={48}/><div className={module3945.text}><span className={module3945.title}>{e.mapperAccessMode(module14.toJS(detail.accessModes))}</span><span className={module3945.des}>{e.renderAccessTitle()}</span></div></div><div className={module3945.cardBox}><module186.Icon name="database" size={30}/><div className={module3945.text}><span className={module3945.title}>{detail.capacity}</span><span className={module3945.des}>{t("CAPACITY")}</span></div></div></div></div>;
        };
        e.renderAccessTitle = function() {
            return <div className={module3945.mode_title}>{t("ACCESS_MODE")}<module186.Tooltip content={content}><module186.Icon name="question" size={16} className={module3945.toolTip}/></module186.Tooltip></div>;
        };
        e.mapperAccessMode = function(e) {
            const t = map_accessModes(e);
            return <><span>{t.join(",")}</span></>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const detail = this.props.detailStore.detail;
                const { _originData, phase, cluster } = detail;
                if (phase !== "Bound") {
                    this.store.isLoading = false;
                } else {
                    this.store.fetchDetail({
                        cluster,
                        ..._originData.spec.claimRef
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const store = this.store;
                const { detail, isLoading } = store;
                return <><Module3943/><Module790 title={t("PERSISTENT_VOLUME_CLAIM")}>{!module63(detail) && <module186.Loading spinning={isLoading}>{this.renderItem()}</module186.Loading>}</Module790></>;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default C;
