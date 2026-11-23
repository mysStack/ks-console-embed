import module310 from "unpacked/module-310.js";
const replace = String.prototype.replace;
const o = /%20/g;
const i = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
};
export default module310.assign({
    default: i.RFC3986,
    formatters: {
        RFC1738: function(e) {
            return replace.call(e, o, "+");
        },
        RFC3986: function(e) {
            return String(e);
        }
    }
}, i);
