import { configEquals, generateConfig } from "unpacked/module-5744.js";
import dynamic from "unpacked/module-5745.js";
import none from "unpacked/module-5747.js";
import module5748 from "unpacked/module-5748.js";
const a = {
    none,
    static: module5748,
    dynamic
};
const l = [];
export const acquireCharAtlas = function(e, t, i, n) {
    const config = generateConfig(i, n, e, t);
    for(var o = 0; o < l.length; o++){
        const h = (c = l[o]).ownedBy.indexOf(e);
        if (h >= 0) {
            if (configEquals(c.config, config)) {
                return c.atlas;
            }
            if (c.ownedBy.length === 1) {
                l.splice(o, 1);
            } else {
                c.ownedBy.splice(h, 1);
            }
            break;
        }
    }
    for(o = 0; o < l.length; o++){
        var c = l[o];
        if (configEquals(c.config, config)) {
            c.ownedBy.push(e);
            return c.atlas;
        }
    }
    const u = {
        atlas: new a[e.options.experimentalCharAtlas](document, config),
        config,
        ownedBy: [
            e
        ]
    };
    l.push(u);
    return u.atlas;
};
export const removeTerminalFromCache = function(e) {
    for(let t = 0; t < l.length; t++){
        const i = l[t].ownedBy.indexOf(e);
        if (i !== -1) {
            if (l[t].ownedBy.length === 1) {
                l.splice(t, 1);
            } else {
                l[t].ownedBy.splice(i, 1);
            }
            break;
        }
    }
};
