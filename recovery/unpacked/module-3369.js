import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-87.js";
import "./module-97.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-75.js";
import "./module-7.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import module96 from "./module-96.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import "./module-58.js";
import module240 from "./module-240.js";
import module826 from "./module-826.js";
import module74 from "./module-74.js";
import module26 from "./module-26.js";
import module136 from "./module-136.js";
import module788 from "./module-788.js";
import module3370 from "./module-3370.js";
import module3377 from "./module-3377.js";
import module481 from "./module-481.js";
import steps from "./module-3379.js";
import module435 from "./module-435.js";
import { silentDefaultItem } from "./module-72.js";
import module1381 from "./module-1381.js";
import module105 from "./module-105.js";
import module1081 from "./module-1081.js";
const D = {
    "silent-policy.add": {
        on: function({ store, module, success, namespace: _namespace, ...rest }) {
            let a;
            const d = module435[module]({});
            const p = module136(silentDefaultItem);
            var h = module788.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (a) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    e.next = 4;
                                    return store.create(I(a, p));
                                case 4:
                                    module788.close(h);
                                    module240.success({
                                        content: t("CREATE_SILENCE_POLICY_SUCCESSFULLY")
                                    });
                                    if (success) {
                                        success();
                                    }
                                case 7:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                module,
                form2codeParse: function(e) {
                    return I(e, p);
                },
                code2formParse: module105[module],
                title: t("CREATE_SILENCE_POLICY"),
                steps,
                formTemplate: d,
                modal: module826,
                isAdd: true,
                store,
                ...rest
            });
        }
    },
    "silent-policy.edit": {
        on: function({ store, module, success, ...rest }) {
            let a;
            const f = module136(rest.detail);
            var d = module788.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    let n;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (a) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    n = rest.detail;
                                    e.next = 5;
                                    return store.patch(n, I(a, {}, [
                                        "metadata"
                                    ]));
                                case 5:
                                    module240.success({
                                        content: t("EDIT_SILENCE_POLICY_SUCCESSFULLY")
                                    });
                                    module788.close(d);
                                    if (success) {
                                        success();
                                    }
                                case 8:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                module,
                formTemplate: f,
                okBtnText: t("OK"),
                title: t("EDIT_INFORMATION"),
                modal: module1381,
                store,
                ...rest
            });
        }
    },
    "silent-policy.editCondition": {
        on: function({ store, module, success, ...rest }) {
            let a;
            const f = module136(rest.detail);
            var d = module788.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    let n;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (a) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    n = rest.detail;
                                    e.next = 5;
                                    return store.patch(n, I(a, {}, [
                                        "spec.matcher"
                                    ]));
                                case 5:
                                    module240.success({
                                        content: t("EDIT_SILENCE_POLICY_SUCCESSFULLY")
                                    });
                                    module788.close(d);
                                    if (success) {
                                        success();
                                    }
                                case 8:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                module,
                formTemplate: f,
                title: t("EDIT_SILENCE_CONDITIONS"),
                modal: module3377,
                store,
                ...rest
            });
        }
    },
    "silent-policy.editTime": {
        on: function({ store, module, success, ...rest }) {
            const c = module136(rest.detail);
            c.isDefaultCron = c.isCron;
            let f;
            var d = module788.open({
                onOk: (f = module44(module41.mark(function e(r) {
                    let u;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (r) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    u = rest.detail;
                                    e.next = 5;
                                    return store.patch(u, I(r, {}, [
                                        "spec"
                                    ]));
                                case 5:
                                    module240.success({
                                        content: t("EDIT_SILENCE_POLICY_SUCCESSFULLY")
                                    });
                                    module788.close(d);
                                    if (success) {
                                        success();
                                    }
                                case 8:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return f.apply(this, arguments);
                }),
                module,
                formTemplate: c,
                title: t("EDIT_SILENCE_TIME"),
                modal: module3370,
                store,
                ...rest
            });
        }
    },
    "silent-policy.yaml.update": {
        on: function({ store, detail, success, ...rest }) {
            var d = module788.open({
                onOk: async (a)=>{
                    let u;
                    let s;
                    u = module96(a, 1);
                    s = u[0];
                    await store.update(detail, s);
                    module240.success({
                        content: t("EDIT_SILENCE_POLICY_SUCCESSFULLY")
                    });
                    module788.close(d);
                    if (success) {
                        success();
                    }
                },
                detail,
                store,
                modal: module1081,
                ...rest
            });
        }
    }
};
function N(e, t) {
    const a = t - e;
    const r = Math.floor(a / 1000 / 60 / 60);
    const n = Math.floor(a / 1000 / 60 % 60);
    const l = Math.floor(a / 1000 % 60);
    return `${r ? `${r}h` : ""}${n ? `${n}m` : r ? "0m" : ""}${l ? `${l}s` : "0s"}`;
}
export default D;
var k = [
    [
        "metadata.name",
        "name"
    ],
    [
        "metadata.annotations['kubesphere.io/alias-name']",
        "aliasName"
    ],
    [
        "metadata.annotations['kubesphere.io/description']",
        "desc"
    ],
    [
        "spec.matcher.matchExpressions",
        "matchExpressions"
    ],
    [
        "spec.startsAt",
        function(e) {
            if (e.type === 1 || e.type === 2) {
                return module26(e, "dateRange[0]", new Date);
            }
            return null;
        }
    ],
    [
        "spec.duration",
        function(e) {
            if (e.type === 2) {
                return N(new Date(module26(e, "dateRange[0]")).getTime(), new Date(module26(e, "dateRange[1]")).getTime());
            }
            if (e.type === 3 && !e.isCron && e.timeRange?.length > 1 && e.timeRange?.[e.timeRange?.length - 1]) {
                return N(1000 * module26(e, "timeRange[0]", 0), 1000 * module26(e, "timeRange[1]", 0));
            }
            if (e.duration) {
                return e.duration;
            }
            return null;
        }
    ],
    [
        "spec.schedule",
        function(e) {
            if (e.isCron) {
                return e.cron;
            }
            if (e.type !== 3) {
                return null;
            }
            const a = e.timeRange ?? [];
            const r = module96(a, 2);
            let n = r[0];
            let o = r[1];
            const u = JSON.parse(JSON.stringify(module481.parseExpression("0 * * * *").fields));
            if (o) {
                n = Math.floor(n / 60 / 60);
                o = Math.floor(o / 60 / 60);
                u.hour = [
                    n
                ];
            }
            if (e.timeType === 2 && e.week && e.week.length) {
                u.dayOfWeek = e.week;
            }
            if (e.timeType === 3 && e.month && e.month.length) {
                u.dayOfMonth = e.month;
            }
            return module481.fieldsToExpression(u).stringify();
        }
    ]
];
function I(e, t, a) {
    k.filter((e)=>{
        const t = module96(e, 1)[0];
        return !a || a.some((e)=>t.startsWith(e));
    });
    return ((e)=>function(t, a) {
            return e.reduce((acc, item)=>{
                let r;
                const n = module96(item, 2);
                const o = n[0];
                const u = n[1];
                if (typeof u === "string") {
                    r = module26(t, u);
                }
                if (typeof u === "function") {
                    r = u(t, acc);
                }
                if (r !== undefined) {
                    module74(acc, o, r);
                }
                return acc;
            }, a);
        })(k)(e, t);
}
