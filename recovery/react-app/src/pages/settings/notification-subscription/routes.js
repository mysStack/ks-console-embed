import "unpacked/module-15.js";
import "unpacked/module-315.js";
import "unpacked/module-553.js";
import { getIndexRoute } from "utils/router.config";
import { Detail, MailForm, MailList } from "pages/settings/notification-subscription/Mail";
import Module5166 from "pages/settings/notification-subscription";
const c = "/settings";
const s = [
    {
        path: `${c}/notification-subscription/subscription-mail`,
        component: function(e) {
            return <Module5166 type="subscription-mail" {...e}/>;
        },
        routes: [
            {
                path: `${c}/notification-subscription/subscription-mail/list`,
                component: MailList,
                exact: true
            },
            {
                path: `${c}/notification-subscription/subscription-mail/create`,
                component: MailForm,
                exact: true
            },
            {
                path: `${c}/notification-subscription/subscription-mail/detail/:name`,
                component: Detail,
                exact: true
            },
            {
                path: `${c}/notification-subscription/subscription-mail/detail/:name/edit`,
                component: MailForm,
                exact: true
            },
            getIndexRoute({
                path: `${c}/notification-subscription/subscription-mail`,
                to: `${c}/notification-subscription/subscription-mail/list`,
                exact: true
            })
        ]
    },
    getIndexRoute({
        path: `${c}/notification-subscription`,
        to: `${c}/notification-subscription/subscription-mail`,
        exact: true
    })
];
export default s;
