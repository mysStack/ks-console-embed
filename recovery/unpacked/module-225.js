import module19 from "./module-19.js";
import { RegExp } from "./module-25.js";
const UNSUPPORTED_Y = module19(function() {
    const e = RegExp("a", "y");
    e.lastIndex = 2;
    return e.exec("abcd") !== null;
});
const MISSED_STICKY = UNSUPPORTED_Y || module19(function() {
    return !RegExp("a", "y").sticky;
});
const BROKEN_CARET = UNSUPPORTED_Y || module19(function() {
    const e = RegExp("^r", "gy");
    e.lastIndex = 2;
    return e.exec("str") !== null;
});
export default {
    BROKEN_CARET,
    MISSED_STICKY,
    UNSUPPORTED_Y
};
