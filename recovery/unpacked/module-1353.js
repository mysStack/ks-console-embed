import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-87.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-24.js";
import "./module-38.js";
import "./module-64.js";
import "./module-7.js";
import "./module-32.js";
import "./module-109.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module49 from "./module-49.js";
import "./module-66.js";
import "./module-249.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-319.js";
import module96 from "./module-96.js";
import "./module-58.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module195 from "./module-195.js";
let f;
let d;
let p;
let m;
let v;
let h;
export const MONITOR_PANEL_TYPE = {
    TEXT: "singlestat",
    ROW: "row",
    GRAPH: "graph"
};
f = (()=>{
    function e(t) {
        const _this = this;
        module36(this, e);
        this.belongTo = null;
        module65(this, "errorMessage", d, this);
        module65(this, "config", p, this);
        module65(this, "metrics", m, this);
        module65(this, "timeRange", v, this);
        this.monitoring = function(e = _this.template) {
            if (!_this.isObserving) {
                _this.isObserving = true;
                _this.pollingController = R(()=>{
                    const t = e.getTimeRange();
                    const { from, to } = t;
                    _this.fetchMetrics({
                        start: from.valueOf(),
                        end: to.valueOf()
                    });
                }, {
                    interval: e.refreshMs
                });
                _this.disposer = module14.reaction(function() {
                    return {
                        time: e.timeRange,
                        refresh: e.refreshMs,
                        exprs: _this.config.targets.map((e)=>e.expr),
                        steps: _this.config.targets.map((e)=>e.step)
                    };
                }, function({ refresh }) {
                    _this.metrics = _this.metrics.map((e)=>({
                            ...e,
                            values: []
                        }));
                    if (_this.pollingController) {
                        _this.pollingController.stopPolling();
                    }
                    _this.pollingController = R(()=>{
                        const t = e.getTimeRange();
                        const { from, to } = t;
                        _this.fetchMetrics({
                            start: from.valueOf(),
                            end: to.valueOf()
                        });
                    }, {
                        interval: refresh
                    });
                });
            }
        };
        module65(this, "fetchMetrics", h, this);
        this.fetchMetric = (()=>{
            const e = module44(module41.mark(function e(t) {
                let r;
                let l;
                let o;
                let u;
                let cluster;
                let namespace;
                let i;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                r = t.expr;
                                l = t.step;
                                o = t.start;
                                u = t.end;
                                cluster = t.cluster;
                                namespace = t.namespace;
                                if (r) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return", []);
                            case 3:
                                e.next = 5;
                                return request.get(`${_this.apiVersion}/targets/query`, {
                                    cluster,
                                    namespace,
                                    expr: r,
                                    step: l,
                                    start: o,
                                    end: u
                                }, null, function(e, t) {
                                    throw new Error(t.message);
                                });
                            case 5:
                                e.t0 = e.sent;
                                if (e.t0) {
                                    e.next = 8;
                                    break;
                                }
                                e.t0 = {};
                            case 8:
                                i = e.t0;
                                return e.abrupt("return", module26(i, "data.result", []));
                            case 10:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        })();
        this.stopMonitoring = function() {
            _this.isObserving = false;
            if (_this.pollingController) {
                _this.pollingController.stopPolling();
            }
            if (_this.disposer) {
                _this.disposer();
            }
        };
        this.belong = function(e) {
            _this.belongTo = e;
            return _this;
        };
        this.config = t;
        this.requestID = 0;
    }
    module37(e, [
        {
            key: "getPath",
            value: function({ cluster, namespace } = {}) {
                let r = "";
                if (cluster) {
                    r += `/clusters/${cluster}`;
                }
                if (namespace) {
                    r += `/namespaces/${namespace}`;
                }
                return r;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/monitoring.kubesphere.io/v1beta1";
            }
        },
        {
            key: "type",
            get: function() {
                return this.config.type;
            }
        },
        {
            key: "targets",
            get: function() {
                return this.config.targets || [];
            }
        },
        {
            key: "id",
            get: function() {
                return this.config.id;
            }
        }
    ]);
    module37(e, [
        {
            key: "clearMonitorMetrics",
            value: function() {
                this.metrics = [];
            }
        },
        {
            key: "clone",
            value: function() {
                return new this.constructor(module14.toJS(this.config));
            }
        },
        {
            key: "formattedMetrics",
            get: function() {
                return this.metrics.map(({ target, metric, responseMetricID, ...rest })=>{
                    const name = ((e = "", t = {})=>{
                        if (module195(e)) {
                            return e.replace(/\{\{(.*?)\}\}/g, (e, a)=>t[a]);
                        }
                    })(target.legendFormat, metric) || responseMetricID;
                    return {
                        ...rest,
                        name
                    };
                });
            }
        }
    ]);
    return e;
})();
d = module49(f.prototype, "errorMessage", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
p = module49(f.prototype, "config", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
m = module49(f.prototype, "metrics", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
v = module49(f.prototype, "timeRange", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            start: 0,
            end: 0
        };
    }
});
module49(f.prototype, "type", [
    module14.computed
], Object.getOwnPropertyDescriptor(f.prototype, "type"), f.prototype);
module49(f.prototype, "targets", [
    module14.computed
], Object.getOwnPropertyDescriptor(f.prototype, "targets"), f.prototype);
module49(f.prototype, "clearMonitorMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(f.prototype, "clearMonitorMetrics"), f.prototype);
h = module49(f.prototype, "fetchMetrics", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            let o;
            let u;
            let s;
            let cluster;
            let namespace;
            let d;
            let p;
            r = a.start;
            o = a.end;
            u = _this.config;
            ({ targets: s = [], cluster, namespace } = u);
            _this.timeRange = {
                start: r,
                end: o
            };
            d = {
                ID: ++_this.requestID,
                errorMessage: "",
                metrics: []
            };
            try {
                p = await Promise.all(s.map(async (target)=>{
                    let l;
                    let u;
                    let c;
                    l = target.expr;
                    u = target.step;
                    c = await _this.fetchMetric({
                        cluster,
                        namespace,
                        expr: l,
                        step: u,
                        start: parseInt(r / 1000, 10),
                        end: parseInt(o / 1000, 10)
                    });
                    return {
                        data: c,
                        target
                    };
                }));
                d.metrics = p.reduce((acc, { data = [], target = {} })=>{
                    const { expr, refId } = target;
                    const c = data.map(({ values = [], metric = {} })=>{
                        const responseMetricID = T(metric) || expr;
                        const id = `${refId}.${responseMetricID}`;
                        return {
                            values,
                            metric,
                            target,
                            id,
                            responseMetricID
                        };
                    });
                    return acc.concat(c);
                }, []);
            } catch (error) {
                d.errorMessage = error.message;
            } finally{
                if (d.ID === _this.requestID) {
                    _this.metrics = d.metrics;
                    _this.errorMessage = d.errorMessage;
                }
            }
        };
    }
});
module49(f.prototype, "formattedMetrics", [
    module14.computed
], Object.getOwnPropertyDescriptor(f.prototype, "formattedMetrics"), f.prototype);
const C = f;
function T({ __name__, ...rest } = {}) {
    if (!__name__) {
        return JSON.stringify(rest || {});
    }
    const r = Object.entries(rest || {}).map((e)=>{
        const t = module96(e, 2);
        const a = t[0];
        const r = t[1];
        return `${a}="${r}"`;
    });
    const n = r.length ? `{${r.join(",")}}` : "";
    return `${__name__}${n}`;
}
function R(e, t) {
    var a = {
        timer: null,
        stopPolling: function() {
            clearTimeout(a.timer);
        }
    };
    e();
    (function r() {
        if (t.interval) {
            a.timer = setTimeout(()=>{
                e();
                r();
            }, t.interval);
        }
    })();
    return a;
}
export default C;
