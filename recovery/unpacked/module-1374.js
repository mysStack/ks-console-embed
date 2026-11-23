import "./module-12.js";
import "./module-135.js";
import "./module-11.js";
import "./module-6.js";
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
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module31 from "./module-31.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import module159 from "./module-159.js";
import module194 from "./module-194.js";
import { Component } from "./module-553.js";
import module106 from "./module-106.js";
import Module1266 from "./module-1266.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import Module836 from "./module-836.js";
import Module791 from "./module-791.js";
import module3178 from "./module-3178.js";
Module1266.defaultStyles.overlay = {
    ...Module1266.defaultStyles.overlay,
    padding: 0,
    minWidth: 500,
    backgroundColor: "rgba(35, 45, 65, 0.7)",
    zIndex: 2000,
    overflow: "auto"
};
Module1266.defaultStyles.content = {
    ...module189(Module1266.defaultStyles.content, [
        "top",
        "left",
        "right",
        "bottom",
        "padding"
    ]),
    width: 744,
    position: "relative",
    margin: "0 auto"
};
const k = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "renderTitle",
            value: function() {
                const props = this.props;
                const { icon, imageIcon, title, description } = props;
                const l = props.rightScreen ? 48 : module159(description) ? 20 : 40;
                return <div className={module3178.title}>{imageIcon ? <label className={module3178.image}><Module836 src={imageIcon} iconLetter={imageIcon} iconSize={l}/></label> : icon && <module186.Icon name={icon} size={l}/>}<Module791 title={title} description={description}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                let e;
                const props = this.props;
                const { className, width, visible, children, hideFooter, onOk, onCancel, onPrev, okText, cancelText, okButtonType, cancelButtonType, closable, operations, headerClassName, bodyClassName, footerClassName, fullScreen, rightScreen, maskClosable, isSubmitting, icon, imageIcon, disableSubmit, customTitle, okTooltip, ...rest } = props;
                const style = {
                    content: {}
                };
                const V = (icon || imageIcon) && rightScreen;
                if (!(fullScreen || rightScreen)) {
                    style.content.width = width;
                }
                const G = customTitle || <>{this.renderTitle()}{V && <div className={module3178.iconBg}>{imageIcon ? <Module836 src={imageIcon} iconLetter={imageIcon} iconSize={200}/> : <module186.Icon name={icon} size={200}/>}</div>}</>;
                const B = <module186.Button type={okButtonType} loading={isSubmitting} disabled={disableSubmit || isSubmitting} onClick={onOk} data-test="modal-ok">{okText || t("OK")}</module186.Button>;
                return <Module1266 className={module3(module3178.modal, className, (e = {}, module31(e, module3178.fullscreen, fullScreen), module31(e, module3178.rightScreen, rightScreen), e))} style={style} isOpen={visible} onRequestClose={onCancel} ariaHideApp={false} closeTimeoutMS={0} shouldCloseOnOverlayClick={maskClosable} {...rest}><div className={module3(module3178.header, headerClassName)}>{G}{operations}{closable && <module186.Button className={module3178.close} icon="close" iconType="light" type="control" onClick={onCancel} data-test="modal-close"/>}</div><div className={module3(module3178.body, bodyClassName, module31({}, module3178.hideFooter, hideFooter))}>{children}</div>{!hideFooter && <div className={module3(module3178.footer, footerClassName)}>{onPrev ? <module186.Button type={cancelButtonType} onClick={onPrev} data-test="modal-cancel">{t("PREVIOUS")}</module186.Button> : onCancel && <module186.Button type={cancelButtonType} onClick={onCancel} data-test="modal-cancel">{cancelText || t("CANCEL")}</module186.Button>}{onOk && (okTooltip ? <module186.Tooltip content=<div>{okTooltip}</div>><span style={{
                    display: "inline-block",
                    marginLeft: "10px"
                }}>{B}</span></module186.Tooltip> : B)}</div>}</Module1266>;
            }
        }
    ]);
    return r;
})(Component);
export default k;
k.propTypes = {
    className: module1.string,
    headerClassName: module1.string,
    bodyClassName: module1.string,
    footerClassName: module1.string,
    icon: module1.string,
    title: module1.oneOfType([
        module1.node,
        module1.string
    ]),
    description: module1.oneOfType([
        module1.node,
        module1.string
    ]),
    width: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    visible: module1.bool,
    okText: module1.string,
    cancelText: module1.string,
    okButtonType: module1.string,
    cancelButtonType: module1.string,
    onOk: module1.func,
    onCancel: module1.func,
    renderFooter: module1.func,
    children: module1.any,
    hideFooter: module1.bool,
    closable: module1.bool,
    maskClosable: module1.bool,
    fullScreen: module1.bool,
    rightScreen: module1.bool,
    disableSubmit: module1.bool,
    customTitle: module1.node,
    onPrev: module1.func
};
k.defaultProps = {
    className: "",
    width: 600,
    visible: false,
    hideFooter: false,
    closable: true,
    maskClosable: false,
    fullScreen: false,
    rightScreen: false,
    isSubmitting: false,
    okButtonType: "control",
    cancelButtonType: "default",
    disableSubmit: false
};
k.open = function(e) {
    const divElement = document.createElement("div");
    document.body.appendChild(divElement);
    document.activeElement.blur();
    const onCancel = function() {
        if (module194(e.onCancel)) {
            e.onCancel();
        }
        k.close(divElement);
    };
    const Modal = e.modal;
    const N = observer(function() {
        return <Modal {...module189(e, "modal", "onCancel")} isSubmitting={module26(e, "store.isSubmitting")} onCancel={onCancel} visible/>;
    });
    module106.render(<N/>, divElement);
    return divElement;
};
k.close = function(e) {
    if (module106.unmountComponentAtNode(e) && e.parentNode) {
        e.parentNode.removeChild(e);
    }
};
