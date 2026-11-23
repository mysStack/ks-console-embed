import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-192.js";
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
import "./module-22.js";
import "./module-57.js";
import "./module-58.js";
import "./module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module791 from "components/Base/Text";
import module2431 from "./module-2431.js";
import Module2432 from "./module-2432.js";
import module2438 from "./module-2438.js";
let o;
const N = observer(o = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((e)=>{
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
    })(n);
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.updateNodeSelectorEditStatus = function(e, isEdit) {
            const r = module61(a.state.formData);
            const n = r.find((t, a)=>a === e);
            r.splice(e, 1, {
                ...n,
                isEdit
            });
            a.setState({
                formData: r
            });
        };
        a.handleAdd = function() {
            const e = {
                project: a.props.namespace,
                nodeGroup: "",
                nodeName: "",
                isEdit: true
            };
            a.setState({
                formData: [].concat(module61(a.state.formData), [
                    e
                ])
            });
        };
        a.handleEditConfirm = function(e, t) {
            const a_props = a.props;
            const { onChange, value } = a_props;
            if (t < 0) {
                a.setState({
                    formData: [].concat(module61(value), [
                        e
                    ])
                });
                return onChange?.([].concat(module61(value), [
                    e
                ]));
            }
            const u = module61(a.state.formData);
            u.splice(t, 1, e);
            a.setState({
                formData: u
            });
            onChange?.(u);
        };
        a.handleHideConfirm = function(e) {
            if (e < 0) {
                const t = module61(a.state.formData);
                t.pop();
                return a.setState({
                    formData: t
                });
            }
            a.updateNodeSelectorEditStatus(e, false);
        };
        a.handleDelNodeSelector = function(e) {
            const onChange = a.props.onChange;
            const r = module61(a.state.formData);
            r.splice(e, 1);
            a.setState({
                formData: r
            });
            onChange?.(r);
        };
        a.renderNodeSelectorPlacement = function({ project, nodeGroup, nodeName }, r) {
            return <div className={module3(module2438.nodeSelector, module2438.flex)} key={`${project}_${nodeGroup}_${nodeName}`}><Module791 title={project} description={t("PROJECT")}/><Module791 title={nodeGroup} description={t("NODE_GROUP")}/><Module791 icon="edge-node" title={nodeName || t("ASIN_EDGE_NODE_AUTO")} description={t("EDGE_NODE")}/><div><module186.Button type="flat" icon="trash" onClick={function() {
                return a.handleDelNodeSelector(r);
            }}/><module186.Button type="flat" icon="pen" onClick={function() {
                return a.updateNodeSelectorEditStatus(r, true);
            }}/></div></div>;
        };
        a.nodeGroupsStore = new module2431;
        a.state = {
            nodeGroups: [],
            formData: a.props.value
        };
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: async function() {
                let t;
                let cluster;
                let namespace;
                let n;
                let nodeGroups;
                t = this.props;
                cluster = t.cluster;
                namespace = t.namespace;
                n = await this.nodeGroupsStore.fetchNodeWithNodeGroup({
                    cluster,
                    namespace
                });
                nodeGroups = n.map((e)=>{
                    const t = module26(e, "metadata.name");
                    return {
                        label: t,
                        value: t
                    };
                });
                this.setState({
                    nodeGroups
                });
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const { cluster, max = Infinity } = this.props;
                const nodeGroups = this.state.nodeGroups;
                return <div className={module2438.nodeSelectorsWrapper}><Module791 className="margin-b12" title={t("SELECT_EDGE_NODE")} description={t("SELECT_EDGE_NODE_DESC")}/><div className={module2438.nodeSelectors}>{this.state.formData.map(({ isEdit, ...rest }, idx)=>{
                    if (isEdit) {
                        const { nodeGroup, nodeName } = rest;
                        return <Module2432 key={`${nodeGroup}_${nodeName}_${idx}`} idx={idx} store={_this.nodeGroupsStore} formData={rest} nodeGroups={nodeGroups} cluster={cluster} onConfirm={_this.handleEditConfirm} onCancel={_this.handleHideConfirm}/>;
                    }
                    return _this.renderNodeSelectorPlacement(rest, idx);
                })}{max > this.state.formData.length && <Module791 className={module2438.add} onClick={this.handleAdd} title={t("ADD_EDGE_NODE")} description={t("ADD_EDGE_NODE_DESC")}/>}</div></div>;
            }
        }
    ]);
    return n;
})(Component)) || o;
export default N;
