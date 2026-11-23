import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module58 from "./module-58.js";
import * as module553 from "./module-553.js";
import module241 from "./module-241.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
let u;
const y = function(e) {
    return e.renderItem(module58(e, [
        "renderItem"
    ]));
};
const E = observer(u = ((e)=>{
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
        e.getCDListData = function(t) {
            return e.props.store.getCDListData(t);
        };
        e.getCDList = function() {
            return module61(e.props.store.cdList.data.map((e)=>({
                    label: e.name,
                    value: e.name
                })));
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getCDListData();
            }
        },
        {
            key: "render",
            value: function() {
                let e;
                const _this = this;
                const option = this.props.option;
                const cdList = this.props.store.cdList;
                const l = {
                    key: option.name,
                    label: t(option.display),
                    rules: [
                        {
                            required: (e = option.required) !== null && e !== undefined && e,
                            message: t("PARAM_REQUIRED")
                        }
                    ]
                };
                return module553.default.createElement(module186.Form.Item, l, module553.default.createElement(y, {
                    name: option.name,
                    renderItem: function({ value, onChange } = {}) {
                        return module553.default.createElement(module186.Select, {
                            name: option.name,
                            options: _this.getCDList(),
                            pagination: module241(cdList, [
                                "page",
                                "limit",
                                "total"
                            ]),
                            isLoading: cdList.isLoading,
                            onFetch: _this.getCDListData,
                            value: value?.name,
                            onChange: function(e) {
                                const n = e ? _this.props.store.cdList?.data?.find(function(t) {
                                    return t.name === e;
                                }) : null;
                                onChange(n ? {
                                    name: n.name,
                                    namespace: n.devops
                                } : null);
                            },
                            searchable: true,
                            clearable: true
                        });
                    }
                }));
            }
        }
    ]);
    return r;
})(module553.Component)) || u;
export default E;
