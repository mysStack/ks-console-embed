import module1753 from "./module-1753.js";
export default function(e) {
    try {
        if (e && module1753(e.toString)) {
            return e.toString();
        }
        return String(e);
    } catch (e) {
        throw new TypeError("Passed argument cannot be stringifed");
    }
};
