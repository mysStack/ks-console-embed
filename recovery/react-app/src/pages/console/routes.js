import "unpacked/module-15.js";
import module3629 from "pages/console/containers/Dashboard";
import module3638 from "pages/console/containers/NotFound";
import module3640 from "pages/console/logquery";
import module3641 from "pages/console/eventsearch";
import module3642 from "pages/console/auditingsearch";
import module3643 from "pages/console/bill";
import module3644 from "pages/console/containers/Support";
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
