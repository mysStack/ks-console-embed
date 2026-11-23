import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-3993.js";
const path = "/clusters/:cluster/storageclasses/:name";
const i = [
    {
        name: "volumes",
        path: `${path}/volumes`,
        title: "PERSISTENT_VOLUME_CLAIM_PL",
        component
    },
    getIndexRoute({
        path,
        to: `${path}/volumes`,
        exact: true
    }),
    getIndexRoute({
        path: "*",
        to: "/404",
        exact: true
    })
];
export default i;
