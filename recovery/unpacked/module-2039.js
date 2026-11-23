let _webpackDefault = {};
let r;
(()=>{
    "use strict";
    const canUseDOM = !(typeof window === "undefined" || !window.document || !window.document.createElement);
    const i = {
        canUseDOM,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: canUseDOM && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: canUseDOM && !!window.screen
    };
    if ((r = i) !== undefined) {
        _webpackDefault = r;
    }
})();
export default _webpackDefault;
