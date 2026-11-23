import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-18.js";
import "unpacked/module-27.js";
import "unpacked/module-24.js";
import "unpacked/module-62.js";
import "unpacked/module-4.js";
import module96 from "utils/babel-helpers/slicedToArray";
export const translateTimeAlias = function(e) {
    try {
        const n = e.match(/^(\d+)([a-zA-Z])$/);
        const r = module96(n, 3);
        const count = r[1];
        const i = r[2];
        return t(timeAlias2CompleteTimeMap[i], {
            count
        });
    } catch (error) {
        console.error(error);
        return "invalid timeAlias format";
    }
};
export const tranlateTimeUnitAlias = function(e) {
    return t(timeUnitAlias2CompleteTimeMap[e]) || e;
};
export const getMsFromTimeAlias = function(e) {
    const t = splitTimeAlias(e);
    const { count, unit } = t;
    return count * timeUnitAlias2MsMap[unit];
};
export const getDurationSeconds = function(e) {
    const { s = 0, m = 0, h = 0, d = 0, w } = parserDuration(e);
    return s + 60 * m + 3600 * h + 86400 * d + 604800 * (w === undefined ? 0 : w);
};
export const formatTimeToHourMinuteSecond = function(e) {
    const t = Math.floor(e / 3600);
    const n = Math.floor(e % 3600 / 60);
    const r = Math.floor(e % 3600 % 60);
    return `${t < 10 ? `0${t}` : t}:${n < 10 ? `0${n}` : n}:${r < 10 ? `0${r}` : r}`;
};
export const getWeekList = function() {
    return f.map((e)=>({
            label: t(e.label),
            value: e.value
        }));
};
export const getWeekLabelList = function(e) {
    return e.map((e)=>t(f.find((t)=>t.value === e).label));
};
export const getDayOfMonthLabelList = function(e) {
    return e.map((day)=>{
        if (day === "L") {
            return t("LAST_DAY");
        }
        return t.html("SOME_DAY", {
            day
        });
    });
};
export var timeUnitAlias2MsMap = {
    s: 1000,
    m: 60000,
    h: 3600000,
    d: 86400000,
    w: 604800000
};
export var timeUnitAlias2CompleteTimeMap = {
    s: "SECONDS",
    m: "MINUTES",
    h: "HOURS",
    d: "DAYS",
    w: "WEEKS"
};
export var timeAlias2CompleteTimeMap = {
    s: "SECOND_TIME",
    m: "MINUTE_TIME",
    h: "HOUR_TIME",
    d: "DAY_TIME",
    w: "WEEK_TIME"
};
export function splitTimeAlias(e) {
    try {
        const t = e.match(/^(\d+)([a-zA-Z])$/);
        const n = module96(t, 3);
        return {
            count: n[1],
            unit: n[2]
        };
    } catch (e) {
        return {
            count: 0,
            unit: "s"
        };
    }
}
export function parserDuration(e) {
    const t = {};
    const n = /(\d+)([a-zA-Z])/g;
    for(let r = n.exec(e); r;){
        t[r[2]] = Number(r[1]);
        r = n.exec(e);
    }
    return t;
}
var f = [
    {
        label: "MONDAY",
        value: 1
    },
    {
        label: "TUESDAY",
        value: 2
    },
    {
        label: "WEDNESDAY",
        value: 3
    },
    {
        label: "THURSDAY",
        value: 4
    },
    {
        label: "FRIDAY",
        value: 5
    },
    {
        label: "SATURDAY",
        value: 6
    },
    {
        label: "SUNDAY",
        value: 0
    }
];
export const getDateStr = function(e) {
    return `${e.format(t("MMMM Do YYYY"))} ${e.format("HH:mm:ss")}`;
};
export const timeUnit = [
    {
        key: "d",
        label: "DAY",
        value: 86400,
        unit: "d"
    },
    {
        key: "h",
        label: "HOURS",
        value: 3600,
        unit: "h"
    },
    {
        key: "m",
        label: "MINUTES",
        value: 60,
        unit: "m"
    },
    {
        key: "s",
        label: "SECOND",
        value: 1,
        unit: "s"
    }
];
