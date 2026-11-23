import module1750 from "./module-1750.js";
const o = {
    object: true,
    function: true,
    undefined: true
};
export default function(e) {
    return !!module1750(e) && hasOwnProperty.call(o, typeof e);
};
