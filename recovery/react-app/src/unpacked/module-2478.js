import module883 from "./module-883.js";
export default function(e, t) {
    t = module883(t, i);
    return typeof e === "string" && a[t.hourFormat][t.mode].test(e);
};
var i = {
    hourFormat: "hour24",
    mode: "default"
};
var a = {
    hour24: {
        default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
        withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
    },
    hour12: {
        default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
        withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
    }
};

