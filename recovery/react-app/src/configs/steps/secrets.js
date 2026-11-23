import "unpacked/module-15.js";
import { withProps } from "utils/index";
import module974 from "components/Forms/Workload/BaseInfo";
import component from "components/Forms/Secret/SecretSettings";
const u = [
    {
        title: "BASIC_INFORMATION",
        component: withProps(module974, {
            maxNameLength: 63
        }),
        required: true
    },
    {
        title: "DATA_SETTINGS",
        component,
        required: true
    }
];
export default u;
