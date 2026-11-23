import "./module-15.js";
import "./module-18.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module241 from "./module-241.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module818 from "./module-818.js";
import module829 from "./module-829.js";
import module3061 from "./module-3061.js";
const useH = function({ versionList, batchMode, onConfirm, onCancel }) {
    let a;
    const h = module241(versionList, "edgecore");
    const E = module553.useState();
    const y = module96(E, 2);
    const g = y[0];
    const b = y[1];
    const S = module553.useState();
    const _ = module96(S, 2);
    const O = _[0];
    const onChange = _[1];
    const options = module553.useMemo(function() {
        return h[g]?.map(function(e) {
            return {
                label: e,
                description: t("SOFT_VERSION", {
                    value: g
                }),
                value: e
            };
        });
    }, [
        g
    ]);
    module553.useEffect(function() {
        if (options) {
            onChange(options[0]?.value);
        }
    }, [
        options
    ]);
    return module553.default.createElement("div", {
        className: module3(module31({}, module3061.install, !batchMode))
    }, batchMode && module553.default.createElement(module186.Alert, {
        type: "warning",
        message: t("BATCH_EDGE_SOFT_TIPS"),
        className: "margin-b12"
    }), module553.default.createElement("div", {
        className: module3061.title
    }, t("EDGE_SOFT")), module553.default.createElement("p", {
        className: module3061.desc
    }, t("EDGE_SOFT_TIPS")), (a = [
        {
            label: "KubeEdge",
            icon: "iot-duotone",
            value: "edgecore"
        },
        {
            label: "其他",
            icon: "smart-edge",
            value: "others",
            disable: true
        }
    ], module553.default.createElement("div", {
        className: module3061.softs
    }, a.map((e)=>{
        let t;
        const { label, value, icon, disable } = e;
        const checked = value === g;
        return module553.default.createElement("div", {
            key: value,
            className: module3(module3061.soft, (t = {}, module31(t, module3061.active, checked), module31(t, module3061.unAllowable, disable), t)),
            onClick: function() {
                return !disable && b(value);
            }
        }, module553.default.createElement(module186.Icon, {
            name: icon,
            size: 48
        }), module553.default.createElement("span", null, label), module553.default.createElement(module186.Radio, {
            checked,
            style: {
                position: "absolute",
                top: "10px",
                right: "10px"
            }
        }));
    }))), g && module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module818, {
        value: O,
        options,
        onChange
    }), module553.default.createElement(module829, {
        className: module3061.confirm,
        onOk: function() {
            onConfirm({
                name: g,
                version: O,
                todoTasks: [
                    `${g}_install`
                ]
            });
        },
        onCancel
    })));
};
useH.propTypes = {
    versionList: module1.object,
    className: module1.string
};
export default useH;
