import module2038 from "./module-2038.js";
import module1267 from "./module-1267.js";
export const setElement = function(e) {
    let t = e;
    if (typeof t === "string" && module1267.canUseDOM) {
        const n = document.querySelectorAll(t);
        assertNodeList(n, t);
        t = "length" in n ? n[0] : n;
    }
    return a = t || a;
};
export const hide = function(e) {
    if (validateElement(e)) {
        (e || a).setAttribute("aria-hidden", "true");
    }
};
export const show = function(e) {
    if (validateElement(e)) {
        (e || a).removeAttribute("aria-hidden");
    }
};
export const documentNotReadyOrSSRTesting = function() {
    a = null;
};
export const resetForTesting = function() {
    a = null;
};
var a = null;
export function assertNodeList(e, t) {
    if (!e || !e.length) {
        throw new Error(`react-modal: No elements were found for selector ${t}.`);
    }
}
export function validateElement(e) {
    return !(!e && !a && (module2038(false, [
        "react-modal: App element is not defined.",
        "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
        "This is needed so screen readers don't see main content",
        "when modal is opened. It is not recommended, but you can opt-out",
        "by setting `ariaHideApp={false}`."
    ].join(" ")), 1));
}
