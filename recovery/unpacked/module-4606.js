import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module4607 from "./module-4607.js";
import module4609 from "./module-4609.js";
import module4612 from "./module-4612.js";
import module4615 from "./module-4615.js";
import module4617 from "./module-4617.js";
import module4619 from "./module-4619.js";
let o;
let c;
let s;
const CollapseItem = module186.Collapse.CollapseItem;
const R = observer((s = c = ((e)=>{
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
            activeKey: [
                "Info"
            ]
        };
        e.handleJump = function(t) {
            e.fetchDetail(t.id);
        };
        e.handleCollapseChange = function(activeKey) {
            e.setState({
                activeKey
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchDetail(this.props.data.id);
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.data.id !== this.props.data.id) {
                    this.fetchDetail(this.props.data.id);
                }
            }
        },
        {
            key: "fetchDetail",
            value: function(e) {
                const props = this.props;
                const t_store = props.store;
                const params = props.match.params;
                const { cluster, namespace } = params;
                if (e) {
                    t_store.fetchDetail({
                        cluster,
                        namespace,
                        name: e
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const onClose = this.props.onClose;
                const node = module14.toJS(this.props.store.detail).node;
                const detail = node === undefined ? {} : node;
                const match = this.props.match;
                return module553.default.createElement("div", {
                    className: module4619.wrapper
                }, module553.default.createElement("div", {
                    className: module4619.header
                }, module553.default.createElement("div", {
                    className: module4619.icon
                }, module553.default.createElement(module186.Icon, {
                    name: "appcenter",
                    size: 40
                })), module553.default.createElement("div", {
                    className: module4619.title
                }, detail.label), module553.default.createElement(module186.Button, {
                    className: module4619.close,
                    icon: "close",
                    iconType: "light",
                    type: "control",
                    onClick: onClose,
                    "data-test": "modal-close"
                })), module553.default.createElement("div", {
                    className: module4619.content
                }, module553.default.createElement(module186.Collapse, {
                    activeKey: this.state.activeKey,
                    onChange: this.handleCollapseChange,
                    accordion: true
                }, module553.default.createElement(CollapseItem, {
                    label: "info",
                    key: "info"
                }, module553.default.createElement(module4607, {
                    detail
                })), module553.default.createElement(CollapseItem, {
                    label: "Traffic",
                    key: "traffic"
                }, module553.default.createElement(module4609, {
                    detail,
                    jumpTo: this.handleJump
                })), module553.default.createElement(CollapseItem, {
                    label: "Pods",
                    key: "pods"
                }, module553.default.createElement(module4612, {
                    detail
                })), module553.default.createElement(CollapseItem, {
                    label: "Containers",
                    key: "containers"
                }, module553.default.createElement(module4615, {
                    detail,
                    match
                })), module553.default.createElement(CollapseItem, {
                    label: "Kubernetes labels",
                    key: "labels"
                }, module553.default.createElement(module4617, {
                    detail
                })))));
            }
        }
    ]);
    return a;
})(module553.Component), c.defaultProps = {
    data: {}
}, o = s)) || o;
export default R;
