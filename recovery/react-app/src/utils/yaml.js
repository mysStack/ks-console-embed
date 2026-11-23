import "unpacked/module-15.js";
import "unpacked/module-84.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-316.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-160.js";
import "unpacked/module-10.js";
import "unpacked/module-85.js";
import module76 from "unpacked/module-76.js";
import module195 from "unpacked/module-195.js";
import module1270 from "unpacked/module-1270.js";
export const getValue = function(e) {
    if (module76(e)) {
        try {
            return module1270.safeDump(JSON.parse(JSON.stringify(e)), {
                noRefs: true
            });
        } catch (error) {
            console.error(error);
            return JSON.stringify(e, null, 2);
        }
    }
    return String(e);
};
export const getValueObj = function(e) {
    if (!module76(e)) {
        try {
            return module1270.safeLoad(e);
        } catch (e) {}
    }
    return e;
};
export const getAllYAMLValue = function(e) {
    const t = [];
    try {
        module1270.safeLoadAll(e, function(e) {
            t.push(e);
        }, {
            noRefs: true
        });
    } catch (e) {}
    return t;
};
export const objectToYaml = function(e) {
    if ([
        undefined,
        null
    ].includes(e)) {
        return "";
    }
    if (e?.metadata) {
        return getValue(e);
    }
    if (module195(e)) {
        return e;
    }
    return Object.values(e).map((e)=>getValue(e || {})).join("---\n");
};
