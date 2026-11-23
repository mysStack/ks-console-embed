const toString = {}.toString;
export default function(e) {
    return toString.call(e).slice(8, -1);
};
