import module1753 from "unpacked/module-1753.js";
export default function(e) {
    try {
        if (e && module1753(e.toString)) {
            return e.toString();
        }
        return String(e);
    } catch (e) {
        return "<Non-coercible to string value>";
    }
};
