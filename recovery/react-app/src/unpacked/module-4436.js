import module4437 from "unpacked/module-4437.js";
import module4438 from "unpacked/module-4438.js";
import module4439 from "unpacked/module-4439.js";
export default (function e(t, { cleanKeys = [], cleanValues = [], emptyArrays = true, emptyObjects = true, emptyStrings = true, NaNValues = false, nullValues = true, undefinedValues = true } = {}) {
    return module4439(t, (t, i, p)=>{
        if (!cleanKeys.includes(p) && ((Array.isArray(i) || module4438(i)) && (i = e(i, {
            NaNValues,
            cleanKeys,
            cleanValues,
            emptyArrays,
            emptyObjects,
            emptyStrings,
            nullValues,
            undefinedValues
        })), !cleanValues.includes(i) && !(emptyObjects && module4438(i) && module4437(i)) && (!emptyArrays || !Array.isArray(i) || i.length) && !(emptyStrings && i === "" || NaNValues && Number.isNaN(i) || nullValues && i === null || undefinedValues && i === undefined))) {
            if (Array.isArray(t)) {
                return t.push(i);
            }
            return void (t[p] = i);
        }
    });
});
