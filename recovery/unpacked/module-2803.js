import "./module-15.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import * as module553 from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import module800 from "./module-800.js";
import module1638 from "./module-1638.js";
import module1337 from "./module-1337.js";
import { GraphTextInput } from "./module-1338.js";
import module1111 from "./module-1111.js";
import module1639 from "./module-1639.js";
import module2804 from "./module-2804.js";
import module1640 from "./module-1640.js";
import module1053 from "./module-1053.js";
import module1112 from "./module-1112.js";
let o;
let u;
const N = inject("monitoringStore")(o = observer((u = ((e)=>{
    module55(r, e);
    var a = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(r);
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return module553.default.createElement(module1337, {
                    preview: module553.default.createElement("div", null),
                    sidebar: module553.default.createElement(GraphTextInput, {
                        type: "table"
                    }),
                    main: module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module1111, {
                        label: t("DATA")
                    }, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1638, {
                        name: "targets",
                        header: function({ onAdd }) {
                            return module553.default.createElement(module1640, {
                                right: module553.default.createElement(module186.Button, {
                                    type: "control",
                                    onClick: onAdd
                                }, t("ADD"))
                            });
                        }
                    }, function({ formItemName, onDelete, onUpClick, onDownClick }) {
                        return module553.default.createElement(module1639, {
                            onDelete,
                            onUpClick,
                            onDownClick,
                            prefix: formItemName
                        });
                    }))), module553.default.createElement(module1111, {
                        label: t("TABLE_SETTINGS")
                    }, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1638, {
                        name: "styles",
                        header: function({ onAdd }) {
                            return module553.default.createElement(module1640, {
                                left: module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1053, {
                                    name: "expr"
                                }, function({ onChange, value }) {
                                    return module553.default.createElement("div", null, module553.default.createElement(module1112, {
                                        label: t("PER_PAGE_LINES"),
                                        tips: ""
                                    }, module553.default.createElement(module800, {
                                        value,
                                        onChange,
                                        defaultValue: 100
                                    })));
                                })),
                                right: module553.default.createElement(module186.Button, {
                                    type: "control",
                                    onClick: onAdd
                                }, t("ADD"))
                            });
                        }
                    }, function({ formItemName, onDelete, onUpClick, onDownClick }) {
                        return module553.default.createElement(module2804, {
                            onDelete,
                            onUpClick,
                            onDownClick,
                            prefix: formItemName
                        });
                    }))))
                });
            }
        },
        {
            key: "monitor",
            get: function() {
                return this.props.monitor;
            }
        }
    ]);
    return r;
})(module553.Component), module49(u.prototype, "monitor", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "monitor"), u.prototype), o = u)) || o) || o;
export default N;
