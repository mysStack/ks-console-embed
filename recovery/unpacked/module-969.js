import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
const options = [
    {
        label: ">",
        value: ">"
    },
    {
        label: ">=",
        value: ">="
    },
    {
        label: "<",
        value: "<"
    },
    {
        label: "<=",
        value: "<="
    }
];
export const SEVERITY_LEVEL = [
    {
        type: "critical",
        prefixIcon: "information",
        color: {
            primary: "#fae7e5",
            secondary: "#ca2621"
        },
        label: "CRITICAL_ALERT",
        value: "critical"
    },
    {
        type: "error",
        prefixIcon: "information",
        color: {
            primary: "#fae7e5",
            secondary: "#f5a623"
        },
        label: "ERROR_ALERT",
        value: "error"
    },
    {
        className: "tag-ffd939",
        prefixIcon: "information",
        color: {
            primary: "#fae7e5",
            secondary: "#FFD939"
        },
        label: "WARNING_ALERT",
        value: "warning"
    },
    {
        type: "secondary",
        prefixIcon: "information",
        color: {
            primary: "#fae7e5",
            secondary: "#79879c"
        },
        label: "INFO_ALERT",
        value: "info"
    }
];
export const getBaseRuleConfig = function({ comparator = {}, thresholds = {} } = {}) {
    return [
        {
            name: "comparator",
            options,
            placeholder: "CONDITION_OPERATOR",
            ...comparator
        },
        {
            type: "number",
            name: "thresholds",
            placeholder: "THRESHOLD",
            ...thresholds
        }
    ];
};
export const BASE_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        min: 0
    }
});
export const PERCENT_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        min: 0,
        max: 100,
        unit: "%"
    }
});
export const TIME_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        min: 0,
        max: 10000,
        unit: "s"
    }
});
export const CPU_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "core",
        min: 0
    }
});
export const MEMORY_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "Mi",
        min: 0
    }
});
export const DISK_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "GB",
        min: 0
    }
});
export const DISK_MB_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "MB",
        min: 0
    }
});
export const THROUGHPUT_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "KB/s",
        min: 0
    }
});
export const BANDWIDTH_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "Mbps",
        min: 0,
        converter: function(e) {
            return e * (1024 ** 2 / 8);
        }
    }
});
export const ITEM_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "",
        min: 0
    }
});
export const BYTE_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "byte",
        min: 0
    }
});
export const disabledRuleConfig = getBaseRuleConfig({
    comparator: {
        disabled: true,
        value: "-",
        options: [
            {
                label: "- ",
                value: "-"
            }
        ]
    },
    thresholds: {
        disabled: true,
        value: "-",
        type: "text"
    }
});
