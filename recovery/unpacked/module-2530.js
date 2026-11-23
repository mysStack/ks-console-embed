import module798 from "./module-798.js";
(function(e) {
    module798(e);
    return d.test(e);
});
const i = /([01][0-9]|2[0-3])/;
const a = /[0-5][0-9]/;
const l = new RegExp(`[-+]${i.source}:${a.source}`);
const u = new RegExp(`([zZ]|${l.source})`);
const s = new RegExp(`${i.source}:${a.source}:${/([0-5][0-9]|60)/.source}${/(\.[0-9]+)?/.source}`);
const c = new RegExp(`${/[0-9]{4}/.source}-${/(0[1-9]|1[0-2])/.source}-${/([12]\d|0[1-9]|3[01])/.source}`);
const f = new RegExp(`${s.source}${u.source}`);
var d = new RegExp(`^${c.source}[ tT]${f.source}\$`);
exports.default;
export default exports.default;
