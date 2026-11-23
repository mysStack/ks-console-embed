import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-860.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module439 from "stores/project";
import module1 from "unpacked/module-1.js";
import { showNameAndAlias } from "utils/index";
import { observer } from "unpacked/module-239.js";
import module4024 from "unpacked/module-4024.js";
let o;
let u;
let i;
const k = observer((i = u = ((Component_1)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n() {
        let e;
        module36(this, n);
        e = r.call(this);
        e.handleChange = function(namespace) {
            e.setState({
                namespace
            });
        };
        e.fetchProjects = function(t = {}) {
            const cluster = e.props.cluster;
            if (t.name) {
                t.nameAndAlias = t.name;
                delete t.name;
            }
            return e.projectStore.fetchList({
                cluster,
                ...t,
                limit: -1
            });
        };
        e.handleOk = function() {
            const onOk = e.props.onOk;
            const namespace = e.state.namespace;
            const n = e.projectStore.list.data.find((e)=>e.name === namespace);
            if (onOk) {
                if (onOk != null) {
                    onOk(n);
                }
            }
        };
        e.projectStore = new module439;
        e.state = {
            namespace: ""
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchProjects();
            }
        },
        {
            key: "getProjects",
            value: function() {
                const defaultValue = this.props.defaultValue;
                const data = this.projectStore.list.data;
                const r = data.filter((e)=>e.status !== "Terminating").map((e)=>({
                        label: showNameAndAlias(e),
                        value: e.name,
                        disabled: e.isFedManaged,
                        isFedManaged: e.isFedManaged
                    }));
                if (defaultValue && !data.find((t)=>t.name === defaultValue)) {
                    r.unshift({
                        label: defaultValue,
                        value: defaultValue
                    });
                }
                return r;
            }
        },
        {
            key: "render",
            value: function() {
                const onCancel = this.props.onCancel;
                const namespace = this.state.namespace;
                return <div className={module3(module4024.item)}><module186.Select options={this.getProjects()} isLoading={this.projectStore.list.isLoading} onChange={this.handleChange} defaultValue={namespace}/><div className={module4024.operate}><module186.Button type="control" onClick={this.handleOk}>{t("OK")}</module186.Button><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button></div></div>;
            }
        }
    ]);
    return n;
})(Component), u.propTypes = {
    onOk: module1.func,
    onCancel: module1.func
}, o = i)) || o;
export default k;
