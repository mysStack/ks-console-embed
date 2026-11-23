import "./module-12.js";
import "./module-5.js";
import "./module-187.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-86.js";
import "./module-30.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-190.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-22.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-38.js";
import "./module-64.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-245.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-436.js";
import "./module-57.js";
import "./module-315.js";
import module58 from "./module-58.js";
import module41 from "./module-41.js";
import module31 from "./module-31.js";
import module44 from "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module3511 from "./module-3511.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module60 from "./module-60.js";
import module63 from "./module-63.js";
import module449 from "./module-449.js";
import module136 from "./module-136.js";
import module74 from "./module-74.js";
import module450 from "./module-450.js";
import module159 from "./module-159.js";
import module446 from "./module-446.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import module1768 from "./module-1768.js";
import module3512 from "./module-3512.js";
import Module833 from "./module-833.js";
import { getRetentionDay, getTimeParams, handleWSChartData } from "./module-1204.js";
import { getTimeStr } from "./module-950.js";
import { COLORS_MAP, DEFAULT_CLUSTER, ICON_TYPES } from "./module-72.js";
import Module3513 from "./module-3513.js";
import { getWebsiteUrl, learnMoreTip } from "./module-52.js";
import { AREA_COLORS, RESOURCES_TYPE, RESOURCE_TITLE } from "./module-944.js";
import Module3518 from "./module-3518.js";
import Module3521 from "./module-3521.js";
import Module3523 from "./module-3523.js";
import Module3527 from "./module-3527.js";
import Module3529 from "./module-3529.js";
import Module3531 from "./module-3531.js";
import Module3535 from "./module-3535.js";
import Module3537 from "./module-3537.js";
import Module3538 from "./module-3538.js";
import module3540 from "./module-3540.js";
let c;
let s;
let f;
let d;
let p;
let m;
let h;
let v;
let g;
let y;
let E;
let b;
let _;
let O;
let S;
let C;
let D;
let k;
let N;
let T;
let R;
let I;
let w;
let M;
let P;
let A;
let j;
let L;
let x;
let U;
let z;
let F;
const Me = observer((s = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(r);
    function r(...c_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...c_1);
        e.clusterMeterStore = new module3512;
        e.store = new module1768;
        module65(e, "crumbData", f, module88(e));
        module65(e, "cacheCrumbData", d, module88(e));
        module65(e, "tableData", p, module88(e));
        module65(e, "active", m, module88(e));
        module65(e, "list", h, module88(e));
        module65(e, "timeRange", v, module88(e));
        module65(e, "currentMeterData", g, module88(e));
        module65(e, "parentMeterData", y, module88(e));
        module65(e, "sideLoading", E, module88(e));
        module65(e, "loading", b, module88(e));
        module65(e, "chartData", _, module88(e));
        module65(e, "priceConfig", O, module88(e));
        module65(e, "priceConfigList", S, module88(e));
        e.childrenResourceList = [];
        module65(e, "pieChartData", C, module88(e));
        module65(e, "resourceLoading", D, module88(e));
        e.initData = module44(module41.mark(function t() {
            let a;
            let r;
            let n;
            let l;
            let u;
            let i;
            let c;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            e.loading = true;
                            e.sideLoading = true;
                            if (e.props.meterType !== "workspaces") {
                                t.next = 13;
                                break;
                            }
                            t.next = 5;
                            return e.clusterMeterStore.fetchList({
                                type: "cluster"
                            });
                        case 5:
                            e.clusterList = t.sent;
                            if (globals.app.isMultiCluster) {
                                e.clusterList = e.clusterList.map((e)=>({
                                        disabled: !module26(e, "_origin.configz.metering"),
                                        ...e
                                    }));
                            } else {
                                e.clusterList = e.clusterList.map((e)=>({
                                        disabled: !globals.ksConfig.metering,
                                        ...e
                                    }));
                            }
                            if (!module63(e.clusterList)) {
                                t.next = 11;
                                break;
                            }
                            e.sideLoading = false;
                            e.loading = false;
                            return t.abrupt("return");
                        case 11:
                            t.next = 13;
                            return e.getPriceConfigListByCluster(e.clusterList);
                        case 13:
                            t.next = 15;
                            return e.clusterMeterStore.fetchList({
                                type: e.props.meterType
                            });
                        case 15:
                            a = t.sent;
                            if (e.props.meterType === "cluster") {
                                if (globals.app.isMultiCluster) {
                                    e.list = a.map((e)=>({
                                            disabled: !module26(e, "_origin.configz.metering"),
                                            ...e
                                        }));
                                } else {
                                    e.list = a.map((e)=>({
                                            disabled: !globals.ksConfig.metering,
                                            ...e
                                        }));
                                }
                            } else {
                                e.list = e.setWSListDisabledByCluster(a);
                            }
                            if (!module63(module14.toJS(e.list))) {
                                t.next = 21;
                                break;
                            }
                            e.sideLoading = false;
                            e.loading = false;
                            return t.abrupt("return");
                        case 21:
                            n = 0;
                        case 22:
                            if (!(n < e.list.length)) {
                                t.next = 29;
                                break;
                            }
                            if (e.list[n].disabled) {
                                t.next = 26;
                                break;
                            }
                            r = n;
                            return t.abrupt("break", 29);
                        case 26:
                            n++;
                            t.next = 22;
                            break;
                        case 29:
                            if (r !== undefined) {
                                t.next = 34;
                                break;
                            }
                            e.currentMeterData = {};
                            e.sideLoading = false;
                            e.loading = false;
                            return t.abrupt("return");
                        case 34:
                            l = e.list[r];
                            u = l.name;
                            i = l.type;
                            c = l.labelSelector;
                            if (i !== "cluster") {
                                t.next = 39;
                                break;
                            }
                            e.cluster = u;
                            t.next = 39;
                            return e.getPriceConfigListByCluster(e.list);
                        case 39:
                            e.crumbData.push({
                                type: i,
                                name: u,
                                list: e.list
                            });
                            t.next = 42;
                            return e.handleSelectResource({
                                name: u,
                                type: i,
                                isCopy: true,
                                labelSelector: c,
                                isTime: true
                            });
                        case 42:
                            e.sideLoading = false;
                            e.loading = false;
                        case 44:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        e.setWSListDisabledByCluster = function(t) {
            if (module60(t)) {
                return t.map((t)=>{
                    const a = globals.app.isMultiCluster ? t.name === "system-workspace" ? e.clusterList : module26(t, "_origin.clusters", []) : e.clusterList;
                    const a_length = a.length;
                    let n = 0;
                    a.forEach((t)=>{
                        const a = e.clusterList.find((e)=>e.name === t.name);
                        if (a && a.disabled) {
                            n++;
                        }
                    });
                    t.disabled = n === a_length;
                    return t;
                });
            }
            return [];
        };
        module65(e, "getPriceConfigListByCluster", k, module88(e));
        module65(e, "getClustersList", N, module88(e));
        module65(e, "setPriceConfig", T, module88(e));
        module65(e, "setStartTime", R, module88(e));
        e.handleSelectResource = (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let n;
                let l;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.name;
                                n = a.type;
                                a.isCopy;
                                l = module58(a, [
                                    "name",
                                    "type",
                                    "isCopy"
                                ]);
                                if (r !== e.active.name || n !== e.active.type) {
                                    t.next = 3;
                                    break;
                                }
                                return t.abrupt("return");
                            case 3:
                                if (n === "workspaces") {
                                    e.clusters = e.getClustersList(r);
                                    e.cluster = module26(e.clusters, "[0].value", "");
                                    e.setPriceConfig(e.cluster);
                                }
                                if (n === "cluster") {
                                    e.setPriceConfig(r);
                                }
                                t.next = 7;
                                return e.getCurrentMeterData({
                                    name: r,
                                    type: n,
                                    isTime: true,
                                    ...l,
                                    start: e.startTime,
                                    isCopy: true
                                });
                            case 7:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
        e.getSumMeterData = function(t) {
            const a = {};
            const r = {};
            if (!module63(t)) {
                t.forEach((t)=>{
                    if (t.type) {
                        a[t.type] = {
                            value: module26(t, "sum_value", ""),
                            unit: module26(t, "unit", "label")
                        };
                        const n = module63(module26(t, "fee")) ? 0 : parseFloat(module26(t, "fee", 0));
                        r[t.type] = {
                            value: n.toFixed(2),
                            unit: {
                                label: e.priceConfig.currency ? e.priceConfig.currency : " "
                            }
                        };
                    }
                });
            }
            return {
                sumData: a,
                feeData: r
            };
        };
        module65(e, "setCluster", I, module88(e));
        module65(e, "setActiveCrumb", w, module88(e));
        e.getMeterParamsByCrumb = function() {
            const t = {};
            const a = module136(module14.toJS(e.crumbData));
            if (a[0].type === "workspaces" && a.length > 2) {
                a.shift();
            }
            a.forEach((e)=>{
                t[e.type] = e.name;
            });
            return t;
        };
        module65(e, "getCurrentMeterData", M, module88(e));
        module65(e, "setMeterData", P, module88(e));
        e.fetchMeterData = async (a)=>{
            let module;
            let n;
            let resources;
            let i;
            let c;
            ({ module, meters: n, resources, ...i } = a);
            c = await e.store.fetchMeter({
                module,
                meters: n,
                resources,
                ...i
            });
            return c;
        };
        module65(e, "setTimeRange", A, module88(e));
        module65(e, "getChildrenData", j, module88(e));
        e.getChildrenList = (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let n;
                let l;
                let u;
                let i;
                let c;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.labelSelector;
                                n = a.currentType;
                                l = a.childParam;
                                u = e.getChildrenTypeByLevel(n);
                                if (!(i = {
                                    ...e.getChildrenParamsByCrumb(),
                                    ...l
                                }).cluster) {
                                    i.cluster = e.cluster;
                                }
                                if (r) {
                                    i.labelSelector = module14.toJS(r);
                                }
                                c = [];
                                if (![
                                    "namespaces",
                                    "services",
                                    "openpitrixs"
                                ].includes(n)) {
                                    t.next = 14;
                                    break;
                                }
                                if (n !== "namespaces" || e.clusterMeterStore.levelMeterData[i.namespaces]) {
                                    t.next = 10;
                                    break;
                                }
                                t.next = 10;
                                return e.clusterMeterStore.fetchLevelMeter({
                                    ...i
                                });
                            case 10:
                                t.next = 12;
                                return e.getTypesListData(n, i);
                            case 12:
                            case 17:
                                c = t.sent;
                                return t.abrupt("return", c);
                            case 14:
                                if (!u.children) {
                                    t.next = 19;
                                    break;
                                }
                                t.next = 17;
                                return e.clusterMeterStore.fetchList({
                                    type: u.children[0],
                                    ...i
                                });
                            case 19:
                                return t.abrupt("return", c);
                            case 20:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
        e.getClusterMeterChartData = (()=>{
            const t = module44(module41.mark(function t(a, r) {
                let n;
                let l;
                let u;
                let i;
                let c;
                let s;
                let f;
                let d;
                let p;
                let m;
                let h;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                n = e.getMeterParamsByCrumb();
                                l = [];
                                u = e.childrenResourceList.map((e)=>({
                                        name: e.name,
                                        type: e.type,
                                        labelSelector: module26(e, "labelSelector")
                                    }));
                                RESOURCES_TYPE.forEach((e)=>{
                                    const t = [];
                                    u.forEach((a)=>{
                                        if (a.type === e) {
                                            t.push(a);
                                        }
                                    });
                                    if (!module63(t)) {
                                        l.push(t);
                                    }
                                });
                                i = [];
                                c = true;
                                s = false;
                                t.prev = 7;
                                d = module41.mark(function* t() {
                                    let l;
                                    let u;
                                    let c;
                                    let s;
                                    let f;
                                    let d;
                                    let p;
                                    u = (l = h)[0].type;
                                    c = [];
                                    s = l.map((e)=>e.name);
                                    f = module136(n);
                                    if (!r) {
                                        f[u] = l[0].name;
                                    }
                                    d = yield e.setMeterData({
                                        module: u,
                                        meters: [
                                            a
                                        ],
                                        resources: s,
                                        params: f
                                    });
                                    if (!module63(d)) {
                                        l.forEach((e)=>{
                                            const t = d.find((t)=>module26(t, `metric.${t.module}`) === e.name);
                                            if (t) {
                                                const a = module26(t, "sum_value");
                                                const name = module26(t, `metric.${t.module}`);
                                                const unit = module26(t, "unit.label");
                                                c.push({
                                                    name,
                                                    value: a || 0,
                                                    unit,
                                                    type: u
                                                });
                                            }
                                        });
                                    }
                                    p = module446(c, function(e) {
                                        return e.value;
                                    }).reverse();
                                    i.push(p);
                                });
                                p = module3511(l);
                            case 10:
                                t.next = 12;
                                return p.next();
                            case 12:
                                m = t.sent;
                                c = m.done;
                                t.next = 16;
                                return m.value;
                            case 16:
                                h = t.sent;
                                if (c) {
                                    t.next = 22;
                                    break;
                                }
                                return t.delegateYield(d(), "t0", 19);
                            case 19:
                                c = true;
                                t.next = 10;
                                break;
                            case 22:
                                t.next = 28;
                                break;
                            case 24:
                                t.prev = 24;
                                t.t1 = t.catch(7);
                                s = true;
                                f = t.t1;
                            case 28:
                                t.prev = 28;
                                t.prev = 29;
                                if (c || p.return == null) {
                                    t.next = 33;
                                    break;
                                }
                                t.next = 33;
                                return p.return();
                            case 33:
                                t.prev = 33;
                                if (!s) {
                                    t.next = 36;
                                    break;
                                }
                                throw f;
                            case 36:
                                return t.finish(33);
                            case 37:
                                return t.finish(28);
                            case 38:
                                e.pieChartData = module450(i);
                            case 39:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t, null, [
                    [
                        7,
                        24,
                        28,
                        38
                    ],
                    [
                        29,
                        ,
                        33,
                        37
                    ]
                ]);
            }));
            return function(e, a) {
                return t.apply(this, arguments);
            };
        })();
        e.getWorkspacesMeterChartData = (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let n;
                let l;
                let u;
                let c;
                let s;
                let f;
                let d;
                let p;
                let m;
                let h;
                let v;
                let g;
                let y;
                let E;
                let b;
                let _;
                let O;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                if ((r = e.active.type) !== "workspaces") {
                                    t.next = 6;
                                    break;
                                }
                                t.next = 4;
                                return e.getClusterMeterChartData(a, true);
                            case 4:
                                t.next = 51;
                                break;
                            case 6:
                                n = e.getMeterParamsByCrumb();
                                l = [];
                                u = [];
                                c = e.childrenResourceList.map((e)=>({
                                        name: e.name,
                                        type: e.type,
                                        labelSelector: module26(e, "labelSelector")
                                    }));
                                RESOURCES_TYPE.forEach((e)=>{
                                    const t = [];
                                    c.forEach((a)=>{
                                        if (a.type === e) {
                                            t.push(a);
                                        }
                                    });
                                    if (!module63(t)) {
                                        u.push(t);
                                    }
                                });
                                s = {
                                    ...n,
                                    ...module31({
                                        cluster: e.cluster
                                    }, r, e.active.name)
                                };
                                f = e.clusterMeterStore.levelMeterData;
                                d = e.getChildrenTypeByLevel(r);
                                p = d.children;
                                m = true;
                                h = false;
                                t.prev = 17;
                                g = module3511(p);
                            case 19:
                                t.next = 21;
                                return g.next();
                            case 21:
                                y = t.sent;
                                m = y.done;
                                t.next = 25;
                                return y.value;
                            case 25:
                                E = t.sent;
                                if (m) {
                                    t.next = 34;
                                    break;
                                }
                                b = E;
                                _ = handleWSChartData({
                                    levelMeterData: module14.toJS(f),
                                    meters: a,
                                    type: b,
                                    params: s
                                });
                                O = module446(_, function(e) {
                                    return e.value;
                                }).reverse();
                                l.push(O);
                            case 31:
                                m = true;
                                t.next = 19;
                                break;
                            case 34:
                                t.next = 40;
                                break;
                            case 36:
                                t.prev = 36;
                                t.t0 = t.catch(17);
                                h = true;
                                v = t.t0;
                            case 40:
                                t.prev = 40;
                                t.prev = 41;
                                if (m || g.return == null) {
                                    t.next = 45;
                                    break;
                                }
                                t.next = 45;
                                return g.return();
                            case 45:
                                t.prev = 45;
                                if (!h) {
                                    t.next = 48;
                                    break;
                                }
                                throw v;
                            case 48:
                                return t.finish(45);
                            case 49:
                                return t.finish(40);
                            case 50:
                                e.pieChartData = module450(l);
                            case 51:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t, null, [
                    [
                        17,
                        36,
                        40,
                        50
                    ],
                    [
                        41,
                        ,
                        45,
                        49
                    ]
                ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
        module65(e, "getResourceMeterData", L, module88(e));
        e.getChildrenParamsByCrumb = function() {
            const t = {};
            module136(module14.toJS(e.crumbData)).forEach((e)=>{
                t[e.type] = e.name;
            });
            return t;
        };
        e.getTypesListData = async (a, r)=>{
            let n;
            let l;
            let u;
            let i;
            n = e.getChildrenTypeByLevel(a);
            l = [];
            n.children.forEach((type)=>{
                l.push(e.clusterMeterStore.fetchList({
                    type,
                    ...r
                }));
            });
            u = await Promise.all(l);
            i = module450(u);
            return i;
        };
        e.getChildrenTypeByLevel = function(t) {
            return e.props.level.find((e)=>{
                if (module60(e.type)) {
                    return e.type.indexOf(t) > -1;
                }
                return e.type === t;
            });
        };
        e.setLineChartColor = function(e) {
            if (module63(e)) {
                return [];
            }
            e.map((e, t)=>{
                e.key = e.type;
                e.color = COLORS_MAP[AREA_COLORS[t]] || AREA_COLORS[t];
                return e;
            });
            return e;
        };
        e.renderParentMeterCard = function() {
            if (!e.active.type || e.active.type === "cluster" || e.active.type === "workspaces" || module63(module14.toJS(e.priceConfig))) {
                return null;
            }
            const length = e.crumbData.length;
            const r = e.crumbData[length - 2];
            const n = e.active.type === "namespaces" && length === 2 && e.cluster ? `${r.name} (${e.cluster})` : r.name;
            return <div className={module3540.usageCard}><Module3527 className={module3540.meterCard} isParent priceConfig={e.priceConfig} title=<><span>{t(RESOURCE_TITLE[module26(r, "type", "-")])}</span><strong>{n}</strong></> {...e.parentMeterData}/></div>;
        };
        module65(e, "handleChartData", x, module88(e));
        module65(e, "getTimeRange", U, module88(e));
        module65(e, "getCurrentTimeMeterData", z, module88(e));
        module65(e, "handleCrumbOperation", F, module88(e));
        e.renderSubResource = function() {
            const a = module14.toJS(e.pieChartData);
            if (e.active.type === "pods" || e.props.meterType === "openpitrix" || module159(e.currentMeterData.sumData) || module63(a)) {
                return null;
            }
            return <><div className={module3540.subTitle}>{t("CURRENT_RESOURCE_CONSUMPTION")}<module186.Tooltip content={t("METER_RESOURCE_DESC")} placement="top"><module186.Icon name="question" size={20}/></module186.Tooltip></div><div className={module3540.childrenResourceContainer}><module186.Loading spinning={e.resourceLoading}><div className={module3540.childrenlistContainer}><Module3537 selectOptions={module14.toJS(e.currentMeterData.sumData)} getResourceMeterData={e.getResourceMeterData} activeName={e.active.name}/></div><div className={module3540.constomChartContainer}><Module3538 data={a}/></div></module186.Loading></div></>;
        };
        e.renderEmpty = function() {
            return <div className={module3540.empty}><Module833 className={module3540.emptyCard} icon={ICON_TYPES[e.active.type]} title={t("NO_DATA_DESC")} desc={t("NO_METER_DATA")}/></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.initData();
            }
        },
        {
            key: "render",
            value: function() {
                const active = this.active;
                const { type, name, createTime } = active;
                const url = getWebsiteUrl().url;
                const o = Object.values(module14.toJS(this.currentMeterData)).every((e)=>module63(e));
                if (module63(this.list)) {
                    return <div className={module3540.empty}><module186.Loading spinning={this.sideLoading || this.loading}><Module833 className={module3540.emptyCard} icon="cluster" title={t("NO_CLUSTER_AVAILABLE")} desc={learnMoreTip(t.html("METERING_NOT_ENABLED_DESC", {
                        docUrl: url
                    }))} actions=<Module3513 onClick={this.props.handleBack}>返回</Module3513>/></module186.Loading></div>;
                }
                return <div className={module3540.billDetail}><div className={module3(module3540.leftContent, module31({}, module3540.paddingBottom0, this.crumbData.length < 2 || module63(module14.toJS(this.priceConfig))))}><Module3518 crumbData={module14.toJS(this.crumbData)} handleCrumbOperation={this.handleCrumbOperation} loading={this.loading || this.sideLoading} cluster={this.cluster}/><Module3523 list={this.list} active={module14.toJS(this.active)} handleSelectResource={this.handleSelectResource} getChildrenData={this.getChildrenData} loading={this.sideLoading || this.loading} fetchMeterData={this.fetchMeterData} crumbData={this.crumbData} timeRange={module14.toJS(this.timeRange)} getMeterParamsByCrumb={this.getMeterParamsByCrumb} priceConfig={this.priceConfig} cluster={this.cluster} clusterList={this.clusterList} priceConfigList={this.priceConfigList}/>{this.renderParentMeterCard()}</div><div className={module3540.rightContent}><module186.Loading spinning={this.loading}><><Module3521 type={type} cluster={this.cluster} clusters={this.clusters} setCluster={this.setCluster}/>{o ? this.renderEmpty() : <div className={module3540.content}><Module3527 className={module3540.toothbg} title=<><span>{t(RESOURCE_TITLE[type].toUpperCase().replace(/\s+/g, "_"))}</span><strong>{name}</strong></> priceConfig={this.priceConfig} {...this.currentMeterData}/><div className={module3540.subTitle}>{t("CONSUMPTION_HISTORY")}</div><div className={module3540.info}>{module63(module14.toJS(this.timeRange)) ? null : <Module3529 createTime={createTime} getTime={this.getTimeRange} timeRange={this.timeRange}/>}</div><Module3531 chartData={module14.toJS(this.chartData)} priceConfig={this.priceConfig}/><Module3535 data={module14.toJS(this.tableData)} priceConfig={this.priceConfig}/>{this.renderSubResource()}</div>}</></module186.Loading></div></div>;
            }
        }
    ]);
    return r;
})(Component), f = module49(s.prototype, "crumbData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), d = module49(s.prototype, "cacheCrumbData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), p = module49(s.prototype, "tableData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), m = module49(s.prototype, "active", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), h = module49(s.prototype, "list", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), v = module49(s.prototype, "timeRange", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), g = module49(s.prototype, "currentMeterData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), y = module49(s.prototype, "parentMeterData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), E = module49(s.prototype, "sideLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), b = module49(s.prototype, "loading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), _ = module49(s.prototype, "chartData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), O = module49(s.prototype, "priceConfig", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), S = module49(s.prototype, "priceConfigList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), C = module49(s.prototype, "pieChartData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), D = module49(s.prototype, "resourceLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), k = module49(s.prototype, "getPriceConfigListByCluster", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let n;
            const r = [];
            a.forEach((t)=>{
                if (!t.disabled) {
                    r.push(_this.store.fetchPrice({
                        cluster: t.name
                    }));
                }
            });
            if (globals.app.isMultiCluster) {
                r.push(_this.store.fetchPrice({
                    cluster: ""
                }));
            }
            n = await Promise.all(r);
            _this.priceConfigList = n;
        };
    }
}), N = module49(s.prototype, "getClustersList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            const a = _this.crumbData[0].list.find((e)=>e.name === t);
            const r = t === "system-workspace" ? _this.clusterList : module26(a, "_origin.clusters", []);
            if (module63(r)) {
                return [];
            }
            const n = r.map((t)=>{
                const a = _this.clusterList.find((e)=>e.name === t.name);
                if (module63(a)) {
                    return null;
                }
                return {
                    label: a.name,
                    value: a.name,
                    type: a._origin.isHost ? "host" : "member",
                    disabled: a.disabled,
                    sortValue: Number(a.disabled)
                };
            }).filter((e)=>!module63(e));
            if (n.every((e)=>e.disabled)) {
                return [];
            }
            return module446(n, function(e) {
                return e.sortValue;
            });
        };
    }
}), T = module49(s.prototype, "setPriceConfig", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            const a = t || module26(DEFAULT_CLUSTER, "metadata.name");
            const r = _this.priceConfigList.find((e)=>e.cluster && e.cluster === a);
            const n = module136(r);
            delete n.cluster;
            _this.priceConfig = module63(n) ? {} : r;
            _this.setStartTime();
        };
    }
}), R = module49(s.prototype, "setStartTime", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.startTime = getRetentionDay(module26(_this.priceConfig, "retention_day", "7d"));
        };
    }
}), I = module49(s.prototype, "setCluster", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            let n;
            let l;
            let u;
            _this.cluster = a;
            _this.loading = true;
            r = _this.active;
            n = r.name;
            l = r.type;
            u = _this.list.find((e)=>e.name === n);
            _this.setPriceConfig(a);
            await _this.getCurrentMeterData({
                name: n,
                type: l,
                isCopy: true,
                isTime: true,
                start: _this.startTime,
                labelSelector: module26(u, "labelSelector", "")
            });
            _this.loading = false;
        };
    }
}), w = module49(s.prototype, "setActiveCrumb", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ name, type, isCopy, start }) {
            const u = module449(_this.crumbData);
            u.type = type;
            u.name = name;
            u.start = start;
            if (isCopy) {
                _this.cacheCrumbData = module136(module14.toJS(_this.crumbData));
            }
        };
    }
}), M = module49(s.prototype, "getCurrentMeterData", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let n;
                let l;
                let u;
                let i;
                let c;
                let s;
                let f;
                let d;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.name;
                                n = a.type;
                                l = a.isCopy;
                                u = a.labelSelector;
                                i = a.isTime;
                                c = a.start;
                                _this.active = {
                                    name: r,
                                    type: n,
                                    start: c
                                };
                                _this.tableData = [];
                                _this.pieChartData = [];
                                _this.timeRange = {};
                                _this.setActiveCrumb({
                                    name: r,
                                    type: n,
                                    isCopy: !!l,
                                    start: c
                                });
                                s = _this.getMeterParamsByCrumb();
                                _this.loading = true;
                                t.next = 10;
                                return _this.setMeterData({
                                    module: n,
                                    meters: "all",
                                    resources: [
                                        r
                                    ],
                                    start: c,
                                    isTime: i,
                                    params: s
                                });
                            case 10:
                                f = t.sent;
                                t.next = 13;
                                return _this.getCurrentTimeMeterData({
                                    valueKey: "currentMeterData",
                                    module: n,
                                    resources: [
                                        r
                                    ],
                                    start: c,
                                    params: s
                                });
                            case 13:
                                _this.tableData = _this.setLineChartColor(f);
                                _this.setTimeRange({
                                    isTime: i,
                                    start: c
                                });
                                _this.chartData = f;
                                if (n === "pods") {
                                    t.next = 35;
                                    break;
                                }
                                if (![
                                    "workspaces",
                                    "cluster",
                                    "nodes"
                                ].includes(n)) {
                                    t.next = 24;
                                    break;
                                }
                                t.next = 20;
                                return _this.getChildrenList({
                                    labelSelector: u,
                                    currentType: n
                                });
                            case 20:
                                d = t.sent;
                                _this.childrenResourceList = d;
                                t.next = 31;
                                break;
                            case 24:
                                if (_this.clusterMeterStore.levelMeterData[s.namespaces]) {
                                    t.next = 30;
                                    break;
                                }
                                if (!s.cluster) {
                                    s.cluster = _this.cluster;
                                }
                                t.next = 28;
                                return _this.clusterMeterStore.fetchLevelMeter({
                                    ...s
                                });
                            case 28:
                                t.next = 31;
                                break;
                            case 30:
                                _this.childrenResourceList = [];
                            case 31:
                                t.next = 33;
                                return _this.getResourceMeterData(module26(_this.tableData, "[0].type", "cpu"));
                            case 33:
                                t.next = 36;
                                break;
                            case 35:
                                _this.childrenResourceList = [];
                            case 36:
                                _this.loading = false;
                            case 37:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
}), P = module49(s.prototype, "setMeterData", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            let n;
            let l;
            let u;
            let i;
            let c;
            let end;
            let f;
            let d;
            let p;
            r = a.params;
            n = a.module;
            l = a.meters;
            u = a.resources;
            i = a.list;
            c = a.start;
            end = a.end;
            f = a.isTime;
            if (r.cluster && _this.props.meterType === "cluster") {
                _this.cluster = r.cluster;
            }
            r.cluster = _this.cluster;
            if (!(n !== "applications" || module63(u))) {
                d = i || _this.list;
                u = u.map((e)=>{
                    const t = d.find((t)=>t.name === e);
                    const a = module26(t, "_origin.version.name", "") || module26(t, "_origin.version", "");
                    return `${e}${a ? `:${a}` : ""}`;
                });
            }
            if (n === "openpitrixs" && globals.app.isMultiCluster && module26(_this.clusters.find((e)=>e.value === r.cluster), "type") !== "host") {
                delete r.cluster;
            }
            p = await _this.fetchMeterData({
                module: n,
                meters: l,
                resources: u,
                isTime: f,
                start: c,
                end,
                ...r
            });
            return p;
        };
    }
}), A = module49(s.prototype, "setTimeRange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ isTime, ...rest }) {
            const n = getTimeParams({
                isTime,
                ...rest
            });
            const { step, start, end } = n;
            _this.timeRange = start >= end ? {} : {
                step: getTimeStr(step),
                start: 1000 * start,
                end: 1000 * end
            };
        };
    }
}), j = module49(s.prototype, "getChildrenData", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let n;
                let l;
                let u;
                let list;
                let c;
                let s;
                let f;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.name;
                                n = a.type;
                                l = a.labelSelector;
                                u = module449(_this.crumbData);
                                _this.loading = true;
                                _this.sideLoading = true;
                                if (n === "workspaces" && r !== u.name) {
                                    _this.clusters = _this.getClustersList(r);
                                    _this.cluster = module26(_this.clusters, "[0].value", "");
                                    _this.setPriceConfig(_this.cluster);
                                }
                                if (n === "cluster" && r !== u.name) {
                                    _this.setPriceConfig(r);
                                }
                                _this.setActiveCrumb({
                                    name: r,
                                    type: n,
                                    isCopy: true,
                                    start: _this.startTime
                                });
                                t.next = 9;
                                return _this.getChildrenList({
                                    labelSelector: l,
                                    currentType: n
                                });
                            case 9:
                                list = t.sent;
                                if (module63(list) || !module60(list)) {
                                    t.next = 20;
                                    break;
                                }
                                c = list[0].type;
                                s = module449(_this.crumbData);
                                f = _this.getMeterParamsByCrumb();
                                t.next = 16;
                                return _this.getCurrentTimeMeterData({
                                    valueKey: "parentMeterData",
                                    params: f,
                                    module: s.type,
                                    start: s.start,
                                    resources: [
                                        s.name
                                    ]
                                });
                            case 16:
                                _this.crumbData.push({
                                    type: c,
                                    name: list[0].name,
                                    list,
                                    start: _this.startTime
                                });
                                t.next = 19;
                                return _this.getCurrentMeterData({
                                    name: list[0].name,
                                    type: c,
                                    isCopy: true,
                                    isTime: true,
                                    start: _this.startTime,
                                    labelSelector: module26(list, "[0].labelSelector")
                                });
                            case 19:
                                _this.list = list;
                            case 20:
                                _this.loading = false;
                                _this.sideLoading = false;
                            case 22:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
}), L = module49(s.prototype, "getResourceMeterData", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            r = _this.props.level;
            _this.resourceLoading = true;
            if (!(r[0].type !== "workspaces")) {
                await _this.getWorkspacesMeterChartData(a);
            } else {
                await _this.getClusterMeterChartData(a);
            }
            _this.resourceLoading = false;
        };
    }
}), x = module49(s.prototype, "handleChartData", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            let params;
            let l;
            let i;
            ({ meters: r, ...params } = a);
            l = _this.active.name;
            _this.tableData = [];
            i = await _this.setMeterData({
                module: _this.active.type,
                resources: [
                    l
                ],
                meters: r,
                isTime: true,
                params
            });
            _this.tableData = _this.setLineChartColor(i);
            _this.chartData = i;
        };
    }
}), U = module49(s.prototype, "getTimeRange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            const { type, value } = t;
            if (t.methord === "close") {
                const n = _this.getMeterParamsByCrumb();
                module74(_this.timeRange, `${type}`, value);
                _this.handleChartData({
                    meters: "all",
                    ...n,
                    ...module14.toJS(_this.timeRange)
                });
            }
            module74(_this.timeRange, `${type}`, value);
        };
    }
}), z = module49(s.prototype, "getCurrentTimeMeterData", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            let n;
            let l;
            let u;
            let i;
            let c;
            let s;
            let f;
            let d;
            r = a.valueKey;
            n = a.params;
            l = a.module;
            u = a.start;
            i = a.resources;
            c = await _this.setMeterData({
                params: n,
                meters: "all",
                module: l,
                start: u,
                end: new Date,
                resources: i,
                valueKey: "parentMeterData",
                isTime: true
            });
            s = _this.getSumMeterData(c);
            f = s.sumData;
            d = s.feeData;
            _this[r] = {
                sumData: f,
                feeData: d
            };
        };
    }
}), F = module49(s.prototype, "handleCrumbOperation", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = module44(module41.mark(function t(a) {
                let r;
                let n;
                let l;
                let u;
                let i;
                let c;
                let s;
                return module41.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = _this.crumbData.length - 1;
                                _this.sideLoading = true;
                                if (a !== "back") {
                                    t.next = 11;
                                    break;
                                }
                                if (!(r <= 0)) {
                                    t.next = 7;
                                    break;
                                }
                                _this.props.handleBack();
                                _this.sideLoading = false;
                                return t.abrupt("return");
                            case 7:
                                _this.crumbData.pop();
                                r -= 1;
                                t.next = 18;
                                break;
                            case 11:
                                if (!((n = _this.cacheCrumbData.length - 1) <= 0 || n === r)) {
                                    t.next = 15;
                                    break;
                                }
                                _this.sideLoading = false;
                                return t.abrupt("return");
                            case 15:
                                l = _this.cacheCrumbData[r + 1];
                                _this.crumbData.push(l);
                                r += 1;
                            case 18:
                                u = module449(_this.crumbData);
                                if (!(r > 0)) {
                                    t.next = 25;
                                    break;
                                }
                                i = _this.crumbData[r - 1];
                                c = _this.getMeterParamsByCrumb();
                                if (i.type === "workspaces") {
                                    c.workspaces = i.name;
                                    _this.clusters = _this.getClustersList(i.name);
                                    Object.keys(c).forEach((e)=>{
                                        if (e !== "workspaces") {
                                            c[e] = undefined;
                                        }
                                    });
                                } else {
                                    c[u.type] = undefined;
                                }
                                t.next = 25;
                                return _this.getCurrentTimeMeterData({
                                    params: c,
                                    valueKey: "parentMeterData",
                                    module: i.type,
                                    start: i.start,
                                    resources: [
                                        i.name
                                    ]
                                });
                            case 25:
                                s = u.list.find((e)=>e.name === u.name);
                                t.next = 28;
                                return _this.getCurrentMeterData({
                                    name: u.name,
                                    type: u.type,
                                    start: _this.startTime,
                                    labelSelector: module26(s, "labelSelector", ""),
                                    isTime: true
                                });
                            case 28:
                                _this.list = u.list;
                                _this.sideLoading = false;
                            case 30:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
}), c = s)) || c;
export default Me;
