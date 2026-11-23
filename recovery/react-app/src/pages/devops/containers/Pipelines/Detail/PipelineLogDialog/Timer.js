import "unpacked/module-15.js";
import "unpacked/module-109.js";
import "unpacked/module-42.js";
import module96 from "utils/babel-helpers/slicedToArray";
import { useEffect, useRef, useState } from "unpacked/module-553.js";
import { formatUsedTime } from "utils/index";
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
