import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module74 from "unpacked/module-74.js";
import module26 from "unpacked/module-26.js";
import module3 from "unpacked/module-3.js";
import module1 from "unpacked/module-1.js";
import module814 from "components/Base/List";
import Module2672 from "components/Forms/Cluster/NodeList/Item";
import Module1619 from "components/Forms/Cluster/NodeList/AddNode";
import module1620 from "unpacked/module-1620.js";
const b = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            showAdd: false,
            selectIndex: -1
        };
        e.showAdd = function() {
            e.setState({
                showAdd: true,
                selectIndex: -1
            });
        };
        e.hideAdd = function() {
            e.setState({
                showAdd: false,
                selectIndex: -1
            });
        };
        e.showEdit = function(selectIndex) {
            e.setState({
                showAdd: true,
                selectIndex
            });
        };
        e.handleAdd = function(t) {
            const e_props = e.props;
            const { value, onChange } = e_props;
            const selectIndex = e.state.selectIndex;
            if (selectIndex >= 0) {
                value[selectIndex] = t;
                onChange(value);
            } else {
                onChange([].concat(module61(value), [
                    t
                ]));
            }
            e.updateRoleGroups();
            e.hideAdd();
        };
        e.updateRoleGroups = function() {
            const formTemplate = e.props.formTemplate;
            const a = module26(formTemplate, "spec.hosts", []);
            const r = {};
            a.forEach((e)=>{
                if (e.roles) {
                    e.roles.forEach((t)=>{
                        r[t] = r[t] || [];
                        r[t].push(e.name);
                    });
                }
            });
            r.etcd = r.master;
            module74(formTemplate, "spec.roleGroups", r);
        };
        e.handleDelete = function(t) {
            const e_props = e.props;
            const a_value = e_props.value;
            e_props.onChange(a_value.filter((e)=>e.name !== t.name));
            e.updateRoleGroups();
        };
        return e;
    }
    module37(r, [
        {
            key: "renderNodes",
            value: function() {
                const _this = this;
                return this.props.value.map((node, index)=><Module2672 node={node} key={node.name} index={index} onEdit={_this.showEdit} onDelete={_this.handleDelete}/>);
            }
        },
        {
            key: "renderAdd",
            value: function() {
                return <module814.Add icon="add" title={t("ADD_NODE")} description={t("ADD_NODE_TO_THE_CLUSTER")} onClick={this.showAdd}/>;
            }
        },
        {
            key: "renderModal",
            value: function() {
                const value = this.props.value;
                const state = this.state;
                const { showAdd, selectIndex } = state;
                const data = selectIndex >= 0 ? value[selectIndex] : undefined;
                return <Module1619 visible={showAdd} data={data} onOk={this.handleAdd} onCancel={this.hideAdd}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                return <div className={module3(module1620.wrapper, className)}>{this.renderNodes()}{this.renderAdd()}{this.renderModal()}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    className: module1.string,
    name: module1.string,
    value: module1.array,
    onChange: module1.func,
    onDelete: module1.func
};
b.defaultProps = {
    className: "",
    name: "",
    value: [],
    readOnlyList: [],
    specTemplate: {},
    onChange: function() {}
};
