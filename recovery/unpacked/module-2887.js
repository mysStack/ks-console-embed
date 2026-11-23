import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-97.js";
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
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module61 from "./module-61.js";
import "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import { observer } from "./module-239.js";
import module241 from "./module-241.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module439 from "./module-439.js";
import module970 from "./module-970.js";
import module854 from "./module-854.js";
import module2888 from "./module-2888.js";
let f;
const R = observer(f = ((e)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.state = {
            groupNamespace: [],
            projectData: []
        };
        e.projectStore = e.props.isEdgeWize ? new module970 : new module439;
        e.nodeGroupStore = new module854;
        e.fetchData = async function t() {
            await e.fetchNodeGroupStore();
            await e.fetchProjects();
        };
        e.fetchProjects = async function t() {
            let a;
            let r;
            let n;
            let l;
            let u;
            const o = arguments;
            a = o.length > 0 && o[0] !== undefined ? o[0] : {};
            r = e.props.cluster;
            n = e.state.groupNamespace;
            l = await e.projectStore.fetchList({
                cluster: r,
                ...a
            });
            u = l.map((e)=>({
                    ...e,
                    nodegroup: n.some((t)=>t.name === e.name && t.nodegroup)
                }));
            e.setState({
                projectData: [].concat(module61(e.state.projectData), module61(u))
            });
        };
        e.fetchNodeGroupStore = async function t() {
            let a;
            let r;
            a = e.props.cluster;
            r = await e.nodeGroupStore.fetchAllNamespaces({
                cluster: a,
                limit: "-1",
                page: 1
            });
            e.setState({
                groupNamespace: r.map((e)=>({
                        name: e.name,
                        nodegroup: module26(e, 'labels["apps.edgewize.io/nodegroup"]') === ""
                    }))
            });
        };
        e.optionRenderer = function(a) {
            return module553.default.createElement("div", {
                className: module2888.tipBox
            }, module553.default.createElement("div", {
                className: module2888.option
            }, a.isFedManaged ? module553.default.createElement("img", {
                className: module2888.indicator,
                src: "/assets/cluster.svg"
            }) : module553.default.createElement(module186.Icon, {
                name: "project"
            }), a.label), (a.isFedManaged || !a.nodegroup) && module553.default.createElement(module186.Tooltip, {
                content: e.props.tipMessage || (a.isFedManaged ? t("FEDPROJECT_RESOURCE_TIP") : !a.nodegroup && "nodegrup")
            }, module553.default.createElement(module186.Icon, {
                className: module2888.tip,
                name: "question"
            })));
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "getProjects",
            value: function() {
                const defaultValue = this.props.defaultValue;
                const projectData = this.state.projectData;
                const a = projectData.filter((e)=>e.status !== "Terminating").map((e)=>({
                        label: e.name,
                        value: e.name,
                        disabled: e.isFedManaged || !e.nodegroup,
                        isFedManaged: e.isFedManaged,
                        nodegroup: e.nodegroup
                    }));
                if (defaultValue && !projectData.find((t)=>t.name === defaultValue)) {
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
                const props = this.props;
                const { cluster: _cluster, ...rest } = props;
                if (!rest.value && rest.defaultValue) {
                    rest.value = rest.defaultValue;
                }
                return module553.default.createElement(module186.Select, {
                    options: this.getProjects(),
                    pagination: module241(this.projectStore.list, [
                        "page",
                        "limit",
                        "total"
                    ]),
                    isLoading: this.projectStore.list.isLoading,
                    valueRenderer: this.optionRenderer,
                    optionRenderer: this.optionRenderer,
                    onFetch: this.fetchProjects,
                    searchable: true,
                    clearable: true,
                    placeholder: " ",
                    ...rest
                });
            }
        }
    ]);
    return r;
})(module553.Component)) || f;
export default R;
