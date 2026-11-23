export const a = function(e) {
    return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
};
