import "./module-15.js";
import "./module-197.js";
import "./module-73.js";
import "./module-975.js";
import "./module-48.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-315.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module952 from "./module-952.js";
import module26 from "./module-26.js";
import module1378 from "./module-1378.js";
import module1725 from "./module-1725.js";
import module3294 from "./module-3294.js";
export default function(e) {
    let src;
    let r;
    let style;
    const { title, height } = e;
    const height_1 = height === undefined ? 120 : height;
    const e_width = e.width;
    const width = e_width === undefined ? 450 : e_width;
    const { uploadName, uploadUrl, imagUrl } = e;
    const T = imagUrl === undefined ? "" : imagUrl;
    const e_logoUrl = e.logoUrl;
    const logoUrl = e_logoUrl === undefined ? "" : e_logoUrl;
    const e_type = e.type;
    const k = e_type === undefined ? [
        "png"
    ] : e_type;
    const e_preview = e.preview;
    const P = e_preview !== undefined && e_preview;
    const e_tooltipText = e.tooltipText;
    const content = e_tooltipText === undefined ? "" : e_tooltipText;
    const e_fileSize = e.fileSize;
    const L = e_fileSize === undefined ? null : e_fileSize;
    const j = title || t("UPLOAD");
    const x = module553.useState("");
    const U = module96(x, 2);
    const F = U[0];
    const V = U[1];
    const G = module553.useState(globals.useDefaultThem || T === "");
    const B = module96(G, 2);
    const Y = B[0];
    const z = B[1];
    const H = module553.useState(false);
    const W = module96(H, 2);
    const q = W[0];
    const onClick = W[1];
    const QRef = module553.useRef();
    const J = {
        name: uploadName,
        method: "post",
        action: uploadUrl,
        multiple: false,
        beforeUpload: (()=>{
            const e = module44(module41.mark(function e(a) {
                let r;
                let n;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                r = a.size;
                                if (!(L && r > 1048576 * L)) {
                                    e.next = 5;
                                    break;
                                }
                                module240.error(t("UPLOAD_FILE_TOO_LARGE"));
                                return e.abrupt("return", Promise.reject(t("UPLOAD_FILE_TOO_LARGE")));
                            case 5:
                                n = a.name.slice(a.name.lastIndexOf(".") + 1);
                                if (k.findIndex((e)=>e === n) !== -1) {
                                    e.next = 9;
                                    break;
                                }
                                module240.error(t("WRONG_FILE_EXTENSION_NAME", {
                                    type: k.join(",")
                                }));
                                return e.abrupt("return", Promise.reject(t("WRONG_FILE_EXTENSION_NAME", {
                                    type: k.join(",")
                                })));
                            case 9:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        })(),
        onSuccess: function(a, r) {
            const e_onChange = e.onChange;
            const fileReader = new FileReader;
            if (a.code === 200 || a.image) {
                fileReader.readAsDataURL(r);
                fileReader.addEventListener("load", function() {
                    const fileReader_result = fileReader.result;
                    V(fileReader_result);
                    z(false);
                    if (e_onChange) {
                        e_onChange(a, fileReader_result);
                    }
                });
                return module240.success({
                    content: t("UPLOAD_SUCCESSFUL")
                });
            }
            module240.error({
                content: t("UPLOAD_PLATFORM_IMAGE_FAILED", {
                    message: a.message || "Internal Server Error"
                })
            });
        },
        onError: function(a) {
            const e_onError = e.onError;
            if (e_onError) {
                e_onError();
            }
            module240.error({
                content: t("UPLOAD_PLATFORM_IMAGE_FAILED", {
                    message: a.message || "Internal Server Error"
                })
            });
            z(true);
        }
    };
    return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module1378.container,
        style: {
            height: height_1,
            width
        }
    }, (style = Y ? {} : {
        visibility: "hidden"
    }, module553.default.createElement("div", {
        className: module1378.uploadBox,
        style
    }, module553.default.createElement(module952, {
        ...J,
        ref: QRef
    }, module553.default.createElement("div", {
        className: module1378.selectContainer,
        style: {
            height: height_1,
            width
        }
    }, module553.default.createElement(module186.Icon, {
        className: module1378.icon,
        size: 40,
        name: "upload"
    }), module553.default.createElement("p", {
        className: module1378.title
    }, j), module553.default.createElement("p", {
        className: module1378.desc
    }, content))))), (!globals.useDefaultTheme || F !== "") && (src = F || T, r = globals.theme.background !== "" || F !== "", module553.default.createElement("div", {
        className: module1378.imageBox
    }, !Y && module553.default.createElement(module1725, {
        style: module26({
            favicon: {
                maxHeight: 40
            },
            logo: {
                maxHeight: 40
            }
        }, e.name, {}),
        src
    }), module553.default.createElement("div", {
        className: module1378.overlay
    }, module553.default.createElement(module186.Tooltip, {
        content,
        placement: "top",
        style: {
            width: 400
        }
    }, module553.default.createElement(module186.Button, {
        type: "control",
        onClick: function() {
            return QRef.current.onClick();
        }
    }, t("UPLOAD"))), P && r && module553.default.createElement(module186.Button, {
        onClick: function() {
            return onClick(true);
        }
    }, t("PREVIEW"))))), q && (()=>{
        const imagUrl_1 = F || T;
        return module553.default.createElement(module3294, {
            logoUrl,
            imagUrl: imagUrl_1,
            onClick
        });
    })()));
};
