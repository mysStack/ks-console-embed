export default function(e) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(e)) {
        return Array.from(e);
    }
};
