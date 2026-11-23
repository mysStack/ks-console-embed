import module217 from "./module-217.js";
export default function(e, t) {
    for(var n = -1, o = e.length; ++n < o && module217(t, e[n], 0) > -1;);
    return n;
};
