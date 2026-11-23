import module1021 from "unpacked/module-1021.js";
import module1751 from "unpacked/module-1751.js";
const i = Object.create(null);
export default function(e) {
    return Object.defineProperties(e, {
        for: module1021(function(t) {
            if (i[t]) {
                return i[t];
            }
            return i[t] = e(String(t));
        }),
        keyFor: module1021(function(e) {
            let t;
            module1751(e);
            for(t in i){
                if (i[t] === e) {
                    return t;
                }
            }
        })
    });
};
