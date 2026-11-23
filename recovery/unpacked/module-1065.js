import module8 from "./module-8.js";
import module19 from "./module-19.js";
import { f as getOwnPropertyNames } from "./module-350.js";
module8({
    target: "Object",
    stat: true,
    forced: module19(function() {
        return !Object.getOwnPropertyNames(1);
    })
}, {
    getOwnPropertyNames
});
