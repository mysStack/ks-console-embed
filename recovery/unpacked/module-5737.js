export function prepareTextForTerminal(e) {
    return e.replace(/\r?\n/g, "\r");
}
export function bracketTextForPaste(e, t) {
    if (t) {
        return `[200~${e}[201~`;
    }
    return e;
}
export function moveTextAreaUnderMouseCursor(e, t) {
    t.style.position = "fixed";
    t.style.width = "20px";
    t.style.height = "20px";
    t.style.left = `${e.clientX - 10}px`;
    t.style.top = `${e.clientY - 10}px`;
    t.style.zIndex = "1000";
    t.focus();
    setTimeout(()=>{
        t.style.position = null;
        t.style.width = null;
        t.style.height = null;
        t.style.left = null;
        t.style.top = null;
        t.style.zIndex = null;
    }, 200);
}
export const copyHandler = function(e, t, i) {
    if (t.browser.isMSIE) {
        window.clipboardData.setData("Text", i.selectionText);
    } else {
        e.clipboardData.setData("text/plain", i.selectionText);
    }
    e.preventDefault();
};
export const pasteHandler = function(e, t) {
    e.stopPropagation();
    const i = (i)=>{
        i = bracketTextForPaste(i = prepareTextForTerminal(i), t.bracketedPasteMode);
        t.handler(i);
        t.textarea.value = "";
        t.emit("paste", i);
        t.cancel(e);
    };
    if (t.browser.isMSIE) {
        if (window.clipboardData) {
            i(window.clipboardData.getData("Text"));
        }
    } else if (e.clipboardData) {
        i(e.clipboardData.getData("text/plain"));
    }
};
export const rightClickHandler = function(e, t, i, r) {
    moveTextAreaUnderMouseCursor(e, t);
    if (r && !i.isClickInSelection(e)) {
        i.selectWordAtCursor(e);
    }
    t.value = i.selectionText;
    t.select();
};
