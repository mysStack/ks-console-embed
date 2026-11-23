import module125 from "./module-125.js";
export default function() {
    const e = arguments;
    const t = module125(e[0]);
    if (e.length < 3) {
        return t;
    }
    return t.replace(e[1], e[2]);
};
