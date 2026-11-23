import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
export const getActiveSeries = function({ xKey, data } = {}) {
    return Object.keys(data[0] || {}).filter((e)=>e !== xKey);
};
