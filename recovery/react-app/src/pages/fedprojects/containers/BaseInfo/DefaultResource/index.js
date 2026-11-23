import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-97.js";
import "unpacked/module-10.js";
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
import module26 from "unpacked/module-26.js";
import module447 from "unpacked/module-447.js";
import module63 from "unpacked/module-63.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module790 from "components/Base/Panel";
import { cpuFormat, memoryFormat } from "utils/index";
import module4962 from "unpacked/module-4962.js";
const g = ((Component_1)=>{
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
    function a() {
        module36(this, a);
        return r.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const detail = this.props.detail;
                const r = cpuFormat(module26(detail, "limit.default.cpu"));
                const a = cpuFormat(module26(detail, "limit.defaultRequest.cpu"));
                const n = memoryFormat(module26(detail, "limit.default.memory"));
                const o = memoryFormat(module26(detail, "limit.defaultRequest.memory"));
                const supportGpuType = globals.config.supportGpuType;
                const u = module26(detail, "limit.defaultRequest", {});
                const l = supportGpuType.filter((e)=>Object.keys(u).some((t)=>module447(t, e)));
                const i = module63(l) ? {} : {
                    value: u[`${l[0]}`],
                    type: l
                };
                return <Module790 title={t("DEFAULT_CONTAINER_QUOTA_PL")}><div className={module4962.content}><div className={module4962.contentItem}><module186.Icon name="cpu" size={40}/><div className={module4962.item}><div>{a ? `${a} Core` : t("NO_REQUEST_TCAP")}</div><p>{t("CPU_REQUEST_SCAP")}</p></div><div className={module4962.item}><div>{r ? `${r} Core` : t("NO_LIMIT_TCAP")}</div><p>{t("CPU_LIMIT_SCAP")}</p></div></div><div className={module4962.contentItem}><module186.Icon name="memory" size={40}/><div className={module4962.item}><div>{o ? `${o} Mi` : t("NO_REQUEST_TCAP")}</div><p>{t("MEMORY_REQUEST_SCAP")}</p></div><div className={module4962.item}><div>{n ? `${n} Mi` : t("NO_LIMIT_TCAP")}</div><p>{t("MEMORY_LIMIT_SCAP")}</p></div></div><div className={module4962.contentItem}><img src="/assets/GPU.svg" size={48}/><div className={module4962.item}><div>{i.value ? i.type : t("NONE")}</div><p>{t("GPU_TYPE_SCAP")}</p></div><div className={module4962.item}><div>{i.value ? i.value : t("NO_LIMIT_TCAP")}</div><p>{t("GPU_LIMIT_SCAP")}</p></div></div></div></Module790>;
            }
        }
    ]);
    return a;
})(Component);
export default g;
