import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import component from "./module-4249.js";
const path = "/whizard-telemetry/:cluster/storageclasses/:name";
const o = [
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
export default o;
