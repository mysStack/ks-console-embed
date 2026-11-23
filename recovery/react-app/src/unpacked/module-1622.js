import "./module-15.js";
import "./module-73.js";
import "./module-24.js";
import "./module-137.js";
import "./module-315.js";
import "./module-58.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
export default function({ value, onChange, simpleInput, isMultiMode, ...rest }) {
    const defaultValue = module553.useMemo(function() {
        if (isMultiMode) {
            return value?.join(",");
        }
        return value?.[0];
    }, [
        value,
        isMultiMode
    ]);
    return module553.default.createElement(module553.default.Fragment, null, isMultiMode && !simpleInput ? module553.default.createElement(module186.TextArea, {
        ...rest,
        className: "ips",
        name: "edgeIpList",
        defaultValue,
        onChange: function(e) {
            onChange?.(e.split(","));
        },
        maxLength: 256
    }) : module553.default.createElement(module186.Input, {
        ...rest,
        defaultValue,
        onChange: function({ target }) {
            onChange?.([
                target.value
            ]);
        }
    }));
};
