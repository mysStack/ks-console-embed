import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import { zoom } from "unpacked/module-5773.js";
import { event, select } from "unpacked/module-893.js";
import module790 from "components/Base/Panel";
import module4554 from "stores/network/topology";
import { startAutoRefresh, stopAutoRefresh } from "utils/monitoring";
import module4600 from "unpacked/module-4600.js";
import module4602 from "pages/projects/containers/Services/Topology/Service";
import module4604 from "unpacked/module-4604.js";
import module4606 from "pages/projects/containers/Services/Topology/Detail";
import module4620 from "unpacked/module-4620.js";
let o;
const C = observer(o = ((e)=>{
    module55(a, e);
    var t = ((e)=>{
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
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.state = {
            type: "pause",
            selectService: null,
            fullscreen: false
        };
        e.store = new module4554;
        e.handleZoom = function() {
            const event_transform = event.transform;
            e.transPan.attr("transform", `scale(${event_transform.k}) translate(${event_transform.x / event_transform.k}, ${event_transform.y / event_transform.k})`);
        };
        e.fetchData = function(t = {}) {
            e.store.fetchList({
                ...e.props.match.params,
                ...t
            });
        };
        e.handleChange = function(type) {
            e.setState({
                type
            }, function() {
                if (e.state.type === "auto") {
                    startAutoRefresh(module88(e), {
                        method: "fetchData",
                        leading: false,
                        interval: 10000
                    });
                } else {
                    stopAutoRefresh(module88(e));
                }
            });
        };
        e.handleRefresh = function() {
            e.fetchData();
        };
        e.handleServiceClick = function(t) {
            e.setState(function({ selectService }) {
                return {
                    selectService: selectService && selectService.id === t.id ? null : t
                };
            });
        };
        e.handleDetailClose = function() {
            e.setState({
                selectService: null
            });
        };
        e.toggleFullscreen = function() {
            e.setState(function(e) {
                return {
                    fullscreen: !e.fullscreen
                };
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.svg = select("#canvas").call(zoom().extent([
                    [
                        0,
                        0
                    ],
                    [
                        9999,
                        9999
                    ]
                ]).scaleExtent([
                    0.1,
                    1.5
                ]).on("zoom", this.handleZoom));
                this.transPan = this.svg.select("g.transform");
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                stopAutoRefresh(this);
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const state = this.state;
                const { type, fullscreen, selectService } = state;
                const store = this.store;
                const { nodes = [], edges = [] } = store.topologies;
                const o_isLoading = store.isLoading;
                return module553.default.createElement(module790, {
                    className: module3(module31({}, module4620.fullscreen, fullscreen))
                }, module553.default.createElement("div", {
                    className: module4620.toolbar
                }, module553.default.createElement(module4600, {
                    value: type,
                    options: this.options,
                    onChange: this.handleChange
                }), module553.default.createElement("div", {
                    className: module4620.right
                }, module553.default.createElement(module186.Button, {
                    type: "flat",
                    icon: "refresh",
                    onClick: this.handleRefresh
                }), module553.default.createElement(module186.Button, {
                    type: "flat",
                    icon: fullscreen ? "minimize" : "maximize",
                    onClick: this.toggleFullscreen
                }))), module553.default.createElement("div", {
                    className: module4620.content
                }, module553.default.createElement("svg", {
                    id: "canvas"
                }, module553.default.createElement("g", {
                    className: "transform"
                }, module553.default.createElement("g", {
                    className: "chart"
                }, edges.map((e)=>module553.default.createElement(module4604, {
                        key: e.v + e.w,
                        data: e
                    })), nodes.map((t)=>module553.default.createElement(module4602, {
                        key: t.id,
                        data: t,
                        isSelected: selectService && selectService.id === t.id,
                        onClick: _this.handleServiceClick
                    }))))), o_isLoading && module553.default.createElement(module186.Loading, {
                    className: module4620.loading
                }), !!selectService && module553.default.createElement(module4606, {
                    data: selectService,
                    store: this.store,
                    match: this.props.match,
                    onClose: this.handleDetailClose
                })));
            }
        },
        {
            key: "options",
            get: function() {
                return [
                    {
                        label: "AUTO_REFRESH",
                        icon: "start",
                        value: "auto"
                    },
                    {
                        label: "PAUSE",
                        icon: "pause",
                        value: "pause"
                    }
                ];
            }
        }
    ]);
    return a;
})(module553.Component)) || o;
export default C;
