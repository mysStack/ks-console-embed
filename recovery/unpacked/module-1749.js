import module1066 from "./module-1066.js";
export default function(e, t) {
    let n;
    const u = Object(module1066(t));
    e = Object(module1066(e));
    Object.getOwnPropertyNames(u).forEach((r)=>{
        try {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        } catch (error) {
            n = error;
        }
    });
    if (typeof Object.getOwnPropertySymbols === "function") {
        Object.getOwnPropertySymbols(u).forEach((r)=>{
            try {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            } catch (error) {
                n = error;
            }
        });
    }
    if (n !== undefined) {
        throw n;
    }
    return e;
};
