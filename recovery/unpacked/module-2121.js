import "./module-15.js";
import "./module-30.js";
import "./module-4.js";
import "./module-22.js";
import "./module-38.js";
import "./module-32.js";
import module96 from "./module-96.js";
import { useEffect, useRef, useState } from "./module-553.js";
import module946 from "./module-946.js";
export default function() {
    const eRef = useRef(new module946);
    const t = useState([]);
    const a = module96(t, 2);
    const r = a[0];
    const o = a[1];
    useEffect(function() {
        Promise.all([
            eRef.current.fetchGroupList({
                limit: -1
            })
        ]).then(()=>{
            o(eRef.current.tags);
        });
    }, []);
    return [
        r,
        o
    ];
};
