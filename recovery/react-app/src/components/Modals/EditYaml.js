import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module159 from "unpacked/module-159.js";
import module63 from "unpacked/module-63.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module14 from "unpacked/module-14.js";
import module3 from "unpacked/module-3.js";
import Module788 from "components/Base/Modal";
import Module885 from "components/EditMode";
import module2068 from "unpacked/module-2068.js";
const b = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleOk = function() {
            const t_props = t.props;
            const { onOk, onCancel, store, detail } = t_props;
            const o = t.editor.current.getData();
            const store_list = store.list;
            const c = module14.toJS(store_list.selectedRowKeys);
            const s = c ? c.filter((e)=>e !== detail.uid) : "";
            if (module159(o)) {
                onCancel();
            } else {
                onOk(o);
                if (c) {
                    store_list.setSelectRowKeys(s);
                }
            }
        };
        t.state = {
            value: e.store ? null : e.detail
        };
        t.editor = createRef();
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible && !e.visible) {
                    this.init(this.props);
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.init(this.props);
            }
        },
        {
            key: "init",
            value: function(e) {
                const _this = this;
                const { yaml, detail, store, k8sVersion } = e;
                if (yaml) {
                    return this.setState({
                        value: yaml
                    });
                }
                if (detail && detail.name) {
                    store.fetchDetail(detail, k8sVersion).then((e)=>{
                        const store_deployedScheduleTemplate = store.deployedScheduleTemplate;
                        if (module63(store_deployedScheduleTemplate)) {
                            _this.setState({
                                value: e._originData
                            });
                        } else {
                            _this.setState({
                                value: [
                                    e._originData,
                                    store_deployedScheduleTemplate
                                ]
                            });
                        }
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { readOnly, visible, onCancel, isSubmitting } = props;
                const title = readOnly ? t("VIEW_YAML") : t("EDIT_YAML");
                const icon = readOnly ? "eye" : "pen";
                return <Module788 icon={icon} title={title} bodyClassName={module3(module31({}, module2068.readOnly, readOnly))} onOk={this.handleOk} onCancel={onCancel} okText={t("OK")} visible={visible} closable={readOnly} hideFooter={readOnly} isSubmitting={isSubmitting} fullScreen>{this.state.value && <Module885 ref={this.editor} editorClassName={module2068.editor} value={this.state.value} readOnly={readOnly}/>}</Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    detail: module1.object,
    yaml: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool,
    readOnly: module1.bool
};
b.defaultProps = {
    visible: false,
    isSubmitting: false,
    readOnly: false,
    detail: {},
    onOk: function() {},
    onCancel: function() {}
};
