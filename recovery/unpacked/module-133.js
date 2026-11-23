import module78 from "./module-78.js";
const o = (size)=>({
        size,
        has: function() {
            return false;
        },
        keys: function() {
            return {
                next: function() {
                    return {
                        done: true
                    };
                }
            };
        }
    });
export default function(e) {
    const t = module78("Set");
    try {
        (new t)[e](o(0));
        try {
            (new t)[e](o(-1));
            return false;
        } catch (e) {
            return true;
        }
    } catch (e) {
        return false;
    }
};
