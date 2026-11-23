import "unpacked/module-15.js";
import "unpacked/module-5.js";
import module61 from "unpacked/module-61.js";
import module4341 from "pages/access/containers/layout";
import module4343 from "pages/access/containers/Accounts";
import module4344 from "pages/access/containers/Roles";
import module4345 from "pages/access/containers/Workspaces";
import module4346 from "pages/access/routes/detail";
const path = "/access";
const f = [].concat(module61(module4346), [
    {
        path,
        component: module4341,
        routes: [
            {
                path: `${path}/accounts`,
                component: module4343,
                exact: true
            },
            {
                path: `${path}/roles`,
                component: module4344,
                exact: true
            },
            {
                path: `${path}/workspaces`,
                component: module4345,
                exact: true
            },
            {
                path: `${path}/edge-workspaces`,
                component: module4345,
                exact: true
            }
        ]
    }
]);
export default f;
