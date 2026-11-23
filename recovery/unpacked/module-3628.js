import "./module-15.js";
import module3629 from "./module-3629.js";
import module3638 from "./module-3638.js";
import module3640 from "./module-3640.js";
import module3641 from "./module-3641.js";
import module3642 from "./module-3642.js";
import module3643 from "./module-3643.js";
import module3644 from "./module-3644.js";
const l = [
    {
        path: "/404",
        component: module3638,
        exact: true
    },
    {
        path: "/dashboard",
        component: module3629,
        exact: true
    },
    {
        path: "/logquery",
        exact: true,
        component: module3640
    },
    {
        path: "/eventsearch",
        exact: true,
        component: module3641
    },
    {
        path: "/auditingsearch",
        exact: true,
        component: module3642
    },
    {
        path: "/bill",
        exact: true,
        component: module3643
    },
    {
        path: "/support",
        exact: true,
        component: module3644
    },
    {
        path: "/",
        redirect: {
            from: "/",
            to: "/dashboard",
            exact: true
        }
    },
    {
        path: "*",
        redirect: {
            from: "*",
            to: "/404",
            exact: true
        }
    }
];
export default l;
