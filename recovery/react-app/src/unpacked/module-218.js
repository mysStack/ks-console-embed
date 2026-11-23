"use strict";
const propertyIsEnumerable = {}.propertyIsEnumerable;
const a = Object.getOwnPropertyDescriptor && !propertyIsEnumerable.call({
    1: 2
}, 1);
exports.f = a ? function(e) {
    const t = Object.getOwnPropertyDescriptor(this, e);
    return !!t && t.enumerable;
} : propertyIsEnumerable;
