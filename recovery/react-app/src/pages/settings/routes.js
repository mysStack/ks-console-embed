import "unpacked/module-15.js";
import "unpacked/module-5.js";
import module61 from "unpacked/module-61.js";
import module26 from "unpacked/module-26.js";
import { getIndexRoute } from "utils/router.config";
import module5124 from "pages/settings/layout";
import module5125 from "pages/settings/containers/BaseInfo";
import module5128 from "pages/settings/containers/ThirdPartyLogin";
import module5134 from "pages/settings/license-info";
import module5136 from "pages/settings/containers/Notification/Mail";
import module5137 from "pages/settings/containers/Notification/DingTalk";
import module5138 from "pages/settings/containers/Notification/WeCom";
import module5139 from "pages/settings/containers/Notification/Slack";
import module5140 from "pages/settings/containers/Notification/Webhook";
import module5141 from "pages/settings/notification-history";
import module5145 from "pages/settings/containers/Notification/FeiShu";
import module5146 from "pages/settings/silent-policy";
import module5147 from "pages/settings/notification-language";
import module5152 from "pages/settings/notification-subscription/routes";
import module5167 from "pages/settings/silent-policy/detail-routes";
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
