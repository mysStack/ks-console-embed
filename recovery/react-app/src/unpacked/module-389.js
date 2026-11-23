import { f } from "unpacked/module-70.js";
export default function(e, t, n) {
    if (!(n in e)) {
        f(e, n, {
            configurable: true,
            get: function() {
                return t[n];
            },
            set: function(e) {
                t[n] = e;
            }
        });
    }
};
