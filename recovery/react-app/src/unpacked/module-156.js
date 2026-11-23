import module163 from "./module-163.js";
export default function(e) {
    if (typeof e === "string" || module163(e)) {
        return e;
    }
    const t = `${e}`;
    if (t == "0" && 1 / e == -Infinity) {
        return "-0";
    }
    return t;
};
