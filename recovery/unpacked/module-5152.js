import "./module-15.js";
import "./module-315.js";
import "./module-553.js";
import { getIndexRoute } from "./module-317.js";
import { Detail, MailForm, MailList } from "./module-5153.js";
import Module5166 from "./module-5166.js";
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
