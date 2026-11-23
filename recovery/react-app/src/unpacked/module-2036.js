import module1476 from "unpacked/module-1476.js";
export const markForFocusLater = function() {
    i.push(document.activeElement);
};
export const returnFocus = function() {
    let e = null;
    try {
        return void (i.length !== 0 && (e = i.pop()).focus());
    } catch (t) {
        console.warn([
            "You tried to return focus to",
            e,
            "but it is not in the DOM anymore"
        ].join(" "));
    }
};
export const popWithoutFocus = function() {
    if (i.length > 0) {
        i.pop();
    }
};
export const setupScopedFocus = function(e) {
    a = e;
    if (window.addEventListener) {
        window.addEventListener("blur", handleBlur, false);
        document.addEventListener("focus", handleFocus, true);
    } else {
        window.attachEvent("onBlur", handleBlur);
        document.attachEvent("onFocus", handleFocus);
    }
};
export const teardownScopedFocus = function() {
    a = null;
    if (window.addEventListener) {
        window.removeEventListener("blur", handleBlur);
        document.removeEventListener("focus", handleFocus);
    } else {
        window.detachEvent("onBlur", handleBlur);
        document.detachEvent("onFocus", handleFocus);
    }
};
var i = [];
var a = null;
var l = false;
export function handleBlur() {
    l = true;
}
export function handleFocus() {
    if (l) {
        l = false;
        if (!a) {
            return;
        }
        setTimeout(()=>{
            if (!a.contains(document.activeElement)) {
                (module1476(a)[0] || a).focus();
            }
        }, 0);
    }
}
