import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-436.js";
import "unpacked/module-319.js";
import { getLocalTime } from "utils/index";
export const getMinutes = function(e) {
    const t = e.slice(-1);
    const a = parseFloat(e);
    switch(t){
        default:
            return a / 60;
        case "m":
            return a;
        case "h":
            return 60 * a;
        case "d":
            return 24 * a * 60;
    }
};
export const getStep = function(e, t) {
    return `${parseInt(getMinutes(e) / t, 10)}m`;
};
export const getTimes = function(e, t) {
    return Math.floor(getMinutes(e) / getMinutes(t));
};
export const getTimeStr = function(e) {
    let t = Math.round(parseFloat(e) / 60);
    if (t < 60) {
        return `${t}m`;
    }
    if ((t = Math.round(t / 60)) < 24) {
        return `${t}h`;
    }
    return `${Math.round(t / 24)}d`;
};
export const getLastTimeStr = function(e, t) {
    const a = e.slice(-1);
    const r = `${parseFloat(e) * t}${a}`;
    const n = 60 * getMinutes(r);
    return getTimeStr(n);
};
export const getTimeLabel = function(e) {
    const a = e.slice(-1).toUpperCase();
    return t(`TIME_${a}`, {
        num: parseInt(e, 10)
    });
};
export const getTimeOptions = function(e) {
    return e.map((e)=>({
            label: getTimeLabel(e),
            value: e
        }));
};
export const getDateStr = function(e) {
    const t = getLocalTime(1000 * e);
    return `${t.format("YYYY-MM-DD HH:mm:ss")}`;
};
