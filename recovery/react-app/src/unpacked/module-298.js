const module391 = require("./module-391.js");
const o = exports && !exports.nodeType && exports;
const a = o && typeof module === "object" && module && !module.nodeType && module;
const i = a && a.exports === o && module391.process;
const l = (()=>{
    try {
        return a && a.require && a.require("util").types || i && i.binding && i.binding("util");
    } catch (e) {}
})();
module.exports = l;
