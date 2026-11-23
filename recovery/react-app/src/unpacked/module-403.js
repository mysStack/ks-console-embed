const n = /\s/;
export default function(e) {
    for(var t = e.length; t-- && n.test(e.charAt(t)););
    return t;
};
