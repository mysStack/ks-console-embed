import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-137.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module3810 from "./module-3810.js";
import module1394 from "./module-1394.js";
import module3813 from "./module-3813.js";
const T = ((e)=>{
    module55(n, e);
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
    function n(...a_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...a_1);
        e.collectionMap = Object.entries(module1394).reduce((acc, entry)=>{
            const r = module96(entry, 2);
            const n = r[0];
            const a = r[1];
            return {
                ...acc,
                ...module31({}, n, {
                    Form: module3810(a.Form)
                })
            };
        }, {});
        e.formRef = module553.default.createRef();
        e.state = {
            collectionType: "",
            formData: {}
        };
        e.selectCollectionType = function(t) {
            e.setState({
                collectionType: t.currentTarget.dataset.type
            }, function() {
                const t = module26(module1394, `${e.state.collectionType}.validator`);
                e.formRef.current.setCustomValidator(t);
            });
        };
        e.handleSubmit = function(t) {
            e.props.onOk({
                ...t,
                Name: e.state.collectionType
            });
        };
        e.returnToSelectTypeForm = function() {
            e.setState({
                collectionType: ""
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "hasCollectionType",
            value: function(e) {
                return this.props.store.list.data.find((t)=>t?.name?.split("-")?.pop() === e);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, ...rest } = props;
                const state = this.state;
                const { collectionType, formData } = state;
                return module553.default.createElement(module788.Form, {
                    ...rest,
                    icon: "clock",
                    width: 691,
                    title,
                    data: formData,
                    formRef: this.formRef,
                    onOk: this.handleSubmit,
                    bodyClassName: module3813.body,
                    disableOk: collectionType === ""
                }, this.renderContent());
            }
        },
        {
            key: "renderContent",
            value: function() {
                const collectionType = this.state.collectionType;
                const t = module26(this.collectionMap, `${collectionType}.Form`);
                const wrapperTitle = module26(module1394, `${collectionType}.title`);
                if (t) {
                    return module553.default.createElement(t, {
                        wrapperTitle,
                        wrapperOnBack: this.returnToSelectTypeForm,
                        component: this.component
                    });
                }
                return this.renderFormSelector();
            }
        },
        {
            key: "renderFormSelector",
            value: function() {
                return module553.default.createElement("div", null, module553.default.createElement(module186.Alert, {
                    className: "margin-b12",
                    type: "info",
                    message: t("LOG_COLLECTION_TIPS")
                }), module553.default.createElement("div", {
                    className: module3813.items
                }, this.renderFormSelectorItems()));
            }
        },
        {
            key: "renderFormSelectorItems",
            value: function() {
                const _this = this;
                return Object.entries(module1394).map((t)=>{
                    const r = module96(t, 2);
                    const n = r[0];
                    const a = r[1];
                    const { ICON, ...rest } = a;
                    return module553.default.createElement("div", {
                        key: n,
                        "data-type": n,
                        className: module3(module3813.collectionType, _this.hasCollectionType(n) && module3813.disabled),
                        onClick: _this.hasCollectionType(n) ? null : _this.selectCollectionType
                    }, module553.default.createElement("div", null, module553.default.createElement(ICON, {
                        width: 40,
                        height: 40
                    })), module553.default.createElement("div", null, module553.default.createElement("h3", null, rest.title), module553.default.createElement("p", null, rest.description)));
                });
            }
        },
        {
            key: "component",
            get: function() {
                return this.props.component;
            }
        }
    ]);
    return n;
})(module553.Component);
export default T;
T.propTypes = {
    store: module1.object,
    detail: module1.object,
    visible: module1.bool,
    isSubmitting: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
T.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
};
