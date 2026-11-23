const parseFloat = require("unpacked/module-964.js").default.parseFloat;
const trim = require("unpacked/module-1428.js").default.trim;
module.exports = 1 / parseFloat(`${require("unpacked/module-1429.js").default}-0`) != -Infinity ? function(e) {
    const t = trim(String(e), 3);
    const n = parseFloat(t);
    if (n === 0 && t.charAt(0) == "-") {
        return -0;
    }
    return n;
} : parseFloat;
