const r = /\s/;
export const a = function(e) {
    for(var t = e.length; t-- && r.test(e.charAt(t)););
    return t;
};
