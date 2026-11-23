import module1 from "./module-1.js";
import { Component } from "./module-553.js";
import { polyfill } from "./module-1151.js";
import { getChildMapping, getInitialChildMapping, getNextChildMapping } from "./module-2134.js";
function s(e) {
    if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
}
const c = Object.values || ((e)=>Object.keys(e).map((t)=>e[t]));
const f = ((Component_1)=>{
    let t;
    let n;
    function r(t, n) {
        let r;
        const handleExited = (r = Component_1.call(this, t, n) || this).handleExited.bind(s(s(r)));
        r.state = {
            handleExited,
            firstRender: true
        };
        return r;
    }
    n = Component_1;
    t = r;
    t.prototype = Object.create(n.prototype);
    t.prototype.constructor = t;
    t.__proto__ = n;
    const r_prototype = r.prototype;
    r_prototype.getChildContext = function() {
        return {
            transitionGroup: {
                isMounting: !this.appeared
            }
        };
    };
    r_prototype.componentDidMount = function() {
        this.appeared = true;
        this.mounted = true;
    };
    r_prototype.componentWillUnmount = function() {
        this.mounted = false;
    };
    r.getDerivedStateFromProps = function(e, t) {
        const { children, handleExited } = t;
        return {
            children: t.firstRender ? getInitialChildMapping(e, handleExited) : getNextChildMapping(e, children, handleExited),
            firstRender: false
        };
    };
    r_prototype.handleExited = function(e, t) {
        const n = getChildMapping(this.props.children);
        if (!(e.key in n)) {
            if (e.props.onExited) {
                e.props.onExited(t);
            }
            if (this.mounted) {
                this.setState(function(t) {
                    const children = {
                        ...t.children
                    };
                    delete children[e.key];
                    return {
                        children
                    };
                });
            }
        }
    };
    r_prototype.render = function() {
        const props = this.props;
        const { component: Component, childFactory } = props;
        const r = ((props_1, t)=>{
            if (props_1 == null) {
                return {};
            }
            let n;
            let r;
            const o = {};
            const i = Object.keys(props_1);
            for(r = 0; r < i.length; r++){
                n = i[r];
                if (!(t.indexOf(n) >= 0)) {
                    o[n] = props_1[n];
                }
            }
            return o;
        })(props, [
            "component",
            "childFactory"
        ]);
        const i = c(this.state.children).map(childFactory);
        delete r.appear;
        delete r.enter;
        delete r.exit;
        if (Component === null) {
            return i;
        }
        return <Component {...r}>{i}</Component>;
    };
    return r;
})(Component);
f.childContextTypes = {
    transitionGroup: module1.object.isRequired
};
f.propTypes = {};
f.defaultProps = {
    component: "div",
    childFactory: function(e) {
        return e;
    }
};
const d = polyfill(f);
export default d;
