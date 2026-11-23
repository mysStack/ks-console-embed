import "./module-15.js";
import "./module-48.js";
import "./module-75.js";
import module26 from "./module-26.js";
import "./module-553.js";
import Module796 from "./module-796.js";
import { S2I_STATUS_DESC } from "./module-72.js";
import { getWorkloadStatus } from "./module-434.js";
import Module2907 from "./module-2907.js";
import module2908 from "./module-2908.js";
export default function({ data, module }) {
    const status = (getWorkloadStatus(data, module) || "").status;
    if (status.startsWith("S2I")) {
        const d = status.slice(4);
        return <div className={module2908.status}><Module796 type={d} name={t(S2I_STATUS_DESC[d])} flicker/></div>;
    }
    if (module === "daemonsets") {
        return <div className={module2908.status}><Module796 type={status} name={t(status.toUpperCase())} total={module26(data, "status.desiredNumberScheduled", 0)} ready={module26(data, "status.numberAvailable", 0)} flicker/></div>;
    }
    return <div className={module2908.status}><Module796 type={status} name={t(status.toUpperCase())} total={data.podNums} ready={data.readyPodNums} flicker/><Module2907 data={data}/></div>;
};
