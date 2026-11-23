import "./module-15.js";
import "./module-29.js";
import module96 from "./module-96.js";
import "./module-4.js";
import { compareVersion } from "./module-52.js";
import { getChildRoutes } from "./module-317.js";
import { Activity, Artifacts, Branch, CodeQuality, Commit, Events, Parameters, Pipeline, PipelineOld, PullRequest, TaskStatus } from "./module-5082.js";
import module5115 from "./module-5115.js";
import module5117 from "./module-5117.js";
import module5118 from "./module-5118.js";
const d = "/:workspace/clusters/:cluster/devops/:devops/pipelines/:name";
const f = `${d}/branch/:branch`;
const p = `${f}/run/:runName`;
const h = `${d}/run/:runName`;
const m = [
    {
        name: "pipeline",
        title: "PIPELINE_CONFIGURATION",
        getComponent: function(e) {
            return [
                [
                    function(e) {
                        return compareVersion(e, "3.4.0") < 0;
                    },
                    PipelineOld
                ],
                [
                    function() {
                        return true;
                    },
                    Pipeline
                ]
            ].find((t)=>module96(t, 1)[0](e))[1];
        }
    },
    {
        name: "code-quality",
        title: "CODE_CHECK",
        component: CodeQuality
    },
    {
        name: "activity",
        title: "RUN_RECORDS",
        component: Activity
    },
    {
        name: "branch",
        title: "BRANCH_PL",
        component: Branch
    },
    {
        name: "pull-request",
        title: "PULL_REQUEST_PL",
        component: PullRequest
    }
];
const v = [
    {
        name: "activity",
        title: "RUN_RECORDS",
        component: Activity
    },
    {
        name: "code-quality",
        title: "CODE_CHECK",
        component: CodeQuality
    }
];
const g = [
    {
        name: "task-status",
        title: "TASK_STATUS",
        component: TaskStatus
    },
    {
        name: "build-parameters",
        title: "BUILD_PARAMETERS",
        component: Parameters
    },
    {
        name: "commit",
        title: "COMMIT_PL",
        component: Commit
    },
    {
        name: "artifacts",
        title: "ARTIFACT_PL",
        component: Artifacts
    },
    {
        name: "events",
        title: "EVENT_PL",
        component: Events
    }
];
const y = [
    {
        path: p,
        component: module5118,
        routes: getChildRoutes(g, p)
    },
    {
        path: h,
        component: module5118,
        routes: getChildRoutes(g, h)
    },
    {
        path: f,
        component: module5115,
        routes: getChildRoutes(v, f)
    },
    {
        path: d,
        component: module5117,
        routes: getChildRoutes(m, d)
    }
];
export default y;
