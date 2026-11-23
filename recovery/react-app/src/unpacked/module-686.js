const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e, t) {
    return e != null && hasOwnProperty.call(e, t);
};
