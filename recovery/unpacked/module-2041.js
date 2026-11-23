import module1478 from "./module-1478.js";
let i;
let a;
let l = [];
function u() {
    if (l.length !== 0) {
        l[l.length - 1].focusContent();
    }
}
module1478.subscribe(function(e, t) {
    if (!(i && a)) {
        (i = document.createElement("div")).setAttribute("data-react-modal-body-trap", "");
        i.style.position = "absolute";
        i.style.opacity = "0";
        i.setAttribute("tabindex", "0");
        i.addEventListener("focus", u);
        (a = i.cloneNode()).addEventListener("focus", u);
    }
    if ((l = t).length > 0) {
        if (document.body.firstChild !== i) {
            document.body.insertBefore(i, document.body.firstChild);
        }
        if (document.body.lastChild !== a) {
            document.body.appendChild(a);
        }
    } else {
        if (i.parentElement) {
            i.parentElement.removeChild(i);
        }
        if (a.parentElement) {
            a.parentElement.removeChild(a);
        }
    }
});
