import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-860.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module439 from "./module-439.js";
import module1 from "./module-1.js";
import { showNameAndAlias } from "./module-52.js";
import { observer } from "./module-239.js";
import module5267 from "./module-5267.js";
let l;
let u;
let o;
const C = observer((o = u = ((Component_1)=>{
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
    function r() {
        let e;
        module36(this, r);
        e = a.call(this);
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
            const r = e.projectStore.list.data.find((e)=>e.name === namespace);
            if (onOk) {
                if (onOk != null) {
                    onOk(r);
                }
            }
        };
        e.projectStore = new module439;
        e.state = {
            namespace: ""
        };
        return e;
    }
    module37(r, [
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
                const a = data.filter((e)=>e.status !== "Terminating").map((e)=>({
                        label: showNameAndAlias(e),
                        value: e.name,
                        disabled: e.isFedManaged,
                        isFedManaged: e.isFedManaged
                    }));
                if (defaultValue && !data.find((t)=>t.name === defaultValue)) {
                    a.unshift({
                        label: defaultValue,
                        value: defaultValue
                    });
                }
                return a;
            }
        },
        {
            key: "render",
            value: function() {
                const onCancel = this.props.onCancel;
                const namespace = this.state.namespace;
                return <div className={module3(module5267.item)}><module186.Select options={this.getProjects()} isLoading={this.projectStore.list.isLoading} onChange={this.handleChange} defaultValue={namespace}/><div className={module5267.operate}><module186.Button type="control" onClick={this.handleOk}>{t("OK")}</module186.Button><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button></div></div>;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    onOk: module1.func,
    onCancel: module1.func
}, l = o)) || l;
export default C;
