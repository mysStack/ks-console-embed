import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
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
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import "./module-31.js";
import module61 from "./module-61.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module814 from "./module-814.js";
import Module818 from "./module-818.js";
import { Component } from "./module-553.js";
import module318 from "./module-318.js";
import Module2905 from "./module-2905.js";
import module1676 from "./module-1676.js";
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.state = {
            detail: {}
        };
        e.onShowAdd = function() {
            e.props.onShowAdd();
        };
        e.handleEdit = function(t) {
            e.props.onShowEdit(t);
        };
        e.handleDelete = function() {
            e.props.onChange(undefined);
        };
        e.getWorkloadDetail = module44(module41.mark(function a() {
            let n;
            let o;
            let namespace;
            let cluster;
            let i;
            let f;
            let module;
            let p;
            let m;
            let v;
            let h;
            let containerOptions;
            return module41.wrap(function(a) {
                while(true){
                    switch(a.prev = a.next){
                        case 0:
                            n = e.props;
                            o = n.scaleTargetRef;
                            namespace = n.namespace;
                            cluster = n.cluster;
                            if ((i = o).name && i.kind) {
                                a.next = 4;
                                break;
                            }
                            return a.abrupt("return");
                        case 4:
                            f = i.kind.toLowerCase();
                            module = `${f}s`;
                            p = new module318(module);
                            a.next = 9;
                            return p.fetchDetail({
                                namespace,
                                cluster,
                                name: i.name
                            });
                        case 9:
                            m = a.sent;
                            v = m?.initContainers ?? [];
                            h = [].concat(module61(m.containers), module61(v));
                            containerOptions = h.map((e)=>({
                                    icon: "docker",
                                    value: e.name,
                                    label: e.name,
                                    description: t("ENV_CONTAINER")
                                }));
                            e.selectContainer(h[0].name);
                            e.setState({
                                detail: {
                                    ...m,
                                    module
                                },
                                containerOptions,
                                container: h[0].name
                            });
                        case 15:
                        case "end":
                            return a.stop();
                    }
                }
            }, a);
        }));
        e.selectContainer = function(t) {
            e.props.selectContainer(t);
        };
        e.renderContainerSelector = function() {
            return <Module818 value={e.state.container} options={e.state.containerOptions} onChange={e.selectContainer}/>;
        };
        return e;
    }
    module37(r, [
        {
            key: "renderAddComponent",
            value: function() {
                return <module814.Add onClick={this.onShowAdd} title={t("ADD_WORKLOAD")} description={t("ADD_WORKLOAD_DESC")}/>;
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.getWorkloadDetail();
            }
        },
        {
            key: "render",
            value: function() {
                const value = this.props.value;
                const detail = this.state.detail;
                return <div className={module1676.wrapper}>{value ? <div><Module2905 detail={detail} onEdit={null} onDelete={null} action=<module186.Button className={module1676.action} onClick={this.handleEdit}>{t("RESELECT")}</module186.Button>/>{this.renderContainerSelector()}</div> : this.renderAddComponent()}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default O;
O.defaultProps = {
    onChange: function() {},
    onShowAdd: function() {},
    onShowEdit: function() {}
};
