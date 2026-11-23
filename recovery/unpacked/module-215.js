export default function(e) {
    const t = e && e.constructor;
    return e === (typeof t === "function" && t.prototype || Object.prototype);
};
