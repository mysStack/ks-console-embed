import "./module-15.js";
import "./module-5.js";
import module61 from "./module-61.js";
import module26 from "./module-26.js";
import { getIndexRoute } from "./module-317.js";
import module5124 from "./module-5124.js";
import module5125 from "./module-5125.js";
import module5128 from "./module-5128.js";
import module5134 from "./module-5134.js";
import module5136 from "./module-5136.js";
import module5137 from "./module-5137.js";
import module5138 from "./module-5138.js";
import module5139 from "./module-5139.js";
import module5140 from "./module-5140.js";
import module5141 from "./module-5141.js";
import module5145 from "./module-5145.js";
import module5146 from "./module-5146.js";
import module5147 from "./module-5147.js";
import module5152 from "./module-5152.js";
import module5167 from "./module-5167.js";
const path = "/settings";
const I = globals.app.getPlatformSettingsNavs();
const N = module26(I, "[0].items[0].name", "nodes");
const D = [].concat(module61(module5167(path)), [
    {
        path,
        component: module5124,
        routes: [].concat(module61(module5152), [
            {
                path: `${path}/base-info`,
                component: module5125
            },
            {
                path: `${path}/third-login`,
                component: module5128
            },
            {
                path: `${path}/license-info`,
                component: module5134
            },
            {
                path: `${path}/mail`,
                component: module5136
            },
            {
                path: `${path}/feishu`,
                component: module5145
            },
            {
                path: `${path}/dingtalk`,
                component: module5137
            },
            {
                path: `${path}/wecom`,
                component: module5138
            },
            {
                path: `${path}/slack`,
                component: module5139
            },
            {
                path: `${path}/webhook`,
                component: module5140
            },
            {
                path: `${path}/notification-history`,
                component: module5141
            },
            {
                path: `${path}/silent-policy`,
                exact: true,
                component: module5146
            },
            {
                path: `${path}/notification-language`,
                component: module5147
            },
            getIndexRoute({
                path,
                to: `${path}/${N}`,
                exact: true
            }),
            getIndexRoute({
                path: `${path}/channel-configuration`,
                to: `${path}/mail`,
                exact: true
            }),
            getIndexRoute({
                path: `${path}/notification-configuration`,
                to: `${path}/silent-policy`,
                exact: true
            }),
            getIndexRoute({
                path: "*",
                to: "/404",
                exact: true
            })
        ])
    }
]);
export default D;
