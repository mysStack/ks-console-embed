import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-828.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import module3 from "unpacked/module-3.js";
export function getClassNames({ primary, secondary, theme, variant, className, color, fill }) {
    const m = theme ?? variant ?? "dark";
    const h = {
        light: {
            fill: "#ffffff66",
            color: "rgba(255,255,255,0.9)"
        },
        dark: {
            fill: "#B6C2CD",
            color: "#242E42"
        }
    };
    return {
        className: module3(className, "icon", "kubed-icon", `kubed-icon__${m}`, {
            "kubed-icon-dark": m === "dark",
            "kubed-icon-light": m === "light"
        }),
        colorProps: {
            fill: secondary ?? fill ?? h[m]?.fill,
            color: primary ?? color ?? h[m]?.color
        }
    };
}
export const mapProps = function(e, r = 24) {
    const n = getClassNames(e);
    const { className, colorProps } = n;
    const { size, width, height, primary: _primary, secondary: _secondary, variant: _variant, ...rest } = e;
    return {
        width: size ?? width ?? r,
        height: size ?? height ?? r,
        viewBox: `0 0 ${r} ${r}`,
        xmlns: "http://www.w3.org/2000/svg",
        ...rest,
        ...colorProps,
        className
    };
};
