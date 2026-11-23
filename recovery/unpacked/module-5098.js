import "./module-15.js";
import "./module-109.js";
import "./module-42.js";
import module96 from "./module-96.js";
import { useEffect, useRef, useState } from "./module-553.js";
import { formatUsedTime } from "./module-52.js";
export default function({ startTime, time }) {
    const a = useState(0);
    const s = module96(a, 2);
    const u = s[0];
    const c = s[1];
    const dRef = useRef(null);
    useEffect(function() {
        if (startTime) {
            const e = setInterval(()=>{
                const e = (new Date).getTime() - new Date(startTime).getTime();
                c(e);
            }, 300);
            dRef.current = e;
            return function() {
                return clearInterval(e);
            };
        }
    }, [
        startTime
    ]);
    useEffect(function() {
        if (time && dRef.current) {
            clearInterval(dRef.current);
        }
    }, [
        time
    ]);
    return t("DURATION_VALUE", {
        value: startTime ? formatUsedTime(time ?? u) : "-"
    });
};
