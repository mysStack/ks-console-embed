import module2131 from "./module-2131.js";
export default function(e, t) {
    if (e.classList) {
        e.classList.add(t);
    } else {
        if (!module2131(e, t)) {
            if (typeof e.className === "string") {
                e.className = `${e.className} ${t}`;
            } else {
                e.setAttribute("class", `${e.className && e.className.baseVal || ""} ${t}`);
            }
        }
    }
};
