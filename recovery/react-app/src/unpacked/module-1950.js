import module812 from "unpacked/module-812.js";
const { aTypedArray, exportTypedArrayMethod } = module812;
exportTypedArrayMethod("reverse", function() {
    let e;
    let length = aTypedArray(this).length;
    for(let n = Math.floor(length / 2), r = 0; r < n;){
        e = this[r];
        this[r++] = this[--length];
        this[length] = e;
    }
    return this;
});
