import "unpacked/module-15.js";
import "unpacked/module-5.js";
import module61 from "unpacked/module-61.js";
import { getIndexRoute } from "utils/router.config";
import module5042 from "pages/devops/containers/layout";
import module5043 from "pages/devops/containers/Base/List";
import module5053 from "pages/devops/containers/Pipelines/PipelinesList";
import module5055 from "pages/devops/cd";
import module5061 from "pages/devops/containers/CodeRepo/CRList";
import module5063 from "pages/devops/containers/BaseInfo";
import module5066 from "pages/devops/containers/Roles";
import module5067 from "pages/devops/containers/Members";
import module5068 from "pages/devops/containers/Credential";
import module5070 from "pages/devops/routes/detail";
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
