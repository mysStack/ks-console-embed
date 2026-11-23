import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
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
import "./module-41.js";
import "./module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import Module829 from "components/Forms/Base/Confirm";
import Module1308 from "./module-1308.js";
import module953 from "./module-953.js";
import module2437 from "./module-2437.js";
const O = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.edgeStore = new module953;
        t.handleNodeGroupChange = async (a)=>{
            let cluster;
            let n;
            let nodes;
            cluster = t.props.cluster;
            n = await t.edgeStore.getTreeNode({
                cluster,
                nodetree: a.key
            });
            t.setState({
                formData: {
                    ...t.state.formData,
                    nodeGroup: a.key
                }
            });
            nodes = n.items.map((e)=>{
                const t = module26(e, "metadata.name");
                return {
                    label: t,
                    value: t
                };
            });
            t.setState({
                nodes
            });
        };
        t.handleConfirm = function() {
            const idx = t.props.idx;
            const onConfirm = t.props.onConfirm;
            const current = t.formRef.current;
            current?.validate(function() {
                onConfirm?.(current.getData(), t.isCreateMode ? -1 : idx);
            });
        };
        t.store = e.store;
        t.isCreateMode = !e.formData.nodeGroup;
        t.state = {
            nodes: [],
            formData: {
                ...e.formData
            }
        };
        t.formRef = createRef();
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {}
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                props.nodeGroups;
                const { onCancel, idx } = props;
                const state = this.state;
                const { nodes, formData } = state;
                const formData_project = formData.project;
                const options = [
                    {
                        label: t("ASIN_EDGE_NODE_AUTO"),
                        value: ""
                    }
                ].concat(nodes);
                return <div className={module2437.nodeSelector}><module186.Form className={module2437.form} type="inner" ref={this.formRef} data={formData}><module186.Columns><module186.Column><module186.Form.Item label={t("PROJECT")} rules={[
                    {
                        required: true,
                        message: t("PROJECT_NOT_SELECT_DESC")
                    }
                ]}><module186.Select name="project" placeholder={t("PROJECT")} prefixIcon=<module186.Icon name="project"/> disabled={!!formData_project}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("NODE_GROUP")} rules={[
                    {
                        required: true,
                        message: t("PROJECT_NOT_SELECT_DESC")
                    }
                ]}><Module1308 name="nodeGroup" cluster={this.props.cluster} onSelect={this.handleNodeGroupChange}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("EDGE_NODE")}><module186.Select name="nodeName" placeholder=" " options={options} prefixIcon=<module186.Icon name="edge-node"/> clearable/></module186.Form.Item></module186.Column></module186.Columns></module186.Form><Module829 className={module2437.confirm} onOk={this.handleConfirm} onCancel={function() {
                    return onCancel(_this.isCreateMode ? -1 : idx);
                }}/></div>;
            }
        }
    ]);
    return r;
})(Component);
export default O;
