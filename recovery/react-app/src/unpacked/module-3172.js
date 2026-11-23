import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-138.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-436.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import "./module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module788 from "components/Base/Modal";
import module984 from "./module-984.js";
import { RadonDBAppId, SpecificationOptionsObject, SpecificationsOptions, getCpuAndMemoryFromSpecifications, getNodeRoleOptions } from "./module-817.js";
const C = ((e)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.onChange = function(specifications) {
            t.setState({
                specifications
            });
        };
        t.onRoleChange = function(e) {
            const specificationsObject = t.props.specificationsObject;
            const r = (specificationsObject === undefined ? {} : specificationsObject)[e] || {};
            const { cpu, memory } = r;
            t.setSpecificationsOptions(e);
            t.setState({
                nodeRole: e,
                specifications: `${cpu}, ${memory}`
            });
        };
        t.onOk = async function e() {
            let a;
            let workspace;
            let namespace;
            let cluster;
            let cluster_id;
            a = t.props;
            workspace = a.workspace;
            namespace = a.namespace;
            cluster = a.cluster;
            cluster_id = a.cluster_id;
            await t.props.store.updateSpecifications({
                workspace,
                namespace,
                cluster,
                cluster_id,
                specifications: t.state.specifications,
                nodeRole: t.state.nodeRole
            });
            t.props.onOk(t.state.specifications);
        };
        t.onCancel = function() {
            t.props.onCancel();
        };
        const e_specificationsObject = e.specificationsObject;
        const l = e_specificationsObject === undefined ? {} : e_specificationsObject;
        const { nodes, app_id } = e;
        t.roleOptions = getNodeRoleOptions(app_id, "specifications").filter(({ value })=>!nodes || nodes[value] > 0);
        const f = module26(t.roleOptions, "[0].value", "");
        const d = l[f] || {};
        const { cpu, memory } = d;
        t.state = {
            specifications: `${cpu || e.cpu}, ${memory || e.memory}`,
            nodeRole: f
        };
        t.setSpecificationsOptions(f);
        return t;
    }
    module37(r, [
        {
            key: "setSpecificationsOptions",
            value: function(e) {
                const _this = this;
                const app_id = this.props.app_id;
                this.specificationsOptions = this.props.specificationsObject ? SpecificationOptionsObject[app_id][e] : SpecificationOptionsObject[app_id] || SpecificationsOptions;
                if (!(app_id !== RadonDBAppId.RedisCluster && app_id !== RadonDBAppId.RedisSentinel)) {
                    this.specificationsOptions = this.specificationsOptions.map((a)=>{
                        const r = getCpuAndMemoryFromSpecifications(a.value);
                        const { cpu, memory } = r;
                        const o = module26(_this.props, `specificationsObject["${e}"]`, _this.props);
                        return {
                            ...a,
                            disabled: parseFloat(cpu) < parseFloat(o.cpu) || parseFloat(memory) < parseFloat(o.memory)
                        };
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const a = {
                    ...this.props
                };
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
                    ref: function(t) {
                        _this.formRef = t;
                    }
                }, this.state.nodeRole && module553.default.createElement(module186.Form.Item, {
                    label: t("NODE_ROLE")
                }, module553.default.createElement(module186.Select, {
                    name: "nodeRole",
                    value: this.state.nodeRole,
                    defaultValue: this.state.nodeRole,
                    options: this.roleOptions,
                    onChange: this.onRoleChange
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("RESOURCES"),
                    desc: t("RESOURCES_DESC")
                }, module553.default.createElement(module186.Select, {
                    name: "specifications",
                    value: this.state.specifications,
                    defaultValue: this.state.specifications,
                    options: this.specificationsOptions,
                    onChange: this.onChange
                }))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default C;
C.propTypes = {
    specificationsObject: module1.object,
    onOk: module1.func,
    onCancel: module1.func,
    app_id: module1.string
};
C.defaultProps = {
    onOk: function() {},
    onCancel: function() {}
};
