import "unpacked/module-15.js";
import module1234 from "pages/clusters/gateways/Detail";
import module4976 from "pages/fedprojects/containers/Applications/Detail";
import module4994 from "pages/fedprojects/containers/Deployments/Detail";
import module5001 from "pages/fedprojects/containers/StatefulSets/Detail";
import module5006 from "pages/fedprojects/containers/Services/Detail";
import module5016 from "pages/fedprojects/containers/Routes/Detail";
import module5023 from "pages/fedprojects/containers/Volumes/Detail";
import module5033 from "pages/fedprojects/containers/Secrets/Detail";
import module5037 from "pages/fedprojects/containers/ConfigMaps/Detail";
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
