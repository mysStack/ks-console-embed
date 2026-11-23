import "./module-15.js";
import "./module-553.js";
import Module796 from "./module-796.js";
import { getWorkloadStatus } from "./module-434.js";
export default function({ data, module }) {
    const status = getWorkloadStatus(data, module).status;
    const type = status === "Running" ? "JobRunning" : status;
    return <Module796 type={type} name={t(status)} flicker/>;
};
