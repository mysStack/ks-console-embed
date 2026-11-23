import "unpacked/module-12.js";
import "unpacked/module-5.js";
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
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module241 from "unpacked/module-241.js";
import module186 from "unpacked/module-186.js";
import module439 from "stores/project";
import { showNameAndAlias } from "utils/index";
import module2552 from "unpacked/module-2552.js";
let u;
const C = observer(u = ((e)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.projectStore = new module439;
        e.fetchProjects = function(t = {}) {
            const cluster = e.props.cluster;
            if (t.name) {
                t.nameAndAlias = t.name;
                delete t.name;
            }
            return e.projectStore.fetchList({
                cluster,
                ...t
            });
        };
        e.optionRenderer = function(a) {
            return module553.default.createElement("div", {
                className: module2552.option,
                key: a.value
            }, a.isFedManaged ? module553.default.createElement("img", {
                className: module2552.indicator,
                src: "/assets/cluster.svg"
            }) : module553.default.createElement(module186.Icon, {
                name: "project"
            }), a.label, a.isFedManaged && module553.default.createElement(module186.Tooltip, {
                content: e.props.tipMessage || t("FEDPROJECT_RESOURCE_TIP")
            }, module553.default.createElement(module186.Icon, {
                className: module2552.tip,
                name: "question"
            })));
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const labelSelector = this.props.labelSelector;
                this.fetchProjects(labelSelector ? {
                    labelSelector
                } : undefined);
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
                    disableRemoteSearch: true,
                    placeholder: " ",
                    ...rest
                });
            }
        }
    ]);
    return r;
})(module553.Component)) || u;
export default C;
