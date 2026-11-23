export default function(e) {
    if (typeof Symbol !== "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
        return Array.from(e);
    }
};
