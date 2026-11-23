const r = typeof document === "object" && document.all;
export default r === undefined && r !== undefined ? function(e) {
    return typeof e === "function" || e === r;
} : function(e) {
    return typeof e === "function";
};
