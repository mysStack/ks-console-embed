import "./module-15.js";
import "./module-29.js";
import module96 from "./module-96.js";
import "./module-4.js";
import { compareVersion } from "./module-52.js";
import module3229 from "./module-3229.js";
import module3260 from "./module-3260.js";
export const getStepsEditor = function(e) {
    return [
        [
            function(e) {
                return compareVersion(e, "3.4.0") < 0;
            },
            module3229
        ],
        [
            function() {
                return true;
            },
            module3260
        ]
    ].find((t)=>module96(t, 1)[0](e))[1];
};
export default module3260;
