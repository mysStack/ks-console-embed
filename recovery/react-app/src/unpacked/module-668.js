import module19 from "unpacked/module-19.js";
export default module19(function() {
    if (typeof ArrayBuffer === "function") {
        const e = new ArrayBuffer(8);
        if (Object.isExtensible(e)) {
            Object.defineProperty(e, "a", {
                value: 8
            });
        }
    }
});
