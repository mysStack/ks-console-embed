import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-31.js";
import module2076 from "./module-2076.js";
module2076.DP = 10;
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
        type: "warning",
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
            placeholder: "CONDITION_OPERATOR",
            options,
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
        min: 0,
        converter: function(e) {
            return Number(e);
        },
        reverser: function(e) {
            return Number(e);
        }
    }
});
export const PERCENT_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        min: 0,
        max: 100,
        unit: "%",
        converter: function(e) {
            const t = new module2076(e);
            return Number(t.div(100).toString());
        },
        reverser: function(e) {
            const t = new module2076(e);
            return Number(t.times(100).toString());
        }
    }
});
export const CORE_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "core",
        min: 0,
        converter: function(e) {
            return Number(e);
        },
        reverser: function(e) {
            return Number(e);
        }
    }
});
export const GIB_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "GiB",
        min: 0,
        converter: function(e) {
            const t = new module2076(e);
            const a = new module2076(1024).pow(3);
            return Number(t.times(a).toString());
        },
        reverser: function(e) {
            const t = new module2076(e);
            const a = new module2076(1024).pow(3);
            return Number(t.div(a).toString());
        }
    }
});
export const MIB_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "MiB",
        min: 0,
        converter: function(e) {
            const t = new module2076(e);
            const a = new module2076(1024).pow(2);
            return Number(t.times(a).toString());
        },
        reverser: function(e) {
            const t = new module2076(e);
            const a = new module2076(1024).pow(2);
            return Number(t.div(a).toString());
        }
    }
});
export const GB_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "GB",
        min: 0,
        converter: function(e) {
            const t = new module2076(e);
            const a = new module2076(1000).pow(3);
            return Number(t.times(a).toString());
        },
        reverser: function(e) {
            const t = new module2076(e);
            const a = new module2076(1000).pow(3);
            return Number(t.div(a).toString());
        }
    }
});
export const KBS_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "KB/s",
        min: 0,
        converter: function(e) {
            const t = new module2076(e);
            const a = new module2076(1000);
            return Number(t.times(a).toString());
        },
        reverser: function(e) {
            const t = new module2076(e);
            const a = new module2076(1000);
            return Number(t.div(a).toString());
        }
    }
});
export const MBPS_RULE_CONFIG = getBaseRuleConfig({
    thresholds: {
        unit: "Mbps",
        min: 0,
        converter: function(e) {
            const t = new module2076(e);
            const a = new module2076(1000).pow(2);
            return Number(t.times(a).toString());
        },
        reverser: function(e) {
            const t = new module2076(e);
            const a = new module2076(1000).pow(2);
            return Number(t.div(a).toString());
        }
    }
});
