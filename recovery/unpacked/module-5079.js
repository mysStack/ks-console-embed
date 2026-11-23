import "./module-15.js";
import "./module-29.js";
import module96 from "./module-96.js";
import "./module-4.js";
import module960 from "./module-960.js";
import module5080 from "./module-5080.js";
import { compareVersion } from "./module-52.js";
export const getPipelinesStore = function(e) {
    return [
        [
            function(e) {
                return compareVersion(e, "3.4.0") < 0;
            },
            module5080
        ],
        [
            function() {
                return true;
            },
            module960
        ]
    ].find((t)=>module96(t, 1)[0](e))[1];
};
