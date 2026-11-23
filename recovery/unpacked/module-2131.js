export default function(e, t) {
    if (e.classList) {
        return !!t && e.classList.contains(t);
    }
    return ` ${e.className.baseVal || e.className} `.indexOf(` ${t} `) !== -1;
};
