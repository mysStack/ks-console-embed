import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-87.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-140.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-251.js";
import "unpacked/module-252.js";
import "unpacked/module-193.js";
import module194 from "unpacked/module-194.js";
export const createCenterWindowOpt = function({ width = 800, height = 500, ...rest }) {
    const window_screen = window.screen;
    const { width: width_1, height: height_1 } = window_screen;
    const p = ((window_screen.availWidth || width_1) - width) / 2;
    const h = ((window_screen.availHeight || height_1) - height) / 2;
    const v = {
        left: p > 0 ? p : 0,
        top: h > 0 ? h : 0,
        width,
        height,
        ...rest
    };
    return Object.entries(v).reduce((acc, entry)=>{
        const n = module96(entry, 2);
        const r = n[0];
        const a = n[1];
        return `${acc},${r}=${a}`;
    }, "");
};
export const getScrollTop = function() {
    if (window.pageYOffset !== undefined) {
        return window.pageYOffset;
    }
    return (document.documentElement || document.body.parentNode || document.body).scrollTop;
};
function s(e, t) {
    const n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        n.push.apply(n, r);
    }
    return n;
}
export const hasClass = function(e, t) {
    if (e.classList) {
        return e.classList.contains(t);
    }
    return new RegExp(`(^| )${t}( |\$)`, "gi").test(e.className);
};
export const addClass = function(e, t) {
    if (!hasClass(e, t)) {
        if (e.classList) {
            e.classList.add(t);
        } else {
            e.className += ` ${t}`;
        }
    }
};
export const removeClass = function(e, t) {
    if (e.classList) {
        e.classList.remove(t);
    } else {
        e.className = e.className.replace(new RegExp(`(^|\\b)${t.split(" ").join("|")}(\\b|\$)`, "gi"), " ");
    }
};
export const findParent = function e(t, n) {
    if (t && t.parentNode) {
        if (hasClass(t.parentNode, n)) {
            return t.parentNode;
        }
        return e(t.parentNode, n);
    }
    return null;
};
export const addFullScreenChangeEvents = function(e) {
    if (module194(e)) {
        document.addEventListener("fullscreenchange", e);
        document.addEventListener("mozfullscreenchange", e);
        document.addEventListener("webkitfullscreenchange", e);
        document.addEventListener("msfullscreenchange", e);
    }
};
export const removeFullScreenChangeEvents = function(e) {
    if (module194(e)) {
        document.removeEventListener("fullscreenchange", e);
        document.removeEventListener("mozfullscreenchange", e);
        document.removeEventListener("webkitfullscreenchange", e);
        document.removeEventListener("msfullscreenchange", e);
    }
};
export const exitFullScreen = function() {
    (document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen).call(document);
};
export const enterFullScreen = function(e) {
    (e.requestFullscreen || e.webkitRequestFullscreen || e.mozRequestFullScreen).call(e);
};
export const copyToClipboard = function(e) {
    const textareaElement = document.createElement("textarea");
    textareaElement.value = e;
    textareaElement.setAttribute("readonly", "");
    textareaElement.style.position = "absolute";
    textareaElement.style.left = "-9999px";
    document.body.appendChild(textareaElement);
    const n = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
    textareaElement.select();
    document.execCommand("copy");
    document.body.removeChild(textareaElement);
    if (n) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(n);
    }
};
