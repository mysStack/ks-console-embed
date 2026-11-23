import "./module-15.js";
import module1234 from "./module-1234.js";
import module4976 from "./module-4976.js";
import module4994 from "./module-4994.js";
import module5001 from "./module-5001.js";
import module5006 from "./module-5006.js";
import module5016 from "./module-5016.js";
import module5023 from "./module-5023.js";
import module5033 from "./module-5033.js";
import module5037 from "./module-5037.js";
export default function(e) {
    return [
        {
            path: `${e}/deployments/:name`,
            component: module4994
        },
        {
            path: `${e}/statefulsets/:name`,
            component: module5001
        },
        {
            path: `${e}/services/:name`,
            component: module5006
        },
        {
            path: `${e}/ingresses/:name`,
            component: module5016
        },
        {
            path: `${e}/volumes/:name`,
            component: module5023
        },
        {
            path: `${e}/secrets/:name`,
            component: module5033
        },
        {
            path: `${e}/configmaps/:name`,
            component: module5037
        },
        {
            path: `${e}/applications/:name`,
            component: module4976
        },
        {
            path: `${e}/gateways/:gatewayName`,
            component: module1234
        }
    ];
};
