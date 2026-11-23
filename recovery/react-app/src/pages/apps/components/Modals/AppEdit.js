import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module241 from "unpacked/module-241.js";
import module801 from "unpacked/module-801.js";
import module136 from "unpacked/module-136.js";
import module122 from "unpacked/module-122.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module2460 from "pages/apps/components/Forms/AppBaseEdit";
import module2462 from "pages/apps/components/Cards/ScreenshotsEdit";
import module2464 from "pages/apps/components/Cards/ReadmeEdit";
import module2467 from "stores/openpitrix/category";
import module936 from "stores/openpitrix/file";
import module2468 from "unpacked/module-2468.js";
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
