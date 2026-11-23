import module986 from "./module-986.js";
export default function(e) {
    let t;
    if (typeof e === "function") {
        return {
            set: e,
            get: e
        };
    }
    t = {
        get: module986(e.get)
    };
    if (e.set !== undefined) {
        return t.set = module986(e.set), e.delete && (t.delete = module986(e.delete)), e.clear && (t.clear = module986(e.clear)), t;
    }
    return t.set = t.get, t;
};
