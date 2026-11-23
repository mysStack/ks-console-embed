import "unpacked/module-15.js";
import "unpacked/module-553.js";
import Module796 from "components/Base/Status";
import { getWorkloadStatus } from "utils/status";
export default function({ data, module }) {
    const status = getWorkloadStatus(data, module).status;
    const type = status === "Running" ? "JobRunning" : status;
    return <Module796 type={type} name={t(status)} flicker/>;
};
