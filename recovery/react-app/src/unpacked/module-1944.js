"use strict";
const module25 = require("unpacked/module-25.js");
const module19 = require("unpacked/module-19.js").default;
const module21 = require("unpacked/module-21.js").default;
const module812 = require("unpacked/module-812.js").default;
const module30 = require("unpacked/module-30.js").default;
const u = require("unpacked/module-40.js").default("iterator");
const module25_Uint8Array = module25.Uint8Array;
const c = module21(module30.values);
const f = module21(module30.keys);
const d = module21(module30.entries);
const { aTypedArray, exportTypedArrayMethod } = module812;
const v = module25_Uint8Array && module25_Uint8Array.prototype;
const g = !module19(function() {
    v[u].call([
        1
    ]);
});
const y = !!v && v.values && v[u] === v.values && v.values.name === "values";
const m = function() {
    return c(aTypedArray(this));
};
exportTypedArrayMethod("entries", function() {
    return d(aTypedArray(this));
}, g);
exportTypedArrayMethod("keys", function() {
    return f(aTypedArray(this));
}, g);
exportTypedArrayMethod("values", m, g || !y, {
    name: "values"
});
exportTypedArrayMethod(u, m, g || !y, {
    name: "values"
});
