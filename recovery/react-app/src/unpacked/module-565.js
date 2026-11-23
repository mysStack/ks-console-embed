((t)=>{
    t.IntlPolyfill = require("unpacked/module-566.js");
    require("unpacked/module-567.js").default;
    if (!t.Intl) {
        t.Intl = t.IntlPolyfill;
        t.IntlPolyfill.__applyLocaleSensitivePrototypes();
    }
    module.exports = t.IntlPolyfill;
})(require("unpacked/module-69.js").default);
