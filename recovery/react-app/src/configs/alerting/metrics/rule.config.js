import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-31.js";
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
export const getBaseRuleConfig = function({ condition = {}, thresholds = {} } = {}) {
    return [
        {
            name: "condition_type",
            options,
            ...condition
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
        unit: "%",
        converter: function(e) {
            return e / 100;
        }
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
        min: 0,
        converter: function(e) {
            return e * 1024 ** 2;
        }
    }
});
export const DISK_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "GB",
        min: 0,
        converter: function(e) {
            return e * 1000 ** 3;
        }
    }
});
export const THROUGHPUT_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "KB/s",
        min: 0,
        converter: function(e) {
            return 1000 * e;
        }
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
