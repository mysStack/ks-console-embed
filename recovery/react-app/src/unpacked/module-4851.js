export default function(e, t) {
    for(var n = e.length, r = 0; n--;){
        if (e[n] === t) {
            ++r;
        }
    }
    return r;
};
