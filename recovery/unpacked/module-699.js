import module154 from "./module-154.js";
const o = module154 ? module154.prototype : undefined;
const a = o ? o.valueOf : undefined;
export default function(e) {
    if (a) {
        return Object(a.call(e));
    }
    return {};
};
