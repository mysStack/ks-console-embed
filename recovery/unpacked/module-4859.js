import module479 from "./module-479.js";
import module342 from "./module-342.js";
const i = [
    [
        "ary",
        128
    ],
    [
        "bind",
        1
    ],
    [
        "bindKey",
        2
    ],
    [
        "curry",
        8
    ],
    [
        "curryRight",
        16
    ],
    [
        "flip",
        512
    ],
    [
        "partial",
        32
    ],
    [
        "partialRight",
        64
    ],
    [
        "rearg",
        256
    ]
];
export default function(e, t) {
    module479(i, function(n) {
        const r = `_.${n[0]}`;
        if (t & n[1] && !module342(e, r)) {
            e.push(r);
        }
    });
    return e.sort();
};
