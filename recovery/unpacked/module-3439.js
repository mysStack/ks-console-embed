export default function(e) {
    return !!e && (typeof e === "symbol" || !!e.constructor && e.constructor.name === "Symbol" && e[e.constructor.toStringTag] === "Symbol");
};
