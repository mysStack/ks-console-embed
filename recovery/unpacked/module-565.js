((t)=>{
    t.IntlPolyfill = require("./module-566.js");
    require("./module-567.js").default;
    if (!t.Intl) {
        t.Intl = t.IntlPolyfill;
        t.IntlPolyfill.__applyLocaleSensitivePrototypes();
    }
    module.exports = t.IntlPolyfill;
})(require("./module-69.js").default);
