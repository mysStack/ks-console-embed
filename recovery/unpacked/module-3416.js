export default function() {
    let e;
    return typeof Object.assign === "function" && (Object.assign(e = {
        foo: "raz"
    }, {
        bar: "dwa"
    }, {
        trzy: "trzy"
    }), e.foo + e.bar + e.trzy === "razdwatrzy");
};
