import "./module-15.js";
import "./module-84.js";
import "./module-27.js";
import "./module-932.js";
import "./module-85.js";
import "./module-436.js";
import "./module-319.js";
import "./module-24.js";
import "./module-193.js";
import "./module-315.js";
import module31 from "./module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "./module-58.js";
import module186 from "./module-186.js";
import module1039 from "./module-1039.js";
import module3 from "./module-3.js";
import { useEffect, useReducer, useState } from "./module-553.js";
import module2262 from "./module-2262.js";
export default function({ unit, value, defaultValue, onChange, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY, integer = false, error = false, onBlur, ...rest }) {
    const C = value ?? defaultValue;
    const D = useState(C === Infinity ? undefined : C);
    const k = module96(D, 2);
    const N = k[0];
    const T = k[1];
    const R = useState(error);
    const I = module96(R, 2);
    const w = I[0];
    const M = I[1];
    const P = useReducer(function(e) {
        return e + 1;
    }, 0);
    const A = module96(P, 2);
    const key = A[0];
    const L = A[1];
    useEffect(function() {
        if (value !== N) {
            T(value === Infinity ? undefined : value);
        }
    }, [
        value
    ]);
    const x = function(e) {
        const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        let a = typeof e === "string" ? integer ? parseInt(e, 10) : parseFloat(e) : e;
        if (e === undefined || e === "" || isNaN(a)) {
            T("");
            onChange?.("");
            return void (t && e !== undefined && e !== "" && M(true));
        }
        a = Math.max(min, Math.min(a, max));
        T(a);
        onChange?.(a);
        M(false);
    };
    const U = integer ? /[-0-9]/ : /[-.0-9]/;
    return <module186.Input {...rest} className={module3(module2262.wrapper, module31({}, module2262.error, w || error))} key={key} value={N} onChange={function(e) {
        const value = e.target.value;
        const a = value.includes("-");
        const r = value.includes(".");
        const n = Number(value);
        if (Number.isNaN(n) || module1039(n)) {
            if (r || a) {
                M(false);
                T(e.target.value);
            } else {
                x(value, true);
            }
        }
    }} onKeyPress={function(e) {
        if (!(e.key !== "e" && e.key !== "E")) {
            e.preventDefault();
        }
        if (!U.test(e.key)) {
            e.preventDefault();
        }
    }} suffix={unit} onBlur={function() {
        x(N, false);
        M(false);
        L();
        onBlur?.();
    }}/>;
};
