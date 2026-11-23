import "./module-15.js";
import { withProps } from "utils/index";
import module1738 from "./module-1738.js";
import module1739 from "./module-1739.js";
import module1737 from "./module-1737.js";
const c = [
    {
        title: "BASIC_INFORMATION",
        component: withProps(module1738, {
            maxNameLength: 63
        }),
        required: true,
        icon: "cdn"
    },
    {
        title: "SILENCE_CONDITIONS",
        component: module1739,
        required: true,
        icon: "volume-off-duotone"
    },
    {
        title: "SILENCE_TIME",
        component: module1737,
        required: true,
        icon: "volume-off-duotone"
    }
];
export default c;
