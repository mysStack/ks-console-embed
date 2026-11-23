import "./module-15.js";
import "./module-11.js";
import "./module-138.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-75.js";
import "./module-813.js";
import "./module-45.js";
import "./module-42.js";
import "./module-436.js";
import "./module-319.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import module136 from "./module-136.js";
import module186 from "./module-186.js";
import module967 from "./module-967.js";
import module788 from "./module-788.js";
import module984 from "./module-984.js";
import { ValuesSchema, getNodeRoleOptions, validateStorage } from "./module-817.js";
const O = ((e)=>{
    module55(r, e);
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.getSliderMax = function(e) {
            if (e) {
                return module26(n.valueSchema, `properties.${e}.properties.volume.sliderMax`, 2048);
            }
            return module26(n.valueSchema, "properties.volume.sliderMax", 2048);
        };
        n.onChange = function(e) {
            const message = validateStorage(e, {
                app_id: n.props.app_id,
                nodeRole: n.state.nodeRole,
                max: n.max,
                oldStorage: n.oldStorage
            }).message;
            let errorMessage = message === undefined ? "" : message;
            const l = parseFloat(e);
            if (l < parseFloat(n.oldStorage)) {
                errorMessage = t("CANNOT_REDUCE_VOLUME_SIZE");
            }
            if (e && l > 0 && e.trim().startsWith("0")) {
                n.setState({
                    storage: e.replace(/^0*/, ""),
                    errorMessage
                });
            } else {
                n.setState({
                    storage: e,
                    errorMessage
                });
            }
        };
        n.onRoleChange = function(e) {
            const storages = n.props.storages;
            const a = (storages === undefined ? {} : storages)[e] || {};
            n.oldStorage = a;
            n.max = e === "zookeeper" ? 100 : 2048;
            n.setState({
                nodeRole: e,
                storage: a
            });
            const r = n.getSliderMax(e);
            n.max = r;
        };
        n.onOk = module44(module41.mark(function e() {
            let t;
            let workspace;
            let namespace;
            let cluster;
            let cluster_id;
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            if (!n.state.errorMessage) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");
                        case 2:
                            t = n.props;
                            workspace = t.workspace;
                            namespace = t.namespace;
                            cluster = t.cluster;
                            cluster_id = t.cluster_id;
                            e.next = 5;
                            return n.props.store.updateStorage({
                                workspace,
                                namespace,
                                cluster,
                                cluster_id,
                                storage: n.state.storage,
                                nodeRole: n.state.nodeRole
                            });
                        case 5:
                            n.props.onOk();
                        case 6:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        n.onCancel = function() {
            n.setState({
                categoryId: ""
            });
            n.props.onCancel();
        };
        n.generateMarks = function() {
            const e = parseInt((n.max - n.min) / 4, 10);
            const t = {};
            for(let a = 0; a < 4; a++){
                const r = n.min + a * e;
                t[r] = r === 0 ? r : `${r}Gi`;
            }
            t[n.max] = `${n.max}Gi`;
            return t;
        };
        const { storage, storages, nodes, app_id } = e;
        n.valueSchema = module136(ValuesSchema[app_id]);
        n.roleOptions = getNodeRoleOptions(app_id, "storage").filter(({ value })=>!nodes || nodes[value] > 0);
        const d = module26(n.roleOptions, "[0].value");
        n.state = {
            nodeRole: d,
            storage: storages ? storages[d] : storage,
            errorMessage: ""
        };
        n.min = 1;
        n.max = storages ? n.getSliderMax(d) : n.getSliderMax();
        n.oldStorage = n.state.storage;
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const a = {
                    ...this.props
                };
                const state = this.state;
                const { storage, errorMessage, nodeRole } = state;
                const data = {
                    storage
                };
                const error = errorMessage ? {
                    message: errorMessage
                } : null;
                return module553.default.createElement(module788, {
                    width: 600,
                    footerClassName: module984.footer,
                    ...a,
                    onOk: this.onOk,
                    onCancel: this.onCancel
                }, module553.default.createElement(module186.Alert, {
                    className: module984.alert,
                    type: "warning",
                    message: t("DATABASE_OPERATION_WARNING")
                }), module553.default.createElement(module186.Form, {
                    className: module984.form,
                    data,
                    ref: function(t) {
                        _this.formRef = t;
                    }
                }, nodeRole && module553.default.createElement(module186.Form.Item, {
                    label: t("NODE_ROLE")
                }, module553.default.createElement(module186.Select, {
                    name: "nodeRole",
                    value: nodeRole,
                    defaultValue: nodeRole,
                    options: this.roleOptions,
                    onChange: this.onRoleChange
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("VOLUME"),
                    error
                }, module553.default.createElement(module967, {
                    max: this.max,
                    marks: this.generateMarks(),
                    value: this.state.storage,
                    unit: "Gi",
                    onChange: this.onChange,
                    withInput: true
                }))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default O;
O.propTypes = {
    storage: module1.string,
    onOk: module1.func,
    onCancel: module1.func
};
O.defaultProps = {
    storage: "10Gi",
    onOk: function() {},
    onCancel: function() {}
};
