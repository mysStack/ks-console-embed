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
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module842 from "./module-842.js";
import module829 from "./module-829.js";
export default function({ onSaveChange, formTemplate }) {
    const i = formTemplate.customCommand?.[0]?.customTaskInfo ?? "";
    const d = module553.useState(false);
    const p = module96(d, 2);
    const m = p[0];
    const v = p[1];
    const h = module553.useState("");
    const E = module96(h, 2);
    const y = E[0];
    const g = E[1];
    module553.useEffect(function() {
        g(i);
    }, [
        i
    ]);
    return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module842, {
        value: y,
        onChange: function(e) {
            if (!m) {
                v(true);
            }
            g(e);
        },
        options: {
            style: {
                minHeight: "376px"
            }
        }
    }), m && module553.default.createElement(module829, {
        onOk: function() {
            onSaveChange("custom_task", {
                ...formTemplate,
                customCommand: [
                    {
                        todoTasks: [
                            "custom_task"
                        ],
                        customTaskInfo: y
                    }
                ]
            });
            v(false);
        },
        onCancel: function() {
            v(false);
            g("");
        }
    }));
};
