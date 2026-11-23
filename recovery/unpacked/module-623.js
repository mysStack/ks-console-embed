import module232 from "./module-232.js";
export default function(e, t) {
    const n = module232(this, e);
    const n_size = n.size;
    n.set(e, t);
    this.size += n.size == n_size ? 0 : 1;
    return this;
};
