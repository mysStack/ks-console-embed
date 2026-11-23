import "./module-15.js";
export const strategyMap = {
    immediate: "Immediately",
    wait: "WaitForWorkloadReady",
    paused: "Paused"
};
export const strategyOptions = [
    {
        value: strategyMap.immediate,
        iconName: "strategy-immediate.svg",
        title: "STRATEGY_SETTING_IMMEDIATELY_TITLE",
        desc: "STRATEGY_SETTING_IMMEDIATELY_DESC",
        disabled: false
    },
    {
        value: strategyMap.wait,
        iconName: "strategy-waiting.svg",
        title: "STRATEGY_SETTING_WAIT_TITLE",
        desc: "STRATEGY_SETTING_WAIT_DESC",
        disabled: false
    },
    {
        value: strategyMap.paused,
        iconName: "strategy-paused.svg",
        title: "STRATEGY_SETTING_PAUSED_TITLE",
        desc: "STRATEGY_SETTING_PAUSED_DESC",
        disabled: false
    }
];
