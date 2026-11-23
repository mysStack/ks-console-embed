import "unpacked/module-15.js";
import module1717 from "components/Forms/Pipelines/AdvanceSettings";
import module3279 from "components/Forms/Pipelines/BaseInfo";
import module3281 from "components/Forms/Pipelines/PipelineTemplate";
import module3287 from "components/Forms/Pipelines/PipelineTemplateParams";
import module3288 from "components/Forms/Pipelines/PipelineTemplateParams/old";
export const PIPELINE_PROJECT_CREATE_STEPS = [
    {
        title: "BASIC_INFORMATION",
        component: module3279,
        icon: "cdn",
        required: true
    },
    {
        title: "ADVANCED_SETTINGS",
        component: module1717,
        required: true
    }
];
export const PIPELINE_CREATE_STEPS = [
    {
        title: "SELECT_TEMPLATE",
        component: module3281,
        required: true
    },
    {
        title: "PARAMETER_CONFIG",
        component: module3287,
        required: true,
        icon: "slider"
    }
];
export const PIPELINE_CREATE_STEPS_OLD = [
    {
        title: "SELECT_TEMPLATE",
        component: module3281,
        required: true
    },
    {
        title: "PARAMETER_CONFIG",
        component: module3288,
        required: true,
        icon: "slider"
    }
];
