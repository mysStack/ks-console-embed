import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-85.js";
import "./module-7.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import "./module-118.js";
import "./module-28.js";
import "./module-191.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module807 from "./module-807.js";
import { useEffect, useState } from "./module-553.js";
const s = (e)=>{
    const t = localStorage.getItem(e);
    if (!t) {
        return {};
    }
    try {
        return JSON.parse(t);
    } catch (e) {
        return {};
    }
};
export const useDashboardHistory = function(e, a = "history-cache-v4") {
    const r = useState(s(a)[e] ?? []);
    const i = module96(r, 2);
    const f = i[0];
    const d = i[1];
    useEffect(function() {
        const r = s(a)[e] ?? [];
        if (!module807(r, f)) {
            d(r);
        }
    }, [
        e,
        a
    ]);
    useEffect(function() {
        localStorage.setItem(a, JSON.stringify({
            ...s(a),
            ...module31({}, e, f)
        }));
    }, [
        f
    ]);
    return [
        f,
        d
    ];
};
export const addDashboardHistory = function(e, t, r = true, l = "history-cache-v4") {
    const u = s(l)[e] ?? [];
    const o = u.filter((e)=>e.id !== t.id);
    o.push(t);
    if (r) {
        localStorage.setItem(l, JSON.stringify({
            ...s(l),
            ...module31({}, e, o)
        }));
    }
    return o;
};
export const removeDashboardHistory = function(e, t, r = true, l = "history-cache-v4") {
    const u = s(l)[e] ?? [];
    const o = u.filter((e)=>{
        if (Array.isArray(t)) {
            return !t.includes(e.id);
        }
        return e.id !== t;
    });
    if (o.length !== u.length) {
        if (r) {
            localStorage.setItem(l, JSON.stringify({
                ...s(l),
                ...module31({}, e, o)
            }));
        }
    }
    return o;
};
