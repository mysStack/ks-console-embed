import "unpacked/module-15.js";
import { getIndexRoute } from "utils/router.config";
import module4978 from "pages/fedprojects/containers/Applications/Detail/AppComponents";
import module4983 from "pages/fedprojects/containers/Applications/Detail/AppIngresses";
import module4989 from "pages/fedprojects/containers/Applications/Detail/TrafficManangement";
import module4992 from "pages/fedprojects/containers/Applications/Detail/Tracing";
const path = "/:workspace/federatedprojects/:namespace/applications/:name";
const s = [
    {
        path: `${path}/components`,
        title: "RESOURCE_STATUS",
        component: module4978,
        exact: true
    },
    {
        path: `${path}/ingresses`,
        title: "EXTERNAL_ACCESS",
        component: module4983,
        exact: true
    },
    {
        path: `${path}/traffic`,
        title: "TRAFFIC_MANAGEMENT",
        component: module4989,
        exact: true
    },
    {
        path: `${path}/tracing`,
        title: "TRACING",
        component: module4992,
        exact: true
    },
    getIndexRoute({
        path,
        to: `${path}/components`,
        exact: true
    })
];
export default s;
