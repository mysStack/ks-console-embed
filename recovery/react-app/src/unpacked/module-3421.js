import module1018 from "unpacked/module-1018.js";
const o = {
    function: true,
    object: true
};
export default function(e) {
    return module1018(e) && o[typeof e] || false;
};
