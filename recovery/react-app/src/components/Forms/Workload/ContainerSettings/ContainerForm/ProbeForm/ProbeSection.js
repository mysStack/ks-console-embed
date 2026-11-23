import "unpacked/module-15.js";
import * as module553 from "unpacked/module-553.js";
import module800 from "components/Inputs/NumberInput";
import module1289 from "components/Inputs/StringInput";
import module868 from "components/Inputs/ObjectInput";
import module186 from "unpacked/module-186.js";
import module1537 from "unpacked/module-1537.js";
const d = module553.memo(function({ checkerType }) {
    switch(checkerType){
        case "command":
            return module553.default.createElement(module186.Form.Item, {
                key: checkerType,
                label: t("COMMANDS"),
                desc: t("PROBE_COMMAND_DESC"),
                rules: [
                    {
                        required: true,
                        message: t("PROBE_COMMAND_EMPTY")
                    }
                ]
            }, module553.default.createElement(module1289, {
                className: "max-width-full",
                name: "exec.command"
            }));
        case "tcp":
            return module553.default.createElement(module186.Form.Item, {
                label: t("PORT"),
                rules: [
                    {
                        required: true,
                        message: t("PORT_NUMBER_EMPTY")
                    }
                ]
            }, module553.default.createElement(module800, {
                name: "tcpSocket.port",
                defaultValue: 80,
                min: 0,
                max: 65535,
                integer: true
            }));
        default:
            return module553.default.createElement(module186.Form.Item, {
                key: checkerType,
                label: t("PATH"),
                rules: [
                    {
                        required: true,
                        message: t("HTTP_PATH_EMPTY")
                    }
                ]
            }, module553.default.createElement(module868, {
                name: "httpGet",
                className: module1537.object,
                defaultValue: {
                    scheme: "HTTP",
                    path: "/",
                    port: 80
                }
            }, module553.default.createElement(module186.Select, {
                name: "scheme",
                options: [
                    {
                        label: "HTTP",
                        value: "HTTP"
                    },
                    {
                        label: "HTTPS",
                        value: "HTTPS"
                    }
                ]
            }), module553.default.createElement(module186.Input, {
                name: "path"
            }), module553.default.createElement(module800, {
                name: "port",
                min: 0,
                max: 65535,
                integer: true
            })));
    }
});
export default d;
