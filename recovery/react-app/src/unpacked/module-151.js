import module146 from "unpacked/module-146.js";
import module19 from "unpacked/module-19.js";
import { String } from "unpacked/module-25.js";
export default !!Object.getOwnPropertySymbols && !module19(function() {
    const e = Symbol("symbol detection");
    return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && module146 && module146 < 41;
});
