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
import module3985 from "unpacked/module-3985.js";
const y = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const detail = this.props.detail;
                const a = cpuFormat(module26(detail, "limit.default.cpu"));
                const r = cpuFormat(module26(detail, "limit.defaultRequest.cpu"));
                const n = memoryFormat(module26(detail, "limit.default.memory"));
                const l = memoryFormat(module26(detail, "limit.defaultRequest.memory"));
                const supportGpuType = globals.config.supportGpuType;
                const o = module26(detail, "limit.defaultRequest", {});
                const i = supportGpuType.filter((e)=>Object.keys(o).some((t)=>module447(t, e)));
                const c = module63(i) ? {} : {
                    value: o[`${i[0]}`],
                    type: i
                };
                return <Module790 title={t("DEFAULT_CONTAINER_QUOTA_PL")}><div className={module3985.content}><div className={module3985.contentItem}><module186.Icon name="cpu" size={40}/><div className={module3985.item}><div>{r ? t("CPU_REQUEST_CORE", {
                    value: r
                }) : t("NO_REQUEST_TCAP")}</div><p>{t("CPU_REQUEST_LOW")}</p></div><div className={module3985.item}><div>{a ? t("CPU_LIMIT_CORE", {
                    value: a
                }) : t("NO_LIMIT_TCAP")}</div><p>{t("CPU_LIMIT_LOW")}</p></div></div><div className={module3985.contentItem}><module186.Icon name="memory" size={40}/><div className={module3985.item}><div>{l ? t("MEMORY_REQUEST_MIB", {
                    value: l
                }) : t("NO_REQUEST_TCAP")}</div><p>{t("MEMORY_REQUEST_SCAP")}</p></div><div className={module3985.item}><div>{n ? t("MEMORY_LIMIT_MIB", {
                    value: n
                }) : t("NO_LIMIT_TCAP")}</div><p>{t("MEMORY_LIMIT_SCAP")}</p></div></div><div className={module3985.contentItem}><img src="/assets/GPU.svg" size={48}/><div className={module3985.item}><div>{c.value ? c.type : t("NONE")}</div><p>{t("GPU_TYPE_SCAP")}</p></div><div className={module3985.item}><div>{c.value ? c.value : t("NO_LIMIT_TCAP")}</div><p>{t("GPU_LIMIT_SCAP")}</p></div></div></div></Module790>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
