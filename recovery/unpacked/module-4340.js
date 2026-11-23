import "./module-15.js";
import "./module-5.js";
import module61 from "./module-61.js";
import module4341 from "./module-4341.js";
import module4343 from "./module-4343.js";
import module4344 from "./module-4344.js";
import module4345 from "./module-4345.js";
import module4346 from "./module-4346.js";
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
