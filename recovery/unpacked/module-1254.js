export const addDisposableDomListener = function(e, t, i, r) {
    e.addEventListener(t, i, r);
    return {
        dispose: function() {
            if (i) {
                e.removeEventListener(t, i, r);
                e = null;
                i = null;
            }
        }
    };
};
