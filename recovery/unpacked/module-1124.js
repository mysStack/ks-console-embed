import "./module-12.js";
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
import "./module-31.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module3 from "./module-3.js";
import Module1170 from "./module-1170.js";
import Module1101 from "./module-1101.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import { Component } from "./module-553.js";
import module1720 from "./module-1720.js";
import Module3223 from "./module-3223.js";
import Module3227 from "./module-3227.js";
import module3274 from "./module-3274.js";
let l;
let u;
let o;
let i;
let c;
let s;
let f;
function P(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const A = {
    json: {
        pipeline: {
            stages: [],
            agent: {
                type: "any"
            }
        }
    }
};
const j = observer((f = s = ((Component_1)=>{
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
        module65(t, "clearFocus", o, module88(t));
        module65(t, "handleContinue", i, module88(t));
        module65(t, "handleDiscard", c, module88(t));
        t.state = {};
        if (e.isEditMode) {
            t.store = new module3274;
            t.store.params = e.params;
            const n = e.params;
            const { devops, name, cluster } = n;
            t.prevData = JSON.parse(localStorage.getItem(`${globals.user.username}-${devops}-${name}`));
            t.store.fetchLabel({
                cluster
            });
            if (module63(e.jsonData)) {
                t.store.setData(t.prevData || A);
            } else {
                t.store.jsonData = {
                    ...e.jsonData
                };
                if (t.prevData) {
                    t.state = {
                        showConfirmPrevdata: true
                    };
                }
            }
        }
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { isEditMode, className, isSubmitting } = props;
                const cluster = (this.props?.params ?? {}).cluster;
                return <div className={module3(module1720.content, "pipeline-content", className)}><Module1170 enableToggleFullScreen={!isEditMode} XOffset={30} YOffset={60} onClick={this.clearFocus}><Module3223 store={this.store} isEditMode={isEditMode} stages={this.stages}/></Module1170>{isEditMode ? <Module3227 store={this.store} onOk={this.props.onOk} onCancel={this.props.onCancel} isSubmitting={isSubmitting} cluster={cluster} trigger={this.props.trigger}/> : null}<Module1101 visible={this.state.showConfirmPrevdata} width={400} title={t("LoadPrevData_Desc")} content="" cancelText={t("Discard")} confirmText={t("Continue")} onCancel={this.handleDiscard} onConfirm={this.handleContinue}/></div>;
            }
        },
        {
            key: "stages",
            get: function() {
                const props = this.props;
                const { isEditMode, jsonData } = props;
                if (isEditMode) {
                    return this.store.stages;
                }
                return module26(jsonData, "json.pipeline.stages", []);
            }
        }
    ]);
    return r;
})(Component), s.defaultProps = {
    onOK: function() {},
    onCancel: function() {}
}, u = f, o = module49(u.prototype, "clearFocus", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            if (_this.props.isEditMode) {
                _this.store.clearFocus();
            }
        };
    }
}), i = module49(u.prototype, "handleContinue", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            const params = _this.props.params;
            const { devops, name } = params;
            _this.setState({
                showConfirmPrevdata: false
            });
            _this.store.setData(_this.prevData);
            localStorage.removeItem(`${globals.user.username}-${devops}-${name}`);
        };
    }
}), c = module49(u.prototype, "handleDiscard", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            const params = _this.props.params;
            const { devops, name } = params;
            _this.setState({
                showConfirmPrevdata: false
            });
            localStorage.removeItem(`${globals.user.username}-${devops}-${name}`);
        };
    }
}), l = u)) || l;
export default j;
