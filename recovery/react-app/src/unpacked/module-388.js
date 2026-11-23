import module50 from "unpacked/module-50.js";
export default function() {
    const e = module50(this);
    let t = "";
    if (e.hasIndices) {
        t += "d";
    }
    if (e.global) {
        t += "g";
    }
    if (e.ignoreCase) {
        t += "i";
    }
    if (e.multiline) {
        t += "m";
    }
    if (e.dotAll) {
        t += "s";
    }
    if (e.unicode) {
        t += "u";
    }
    if (e.unicodeSets) {
        t += "v";
    }
    if (e.sticky) {
        t += "y";
    }
    return t;
};
