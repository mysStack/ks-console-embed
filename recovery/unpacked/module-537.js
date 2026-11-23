import module19 from "./module-19.js";
export default !module19(function() {
    function e() {}
    e.prototype.constructor = null;
    return Object.getPrototypeOf(new e) !== e.prototype;
});
