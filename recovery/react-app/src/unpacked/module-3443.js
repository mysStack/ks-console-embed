const toString = Object.prototype.toString;
const o = toString.call(function() {
    return arguments;
}());
export default function(e) {
    return toString.call(e) === o;
};
