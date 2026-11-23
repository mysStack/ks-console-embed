import "./module-15.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module1378 from "./module-1378.js";
export default function({ imagUrl, logoUrl, style, className, onClick }) {
    const f = module553.useState(true);
    const d = module96(f, 2);
    const p = d[0];
    const m = d[1];
    const v = globals.config.logo || globals.defaultTheme.logo;
    const h = globals.useDefaultTheme ? v : globals.theme.logo;
    const src = logoUrl !== "" ? logoUrl : h;
    return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module3(className, module1378.loadingPreviewImage)
    }, module553.default.createElement("div", {
        className: module1378.preview
    }, module553.default.createElement("div", {
        className: module1378.box
    }, module553.default.createElement("div", {
        className: module1378.image
    }, p && module553.default.createElement(module186.Loading, {
        className: module1378.loading
    }), module553.default.createElement("img", {
        style,
        src: imagUrl,
        alt: "",
        onLoad: function() {
            return m(false);
        }
    }), !p && module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("img", {
        className: module1378.logo,
        src
    }), module553.default.createElement("img", {
        className: module1378.loginForm,
        src: "/assets/loginForm.svg"
    }))), !p && module553.default.createElement(module186.Icon, {
        name: "close",
        className: module1378.cancel,
        onClick: function() {
            return onClick(false);
        }
    })))));
};
