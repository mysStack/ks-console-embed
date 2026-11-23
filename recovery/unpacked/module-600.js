import module230 from "./module-230.js";
export default function(e, t) {
    const __data__ = this.__data__;
    const o = module230(__data__, e);
    if (o < 0) {
        ++this.size;
        __data__.push([
            e,
            t
        ]);
    } else {
        __data__[o][1] = t;
    }
    return this;
};
