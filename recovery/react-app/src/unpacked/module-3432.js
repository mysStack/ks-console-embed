export default function() {
    let e;
    let t;
    return typeof Array.from === "function" && (t = Array.from(e = [
        "raz",
        "dwa"
    ]), Boolean(t && t !== e && t[1] === "dwa"));
};
