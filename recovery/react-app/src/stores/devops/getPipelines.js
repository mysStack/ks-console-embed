import "unpacked/module-15.js";
import "unpacked/module-29.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-4.js";
import module960 from "stores/devops/pipelines";
import module5080 from "stores/devops/pipelinesOld";
import { compareVersion } from "utils/index";
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
