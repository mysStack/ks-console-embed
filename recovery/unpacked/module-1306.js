import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-326.js";
import "./module-190.js";
import "./module-98.js";
import "./module-4.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-118.js";
import "./module-319.js";
import module246 from "./module-246.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module2406 from "./module-2406.js";
export default function({ percent = 0, strokeColor = {
    "0%": "#55bc8a",
    "70%": "#f5a623",
    "100%": "#ca2621"
}, trailColor = "#e3e9ef", bgColor = "#fff" }) {
    const p = module553.useState("#108ee9");
    const m = module96(p, 2);
    const h = m[0];
    const v = m[1];
    const g = module553.useState("");
    const y = module96(g, 2);
    const color = y[0];
    const b = y[1];
    const _ = `repeating-linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1) 2px,
    ${bgColor} 2px,
    ${bgColor} 4px
  )`;
    const O = `${percent !== 0 ? percent.toFixed(2) : 0}%`;
    module553.useEffect(function() {
        if (typeof strokeColor === "string") {
            v(strokeColor);
        }
        if (module246(strokeColor) === "object" && !Array.isArray(strokeColor)) {
            const e = Object.entries(strokeColor).map((e)=>{
                const t = module96(e, 2);
                const a = t[0];
                const r = t[1];
                return `${r} ${a}`;
            }).join(",");
            const t = `linear-gradient(to right, ${e})`;
            v(t);
        }
    }, [
        strokeColor
    ]);
    module553.useEffect(function() {
        const map = new Map;
        Object.entries(strokeColor).forEach((t)=>{
            const a = module96(t, 2);
            const r = a[0];
            const n = a[1];
            map.set(parseInt(r, 10), n);
        });
        let t = "";
        if (percent < 70) {
            t = map.get(0);
        }
        if (percent >= 70 && percent < 90) {
            t = map.get(70);
        }
        if (percent >= 90) {
            t = map.get(100);
        }
        b(t);
    }, [
        percent,
        strokeColor
    ]);
    return module553.default.createElement("div", {
        className: module2406.progress
    }, module553.default.createElement("div", {
        className: module2406.line_box
    }, module553.default.createElement("div", {
        className: module2406.line_split_items,
        style: {
            background: _
        }
    }), module553.default.createElement("div", {
        className: module2406.line_block_mask_items,
        style: {
            width: `${100 - percent < 0 ? 0 : 100 - percent}%`,
            background: trailColor
        }
    }), module553.default.createElement("div", {
        className: module2406.line_block_items,
        style: {
            background: h
        }
    })), module553.default.createElement("span", {
        style: {
            color
        }
    }, O));
};
