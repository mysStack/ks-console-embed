import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import Module4074 from "components/Layout/GlobalNav/item";
import module1846 from "unpacked/module-1846.js";
const v = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(...l) {
        let e;
        module36(this, a);
        e = t.call(this, ...l);
        e.state = {
            hoverNav: module26(e.props, "navs[0].name", "")
        };
        e.handleHover = function(t) {
            e.setState({
                hoverNav: t.currentTarget.dataset.name
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, navs, onCancel } = props;
                const hoverNav = this.state.hoverNav;
                return <Module788 visible={visible} className={module1846.modal} bodyClassName={module1846.body} width="100%" onCancel={onCancel} hideHeader hideFooter><div><div className={module1846.navs} onClick={onCancel}>{navs.map((t)=><Module4074 key={t.name} data={t} isHover={hoverNav === t.name} onHover={_this.handleHover} closeModal={t.actions ? onCancel : undefined}/>)}</div><module186.Icon className={module1846.close} name="close" size="medium" type="light" clickable onClick={onCancel}/></div></Module788>;
            }
        }
    ]);
    return a;
})(Component);
v.propTypes = {
    navs: module1.array.isRequired,
    visible: module1.bool,
    onCancel: module1.func
};
v.defaultProps = {
    navs: [],
    visible: false,
    onCancel: function() {}
};
export default v;
