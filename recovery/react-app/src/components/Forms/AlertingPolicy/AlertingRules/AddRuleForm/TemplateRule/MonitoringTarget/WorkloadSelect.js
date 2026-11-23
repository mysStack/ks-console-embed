import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
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
import * as module553 from "unpacked/module-553.js";
import module241 from "unpacked/module-241.js";
import module186 from "unpacked/module-186.js";
import module2206 from "unpacked/module-2206.js";
const y = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.selectRef = module553.default.createRef();
        e.handleNamesChange = function(names) {
            const e_props = e.props;
            const a_value = e_props.value;
            e_props.onChange({
                ...a_value,
                names
            });
        };
        e.handlekindChange = function(kind) {
            e.props.onChange({
                ...e.props.value,
                kind,
                names: []
            });
            e.props.fetchWorkloads(kind, {});
            e.selectRef.current.state.value = [];
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { value, workloads, fetchWorkloads, isLoading } = props;
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", null, module553.default.createElement(module186.Select, {
                    value: value.kind,
                    options: [
                        {
                            label: t("DEPLOYMENT"),
                            value: "Deployment"
                        },
                        {
                            label: t("STATEFULSET"),
                            value: "StatefulSet"
                        },
                        {
                            label: t("DAEMONSET"),
                            value: "DaemonSet"
                        }
                    ],
                    onChange: this.handlekindChange
                })), module553.default.createElement("div", null, module553.default.createElement("label", {
                    className: module2206.alertRule
                }, t("MONITORING_TARGETS")), module553.default.createElement(module186.Select, {
                    value: value.names,
                    ref: this.selectRef,
                    options: workloads,
                    pagination: this.pagination,
                    isLoading,
                    onFetch: function(e) {
                        return fetchWorkloads(value.kind, e);
                    },
                    onChange: this.handleNamesChange,
                    searchable: true,
                    multi: true,
                    placeholder: t("WORKLOAD")
                })));
            }
        },
        {
            key: "pagination",
            get: function() {
                const props = this.props;
                const { stores, value } = props;
                return module241(stores[value.kind].list, [
                    "page",
                    "limit",
                    "total"
                ]);
            }
        }
    ]);
    return r;
})(module553.Component);
export default y;
