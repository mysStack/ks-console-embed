import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-109.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { PureComponent } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module2403 from "./module-2403.js";
const v = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
        t.getIconColr = function() {
            const e = {
                primary: "#fff"
            };
            t.props.type;
            e.secondary = "#329dce";
            return e;
        };
        t.handleCancel = function() {
            t.setState({
                show: false
            }, function() {
                var e = setTimeout(()=>{
                    t.props.onCancel();
                    clearTimeout(e);
                }, 1000);
            });
        };
        t.state = {
            show: e.visible
        };
        return t;
    }
    module37(r, [
        {
            key: "renderBtns",
            value: function() {
                const props = this.props;
                const { btns, confirmText, cancelText, onConfirm, isSubmitting } = props;
                return btns || <div><module186.Button onClick={this.handleCancel}>{t(cancelText)}</module186.Button><module186.Button type="control" onClick={onConfirm} loading={isSubmitting}>{t(confirmText)}</module186.Button></div>;
            }
        },
        {
            key: "renderCard",
            value: function() {
                let e;
                const props = this.props;
                const { visible, width, title, content } = props;
                if (!visible) {
                    return null;
                }
                const show = this.state.show;
                const style = {
                    width
                };
                return <div className={module3(module2403.card, (e = {}, module31(e, module2403.in, show), module31(e, module2403.out, !show), e))} style={style}><div className={module2403.cardMain}><div className={module2403.title}><module186.Icon name="information" size={20} color={this.getIconColr()}/><strong>{title}</strong></div><div className={module2403.content}>{content}</div></div><div className={module2403.cardFoot}>{this.renderBtns()}</div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module2403.wrapper}>{this.renderCard()}</div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.visible !== t.show) {
                    return {
                        show: e.visible
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(PureComponent);
export default v;
v.propTypes = {
    visible: module1.bool,
    width: module1.number,
    type: module1.string,
    title: module1.string,
    content: module1.oneOfType([
        module1.node,
        module1.element
    ]),
    btns: module1.oneOfType([
        module1.node,
        module1.element
    ]),
    confirmText: module1.string,
    cancelText: module1.string,
    onConfirm: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
v.defaultProps = {
    visible: false,
    isSubmitting: false,
    width: "auto",
    type: "info",
    title: "title",
    content: "content",
    confirmText: "OK",
    cancelText: "CANCEL",
    onConfirm: function() {},
    onCancel: function() {}
};
