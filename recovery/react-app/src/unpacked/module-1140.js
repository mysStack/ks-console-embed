import { a as a_1 } from "unpacked/module-1241.js";
import { b } from "unpacked/module-1242.js";
function i(e) {
    return function() {
        const ownerDocument = this.ownerDocument;
        const namespaceURI = this.namespaceURI;
        if (namespaceURI === b && ownerDocument.documentElement.namespaceURI === b) {
            return ownerDocument.createElement(e);
        }
        return ownerDocument.createElementNS(namespaceURI, e);
    };
}
function _a(e) {
    return function() {
        return this.ownerDocument.createElementNS(e.space, e.local);
    };
}
export const a = function(e) {
    const t = a_1(e);
    return (t.local ? _a : i)(t);
};
