const n = typeof window !== "undefined" && window.Math == Math ? window : typeof self !== "undefined" && self.Math == Math ? self : Function("return this")();
export default n;
if (typeof __g === "number") {
    __g = n;
}
