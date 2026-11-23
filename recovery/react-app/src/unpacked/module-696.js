import module296 from "./module-296.js";
import module697 from "./module-697.js";
import module698 from "./module-698.js";
import module699 from "./module-699.js";
import module396 from "./module-396.js";
export default function(e, t, n) {
    const e_constructor = e.constructor;
    switch(t){
        case "[object ArrayBuffer]":
            return module296(e);
        case "[object Boolean]":
        case "[object Date]":
            return new e_constructor(+e);
        case "[object DataView]":
            return module697(e, n);
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
            return module396(e, n);
        case "[object Map]":
        case "[object Set]":
            return new e_constructor;
        case "[object Number]":
        case "[object String]":
            return new e_constructor(e);
        case "[object RegExp]":
            return module698(e);
        case "[object Symbol]":
            return module699(e);
    }
};
