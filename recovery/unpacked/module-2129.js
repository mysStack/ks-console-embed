import module_1 from "./module-1.js";
import module2130 from "./module-2130.js";
import module2132 from "./module-2132.js";
import { Component } from "./module-553.js";
import Module1502 from "./module-1502.js";
import "./module-1503.js";
((module_1_1)=>{
    if (module_1_1 && module_1_1.__esModule) {
        return module_1_1;
    }
    const t = {};
    if (module_1_1 != null) {
        for(const n in module_1_1){
            if (Object.prototype.hasOwnProperty.call(module_1_1, n)) {
                const r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(module_1_1, n) : {};
                if (r.get || r.set) {
                    Object.defineProperty(t, n, r);
                } else {
                    t[n] = module_1_1[n];
                }
            }
        }
    }
    t.default = module_1_1;
})(module_1);
const s = (e, t)=>e && t && t.split(" ").forEach((t)=>module2130(e, t));
const c = (e, t)=>e && t && t.split(" ").forEach((t)=>module2132(e, t));
const f = ((Component_1)=>{
    let t;
    let n;
    function r(...r_1) {
        let t;
        t = Component_1.call(this, ...r_1) || this;
        t.onEnter = function(e, n) {
            const className = t.getClassNames(n ? "appear" : "enter").className;
            t.removeClasses(e, "exit");
            s(e, className);
            if (t.props.onEnter) {
                t.props.onEnter(e, n);
            }
        };
        t.onEntering = function(e, n) {
            const activeClassName = t.getClassNames(n ? "appear" : "enter").activeClassName;
            t.reflowAndAddClass(e, activeClassName);
            if (t.props.onEntering) {
                t.props.onEntering(e, n);
            }
        };
        t.onEntered = function(e, n) {
            const doneClassName = t.getClassNames("appear").doneClassName;
            const doneClassName_1 = t.getClassNames("enter").doneClassName;
            const i = n ? `${doneClassName} ${doneClassName_1}` : doneClassName_1;
            t.removeClasses(e, n ? "appear" : "enter");
            s(e, i);
            if (t.props.onEntered) {
                t.props.onEntered(e, n);
            }
        };
        t.onExit = function(e) {
            const className = t.getClassNames("exit").className;
            t.removeClasses(e, "appear");
            t.removeClasses(e, "enter");
            s(e, className);
            if (t.props.onExit) {
                t.props.onExit(e);
            }
        };
        t.onExiting = function(e) {
            const activeClassName = t.getClassNames("exit").activeClassName;
            t.reflowAndAddClass(e, activeClassName);
            if (t.props.onExiting) {
                t.props.onExiting(e);
            }
        };
        t.onExited = function(e) {
            const doneClassName = t.getClassNames("exit").doneClassName;
            t.removeClasses(e, "exit");
            s(e, doneClassName);
            if (t.props.onExited) {
                t.props.onExited(e);
            }
        };
        t.getClassNames = function(e) {
            const classNames = t.props.classNames;
            const r = typeof classNames === "string";
            const className = r ? (r && classNames ? `${classNames}-` : "") + e : classNames[e];
            return {
                className,
                activeClassName: r ? `${className}-active` : classNames[`${e}Active`],
                doneClassName: r ? `${className}-done` : classNames[`${e}Done`]
            };
        };
        return t;
    }
    n = Component_1;
    t = r;
    t.prototype = Object.create(n.prototype);
    t.prototype.constructor = t;
    t.__proto__ = n;
    const r_prototype = r.prototype;
    r_prototype.removeClasses = function(e, t) {
        const n = this.getClassNames(t);
        const { className, activeClassName, doneClassName } = n;
        if (className) {
            c(e, className);
        }
        if (activeClassName) {
            c(e, activeClassName);
        }
        if (doneClassName) {
            c(e, doneClassName);
        }
    };
    r_prototype.reflowAndAddClass = function(e, t) {
        if (t) {
            e && e.scrollTop;
            s(e, t);
        }
    };
    r_prototype.render = function() {
        const e = {
            ...this.props
        };
        delete e.classNames;
        return <Module1502 {...e} onEnter={this.onEnter} onEntered={this.onEntered} onEntering={this.onEntering} onExit={this.onExit} onExiting={this.onExiting} onExited={this.onExited}/>;
    };
    return r;
})(Component);
f.defaultProps = {
    classNames: ""
};
f.propTypes = {};
export default f;
