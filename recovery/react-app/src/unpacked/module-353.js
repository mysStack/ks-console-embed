import module33 from "unpacked/module-33.js";
import module127 from "unpacked/module-127.js";
const l = module33 && !function() {
    if (this !== undefined) {
        return true;
    }
    try {
        Object.defineProperty([], "length", {
            writable: false
        }).length = 1;
    } catch (error) {
        return error instanceof TypeError;
    }
}();
export default l ? function(e, t) {
    if (module127(e) && !Object.getOwnPropertyDescriptor(e, "length").writable) {
        throw new TypeError("Cannot set read only .length");
    }
    return e.length = t;
} : function(e, t) {
    return e.length = t;
};
