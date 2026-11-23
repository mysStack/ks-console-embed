import module748 from "./module-748.js";
import module750 from "./module-750.js";
class a {
    constructor(e, t){
        this._options = t;
        this._utc = t.utc || false;
        this._tz = this._utc ? "UTC" : t.tz;
        this._currentDate = new module748(t.currentDate, this._tz);
        this._startDate = t.startDate ? new module748(t.startDate, this._tz) : null;
        this._endDate = t.endDate ? new module748(t.endDate, this._tz) : null;
        this._isIterator = t.iterator || false;
        this._hasIterated = false;
        this._nthDayOfWeek = t.nthDayOfWeek || 0;
        this.fields = a._freezeFields(e);
    }
    static _isValidConstraintChar(e, t) {
        return typeof t === "string" && e.chars.some((e)=>t.indexOf(e) > -1);
    }
    static _parseField(e, t, n) {
        switch(e){
            case "month":
            case "dayOfWeek":
                var r = a.aliases[e];
                t = t.replace(/[a-z]{3}/gi, (e)=>{
                    e = e.toLowerCase();
                    if (r[e] !== undefined) {
                        return r[e];
                    }
                    throw new Error(`Validation error, cannot resolve alias "${e}"`);
                });
        }
        if (!a.validCharacters[e].test(t)) {
            throw new Error(`Invalid characters, got value: ${t}`);
        }
        function o(e) {
            let t = e.split("/");
            if (t.length > 1) {
                if (t[0] == +t[0]) {
                    t = [
                        `${t[0]}-${n.max}`,
                        t[1]
                    ];
                }
                return i(t[0], t[t.length - 1]);
            }
            return i(e, 1);
        }
        function i(e, t) {
            const r = [];
            const o = e.split("-");
            if (o.length > 1) {
                if (o.length < 2) {
                    return +e;
                }
                if (!o[0].length) {
                    if (!o[1].length) {
                        throw new Error(`Invalid range: ${e}`);
                    }
                    return +e;
                }
                const a = +o[0];
                const i = +o[1];
                if (Number.isNaN(a) || Number.isNaN(i) || a < n.min || i > n.max) {
                    throw new Error(`Constraint error, got range ${a}-${i} expected range ${n.min}-${n.max}`);
                }
                if (a >= i) {
                    throw new Error(`Invalid range: ${e}`);
                }
                let l = +t;
                if (Number.isNaN(l) || l <= 0) {
                    throw new Error(`Constraint error, cannot repeat at every ${l} time.`);
                }
                for(let s = a, u = i; s <= u; s++){
                    if (l > 0 && l % t == 0) {
                        l = 1;
                        r.push(s);
                    } else {
                        l++;
                    }
                }
                return r;
            }
            if (Number.isNaN(+e)) {
                return e;
            }
            return +e;
        }
        if (t.indexOf("*") !== -1) {
            t = t.replace(/\*/g, `${n.min}-${n.max}`);
        } else if (t.indexOf("?") !== -1) {
            t = t.replace(/\?/g, `${n.min}-${n.max}`);
        }
        return ((t)=>{
            const r = [];
            function i(t) {
                if (t instanceof Array) {
                    for(let o = 0, i = t.length; o < i; o++){
                        const l = t[o];
                        if (a._isValidConstraintChar(n, l)) {
                            r.push(l);
                        } else {
                            if (typeof l !== "number" || Number.isNaN(l) || l < n.min || l > n.max) {
                                throw new Error(`Constraint error, got value ${l} expected range ${n.min}-${n.max}`);
                            }
                            r.push(l);
                        }
                    }
                } else {
                    if (a._isValidConstraintChar(n, t)) {
                        return void r.push(t);
                    }
                    let s = +t;
                    if (Number.isNaN(s) || s < n.min || s > n.max) {
                        throw new Error(`Constraint error, got value ${t} expected range ${n.min}-${n.max}`);
                    }
                    if (e === "dayOfWeek") {
                        s %= 7;
                    }
                    r.push(s);
                }
            }
            const l = t.split(",");
            if (!l.every((e)=>e.length > 0)) {
                throw new Error("Invalid list value format");
            }
            if (l.length > 1) {
                for(let s = 0, u = l.length; s < u; s++){
                    i(o(l[s]));
                }
            } else {
                i(o(t));
            }
            r.sort(a._sortCompareFn);
            return r;
        })(t);
    }
    static _sortCompareFn(e, t) {
        const n = typeof e === "number";
        const r = typeof t === "number";
        if (n && r) {
            return e - t;
        }
        if (!n && r) {
            return 1;
        }
        if (n && !r) {
            return -1;
        }
        return e.localeCompare(t);
    }
    static _handleMaxDaysInMonth(e) {
        if (e.month.length === 1) {
            const t = a.daysInMonth[e.month[0] - 1];
            if (e.dayOfMonth[0] > t) {
                throw new Error("Invalid explicit day of month definition");
            }
            return e.dayOfMonth.filter((e)=>e === "L" || e <= t).sort(a._sortCompareFn);
        }
    }
    static _freezeFields(e) {
        for(let t = 0, n = a.map.length; t < n; ++t){
            const r = a.map[t];
            const o = e[r];
            e[r] = Object.freeze(o);
        }
        return Object.freeze(e);
    }
    _applyTimezoneShift(e, t, n) {
        if (n === "Month" || n === "Day") {
            const r = e.getTime();
            e[t + n]();
            if (r === e.getTime()) {
                if (e.getMinutes() === 0 && e.getSeconds() === 0) {
                    e.addHour();
                } else if (e.getMinutes() === 59 && e.getSeconds() === 59) {
                    e.subtractHour();
                }
            }
        } else {
            const o = e.getHours();
            e[t + n]();
            const a = e.getHours();
            const i = a - o;
            if (i === 2) {
                if (this.fields.hour.length !== 24) {
                    this._dstStart = a;
                }
            } else if (i === 0 && e.getMinutes() === 0 && e.getSeconds() === 0 && this.fields.hour.length !== 24) {
                this._dstEnd = a;
            }
        }
    }
    _findSchedule(e) {
        function t(e, t) {
            for(let n = 0, r = t.length; n < r; n++){
                if (t[n] >= e) {
                    return t[n] === e;
                }
            }
            return t[0] === e;
        }
        function n(e, _nthDayOfWeek) {
            if (_nthDayOfWeek < 6) {
                if (e.getDate() < 8 && _nthDayOfWeek === 1) {
                    return true;
                }
                const n = e.getDate() % 7 ? 1 : 0;
                const r = e.getDate() - e.getDate() % 7;
                return Math.floor(r / 7) + n === _nthDayOfWeek;
            }
            return false;
        }
        function o(e) {
            return e.length > 0 && e.some((e)=>typeof e === "string" && e.indexOf("L") >= 0);
        }
        const i = (e = e || false) ? "subtract" : "add";
        const l = new module748(this._currentDate, this._tz);
        const _startDate = this._startDate;
        const _endDate = this._endDate;
        const c = l.getTime();
        for(var f = 0; f < 10000;){
            f++;
            if (e) {
                if (_startDate && l.getTime() - _startDate.getTime() < 0) {
                    throw new Error("Out of the timespan range");
                }
            } else if (_endDate && _endDate.getTime() - l.getTime() < 0) {
                throw new Error("Out of the timespan range");
            }
            let d = t(l.getDate(), this.fields.dayOfMonth);
            if (o(this.fields.dayOfMonth)) {
                d = d || l.isLastDayOfMonth();
            }
            let p = t(l.getDay(), this.fields.dayOfWeek);
            if (o(this.fields.dayOfWeek)) {
                p = p || this.fields.dayOfWeek.some((e)=>{
                    if (!o([
                        e
                    ])) {
                        return false;
                    }
                    const t = Number.parseInt(e[0]) % 7;
                    if (Number.isNaN(t)) {
                        throw new Error(`Invalid last weekday of the month expression: ${e}`);
                    }
                    return l.getDay() === t && l.isLastWeekdayOfMonth();
                });
            }
            const h = this.fields.dayOfMonth.length >= a.daysInMonth[l.getMonth()];
            const v = this.fields.dayOfWeek.length === a.constraints[5].max - a.constraints[5].min + 1;
            const m = l.getHours();
            if (d || p && !v) {
                if (h || !v || d) {
                    if (!h || v || p) {
                        if (this._nthDayOfWeek > 0 && !n(l, this._nthDayOfWeek)) {
                            this._applyTimezoneShift(l, i, "Day");
                        } else if (t(l.getMonth() + 1, this.fields.month)) {
                            if (t(m, this.fields.hour)) {
                                if (this._dstEnd === m && !e) {
                                    this._dstEnd = null;
                                    this._applyTimezoneShift(l, "add", "Hour");
                                    continue;
                                }
                            } else {
                                if (this._dstStart !== m) {
                                    this._dstStart = null;
                                    this._applyTimezoneShift(l, i, "Hour");
                                    continue;
                                }
                                if (!t(m - 1, this.fields.hour)) {
                                    l[`${i}Hour`]();
                                    continue;
                                }
                            }
                            if (t(l.getMinutes(), this.fields.minute)) {
                                if (t(l.getSeconds(), this.fields.second)) {
                                    if (c !== l.getTime()) {
                                        break;
                                    }
                                    if (i === "add" || l.getMilliseconds() === 0) {
                                        this._applyTimezoneShift(l, i, "Second");
                                    } else {
                                        l.setMilliseconds(0);
                                    }
                                } else {
                                    this._applyTimezoneShift(l, i, "Second");
                                }
                            } else {
                                this._applyTimezoneShift(l, i, "Minute");
                            }
                        } else {
                            this._applyTimezoneShift(l, i, "Month");
                        }
                    } else {
                        this._applyTimezoneShift(l, i, "Day");
                    }
                } else {
                    this._applyTimezoneShift(l, i, "Day");
                }
            } else {
                this._applyTimezoneShift(l, i, "Day");
            }
        }
        if (f >= 10000) {
            throw new Error("Invalid expression, loop limit exceeded");
        }
        this._currentDate = new module748(l, this._tz);
        this._hasIterated = true;
        return l;
    }
    next() {
        const e = this._findSchedule();
        if (this._isIterator) {
            return {
                value: e,
                done: !this.hasNext()
            };
        }
        return e;
    }
    prev() {
        const e = this._findSchedule(true);
        if (this._isIterator) {
            return {
                value: e,
                done: !this.hasPrev()
            };
        }
        return e;
    }
    hasNext() {
        const _currentDate = this._currentDate;
        const _hasIterated = this._hasIterated;
        try {
            this._findSchedule();
            return true;
        } catch (e) {
            return false;
        } finally{
            this._currentDate = _currentDate;
            this._hasIterated = _hasIterated;
        }
    }
    hasPrev() {
        const _currentDate = this._currentDate;
        const _hasIterated = this._hasIterated;
        try {
            this._findSchedule(true);
            return true;
        } catch (e) {
            return false;
        } finally{
            this._currentDate = _currentDate;
            this._hasIterated = _hasIterated;
        }
    }
    iterate(e, t) {
        const n = [];
        if (e >= 0) {
            for(var r = 0, o = e; r < o; r++){
                try {
                    var a = this.next();
                    n.push(a);
                    if (t) {
                        t(a, r);
                    }
                } catch (e) {
                    break;
                }
            }
        } else {
            r = 0;
            for(o = e; r > o; r--){
                try {
                    a = this.prev();
                    n.push(a);
                    if (t) {
                        t(a, r);
                    }
                } catch (e) {
                    break;
                }
            }
        }
        return n;
    }
    reset(e) {
        this._currentDate = new module748(e || this._options.currentDate);
    }
    stringify(e) {
        const t = [];
        for(let n = e ? 0 : 1, r = a.map.length; n < r; ++n){
            const i = a.map[n];
            const l = this.fields[i];
            const s = i === "dayOfMonth" && this.fields.month.length === 1 ? {
                min: 1,
                max: a.daysInMonth[this.fields.month[0] - 1]
            } : a.constraints[n];
            t.push(module750(l, s.min, s.max));
        }
        return t.join(" ");
    }
    static parse(e, t) {
        const _this = this;
        if (typeof t === "function") {
            t = {};
        }
        return ((e, t)=>{
            if (!t) {
                t = {};
            }
            if (t.currentDate === undefined) {
                t.currentDate = new module748(undefined, _this._tz);
            }
            if (a.predefined[e]) {
                e = a.predefined[e];
            }
            const o = [];
            const i = `${e}`.trim().split(/\s+/);
            if (i.length > 6) {
                throw new Error("Invalid cron expression");
            }
            const l = a.map.length - i.length;
            for(var s = 0, u = a.map.length; s < u; ++s){
                const c = a.map[s];
                const f = i[i.length > u ? s : s - l];
                if (s < l || !f) {
                    o.push(a._parseField(c, a.parseDefaults[s], a.constraints[s]));
                } else {
                    const d = c === "dayOfWeek" ? v(f) : f;
                    o.push(a._parseField(c, d, a.constraints[s]));
                }
            }
            const p = {};
            s = 0;
            for(u = a.map.length; s < u; s++){
                p[a.map[s]] = o[s];
            }
            const h = a._handleMaxDaysInMonth(p);
            p.dayOfMonth = h || p.dayOfMonth;
            return new a(p, t);
            function v(e) {
                const n = e.split("#");
                if (n.length > 1) {
                    const r = +n[n.length - 1];
                    if (/,/.test(e)) {
                        throw new Error("Constraint error, invalid dayOfWeek `#` and `,` special characters are incompatible");
                    }
                    if (/\//.test(e)) {
                        throw new Error("Constraint error, invalid dayOfWeek `#` and `/` special characters are incompatible");
                    }
                    if (/-/.test(e)) {
                        throw new Error("Constraint error, invalid dayOfWeek `#` and `-` special characters are incompatible");
                    }
                    if (n.length > 2 || Number.isNaN(r) || r < 1 || r > 5) {
                        throw new Error("Constraint error, invalid dayOfWeek occurrence number (#)");
                    }
                    t.nthDayOfWeek = r;
                    return n[0];
                }
                return e;
            }
        })(e, t);
    }
    static fieldsToExpression(e, t) {
        function n(e, t, n) {
            if (!t) {
                throw new Error(`Validation error, Field ${e} is missing`);
            }
            if (t.length === 0) {
                throw new Error(`Validation error, Field ${e} contains no values`);
            }
            for(let r = 0, o = t.length; r < o; r++){
                const i = t[r];
                if (!a._isValidConstraintChar(n, i) && (typeof i !== "number" || Number.isNaN(i) || i < n.min || i > n.max)) {
                    throw new Error(`Constraint error, got value ${i} expected range ${n.min}-${n.max}`);
                }
            }
        }
        const r = {};
        for(let o = 0, i = a.map.length; o < i; ++o){
            const l = a.map[o];
            let s = e[l];
            n(l, s, a.constraints[o]);
            const u = [];
            for(let c = -1; ++c < s.length;){
                u[c] = s[c];
            }
            if ((s = u.sort(a._sortCompareFn).filter((e, t, n)=>!t || e !== n[t - 1])).length !== u.length) {
                throw new Error(`Validation error, Field ${l} contains duplicate values`);
            }
            r[l] = s;
        }
        const f = a._handleMaxDaysInMonth(r);
        r.dayOfMonth = f || r.dayOfMonth;
        return new a(r, t || {});
    }
}
a.map = [
    "second",
    "minute",
    "hour",
    "dayOfMonth",
    "month",
    "dayOfWeek"
];
a.predefined = {
    "@yearly": "0 0 1 1 *",
    "@monthly": "0 0 1 * *",
    "@weekly": "0 0 * * 0",
    "@daily": "0 0 * * *",
    "@hourly": "0 * * * *"
};
a.constraints = [
    {
        min: 0,
        max: 59,
        chars: []
    },
    {
        min: 0,
        max: 59,
        chars: []
    },
    {
        min: 0,
        max: 23,
        chars: []
    },
    {
        min: 1,
        max: 31,
        chars: [
            "L"
        ]
    },
    {
        min: 1,
        max: 12,
        chars: []
    },
    {
        min: 0,
        max: 7,
        chars: [
            "L"
        ]
    }
];
a.daysInMonth = [
    31,
    29,
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
];
a.aliases = {
    month: {
        jan: 1,
        feb: 2,
        mar: 3,
        apr: 4,
        may: 5,
        jun: 6,
        jul: 7,
        aug: 8,
        sep: 9,
        oct: 10,
        nov: 11,
        dec: 12
    },
    dayOfWeek: {
        sun: 0,
        mon: 1,
        tue: 2,
        wed: 3,
        thu: 4,
        fri: 5,
        sat: 6
    }
};
a.parseDefaults = [
    "0",
    "*",
    "*",
    "*",
    "*",
    "*"
];
a.standardValidCharacters = /^[,*\d/-]+$/;
a.dayOfWeekValidCharacters = /^[?,*\dL#/-]+$/;
a.dayOfMonthValidCharacters = /^[?,*\dL/-]+$/;
a.validCharacters = {
    second: a.standardValidCharacters,
    minute: a.standardValidCharacters,
    hour: a.standardValidCharacters,
    dayOfMonth: a.dayOfMonthValidCharacters,
    month: a.standardValidCharacters,
    dayOfWeek: a.dayOfWeekValidCharacters
};
export default a;
