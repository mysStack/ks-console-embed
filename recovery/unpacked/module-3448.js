export default function(e) {
    if (e) {
        return function(t) {
            let n = String(t[0]);
            let r = 0;
            for(let o = e; --o;){
                n += `${t[++r]}`;
            }
            return n;
        };
    }
    return function() {
        return "";
    };
};
