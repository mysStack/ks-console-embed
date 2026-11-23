import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-85.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-315.js";
import module96 from "./module-96.js";
import "./module-31.js";
import "./module-58.js";
import module186 from "./module-186.js";
import Module800 from "./module-800.js";
import module1 from "./module-1.js";
import { useEffect, useMemo, useState } from "./module-553.js";
import { getUnitValue } from "./module-52.js";
import module2886 from "./module-2886.js";
const y = (e)=>e == null || e === "";
const EComponent = function(e) {
    const { defaultValue, units, onChange = function() {}, picks, ...rest } = e;
    const e_value = e.value;
    const b = e_value === undefined ? defaultValue : e_value;
    const options = useMemo(function() {
        let e = units ?? [];
        if (picks) {
            e = units.filter((e)=>picks.includes(e.key));
        }
        return e.map((e)=>({
                ...e,
                label: t(e.label)
            }));
    }, [
        units,
        picks
    ]);
    const O = useState(getUnitValue(b, options));
    const S = module96(O, 2);
    const C = S[0];
    const D = S[1];
    const k = useState(y(b) ? b : b / (C?.value ?? 1));
    const N = module96(k, 2);
    const T = N[0];
    const R = N[1];
    useEffect(function() {
        if (b !== T) {
            const t = C ?? getUnitValue(b, options);
            D(t);
            R(y(b) ? b : b / (t?.value ?? 1));
        }
    }, [
        b
    ]);
    return <div className={module2886.wrapper}><Module800 integer {...rest} value={T} onChange={function(e) {
        if (!isNaN(Number(e))) {
            R(e);
            if (C) {
                onChange(e * C?.value);
            }
        }
    }}/><module186.Select options={options} defaultValue={C?.value} value={C?.value} onChange={function(e) {
        const a = options.find((t)=>t.value === e);
        D(a);
        if (!y(T)) {
            onChange(T * (a?.value ?? 1));
        }
    }}/></div>;
};
EComponent.propTypes = {
    value: module1.number,
    defaultValue: module1.number,
    onChange: module1.func,
    units: module1.array,
    picks: module1.array
};
export default EComponent;
