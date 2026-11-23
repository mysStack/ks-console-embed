import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
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
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import Module1616 from "./module-1616.js";
import Module836 from "components/Base/Image";
import module26 from "./module-26.js";
import { getBrowserLang } from "utils/index";
import module3180 from "./module-3180.js";
import module186 from "./module-186.js";
import Module1374 from "./module-1374.js";
import Module3187 from "./module-3187.js";
import Module3192 from "./module-3192.js";
import module3202 from "./module-3202.js";
const D = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.appStore = new module3180;
        e.state = {
            step: {
                count: 1,
                hideFooter: true
            }
        };
        e.showDeploy = function() {
            e.setState({
                step: {
                    count: 2,
                    hideFooter: false,
                    okText: t("NEXT"),
                    onOk: e.showDeployNext
                }
            });
        };
        e.showDeployNext = function() {
            e.setState({
                step: {
                    ...e.state.step,
                    count: 3,
                    onFormOk: function() {
                        return e.setState({
                            step: {
                                ...e.state.step,
                                okText: t("INSTALL"),
                                onOk: e.handleDeploy,
                                onPrev: e.showDeploy,
                                next: null
                            }
                        });
                    },
                    next: e.state.step.count === 3
                }
            });
        };
        e.handleDeploy = function() {
            e.setState({
                step: {
                    count: 4,
                    hideFooter: false,
                    okText: t("INSTALL"),
                    onOk: e.handleDeploy,
                    onPrev: e.showDeploy,
                    next: {}
                }
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.appStore.fetchDetail({
                    app_id: this.props.detail.app_id
                }).then(()=>_this.forceUpdate());
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, onDeploy: _onDeploy, detail, ...rest } = props;
                const { name, icon } = detail;
                const s = module26(globals.user, "lang") || getBrowserLang();
                const i = module26(detail, `description_${s}`, detail.description);
                const step = this.state.step;
                const d = this.appStore.isLoading ? <module186.Loading className={module3202.loading}/> : <>{step.count === 1 && <Module3187 showDeploy={this.showDeploy} detail={detail} appStore={this.appStore} {...rest}/>}{step.count !== 1 && <Module3192 appStore={this.appStore} stepCount={step.count - 2} next={step.next} onFormOk={step.onFormOk} {...rest}/>}</>;
                return <Module1374 width={1070} className={module3202.modal} visible={visible} onCancel={onCancel} rightScreen customTitle=<div className={module3202.intro}><span className={module3202.icon}><Module836 iconSize={48} iconLetter={name} src={icon} alt=""/></span><div className={module3202.text}><div><span>{name}</span><Module1616 iconSize={32} isShowTip={false} app={detail}/></div><p>{i}</p></div></div> hideFooter={step.hideFooter} {...rest} {...step}>{d}</Module1374>;
            }
        }
    ]);
    return r;
})(Component);
export default D;
D.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
D.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
