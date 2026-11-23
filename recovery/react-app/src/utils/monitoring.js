import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-97.js";
import "unpacked/module-320.js";
import "unpacked/module-27.js";
import "unpacked/module-190.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-24.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-109.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-58.js";
import module31 from "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-28.js";
import "unpacked/module-442.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-436.js";
import "unpacked/module-319.js";
import module63 from "unpacked/module-63.js";
import module60 from "unpacked/module-60.js";
import module926 from "unpacked/module-926.js";
import module159 from "unpacked/module-159.js";
import module459 from "unpacked/module-459.js";
import module195 from "unpacked/module-195.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module449 from "unpacked/module-449.js";
import module450 from "unpacked/module-450.js";
import module968 from "unpacked/module-968.js";
import module1156 from "unpacked/module-1156.js";
import { coreUnitTS, getLocalTime } from "utils/index";
import { COLORS_MAP, MILLISECOND_IN_TIME_UNIT } from "utils/constants";
import module243 from "unpacked/module-243.js";
export const CreateUidFactory = function(IDList = []) {
    const t = {
        IDList,
        maxID: IDList.length ? Math.max.apply(null, IDList) : 0
    };
    return {
        generateUID: function() {
            const e = ++t.maxID;
            t.IDList.push(e);
            return e;
        },
        clear: function() {
            t.IDList = [];
            t.maxID = 0;
        }
    };
};
export const avgs = function(e = []) {
    const e_length = e.length;
    const a = e.reduce((acc, item)=>acc + item, 0);
    return a / e_length;
};
function C(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
function D(e) {
    for(let t = 1; t < arguments.length; t++){
        var a = arguments[t] ?? {};
        if (t % 2) {
            C(Object(a), true).forEach((t)=>{
                module31(e, t, a[t]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
        } else {
            C(Object(a)).forEach((t)=>{
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
            });
        }
    }
    return e;
}
const k = {
    second: {
        conditions: [
            0.01,
            0
        ],
        units: [
            "s",
            "ms"
        ]
    },
    cpu: {
        conditions: [
            0.1,
            0
        ],
        units: [
            "core",
            "m"
        ]
    },
    gpu: {
        conditions: [
            0.1,
            0
        ],
        units: [
            "GPU",
            "GPU"
        ]
    },
    gpu_memory: {
        conditions: [
            1024 ** 4,
            1024 ** 3,
            1024 ** 2,
            1024,
            0
        ],
        units: [
            "Ti",
            "Gi",
            "Mi",
            "Ki",
            "Bytes"
        ]
    },
    memory: {
        conditions: [
            1024 ** 4,
            1024 ** 3,
            1024 ** 2,
            1024,
            0
        ],
        units: [
            "Ti",
            "Gi",
            "Mi",
            "Ki",
            "Bytes"
        ]
    },
    disk: {
        conditions: [
            1000 ** 4,
            1000 ** 3,
            1000 ** 2,
            1000,
            0
        ],
        units: [
            "TB",
            "GB",
            "MB",
            "KB",
            "Bytes"
        ]
    },
    throughput: {
        conditions: [
            1000 ** 4,
            1000 ** 3,
            1000 ** 2,
            1000,
            0
        ],
        units: [
            "TB/s",
            "GB/s",
            "MB/s",
            "KB/s",
            "B/s"
        ]
    },
    traffic: {
        conditions: [
            1000 ** 4,
            1000 ** 3,
            1000 ** 2,
            1000,
            0
        ],
        units: [
            "TB/s",
            "GB/s",
            "MB/s",
            "KB/s",
            "B/s"
        ]
    },
    bandwidth: {
        conditions: [
            1024 ** 2 / 8,
            128,
            0
        ],
        units: [
            "Mbps",
            "Kbps",
            "bps"
        ]
    },
    number: {
        conditions: [
            1000 ** 4,
            1000 ** 3,
            1000 ** 2,
            1000,
            0
        ],
        units: [
            "T",
            "G",
            "M",
            "K",
            ""
        ]
    }
};
export const getSuitableUnit = function(e, t) {
    const a = k[t];
    if (module63(a)) {
        return "";
    }
    const r = module60(e) ? e : [
        [
            0,
            Number(e)
        ]
    ];
    let n = module449(a.units);
    a.conditions.some((e, t)=>{
        const l = r.some((t)=>((module60(t) ? module26(t, "[1]") : Number(t)) || 0) >= e);
        if (l) {
            n = a.units[t];
        }
        return l;
    });
    return n;
};
export const getSuitableValue = function(e, a = "default", r = 0) {
    if (!module459(e) && !module195(e) || module926(Number(e))) {
        return r;
    }
    const n = getSuitableUnit(e, a);
    const l = getValueByUnit(e, n || a);
    const u = coreUnitTS(l, n);
    return `${l} ${t(u)}`;
};
export var getValueByUnit = function(e, t, a = 2, r) {
    let n = e === "NAN" ? 0 : parseFloat(e);
    if (r !== t) {
        switch(t){
            default:
                break;
            case "":
            case "default":
                return n;
            case "iops":
                return Math.round(n);
            case "%":
                n *= 100;
                break;
            case "m":
                if ((n *= 1000) < 1) {
                    return 0;
                }
                break;
            case "Ki":
                n /= 1024;
                break;
            case "Mi":
                n /= 1024 ** 2;
                break;
            case "Gi":
                n /= 1024 ** 3;
                break;
            case "Ti":
                n /= 1024 ** 4;
                break;
            case "K":
            case "KB":
            case "KB/s":
                n /= 1000;
                break;
            case "M":
            case "MB":
            case "MB/s":
                n /= 1000 ** 2;
                break;
            case "G":
            case "GB":
            case "GB/s":
                n /= 1000 ** 3;
                break;
            case "T":
            case "TB":
            case "TB/s":
                n /= 1000 ** 4;
                break;
            case "bps":
                n *= 8;
                break;
            case "Kbps":
                n = 8 * n / 1024;
                break;
            case "Mbps":
                n = 8 * n / 1024 / 1024;
                break;
            case "ms":
                n *= 1000;
        }
    }
    if (Number(n) === 0) {
        return 0;
    }
    return Number(n.toFixed(a));
};
export const getFormatTime = function(e, t) {
    return getLocalTime(Number(e)).format(t ? "MM-DD HH:mm" : "HH:mm:ss").replace(/(\d+:\d+)(:00)$/g, "$1");
};
export const getChartData = function({ type, unit, xKey = "time", legend = [], valuesData = [], dot = 2, originalUnit, workload_kind }) {
    let g = 0;
    let y = 0;
    const E = {};
    valuesData.forEach((e, r)=>{
        e.forEach((e)=>{
            const n = parseInt(module26(e, [
                0
            ], 0), 10);
            const l = module26(e, [
                1
            ]);
            const o = module26(legend, [
                r
            ]);
            if (n && !E[n]) {
                E[n] = legend.reduce((acc, item)=>{
                    if (!acc[item]) {
                        acc[item] = null;
                    }
                    return acc;
                }, {});
            }
            if (o != null && E[n]) {
                const i = l === "-1" ? null : getValueByUnit(l, module159(unit) ? type : unit, dot, originalUnit);
                if (!(workload_kind === "statefulset" && E[n][o] && !i)) {
                    E[n][o] = i;
                }
            }
            if (!g || g > n) {
                g = n;
            }
            if (!y || y < n) {
                y = n;
            }
        });
    });
    const b = y - g > 86400;
    return Object.entries(E).map((e)=>{
        const t = module96(e, 2);
        const a = t[0];
        const r = t[1];
        return D(module31({}, xKey, ((e)=>{
            if (xKey === "time") {
                return getFormatTime(1000 * e, b);
            }
            return e;
        })(a)), r);
    });
};
export const getAreaChartOps = function({ type, title, unitType, xKey = "time", legend = [], data = [], alert, workload_kind, ...rest }) {
    const valuesData = (module60(data) ? data : []).map((e)=>module26(e, "values") || []);
    const unit = unitType ? getSuitableUnit(module450(valuesData), unitType) : rest.unit;
    if (!module63(alert) && "value" in alert) {
        alert = {
            ...alert,
            value: getValueByUnit(alert.value, unit),
            unit
        };
    }
    const data_1 = getChartData({
        type,
        unit,
        xKey,
        legend,
        valuesData,
        dot: rest.dot,
        originalUnit: rest.originalUnit,
        workload_kind
    });
    return {
        ...rest,
        title,
        unit,
        alert,
        data: data_1
    };
};
export const getXAxisTickFormatter = function(e = []) {
    const t = e.map(({ time })=>+new Date(time));
    const a = module968(t);
    const r = module1156(t);
    if (r - a > 8640000) {
        return function(e) {
            return module243(e).format("MM-DD HH:mm");
        };
    }
    return function(e) {
        return module243(e).format("HH:mm:ss");
    };
};
export const getLastMonitoringData = function(e) {
    const t = {};
    Object.entries(e).forEach((e)=>{
        const a = module96(e, 2);
        const r = a[0];
        const n = a[1];
        const l = module26(n, "data.result[0].values", []) || [];
        const u = module63(l) ? module26(n, "data.result[0].value", []) || [] : module449(l);
        module74(t, `[${r}].value`, u);
    });
    return t;
};
export const getTimesData = function(e) {
    const t = [];
    e.forEach((e)=>{
        (module26(e, "values") || []).forEach((e)=>{
            const a = module26(e, "[0]", 0);
            if (!t.includes(a)) {
                t.push(a);
            }
        });
    });
    return t.sort();
};
export const getZeroValues = function() {
    const e = [];
    let t = parseInt(Date.now() / 1000, 10) - 6000;
    for(let a = 0; a < 10; a++){
        e[a] = [
            t,
            0
        ];
        t += 600;
    }
    return e;
};
export const getColorByName = function(e = "#fff") {
    return COLORS_MAP[e] || e;
};
export const startAutoRefresh = function(e, t = {}) {
    const a = {
        method: "fetchData",
        interval: 5000,
        leading: true,
        ...t
    };
    if (e && e[a.method]) {
        const r = e[a.method];
        if (a.leading) {
            r({
                silentLoading: true
            });
        }
        e.timer = setInterval(()=>{
            r({
                silentLoading: true
            });
        }, a.interval);
    }
};
export const stopAutoRefresh = function(e) {
    if (e && e.timer) {
        clearInterval(e.timer);
        e.timer = null;
    }
};
export const isSameDay = function(e, t) {
    return Math.floor(e / 86400000) === Math.floor(t / 86400000);
};
export const timeAliasReg = /(\d+)(\w+)/;
export const timestampify = function(e) {
    const t = e.match(timeAliasReg) || [];
    const [, n = 0, l] = module96(t, 3);
    return Number(n) * (MILLISECOND_IN_TIME_UNIT[l] || 0);
};
export const fillEmptyMetrics = function(e, t) {
    if (!e.times || !e.start || !e.end) {
        return t;
    }
    const a = (e)=>String(e).replace(/\..*$/, "");
    const r = Math.floor((e.end - e.start) / e.times);
    const n = e.times + 1;
    Object.values(t).forEach((t)=>{
        const l = module26(t, "data.result");
        if (!module63(l)) {
            l.forEach((t)=>{
                const l = t.values || [];
                const u = l.reduce((acc, item)=>({
                        ...acc,
                        ...module31({}, a(item[0]), item[1])
                    }), {});
                if (l.length < n) {
                    const i = [];
                    for(let c = 0; c < n; c++){
                        const s = a(e.start + c * r);
                        i.push([
                            s,
                            u[s] || "0"
                        ]);
                    }
                    t.values = i;
                }
            });
        }
    });
    return t;
};
export const unitTransformMap = {
    none: unitTransformFactory([
        [
            "",
            0
        ]
    ]),
    ...unitTransformGroupFactory([
        [
            "bit",
            0
        ],
        [
            "Byte",
            8
        ],
        [
            "KB",
            8192
        ],
        [
            "MB",
            8 * 1024 ** 2
        ],
        [
            "GB",
            8 * 1024 ** 3
        ],
        [
            "TB",
            8 * 1024 ** 4
        ]
    ]),
    ...unitTransformGroupFactory([
        [
            "bit/s",
            0
        ],
        [
            "Byte/s",
            8
        ],
        [
            "KB/s",
            8192
        ],
        [
            "MB/s",
            8 * 1024 ** 2
        ],
        [
            "GB/s",
            8 * 1024 ** 3
        ],
        [
            "TB/s",
            8 * 1024 ** 4
        ]
    ]),
    ...unitTransformGroupFactory([
        [
            "bps",
            0
        ],
        [
            "Bps",
            8
        ],
        [
            "KBps",
            8192
        ],
        [
            "Mbps",
            1024 ** 2
        ],
        [
            "Gbps",
            1024 ** 3
        ],
        [
            "Tbps",
            1024 ** 4
        ]
    ]),
    ...unitTransformGroupFactory([
        [
            "ms",
            0
        ],
        [
            "seconds",
            1000
        ],
        [
            "minutes",
            60000
        ],
        [
            "hours",
            3600000
        ],
        [
            "days",
            86400000
        ],
        [
            "weeks",
            6048000000
        ],
        [
            "months",
            25920000000
        ]
    ]),
    "percent (0-100)": unitTransformFactory([
        [
            "%",
            0
        ]
    ]),
    "percent (0.0-1.0)": function(e, t) {
        return unitTransformFactory([
            [
                "%",
                0
            ]
        ])(100 * e, t);
    }
};
export function unitTransformGroupFactory(e) {
    const t = unitTransformFactory(e);
    const a = module61(e);
    const r = a.shift();
    const n = module96(r, 1)[0];
    return a.reduce((acc, item)=>{
        const r = module96(item, 2);
        const n = r[0];
        const l = r[1];
        return {
            ...acc,
            ...module31({}, n, function(e, a) {
                return t(e * l, a);
            })
        };
    }, module31({}, n, t));
}
export function unitTransformFactory(e) {
    return function(t, a = 0) {
        const r = t < 0;
        const n = Math.abs(t);
        let l = 0;
        for(let u = 0; u < e.length; u++){
            const o = module96(e[u], 2);
            const c = o[1];
            if (!(n >= c)) {
                break;
            }
            l = u;
        }
        const s = module96(e[l], 2);
        const f = s[0];
        const d = s[1];
        const p = d === 0 ? n : n / d;
        const m = p.toFixed(a);
        if (Number(m) === 0) {
            return "0";
        }
        return `${r ? "-" : ""}${m} ${f}`;
    };
}
