import "./module-15.js";
import "./module-11.js";
import "./module-16.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "./module-4.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import { getSoftIconName } from "./module-983.js";
import module829 from "components/Forms/Base/Confirm";
import module814 from "components/Base/List";
import module796 from "components/Base/Status";
import module842 from "components/Base/CodeEditor";
import module3071 from "./module-3071.js";
const useH = function({ container, onClick }) {
    const { name, runningStatus, version, configFile } = container;
    const checked = runningStatus === "running";
    const y = module553.useState();
    const g = module96(y, 2);
    const b = g[0];
    const S = g[1];
    const _ = module553.useState(false);
    const O = module96(_, 2);
    const C = O[0];
    const T = O[1];
    const R = [
        {
            title: module553.default.createElement(module796, {
                type: runningStatus,
                className: module3071.status,
                name: t(`NODE_STATUS_${runningStatus?.toLocaleUpperCase()}`)
            }),
            description: t("STATUS"),
            show: !!runningStatus
        },
        {
            title: t(version),
            description: t("VERSIONS"),
            show: !!version
        }
    ];
    const D = (e, t)=>{
        onClick(e, container, t);
    };
    module553.useEffect(function() {
        S(configFile);
    }, [
        configFile
    ]);
    return module553.default.createElement("div", {
        className: module3071.container
    }, module553.default.createElement(module814.Item, {
        icon: getSoftIconName(name),
        title: name,
        description: t("CONTAINER_ENGINE"),
        details: R.filter((e)=>!!e.show),
        operations: module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Tooltip, {
            content: t("UNINSTALL"),
            placement: "bottom"
        }, module553.default.createElement(module186.Button, {
            type: "flat",
            icon: "trash",
            onClick: function() {
                return D("uninstall");
            }
        })), module553.default.createElement(module186.Tooltip, {
            content: t("SOFT_RESTART"),
            placement: "bottom"
        }, module553.default.createElement(module186.Button, {
            type: "flat",
            icon: "refresh",
            onClick: function() {
                return D("restart");
            },
            style: {
                marginRight: "12px"
            }
        })), module553.default.createElement(module186.Toggle, {
            checked,
            onText: t("ENABLE"),
            offText: t("STOP_SOFT_TEXT"),
            onChange: function(e) {
                D(e ? "start" : "stop");
            }
        }))
    }), module553.default.createElement(module186.Form.Group, {
        label: t("SOFT_SETTINGS", {
            container: name
        }),
        desc: t("SOFT_SETTINGS_TIPS", {
            container: name,
            filePath: name === "containerd" ? "/etc/containerd/config.toml" : "/etc/docker/daemon.json"
        }),
        checkable: true,
        keepDataWhenUnCheck: true
    }, module553.default.createElement(module842, {
        mode: ((name_1)=>{
            switch(name_1){
                case "docker":
                    return "json";
                case "containerd":
                    return "toml";
                default:
                    return "yaml";
            }
        })(name),
        className: module3071.containerConfig,
        value: b ?? "",
        onChange: function(e) {
            if (!C) {
                T(true);
            }
            S(e);
        }
    }), C && module553.default.createElement(module829, {
        onOk: function() {
            onClick("modify_conf", container, b);
            T(false);
        },
        onCancel: function() {
            T(false);
            S(configFile);
        },
        className: module3071.configConfirm
    })));
};
useH.propTypes = {
    container: module1.object,
    onClick: module1.func
};
export default useH;
