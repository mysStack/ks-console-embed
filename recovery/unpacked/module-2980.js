import module163 from "./module-163.js";
export default function(e) {
    if (typeof e === "number") {
        return e;
    }
    if (module163(e)) {
        return NaN;
    }
    return +e;
};
