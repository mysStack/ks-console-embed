export default function(e) {
    const __data__ = this.__data__;
    const n = __data__.delete(e);
    this.size = __data__.size;
    return n;
};
