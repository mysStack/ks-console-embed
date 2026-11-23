import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-315.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-553.js";
import Module802 from "components/Base/Card";
import { hideGPUByLicense } from "utils/index";
import module3 from "unpacked/module-3.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module4307 from "unpacked/module-4307.js";
import module4312 from "unpacked/module-4312.js";
const h = [
    {
        key: "cpu",
        icon: "cpu",
        title: t("CPU_USAGE"),
        unitType: "cpu"
    },
    {
        key: "memory",
        icon: "memory",
        title: t("MEMORY_USAGE"),
        unitType: "memory"
    },
    {
        key: "gpu",
        icon: "gpu",
        title: t("GPU_USAGE"),
        unitType: "gpu"
    },
    {
        key: "gpu_memory",
        icon: "computing",
        title: t("GRAPHICS_MEMORY_USAGE"),
        unitType: "memory"
    },
    {
        key: "pod",
        icon: "pod",
        title: t("POD_COUNT_TCAP")
    },
    {
        key: "disk",
        icon: "storage",
        title: t("DISK_USAGE"),
        unitType: "disk"
    }
];
const v = observer(function({ className, monitorData }) {
    const r = hideGPUByLicense(h);
    return <module186.Loading spinning={monitorData.isLoading}><div className={module3(module4312.charts, className, module31({}, module4312.width, r.length === 4))}>{r.map((e)=><Module802 key={e.key} className={module4312.chartItem}><Module4307 {...e} data={monitorData.data.filter((t)=>t && t.resource === e.key)[0]} isShowDetail={[
            "cpu",
            "memory"
        ].includes(e.key)}/></Module802>)}</div></module186.Loading>;
});
export default v;
