const r = typeof navigator === "undefined";
const n = r ? "node" : navigator.userAgent;
const s = r ? "node" : navigator.platform;
function o(e, t) {
    return e.indexOf(t) >= 0;
}
export const isFirefox = !!~n.indexOf("Firefox");
export const isSafari = /^((?!chrome|android).)*safari/i.test(n);
export const isMSIE = !!~n.indexOf("MSIE") || !!~n.indexOf("Trident");
export const isMac = o([
    "Macintosh",
    "MacIntel",
    "MacPPC",
    "Mac68K"
], s);
export const isIpad = s === "iPad";
export const isIphone = s === "iPhone";
export const isMSWindows = o([
    "Windows",
    "Win16",
    "Win32",
    "WinCE"
], s);
export const isLinux = s.indexOf("Linux") >= 0;
