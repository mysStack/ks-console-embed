import "unpacked/module-15.js";
import module_3672 from "unpacked/module-3672.js";
const n = module_3672();
const { on: $on, off, emit, all } = n;
export const useEventEmitter = function() {
    return {
        $on,
        $off: off,
        $emit: emit,
        all
    };
};
