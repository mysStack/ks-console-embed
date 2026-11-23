import "./module-15.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module3699 from "./module-3699.js";
export default function({ content, className, percent }) {
    const nRef = module553.useRef();
    const c = module553.useState(false);
    const s = module96(c, 2);
    const f = s[0];
    const d = s[1];
    const p = module553.useState({
        x: 0,
        y: 0
    });
    const m = module96(p, 2);
    const h = m[0];
    const v = m[1];
    return module553.default.createElement("div", {
        ref: nRef,
        className: module3(module3699.background, className),
        onMouseMove: function(e) {
            if (f) {
                const t = nRef.current.getBoundingClientRect();
                const a = e.clientX - t.x;
                const y = e.clientY - t.y;
                v({
                    x: a + 20,
                    y
                });
            }
        },
        onMouseEnter: function() {
            return d(true);
        },
        onMouseLeave: function() {
            return d(false);
        }
    }, module553.default.createElement("div", {
        className: module3699.percent,
        style: {
            width: `${percent}%`
        }
    }), f && module553.default.createElement("div", {
        style: {
            left: h.x,
            top: h.y
        },
        className: module3699.tooltip
    }, content));
};
