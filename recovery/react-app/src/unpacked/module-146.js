import module25 from "unpacked/module-25.js";
import module117 from "unpacked/module-117.js";
let r;
let o;
const { process, Deno } = module25;
const u = process && process.versions || Deno && Deno.version;
const c = u && u.v8;
if (c) {
    o = (r = c.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1]);
}
if (!o && module117 && (!(r = module117.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = module117.match(/Chrome\/(\d+)/))) {
    o = +r[1];
}
export default o;
