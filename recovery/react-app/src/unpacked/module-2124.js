import "./module-15.js";
import "./module-30.js";
import "./module-4.js";
import "./module-22.js";
import "./module-38.js";
import "./module-32.js";
import "./module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module96 from "utils/babel-helpers/slicedToArray";
import { useEffect, useRef, useState } from "./module-553.js";
import module438 from "stores/cluster";
export default function() {
    const eRef = useRef(new module438);
    const t = useState([]);
    const a = module96(t, 2);
    const r = a[0];
    const c = a[1];
    const s = async (a)=>{
        let r;
        r = await eRef.current.fetchList(a);
        c(r);
    };
    useEffect(function() {
        Promise.all([
            eRef.current.fetchList({
                limit: -1
            })
        ]).then((e)=>{
            const t = module96(e, 1)[0];
            c(t);
        });
    }, []);
    return [
        r,
        s
    ];
};
