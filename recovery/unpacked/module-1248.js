import module812 from "./module-812.js";
import module261 from "./module-261.js";
const { aTypedArrayConstructor, getTypedArrayConstructor } = module812;
export default function(e) {
    return aTypedArrayConstructor(module261(e, getTypedArrayConstructor(e)));
};
