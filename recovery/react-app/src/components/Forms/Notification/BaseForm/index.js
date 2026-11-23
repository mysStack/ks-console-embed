import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-24.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-118.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-41.js";
import module58 from "unpacked/module-58.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module61 from "unpacked/module-61.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module800 from "components/Inputs/NumberInput";
import module830 from "components/Inputs/ArrayInput";
import module852 from "components/Base/Switch";
import module885 from "components/EditMode";
import module241 from "unpacked/module-241.js";
import module74 from "unpacked/module-74.js";
import module2987 from "unpacked/module-2987.js";
import module26 from "unpacked/module-26.js";
import module445 from "stores/workspace";
import module439 from "stores/project";
import { showNameAndAlias } from "utils/index";
import { PATTERN_ALIAS_NAME, PATTERN_NAME } from "utils/constants";
import module2988 from "unpacked/module-2988.js";
import module2990 from "unpacked/module-2990.js";
import module1313 from "unpacked/module-1313.js";
const TabPanel = module186.Tabs.TabPanel;
const w = "__ALL__";
export default function(e) {
    const { formRef, formTemplate, goBack, isOutdated, onFormChange, isEdge, hideWorkspace } = e;
    const L = hideWorkspace !== undefined && hideWorkspace;
    let j = "node_range";
    if (formTemplate.nodeSelectorLable) {
        j = "label_select";
    }
    if (formTemplate.nodeSelectorText) {
        j = "custom";
    }
    const x = module553.default.useState(true);
    const U = module96(x, 2);
    const F = U[0];
    const V = U[1];
    const G = module553.default.useState(j);
    const B = module96(G, 2);
    const activeName = B[0];
    const z = B[1];
    const H = module553.default.useState(false);
    const W = module96(H, 2);
    const checked = W[0];
    const K = W[1];
    const ref = module553.default.createRef();
    const JRef = module553.default.useRef(new module445);
    const XRef = module553.useRef(new module439);
    const Z = module553.default.useState(true);
    const $ = module96(Z, 2);
    const isLoading = $[0];
    const te = $[1];
    const ae = isEdge ? XRef.current.list : JRef.current.list;
    const options = [
        {
            label: t("ALL"),
            value: w
        }
    ].concat(module61(ae.data.map((e)=>({
            label: showNameAndAlias(e),
            value: e.name
        }))));
    function onFetch() {
        return le.apply(this, arguments);
    }
    function le() {
        return (le = async function t() {
            te(true);
            if (isEdge) {} else {
                await JRef.current.fetchList({
                    cluster: e.cluster
                });
            }
            te(false);
        }).apply(this, arguments);
    }
    module553.useEffect(function() {
        onFetch();
    }, []);
    const oe = (e)=>{
        const { name, aliasName, description } = e;
        e.key;
        return {
            apiVersion: "crd.projectcalico.org/v1",
            kind: "IPPool",
            metadata: {
                name,
                annotations: {
                    "kubesphere.io/description": description || "",
                    "kubesphere.io/alias-name": aliasName || ""
                }
            },
            spec: {
                ...module58(e, [
                    "name",
                    "aliasName",
                    "description",
                    "key"
                ])
            }
        };
    };
    const checkItemValid = function(e) {
        let t = e.key && e.operator;
        if (t && [
            "In",
            "NotIn"
        ].includes(e.operator)) {
            t = t && e.values.length > 0;
        }
        if (e.operator === "Match") {
            t = t && e.regexValue;
        }
        return t;
    };
    return module553.default.createElement(module186.Form, {
        ref: formRef,
        data: formTemplate,
        onChange: onFormChange,
        className: module1313.editForm
    }, module553.default.createElement(module852, {
        className: module1313.switch,
        text: t("EDIT_YAML"),
        onChange: function() {
            let e;
            let t;
            let a;
            if (checked) {
                formTemplate.nodeSelectorText = formTemplate.nodeSelector;
                formTemplate.nodeSelector = "all()";
                formTemplate.natOutgoing = Boolean(formTemplate.natOutgoing);
                z("custom");
            } else {
                if (formTemplate.nodeSelectorLable) {
                    formTemplate.nodeSelector = (t = formTemplate.nodeSelectorLable, a = "", t.forEach((e)=>{
                        let t = "";
                        let r = "";
                        switch(e.operator){
                            case "NotIn":
                                r = e.values.map((e)=>`"${e}"`).join(",");
                                t = `${e.key} not in {${r}}`;
                                break;
                            case "In":
                                r = e.values.map((e)=>`"${e}"`).join(",");
                                t = `${e.key} in {${r}}`;
                                break;
                            case "Exists":
                                t = `has(${e.key})`;
                                break;
                            case "DoesNotExist":
                                t = `!has(${e.key})`;
                        }
                        a = a ? `${a} && ${t}` : t;
                    }), a);
                    delete formTemplate.nodeSelectorLable;
                }
                if (formTemplate.nodeSelectorText) {
                    formTemplate.nodeSelector = formTemplate.nodeSelectorText.replace(/'/g, '"');
                    delete formTemplate.nodeSelectorText;
                }
                V({
                    obj: oe((e = formTemplate, Array.isArray(e) ? e.reduce((acc, item)=>({
                            ...acc,
                            ...item
                        }), {}) : e))
                });
            }
            K(!checked);
        },
        checked
    }), module553.default.createElement("div", {
        className: module1313.editContainer
    }, module553.default.createElement("div", null, module553.default.createElement(module186.Icon, {
        name: "return",
        size: 20,
        className: "margin-r4",
        clickable: !!goBack,
        onClick: goBack
    }), module553.default.createElement("span", {
        className: module1313.title
    }, t("EDIT_POD_IP_POOL"))), checked ? module553.default.createElement("div", {
        className: module1313.codeWrapper
    }, module553.default.createElement(module885, {
        ref,
        value: F,
        returnType: "obj",
        onChange: function(e) {
            module2987(e.spec, function(e, t) {
                module74(formTemplate, t, e);
            });
            module74(formTemplate, "aliasName", module26(e, 'metadata.annotations["kubesphere.io/alias-name"]', ""));
            module74(formTemplate, "description", module26(e, 'metadata.annotations["kubesphere.io/description"]', ""));
        }
    })) : module553.default.createElement("div", {
        className: module1313.container
    }, module553.default.createElement("div", {
        style: {
            display: "none"
        }
    }, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module186.Input, {
        name: "isEdge",
        value: isEdge
    }))), module553.default.createElement("div", {
        className: module3(module1313.card, module1313.editRow)
    }, module553.default.createElement(module186.Form.Item, {
        label: t("NETWORK_SEGMENT"),
        rules: [
            {
                required: true,
                message: t("ENTER_NETWORK_SEGMENT")
            }
        ],
        desc: t("POD_IP_POOL_IP_RANGE")
    }, module553.default.createElement(module186.Input, {
        name: "cidr"
    })), module553.default.createElement(module186.Form.Item, {
        label: t("NAME"),
        rules: [
            {
                required: true,
                message: t("NAME_EMPTY_DESC")
            },
            {
                pattern: PATTERN_NAME,
                message: t("POD_IP_POOL_NAME_DESC")
            }
        ],
        desc: t("POD_IP_POOL_NAME_DESC")
    }, module553.default.createElement(module186.Input, {
        name: "name",
        maxLength: 63
    })), module553.default.createElement(module186.Form.Item, {
        label: t("IPPOOL_BLOCK_SIZE"),
        desc: t("IP_POOL_BLOCK_SIZE_DESC")
    }, module553.default.createElement(module800, {
        name: "blockSize",
        min: 0,
        max: 32
    })), (!L || isEdge) && module553.default.createElement(module186.Form.Item, {
        label: t(isEdge ? "PROJECT_PL" : "WORKSPACE"),
        desc: t(isEdge ? "IPPOOL_ASSIGN_PROJECT_DESC" : "IPPOOL_ASSIGN_WORKSPACE_DESC")
    }, module553.default.createElement(module186.Select, {
        name: "workspace",
        options,
        pagination: module241(ae, [
            "page",
            "total",
            "limit"
        ]),
        isLoading,
        onFetch,
        searchable: true,
        clearable: true,
        placeholder: " "
    })), module553.default.createElement(module186.Form.Item, {
        label: t("NAT outgoing"),
        desc: t("NAT_OUTGOING_DESC")
    }, module553.default.createElement(module186.Select, {
        options: [
            {
                label: t("OPEN"),
                value: true
            },
            {
                label: t("CLOSE"),
                value: false
            }
        ],
        name: "natOutgoing",
        onChange: function(e) {
            module74(formTemplate, "natOutgoing", e);
        }
    })), module553.default.createElement(module186.Form.Item, {
        label: t("ALIAS"),
        desc: t("ALIAS_NAME_DESC"),
        rules: [
            {
                pattern: PATTERN_ALIAS_NAME,
                message: t("INVALID_ALIAS_NAME_DESC")
            }
        ]
    }, module553.default.createElement(module186.Input, {
        maxLength: 63,
        name: "aliasName"
    })), module553.default.createElement(module186.Form.Item, {
        label: t("DESCRIPTION"),
        desc: t("DESCRIPTION_DESC")
    }, module553.default.createElement(module186.TextArea, {
        maxLength: 256,
        name: "description"
    }))), module553.default.createElement(module186.Form.Group, {
        label: t("SELECT_NODES"),
        desc: t("SELECT_NODE_DES"),
        keepDataWhenUnCheck: true,
        checkable: true
    }, module553.default.createElement(module186.Tabs, {
        type: "button",
        activeName,
        onChange: function(e) {
            if (e === "node_range") {
                delete formTemplate.nodeSelectorLable;
                delete formTemplate.nodeSelectorText;
            }
            if (e === "label_select") {
                delete formTemplate.nodeSelectorText;
            }
            if (e === "custom") {
                delete formTemplate.nodeSelectorLable;
            }
            z(e);
        }
    }, module553.default.createElement(TabPanel, {
        label: t("NODE_RANGE"),
        name: "node_range"
    }, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module186.Select, {
        options: [
            {
                label: t("ALL"),
                value: "all()",
                description: t("SELECT_LABEL_ALL_RESOUCE")
            },
            {
                label: t("ALL_DISABLED"),
                value: "!all()",
                description: t("DISABLE_SELECT_NODE")
            }
        ],
        name: "nodeSelector",
        optionRenderer: function(e) {
            return module553.default.createElement("div", {
                className: module1313.option
            }, module553.default.createElement("p", {
                className: module1313.label
            }, e.label), module553.default.createElement("p", {
                className: module1313.description
            }, e.description || "-"));
        },
        className: module1313.tabPanel
    }))), module553.default.createElement(TabPanel, {
        label: t("LABEL_SELECT"),
        name: "label_select"
    }, module553.default.createElement(module186.Form.Item, {
        label: t("LABEL"),
        rules: [
            {
                validator: function(e, a, r) {
                    if (a) {
                        if (a.some((e)=>!checkItemValid(e))) {
                            return r({
                                message: t("INVALID_NOTIFICATION_CONDITION")
                            });
                        }
                        return void r();
                    }
                    return r();
                },
                checkOnSubmit: true
            }
        ]
    }, module553.default.createElement(module830, {
        name: "nodeSelectorLable",
        itemType: "object",
        addText: t("ADD"),
        checkItemValid,
        desc: module553.default.createElement("div", {
            className: module1313.annotation
        }, module553.default.createElement(module186.Icon, {
            name: "question"
        }), module553.default.createElement("p", {
            className: module1313.desc
        }, t.html("NOTIFICATION_CONDITION_SETTING_TIP")))
    }, module553.default.createElement(module2990, null)))), module553.default.createElement(TabPanel, {
        label: t("CUSTOM"),
        name: "custom"
    }, module553.default.createElement(module186.Form.Item, {
        label: t("EXPRESSION")
    }, module553.default.createElement(module186.TextArea, {
        className: module1313.tabPanel,
        name: "nodeSelectorText",
        placeholder: 'a in {"A", "B"} || a not in {"A", "B"} || has(A) || !has(A)'
    }))))), !isOutdated && module553.default.createElement(module2988, {
        value: module241(formTemplate, [
            "ipipMode",
            "vxlanMode"
        ]),
        onChange: function({ ipipMode, vxlanMode }) {
            module74(formTemplate, "ipipMode", ipipMode);
            module74(formTemplate, "vxlanMode", vxlanMode);
        }
    }))));
};
