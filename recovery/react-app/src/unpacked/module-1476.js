export default function(e) {
    return Array.prototype.slice.call(e.querySelectorAll("*"), 0).filter(i);
};
var r = /input|select|textarea|button|object/;
function o(e) {
    const t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
    if (t && !e.innerHTML) {
        return true;
    }
    const n = window.getComputedStyle(e);
    if (t) {
        return n.getPropertyValue("overflow") !== "visible" || e.scrollWidth <= 0 && e.scrollHeight <= 0;
    }
    return n.getPropertyValue("display") == "none";
}
function i(e) {
    let t = e.getAttribute("tabindex");
    if (t === null) {
        t = undefined;
    }
    const n = isNaN(t);
    return (n || t >= 0) && ((e, t)=>{
        const n = e.nodeName.toLowerCase();
        return (r.test(n) && !e.disabled || n === "a" && e.href || t) && ((e)=>{
            for(let t = e; t && t !== document.body;){
                if (o(t)) {
                    return false;
                }
                t = t.parentNode;
            }
            return true;
        })(e);
    })(e, !n);
}
