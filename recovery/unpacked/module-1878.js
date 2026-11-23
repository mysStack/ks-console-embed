const module1139 = require("./module-1139.js").default;
const module964 = require("./module-964.js").default;
const i = module964["__core-js_shared__"] || (module964["__core-js_shared__"] = {});
(module.exports = function(e, t) {
    return i[e] || (i[e] = t !== undefined ? t : {});
})("versions", []).push({
    version: module1139.version,
    mode: require("./module-4459.js").default ? "pure" : "global",
    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
});
