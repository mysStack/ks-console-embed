function r(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function o(e, t, n) {
    if (t) {
        r(e.prototype, t);
    }
    if (n) {
        r(e, n);
    }
    Object.defineProperty(e, "prototype", {
        writable: false
    });
    return e;
}
function i(e, Zone) {
    e.prototype = Object.create(Zone.prototype);
    e.prototype.constructor = e;
    s(e, Zone);
}
function l(e) {
    return (l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function s(e, t) {
    return (s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
function u() {
    if (typeof Reflect === "undefined" || !Reflect.construct) {
        return false;
    }
    if (Reflect.construct.sham) {
        return false;
    }
    if (typeof Proxy === "function") {
        return true;
    }
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function c(e, t, n) {
    return (c = u() ? Reflect.construct.bind() : function(e, t, n) {
        const r = [
            null
        ];
        r.push.apply(r, t);
        const o = new (Function.bind.apply(e, r));
        if (n) {
            s(o, n.prototype);
        }
        return o;
    }).apply(null, arguments);
}
function f(e) {
    const t = typeof Map === "function" ? new Map : undefined;
    return (f = function(e) {
        if (e === null || (n = e, Function.toString.call(n).indexOf("[native code]") === -1)) {
            return e;
        }
        var n;
        if (typeof e !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (t !== undefined) {
            if (t.has(e)) {
                return t.get(e);
            }
            t.set(e, r);
        }
        function r() {
            return c(e, arguments, l(this).constructor);
        }
        r.prototype = Object.create(e.prototype, {
            constructor: {
                value: r,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return s(r, e);
    })(e);
}
function p(e, t) {
    if (t == null || t > e.length) {
        t = e.length;
    }
    for(var n = 0, r = new Array(t); n < t; n++){
        r[n] = e[n];
    }
    return r;
}
function h(e, t) {
    let n = typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (n) {
        return (n = n.call(e)).next.bind(n);
    }
    if (Array.isArray(e) || (n = ((e, t)=>{
        if (e) {
            if (typeof e === "string") {
                return p(e, t);
            }
            let n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) {
                n = e.constructor.name;
            }
            if (n === "Map" || n === "Set") {
                return Array.from(e);
            }
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                return p(e, t);
            }
            return undefined;
        }
    })(e)) || t && e && typeof e.length === "number") {
        if (n) {
            e = n;
        }
        let r = 0;
        return function() {
            if (r >= e.length) {
                return {
                    done: true
                };
            }
            return {
                done: false,
                value: e[r++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
class v extends f(Error) {
}
class m extends v {
    constructor(t){
        super(`Invalid DateTime: ${t.toMessage()}`);
    }
}
class g extends v {
    constructor(t){
        super(`Invalid Interval: ${t.toMessage()}`);
    }
}
class y extends v {
    constructor(t){
        super(`Invalid Duration: ${t.toMessage()}`);
    }
}
class b extends v {
}
class C extends v {
    constructor(t){
        super(`Invalid unit ${t}`);
    }
}
class w extends v {
}
class _ extends v {
    constructor(){
        super("Zone is an abstract class");
    }
}
const x = "numeric";
const M = "short";
const E = "long";
const D_1 = {
    year: x,
    month: x,
    day: x
};
const DD = {
    year: x,
    month: M,
    day: x
};
const S = {
    year: x,
    month: M,
    day: x,
    weekday: M
};
const DDD = {
    year: x,
    month: E,
    day: x
};
const DDDD = {
    year: x,
    month: E,
    day: x,
    weekday: E
};
const t = {
    hour: x,
    minute: x
};
const tt = {
    hour: x,
    minute: x,
    second: x
};
const ttt = {
    hour: x,
    minute: x,
    second: x,
    timeZoneName: M
};
const tttt = {
    hour: x,
    minute: x,
    second: x,
    timeZoneName: E
};
const T_1 = {
    hour: x,
    minute: x,
    hourCycle: "h23"
};
const TT = {
    hour: x,
    minute: x,
    second: x,
    hourCycle: "h23"
};
const TTT = {
    hour: x,
    minute: x,
    second: x,
    hourCycle: "h23",
    timeZoneName: M
};
const TTTT = {
    hour: x,
    minute: x,
    second: x,
    hourCycle: "h23",
    timeZoneName: E
};
const f_1 = {
    year: x,
    month: x,
    day: x,
    hour: x,
    minute: x
};
const F_1 = {
    year: x,
    month: x,
    day: x,
    hour: x,
    minute: x,
    second: x
};
const ff = {
    year: x,
    month: M,
    day: x,
    hour: x,
    minute: x
};
const FF = {
    year: x,
    month: M,
    day: x,
    hour: x,
    minute: x,
    second: x
};
const F = {
    year: x,
    month: M,
    day: x,
    weekday: M,
    hour: x,
    minute: x
};
const fff = {
    year: x,
    month: E,
    day: x,
    hour: x,
    minute: x,
    timeZoneName: M
};
const FFF = {
    year: x,
    month: E,
    day: x,
    hour: x,
    minute: x,
    second: x,
    timeZoneName: M
};
const ffff = {
    year: x,
    month: E,
    day: x,
    weekday: E,
    hour: x,
    minute: x,
    timeZoneName: E
};
const FFFF = {
    year: x,
    month: E,
    day: x,
    weekday: E,
    hour: x,
    minute: x,
    second: x,
    timeZoneName: E
};
function Y(e) {
    return e === undefined;
}
function $(e) {
    return typeof e === "number";
}
function K(e) {
    return typeof e === "number" && e % 1 == 0;
}
function J() {
    try {
        return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e) {
        return false;
    }
}
function Q(e, t, n) {
    if (e.length !== 0) {
        return e.reduce((acc, item)=>{
            const o = [
                t(item),
                item
            ];
            if (acc && n(acc[0], o[0]) === acc[0]) {
                return acc;
            }
            return o;
        }, null)[1];
    }
}
function X(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
function ee(e, t, n) {
    return K(e) && e >= t && e <= n;
}
function te(e, t = 2) {
    if (e < 0) {
        return `-${`${-e}`.padStart(t, "0")}`;
    }
    return `${e}`.padStart(t, "0");
}
function ne(e) {
    if (Y(e) || e === null || e === "") {
        return undefined;
    }
    return parseInt(e, 10);
}
function re(e) {
    if (Y(e) || e === null || e === "") {
        return undefined;
    }
    return parseFloat(e);
}
function oe(e) {
    if (!Y(e) && e !== null && e !== "") {
        const t = 1000 * parseFloat(`0.${e}`);
        return Math.floor(t);
    }
}
function ae(e, t, n = false) {
    const r = 10 ** t;
    return (n ? Math.trunc : Math.round)(e * r) / r;
}
function ie(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function le(e) {
    if (ie(e)) {
        return 366;
    }
    return 365;
}
function se(e, t) {
    const n = ((e, t)=>e - 12 * Math.floor(e / 12))(t - 1) + 1;
    if (n === 2) {
        if (ie(e + (t - n) / 12)) {
            return 29;
        }
        return 28;
    }
    return [
        31,
        null,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ][n - 1];
}
function ue(e) {
    let t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
    if (e.year < 100 && e.year >= 0) {
        (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900);
    }
    return +t;
}
function ce(e) {
    const t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7;
    const n = e - 1;
    const r = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7;
    if (t === 4 || r === 3) {
        return 53;
    }
    return 52;
}
function fe(e) {
    if (e > 99) {
        return e;
    }
    if (e > 60) {
        return 1900 + e;
    }
    return 2000 + e;
}
function de(e, timeZoneName, locale, r = null) {
    const o = new Date(e);
    const i = {
        hourCycle: "h23",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };
    if (r) {
        i.timeZone = r;
    }
    const l = {
        timeZoneName,
        ...i
    };
    const s = new Intl.DateTimeFormat(locale, l).formatToParts(o).find((e)=>e.type.toLowerCase() === "timezonename");
    if (s) {
        return s.value;
    }
    return null;
}
function pe(e, t) {
    let n = parseInt(e, 10);
    if (Number.isNaN(n)) {
        n = 0;
    }
    const r = parseInt(t, 10) || 0;
    return 60 * n + (n < 0 || Object.is(n, -0) ? -r : r);
}
function he(e) {
    const t = Number(e);
    if (typeof e === "boolean" || e === "" || Number.isNaN(t)) {
        throw new w(`Invalid unit value ${e}`);
    }
    return t;
}
function ve(e, t) {
    const n = {};
    for(const r in e){
        if (X(e, r)) {
            const o = e[r];
            if (o == null) {
                continue;
            }
            n[t(r)] = he(o);
        }
    }
    return n;
}
function me(e, t) {
    const n = Math.trunc(Math.abs(e / 60));
    const r = Math.trunc(Math.abs(e % 60));
    const o = e >= 0 ? "+" : "-";
    switch(t){
        case "short":
            return `${o}${te(n, 2)}:${te(r, 2)}`;
        case "narrow":
            return `${o}${n}${r > 0 ? `:${r}` : ""}`;
        case "techie":
            return `${o}${te(n, 2)}${te(r, 2)}`;
        default:
            throw new RangeError(`Value format ${t} is out of range for property format`);
    }
}
function ge(e) {
    return ((e, t)=>[
            "hour",
            "minute",
            "second",
            "millisecond"
        ].reduce((acc, item)=>{
            acc[item] = e[item];
            return acc;
        }, {}))(e);
}
const ye = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
const be = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const Ce = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const we = [
    "J",
    "F",
    "M",
    "A",
    "M",
    "J",
    "J",
    "A",
    "S",
    "O",
    "N",
    "D"
];
function _e(e) {
    switch(e){
        case "narrow":
            return [].concat(we);
        case "short":
            return [].concat(Ce);
        case "long":
            return [].concat(be);
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
            ];
        case "2-digit":
            return [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12"
            ];
        default:
            return null;
    }
}
const xe = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
const Me = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
];
const Ee = [
    "M",
    "T",
    "W",
    "T",
    "F",
    "S",
    "S"
];
function ke(e) {
    switch(e){
        case "narrow":
            return [].concat(Ee);
        case "short":
            return [].concat(Me);
        case "long":
            return [].concat(xe);
        case "numeric":
            return [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ];
        default:
            return null;
    }
}
const Oe = [
    "AM",
    "PM"
];
const Se = [
    "Before Christ",
    "Anno Domini"
];
const Le = [
    "BC",
    "AD"
];
const ze = [
    "B",
    "A"
];
function De(e) {
    switch(e){
        case "narrow":
            return [].concat(ze);
        case "short":
            return [].concat(Le);
        case "long":
            return [].concat(Se);
        default:
            return null;
    }
}
function Te(e, t) {
    let n;
    let r = "";
    for(const o = h(e); !(n = o()).done;){
        const a = n.value;
        if (a.literal) {
            r += a.val;
        } else {
            r += t(a.val);
        }
    }
    return r;
}
const Ve = {
    D: D_1,
    DD,
    DDD,
    DDDD,
    t,
    tt,
    ttt,
    tttt,
    T: T_1,
    TT,
    TTT,
    TTTT,
    f: f_1,
    ff,
    fff,
    ffff,
    F: F_1,
    FF,
    FFF,
    FFFF
};
const He = (()=>{
    function e(e, t) {
        this.opts = t;
        this.loc = e;
        this.systemLoc = null;
    }
    e.create = function(t, n = {}) {
        return new e(t, n);
    };
    e.parseFormat = function(e) {
        let t = null;
        let n = "";
        let literal = false;
        const o = [];
        for(let a = 0; a < e.length; a++){
            const i = e.charAt(a);
            if (i === "'") {
                if (n.length > 0) {
                    o.push({
                        literal,
                        val: n
                    });
                }
                t = null;
                n = "";
                literal = !literal;
            } else if (literal || i === t) {
                n += i;
            } else {
                if (n.length > 0) {
                    o.push({
                        literal: false,
                        val: n
                    });
                }
                n = i;
                t = i;
            }
        }
        if (n.length > 0) {
            o.push({
                literal,
                val: n
            });
        }
        return o;
    };
    e.macroTokenToFormatOpts = function(e) {
        return Ve[e];
    };
    const e_prototype = e.prototype;
    e_prototype.formatWithSystemDefault = function(e, t) {
        if (this.systemLoc === null) {
            this.systemLoc = this.loc.redefaultToSystem();
        }
        return this.systemLoc.dtFormatter(e, {
            ...this.opts,
            ...t
        }).format();
    };
    e_prototype.formatDateTime = function(e, t = {}) {
        return this.loc.dtFormatter(e, {
            ...this.opts,
            ...t
        }).format();
    };
    e_prototype.formatDateTimeParts = function(e, t = {}) {
        return this.loc.dtFormatter(e, {
            ...this.opts,
            ...t
        }).formatToParts();
    };
    e_prototype.resolvedOptions = function(e, t = {}) {
        return this.loc.dtFormatter(e, {
            ...this.opts,
            ...t
        }).resolvedOptions();
    };
    e_prototype.num = function(e, t = 0) {
        if (this.opts.forceSimple) {
            return te(e, t);
        }
        const n = {
            ...this.opts
        };
        if (t > 0) {
            n.padTo = t;
        }
        return this.loc.numberFormatter(n).format(e);
    };
    e_prototype.formatDateTimeFromString = function(t, n) {
        const _this = this;
        const o = this.loc.listingMode() === "en";
        const a = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory";
        const i = (e, n)=>_this.loc.extract(t, e, n);
        const l = (e)=>{
            if (t.isOffsetFixed && t.offset === 0 && e.allowZ) {
                return "Z";
            }
            if (t.isValid) {
                return t.zone.formatOffset(t.ts, e.format);
            }
            return "";
        };
        const s = (e, n)=>{
            if (o) {
                return ((e, t)=>_e(t)[e.month - 1])(t, e);
            }
            return i(n ? {
                month: e
            } : {
                month: e,
                day: "numeric"
            }, "month");
        };
        const u = (e, n)=>{
            if (o) {
                return ((e, t)=>ke(t)[e.weekday - 1])(t, e);
            }
            return i(n ? {
                weekday: e
            } : {
                weekday: e,
                month: "long",
                day: "numeric"
            }, "weekday");
        };
        const c = (e)=>{
            if (o) {
                return ((e, t)=>De(t)[e.year < 0 ? 0 : 1])(t, e);
            }
            return i({
                era: e
            }, "era");
        };
        return Te(e.parseFormat(n), (n)=>{
            switch(n){
                case "S":
                    return _this.num(t.millisecond);
                case "u":
                case "SSS":
                    return _this.num(t.millisecond, 3);
                case "s":
                    return _this.num(t.second);
                case "ss":
                    return _this.num(t.second, 2);
                case "uu":
                    return _this.num(Math.floor(t.millisecond / 10), 2);
                case "uuu":
                    return _this.num(Math.floor(t.millisecond / 100));
                case "m":
                    return _this.num(t.minute);
                case "mm":
                    return _this.num(t.minute, 2);
                case "h":
                    return _this.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
                case "hh":
                    return _this.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
                case "H":
                    return _this.num(t.hour);
                case "HH":
                    return _this.num(t.hour, 2);
                case "Z":
                    return l({
                        format: "narrow",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZ":
                    return l({
                        format: "short",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZZ":
                    return l({
                        format: "techie",
                        allowZ: _this.opts.allowZ
                    });
                case "ZZZZ":
                    return t.zone.offsetName(t.ts, {
                        format: "short",
                        locale: _this.loc.locale
                    });
                case "ZZZZZ":
                    return t.zone.offsetName(t.ts, {
                        format: "long",
                        locale: _this.loc.locale
                    });
                case "z":
                    return t.zoneName;
                case "a":
                    if (o) {
                        return ((e)=>Oe[e.hour < 12 ? 0 : 1])(t);
                    }
                    return i({
                        hour: "numeric",
                        hourCycle: "h12"
                    }, "dayperiod");
                case "d":
                    if (a) {
                        return i({
                            day: "numeric"
                        }, "day");
                    }
                    return _this.num(t.day);
                case "dd":
                    if (a) {
                        return i({
                            day: "2-digit"
                        }, "day");
                    }
                    return _this.num(t.day, 2);
                case "c":
                case "E":
                    return _this.num(t.weekday);
                case "ccc":
                    return u("short", true);
                case "cccc":
                    return u("long", true);
                case "ccccc":
                    return u("narrow", true);
                case "EEE":
                    return u("short", false);
                case "EEEE":
                    return u("long", false);
                case "EEEEE":
                    return u("narrow", false);
                case "L":
                    if (a) {
                        return i({
                            month: "numeric",
                            day: "numeric"
                        }, "month");
                    }
                    return _this.num(t.month);
                case "LL":
                    if (a) {
                        return i({
                            month: "2-digit",
                            day: "numeric"
                        }, "month");
                    }
                    return _this.num(t.month, 2);
                case "LLL":
                    return s("short", true);
                case "LLLL":
                    return s("long", true);
                case "LLLLL":
                    return s("narrow", true);
                case "M":
                    if (a) {
                        return i({
                            month: "numeric"
                        }, "month");
                    }
                    return _this.num(t.month);
                case "MM":
                    if (a) {
                        return i({
                            month: "2-digit"
                        }, "month");
                    }
                    return _this.num(t.month, 2);
                case "MMM":
                    return s("short", false);
                case "MMMM":
                    return s("long", false);
                case "MMMMM":
                    return s("narrow", false);
                case "y":
                    if (a) {
                        return i({
                            year: "numeric"
                        }, "year");
                    }
                    return _this.num(t.year);
                case "yy":
                    if (a) {
                        return i({
                            year: "2-digit"
                        }, "year");
                    }
                    return _this.num(t.year.toString().slice(-2), 2);
                case "yyyy":
                    if (a) {
                        return i({
                            year: "numeric"
                        }, "year");
                    }
                    return _this.num(t.year, 4);
                case "yyyyyy":
                    if (a) {
                        return i({
                            year: "numeric"
                        }, "year");
                    }
                    return _this.num(t.year, 6);
                case "G":
                    return c("short");
                case "GG":
                    return c("long");
                case "GGGGG":
                    return c("narrow");
                case "kk":
                    return _this.num(t.weekYear.toString().slice(-2), 2);
                case "kkkk":
                    return _this.num(t.weekYear, 4);
                case "W":
                    return _this.num(t.weekNumber);
                case "WW":
                    return _this.num(t.weekNumber, 2);
                case "o":
                    return _this.num(t.ordinal);
                case "ooo":
                    return _this.num(t.ordinal, 3);
                case "q":
                    return _this.num(t.quarter);
                case "qq":
                    return _this.num(t.quarter, 2);
                case "X":
                    return _this.num(Math.floor(t.ts / 1000));
                case "x":
                    return _this.num(t.ts);
                default:
                    return ((n)=>{
                        const o = e.macroTokenToFormatOpts(n);
                        if (o) {
                            return _this.formatWithSystemDefault(t, o);
                        }
                        return n;
                    })(n);
            }
        });
    };
    e_prototype.formatDurationFromString = function(t, n) {
        let r;
        const _this = this;
        const a = function(e) {
            switch(e[0]){
                case "S":
                    return "millisecond";
                case "s":
                    return "second";
                case "m":
                    return "minute";
                case "h":
                    return "hour";
                case "d":
                    return "day";
                case "w":
                    return "week";
                case "M":
                    return "month";
                case "y":
                    return "year";
                default:
                    return null;
            }
        };
        const i = e.parseFormat(n);
        const l = i.reduce((acc, { literal, val })=>{
            if (literal) {
                return acc;
            }
            return acc.concat(val);
        }, []);
        const s = t.shiftTo.apply(t, l.map(a).filter((e)=>e));
        return Te(i, (r = s, (e)=>{
            const t = a(e);
            if (t) {
                return _this.num(r.get(t), e.length);
            }
            return e;
        }));
    };
    return e;
})();
class Pe {
    constructor(e, t){
        this.reason = e;
        this.explanation = t;
    }
    toMessage() {
        if (this.explanation) {
            return `${this.reason}: ${this.explanation}`;
        }
        return this.reason;
    }
}
export const Zone = (()=>{
    function e() {}
    const e_prototype = e.prototype;
    e_prototype.offsetName = function(e, t) {
        throw new _;
    };
    e_prototype.formatOffset = function(e, t) {
        throw new _;
    };
    e_prototype.offset = function(e) {
        throw new _;
    };
    e_prototype.equals = function(e) {
        throw new _;
    };
    o(e, [
        {
            key: "type",
            get: function() {
                throw new _;
            }
        },
        {
            key: "name",
            get: function() {
                throw new _;
            }
        },
        {
            key: "ianaName",
            get: function() {
                return this.name;
            }
        },
        {
            key: "isUniversal",
            get: function() {
                throw new _;
            }
        },
        {
            key: "isValid",
            get: function() {
                throw new _;
            }
        }
    ]);
    return e;
})();
let Re = null;
export const SystemZone = ((Zone_1)=>{
    function t() {
        return Zone_1.apply(this, arguments) || this;
    }
    i(t, Zone_1);
    const t_prototype = t.prototype;
    t_prototype.offsetName = function(e, t) {
        return de(e, t.format, t.locale);
    };
    t_prototype.formatOffset = function(e, t) {
        return me(this.offset(e), t);
    };
    t_prototype.offset = function(e) {
        return -new Date(e).getTimezoneOffset();
    };
    t_prototype.equals = function(e) {
        return e.type === "system";
    };
    o(t, [
        {
            key: "type",
            get: function() {
                return "system";
            }
        },
        {
            key: "name",
            get: function() {
                return (new Intl.DateTimeFormat).resolvedOptions().timeZone;
            }
        },
        {
            key: "isUniversal",
            get: function() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function() {
                return true;
            }
        }
    ], [
        {
            key: "instance",
            get: function() {
                if (Re === null) {
                    Re = new t;
                }
                return Re;
            }
        }
    ]);
    return t;
})(Zone);
let Ne = {};
const Ie = {
    year: 0,
    month: 1,
    day: 2,
    era: 3,
    hour: 4,
    minute: 5,
    second: 6
};
let Be = {};
export const IANAZone = ((Zone_1)=>{
    function t(n) {
        let r;
        r = Zone_1.call(this) || this;
        r.zoneName = n;
        r.valid = t.isValidZone(n);
        return r;
    }
    i(t, Zone_1);
    t.create = function(e) {
        if (!Be[e]) {
            Be[e] = new t(e);
        }
        return Be[e];
    };
    t.resetCache = function() {
        Be = {};
        Ne = {};
    };
    t.isValidSpecifier = function(e) {
        return this.isValidZone(e);
    };
    t.isValidZone = function(e) {
        if (!e) {
            return false;
        }
        try {
            new Intl.DateTimeFormat("en-US", {
                timeZone: e
            }).format();
            return true;
        } catch (e) {
            return false;
        }
    };
    const t_prototype = t.prototype;
    t_prototype.offsetName = function(e, t) {
        return de(e, t.format, t.locale, this.name);
    };
    t_prototype.formatOffset = function(e, t) {
        return me(this.offset(e), t);
    };
    t_prototype.offset = function(e) {
        const t = new Date(e);
        if (isNaN(t)) {
            return NaN;
        }
        let n;
        n = this.name;
        if (!Ne[n]) {
            Ne[n] = new Intl.DateTimeFormat("en-US", {
                hour12: false,
                timeZone: n,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                era: "short"
            });
        }
        const r = Ne[n];
        const o = r.formatToParts ? ((e, t)=>{
            for(var n = e.formatToParts(t), r = [], o = 0; o < n.length; o++){
                const a = n[o];
                const { type, value } = a;
                const s = Ie[type];
                if (type === "era") {
                    r[s] = value;
                } else if (!Y(s)) {
                    r[s] = parseInt(value, 10);
                }
            }
            return r;
        })(r, t) : ((e, t)=>{
            const n = e.format(t).replace(/\u200E/g, "");
            const r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n);
            const o = r[1];
            const a = r[2];
            return [
                r[3],
                o,
                a,
                r[4],
                r[5],
                r[6],
                r[7]
            ];
        })(r, t);
        let a = o[0];
        const i = o[1];
        const l = o[2];
        const s = o[3];
        const u = o[4];
        const c = o[5];
        const f = o[6];
        if (s === "BC") {
            a = 1 - Math.abs(a);
        }
        let d = +t;
        const p = d % 1000;
        return (ue({
            year: a,
            month: i,
            day: l,
            hour: u === 24 ? 0 : u,
            minute: c,
            second: f,
            millisecond: 0
        }) - (d -= p >= 0 ? p : 1000 + p)) / 60000;
    };
    t_prototype.equals = function(e) {
        return e.type === "iana" && e.name === this.name;
    };
    o(t, [
        {
            key: "type",
            get: function() {
                return "iana";
            }
        },
        {
            key: "name",
            get: function() {
                return this.zoneName;
            }
        },
        {
            key: "isUniversal",
            get: function() {
                return false;
            }
        },
        {
            key: "isValid",
            get: function() {
                return this.valid;
            }
        }
    ]);
    return t;
})(Zone);
let Fe = null;
export const FixedOffsetZone = ((Zone_1)=>{
    function t(t) {
        let n;
        n = Zone_1.call(this) || this;
        n.fixed = t;
        return n;
    }
    i(t, Zone_1);
    t.instance = function(e) {
        if (e === 0) {
            return t.utcInstance;
        }
        return new t(e);
    };
    t.parseSpecifier = function(e) {
        if (e) {
            const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (n) {
                return new t(pe(n[1], n[2]));
            }
        }
        return null;
    };
    const t_prototype = t.prototype;
    t_prototype.offsetName = function() {
        return this.name;
    };
    t_prototype.formatOffset = function(e, t) {
        return me(this.fixed, t);
    };
    t_prototype.offset = function() {
        return this.fixed;
    };
    t_prototype.equals = function(e) {
        return e.type === "fixed" && e.fixed === this.fixed;
    };
    o(t, [
        {
            key: "type",
            get: function() {
                return "fixed";
            }
        },
        {
            key: "name",
            get: function() {
                if (this.fixed === 0) {
                    return "UTC";
                }
                return `UTC${me(this.fixed, "narrow")}`;
            }
        },
        {
            key: "ianaName",
            get: function() {
                if (this.fixed === 0) {
                    return "Etc/UTC";
                }
                return `Etc/GMT${me(-this.fixed, "narrow")}`;
            }
        },
        {
            key: "isUniversal",
            get: function() {
                return true;
            }
        },
        {
            key: "isValid",
            get: function() {
                return true;
            }
        }
    ], [
        {
            key: "utcInstance",
            get: function() {
                if (Fe === null) {
                    Fe = new t(0);
                }
                return Fe;
            }
        }
    ]);
    return t;
})(Zone);
export class InvalidZone extends Zone {
    constructor(t){
        super();
        this.zoneName = t;
    }
    offsetName() {
        return null;
    }
    formatOffset() {
        return "";
    }
    offset() {
        return NaN;
    }
    equals() {
        return false;
    }
    get type() {
        return "invalid";
    }
    get name() {
        return this.zoneName;
    }
    get isUniversal() {
        return false;
    }
    get isValid() {
        return false;
    }
}
function We(e, t) {
    if (Y(e) || e === null) {
        return t;
    }
    if (e instanceof Zone) {
        return e;
    }
    if (typeof e === "string") {
        const n = e.toLowerCase();
        if (n === "default") {
            return t;
        }
        if (n === "local" || n === "system") {
            return SystemZone.instance;
        }
        if (n === "utc" || n === "gmt") {
            return FixedOffsetZone.utcInstance;
        }
        return FixedOffsetZone.parseSpecifier(n) || IANAZone.create(e);
    }
    if ($(e)) {
        return FixedOffsetZone.instance(e);
    }
    if (typeof e === "object" && e.offset && typeof e.offset === "number") {
        return e;
    }
    return new InvalidZone(e);
}
let Ge;
let Ye = function() {
    return Date.now();
};
let $e = "system";
let Ke = null;
let Je = null;
let Qe = null;
export class Settings {
    static resetCaches() {
        dt.resetCache();
        IANAZone.resetCache();
    }
    static get now() {
        return Ye;
    }
    static set now(e) {
        Ye = e;
    }
    static get defaultZone() {
        return We($e, SystemZone.instance);
    }
    static set defaultZone(e) {
        $e = e;
    }
    static get defaultLocale() {
        return Ke;
    }
    static set defaultLocale(e) {
        Ke = e;
    }
    static get defaultNumberingSystem() {
        return Je;
    }
    static set defaultNumberingSystem(e) {
        Je = e;
    }
    static get defaultOutputCalendar() {
        return Qe;
    }
    static set defaultOutputCalendar(e) {
        Qe = e;
    }
    static get throwOnInvalid() {
        return Ge;
    }
    static set throwOnInvalid(e) {
        Ge = e;
    }
}
const nt = {};
let rt = {};
function ot(e, t = {}) {
    const n = JSON.stringify([
        e,
        t
    ]);
    let r = rt[n];
    if (!r) {
        r = new Intl.DateTimeFormat(e, t);
        rt[n] = r;
    }
    return r;
}
let at = {};
let it = {};
let lt = null;
function st(e, t, n, r, o) {
    const a = e.listingMode(n);
    switch(a){
        case "error":
            return null;
        case "en":
            return r(t);
        default:
            return o(t);
    }
}
class ut {
    constructor(e, t, n){
        this.padTo = n.padTo || 0;
        this.floor = n.floor || false;
        var { padTo: _padTo, floor: _floor, ...rest } = n;
        if (!t || Object.keys(rest).length > 0) {
            var o = {
                useGrouping: false,
                ...n
            };
            if (n.padTo > 0) {
                o.minimumIntegerDigits = n.padTo;
            }
            this.inf = ((e, t = {})=>{
                const n = JSON.stringify([
                    e,
                    t
                ]);
                let r = at[n];
                if (!r) {
                    r = new Intl.NumberFormat(e, t);
                    at[n] = r;
                }
                return r;
            })(e, o);
        }
    }
    format(e) {
        if (this.inf) {
            const t = this.floor ? Math.floor(e) : e;
            return this.inf.format(t);
        }
        return te(this.floor ? Math.floor(e) : ae(e, 3), this.padTo);
    }
}
class ct {
    constructor(e, t, n){
        var r;
        this.opts = n;
        if (e.zone.isUniversal) {
            var o = e.offset / 60 * -1;
            var i = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`;
            if (e.offset !== 0 && IANAZone.create(i).valid) {
                r = i;
                this.dt = e;
            } else {
                r = "UTC";
                if (n.timeZoneName) {
                    this.dt = e;
                } else {
                    this.dt = e.offset === 0 ? e : DateTime.fromMillis(e.ts + 60 * e.offset * 1000);
                }
            }
        } else {
            if (e.zone.type === "system") {
                this.dt = e;
            } else {
                this.dt = e;
                r = e.zone.name;
            }
        }
        var l = {
            ...this.opts
        };
        if (r) {
            l.timeZone = r;
        }
        this.dtf = ot(t, l);
    }
    format() {
        return this.dtf.format(this.dt.toJSDate());
    }
    formatToParts() {
        return this.dtf.formatToParts(this.dt.toJSDate());
    }
    resolvedOptions() {
        return this.dtf.resolvedOptions();
    }
}
class ft {
    constructor(e, t, n){
        this.opts = {
            style: "long",
            ...n
        };
        if (!t && J()) {
            this.rtf = ((e, t = {})=>{
                const { base: _base, ...rest } = t;
                const o = JSON.stringify([
                    e,
                    rest
                ]);
                let a = it[o];
                if (!a) {
                    a = new Intl.RelativeTimeFormat(e, t);
                    it[o] = a;
                }
                return a;
            })(e, n);
        }
    }
    format(e, t) {
        if (this.rtf) {
            return this.rtf.format(e, t);
        }
        return ((e, t, n = "always", r = false)=>{
            const o = {
                years: [
                    "year",
                    "yr."
                ],
                quarters: [
                    "quarter",
                    "qtr."
                ],
                months: [
                    "month",
                    "mo."
                ],
                weeks: [
                    "week",
                    "wk."
                ],
                days: [
                    "day",
                    "day",
                    "days"
                ],
                hours: [
                    "hour",
                    "hr."
                ],
                minutes: [
                    "minute",
                    "min."
                ],
                seconds: [
                    "second",
                    "sec."
                ]
            };
            const a = [
                "hours",
                "minutes",
                "seconds"
            ].indexOf(e) === -1;
            if (n === "auto" && a) {
                const i = e === "days";
                switch(t){
                    case 1:
                        if (i) {
                            return "tomorrow";
                        }
                        return `next ${o[e][0]}`;
                    case -1:
                        if (i) {
                            return "yesterday";
                        }
                        return `last ${o[e][0]}`;
                    case 0:
                        if (i) {
                            return "today";
                        }
                        return `this ${o[e][0]}`;
                }
            }
            const l = Object.is(t, -0) || t < 0;
            const s = Math.abs(t);
            const u = s === 1;
            const c = o[e];
            const f = r ? u ? c[1] : c[2] || c[1] : u ? o[e][0] : e;
            if (l) {
                return `${s} ${f} ago`;
            }
            return `in ${s} ${f}`;
        })(t, e, this.opts.numeric, this.opts.style !== "long");
    }
    formatToParts(e, t) {
        if (this.rtf) {
            return this.rtf.formatToParts(e, t);
        }
        return [];
    }
}
var dt = (()=>{
    function e(e, t, n, r) {
        const o = ((e)=>{
            const t = e.indexOf("-u-");
            if (t === -1) {
                return [
                    e
                ];
            }
            let n;
            const r = e.substring(0, t);
            try {
                n = ot(e).resolvedOptions();
            } catch (e) {
                n = ot(r).resolvedOptions();
            }
            const o = n;
            return [
                r,
                o.numberingSystem,
                o.calendar
            ];
        })(e);
        const a = o[0];
        const i = o[1];
        const l = o[2];
        this.locale = a;
        this.numberingSystem = t || i || null;
        this.outputCalendar = n || l || null;
        this.intl = ((e, t, n)=>{
            if (n || t) {
                e += "-u";
                if (n) {
                    e += `-ca-${n}`;
                }
                if (t) {
                    e += `-nu-${t}`;
                }
                return e;
            }
            return e;
        })(this.locale, this.numberingSystem, this.outputCalendar);
        this.weekdaysCache = {
            format: {},
            standalone: {}
        };
        this.monthsCache = {
            format: {},
            standalone: {}
        };
        this.meridiemCache = null;
        this.eraCache = {};
        this.specifiedLocale = r;
        this.fastNumbersCached = null;
    }
    e.fromOpts = function(t) {
        return e.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN);
    };
    e.create = function(t, n, r, o = false) {
        const a = t || Settings.defaultLocale;
        return new e(a || (o ? "en-US" : lt || (lt = (new Intl.DateTimeFormat).resolvedOptions().locale)), n || Settings.defaultNumberingSystem, r || Settings.defaultOutputCalendar, a);
    };
    e.resetCache = function() {
        lt = null;
        rt = {};
        at = {};
        it = {};
    };
    e.fromObject = function(t = {}) {
        const n = t;
        const { locale, numberingSystem, outputCalendar } = n;
        return e.create(locale, numberingSystem, outputCalendar);
    };
    const e_prototype = e.prototype;
    e_prototype.listingMode = function() {
        const e = this.isEnglish();
        const t = !(this.numberingSystem !== null && this.numberingSystem !== "latn" || this.outputCalendar !== null && this.outputCalendar !== "gregory");
        if (e && t) {
            return "en";
        }
        return "intl";
    };
    e_prototype.clone = function(t) {
        if (t && Object.getOwnPropertyNames(t).length !== 0) {
            return e.create(t.locale || this.specifiedLocale, t.numberingSystem || this.numberingSystem, t.outputCalendar || this.outputCalendar, t.defaultToEN || false);
        }
        return this;
    };
    e_prototype.redefaultToEN = function(e = {}) {
        return this.clone({
            ...e,
            defaultToEN: true
        });
    };
    e_prototype.redefaultToSystem = function(e = {}) {
        return this.clone({
            ...e,
            defaultToEN: false
        });
    };
    e_prototype.months = function(e, t = false, n = true) {
        const _this = this;
        return st(this, e, n, _e, ()=>{
            const n = t ? {
                month: e,
                day: "numeric"
            } : {
                month: e
            };
            const o = t ? "format" : "standalone";
            if (!_this.monthsCache[o][e]) {
                _this.monthsCache[o][e] = ((e)=>{
                    const t = [];
                    for(let n = 1; n <= 12; n++){
                        const r = DateTime.utc(2016, n, 1);
                        t.push(e(r));
                    }
                    return t;
                })((e)=>_this.extract(e, n, "month"));
            }
            return _this.monthsCache[o][e];
        });
    };
    e_prototype.weekdays = function(e, t = false, n = true) {
        const _this = this;
        return st(this, e, n, ke, ()=>{
            const n = t ? {
                weekday: e,
                year: "numeric",
                month: "long",
                day: "numeric"
            } : {
                weekday: e
            };
            const o = t ? "format" : "standalone";
            if (!_this.weekdaysCache[o][e]) {
                _this.weekdaysCache[o][e] = ((e)=>{
                    const t = [];
                    for(let n = 1; n <= 7; n++){
                        const r = DateTime.utc(2016, 11, 13 + n);
                        t.push(e(r));
                    }
                    return t;
                })((e)=>_this.extract(e, n, "weekday"));
            }
            return _this.weekdaysCache[o][e];
        });
    };
    e_prototype.meridiems = function(e = true) {
        const _this = this;
        return st(this, undefined, e, ()=>Oe, ()=>{
            if (!_this.meridiemCache) {
                const e = {
                    hour: "numeric",
                    hourCycle: "h12"
                };
                _this.meridiemCache = [
                    DateTime.utc(2016, 11, 13, 9),
                    DateTime.utc(2016, 11, 13, 19)
                ].map((n)=>_this.extract(n, e, "dayperiod"));
            }
            return _this.meridiemCache;
        });
    };
    e_prototype.eras = function(e, t = true) {
        const _this = this;
        return st(this, e, t, De, ()=>{
            const t = {
                era: e
            };
            if (!_this.eraCache[e]) {
                _this.eraCache[e] = [
                    DateTime.utc(-40, 1, 1),
                    DateTime.utc(2017, 1, 1)
                ].map((e)=>_this.extract(e, t, "era"));
            }
            return _this.eraCache[e];
        });
    };
    e_prototype.extract = function(e, t, n) {
        const r = this.dtFormatter(e, t).formatToParts().find((e)=>e.type.toLowerCase() === n);
        if (r) {
            return r.value;
        }
        return null;
    };
    e_prototype.numberFormatter = function(e = {}) {
        return new ut(this.intl, e.forceSimple || this.fastNumbers, e);
    };
    e_prototype.dtFormatter = function(e, t = {}) {
        return new ct(e, this.intl, t);
    };
    e_prototype.relFormatter = function(e = {}) {
        return new ft(this.intl, this.isEnglish(), e);
    };
    e_prototype.listFormatter = function(e = {}) {
        return ((e, t = {})=>{
            const n = JSON.stringify([
                e,
                t
            ]);
            let r = nt[n];
            if (!r) {
                r = new Intl.ListFormat(e, t);
                nt[n] = r;
            }
            return r;
        })(this.intl, e);
    };
    e_prototype.isEnglish = function() {
        return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
    };
    e_prototype.equals = function(e) {
        return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
    };
    o(e, [
        {
            key: "fastNumbers",
            get: function() {
                let e;
                if (this.fastNumbersCached == null) {
                    this.fastNumbersCached = (!(e = this).numberingSystem || e.numberingSystem === "latn") && (e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn");
                }
                return this.fastNumbersCached;
            }
        }
    ]);
    return e;
})();
function pt(...t_1) {
    const r = t_1.reduce((acc, item)=>acc + item.source, "");
    return RegExp(`^${r}\$`);
}
function ht(...t) {
    return function(e) {
        return t.reduce(([r, o, i], item)=>{
            const l = item(e, i);
            const s = l[0];
            const u = l[1];
            const c = l[2];
            return [
                {
                    ...r,
                    ...s
                },
                u || o,
                c
            ];
        }, [
            {},
            null,
            1
        ]).slice(0, 2);
    };
}
function vt(e, ...n) {
    if (e == null) {
        return [
            null,
            null
        ];
    }
    for (const [l, s] of n){
        const u = l.exec(e);
        if (u) {
            return s(u);
        }
    }
    return [
        null,
        null
    ];
}
function mt(...t) {
    return function(e, n) {
        let r;
        const o = {};
        for(r = 0; r < t.length; r++){
            o[t[r]] = ne(e[n + r]);
        }
        return [
            o,
            null,
            n + r
        ];
    };
}
const gt = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
const yt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
const bt = RegExp(yt.source + `(?:${gt.source}?(?:\\[(${ye.source})\\])?)?`);
const Ct = RegExp(`(?:T${bt.source})?`);
const wt = mt("weekYear", "weekNumber", "weekDay");
const _t = mt("year", "ordinal");
const xt = RegExp(`${yt.source} ?(?:${gt.source}|(${ye.source}))?`);
const Mt = RegExp(`(?: ${xt.source})?`);
function Et(e, t, n) {
    const r = e[t];
    if (Y(r)) {
        return n;
    }
    return ne(r);
}
function kt(e, t) {
    return [
        {
            hours: Et(e, t, 0),
            minutes: Et(e, t + 1, 0),
            seconds: Et(e, t + 2, 0),
            milliseconds: oe(e[t + 3])
        },
        null,
        t + 4
    ];
}
function Ot(e, t) {
    const n = !e[t] && !e[t + 1];
    const r = pe(e[t + 1], e[t + 2]);
    return [
        {},
        n ? null : FixedOffsetZone.instance(r),
        t + 3
    ];
}
function St(e, t) {
    return [
        {},
        e[t] ? IANAZone.create(e[t]) : null,
        t + 1
    ];
}
const Lt = RegExp(`^T?${yt.source}\$`);
const zt = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Dt([t, n, r, o, a, i, l, s, u]) {
    const c = t[0] === "-";
    const f = s && s[0] === "-";
    const d = (e, t = false)=>{
        if (e !== undefined && (t || e && c)) {
            return -e;
        }
        return e;
    };
    return [
        {
            years: d(re(n)),
            months: d(re(r)),
            weeks: d(re(o)),
            days: d(re(a)),
            hours: d(re(i)),
            minutes: d(re(l)),
            seconds: d(re(s), s === "-0"),
            milliseconds: d(oe(u), f)
        }
    ];
}
const Tt = {
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
};
function Vt(e, t, n, r, o, a, i) {
    const l = {
        year: t.length === 2 ? fe(ne(t)) : ne(t),
        month: Ce.indexOf(n) + 1,
        day: ne(r),
        hour: ne(o),
        minute: ne(a)
    };
    if (i) {
        l.second = ne(i);
    }
    if (e) {
        l.weekday = e.length > 3 ? xe.indexOf(e) + 1 : Me.indexOf(e) + 1;
    }
    return l;
}
const Ht = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Pt(e) {
    let t;
    const n = e[1];
    const r = e[2];
    const o = e[3];
    const a = e[4];
    const i = e[5];
    const l = e[6];
    const s = e[7];
    const u = e[8];
    const c = e[9];
    const f = e[10];
    const d = e[11];
    const p = Vt(n, a, o, r, i, l, s);
    t = u ? Tt[u] : c ? 0 : pe(f, d);
    return [
        p,
        new FixedOffsetZone(t)
    ];
}
const At = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
const Rt = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
const jt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Nt(e) {
    const t = e[1];
    const n = e[2];
    const r = e[3];
    return [
        Vt(t, e[4], r, n, e[5], e[6], e[7]),
        FixedOffsetZone.utcInstance
    ];
}
function It(e) {
    const t = e[1];
    const n = e[2];
    const r = e[3];
    const o = e[4];
    const a = e[5];
    const i = e[6];
    return [
        Vt(t, e[7], n, r, o, a, i),
        FixedOffsetZone.utcInstance
    ];
}
const Bt = pt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Ct);
const Ut = pt(/(\d{4})-?W(\d\d)(?:-?(\d))?/, Ct);
const Ft = pt(/(\d{4})-?(\d{3})/, Ct);
const Zt = pt(bt);
const qt = ht(function(e, t) {
    return [
        {
            year: Et(e, t),
            month: Et(e, t + 1, 1),
            day: Et(e, t + 2, 1)
        },
        null,
        t + 3
    ];
}, kt, Ot, St);
const Wt = ht(wt, kt, Ot, St);
const Gt = ht(_t, kt, Ot, St);
const Yt = ht(kt, Ot, St);
const $t = ht(kt);
const Kt = pt(/(\d{4})-(\d\d)-(\d\d)/, Mt);
const Jt = pt(xt);
const Qt = ht(kt, Ot, St);
const Xt = {
    weeks: {
        days: 7,
        hours: 168,
        minutes: 10080,
        seconds: 604800,
        milliseconds: 604800000
    },
    days: {
        hours: 24,
        minutes: 1440,
        seconds: 86400,
        milliseconds: 86400000
    },
    hours: {
        minutes: 60,
        seconds: 3600,
        milliseconds: 3600000
    },
    minutes: {
        seconds: 60,
        milliseconds: 60000
    },
    seconds: {
        milliseconds: 1000
    }
};
const en = {
    years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 8760,
        minutes: 525600,
        seconds: 31536000,
        milliseconds: 31536000000
    },
    quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 2184,
        minutes: 131040,
        seconds: 7862400,
        milliseconds: 7862400000
    },
    months: {
        weeks: 4,
        days: 30,
        hours: 720,
        minutes: 43200,
        seconds: 2592000,
        milliseconds: 2592000000
    },
    ...Xt
};
const tn = {
    years: {
        quarters: 4,
        months: 12,
        weeks: 52.1775,
        days: 365.2425,
        hours: 8765.82,
        minutes: 525949.2,
        seconds: 525949.2 * 60,
        milliseconds: 525949.2 * 60 * 1000
    },
    quarters: {
        months: 3,
        weeks: 13.044375,
        days: 91.310625,
        hours: 2191.455,
        minutes: 131487.3,
        seconds: 525949.2 * 60 / 4,
        milliseconds: 7889237999.999999
    },
    months: {
        weeks: 30.436875 / 7,
        days: 30.436875,
        hours: 730.485,
        minutes: 43829.1,
        seconds: 2629746,
        milliseconds: 2629746000
    },
    ...Xt
};
const nn = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
];
const rn = nn.slice(0).reverse();
function on(e, t, n = false) {
    const r = {
        values: n ? t.values : {
            ...e.values,
            ...t.values || {}
        },
        loc: e.loc.clone(t.loc),
        conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
        matrix: t.matrix || e.matrix
    };
    return new Duration(r);
}
function an(e, t, n, r, o) {
    const a = e[o][n];
    const i = t[n] / a;
    const l = Math.sign(i) !== Math.sign(r[o]) && r[o] !== 0 && Math.abs(i) <= 1 ? ((e)=>{
        if (e < 0) {
            return Math.floor(e);
        }
        return Math.ceil(e);
    })(i) : Math.trunc(i);
    r[o] += l;
    t[n] -= l * a;
}
export var Duration = (()=>{
    function e(e) {
        const t = e.conversionAccuracy === "longterm" || false;
        let n = t ? tn : en;
        if (e.matrix) {
            n = e.matrix;
        }
        this.values = e.values;
        this.loc = e.loc || dt.create();
        this.conversionAccuracy = t ? "longterm" : "casual";
        this.invalid = e.invalid || null;
        this.matrix = n;
        this.isLuxonDuration = true;
    }
    e.fromMillis = function(milliseconds, n) {
        return e.fromObject({
            milliseconds
        }, n);
    };
    e.fromObject = function(t, n = {}) {
        if (t == null || typeof t !== "object") {
            throw new w(`Duration.fromObject: argument expected to be an object, got ${t === null ? "null" : typeof t}`);
        }
        return new e({
            values: ve(t, e.normalizeUnit),
            loc: dt.fromObject(n),
            conversionAccuracy: n.conversionAccuracy,
            matrix: n.matrix
        });
    };
    e.fromDurationLike = function(t) {
        if ($(t)) {
            return e.fromMillis(t);
        }
        if (e.isDuration(t)) {
            return t;
        }
        if (typeof t === "object") {
            return e.fromObject(t);
        }
        throw new w(`Unknown duration argument ${t} of type ${typeof t}`);
    };
    e.fromISO = function(t, n) {
        const r = ((e)=>vt(e, [
                zt,
                Dt
            ]))(t)[0];
        if (r) {
            return e.fromObject(r, n);
        }
        return e.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
    };
    e.fromISOTime = function(t, n) {
        const r = ((e)=>vt(e, [
                Lt,
                $t
            ]))(t)[0];
        if (r) {
            return e.fromObject(r, n);
        }
        return e.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
    };
    e.invalid = function(t, n = null) {
        if (!t) {
            throw new w("need to specify a reason the Duration is invalid");
        }
        const r = t instanceof Pe ? t : new Pe(t, n);
        if (Settings.throwOnInvalid) {
            throw new y(r);
        }
        return new e({
            invalid: r
        });
    };
    e.normalizeUnit = function(e) {
        const t = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
        }[e ? e.toLowerCase() : e];
        if (!t) {
            throw new C(e);
        }
        return t;
    };
    e.isDuration = function(e) {
        return e && e.isLuxonDuration || false;
    };
    const e_prototype = e.prototype;
    e_prototype.toFormat = function(e, t = {}) {
        const n = {
            ...t,
            floor: t.round !== false && t.floor !== false
        };
        if (this.isValid) {
            return He.create(this.loc, n).formatDurationFromString(this, e);
        }
        return "Invalid Duration";
    };
    e_prototype.toHuman = function(e = {}) {
        const _this = this;
        const n = nn.map((n)=>{
            const r = _this.values[n];
            if (Y(r)) {
                return null;
            }
            return _this.loc.numberFormatter({
                style: "unit",
                unitDisplay: "long",
                ...e,
                unit: n.slice(0, -1)
            }).format(r);
        }).filter((e)=>e);
        return this.loc.listFormatter({
            type: "conjunction",
            style: e.listStyle || "narrow",
            ...e
        }).format(n);
    };
    e_prototype.toObject = function() {
        if (this.isValid) {
            return {
                ...this.values
            };
        }
        return {};
    };
    e_prototype.toISO = function() {
        if (!this.isValid) {
            return null;
        }
        let e = "P";
        if (this.years !== 0) {
            e += `${this.years}Y`;
        }
        if (!(this.months === 0 && this.quarters === 0)) {
            e += `${this.months + 3 * this.quarters}M`;
        }
        if (this.weeks !== 0) {
            e += `${this.weeks}W`;
        }
        if (this.days !== 0) {
            e += `${this.days}D`;
        }
        if (!(this.hours === 0 && this.minutes === 0 && this.seconds === 0 && this.milliseconds === 0)) {
            e += "T";
        }
        if (this.hours !== 0) {
            e += `${this.hours}H`;
        }
        if (this.minutes !== 0) {
            e += `${this.minutes}M`;
        }
        if (!(this.seconds === 0 && this.milliseconds === 0)) {
            e += `${ae(this.seconds + this.milliseconds / 1000, 3)}S`;
        }
        if (e === "P") {
            e += "T0S";
        }
        return e;
    };
    e_prototype.toISOTime = function(e = {}) {
        if (!this.isValid) {
            return null;
        }
        const t = this.toMillis();
        if (t < 0 || t >= 86400000) {
            return null;
        }
        e = {
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended",
            ...e
        };
        const n = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
        let r = e.format === "basic" ? "hhmm" : "hh:mm";
        if (!(e.suppressSeconds && n.seconds === 0 && n.milliseconds === 0)) {
            r += e.format === "basic" ? "ss" : ":ss";
            if (!(e.suppressMilliseconds && n.milliseconds === 0)) {
                r += ".SSS";
            }
        }
        let o = n.toFormat(r);
        if (e.includePrefix) {
            o = `T${o}`;
        }
        return o;
    };
    e_prototype.toJSON = function() {
        return this.toISO();
    };
    e_prototype.toString = function() {
        return this.toISO();
    };
    e_prototype.toMillis = function() {
        return this.as("milliseconds");
    };
    e_prototype.valueOf = function() {
        return this.toMillis();
    };
    e_prototype.plus = function(t) {
        if (!this.isValid) {
            return this;
        }
        let n;
        const r = e.fromDurationLike(t);
        const o = {};
        for(const a = h(nn); !(n = a()).done;){
            const i = n.value;
            if (X(r.values, i) || X(this.values, i)) {
                o[i] = r.get(i) + this.get(i);
            }
        }
        return on(this, {
            values: o
        }, true);
    };
    e_prototype.minus = function(t) {
        if (!this.isValid) {
            return this;
        }
        const n = e.fromDurationLike(t);
        return this.plus(n.negate());
    };
    e_prototype.mapUnits = function(e) {
        if (!this.isValid) {
            return this;
        }
        const t = {};
        for (const o of Object.keys(this.values)){
            t[o] = he(e(this.values[o], o));
        }
        return on(this, {
            values: t
        }, true);
    };
    e_prototype.get = function(t) {
        return this[e.normalizeUnit(t)];
    };
    e_prototype.set = function(t) {
        if (this.isValid) {
            return on(this, {
                values: {
                    ...this.values,
                    ...ve(t, e.normalizeUnit)
                }
            });
        }
        return this;
    };
    e_prototype.reconfigure = function(e = {}) {
        const t = e;
        const { locale, numberingSystem, conversionAccuracy, matrix } = t;
        return on(this, {
            loc: this.loc.clone({
                locale,
                numberingSystem
            }),
            matrix,
            conversionAccuracy
        });
    };
    e_prototype.as = function(e) {
        if (this.isValid) {
            return this.shiftTo(e).get(e);
        }
        return NaN;
    };
    e_prototype.normalize = function() {
        if (!this.isValid) {
            return this;
        }
        const e = this.toObject();
        ((e, t)=>{
            rn.reduce((acc, item)=>{
                if (Y(t[item])) {
                    return acc;
                }
                if (acc) {
                    an(e, t, acc, t, item);
                }
                return item;
            }, null);
        })(this.matrix, e);
        return on(this, {
            values: e
        }, true);
    };
    e_prototype.shiftTo = function(...n) {
        if (!this.isValid) {
            return this;
        }
        if (n.length === 0) {
            return this;
        }
        n = n.map((t)=>e.normalizeUnit(t));
        let o;
        let a;
        const i = {};
        const l = {};
        const s = this.toObject();
        for(const u = h(nn); !(a = u()).done;){
            const c = a.value;
            if (n.indexOf(c) >= 0) {
                o = c;
                let f = 0;
                for(const d in l){
                    f += this.matrix[d][c] * l[d];
                    l[d] = 0;
                }
                if ($(s[c])) {
                    f += s[c];
                }
                const p = Math.trunc(f);
                i[c] = p;
                l[c] = (1000 * f - 1000 * p) / 1000;
                for(const v in s){
                    if (nn.indexOf(v) > nn.indexOf(c)) {
                        an(this.matrix, s, v, i, c);
                    }
                }
            } else {
                if ($(s[c])) {
                    l[c] = s[c];
                }
            }
        }
        for(const m in l){
            if (l[m] !== 0) {
                i[o] += m === o ? l[m] : l[m] / this.matrix[o][m];
            }
        }
        return on(this, {
            values: i
        }, true).normalize();
    };
    e_prototype.negate = function() {
        if (!this.isValid) {
            return this;
        }
        const e = {};
        for (const r of Object.keys(this.values)){
            e[r] = this.values[r] === 0 ? 0 : -this.values[r];
        }
        return on(this, {
            values: e
        }, true);
    };
    e_prototype.equals = function(e) {
        if (!this.isValid || !e.isValid) {
            return false;
        }
        if (!this.loc.equals(e.loc)) {
            return false;
        }
        for (const r of nn){
            o = this.values[r];
            a = e.values[r];
            if (!(o === undefined || o === 0 ? a === undefined || a === 0 : o === a)) {
                return false;
            }
        }
        var o;
        var a;
        return true;
    };
    o(e, [
        {
            key: "locale",
            get: function() {
                if (this.isValid) {
                    return this.loc.locale;
                }
                return null;
            }
        },
        {
            key: "numberingSystem",
            get: function() {
                if (this.isValid) {
                    return this.loc.numberingSystem;
                }
                return null;
            }
        },
        {
            key: "years",
            get: function() {
                if (this.isValid) {
                    return this.values.years || 0;
                }
                return NaN;
            }
        },
        {
            key: "quarters",
            get: function() {
                if (this.isValid) {
                    return this.values.quarters || 0;
                }
                return NaN;
            }
        },
        {
            key: "months",
            get: function() {
                if (this.isValid) {
                    return this.values.months || 0;
                }
                return NaN;
            }
        },
        {
            key: "weeks",
            get: function() {
                if (this.isValid) {
                    return this.values.weeks || 0;
                }
                return NaN;
            }
        },
        {
            key: "days",
            get: function() {
                if (this.isValid) {
                    return this.values.days || 0;
                }
                return NaN;
            }
        },
        {
            key: "hours",
            get: function() {
                if (this.isValid) {
                    return this.values.hours || 0;
                }
                return NaN;
            }
        },
        {
            key: "minutes",
            get: function() {
                if (this.isValid) {
                    return this.values.minutes || 0;
                }
                return NaN;
            }
        },
        {
            key: "seconds",
            get: function() {
                if (this.isValid) {
                    return this.values.seconds || 0;
                }
                return NaN;
            }
        },
        {
            key: "milliseconds",
            get: function() {
                if (this.isValid) {
                    return this.values.milliseconds || 0;
                }
                return NaN;
            }
        },
        {
            key: "isValid",
            get: function() {
                return this.invalid === null;
            }
        },
        {
            key: "invalidReason",
            get: function() {
                if (this.invalid) {
                    return this.invalid.reason;
                }
                return null;
            }
        },
        {
            key: "invalidExplanation",
            get: function() {
                if (this.invalid) {
                    return this.invalid.explanation;
                }
                return null;
            }
        }
    ]);
    return e;
})();
const sn = "Invalid Interval";
export var Interval = (()=>{
    function e(e) {
        this.s = e.start;
        this.e = e.end;
        this.invalid = e.invalid || null;
        this.isLuxonInterval = true;
    }
    e.invalid = function(t, n = null) {
        if (!t) {
            throw new w("need to specify a reason the Interval is invalid");
        }
        const r = t instanceof Pe ? t : new Pe(t, n);
        if (Settings.throwOnInvalid) {
            throw new g(r);
        }
        return new e({
            invalid: r
        });
    };
    e.fromDateTimes = function(t, n) {
        const start = cr(t);
        const end = cr(n);
        const a = ((start_1, end_1)=>{
            if (start_1 && start_1.isValid) {
                if (end_1 && end_1.isValid) {
                    if (end_1 < start_1) {
                        return Interval.invalid("end before start", `The end of an interval must be after its start, but you had start=${start_1.toISO()} and end=${end_1.toISO()}`);
                    }
                    return null;
                }
                return Interval.invalid("missing or invalid end");
            }
            return Interval.invalid("missing or invalid start");
        })(start, end);
        return a ?? new e({
            start,
            end
        });
    };
    e.after = function(t, n) {
        const r = Duration.fromDurationLike(n);
        const o = cr(t);
        return e.fromDateTimes(o, o.plus(r));
    };
    e.before = function(t, n) {
        const r = Duration.fromDurationLike(n);
        const o = cr(t);
        return e.fromDateTimes(o.minus(r), o);
    };
    e.fromISO = function(t, n) {
        const r = (t || "").split("/", 2);
        const o = r[0];
        const a = r[1];
        if (o && a) {
            let i;
            let l;
            let s;
            let u;
            try {
                l = (i = DateTime.fromISO(o, n)).isValid;
            } catch (a) {
                l = false;
            }
            try {
                u = (s = DateTime.fromISO(a, n)).isValid;
            } catch (a) {
                u = false;
            }
            if (l && u) {
                return e.fromDateTimes(i, s);
            }
            if (l) {
                const c = Duration.fromISO(a, n);
                if (c.isValid) {
                    return e.after(i, c);
                }
            } else if (u) {
                const f = Duration.fromISO(o, n);
                if (f.isValid) {
                    return e.before(s, f);
                }
            }
        }
        return e.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
    };
    e.isInterval = function(e) {
        return e && e.isLuxonInterval || false;
    };
    const e_prototype = e.prototype;
    e_prototype.length = function(e = "milliseconds") {
        if (this.isValid) {
            return this.toDuration(e).get(e);
        }
        return NaN;
    };
    e_prototype.count = function(e = "milliseconds") {
        if (!this.isValid) {
            return NaN;
        }
        const t = this.start.startOf(e);
        const n = this.end.startOf(e);
        return Math.floor(n.diff(t, e).get(e)) + 1;
    };
    e_prototype.hasSame = function(e) {
        return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e));
    };
    e_prototype.isEmpty = function() {
        return this.s.valueOf() === this.e.valueOf();
    };
    e_prototype.isAfter = function(e) {
        return !!this.isValid && this.s > e;
    };
    e_prototype.isBefore = function(e) {
        return !!this.isValid && this.e <= e;
    };
    e_prototype.contains = function(e) {
        return !!this.isValid && this.s <= e && this.e > e;
    };
    e_prototype.set = function(t = {}) {
        const n = t;
        const { start, end } = n;
        if (this.isValid) {
            return e.fromDateTimes(start || this.s, end || this.e);
        }
        return this;
    };
    e_prototype.splitAt = function(...r) {
        const _this = this;
        if (!this.isValid) {
            return [];
        }
        const a = r.map(cr).filter((e)=>_this.contains(e)).sort();
        const i = [];
        for(let l = this.s, s = 0; l < this.e;){
            const u = a[s] || this.e;
            const c = +u > +this.e ? this.e : u;
            i.push(e.fromDateTimes(l, c));
            l = c;
            s += 1;
        }
        return i;
    };
    e_prototype.splitBy = function(t) {
        const n = Duration.fromDurationLike(t);
        if (!this.isValid || !n.isValid || n.as("milliseconds") === 0) {
            return [];
        }
        let r;
        for(var o = this.s, a = 1, i = []; o < this.e;){
            const l = this.start.plus(n.mapUnits(function(e) {
                return e * a;
            }));
            r = +l > +this.e ? this.e : l;
            i.push(e.fromDateTimes(o, r));
            o = r;
            a += 1;
        }
        return i;
    };
    e_prototype.divideEqually = function(e) {
        if (this.isValid) {
            return this.splitBy(this.length() / e).slice(0, e);
        }
        return [];
    };
    e_prototype.overlaps = function(e) {
        return this.e > e.s && this.s < e.e;
    };
    e_prototype.abutsStart = function(e) {
        return !!this.isValid && +this.e == +e.s;
    };
    e_prototype.abutsEnd = function(e) {
        return !!this.isValid && +e.e == +this.s;
    };
    e_prototype.engulfs = function(e) {
        return !!this.isValid && this.s <= e.s && this.e >= e.e;
    };
    e_prototype.equals = function(e) {
        return !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e);
    };
    e_prototype.intersection = function(t) {
        if (!this.isValid) {
            return this;
        }
        const n = this.s > t.s ? this.s : t.s;
        const r = this.e < t.e ? this.e : t.e;
        if (n >= r) {
            return null;
        }
        return e.fromDateTimes(n, r);
    };
    e_prototype.union = function(t) {
        if (!this.isValid) {
            return this;
        }
        const n = this.s < t.s ? this.s : t.s;
        const r = this.e > t.e ? this.e : t.e;
        return e.fromDateTimes(n, r);
    };
    e.merge = function(e) {
        const t = e.sort((e, t)=>e.s - t.s).reduce(([n, r], item)=>{
            if (r) {
                if (r.overlaps(item) || r.abutsStart(item)) {
                    return [
                        n,
                        r.union(item)
                    ];
                }
                return [
                    n.concat([
                        r
                    ]),
                    item
                ];
            }
            return [
                n,
                item
            ];
        }, [
            [],
            null
        ]);
        const n = t[0];
        const r = t[1];
        if (r) {
            n.push(r);
        }
        return n;
    };
    e.xor = function(t) {
        let n;
        let r;
        let o = null;
        let a = 0;
        const i = [];
        const l = t.map((e)=>[
                {
                    time: e.s,
                    type: "s"
                },
                {
                    time: e.e,
                    type: "e"
                }
            ]);
        for(const s = h((n = Array.prototype).concat.apply(n, l).sort((e, t)=>e.time - t.time)); !(r = s()).done;){
            const u = r.value;
            if ((a += u.type === "s" ? 1 : -1) === 1) {
                o = u.time;
            } else {
                if (o && +o != +u.time) {
                    i.push(e.fromDateTimes(o, u.time));
                }
                o = null;
            }
        }
        return e.merge(i);
    };
    e_prototype.difference = function(...r) {
        const _this = this;
        return e.xor([
            this,
            ...r
        ]).map((e)=>_this.intersection(e)).filter((e)=>e && !e.isEmpty());
    };
    e_prototype.toString = function() {
        if (this.isValid) {
            return `[${this.s.toISO()} – ${this.e.toISO()})`;
        }
        return sn;
    };
    e_prototype.toISO = function(e) {
        if (this.isValid) {
            return `${this.s.toISO(e)}/${this.e.toISO(e)}`;
        }
        return sn;
    };
    e_prototype.toISODate = function() {
        if (this.isValid) {
            return `${this.s.toISODate()}/${this.e.toISODate()}`;
        }
        return sn;
    };
    e_prototype.toISOTime = function(e) {
        if (this.isValid) {
            return `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`;
        }
        return sn;
    };
    e_prototype.toFormat = function(e, { separator = " – " } = {}) {
        if (this.isValid) {
            return `${this.s.toFormat(e)}${separator}${this.e.toFormat(e)}`;
        }
        return sn;
    };
    e_prototype.toDuration = function(e, t) {
        if (this.isValid) {
            return this.e.diff(this.s, e, t);
        }
        return Duration.invalid(this.invalidReason);
    };
    e_prototype.mapEndpoints = function(t) {
        return e.fromDateTimes(t(this.s), t(this.e));
    };
    o(e, [
        {
            key: "start",
            get: function() {
                if (this.isValid) {
                    return this.s;
                }
                return null;
            }
        },
        {
            key: "end",
            get: function() {
                if (this.isValid) {
                    return this.e;
                }
                return null;
            }
        },
        {
            key: "isValid",
            get: function() {
                return this.invalidReason === null;
            }
        },
        {
            key: "invalidReason",
            get: function() {
                if (this.invalid) {
                    return this.invalid.reason;
                }
                return null;
            }
        },
        {
            key: "invalidExplanation",
            get: function() {
                if (this.invalid) {
                    return this.invalid.explanation;
                }
                return null;
            }
        }
    ]);
    return e;
})();
export class Info {
    static hasDST(e = Settings.defaultZone) {
        const t = DateTime.now().setZone(e).set({
            month: 12
        });
        return !e.isUniversal && t.offset !== t.set({
            month: 6
        }).offset;
    }
    static isValidIANAZone(e) {
        return IANAZone.isValidZone(e);
    }
    static normalizeZone(e) {
        return We(e, Settings.defaultZone);
    }
    static months(e = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
        return (locObj || dt.create(locale, numberingSystem, outputCalendar)).months(e);
    }
    static monthsFormat(e = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
        return (locObj || dt.create(locale, numberingSystem, outputCalendar)).months(e, true);
    }
    static weekdays(e = "long", { locale = null, numberingSystem = null, locObj } = {}) {
        return ((locObj === undefined ? null : locObj) || dt.create(locale, numberingSystem, null)).weekdays(e);
    }
    static weekdaysFormat(e = "long", { locale = null, numberingSystem = null, locObj } = {}) {
        return ((locObj === undefined ? null : locObj) || dt.create(locale, numberingSystem, null)).weekdays(e, true);
    }
    static meridiems({ locale = null } = {}) {
        return dt.create(locale).meridiems();
    }
    static eras(e = "short", { locale = null } = {}) {
        return dt.create(locale, null, "gregory").eras(e);
    }
    static features() {
        return {
            relative: J()
        };
    }
}
function fn(e, t) {
    const n = (e)=>e.toUTC(0, {
            keepLocalTime: true
        }).startOf("day").valueOf();
    const r = n(t) - n(e);
    return Math.floor(Duration.fromMillis(r).as("days"));
}
const dn = {
    arab: "[٠-٩]",
    arabext: "[۰-۹]",
    bali: "[᭐-᭙]",
    beng: "[০-৯]",
    deva: "[०-९]",
    fullwide: "[０-９]",
    gujr: "[૦-૯]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[០-៩]",
    knda: "[೦-೯]",
    laoo: "[໐-໙]",
    limb: "[᥆-᥏]",
    mlym: "[൦-൯]",
    mong: "[᠐-᠙]",
    mymr: "[၀-၉]",
    orya: "[୦-୯]",
    tamldec: "[௦-௯]",
    telu: "[౦-౯]",
    thai: "[๐-๙]",
    tibt: "[༠-༩]",
    latn: "\\d"
};
const pn = {
    arab: [
        1632,
        1641
    ],
    arabext: [
        1776,
        1785
    ],
    bali: [
        6992,
        7001
    ],
    beng: [
        2534,
        2543
    ],
    deva: [
        2406,
        2415
    ],
    fullwide: [
        65296,
        65303
    ],
    gujr: [
        2790,
        2799
    ],
    khmr: [
        6112,
        6121
    ],
    knda: [
        3302,
        3311
    ],
    laoo: [
        3792,
        3801
    ],
    limb: [
        6470,
        6479
    ],
    mlym: [
        3430,
        3439
    ],
    mong: [
        6160,
        6169
    ],
    mymr: [
        4160,
        4169
    ],
    orya: [
        2918,
        2927
    ],
    tamldec: [
        3046,
        3055
    ],
    telu: [
        3174,
        3183
    ],
    thai: [
        3664,
        3673
    ],
    tibt: [
        3872,
        3881
    ]
};
const hn = dn.hanidec.replace(/[\[|\]]/g, "").split("");
function vn({ numberingSystem }, t = "") {
    return new RegExp(`${dn[numberingSystem || "latn"]}${t}`);
}
function mn(e, t = function(e) {
    return e;
}) {
    return {
        regex: e,
        deser: function([n]) {
            return t(((e)=>{
                let t = parseInt(e, 10);
                if (isNaN(t)) {
                    t = "";
                    for(let n = 0; n < e.length; n++){
                        const r = e.charCodeAt(n);
                        if (e[n].search(dn.hanidec) !== -1) {
                            t += hn.indexOf(e[n]);
                        } else {
                            for(const o in pn){
                                const a = pn[o];
                                const i = a[0];
                                const l = a[1];
                                if (r >= i && r <= l) {
                                    t += r - i;
                                }
                            }
                        }
                    }
                    return parseInt(t, 10);
                }
                return t;
            })(n));
        }
    };
}
const gn = `[ ${String.fromCharCode(160)}]`;
const yn = new RegExp(gn, "g");
function bn(e) {
    return e.replace(/\./g, "\\.?").replace(yn, gn);
}
function Cn(e) {
    return e.replace(/\./g, "").replace(yn, " ").toLowerCase();
}
function wn(e, t) {
    if (e === null) {
        return null;
    }
    return {
        regex: RegExp(e.map(bn).join("|")),
        deser: function([r]) {
            return e.findIndex((e)=>Cn(r) === Cn(e)) + t;
        }
    };
}
function _n(e, groups) {
    return {
        regex: e,
        deser: function(e) {
            return pe(e[1], e[2]);
        },
        groups
    };
}
function xn(e) {
    return {
        regex: e,
        deser: function(e) {
            return e[0];
        }
    };
}
const Mn = {
    year: {
        "2-digit": "yy",
        numeric: "yyyyy"
    },
    month: {
        numeric: "M",
        "2-digit": "MM",
        short: "MMM",
        long: "MMMM"
    },
    day: {
        numeric: "d",
        "2-digit": "dd"
    },
    weekday: {
        short: "EEE",
        long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour: {
        numeric: "h",
        "2-digit": "hh"
    },
    minute: {
        numeric: "m",
        "2-digit": "mm"
    },
    second: {
        numeric: "s",
        "2-digit": "ss"
    },
    timeZoneName: {
        long: "ZZZZZ",
        short: "ZZZ"
    }
};
let En = null;
function kn(e, t) {
    let n;
    return (n = Array.prototype).concat.apply(n, e.map((e)=>((e, t)=>{
            if (e.literal) {
                return e;
            }
            const n = Sn(He.macroTokenToFormatOpts(e.val), t);
            if (n == null || n.includes(undefined)) {
                return e;
            }
            return n;
        })(e, t)));
}
function On(e, input, n) {
    const tokens = kn(He.parseFormat(n), e);
    const o = tokens.map((t)=>{
        n = t;
        o = vn(r = e);
        a = vn(r, "{2}");
        i = vn(r, "{3}");
        l = vn(r, "{4}");
        s = vn(r, "{6}");
        u = vn(r, "{1,2}");
        c = vn(r, "{1,3}");
        f = vn(r, "{1,6}");
        d = vn(r, "{1,9}");
        p = vn(r, "{2,4}");
        h = vn(r, "{4,6}");
        v = function(e) {
            return {
                regex: RegExp((t = e.val, t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))),
                deser: function(e) {
                    return e[0];
                },
                literal: true
            };
            var t;
        };
        m = ((e)=>{
            if (n.literal) {
                return v(e);
            }
            switch(e.val){
                case "G":
                    return wn(r.eras("short", false), 0);
                case "GG":
                    return wn(r.eras("long", false), 0);
                case "y":
                    return mn(f);
                case "yy":
                case "kk":
                    return mn(p, fe);
                case "yyyy":
                case "kkkk":
                    return mn(l);
                case "yyyyy":
                    return mn(h);
                case "yyyyyy":
                    return mn(s);
                case "M":
                case "L":
                case "d":
                case "H":
                case "h":
                case "m":
                case "q":
                case "s":
                case "W":
                    return mn(u);
                case "MM":
                case "LL":
                case "dd":
                case "HH":
                case "hh":
                case "mm":
                case "qq":
                case "ss":
                case "WW":
                    return mn(a);
                case "MMM":
                    return wn(r.months("short", true, false), 1);
                case "MMMM":
                    return wn(r.months("long", true, false), 1);
                case "LLL":
                    return wn(r.months("short", false, false), 1);
                case "LLLL":
                    return wn(r.months("long", false, false), 1);
                case "o":
                case "S":
                    return mn(c);
                case "ooo":
                case "SSS":
                    return mn(i);
                case "u":
                    return xn(d);
                case "uu":
                    return xn(u);
                case "uuu":
                case "E":
                case "c":
                    return mn(o);
                case "a":
                    return wn(r.meridiems(), 0);
                case "EEE":
                    return wn(r.weekdays("short", false, false), 1);
                case "EEEE":
                    return wn(r.weekdays("long", false, false), 1);
                case "ccc":
                    return wn(r.weekdays("short", true, false), 1);
                case "cccc":
                    return wn(r.weekdays("long", true, false), 1);
                case "Z":
                case "ZZ":
                    return _n(new RegExp(`([+-]${u.source})(?::(${a.source}))?`), 2);
                case "ZZZ":
                    return _n(new RegExp(`([+-]${u.source})(${a.source})?`), 2);
                case "z":
                    return xn(/[a-z_+-/]{1,256}?/i);
                default:
                    return v(e);
            }
        })(n) || {
            invalidReason: "missing Intl.DateTimeFormat.formatToParts support"
        };
        m.token = n;
        return m;
        var n;
        var r;
        var o;
        var a;
        var i;
        var l;
        var s;
        var u;
        var c;
        var f;
        var d;
        var p;
        var h;
        var v;
        var m;
    });
    const a = o.find((e)=>e.invalidReason);
    if (a) {
        return {
            input,
            tokens,
            invalidReason: a.invalidReason
        };
    }
    const i = ((e)=>[
            `^${e.map((e)=>e.regex).reduce((acc, item)=>`${acc}(${item.source})`, "")}\$`,
            e
        ])(o);
    const l = i[0];
    const s = i[1];
    const u = RegExp(l, "i");
    const c = ((input_1, t, n)=>{
        const r = input_1.match(t);
        if (r) {
            const o = {};
            let a = 1;
            for(const i in n){
                if (X(n, i)) {
                    const l = n[i];
                    const s = l.groups ? l.groups + 1 : 1;
                    if (!l.literal && l.token) {
                        o[l.token.val[0]] = l.deser(r.slice(a, a + s));
                    }
                    a += s;
                }
            }
            return [
                r,
                o
            ];
        }
        return [
            r,
            {}
        ];
    })(input, u, s);
    const rawMatches = c[0];
    const matches = c[1];
    const p = matches ? ((matches_1)=>{
        let t;
        let n = null;
        if (!Y(matches_1.z)) {
            n = IANAZone.create(matches_1.z);
        }
        if (!Y(matches_1.Z)) {
            if (!n) {
                n = new FixedOffsetZone(matches_1.Z);
            }
            t = matches_1.Z;
        }
        if (!Y(matches_1.q)) {
            matches_1.M = 3 * (matches_1.q - 1) + 1;
        }
        if (!Y(matches_1.h)) {
            if (matches_1.h < 12 && matches_1.a === 1) {
                matches_1.h += 12;
            } else if (matches_1.h === 12 && matches_1.a === 0) {
                matches_1.h = 0;
            }
        }
        if (matches_1.G === 0 && matches_1.y) {
            matches_1.y = -matches_1.y;
        }
        if (!Y(matches_1.u)) {
            matches_1.S = oe(matches_1.u);
        }
        return [
            Object.keys(matches_1).reduce((acc, key)=>{
                const r = ((key_1)=>{
                    switch(key_1){
                        case "S":
                            return "millisecond";
                        case "s":
                            return "second";
                        case "m":
                            return "minute";
                        case "h":
                        case "H":
                            return "hour";
                        case "d":
                            return "day";
                        case "o":
                            return "ordinal";
                        case "L":
                        case "M":
                            return "month";
                        case "y":
                            return "year";
                        case "E":
                        case "c":
                            return "weekday";
                        case "W":
                            return "weekNumber";
                        case "k":
                            return "weekYear";
                        case "q":
                            return "quarter";
                        default:
                            return null;
                    }
                })(key);
                if (r) {
                    acc[r] = matches_1[key];
                }
                return acc;
            }, {}),
            n,
            t
        ];
    })(matches) : [
        null,
        null,
        undefined
    ];
    const result = p[0];
    const v = p[1];
    const m = p[2];
    if (X(matches, "a") && X(matches, "H")) {
        throw new b("Can't include meridiem when specifying 24-hour format");
    }
    return {
        input,
        tokens,
        regex: u,
        rawMatches,
        matches,
        result,
        zone: v,
        specificOffset: m
    };
}
function Sn(e, t) {
    if (e) {
        return He.create(t, e).formatDateTimeParts((En || (En = DateTime.fromMillis(1555555555555)), En)).map((t)=>((e, n)=>{
                const t = 0;
                const { type, value } = e;
                if (type === "literal") {
                    return {
                        literal: true,
                        val: value
                    };
                }
                const a = n[type];
                let i = Mn[type];
                if (typeof i === "object") {
                    i = i[a];
                }
                if (i) {
                    return {
                        literal: false,
                        val: i
                    };
                }
            })(t, e));
    }
    return null;
}
const Ln = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334
];
const zn = [
    0,
    31,
    60,
    91,
    121,
    152,
    182,
    213,
    244,
    274,
    305,
    335
];
function Dn(e, t) {
    return new Pe("unit out of range", `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`);
}
function Tn(e, t, n) {
    const r = new Date(Date.UTC(e, t - 1, n));
    if (e < 100 && e >= 0) {
        r.setUTCFullYear(r.getUTCFullYear() - 1900);
    }
    const o = r.getUTCDay();
    if (o === 0) {
        return 7;
    }
    return o;
}
function Vn(e, month, day) {
    return day + (ie(e) ? zn : Ln)[month - 1];
}
function Hn(e, t) {
    const n = ie(e) ? zn : Ln;
    const r = n.findIndex((e)=>e < t);
    return {
        month: r + 1,
        day: t - n[r]
    };
}
function Pn(e) {
    let weekYear;
    const { year, month, day } = e;
    const i = Vn(year, month, day);
    const l = Tn(year, month, day);
    let weekNumber = Math.floor((i - l + 10) / 7);
    if (weekNumber < 1) {
        weekNumber = ce(weekYear = year - 1);
    } else if (weekNumber > ce(year)) {
        weekYear = year + 1;
        weekNumber = 1;
    } else {
        weekYear = year;
    }
    return {
        weekYear,
        weekNumber,
        weekday: l,
        ...ge(e)
    };
}
function An(e) {
    let t;
    const { weekYear, weekNumber, weekday } = e;
    const i = Tn(weekYear, 1, 4);
    const l = le(weekYear);
    let s = 7 * weekNumber + weekday - i - 3;
    if (s < 1) {
        s += le(t = weekYear - 1);
    } else if (s > l) {
        t = weekYear + 1;
        s -= le(weekYear);
    } else {
        t = weekYear;
    }
    const u = Hn(t, s);
    return {
        year: t,
        month: u.month,
        day: u.day,
        ...ge(e)
    };
}
function Rn(e) {
    const e_year = e.year;
    return {
        year: e_year,
        ordinal: Vn(e_year, e.month, e.day),
        ...ge(e)
    };
}
function jn(e) {
    const e_year = e.year;
    const n = Hn(e_year, e.ordinal);
    return {
        year: e_year,
        month: n.month,
        day: n.day,
        ...ge(e)
    };
}
function Nn(e) {
    const t = K(e.year);
    const n = ee(e.month, 1, 12);
    const r = ee(e.day, 1, se(e.year, e.month));
    if (t) {
        if (n) {
            return !r && Dn("day", e.day);
        }
        return Dn("month", e.month);
    }
    return Dn("year", e.year);
}
function In({ hour, minute, second, millisecond }) {
    const a = ee(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0;
    const i = ee(minute, 0, 59);
    const l = ee(second, 0, 59);
    const s = ee(millisecond, 0, 999);
    if (a) {
        if (i) {
            if (l) {
                return !s && Dn("millisecond", millisecond);
            }
            return Dn("second", second);
        }
        return Dn("minute", minute);
    }
    return Dn("hour", hour);
}
const Bn = "Invalid DateTime";
function Un(e) {
    return new Pe("unsupported zone", `the zone "${e.name}" is not supported`);
}
function Fn(e) {
    if (e.weekData === null) {
        e.weekData = Pn(e.c);
    }
    return e.weekData;
}
function Zn(e, t) {
    const old = {
        ts: e.ts,
        zone: e.zone,
        c: e.c,
        o: e.o,
        loc: e.loc,
        invalid: e.invalid
    };
    return new DateTime({
        ...old,
        ...t,
        old
    });
}
function qn(e, t, n) {
    let r = e - 60 * t * 1000;
    const o = n.offset(r);
    if (t === o) {
        return [
            r,
            t
        ];
    }
    r -= 60 * (o - t) * 1000;
    const a = n.offset(r);
    if (o === a) {
        return [
            r,
            o
        ];
    }
    return [
        e - 60 * Math.min(o, a) * 1000,
        Math.max(o, a)
    ];
}
function Wn(e, t) {
    const n = new Date(e += 60 * t * 1000);
    return {
        year: n.getUTCFullYear(),
        month: n.getUTCMonth() + 1,
        day: n.getUTCDate(),
        hour: n.getUTCHours(),
        minute: n.getUTCMinutes(),
        second: n.getUTCSeconds(),
        millisecond: n.getUTCMilliseconds()
    };
}
function Gn(e, t, n) {
    return qn(ue(e), t, n);
}
function Yn(e, t) {
    const n = e.o;
    const r = e.c.year + Math.trunc(t.years);
    const o = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters);
    const i = {
        ...e.c,
        year: r,
        month: o,
        day: Math.min(e.c.day, se(r, o)) + Math.trunc(t.days) + 7 * Math.trunc(t.weeks)
    };
    const l = Duration.fromObject({
        years: t.years - Math.trunc(t.years),
        quarters: t.quarters - Math.trunc(t.quarters),
        months: t.months - Math.trunc(t.months),
        weeks: t.weeks - Math.trunc(t.weeks),
        days: t.days - Math.trunc(t.days),
        hours: t.hours,
        minutes: t.minutes,
        seconds: t.seconds,
        milliseconds: t.milliseconds
    }).as("milliseconds");
    const s = qn(ue(i), n, e.zone);
    let u = s[0];
    let c = s[1];
    if (l !== 0) {
        u += l;
        c = e.zone.offset(u);
    }
    return {
        ts: u,
        o: c
    };
}
function $n(e, t, n, r, o, i) {
    const { setZone, zone } = n;
    if (e && Object.keys(e).length !== 0) {
        const u = t || zone;
        const c = DateTime.fromObject(e, {
            ...n,
            zone: u,
            specificOffset: i
        });
        if (setZone) {
            return c;
        }
        return c.setZone(zone);
    }
    return DateTime.invalid(new Pe("unparsable", `the input "${o}" can't be parsed as ${r}`));
}
function Kn(e, t, allowZ = true) {
    if (e.isValid) {
        return He.create(dt.create("en-US"), {
            allowZ,
            forceSimple: true
        }).formatDateTimeFromString(e, t);
    }
    return null;
}
function Jn(e, t) {
    const n = e.c.year > 9999 || e.c.year < 0;
    let r = "";
    if (n && e.c.year >= 0) {
        r += "+";
    }
    r += te(e.c.year, n ? 6 : 4);
    if (t) {
        r += "-";
        r += te(e.c.month);
        r += "-";
        r += te(e.c.day);
    } else {
        r += te(e.c.month);
        r += te(e.c.day);
    }
    return r;
}
function Qn(e, t, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
    let i = te(e.c.hour);
    if (t) {
        i += ":";
        i += te(e.c.minute);
        if (!(e.c.second === 0 && suppressSeconds)) {
            i += ":";
        }
    } else {
        i += te(e.c.minute);
    }
    if (!(e.c.second === 0 && suppressSeconds)) {
        i += te(e.c.second);
        if (!(e.c.millisecond === 0 && suppressMilliseconds)) {
            i += ".";
            i += te(e.c.millisecond, 3);
        }
    }
    if (includeOffset) {
        if (e.isOffsetFixed && e.offset === 0 && !extendedZone) {
            i += "Z";
        } else if (e.o < 0) {
            i += "-";
            i += te(Math.trunc(-e.o / 60));
            i += ":";
            i += te(Math.trunc(-e.o % 60));
        } else {
            i += "+";
            i += te(Math.trunc(e.o / 60));
            i += ":";
            i += te(Math.trunc(e.o % 60));
        }
    }
    if (extendedZone) {
        i += `[${e.zone.ianaName}]`;
    }
    return i;
}
const Xn = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
};
const er = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
};
const tr = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
};
const nr = [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
];
const rr = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond"
];
const or = [
    "year",
    "ordinal",
    "hour",
    "minute",
    "second",
    "millisecond"
];
function ar(e) {
    const t = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal"
    }[e.toLowerCase()];
    if (!t) {
        throw new C(e);
    }
    return t;
}
function ir(e, t) {
    let n;
    let r;
    const o = We(t.zone, Settings.defaultZone);
    const a = dt.fromObject(t);
    const i = Settings.now();
    if (Y(e.year)) {
        n = i;
    } else {
        for (const u of nr){
            if (Y(e[u])) {
                e[u] = Xn[u];
            }
        }
        const c = Nn(e) || In(e);
        if (c) {
            return DateTime.invalid(c);
        }
        const f = Gn(e, o.offset(i), o);
        n = f[0];
        r = f[1];
    }
    return new DateTime({
        ts: n,
        zone: o,
        loc: a,
        o: r
    });
}
function lr(e, t, n) {
    const r = !!Y(n.round) || n.round;
    const o = (e, o)=>{
        e = ae(e, r || n.calendary ? 0 : 2, true);
        return t.loc.clone(n).relFormatter(n).format(e, o);
    };
    const a = (r)=>{
        if (n.calendary) {
            if (t.hasSame(e, r)) {
                return 0;
            }
            return t.startOf(r).diff(e.startOf(r), r).get(r);
        }
        return t.diff(e, r).get(r);
    };
    if (n.unit) {
        return o(a(n.unit), n.unit);
    }
    for (const s of n.units){
        const u = a(s);
        if (Math.abs(u) >= 1) {
            return o(u, s);
        }
    }
    return o(e > t ? -0 : 0, n.units[n.units.length - 1]);
}
function sr(e) {
    let t;
    let n = {};
    if (e.length > 0 && typeof e[e.length - 1] === "object") {
        n = e[e.length - 1];
        t = Array.from(e).slice(0, e.length - 1);
    } else {
        t = Array.from(e);
    }
    return [
        n,
        t
    ];
}
export var DateTime = (()=>{
    function e(e) {
        const t = e.zone || Settings.defaultZone;
        let n = e.invalid || (Number.isNaN(e.ts) ? new Pe("invalid input") : null) || (t.isValid ? null : Un(t));
        this.ts = Y(e.ts) ? Settings.now() : e.ts;
        let r = null;
        let o = null;
        if (!n) {
            if (e.old && e.old.ts === this.ts && e.old.zone.equals(t)) {
                const a = [
                    e.old.c,
                    e.old.o
                ];
                r = a[0];
                o = a[1];
            } else {
                const i = t.offset(this.ts);
                r = Wn(this.ts, i);
                r = (n = Number.isNaN(r.year) ? new Pe("invalid input") : null) ? null : r;
                o = n ? null : i;
            }
        }
        this._zone = t;
        this.loc = e.loc || dt.create();
        this.invalid = n;
        this.weekData = null;
        this.c = r;
        this.o = o;
        this.isLuxonDateTime = true;
    }
    e.now = function() {
        return new e({});
    };
    e.local = function() {
        const e = sr(arguments);
        const t = e[0];
        const n = e[1];
        const r = n[0];
        const o = n[1];
        const a = n[2];
        const i = n[3];
        const l = n[4];
        const s = n[5];
        const u = n[6];
        return ir({
            year: r,
            month: o,
            day: a,
            hour: i,
            minute: l,
            second: s,
            millisecond: u
        }, t);
    };
    e.utc = function() {
        const e = sr(arguments);
        const t = e[0];
        const n = e[1];
        const r = n[0];
        const o = n[1];
        const a = n[2];
        const i = n[3];
        const l = n[4];
        const s = n[5];
        const u = n[6];
        t.zone = FixedOffsetZone.utcInstance;
        return ir({
            year: r,
            month: o,
            day: a,
            hour: i,
            minute: l,
            second: s,
            millisecond: u
        }, t);
    };
    e.fromJSDate = function(t, n = {}) {
        let r;
        r = t;
        const o = Object.prototype.toString.call(r) === "[object Date]" ? t.valueOf() : NaN;
        if (Number.isNaN(o)) {
            return e.invalid("invalid input");
        }
        const a = We(n.zone, Settings.defaultZone);
        if (a.isValid) {
            return new e({
                ts: o,
                zone: a,
                loc: dt.fromObject(n)
            });
        }
        return e.invalid(Un(a));
    };
    e.fromMillis = function(t, n = {}) {
        if ($(t)) {
            if (t < -8640000000000000 || t > 8640000000000000) {
                return e.invalid("Timestamp out of range");
            }
            return new e({
                ts: t,
                zone: We(n.zone, Settings.defaultZone),
                loc: dt.fromObject(n)
            });
        }
        throw new w(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`);
    };
    e.fromSeconds = function(t, n = {}) {
        if ($(t)) {
            return new e({
                ts: 1000 * t,
                zone: We(n.zone, Settings.defaultZone),
                loc: dt.fromObject(n)
            });
        }
        throw new w("fromSeconds requires a numerical input");
    };
    e.fromObject = function(t, n = {}) {
        t = t || {};
        const r = We(n.zone, Settings.defaultZone);
        if (!r.isValid) {
            return e.invalid(Un(r));
        }
        const o = Settings.now();
        const a = Y(n.specificOffset) ? r.offset(o) : n.specificOffset;
        const i = ve(t, ar);
        const l = !Y(i.ordinal);
        const s = !Y(i.year);
        const u = !Y(i.month) || !Y(i.day);
        const c = s || u;
        const f = i.weekYear || i.weekNumber;
        const d = dt.fromObject(n);
        if ((c || l) && f) {
            throw new b("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        }
        if (u && l) {
            throw new b("Can't mix ordinal dates with month/day");
        }
        let p;
        let v;
        const m = f || i.weekday && !c;
        let g = Wn(o, a);
        if (m) {
            p = rr;
            v = er;
            g = Pn(g);
        } else if (l) {
            p = or;
            v = tr;
            g = Rn(g);
        } else {
            p = nr;
            v = Xn;
        }
        let y;
        let C = false;
        for(const w = h(p); !(y = w()).done;){
            const _ = y.value;
            if (Y(i[_])) {
                i[_] = C ? v[_] : g[_];
            } else {
                C = true;
            }
        }
        const x = (m ? ((e)=>{
            const t = K(e.weekYear);
            const n = ee(e.weekNumber, 1, ce(e.weekYear));
            const r = ee(e.weekday, 1, 7);
            if (t) {
                if (n) {
                    return !r && Dn("weekday", e.weekday);
                }
                return Dn("week", e.week);
            }
            return Dn("weekYear", e.weekYear);
        })(i) : l ? ((e)=>{
            const t = K(e.year);
            const n = ee(e.ordinal, 1, le(e.year));
            if (t) {
                return !n && Dn("ordinal", e.ordinal);
            }
            return Dn("year", e.year);
        })(i) : Nn(i)) || In(i);
        if (x) {
            return e.invalid(x);
        }
        const M = Gn(m ? An(i) : l ? jn(i) : i, a, r);
        const E = new e({
            ts: M[0],
            zone: r,
            o: M[1],
            loc: d
        });
        if (i.weekday && c && t.weekday !== E.weekday) {
            return e.invalid("mismatched weekday", `you can't specify both a weekday of ${i.weekday} and a date of ${E.toISO()}`);
        }
        return E;
    };
    e.fromISO = function(e, t = {}) {
        const n = ((e)=>vt(e, [
                Bt,
                qt
            ], [
                Ut,
                Wt
            ], [
                Ft,
                Gt
            ], [
                Zt,
                Yt
            ]))(e);
        return $n(n[0], n[1], t, "ISO 8601", e);
    };
    e.fromRFC2822 = function(e, t = {}) {
        const n = ((e)=>vt(((e)=>e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim())(e), [
                Ht,
                Pt
            ]))(e);
        return $n(n[0], n[1], t, "RFC 2822", e);
    };
    e.fromHTTP = function(e, t = {}) {
        const n = ((e)=>vt(e, [
                At,
                Nt
            ], [
                Rt,
                Nt
            ], [
                jt,
                It
            ]))(e);
        return $n(n[0], n[1], t, "HTTP", t);
    };
    e.fromFormat = function(t, n, r = {}) {
        if (Y(t) || Y(n)) {
            throw new w("fromFormat requires an input string and a format");
        }
        const { locale = null, numberingSystem = null } = r;
        const u = ((e, t, n)=>{
            const r = On(e, t, n);
            return [
                r.result,
                r.zone,
                r.specificOffset,
                r.invalidReason
            ];
        })(dt.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
        }), t, n);
        const c = u[0];
        const f = u[1];
        const d = u[2];
        const p = u[3];
        if (p) {
            return e.invalid(p);
        }
        return $n(c, f, r, `format ${n}`, t, d);
    };
    e.fromString = function(t, n, r = {}) {
        return e.fromFormat(t, n, r);
    };
    e.fromSQL = function(e, t = {}) {
        const n = ((e)=>vt(e, [
                Kt,
                qt
            ], [
                Jt,
                Qt
            ]))(e);
        return $n(n[0], n[1], t, "SQL", e);
    };
    e.invalid = function(t, n = null) {
        if (!t) {
            throw new w("need to specify a reason the DateTime is invalid");
        }
        const r = t instanceof Pe ? t : new Pe(t, n);
        if (Settings.throwOnInvalid) {
            throw new m(r);
        }
        return new e({
            invalid: r
        });
    };
    e.isDateTime = function(e) {
        return e && e.isLuxonDateTime || false;
    };
    e.parseFormatForOpts = function(e, t = {}) {
        const n = Sn(e, dt.fromObject(t));
        if (n) {
            return n.map((e)=>{
                if (e) {
                    return e.val;
                }
                return null;
            }).join("");
        }
        return null;
    };
    e.expandFormat = function(e, t = {}) {
        return kn(He.parseFormat(e), dt.fromObject(t)).map((e)=>e.val).join("");
    };
    const e_prototype = e.prototype;
    e_prototype.get = function(e) {
        return this[e];
    };
    e_prototype.resolvedLocaleOptions = function(e = {}) {
        const t = He.create(this.loc.clone(e), e).resolvedOptions(this);
        return {
            locale: t.locale,
            numberingSystem: t.numberingSystem,
            outputCalendar: t.calendar
        };
    };
    e_prototype.toUTC = function(e = 0, t = {}) {
        return this.setZone(FixedOffsetZone.instance(e), t);
    };
    e_prototype.toLocal = function() {
        return this.setZone(Settings.defaultZone);
    };
    e_prototype.setZone = function(t, { keepLocalTime = false, keepCalendarTime = false } = {}) {
        if ((t = We(t, Settings.defaultZone)).equals(this.zone)) {
            return this;
        }
        if (t.isValid) {
            let s = this.ts;
            if (keepLocalTime || keepCalendarTime) {
                const u = t.offset(this.ts);
                s = Gn(this.toObject(), u, t)[0];
            }
            return Zn(this, {
                ts: s,
                zone: t
            });
        }
        return e.invalid(Un(t));
    };
    e_prototype.reconfigure = function(e = {}) {
        const t = e;
        const { locale, numberingSystem, outputCalendar } = t;
        return Zn(this, {
            loc: this.loc.clone({
                locale,
                numberingSystem,
                outputCalendar
            })
        });
    };
    e_prototype.setLocale = function(locale) {
        return this.reconfigure({
            locale
        });
    };
    e_prototype.set = function(e) {
        if (!this.isValid) {
            return this;
        }
        let t;
        const n = ve(e, ar);
        const r = !Y(n.weekYear) || !Y(n.weekNumber) || !Y(n.weekday);
        const o = !Y(n.ordinal);
        const i = !Y(n.year);
        const l = !Y(n.month) || !Y(n.day);
        const s = i || l;
        const u = n.weekYear || n.weekNumber;
        if ((s || o) && u) {
            throw new b("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
        }
        if (l && o) {
            throw new b("Can't mix ordinal dates with month/day");
        }
        if (r) {
            t = An({
                ...Pn(this.c),
                ...n
            });
        } else if (Y(n.ordinal)) {
            t = {
                ...this.toObject(),
                ...n
            };
            if (Y(n.day)) {
                t.day = Math.min(se(t.year, t.month), t.day);
            }
        } else {
            t = jn({
                ...Rn(this.c),
                ...n
            });
        }
        const c = Gn(t, this.o, this.zone);
        return Zn(this, {
            ts: c[0],
            o: c[1]
        });
    };
    e_prototype.plus = function(e) {
        if (this.isValid) {
            return Zn(this, Yn(this, Duration.fromDurationLike(e)));
        }
        return this;
    };
    e_prototype.minus = function(e) {
        if (this.isValid) {
            return Zn(this, Yn(this, Duration.fromDurationLike(e).negate()));
        }
        return this;
    };
    e_prototype.startOf = function(e) {
        if (!this.isValid) {
            return this;
        }
        const t = {};
        const n = Duration.normalizeUnit(e);
        switch(n){
            case "years":
                t.month = 1;
            case "quarters":
            case "months":
                t.day = 1;
            case "weeks":
            case "days":
                t.hour = 0;
            case "hours":
                t.minute = 0;
            case "minutes":
                t.second = 0;
            case "seconds":
                t.millisecond = 0;
        }
        if (n === "weeks") {
            t.weekday = 1;
        }
        if (n === "quarters") {
            const r = Math.ceil(this.month / 3);
            t.month = 3 * (r - 1) + 1;
        }
        return this.set(t);
    };
    e_prototype.endOf = function(e) {
        if (this.isValid) {
            return this.plus({
                [e]: 1
            }).startOf(e).minus(1);
        }
        return this;
    };
    e_prototype.toFormat = function(e, t = {}) {
        if (this.isValid) {
            return He.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e);
        }
        return Bn;
    };
    e_prototype.toLocaleString = function(e = D_1, t = {}) {
        if (this.isValid) {
            return He.create(this.loc.clone(t), e).formatDateTime(this);
        }
        return Bn;
    };
    e_prototype.toLocaleParts = function(e = {}) {
        if (this.isValid) {
            return He.create(this.loc.clone(e), e).formatDateTimeParts(this);
        }
        return [];
    };
    e_prototype.toISO = function({ format = "extended", suppressSeconds = false, suppressMilliseconds = false, includeOffset = true, extendedZone = false } = {}) {
        if (!this.isValid) {
            return null;
        }
        const d = format === "extended";
        let p = Jn(this, d);
        return (p += "T") + Qn(this, d, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    };
    e_prototype.toISODate = function({ format = "extended" } = {}) {
        if (this.isValid) {
            return Jn(this, format === "extended");
        }
        return null;
    };
    e_prototype.toISOWeekDate = function() {
        return Kn(this, "kkkk-'W'WW-c");
    };
    e_prototype.toISOTime = function({ suppressMilliseconds = false, suppressSeconds = false, includeOffset = true, includePrefix = false, extendedZone = false, format = "extended" } = {}) {
        if (this.isValid) {
            return (includePrefix ? "T" : "") + Qn(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
        }
        return null;
    };
    e_prototype.toRFC2822 = function() {
        return Kn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    };
    e_prototype.toHTTP = function() {
        return Kn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    };
    e_prototype.toSQLDate = function() {
        if (this.isValid) {
            return Jn(this, true);
        }
        return null;
    };
    e_prototype.toSQLTime = function({ includeOffset = true, includeZone = false, includeOffsetSpace } = {}) {
        let l = "HH:mm:ss.SSS";
        if (includeZone || includeOffset) {
            if (includeOffsetSpace === undefined || includeOffsetSpace) {
                l += " ";
            }
            if (includeZone) {
                l += "z";
            } else if (includeOffset) {
                l += "ZZ";
            }
        }
        return Kn(this, l, true);
    };
    e_prototype.toSQL = function(e = {}) {
        if (this.isValid) {
            return `${this.toSQLDate()} ${this.toSQLTime(e)}`;
        }
        return null;
    };
    e_prototype.toString = function() {
        if (this.isValid) {
            return this.toISO();
        }
        return Bn;
    };
    e_prototype.valueOf = function() {
        return this.toMillis();
    };
    e_prototype.toMillis = function() {
        if (this.isValid) {
            return this.ts;
        }
        return NaN;
    };
    e_prototype.toSeconds = function() {
        if (this.isValid) {
            return this.ts / 1000;
        }
        return NaN;
    };
    e_prototype.toUnixInteger = function() {
        if (this.isValid) {
            return Math.floor(this.ts / 1000);
        }
        return NaN;
    };
    e_prototype.toJSON = function() {
        return this.toISO();
    };
    e_prototype.toBSON = function() {
        return this.toJSDate();
    };
    e_prototype.toObject = function(e = {}) {
        if (!this.isValid) {
            return {};
        }
        const t = {
            ...this.c
        };
        if (e.includeConfig) {
            t.outputCalendar = this.outputCalendar;
            t.numberingSystem = this.loc.numberingSystem;
            t.locale = this.loc.locale;
        }
        return t;
    };
    e_prototype.toJSDate = function() {
        return new Date(this.isValid ? this.ts : NaN);
    };
    e_prototype.diff = function(e, t = "milliseconds", n = {}) {
        if (!this.isValid || !e.isValid) {
            return Duration.invalid("created by diffing an invalid DateTime");
        }
        let r;
        const o = {
            locale: this.locale,
            numberingSystem: this.numberingSystem,
            ...n
        };
        const i = (r = t, Array.isArray(r) ? r : [
            r
        ]).map(Duration.normalizeUnit);
        const l = e.valueOf() > this.valueOf();
        const s = ((e, t, n, r)=>{
            const a = ((e, t, n)=>{
                let r;
                let o;
                const a = {};
                for (const [u, c] of [
                    [
                        "years",
                        function(e, t) {
                            return t.year - e.year;
                        }
                    ],
                    [
                        "quarters",
                        function(e, t) {
                            return t.quarter - e.quarter;
                        }
                    ],
                    [
                        "months",
                        function(e, t) {
                            return t.month - e.month + 12 * (t.year - e.year);
                        }
                    ],
                    [
                        "weeks",
                        function(e, t) {
                            const n = fn(e, t);
                            return (n - n % 7) / 7;
                        }
                    ],
                    [
                        "days",
                        fn
                    ]
                ]){
                    if (n.indexOf(u) >= 0) {
                        r = u;
                        let p = c(e, t);
                        if ((o = e.plus({
                            [u]: p
                        })) > t) {
                            e = e.plus({
                                [u]: p - 1
                            });
                            p -= 1;
                        } else {
                            e = o;
                        }
                        a[u] = p;
                    }
                }
                return [
                    e,
                    a,
                    o,
                    r
                ];
            })(e, t, n);
            const i = a[0];
            const l = a[1];
            let s = a[2];
            const u = a[3];
            const c = t - i;
            const f = n.filter((e)=>[
                    "hours",
                    "minutes",
                    "seconds",
                    "milliseconds"
                ].indexOf(e) >= 0);
            if (f.length === 0) {
                if (s < t) {
                    s = i.plus({
                        [u]: 1
                    });
                }
                if (s !== i) {
                    l[u] = (l[u] || 0) + c / (s - i);
                }
            }
            let d;
            const p = Duration.fromObject(l, r);
            if (f.length > 0) {
                return (d = Duration.fromMillis(c, r)).shiftTo.apply(d, f).plus(p);
            }
            return p;
        })(l ? this : e, l ? e : this, i, o);
        if (l) {
            return s.negate();
        }
        return s;
    };
    e_prototype.diffNow = function(t = "milliseconds", n = {}) {
        return this.diff(e.now(), t, n);
    };
    e_prototype.until = function(e) {
        if (this.isValid) {
            return Interval.fromDateTimes(this, e);
        }
        return this;
    };
    e_prototype.hasSame = function(e, t) {
        if (!this.isValid) {
            return false;
        }
        const n = e.valueOf();
        const r = this.setZone(e.zone, {
            keepLocalTime: true
        });
        return r.startOf(t) <= n && n <= r.endOf(t);
    };
    e_prototype.equals = function(e) {
        return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
    };
    e_prototype.toRelative = function(t = {}) {
        if (!this.isValid) {
            return null;
        }
        const n = t.base || e.fromObject({}, {
            zone: this.zone
        });
        const r = t.padding ? this < n ? -t.padding : t.padding : 0;
        let units = [
            "years",
            "months",
            "days",
            "hours",
            "minutes",
            "seconds"
        ];
        let t_unit = t.unit;
        if (Array.isArray(t.unit)) {
            units = t.unit;
            t_unit = undefined;
        }
        return lr(n, this.plus(r), {
            ...t,
            numeric: "always",
            units,
            unit: t_unit
        });
    };
    e_prototype.toRelativeCalendar = function(t = {}) {
        if (this.isValid) {
            return lr(t.base || e.fromObject({}, {
                zone: this.zone
            }), this, {
                ...t,
                numeric: "auto",
                units: [
                    "years",
                    "months",
                    "days"
                ],
                calendary: true
            });
        }
        return null;
    };
    e.min = function(...n) {
        if (!n.every(e.isDateTime)) {
            throw new w("min requires all arguments be DateTimes");
        }
        return Q(n, (e)=>e.valueOf(), Math.min);
    };
    e.max = function(...n) {
        if (!n.every(e.isDateTime)) {
            throw new w("max requires all arguments be DateTimes");
        }
        return Q(n, (e)=>e.valueOf(), Math.max);
    };
    e.fromFormatExplain = function(e, t, { locale = null, numberingSystem = null } = {}) {
        return On(dt.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
        }), e, t);
    };
    e.fromStringExplain = function(t, n, r = {}) {
        return e.fromFormatExplain(t, n, r);
    };
    o(e, [
        {
            key: "isValid",
            get: function() {
                return this.invalid === null;
            }
        },
        {
            key: "invalidReason",
            get: function() {
                if (this.invalid) {
                    return this.invalid.reason;
                }
                return null;
            }
        },
        {
            key: "invalidExplanation",
            get: function() {
                if (this.invalid) {
                    return this.invalid.explanation;
                }
                return null;
            }
        },
        {
            key: "locale",
            get: function() {
                if (this.isValid) {
                    return this.loc.locale;
                }
                return null;
            }
        },
        {
            key: "numberingSystem",
            get: function() {
                if (this.isValid) {
                    return this.loc.numberingSystem;
                }
                return null;
            }
        },
        {
            key: "outputCalendar",
            get: function() {
                if (this.isValid) {
                    return this.loc.outputCalendar;
                }
                return null;
            }
        },
        {
            key: "zone",
            get: function() {
                return this._zone;
            }
        },
        {
            key: "zoneName",
            get: function() {
                if (this.isValid) {
                    return this.zone.name;
                }
                return null;
            }
        },
        {
            key: "year",
            get: function() {
                if (this.isValid) {
                    return this.c.year;
                }
                return NaN;
            }
        },
        {
            key: "quarter",
            get: function() {
                if (this.isValid) {
                    return Math.ceil(this.c.month / 3);
                }
                return NaN;
            }
        },
        {
            key: "month",
            get: function() {
                if (this.isValid) {
                    return this.c.month;
                }
                return NaN;
            }
        },
        {
            key: "day",
            get: function() {
                if (this.isValid) {
                    return this.c.day;
                }
                return NaN;
            }
        },
        {
            key: "hour",
            get: function() {
                if (this.isValid) {
                    return this.c.hour;
                }
                return NaN;
            }
        },
        {
            key: "minute",
            get: function() {
                if (this.isValid) {
                    return this.c.minute;
                }
                return NaN;
            }
        },
        {
            key: "second",
            get: function() {
                if (this.isValid) {
                    return this.c.second;
                }
                return NaN;
            }
        },
        {
            key: "millisecond",
            get: function() {
                if (this.isValid) {
                    return this.c.millisecond;
                }
                return NaN;
            }
        },
        {
            key: "weekYear",
            get: function() {
                if (this.isValid) {
                    return Fn(this).weekYear;
                }
                return NaN;
            }
        },
        {
            key: "weekNumber",
            get: function() {
                if (this.isValid) {
                    return Fn(this).weekNumber;
                }
                return NaN;
            }
        },
        {
            key: "weekday",
            get: function() {
                if (this.isValid) {
                    return Fn(this).weekday;
                }
                return NaN;
            }
        },
        {
            key: "ordinal",
            get: function() {
                if (this.isValid) {
                    return Rn(this.c).ordinal;
                }
                return NaN;
            }
        },
        {
            key: "monthShort",
            get: function() {
                if (this.isValid) {
                    return Info.months("short", {
                        locObj: this.loc
                    })[this.month - 1];
                }
                return null;
            }
        },
        {
            key: "monthLong",
            get: function() {
                if (this.isValid) {
                    return Info.months("long", {
                        locObj: this.loc
                    })[this.month - 1];
                }
                return null;
            }
        },
        {
            key: "weekdayShort",
            get: function() {
                if (this.isValid) {
                    return Info.weekdays("short", {
                        locObj: this.loc
                    })[this.weekday - 1];
                }
                return null;
            }
        },
        {
            key: "weekdayLong",
            get: function() {
                if (this.isValid) {
                    return Info.weekdays("long", {
                        locObj: this.loc
                    })[this.weekday - 1];
                }
                return null;
            }
        },
        {
            key: "offset",
            get: function() {
                if (this.isValid) {
                    return +this.o;
                }
                return NaN;
            }
        },
        {
            key: "offsetNameShort",
            get: function() {
                if (this.isValid) {
                    return this.zone.offsetName(this.ts, {
                        format: "short",
                        locale: this.locale
                    });
                }
                return null;
            }
        },
        {
            key: "offsetNameLong",
            get: function() {
                if (this.isValid) {
                    return this.zone.offsetName(this.ts, {
                        format: "long",
                        locale: this.locale
                    });
                }
                return null;
            }
        },
        {
            key: "isOffsetFixed",
            get: function() {
                if (this.isValid) {
                    return this.zone.isUniversal;
                }
                return null;
            }
        },
        {
            key: "isInDST",
            get: function() {
                return !this.isOffsetFixed && (this.offset > this.set({
                    month: 1,
                    day: 1
                }).offset || this.offset > this.set({
                    month: 5
                }).offset);
            }
        },
        {
            key: "isInLeapYear",
            get: function() {
                return ie(this.year);
            }
        },
        {
            key: "daysInMonth",
            get: function() {
                return se(this.year, this.month);
            }
        },
        {
            key: "daysInYear",
            get: function() {
                if (this.isValid) {
                    return le(this.year);
                }
                return NaN;
            }
        },
        {
            key: "weeksInWeekYear",
            get: function() {
                if (this.isValid) {
                    return ce(this.weekYear);
                }
                return NaN;
            }
        }
    ], [
        {
            key: "DATE_SHORT",
            get: function() {
                return D_1;
            }
        },
        {
            key: "DATE_MED",
            get: function() {
                return DD;
            }
        },
        {
            key: "DATE_MED_WITH_WEEKDAY",
            get: function() {
                return S;
            }
        },
        {
            key: "DATE_FULL",
            get: function() {
                return DDD;
            }
        },
        {
            key: "DATE_HUGE",
            get: function() {
                return DDDD;
            }
        },
        {
            key: "TIME_SIMPLE",
            get: function() {
                return t;
            }
        },
        {
            key: "TIME_WITH_SECONDS",
            get: function() {
                return tt;
            }
        },
        {
            key: "TIME_WITH_SHORT_OFFSET",
            get: function() {
                return ttt;
            }
        },
        {
            key: "TIME_WITH_LONG_OFFSET",
            get: function() {
                return tttt;
            }
        },
        {
            key: "TIME_24_SIMPLE",
            get: function() {
                return T_1;
            }
        },
        {
            key: "TIME_24_WITH_SECONDS",
            get: function() {
                return TT;
            }
        },
        {
            key: "TIME_24_WITH_SHORT_OFFSET",
            get: function() {
                return TTT;
            }
        },
        {
            key: "TIME_24_WITH_LONG_OFFSET",
            get: function() {
                return TTTT;
            }
        },
        {
            key: "DATETIME_SHORT",
            get: function() {
                return f_1;
            }
        },
        {
            key: "DATETIME_SHORT_WITH_SECONDS",
            get: function() {
                return F_1;
            }
        },
        {
            key: "DATETIME_MED",
            get: function() {
                return ff;
            }
        },
        {
            key: "DATETIME_MED_WITH_SECONDS",
            get: function() {
                return FF;
            }
        },
        {
            key: "DATETIME_MED_WITH_WEEKDAY",
            get: function() {
                return F;
            }
        },
        {
            key: "DATETIME_FULL",
            get: function() {
                return fff;
            }
        },
        {
            key: "DATETIME_FULL_WITH_SECONDS",
            get: function() {
                return FFF;
            }
        },
        {
            key: "DATETIME_HUGE",
            get: function() {
                return ffff;
            }
        },
        {
            key: "DATETIME_HUGE_WITH_SECONDS",
            get: function() {
                return FFFF;
            }
        }
    ]);
    return e;
})();
function cr(e) {
    if (DateTime.isDateTime(e)) {
        return e;
    }
    if (e && e.valueOf && $(e.valueOf())) {
        return DateTime.fromJSDate(e);
    }
    if (e && typeof e === "object") {
        return DateTime.fromObject(e);
    }
    throw new w(`Unknown datetime argument: ${e}, of type ${typeof e}`);
}
export const VERSION = "3.0.3";
