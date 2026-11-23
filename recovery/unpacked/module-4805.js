import module25 from "./module-25.js";
import module19 from "./module-19.js";
import module271 from "./module-271.js";
import module812 from "./module-812.js";
const module812_NATIVE_ARRAY_BUFFER_VIEWS = module812.NATIVE_ARRAY_BUFFER_VIEWS;
const { ArrayBuffer, Int8Array } = module25;
export default !module812_NATIVE_ARRAY_BUFFER_VIEWS || !module19(function() {
    Int8Array(1);
}) || !module19(function() {
    new Int8Array(-1);
}) || !module271(function(e) {
    new Int8Array;
    new Int8Array(null);
    new Int8Array(1.5);
    new Int8Array(e);
}, true) || module19(function() {
    return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});
