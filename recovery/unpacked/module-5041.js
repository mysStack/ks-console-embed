import "./module-15.js";
import "./module-5.js";
import module61 from "./module-61.js";
import { getIndexRoute } from "./module-317.js";
import module5042 from "./module-5042.js";
import module5043 from "./module-5043.js";
import module5053 from "./module-5053.js";
import module5055 from "./module-5055.js";
import module5061 from "./module-5061.js";
import module5063 from "./module-5063.js";
import module5066 from "./module-5066.js";
import module5067 from "./module-5067.js";
import module5068 from "./module-5068.js";
import module5070 from "./module-5070.js";
const path = "/:workspace/clusters/:cluster/devops/:devops";
const g = [
    {
        path,
        component: module5042,
        routes: [].concat(module61(module5070), [
            {
                path,
                component: module5043,
                routes: [
                    {
                        path: `${path}/pipelines`,
                        component: module5053,
                        exact: true
                    },
                    {
                        path: `${path}/cd`,
                        component: module5055,
                        exact: true
                    },
                    {
                        path: `${path}/code-repo`,
                        component: module5061,
                        exact: true
                    },
                    {
                        path: `${path}/base-info`,
                        component: module5063,
                        exact: true
                    },
                    {
                        path: `${path}/roles`,
                        component: module5066,
                        exact: true
                    },
                    {
                        path: `${path}/members`,
                        component: module5067,
                        exact: true
                    },
                    {
                        path: `${path}/credentials`,
                        component: module5068,
                        exact: true
                    }
                ]
            },
            getIndexRoute({
                path: "*",
                to: "/404",
                exact: true
            })
        ])
    }
];
export default g;
