import module2417 from "./module-2417.js";
export const getScrollParents = function e(t, n = []) {
    if (t == null) {
        return [];
    }
    if (t.nodeName === "HTML") {
        return [].concat(module2417(n), [
            window
        ]);
    }
    let r = false;
    const { scrollHeight, clientHeight } = t;
    const l = /(auto|scroll)/;
    const u = window.getComputedStyle(t, false);
    const { overflow, overflowX, overflowY } = u;
    if ((scrollHeight > clientHeight || scrollHeight === 0 && clientHeight === 0) && l.test(overflow + overflowY + overflowX)) {
        r = true;
    }
    return e(t.parentNode, r ? [].concat(module2417(n), [
        t
    ]) : module2417(n));
};
export const fireEvent = function(e, t) {
    let n;
    if (e.ownerDocument) {
        n = e.ownerDocument;
    } else {
        if (e.nodeType !== 9) {
            throw new Error(`Invalid node passed to fireEvent: ${e.id}`);
        }
        n = e;
    }
    if (e.dispatchEvent) {
        let r = "";
        switch(t){
            case "click":
            case "mousedown":
            case "mouseup":
                r = "MouseEvents";
                break;
            case "focus":
            case "change":
            case "blur":
            case "select":
                r = "HTMLEvents";
                break;
            default:
                throw new Error(`fireEvent: Couldn't find an event class for event '${t}'.`);
        }
        const o = n.createEvent(r);
        o.initEvent(t, true, true);
        o.synthetic = true;
        e.dispatchEvent(o, true);
    } else if (e.fireEvent) {
        const i = n.createEventObject();
        i.synthetic = true;
        e.fireEvent(`on${t}`, i);
    }
};
