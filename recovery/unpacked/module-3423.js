import module3424 from "./module-3424.js";
export default function(e) {
    if (typeof e !== "function") {
        return false;
    }
    if (!hasOwnProperty.call(e, "length")) {
        return false;
    }
    try {
        if (typeof e.length !== "number") {
            return false;
        }
        if (typeof e.call !== "function") {
            return false;
        }
        if (typeof e.apply !== "function") {
            return false;
        }
    } catch (e) {
        return false;
    }
    return !module3424(e);
};
