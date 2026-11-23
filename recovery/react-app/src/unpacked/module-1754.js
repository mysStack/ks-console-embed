function n(e) {
    return !!e && (typeof e === "object" || typeof e === "function") && typeof e.then === "function";
}
export default n;
