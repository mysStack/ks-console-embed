import module54 from "./module-54.js";
export default Number.isInteger || function(e) {
    return !module54(e) && isFinite(e) && Math.floor(e) === e;
};
