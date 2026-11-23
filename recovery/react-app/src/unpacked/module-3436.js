export default function() {
    return typeof globalThis === "object" && !!globalThis && globalThis.Array === Array;
};
