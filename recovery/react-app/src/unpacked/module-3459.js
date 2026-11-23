const forEach = Array.prototype.forEach;
export default function(e) {
    const t = Object.create(null);
    forEach.call(arguments, function(e) {
        t[e] = true;
    });
    return t;
};
