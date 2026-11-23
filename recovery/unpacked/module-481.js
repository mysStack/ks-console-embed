"use strict";
const module747 = require("./module-747.js").default;
function o() {}
o._parseEntry = function(e) {
    const t = e.split(" ");
    if (t.length === 6) {
        return {
            interval: module747.parse(e)
        };
    }
    if (t.length > 6) {
        return {
            interval: module747.parse(t.slice(0, 6).join(" ")),
            command: t.slice(6, t.length)
        };
    }
    throw new Error(`Invalid entry: ${e}`);
};
o.parseExpression = function(e, t) {
    return module747.parse(e, t);
};
o.fieldsToExpression = function(e, t) {
    return module747.fieldsToExpression(e, t);
};
o.parseString = function(e) {
    const t = e.split("\n");
    const n = {
        variables: {},
        expressions: [],
        errors: {}
    };
    for(let r = 0, a = t.length; r < a; r++){
        let i = null;
        const l = t[r].trim();
        if (l.length > 0) {
            if (l.match(/^#/)) {
                continue;
            }
            if (i = l.match(/^(.*)=(.*)$/)) {
                n.variables[i[1]] = i[2];
            } else {
                let s = null;
                try {
                    s = o._parseEntry(`0 ${l}`);
                    n.expressions.push(s.interval);
                } catch (error) {
                    n.errors[l] = error;
                }
            }
        }
    }
    return n;
};
o.parseFile = function(e, t) {
    require("./module-752.js").default.readFile(e, function(e, n) {
        if (!e) {
            return t(null, o.parseString(n.toString()));
        }
        t(e);
    });
};
module.exports = o;
