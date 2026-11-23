import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-138.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-24.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-442.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module61 from "unpacked/module-61.js";
import module1274 from "unpacked/module-1274.js";
import "unpacked/module-31.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module189 from "unpacked/module-189.js";
import module14 from "unpacked/module-14.js";
import module243 from "unpacked/module-243.js";
import { CreateUidFactory } from "utils/monitoring";
import { getMsFromTimeAlias } from "utils/time";
import { MONITOR_GRAPH_COLORS } from "utils/constants";
import module1353, { MONITOR_PANEL_TYPE } from "stores/monitoring/custom/monitor";
import signlestat from "stores/monitoring/custom/singlestat";
import graph from "stores/monitoring/custom/graph";
import module2856 from "stores/monitoring/custom/row";
let o;
let u;
let c;
let s;
let i;
let f;
let d;
let p;
let m;
const x = {
    from: "now-30m",
    to: "now"
};
const U = {
    graph,
    signlestat
};
o = (()=>{
    function e(t) {
        const t_title = t.title;
        const r = t_title === undefined ? "" : t_title;
        const t_cluster = t.cluster;
        const l = t_cluster === undefined ? "" : t_cluster;
        const t_namespace = t.namespace;
        const v = t_namespace === undefined ? "" : t_namespace;
        const t_datasource = t.datasource;
        const E = t_datasource === undefined ? "prometheus" : t_datasource;
        const t_description = t.description;
        const S = t_description === undefined ? "" : t_description;
        const t_panels = t.panels;
        const O = t_panels === undefined ? [] : t_panels;
        const t_templatings = t.templatings;
        const T = t_templatings === undefined ? [] : t_templatings;
        const t_time = t.time;
        const D = t_time === undefined ? x : t_time;
        const t_isEditing = t.isEditing;
        const I = t_isEditing !== undefined && t_isEditing;
        const t_refresh = t.refresh;
        const A = t_refresh === undefined ? "" : t_refresh;
        const t_name = t.name;
        const L = t_name === undefined ? "" : t_name;
        const t_formTemplate = t.formTemplate;
        module36(this, e);
        module65(this, "title", u, this);
        module65(this, "refresh", c, this);
        module65(this, "time", s, this);
        module65(this, "isEditing", i, this);
        module65(this, "textMonitors", f, this);
        this.unNameGraphRow = new module2856({
            config: {
                id: 0
            }
        });
        module65(this, "graphMonitorRows", d, this);
        module65(this, "targetsMetadata", p, this);
        module65(this, "changeTitle", m, this);
        this.title = r;
        this.cluster = l;
        this.namespace = v;
        this.datasource = E;
        this.description = S;
        this.panels = O;
        this.templatings = T;
        this.time = D;
        this.refresh = A;
        this.name = L;
        this.formTemplate = t_formTemplate;
        this.isEditing = I;
        this.generateMonitorList();
        this.uidFactory = CreateUidFactory(this.panels.map((e)=>e.id));
    }
    let t;
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
            key: "getTimeRange",
            value: function() {
                const time = this.time;
                const { from, to } = time;
                return {
                    from: module243(this.parseGrafanaTime(from)),
                    to: module243(this.parseGrafanaTime(to))
                };
            }
        },
        {
            key: "refreshMs",
            get: function() {
                if (this.refresh) {
                    return getMsFromTimeAlias(this.refresh);
                }
                return 0;
            }
        },
        {
            key: "timeRange",
            get: function() {
                const time = this.time;
                const { from, to } = time;
                return {
                    from: module243(this.parseGrafanaTime(from)),
                    to: module243(this.parseGrafanaTime(to))
                };
            }
        }
    ]);
    module37(e, [
        {
            key: "changeRefreshInterval",
            value: function(e) {
                this.refresh = e;
            }
        },
        {
            key: "changeTimeRange",
            value: function({ from, to }) {
                this.time.from = from;
                this.time.to = to;
            }
        },
        {
            key: "switchEditingMode",
            value: function(e) {
                this.isEditing = e;
            }
        },
        {
            key: "changeModeToEditing",
            value: function() {
                this.switchEditingMode(true);
                return this;
            }
        },
        {
            key: "generateMonitorList",
            value: function() {
                const e = this.panels.reduce((acc, panel)=>{
                    acc[panel.type === MONITOR_PANEL_TYPE.TEXT ? "textPanels" : "otherPanels"].push(panel);
                    return acc;
                }, {
                    textPanels: [],
                    otherPanels: []
                });
                const { textPanels, otherPanels } = e;
                this.textMonitors = this.generateTextMonitors(textPanels);
                const r = this.gennerateGraphMonitorRows(otherPanels);
                const { unNameGraphRow, graphRows } = r;
                this.unNameGraphRow = unNameGraphRow;
                this.graphMonitorRows = graphRows;
            }
        },
        {
            key: "generateTextMonitors",
            value: function(e) {
                const _this = this;
                const monitors = e.map((e)=>new signlestat({
                        ...e,
                        namespace: _this.namespace,
                        cluster: _this.cluster
                    }));
                return new module2856({
                    monitors
                });
            }
        },
        {
            key: "gennerateGraphMonitorRows",
            value: function(e) {
                const _this = this;
                const a = e.reduce((acc, config)=>{
                    if (config.type === MONITOR_PANEL_TYPE.ROW) {
                        return [].concat(module61(acc), [
                            new module2856({
                                config
                            })
                        ]);
                    }
                    const r = new (U[config.type] || module1353)({
                        ...config,
                        namespace: _this.namespace,
                        cluster: _this.cluster
                    });
                    const n = acc.pop();
                    n.push(r);
                    return [].concat(module61(acc), [
                        n
                    ]);
                }, [
                    this.unNameGraphRow
                ]);
                const r = module1274(a);
                return {
                    unNameGraphRow: r[0],
                    graphRows: r.slice(1)
                };
            }
        },
        {
            key: "addNewRow",
            value: function() {
                this.graphMonitorRows.push(new module2856({
                    config: {
                        id: this.uidFactory.generateUID(),
                        title: "New Row",
                        type: "row"
                    }
                }));
            }
        },
        {
            key: "generateNewTextMonitor",
            value: function() {
                const e = new signlestat({
                    id: this.uidFactory.generateUID(),
                    title: "",
                    format: "none",
                    type: "singlestat",
                    decimals: 0,
                    namespace: this.namespace,
                    cluster: this.cluster,
                    valueName: "last",
                    targets: [
                        {
                            expr: ""
                        }
                    ]
                });
                e.belong(this.textMonitors);
                return e;
            }
        },
        {
            key: "generatGraphMonitor",
            value: function({ bars, lines }) {
                const r = new graph({
                    id: this.uidFactory.generateUID(),
                    type: "graph",
                    title: "",
                    lines,
                    bars,
                    description: "",
                    namespace: this.namespace,
                    cluster: this.cluster,
                    stack: false,
                    targets: [
                        {
                            expr: "",
                            legendFormat: "",
                            step: "1m",
                            refId: 1
                        }
                    ],
                    yaxes: [
                        {
                            format: "none",
                            decimals: 0
                        }
                    ],
                    colors: MONITOR_GRAPH_COLORS[0].colors
                });
                r.belong(this.unNameGraphRow);
                return r;
            }
        },
        {
            key: "generatTableMonitor",
            value: function() {
                const e = new module1353({
                    id: this.uidFactory.generateUID(),
                    title: "",
                    format: "none",
                    type: "graph",
                    decimals: 0,
                    namespaces: this.namespace,
                    cluster: this.cluster,
                    targets: [
                        {
                            expr: ""
                        }
                    ]
                });
                e.belong(this.unNameGraphRow);
                return e;
            }
        },
        {
            key: "parseGrafanaTime",
            value: function(e) {
                if (this.isGrafanaTimeFormat(e)) {
                    const t = e.replace(/now-?/, "");
                    const a = getMsFromTimeAlias(t);
                    return Date.now() - a;
                }
                return new Date(e).valueOf();
            }
        },
        {
            key: "isGrafanaTimeFormat",
            value: function(e = "") {
                return e.match(/^now$|^now-(\d+[smhd])$/);
            }
        },
        {
            key: "fetchMetadata",
            value: (t = module44(module41.mark(function e() {
                let t;
                let a;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                e.next = 2;
                                return request.get("kapis/monitoring.kubesphere.io/v1beta1/targets/metadata", {
                                    cluster: this.cluster,
                                    namespace: this.namespace
                                });
                            case 2:
                                e.t0 = e.sent;
                                if (e.t0) {
                                    e.next = 5;
                                    break;
                                }
                                e.t0 = {
                                    data: []
                                };
                            case 5:
                                t = e.t0;
                                a = t.data;
                                this.targetsMetadata = a || [];
                            case 8:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function() {
                return t.apply(this, arguments);
            })
        },
        {
            key: "toJS",
            value: function() {
                const textMonitors = this.textMonitors;
                const unNameGraphRow = this.unNameGraphRow;
                const graphMonitorRows = this.graphMonitorRows;
                const r = [].concat(module61(unNameGraphRow.monitors), module61(textMonitors.monitors)).map((e)=>module189(module14.toJS(e.config), [
                        "cluster",
                        "namespace"
                    ]));
                const n = graphMonitorRows.reduce((acc, graphMonitorRow)=>{
                    const a = graphMonitorRow.monitors.map((e)=>module189(module14.toJS(e.config), [
                            "cluster",
                            "namespace"
                        ]));
                    return acc.concat(graphMonitorRow.config, a);
                }, []);
                module74(this.formTemplate, "spec", Object.assign(module26(this.formTemplate, "spec", {}), {
                    title: this.title,
                    templatings: this.templatings,
                    refresh: this.refresh,
                    time: module14.toJS(this.time),
                    panels: [].concat(module61(r), module61(n))
                }));
                return this.formTemplate;
            }
        }
    ]);
    return e;
})();
u = module49(o.prototype, "title", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
c = module49(o.prototype, "refresh", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
s = module49(o.prototype, "time", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            from: "now",
            to: "now"
        };
    }
});
module49(o.prototype, "refreshMs", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "refreshMs"), o.prototype);
module49(o.prototype, "timeRange", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "timeRange"), o.prototype);
i = module49(o.prototype, "isEditing", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
f = module49(o.prototype, "textMonitors", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
d = module49(o.prototype, "graphMonitorRows", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
p = module49(o.prototype, "targetsMetadata", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
m = module49(o.prototype, "changeTitle", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.title = t;
        };
    }
});
module49(o.prototype, "changeRefreshInterval", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "changeRefreshInterval"), o.prototype);
module49(o.prototype, "changeTimeRange", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "changeTimeRange"), o.prototype);
module49(o.prototype, "switchEditingMode", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "switchEditingMode"), o.prototype);
module49(o.prototype, "generateMonitorList", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "generateMonitorList"), o.prototype);
export default o;
