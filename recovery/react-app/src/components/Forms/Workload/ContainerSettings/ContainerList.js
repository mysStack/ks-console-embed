import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module1 from "unpacked/module-1.js";
import module814 from "components/Base/List";
import Module2303 from "components/Forms/Workload/ContainerSettings/ContainerList/Card";
import Module2304 from "components/Forms/Workload/ContainerSettings/ContainerList/QuotaCheck";
import module1298 from "unpacked/module-1298.js";
const y = ((Component_1)=>{
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
        e.handleAdd = function() {
            e.props.onShow();
        };
        e.handleEdit = function(t) {
            e.props.onShow(t);
        };
        e.handleDelete = function(t) {
            const e_props = e.props;
            const { value, specTemplate, onChange, onDelete } = e_props;
            if (t.type === "init" && specTemplate.initContainers) {
                specTemplate.initContainers = specTemplate.initContainers.filter((e)=>e.name !== t.name);
                onChange(module61(value));
            } else {
                onChange(value.filter((e)=>e.name !== t.name));
            }
            if (onDelete) {
                onDelete(t.name);
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "renderQuotaCheck",
            value: function() {
                const props = this.props;
                const { value, replicas } = props;
                const props_1 = this.props;
                const initContainers = props_1.specTemplate.initContainers;
                const initContainers_1 = initContainers === undefined ? [] : initContainers;
                const r_leftQuota = props_1.leftQuota;
                return <Module2304 className="margin-b12" containers={value} initContainers={initContainers_1} leftQuota={r_leftQuota} replicas={replicas}/>;
            }
        },
        {
            key: "renderContainers",
            value: function() {
                const _this = this;
                const props = this.props;
                const { value, readOnlyList, isReadOnlyContainers } = props;
                return value.map((t)=><Module2303 container={t} key={t.name} onEdit={_this.handleEdit} onDelete={_this.handleDelete} readOnly={!!isReadOnlyContainers || readOnlyList.includes(t.name)}/>);
            }
        },
        {
            key: "renderInitContainers",
            value: function() {
                const _this = this;
                const initContainers = this.props.specTemplate.initContainers;
                return (initContainers === undefined ? [] : initContainers).map((t)=><Module2303 container={t} key={t.name} type="init" onEdit={_this.handleEdit} onDelete={_this.handleDelete}/>);
            }
        },
        {
            key: "renderAdd",
            value: function() {
                const props = this.props;
                const e_value = props.value;
                const initContainers = props.specTemplate.initContainers;
                const n = initContainers === undefined ? [] : initContainers;
                return <module814.Add type={e_value.length <= 0 && n.length <= 0 && "empty"} onClick={this.handleAdd} icon="docker" title={t("ADD_CONTAINER")} description={t("ADD_CONTAINER_DESC")}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, projectDetail, isShowAddContainer } = props;
                return <div className={module3(module1298.wrapper, className)}>{projectDetail && this.renderQuotaCheck()}{this.renderInitContainers()}{this.renderContainers()}{isShowAddContainer && this.renderAdd()}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    className: module1.string,
    name: module1.string,
    value: module1.array,
    onChange: module1.func,
    onDelete: module1.func,
    onShow: module1.func,
    readOnlyList: module1.array,
    specTemplate: module1.object,
    isReadOnlyContainers: module1.bool,
    isShowAddContainer: module1.bool
};
y.defaultProps = {
    className: "",
    name: "",
    value: [],
    readOnlyList: [],
    specTemplate: {},
    onChange: function() {},
    onShow: function() {},
    onDelete: function() {},
    isReadOnlyContainers: false,
    isShowAddContainer: true
};
