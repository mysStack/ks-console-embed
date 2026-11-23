import "unpacked/module-15.js";
import module293 from "unpacked/module-293.js";
export const safeAtob = function(e) {
    if (typeof e !== "string") {
        return "";
    }
    return module293.Base64.decode(e);
};
export const safeBtoa = function(e) {
    if (typeof e !== "string") {
        return "";
    }
    return module293.Base64.encode(e);
};
