import "./module-15.js";
import "./module-11.js";
import "./module-10.js";
import "./module-4.js";
export const getActiveSeries = function({ xKey, data } = {}) {
    return Object.keys(data[0] || {}).filter((e)=>e !== xKey);
};
