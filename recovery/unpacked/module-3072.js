import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module96 from "./module-96.js";
import module31 from "./module-31.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module818 from "./module-818.js";
import module829 from "./module-829.js";
import module3073 from "./module-3073.js";
const useG = function({ versionList, batchMode, onConfirm, onCancel }) {
    let a;
    const E = module189(versionList, "nvidiaDocker2");
    const g = module26(versionList, "nvidiaDocker2");
    const b = {
        ...E,
        "nvidia-docker2": g
    };
    const S = module553.useState();
    const _ = module96(S, 2);
    const O = _[0];
    const C = _[1];
    const T = module553.useState();
    const R = module96(T, 2);
    const D = R[0];
    const onChange = R[1];
    const options = module553.useMemo(function() {
        return b[O]?.map(function(e) {
            return {
                label: e,
                description: t("SOFT_VERSION", {
                    value: O
                }),
                value: e
            };
        });
    }, [
        O
    ]);
    module553.useEffect(function() {
        if (options) {
            onChange(options[0]?.value);
        }
    }, [
        options
    ]);
    return module553.default.createElement("div", null, batchMode && module553.default.createElement(module186.Alert, {
        type: "warning",
        message: t("BATCH_CONTAINER_SOFT_TIPS"),
        className: "margin-b12"
    }), module553.default.createElement("div", {
        className: module3073.title
    }, t("CONTAINER_ENGINE")), module553.default.createElement("p", {
        className: module3073.desc
    }, t("CONTAINER_ENGINE_TIPS")), (a = [
        {
            label: "Docker",
            icon: "docker",
            value: "docker",
            disable: false
        },
        {
            label: "Containerd",
            icon: "container",
            value: "containerd",
            disable: true
        },
        {
            label: "Nvidia-Docker2",
            icon: "docker",
            value: "nvidia-docker2",
            disable: true
        }
    ], module553.default.createElement("div", {
        className: module3073.softs
    }, a.map((e)=>{
        let t;
        const { label, value, icon, disable } = e;
        const checked = value === O;
        return module553.default.createElement("div", {
            key: value,
            className: module3(module3073.soft, (t = {}, module31(t, module3073.active, checked), module31(t, module3073.unAllowable, disable), t)),
            onClick: function() {
                return !disable && C(value);
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
    }))), O && module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module818, {
        value: D,
        options,
        onChange
    }), module553.default.createElement(module829, {
        className: module3073.confirm,
        onOk: function() {
            onConfirm({
                name: O,
                version: D,
                todoTasks: [
                    `${O}_install`
                ]
            });
        },
        onCancel
    })));
};
useG.propTypes = {
    versionList: module1.object
};
export default useG;
