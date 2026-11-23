import module19 from "./module-19.js";
export default !module19(function() {
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});
