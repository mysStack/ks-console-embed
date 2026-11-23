import { DateTime } from "./module-749.js";
class o {
    constructor(e, zone){
        const n = {
            zone
        };
        if (e) {
            if (e instanceof o) {
                this._date = e._date;
            } else if (e instanceof Date) {
                this._date = DateTime.fromJSDate(e, n);
            } else if (typeof e === "number") {
                this._date = DateTime.fromMillis(e, n);
            } else if (typeof e === "string") {
                this._date = DateTime.fromISO(e, n);
                if (!this._date.isValid) {
                    this._date = DateTime.fromRFC2822(e, n);
                }
                if (!this._date.isValid) {
                    this._date = DateTime.fromSQL(e, n);
                }
                if (!this._date.isValid) {
                    this._date = DateTime.fromFormat(e, "EEE, d MMM yyyy HH:mm:ss", n);
                }
            }
        } else {
            this._date = DateTime.local();
        }
        if (!this._date || !this._date.isValid) {
            throw new Error(`CronDate: unhandled timestamp: ${JSON.stringify(e)}`);
        }
        if (zone && zone !== this._date.zoneName) {
            this._date = this._date.setZone(zone);
        }
    }
    addYear() {
        this._date = this._date.plus({
            years: 1
        });
    }
    addMonth() {
        this._date = this._date.plus({
            months: 1
        }).startOf("month");
    }
    addDay() {
        this._date = this._date.plus({
            days: 1
        }).startOf("day");
    }
    addHour() {
        const _date = this._date;
        this._date = this._date.plus({
            hours: 1
        }).startOf("hour");
        if (this._date <= _date) {
            this._date = this._date.plus({
                hours: 1
            });
        }
    }
    addMinute() {
        const _date = this._date;
        this._date = this._date.plus({
            minutes: 1
        }).startOf("minute");
        if (this._date < _date) {
            this._date = this._date.plus({
                hours: 1
            });
        }
    }
    addSecond() {
        const _date = this._date;
        this._date = this._date.plus({
            seconds: 1
        }).startOf("second");
        if (this._date < _date) {
            this._date = this._date.plus({
                hours: 1
            });
        }
    }
    subtractYear() {
        this._date = this._date.minus({
            years: 1
        });
    }
    subtractMonth() {
        this._date = this._date.minus({
            months: 1
        }).endOf("month").startOf("second");
    }
    subtractDay() {
        this._date = this._date.minus({
            days: 1
        }).endOf("day").startOf("second");
    }
    subtractHour() {
        const _date = this._date;
        this._date = this._date.minus({
            hours: 1
        }).endOf("hour").startOf("second");
        if (this._date >= _date) {
            this._date = this._date.minus({
                hours: 1
            });
        }
    }
    subtractMinute() {
        const _date = this._date;
        this._date = this._date.minus({
            minutes: 1
        }).endOf("minute").startOf("second");
        if (this._date > _date) {
            this._date = this._date.minus({
                hours: 1
            });
        }
    }
    subtractSecond() {
        const _date = this._date;
        this._date = this._date.minus({
            seconds: 1
        }).startOf("second");
        if (this._date > _date) {
            this._date = this._date.minus({
                hours: 1
            });
        }
    }
    getDate() {
        return this._date.day;
    }
    getFullYear() {
        return this._date.year;
    }
    getDay() {
        const weekday = this._date.weekday;
        if (weekday == 7) {
            return 0;
        }
        return weekday;
    }
    getMonth() {
        return this._date.month - 1;
    }
    getHours() {
        return this._date.hour;
    }
    getMinutes() {
        return this._date.minute;
    }
    getSeconds() {
        return this._date.second;
    }
    getMilliseconds() {
        return this._date.millisecond;
    }
    getTime() {
        return this._date.valueOf();
    }
    getUTCDate() {
        return this._getUTC().day;
    }
    getUTCFullYear() {
        return this._getUTC().year;
    }
    getUTCDay() {
        const weekday = this._getUTC().weekday;
        if (weekday == 7) {
            return 0;
        }
        return weekday;
    }
    getUTCMonth() {
        return this._getUTC().month - 1;
    }
    getUTCHours() {
        return this._getUTC().hour;
    }
    getUTCMinutes() {
        return this._getUTC().minute;
    }
    getUTCSeconds() {
        return this._getUTC().second;
    }
    toISOString() {
        return this._date.toUTC().toISO();
    }
    toJSON() {
        return this._date.toJSON();
    }
    setDate(day) {
        this._date = this._date.set({
            day
        });
    }
    setFullYear(year) {
        this._date = this._date.set({
            year
        });
    }
    setDay(weekday) {
        this._date = this._date.set({
            weekday
        });
    }
    setMonth(e) {
        this._date = this._date.set({
            month: e + 1
        });
    }
    setHours(hour) {
        this._date = this._date.set({
            hour
        });
    }
    setMinutes(minute) {
        this._date = this._date.set({
            minute
        });
    }
    setSeconds(second) {
        this._date = this._date.set({
            second
        });
    }
    setMilliseconds(millisecond) {
        this._date = this._date.set({
            millisecond
        });
    }
    _getUTC() {
        return this._date.toUTC();
    }
    toString() {
        return this.toDate().toString();
    }
    toDate() {
        return this._date.toJSDate();
    }
    isLastDayOfMonth() {
        const e = this._date.plus({
            days: 1
        }).startOf("day");
        return this._date.month !== e.month;
    }
    isLastWeekdayOfMonth() {
        const e = this._date.plus({
            days: 7
        }).startOf("day");
        return this._date.month !== e.month;
    }
}
export default o;
