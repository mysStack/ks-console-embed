import module1076 from "./module-1076.js";
export default function(e) {
    return !module1076(e) && isFinite(e) && Math.floor(e) === e;
};
