import "./module-15.js";
import "./module-11.js";
import "./module-84.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module241 from "./module-241.js";
import module801 from "./module-801.js";
import module136 from "./module-136.js";
import module122 from "./module-122.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module2460 from "./module-2460.js";
import module2462 from "./module-2462.js";
import module2464 from "./module-2464.js";
import module2467 from "./module-2467.js";
import module936 from "./module-936.js";
import module2468 from "./module-2468.js";
let c;
let s;
let f;
const L = observer((f = s = ((e)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleAppChange = module801(function(e, a) {
            const detail = t.state.detail;
            const detail_1 = module136(detail);
            module74(detail_1, a, e);
            t.setState({
                detail: detail_1
            });
        }, 200);
        t.handleOk = async function e() {
            let r;
            let l;
            r = module241(t.state.detail, [
                "name",
                "aliasName",
                "abstraction",
                "description",
                "appHome",
                "categoryName",
                "readme",
                "icon"
            ]);
            if (t.state.detail?.attachments) {
                r.attachments = (t.state.detail?.attachments || []).map((e)=>module122(e)[0]);
            }
            if (l = t.formRef.current) {
                l.validate(function() {
                    const a = t.props.detail.attachments?.filter(function(e) {
                        return !r.attachments?.includes(e);
                    });
                    if (a?.length) {
                        a.map((id)=>t.store.deleteImage({
                                id,
                                workspace: t.state.detail?.workspace
                            }));
                    }
                    t.props.onOk(r);
                });
            }
        };
        t.onCancel = function() {
            const oldScreenshots = t.state.oldScreenshots;
            t.handleAppChange(oldScreenshots, "attachments");
            t.props.onCancel();
        };
        t.store = t.props.store;
        t.categoryStore = new module2467;
        t.fileStore = new module936;
        t.formRef = module553.default.createRef();
        t.state = {
            detail: module136(module14.toJS(t.props.detail)),
            oldScreenshots: module26(t.props.detail, "attachments")
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.categoryStore.fetchList({
                    noLimit: true
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onCancel: _onCancel, ...rest } = props;
                const categories = module14.toJS(module26(this.categoryStore, "list.data", []));
                const detail = this.state.detail;
                return module553.default.createElement(module788, {
                    ...rest,
                    className: module2468.modal,
                    bodyClassName: module2468.body,
                    onOk: this.handleOk,
                    onCancel: this.onCancel,
                    visible,
                    isSubmitting,
                    title: t("APP_EDIT_TITLE"),
                    fullScreen: true
                }, module553.default.createElement(module186.Columns, {
                    className: "height-full is-gapless"
                }, module553.default.createElement(module186.Column, {
                    className: "is-narrow"
                }, module553.default.createElement(module2460, {
                    store: this.store,
                    formData: detail,
                    categories,
                    fileStore: this.fileStore,
                    formRef: this.formRef,
                    handleChange: this.handleAppChange
                })), module553.default.createElement(module186.Column, null, module553.default.createElement(module2462, {
                    handleChange: this.handleAppChange,
                    store: this.store,
                    detail,
                    fileStore: this.fileStore
                }), module553.default.createElement(module2464, {
                    handleChange: this.handleAppChange,
                    store: this.store,
                    detail
                }))));
            }
        }
    ]);
    return r;
})(module553.Component), s.propTypes = {
    store: module1.object,
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
}, s.defaultProps = {
    store: {},
    detail: {},
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, c = f)) || c;
export default L;
