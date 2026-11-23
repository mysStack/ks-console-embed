import module232 from "./module-232.js";
export default function(e) {
    const t = module232(this, e).delete(e);
    this.size -= t ? 1 : 0;
    return t;
};
