(function(e = {}, t) {
    for(const n in t){
        if (e[n] === undefined) {
            e[n] = t[n];
        }
    }
    return e;
});
export default exports.default;
