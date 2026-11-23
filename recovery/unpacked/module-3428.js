const indexOf = String.prototype.indexOf;
export default function(e, ...args) {
    return indexOf.call(this, e, args[0]) > -1;
};
