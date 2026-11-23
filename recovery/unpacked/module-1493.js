import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-73.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-137.js";
import "./module-7.js";
import "./module-31.js";
import "./module-45.js";
import "./module-28.js";
import "./module-245.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import module26 from "./module-26.js";
import module2106 from "./module-2106.js";
import module1491 from "./module-1491.js";
import "./module-2107.js";
function i(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
module2106.languages.promql = module1491;
export const getCaretCharacterOffsetWithin = function(e) {
    let t = 0;
    const a = e.ownerDocument || e.document;
    const r = a.defaultView || a.parentWindow;
    if (r.getSelection !== undefined) {
        if (r.getSelection().rangeCount > 0) {
            const n = r.getSelection().getRangeAt(0);
            const l = n.cloneRange();
            l.selectNodeContents(e);
            l.setEnd(n.endContainer, n.endOffset);
            t = l.toString().length;
        }
    } else if (a.selection.type !== "Control") {
        const u = a.selection.createRange();
        const o = a.body.createTextRange();
        o.moveToElementText(e);
        o.setEndPoint("EndToEnd", u);
        t = o.text.length;
    }
    return t;
};
export const setCaretPosition = function(e, t) {
    const a = document.createRange();
    const r = window.getSelection();
    const n = [];
    (function e(t, a) {
        if (t && t.nodeType === 3) {
            a.push(t);
        }
        for(let r = t.childNodes, n = 0; n < r.length; n++){
            e(r[n], a);
        }
    })(e, n);
    for(var u = t, o = 0; u > 0;){
        u -= module26(n, `[${o}].length`, 0);
        o++;
    }
    const i = n[o - 1];
    if (i != null) {
        a.setStart(i, u + i.length);
        a.collapse(true);
        r.removeAllRanges();
        r.addRange(a);
    }
};
export const PUNCTUATION_MAP = {
    "(": ")",
    "[": "]",
    "{": "}",
    '"': '"',
    "'": "'"
};
export const OPERATORS = [
    "(",
    "[",
    "{",
    '"',
    "'",
    '""',
    "''",
    "=",
    ","
];
export const highlightPromql = function(e) {
    return module2106.highlight(e, module2106.languages.promql, "promql");
};
export const getTokenContext = function(e, t) {
    const a = [];
    for(let r = t; r.parentNode && e !== r.parentNode;){
        a.push(r.parentNode);
        r = r.parentNode;
    }
    const type = a.reverse().map((e)=>e.className && e.className.split(" ")[1] || "").join(".");
    const o = {};
    const className = t.parentNode.className;
    if (className.indexOf("label-key") > -1) {
        o.label = "";
    } else if (className.indexOf("label-value") > -1) {
        o.label = module26(t, "parentNode.previousSibling.previousSibling.textContent", "");
        o.value = "";
    } else {
        if (className.indexOf("context-labels") > -1) {
            if (t.previousSibling) {
                if (t.previousSibling.className.indexOf("label-key") > -1) {
                    o.label = t.previousSibling.textContent.replace(/{,/g, "");
                    o.value = "";
                } else if (t.previousSibling.className.indexOf("label-value") > -1) {
                    o.label = t.textContent.replace(/{,/g, "");
                }
            } else {
                o.label = "";
            }
        }
    }
    return {
        type,
        ...o
    };
};
